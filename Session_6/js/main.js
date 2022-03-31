// Vars 
var usernameInput = document.getElementById('username')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var button = document.querySelector('#add_user')
var ulListing = document.getElementById('listing_users')
var users = [];

// Events
button.addEventListener('click', addUser);

// Functions
// SRP
function addUser() {
  var user = {
    id: Math.floor( Math.random() * 5000 ), 
    name: usernameInput.value,
    phone: phoneInput.value,
    email: emailInput.value
  }
  users.push(user);

  drawUserUI();
  emptyInput();
}


function drawUserUI() {
  ulListing.innerHTML = "";
  for(var i = 0; i < users.length; i++) {
    ulListing.innerHTML += "<li>" + users[i].name + " " + users[i].email + " " + users[i].phone + " <button onclick='deleteUser(" + users[i].id + ")' > delete </button> </li>"
  }
}

function emptyInput() {
  usernameInput.value = ""
  phoneInput.value = ""
  emailInput.value = ""
}

// filter | find | findIndex | splice
function deleteUser(id) {
  // users [{id : 1} , {id: 2}]
  var user;

  for(var i = 0; i < users.length ; i ++) {
    if(users[i].id == id) {
      user = users[i];
    }
  }
  // console.log(users.findIndex(user));
}