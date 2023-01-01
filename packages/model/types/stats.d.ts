import ISerializable from './serializable';

export default interface IStats extends ISerializable<StatsData> {
  get bear(): BearSkill;
  get criminal(): CriminalSkill;
  get state(): MentalState;

  addBearSkill(): void;
  addCriminalSkill(): void;
  flipOut(): void;
  betrayParty(): void;
}

export type StatsData = {
  bear: BearSkill;
  criminal: CriminalSkill;
  state: MentalState;
};

export type BearSkill = number;
export type CriminalSkill = number;
export const enum MentalState {
  Stable,
  Bear,
  Criminal,
}
