import { ClothesData } from '../../types';
import Clothes from '../clothes';

describe('constructor calls', () => {
  it('constructor()', () => {
    expect.hasAssertions();
    expect(new Clothes()).toBeDefined();
  });

  it('constructor(clothesData)', () => {
    expect.hasAssertions();
    const clothes = new Clothes(clothesData);
    expect(clothesData).toStrictEqual(clothes.serialize());
  });
});

const clothesData: ClothesData = {
  topColor: 4,
  top: 5,
  pantsColor: 6,
  pants: 1,
  accessoire: NaN,
};
