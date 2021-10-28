import * as actionTypes from './type';

const initState = {
	user: {},
	isMetamaskLoggedIn: undefined,
	error: {},
	loading: false,
};
const authReducer = (state = initState, action) => {
	switch (action.type) {
		// case actionTypes.SET_CURRENT_USER:
		// 	return {
		// 		...state,
		// 		user: action.payload,
		// 		isAuthenticated: !isEmpty(action.payload)
		// 	};
		default:
			return state;
	}
};

export default authReducer;
