import {
  CONFIRM_PURCHASE,
  DELETE_PRODUCT_CART,
  LOGIN,
  SIGN_UP,
  POST_CART,
  SET_FAVORITES,
  CLEAN_STATE,
  CLEAR_ALERT,
  UPDATE_USER,
} from "../actions/auth.action";
import { CONTINUE_SESSION } from "../actions/auth.action";
const INITIAL_STATE = {
  access_token: null,
  dataUser: null,
  alert: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        access_token: action.payload.access_token,
        dataUser: action.payload.dataUser,
        alert: action.payload.alert,
      };
    case SIGN_UP:
      return {
        ...state,
        access_token: action.payload.access_token,
        dataUser: action.payload.dataUser,
        alert: action.payload.alert,
      };
    case CONTINUE_SESSION:
      return {
        ...state,
        access_token: action.payload.access_token,
        dataUser: action.payload.dataUser,
      };
    case SET_FAVORITES:
      return {
        ...state,
        dataUser: action.payload.dataUser,
      };
    case POST_CART:
      return { ...state, dataUser: action.payload };
    case DELETE_PRODUCT_CART:
      return { ...state, dataUser: action.payload };
    case CONFIRM_PURCHASE:
      return { ...state, dataUser: action.payload };
    case UPDATE_USER:
      return {
        ...state,
        dataUser: action.payload,
      };
    case CLEAN_STATE:
      return {
        ...state,
        dataUser: null,
        access_token: null,
        alert: alert || null,
      };
    case CLEAR_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
export default AuthReducer;
