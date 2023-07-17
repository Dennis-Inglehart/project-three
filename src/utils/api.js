var https = require('follow-redirects').https;
var fs = require('fs');
import axios from "axios";

const client = axios.create({
  baseURL: "https://developer.nps.gov" 
});

require('dotenv').config();

window.apiResponse = null; // shit from chatGPT (don't use that) 
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

const makeRequest = () => {
//   client.get('?_limit=10').then((response) => {
//     setPosts(response.data);
//  });
client.get(`/api/v1/parks?api_key=${apiKey}`).then((response) => {
return response.data
});
}

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//     globalThis.apiResponse = JSON.parse(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// req.end();

module.exports = makeRequest