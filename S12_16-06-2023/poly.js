class A {
  #name;
  constructor() {
    this.a = 10;
    this.b = 20;
    this.#name = "Rajiv";
  }
  add() {
    console.log(this.#name);
    this.result = this.a + this.b;
    console.log(this.result); //30
  }
}

class B extends A {
  #gender;
  constructor() {
    super();
    this.c = 30;
    this.#gender = "male";
  }

  add() {
    // console.log(this.#name);
    console.log(this.a * this.b * this.c); //60
  }

  display() {
    this.add();
  }
}

var b1 = new B();

b1.display();
