import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import HeaderInfo from "./components/header__info/header__info";
import HeaderBottom from "./components/header__bottom/header__bottom";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <HeaderInfo />
      <HeaderBottom />
    </div>
    
  )
}

export default App;
