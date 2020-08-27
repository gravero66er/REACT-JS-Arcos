import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import AboutInfo from "./components/about/about__info";
import Activities from "./components/activities/activities";
import Advantages from "./components/advantages/advantages";
import Chart from "./components/stats/charts";


function App() {

  return (
    <div className="wrapper">
      <Header />
      <AboutInfo />
      <Advantages />
      <Activities />
      <Chart />
    </div>

  )
}


export default App;
