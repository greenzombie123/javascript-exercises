const fibonacci = function(memberNumber) {
    var number = parseInt(memberNumber);
    if (number < 0) {
        return 'OOPS';
    }
    if (number === 1 ?? number == 2) {
        return 1;
    }

    var firstNumber = 1;
    var secondNumber = 1;
    var counter = 2;

    while (counter < number ) {
        var dummyVar = secondNumber;
        secondNumber = firstNumber + secondNumber;
        firstNumber = dummyVar;
        counter++;
    }

    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;
