const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

// import mongoose models
require('./models/user');

//mongoose.connect(keys.mongoURI);

const app = express();

// import application routes
require('./routes/authUser')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello Server.');
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets
  app.use(express.static('client/build'));
  // Express will serve up index.html if unrecognized route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT);
