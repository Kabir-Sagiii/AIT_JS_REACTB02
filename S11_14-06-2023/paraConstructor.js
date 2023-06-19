class Products {
  //   pName;
  //   price;
  //   rating;

  constructor(pname, price, rating) {
    this.pName = pname;
    this.price = price;
    this.rating = rating;
  }

  displayDetails() {
    console.log(this.pName, this.price, this.rating);
  }
}
var product1 = new Products("Iphone 14", 120000, 8.5);
product1.displayDetails();

var product2 = new Products("Samsung s23 ultra", 130000, 9);
product2.displayDetails();
