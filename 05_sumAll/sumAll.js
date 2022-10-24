const sumAll = function(a, b) {
    let sum = 0;

    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR'
    } else if (a < b) {
        for (i = a - 1; i< b + 1; i++) {
            sum += i;
        }
        return sum;
    } else if (a > b) {
        for (i = b - 1; i< a + 1; i++) {
            sum += i;
        }
        return sum;
    }
}
;

// Do not edit below this line
module.exports = sumAll;
