const user = {
    username: "Ubaid",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
       // console.log("Got user details from database");
      // console.log(`Username: ${this.username}`);
       
    }
}
 //console.log(user.username);
 //console.log(user.getUserDetails());
 


//const promiseOne = new Promise()
//const date = new Date() 

function User(username, loginCount, isLoggedIn) {
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn

   return this
}

const userOne =  new User("Ubaid", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
