var arr = [10, 20, 21, 45, 76, 89, 74, 23, 21];
// 2 returns remainder 0 then it is even number

function printEven() {
  arr.forEach(function (ele) {
    if (ele % 2 != 0) {
      console.log(ele);
    }
  });
}

printEven();
