// NOTE: I could've set up babel in order to use es6 syntax,
// but this is fine for such a short file...

const express = require('express');
const path = require('path');
const port = 3001;
const app = express();

const data = require('./data');

console.log('server code is running...');

// NOTE: won't work with just __dirname...
app.use(express.static(__dirname));

app.get('/data', (req, res) => {
  console.log('data requested');
  res.send(data);
});

app.get('*', (req, res) => {
  console.log('app.get');
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
