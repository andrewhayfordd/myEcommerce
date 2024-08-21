
import React from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/fontawesome-free-6.4.0-web/css/all.min.css";
import "../../Components/Header/Header.css";

function Header({ cartCount, onBagClick }) {
  return (
    <div className="Header">
      <div className="logo"><NavLink to="/">Logo</NavLink></div>

      <div className="cart">
        <div><i className="fas fa-search"></i></div>
        <div className="bag" onClick={onBagClick}>
          <i className="fas fa-bag-shopping"></i>
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
      </div>
     </div>
  );
}

export default Header;
