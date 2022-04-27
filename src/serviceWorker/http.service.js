import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  layDanhSachViTri = () => {
    const uri = "/api/locations";
    return AxiosServ.getMethod(uri);
  };
  layDanhSachPhong = () => {
    const uri = `/api/rooms/`;
    return AxiosServ.getMethod(uri);
  };

  // dangNhap = (data) => {
  //   const uri = "/api/QuanLyNguoiDung/DangNhap";
  //   return AxiosServ.postMethod(uri, data);
  // };

  // layDanhSachPhim = () => {
  //   const uri = "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";

  //   return AxiosServ.getMethod(uri);
  // };

  // layThongTinNguoiDung = (data) => {
  //   const uri = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";

  //   return AxiosServ.postMethod(uri, data);
  // };
}

const httpServ = new HttpRequestService();

export default httpServ;
