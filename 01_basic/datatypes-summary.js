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

console.log(typeof heros);
