import { rollDice6 } from '../utility/random';

import IBear, { Descriptor, BearType, Role, BearData } from '../types/bear';
import IClothes from '../types/clothes';
import IStats from '../types/stats';

import Clothes from './clothes';
import Stats from './stats';

export default class Bear implements IBear {
  private _descriptor: Descriptor;
  private _bearType: BearType;
  private _role: Role;
  private _clothes: IClothes;
  private _stats: IStats;

  constructor(bearData?: BearData) {
    this._descriptor = bearData?.descriptor ?? rollDice6();
    this._bearType = bearData?.bearType ?? rollDice6();
    this._role = bearData?.role ?? rollDice6();
    this._clothes = new Clothes(bearData?.clothes);
    this._stats = new Stats(bearData?.stats);
  }

  get descriptor(): Descriptor {
    return this._descriptor;
  }
  get bearType(): BearType {
    return this._bearType;
  }
  get role(): number {
    return this._role;
  }
  get clothes(): IClothes {
    return this._clothes;
  }
  get stats(): IStats {
    return this._stats;
  }
}
