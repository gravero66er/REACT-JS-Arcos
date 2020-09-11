import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import AboutInfo from "./components/about/about__info";
import Activities from "./components/activities/activities";
import Advantages from "./components/advantages/advantages";
import Chart from "./components/stats/charts";
import Slider from "./components/slider/slider";


function App() {

  return (
    <div className="wrapper">
      <Header />
      <AboutInfo />
      <Advantages />
      <Activities />
      <Chart />
      <Slider />
    </div>

  )
}


export default App;
