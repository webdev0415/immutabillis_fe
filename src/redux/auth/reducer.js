import * as actionTypes from "./type";
const isEmpty = require('is-empty');

const initState = {
  user: {},
  isMetamaskLoggedIn: undefined,
  error: {},
  loading: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
	case actionTypes.AUTHENTICATION:
		return {
		  ...state,
		  loading: true
		};
    case actionTypes.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isMetamaskLoggedIn: !isEmpty(action.payload),
		loading: false
      };
    case actionTypes.AUTHENTICATION_FAILURE:
      return {
        user: {},
        isMetamaskLoggedIn: false,
		error: action.payload,
		loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
