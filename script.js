const first = 'Hello';
const second = 'World';
let result = `${first} ${second}`;
console.log(result);

multiply = (a = 1, b = 1) => a * b;
console.log(multiply(5));
console.log(multiply(2, 6));


average = (...args) => {
  let result=0;
  args.forEach(arg =>result+=arg);
  return result/args.length;
};
console.log(average(1));
console.log(average(1,2));

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

let arr = [1, 4, 'Iwona', false, 'Nowak'];
[ , ,...names] = arr;
[firstname, ,secondname] = names;
console.log(`${firstname} ${secondname}`);
