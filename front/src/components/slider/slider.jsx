import React from "react";
import Slider from "react-slick";

export default class SliderComp extends React.Component {
  render() {
    return (
      <div className="slider">
        <div className="slider__title">
          <span>Наша</span> миссия:
        </div>
        <Slider
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          autoplay={false}
          dots={true}
          autoplaySpeed={5000}
        >
          <div className="slider__item slider__item--one">
            <div className="slider__item-title">Lorem, ipsum dolor.</div>
            <div className="slider__info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              doloribus optio quisquam dolor molestias tenetur ab modi ratione
              sunt repudiandae?
            </div>
          </div>
          <div className="slider__item slider__item--two">
            <div className="slider__item-title">Lorem, ipsum dolor.</div>
            <div className="slider__info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              doloribus optio quisquam dolor molestias tenetur ab modi ratione
              sunt repudiandae?
            </div>
          </div>
          <div className="slider__item slider__item--three">
            <div className="slider__item-title">Lorem, ipsum dolor.</div>
            <div className="slider__info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              doloribus optio quisquam dolor molestias tenetur ab modi ratione
              sunt repudiandae?
            </div>
          </div>
          <div className="slider__item slider__item--four">
            <div className="slider__item-title">Lorem, ipsum dolor.</div>
            <div className="slider__info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              doloribus optio quisquam dolor molestias tenetur ab modi ratione
              sunt repudiandae?
            </div>
          </div>
          <div className="slider__item slider__item--five">
            <div className="slider__item-title">Lorem, ipsum dolor.</div>
            <div className="slider__info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              doloribus optio quisquam dolor molestias tenetur ab modi ratione
              sunt repudiandae?
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
