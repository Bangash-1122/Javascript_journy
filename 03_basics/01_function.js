

function sayMyName(){
console.log("U");
console.log("B");
console.log("a");
console.log("i");
console.log("d");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(7, 8)

// console.log("Result: ", result);


function loginUserMassage(username = "saim") {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("ubaid"));

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Bangash",
    price: 199,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "sam",
    price: 399,
})

const myNewArray = [200, 400, 100, 600]

function returnSecoundValue(getArray) {
    return getArray[1]
}

// console.log(returnSecoundValue(myNewArray));
console.log(returnSecoundValue([200, 400, 500, 1000]));
