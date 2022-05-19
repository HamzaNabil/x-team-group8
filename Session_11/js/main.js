// - this

// - function parameter with another function

// let myInput = document.getElementById("inputEl");

// myInput.addEventListener("keyup", function () {
//   console.log(this.value);
// });

// let myBtn = document.getElementById("btn");

// myBtn.addEventListener("click", function () {
//   console.log("run button");
//   console.log(this);
// });

// let person = {
//   name: "Ahmed",
//   age: 25,

//   data: function () {
//     console.log(this.name + this.age);
//   },
// };

// //
// person.data();

// 1 => this in global => Window Object
// 2 => this in function => Window Object
// 3 => this in function fire when trigger event => Elm
// 4 => this in Method (function in object) => Object

// function printName(x) {
//   // x = 1
//   // x = []
//   // x = {}
//   // x = function(y){}
//   x(1);
//   console.log("Mohamed");
// }

// printName(function (y) {
//   console.log(y);
// });

// Callback =>

// [].map(function() {})

// function code() {
//   return function () {
//     console.log("inner function");
//   };
// }

// // code()()

// let f = code();

// f();

// function getUsers() {
//   return function () {
//     console.log("users");
//   };
// }

// let x = getUsers();

// x();

// OOP => Object Oriented Programming

// Example for procedure programming
let personName = "Ahmed";
let personAge = 25;

function personInfo() {
  console.log(personName, personAge);
}

// convert to object oriented programming

// let person = {
//   name: "Ahmed",
//   age: 25,

//   info: function () {
//     console.log(this.name, this.age);
//   },
// };

// let person2 = {
//   name: "mohamed",
//   age: 30,

//   info: function () {
//     console.log(this.name, this.age);
//   },
// };

// let person3 = {
//   name: "yasser",
//   age: 30,

//   info: function () {
//     console.log(this.name, this.age);
//   },
// };

// Factory Function
function createPerson(name, age) {
  return {
    name: name,
    age: age,

    info: function () {
      console.log(this.name, this.age);
    },
  };
}

// let p1 = createPerson("ahmed", 50);
// let p2 = createPerson("tarek", 30);

// console.log(p1);
// console.log(p2);

// Constructor function
// function Person(name, age) {
//   let person = {};
//   person.name = name;
//   person.age = age;
//   person.info = function () {
//     console.log("ay 7aga");
//   };
//   return person;
// }
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   // return this
// }

// let p = new Person("ahmed", 20);
// let p2 = new Person("yasser", 30);

// console.log(p, p2);

// function Student(name) {
//   // let this = {}
//   this.name = name;
//   // return this
// }

// let s = new Student("ahmed");
// console.log(s);

// Class keyword
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   // return this
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   // return this
// }

// let p = new Person("ahmed", 20);

// console.log(p);

// Concepts :
// 1- Encapsulation => group every related var and funs into object
// 2- Abstraction => Hidding Details => show essentials
// 3- Inheritance =>
// 4- Polymorphism =>
