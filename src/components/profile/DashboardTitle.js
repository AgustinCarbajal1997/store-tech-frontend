import React from "react";
import { useSelector } from "react-redux";
const DashboardTitle = () => {
  const user = useSelector((state) => state.auth.dataUser);
  return <>{user ? <h2 className="dashboard-title">Bienvenido a tu perfil {user.name}</h2> : null}</>;
};

export default DashboardTitle;
