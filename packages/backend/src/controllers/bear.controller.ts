/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response, NextFunction } from 'express';

import { IBear } from '@honey-heist/model';
import { ModelRequest } from '../types';
import { addBear, fetchBear, removeBear, updateBear } from '../services';

export async function getBear(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const bear = await fetchBear(id);
    res.status(200).send(bear);
    next();
  } catch (error) {
    res.sendStatus(500) && next(error);
  }
}

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

export async function putBear(
  req: Request<{ id: string }, object, IBear>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const bear = req.body;
    console.log(bear);
    await updateBear(id, bear);
    res.sendStatus(201);
    next();
  } catch (error) {
    res.sendStatus(500) && next(error);
  }
}

export async function deleteBear(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    await removeBear(id);
    res.sendStatus(204);
    next();
  } catch (error) {
    res.sendStatus(500) && next(error);
  }
}
