class A {
  name = "A class";
}

class B extends A {
  display() {
    console.log(this.name);
  }
}

var b1 = new B();
b1.display();
