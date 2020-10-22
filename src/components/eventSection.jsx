import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination } from "swiper";

import BigEventCard from "./big-event-card";

function EventSection(props) {
  SwiperCore.use([EffectFade, Pagination]);

  return (
    <Swiper
      id="big-event-card"
      effect="fade"
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <BigEventCard></BigEventCard>
      </SwiperSlide>
      <SwiperSlide>
        <BigEventCard></BigEventCard>
      </SwiperSlide>
      <SwiperSlide>
        <BigEventCard></BigEventCard>
      </SwiperSlide>
    </Swiper>
  );
}

export default EventSection;
