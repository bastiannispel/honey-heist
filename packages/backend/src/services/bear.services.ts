/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { IBear } from '@honey-heist/model';
import { BearModel } from '../database/models';

export async function findBearById(id: string) {
  return BearModel.findById(id);
}

export async function addBear(bear: IBear) {
  const model = new BearModel(bear);
  return model.save();
}

export async function updateBearById(id: string, bear: IBear) {
  const filter = { _id: id };
  return BearModel.findOneAndUpdate(filter, bear, { runValidators: true });
}

export async function deleteBearById(id: string) {
  return BearModel.findByIdAndDelete(id);
}
