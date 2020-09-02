import React, { Component } from "react";
import BarData from "./bar_data";
import PieData from "./pie_data";
import LineData from "./line_data";

class charts extends Component {
  render() {
    return (
      <>
        <div className="chart__title">
          <span>Наши</span> показатели:
        </div>
        <div className="chart">
          <BarData />
          <div className="chart__info">
            <div className="chart__info-title">Lorem, ipsum dolor.</div>
            <div className="chart__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eos adipisci ipsum dolore, facere quis alias quaerat quia
              sapiente. Natus cum consequatur eum quae doloribus dicta! Pariatur
              blanditiis natus praesentium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi eos adipisci ipsum dolore,
              facere quis alias quaerat quia sapiente. Natus cum consequatur eum
              quae doloribus dicta! Pariatur blanditiis natus praesentium.
            </div>
          </div>
        </div>
        <div className="chart">
          <LineData />
          <div className="chart__info">
            <div className="chart__info-title">Lorem, ipsum dolor.</div>
            <div className="chart__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eos adipisci ipsum dolore, facere quis alias quaerat quia
              sapiente. Natus cum consequatur eum quae doloribus dicta! Pariatur
              blanditiis natus praesentium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi eos adipisci ipsum dolore,
              facere quis alias quaerat quia sapiente. Natus cum consequatur eum
              quae doloribus dicta! Pariatur blanditiis natus praesentium.
            </div>
          </div>
        </div>
        <div className="chart">
          <PieData />
          <div className="chart__info">
            <div className="chart__info-title">Lorem, ipsum dolor.</div>
            <div className="chart__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eos adipisci ipsum dolore, facere quis alias quaerat quia
              sapiente. Natus cum consequatur eum quae doloribus dicta! Pariatur
              blanditiis natus praesentium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi eos adipisci ipsum dolore,
              facere quis alias quaerat quia sapiente. Natus cum consequatur eum
              quae doloribus dicta! Pariatur blanditiis natus praesentium.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default charts;
