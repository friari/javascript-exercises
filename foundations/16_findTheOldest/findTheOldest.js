const findTheOldest = function(people) {
  let currentYear = new Date().getFullYear();
  const sortedByAge = people.sort((personA, personB) => {
   let firstAge = (personA.yearOfDeath || currentYear) - personA.yearOfBirth;
   let secondAge = (personB.yearOfDeath || currentYear) - personB.yearOfBirth;
   return firstAge > secondAge ? -1 : 1;
  });
  return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
