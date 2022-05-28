const express = require('express')
const mysql = require('mysql');
const ShopRoute=require('./routes/shopdata_routes.js');
const app = express()

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shoping_card_management"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected...");

  });

  app.use('/api',ShopRoute);

  app.listen(3000)