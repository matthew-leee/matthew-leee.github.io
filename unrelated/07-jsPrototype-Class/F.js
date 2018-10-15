class Person {
    constructor(option){
        this.age = option.age;
        this.name = option.name;
    }
    info () {
        return `The person is called ${this.name} and is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(option){
        super(option);
        this.gpa = option.gpa;
    }
    info () {
        return super.info() + `. He has an overall GPA of ${this.gpa} in the university.`
    }
}

const person = new Student ({age: 44, name: 'Tom', gpa:"4.0"})
console.log (person.info())