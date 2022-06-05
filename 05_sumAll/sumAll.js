const sumAll = function(num1, num2) {

    let finalNumber = 0;
     if ( num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== 'number') {
        console.log(typeof num1 !== "number")
        return "ERROR"
    }

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            finalNumber += i;
        }
        return finalNumber;
    }
    else{
        for (let i = num2; i <= num1; i++) {
            finalNumber += i;
        }
        return finalNumber;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
