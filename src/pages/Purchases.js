import React from "react";
import { useSelector } from "react-redux";
import PurchaseAlert from "../components/purchases/PurchaseAlert";
import PurchasesContainer from "../components/purchases/PurchasesContainer";

const Purchases = () => {
  const dataUser = useSelector((state) => state.auth.dataUser);

  return (
    <div className="purchase-page">
      {dataUser.purchases.length > 0 ? (
        <PurchasesContainer purchases={dataUser.purchases} />
      ) : (
        <PurchaseAlert />
      )}
    </div>
  );
};

export default Purchases;
