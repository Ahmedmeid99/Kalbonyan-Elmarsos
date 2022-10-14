///////////////////////
//CHALLENGE 01 (cynchronous)
// const getCountryName = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "https://restcountries.com/v3.1/all", false);
//   request.send();

//   if (request.readyState === 4 && request.status === 200) {
//     const allData = JSON.parse(request.responseText);
//     const myCountry = allData.find(function (country) {
//       return country.cca2 === "EG";
//     });
//     return myCountry.name.common;
//   } else if (request.readyState === 4) {
//     throw new Error("Unable to fatch data");
//   }
// };

///////////////////////
//CHALLENGE 02 (Acynchronous)

const getCountryName = (callback) => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send();
  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const allData = JSON.parse(e.target.responseText);
      const myCountry = allData.find(function (country) {
        return country.cca2 === "EG";
      });
      callback(undefined, myCountry.name.common);
    } else if (e.target.readyState === 4) {
      callback(error, undefined);
    }
  });
};
