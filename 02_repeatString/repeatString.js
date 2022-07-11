const repeatString = function(str, num) {
  if (num < 0) return 'ERROR';

  let emptyStr = '';

  for (let i = 0; i < num; i++) {
    emptyStr = emptyStr.concat(str);
  }

  return emptyStr;
};

// Do not edit below this line
module.exports = repeatString;
