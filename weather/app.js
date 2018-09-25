var request = require("request");

request(
  {
    url:
      "http://www.mapquestapi.com/geocoding/v1/address?key=ZvvIQ83TDDuiml3zAAiw1cpsdfu1pAvy&location=7608%20allentown%20rd%20md",
    json: true
  },
  function(error, response, body) {
    // console.log("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log(JSON.stringify(body, undefined, 2)); // Print the HTML for the Google homepage.
  }
);
