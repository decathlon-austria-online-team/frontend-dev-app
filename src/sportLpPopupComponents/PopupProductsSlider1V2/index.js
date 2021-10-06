import React, { useState, useEffect } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

import copy from "copy-to-clipboard";

// import papaparse:
import { CSVReader } from "react-papaparse";
const buttonRef = React.createRef();

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

export default function PopupProductsSlider1V2(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* START NEW STATES OF PRODUCT SLIDER */
  const [productDataDirectFromCsv, setProductDataDirectFromCsv] =
    useState(false);
  const [productDataArrReadyToMap, setProductDataArrReadyToMap] = useState([]);
  const [idOfSliderComponent, setIdOfSliderComponent] = useState("");
  const [sliderTitleName, setSliderTitleName] = useState("");
  /* END NEW STATES OF PRODUCT SLIDER */

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  // copy to clip func
  const [showSuccessCopied, setShowSuccessCopied] = useState(false);
  const copyToClipFunc = () => {
    setShowSuccessCopied(true);
    copy(codeOfComponent);

    setTimeout(function () {
      setShowSuccessCopied(false);
    }, 2000);
  };

  /* start papaparse functions */
  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data) => {
    console.log("---------------------------");
    console.log(data);
    setProductDataDirectFromCsv(data);
    console.log("---------------------------");
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  /* end papaparse functions */

  const convertCsvDataToReadyArrToMap = () => {
    let dataFromCsv = productDataDirectFromCsv;
    let dataFromCsvArr = [];

    // convert dataFromCsv obj to array
    for (let i = 0; i < dataFromCsv.length; i++) {
      if (dataFromCsv[i] != undefined) {
        dataFromCsv[i] = dataFromCsv[i].data;
        dataFromCsvArr.push(dataFromCsv[i]);
      }
    }
    dataFromCsvArr = dataFromCsvArr.slice(1);

    //setProductDataArrReadyToMap(filterdActiveProductsArr);
    // if (dataFromCsvArr != undefined) {
    setProductDataArrReadyToMap(
      dataFromCsvArr.filter((e) => e[0] != "not active")
    );
    //}
  };

  useEffect(() => {
    convertCsvDataToReadyArrToMap();
  }, [productDataDirectFromCsv]);

  const generateCodeFunc = () => {
    setGenerateCode(true);

    if (props.userDataObjFromSheet.languageType === "LTR") {
      setCodeOfComponent(
        `
        <!-- ***************** START DISPLAY PRODUCTS SLIDER ID: ${idOfSliderComponent} ***************** -->
      <div style="margin: 12px 0">&nbsp;</div>
      <div class="sportpage__content--box">
  
        <link
        rel="stylesheet"
        href="https://decathlon-source.eu/frontend/sport-pages/code-files/components/product-slider1-oneshop.css"
      />
  
        <h2 class="sportLp__section-title">${sliderTitleName}</h2>
        <div class="products-slider1">
          <!-- Swiper -->
          <div class="swiper-container products-slider1__swiper-container products-slider1__swiper-container${idOfSliderComponent}">
            <div class="swiper-wrapper">
            ${productDataArrReadyToMap
              .map(
                (p, index) =>
                  `
		         ${
               p[1] === "product"
                 ? `
                     <div class="swiper-slide">
         
                      ${
                        p[3] === "yes"
                          ? `
                        <div class="products-slider1__labelContainer" style="background-color: ${
                          p[4] === "green"
                            ? `#0DB14B`
                            : p[4] === "red"
                            ? `#E20C18`
                            : p[4] === "orange"
                            ? `#EC6607`
                            : ``
                        }">
                          <span>${p[5]}</span>
                        </div>
                          `
                          : `
                          <!--
                          <div class="products-slider1__labelContainer" style="background-color: #0DB14B">
                            <span></span>
                          </div>
                          -->
                          `
                      }

                 <div class="products-slider1__imgContainer">
                   <a href="${p[10]}">
                     <img
                       alt="${p[12]}"
                       src="${p[9]}"
                     />
                   </a>
                 </div>
      
                 <div class="products-slider1__priceContainer">
                 ${
                   p[7] === "yes"
                     ? `
                 <span class="products-slider1__priceContainer--ab-price" style="text-align: left;">${p[8]}</span>
                 `
                     : `
                 <!--<span class="products-slider1__priceContainer--ab-price" style="text-align: left;">${p[8]}</span>-->
                 `
                 }
                
                   
                   <span class="products-slider1__priceContainer--price"
                     >${props.userDataObjFromSheet.currencySymbol}${p[6]}</span
                   >
                 </div>
      
                 <div class="products-slider1__info">
                   <div class="products-slider1__nameContainer">
                     <span>${p[11]}</span>
                   </div>
                   <div class="products-slider1__brandContainer">
                     <span>${p[12]}</span>
                   </div>
                 </div>
               </div>
                     `
                 : p[1] === "category"
                 ? `
                     <div class="swiper-slide">
                     <style>
                     .products-slider1__display-category${idOfSliderComponent}${index} {
                       background-image: url("${p[13]}") !important;
                       background-position: center;
                     }
                   </style>
                     <div class="products-slider1__display-category products-slider1__display-category${idOfSliderComponent}${index}">
                       <a href="${p[14]}" class="products-slider1__display-category-btn">
                         <p>
                           <span> ${p[15]} </span>
          
                           <i class="fas fa-chevron-right"></i>
                         </p>
                       </a>
                     </div>
                   </div>
                     `
                 : ""
             }
                `
              )
              .join("")}
             
            </div>
          </div>
    
          <div class="products-slider1__arrow products-slider1__arrow--left products-slider1__arrow--left${idOfSliderComponent}">
            <i class="fas fa-chevron-circle-left"></i>
          </div>
          <div class="products-slider1__arrow products-slider1__arrow--right products-slider1__arrow--right${idOfSliderComponent}">
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
          var swipermountainbike__slider = new Swiper(".products-slider1__swiper-container${idOfSliderComponent}", {
            navigation: {
              nextEl: ".products-slider1__arrow--right${idOfSliderComponent}",
              prevEl: ".products-slider1__arrow--left${idOfSliderComponent}",
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
        </div>
        <div style="margin: 12px 0">&nbsp;</div>
        <!-- ***************** END DISPLAY PRODUCTS SLIDER ID: ${idOfSliderComponent} ***************** -->
        
            `
      );
    } else if (props.userDataObjFromSheet.languageType === "RTL") {
      setCodeOfComponent(
        `
        <!-- ***************** START DISPLAY PRODUCTS SLIDER ID: ${idOfSliderComponent} ***************** -->
      <div style="margin: 12px 0">&nbsp;</div>
      <div class="sportpage__content--box">
  
        <link
        rel="stylesheet"
        href="https://decathlon-source.eu/frontend/sport-pages/code-files/components/product-slider1-oneshop.css"
      />
      <style>
        /* START RTL OVERRIDE STYLES */
        .products-slider1__display-category-btn p i {
                left: 4%;
                right: auto;
            }
        /* END RTL OVERRIDE STYLES */
      </style>
  
        <h2 class="sportLp__section-title">${sliderTitleName}</h2>
        <div class="products-slider1">
          <!-- Swiper -->
          <div class="swiper-container products-slider1__swiper-container products-slider1__swiper-container${idOfSliderComponent}">
            <div class="swiper-wrapper">
            ${productDataArrReadyToMap
              .map(
                (p, index) =>
                  `
		         ${
               p[1] === "product"
                 ? `
                     <div class="swiper-slide">
         
                      ${
                        p[3] === "yes"
                          ? `
                        <div class="products-slider1__labelContainer" style="background-color: ${
                          p[4] === "green"
                            ? `#0DB14B`
                            : p[4] === "red"
                            ? `#E20C18`
                            : p[4] === "orange"
                            ? `#EC6607`
                            : ``
                        }">
                          <span>${p[5]}</span>
                        </div>
                          `
                          : `
                          <!--
                          <div class="products-slider1__labelContainer" style="background-color: #0DB14B">
                            <span></span>
                          </div>
                          -->
                          `
                      }

                 <div class="products-slider1__imgContainer">
                   <a href="${p[10]}">
                     <img
                       alt="${p[12]}"
                       src="${p[9]}"
                     />
                   </a>
                 </div>
      
                 <div class="products-slider1__priceContainer">
                 ${
                   p[7] === "yes"
                     ? `
                 <span class="products-slider1__priceContainer--ab-price" style="text-align: left;">${p[8]}</span>
                 `
                     : `
                 <!--<span class="products-slider1__priceContainer--ab-price" style="text-align: left;">${p[8]}</span>-->
                 `
                 }
                
                   
                   <span class="products-slider1__priceContainer--price"
                     >${props.userDataObjFromSheet.currencySymbol}${p[6]}</span
                   >
                 </div>
      
                 <div class="products-slider1__info">
                   <div class="products-slider1__nameContainer">
                     <span>${p[11]}</span>
                   </div>
                   <div class="products-slider1__brandContainer">
                     <span>${p[12]}</span>
                   </div>
                 </div>
               </div>
                     `
                 : p[1] === "category"
                 ? `
                     <div class="swiper-slide">
                     <style>
                     .products-slider1__display-category${idOfSliderComponent}${index} {
                       background-image: url("${p[13]}") !important;
                       background-position: center;
                     }
                   </style>
                     <div class="products-slider1__display-category products-slider1__display-category${idOfSliderComponent}${index}">
                       <a href="${p[14]}" class="products-slider1__display-category-btn">
                         <p>
                           <span> ${p[15]} </span>
          
                           <i class="fas fa-chevron-left"></i>
                         </p>
                       </a>
                     </div>
                   </div>
                     `
                 : ""
             }
                `
              )
              .join("")}
             
            </div>
          </div>
    
          <div class="products-slider1__arrow products-slider1__arrow--left products-slider1__arrow--left${idOfSliderComponent}">
            <i class="fas fa-chevron-circle-left"></i>
          </div>
          <div class="products-slider1__arrow products-slider1__arrow--right products-slider1__arrow--right${idOfSliderComponent}">
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
          var swipermountainbike__slider = new Swiper(".products-slider1__swiper-container${idOfSliderComponent}", {
            navigation: {
              nextEl: ".products-slider1__arrow--right${idOfSliderComponent}",
              prevEl: ".products-slider1__arrow--left${idOfSliderComponent}",
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
        </div>
        <div style="margin: 12px 0">&nbsp;</div>
        <!-- ***************** END DISPLAY PRODUCTS SLIDER ID: ${idOfSliderComponent} ***************** -->
        
            `
      );
    }
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
                <div className="popupInputsContainer__wrapper">
                  <small>
                    Please give a section id name/number (this name/number
                    should be unique only for this section in order to
                    differentiate from the other sections on the page)
                  </small>
                  <TextField
                    id="standard-basic"
                    label="slider id name/number"
                    style={{ width: "80%" }}
                    onChange={(e) => setIdOfSliderComponent(e.target.value)}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="slider title"
                    style={{ width: "80%" }}
                    onChange={(e) => setSliderTitleName(e.target.value)}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <div style={{ marginBottom: "10px" }}>
                  <a
                    style={{
                      display: "block",
                      cursor: "pointer",
                      color: "#0082C3",
                    }}
                    href="https://docs.google.com/spreadsheets/d/121tt24m2xKFMBgdl0P0tbVpvJynsK8m4aspXv3yYb5o/edit?usp=sharing"
                    target="_blank"
                  >
                    Google Sheet Template
                  </a>
                  <span
                    style={{
                      display: "block",
                      color: "red",
                      marginBottom: "16px",
                    }}
                  >
                    Please make a copy and not edit the template!{" "}
                  </span>
                </div>
                <div style={{ marginBottom: "10px", maxWidth: "40%" }}>
                  <CSVReader
                    ref={buttonRef}
                    onFileLoad={handleOnFileLoad}
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={handleOpenDialog}
                        >
                          Upload CSV
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper primary-button-container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={generateCodeFunc}
                >
                  Generate Slider Code
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
