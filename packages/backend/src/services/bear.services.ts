import { IBear } from '@honey-heist/model';
import { BearModel } from '../database/models.js';

export async function addBear(bear: IBear) {
  const model = new BearModel(bear);
  await model.save();
}

export async function getBear(id: string) {
  return BearModel.findById(id);
}
