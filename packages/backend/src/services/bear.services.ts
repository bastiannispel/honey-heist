/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { IBear } from '@honey-heist/model';
import { BearModel } from '../database/models.js';

export async function addBear(bear: IBear) {
  const model = new BearModel(bear);
  await model.save();
}

export async function getBear(id: string) {
  return BearModel.findById(id);
}
