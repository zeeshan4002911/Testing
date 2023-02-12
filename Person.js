class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    eat(food) {
        if (this.stomach.length <= 10) { this.stomach.push(food); }
    }
    poop() {
        this.stomach = [];
    }
    toString() {
        return `${this.name}, ${this.age}`;
    }
}

const marry = new Person("Marry", 50);
console.log(marry.toString()); 

marry.eat("burger");
console.log(marry.stomach);
marry.eat("sandwich");
console.log(marry.stomach);

marry.poop();
console.log(marry.stomach);