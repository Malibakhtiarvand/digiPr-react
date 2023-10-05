import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import pr from "../../assets/pr.webp";
import checkRerender from "../../helpers/checkRerender";
import box from "../../assets/box.webp";
import { NavLink } from "react-router-dom";

export default function SpecialOffer() {
  checkRerender("SpecialOffer");
  const [slidesPerView, setSlidesPerView] = useState(5);

  function checkWidth() {
    console.log("checkWidth");
    if (window.innerWidth > 1200) {
      setSlidesPerView(5);
    } else if (window.innerWidth > 1090) {
      setSlidesPerView(4);
    } else if (window.innerWidth > 880) {
      setSlidesPerView(3);
    } else if (window.innerWidth > 670) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  }

  useEffect(() => {
    checkWidth();
  }, []);

  window.onresize = checkWidth;
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={1}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper1"
        style={{
          backgroundColor: "#ffe4e8",
          marginTop: "20px",
          height: "250px",
          textAlign: "center",
        }}
      >
        <SwiperSlide>
          <NavLink to={"/prs/" + Math.floor(Math.random() * 20)}>
            <img
              style={{ height: "220px", width: "200px" }}
              src={box}
              alt="pr"
            />
            <p>فروش موبایل</p>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={"/prs/" + Math.floor(Math.random() * 20)}>
            <img
              style={{ height: "220px", width: "200px" }}
              src={pr}
              alt="pr"
            />
            <p>فروش موبایل</p>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to={"/prs/" + Math.floor(Math.random() * 20)}>
            <img
              style={{ height: "220px", width: "200px" }}
              src={pr}
              alt="pr"
            />
            <p>فروش موبایل</p>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to={"/prs/" + Math.floor(Math.random() * 20)}>
            <img
              style={{ height: "220px", width: "200px" }}
              src={pr}
              alt="pr"
            />
            <p>فروش موبایل</p>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to={"/prs/" + Math.floor(Math.random() * 20)}>
            <img
              style={{ height: "220px", width: "200px" }}
              src={pr}
              alt="pr"
            />
            <p>فروش موبایل</p>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to={"/prs/" + Math.floor(Math.random() * 20)}>
            <img
              style={{ height: "220px", width: "200px" }}
              src={pr}
              alt="pr"
            />
            <p>فروش موبایل</p>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to={"/prs/" + Math.floor(Math.random() * 20)}>
            <img
              style={{ height: "220px", width: "200px" }}
              src={pr}
              alt="pr"
            />
            <p>فروش موبایل</p>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to={"/prs/" + Math.floor(Math.random() * 20)}>
            <img
              style={{ height: "220px", width: "200px" }}
              src={pr}
              alt="pr"
            />
            <p>فروش موبایل</p>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
