import httpServ from "../../serviceWorker/http.service";
import { LAY_DANH_GIA, TAO_DANH_GIA } from "../type/DanhGiaType";
export const layDanhGiaAction = (id) => {
  return (dispatch) => {
    httpServ
      .layDanhGia(id)
      .then((res) => {
        dispatch({
          type: LAY_DANH_GIA,
          payload: res.data,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const taoDanhGiaAction = (id, data) => {
  return (dispatch) => {
    httpServ
      .taoDanhGia(id, data)
      .then((res) => {
        dispatch({
          type: TAO_DANH_GIA,
          payload: res.data,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
