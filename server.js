let express= require('express');
let app= express();
app.listen(3000);
app.use(express.static('node_modules'));
app.use(express.static('public'));
app.get('/dogs', function (req,res){
    res.send([{name:"Gabana", age:"4"}, 
              {name:"Dolce", age:"3"},
              {name:"Coca", age:"1"},
              {name:"Maggie", age:"7"}]);
})