import React, { useContext } from "react";
import { useHistory } from "react-router-dom";



const CartShow = ({CartItems}) => {
 // const { items, isCartOpen } = carditems;
//   const dispatch = useContext(CartDispatchContext);
//   const history = useHistory();

//   const handleRemove = (productId) => {
//     return removeFromCart(dispatch, productId);
//   };

//   const handleProceedCheckout = () => {
//     toggleCartPopup(dispatch);
//     history.push("/checkout");
//   };

  return (
    <div className="cart-preview" >
      <ul className="cart-items">
        {CartItems.map((items) => {
          return (
            <li className="cart-item" key={items.name}>
              <img className="product-image" src={items.image} />
              <div className="product-info">
                <p className="product-name">{items.name}</p>
                <p className="product-price">{items.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                  {`${items.quantity} ${
                    items.quantity > 1 ? "Nos." : "No."
                  }`}
                </p>
                <p className="amount">500</p>
              </div>
              <button
                className="product-remove"
                // onClick={() => handleRemove(product.id)}
              >
                ×
              </button>
            </li>
          );
        })}
      </ul>
      <div className="action-block">
        <button
          type="button"
        //   className={classNames({ disabled: items && items.length === 0 })}
        //   onClick={handleProceedCheckout}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartShow;