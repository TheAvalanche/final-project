var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var id = 1;
var users = [];

app.get('/api/users', function (req, res) {
   res.json(users);
});

app.post('/api/users', function (req, res) {
   req.body.id = id++;
   users.push(req.body);
   res.json({status: "OK"});
});

app.get('/api/users/:id', function (req, res) {
  res.json(findUser(req.params.id).data);
});

app.put('/api/users/:id', function (req, res) {
  req.body.id = req.params.id;
  users[findUser(req.params.id).idx] = req.body;
  res.json({status: "OK"});
});

app.delete('/api/users/:id', function (req, res) {
  users.splice(findUser(req.params.id).idx, 1);
  res.json({status: "OK"});
});

function findUser(id) {
  for (var i = 0; i < users.length; i++) {
    if (id == users[i].id) {
      return {data: users[i], idx: i};
    }
  }
}

var server = app.listen(8091, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
