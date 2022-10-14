const getPuzzle = function (wordCount, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("An error has taken place", undefined);
    }
  });
};

//////////////////////////////////////////
// promise patteren
const getPuzzle2 = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data);
      } else if (e.target.readyState === 4) {
        reject("We Have An ERROR");
      }
    });
  });
getPuzzle2("2").then(
  (data) => {
    console.log(data.puzzle);
  },
  (error) => {
    console.log(error);
  }
);
getPuzzle2("3").then(
  (data) => {
    console.log(data.puzzle);
  },
  (error) => {
    console.log(error);
  }
);
//////////////////////////////////////////
// callback patteren
const getCountryName = (countryCode, callback) => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send();
  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const allData = JSON.parse(e.target.responseText);
      const myCountry = allData.find(function (country) {
        return country.cca2 === countryCode;
      });
      callback(undefined, myCountry.name.common);
    } else if (e.target.readyState === 4) {
      callback(error, undefined);
    }
  });
};
//////////////////////////////////////////
// promise patteren 02
const getCountryName2 = (countryCode) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.com/v3.1/all");
    request.send();
    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const allData = JSON.parse(e.target.responseText);
        const myCountry = allData.find(function (country) {
          return country.cca2 === countryCode;
        });
        resolve(myCountry.name.common);
      } else if (e.target.readyState === 4) {
        reject("error");
      }
    });
  });
getCountryName2("EG").then((country) => {
  if (country) {
    console.log(country);
  } else {
    // handle error
    console.log(`Error : ${error}`);
  }
});
