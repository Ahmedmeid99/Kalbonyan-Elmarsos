const http = require("http");
const long = "40";
const lat = "-75";
const URL = `http://api.weatherstack.com/current?access_key=ba0b00af3285682b6a88e2fde007db0c&query=${long},${lat}&units=m`;

const request = http.request(URL, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(`Error : ${error}`);
});

request.end();
