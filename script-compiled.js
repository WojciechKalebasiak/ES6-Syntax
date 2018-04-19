'use strict';

var first = 'Hello';
var second = 'World';
var result = first + ' ' + second;
console.log(result);

multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(5));
console.log(multiply(2, 6));

average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var result = 0;
  args.forEach(function (arg) {
    return result += arg;
  });
  return result / args.length;
};
console.log(average(1));
console.log(average(1, 2));
