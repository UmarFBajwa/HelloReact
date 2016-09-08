
// Require is a command via Node
var express = require('express');
// Now have access to entire Express Library


// Create our App
var app = express();

app.use(express.static)

// Start the app
app.listen(3000, function() {
  console.log('Server is up on port 3000')
});
