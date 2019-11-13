
const axios = require('axios');
const queryURL = "https://api.petfinder.com/v2/oauth2/token"
const URL = "https://api.petfinder.com/v2/animals"
const key = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET


const tokenCall = async (params) => {
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
    return apiCall(token1, params)
  } catch (error) {
    console.log("Token Error")
    console.log(error);
  }
};

const apiCall = async (token, params) => {
  try {
    const response = await axios({
      url: URL,
      method: 'get',
      params: params,
      headers: { "Authorization": 'Bearer ' + token }
    });
    const data = response.data.animals;
    console.log("API Call: It worked......I guess")
    // console.log(data);
    return data
  } catch (error) {
    console.log("API Call Error")
    console.log(error);
  }
};


module.exports = {
  apiCall: apiCall,
  tokenCall: tokenCall
}
