import React, { useState } from "react";
import ImgMediaCard from "../ImgMediaCard";

// import screenshots
import screenshotTwoCategories from "../../img/two-categories-screenshot.png";
import screenshotThreeCategories from "../../img/three-categories-screenshot.png";
import screenshotFourCategories from "../../img/four-categories-screenshot.png";
import screenshotBanner1 from "../../img/banner1-screenshot.png";
import screenshotArticle1 from "../../img/article1-screenshot.png";
import screenshotProductsSlider1 from "../../img/products-slider1-screenshot.png";
import screenshotProductsSlider2 from "../../img/products-slider2-screenshot.png";
import screenshotOneshopSportpage from "../../img/oneshop-sportpage-screenshot.png";
import screenshotTrboLoading from "../../img/trbo-loading.png";
import screenshotVideo from "../../img/video-section.png";
import codeImage from "../../img/sport-page-code-convertor.jpg";

import "./index.css";
import PopupModalUseComponent from "../PopupModalUseComponent";
import Popup2Categories from "../../sportLpPopupComponents/Popup2Categories";
import Popup3Categories from "../../sportLpPopupComponents/Popup3Categories";
import Popup4Categories from "../../sportLpPopupComponents/Popup4Categories";
import PopupBanner1 from "../../sportLpPopupComponents/PopupBanner1";
import PopupArticle1 from "../../sportLpPopupComponents/PopupArticle1";
import PopupProductsSlider1 from "../../sportLpPopupComponents/PopupProductsSlider1";
import PopupProductsSlider2 from "../../sportLpPopupComponents/PopupProductsSlider2";
import PopupOneshopSportpage from "../../sportLpPopupComponents/PopupOneshopSportpage";
import PopupTrboSliderContainer from "../../sportLpPopupComponents/PopupTrboSliderContainer";
import PopupVideo from "../../sportLpPopupComponents/PopupVideo";
import PopupCodeConvertorSp from "../../sportLpPopupComponents/PopupCodeConvertorSp";

const SportLP = () => {
  const [open2CategoriesComponent, setOpen2CategoriesComponent] = useState(
    false
  );

  const [open3CategoriesComponent, setOpen3CategoriesComponent] = useState(
    false
  );

  const [open4CategoriesComponent, setOpen4CategoriesComponent] = useState(
    false
  );

  const [openBanner1Component, setOpenBanner1Component] = useState(false);

  const [openArticle1Component, setOpenArticle1Component] = useState(false);

  const [
    openProductsSlider1Component,
    setOpenProductsSlider1Component,
  ] = useState(false);

  const [
    openProductsSlider2Component,
    setOpenProductsSlider2Component,
  ] = useState(false);

  const [
    openOneshopSportpageComponent,
    setOpenOneshopSportpageComponent,
  ] = useState(false);

  const [
    openTrboLoadingContainerComponent,
    setOpenTrboLoadingContainerComponent,
  ] = useState(false);

  const [
    openVideoComponent,
    setOpenVideoComponent,
  ] = useState(false);

  const [
    openSportPageCodeConvertorV1ToV2,
    setOpenSportPageCodeConvertorV1ToV2,
  ] = useState(false);

  return (
    <div className="sprortLP">
      <h2 className="title"> Sport page components</h2>
      <div className="cards">
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotTwoCategories}
            componentTitle="2 categories"
            onClick={() => setOpen2CategoriesComponent(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotThreeCategories}
            componentTitle="3 categories"
            onClick={() => setOpen3CategoriesComponent(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotFourCategories}
            componentTitle="4 categories"
            onClick={() => setOpen4CategoriesComponent(true)}
          />
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotBanner1}
            componentTitle="banner"
            onClick={() => setOpenBanner1Component(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotArticle1}
            componentTitle="article"
            onClick={() => setOpenArticle1Component(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotProductsSlider1}
            componentTitle="products Slider"
            onClick={() => setOpenProductsSlider1Component(true)}
          />
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotProductsSlider2}
            componentTitle="product advantages slider"
            onClick={() => setOpenProductsSlider2Component(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotOneshopSportpage}
            componentTitle="oneshop sportpage"
            onClick={() => setOpenOneshopSportpageComponent(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotTrboLoading}
            componentTitle="trbo slider container"
            onClick={() => setOpenTrboLoadingContainerComponent(true)}
          />
        </div>
      </div>



      <div className="cards">
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotVideo}
            componentTitle="video"
            onClick={() => setOpenVideoComponent(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={codeImage}
            componentTitle="oneshop sport page code converter v1 to v2"
            onClick={() => setOpenSportPageCodeConvertorV1ToV2(true)}
          />
        </div>
      </div>

      {/*
       <PopupModalUseComponent
        imgUrl={screenshotTwoCategories}
        open={open2CategoriesComponent}
        handleClose={() => setOpen2CategoriesComponent(false)}
      />
      */}

      <Popup2Categories
        imgUrl={screenshotTwoCategories}
        open={open2CategoriesComponent}
        handleClose={() => setOpen2CategoriesComponent(false)}
      />
      <Popup3Categories
        imgUrl={screenshotThreeCategories}
        open={open3CategoriesComponent}
        handleClose={() => setOpen3CategoriesComponent(false)}
      />
      <Popup4Categories
        imgUrl={screenshotFourCategories}
        open={open4CategoriesComponent}
        handleClose={() => setOpen4CategoriesComponent(false)}
      />
      <PopupBanner1
        imgUrl={screenshotBanner1}
        open={openBanner1Component}
        handleClose={() => setOpenBanner1Component(false)}
      />
      <PopupArticle1
        imgUrl={screenshotArticle1}
        open={openArticle1Component}
        handleClose={() => setOpenArticle1Component(false)}
      />

      <PopupProductsSlider1
        imgUrl={screenshotProductsSlider1}
        open={openProductsSlider1Component}
        handleClose={() => setOpenProductsSlider1Component(false)}
      />

      <PopupProductsSlider2
        imgUrl={screenshotProductsSlider2}
        open={openProductsSlider2Component}
        handleClose={() => setOpenProductsSlider2Component(false)}
      />

      <PopupOneshopSportpage
        imgUrl={screenshotOneshopSportpage}
        open={openOneshopSportpageComponent}
        handleClose={() => setOpenOneshopSportpageComponent(false)}
      />

      <PopupTrboSliderContainer
        imgUrl={screenshotTrboLoading}
        open={openTrboLoadingContainerComponent}
        handleClose={() => setOpenTrboLoadingContainerComponent(false)}
      />

      <PopupVideo 
         imgUrl={screenshotVideo}
         open={openVideoComponent}
         handleClose={() => setOpenVideoComponent(false)}
      />

       <PopupCodeConvertorSp 
         imgUrl={codeImage}
         open={openSportPageCodeConvertorV1ToV2}
         handleClose={() => setOpenSportPageCodeConvertorV1ToV2(false)}
        />
    </div>
  );
};

export default SportLP;
