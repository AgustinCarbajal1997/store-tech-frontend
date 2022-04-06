import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PrivateRoutes = ({ children, ...rest }) => {
  const dataUser = useSelector((state) => state.auth.dataUser);
  const token = useSelector((state) => state.auth.access_token);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token && dataUser ? (
          children
        ) : (
          <Redirect to={{ pathname: "/iniciar-sesion", state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoutes;
