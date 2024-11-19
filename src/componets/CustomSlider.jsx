import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/CustomSlider.css";


const CustomSlider = () => {
  const settings = {
    dots: true, 
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1, 
    arrows: false,  
    autoplay: true, 
    autoplaySpeed: 2500,  
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="slide-content">
            <h3>We don't want to be without it anymore</h3>
            <p>
              "OnlineSchadestaait is a very handy program with which you can
              quickly and easily create a damage report. We also receive
              compliments from insurers about the way in which everything is now
              provided."
            </p>
          </div>
        </div>

        <div>
        <div className="slide-content">
            <h3>We don't want to be without it anymore</h3>
            <p>
              "OnlineSchadestaait is a very handy program with which you can
              quickly and easily create a damage report. We also receive
              compliments from insurers about the way in which everything is now
              provided."
            </p>
          </div>
        </div>
        <div>
        <div className="slide-content">
            <h3>We don't want to be without it anymore</h3>
            <p>
              "OnlineSchadestaait is a very handy program with which you can
              quickly and easily create a damage report. We also receive
              compliments from insurers about the way in which everything is now
              provided."
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
