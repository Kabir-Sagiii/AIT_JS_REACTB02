var arr = [10, 20, 21, 45, 76, 89, 74, 23, 21];

function evenOrOdd() {
  arr.forEach(function (ele) {
    if (ele % 2 === 0) {
      console.log(ele, "is a Even Number");
    } else {
      console.log(ele, "is a odd Number");
    }
  });
}
evenOrOdd();
