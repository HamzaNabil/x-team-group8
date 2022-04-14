// let | var | const
// test();

// function test() {
//   console.log("test");
// }

// Arrow Function

// let test = () => {
//   console.log("test");
// };

// test();

// Expression function
// let test = function () {
//   console.log("test");
// };

let person = {
  name: "ahmed",
  age: 20,
  weight: "50kg",
};

// let name = person.name;
// let age = person.age;
// let weight = person.weight;

// Destruction Object
let { name, weight } = person;
// console.log(name, weight);

// console.log(name, age, weight);

// person.name

// person.name

// person.name

let arr = [1, 2, 3];

// Destruction

let [y] = arr;

console.log(y);

// Spread Operator ...

let persons = ["ahmed", "mohamed", "tarek", "yasser"];
// persons[0], persons[1], persons[2], persons[3],  => ...persons

let newPersons = [...persons, "mahmoud"];

console.log(newPersons);

let car = {
  name: "hundy",
  modal: "2000",
};

let car2 = {
  ...car,
  price: 2000,
};

console.log(car2);
