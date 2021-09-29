const practise = require('./practise');

const myCalculator = new practise.Calculator();

test('length of string "bag"', () => {
  const length = practise.stringLength('bag');

  expect(length).toBe(3);
});

test('when string longer than 10', () => {
  expect(() => practise.stringLength('bagbfgbfbffhfnnfwjebfwjebfwjefbw')).toThrow();
});

test('reverse string "bag"', () => {
  const reverseString = practise.reverseString('bag');

  expect(reverseString).toBe('gab');
});

describe('my calculator adds correctly', () => {
  test('add 1 and 2', () => {
    const sum = myCalculator.add(1, 2);

    expect(sum).toBe(3);
  });

  test('add 1 and 5', () => {
    const sum = myCalculator.add(1, 5);

    expect(sum).toBe(6);
  });

  test('add 4 and 5', () => {
    const sum = myCalculator.add(4, 5);

    expect(sum).toBe(9);
  });
});

describe('my calculator subtracts correctly', () => {
  test('subtract 2 from 1', () => {
    const difference = myCalculator.subtract(1, 2);

    expect(difference).toBe(-1);
  });

  test('subtract 5 from 1', () => {
    const difference = myCalculator.subtract(1, 5);

    expect(difference).toBe(-4);
  });

  test('subtract 5 from 4', () => {
    const difference = myCalculator.subtract(4, 5);

    expect(difference).toBe(-1);
  });
});

describe('my calculator multiplies correctly', () => {
  test('multiply 2 and 1', () => {
    const product = myCalculator.multiply(1, 2);

    expect(product).toBe(2);
  });

  test('multiply 5 and 1', () => {
    const product = myCalculator.multiply(1, 5);

    expect(product).toBe(5);
  });

  test('multiply 4 and 5', () => {
    const product = myCalculator.multiply(4, 5);

    expect(product).toBe(20);
  });
});

describe('my calculator divides correctly', () => {
  test('divide 2 by 1', () => {
    const quotient = myCalculator.divide(2, 1);

    expect(quotient).toBe(2);
  });

  test('divide 5 by 1', () => {
    const quotient = myCalculator.divide(5, 1);

    expect(quotient).toBe(5);
  });

  test('divide 100 by 2', () => {
    const quotient = myCalculator.divide(100, 5);

    expect(quotient).toBe(20);
  });
});

test('cap first letter of string "bag"', () => {
  const newString = practise.capitlizeFirstLetter('bag');

  expect(newString).toBe('Bag');
});