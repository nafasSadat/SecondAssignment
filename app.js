const mysql = require('mysql');
const ShopRoute=require('./routes/shopdata_routes.js');
const con=require('./database/db.js');
const express = require('express');
const app = express();
const cors=require('cors');
const bodyParser=require('body-parser');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



  app.use('/api',ShopRoute);

  app.listen(3000)