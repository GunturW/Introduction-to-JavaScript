let num1 = 7.77;

console.log(typeof num1);
console.log(parseInt(num1)); //7
console.log(parseFloat(num1)); //7.77
console.log(num1.toFixed(5)); //7.77000
console.log(num1.toFixed(1)) //7.8



/* challengen */

let example1 = parseInt("Hello 33 World 22");
let example2 = parseFloat('43 Guntur 33');
let example3 = 55.333.toFixed(0);
let example4 = 200.0.toFixed(2)

console.log(example1); //NaN
console.log(example2); //43
console.log(example3); //55
console.log(example4); //200.00