import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const LoginButton = () => {
  const dataUser = useSelector((state) => state.auth.dataUser);
  let history = useHistory();
  const onProfileHandle = () => {
    if (dataUser) {
      history.push("/perfil");
      return;
    }
    return history.push("/iniciar-sesion");
  };
  return (
    <div className="login-button">
      <div>
        <BiUserCircle
          size={28}
          style={{ paddingRight: "20px" }}
          color="#4a4a4a"
        />
      </div>
      <div
        className="login-button-data"
        onClick={onProfileHandle}
        style={{ cursor: "pointer" }}
      >
        {dataUser ? `Hola ${dataUser.name}` : "Ingrese a su cuenta"}
      </div>
    </div>
  );
};

export default LoginButton;
