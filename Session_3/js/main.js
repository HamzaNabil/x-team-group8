// Define function
function log() {
  console.log("Test");
}

// Call Function
log();

// Create addTwoNumber Function
// Paramerters
function addTwoNumber(x, y) {
  console.log(x + y);
}

addTwoNumber(2, 5); // 7

addTwoNumber(5, 10); // 15

addTwoNumber(10, 0); // 10

// Function return

function ele() {
  return "hamada";
}

var e = ele(); // call
console.log(e);

// Events
// var btn = document.getElementById("btn");
// var el = document.getElementById("el");

// btn.onmouseenter = function () {
//   el.innerHTML = "JS";
// };

// btn.onmouseleave = function () {
//   el.innerHTML = "";
// };

// =====================================
// Todo App

// Variable
var inputEl = document.getElementById("input");
var btn = document.getElementById("add");
var ulEl = document.getElementById("ul");
var err = document.getElementById("err");

// Events
btn.onclick = function () {
  addItem();
};

// Function
function addItem() {
  // get value
  var vl = inputEl.value;

  if (vl != "") {
    // there is value in input
    // add input value into li
    ulEl.innerHTML += "<li>" + vl + "</li>";

    // empty input value
    inputEl.value = "";

    // empty Err msg
    err.innerHTML = "";
  } else {
    // there is no value in input
    err.innerHTML = "You Should Fill Data";
  }
}

// If Condition | Switch
// Comparison Operators > < >= <= ==
var x = 5;

if (x <= 3) {
}

switch (x) {
  case 2:
    console.log("yes 2");
    break;

  case 5:
    console.log("yes 5");
    break;

  case 7:
    console.log("yes 7");
    break;

  default:
    console.log("no");
}

// Loop
// initializtion [start point] 1
// condition[end point] 5
// update[step] 2

// For Loop
for (var x = 10; x <= 5; x++) {
  console.log(x);
}

// x = 1  => check => run => update => check => run => update

// x = 10 | 10 <= 5
/*
  x = 1 | 1 <= 5 ||   log => 1
  x = 2 | 2 <= 5 ||   log => 2
  x = 3 | 3 <= 5 ||   log => 3
  x = 4 | 4 <= 5 ||   log => 4
  x = 5 | 5 <= 5 ||   log => 5
  x = 6 | 6 <= 5
*/

// for (var i = 1; i > 0; i++) {
//   console.log(i);
// }
// i = 1 | 1 > 0 |  => 1
// i = 2 | 2 > 0 |  => 2
// i = 3 | 3 > 0 |  => 3
