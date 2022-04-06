import React from "react";
import { useSelector } from "react-redux";
import CartAlertNoProducts from "../components/cart/CartAlertNoProducts";
import CartContainer from "../components/cart/CartContainer";
const Cart = () => {
  const dataUser = useSelector((state) => state.auth.dataUser);

  return (
    <>
      {dataUser.cart.length > 0 ? (
        <CartContainer dataUser={dataUser} />
      ) : (
        <CartAlertNoProducts />
      )}
    </>
  );
};

export default Cart;
