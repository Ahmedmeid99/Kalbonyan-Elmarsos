const favs = (first = "first", second = "second", third = "third") => {
  console.log(first, second, third);
};
//
favs("react", "js", "node");
favs("react", "js");
//
////////////////////////////
const info = (type, { data, link } = {}) => {
  console.log(type, data, link);
};
//
info("st", { data: "data... 123", link: "ahmed.com" });
info("st");
