//
const searchEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const p1 = document.querySelector("#message-1");
const p2 = document.querySelector("#message-2");
//

const getData = (location) => {
  p1.innerHTML = "loadding...";
  p2.innerHTML = "";
  fetch(`/weather?address=${location}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.error) {
        p1.innerHTML = data.error;
        //
      } else {
        p1.innerHTML = data.location;
        p2.innerHTML = data.forecast;
        //
      }
    });
};

searchEl.addEventListener("submit", (e) => {
  e.preventDefault();

  getData(inputEl.value.trim());
});
// Philadelphia
