const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('', (req, res) => {
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
