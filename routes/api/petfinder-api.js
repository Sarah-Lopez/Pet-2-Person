
const fetch = require('node-fetch');
const axios = require('axios');
fetch.Promise = axios;
const queryURL = "https://api.petfinder.com/v2/oauth2/token"
const URL = "https://api.petfinder.com/v2/animals"
const key = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET



const apiCall = token => {
  fetch('/api/pets', {
    url: URL,
    method: 'get',
    headers: {"Authorization" : 'Bearer ' + token}
  }).then(res => {
    res.json()
    console.log("API Call: It worked! 200")
    // console.log(response)
  })
  .catch(error => {
    console.log("API Call Error")
    console.log(error)
  })
  .then(json => console.log(json));
  // return axios;
}


axios({
  url: queryURL,
  data: {
      grant_type: "client_credentials",
      client_id: key,
      client_secret: secret
  },
  method: 'post'
}).then(function (response) {
      token1 = response.data.access_token;
      expiresIn = response.expires_in;
      console.log("Token 200 Success!")
      // console.log("Token1: " + token1);
      apiCall(token1);
      // return token1
      // console.log(response);
      //callback(token1);
  })
  .catch(function (error) {
      console.log("Token Error")
      // console.log(error)
   })
  .finally(function () {
     
   });

  //  console.log(apiCall);
   