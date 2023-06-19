class Demo {
  userName = "Rajiv shukla";
  city = "Bhopal";
  id = 101;

  changeCity() {
    //Implement the Functionality using properties
  }

  displayDetails() {
    console.log("Details will be printed");
    //Implement the Functionality using properties
  }
}

var obj1 = new Demo(); // obj1 = {userName:"Rajiv Shukla",city:"Bhopal",id:101,changeCity:function(){----}}

console.log(obj1.userName);
obj1.userName = "Rohit Verma";
console.log(obj1.userName);
obj1.displayDetails();

var obj2 = new Demo();
obj2.userName = "Sneha Reddy";
obj2.id = 102;
obj2.city = "Hyderabad";
obj2.gender = "female";

console.log(obj2.city);
console.log(obj1);
console.log(obj2);
