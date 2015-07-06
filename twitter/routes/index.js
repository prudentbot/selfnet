var express = require('express');
var rest = require('../rest');
var models = require('../models');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//only for debugging purposes, remove later
router.get("/test", function(req, res) {
  models.User.find({}, function(err, users){
    console.log("TEST:")
    console.log(users);
    res.send(users);
  });
});

router.post('/register', function(req, res) {
  console.log(req.body);

  if(!req.body.url){
    res.send("no param 'url' provided");
    return;
  }

  //I am so sorry
  try{
    rest.getJSON(req.body.url, function(err, result){
      console.log(result);
      if(err){
        res.send(err);
        return
      }

      if(!result.username){
        res.send("no username field provided in request body");
      }

      //PETER, THIS IS WHERE I LEFT OFF
      // I was just making sure there weren't duplicate api urls in the database
      models.User.findOne({api:req.body.url}, function(err, users){

      });

      var user = new models.User(result);
      user.save(function(err, obj){
        if(err) res.send(err);
        res.send("registered successfully");
      });
    });
  }
  catch(e){
    //I want this to work, but alas it does not.
    //res.send(e);
    res.send("bad URL provided");
  }
});

module.exports = router;
