const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  var sum = 0
	for (const item of array) {
    sum += item;
  }
  return sum;
};

const multiply = function(num) {
  let finalSum = 0;
	for (let index = 0; index < num.length; index++) {
    if(index === 0){
      finalSum = num[index];
      continue;
    }
    finalSum = finalSum * num[index];
  }
  
  return finalSum;
};

const power = function(baseNum, powerNum) {
	return baseNum ** powerNum
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let factorial = [];
  let sum = 1;
	for (let index = 1; index <= num; index++) {
    factorial.push(index)
  }
  
  factorial.forEach(num=>sum = sum * num);

  return sum;
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
