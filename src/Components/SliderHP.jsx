import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import PhotoMouette from "../Assets/mouette-blanche-survolant-cote.jpg";
import PhotoYacht from "../Assets/yacht-reflet-coucher-soleil-port.jpg";
import PhotoBateau from "../Assets/bateaux-dans-port-rovinj-croatie.jpg";
import PhotoPlage from "../Assets/vue-verticale-rochers-plage-palombaggia.jpg";

const Slider = () => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#f5efea",
      }}
      speed={1000}
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={PhotoMouette} className="slider" alt="Photo d'une Mouette" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={PhotoBateau} className="slider" alt="Photo de bateau" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={PhotoYacht} className="slider" alt="Photo de Yachts" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={PhotoPlage} className="slider" alt="Photo d'une Plage" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
