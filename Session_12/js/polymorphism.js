class Animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log(this.name + " eats rice");
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name);
  }
  eats() {
    super.eats();
    console.log(this.name + " eats fishes");
  }
}

let fish = new Fish("fish");
