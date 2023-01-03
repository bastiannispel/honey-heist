import mongoose, { Schema } from 'mongoose';
import { clothesSchema, IClothes, IStats, statsSchema } from '.';

export interface IBear {
  descriptor: number;
  bearType: number;
  role: number;
  clothes: IClothes;
  stats: IStats;
}

export const bearSchema = new Schema<IBear>({
  descriptor: { type: Number, required: true },
  bearType: { type: Number, required: true },
  role: { type: Number, required: true },
  clothes: clothesSchema,
  stats: statsSchema,
});

export const BearModel = mongoose.model('Bear', bearSchema);
