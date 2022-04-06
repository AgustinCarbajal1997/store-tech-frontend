import React from "react";
import CartItem from "./CartItem";
const CartList = ({ products }) => {
  return (
    <div className="cart-list">
      <div className="cart-list-title">
        <h2>Mi carrito</h2>
      </div>
      {products.map((item, index) => (
        <CartItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CartList;
