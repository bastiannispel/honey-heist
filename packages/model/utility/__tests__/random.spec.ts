import { rollDice6, rollDice8 } from '../random';

describe('rollDice6', () => {
  it('result are between 1-6', () => {
    expect.hasAssertions();
    for (let i = 0; i < 100; i++) {
      const number = rollDice6();
      expect(number).toBeLessThanOrEqual(6);
      expect(number).toBeGreaterThanOrEqual(1);
    }
  });
});

describe('rollDice8', () => {
  it('result are between 1-8', () => {
    expect.hasAssertions();
    for (let i = 0; i < 100; i++) {
      const number = rollDice8();
      expect(number).toBeLessThanOrEqual(8);
      expect(number).toBeGreaterThanOrEqual(1);
    }
  });
});
