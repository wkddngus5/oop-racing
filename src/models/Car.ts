import Position from './Position';

let id = 1;

class Car {
  private distance: Generator<number>;
  id: number;

  constructor(initialDistance = 0) {
    this.id = id++;

    this.distance = (function* () {
      let position = new Position(initialDistance);
      while(true) {
        const flag = Math.floor(Math.random() * 10);
        if (flag >= 4) {
          position = new Position(position.getX() + 1);
        }
        yield position.getX();
      }  
    })();

  }

  getNextDistance(): number {
    return this.distance.next().value;
  }
}

export default Car;

