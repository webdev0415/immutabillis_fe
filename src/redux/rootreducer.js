import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/reducer";

const persistConfig = {
  key: "root",
  storage,
//   transforms: [],
  // whitelist: ['auth.isOtpSent']
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
