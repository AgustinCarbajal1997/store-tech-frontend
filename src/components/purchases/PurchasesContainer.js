import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import URL from "../../constants/url";
import LoadingBars from "../details/Loading";
import PurchasesList from "./PurchasesList";
const PurchasesContainer = () => {
  const access_token = useSelector((state) => state.auth.access_token);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${URL}/api/purchase/getPurchases`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        const purchases = await res.json();
        setData(purchases.data.docs);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    })();
  }, [access_token]);

  return (
    <div className="purchases-container">
      {loading && <LoadingBars />}
      {data && <PurchasesList data={data} />}
    </div>
  );
};

export default PurchasesContainer;
