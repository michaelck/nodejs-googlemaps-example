var express = require('express');
var path = require('path');
var jade = require('jade');

var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('layout', { title: 'Node.js / Google Maps Example', subtitle: 'with the help of the Express, Path, and Jade modules' });
});

app.listen(3000)
