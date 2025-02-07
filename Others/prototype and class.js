// Prototype is a built in property of a function, which denotes an Object.

Person.prototype = {
    eat() {
        console.log(`${this.name} is Eating`);
    },
    sleep() {
        console.log(`${this.name} is Sleeping`);
    },
    play() {
        console.log(`${this.name} is Playing`);
    },
};
Person.prototype["cook"] = function () {
    console.log(`${this.name} is Cooking`);
};

function Person(name, age) {
    // let person = Object.create(Person.prototype); /no need when we use 'new' keyword to create instances.
    this.name = name;
    this.age = age;
    // return person; //no need when we use 'new' keyword to create instances.
}

const Tania = new Person("Tania", 23);
const Mohammad = new Person("Mohammad", 24);

Tania.cook();

// Class Conversion

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    cook() {
        console.log(`${this.name} is Cooking`);
    }
    sleep() {
        console.log(`${this.name} is Sleeping`);
    }
    eat() {
        console.log(`${this.name} is Eating`);
    }
}

const TaniaClass = new PersonClass("Tania-Class", 22);
TaniaClass.cook();
//

let arr = new Array(1, 2, 3, 4, 5);
let revArr = [...arr];
console.log([...revArr.reverse()]);
console.log(arr);
