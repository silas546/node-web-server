const express = require('express');

var app = express();

app.get('/', (req, res) => {
  //res.send('<h1>Hello, world!</h1>');
  res.send({
    name: 'Silas',
    likes: ['Chicken tendies', 'mountains', 'guns']
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'You done messt up'
  })
});

app.listen(3000);
