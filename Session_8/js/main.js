// Templat String

let str = "Ahmed";

let x = 5;

console.log(str + x); // Ahmed5

// let selectElm = document.getElementById("selectElem");

// for (let i = 1995; i <= 2022; i++) {
//   // selectElm.innerHTML += "<option>" + i + "</option>";
//   selectElm.innerHTML += `<option> ${i} </option>`;
// }

let y = "5";
let o = "[]"; // string

// LocalStorage => db
let products = ["Lab", "Keyboard", "Mouse"];
// '["Lab", "Keyboard", "Mouse"]'
// Convert array(object) to String => JSON.stringfy(x)
// Convert String to array(object) => JSON.parse(x)

// setItem
// let theName = "Hamza";
// localStorage.setItem("myName", theName);
// localStorage.setItem("products", JSON.stringify(products));

// // getItem

// let r = localStorage.getItem("myName");
// console.log(r);

// let z = localStorage.getItem("products");
// console.log(JSON.parse(z));

// removeItem
// localStorage.removeItem("myName");
// localStorage.removeItem("products");

// clear
// localStorage.clear();
// Token 5e45wf4$$sdlkrjqwlkhgnwertwekjhg
// Register Login

// Todo App
let inputEl = document.querySelector("input");
let addTodoBtn = document.querySelector("#add-todo");
let clearDataBtn = document.querySelector("#clear-data");
let ulEl = document.querySelector("ul");
let todos = [];

if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  drawUi();
}

addTodoBtn.addEventListener("click", addTodo);
clearDataBtn.addEventListener("click", clearData);

function addTodo() {
  todos.push(inputEl.value); // ["Study Js", "Study HMTL", "Hello HTML","wefwef"]

  // Add Todos To LocalStorage
  localStorage.setItem("todos", JSON.stringify(todos));

  drawUi();
}

function drawUi() {
  ulEl.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    ulEl.innerHTML += `<li> ${todos[i]} </li>`;
  }
  inputEl.value = "";
}

// todos ["html", "css"] =
// UI = ui.iner = ""
// db =db.clear()

function clearData() {
  localStorage.clear();
  todos = [];
  ulEl.innerHTML = "";
}

// drawUi();

// 9  => 5
