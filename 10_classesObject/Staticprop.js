class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const ubaid = new User("ubaid")
// console.log(ubaid.createId());

class Teacher extends User {
    constructor(username, email){
       super(username)
       this.eamil = email 
    }
}

const iphon = new Teacher("iphon", "i@phon.com")
// iphon.logMe();
console.log(iphon.createId());

