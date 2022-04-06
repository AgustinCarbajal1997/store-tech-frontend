import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ListingFavorites from "../components/favorites/ListingFavorites";
import URL from "../constants/url";
const Favorites = () => {
  const dataUser = useSelector((state) => state.auth.dataUser);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        if (!dataUser.favorites.length) return;
        const query = dataUser.favorites.reduce(
          (ac, item, idx) => (!idx ? ac + "?q[]=" + item : ac + "&q[]=" + item),
          ""
        );
        const response = await fetch(
          `${URL}/api/products/getSeveralIds${query}&page=1&limit=3&pagination=true`
        );
        const products = await response.json();
        setData(products.data.docs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dataUser]);

  return (
    <div>
      <h2 className="dashboard-title">Estos son tus productos favoritos {dataUser.name} </h2>
      {data && <ListingFavorites products={data} />}
    </div>
  );
};

export default Favorites;
