const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => (a + b), 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => (a * b), 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  const numArr = [];
	for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }
  return numArr.reduce((a,b) => (a * b), 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
