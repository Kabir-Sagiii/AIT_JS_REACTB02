class Products {
  //   pName;
  //   price;
  //   rating;

  constructor() {
    this.pName = "Macbook Pro 16";
    this.price = 240000;
    this.rating = 9.5;
  }

  displayDetails() {
    console.log(this.pName, this.price, this.rating);
  }
}
var product1 = new Products();
product1.displayDetails();

var product2 = new Products();
product2.pName = "Macbook Air";
product2.price = 110000;
product2.rating = 8;
product2.displayDetails();
