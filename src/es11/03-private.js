// declarando
// const User = {};

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    #greeting() {
        console.log(`Hola soy ${this.name}`);
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(age) {
        this.age = age;
    }
}

const bebeloper = new User('Bebeloper', 27);
bebeloper.greeting();


