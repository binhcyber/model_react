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
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
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
        <div key={index} className="space-x-1 rounded-md my-10">
          <NavLink to={"/room"}>
            <Card
              key={index}
              hoverable
              style={{ width: "90%", borderRadius: "10px", height: "324px" }}
              cover={
                <img
                  alt="example"
                  src={
                    vitri.image ? vitri.image : "https://picsum.photos/252/206"
                  }
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
    <div className="mt-5">
      <div className="relative container mx-auto ">
        <img
          src="https://picsum.photos/1200/600"
          className=" object-cover object-center rounded-xl mx-auto"
        />
        <div
          style={{ bottom: "120px", left: "300px" }}
          className="absolute text-4xl z-10 text-white font-medium "
        >
          Hãy để trí tò mò của bạn dẫn lối
        </div>
      </div>
      <div className="container my-5 mx-auto py-5">
        <Slider {...settings}>{renderLocation()}</Slider>
      </div>
      <div className="container mx-auto">
        <h1 className="text-2xl">Khám phá trải nghiệm AirBnB</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="https://picsum.photos/580/700"
              className="object-cover object-center rounded-xl text-center z-10"
            />
            <div
              style={{ top: "20px", left: "20px" }}
              className="absolute text-4xl font-medium text-white"
            >
              Những điều nên trải nghiệm trong chuyến đi của bạn
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/580/700"
              className="object-cover object-center rounded-xl"
            />
            <div
              style={{ top: "20px", left: "20px" }}
              className="absolute text-4xl font-medium text-white"
            >
              Những điều nên trải nghiệm tại nhà
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-5">
        <img
          src="https://picsum.photos/1380/680"
          className="object-cover object-center mx-auto"
        />
        <div
          className="absolute text-6xl font-medium text-white"
          style={{ top: "40px", left: "60px" }}
        >
          Bạn có thắc mắc về việc đón tiếp khách?
        </div>
      </div>
    </div>
  );
}
