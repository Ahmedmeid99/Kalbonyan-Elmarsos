//////////////////////////////////
const sum = (num1, num2, callbackFun) => {
  setTimeout(() => {
    callbackFun(num1 + num2);
  }, 2000);
};

sum(1, 2, (result) => console.log(result)); // 3
sum(7, 3, (result) => console.log(result)); // 10
//////////////////////////////////
const filterArray = (array, num, callback) => {
  const filteredArray = array.filter((char) => char === num);
  callback(filteredArray);
};

const array = [1, 2, 3, 4, 5, 1, 3, 1];

filterArray(array, 1, (lengthOfNum) =>
  console.log({ array: lengthOfNum, length: lengthOfNum.length })
); // { array: [ 1, 1, 1 ], length: 3 }

//////////////////////////////////

filterArray(array, 4, (lengthOfNum) =>
  console.log({ array: lengthOfNum, length: lengthOfNum.length })
); // { array: [ 1, 1, 1 ], length: 3 }

//////////////////////////////////
