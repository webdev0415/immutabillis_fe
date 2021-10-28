import axios from "axios";
import * as actionTypes from "./type";

export const handleAuthenticationAction = (payload) => {
    console.log("payload", payload)
    const { publicAddress, signature, history } = payload;
    
  return (dispatch) => {
    try {
      dispatch({
        type: actionTypes.AUTHENTICATION_SUCCESS,
        payload: payload,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.AUTHENTICATION_FAILURE,
        payload: err,
      });
    }
  };
};

export const authenticateFailureAction = (err) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.AUTHENTICATION_FAILURE,
      payload: err,
    });
  };
};
