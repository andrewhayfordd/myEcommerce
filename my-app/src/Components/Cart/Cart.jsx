import React from "react";
import "../Cart/Cart.css";

function Cart({ cart, removeFromCart, onClose }) {
  return (
    <div className="Cart">
      <div className="head">
      <div><h2>Cart</h2></div>
      <div className="cart-close">
        <button onClick={onClose}><i className="fas fa-x"></i></button>
      </div>
      </div>
      <div className="products">
        {cart.map((item, index) => (
          <div className="product" key={index}>
            <div className="prod1">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="h4">{item.name}</div>
              <div className="p">${item.price}</div>
            </div>
            <div className="quantity">Quantity: {item.quantity}</div>
            <div className="total">Total: ${item.price * item.quantity}</div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div>
          <h3>
            Total: $
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>

      
    </div>
  );
}

export default Cart;
