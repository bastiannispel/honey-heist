import Bear from '../bear';

describe('bearClass', () => {
  it('init', () => {
    expect.hasAssertions();
    const bear = new Bear();
    expect(bear).toBeDefined();
  });
});
