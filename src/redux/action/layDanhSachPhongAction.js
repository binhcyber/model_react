import httpServ from "../../serviceWorker/http.service";
import { SET_LIST_ROOM } from "../type/layDanhSachPhongType";
export const layDSPhongAction = () => {
  return (dispatch) => {
    httpServ
      .layDanhSachPhong()
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SET_LIST_ROOM,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
};
