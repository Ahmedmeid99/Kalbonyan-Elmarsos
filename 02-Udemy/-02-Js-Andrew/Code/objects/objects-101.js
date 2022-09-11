let myBook = {
  title: "1984",
  auther: "georage orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.auther}`);
//updata property in object
myBook.title = "anmial farm";

console.log(myBook.title); // anmial farm
console.log(myBook); //{ title: 'anmial farm', auther: 'georage orwell', pageCount: 326 }
