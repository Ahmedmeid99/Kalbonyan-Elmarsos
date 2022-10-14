//////////////////////////////////////////
// callback patteren 01
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
// promise patteren 02
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
); // Worthless Junk
getPuzzle2("3").then(
  (data) => {
    console.log(data.puzzle);
  },
  (error) => {
    console.log(error);
  }
); // Human Looking Robot
//////////////////////////
// fatch pattern 03
const getPuzzle3 = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error("An ERROR her :=>");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};
getPuzzle3("3")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`Error : ${error}`);
  }); // Birthday Gift Baskets
//////////////////////////////////////////
// Async Await patteren 04
const getPuzzle4 = async (wordCount) => {
  const request = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (request.status == 200) {
    const data = await request.json();
    return data.puzzle;
  } else {
    throw new Error("ERROR :=> ");
  }
};
getPuzzle4(2)
  .then((data) => {
    console.log(data); //Quirky Personality
  })
  .catch((error) => {
    console.log(error);
  });
//////////////////////////////////////////
// callback patteren 01
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
//////////////////////////
// fatch pattern 03
const getCountryName3 = (countryCode) => {
  return fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error("An ERROR her :=>");
      }
    })
    .then((data) => {
      let theCounty = data.find((country) => {
        return country.cca2 === countryCode;
      });
      return theCounty.name.common;
    });
};
getCountryName3("EG")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
/////////////////////////////////////////
// fatch pattern 03
const getCountryName4 = async (countryCode) => {
  const request = await fetch("https://restcountries.com/v3.1/all");
  if (request.status == 200) {
    const response = await request.json();
    let theCounty = response.find((country) => {
      return country.cca2 === countryCode;
    });
    return theCounty.name.common;
  } else {
    throw new Error(`AN Error :=>`);
  }
};
getCountryName4("EG")
  .then((data) => console.log(data)) // Egypt
  .catch((error) => console.log(error));

/////////////////////////////////////////
//CHALLENGE
/////////////////////////////////////////
//get location 03
const getLocation = () => {
  return fetch("https://ipinfo.io/156.210.90.154?token=178608f420f751")
    .then((response) => {
      if (response.status === 200) {
        const responseData = response.json();
        return responseData;
      } else {
        throw new Error("An ERROR her");
      }
    })
    .then((data) => {
      return data;
    });
};

getLocation()
  .then((data) => {
    console.log(`${data.country} ${data.region} ${data.city}`); // EG Sharqia Fāqūs
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });
