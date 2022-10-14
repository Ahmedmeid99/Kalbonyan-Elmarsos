////////////////
// DOM
////////////////

let ps = document.querySelectorAll("p");
ps.forEach(function (ele) {
  ele.textContent = "***********";
});

// add element
let h3El = document.createElement("h3");
h3El.textContent = "hello from js";
document.querySelector("body").appendChild(h3El);

// remove element
let h2El = document.querySelector("h2");
// h2El.remove();
