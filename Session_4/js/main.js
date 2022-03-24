// Loop
// 1 - 10

// intialization
// condition
// update

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// var i = 1;
// while (i >= 10) {
//   console.log(i);
//   i++;
// }

// do while
// var i = 1;
// do {
//   console.log(i); // 1
//   i++; // 2
// } while (i >= 10);

// Logical Operator  && || !
// && => All Condition must be true
// || => at least one condition true

// Array
// الترتيبindex
// رقم number
var cars = ["byd", "BMW", "Marcids", "hundy"];
// index =>   0       1      2         3
// Number =>  1       2      3         4

console.log(cars[2]);
// Get Number of Elements of Array
console.log(cars.length); // 3

// Print all Element of array Static
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

// Print all Element of array using Loop

// initialization 0
// condition 4 arr.length
// update +1
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// i = 0 | 0 < 4 | cars[0] => byd
// i = 1 | 1 < 4 | cars[1] => BMW
// i = 2 | 2 < 4 | cars[2] => Marcids
// i = 3 | 3 < 3 | cars[3] => hundy
// i = 4 | 4 <= 4| cars[4] .....

// create array of persons

// var persons = ["ahmed", "mohamed", "yasser"];

// for (var x = 0; x < persons.length; x++) {
//   console.log(persons[x]);
// }

// x = 0 | 0 < 3 | persons[0] => ahmed
// x = 1 | 1 < 3 | persons[1] => mohamed
// x = 2 | 2 < 3 | persons[2] => yasser
// x = 3 | 3 <= 3 | persons[3] => undefined

// Object  key: value
var person = {
  name: "ahmed",
  age: 25,
  weight: 90,
};

// [ dot notation ] object.key => value
console.log(person.name);
console.log(person.age);
console.log(person.weight);

// computed property object["key"]
console.log(person["name"]);
console.log(person["age"]);
console.log(person["weight"]);

// Array with Object

// var arr = [1, 2, "hamza", true, { x: 1, y: 2 }];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// arr[2] // hamza
// arr[3] // true

// arr[4] = { x: 1, y: 2 }
// arr[4].x // 1

var arr = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i].x);
  console.log(arr[i].y);
}

// arr[1] = {x: 2}
// arr[1].x
// 1 x
// 2 x
// 3 x

var a = [
    [ { x: 1 } ], // 0
    [ { x: 2 } ], // 1
    [ { x: 3 } ] // 2
];

// a[0] // [ { x: 1 } ]
// a[0] = [ {x:1} ]
// a[0][0]

console.log(a[0][0].x); // 1

console.log(a[1][0].x); // 2

console.log(a[2][0].x); // 3

// input button 

// Listing Users App [] input buttin

// 1- add user in input 
// 2- add username into array  // 
// [ "hamza", "mohamed", "yasser" ]
// Loop and print every element into div 