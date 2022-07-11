const removeFromArray = function(arr, ...args) {
  const arrayFromArguments = args.slice(0);
  return arr.filter(arrItem => !arrayFromArguments.includes(arrItem));
};

// Do not edit below this line
module.exports = removeFromArray;
