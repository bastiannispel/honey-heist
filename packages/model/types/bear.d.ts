import IClothes, { ClothesData } from './clothes';
import ISerializable from './serializable';
import IStats, { StatsData } from './stats';

export default interface IBear extends ISerializable<BearData> {
  get descriptor(): Descriptor;
  get bearType(): BearType;
  get role(): Role;
  get clothes(): IClothes;
  get stats(): IStats;
}

export type BearData = {
  descriptor: Descriptor;
  bearType: BearType;
  role: Role;
  clothes: ClothesData;
  stats: StatsData;
};

type Descriptor = number;
type BearType = number;
type Role = number;
