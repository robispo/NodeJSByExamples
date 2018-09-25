const request = require("request");

var forecastWeather = location => {
  const url = `https://api.darksky.net/forecast/ae83ad3465dd9b2f9368107906bf541724/${
    location.lat
  },${location.lng}`;

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
      if (response.statusCode !== 200) {
        console.log(body);
        return;
      }

      console.log(`Weather for: ${location.street}`);
      console.log(JSON.stringify(body.currently));
      //   callback(undefined, {
      //     street: body.results[0].locations[0].street,
      //     lat: body.results[0].locations[0].latLng.lat,
      //     lng: body.results[0].locations[0].latLng.lng
      //   });
    }
  );
};

module.exports = {
  forecastWeather
};
