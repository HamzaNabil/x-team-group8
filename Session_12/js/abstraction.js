function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;

  let monthlyBouns = 1500;

  let calcTotalSalary = function () {
    console.log(salary + monthlyBouns); // 2500
  };

  this.getEmpDetails = function () {
    console.log(this.name, this.age);
    calcTotalSalary();
  };
}

// Hidding Details from user

let emp = new Employee("mohamed", 25, 1500);

// emp.calcTotalSalary(); // 3000

// emp.monthlyBouns = 5000;

// emp.calcTotalSalary();

emp.getEmpDetails();
