const express = require("express");
const app = express();
const fs = require("fs");


// Set the view engine to EJS
app.set("view engine", "ejs");

// Route for rendering the home page
app.get("/", function(req, res) {
    res.render("index");
});

// Route for rendering the notes page
app.get("/notes", function(req, res) {
    res.render("notes");
});

// Route for creating a note
app.get("/create", function(req, res) {
    // const title = req.query.title;
    // const description = req.query.description;
    const {title,description} = req.query;
    res.render('create',{title,description})
    // console.log(req.query);
    fs.writeFile(`./uploads/${title + '.txt'}`,`${description}`,()=>{
        console.log("file created");
        
        
    })
    
});

// Start the server
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
