const removeFromArray = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === arguments[1] ||
            array[i] === arguments[2] ||
            array[i] === arguments[3] ||
            array[i] === arguments[4]) {
            array.splice(i, 1);
            i--;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
