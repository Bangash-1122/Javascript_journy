"use strict"; //treat all Js code as newer version

// alert(3 + 3)// we are using nodejs, not browser

//number => 2 to power 53
//bigint
//string => ""
// boolean => true/false
// null => standalone value 
// undefined => 
// symbol => uniqueness 
// object



// console.log(typeof undefined); // undefined
// console.log(typeof null); // object



// summery data type
// Primitive 
// 7type : String, number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null


const id = Symbol ('123')
const anotherId = Symol ('123')

// console.log(id === anotherId);



// Reference (Non primitive)

// Array, Objects, Function

const heros = ["ironman", "Thor", "batman"];
let myObj = {
    name: "superman",
    age: 24,
}

const myFunction = function(){
    // console.log("Hello world");
}



// +++++++++++++++++++++++++

// Stack (primitive), Heap(Non-Primitive)
  

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename 
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne 

userTwo.email = "hitesh@google.com"
 
console.log(userOne.email);
console.log(userTwo);
