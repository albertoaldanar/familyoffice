import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "./sliderData";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";


function Newsticker() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Fragment>
      <div className="container-fluid  news-ticker">
        <div>
          <div className="best-ticker">
            <div className="bn-news" >
              <ul>
                <Slider {...settings}>
                  {sliderData.map((item, index) => (
                    <li key={index} className="text-muted fs-12  mx-2">
                      <span className={`mx-1 fe ${item.icon}`} style={{ color: "#004745"}}></span>
                      <span className=" mx-1 d-inline-block" style={{ color: "#004745" }}>
                        {item.title}:
                      </span>
                      <span className="bn-positive me-4" style={{ color: "#004745", fontWeight: 'bold' }}>
                       {item.value} 
                      </span>
                    </li>
                  ))}
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Newsticker;
