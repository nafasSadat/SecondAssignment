const axios = require('axios');
const express = require('express')
const mysql = require('mysql');
const ShopRoute=require('./routes/shopdata_routes.js');
const con=require('./database/db.js');
const app = express()

const url = 'http://localhost:3000/api/';
const Url='https://webhook.site/51a464ef-d5b5-4642-8519-59324681f6dc'
const headers={ 'Content-Type': 'application/json'}

// axios.get(url+'cart_items/',{headers}).then((res)=>{
//     console.log(res.data);
// }).catch(err => console.log(err))

//'Content-Type': 'application/json'
const data = {
    name: 'item3',
    price: '120',
    quantity: '3'
};
axios.post(url+'cart_items/add',{'name':'item3','price':'130','quantity':'3'},headers).then((response) => {
    console.log(response)
}).catch(err => console.log(err))