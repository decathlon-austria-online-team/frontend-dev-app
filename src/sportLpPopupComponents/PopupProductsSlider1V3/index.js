import React, { useState, useEffect } from "react";
import "./index.css";
import data from "../../components/data/products-data.json";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import BlockIcon from "@mui/icons-material/Block";
import InfoIcon from "@mui/icons-material/Info";

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

export default function PopupProductsSlider1V3(props) {
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
  const [
    productsDataWithVariantsArrFromJsonReadyToMap,
    setProductsDataWithVariantsArrFromJsonReadyToMap,
  ] = useState([]);
  const [allProductsAreAvailableBool, setAllProductsAreAvailableBool] =
    useState(true);

  const [requiredProductsFromCsvFile, setRequiredProductsFromCsvFile] =
    useState("");
  const [
    requiredProductsAvailableInJsonData,
    setRequiredProductsAvailableInJsonData,
  ] = useState("");

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
    if (dataFromCsvArr != undefined) {
      setProductDataArrReadyToMap(
        dataFromCsvArr.filter((e) => e[0] != "not active")
      );
    }
  };

  useEffect(() => {
    convertCsvDataToReadyArrToMap();
  }, [productDataDirectFromCsv]);

  const createVariantsArrFromProductsDataJson = () => {
    // create new array from all products ids numbers
    let arrOfProductsIds = [];
    for (let i = 0; i < productDataArrReadyToMap.length; i++) {
      arrOfProductsIds.push(productDataArrReadyToMap[i][2]);
    }
    arrOfProductsIds = arrOfProductsIds.filter((e) => e.length > 0);

    // pull the relevant products obj data from products json file and push to new array
    let arrOfRelevantProductsDataFromJson = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < arrOfProductsIds.length; j++) {
        if (arrOfProductsIds[j] === data[i].de_modelundefined) {
          arrOfRelevantProductsDataFromJson.push(data[i]);
        }
      }
    }

    // add to each product obj an array of variants
    for (let i = 0; i < arrOfRelevantProductsDataFromJson.length; i++) {
      arrOfRelevantProductsDataFromJson[i].variants = [];
    }

    // push to the variants array the relevant products variants group objects
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < arrOfRelevantProductsDataFromJson.length; j++) {
        if (
          arrOfRelevantProductsDataFromJson[j].item_group_id ===
          data[i].item_group_id
        ) {
          arrOfRelevantProductsDataFromJson[j].variants.push({
            item_group_id: data[i].item_group_id,
            id: data[i].id,
            price: data[i].price,
            title: data[i].title,
            link: data[i].link,
            de_modelundefined: data[i].de_modelundefined,
            image_link: data[i].image_link,
            brand: data[i].brand,
          });
        }
      }
    }

    // remove items from variants array if more than 5 variants per product
    for (let i = 0; i < arrOfRelevantProductsDataFromJson.length; i++) {
      if (arrOfRelevantProductsDataFromJson[i].variants.length > 5) {
        arrOfRelevantProductsDataFromJson[i].variants.length = 5;
      }
    }

    // add the relevant extra data from the state "productDataArrReadyToMap" to the products
    for (let i = 0; i < productDataArrReadyToMap.length; i++) {
      for (let j = 0; j < arrOfRelevantProductsDataFromJson.length; j++) {
        if (
          productDataArrReadyToMap[i][2] ===
          arrOfRelevantProductsDataFromJson[j].de_modelundefined
        ) {
          arrOfRelevantProductsDataFromJson[j].display_label_bool =
            productDataArrReadyToMap[i][3];
          arrOfRelevantProductsDataFromJson[j].label_color =
            productDataArrReadyToMap[i][4];
          arrOfRelevantProductsDataFromJson[j].label_text =
            productDataArrReadyToMap[i][5];
          arrOfRelevantProductsDataFromJson[j].display_text_above_price_bool =
            productDataArrReadyToMap[i][7];
          arrOfRelevantProductsDataFromJson[j].text_above_price =
            productDataArrReadyToMap[i][8];
        }
      }
    }

    // reorganize the products positions in the array according to the state "productDataArrReadyToMap"
    for (let i = 0; i < productDataArrReadyToMap.length; i++) {
      for (let j = 0; j < arrOfRelevantProductsDataFromJson.length; j++) {
        if (
          productDataArrReadyToMap[i][2] ===
          arrOfRelevantProductsDataFromJson[j].de_modelundefined
        ) {
          let productElement = arrOfRelevantProductsDataFromJson[j];
          arrOfRelevantProductsDataFromJson.splice(j, 1);
          arrOfRelevantProductsDataFromJson.splice(i, 0, productElement);
        }
      }
    }

    // add slide type and category slide extra properties to object
    for (let i = 0; i < arrOfRelevantProductsDataFromJson.length; i++) {
      arrOfRelevantProductsDataFromJson[i].slide_type = "product";
      arrOfRelevantProductsDataFromJson[i].category_image_src = "no";
      arrOfRelevantProductsDataFromJson[i].category_link = "no";
      arrOfRelevantProductsDataFromJson[i].category_btn_text = "no";
    }

    // create category-slide-type objects and push to the right position in the products array

    for (let i = 0; i < productDataArrReadyToMap.length; i++) {
      if (productDataArrReadyToMap[i][1] === "category") {
        arrOfRelevantProductsDataFromJson.splice(i, 0, {
          item_group_id: "no",
          id: "no",
          price: ["no", "no"],
          title: "no",
          link: "no",
          de_modelundefined: "no",
          image_link: "no",
          brand: "no",
          variants: [],
          slide_type: "category",
          category_image_src: productDataArrReadyToMap[i][13],
          category_link: productDataArrReadyToMap[i][14],
          category_btn_text: productDataArrReadyToMap[i][15],
        });
      }
    }

    setProductsDataWithVariantsArrFromJsonReadyToMap(
      arrOfRelevantProductsDataFromJson
    );
  };

  useEffect(() => {
    createVariantsArrFromProductsDataJson();
  }, [productDataArrReadyToMap]);

  const checkIfAllRequiredProductsAreInJsonData = () => {
    let numOfProductsAvailableInProductsData =
      productsDataWithVariantsArrFromJsonReadyToMap.filter(
        (pObj) => pObj.slide_type === "product"
      );
    let numOfProductsRequiredFromCsvFile = productDataArrReadyToMap.filter(
      (pArr) => pArr[1] === "product"
    );

    setRequiredProductsAvailableInJsonData(
      numOfProductsAvailableInProductsData
    );
    setRequiredProductsFromCsvFile(numOfProductsRequiredFromCsvFile);

    if (
      numOfProductsAvailableInProductsData.length <
      numOfProductsRequiredFromCsvFile.length
    ) {
      setAllProductsAreAvailableBool(false);
    }
  };

  useEffect(() => {
    checkIfAllRequiredProductsAreInJsonData();
  }, [productsDataWithVariantsArrFromJsonReadyToMap]);

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
      <style>
        /* START VARIANTS STYLES */
        .products-slider1__imgContainer-variants {
          display: flex;
          flex-direction: row-reverse;
          align-items: flex-start;
          justify-content: center;
          margin-top: 31px !important;
        }
        .products-slider1__img-variants {
          /*border: 1px solid #eee;*/
          padding: 2px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .products-slider1__img-variants img {
          width: 45px !important;
          margin: 4px 0 !important;
          cursor: pointer;
        }
        /* END VARIANTS STYLES */
      </style>
  
        <h2 class="sportLp__section-title">${sliderTitleName}</h2>
        <div class="products-slider1">
          <!-- Swiper -->
          <div class="swiper-container products-slider1__swiper-container products-slider1__swiper-container${idOfSliderComponent}">
            <div class="swiper-wrapper">
            ${productsDataWithVariantsArrFromJsonReadyToMap
              .map(
                (p, index) =>
                  `
		         ${
               p.slide_type === "product"
                 ? `
                 <div class="swiper-slide">
                 ${
                   p.display_label_bool === "yes"
                     ? `
                   <div
                   class="products-slider1__labelContainer"
                   style="background-color: ${
                     p.label_color === "green"
                       ? `#0DB14B`
                       : p.label_color === "red"
                       ? `#E20C18`
                       : p.label_color === "orange"
                       ? `#EC6607`
                       : ``
                   }"
                 >
                   <span>${p.label_text}</span>
                 </div>
                   `
                     : `
                   <!--
                   <div
                   class="products-slider1__labelContainer"
                   style="background-color: #0db14b"
                 >
                   <span>label text</span>
                 </div>
                   -->
                   `
                 }
          
          
                 <div
                   class="
                     products-slider1__imgContainer
                     products-slider1__imgContainer-variants
                   "
                 >
                   <div>
                     <a
                       href="${p.link}"
                     >
                       <img
                         alt="${p.title}"
                         src="${p.image_link.replace(/800x800/g, "300x300")}"
                       />
                     </a>
                   </div>
                   ${
                     p.variants.length > 1
                       ? `
                       <div class="products-slider1__img-variants">
                       ${p.variants
                         .map(
                           (productvariant, indx) =>
                             `
                           <a
                           href="${productvariant.link}"
                         >
                           <img
                             alt="${productvariant.title}"
                             src="${productvariant.image_link.replace(
                               /800x800/g,
                               "100x100"
                             )}"
                           />
                         </a>
                           `
                         )
                         .join("")}
                     </div>
                       `
                       : ``
                   }
                   
                 </div>
          
                 <div class="products-slider1__priceContainer">
                 ${
                   p.display_text_above_price_bool === "yes"
                     ? `
                   <span
                   class="products-slider1__priceContainer--ab-price"
                   style="text-align: left"
                   >${p.text_above_price}</span
                 >
                   `
                     : `
                   <!--
                   <span
                     class="products-slider1__priceContainer--ab-price"
                     style="text-align: left"
                     >ab</span
                   >
                   -->
                   `
                 }

                   <span class="products-slider1__priceContainer--price"
                     >€${p.price[0].split(" ")[0]}</span
                   >
                 </div>
          
                 <div class="products-slider1__info">
                   <div class="products-slider1__nameContainer">
                     <span>${p.brand}</span>
                   </div>
                   <div class="products-slider1__brandContainer">
                     <span>${p.title}</span>
                   </div>
                 </div>
               </div>
                 
                    
                     `
                 : p.slide_type === "category"
                 ? `
                     <div class="swiper-slide">
                     <style>
                     .products-slider1__display-category${idOfSliderComponent}${index} {
                       background-image: url("${p.category_image_src}") !important;
                       background-position: center;
                     }
                   </style>
                     <div class="products-slider1__display-category products-slider1__display-category${idOfSliderComponent}${index}">
                       <a href="${p.category_link}" class="products-slider1__display-category-btn">
                         <p>
                           <span> ${p.category_btn_text} </span>
          
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
Not available for RTL languages
        
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
          {props.userDataObjFromSheet.country.toLowerCase() === "austria" ? (
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
                    <div style={{ padding: "12px", border: "1px solid #eee" }}>
                      <InfoIcon style={{ color: "lightgray" }} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: "20px",
                              textTransform: "uppercase",
                            }}
                          >
                            #Required in google sheet#
                          </p>
                          <div style={{ margin: "12px 0" }}>
                            <p>For product slide:</p>
                            <ul
                              style={{
                                color: "lightgray",
                                fontSize: "11px",
                                listStyle: "none",
                              }}
                            >
                              <li>PRODUCT ID</li>
                            </ul>
                          </div>

                          <div style={{ margin: "12px 0" }}>
                            <p>For category slide:</p>
                            <ul
                              style={{
                                color: "lightgray",
                                fontSize: "11px",
                                listStyle: "none",
                              }}
                            >
                              <li>CATEGORY IMAGE SRC</li>
                              <li>CATEGORY LINK URL</li>
                              <li>CATEGORY CALL TO ACTION BUTTON TEXT</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <iframe
                            src="https://giphy.com/embed/3o6wreo44azjQtfhM4"
                            width="280"
                            height="160"
                            frameBorder="0"
                            class="giphy-embed"
                            allowFullScreen
                          ></iframe>
                          <p
                            style={{
                              color: "#0082C3",
                              textTransform: "uppercase",
                              fontSize: "16px",
                              textAlign: "center",
                            }}
                          >
                            No more copy-paste
                          </p>
                        </div>
                      </div>
                    </div>
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

                {!allProductsAreAvailableBool && (
                  <div className="popupInputsContainer__sectionWrapper">
                    <div className="popupInputsContainer__wrapper">
                      <p
                        style={{
                          marginBottom: "12px",
                          fontSize: "20px",
                        }}
                      >
                        Not all the required products are available in data
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #eee",
                            padding: "12px",
                            marginRight: "20px",
                          }}
                        >
                          Required products (
                          {requiredProductsFromCsvFile.length}
                          ):
                          <ul style={{ listStyle: "none" }}>
                            {requiredProductsFromCsvFile.map((p, i) => (
                              <li
                                style={
                                  requiredProductsAvailableInJsonData.some(
                                    (obj) => obj.de_modelundefined === p[2]
                                  )
                                    ? { color: "green" }
                                    : { color: "red" }
                                }
                              >
                                {p[2]}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div
                          style={{
                            border: "1px solid #eee",
                            padding: "12px",
                          }}
                        >
                          Available products in data (
                          {requiredProductsAvailableInJsonData.length}):
                          <ul style={{ listStyle: "none" }}>
                            {requiredProductsAvailableInJsonData.map((p, i) => (
                              <li>{p.de_modelundefined}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
          ) : (
            <div className={classes.paper}>
              <p style={{ fontSize: "24px" }}>
                This component is available only for online team Austria
              </p>
              <BlockIcon
                style={{
                  color: "red",
                  fontSize: "60px",
                  margin: "10px auto",
                  display: "block",
                }}
              />
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
