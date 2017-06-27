var express=require("express");
var app=express();
app.set("viewengine", "ejs");
app.use(express.static("public"));
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var mongoose=require("mongoose");

//mongosse configuration

mongoose.connect('mongodb://localhost/blog_app');



app.listen(process.env.PORT,process.env.IP,function()
{
    
    console.log("Blog App Started");
    
});
