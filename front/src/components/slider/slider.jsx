import React, { useState } from "react";
import ImgComp from "./img_comp";

import bannerPic_1 from "../../img/bannerPic_1.png";
import bannerPic_2 from "../../img/bannerPic_2.png";
import bannerPic_3 from "../../img/bannerPic_3.png";
import bannerPic_4 from "../../img/bannerPic_4.png";
import bannerPic_5 from "../../img/bannerPic_5.png";

const Slider = () => {
  let sliderArray = [
    <ImgComp src={bannerPic_1} />,
    <ImgComp src={bannerPic_2} />,
    <ImgComp src={bannerPic_3} />,
    <ImgComp src={bannerPic_4} />,
    <ImgComp src={bannerPic_5} />,
  ];

  const [moveSlide, setMove] = useState(0);

  const sliderLeft = () => {
    moveSlide === 0
      ? setMove(-100 * (sliderArray.length - 1))
      : setMove(moveSlide + 100);
  };

  const sliderRight = () => {
    moveSlide === -100 * (sliderArray.length - 1)
      ? setMove(0)
      : setMove(moveSlide - 100);
  };

  return (
    <div className="slider">
      {sliderArray.map((item, index) => {
        return (
          <div
            key={index}
            className="slider__item"
            style={{ transform: `translateX(${moveSlide}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="left" onClick={sliderLeft}>
        <svg display="none">
          <symbol id="back_arrow" viewBox="0 0 443.52 443.52">
            <g>
              <path
                fill="#ffffff"
                d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
			c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
			L143.492,221.863z"
              />
            </g>
          </symbol>
        </svg>
        <div>
          <svg>
            <use xlinkHref="#back_arrow"></use>
          </svg>
        </div>
      </button>
      <button id="right" onClick={sliderRight}>
        <svg display="none">
          <symbol id="back_arrow" viewBox="0 0 443.52 443.52">
            <g>
              <path
                fill="#ffffff"
                d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
			c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
			L143.492,221.863z"
              />
            </g>
          </symbol>
        </svg>
        <div>
          <svg>
            <use xlinkHref="#back_arrow"></use>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Slider;
