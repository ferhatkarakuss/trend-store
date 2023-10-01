import React from "react";
import "./productItem.css";
import Card from "../UI/Card";
import Rating from "./Rating";
const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;

  return (
    <Card>
      <img src={img} alt={name} />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}$</span>
      </div>
      <button className="add-to-cart">Buy</button>
    </Card>
  );
};

export default ProductItem;
