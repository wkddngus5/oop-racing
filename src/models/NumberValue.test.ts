import NumberValue from './NumberValue';

const context = describe;

describe('NumberValue', () => {

  context('when some decimal number is given', () => {
    it('isNatural returns false', () => {
      const numberValue = new NumberValue(1.1);
    
      expect(numberValue.isNatural).toBeFalsy();
    });
  });
});
