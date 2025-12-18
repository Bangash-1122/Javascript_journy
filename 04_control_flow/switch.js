// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 2:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}



//  truthy.js   

const userEmail = "ubaidkhan@.ai"
if (userEmail) {
    console.log("Got user email ");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0 -0, BigInt 0n,  "", null, undefined, Nan,

//  truthy values
// "0", 'false', " ", [], {}, fuuction(){},

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj) .length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// val1 = undefined ?? 15

// console.log(val1);

// Terniary Operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



