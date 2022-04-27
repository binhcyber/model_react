import { combineReducers } from "redux";
import { layDSPhongReducer } from "./layDSPhongReducer";
import { layDSViTriReducer } from "./layDSViTriReducer";

export const rootReducer = combineReducers({
  layDSViTriReducer,
  layDSPhongReducer,
});
