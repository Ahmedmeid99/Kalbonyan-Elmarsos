const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("this is my error", undefined);
    callback(undefined, [1, 2, 3, 4]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error); // this is my error
  }

  console.log(result); // [1,2,3,4]
});
