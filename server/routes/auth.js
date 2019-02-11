/*
In this file we use the function getTokenFromHeaders to get a JWT token that will be sent 
from the client side in the request’s headers. We also create an auth object with optional and 
required properties. We will use these later in our routes.

*/

const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
  console.log(req.headers);
  var authorization = req.headers.authorization;

  if(authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

module.exports = auth;