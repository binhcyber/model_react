import { message } from "antd";
import httpServ from "../../serviceWorker/http.service";
import { THEM_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../type/CRUDNguoiDungType";
export const themNguoiDungAction = (data) => {
  return (dispatch) => {
    httpServ
      .themNguoiDung(data)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: THEM_NGUOI_DUNG,
          payload: res.data,
        });
        message.success("THÊM NGƯỜI DÙNG THÀNH CÔNG");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const xoaNguoiDungAction = (id) => {
  return (dispatch) => {
    httpServ
      .xoaNguoiDung(id)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: XOA_NGUOI_DUNG,
          payload: res.data,
        });
        message.success("XÓA NGƯỜI DÙNG THÀNH CÔNG");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
