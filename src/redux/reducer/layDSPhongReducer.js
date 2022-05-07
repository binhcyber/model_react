import {
  CREATE_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
  SET_LIST_ROOM,
  SET_THANG_MAY,
  SET_WIFI,
  UPADTE_ROOM,
} from "../type/layDanhSachPhongType";
const initialState = {
  dsPhong: [],
  dsPhongUtilities: null,
  editPhong: {},
};

export const layDSPhongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_ROOM: {
      state.dsPhong = action.payload;
      return { ...state };
    }
    case CREATE_ROOM: {
      console.log(action.payload);
      let newDsPhong = [...state.dsPhong];
      newDsPhong.push(action.payload);
      state.dsPhong = newDsPhong;
      return { ...state };
    }
    case DELETE_ROOM: {
      console.log(action.payload);
      let newDsPhong = [...state.dsPhong];
      let index = newDsPhong.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (index !== -1) {
        newDsPhong.splice(index, 1);
      }
      state.dsPhong = newDsPhong;
      return { ...state };
    }
    case EDIT_ROOM: {
      state.editPhong = action.payload;
      return { ...state };
    }
    case UPADTE_ROOM: {
      let roomUpdate = action.payload;
      state.editPhong = roomUpdate;
      let newDsPhong = [...state.dsPhong];
      let index = newDsPhong.findIndex((item) => {
        return (item._id = roomUpdate._id);
      });
      if (index !== -1) {
        newDsPhong[index] = roomUpdate;
      }
      state.dsPhong = newDsPhong;
      return { ...state };
    }
    case SET_WIFI: {
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

    case SET_THANG_MAY: {
      console.log(action.payload);
      let dsPhongUpdate = [...state.dsPhong];
      console.log(dsPhongUpdate);
      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;
        console.log(state.dsPhong);
        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.elevator === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }

    default:
      return { ...state };
  }
};
