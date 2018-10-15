//obj has properties and methods 
// when u use the method u needa say [obj].[method](); need that parenthesis!
// but when creating that method inside the obj simply omit the (), [method]: function(){} like this

//e.g. (proven to be working)

// let person = {
//     age: 27,
//     updateAge: function () {
//         return ++this.age;
//     }
// }

// let x = person.updateAge();

// console.log (x);

// create object and object constructor is different
// how to create a single object u can see above notes
// below shows how to create constructors

// function Person (p1, p2, p3){
//     this.p1 = p1;
//     this.p2 = p2;
//     this.p3 = p3;
//     //etc. so that i call a new obj with obj.p[] then the obj is assigned with a property in desired category
// }

// // syntax to create obj out of obj constructor
// let person1 = new Person (1,2,3);

// console.log (person1.p3);
// // return 3


