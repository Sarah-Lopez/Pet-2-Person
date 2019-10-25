
// const axios = require('axios');
// const queryURL = "https://api.petfinder.com/v2/oauth2/token"
// const key = process.env.CLIENT_ID
// const secret = process.env.CLIENT_SECRET
// // console.log(process.env.CLIENT_SECRET);


// const tokenCall = (callback) => {
//     axios({
//         url: queryURL,
//         data: {
//             grant_type: "client_credentials",
//             client_id: key,
//             client_secret: secret
//         },
//         method: 'post'
//      }).then(function (response) {
//             token1 = response.data.access_token;
//             expiresIn = response.expires_in;
//             console.log("200 Success!")
//             // console.log("Token1: " + token1);
            
//             // console.log(response);
//             //callback(token1);
//         })
//         .catch(function (error) {
//             console.log("Oops! Something went wrong! Error")
//             console.log(error)
//          })
//         .finally(function () {
           
//          });
// }

// module.exports = {
//     test: "hello",
//     tokenCall: tokenCall
// }
// // let token = tokenCall()
// // module.exports = {
// //     tokenCall: tokenCall,
// //     test: "hello"
// // }
    
    