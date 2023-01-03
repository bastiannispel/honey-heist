import { Schema } from 'mongoose';

export enum MentalState {
  Stable,
  Bear,
  Criminal,
}

export interface IStats {
  bear: number;
  criminal: number;
  state: MentalState;
}

export const statsSchema = new Schema<IStats>({
  bear: { type: Number, required: true, min: 0, max: 6, default: 3 },
  criminal: { type: Number, required: true, min: 0, max: 6, default: 3 },
  state: { type: Number, required: true, min: 0, max: 2, default: 0 },
});
