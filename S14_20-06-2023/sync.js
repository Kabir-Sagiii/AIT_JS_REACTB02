function fn() {
  console.log("Befor For Loop");
  setTimeout(() => {
    for (var i = 0; i < 10000; i++) {
      console.log(i); // 2 to 3 seconds
    }
  }, 1000);

  console.log("Kabir Sagar");
}

fn();
