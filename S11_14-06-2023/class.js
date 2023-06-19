class Products {
  pName = "Trimmer";
  price = 5000;
  rating = 7;

  displayDetails() {
    console.log(this.pName, this.price, this.rating);
  }
}
var product1 = new Products();
product1.displayDetails();
