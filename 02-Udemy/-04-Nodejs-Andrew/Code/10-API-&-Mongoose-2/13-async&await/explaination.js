////////////////////////////////////////
const dowork = () => {};
console.log(dowork()); // undefined

/*****(async function)*****/
const asyncDowork = async () => {};
console.log(asyncDowork()); // Promise { undefined }
////////////////////////////////////////
const dowork2 = async () => {
  //   throw new Error("there are an error defind in yor code");
  return "ahmed";
};
dowork2()
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

////////////////////////////////////////
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("unvaild endered numbers");
    }
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};
//
const dowork3 = async () => {
  const sum = await add(1, 2);
  const sum2 = await add(sum, -2);
  return sum2;
};

dowork3()
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
////////////////////////////////////////
