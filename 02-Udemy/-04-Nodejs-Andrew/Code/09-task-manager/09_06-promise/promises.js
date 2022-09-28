const doWorkCallback = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([5, 6, 7, 8, 9]);
    reject("cant fetch data");
  }, 2000);
});

doWorkCallback
  .then((result) => {
    console.log(result); // [5, 6, 7, 8, 9]
  })
  .catch((error) => {
    console.log(`this is my Error: ${error}`); // this is my Error: cant fetch data
  });
