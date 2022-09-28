const geocode = require("./geocode");
const forecast = require("./forecast");

// callback channing callback inside anather callback
geocode("Los Angeles", (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.long, data.lat, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(forecastData);
  });
});
