
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://uvyqsjq1sizxwt1ccqeo:KU4QKW8RrowsYtLFsRKi@bb6p43tpw9eoitp-mongodb.services.clever-cloud.com:27017/bb6p43tpw9eoitp';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));