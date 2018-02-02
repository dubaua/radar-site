import React from "react";
import "swiper/dist/css/swiper.min.css";
import Swiper from "react-id-swiper";
import Image from "./Image";

const spotlightParams = {
  speed: 400,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  paginationCustomizedClass: "swiper-pagination-white"
};

const Gallery = ({ gallery, title, index }) => (
  <Swiper {...spotlightParams} pagination={spotlightParams.pagination}>
    {gallery.map((slide, i) => (
      <div className="swiper-slide" key={i.toString()}>
        <Image src={slide.path} alt={title + index + i} />
      </div>
    ))}
  </Swiper>
);

export default Gallery;
