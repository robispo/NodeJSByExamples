console.clear();

const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather");

var argv = yargs
  .option({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  weather.getWeather(data.lat, data.lng, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
  });
});
