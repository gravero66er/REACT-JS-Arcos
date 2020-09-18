import React, { useEffect } from "react";
import BarData from "./bar_data";
import PieData from "./pie_data";
import LineData from "./line_data";
import Aos from "aos";
import "aos/dist/aos.css";

const Charts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="charts">
      <div className="chart__title">
        <span>Наши</span> показатели:
      </div>
      <div className="chart" data-aos="fade-right">
        <BarData />
        <div className="chart__info">
          <div className="chart__info-title">Lorem, ipsum dolor.</div>
          <div className="chart__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eos adipisci ipsum dolore, facere quis alias quaerat quia sapiente.
            Natus cum consequatur eum quae doloribus dicta! Pariatur blanditiis
            natus praesentium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi eos adipisci ipsum dolore, facere quis
            alias quaerat quia sapiente. Natus cum consequatur eum quae
            doloribus dicta! Pariatur blanditiis natus praesentium.
          </div>
        </div>
      </div>
      <div className="chart" data-aos="fade-left">
        <LineData />
        <div className="chart__info">
          <div className="chart__info-title">Lorem, ipsum dolor.</div>
          <div className="chart__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eos adipisci ipsum dolore, facere quis alias quaerat quia sapiente.
            Natus cum consequatur eum quae doloribus dicta! Pariatur blanditiis
            natus praesentium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi eos adipisci ipsum dolore, facere quis
            alias quaerat quia sapiente. Natus cum consequatur eum quae
            doloribus dicta! Pariatur blanditiis natus praesentium.
          </div>
        </div>
      </div>
      <div className="chart" data-aos="fade-right">
        <PieData />
        <div className="chart__info">
          <div className="chart__info-title">Lorem, ipsum dolor.</div>
          <div className="chart__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eos adipisci ipsum dolore, facere quis alias quaerat quia sapiente.
            Natus cum consequatur eum quae doloribus dicta! Pariatur blanditiis
            natus praesentium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi eos adipisci ipsum dolore, facere quis
            alias quaerat quia sapiente. Natus cum consequatur eum quae
            doloribus dicta! Pariatur blanditiis natus praesentium.
          </div>
        </div>
      </div>
      <div className="chart" data-aos="fade-left">
        <BarData />
        <div className="chart__info">
          <div className="chart__info-title">Lorem, ipsum dolor.</div>
          <div className="chart__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eos adipisci ipsum dolore, facere quis alias quaerat quia sapiente.
            Natus cum consequatur eum quae doloribus dicta! Pariatur blanditiis
            natus praesentium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi eos adipisci ipsum dolore, facere quis
            alias quaerat quia sapiente. Natus cum consequatur eum quae
            doloribus dicta! Pariatur blanditiis natus praesentium.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
