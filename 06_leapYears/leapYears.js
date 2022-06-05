const leapYears = function(number) {
    if (number % 400 === 0) {
        return true;
    }
    else if (number % 4 === 0 && number % 100 > 0){
        return true;
    }
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;

/*
given a year, determine if it is a leap year or not and return true if yes, false is not.

function passes year into its parameters
if year divided by 400 has no remainder, return true
else if year divided by 4 has no remainder
and if year divided by 100 gives a remainder
return true 
*/