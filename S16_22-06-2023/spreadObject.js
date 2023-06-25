var obj1 = {
  id: 101,
  name: "Rahul Verma",
  city: "Delhi",
};

var obj = {
  state: "Delhi",
};

var obj2 = {
  ...obj1,
  ...obj,
  email: "Rahul@gmail.com",
};

console.log(obj1);
console.log("---------------------------------------");
console.log(obj2);
