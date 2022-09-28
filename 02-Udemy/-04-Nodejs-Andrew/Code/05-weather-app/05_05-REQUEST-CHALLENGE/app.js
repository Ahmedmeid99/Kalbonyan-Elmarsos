const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=ba0b00af3285682b6a88e2fde007db0c&query=New%20York&units=m";

// request({ url: url, json: true }, (error, respons) => {
//   console.log(
//     ` ${respons.body.current.weather_descriptions[0]} . it is currently ${respons.body.current.temperature} degrees out . it is feels like ${respons.body.current.feelslike} degress out.`
//   );
// });

const URL2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWhtZWQtZWlkIiwiYSI6ImNsNzJjOTd5dDAxbXAzb3BoaHB5dDZ2d2IifQ.-PhxcmRPSLbtYTNPKjeQTQ&limit=1";
request({ url: URL2, json: true }, (error, response) => {
  console.log(response.body.features[0].text);
  console.log(response.body.features[0].place_name);
  console.log(response.body.features[0].center[0]);
  console.log(response.body.features[0].center[1]);
});

// it is currently 32 degrees(m) out . it is feels like 36 degress (m) out.
// it is currently 90 degrees(f) out . it is feels like 95 degress (f) out.
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
