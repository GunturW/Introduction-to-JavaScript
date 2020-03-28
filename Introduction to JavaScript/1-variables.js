var firstname = "Guntur";
var lastname = "Wicaksono";

console.log(firstname +' '+ lastname); //Guntur Wicaksono

/* it's different each variable var, let and const*/

/* var*/
var name = "Guntur";
name = "Wicaksono";

console.log(name); //Wicaksono


/* let */
let name1 = "Guntur";
name1 = "Wicaksono"; //Wicaksono

console.log(name1);

/* const */
const name2 = "Guntur";
name2 = "Wicaksono";

console.log(name2); //Error

/*
var declarations are globally scoped or function scoped while let and const are block scoped.

var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

They are all hoisted to the top of their scope but while varvariables are initialized with undefined, let and const variables are not initialized.

While var and let can be declared without being initialized, const must be initialized during declaration. */