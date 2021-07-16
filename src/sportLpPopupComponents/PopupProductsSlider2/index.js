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

export default function PopupProductsSlider2(props) {
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

  // product 1
  const [
    slider2Product1DisplayAbPriceBool,
    setSlider2Product1DisplayAbPriceBool,
  ] = useState("no");
  const slider2Product1DisplayAbPriceBoolHandleOnChange = (e) => {
    setSlider2Product1DisplayAbPriceBool(e.target.value);
  };

  const [
    slider2Product1PriceInteger,
    setSlider2Product1PriceInteger,
  ] = useState("");
  const slider2Product1PriceIntegerHandleOnChange = (e) => {
    setSlider2Product1PriceInteger(e.target.value);
  };

  const [
    slider2Product1PriceDecimal,
    setSlider2Product1PriceDecimal,
  ] = useState("");
  const slider2Product1PriceDecimalHandleOnChange = (e) => {
    setSlider2Product1PriceDecimal(e.target.value);
  };

  const [slider2Product1ImageSrc, setSlider2Product1ImageSrc] = useState("");
  const slider2Product1ImageSrcHandleOnChange = (e) => {
    setSlider2Product1ImageSrc(e.target.value);
  };

  const [slider2Product1ImageAlt, setSlider2Product1ImageAlt] = useState("");
  const slider2Product1ImageAltHandleOnChange = (e) => {
    setSlider2Product1ImageAlt(e.target.value);
  };

  const [slider2Product1Title, setSlider2Product1Title] = useState("");
  const slider2Product1TitleHandleOnChange = (e) => {
    setSlider2Product1Title(e.target.value);
  };

  const [slider2Product1Advantage1, setSlider2Product1Advantage1] = useState(
    ""
  );
  const slider2Product1Advantage1HandleOnChange = (e) => {
    setSlider2Product1Advantage1(e.target.value);
  };

  const [slider2Product1Advantage2, setSlider2Product1Advantage2] = useState(
    ""
  );
  const slider2Product1Advantage2HandleOnChange = (e) => {
    setSlider2Product1Advantage2(e.target.value);
  };

  const [slider2Product1Advantage3, setSlider2Product1Advantage3] = useState(
    ""
  );
  const slider2Product1Advantage3HandleOnChange = (e) => {
    setSlider2Product1Advantage3(e.target.value);
  };

  const [slider2Product1LinkUrl, setSlider2Product1LinkUrl] = useState("");
  const slider2Product1LinkUrlHandleOnChange = (e) => {
    setSlider2Product1LinkUrl(e.target.value);
  };

  // product 2
  const [
    slider2Product2DisplayAbPriceBool,
    setSlider2Product2DisplayAbPriceBool,
  ] = useState("no");
  const slider2Product2DisplayAbPriceBoolHandleOnChange = (e) => {
    setSlider2Product2DisplayAbPriceBool(e.target.value);
  };

  const [
    slider2Product2PriceInteger,
    setSlider2Product2PriceInteger,
  ] = useState("");
  const slider2Product2PriceIntegerHandleOnChange = (e) => {
    setSlider2Product2PriceInteger(e.target.value);
  };

  const [
    slider2Product2PriceDecimal,
    setSlider2Product2PriceDecimal,
  ] = useState("");
  const slider2Product2PriceDecimalHandleOnChange = (e) => {
    setSlider2Product2PriceDecimal(e.target.value);
  };

  const [slider2Product2ImageSrc, setSlider2Product2ImageSrc] = useState("");
  const slider2Product2ImageSrcHandleOnChange = (e) => {
    setSlider2Product2ImageSrc(e.target.value);
  };

  const [slider2Product2ImageAlt, setSlider2Product2ImageAlt] = useState("");
  const slider2Product2ImageAltHandleOnChange = (e) => {
    setSlider2Product2ImageAlt(e.target.value);
  };

  const [slider2Product2Title, setSlider2Product2Title] = useState("");
  const slider2Product2TitleHandleOnChange = (e) => {
    setSlider2Product2Title(e.target.value);
  };

  const [slider2Product2Advantage1, setSlider2Product2Advantage1] = useState(
    ""
  );
  const slider2Product2Advantage1HandleOnChange = (e) => {
    setSlider2Product2Advantage1(e.target.value);
  };

  const [slider2Product2Advantage2, setSlider2Product2Advantage2] = useState(
    ""
  );
  const slider2Product2Advantage2HandleOnChange = (e) => {
    setSlider2Product2Advantage2(e.target.value);
  };

  const [slider2Product2Advantage3, setSlider2Product2Advantage3] = useState(
    ""
  );
  const slider2Product2Advantage3HandleOnChange = (e) => {
    setSlider2Product2Advantage3(e.target.value);
  };

  const [slider2Product2LinkUrl, setSlider2Product2LinkUrl] = useState("");
  const slider2Product2LinkUrlHandleOnChange = (e) => {
    setSlider2Product2LinkUrl(e.target.value);
  };

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(`
    <!-- ***************** START DISPLAY PRODUCTS SLIDER2 (advantages slider) ***************** -->

    
    
    <link
      rel="stylesheet"
      href="https://decathlon-source.eu/frontend/sport-pages/code-files/components/product-slider2.css"
    />


    
     
        <div class="products-slider2">
          <!-- Swiper -->
          <div class="swiper-container swiper-container__products-slider2 swiper-container__products-slider2__${sliderId}">
            <div class="swiper-wrapper">
              <div class="swiper-slide products-slider2__swiper-slider">
                <div class="products-slider2__swiper-sliderContainer">
                  <div class="products-slider2__swiper-slider--left">
                    <div class="products-slider2__img-container">
                      <div class="products-slider2__img-price-label">
                        ${
                          slider2Product1DisplayAbPriceBool === "yes"
                            ? `
                          <p class="products-slider2__img-price-label--ab">
                            Ab
                          </p>
                          `
                            : `
                          <!--
                          <p class="products-slider2__img-price-label--ab">
                            Ab
                          </p>
                          -->
                          `
                        }
                      

                        <div class="products-slider2__img-price-label--content">
                          <p class="products-slider2__img-price-label--price">${slider2Product1PriceInteger}</p>
                          <div
                            class="products-slider2__img-price-label--deci-container"
                          >
                            <span>€</span>
                            <span>${slider2Product1PriceDecimal}</span>
                          </div>
                        </div>
                        <div
                          class="products-slider2__img-price-label--additional-elem-background"
                        >
                           
                        </div>
                      </div>
    
                      <img
                        src="${slider2Product1ImageSrc}"
                        alt="${slider2Product1ImageAlt}"
                      />
                    </div>
                  </div>
                  <div class="products-slider2__swiper-slider--right">
                    <h2 class="products-slider2__title">${slider2Product1Title}</h2>
                    <ul class="products-slider2__list">
                      <li class="products-slider2__item">
                        <i class="fas fa-check"></i>${slider2Product1Advantage1}
                      </li>
                      <li class="products-slider2__item">
                        <i class="fas fa-check"></i>${slider2Product1Advantage2}
                      </li>
                      <li class="products-slider2__item">
                        <i class="fas fa-check"></i>${slider2Product1Advantage3}
                      </li>

                    </ul>
                    <a href="${slider2Product1LinkUrl}" class="products-slider2__cta">
                      <span> Zum Produkt </span>
                      <i class="fas fa-chevron-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
      

              <div class="swiper-slide products-slider2__swiper-slider">
                <div class="products-slider2__swiper-sliderContainer">
                  <div class="products-slider2__swiper-slider--left">
                    <div class="products-slider2__img-container">
                      <div class="products-slider2__img-price-label">
                      ${
                        slider2Product2DisplayAbPriceBool === "yes"
                          ? `
                        <p class="products-slider2__img-price-label--ab">
                          Ab
                        </p>
                        `
                          : `
                        <!--
                        <p class="products-slider2__img-price-label--ab">
                          Ab
                        </p>
                        -->
                        `
                      }

                        <div class="products-slider2__img-price-label--content">
                          <p class="products-slider2__img-price-label--price">${slider2Product2PriceInteger}</p>
                          <div
                            class="products-slider2__img-price-label--deci-container"
                          >
                            <span>€</span>
                            <span>${slider2Product2PriceDecimal}</span>
                          </div>
                        </div>
                        <div
                          class="products-slider2__img-price-label--additional-elem-background"
                        >
                           
                        </div>
                      </div>
                      <img
                        src="${slider2Product2ImageSrc}"
                        alt="${slider2Product2ImageAlt}"
                      />
                    </div>
                  </div>
                  <div class="products-slider2__swiper-slider--right">
                    <h2 class="products-slider2__title">${slider2Product2Title}</h2>
                    <ul class="products-slider2__list">
                      <li class="products-slider2__item">
                        <i class="fas fa-check"></i>${slider2Product2Advantage1}
                      </li>
                      <li class="products-slider2__item">
                        <i class="fas fa-check"></i>${slider2Product2Advantage2}
                      </li>
                      <li class="products-slider2__item">
                        <i class="fas fa-check"></i>${slider2Product2Advantage3}
                      </li>
    
                    </ul>
                    <a href="${slider2Product2LinkUrl}" class="products-slider2__cta">
                      <span> Zum Produkt </span>
                      <i class="fas fa-chevron-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Add Arrows -->
 
            <div class="products-slider2__next-btn products-slider2__next-btn${sliderId}">
              <i class="fas fa-chevron-circle-right"></i>
            </div>
            <div class="products-slider2__prev-btn products-slider2__prev-btn${sliderId}">
              <i class="fas fa-chevron-circle-left"></i>
            </div>
          </div>
    
          <!-- Swiper JS -->
          <script src="../package/swiper-bundle.min.js"></script>
    
          <!-- Initialize Swiper -->
          <script>
            var swiper${sliderId} = new Swiper(".swiper-container__products-slider2__${sliderId}", {
              navigation: {
                nextEl: ".products-slider2__next-btn${sliderId}",
                prevEl: ".products-slider2__prev-btn${sliderId}",
              },
              loop: true,
            });
          </script>
        </div>
        <div style="margin: 12px 0"> </div>
        <!-- ***************** END DISPLAY PRODUCTS SLIDER2 (advantages slider) ***************** -->
    
    `);
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
                  Product 1:
                </p>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add price (integer number - without € symbol and cents)"
                    style={{ width: "80%" }}
                    onChange={slider2Product1PriceIntegerHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add cents to price (without € symbol)"
                    style={{ width: "80%" }}
                    onChange={slider2Product1PriceDecimalHandleOnChange}
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
                      value={slider2Product1DisplayAbPriceBool}
                      onChange={slider2Product1DisplayAbPriceBoolHandleOnChange}
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
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image src"
                    style={{ width: "80%" }}
                    onChange={slider2Product1ImageSrcHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image alt"
                    style={{ width: "80%" }}
                    onChange={slider2Product1ImageAltHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product page link url"
                    style={{ width: "80%" }}
                    onChange={slider2Product1LinkUrlHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product title"
                    style={{ width: "80%" }}
                    onChange={slider2Product1TitleHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product advantage 1"
                    style={{ width: "80%" }}
                    onChange={slider2Product1Advantage1HandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product advantage 2"
                    style={{ width: "80%" }}
                    onChange={slider2Product1Advantage2HandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product advantage 3"
                    style={{ width: "80%" }}
                    onChange={slider2Product1Advantage3HandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Product 2:
                </p>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add price (integer number - without € symbol and cents)"
                    style={{ width: "80%" }}
                    onChange={slider2Product2PriceIntegerHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add cents to price (without € symbol)"
                    style={{ width: "80%" }}
                    onChange={slider2Product2PriceDecimalHandleOnChange}
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
                      value={slider2Product2DisplayAbPriceBool}
                      onChange={slider2Product2DisplayAbPriceBoolHandleOnChange}
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
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image src"
                    style={{ width: "80%" }}
                    onChange={slider2Product2ImageSrcHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product image alt"
                    style={{ width: "80%" }}
                    onChange={slider2Product2ImageAltHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product page link url"
                    style={{ width: "80%" }}
                    onChange={slider2Product2LinkUrlHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product title"
                    style={{ width: "80%" }}
                    onChange={slider2Product2TitleHandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product advantage 1"
                    style={{ width: "80%" }}
                    onChange={slider2Product2Advantage1HandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product advantage 2"
                    style={{ width: "80%" }}
                    onChange={slider2Product2Advantage2HandleOnChange}
                  />
                </div>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add product advantage 3"
                    style={{ width: "80%" }}
                    onChange={slider2Product2Advantage3HandleOnChange}
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
