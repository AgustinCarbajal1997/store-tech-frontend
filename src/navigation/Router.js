import React, { useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import NavBar from "../components/navBar/NavBar";
import SearchContainer from "../components/generalSearch/SearchContainer";
import { continueSession } from "../store/actions/auth.action";
import Cookies from "universal-cookie";
import PrivateRoutes from "../components/router/PrivateRoutes";
import {
  Home,
  Cart,
  Category,
  Comparison,
  DataUser,
  Details,
  Favorites,
  Profile,
  Purchases,
  Login,
} from "../pages";
import SignUp from "../pages/SignUp";
import Alert from "../components/alert/Alert";
import PaymentInformation from "../pages/PaymentInformation";
import Splash from "../components/splash/Splash";
const cookies = new Cookies();
const RouterEcommerce = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (cookies.get("tk")) {
      dispatch(continueSession(cookies.get("tk")));
      return;
    }
  }, [dispatch]);

  return (
    <>
      <Splash/>
      <ScrollToTop />
      <NavBar />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/comparar" component={Comparison} />
        <Route path="/registrarse" component={SignUp} />
        <Route path="/iniciar-sesion" component={Login} />
        <Route exact path="/categoria/:categoria/:id" component={Details} />
        <Route exact path="/categoria/:categoria" component={Category} />
        <PrivateRoutes>
          <Route exact path="/perfil/pago" component={PaymentInformation} />
          <Route exact path="/perfil/compras" component={Purchases} />
          <Route exact path="/perfil/carrito" component={Cart} />
          <Route exact path="/perfil/datos" component={DataUser} />
          <Route exact path="/perfil/favoritos" component={Favorites} />
          <Route exact path="/perfil" component={Profile} />
        </PrivateRoutes>
      </Switch>
    </>
  );
};

export default RouterEcommerce;
