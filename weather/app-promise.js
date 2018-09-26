const yargs = require("yargs");
const axios = require("axios");

var argv = yargs
  .option({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch weather for",
      string: true,
      default: "7608 allentown rd md"
    }
  })
  .help()
  .alias("help", "h").argv;

const encodeAddress = encodeURI(argv.address);

axios
  .get(
    `http://www.mapquestapi.com/geocoding/v1/address?key=ZvvIQ83TDDuiml3zAAiw1cpsdfu1pAvy&location=${encodeAddress}`
  )
  .then(r => {
    var lat = r.data.results[0].locations[0].latLng.lat;
    var lng = r.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/ae83ad34659b2f9368107906bf541724/${lat},${lng}`;

    console.log(r.data.results[0].locations[0].street);
    return axios.get(weatherUrl);
  })
  .then(r => {
    var temperature = r.data.currently.temperature;
    var apparentTemperature = r.data.currently.apparentTemperature;

    console.log(
      `The temperature is ${temperature}, but feels like ${apparentTemperature}`
    );
  })
  .catch(e => console.log("Error"));
