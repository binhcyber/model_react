import { combineReducers } from "redux";
import { layChiTietPhongReducer } from "./layChiTietPhongReducer";
import { layDSPhongReducer } from "./layDSPhongReducer";
import { layDSViTriReducer } from "./layDSViTriReducer";

export const rootReducer = combineReducers({
  layDSViTriReducer,
  layDSPhongReducer,
  layChiTietPhongReducer,
});
