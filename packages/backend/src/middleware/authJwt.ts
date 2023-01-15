import { IRole, IUser } from '@honey-heist/model';
import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Error } from 'mongoose';

import { RoleModel, UserModel } from '../database';
import { ModelRequest } from '../types';

export function verifyToken(
  req: ModelRequest<IUser>,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers['x-access-token'];
  if (!token || token instanceof Array) {
    res.status(403).send({ message: 'No token provided!' });
    return;
  }
  const jwt_secret = process.env.JWT_SECRET;
  if (!jwt_secret) {
    res.sendStatus(500);
    return;
  }
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: 'Unauthorized!' });
      return;
    }
    console.log(decoded);
    if (!decoded || !(typeof decoded == 'string')) {
      res.status(401).send({ message: 'Unauthorized!' });
      return;
    }
    // req.body._id = decoded;
    next();
  });
}

function verifyRole(
  roleName: string,
  req: ModelRequest<IUser>,
  res: Response,
  next: NextFunction,
) {
  UserModel.findById(req.body._id).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    void RoleModel.find(
      { _id: { $in: user?.roles } },
      (err: Error, roles: IRole[]) => {
        if (err) {
          res.status(500).send({ message: err.message });
          return;
        }
        roles.forEach(role => {
          if (role.name === roleName) {
            next();
            return;
          }
        });
        res.status(403).send({ message: `Require ${roleName} Role!` });
        return;
      },
    );
  });
}

export function isAdmin(
  req: ModelRequest<IUser>,
  res: Response,
  next: NextFunction,
) {
  verifyRole('admin', req, res, next);
}

export function isModerator(
  req: ModelRequest<IUser>,
  res: Response,
  next: NextFunction,
) {
  verifyRole('moderator', req, res, next);
}
