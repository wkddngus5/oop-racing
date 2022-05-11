import Car from './Car';
import NumberValue from './NumberValue';

describe('Car', () => {
  it('getNextDistance returns a natural number or 0', () => {
    const car = new Car();
  
    const distance = car.getNextDistance();

    expect(new NumberValue(distance).isNatural || distance === 0).toBeTruthy();
  });


  it('getNextDistance returns a number than greater then prev distance or same', () => {
    const car = new Car();
  
    const prevDistance = car.getNextDistance();
    const currentDistance = car.getNextDistance();

    expect(prevDistance <= currentDistance).toBeTruthy();
  });
});
