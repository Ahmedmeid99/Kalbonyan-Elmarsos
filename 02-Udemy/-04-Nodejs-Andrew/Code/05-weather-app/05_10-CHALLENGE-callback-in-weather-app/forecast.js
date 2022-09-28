const request = require("request");
const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=ba0b00af3285682b6a88e2fde007db0c&query=${long},${lat}&units=m`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        ` ${response.body.current.weather_descriptions[0]} . it is currently ${response.body.current.temperature} degrees out . it is feels like ${response.body.current.feelslike} degress out.`
      );
    }
  });
};

// ` ${respons.body.current.weather_descriptions[0]} . it is currently ${respons.body.current.temperature} degrees out . it is feels like ${respons.body.current.feelslike} degress out.`

module.exports = forecast;
