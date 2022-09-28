//////////////////////
// CALLBACK FUNCTION
//////////////////////

const geocode1 = () => {
  setTimeout(() => {
    console.log("wait two second");
  }, 2000);
};
geocode1(); // wait two second
/////////////////////////

const geocode2 = (address, callbackFun) => {
  setTimeout(() => {
    const data = {
      let: address,
      log: address,
    };
    callbackFun(data);
  }, 2000);
};

geocode2(12, (data) => {
  console.log(data);
}); // { let: 12, log: 12 }
/////////////////////////
