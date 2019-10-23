
const axios = require('axios');
const queryURL = "https://api.petfinder.com/v2/oauth2/token"
const URL = "https://api.petfinder.com/v2/animals"
const key = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET


const tokenCall = async () => {
  try {
    const res = await axios({
      url: queryURL,
      data: {
          grant_type: "client_credentials",
          client_id: key,
          client_secret: secret
      },
      method: 'post'
    });
    token1 = res.data.access_token;
    console.log("Token 200 Success!")
    // console.log(token1);
    // return [apiCall(token1), birdsCall(token1)];
    return apiCall(token1)
  } catch (error) {
    console.log("Token Error")
    // console.log(error);
  }
};

const apiCall = async token => {
  try {
    const response = await axios({
      url: URL,
      method: 'get',
      headers: {"Authorization" : 'Bearer ' + token}
    });
    const data = response.data.animals;
    console.log("API Call: It worked......I guess")
    // console.log(data);
    return data
  } catch (error) {
    console.log("API Call Error")
    // console.log(error);
  }
};
/*
const birdsCall = async token => {
  try {
    const response = await axios({
      url: URL,
      method: 'get',
      params: {"type": "bird"},
      headers: {"Authorization" : 'Bearer ' + token}
    });
    const data = response.data.animals[0];
    console.log("Bird Call: It worked......I guess")
    // console.log(data);
    return data
  } catch (error) {
    console.log("API Call Error")
    // console.log(error);
  }
};
// getData(url);

*/

  module.exports = {
    apiCall: apiCall,
    // bird: birdsCall,
    tokenCall: tokenCall
  }
