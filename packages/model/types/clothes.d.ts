import ISerializable from './serializable';

export default interface IClothes extends ISerializable<ClothesData> {
  get topColor(): TopColor;
  get top(): Top;
  get pantsColor(): PantsColor;
  get pants(): Pants;
  get accessoire(): Accessoire;
}

export type ClothesData = {
  topColor: TopColor;
  top: Top;
  pantsColor: PantsColor;
  pants: Pants;
  accessoire: Accessoire;
};

export type TopColor = number;
export type Top = number;
export type PantsColor = number;
export type Pants = number;
export type Accessoire = number;
