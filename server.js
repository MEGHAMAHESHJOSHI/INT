//hintjs esversion:6

const express = require("express");
const app= express();
app.get("/",function(request,respond){
    respond.send("<h1>Hello</h1>");
});
app.get("/name",function(request,respond){
    respond.send("MEGHA MAHESH JOSHI");
});
app.get("/team",function(request,respond){
    respond.send("<ul><li>teammate1</li><li>  teammate2</li><li>  teammate3</li></ul>");
});
app.listen(3000,function(){
    console.log("the task will run on the port 3000 ");
});
