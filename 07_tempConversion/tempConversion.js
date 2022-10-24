const ftoc = function(x) {
calc = (x-32) * (5/9);
return parseFloat(calc.toFixed(1));
};

const ctof = function(x) {
calc = (x * 9/5) + 32;
return parseFloat(calc.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
