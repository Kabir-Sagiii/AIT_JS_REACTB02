function f1() {
  var id = 101;

  if (id > 50) {
    console.log(id); //yes
    var userName = "Raj";
  }

  console.log(userName);

  if (id > 100) {
    console.log(id, userName);
  }
}

f1();
