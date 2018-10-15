// old syntax

// function Person (name, age){
//     this.name=name;
//     this.age=age;
// }

// let gf = new Person ("Bobo", 22);
// console.dir (`my gf is ${gf.name}`)

// new syntax

class Person {
    constructor (option){
        this.name = option.name;
        this.age = option.age;
    }
}

let gf = new Person ({name:"Bobo", age: 22})
console.log (`my gf is ${gf.name} of age ${gf.age}`)