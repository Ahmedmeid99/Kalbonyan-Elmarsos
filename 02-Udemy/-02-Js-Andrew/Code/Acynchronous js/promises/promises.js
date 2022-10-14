// callback function
setTimeout(() => {
  console.log("come from setTimeout");
}, 2000); // after 2s => come from setTimeout

const getDataCallback = function (callback) {
  setTimeout(() => {
    // callback(error, "this is the data");
    callback("this is the data", undefined);
  }, 2000);
};
getDataCallback((error, data) => {
  if (error) {
    console.log(error);
  } else {
    consolr.log(data);
  }
}); // this is the data
//////////////////////////////////////////
// promises
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`This is from resolve`);
    reject(`This is from reject`);
  }, 2000);
});
// newPromise.than((data)=>{},(error)=>{})
newPromise.then(
  (data) => {
    // This is from resolve
    console.log(data);
  },
  (error) => {
    // This is from reject
    console.log(`Error : ${error}`);
  }
);
///////////////////////////////////////
// craete counter
const boxes = document.querySelectorAll(".num");
let start = 0;
// add one and have end point
const updated = function () {
  boxes.forEach((box) => {
    let goal = box.dataset.goal;
    box.innerHTML = start++;
    if (start == goal) {
      clearInterval(counter);
    }
  });
};
// repeate function
let counter = setInterval(updated, 100);
