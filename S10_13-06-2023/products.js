class Products {
  pId = 101;
  pName = "Samsung Ultra S23";
  price = 125000;
  stock = true;

  changePrice() {
    console.log("Proce will change");
  }

  displayDetails() {
    console.log("Details will be displayed");
  }
}
var product1 = new Products();

var product2 = new Products();
product2.pId = 102;
product2.pName = "Iphone 14";
product2.price = 110000;
product2.stock = false;

console.log(product1, product2);
