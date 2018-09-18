const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // replace with render of home page
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMsg: 'Welcome to my Express.JS site'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'You done messt up'
  })
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
