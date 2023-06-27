import fn, { f1, add } from "./file1.mjs";

function f2() {
  fn();
  f1();
  add();
}

f2();
