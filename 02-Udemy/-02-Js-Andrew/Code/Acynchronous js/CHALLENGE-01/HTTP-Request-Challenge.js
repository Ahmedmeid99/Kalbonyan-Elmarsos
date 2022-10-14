///////////////////////
//CHALLENGE 01
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const allData = JSON.parse(e.target.responseText);
    const myCountry = allData.find(function (country) {
      return country.cca2 === "EG";
    });
    console.log(myCountry.name.common);
  } else if (e.target.readyState === 4) {
    console.log("Unable to fatch data");
  }
});
