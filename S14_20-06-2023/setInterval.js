function fnInterval() {
  let id = setInterval(() => {
    console.log("Kabir");
  }, 1000);

  setTimeout(() => {
    clearInterval(id);
  }, 10000);
}

fnInterval();
