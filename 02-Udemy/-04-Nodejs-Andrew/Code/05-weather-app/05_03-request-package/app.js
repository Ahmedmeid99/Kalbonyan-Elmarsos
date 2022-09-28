const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=ba0b00af3285682b6a88e2fde007db0c&query=New%20York";

request({ url: url, json: true }, (error, respons) => {
  console.log(respons.body.current);
});

/*
{
  observation_time: '06:16 PM',
  temperature: 32,
  weather_code: 116,
  weather_icons: [
    'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png'
  ],
  weather_descriptions: [ 'Partly cloudy' ],
  wind_speed: 15,
  wind_degree: 180,
  wind_dir: 'S',
  pressure: 1021,
  precip: 0,
  humidity: 37,
  cloudcover: 75,
  feelslike: 36,
  uv_index: 7,
  visibility: 16,
  is_day: 'yes'
}
*/
