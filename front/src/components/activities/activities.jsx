import React from "react";
import HeaderProduction from "./activities__production";
import HeaderShop from "./activities__shop";
import HeaderDevelopment from "./activities__development";
import HeaderDevelopmentSup from "./activities__development-supply";

export default function Activities() {
  return (
    <div className="activities">
      <div className="activities__title"><span>Наши</span> подразделения:</div>
      <div className="activities__grids">
        <HeaderShop />
        <HeaderProduction />
        <HeaderDevelopment />
        <HeaderDevelopmentSup />
      </div>
      {/* <div className="activities__line"></div> */}
    </div>
  );
}
