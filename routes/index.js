var express = require('express');
var router = express.Router();
var db = require('./db.json');
var async1 = require('async');
var async2 = require('async')

db = db.peoples.people;
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hi");
  res.render('index', { title: 'Express' });
});

//router.get('/rando', function(req,res, next) {
//  console.log("HOLY");
  //res.send("in rando")
//  res.render('index', { title: 'Express' });
//});

router.post('/', function(req, res, next) {

    var input = req.body.name;
    var parseInput = input.split(" ");
    var output = ""



  async1.each(parseInput, function(word, callback){
    //iterates through emojis in db
    console.log("print")
    async2.each(db, function(emoji, callback){
      //iterates through each emotion in an emoji
      if( word == emoji["key"]){
          output += String.fromCodePoint(emoji["value"].codePointAt(0)) + " ";
          console.log(output);
      }
      callback()
        }, function(err){});
      callback()}, function(err){
        //console.log(output)
        //res.header("Content-Type", "application/json; charset=utf-8");
        res.render('index', { title: output });
      })

});

module.exports = router;
