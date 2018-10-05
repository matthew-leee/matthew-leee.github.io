function Person (name, age){
    this.name=name;
    this.age=age;
}

let gf = new Person ("Bobo", 22);
console.dir (`my gf is ${gf.name}`)
