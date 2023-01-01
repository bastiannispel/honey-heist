import { BearData, MentalState } from '../../types';
import Bear from '../bear';

describe('constructor calls', () => {
  it('constructor()', () => {
    expect.hasAssertions();
    expect(new Bear()).toBeDefined();
  });

  it('constructor(bearData)', () => {
    expect.hasAssertions();
    const bear = new Bear(bearData);
    expect(bearData).toStrictEqual(bear.serialize());
  });
});

const bearData: BearData = {
  descriptor: 1,
  bearType: 2,
  role: 3,
  clothes: {
    topColor: 4,
    top: 5,
    pantsColor: 6,
    pants: 1,
    accessoire: NaN,
  },
  stats: {
    bear: 2,
    criminal: 3,
    state: MentalState.Stable,
  },
};
