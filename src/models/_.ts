class _ {
  static range(size: number): number[] {
    return [...Array(size).keys()];
  }

  static random(min = 0, max = 1): number {
    if (typeof max !== 'number') {
      return Math.random() * min;
    }
    return Math.random() * (max - min) + min;
  }
}

export default _;
