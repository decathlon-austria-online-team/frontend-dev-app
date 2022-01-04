import React, { useState, useEffect } from "react";
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
import DoneIcon from "@material-ui/icons/Done";

import copy from "copy-to-clipboard";

// import images
import structureOfSection1Img from "../../img/merch-zone-content-structure-section-1.png";
import structureOfSection2Img from "../../img/merch-zone-content-structure-section-2.png";
import structureOfSection3Img from "../../img/merch-zone-content-structure-section-3.png";
import structureOfSection4Img from "../../img/merch-zone-content-structure-section-4.png";
import titleOfSection1Img from "../../img/merch-zone-content-title1.png";
import titleOfSection2Img from "../../img/merch-zone-content-title2.png";
import titleOfSection3Img from "../../img/merch-zone-content-title3.png";
import titleOfSection4Img from "../../img/merch-zone-content-title4.png";
import contentPageStructureImg from "../../img/content-page-structure.png";

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

export default function Content(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* START CONTENT STATES AND FUNCTIONS */
  const [baseCode, setBaseCode] = useState(`
  <link rel="stylesheet"
href="https://decathlon-source.eu/frontend/content-pages/code-files/products
-page-content/footer-content-v2.css">

  <div class="merch-zone-footer-content">
  <!-- *** ADD SECTIONS BELOW *** -->

  <!-- *** ADD SECTIONS ABOVE *** -->
  </div>
  `);

  const [showSuccessCopiedBaseCode, setShowSuccessCopiedBaseCode] =
    useState(false);
  const copyBaseCodeFunc = () => {
    copy(baseCode);
    setShowSuccessCopiedBaseCode(true);
    setTimeout(function () {
      setShowSuccessCopiedBaseCode(false);
    }, 2000);
  };

  const [showSuccessCopiedSectionWrapper, setShowSuccessCopiedSectionWrapper] =
    useState(false);
  const [sectionWrapperCode, setSectionWrapperCode] = useState(
    `
    <!-- ## start section ## -->
      <div class="merch-zone-footer-content__section">

      </div>
    <!-- ## end section ## -->
    `
  );
  const copySectionWrapperCodeFunc = () => {
    copy(sectionWrapperCode);
    setShowSuccessCopiedSectionWrapper(true);
    setTimeout(function () {
      setShowSuccessCopiedSectionWrapper(false);
    }, 2000);
  };

  const [structureOfSection, setStructureOfSection] = useState("1");
  const [displayTitleToSection, setDisplayTitleToSection] = useState("no");
  const [typeOfSectionTitle, setTypeOfSectionTitle] = useState("h2");
  const [sectionTitleText, setSectionTitleText] = useState("");
  const [
    showSuccessCopiedSectionRowStructure,
    setShowSuccessCopiedSectionRowStructure,
  ] = useState(false);
  const [sectionCode, setSectionCode] = useState(
    `
    <!-- ~~~ start in-section row  ~~~ -->
      <div class="merch-zone-footer-content__boxes">
        <!-- 100% width (row) -->
        <div class="merch-zone-footer-content__box-1">

        </div>
      </div>
    <!-- ~~~ end in-section row  ~~~ -->
    `
  );

  const setSectionCodeFunc = () => {
    setSectionCode(`
    ${
      structureOfSection === "1"
        ? `
        <!-- ~~~ start in-section row  ~~~ -->
          ${
            displayTitleToSection === "yes"
              ? `
             ${
               typeOfSectionTitle === "h2"
                 ? `
        <h2 class="merch-zone-footer-content__h2-title">${sectionTitleText}</h2>
               `
                 : typeOfSectionTitle === "h3"
                 ? `
               <h3 class="merch-zone-footer-content__h3-title">${sectionTitleText}</h3>
               `
                 : typeOfSectionTitle === "h4"
                 ? `
               <h4 class="merch-zone-footer-content__h4-title">${sectionTitleText}</h4>
               `
                 : ``
             }
            `
              : ``
          }
          <div class="merch-zone-footer-content__boxes">
            <!-- 100% width (row) -->
            <div class="merch-zone-footer-content__box-1">

            </div>
          </div>
        <!-- ~~~ end in-section row  ~~~ -->
      `
        : structureOfSection === "2"
        ? `
        <!-- ~~~ start in-section row  ~~~ -->
        ${
          displayTitleToSection === "yes"
            ? `
           ${
             typeOfSectionTitle === "h2"
               ? `
             <h2 class="merch-zone-footer-content__h2-title">${sectionTitleText}</h2>
             `
               : typeOfSectionTitle === "h3"
               ? `
             <h3 class="merch-zone-footer-content__h3-title">${sectionTitleText}</h3>
             `
               : typeOfSectionTitle === "h4"
               ? `
             <h4 class="merch-zone-footer-content__h4-title">${sectionTitleText}</h4>
             `
               : ``
           }
          `
            : ``
        }
            <div class="merch-zone-footer-content__boxes">
              <!-- 50% width (row) -->
              <div class="merch-zone-footer-content__box-2_1">
  
              </div>
              <!-- 50% width (row) -->
              <div class="merch-zone-footer-content__box-2_2">
  
              </div>
            </div>
        <!-- ~~~ end in-section row  ~~~ -->
          `
        : structureOfSection === "3"
        ? `
        <!-- ~~~ start in-section row  ~~~ -->
        ${
          displayTitleToSection === "yes"
            ? `
           ${
             typeOfSectionTitle === "h2"
               ? `
             <h2 class="merch-zone-footer-content__h2-title">${sectionTitleText}</h2>
             `
               : typeOfSectionTitle === "h3"
               ? `
             <h3 class="merch-zone-footer-content__h3-title">${sectionTitleText}</h3>
             `
               : typeOfSectionTitle === "h4"
               ? `
             <h4 class="merch-zone-footer-content__h4-title">${sectionTitleText}</h4>
             `
               : ``
           }
          `
            : ``
        }
            <div class="merch-zone-footer-content__boxes">
              <!-- 60% width (row) -->
              <div class="merch-zone-footer-content__box-3_1">
  
              </div>
              <!-- 40% width (row) -->
              <div class="merch-zone-footer-content__box-3_2">
  
              </div>
            </div>
        <!-- ~~~ end in-section row  ~~~ -->
          `
        : structureOfSection === "4"
        ? `
        <!-- ~~~ start in-section row  ~~~ -->
        ${
          displayTitleToSection === "yes"
            ? `
           ${
             typeOfSectionTitle === "h2"
               ? `
             <h2 class="merch-zone-footer-content__h2-title">${sectionTitleText}</h2>
             `
               : typeOfSectionTitle === "h3"
               ? `
             <h3 class="merch-zone-footer-content__h3-title">${sectionTitleText}</h3>
             `
               : typeOfSectionTitle === "h4"
               ? `
             <h4 class="merch-zone-footer-content__h4-title">${sectionTitleText}</h4>
             `
               : ``
           }
          `
            : ``
        }
            <div class="merch-zone-footer-content__boxes">
              <!-- 40% width (row) -->
              <div class="merch-zone-footer-content__box-4_1">
  
              </div>
              <!-- 60% width (row) -->
              <div class="merch-zone-footer-content__box-4_2">
  
              </div>
            </div>
        <!-- ~~~ end in-section row  ~~~ -->
          `
        : ``
    }
    `);
  };
  useEffect(() => {
    setSectionCodeFunc();
  }, [structureOfSection, displayTitleToSection, typeOfSectionTitle]);

  const copyInsectionRowStructureFunc = () => {
    copy(sectionCode);
    setShowSuccessCopiedSectionRowStructure(true);
    setTimeout(function () {
      setShowSuccessCopiedSectionRowStructure(false);
    }, 2000);
  };

  const [
    typeOfComponentToInsertToSection,
    setTypeOfComponentToInsertToSection,
  ] = useState("paragraph");
  // start components states and funcs
  const [pText, setPText] = useState("");
  const [showSuccessCopiedPText, setShowSuccessCopiedPText] = useState(false);
  const copyParagraphTextFunc = () => {
    copy(`<p>${pText}</p>`);
    setShowSuccessCopiedPText(true);
    setTimeout(function () {
      setShowSuccessCopiedPText(false);
    }, 2000);
  };

  const [h2Text, setH2Text] = useState("");
  const [showSuccessCopiedH2Text, setShowSuccessCopiedH2Text] = useState(false);
  const copyH2TextFunc = () => {
    copy(`<h2 class="merch-zone-footer-content__h2-title">${h2Text}</h2>`);
    setShowSuccessCopiedH2Text(true);
    setTimeout(function () {
      setShowSuccessCopiedH2Text(false);
    }, 2000);
  };

  const [h3Text, setH3Text] = useState("");
  const [showSuccessCopiedH3Text, setShowSuccessCopiedH3Text] = useState(false);
  const copyH3TextFunc = () => {
    copy(`<h3 class="merch-zone-footer-content__h3-title">${h3Text}</h3>`);
    setShowSuccessCopiedH3Text(true);
    setTimeout(function () {
      setShowSuccessCopiedH3Text(false);
    }, 2000);
  };

  const [h4Text, setH4Text] = useState("");
  const [showSuccessCopiedH4Text, setShowSuccessCopiedH4Text] = useState(false);
  const copyH4TextFunc = () => {
    copy(`<h4 class="merch-zone-footer-content__h4-title">${h4Text}</h4>`);
    setShowSuccessCopiedH4Text(true);
    setTimeout(function () {
      setShowSuccessCopiedH4Text(false);
    }, 2000);
  };

  const [amountOfListItems, setAmountOfListItems] = useState(0);
  const handleOnChangeAmountOfListItems = (e) => {
    if (e.target.value * 1 >= 0) {
      setAmountOfListItems(e.target.value * 1);
    }
  };
  const [arrOfListItemsTextAndIcons, setArrOfListItemsTextAndIcons] = useState(
    []
  );

  const pushObjsOfItemListToArr = () => {
    let emptyArr = [];
    for (let i = 0; i < amountOfListItems; i++) {
      emptyArr.push({
        iconType: document.getElementById(
          `merch-zone-footer-content__list-item-icon-type-${i}`
        ).value,
        text: document.getElementById(
          `merch-zone-footer-content__list-item-text-${i}`
        ).value,
      });
    }
    setArrOfListItemsTextAndIcons(emptyArr);
    console.log("arrOfListItemsTextAndIcons", arrOfListItemsTextAndIcons);
  };
  const [listCode, setListCode] = useState("");
  const [showSuccessCopiedListCode, setShowSuccessCopiedListCode] =
    useState(false);
  const setListCodeFunc = () => {
    setListCode(
      `
      <!-- start ul list -->
      <ul class="merch-zone-footer-content__ul-list">
      ${arrOfListItemsTextAndIcons
        .map(
          (e) =>
            `
        ${
          e.iconType === "dot"
            ? `
          <li class="merch-zone-footer-content__ul-list-item">
          <div>
            <svg
              class="merch-zone-footer-content__ul-list-icon-dot"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6z" fill="currentColor" />
              </g>
            </svg>
            </div>
            <span>${e.text}</span>
          </li>
          `
            : e.iconType === "check"
            ? `
              <li class="merch-zone-footer-content__ul-list-item">
                <div>
                  <svg
                    class="merch-zone-footer-content__ul-list-icon-check"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <g fill="currentColor">
                      <path
                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093l3.473-4.425a.267.267 0 0 1 .02-.022z"
                      />
                    </g>
                  </svg>
                  </div>
                  <span
                    >${e.text}</span
                  >
              </li>
              `
            : e.iconType === "x"
            ? `
              <li class="merch-zone-footer-content__ul-list-item">
              <div>
                <svg
                  class="merch-zone-footer-content__ul-list-icon-x"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                </div>
                <span>${e.text}</span>
            </li>
              `
            : ``
        }
        `
        )
        .join("")}
      </ul>
      <!-- end ul list -->
      `
    );
  };
  useEffect(() => {
    setListCodeFunc();
  }, [arrOfListItemsTextAndIcons]);

  const copyListCodeFunc = () => {
    copy(listCode);
    setShowSuccessCopiedListCode(true);
    setTimeout(function () {
      setShowSuccessCopiedListCode(false);
    }, 2000);
  };

  const [imgAlt, setImgAlt] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [showSuccessCopiedImgCode, setShowSuccessCopiedImgCode] =
    useState(false);
  const copyImgCodeFunc = () => {
    copy(`
      <!-- start img -->
      <div class="merch-zone-footer-content__img">
      <img
         src="${imgUrl}"
         alt="${imgAlt}"
       />
     </div>
     <!-- end img -->
      `);
    setShowSuccessCopiedImgCode(true);
    setTimeout(function () {
      setShowSuccessCopiedImgCode(false);
    }, 2000);
  };

  const [btnText, setBtnText] = useState("");
  const [btnLinkUrl, setBtnLinkUrl] = useState("");
  const [showSuccessCopiedBtnCode, setShowSuccessCopiedBtnCode] =
    useState(false);
  const copyBtnCodeFunc = () => {
    copy(`
<!-- start btn -->    
<div class="merch-zone-footer-content__btn">
  <a href="${btnLinkUrl}">
    <div>
      <span>${btnText}</span>
      <svg
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            d="M8 4l8 8l-8 8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
  </a>
</div>
<!-- end btn -->
  `);

    setShowSuccessCopiedBtnCode(true);
    setTimeout(function () {
      setShowSuccessCopiedBtnCode(false);
    }, 2000);
  };

  const [showSuccessCopiedTableCode, setShowSuccessCopiedTableCode] =
    useState(false);
  const copyTableCodeFunc = () => {
    copy(`
       <!-- start table -->
        <table class="merch-zone-footer-content__table">
        <tr>
          <th>Inch</th>
          <th>Meter</th>
          <th>Einsatzgebiet</th>
        </tr>
        <tr>
          <td>7” - 8’6”</td>
          <td>2,38 - 2,58</td>
          <td>Kinder</td>
        </tr>
        <tr>
          <td>9” - 9’8”</td>
          <td>2,74 - 2,90</td>
          <td>Surfing/Wave</td>
        </tr>
        <tr>
          <td>10” - 10’8”</td>
          <td>3,04 - 3,30</td>
          <td>Anfänger/Allround</td>
        </tr>
        <tr>
          <td>11” - 11’6”</td>
          <td>3,35 - 3,50</td>
          <td>Allrounder/Touring</td>
        </tr>
        <tr>
          <td>12”</td>
          <td>3,84</td>
          <td>Touring/Cruising</td>
        </tr>
        <tr>
          <td>14”</td>
          <td>4,27</td>
          <td>Race</td>
        </tr>
        <tr>
          <td>9” - 11,6”</td>
          <td>2,90 - 3,30</td>
          <td>Fitness/Yoga</td>
        </tr>
      </table>
       <!-- end table --> 
       `);
    setShowSuccessCopiedTableCode(true);
    setTimeout(function () {
      setShowSuccessCopiedTableCode(false);
    }, 2000);
  };
  // end components states and funcs

  const [displayPageStructureImgBool, setDisplayPageStructureImgBool] =
    useState(false);

  /* END CONTENT STATES AND FUNCTIONS */

  return (
    <div className="merch-zone-content">
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

            <div
              className="popupInputsContainer"
              style={{ overflow: "auto" }}
              onClick={() =>
                setDisplayPageStructureImgBool(!displayPageStructureImgBool)
              }
            >
              {displayPageStructureImgBool ? (
                <div>
                  <span
                    style={{
                      color: "#0082C3",
                      cursor: "pointer",
                      display: "block",
                    }}
                  >
                    hide page structure image
                  </span>
                  <div>
                    <img
                      src={contentPageStructureImg}
                      style={{ width: "620px" }}
                    />
                  </div>
                </div>
              ) : (
                <span
                  style={{
                    color: "#0082C3",
                    cursor: "pointer",
                    display: "block",
                  }}
                >
                  display page structure image
                </span>
              )}
            </div>

            <div className="popupInputsContainer" style={{ overflow: "auto" }}>
              <p className="merch-zone-content__step-title">
                step 1 - copy-paste the page container
              </p>
              <div
                className="popupInputsContainer__wrapper"
                style={{ position: "relative" }}
              >
                {showSuccessCopiedBaseCode && (
                  <DoneIcon
                    style={{
                      color: "green",
                      position: "absolute",
                      top: "-17px",
                    }}
                    fontSize="small"
                  />
                )}
                <button
                  onClick={copyBaseCodeFunc}
                  className="merch-zone-content__copy-code-btn"
                >
                  copy page container
                </button>
              </div>
            </div>

            <div className="popupInputsContainer" style={{ overflow: "auto" }}>
              <p className="merch-zone-content__step-title">
                step 2 - copy-paste the section wrapper
              </p>
              <div
                className="popupInputsContainer__wrapper"
                style={{ position: "relative" }}
              >
                {showSuccessCopiedSectionWrapper && (
                  <DoneIcon
                    style={{
                      color: "green",
                      position: "absolute",
                      top: "-17px",
                    }}
                    fontSize="small"
                  />
                )}
                <button
                  onClick={copySectionWrapperCodeFunc}
                  className="merch-zone-content__copy-code-btn"
                >
                  copy section wrapper
                </button>
              </div>
            </div>

            <div className="popupInputsContainer" style={{ overflow: "auto" }}>
              <p className="merch-zone-content__step-title">
                step 3 - define your in-section row structure and copy-paste
                into the section wrapper
              </p>
              <div className="popupInputsContainer__wrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  please choose the in-section row structure
                </p>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={structureOfSection}
                    onChange={(e) => setStructureOfSection(e.target.value)}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="100%"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="50% 50%"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="60% 40%"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="40% 60%"
                    />
                  </RadioGroup>
                </FormControl>
                {structureOfSection === "1" ? (
                  <img
                    class="merch-zone-content__canva-img"
                    src={structureOfSection1Img}
                  />
                ) : structureOfSection === "2" ? (
                  <img
                    class="merch-zone-content__canva-img"
                    src={structureOfSection2Img}
                  />
                ) : structureOfSection === "3" ? (
                  <img
                    class="merch-zone-content__canva-img"
                    src={structureOfSection3Img}
                  />
                ) : structureOfSection === "4" ? (
                  <img
                    class="merch-zone-content__canva-img"
                    src={structureOfSection4Img}
                  />
                ) : null}
              </div>

              <div className="popupInputsContainer__wrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  do you want to display a title above (not inside) the row?
                </p>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={displayTitleToSection}
                    onChange={(e) => setDisplayTitleToSection(e.target.value)}
                  >
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="no"
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="yes"
                    />
                  </RadioGroup>
                </FormControl>
                {structureOfSection === "1" ? (
                  <img
                    class="merch-zone-content__canva-img"
                    src={titleOfSection1Img}
                  />
                ) : structureOfSection === "2" ? (
                  <img
                    class="merch-zone-content__canva-img"
                    src={titleOfSection2Img}
                  />
                ) : structureOfSection === "3" ? (
                  <img
                    class="merch-zone-content__canva-img"
                    src={titleOfSection3Img}
                  />
                ) : structureOfSection === "4" ? (
                  <img
                    class="merch-zone-content__canva-img"
                    src={titleOfSection4Img}
                  />
                ) : null}
              </div>

              {displayTitleToSection === "yes" ? (
                <div className="popupInputsContainer__wrapper">
                  <p className="popupInputsContainer__titleOfInputsGroup">
                    type of title
                  </p>
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={typeOfSectionTitle}
                      onChange={(e) => setTypeOfSectionTitle(e.target.value)}
                    >
                      <FormControlLabel
                        value="h2"
                        control={<Radio />}
                        label="h2"
                      />
                      <FormControlLabel
                        value="h3"
                        control={<Radio />}
                        label="h3"
                      />
                      <FormControlLabel
                        value="h4"
                        control={<Radio />}
                        label="h4"
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    id="standard-basic"
                    label="enter your title"
                    style={{ width: "80%" }}
                    value={sectionTitleText}
                    onChange={(e) => setSectionTitleText(e.target.value)}
                  />
                </div>
              ) : null}
              <div
                className="popupInputsContainer__wrapper"
                style={{ position: "relative" }}
              >
                {showSuccessCopiedSectionRowStructure && (
                  <DoneIcon
                    style={{
                      color: "green",
                      position: "absolute",
                      top: "-17px",
                    }}
                    fontSize="small"
                  />
                )}
                <button
                  onClick={copyInsectionRowStructureFunc}
                  className="merch-zone-content__copy-code-btn"
                >
                  copy in-section row code
                </button>
              </div>
            </div>

            <div className="popupInputsContainer">
              <p className="merch-zone-content__step-title">
                step 4 - add components to section row
              </p>
              <div className="popupInputsContainer__wrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  please choose a component
                </p>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={typeOfComponentToInsertToSection}
                    onChange={(e) =>
                      setTypeOfComponentToInsertToSection(e.target.value)
                    }
                  >
                    <FormControlLabel
                      value="paragraph"
                      control={<Radio />}
                      label="paragraph"
                    />
                    <FormControlLabel
                      value="h2"
                      control={<Radio />}
                      label="h2"
                    />
                    <FormControlLabel
                      value="h3"
                      control={<Radio />}
                      label="h3"
                    />
                    <FormControlLabel
                      value="h4"
                      control={<Radio />}
                      label="h4"
                    />
                    <FormControlLabel
                      value="list"
                      control={<Radio />}
                      label="list"
                    />
                    <FormControlLabel
                      value="img"
                      control={<Radio />}
                      label="img"
                    />
                    <FormControlLabel
                      value="button"
                      control={<Radio />}
                      label="button"
                    />
                    <FormControlLabel
                      value="table"
                      control={<Radio />}
                      label="table"
                    />
                  </RadioGroup>
                </FormControl>
                {typeOfComponentToInsertToSection === "paragraph" ? (
                  <div>
                    <TextField
                      id="standard-basic"
                      label="enter your paragraph text"
                      style={{ width: "80%" }}
                      value={pText}
                      onChange={(e) => setPText(e.target.value)}
                      multiline={true}
                      rows="6"
                    />
                    <div style={{ margin: "16px 0", position: "relative" }}>
                      {showSuccessCopiedPText && (
                        <DoneIcon
                          style={{
                            color: "green",
                            position: "absolute",
                            top: "-17px",
                          }}
                          fontSize="small"
                        />
                      )}
                      <button
                        onClick={copyParagraphTextFunc}
                        style={{ cursor: "pointer" }}
                      >
                        copy paragraph
                      </button>
                    </div>
                  </div>
                ) : typeOfComponentToInsertToSection === "h2" ? (
                  <div>
                    <TextField
                      id="standard-basic"
                      label="enter your h2 title text"
                      style={{ width: "80%" }}
                      value={h2Text}
                      onChange={(e) => setH2Text(e.target.value)}
                    />
                    <div style={{ margin: "16px 0", position: "relative" }}>
                      {showSuccessCopiedH2Text && (
                        <DoneIcon
                          style={{
                            color: "green",
                            position: "absolute",
                            top: "-17px",
                          }}
                          fontSize="small"
                        />
                      )}
                      <button
                        onClick={copyH2TextFunc}
                        style={{ cursor: "pointer" }}
                      >
                        copy h2 title
                      </button>
                    </div>
                  </div>
                ) : typeOfComponentToInsertToSection === "h3" ? (
                  <div>
                    <TextField
                      id="standard-basic"
                      label="enter your h3 title text"
                      style={{ width: "80%" }}
                      value={h3Text}
                      onChange={(e) => setH3Text(e.target.value)}
                    />
                    <div style={{ margin: "16px 0", position: "relative" }}>
                      {showSuccessCopiedH3Text && (
                        <DoneIcon
                          style={{
                            color: "green",
                            position: "absolute",
                            top: "-17px",
                          }}
                          fontSize="small"
                        />
                      )}
                      <button
                        onClick={copyH3TextFunc}
                        style={{ cursor: "pointer" }}
                      >
                        copy h3 title
                      </button>
                    </div>
                  </div>
                ) : typeOfComponentToInsertToSection === "h4" ? (
                  <div>
                    <TextField
                      id="standard-basic"
                      label="enter your h4 title text"
                      style={{ width: "80%" }}
                      value={h4Text}
                      onChange={(e) => setH4Text(e.target.value)}
                    />
                    <div style={{ margin: "16px 0", position: "relative" }}>
                      {showSuccessCopiedH4Text && (
                        <DoneIcon
                          style={{
                            color: "green",
                            position: "absolute",
                            top: "-17px",
                          }}
                          fontSize="small"
                        />
                      )}
                      <button
                        onClick={copyH4TextFunc}
                        style={{ cursor: "pointer" }}
                      >
                        copy h4 title
                      </button>
                    </div>
                  </div>
                ) : typeOfComponentToInsertToSection === "list" ? (
                  <div>
                    <div className="popupInputsContainer__sectionWrapper">
                      <p>How many list items would you like to display? </p>
                      <div className="popupInputsContainer__wrapper">
                        <TextField
                          type="number"
                          id="standard-basic"
                          label="type a number"
                          style={{ width: "80%" }}
                          value={amountOfListItems}
                          onChange={handleOnChangeAmountOfListItems}
                        />
                      </div>
                    </div>

                    {Array.from(Array(amountOfListItems)).map((c, index) => (
                      <div
                        key={index}
                        style={{
                          margin: "12px 0",
                          padding: "10px",
                          border: "1px solid #eee",
                        }}
                      >
                        <p style={{ color: "lightgray" }}>
                          list item {index + 1}
                        </p>
                        <div>
                          <TextField
                            id="standard-basic"
                            label="type of icon ('x', 'check' or 'dot')"
                            style={{ width: "80%" }}
                            id={`merch-zone-footer-content__list-item-icon-type-${index}`}
                            onChange={pushObjsOfItemListToArr}
                          />
                        </div>
                        <div>
                          <TextField
                            id="standard-basic"
                            label="enter your <li> text"
                            style={{ width: "80%" }}
                            id={`merch-zone-footer-content__list-item-text-${index}`}
                            onChange={pushObjsOfItemListToArr}
                          />
                        </div>
                      </div>
                    ))}
                    <div style={{ position: "relative", marginTop: "20px" }}>
                      {showSuccessCopiedListCode && (
                        <DoneIcon
                          style={{
                            color: "green",
                            position: "absolute",
                            top: "-17px",
                          }}
                          fontSize="small"
                        />
                      )}
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={copyListCodeFunc}
                      >
                        copy list code
                      </button>
                    </div>
                  </div>
                ) : typeOfComponentToInsertToSection === "img" ? (
                  <div>
                    <div>
                      <TextField
                        id="standard-basic"
                        label="img alt"
                        style={{ width: "80%" }}
                        value={imgAlt}
                        onChange={(e) => setImgAlt(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        id="standard-basic"
                        label="img url"
                        style={{ width: "80%" }}
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                      />
                    </div>
                    <div style={{ position: "relative", marginTop: "20px" }}>
                      {showSuccessCopiedImgCode && (
                        <DoneIcon
                          style={{
                            color: "green",
                            position: "absolute",
                            top: "-17px",
                          }}
                          fontSize="small"
                        />
                      )}
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={copyImgCodeFunc}
                      >
                        copy img code
                      </button>
                    </div>
                  </div>
                ) : typeOfComponentToInsertToSection === "button" ? (
                  <div>
                    <div>
                      <TextField
                        id="standard-basic"
                        label="button text"
                        style={{ width: "80%" }}
                        value={btnText}
                        onChange={(e) => setBtnText(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        id="standard-basic"
                        label="img url"
                        style={{ width: "80%" }}
                        value={btnLinkUrl}
                        onChange={(e) => setBtnLinkUrl(e.target.value)}
                      />
                    </div>
                    <div style={{ position: "relative", marginTop: "20px" }}>
                      {showSuccessCopiedBtnCode && (
                        <DoneIcon
                          style={{
                            color: "green",
                            position: "absolute",
                            top: "-17px",
                          }}
                          fontSize="small"
                        />
                      )}
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={copyBtnCodeFunc}
                      >
                        copy button code
                      </button>
                    </div>
                  </div>
                ) : typeOfComponentToInsertToSection === "table" ? (
                  <div style={{ marginTop: "20px" }}>
                    <p>
                      Please copy the table code and edit in the code editor
                    </p>
                    <div style={{ position: "relative", marginTop: "20px" }}>
                      {showSuccessCopiedTableCode && (
                        <DoneIcon
                          style={{
                            color: "green",
                            position: "absolute",
                            top: "-17px",
                          }}
                          fontSize="small"
                        />
                      )}
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={copyTableCodeFunc}
                      >
                        copy button code
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* ----- */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
