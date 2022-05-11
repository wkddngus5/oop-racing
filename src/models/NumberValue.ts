class NumberValue {
  private value = 0;

  constructor(value = 0) {
    this.value = value;
  }

  get isNatural() {
    if (this.value % 1 !== 0) {
      return false;
    }
    return true;
  }
}

export default NumberValue;
