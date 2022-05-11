import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDSNguoiDungAction } from "../../redux/action/layDSNguoiDung";
import { xoaNguoiDungAction } from "../../redux/action/CRUDNguoiDungAction";
import moment from "moment";
import { AiFillEdit } from "react-icons/ai/index";
import { BsFillTrashFill } from "react-icons/bs/index";
import { Modal, Button, Alert, message } from "antd";
import { Input, Space } from "antd";
import ModalThemUser from "./ModalThemUser";
import {
  EDIT_NGUOI_DUNG,
  SEARCH_NGUOI_DUNG,
} from "../../redux/type/CRUDNguoiDungType";
import { Redirect, useHistory } from "react-router-dom";
import localStorageServ from "../../serviceWorker/locaStorage.service";
export default function ManageUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const { dsPhongPhanTrang } = useSelector((state) => {
    return state.dsNguoiDungPhanTrangReducer;
  });
  console.log(dsPhongPhanTrang);
  const numEachPage = 10;
  const [pagination, setPagination] = useState({
    minValue: 0,
    maxValue: 10,
  });
  const handleChange = (value) => {
    setPagination({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };
  useEffect(() => {
    const minItem = pagination.minValue;
    const maxItem = pagination.maxValue;
    dispatch(layDSNguoiDungAction(minItem, maxItem));
  }, [pagination]);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderTable = () => {
    return (
      dsPhongPhanTrang &&
      dsPhongPhanTrang.length > 0 &&
      dsPhongPhanTrang
        .slice(pagination.minValue, pagination.maxValue)
        .map((user, index) => {
          return (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {user.name}
              </th>

              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phone}</td>
              {/* <td className="px-6 py-4">
                {moment(user.birthday).format("DD/MM/YYYY")}
              </td> */}
              <td className="px-6 py-4">
                {user.type === "ADMIN" ? (
                  <span className="text-red-500 font-medium px-1 border-red-500 border-1">
                    {user.type}
                  </span>
                ) : (
                  <span className="text-green-500 font-medium px-1 border-green-500 border-1">
                    {user.type}
                  </span>
                )}
              </td>
              <td className="px-6 py-4 flex flex-row justify-between items-center">
                <Button onClick={showModal}>
                  <BsFillTrashFill className="font-medium text-lg text-red-600 dark:text-blue-500 cursor-pointer" />
                </Button>
                <Modal
                  title="Cảnh báo"
                  visible={isModalVisible}
                  onOk={() => {
                    dispatch(xoaNguoiDungAction(user._id));
                  }}
                  onCancel={handleCancel}
                >
                  Bạn có chắn muốn xóa người dùng này không?
                </Modal>
                <AiFillEdit
                  onClick={() => {
                    dispatch({
                      type: EDIT_NGUOI_DUNG,
                      payload: user,
                    });
                    history.push("/edituser");
                  }}
                  className="font-medium text-lg text-blue-600 dark:text-blue-500 cursor-pointer"
                />
              </td>
            </tr>
          );
        })
    );
  };
  return localStorageServ.userInfor.get() &&
    localStorageServ.userInfor.get().type === "ADMIN" ? (
    <div className="container mx-auto mt-12">
      <h1 className="text-lg">Quản lý admin</h1>
      <div className="my-4">
        <ModalThemUser />
      </div>
      {/* <form className="mb-5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative my-10">
          <input
            disabled
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            onChange={(e) => {
              let userSearch = e.target.value;
              setSearchUser(userSearch);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(searchUser);
              dispatch({
                type: SEARCH_NGUOI_DUNG,
                payload: searchUser,
              });
            }}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form> */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>

              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Birthday
              </th>
              <th scope="col" className="px-6 py-3 ">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={numEachPage} //default size of page
        onChange={handleChange}
        total={500} //total number of card data available
      />
    </div>
  ) : (
    setTimeout(() => {
      history.push("/login");
      message.error("Sorry, Bạn không đủ quyền truy cập");
    }, [500])
  );
}
