const request = require("request");

var geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    var encodeAddress = encodeURI(address);
    var url = `http://www.mapquestapi.com/geocoding/v1/address?key=ZvvIQ83TDDuiml3zAAiw1cpsdfu1pAvy&location=${encodeAddress}`;

    request(
      {
        url,
        json: true
      },
      function(error, response, body) {
        if (error) {
          reject(JSON.stringify(error));
          return;
        }

        resolve({
          street: body.results[0].locations[0].street,
          lat: body.results[0].locations[0].latLng.lat,
          lng: body.results[0].locations[0].latLng.lng
        });
      }
    );
  });
};

geocodeAddress("20744")
  .then(r => console.log(r))
  .catch(e => console.log(e));
