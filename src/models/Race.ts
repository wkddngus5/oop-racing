import Car from './Car';
import NumberValue from './NumberValue';

class Race {
  cars: Car[] = [];
  sceneCount = 1;

  constructor(carCount: number, sceneCount: number) {
    if (!(new NumberValue(carCount)).isNatural) {
      throw new Error('차량 수는 자연수만 가능해요');
    }
    if (!(new NumberValue(sceneCount)).isNatural) {
      throw new Error('전진 시도 횟수는 자연수만 가능해요');
    }

    this.cars = new Array(carCount).fill(null).map(() => new Car());
    this.sceneCount = sceneCount;
  }

  get result(): number[][] {
    return (new Array(this.sceneCount))
      .fill(null)
      .map(() => this.cars.map(car => car.getNextDistance()));
  }
}

export default Race;


