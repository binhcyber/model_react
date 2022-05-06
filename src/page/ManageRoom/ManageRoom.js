import React, { useEffect } from "react";
import { Table } from "antd";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDSPhongAction } from "../../redux/action/layDanhSachPhongAction";
import { AiFillEdit } from "react-icons/ai/index";
import { BsFillTrashFill } from "react-icons/bs/index";
import { useHistory } from "react-router-dom";
const { Search } = Input;

export default function ManageRoom() {
  const { dsPhong } = useSelector((state) => {
    return state.layDSPhongReducer;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(layDSPhongAction());
  }, []);
  console.log(dsPhong);
  const columns = [
    {
      title: "Mã Phòng",
      dataIndex: "_id",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a._id - b._id,
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Tên phòng",
      dataIndex: "name",
      //   sorter: (a, b) => {
      //     let nameRoomA = a.name.toLowerCase().trim();
      //     let nameRoomB = b.name.toLowerCase().trim();
      //     if (nameRoomA > nameRoomB) {
      //       return 1;
      //     }
      //     return -1;
      //   },
      sortDirections: ["descend"],
      width: "25%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      render: (text, room, index) => {
        return (
          <img
            src={
              room.image
                ? room.image
                : `https://picsum.photos/id/${index}/50/50`
            }
            alt={room.image}
            width="50px"
            height="50px"
          />
        );
      },
      width: "10%",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      render: (text, room, index) => {
        return (
          <p>
            {room.description.length > 50
              ? room.description.slice(0, 50) + "..."
              : room.description}
          </p>
        );
      },
      width: "35%",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, room, index) => {
        return (
          <div className="flex flex-row justify-between items-center">
            <BsFillTrashFill className="text-red-500 text-lg cursor-pointer" />
            <AiFillEdit
              onClick={() => {
                history.push("/addRoom");
              }}
              className="text-blue-500 text-lg cursor-pointer"
            />
          </div>
        );
      },
      width: "10%",
    },
  ];
  const data = dsPhong;
  const onSearch = (value) => console.log(value);
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <h3>Quản lý Phim</h3>
      <Search
        className="my-5"
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
