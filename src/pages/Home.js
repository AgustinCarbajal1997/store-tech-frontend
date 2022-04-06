import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import URL from "../constants/url";
import useFetch from "../customHooks/useFetch";
import BannerContainer from "../components/banner/BannerContainer";
import CarouselList from "../components/banner/BannerHomeImgs";
import OptionsContainer from "../components/options/OptionsContainer";
import optionsListHome from "../components/options/OptionsListHome";
import CarouselSalesOffContainer from "../components/carouselSalesOff/CarouselSalesOffContainer";
import salesOffQueries from "../components/carouselSalesOff/SalesOffQueries";
import CarouselHighlightsContainer from "../components/carouselHighlights/CarouselHighlightsContainer";

const Home = () => {
  const history = useHistory();
  const location = useLocation();
  const user = useSelector((state) => state.auth.dataUser);
  const { data: salesoff } = useFetch(
    `${URL}/api/products/getByDiscount/saleoff`
  );
  const { data: highlighted } = useFetch(
    `${URL}/api/products/getByDiscount/highlighted`
  );
  useEffect(() => {
    if (user) {
      if (location.state?.from) history.push(location.state.from);
    }
  }, [user, history, location]);
  return (
    <div className="main">
      <BannerContainer carouselList={CarouselList} />
      <OptionsContainer listOptions={optionsListHome} />

      {salesoff?.data?.docs && (
        <CarouselSalesOffContainer
          DataSaleOff={salesoff.data.docs}
          salesOffQueries={salesOffQueries}
        />
      )}

      {highlighted?.data?.docs && (
        <CarouselHighlightsContainer
          productList={highlighted.data.docs}
          title="Aprovechá las ofertas destacadas"
        />
      )}
    </div>
  );
};

export default Home;
