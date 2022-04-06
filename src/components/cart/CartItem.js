import React from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { postCart, deleteProductCart } from "../../store/actions/auth.action";
const CartItem = ({ item }) => {
  const access_token = useSelector((state) => state.auth.access_token);
  const dispatch = useDispatch();
  const addQuantity = () => {
    if ((item.quantity + 1) > item.unites) {
      console.log("Stock alcanzado");
      return;
    }
    const dataProduct = {
      ...item,
      quantity: item.quantity + 1,
    };
    dispatch(postCart(access_token, dataProduct));
  };
  const subtractQuantity = () => {
    if (item.quantity - 1 === 0) {
      console.log("No se puede ordenar 0");
      return;
    }
    const dataProduct = {
      ...item,
      quantity: item.quantity - 1,
    };
    dispatch(postCart(access_token, dataProduct));
  };
  const removeProduct = () => {
    dispatch(deleteProductCart(access_token, item.productId))
  };
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-item__data">
        <h2>{item.title}</h2>
        <div className="cart-item-buttons">
          <div className="cart-item-addition-subtract">
            <button onClick={() => subtractQuantity()}>
              <BiMinusCircle />
            </button>
            <h2>{item.quantity}</h2>
            <button onClick={() => addQuantity()}>
              <BiPlusCircle />
            </button>
          </div>
          <div className="cart-item-delete-button">
            <button onClick={() => removeProduct()}>
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
