import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DATA_INPUTS from "../components/paymentInformation/DataInputs";
import INITIAL_FORM_STATE from "../components/paymentInformation/InitialFormState";
import FormContainer from "../components/form/FormContainer";
import REGULAR_EXPRESSION from "../constants/regex_payment_info";
import URL from "../constants/url";
import { useSelector } from "react-redux";
const PaymentInformation = () => {
  const access_token = useSelector((state) => state.auth.access_token);
  const onSignUpHandle = async (state) => {
    const dataBuyer = Object.keys(state).reduce(
      (obj, item) => ({ ...obj, [item]: state[item].value }),
      {}
    );
    try {
      const response = await fetch(`${URL}/api/purchase/confirmPurchase`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ ...dataBuyer }),
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        const err = {
          status: 400,
          message: "Something have gone wrong",
        };
        throw err;
      }
      window.location.href = data.dataPayment.init_point;
    } catch (error) {
      toast.error("¡Ha ocurrido un error", {
        style: {
          backgroundColor: "#383838",
          color: "#ffffff",
        },
      });
    }
  };

  return (
    <div className="payment-container">
      <FormContainer
        initialState={INITIAL_FORM_STATE}
        dataInputs={DATA_INPUTS}
        regexValidation={REGULAR_EXPRESSION}
        onSignUpHandle={onSignUpHandle}
        title={"Datos de pago y envío"}
        classname={"payment"}
        submitMessagge={"CONFIRMAR COMPRA"}
      />
      <div style={{ position: "fixed" }}>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PaymentInformation;
