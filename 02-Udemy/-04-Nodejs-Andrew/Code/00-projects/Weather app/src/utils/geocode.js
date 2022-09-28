const request = require("request");
const geocode = (address, callback) => {
  const URL2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWhtZWQtZWlkIiwiYSI6ImNsNzJjOTd5dDAxbXAzb3BoaHB5dDZ2d2IifQ.-PhxcmRPSLbtYTNPKjeQTQ&limit=1`;

  request({ url: URL2, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
      //
    } else if (body.features.length === 0) {
      callback("Unable to find location", undefined);
      //
    } else {
      callback(undefined, {
        location: body.features[0].place_name,
        long: body.features[0].center[1],
        lat: body.features[0].center[0],
      });
      //
    }
  });
};
module.exports = geocode;
