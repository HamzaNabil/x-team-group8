// Prototype => object
// Root Object

// Bank

// function MiniBank(balance) {
//   this.balance = balance;

//   this.setBalance = function (vl) {
//     this.balance = vl;
//   };
//   this.getBalance = function () {
//     return this.balance;
//   };
//   this.deposit = function (vl) {
//     if (vl <= 0) {
//       console.log("value must be a positive number");
//     } else {
//       let newBalance = this.getBalance() + vl;
//       this.setBalance(newBalance);
//     }
//   };
//   this.withdraw = function (vl) {
//     let newBalance = this.getBalance() - vl;
//     if (newBalance < 0) {
//       console.log("dont have enought money!!");
//     } else {
//       this.setBalance(newBalance);
//     }
//   };
// }

// let bank = new MiniBank(0);
// bank.setBalance(1000);
// bank.deposit(-200);

// bank.getBalance(); // 1000

// function Character(name, strength, hitpoints) {
//   this.name = name;
//   this.strength = strength;
//   this.hitpoints = hitpoints;
// }

// Character.prototype.status = function () {
//   console.log(`${this.name} -- ${this.strength} -- ${this.hitpoints}`);
// };

// Character.prototype.attack = function (opponent) {
//   if (opponent.hitpoints > 0) {
//     console.log(`${this.name} attacked ${opponent.name}`);
//     opponent.hitpoints -= this.strength;
//   } else {
//     console.log(`${this.name} is win`);
//     console.log(`${opponent.name} is died!!`);
//   }
// };

// let ahmed = new Character("ahmed", 10, 100);
// let mohamed = new Character("mohamed", 20, 100);

// ahmed.attack(mohamed);
// ahmed.attack(mohamed);
// ahmed.attack(mohamed);
// mohamed.status();

// mohamed.attack(ahmed);
// mohamed.attack(ahmed);
// mohamed.attack(ahmed);
// mohamed.attack(ahmed);
// mohamed.attack(ahmed);
// mohamed.attack(ahmed);

// ahmed.status();

// let inputEl = document.querySelector("#todoInput");
// let btnEl = document.querySelector("#todoButton");

// btnEl.addEventListener("click", addTodo);

// function addTodo() {
//   console.log(inputEl.value);
// }

// function Todo() {
//   this.inputEl = document.querySelector("#todoInput");
//   this.btnEl = document.querySelector("#todoButton");

//   this.btnEl.addEventListener("click", () => {
//     this.addTodo();
//   });

//   this.addTodo = function () {
//     console.log(this.inputEl.value);
//   };
// }

// new Todo();

// Logic
