import mongoose, { Schema } from 'mongoose';
import {
  clothesSchema,
  dice6SchemaOptions,
  IClothes,
  IStats,
  statsSchema,
} from '.';

export interface IBear {
  descriptor: number;
  bearType: number;
  role: number;
  clothes: IClothes;
  stats: IStats;
}

export const bearSchema = new Schema<IBear>({
  descriptor: dice6SchemaOptions,
  bearType: dice6SchemaOptions,
  role: dice6SchemaOptions,
  clothes: clothesSchema,
  stats: statsSchema,
});

export const BearModel = mongoose.model('Bear', bearSchema);
