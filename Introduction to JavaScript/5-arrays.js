let example = [5,7,6];

console.log(example.length); //3
console.log(example[1]); //7
console.log(example[3]) //undefined

//add value
example.push(8);
console.log(example); //[5,7,6,8]

//remove the last value
example.pop();
console.log(example); //[5,7,6]

//update the value
example[0] = 1
console.log(example); //[1,7,6]

//iterate value from variable array
example.forEach(element => {
    console.log(element)
});


/* challenge */

let example1 = ['Guntur',5,true];
let example2 = example1;

example2.push(11);

console.log(example1); //['Guntur',5,true,11]
console.log(example2); //['Guntur',5,true,11]

/* There are two ways that variable1 cannot change if you want to push variable2 */
//1. using ...before variable1
let variable1 = ['Wicaksono',16,false]
let variable2 = [...variable1]
variable2.push(20);
console.log(variable1); //['Wicaksono',16,false]
console.log(variable2); //['Wicaksono',16,false,20]

//2. using map
let variable3 = ['Guntur',79,true]
let variable4 = variable3.map((element) =>{
    return element;
});
variable4.push(88);
console.log(variable3);
console.log(variable4);