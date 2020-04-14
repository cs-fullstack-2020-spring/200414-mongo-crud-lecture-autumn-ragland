// import express and create server
let express = require('express');
let app = express();
// variable for port number
let port = 8000;

// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = 'mongodb+srv://admin:C0d3Cr3w@cluster0-ueqkv.mongodb.net/cs_database_4?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// import router  module
let api = require('./routes/api');
// mount routes
app.use('/api', api);

// server listening on port 8000
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});