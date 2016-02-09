var express = require('express');

var app = express();

app.get('/',function(req, res) {
  res.render('index.ejs', {title: 'Hola Mundo'});
});

app.get('/about', function(req, res) {
  res.render('layout.ejs', {title: 'About Us', body: '<h1>Acerca de nosotros</h1>'});
});

app.get('/*',function(req, res) {
  res.status(404).render('error.ejs',{title: 'Error!'});
});

console.log('server iniciado...');
app.listen(3000);
