import React, { useState } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
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

export default function PopupBanner3(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  get input states and on change func


  //left side states
  const [leftSideFirstLineText, setLeftSideFirstLineText] = useState('');
  const leftSideFirstLineTextHandleOnChange = (e) => {
    setLeftSideFirstLineText(e.target.value);
  }

  const [leftSideSecondLineText, setLeftSideSecondLineText] = useState('');
  const leftSideSecondLineTextHandleOnChange = (e) => {
    setLeftSideSecondLineText(e.target.value);
  }

  const [leftSideLinkUrl, setLeftSideLinkUrl] = useState('');
  const leftSideLinkUrlHandleOnChange = (e) => {
    setLeftSideLinkUrl(e.target.value);
  }

  const [leftSideIconHtml, setLeftSideIconHtml] = useState('');
  const leftSideIconHtmlHandleOnChange = (e) => {
    setLeftSideIconHtml(e.target.value); 
  }

    //middle side states
    const [middleSideFirstLineText, setMiddleSideFirstLineText] = useState('');
    const middleSideFirstLineTextHandleOnChange = (e) => {
      setMiddleSideFirstLineText(e.target.value);
    }
  
    const [middleSideSecondLineText, setMiddleSideSecondLineText] = useState('');
    const middleSideSecondLineTextHandleOnChange = (e) => {
      setMiddleSideSecondLineText(e.target.value);
    }
  
    const [middleSideLinkUrl, setMiddleSideLinkUrl] = useState('');
    const middleSideLinkUrlHandleOnChange = (e) => {
      setMiddleSideLinkUrl(e.target.value);
    }
  
    const [middleSideIconHtml, setMiddleSideIconHtml] = useState('');
    const middleSideIconHtmlHandleOnChange = (e) => {
      setMiddleSideIconHtml(e.target.value); 
    }

    //right side states
    const [rightSideFirstLineText, setRightSideFirstLineText] = useState('');
    const rightSideFirstLineTextHandleOnChange = (e) => {
      setRightSideFirstLineText(e.target.value);
    }
  
    const [rightSideSecondLineText, setRightSideSecondLineText] = useState('');
    const rightSideSecondLineTextHandleOnChange = (e) => {
      setRightSideSecondLineText(e.target.value);
    }
  
    const [rightSideLinkUrl, setRightSideLinkUrl] = useState('');
    const rightSideLinkUrlHandleOnChange = (e) => {
      setRightSideLinkUrl(e.target.value);
    }
  
    const [rightSideIconHtml, setRightSideIconHtml] = useState('');
    const rightSideIconHtmlHandleOnChange = (e) => {
      setRightSideIconHtml(e.target.value); 
    }


  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);

    if(props.userDataObjFromSheet.languageType === "LTR") {
      setCodeOfComponent(`
  

     
<!-- ******************* START HP BANNER 3 ******************* -->
<script
src="https://kit.fontawesome.com/68857e56a4.js"
crossorigin="anonymous"
></script>
<style>
    .banner3-container {
      background-color: #0082c3;
      padding: 8px 0;
      color: white;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: nowrap;
      overflow-y: hidden;
      overflow-x: hidden;
    }
    .banner3-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 32%;
    }
    .banner3-box__text {
      text-align: center;
      font-size: 13px;
      margin-top: 4px;
    }
    .banner3-box__icon i {
      font-size: 22px;
    }
    @media (min-width: 1200px) {
      .banner3-container {
        justify-content: space-around;
      }
      .banner3-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        max-width: 32%;
      }
      .banner3-box__text {
        text-align: left;
        font-size: 16px;
        margin-top: 0;
        margin-left: 10px;
      }
      .banner3-box__text a {
        text-align: left;
        font-size: 16px;
        margin-top: 0;
      }
        .banner3-box__icon i {
         font-size: 36px;
        }
    }
  </style>


<div class="banner3-container">
    <div class="banner3-box">
      <div class="banner3-box__icon">
      ${leftSideIconHtml}
      </div>
      <div class="banner3-box__text">
        <a
          href="${leftSideLinkUrl}"
          style="text-decoration: none; color: #fff"
        >
          <span>${leftSideFirstLineText}</span><br />
          <strong>${leftSideSecondLineText}</strong>
        </a>
      </div>
    </div>
    <div class="banner3-box">
      <div class="banner3-box__icon">
      ${middleSideIconHtml}
      </div>
      <div class="banner3-box__text">
        <a
          href="${middleSideLinkUrl}"
          style="text-decoration: none; color: #fff"
        >
          <span>${middleSideFirstLineText}</span><br />
          <strong>${middleSideSecondLineText}</strong>
        </a>
      </div>
    </div>
    <div class="banner3-box">
      <div class="banner3-box__icon">
        ${rightSideIconHtml}
      </div>
      <div class="banner3-box__text">
        <a
          href="${rightSideLinkUrl}"
          style="text-decoration: none; color: #fff"
        >
          <span>${rightSideFirstLineText}</span><br />
          <strong>${rightSideSecondLineText}</strong>
        </a>
      </div>
    </div>
  </div>
  <!-- ******************* END HP BANNER 3 ******************* -->
            
            
      `);
    } else if(props.userDataObjFromSheet.languageType === "RTL") {
      setCodeOfComponent(`
  


      <!-- ******************* START HP BANNER 3 ******************* -->
      <script
      src="https://kit.fontawesome.com/68857e56a4.js"
      crossorigin="anonymous"
      ></script>
      <style>
          .banner3-container {
            background-color: #0082c3;
            padding: 8px 0;
            color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: nowrap;
            overflow-y: hidden;
            overflow-x: hidden;
          }
          .banner3-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 32%;
          }
          .banner3-box__text {
            text-align: center;
            font-size: 13px;
            margin-top: 4px;
          }
          .banner3-box__icon i {
            font-size: 22px;
          }
          @media (min-width: 1200px) {
            .banner3-container {
              justify-content: space-around;
            }
            .banner3-box {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              max-width: 32%;
            }
            .banner3-box__text {
              text-align: left;
              font-size: 16px;
              margin-top: 0;
              margin-left: 10px;
            }
            .banner3-box__text a {
              text-align: left;
              font-size: 16px;
              margin-top: 0;
            }
              .banner3-box__icon i {
               font-size: 36px;
              }
          }

          /* START RTL OVERRIDE CSS */
          @media(min-width: 1200px) {
              .banner3-box__text {
                  text-align: right;
                  margin-left: 0;
                  margin-right: 10px;
              }
          }
          /* END RTL OVERRIDE CSS */
        </style>
      
      
      <div class="banner3-container" dir="rtl">
          <div class="banner3-box">
            <div class="banner3-box__icon">
            ${leftSideIconHtml}
            </div>
            <div class="banner3-box__text">
              <a
                href="${leftSideLinkUrl}"
                style="text-decoration: none; color: #fff"
              >
                <span>${leftSideFirstLineText}</span><br />
                <strong>${leftSideSecondLineText}</strong>
              </a>
            </div>
          </div>
          <div class="banner3-box">
            <div class="banner3-box__icon">
            ${middleSideIconHtml}
            </div>
            <div class="banner3-box__text">
              <a
                href="${middleSideLinkUrl}"
                style="text-decoration: none; color: #fff"
              >
                <span>${middleSideFirstLineText}</span><br />
                <strong>${middleSideSecondLineText}</strong>
              </a>
            </div>
          </div>
          <div class="banner3-box">
            <div class="banner3-box__icon">
              ${rightSideIconHtml}
            </div>
            <div class="banner3-box__text">
              <a
                href="${rightSideLinkUrl}"
                style="text-decoration: none; color: #fff"
              >
                <span>${rightSideFirstLineText}</span><br />
                <strong>${rightSideSecondLineText}</strong>
              </a>
            </div>
          </div>
        </div>
        <!-- ******************* END HP BANNER 3 ******************* -->
            
            
            
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
            <div style={{marginBottom: '35px'}}>
              <p>Icons can be found on the site:<br></br> <a target="_blank" href="fontawesome.com">fontawesome.com</a></p>
            </div>
             
              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  left 
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="text first line"
                    style={{ width: "80%" }}
                    onChange={leftSideFirstLineTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="text second line (bold)"
                    style={{ width: "80%" }}
                    onChange={leftSideSecondLineTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link url"
                    style={{ width: "80%" }}
                    onChange={leftSideLinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="icon html from fontawesome.com"
                    style={{ width: "80%" }}
                    onChange={leftSideIconHtmlHandleOnChange}
                  />
                </div>
              </div>


              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  middle 
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="text first line"
                    style={{ width: "80%" }}
                    onChange={middleSideFirstLineTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="text second line (bold)"
                    style={{ width: "80%" }}
                    onChange={middleSideSecondLineTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link url"
                    style={{ width: "80%" }}
                    onChange={middleSideLinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="icon html from fontawesome.com"
                    style={{ width: "80%" }}
                    onChange={middleSideIconHtmlHandleOnChange}
                  />
                </div>
              </div>


              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  right 
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="text first line"
                    style={{ width: "80%" }}
                    onChange={rightSideFirstLineTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="text second line (bold)"
                    style={{ width: "80%" }}
                    onChange={rightSideSecondLineTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link url"
                    style={{ width: "80%" }}
                    onChange={rightSideLinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="icon html from fontawesome.com"
                    style={{ width: "80%" }}
                    onChange={rightSideIconHtmlHandleOnChange}
                  />
                </div>
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
