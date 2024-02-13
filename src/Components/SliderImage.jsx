import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow} from "swiper/modules";
import Image from "../Components/Image";

const SliderAvis = ({ image }) => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#ae5e52",
      }}
      speed={1000}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
      className="mySwiper"
    >
      {image.map((e) => {
        return (
          <SwiperSlide key={e}>
            <Image image={e}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderAvis;