const repeatString = function(ogstr, repeats) {
    let string = '';
if (repeats > 0) {
    for(i = 0; i < repeats; i++) {
        string = string + ogstr;
    }
} else if (repeats === 0) {
    return string
} else {
    return 'ERROR';
}
if (ogstr === string) {
    return ogstr;
} else {
    return string;
}
};

// Do not edit below this line
module.exports = repeatString;
