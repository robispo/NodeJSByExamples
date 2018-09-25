console.clear();
var request = require("request");
var yargs = require("yargs");

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

console.log(argv.address);
console.log(encodeURI(argv.address));

const encodeAddress = encodeURI(argv.address);
const url = `http://www.mapquestapi.com/geocoding/v1/address?key=ZvvIQ83TDDuiml3zAAiw1cpsdfu1pAvy&location=${encodeAddress}`;

request(
  {
    url,
    json: true
  },
  function(error, response, body) {
    // console.log("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log(JSON.stringify(body, undefined, 2)); // Print the HTML for the Google homepage.
    console.log(body.results[0].locations[0].street);
    console.log(body.results[0].locations[0].latLng.lat);
    console.log(body.results[0].locations[0].latLng.lng);
  }
);
