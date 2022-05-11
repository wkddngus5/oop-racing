import Car from './Car';

class Race {
  cars: Car[] = [];
  sceneCount = 1;

  constructor(carCount: number, sceneCount: number) {
    if (carCount < 1) {
      throw new Error('차량 수는 자연수만 가능해요');
    }
    if (carCount % 1 !== 0) {
      throw new Error('차량 수는 자연수만 가능해요');
    }
    if (sceneCount < 1) {
      throw new Error('전진 시도 횟수는 자연수만 가능해요');
    }
    if (sceneCount % 1 !== 0) {
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


