let name = "Guntur";
console.log(name); //Guntur
console.log(typeof name); //string

let firstname = "Guntur";
let lastname = "Wicaksono";
console.log(firstname + ' '+ lastname); //Guntur Wicaksono
console.log(`${firstname} ${lastname}`); //Guntur Wicaksono

console.log(`${firstname} ${lastname}`.length); //16

console.log(`${firstname} ${lastname}             `.trim().length); //16

console.log(`${firstname} ${lastname}`.toUpperCase()); //GUNTUR WICAKSONO

console.log(`${firstname} ${lastname}`.toLowerCase()); //guntur wicaksono

console.log(`${firstname} ${lastname}`.split(' ')); //['Guntur','Wicaksono']


/* challenge */

let firstname1 = "Guntur";
let lastname1 = "Wicaksono";

const fullname1 = `${firstname1} ${lastname1}`; 

console.log(fullname1); //Guntur Wicaksono