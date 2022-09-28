const geocode = require("./geocode");
const forecast = require("./forecast");

///////////////////////////////////////
// node .\app.js add --location='Los Angeles'
const address = process.argv[2];

console.log(address);

const getLocation = (address) => {
  // callback channing callback inside anather callback
  geocode(address, (error, { long, lat, address }) => {
    if (error) {
      return console.log(error);
    }
    forecast(long, lat, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(address);
      console.log(forecastData);
    });
  });
};
//"Los Angeles"
if (!address) {
  console.log("not address");
} else if (!address.split(" ")[1]) {
  getLocation(address);
} else if (address.split(" ")[1]) {
  getLocation(`${address} ${process.argv[3]}`);
}
