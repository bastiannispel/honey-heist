import IStats, {
  BearSkill,
  CriminalSkill,
  MentalState,
  StatsData,
} from '../types/stats';

export default class Stats implements IStats {
  private _bear: BearSkill;
  private _criminal: CriminalSkill;
  private _state: MentalState;

  constructor(statsData?: StatsData) {
    this._bear = statsData?.bear ?? 3;
    this._criminal = statsData?.criminal ?? 3;
    this._state = statsData?.state ?? MentalState.Stable;
  }

  serialize(): StatsData {
    return {
      bear: this.bear,
      criminal: this.criminal,
      state: this.state,
    };
  }

  get bear(): BearSkill {
    return this._bear;
  }
  get criminal(): CriminalSkill {
    return this._criminal;
  }
  get state(): MentalState {
    return this._state;
  }

  addBearSkill(): void {
    this._bear += 1;
    this._criminal -= 1;
    if (this.bear == 6) {
      this.flipOut();
    }
  }
  addCriminalSkill(): void {
    this._criminal += 1;
    this._bear -= 1;
    if (this.criminal == 6) {
      this.betrayParty();
    }
  }

  flipOut(): void {
    this._state = MentalState.Bear;
  }
  betrayParty(): void {
    this._state = MentalState.Criminal;
  }
}
