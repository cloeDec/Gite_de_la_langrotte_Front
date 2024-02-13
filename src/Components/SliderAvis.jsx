import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Avis from "../Components/Avis";

const SliderAvis = ({ avis }) => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#ae5e52",
      }}
      // direction={'vertical'}
      speed={1000}
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {avis.map((e) => {
        return (
           
          <SwiperSlide key={e}>
            <Avis avis={e}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderAvis;
