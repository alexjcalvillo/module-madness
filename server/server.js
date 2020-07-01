// Require express - gives us back a function
const express = require('express');
const finalDollarValue = require('./currency');

// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

// waits for connection to /currency then responds with responseString
app.get('/currency', function (req, res) {
  let responseString = finalDollarValue();

  // YOUR CODE HERE

  res.send(responseString);
});

// Start up the server
app.listen(port, function () {
  console.log('listening on port', port);
});
