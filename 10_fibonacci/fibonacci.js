const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  let fibArr = [1];
  let fibNum = 1;
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      fibArr.push(fibNum);
      continue;
    }
    fibNum = fibArr[i-1] + fibArr[i];
    fibArr.push(fibNum);
  }
  return fibArr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
