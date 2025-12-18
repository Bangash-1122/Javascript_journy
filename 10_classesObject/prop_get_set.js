// function User(email, password) {
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return this._email.toUpperCase()
//         },
//         set: function (value) {
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return this._password.toUpperCase()
//         },
//         set: function (value) {
//             this._password = value
//         }
//     })

// }

// const chai = new User("chai@chai.com", "chai")
// const pass = new User("123@abc", "pass")
// console.log(chai.email);
// console.log(pass.password);

/// Object_get_set 

const User = {
    _email: 'Ubaid@khan',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this.email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
