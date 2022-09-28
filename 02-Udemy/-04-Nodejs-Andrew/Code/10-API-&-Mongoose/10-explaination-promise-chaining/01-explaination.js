////////////////////////////////
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

////////////////////////////////
add(1, 2)
  .then((sum) => console.log(sum))
  .catch((e) => console.log(e));

////////////////////////////////
add(1, 4)
  .then((sum) => {
    add(sum, 5)
      .then((sum2) => console.log(sum2))
      .catch((e) => console.log(e));
  })
  .catch((e) => console.log(e)); // 10

////////////////////////////////
/*******(Promise Chaining)*******/
add(1, 4)
  .then((sum) => {
    return add(sum, 5);
  })
  .then((sum2) => console.log(sum2))
  .catch((e) => console.log(e)); // 10
