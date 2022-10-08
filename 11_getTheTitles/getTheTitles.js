const getTheTitles = function(books) {
  let returnArray = books.reduce((a,b) => {
    a.push(b.title);
    return a;
  },[]);

  return returnArray;
};

// Do not edit below this line
module.exports = getTheTitles;
