import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { login } from "../store/actions/auth.action";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.auth.dataUser);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      if (location?.state?.from) return history.push(location.state.from);
      history.push("/");
    }
  }, [user, history, location]);
  const onMailHandle = (e) => {
    setMail(e.target.value);
  };
  const onPassHandle = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(login({ mail, password }));
  };
  const onClickRedirectSignUp = () => {
    let path = location?.state?.from || "/";
    history.push("/registrarse", path)
  }
  return (
    <div className="div-page-login">
      <div className="login-form-container">
        <div className="login-form-container-icon">
          <BiUserCircle size={80} color="#846fc7" />
        </div>
        <form onSubmit={onSubmitHandle} className="login-form">
          <label>MAIL</label>
          <input type="text" name="mail" value={mail} onChange={onMailHandle} />
          <label>CONTRASEÑA</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onPassHandle}
          />
          <input type="submit" value={"INGRESAR"} />
        </form>
        <h4
          className="login-form-sign-up"
          onClick={onClickRedirectSignUp}
        >
          ¿No tienes cuenta? Registrarse.
        </h4>
      </div>
    </div>
  );
};

export default Login;
