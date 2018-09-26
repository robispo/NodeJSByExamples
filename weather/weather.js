const request = require("request");

var getWeather = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/ae83ad34659b2f9368107906bf541724/${lat},${lng}`;

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
        callback(body);
        return;
      }

      callback(undefined, body.currently);
    }
  );
};

module.exports = {
  getWeather
};
