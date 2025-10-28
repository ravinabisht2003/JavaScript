class user {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`UserName : ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const ravina = new user("ravina")

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());