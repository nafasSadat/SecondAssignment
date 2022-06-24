const express = require('express');
const app = express();
const { json } = require('express/lib/response');
const routs=express.Router();
const con=require('../database/db.js');
const bodyParser=require('body-parser');
const cors=require('cors');



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))


// showing items in cart
routs.get('/cart_items', (req, res) => {
  //  res.writeHead(200,{'Cotent-Type': 'text/json'});
    con.query('SELECT * FROM products',(err,result)=>{
        if(err) throw err;
        console.log(err)

       // res.write(JSON.stringify(result));
        res.send(result);
        //res.status(200).json({result});
        //console.log(result);
        
        //res.end();
    });
  });


// Change quantity of item in cart
routs.put('/cart_items/edit', (req, res) => {
    res.writeHead(200,{'Cotent-Type': 'text/json'});
    let id = req.query.id;
    let quantity=req.query.quantity;
    var sql='UPDATE products SET quantity=? WHERE id=?';
    con.query(sql,[quantity,id],(err, result)=> {
        if (err) throw err;

        
        res.write(JSON.stringify({'Status':'Sucess'}));
        res.write(JSON.stringify({'Msg':'Updated Cart Item with id:'+id}));
        console.log("Record : "+id+" Updated")
        res.end();
       
      });
  });



//Insert new items to cart
  routs.post('/cart_items/add', (req, res) => {

    const name = req.body.name;
    const price=req.body.Price;
    const quant=req.body.Quantity;

    console.log("Name:  "+name+"Price :"+price+"Quantity: "+quant)
   
    var sql='INSERT INTO products(name,price,quantity) VALUES(?,?,?)';
    con.query(sql,[name,price,quant],(err, result)=> {
        if (err) throw err;

        console.log('record inserted');
        res.write(JSON.stringify({'Statuse':'Sucess'}));
        res.write(JSON.stringify({'Msg':'Added items to card'}));
        res.write(JSON.stringify(result));
        res.end();
       
      });
  });


// Remove items from cart

routs.delete('/cart_items/remove', (req, res) => {
    res.writeHead(200,{'Cotent-Type': 'text/json'});
    let id = req.query.id;
    var sql='DELETE FROM products WHERE id=?';
    con.query(sql,[id],(err, result)=> {
        if (err) throw err;


        res.write(JSON.stringify({'Statuse':'Sucess'}));
        res.write(JSON.stringify({'Msg' : 'Deleted Cart Item with id : '+id}));
        res.end();
       
      });
  });


module.exports=routs;