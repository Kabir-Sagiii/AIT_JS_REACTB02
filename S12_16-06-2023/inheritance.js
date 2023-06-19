class Parent {
  name;
  city;
  id;

  constructor() {
    this.name = "Rajiv Shukla";
    this.city = "Mumbai";
    this.id = 101;
  }
}

class Child extends Parent {
  gender;
  state;

  constructor() {
    super();
    this.name = "Rohit Verma";
    this.gender = "male";

    this.state = "MH";
  }

  display() {
    console.log(super.name, this.city, this.gender);
  }
}

var c1 = new Child();
c1.display();
