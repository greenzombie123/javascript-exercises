const reverseString = function(string) {
    let text = "";
    for(let i = 0; i < string.length; i++){
        text = text + string.charAt(string.length - i - 1)
    }

    return text;
};

// Do not edit below this line
module.exports = reverseString;
