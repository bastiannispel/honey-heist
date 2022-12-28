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

type TopColor = number;
type Top = number;
type PantsColor = number;
type Pants = number;
type Accessoire = number;
