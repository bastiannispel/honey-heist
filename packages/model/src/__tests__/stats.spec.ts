import { MentalState, StatsData } from '../../types';
import Stats from '../stats';

describe('constructor calls', () => {
  it('constructor()', () => {
    expect.hasAssertions();
    expect(new Stats()).toBeDefined();
  });

  it('constructor(clothesData)', () => {
    expect.hasAssertions();
    const stats = new Stats(statsData);
    expect(statsData).toStrictEqual(stats.serialize());
  });
});

describe('add bear skillpoint', () => {
  it('add in range', () => {
    expect.hasAssertions();
    const stats = new Stats(statsData);
    stats.addBearSkill();
    expect(stats.bear).toBe(statsData.bear + 1);
    expect(stats.criminal).toBe(statsData.criminal - 1);
    expect(stats.state).toBe(MentalState.Stable);
  });
  it('freak out', () => {
    expect.hasAssertions();
    const stats = new Stats({
      bear: 5,
      criminal: 1,
      state: MentalState.Stable,
    });
    stats.addBearSkill();
    expect(stats.state).toBe(MentalState.Bear);
  });
});

describe('add crimnial skillpoint', () => {
  it('add in range', () => {
    expect.hasAssertions();
    const stats = new Stats(statsData);
    stats.addCriminalSkill();
    expect(stats.bear).toBe(statsData.bear - 1);
    expect(stats.criminal).toBe(statsData.criminal + 1);
    expect(stats.state).toBe(MentalState.Stable);
  });
  it('betray party', () => {
    expect.hasAssertions();
    const stats = new Stats({
      bear: 1,
      criminal: 5,
      state: MentalState.Stable,
    });
    stats.addCriminalSkill();
    expect(stats.state).toBe(MentalState.Criminal);
  });
});

const statsData: StatsData = {
  bear: 3,
  criminal: 3,
  state: MentalState.Stable,
};
