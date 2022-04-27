import { SET_LIST_ROOM } from "../type/layDanhSachPhongType";

const initialState = {
  dsPhong: [],
};

export const layDSPhongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_ROOM: {
      state.dsPhong = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
