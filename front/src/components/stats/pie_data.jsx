import React, { Component } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

class PieData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["a", "b", "c", "d", "e", "f"],
        datasets: [
          {
            data: [15, 64, 78, 4, 18, 25],
            backgroundColor: [
              "#1463aa",
              "#FFD951",
              "#4391D8",
              "#8190A0",
              "#5C6B7A",
              "#FFE589",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart__box">
        <Doughnut data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default PieData;
