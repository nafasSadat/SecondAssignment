import React from 'react';
import data from "./components/data";
import CartPreview from "./components/CartShow";
import { useEffect, useState,useContext} from 'react';
// import Header from "./components/Header/Header";
// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import { useContext } from "react";
import { Link } from "react-router-dom";
import './App.css';
const axios = require('axios');


const url ="https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
const headers={ 'Content-Type': 'application/json'}

function App() {
  const {productItems}=data;
  const [itemlist,setitemlist]=useState([]);
  const [cartitems,setcartitems]=useState([]);

  const cartQuantity = cartitems.length;
  const cartTotal = cartitems .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data)
      setitemlist(response.data)
    });

  },[]);

  const handleAddToCart = (product) => {
    console.log("Added"+product);
    }




  return (
    // not working 
  // <Router>
  //     <Routes>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/head' element={<Header/>} />
  //     </Routes>
  
  // </Router>
<div>

  <div className='header'>

     <div className="container">
        <div className="brand">
        <img className="logo"
              src="./pics/veg.jpg"
              alt="Veg Logo"
            />
        </div>
      </div>

      <div className="search">
          <a
            className="mobile-search"
            href="#"          >
            <img
              src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
              alt="search"
            />
          </a>
          <form action="#" method="get" className="search-form">
            <a
              className="back-button"
              href=" " >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                alt="back"
              />
            </a>
            <input
              type="search"
              placeholder="Search for Vegetables and Fruits"
              className="search-keyword"
            />
            <button
              className="search-button"
              type="submit"
            />
          </form>
        </div>

        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>artQuantity</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{cartTotal}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className="cart-icon" href=" " >
            <img
            //  className={props.cartBounce ? "tada" : " "}
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              alt="Cart"
            />
            {cartQuantity ? (
              <span className="cart-count">{cartQuantity}</span>
            ) : (
              ""
            )}
          </a>
          {/* <CartPreview CartItems={cartitems}/> */}
        </div>
  </div>

  <div className='products'>
    {itemlist.map((val)=>(

      <div className='product_card'>

        <div>
          <img className="product-image"
              src={val.image}
              alt={val.name}/>
          </div>

          <h4 className="product-name">{val.name}</h4>
          <p className="product-price">₹ {val.price}</p>


          <div >
             <button className="added" type="button"  onClick={handleAddToCart(productItems)}>
              Add to Cart
            
        </button>
      </div>    
      </div>
   
      
      ))};
</div>

  </div>

  );
   
}

export default App;
