// declarando
// const User = {};

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hola soy ${this.name}`);
    }

    get uAge() {
        return this.age;
    }

    set uAge(age) {
        this.age = age;
    }
}

const newUser = new User('Andrés', 27);
newUser.greeting();
const bebeloper = new User('Bebeloper', 27);
bebeloper.greeting();
console.log(newUser.uAge);
newUser.uAge = 28;
console.log(newUser.uAge);


