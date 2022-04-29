import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
const { Meta } = Card;
import { layDSViTriAction } from "../../../redux/action/layDanhSachViTriAction";
import { NavLink } from "react-router-dom";
import "../../PageCss/Page.css";
export default function HomeDetail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDSViTriAction());
  }, []);
  const { dsViTri } = useSelector((state) => {
    return state.layDSViTriReducer;
  });
  console.log(dsViTri);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderLocation = () => {
    return dsViTri?.map((vitri, index) => {
      return (
        <div key={index} className="space-x-1 rounded-md">
          <NavLink to={"/room"}>
            <Card
              key={index}
              hoverable
              style={{ width: "90%", borderRadius: "10px", height: "324px" }}
              cover={
                <img
                  alt="example"
                  src={vitri.image}
                  style={{
                    width: "100%",
                    height: "206px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              }
            >
              <Meta
                className="text-white"
                title={vitri.province}
                description={vitri.name}
              />
            </Card>
          </NavLink>
        </div>
      );
    });
  };
  return (
    <div className="container my-5 mx-auto py-5">
      <Slider {...settings}>{renderLocation()}</Slider>
    </div>
  );
}
