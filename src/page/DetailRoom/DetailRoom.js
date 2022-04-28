import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layChiTietPhongAction } from "../../redux/action/layChiTietPhongAction";
import { Modal, Button } from "antd";

export default function DetailRoom() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layChiTietPhongAction(id));
  }, []);
  const { chiTietPhong } = useSelector((state) => {
    return state.layChiTietPhongReducer;
  });
  console.log(chiTietPhong);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="container mx-auto ">
      <div className="flex flex-row items-center justify-center ">
        <div className="flex flex-col justify-center items-center">
          <h1>{chiTietPhong?.name}</h1>
          <img
            src={
              chiTietPhong?.image
                ? chiTietPhong?.image
                : "http://picsum.photos/200"
            }
          />
          <hr />
          <p className="mt-3">
            Phòng ngủ:
            {chiTietPhong?.bedroom ? chiTietPhong.bedroom : "Đang cập nhật"} -
            Phòng khách:
            {chiTietPhong?.guests ? chiTietPhong.guests : "Đang cập nhật"} - Nhà
            vệ sinh: {chiTietPhong?.bath ? chiTietPhong.bath : "Đang cập nhật"}
          </p>
        </div>
        <div className="p-4">
          <h3>
            {chiTietPhong?.description.length >= 50
              ? chiTietPhong?.description.slice(0, 50) + "..."
              : chiTietPhong?.description}
          </h3>
          <>
            <Button onClick={showModal}>Hiển thị chi tiết</Button>
            <Modal
              title="Thông tin chi tiết"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <h1 className="text-2xl font-bold">Giới thiệu về nơi này</h1>
              <p>{chiTietPhong?.description}</p>
              <h3 className="text-xl font-bold">Chổ ở:</h3>
              <p>sạch sẽ, rộng rãi, gần bờ hồ</p>
              <h3 className="text-xl font-bold">
                Tiện nghi khách có quyền sử dụng:
              </h3>
              <p>Tất cả</p>
            </Modal>
          </>
        </div>
      </div>
    </div>
  );
}
{
  /* <div>
  <h1>Nơi này có những gì cho bạn</h1>
  <div>
    <div>
      <WifiOutlined />
      <p>WIFI</p>
    </div>
  </div>
</div>; */
}
