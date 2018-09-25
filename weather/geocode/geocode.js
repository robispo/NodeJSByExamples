const request = require("request");

var geocodeAddress = (address, callback) => {
  const encodeAddress = encodeURI(address);
  const url = `http://www.mapquestapi.com/geocoding/v1/address?key=ZvvIQ83TDDuiml3zAAiw1cpsdfu1pAvy&location=${encodeAddress}`;

  request(
    {
      url,
      json: true
    },
    function(error, response, body) {
      if (error) {
        callback(JSON.stringify(error));
        return;
      }

      callback(undefined, {
        street: body.results[0].locations[0].street,
        lat: body.results[0].locations[0].latLng.lat,
        lng: body.results[0].locations[0].latLng.lng
      });
    }
  );
};

module.exports = {
  geocodeAddress
};
