import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselComponent = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", mt: 4 }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+1"
            alt="Slide 1"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+2"
            alt="Slide 2"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+3"
            alt="Slide 3"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+3"
            alt="Slide 3"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </SwiperSlide> 
      </Swiper>
    </Box>
  );
};

export default CarouselComponent;
