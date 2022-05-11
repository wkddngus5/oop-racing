import Race from './Race';

const NATURAL_NUMBER = 1;
const NEGATIVE_NUMBER = -1;
const DECIMAL_NUMBER = 0.1;

describe('Race', () => {
  function createRace(carCount: number, sceneCount: number) {
    return new Race(carCount, sceneCount)
  }

  it('carCount must be natural number', () => {
    function getRaceMaker(carCount: number) {
      return () => new Race(carCount, NATURAL_NUMBER);
    }

    expect(getRaceMaker(NATURAL_NUMBER)).not.toThrowError();
    expect(getRaceMaker(NEGATIVE_NUMBER)).toThrowError();
    expect(getRaceMaker(DECIMAL_NUMBER)).toThrowError();
  });
  
  // it('second parameter must be a natural number', () => {

  // })
});
