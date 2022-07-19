const palindromes = function (string) {
    const newString = string.toLowerCase();
    const characters = newString.split('');
    const Exp = RegExp(/[a-z]/);
    const Characters = characters.filter(char=>Exp.test(char));
    var middlePoint = Math.floor(Characters.length / 2);
    var startingPoint = 0;
    var endingPoint = Characters.length - 1;
    for (let index = 0; index < middlePoint; index++) {
        if (Characters[startingPoint] !== Characters[endingPoint]) {
            return false;
        }
        startingPoint++;
        endingPoint--;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;

function palindromeS(string){
    const newString = string.toLowerCase();
    const characters = newString.split('');
    const Exp = RegExp(/[a-z]/);
    const Characters = characters.filter(char=>Exp.test(char));
    var middlePoint = Math.floor(Characters.length / 2);
    var startingPoint = 0;
    var endingPoint = Characters.length - 1;
    for (let index = 0; index < middlePoint; index++) {
        if (Characters[startingPoint] !== Characters[endingPoint]) {
            return false;
        }
        startingPoint++;
        endingPoint--;
    }
    return true
}

//console.log(palindromeS('Raceb ar[(!@%'))
