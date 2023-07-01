var obj = {
  username: "Rohan Verma",
  city: "Delhi",
  email: "Rohan@gmail.com",
  isEmployed: true,
  phone: 999999,
};

// console.log(obj.email,obj.phone)

let { city, username, phone, isEmployed } = obj;
console.log(city, username, phone, isEmployed);
