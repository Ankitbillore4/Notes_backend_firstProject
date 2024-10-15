const express= require("express");
const app= express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    fs.readdir("uploads", function(err,files){
        if (err){
          console.log(err);
        }
        const notes= []
        for (const file of files){
            const description = fs.readFileSync(`uploads/${file}`,"utf-8")
            notes.push({
                title:file,
                description:description
            })
        }
        res.render("index",{notes})  
      })
    
})
 
app.get("/notes",function(req,res){
    res.render("notes")
}) 

app.listen(3000);