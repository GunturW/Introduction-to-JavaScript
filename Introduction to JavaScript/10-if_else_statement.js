let example = 5;

if (example === 5) {
    console.log('Runs');
} else if (true) {
    console.log('else if');
} else {
    console.log('else');
}

if (example === 6 && false === true) {
    console.log('Runs');
} else if (true) {
    console.log('else if');
} else {
    console.log('else');
}

if (example === 6 || false === true) {
    console.log('Runs');
} else if (false) {
    console.log('else if');
} else {
    console.log('else');
}


/* challenge */

console.log(10 === 10 && 5 < 4); //false

console.log(10 === 10 || 5 < 4); //true

console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5); //true