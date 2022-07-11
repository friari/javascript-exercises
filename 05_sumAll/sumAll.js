const sumAll = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number'
    || num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  let smallerNum = num1;
  let largerNum = num2;
  let numArray = [];

  if (smallerNum > largerNum) {
    smallerNum = num2;
    largerNum = num1;
  }

  for (let i = smallerNum; i <= largerNum; i++) {
    numArray.push(i);
  }

  return numArray.reduce((a,b) => a + b);
};

// Do not edit below this line
module.exports = sumAll;
