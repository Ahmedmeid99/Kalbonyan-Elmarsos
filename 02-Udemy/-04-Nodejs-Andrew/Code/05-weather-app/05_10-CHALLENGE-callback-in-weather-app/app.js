const geocode = require("./geocode");
const forecast = require("./forecast");

forecast("-75.7088", "44.1545", (error, data) => {
  console.log(`Error: ${error}`);
  console.log(data);
});

// geocode("Los Angeles", (error, data) => {
//   console.log(`Error: ${error}`);
//   console.log(data);
// });
