var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/landingpage', function(req,res){

res.render('landingpage');
});

app.get('/class', function(req,res){

  fs.readFile('./classrooms.json', 'utf8', function(err,data){
    if(err){
      throw err;
    }
    let stuff = JSON.parse(data);
let classes = [];
for(i = 0;i<stuff.length;i++){
  classes.push("Class " + stuff[i].id + ": " + stuff[i].subject);
}
console.log(classes);
res.render('class', {classes});
  })
})

app.get('/details', function(req,res){
  fs.readFile('./classrooms.json', 'utf8', function(err,data){
    if(err){
      throw err;
    }
    let stuff = JSON.parse(data);
let classes = [];
for(i = 0;i<stuff.length;i++){
  classes.push("Class " + stuff[i].id + ": " + stuff[i].subject);
}
  res.render('details',{classes});
})
})
app.listen(port, function () {
  console.log("running on localhost:"+port);
});
