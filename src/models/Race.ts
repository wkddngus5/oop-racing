import Car from './Car';
import NumberValue from './NumberValue';
import _ from './_';

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

    this.cars = _.range(carCount).map(() => new Car());
    this.sceneCount = sceneCount;
  }

  get result(): number[][] {
    return _
      .range(this.sceneCount)
      .map(() => this.cars.map(car => car.getNextDistance()));
  }
}

export default Race;


