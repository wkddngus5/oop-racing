class Race {
  cars = [];

  constructor(carCount: number, sceneCount: number) {
    if (carCount < 1) {
      throw new Error('차량 수는 자연수만 가능해요');
    }
    if (carCount % 1 !== 0) {
      throw new Error('차량 수는 자연수만 가능해요');
    }
  }

  get result() {
    return [];
  }
}

export default Race;


