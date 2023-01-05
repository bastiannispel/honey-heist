import { Schema } from 'mongoose';

export interface IClothes {
  topColor: number;
  top: number;
  pantsColor: number;
  pants: number;
  accessoire?: number;
}

export const clothesSchema = new Schema<IClothes>({
  topColor: { type: Number, required: true, min: 1, max: 6 },
  top: { type: Number, required: true, min: 1, max: 6 },
  pantsColor: { type: Number, required: true, min: 1, max: 6 },
  pants: { type: Number, required: true, min: 1, max: 6 },
  accessoire: { type: Number, required: true, min: 1, max: 6 },
});
