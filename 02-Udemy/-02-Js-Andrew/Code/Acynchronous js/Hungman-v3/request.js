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
