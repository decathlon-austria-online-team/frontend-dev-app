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

export default function SimilarCategories(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  get input states and on change func

  /* START SIMILAR CATEGORIES STATES */
  const [chooseTitleRadioBtnsValue, setChooseTitleRadioBtnsValue] =
    useState("german");
  const [valueOfOtherTitle, setValueOfOtherTitle] = useState("");
  console.log("valueOfOtherTitle: ", valueOfOtherTitle);
  const [amountOfLinks, setAmountOfLinks] = useState(0);
  const amountOfLinksHandleOnChange = (e) => {
    if (e.target.value * 1 >= 0) {
      setAmountOfLinks(e.target.value * 1);
    }
  };

  const [arrOfLinkUrlsAndLinkNamesObjs, setArrOfLinkUrlsAndLinkNamesObjs] =
    useState([]);

  const pushObjsToArr = () => {
    let emptyArr = [];
    for (let i = 0; i < amountOfLinks; i++) {
      emptyArr.push({
        categoryName: document.getElementById(`categry-name-${i}`).value,
        categoryUrl: document.getElementById(`categry-url-${i}`).value,
      });
    }
    setArrOfLinkUrlsAndLinkNamesObjs(emptyArr);
  };
  /* END SIMILAR CATEGORIES STATES AND FUNCTION */

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);

    if (props.userDataObjFromSheet.languageType === "LTR") {
      setCodeOfComponent(`

      <!-- ******************* START CROSS LINKS COMPONENT ******************* -->
      <!-- ******** START MOBILE CODE ******** -->
      <style>
        .manual-subcategories-menu-container {
          padding: 20px;
          display: block;
          margin-top: -28px;
        }
      
        #similar-categories-icon {
          margin-right: 8px;
          display: inline-block;
        }
        #similar-categories-icon svg {
          display: inline-block;
          padding-top: 1.4px;
          fill: #0082c3;
        }
      
        .similar-categories-title {
          color: #0082c3;
          text-align: center;
          font-size: 14px;
        }
        .similar-categories-title:hover #similar-categories-icon {
          transform: rotateZ(90deg);
        }
      
        .manual-subcategories-menu {
          /*display: flex;*/
          flex-wrap: wrap;
          justify-content: center;
          margin: auto;
          margin-bottom: 40px;
          max-width: 902px;
          border: 1px solid #fff;
          display: none;
        }
        .similar-categories-title:hover + .manual-subcategories-menu {
          display: flex;
        }
        .manual-subcategories-menu .manual-subcategories-menu-item {
          margin: 20px 2px 10px;
        }
      
        .manual-subcategories-menu .manual-subcategories-menu-item a {
          margin-right: 10px;
          padding: 10px 24px;
          border-radius: 19px;
          border: 1px solid #edeff1;
          background-color: #fff;
          width: auto;
          height: auto;
          text-align: center;
          color: #575d5e;
          font-size: 14px;
          text-decoration: none;
        }
      
        .manual-subcategories-menu .manual-subcategories-menu-item a:hover {
          border-color: #0082c3;
          color: #0082c3;
        }
      
        @media (min-width: 1200px) {
          .manual-subcategories-menu-container {
            display: none;
          }
        }
      </style>
      <div class="manual-subcategories-menu-container">
        <div class="similar-categories-title">
          <span id="similar-categories-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"
                fill="currentColor"
              />
            </svg> </span
          >
          ${
            chooseTitleRadioBtnsValue === "german"
              ? "Ähnliche Kategorien"
              : chooseTitleRadioBtnsValue === "english"
              ? "Similar categories"
              : valueOfOtherTitle
          }
         
        </div>
        <div class="manual-subcategories-menu">
        ${arrOfLinkUrlsAndLinkNamesObjs
          .map(
            (c, i) =>
              `
            <div class="manual-subcategories-menu-item">
              <a href="${c.categoryUrl}">${c.categoryName}</a>
            </div>
              `
          )
          .join("")}
        </div>
      </div>
      <!-- ******** END MOBILE CODE ******** -->
      
      <!-- ******** START DESKTOP CODE ******** -->
      <style>
        .manual-subcategories-menu-container-desktop {
          display: none;
        }
        .similar-categories-title-desktop {
          font-size: 14px;
          margin-right: 15px;
        }
      
        .similar-categories-item-desktop a {
          color: #0082c3;
          font-size: 14px;
          transition: all 0.4s ease-out;
        }
        .similar-categories-item-desktop a:hover {
          color: #004876;
        }
        .similar-categories-item-desktop {
          margin-right: 12px;
        }
      
        @media (min-width: 1200px) {
          .manual-subcategories-menu-container-desktop {
            display: block;
            padding-left: 40px;
          }
        }
      
        @media (min-width: 1800px) {
          .manual-subcategories-menu-container-desktop {
            padding-left: 61px;
          }
        }
      </style>
      <div class="manual-subcategories-menu-container-desktop">
        <span class="similar-categories-title-desktop">          
        ${
          chooseTitleRadioBtnsValue === "german"
            ? "Ähnliche Kategorien"
            : chooseTitleRadioBtnsValue === "english"
            ? "Similar categories"
            : valueOfOtherTitle
        }:</span>
        ${arrOfLinkUrlsAndLinkNamesObjs
          .map(
            (c, i) =>
              `
               <span class="similar-categories-item-desktop"
                 ><a href="${c.categoryUrl}">${c.categoryName}</a></span
               >
                `
          )
          .join("")}
      </div>
      <!-- ******** END DESKTOP CODE ******** -->
      <!-- ******************* END CROSS LINKS COMPONENT ******************* -->
      
            
            
      `);
    } else if (props.userDataObjFromSheet.languageType === "RTL") {
      setCodeOfComponent(`
      This component is still not RTL ready!
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
              <div className="popupInputsContainer__wrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  please choose your title
                </p>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>

                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={chooseTitleRadioBtnsValue}
                    onChange={(e) =>
                      setChooseTitleRadioBtnsValue(e.target.value)
                    }
                  >
                    <FormControlLabel
                      value="german"
                      control={<Radio />}
                      label="Ähnliche Kategorien"
                    />
                    <FormControlLabel
                      value="english"
                      control={<Radio />}
                      label="Similar categories"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="other"
                    />
                  </RadioGroup>
                </FormControl>
                <div>
                  {chooseTitleRadioBtnsValue === "other" ? (
                    <TextField
                      id="standard-basic"
                      label="type your title"
                      style={{ width: "80%" }}
                      value={valueOfOtherTitle}
                      onChange={(e) => setValueOfOtherTitle(e.target.value)}
                    />
                  ) : null}
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  How many cross links would you like to display?
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    type="number"
                    id="standard-basic"
                    label="type a number"
                    style={{ width: "80%" }}
                    value={amountOfLinks}
                    onChange={amountOfLinksHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                {Array.from(Array(amountOfLinks)).map((c, index) => (
                  <div
                    key={index}
                    className="popupInputsContainer__wrapper"
                    style={{ marginBottom: "20px" }}
                  >
                    <div>cross link {index + 1}:</div>
                    <TextField
                      id={`categry-name-${index}`}
                      label="cross link name"
                      style={{ width: "80%" }}
                      onChange={pushObjsToArr}
                    />
                    <TextField
                      id={`categry-url-${index}`}
                      label="cross link URL"
                      style={{ width: "80%" }}
                      onChange={pushObjsToArr}
                    />
                  </div>
                ))}
              </div>

              <div className="popupInputsContainer__wrapper primary-button-container">
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
