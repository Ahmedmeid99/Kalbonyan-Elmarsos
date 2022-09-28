const request = require("request");
const geocode = require("./geocode");
// const url =
//   "http://api.weatherstack.com/current?access_key=ba0b00af3285682b6a88e2fde007db0c&query=New%20York&units=m";

// request({ url: url, json: true }, (error, respons) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (respons.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       ` ${respons.body.current.weather_descriptions[0]} . it is currently ${respons.body.current.temperature} degrees out . it is feels like ${respons.body.current.feelslike} degress out.`
//     );
//   }
// });

geocode("Los Angeles", (error, data) => {
  console.log(`Error: ${error}`);
  console.log(data);
});
