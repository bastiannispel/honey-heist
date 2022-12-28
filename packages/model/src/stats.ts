import IStats, { BearSkill, CriminalSkill, StatsData } from '../types/stats';

export default class Stats implements IStats {
  private _bear: BearSkill;
  private _criminal: CriminalSkill;

  constructor(statsData?: StatsData) {
    this._bear = statsData?.bear ?? 3;
    this._criminal = statsData?.criminal ?? 3;
  }
  serialize(): StatsData {
    return {
      bear: this._bear,
      criminal: this._criminal,
    };
  }

  get bear(): BearSkill {
    return this._bear;
  }
  get criminal(): CriminalSkill {
    return this._criminal;
  }

  addBearSkill(): void {
    this._bear += 1;
    this._criminal -= 1;
  }
  addCriminalSkill(): void {
    this._criminal += 1;
    this._bear -= 1;
  }
}
