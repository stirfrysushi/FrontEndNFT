var express = require('./node_modules/express');
var app = express();
app.use(express.static('src'));
app.use(express.static('../culinary-contract/build/contracts'));
app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3000, function () {
  console.log('Culinary Legacy live @ 3000!');
});