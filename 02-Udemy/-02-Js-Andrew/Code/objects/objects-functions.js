let myBook = {
  title: "1984",
  auther: "georage orwell",
  pageCount: 326,
};

let getSummry = function (enyObject) {
  return {
    summary: `${enyObject.title} created by ${enyObject.auther}`,
    pageCountSummary: `${enyObject.title} is ${enyObject.pageCount}`,
  };
};

console.log(getSummry(myBook));
