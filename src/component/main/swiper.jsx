import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import checkRerender from "../../helpers/checkRerender";
import pr from "../../assets/pr_slider.webp";
import pr2 from "../../assets/pr_slider2.webp";

export default function Slider() {
  checkRerender("slider");
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={pr} alt="pr" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={pr2} alt="pr" />
      </SwiperSlide>
    </Swiper>
  );
}
