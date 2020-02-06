//hintjs esversion:6

const express = require("express");
const app= express();
app.get("/",function(request,respond){
    respond.send("<h1>HELLO</h1>");
});
app.get("/name",function(request,respond){
    respond.send("MEGHA MAHESH JOSHI");
});
app.get("/team",function(request,respond){
    respond.send("teammate1  teammate2  teammate3");
});
app.listen(3000,function(){
    console.log("the task will run on the port 3000 ");
});
