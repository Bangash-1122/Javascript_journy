// let myName = "Ubaid     "
// let myCourse = "Javascript"

// console.log(myName.truelength);



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Ubaid = function () {
    console.log(`Ubaid is present in all objects`);
    
}


Array.prototype.heyUbaid = function () {
    console.log(`Ubaid says Hello`);
    
}
// heroPower.Ubiad()

myHeros.Ubaid()
myHeros.heyUbaid()

// inheritance

const User = {
    name: "chai",
    email: "chai@.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

// modran syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiaurcode     "

String.prototype.truelength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.truelength()
"Ubaid".truelength()
"BangashAfghan".truelength()