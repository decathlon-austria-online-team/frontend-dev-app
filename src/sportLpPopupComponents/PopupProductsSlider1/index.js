import React, { useState } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

import copy from "copy-to-clipboard";

import screenshopProduct1SliderLabel from "../../img/products-slider1-label-screenshot.png";
import screenshopProduct1SliderAbPrice from "../../img/products-slider1-price-ab-screenshot.png";
import screenshopProduct1SliderCategoryColumn from "../../img/products-slider1-category-column-screenshot.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "90%",
    maxHeight: "75%",
    overflowY: "auto",
    textAlign: "left",
  },
}));

export default function PopupProductsSlider1(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  get input states and on change func

  const [sliderId, setSliderId] = useState("");
  const sliderIdHandleOnChange = (e) => {
    setSliderId(e.target.value);
  };

  // section title
  const [slider1Title, setSlider1Title] = useState("");
  const slider1TitleHandleOnChange = (e) => {
    setSlider1Title(e.target.value);
  };

  // product 1
  const [slider1Product1DisplayLabelBool, setSlider1Product1DisplayLabelBool] =
    useState("no");
  const slider1Product1DisplayLabelBoolHandleOnChange = (e) => {
    setSlider1Product1DisplayLabelBool(e.target.value);
  };

  const [slider1Product1LabelColor, setSlider1Product1LabelColor] =
    useState("#0DB14B");
  const slider1Product1LabelColorHandleOnChange = (e) => {
    setSlider1Product1LabelColor(e.target.value);
  };

  const [slider1Product1LabelText, setSlider1Product1LabelText] = useState("");
  const slider1Product1LabelTextHandleOnChange = (e) => {
    setSlider1Product1LabelText(e.target.value);
  };

  const [slider1Product1Price, setSlider1Product1Price] = useState("");
  const slider1Product1PriceHandleOnChange = (e) => {
    setSlider1Product1Price(e.target.value);
  };

  const [
    slider1Product1DisplayAbPriceBool,
    setSlider1Product1DisplayAbPriceBool,
  ] = useState("no");
  const slider1Product1DisplayAbPriceBoolHandleOnChange = (e) => {
    setSlider1Product1DisplayAbPriceBool(e.target.value);
  };

  const [slider1Product1ImageSrc, setSlider1Product1ImageSrc] = useState("");
  const slider1Product1ImageSrcHandleOnChange = (e) => {
    setSlider1Product1ImageSrc(e.target.value);
  };

  const [slider1Product1LinkUrl, setSlider1Product1LinkUrl] = useState("");
  const slider1Product1LinkUrlHandleOnChange = (e) => {
    setSlider1Product1LinkUrl(e.target.value);
  };

  const [slider1Product1Name, setSlider1Product1Name] = useState("");
  const slider1Product1NameHandleOnChange = (e) => {
    setSlider1Product1Name(e.target.value);
  };

  const [slider1Product1Brand, setSlider1Product1Brand] = useState("");
  const slider1Product1BrandHandleOnChange = (e) => {
    setSlider1Product1Brand(e.target.value);
  };

  // product 2
  const [slider1Product2DisplayLabelBool, setSlider1Product2DisplayLabelBool] =
    useState("no");
  const slider1Product2DisplayLabelBoolHandleOnChange = (e) => {
    setSlider1Product2DisplayLabelBool(e.target.value);
  };

  const [slider1Product2LabelColor, setSlider1Product2LabelColor] =
    useState("#0DB14B");
  const slider1Product2LabelColorHandleOnChange = (e) => {
    setSlider1Product2LabelColor(e.target.value);
  };

  const [slider1Product2LabelText, setSlider1Product2LabelText] = useState("");
  const slider1Product2LabelTextHandleOnChange = (e) => {
    setSlider1Product2LabelText(e.target.value);
  };

  const [slider1Product2Price, setSlider1Product2Price] = useState("");
  const slider1Product2PriceHandleOnChange = (e) => {
    setSlider1Product2Price(e.target.value);
  };

  const [
    slider1Product2DisplayAbPriceBool,
    setSlider1Product2DisplayAbPriceBool,
  ] = useState("no");
  const slider1Product2DisplayAbPriceBoolHandleOnChange = (e) => {
    setSlider1Product2DisplayAbPriceBool(e.target.value);
  };

  const [slider1Product2ImageSrc, setSlider1Product2ImageSrc] = useState("");
  const slider1Product2ImageSrcHandleOnChange = (e) => {
    setSlider1Product2ImageSrc(e.target.value);
  };

  const [slider1Product2LinkUrl, setSlider1Product2LinkUrl] = useState("");
  const slider1Product2LinkUrlHandleOnChange = (e) => {
    setSlider1Product2LinkUrl(e.target.value);
  };

  const [slider1Product2Name, setSlider1Product2Name] = useState("");
  const slider1Product2NameHandleOnChange = (e) => {
    setSlider1Product2Name(e.target.value);
  };

  const [slider1Product2Brand, setSlider1Product2Brand] = useState("");
  const slider1Product2BrandHandleOnChange = (e) => {
    setSlider1Product2Brand(e.target.value);
  };

  // product 3
  const [slider1Product3DisplayLabelBool, setSlider1Product3DisplayLabelBool] =
    useState("no");
  const slider1Product3DisplayLabelBoolHandleOnChange = (e) => {
    setSlider1Product3DisplayLabelBool(e.target.value);
  };

  const [slider1Product3LabelColor, setSlider1Product3LabelColor] =
    useState("#0DB14B");
  const slider1Product3LabelColorHandleOnChange = (e) => {
    setSlider1Product3LabelColor(e.target.value);
  };

  const [slider1Product3LabelText, setSlider1Product3LabelText] = useState("");
  const slider1Product3LabelTextHandleOnChange = (e) => {
    setSlider1Product3LabelText(e.target.value);
  };

  const [slider1Product3Price, setSlider1Product3Price] = useState("");
  const slider1Product3PriceHandleOnChange = (e) => {
    setSlider1Product3Price(e.target.value);
  };

  const [
    slider1Product3DisplayAbPriceBool,
    setSlider1Product3DisplayAbPriceBool,
  ] = useState("no");
  const slider1Product3DisplayAbPriceBoolHandleOnChange = (e) => {
    setSlider1Product3DisplayAbPriceBool(e.target.value);
  };

  const [slider1Product3ImageSrc, setSlider1Product3ImageSrc] = useState("");
  const slider1Product3ImageSrcHandleOnChange = (e) => {
    setSlider1Product3ImageSrc(e.target.value);
  };

  const [slider1Product3LinkUrl, setSlider1Product3LinkUrl] = useState("");
  const slider1Product3LinkUrlHandleOnChange = (e) => {
    setSlider1Product3LinkUrl(e.target.value);
  };

  const [slider1Product3Name, setSlider1Product3Name] = useState("");
  const slider1Product3NameHandleOnChange = (e) => {
    setSlider1Product3Name(e.target.value);
  };

  const [slider1Product3Brand, setSlider1Product3Brand] = useState("");
  const slider1Product3BrandHandleOnChange = (e) => {
    setSlider1Product3Brand(e.target.value);
  };

  // product 4
  const [slider1Product4DisplayLabelBool, setSlider1Product4DisplayLabelBool] =
    useState("no");
  const slider1Product4DisplayLabelBoolHandleOnChange = (e) => {
    setSlider1Product4DisplayLabelBool(e.target.value);
  };

  const [slider1Product4LabelColor, setSlider1Product4LabelColor] =
    useState("#0DB14B");
  const slider1Product4LabelColorHandleOnChange = (e) => {
    setSlider1Product4LabelColor(e.target.value);
  };

  const [slider1Product4LabelText, setSlider1Product4LabelText] = useState("");
  const slider1Product4LabelTextHandleOnChange = (e) => {
    setSlider1Product4LabelText(e.target.value);
  };

  const [slider1Product4Price, setSlider1Product4Price] = useState("");
  const slider1Product4PriceHandleOnChange = (e) => {
    setSlider1Product4Price(e.target.value);
  };

  const [
    slider1Product4DisplayAbPriceBool,
    setSlider1Product4DisplayAbPriceBool,
  ] = useState("no");
  const slider1Product4DisplayAbPriceBoolHandleOnChange = (e) => {
    setSlider1Product4DisplayAbPriceBool(e.target.value);
  };

  const [slider1Product4ImageSrc, setSlider1Product4ImageSrc] = useState("");
  const slider1Product4ImageSrcHandleOnChange = (e) => {
    setSlider1Product4ImageSrc(e.target.value);
  };

  const [slider1Product4LinkUrl, setSlider1Product4LinkUrl] = useState("");
  const slider1Product4LinkUrlHandleOnChange = (e) => {
    setSlider1Product4LinkUrl(e.target.value);
  };

  const [slider1Product4Name, setSlider1Product4Name] = useState("");
  const slider1Product4NameHandleOnChange = (e) => {
    setSlider1Product4Name(e.target.value);
  };

  const [slider1Product4Brand, setSlider1Product4Brand] = useState("");
  const slider1Product4BrandHandleOnChange = (e) => {
    setSlider1Product4Brand(e.target.value);
  };

  // product 5
  const [slider1Product5DisplayLabelBool, setSlider1Product5DisplayLabelBool] =
    useState("no");
  const slider1Product5DisplayLabelBoolHandleOnChange = (e) => {
    setSlider1Product5DisplayLabelBool(e.target.value);
  };

  const [slider1Product5LabelColor, setSlider1Product5LabelColor] =
    useState("#0DB14B");
  const slider1Product5LabelColorHandleOnChange = (e) => {
    setSlider1Product5LabelColor(e.target.value);
  };

  const [slider1Product5LabelText, setSlider1Product5LabelText] = useState("");
  const slider1Product5LabelTextHandleOnChange = (e) => {
    setSlider1Product5LabelText(e.target.value);
  };

  const [slider1Product5Price, setSlider1Product5Price] = useState("");
  const slider1Product5PriceHandleOnChange = (e) => {
    setSlider1Product5Price(e.target.value);
  };

  const [
    slider1Product5DisplayAbPriceBool,
    setSlider1Product5DisplayAbPriceBool,
  ] = useState("no");
  const slider1Product5DisplayAbPriceBoolHandleOnChange = (e) => {
    setSlider1Product5DisplayAbPriceBool(e.target.value);
  };

  const [slider1Product5ImageSrc, setSlider1Product5ImageSrc] = useState("");
  const slider1Product5ImageSrcHandleOnChange = (e) => {
    setSlider1Product5ImageSrc(e.target.value);
  };

  const [slider1Product5LinkUrl, setSlider1Product5LinkUrl] = useState("");
  const slider1Product5LinkUrlHandleOnChange = (e) => {
    setSlider1Product5LinkUrl(e.target.value);
  };

  const [slider1Product5Name, setSlider1Product5Name] = useState("");
  const slider1Product5NameHandleOnChange = (e) => {
    setSlider1Product5Name(e.target.value);
  };

  const [slider1Product5Brand, setSlider1Product5Brand] = useState("");
  const slider1Product5BrandHandleOnChange = (e) => {
    setSlider1Product5Brand(e.target.value);
  };

  // product 6
  const [slider1Product6DisplayLabelBool, setSlider1Product6DisplayLabelBool] =
    useState("no");
  const slider1Product6DisplayLabelBoolHandleOnChange = (e) => {
    setSlider1Product6DisplayLabelBool(e.target.value);
  };

  const [slider1Product6LabelColor, setSlider1Product6LabelColor] =
    useState("#0DB14B");
  const slider1Product6LabelColorHandleOnChange = (e) => {
    setSlider1Product6LabelColor(e.target.value);
  };

  const [slider1Product6LabelText, setSlider1Product6LabelText] = useState("");
  const slider1Product6LabelTextHandleOnChange = (e) => {
    setSlider1Product6LabelText(e.target.value);
  };

  const [slider1Product6Price, setSlider1Product6Price] = useState("");
  const slider1Product6PriceHandleOnChange = (e) => {
    setSlider1Product6Price(e.target.value);
  };

  const [
    slider1Product6DisplayAbPriceBool,
    setSlider1Product6DisplayAbPriceBool,
  ] = useState("no");
  const slider1Product6DisplayAbPriceBoolHandleOnChange = (e) => {
    setSlider1Product6DisplayAbPriceBool(e.target.value);
  };

  const [slider1Product6ImageSrc, setSlider1Product6ImageSrc] = useState("");
  const slider1Product6ImageSrcHandleOnChange = (e) => {
    setSlider1Product6ImageSrc(e.target.value);
  };

  const [slider1Product6LinkUrl, setSlider1Product6LinkUrl] = useState("");
  const slider1Product6LinkUrlHandleOnChange = (e) => {
    setSlider1Product6LinkUrl(e.target.value);
  };

  const [slider1Product6Name, setSlider1Product6Name] = useState("");
  const slider1Product6NameHandleOnChange = (e) => {
    setSlider1Product6Name(e.target.value);
  };

  const [slider1Product6Brand, setSlider1Product6Brand] = useState("");
  const slider1Product6BrandHandleOnChange = (e) => {
    setSlider1Product6Brand(e.target.value);
  };

  // category column in slider
  const [slider1CategoryColumnImageSrc, setSlider1CategoryColumnImageSrc] =
    useState("");
  const slider1CategoryColumnImageSrcHandleOnChange = (e) => {
    setSlider1CategoryColumnImageSrc(e.target.value);
  };

  const [slider1CategoryColumnBtnText, setSlider1CategoryColumnBtnText] =
    useState("");
  const slider1CategoryColumnBtnTextHandleOnChange = (e) => {
    setSlider1CategoryColumnBtnText(e.target.value);
  };

  const [slider1CategoryColumnBtnLinkUrl, setSlider1CategoryColumnBtnLinkUrl] =
    useState("");
  const slider1CategoryColumnBtnLinkUrlHandleOnChange = (e) => {
    setSlider1CategoryColumnBtnLinkUrl(e.target.value);
  };

  // type of slider design (sparkow / oneshop)
  const [sliderDesignType, setSliderDesignType] = useState("sparkow");
  const handleOnChangeSliderDesignType = (e) => {
    setSliderDesignType(e.target.value);
  };

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    if (sliderDesignType === "sparkow") {
      setCodeOfComponent(`
      <!-- ***************** START DISPLAY PRODUCTS SLIDER1 ***************** -->
  
  
      <link
        rel="stylesheet"
        href="https://decathlon-source.eu/frontend/sport-pages/code-files/components/product-slider1.css"
      />
  
      <style>
        .products-slider1__display-category${sliderId} {
          background-image: url("${slider1CategoryColumnImageSrc}") !important;
          background-position: center;
        }
  
        .products-slider1__priceContainer {
          position: absolute;
          top: 26px !important;
          right: 20px;
      }
       .products-slider1 .swiper-slide {
         height: 368px;
      }
     
      .sportLp__section-title {
         font-weight: bold;
      }
  
      .products-slider1 {
        padding-bottom: 0 !important;
      }
  
      @media (min-width: 1200px) {
        .products-slider1__arrow {
            top: 46% !important;
        }
  
      }
  
  
  
      </style>
      <h2 class="sportLp__section-title">${slider1Title}</h2>
      <div class="products-slider1">
      <!--
        <div class="products-slider1__titleContainer">
          <h2>${slider1Title}</h2>
        </div>
        -->
        <!-- Swiper -->
        <div class="swiper-container products-slider1__swiper-container products-slider1__swiper-container${sliderId}">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
            ${
              slider1Product1DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product1LabelColor}">
                  <span>${slider1Product1LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product1LabelColor}">
                    <span>${slider1Product1LabelText}</span>
                  </div>
                  -->
                    `
            }
  
              <div class="products-slider1__priceContainer">
              ${
                slider1Product1DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                
                <span class="products-slider1__priceContainer--price"
                  >${slider1Product1Price}€</span
                >
              </div>
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product1LinkUrl}">
                  <img
                    alt="${slider1Product1Name}"
                    src="${slider1Product1ImageSrc}"
                  />
                </a>
              </div>
              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product1Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product1Brand} </span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product2DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product2LabelColor}">
                  <span>${slider1Product2LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product2LabelColor}">
                    <span>${slider1Product2LabelText}</span>
                  </div>
                  -->
                    `
            }
  
              <div class="products-slider1__priceContainer">
              ${
                slider1Product2DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >${slider1Product2Price}€</span
                >
              </div>
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product2LinkUrl}">
                  <img
                    alt="${slider1Product2Name}"
                    src="${slider1Product2ImageSrc}"
                  />
                </a>
              </div>
              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product2Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product2Brand}</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product3DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product3LabelColor}">
                  <span>${slider1Product3LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product3LabelColor}">
                    <span>${slider1Product3LabelText}</span>
                  </div>
                  -->
                    `
            }
  
              <div class="products-slider1__priceContainer">
              ${
                slider1Product3DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >${slider1Product3Price}€</span
                >
              </div>
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product3LinkUrl}">
                  <img
                    alt="${slider1Product3Name}"
                    src="${slider1Product3ImageSrc}"
                  />
                </a>
              </div>
              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product3Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product3Brand}</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="products-slider1__display-category products-slider1__display-category${sliderId}">
                <a href="${slider1CategoryColumnBtnLinkUrl}" class="products-slider1__display-category-btn">
                  <p>
                    <span> ${slider1CategoryColumnBtnText} </span>
  
                    <i class="fas fa-chevron-right"></i>
                  </p>
                </a>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product4DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product4LabelColor}">
                  <span>${slider1Product4LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product4LabelColor}">
                    <span>${slider1Product4LabelText}</span>
                  </div>
                  -->
                    `
            }
  
              <div class="products-slider1__priceContainer">
              ${
                slider1Product4DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >${slider1Product4Price}€</span
                >
              </div>
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product4LinkUrl}">
                  <img
                    alt="${slider1Product4Name}"
                    src="${slider1Product4ImageSrc}"
                  />
                </a>
              </div>
              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product4Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span> ${slider1Product4Brand} </span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product5DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product5LabelColor}">
                  <span>${slider1Product5LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product5LabelColor}">
                    <span>${slider1Product5LabelText}</span>
                  </div>
                  -->
                    `
            }
  
              <div class="products-slider1__priceContainer">
              ${
                slider1Product5DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >${slider1Product5Price}€</span
                >
              </div>
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product5LinkUrl}">
                  <img
                    alt="${slider1Product5Name}"
                    src="${slider1Product5ImageSrc}"
                  />
                </a>
              </div>
              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product5Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product5Brand}</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product6DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product6LabelColor}">
                  <span>${slider1Product6LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product6LabelColor}">
                    <span>${slider1Product6LabelText}</span>
                  </div>
                  -->
                    `
            }
  
              <div class="products-slider1__priceContainer">
              ${
                slider1Product6DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >${slider1Product6Price}€</span
                >
              </div>
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product6LinkUrl}">
                  <img
                    alt="${slider1Product6Name}"
                    src="${slider1Product6ImageSrc}"
                  />
                </a>
              </div>
              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product6Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product6Brand} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="products-slider1__arrow products-slider1__arrow--left products-slider1__arrow--left${sliderId}">
          <i class="fas fa-chevron-circle-left"></i>
        </div>
        <div class="products-slider1__arrow products-slider1__arrow--right products-slider1__arrow--right${sliderId}">
          <i class="fas fa-chevron-circle-right"></i>
        </div>
  
        <!-- Add Arrows -->
  
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- end .products-slider1 -->
  
      <!-- Swiper JS -->
      <script src="../package/swiper-bundle.min.js"></script>
  
      <!-- Initialize Swiper -->
      <script>
        var swiper${sliderId} = new Swiper(".products-slider1__swiper-container${sliderId}", {
          navigation: {
            nextEl: ".products-slider1__arrow--right${sliderId}",
            prevEl: ".products-slider1__arrow--left${sliderId}",
          },
  
          breakpoints: {
            200: {
              slidesPerView: 1,
              spaceBetweenSlides: 30,
            },
  
            760: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 2,
            },
          },
          loop: true,
        });
      </script>
      <div style="margin: 12px 0">&nbsp;</div>
      <!-- ***************** END DISPLAY PRODUCTS SLIDER1 ***************** -->
      `);
    } else if (sliderDesignType === "oneshop") {
      setCodeOfComponent(`
      <!-- ***************** START DISPLAY PRODUCTS SLIDER1 ***************** -->
  
  
      <link
        rel="stylesheet"
        href="https://decathlon-source.eu/frontend/sport-pages/code-files/components/product-slider1.css"
      />
  
      <style>
        .products-slider1__display-category${sliderId} {
          background-image: url("${slider1CategoryColumnImageSrc}") !important;
          background-position: center;
        }
  
        .products-slider1__priceContainer {
          position: absolute;
          top: 26px !important;
          right: 20px;
      }
       .products-slider1 .swiper-slide {
         height: 368px;
      }
     
      .sportLp__section-title {
         font-weight: bold;
      }
  
      .products-slider1 {
        padding-bottom: 0 !important;
      }
  
      @media (min-width: 1200px) {
        .products-slider1__arrow {
            top: 46% !important;
        }
  
      }

      @media(min-width: 1800px) {
        .products-slider1 .swiper-container {
           width: 74% !important;  
        }

        .products-slider1__imgContainer {
          width: 80%;
        }

        .products-slider1__arrow--right {
          right: 9%;
       }
       .products-slider1__arrow--left {
         left: 9%;
       }
     }

      /* START OVERRIDE TO NEW STYLES ONESHOP DESIGN */
      .products-slider1__priceContainer {
      position: static !important;
      margin-top: -20px;
    }

    .products-slider1__priceContainer--price {
      font-weight: 400;
      background-color: rgb(255, 234, 40);
      color: rgb(78, 78, 78);
      padding: 1px 6px;
      font-family: Roboto,sans-serif;
      font-size: 14px;
    }

    .products-slider1__info {
      position: static !important; 
      margin-top: 10px;
      margin-bottom: 24px;
  }

    .products-slider1__imgContainer {
      position: static !important;
      transform: none !important;
      width: 72%;
      margin-top: 26px;
      margin-bottom: 50px;
    }
    @media (min-width: 1200px) {
      .products-slider1__imgContainer {
        margin-bottom: 30px;
      }
    }

    .products-slider1__arrow {
      position: absolute;
      top: 40%;
  }
  /* END OVERRIDE TO NEW STYLES ONESHOP DESIGN */
  
      </style>

      <h2 class="sportLp__section-title">${slider1Title}</h2>
      <div class="products-slider1">
      <!--
        <div class="products-slider1__titleContainer">
          <h2>${slider1Title}</h2>
        </div>
        -->
        <!-- Swiper -->
        <div class="swiper-container products-slider1__swiper-container products-slider1__swiper-container${sliderId}">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
            ${
              slider1Product1DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product1LabelColor}">
                  <span>${slider1Product1LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product1LabelColor}">
                    <span>${slider1Product1LabelText}</span>
                  </div>
                  -->
                    `
            }
  

              <div class="products-slider1__imgContainer">
                <a href="${slider1Product1LinkUrl}">
                  <img
                    alt="${slider1Product1Name}"
                    src="${slider1Product1ImageSrc}"
                  />
                </a>
              </div>

              <div class="products-slider1__priceContainer">
              ${
                slider1Product1DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                
                <span class="products-slider1__priceContainer--price"
                  >€${slider1Product1Price}</span
                >
              </div>

              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product1Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product1Brand} </span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product2DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product2LabelColor}">
                  <span>${slider1Product2LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product2LabelColor}">
                    <span>${slider1Product2LabelText}</span>
                  </div>
                  -->
                    `
            }
  
             
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product2LinkUrl}">
                  <img
                    alt="${slider1Product2Name}"
                    src="${slider1Product2ImageSrc}"
                  />
                </a>
              </div>

              <div class="products-slider1__priceContainer">
              ${
                slider1Product2DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >€${slider1Product2Price}</span
                >
              </div>

              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product2Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product2Brand}</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product3DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product3LabelColor}">
                  <span>${slider1Product3LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product3LabelColor}">
                    <span>${slider1Product3LabelText}</span>
                  </div>
                  -->
                    `
            }
  
             
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product3LinkUrl}">
                  <img
                    alt="${slider1Product3Name}"
                    src="${slider1Product3ImageSrc}"
                  />
                </a>
              </div>

              <div class="products-slider1__priceContainer">
              ${
                slider1Product3DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >€${slider1Product3Price}</span
                >
              </div>

              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product3Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product3Brand}</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="products-slider1__display-category products-slider1__display-category${sliderId}">
                <a href="${slider1CategoryColumnBtnLinkUrl}" class="products-slider1__display-category-btn">
                  <p>
                    <span> ${slider1CategoryColumnBtnText} </span>
  
                    <i class="fas fa-chevron-right"></i>
                  </p>
                </a>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product4DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product4LabelColor}">
                  <span>${slider1Product4LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product4LabelColor}">
                    <span>${slider1Product4LabelText}</span>
                  </div>
                  -->
                    `
            }
  
              
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product4LinkUrl}">
                  <img
                    alt="${slider1Product4Name}"
                    src="${slider1Product4ImageSrc}"
                  />
                </a>
              </div>

              <div class="products-slider1__priceContainer">
              ${
                slider1Product4DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >€${slider1Product4Price}</span
                >
              </div>

              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product4Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span> ${slider1Product4Brand} </span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product5DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product5LabelColor}">
                  <span>${slider1Product5LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product5LabelColor}">
                    <span>${slider1Product5LabelText}</span>
                  </div>
                  -->
                    `
            }
  
             
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product5LinkUrl}">
                  <img
                    alt="${slider1Product5Name}"
                    src="${slider1Product5ImageSrc}"
                  />
                </a>
              </div>

              <div class="products-slider1__priceContainer">
              ${
                slider1Product5DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >€${slider1Product5Price}</span
                >
              </div>

              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product5Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product5Brand}</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            ${
              slider1Product6DisplayLabelBool === "yes"
                ? `
                <div class="products-slider1__labelContainer" style="background-color: ${slider1Product6LabelColor}">
                  <span>${slider1Product6LabelText}</span>
                </div>
                  `
                : `
                  <!--
                  <div class="products-slider1__labelContainer" style="background-color: ${slider1Product6LabelColor}">
                    <span>${slider1Product6LabelText}</span>
                  </div>
                  -->
                    `
            }
  
            
              <div class="products-slider1__imgContainer">
                <a href="${slider1Product6LinkUrl}">
                  <img
                    alt="${slider1Product6Name}"
                    src="${slider1Product6ImageSrc}"
                  />
                </a>
              </div>

              <div class="products-slider1__priceContainer">
              ${
                slider1Product6DisplayAbPriceBool === "yes"
                  ? '<span class="products-slider1__priceContainer--ab-price">Ab</span>'
                  : '<!--<span class="products-slider1__priceContainer--ab-price">Ab</span>-->'
              }
                <span class="products-slider1__priceContainer--price"
                  >€${slider1Product6Price}</span
                >
              </div>
              
              <div class="products-slider1__info">
                <div class="products-slider1__nameContainer">
                  <span>${slider1Product6Name}</span>
                </div>
                <div class="products-slider1__brandContainer">
                  <span>${slider1Product6Brand} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="products-slider1__arrow products-slider1__arrow--left products-slider1__arrow--left${sliderId}">
          <i class="fas fa-chevron-circle-left"></i>
        </div>
        <div class="products-slider1__arrow products-slider1__arrow--right products-slider1__arrow--right${sliderId}">
          <i class="fas fa-chevron-circle-right"></i>
        </div>
  
        <!-- Add Arrows -->
  
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- end .products-slider1 -->
  
      <!-- Swiper JS -->
      <script src="../package/swiper-bundle.min.js"></script>
  
      <!-- Initialize Swiper -->
      <script>
        var swiper${sliderId} = new Swiper(".products-slider1__swiper-container${sliderId}", {
          navigation: {
            nextEl: ".products-slider1__arrow--right${sliderId}",
            prevEl: ".products-slider1__arrow--left${sliderId}",
          },
  
          breakpoints: {
            200: {
              slidesPerView: 1,
              spaceBetweenSlides: 30,
            },
  
            760: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 2,
            },
          },
          loop: true,
        });
      </script>
      <div style="margin: 12px 0">&nbsp;</div>
      <!-- ***************** END DISPLAY PRODUCTS SLIDER1 ***************** -->
      `);
    }
  };

  // copy to clip func
  const [showSuccessCopied, setShowSuccessCopied] = useState(false);
  const copyToClipFunc = () => {
    setShowSuccessCopied(true);
    copy(codeOfComponent);

    setTimeout(function () {
      setShowSuccessCopied(false);
    }, 2000);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <img src={props.imgUrl} className="popupImg" />
            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.text}</p>
            <div className="popupInputsContainer">
              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Please choose between Sparkow and OneShop slider design
                </p>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>

                    <RadioGroup
                      aria-label="slider_design_type"
                      name="slider_design_type"
                      value={sliderDesignType}
                      onChange={handleOnChangeSliderDesignType}
                    >
                      <FormControlLabel
                        value="sparkow"
                        control={<Radio />}
                        label="sparkow"
                      />
                      <FormControlLabel
                        value="oneshop"
                        control={<Radio />}
                        label="oneshop"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Slider Id Number:
                </p>
                <small>
                  Please give a slider id number (this number should be unique
                  only for this slider in order to differentiate from the other
                  sliders on the page)
                </small>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="slider id number"
                    style={{ width: "80%" }}
                    onChange={sliderIdHandleOnChange}
                  />
                </div>
              </div>
              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Header Component:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="section title"
                    style={{ width: "80%" }}
                    onChange={slider1TitleHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Product 1:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display label on this product?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product1DisplayLabelBool}
                      onChange={slider1Product1DisplayLabelBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>
                  <img
                    src={screenshopProduct1SliderLabel}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                {slider1Product1DisplayLabelBool === "yes" ? (
                  <div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Choose label color
                        </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={slider1Product1LabelColor}
                          onChange={slider1Product1LabelColorHandleOnChange}
                        >
                          <FormControlLabel
                            value="#0DB14B"
                            control={<Radio />}
                            label="green"
                          />
                          <FormControlLabel
                            value="#E20C18"
                            control={<Radio />}
                            label="red"
                          />
                          <FormControlLabel
                            value="#EC6607"
                            control={<Radio />}
                            label="orange"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add label text"
                        style={{ width: "80%" }}
                        onChange={slider1Product1LabelTextHandleOnChange}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add price (without € symbol)"
                    style={{ width: "80%" }}
                    onChange={slider1Product1PriceHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display 'Ab' above the price?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product1DisplayAbPriceBool}
                      onChange={slider1Product1DisplayAbPriceBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>

                  <img
                    src={screenshopProduct1SliderAbPrice}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image src (please set the image src url to 200px)"
                    style={{ width: "80%" }}
                    onChange={slider1Product1ImageSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product page link url"
                    style={{ width: "80%" }}
                    onChange={slider1Product1LinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product brand"
                    style={{ width: "80%" }}
                    onChange={slider1Product1NameHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product name"
                    style={{ width: "80%" }}
                    onChange={slider1Product1BrandHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Product 2:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display label on this product?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product2DisplayLabelBool}
                      onChange={slider1Product2DisplayLabelBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>
                  <img
                    src={screenshopProduct1SliderLabel}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                {slider1Product2DisplayLabelBool === "yes" ? (
                  <div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Choose label color
                        </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={slider1Product2LabelColor}
                          onChange={slider1Product2LabelColorHandleOnChange}
                        >
                          <FormControlLabel
                            value="#0DB14B"
                            control={<Radio />}
                            label="green"
                          />
                          <FormControlLabel
                            value="#E20C18"
                            control={<Radio />}
                            label="red"
                          />
                          <FormControlLabel
                            value="#EC6607"
                            control={<Radio />}
                            label="orange"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add label text"
                        style={{ width: "80%" }}
                        onChange={slider1Product2LabelTextHandleOnChange}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add price (without € symbol)"
                    style={{ width: "80%" }}
                    onChange={slider1Product2PriceHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display 'Ab' above the price?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product2DisplayAbPriceBool}
                      onChange={slider1Product2DisplayAbPriceBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>

                  <img
                    src={screenshopProduct1SliderAbPrice}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image src (please set the image src url to 200px)"
                    style={{ width: "80%" }}
                    onChange={slider1Product2ImageSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product page link url"
                    style={{ width: "80%" }}
                    onChange={slider1Product2LinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product brand"
                    style={{ width: "80%" }}
                    onChange={slider1Product2NameHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product name"
                    style={{ width: "80%" }}
                    onChange={slider1Product2BrandHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Product 3:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display label on this product?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product3DisplayLabelBool}
                      onChange={slider1Product3DisplayLabelBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>
                  <img
                    src={screenshopProduct1SliderLabel}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                {slider1Product3DisplayLabelBool === "yes" ? (
                  <div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Choose label color
                        </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={slider1Product3LabelColor}
                          onChange={slider1Product3LabelColorHandleOnChange}
                        >
                          <FormControlLabel
                            value="#0DB14B"
                            control={<Radio />}
                            label="green"
                          />
                          <FormControlLabel
                            value="#E20C18"
                            control={<Radio />}
                            label="red"
                          />
                          <FormControlLabel
                            value="#EC6607"
                            control={<Radio />}
                            label="orange"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add label text"
                        style={{ width: "80%" }}
                        onChange={slider1Product3LabelTextHandleOnChange}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add price (without € symbol)"
                    style={{ width: "80%" }}
                    onChange={slider1Product3PriceHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display 'Ab' above the price?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product3DisplayAbPriceBool}
                      onChange={slider1Product3DisplayAbPriceBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>

                  <img
                    src={screenshopProduct1SliderAbPrice}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image src (please set the image src url to 200px)"
                    style={{ width: "80%" }}
                    onChange={slider1Product3ImageSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product page link url"
                    style={{ width: "80%" }}
                    onChange={slider1Product3LinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product brand"
                    style={{ width: "80%" }}
                    onChange={slider1Product3NameHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product name"
                    style={{ width: "80%" }}
                    onChange={slider1Product3BrandHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Product 4:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display label on this product?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product4DisplayLabelBool}
                      onChange={slider1Product4DisplayLabelBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>
                  <img
                    src={screenshopProduct1SliderLabel}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                {slider1Product4DisplayLabelBool === "yes" ? (
                  <div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Choose label color
                        </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={slider1Product4LabelColor}
                          onChange={slider1Product4LabelColorHandleOnChange}
                        >
                          <FormControlLabel
                            value="#0DB14B"
                            control={<Radio />}
                            label="green"
                          />
                          <FormControlLabel
                            value="#E20C18"
                            control={<Radio />}
                            label="red"
                          />
                          <FormControlLabel
                            value="#EC6607"
                            control={<Radio />}
                            label="orange"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add label text"
                        style={{ width: "80%" }}
                        onChange={slider1Product4LabelTextHandleOnChange}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add price (without € symbol)"
                    style={{ width: "80%" }}
                    onChange={slider1Product4PriceHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display 'Ab' above the price?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product4DisplayAbPriceBool}
                      onChange={slider1Product4DisplayAbPriceBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>

                  <img
                    src={screenshopProduct1SliderAbPrice}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image src (please set the image src url to 200px)"
                    style={{ width: "80%" }}
                    onChange={slider1Product4ImageSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product page link url"
                    style={{ width: "80%" }}
                    onChange={slider1Product4LinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product brand"
                    style={{ width: "80%" }}
                    onChange={slider1Product4NameHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product name"
                    style={{ width: "80%" }}
                    onChange={slider1Product4BrandHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Product 5:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display label on this product?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product5DisplayLabelBool}
                      onChange={slider1Product5DisplayLabelBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>
                  <img
                    src={screenshopProduct1SliderLabel}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                {slider1Product5DisplayLabelBool === "yes" ? (
                  <div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Choose label color
                        </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={slider1Product5LabelColor}
                          onChange={slider1Product5LabelColorHandleOnChange}
                        >
                          <FormControlLabel
                            value="#0DB14B"
                            control={<Radio />}
                            label="green"
                          />
                          <FormControlLabel
                            value="#E20C18"
                            control={<Radio />}
                            label="red"
                          />
                          <FormControlLabel
                            value="#EC6607"
                            control={<Radio />}
                            label="orange"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add label text"
                        style={{ width: "80%" }}
                        onChange={slider1Product5LabelTextHandleOnChange}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add price (without € symbol)"
                    style={{ width: "80%" }}
                    onChange={slider1Product5PriceHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display 'Ab' above the price?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product5DisplayAbPriceBool}
                      onChange={slider1Product5DisplayAbPriceBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>

                  <img
                    src={screenshopProduct1SliderAbPrice}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image src (please set the image src url to 200px)"
                    style={{ width: "80%" }}
                    onChange={slider1Product5ImageSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product page link url"
                    style={{ width: "80%" }}
                    onChange={slider1Product5LinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product brand"
                    style={{ width: "80%" }}
                    onChange={slider1Product5NameHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product name"
                    style={{ width: "80%" }}
                    onChange={slider1Product5BrandHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Product 6:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display label on this product?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product6DisplayLabelBool}
                      onChange={slider1Product6DisplayLabelBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>
                  <img
                    src={screenshopProduct1SliderLabel}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                {slider1Product6DisplayLabelBool === "yes" ? (
                  <div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Choose label color
                        </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={slider1Product6LabelColor}
                          onChange={slider1Product6LabelColorHandleOnChange}
                        >
                          <FormControlLabel
                            value="#0DB14B"
                            control={<Radio />}
                            label="green"
                          />
                          <FormControlLabel
                            value="#E20C18"
                            control={<Radio />}
                            label="red"
                          />
                          <FormControlLabel
                            value="#EC6607"
                            control={<Radio />}
                            label="orange"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add label text"
                        style={{ width: "80%" }}
                        onChange={slider1Product6LabelTextHandleOnChange}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add price (without € symbol)"
                    style={{ width: "80%" }}
                    onChange={slider1Product6PriceHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display 'Ab' above the price?
                    </FormLabel>

                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={slider1Product6DisplayAbPriceBool}
                      onChange={slider1Product6DisplayAbPriceBoolHandleOnChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>

                  <img
                    src={screenshopProduct1SliderAbPrice}
                    style={{ width: "50%", display: "block" }}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image src (please set the image src url to 200px)"
                    style={{ width: "80%" }}
                    onChange={slider1Product6ImageSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product page link url"
                    style={{ width: "80%" }}
                    onChange={slider1Product6LinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product brand"
                    style={{ width: "80%" }}
                    onChange={slider1Product6NameHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product name"
                    style={{ width: "80%" }}
                    onChange={slider1Product6BrandHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Category CTA Column:
                </p>
                <img
                  src={screenshopProduct1SliderCategoryColumn}
                  style={{ width: "50%", display: "block" }}
                />
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add category image src"
                    style={{ width: "80%" }}
                    onChange={slider1CategoryColumnImageSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add category cta button text"
                    style={{ width: "80%" }}
                    onChange={slider1CategoryColumnBtnTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add category cta button link url"
                    style={{ width: "80%" }}
                    onChange={slider1CategoryColumnBtnLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__wrapper">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={generateCodeFunc}
                >
                  Generate Component Code
                </Button>
              </div>

              {generateCode && (
                <div>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={copyToClipFunc}
                  >
                    copy code
                  </button>
                  {showSuccessCopied && (
                    <div style={{ margin: "10px 0", position: "relative" }}>
                      <DoneIcon
                        style={{ color: "green", position: "absolute" }}
                        fontSize="small"
                      />
                    </div>
                  )}

                  <pre>
                    <code>{codeOfComponent}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
