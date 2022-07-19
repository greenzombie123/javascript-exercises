const findTheOldest = function (people) {
  const newPeople = people.map((person) => {
    if (!("yearOfDeath" in person)){
      person["yearOfDeath"] = new Date().getFullYear();
    }
    return person;
  });

  console.log(people);

  newPeople.sort((person1, person2) => {
    const person1Age = person1.yearOfDeath - person1.yearOfBirth;
    const person2Age = person2.yearOfDeath - person2.yearOfBirth;
    return person1Age > person2Age ? -1 : 1;
  });

  return newPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
