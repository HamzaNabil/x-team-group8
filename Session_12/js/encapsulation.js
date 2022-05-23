function Employee(name, phone, email) {
  this.name = name;
  this.phone = phone;
  this.email = email;

  this.getEmployeeDetails = function () {
    console.log(this.name);
    console.log(this.phone);
    console.log(this.email);
  };

  this.getEmployeePhone = function () {
    console.log(this.phone);
  };
}

let emp1 = new Employee("ahmed", "0123464", "ahmed@ahmed.com");

emp1.getEmployeeDetails();
emp1.getEmployeePhone();

class Employee2 {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;

    this.getEmployeeDetails = function () {
      console.log(this.name);
      console.log(this.phone);
      console.log(this.email);
    };

    this.getEmployeePhone = function () {
      console.log(this.phone);
    };
  }
}

let emp2 = new Employee2("ahmed", "0123464", "ahmed@ahmed.com");

emp2.getEmployeeDetails();
emp2.getEmployeePhone();
