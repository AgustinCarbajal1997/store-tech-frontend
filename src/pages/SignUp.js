import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import FormContainer from "../components/form/FormContainer";
import DATA_INPUTS from "../components/signup/dataInputs";
import INITIAL_FORM_STATE from "../components/signup/initialState";
import REGULAR_EXPRESSION from "../constants/regex_signup";
import { signup } from "../store/actions/auth.action";
const SignUp = () => {
  const user = useSelector((state) => state.auth.dataUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const inputFile = useRef();
  const location = useLocation();
  const onSignUpHandle = (state) => {
    const dataUser = Object.keys(state).reduce(
      (obj, item) => ({ ...obj, [item]: state[item].value }),
      {}
    );
    const formData = new FormData();
    for (const key in dataUser) {
      formData.append(key, dataUser[key]);
    }
    formData.append("image", inputFile.current.files[0], "image.jpg");
    dispatch(signup(formData));
    history.push("/");
  };
  useEffect(() => {
    if (user) {
      if (location?.state) return history.push(location.state);
      history.push("/");
    }
  }, [user, history, location]);
  return (
    <div className="signup-container">
      <FormContainer
        initialState={INITIAL_FORM_STATE}
        dataInputs={DATA_INPUTS}
        regexValidation={REGULAR_EXPRESSION}
        onSignUpHandle={onSignUpHandle}
        title={"Datos de registro"}
        classname={"signup"}
        submitMessagge={"Registrar"}
      >
        <div className="upload-image">
          <label>Cargar una imagen</label>
          <input
            ref={inputFile}
            type="file"
            name="image"
            accept="image/jpg"
            required={true}
          />
        </div>
      </FormContainer>
    </div>
  );
};

export default SignUp;
