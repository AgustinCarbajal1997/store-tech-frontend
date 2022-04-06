import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postCart } from "../../store/actions/auth.action";

const ButtonsCart = ({ item }) => {
  const [isExisted, setIsExisted] = useState(false);
  const history = useHistory();
  const access_token = useSelector((state) => state.auth.access_token);
  const dataUser = useSelector((state) => state.auth.dataUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const findProduct = dataUser.cart.find(
      (product) => product.productId === item.id
    );
    findProduct ? setIsExisted(true) : setIsExisted(false);
  }, [dataUser, item]);

  const onAddCartHandle = () => {
    const dataProduct = {
      productId: item.id,
      title: item.title,
      image: item.images[0],
      unites: item.unites,
      quantity: 1,
      price: item.price,
    };
    dispatch(postCart(access_token, dataProduct));
  };

  const onFinishPurchaseHandle = () => {
    history.push("/perfil/carrito");
  };

  return (
    <>
      {isExisted ? (
        <button onClick={onFinishPurchaseHandle}>FINALIZAR COMPRA</button>
      ) : (
        <button onClick={onAddCartHandle}>AGREGAR AL CARRITO</button>
      )}
    </>
  );
};

export default ButtonsCart;
