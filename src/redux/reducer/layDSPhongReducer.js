import {
  SET_LIST_ROOM,
  SET_UTILITIES_ROOM,
} from "../type/layDanhSachPhongType";

const initialState = {
  dsPhong: [],
  dsPhongUtilities: null,
};

export const layDSPhongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_ROOM: {
      state.dsPhong = action.payload;
      return { ...state };
    }
    case SET_UTILITIES_ROOM: {
      console.log(action.payload);
      let dsPhongUpdate = [...state.dsPhong];
      console.log(dsPhongUpdate);
      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;
        console.log(state.dsPhong);
        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.wifi === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    default:
      return { ...state };
  }
};
