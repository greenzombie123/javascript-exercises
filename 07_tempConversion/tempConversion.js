const ftoc = function(number) {
  const farenheit = (number - 32) * 5/9;
  return parseFloat(farenheit.toFixed(1));
};

const ctof = function(number) {
  const celcius = number * 9/5 + 32;
  return parseFloat(celcius.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

/*
function gets a number
multiply number by (9/5) and then add 32
return number after it is rounded to one decimal place

function gets a number
subtract 32 from number and then multiply it with 5/9
return number after it is rounded to one decimal place

[°F] = [°C] × 9⁄5 + 32	[°C] = ([°F] − 32) × 5⁄9
*/