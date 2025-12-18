class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }

}

class Teacher extends User{
    constructor(username, email, Password){
        super(username)
        this.email = email
        this.Password = Password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher", "123")
chai.addCourse();

const masalaChai = new User("masalaChai")
masalaChai.logMe()