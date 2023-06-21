function setTimeOutfn() {
  let id1 = setTimeout(() => {
    console.log("Executed after 1 seconds");
  }, 1000);

  let id2 = setTimeout(() => {
    console.log("Executed after 3 seconds");
  }, 3000);

  let id3 = setTimeout(() => {
    console.log("Executed after 5 seconds");
  }, 5000); //3 second

  setTimeout(() => {
    clearTimeout(id3);
  }, 8000);
}

setTimeOutfn();
