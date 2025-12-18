const user = {
    username: "Ubaid",
    price: 999,

    welcomeMassage: function () {
        console.log(`${this.username} , welcome to website`);   
        console.log(this);
        
    }
}
// user.welcomeMassage()
// user.username = "saim"
// user.welcomeMassage()


// function chai() {
//     let username = "ubaid"
//     console.log(this);
// }
// chai()

// const chai =  () => {
//   let username = "Ubaid"
//   console.log(this.username);
  
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) =>  (num1 + num2)


console.log(addTwo(86, 47));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() =>  {})