const express = require('express');            // importation de la librery express
const app=express();                          // inialisation de express avec une variable app
app.listen(3500,function(){
    console.log('server started succefuly');
});  

app.get('/toto', function(req,res){
    res.send('bonjour toto');
});