import localStorageServ from "../../serviceWorker/locaStorage.service";
import { DANG_KY_TYPE, DANG_NHAP_TYPE } from "../type/localStorageType";

const initialState = {
  dangKy: null,
  dangNhap: localStorageServ.userInfor.get(),
};

export const localStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_KY_TYPE: {
      state.dangKy = action.payload;
      return { ...state };
    }
    case DANG_NHAP_TYPE: {
      console.log(action.payload);
      state.dangNhap = action.payload;
      localStorageServ.userInfor.set(action.payload);
      return { ...state };
    }
    default:
      return state;
  }
};
