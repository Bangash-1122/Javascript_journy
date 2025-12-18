// Singleton 
// object.create

// object literals

const mySym = Symbol("key1")



const JsUser =  {
    name: "Hitesh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastloginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["location"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@m.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

