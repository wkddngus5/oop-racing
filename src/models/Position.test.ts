import Position from './Position';

describe('Position', () => {
  it('getX returns position x', () => {
    const positionX = 1;
    
    const position = new Position(positionX);
  
    expect(position.getX()).toBe(positionX);
  });
});
