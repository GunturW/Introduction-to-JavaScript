let example = 10;
let example1 = 15;

console.log(example > example1); //false
console.log(example < example1); //true
console.log(example >= example1); //false
console.log(example <= example1); //true
console.log(example == example1); //false
console.log(example !== example1); //true

let example2 = 20;
let example3 = '20';

console.log(example2 == example3); //true (although different data types)
console.log(example2 === example3); //false (because different data types)


/* challenge */

let example4 = 5 === 5;
let example5 = 5 == '5';
let example6 = 6 != '6';
let example7 = 7 !== '7';

console.log(example4); //true
console.log(example5); //true
console.log(example6); //false
console.log(example7); //true