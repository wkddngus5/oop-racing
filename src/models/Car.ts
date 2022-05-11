let id = 1;

class Car {
  private distance: Generator<number>;
  id: number;

  constructor(initialDistance = 0) {
    this.id = id++;

    this.distance = (function* () {
      let distance = initialDistance;
      while(true) {
        const flag = Math.floor(Math.random() * 10);
        if (flag >= 4) {
          distance += 1;
        }
        yield distance;
      }  
    })();

  }

  getNextDistance(): number {
    return this.distance.next().value;
  }
}

export default Car;

