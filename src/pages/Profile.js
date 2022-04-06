import React from "react";
import Dashboard from "../components/profile/Dashboard";
import DashboardTitle from "../components/profile/DashboardTitle";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { cleanState } from "../store/actions/auth.action";
const cookies = new Cookies();
const Profile = () => {
  const dispatch = useDispatch();
  const onCloseSession = ()=> {
    cookies.remove("tk", { path:"/" });
    dispatch(cleanState())
  }
  return (
    <div>
      <DashboardTitle />
      <Dashboard />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <button
        onClick={onCloseSession}
          style={{
            backgroundColor: "darkred",
            border: "none",
            padding: "8px",
            color: "#ffffff",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
