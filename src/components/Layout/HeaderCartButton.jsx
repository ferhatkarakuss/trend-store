import React from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({ onShowCart }) => {
  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
