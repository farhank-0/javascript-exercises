const reverseString = function(str) {
    let stringArr = [];
    let string = '';
    let j = 0;
    for (i = str.length-1; i > -1; i--) {
        stringArr[j] = str[i];
        j++;
    }
    for (i = 0; i < stringArr.length; i++) {
        string += stringArr[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
