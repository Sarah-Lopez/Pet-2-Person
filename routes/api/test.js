
// const axios = require('axios');
// const queryURL = "https://api.petfinder.com/v2/oauth2/token"
// const URL = "https://api.petfinder.com/v2/animals"
// const key = process.env.CLIENT_ID
// const secret = process.env.CLIENT_SECRET
// // const request = require('superagent-use')(require('superagent'));
// // const token = require("./token");

// const type = "dog";
// const zip = 85326;
// const gender = "male";
// var token1;

// /*
//  console.log(token.tokenCall());
// console.log(token.test);

// const URL = "https://api.petfinder.com/v2/animals"

// module.exports = (type, zip, gender) => {
//   console.log(`Type: ${type}`)
//   console.log(`Zip: ${zip}`);
//   console.log(`Gender: ${gender}`);
// // interceptor used by superagent to add custom header for each request
// request.use((req) => {
//   req.header.custom_header = {
//     "Authorization" : 'Bearer ' + token
//   };
//   console.log(req);
//   return req;
// });

// request.get(URL)
//     .query({ 
//       view: 'jsonView',
//       type: type,
//       location: zip,
//       gender: gender,
//       sort: 'distance' 
//     }) // query string
//     .end((err, res) => {
//       if (err) { 
//         return console.log(err); 
//       }
//       console.log(res.body.url);
//       console.log(res.body.explanation);
//     });

//   }
// */


// const apiCall = token => {
// /*
//   request.use((req) => {
//     req.header.custom_header = {
//       "Authorization" : 'Bearer ' + token1
//     };
//     console.log("req");
//     return req;
//   }); 

//   const instance = axios.create({
//     baseURL: URL,
//     timeout: 1000,
//     headers: {"Authorization" : 'Bearer ' + token1}
//   }); */
  
//   axios({
//     url: URL,
//     method: 'get',
//     headers: {"Authorization" : 'Bearer ' + token}
//   }).then(function(response) {
//     console.log("API Call: It worked! 200")
//     // console.log(response)
//     return response
//   })
//   .catch(function (error) {
//     console.log("API Call Error")
//     // console.log(error)
//   })
//   .finally(function () {
    
//   });
//   // return axios;
// }
//    /*
//   request.get(URL)
//       .query({ 
//         view: 'jsonView',
//         type: type,
//         location: zip,
//         gender: gender,
//         sort: 'distance' 
//       }) // query string
//       .end((err, res) => {
//         if (err) { 
//           console.log("Why is this error here?")
//           return console.log(err); 
//         }
//         console.log(res.body.url);
//         console.log(res.body.explanation);
//       });
// */


// axios({
//   url: queryURL,
//   data: {
//       grant_type: "client_credentials",
//       client_id: key,
//       client_secret: secret
//   },
//   method: 'post'
// }).then(function (response) {
//       token1 = response.data.access_token;
//       expiresIn = response.expires_in;
//       console.log("Token 200 Success!")
//       // console.log("Token1: " + token1);
//       apiCall(token1);
//       // return token1
//       // console.log(response);
//       //callback(token1);
//   })
//   .catch(function (error) {
//       console.log("Token Error")
//       // console.log(error)
//    })
//   .finally(function () {
     
//    });


// // console.log(axios.then());
