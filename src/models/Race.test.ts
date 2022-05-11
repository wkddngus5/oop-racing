import Race from './Race';

const NATURAL_NUMBER = 1;
const NEGATIVE_NUMBER = -1;
const DECIMAL_NUMBER = 0.1;

describe('Race', () => {
  it('carCount must be natural number', () => {
    function getRaceMaker(carCount: number) {
      return () => new Race(carCount, NATURAL_NUMBER);
    }

    expect(getRaceMaker(NATURAL_NUMBER)).not.toThrowError();
    expect(getRaceMaker(NEGATIVE_NUMBER)).toThrowError();
    expect(getRaceMaker(DECIMAL_NUMBER)).toThrowError();
  });

  it('sceneCount must be natural number', () => {
    function getRaceMaker(sceneCount: number) {
      return () => new Race(NATURAL_NUMBER, sceneCount);
    }

    expect(getRaceMaker(NATURAL_NUMBER)).not.toThrowError();
    expect(getRaceMaker(NEGATIVE_NUMBER)).toThrowError();
    expect(getRaceMaker(DECIMAL_NUMBER)).toThrowError();
  });

  it('result must have length as sceneCount', () => {
    const carCount = 5;
    const sceneCount = 3;

    expect(new Race(carCount, sceneCount).result.length).toBe(sceneCount);
  });

  it('every result scenes must have length as carCount', () => {
    const carCount = 5;
    const sceneCount = 3;

    expect(new Race(carCount, sceneCount).result.every(scene => scene.length === carCount)).toBeTruthy();
  });
});
