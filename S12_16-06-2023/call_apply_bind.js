var obj1 = {
  c: 100,
};

var obj2 = {
  c: 300,
};

function fnAdd(a, b) {
  console.log(a + b + this.c); //window.c //20 + 30 + 100 = 150
}

// fnAdd(20, 30); // c = 100

// fnAdd(20, 30); // c= 300

// fnAdd(20, 30); //c = 100

fnAdd.call(obj1, 20, 30); // 150

fnAdd.call(obj2, 20, 30); // 350

fnAdd.apply(obj2, [50, 50]); // 400

var fn = fnAdd.bind(obj1, 100, 100); //300
fn();
