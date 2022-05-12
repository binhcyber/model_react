import { LAY_DANH_GIA, TAO_DANH_GIA } from "../type/DanhGiaType";
const initialState = {
  danhGia: [],
};
export const DanhGiaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_GIA: {
      state.danhGia = action.payload;
      return { ...state };
    }
    case TAO_DANH_GIA: {
      console.log(action.payload);
      let cloneDanhGia = [...state.danhGia, action.payload];
      state.danhGia = cloneDanhGia;
      return { ...state };
    }

    default:
      return state;
  }
};
