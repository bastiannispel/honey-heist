import { IUser } from '@honey-heist/model';
import { NextFunction, Request, Response } from 'express';
import { RoleModel, UserModel } from '../database';
import { ModelRequest } from '../types';

export function checkDuplicateUsername(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  UserModel.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    } else if (user) {
      res.status(400).send({ message: 'Failed! Username is already in use!' });
    }
  });
  next();
}

export function checkDuplicateEmail(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  UserModel.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    } else if (user) {
      res.status(400).send({ message: 'Failed! Email is already in use!' });
    }
  });
  next();
}

export async function checkRolesExist(
  req: ModelRequest<IUser>,
  res: Response,
  next: NextFunction,
) {
  if (req.body.roles) {
    const roleIds = await RoleModel.find().then(roles => {
      return roles.map(role => role._id);
    });
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!roleIds.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role does not exist!`,
        });
        return;
      }
    }
  }
  next();
}
