import _ from './_';

const context = describe;

describe('_', () => {
  it('range returns range array', () => {
    const array = _.range(5);
  
    expect(array).toEqual([0, 1, 2, 3, 4]);
  });

  it('random returns a number between min and max', () => {
    const min = 1;
    const max = 10;
  
    const random = _.random(min, max);

    expect(random).toBeGreaterThanOrEqual(min);
    expect(random).toBeLessThanOrEqual(max);
  })

  context('when the random got just 1 parameter', () => {
    it('random returns a number between 0 and the parameter', () => {
      const max = 10;

      const random = _.random(max);

      expect(random).toBeGreaterThanOrEqual(0);
      expect(random).toBeLessThanOrEqual(max);
    });
  })
});
