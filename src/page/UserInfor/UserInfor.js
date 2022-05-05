import React from "react";
import { AiOutlineCheck, AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
export default function UserInfor() {
  const history = useHistory();
  const { dangNhap } = useSelector((state) => {
    return state.localStorageReducer;
  });
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 container mx-auto mt-24 ">
      <div className="border-1 hover:shadow-lg p-3 w-80 rounded-lg">
        <img
          className="mx-auto rounded-full my-3"
          src="https://picsum.photos/150/150"
        />
        <div className="text-center">
          <h3>Xác minh danh tính</h3>
          <p>Xác thực danh tính của bạn với huy hiệu xác minh danh tính.</p>
          <button
            onClick={() => {
              history.push("/adminPriority");
            }}
            className="p-3 border-2 rounded-lg border-black text-md my-3"
          >
            Quản lý Admin
          </button>
          <h3>{dangNhap?.name} đã xác nhận:</h3>
          <p className="flex flex-row justify-center items-center">
            <AiOutlineCheck /> <span>Địa chỉ email</span>
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl">Xin chào, tôi tên là {dangNhap?.name}</h1>
        <p>Bắt đầu tham gia vào năm 2022</p>
        <h1 className="text-xl">Giới thiệu</h1>
        <p>Yêu màu hồng ghét sự giả dối</p>
        <h1 className="flex flex-row justify-start items-center">
          <AiFillStar className="text text-xl" />
          <span className="text-xl">đánh giá</span>
        </h1>
      </div>
    </div>
  );
}
