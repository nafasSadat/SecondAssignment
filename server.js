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
  });

// showing items in cart
app.get('/products', (req, res) => {
    res.writeHead(200,{'Cotent-Type': 'text/json'});
    con.query('SELECT * FROM products',(err,result)=>{
        if(err) throw err;

        res.write(JSON.stringify(result));
        console.log(result)
        res.end();
    });
  });
  
 // Change quantity of item in cart

  app.put('/productsupdate', (req, res) => {
    res.writeHead(200,{'Cotent-Type': 'text/json'});
    let id = req.query.id;
    let quantity=req.query.quantity;
    var sql='UPDATE products SET quantity=? WHERE id=?';
    con.query(sql,[quantity,id],(err, result)=> {
        if (err) throw err;

        res.write("Updated Cart Item with id: "+id+" \n");
        res.write(JSON.stringify(result));
        res.end();
       
      });
  });



//Insert new items to cart
  app.post('/product_insert', (req, res) => {
    res.writeHead(200,{'Cotent-Type': 'text/json'});
    let name = req.query.name;
    let price=req.query.price;
    let quantity=req.query.quantity;
    console.log("Name:  "+name+"Price :"+price+"Quantity: "+quantity)
   
    var sql='INSERT INTO products(name,price,quantity) VALUES(?,?,?)';
    con.query(sql,[name,price,quantity],(err, result)=> {
        if (err) throw err;


        console.log('record inserted');
        res.write('Statuse :'+"Sucess \n");
        res.write("Added items to car \n");
        res.write(JSON.stringify(result));
        res.end();
       
      });
  });


// Remove items from cart

app.delete('/product_delete', (req, res) => {
    res.writeHead(200,{'Cotent-Type': 'text/json'});
    let id = req.query.id;
    var sql='DELETE FROM products WHERE id=?';
    con.query(sql,[id],(err, result)=> {
        if (err) throw err;


        res.write('Statuse :'+"Sucess \n");
        res.write(" Msg : Updated Cart Item with id: "+id+" \n");
        res.end();
       
      });
  });

  app.listen(3000)
