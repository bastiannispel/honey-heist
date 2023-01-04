import { Schema } from 'mongoose';
import { clothesSchema, IClothes } from './clothes.js';
import { IStats, statsSchema } from './stats.js';

export interface IBear {
  descriptor: number;
  bearType: number;
  role: number;
  clothes: IClothes;
  stats: IStats;
}

export const bearSchema = new Schema<IBear>({
  descriptor: { type: Number, required: true, min: 1, max: 6 },
  bearType: { type: Number, required: true, min: 1, max: 6 },
  role: { type: Number, required: true, min: 1, max: 6 },
  clothes: clothesSchema,
  stats: statsSchema,
});
