//import express module
const express = require ('express');
const cors = require('cors');

//import body-parser module
const bodyParser = require("body-parser");
//create express app
const app= express();
//configuration de l'application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000'
  }));
const plats = [
    {id: 1, name :"Pizza Margherita",price :10},
    {id: 2, name :"Burger Maison",price :8},
    {id: 3, name :"Pates Carbonara",price :12},];
//Business logic:get all plats
app.get('/plats', (req, res) => {
    res.json({ plats: plats });
});
//Business logic:get plat by id
app.get('/plats/:id', (req, res) => {
    //get id from request
    let platid = req.params.id;
    //search plat by id
    let foundplat = plats.find((obj) => obj.id == platid);
    //return response
    res.json({ plat: foundplat });
});
//Business logic:search plat by name or price
app.get('/plats/search', (req, res) => {
    let search = req.query.search;
    let foundplats = plats.filter((obj) => obj.nom.includes(search) || obj.prix == search);
    res.json({ plats: foundplats });
});
//Businesss:delete all plats
app.delete("/plats",(req , res )=>{
    plats.splice(0,plats.length);
    res.json({msg:"All plats deleted"});
}
);
//Business logic:delete plat by id
app.delete("/plats/:id",(req , res )=>{
    let platid = req.params.id;
    let foundplat = plats.find((obj) => obj.id == platid);
    let index = plats.indexOf(foundplat);
    plats.splice(index,1);
    res.json({msg:"plat deleted"});
}
);
//Businesss logic :edit plat price 
app.put("/plats/:id",(req , res )=>{
    let platid = req.params.id;
    let foundplat = plats.find((obj) => obj.id == platid);
    foundplat.prix = req.body.prix;
    res.json({msg:"prix updated"});
}
);
//Business logic:add plat
app.post("/plats", (req, res) => {
    //get object from request
    let platObj = req.body;
    //add object to plats(DB)
    plats.push(platObj);
    //return response
    res.json({ msg: "plat Added with success" });
});
const users=[
    {id:1,nom : "ali", tel:24600900},
    {id:1,nom : "mohamed", tel:23129129},
    {id:1,nom : "karim", tel:25123123},
];   
//Business logic : search user by tel
app.get("/users/search",(req,res)   =>{
    let search = req.query.search;
    let foundusers = users.filter((obj) => obj.tel == search);
    res.json({users:foundusers});
}
);
//Business logic : get all users
app.get("/users",(req,res)   =>{
    res.json({users:users});
}
);
//Business logic: delete user by name
app.delete("/users/:nom",(req,res)   =>{
    let nom = req.params.nom;
    let founduser = users.find((obj) => obj.nom == nom);
    let index = users.indexOf(founduser);
    users.splice(index,1);
    res.json({msg:"user deleted"});
}
);
//Business logic: add user
app.post("/users",(req,res)   =>{
    let userObj = req.body;
    users.push(userObj);
    res.json({msg:"user added"});
}
);
const orders=[
    {id:1,userid:2,platid:1},
    {id:2,userid:3,platid:2},
    {id:3,userid:1,platid:1},
];
//businesss logic : get all orders  with all informations (nom,tel,nom plat , prix )
app.get("/orders",(req,res)   =>{
    let ordersWithInfo = orders.map((order)=>{
        let user = users.find((user)=>user.id == order.userid);
        let plat = plats.find((plat)=>plat.id == order.platid);
        return {id:order.id,user:user,plat:plat};
    });
    res.json({orders:ordersWithInfo});
}
);
//business logic : get all orders by userid
app.get("/orders/:userid",(req,res)   =>{
    let userid = req.params.userid;
    let ordersWithInfo = orders.filter((order)=>order.userid == userid).map((order)=>{
        let user = users.find((user)=>user.id == order.userid);
        let plat = plats.find((plat)=>plat.id == order.platid);
        return {id:order.id,user:user,plat:plat};
    });
    res.json({orders:ordersWithInfo});
}
);
//business logic : get the sum of price of all orders with the same plat ID
app.get("/orders/sum/:platid",(req,res)   =>{
    let platid = req.params.platid;
    let sum = orders.filter((order)=>order.platid == platid).map((order)=>{
        let plat = plats.find((plat)=>plat.id == order.platid);
        return plat.prix;
    }).reduce((a,b)=>a+b,0);
    res.json({sum:sum});
}
);
module.exports = app;
