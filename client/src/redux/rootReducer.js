import { combineReducers } from "redux";
import auth from "./auth/reducer";
import todo from "./todo/reducer";
import opener from "./opener/reducer";

const rootReducer = combineReducers({
  auth,
  todo,
  opener,
});

export default rootReducer;
