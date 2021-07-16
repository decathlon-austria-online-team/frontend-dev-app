import React from "react";
import "./index.css";
import HpComponentsPage from "../HpComponentsPage";
import MainIllu from "../../img/main-illu.svg";

const Home = () => {
  return (
    <div className="home">
      {/*
            <div className="home__imgContainer">
        <img src="https://www.decathlon.ca/themes/decashop_v5/assets/img/logo-decathlon-blue.svg" />
      </div>
      <HpComponentsPage />
      */}
      <div className="home__img-container">
        <img alt="" src={MainIllu} />
      </div>
    </div>
  );
};

export default Home;
