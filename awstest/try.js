var AWS = require('aws-sdk');
// var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'IDENTITY_POOL_ID'});
// var myConfig = new AWS.Config({
//   credentials: myCredentials, region: 'us-west-2'
// });


var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
AWS.config.update({region:'us-west-2'});


let rekognition = new AWS.Rekognition();

// console.log(rekognition)

var params = {

Image: {
   S3Object: {
   Bucket: "planningmate.com",
   Name: "margo.png"
  }
 },

};

rekognition.detectFaces(params, function(err, data) {
if (err) console.log(err, err.stack); // an error occurred
else     console.log(data,'heeeeeiii');           // successful response

});
