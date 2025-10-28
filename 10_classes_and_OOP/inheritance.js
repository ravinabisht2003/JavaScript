class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@g.c", "123")

chai.addCourse()

const massalaChai = new user("massalaChai");

massalaChai.logMe()

console.log(chai instanceof user);
console.log(massalaChai instanceof Teacher);
