class A {
  constructor() {
    this.city = "delhi";
  }
  display() {
    console.log("parent", this.city);
  }
}

class B extends A {
  constructor() {
    super();
    this.city = "Banglore";
  }
  display() {
    super.display();
    let a = new A();
    a.display();
    // console.log(this.city);
  }
}

let b = new B();
let a = new A();
b.display();
// a.display();
