//import express module
const express = require("express");
const cors = require("cors");

//import body-parser module
const bodyParser = require("body-parser");
//create express app
const app = express();
//configuration de l'application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const plats = [
  {
    id: 1,
    pic: "assets/pics/pizzamargherita.jpg",
    name: "Pizza Margherita",
    description: "fine",
    price: 10,
  },
  {             
    id: 2,
    pic: "assets/pics/burgermaison.jpg",
    name: "Burger Maison",
    description: "fine",
    price: 8,
  },
  {
    id: 3,
    pic: "assets/pics/patescarbonara.jpg",
    name: "Pates Carbonara",
    description: "fine",
    price: 12,
  },
];
//Business logic:search plat by name or price
app.get("/plats/search", (req, res) => {
  let search = req.query.search.toLowerCase();
  let foundplats;

  if (search === "") {
    foundplats = plats;
  } else {
    foundplats = plats.filter(
      (obj) =>
        String(obj.name || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.description || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.price || "")
          .toLowerCase()
          .includes(search)
    );
  }

  res.json({ plats: foundplats });
});
//Business logic:get all plats
app.get("/plats", (req, res) => {
  res.json({ plats: plats });
});
//Business logic:get plat by id
app.get("/plats/:id", (req, res) => {
  let platid = req.params.id;
  let foundplat = plats.find((obj) => obj.id == platid);
  res.json({ plat: foundplat });
});
//Businesss:delete all plats
app.delete("/plats", (req, res) => {
  plats.splice(0, plats.length);
  res.json({ msg: "All plats deleted" });
});
//Business logic:delete plat by id
app.delete("/plats/:id", (req, res) => {
  let platid = parseInt(req.params.id);
  let foundplat = plats.find((obj) => obj.id === platid);
  let index = plats.indexOf(foundplat);
  plats.splice(index, 1);
  res.json({ msg: "plat deleted" });
});
//Businesss logic :edit plat price
app.put("/plats/:id", (req, res) => {
  let platid = req.params.id;
  let foundplat = plats.find((obj) => obj.id == platid);
  foundplat.price = req.body.price;
  foundplat.name = req.body.name;
  foundplat.description = req.body.description;
});
//Business logic:add plat
app.post("/plats", (req, res) => {
  let platObj = req.body;
  plats.push(platObj);
  res.json({ msg: "plat Added with success" });
});
const users = [
  {
    id: 1,
    image: "assets/pics/ab.jpg",
    firstname: "ali",
    lastname: "badra",
    email: "ab@gmail.com",
    password: "alibadra123",
    adress: 24600900,
  },
  {
    id: 6,
    image: "assets/pics/mf.jpg",
    firstname: "mohamed",
    lastname: "frikha",
    email: "mf@gmail.com",
    password: "mofrikha123",
    adress: 23129129,
  },
  {
    id: 5,
    image: "assets/pics/kk.jpg",
    firstname: "karim",
    lastname: "khemiri",
    email: " kk@gmail.com ",
    password: "karim123",
    adress: 25123123,
  },
];
app.get("/users/:id", (req, res) => {
  let userid =  parseInt(req.params.id);
  let result = users.find((obj) => obj.id === userid);
  res.json({ user: result });
});
//Business logic : modify user by ID
app.put("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let founduser = users.find((obj) => obj.id === id);
  founduser.firstname = req.body.firstname;
  founduser.lastname = req.body.lastname;
  founduser.email = req.body.email;
  founduser.password = req.body.password;
  founduser.adress = req.body.adress;
  res.json({ msg: "user updated" });
}); 
//Business logic : search user by tel
app.get("/users/search", (req, res) => {
  let search = req.query.search.toLowerCase();
  let foundusers;

  if (search === "") {
    foundusers = users;
  } else {
    foundusers = users.filter(
      (obj) =>
        String(obj.adress || "").includes(search) ||
        String(obj.firstname || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.lastname || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.email || "")
          .toLowerCase()
          .includes(search)
    );
  }

  res.json({ users: foundusers });
});

//Business logic : get all users
app.get("/users", (req, res) => {
  res.json({ users: users });
});
//Business logic: delete user by name
app.delete("/users/:id", (req, res) => {
  let iduser = req.params.id;
  let founduser = users.find((obj) => obj.id === iduser);
  let index = users.indexOf(founduser);
  users.splice(index, 1);
  res.json({ msg: "user deleted" });
});
//Business logic: add user
app.post("/users", (req, res) => {
  let userObj = req.body;
  users.push(userObj);
  res.json({ msg: "user added" });
});
const orders = [
  { id: 1, userid: 2, platid: 1 },
  { id: 2, userid: 3, platid: 2 },
  { id: 3, userid: 1, platid: 1 },
];
//businesss logic : get all orders  with all informations (nom,tel,nom plat , prix )
app.get("/orders", (req, res) => {
  let ordersWithInfo = orders.map((order) => {
    let user = users.find((user) => user.id == order.userid);
    let plat = plats.find((plat) => plat.id == order.platid);
    return { id: order.id, user: user, plat: plat };
  });
  res.json({ orders: ordersWithInfo });
});
//business logic : get all orders by userid
app.get("/orders/:userid", (req, res) => {
  let userid = req.params.userid;
  let ordersWithInfo = orders
    .filter((order) => order.userid == userid)
    .map((order) => {
      let user = users.find((user) => user.id == order.userid);
      let plat = plats.find((plat) => plat.id == order.platid);
      return { id: order.id, user: user, plat: plat };
    });
  res.json({ orders: ordersWithInfo });
});
//business logic : get the sum of price of all orders with the same plat ID
app.get("/orders/sum/:platid", (req, res) => {
  let platid = req.params.platid;
  let sum = orders
    .filter((order) => order.platid == platid)
    .map((order) => {
      let plat = plats.find((plat) => plat.id == order.platid);
      return plat.prix;
    })
    .reduce((a, b) => a + b, 0);
  res.json({ sum: sum });
});
//busi
const chefs = [
  {
    id: "1",
    image: "assets/pics/chefs1.jpg",
    FirstName: "Ali",
    LastName: "dridri",
    Email: "alidriri@gmail.com",
    Tel: 24600900,
    Password: "alidriri123",
    Adress: "Tunis",
    Speciality: "Pasta",
    Exprience: "5 years",
  },
  {
    id: "2",
    image: "assets/pics/chefs2.jpg",
    FirstName: "Ammar",
    LastName: "zakkar",
    Email: "zakkar@gmail.com",
    Tel: 21489900,
    Password: "fazfazfaf",
    Adress: "Gbeli",
    Speciality: "Omlette",
    Exprience: "0.5 years",
  },
  {
    id: "3",
    image: "assets/pics/chefs3.jpg",
    FirstName: "Antar",
    LastName: "darbouka",
    Email: "antar@gmail.com",
    Tel: 97852963,
    Password: "gagaga",
    Adress: "Kef",
    Speciality: "CousCous",
    Exprience: "20 years",
  },
];
//Business logic : get all chefs
app.get("/chefs", (req, res) => {
  res.json({ chefs: chefs });
});
//Business logic : delete chef by ID
app.delete("/chefs/:id", (req, res) => {
  let id = req.params.id;
  let foundchef = chefs.find((obj) => obj.id === id);
  let index = chefs.indexOf(foundchef);
  chefs.splice(index, 1);
  res.json({ msg: "chef deleted" });
});
//Business logic : add chef
app.post("/chefs", (req, res) => {
  let chefObj = req.body;
  chefs.push(chefObj);
  res.json({ msg: "chef added" });
});
//Business logic : search chef by name or speciality*
app.get("/chefs/search", (req, res) => {
  let search = req.query.search.toLowerCase();
  let foundchefs;

  if (search === "") {
    foundchefs = chefs;
  } else {
    foundchefs = chefs.filter(
      (obj) =>
        String(obj.Speciality || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.Exprience || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.Tel || "").includes(search) ||
        String(obj.Adress || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.FirstName || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.LastName || "")
          .toLowerCase()
          .includes(search) ||
        String(obj.Email || "")
          .toLowerCase()
          .includes(search)
    );
  }

  res.json({ chefs: foundchefs });
});
//Business logic : update chef by ID
app.put("/chefs/:id", (req, res) => {
  let id = req.params.id;
  let foundchef = chefs.find((obj) => obj.id === id);
  foundchef.FirstName = req.body.FirstName;
  foundchef.LastName = req.body.LastName;
  foundchef.Email = req.body.Email;
  foundchef.Tel = req.body.Tel;
  foundchef.Password = req.body.Password;
  foundchef.Adress = req.body.Adress;
  foundchef.Speciality = req.body.Speciality;
  foundchef.Exprience = req.body.Exprience;
  res.json({ msg: "chef updated" });
});
//Business logic : get chef by ID
app.get("/chefs/:id", (req, res) => {
  let id = req.params.id;
  let foundchef = chefs.find((obj) => obj.id === id);
  res.json({ chef: foundchef });
});
//business logic : delete all chefs
app.delete("/chefs", (req, res) => {
  chefs.splice(0, chefs.length);
  res.json({ msg: "All chefs deleted" });
});

module.exports = app;
