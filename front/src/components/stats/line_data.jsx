import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class LineData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["a", "b", "c", "d", "e", "f"],
        datasets: [
          {
            data: [15, 64, 78, 4, 18, 25],
            borderColor: "#FFD951",
            backgroundColor: "#1463aa",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart__box">
        <Line data={this.state.chartData} options={{
          legend: {
            display: false,
          }
        }}  />
      </div>
    );
  }
}

export default LineData;