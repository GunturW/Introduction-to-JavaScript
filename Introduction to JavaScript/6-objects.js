let example = {
    firstName: 'Guntur',
    lastName: 'Wicaksono',
    age: 24,
    address: {
        city: 'Jakarta',
        state: 'Indonesia'
    }
};

console.log(example);
console.log(Object.keys(example)); //['firstName','lastName','age','address']
console.log(example.hasOwnProperty('firstName')); //true


/* challenge */
let example1 = {
    firstName1: 'Guntur'
};

let example2 = example1;
example2.lastName1 = 'Wicaksono';

console.log(example1);
console.log(example2)

//to avoid this problem, you can using assign

let example3 = Object.assign({}, example1);
example3.lastName = 'Wicak';

console.log(example1);
console.log(example3);