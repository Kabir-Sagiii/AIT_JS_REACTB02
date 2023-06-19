function createPromise() {
  var promiseObject = new Promise(function (resolve, reject) {
    // resolve("Kabir Sagar");
    reject("Delhi");
  });

  return promiseObject;
}

var promise = createPromise();

promise.then(
  function (successResponse) {
    console.log("Success ", successResponse);
  },
  function (failureResponse) {
    console.log("Failure ", failureResponse);
  }
);
