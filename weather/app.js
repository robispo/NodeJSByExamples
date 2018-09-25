console.clear();

const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const forcecast = require("./forcecast");

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
  forcecast.forecastWeather(data);
  //   console.log(JSON.stringify(data, undefined, 2));
});
