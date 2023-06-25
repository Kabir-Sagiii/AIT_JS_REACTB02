function fn(x, y, ...values) {
  console.log(x);
  console.log(y);
  values.forEach(function (ele) {
    console.log(ele);
  });
}

fn(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
