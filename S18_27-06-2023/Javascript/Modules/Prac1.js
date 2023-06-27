import { data } from "./Prac3.js";
var city = "Delhi";

const myArrowFn = () => {
  console.log("My first arrow function");
  console.log(data.name);
};

function fnAdd(x, y) {
  console.log(x + y);
}

function fnMul(x, y) {
  console.log(x * y);
}

export { fnAdd, fnMul, city, myArrowFn };
