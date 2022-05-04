import { SET_USER_PAGINATE } from "../type/layDSNguoiDungType";

const initialState = {
  dsPhongPhanTrang: null,
};

export const dsNguoiDungPhanTrangReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PAGINATE: {
      console.log(action.payload);
      state.dsPhongPhanTrang = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};
