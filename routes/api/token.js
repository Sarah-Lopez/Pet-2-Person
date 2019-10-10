
const queryURL = "https://api.petfinder.com/v2/oauth2/token"
const key = process.env['CLIENT_ID']
const secret = process.env['CLIENT_SECRET']

let token;

const tokenCall = () => {

    $.ajax({
        url: queryURL,
        dataType: "json",
        data: {
            grant_type: "client_credentials",
            client_id: key,
            client_secret: secret
        },
        type: "POST",
        success: function(response) {
            token = response.access_token;
            expiresIn = response.expires_in;
            console.log("200 Success!")
            // return token
            // firstCall(token)
        },
        error: function(errorThrown) {
            alert(errorThrown.error);
            console.log("Error")
            console.log(errorThrown)
        }
    });
    
    }
    
    
    module.exports = token
    
    