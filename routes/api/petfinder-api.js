
const request = require('superagent-use')(require('superagent'));
const token = require("./token");


const URL = "https://api.petfinder.com/v2/animals"

// interceptor used by superagent to add custom header for each request
request.use((req) => {
  req.header.custom_header = {
    "Authorization" : 'Bearer ' + token
  };
  return req;
});

request.get(URL)
    .query({ 
      view: 'jsonView',
      type: 'dog',
      location: '85382',
      gender: 'male',
      sort: 'distance' 
    }) // query string
    .end((err, res) => {
      if (err) { return console.log(err); }
      console.log(res.body.url);
      console.log(res.body.explanation);
    });
