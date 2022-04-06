import Cookies from "universal-cookie";
import URL from "../../constants/url";
const cookies = new Cookies();
export const LOGIN = "LOGIN";
export const SIGN_UP = "SIGN_UP";
export const CONTINUE_SESSION = "CONTINUE_SESSION";
export const SET_FAVORITES = "SET_FAVORITES";
export const POST_CART = "POST_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const CONFIRM_PURCHASE = "CONFIRM_PURCHASE";
export const CLEAN_STATE = "CLEAN_STATE";
export const CLEAR_ALERT = "CLEAR_ALERT";
export const UPDATE_USER = "UPDATE_USER";
export const login = (dataUser) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/api/auth/login`, {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify(dataUser),
      });
      const data = await response.json();
      if (!response.ok) {
        const throwError = {
          status: response.status || 404,
          message: data.message || "Ha ocurrido un error",
        };
        throw throwError;
      }
      cookies.set("tk", data.access_token, { maxAge: 1000000, path: "/" });

      dispatch({
        type: LOGIN,
        payload: {
          access_token: data.access_token,
          dataUser: data.dataUser,
          alert: {
            status: "success",
            message: `Bienvenido ${data.dataUser.name}`,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: LOGIN,
        payload: {
          alert: {
            status: "error",
            message: `${error.message}`,
          },
        },
      });
    }
  };
};

export const signup = (signup_data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/api/auth/signup`, {
        method: "post",
        body: signup_data,
      });
      const dataUser = await response.json();
      if (!response.ok) {
        const throwError = {
          status: response.status || 404,
          message: dataUser.message || "Ha ocurrido un error",
        };
        throw throwError;
      }
      cookies.set("tk", dataUser.access_token, { maxAge: 1000000 });
      dispatch({
        type: SIGN_UP,
        payload: {
          access_token: dataUser.access_token,
          dataUser: dataUser.dataUser.data,
          alert: { status: "success", message: "Registrado con exito" },
        },
      });
    } catch (error) {
      console.log("error", error);
      cookies.remove("tk");
      dispatch({
        type: CLEAN_STATE,
        payload: {
          alert: {
            status: "error",
            message: `${error.message}`,
          },
        },
      });
    }
  };
};

export const continueSession = (access_token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/api/auth/dataUser`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const dataUser = await response.json();
      if (!response.ok) {
        const throwError = {
          status: response.status || 404,
          message: dataUser.message || "Ha ocurrido un error",
        };
        throw throwError;
      }
      dispatch({
        type: CONTINUE_SESSION,
        payload: {
          access_token,
          dataUser: dataUser.data,
        },
      });
    } catch (error) {
      cookies.remove("tk", { path: "/" });
      dispatch({
        type: CLEAN_STATE,
        payload: {
          alert: {
            status: "error",
            message: `¡Sesión expirada!`,
          },
        },
      });
    }
  };
};

export const setFavorites = (access_token, productId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/api/products/setFavorites`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        method: "put",
        body: JSON.stringify({ productId }),
      });
      const { data } = await response.json();
      dispatch({
        type: SET_FAVORITES,
        payload: {
          dataUser: data,
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const postCart = (access_token, dataProduct) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/api/cart/postProductCart`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ ...dataProduct }),
      });
      const dataUser = await response.json();
      dispatch({ type: POST_CART, payload: dataUser.data });
    } catch (error) {
      throw error;
    }
  };
};

export const deleteProductCart = (access_token, productId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/api/cart/deleteProductCart`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        method: "delete",
        body: JSON.stringify({ productId }),
      });
      const dataUser = await response.json();
      dispatch({ type: DELETE_PRODUCT_CART, payload: dataUser.data });
    } catch (error) {
      throw error;
    }
  };
};

export const cleanState = () => ({
  type: CLEAN_STATE,
});
export const clearAlert = () => ({
  type: CLEAR_ALERT,
});

export const updateUser = (dataUser) => ({
  type: UPDATE_USER,
  payload: dataUser,
});
