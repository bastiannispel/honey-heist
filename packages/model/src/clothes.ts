import { Schema } from 'mongoose';
import { dice6SchemaOptions } from '.';

export interface IClothes {
  topColor: number;
  top: number;
  pantsColor: number;
  pants: number;
  accessoire?: number;
}

export const clothesSchema = new Schema<IClothes>({
  topColor: dice6SchemaOptions,
  top: dice6SchemaOptions,
  pantsColor: dice6SchemaOptions,
  pants: dice6SchemaOptions,
  accessoire: dice6SchemaOptions,
});
