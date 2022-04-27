import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layDSPhongAction } from "../../redux/action/layDanhSachPhongAction";
import { Pagination } from "antd";

export default function DetailRoom() {
  const [pagination, setPagination] = useState({
    minValue: 0,
    maxValue: 20,
  });
  const { dsPhong } = useSelector((state) => {
    return state.layDSPhongReducer;
  });
  console.log(dsPhong);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDSPhongAction());
  }, []);
  const handleChange = (value) => {
    if (value <= 1) {
      setPagination({
        minValue: 0,
        maxValue: 20,
      });
    } else {
      setPagination({
        minValue: pagination.maxValue,
        maxValue: value * 20,
      });
    }
  };
  return (
    <div>
      <div>
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Alternative
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Light
        </button>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 container mx-auto p-0">
          {dsPhong &&
            dsPhong.length > 0 &&
            dsPhong
              .slice(pagination.minValue, pagination.maxValue)
              .map((phong, index) => {
                return (
                  <a
                    key={phong._id}
                    style={{ minWidth: "576px", maxHeight: "200px" }}
                    href="#"
                    className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={
                        phong.image ? phong.image : "https://picsum.photos/200"
                      }
                      alt
                    />
                    <div className="flex flex-col justify-between p-2 leading-normal">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {phong.name}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {phong.description?.length >= 50
                          ? phong.description.slice(0, 50) + "..."
                          : phong.description}
                      </p>
                      <div className="flex flex-row">
                        <span>Guests: {phong.guests} - </span>
                        <span>Bedroom: {phong.bedroom} - </span>
                        <span>Bathroom: {phong.bath} </span>
                      </div>
                      <p className="text-red-500 text-xl font-medium">
                        Price: {phong.price}
                      </p>
                    </div>
                  </a>
                );
              })}
        </div>
        <Pagination
          defaultCurrent={2}
          defaultPageSize={10}
          onChange={handleChange}
          total={dsPhong.length}
        />
      </div>
    </div>
  );
}
