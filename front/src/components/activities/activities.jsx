import React from "react";
import ActivitiesShop from "./activities__shop";
import ActivitiesProduction from "./activities__production";
import ActivitiesDevelopment from "./activities__development";
import ActivitiesDevelopmentSup from "./activities__development-supply";
import ActivitiesHr from "./activities__hr";

export default function Activities() {
  return (
    <div className="activities">
      <div className="activities__title"><span>Наши</span> подразделения:</div>
      <div className="activities__grids">
        <ActivitiesShop />
        <ActivitiesProduction />
        <ActivitiesDevelopment />
        <ActivitiesDevelopmentSup />
        <ActivitiesHr />
      </div>
      {/* <div className="activities__line"></div> */}
    </div>
  );
}
