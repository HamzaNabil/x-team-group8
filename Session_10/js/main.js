// // https://jsonplaceholder.typicode.com/posts

// // Promises [Resolve - Reject ]

// // function getUsers() {
// //   fetch("https://jsonplaceholder.typicode.com/users")
// //     .then((d) => d.json())
// //     .then((res) => console.log(res))
// //     .catch((err) => console.log(err));
// // }

// // getUsers();
// // async await
// // async function getUsers() {
// //   try {
// //     let d = await fetch("https://jsonplaceholder.typicode.com/users");
// //     let res = await d.json();
// //     drawUsers(res);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // }

// // getUsers();
// // let div = document.querySelector("#data");
// // function drawUsers(users) {
// //   for (let i = 0; i < users.length; i++) {
// //     div.innerHTML += `
// //             <h2> ${users[i].name} </h2>
// //             <p> ${users[i].email} </p>
// //             <a href="${users[i].website}"> My Website </span>
// //         `;
// //   }
// // }

// //

// let users = [
//   { id: 1, name: "Hamada", age: 25 },
//   { id: 2, name: "Tarek", age: 35 },
//   { id: 3, name: "Mohamed", age: 25 },
//   { id: 4, name: "Yasser", age: 45 },
// ];

// // sum all ages for all users
// let ages = users.reduce((sum, item) => sum + item.age, 0);
// console.log(ages);

// // let sum = 0;
// // users.forEach((user) => {
// //   sum += user.age;
// // });
// // console.log(sum);

// let filteredUsers = users.filter((item) => item.id != 2);
// console.log(filteredUsers);

// // users.splice(0, 1);
// // console.log(users);

// // for (var i = 0; i < users.length; i++) {
// //   if (users[i].age == 25) {
// //     console.log(users[i].name);
// //   }
// // }

// // Find
// // Filter
// // let findUser = users.filter((item) => item.age == 25);

// // console.log(findUser);

// let a = [1, 2, 3, 4];

// // let y = a.find(function (x) {
// //   return x == 4;
// // });
// // console.log(y);
// // use map to return every number multpile 2

// let result = a.map(function (item) {
//   return item * 2;
// });

// console.log(result);

// Logic

let users = [
  { id: 1, name: "Hamada", age: 25 },
  { id: 2, name: "Tarek", age: 35 },
  { id: 3, name: "Tarek", age: 40 },
  { id: 4, name: "Tarek Mohamed", age: 50 },
  { id: 5, name: "Mohamed", age: 25 },
  { id: 6, name: "Yasser", age: 45 },
  { id: 7, name: "Mohamed Hamada", age: 50 },
];

let searchInput = document.getElementById("search-user");
let searchBtn = document.getElementById("btn");
let searchList = document.getElementById("search-list");

searchBtn.addEventListener("click", search);

function search() {
  let value = searchCriteria(searchInput.value); //

  if (value == "") {
    listUsers(users);
    return;
  }

  let searchedUsers = users.filter(function (item) {
    return searchCriteria(item.name).includes(value);
  });

  listUsers(searchedUsers);
}

function searchCriteria(term) {
  return term.toLowerCase().trim();
}

function listUsers(items) {
  searchList.innerHTML = "";
  items.forEach(function (item) {
    searchList.innerHTML += `
            <li> ${item.name} - ${item.age} <button onclick="deleteUser(${item.id})"> Delete </button> </li>
        `;
  });
}
listUsers(users);

function deleteUser(id) {
  users = users.filter((user) => user.id != id);
  listUsers(users);
}

// Task .. simple Pagination
// [ ]
// 100 Products
// 10 Pages
// 100 / 10 = Products Per Page

// 1 2 3 ... 10
