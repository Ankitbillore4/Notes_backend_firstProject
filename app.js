const express= require("express");
const app= express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index")
})

app.get("/notes",function(req,res){
    res.render("notes")
})


app.get("/create",function(req,res){
    res.render("create")
    console.log(req.query);
    
})

app.listen(3000);