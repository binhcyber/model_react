import httpServ from "../../serviceWorker/http.service";
import { DANG_NHAP_TYPE } from "../type/localStorageType";
import { history } from "../../App";
import { message, Button, Space } from "antd";
export const dangNhapAction = (data) => {
  return (dispatch) => {
    httpServ
      .dangNhap(data)
      .then((res) => {
        console.log(res.data.user);
        dispatch({
          type: DANG_NHAP_TYPE,
          payload: res.data.user,
        });
        setTimeout(() => {
          message.success("Đăng Ký Thàng công");
          history.goBack();
        }, [2000]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
