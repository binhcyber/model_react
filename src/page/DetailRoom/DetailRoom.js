import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layChiTietPhongAction } from "../../redux/action/layChiTietPhongAction";
import { Modal, Button } from "antd";
import { Select } from "antd";
import { WifiOutlined, StarOutlined } from "@ant-design/icons";
const { Option, OptGroup } = Select;
import { Progress } from "antd";
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
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
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
      <div className="grid grid-cols-2">
        <div>
          <h1>Nơi này có những gì cho bạn</h1>
          <div className="grid grid-cols-2">
            <div className=" justify-start items-center flex flex-row space-x-2 space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
            <div className="items-center flex flex-row justify-start space-x-2">
              <WifiOutlined />
              <p className="m-0">Wifi</p>
            </div>
          </div>
        </div>
        <div className="w-370 h-460 rounded-md shadow-md p-4">
          <div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <h3>$15/</h3>
                <span>đêm</span>
              </div>
              <div className="flex flex-row justify-center items-center">
                <StarOutlined />
                <span>8 - đánh giá</span>
              </div>
            </div>
            <div>
              <Select
                defaultValue="lucy"
                style={{ width: "100%", margin: "10px 0 10px 0" }}
                onChange={handleChange}
              >
                <OptGroup label="Manager">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                  <Option value="Yiminghe">yiminghe</Option>
                </OptGroup>
              </Select>
              <div className="focus:outline-none text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full">
                <button className="font-bold text-lg" type="button">
                  Đặt Phòng
                </button>
              </div>
              <div>
                <div className="flex flex-row justify-between items-center">
                  <p>$15 x 1 đêm</p>
                  <p>$15</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between items-center">
                  <p>Phí dịch vụ</p>
                  <p>$0</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-row justify-between items-center">
                <p className="text-xl font-bold">Tổng trước thuế</p>
                <p className="text-xl font-bold">$15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center">
          <StarOutlined />
          <span>8 - đánh giá</span>
        </div>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="justify-start items-center flex flex-row space-x-2 mr-10 ">
            <div className="m-0 flex-shrink-0 w-1/2">Mức độ sách sẽ</div>
            <Progress percent={80} size="small" className="flex-grow" />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Độ chính xác</div>
            <Progress percent={80} size="small" className="flex-grow" />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Liên lạc</div>
            <Progress percent={80} size="small" className="flex-grow" />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Vị Trí</div>
            <Progress percent={80} size="small" className="flex-grow" />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Nhận phòng</div>
            <Progress percent={80} size="small" className="flex-grow" />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Giá trị</div>
            <Progress percent={80} size="small" className="flex-grow" />
          </div>
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
