var express = require('express');
var rest = require('../rest');
var models = require('../models');

var router = express.Router();

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) // ...
//   console.log('meow');
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res) {
  console.log(req.body);
  if(!req.body.url){
    res.send("no param 'url' provided");
    return;
  }

  rest.getJSON(req.body.url, function(statusCode, result){
    console.log(result);
  })




  res.send("ack");
});

module.exports = router;
