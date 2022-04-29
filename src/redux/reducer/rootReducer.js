import { combineReducers } from "redux";
import { layChiTietPhongReducer } from "./layChiTietPhongReducer";
import { layDSPhongReducer } from "./layDSPhongReducer";
import { layDSViTriReducer } from "./layDSViTriReducer";
import { localStorageReducer } from "./localStorageReducer";

export const rootReducer = combineReducers({
  layDSViTriReducer,
  layDSPhongReducer,
  layChiTietPhongReducer,
  localStorageReducer,
});
