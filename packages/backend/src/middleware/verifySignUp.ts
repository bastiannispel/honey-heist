import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../database';

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
