import React, { useState } from "react";
import ImgMediaCard from "../ImgMediaCard";
import "./index.css";

import screenshotHpTopBannerDesktop from "../../img/hp-banner-desktop-screenshot.png";
import screenshotHpTopBannerMobile from "../../img/hp-banner-desktop-screenshot.png";

import PopupHpMainBanner from "../../hpPopupComponents/PopupHpMainBanner";

const HpComponentsPage = () => {
  const [open2HpBannerComponent, setOpen2HpBannerComponent] = useState(false);
  return (
    <div className="hpComponentsPage">
      <h2 className="title"> Home Page Components</h2>
      <div className="cards">
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotHpTopBannerDesktop}
            componentTitle="HP main banner"
            onClick={() => setOpen2HpBannerComponent(true)}
          />
        </div>
      </div>
      <PopupHpMainBanner
        imgUrl={screenshotHpTopBannerDesktop}
        open={open2HpBannerComponent}
        handleClose={() => setOpen2HpBannerComponent(false)}
      />
    </div>
  );
};

export default HpComponentsPage;
