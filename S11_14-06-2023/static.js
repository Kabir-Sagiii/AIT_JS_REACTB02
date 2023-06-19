class A {
  name = "abc";
  gender = "male";
  static city = "Delhi";

  display() {
    console.log(this.name, this.gender, A.city);
  }

  static changeCity() {
    A.city = "Nagpur, MH";
    // this.name = "Rajiv";
  }
}

var a1 = new A();
// a1.display();
// console.log(a1);

var a2 = new A();
A.city = "Mumbai";
a2.display();
a1.display();

A.changeCity();
a2.display();
a1.display();
