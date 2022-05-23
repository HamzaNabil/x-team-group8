class Machine {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
}

class Car extends Machine {
  constructor(name, model, price) {
    super(name, model);
    this.price = price;
  }
}

class Toytoa extends Machine {
  constructor(name, model, price, color) {
    super(name, model, price);
    this.price = price;
    this.color = color;
  }
}

class BYD extends Car {
  constructor(name, model, price, engine) {
    super(name, model, price);
    this.engine = engine;
  }
}

let toytoa = new Toytoa("toytoa", "2020", "500000", "red");
let byd = new BYD("byd", "2020", "500000", "1500cc");
