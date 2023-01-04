import { Response, NextFunction } from 'express';

import { IBear } from '@honey-heist/model';
import { ModelRequest } from '../types';
import { addBear } from '../services';

export async function createBear(
  req: ModelRequest<IBear>,
  res: Response,
  next: NextFunction,
) {
  const bear = req.body;
  try {
    await addBear(bear);
    res.sendStatus(201);
    next();
  } catch (error) {
    res.sendStatus(500) && next(error);
  }
}
