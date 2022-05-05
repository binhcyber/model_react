import { SET_USER_PAGINATE } from "../type/layDSNguoiDungType";
import {
  CAP_NHAT_NGUOI_DUNG,
  EDIT_NGUOI_DUNG,
  THEM_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../type/CRUDNguoiDungType";

const initialState = {
  dsPhongPhanTrang: [],
  editUser: null,
};

export const dsNguoiDungPhanTrangReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PAGINATE: {
      console.log(action.payload);
      state.dsPhongPhanTrang = action.payload;
      return { ...state };
    }
    case THEM_NGUOI_DUNG: {
      console.log(action.payload);
      const dsPhongPhanTrangUpdate = [...state.dsPhongPhanTrang];
      dsPhongPhanTrangUpdate.push(action.payload);
      state.dsPhongPhanTrang = dsPhongPhanTrangUpdate;
      return { ...state };
    }
    case XOA_NGUOI_DUNG: {
      console.log(action.payload);
      const dsPhongPhanTrangUpdate = [...state.dsPhongPhanTrang];
      let index = dsPhongPhanTrangUpdate.findIndex((item) => {
        return (item._id = action.payload);
      });
      if (index !== -1) {
        dsPhongPhanTrangUpdate.splice(index, 1);
      }
      state.dsPhongPhanTrang = dsPhongPhanTrangUpdate;
      return { ...state };
    }
    case EDIT_NGUOI_DUNG: {
      console.log(action.payload);
      state.editUser = action.payload;
      return { ...state };
    }
    case CAP_NHAT_NGUOI_DUNG: {
      console.log(action.payload);
      let userUpdate = action.payload;
      state.editUser = userUpdate;
      const dsPhongPhanTrangUpdate = [...state.dsPhongPhanTrang];
      let index = dsPhongPhanTrangUpdate.findIndex((item) => {
        return item._id === userUpdate._id;
      });
      if (index === -1) {
        dsPhongPhanTrangUpdate[index] = userUpdate;
      }
      state.dsPhongPhanTrang = dsPhongPhanTrangUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
