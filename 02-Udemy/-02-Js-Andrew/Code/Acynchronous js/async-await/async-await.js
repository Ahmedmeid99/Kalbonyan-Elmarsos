const getResult = async (num) => {
  if (typeof num === "number") {
    return 2 * num;
  } else {
    throw new Error("An ERROR her");
  }
};
getResult(2)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error", error);
  });
