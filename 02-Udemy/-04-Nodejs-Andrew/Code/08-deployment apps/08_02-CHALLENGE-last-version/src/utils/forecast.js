const request = require("request");
const forecast = (long, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=ba0b00af3285682b6a88e2fde007db0c&query=${long},${lat}&units=m`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      console.log("error =>");
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        ` ${body.current.weather_descriptions[0]} . it is currently ${body.current.temperature} degrees out . it is feels like ${body.current.feelslike} degress out ,wind speed is ${body.current.wind_speed} km/s,and time is ${body.current.observation_time}`
      );
    }
  });
};

// ` ${respons.body.current.weather_descriptions[0]} . it is currently ${respons.body.current.temperature} degrees out . it is feels like ${respons.body.current.feelslike} degress out.`

module.exports = forecast;
