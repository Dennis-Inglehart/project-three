var https = require('follow-redirects').https;
var fs = require('fs');

require('dotenv').config();

window.apiResponse = null; // shit from chatGPT
var apiKey = process.env.npsApiKey;
var options = {
  'method': 'GET',
  'hostname': 'developer.nps.gov',
  'path': `/api/v1/parks?api_key=${apiKey}`,
  'headers': {
  },
  'maxRedirects': 20
};
console.log(options);

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    globalThis.apiResponse = JSON.parse(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();