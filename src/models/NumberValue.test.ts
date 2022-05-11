import NumberValue from './NumberValue';

const context = describe;

describe('NumberValue', () => {
  it('isNatural returns true', () => {
    const numberValue = new NumberValue(1);
  
    expect(numberValue.isNatural).toBeTruthy();
  });

  context('when some decimal number is given', () => {
    it('isNatural returns false', () => {
      const numberValue = new NumberValue(1.1);
    
      expect(numberValue.isNatural).toBeFalsy();
    });
  });

  context('when some negative number is given', () => {
    it('isNatural returns false', () => {
      const numberValue = new NumberValue(-1);
    
      expect(numberValue.isNatural).toBeFalsy();
    });
  });
});
