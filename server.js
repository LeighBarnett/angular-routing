var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(8000, function() {
  console.log("what do you want from me! get me on 8000 ;-)");
});
