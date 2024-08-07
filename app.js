const express = require('express')
const app = express()

const port = 3000


// middleware
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function(req, res){
    res.render('home');
})

app.get("/restaurants", function(req, res){
  res.render('restaurants');
})

app.get("/teriyaki_trails", function(req, res){
    res.render('teriyaki_trails');
})

app.get("/teriyaki_menu", function(req, res){
  res.render('teriyaki_menu');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



