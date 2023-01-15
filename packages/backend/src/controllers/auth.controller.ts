import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import assert from 'assert';

import { IUser } from '@honey-heist/model';
import { ModelRequest } from '../types';
import { RoleModel, UserModel } from '../database';

export async function signUp(
  req: ModelRequest<IUser>,
  res: Response,
  next: NextFunction,
) {
  const user = new UserModel(req.body);
  user.password = bcrypt.hashSync(user.password);

  try {
    const role = await RoleModel.findOne({ name: 'user' });
    assert(role);
    user.roles = [role._id];
    await user.save();
    const msg = 'User was registered successfully!';
    res.status(201).send({ message: msg });
    next();
  } catch (err) {
    res.status(500).send(err);
    return;
  }
}

export async function signIn(
  req: ModelRequest<IUser>,
  res: Response,
  next: NextFunction,
) {
  const user = await UserModel.findOne({
    username: req.body.username,
  }).populate('roles');
  if (!user) {
    res.status(404).send('User not found');
    return;
  }

  const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
  if (!isPasswordValid) {
    res.status(401).send({
      accessToken: null,
      message: 'Invalid Password!',
    });
    return;
  }

  const jwt_secret = process.env.JWT_SECRET || 'undefined';
  const token = jwt.sign({ id: user._id }, jwt_secret, {
    expiresIn: 86400, // 24 hours
  });

  // const authorities = [];
  // for (let i = 0; i < user.roles.length; i++) {
  //   authorities.push(`ROLE_${user.roles[i].name.toUpperCase()}`);
  // }

  res.status(200).send({
    _id: user._id,
    username: user.username,
    email: user.email,
    // roles: authorities,
    accessToken: token,
  });
  next();
}
