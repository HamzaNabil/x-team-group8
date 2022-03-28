var persons = ["ahmed", "yasser", "Tarek"];

var person = {
  name: "ahmed",
  age: 25,
};

// For in
for (var x in person) {
  //   console.log(person[x]);
}

// Dom Select

// to get ID
// document.getElementById("demo").innerHTML; //

// to get class // find function
var elemts = document.getElementsByClassName("test"); // [p, section]

for (var i = 0; i < elemts.length; i++) {
  //   console.log(elemts[i]);
}

// getElementById => id
// querySelector =>  .class #id element
// querySelectorAll => select all element of same type => []
// getElementsByClassName => all classes => []

var sections = document.querySelectorAll("section");

// console.log(sections);

// document.querySelector("img").onclick = function () {
//   console.log("ay 7aga");
// };

// Array Methods
var arr = ["ahmed", "mohamed", "yasser", "mahmoud"];

// console.log(arr);

arr.length; // 3

// arr.pop(); // remove last element from arr
// arr.shift(); // remove first elemet from arr

// arr.push("tarek"); // add elemet to arr after last element
// arr.unshift("tarek");// add elemet to arr before first element

arr.splice(arr.length - 1, 0, "hany");

// console.log(arr);

var a1 = [1, 2, 3];
var a2 = [4, 5, 6];

// concat

var a3 = a2.concat(a1);
// console.log(a3);

// String Methods

var txt = "WorD";
// console.log(txt);

// console.log(txt.length); // 4
// console.log(txt.toUpperCase());

// console.log(txt.toLowerCase());

var newTxt = "              word an txt        ";
// console.log(newTxt);
// console.log(newTxt.trim());

// Searching
//  1- convert txt to LowerCase
// 2- remove any spaces before after txt  trim
//         012345678
var str = "test code and js"; // string is array of characters
// slice

// console.log(str.slice(5));

// split split("") convert string to array "test" => ["t","e","s","t"]
// join  join("") convert arr to stromg ["t","e","s","t"] => "test"
// console.log(str.split(""));

// "Hello"  => "oellH"

var h = "Hello";
// chain
console.log(h);
console.log(h.split(""));
console.log(h.split("").reverse());
console.log(h.split("").reverse().join(""));

// Slideshow

var myImage = document.getElementById("slideshow");

var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

myImage.setAttribute("src", images[0]);

// setInterval
