class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age
    }

    getGreeting() {
        return `hi ! ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}


const me = new Person('Suman Mondal', 25);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());


const other = new Person();
console.log(other);
console.log(other.getGreeting());


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.major) {
            description += ` ${this.name} has major in ${this.major}`
        }
        return description;
    }
}
const student = new Student('Suman', 26, 'WCS');
console.log(student.getDescription());
console.log(student.hasMajor());