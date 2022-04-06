import { useEffect, useState } from "react";
import { useHistory } from "react-router";
const TotalItem = ({ products }) => {
  const [total, setTotal] = useState(0);
  const history = useHistory();
  useEffect(() => {
    const total = products
      .map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b);
    setTotal(total);
  }, [products]);

  const onClickPaymentInformation = () => {
    history.push("/perfil/pago");
  };

  return (
    <div className="cart-total-products">
      <h2>TOTAL</h2>
      <h3>${total}</h3>
      <button onClick={onClickPaymentInformation}>Finalizar compra</button>
    </div>
  );
};

export default TotalItem;
