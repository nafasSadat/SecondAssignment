const express = require('express')
const mysql = require('mysql');
const app = express()

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shoping_card_management"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected...");

  });

  module.exports=con;