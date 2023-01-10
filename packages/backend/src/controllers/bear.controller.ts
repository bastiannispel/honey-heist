import { Request, Response, NextFunction } from 'express';

import { IBear } from '@honey-heist/model';
import { ModelRequest } from '../types';
import { addBear, getBear } from '../services';

export async function createBear(
  req: ModelRequest<IBear>,
  res: Response,
  next: NextFunction,
) {
  try {
    await addBear(req.body);
    res.sendStatus(201);
    next();
  } catch (error) {
    res.sendStatus(500) && next(error);
  }
}

export async function fetchBear(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const bear = await getBear(id);
    res.status(200).send(bear);
    next();
  } catch (error) {
    res.sendStatus(500) && next(error);
  }
}
