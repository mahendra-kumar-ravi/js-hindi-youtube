// primitive data types

// 7 types : string ,Number, Boolean , null, undefined, symbol, BigInt

const score = 200
const scoreValue = 100.3
const isLoggedIn = false;
const OutsideTemp = null;
 let unserEmail;
 const id = Symbol('123')
 const anotherId = Symbol('123')

//  console.log(id === anotherId);  // not same

const bigNumber = 321132132132n;
 

// Refrence type (non primitive)

// Array, Objects, function

const heros = ["saktiman", "mora", "ravi"]
let myObj = {
    name : "mahi",
    age : 33
}

const myfunction = function() {
    console.log("jello dost kaise ho")

}

// console.log(typeof heros)


// ***************************
 
//stack (primitive), Heap (Non  primitive)

let myname = "mahendra"
let anothername = myname
anothername = "mahi"
console.log(anothername);
console.log(myname);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ibl" 
}

let userTwo = userOne
userTwo.email = "mahendra@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

