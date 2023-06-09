var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://tama:tama@tama.kzznzu2.mongodb.net";

// Listen for the 'open' event on mongoose.connection
mongoose.connection.on('open', function() {
  console.log('Connected to mongoDB');
});

// Connect to the database
mongoose.connect(mongoDB, { useNewUrlParser: true });