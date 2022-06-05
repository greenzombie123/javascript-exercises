const repeatString = function(string, number) {
    let text = '';
    if (number < 0) {
        return "ERROR"
    }
    for (let i = 0; i < number; i++) {
        text = text.concat(string);
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
