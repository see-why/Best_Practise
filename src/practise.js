const stringLength = (str) => {
  if (str.length > 1 && str.length <= 10) {
    return str.length;
  }
  throw new Error('invalid string');
};

const reverseString = (str) => {
  const splitStringArray = str.split('');
  const reverseStringArray = splitStringArray.reverse();
  const reverseString = reverseStringArray.join('');

  return reverseString;
};

const capitlizeFirstLetter = (str) => {
  let result = '';
  if (typeof str === 'string') {
    const lowerCaseStr = str.toLowerCase();
    const splitStringArray = lowerCaseStr.split('');
    splitStringArray[0] = splitStringArray[0].toUpperCase();
    result = splitStringArray.join('');
  }

  return result;
};

class Calculator {
  constructor() {
    this.sum = 0;
    this.product = 0;
    this.difference = 0;
    this.quotient = 0;
  }

  add(a, b) {
    this.sum = a + b;
    return this.sum;
  }

  subtract(a, b) {
    this.difference = a - b;
    return this.difference;
  }

  divide(a, b) {
    this.quotient = a / b;
    return this.quotient;
  }

  multiply(a, b) {
    this.product = a * b;
    return this.product;
  }
}

module.exports = {
  stringLength, reverseString, Calculator, capitlizeFirstLetter,
};