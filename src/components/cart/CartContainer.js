import React from "react";
import CartList from "./CartList";
import TotalItem from "./TotalItem";
const CartContainer = ({ dataUser }) => {
  return (
    <>
      <div className="cart-list-container">
        <CartList products={dataUser.cart} />
        <TotalItem products={dataUser.cart} />
      </div>
    </>
  );
};

export default CartContainer;
