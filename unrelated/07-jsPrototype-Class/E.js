class Person {
    constructor(option){
        this.age = option.age;
        this.name = option.name;
    }
    info () {
        return `The person is called ${this.name} and is ${this.age} years old`
    }
}

const person = new Person( {age: 44, name: 'Tom' });
console.log(person.info() )