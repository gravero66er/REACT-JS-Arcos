import React from "react";
import HeaderProduction from "./header__production";
import HeaderShop from "./header__shop";
import HeaderDevelopment from "./header__development";
import HeaderDevelopmentSup from "./header__development-supply";

export default function HeaderBottom() {
  return (
    <div className = "grids">
      <HeaderShop />
      <HeaderProduction />
      <HeaderDevelopment />
      <HeaderDevelopmentSup />
    </div>
  );
}
