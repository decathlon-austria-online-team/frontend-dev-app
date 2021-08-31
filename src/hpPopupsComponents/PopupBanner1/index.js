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

export default function PopupBanner1(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  get input states and on change func


  // left side 
  const [leftSide1ImgSrc, setLeftSide1ImgSrc] = useState("");
  const leftSide1ImgSrcHandleOnChange = (e) => {
    setLeftSide1ImgSrc(e.target.value);
  };
  const [leftSide1Title, setLeftSide1Title] = useState("");
  const leftSide1TitleHandleOnChange = (e) => {
    setLeftSide1Title(e.target.value);
  };
  const [leftSide1Text, setLeftSide1Text] = useState("");
  const leftSide1TextHandleOnChange = (e) => {
    setLeftSide1Text(e.target.value);
  };
  const [leftSide1BtnText, setLeftSide1BtnText] = useState("");
  const leftSide1BtnTextHandleOnChange = (e) => {
    setLeftSide1BtnText(e.target.value);
  };
  const [leftSide1BtnLinkUrl, setLeftSide1BtnLinkUrl] = useState("");
  const leftSide1BtnLinkUrlHandleOnChange = (e) => {
    setLeftSide1BtnLinkUrl(e.target.value);
  };

  // right Side1 top
  const [rightSide1TopImgSrc, setRightSide1TopImgSrc] = useState("");
  const rightSide1TopImgSrcHandleOnChange = (e) => {
    setRightSide1TopImgSrc(e.target.value);
  };
  const [rightSide1TopTitle, setRightSide1TopTitle] = useState("");
  const rightSide1TopTitleHandleOnChange = (e) => {
    setRightSide1TopTitle(e.target.value);
  };
  const [rightSide1TopLinkText, setRightSide1TopLinkText] = useState("");
  const rightSide1TopLinkTextHandleOnChange = (e) => {
    setRightSide1TopLinkText(e.target.value);
  };
  const [rightSide1TopLinkUrl, setRightSide1TopLinkUrl] = useState("");
  const rightSide1TopLinkUrlHandleOnChange = (e) => {
    setRightSide1TopLinkUrl(e.target.value);
  };

  // right Side1 bottom
  const [rightSide1BottomImgSrc, setRightSide1BottomImgSrc] = useState("");
  const rightSide1BottomImgSrcHandleOnChange = (e) => {
    setRightSide1BottomImgSrc(e.target.value);
  };
  const [rightSide1BottomTitle, setRightSide1BottomTitle] = useState("");
  const rightSide1BottomTitleHandleOnChange = (e) => {
    setRightSide1BottomTitle(e.target.value);
  };
  const [rightSide1BottomLinkText, setRightSide1BottomLinkText] = useState("");
  const rightSide1BottomLinkTextHandleOnChange = (e) => {
    setRightSide1BottomLinkText(e.target.value);
  };
  const [rightSide1BottomLinkUrl, setRightSide1BottomLinkUrl] = useState("");
  const rightSide1BottomLinkUrlHandleOnChange = (e) => {
    setRightSide1BottomLinkUrl(e.target.value);
  };


  // MOBILE IMGs
  const [mobileImgSrc1, setMobileImgSrc1] = useState("");
  const mobileImgSrc1HandleOnChange = (e) => {
    setMobileImgSrc1(e.target.value);
  };

  const [mobileImgSrc2, setMobileImgSrc2] = useState("");
  const mobileImgSrc2HandleOnChange = (e) => {
    setMobileImgSrc2(e.target.value);
  };



  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);

    if(props.userDataObjFromSheet.languageType === "LTR") {
      setCodeOfComponent(`
  

      <!-- ******************* START HP TOP BANNER MOBILE AND DESKTOP ******************* -->
  
      <style>
        .newHpContainer {
          position: relative;
          font-family: Roboto-Condensed, Arial, Helvetica, sans-serif;
        }
        
        .slider-container {
          display: flex;
          height: 550px;
          background-color: lightgray;
          color: #fff;
          position: relative;
        }
        .left-side {
          flex: 1;
          background: linear-gradient(
              to left,
              rgba(0, 72, 118, 0.1) 48%,
              rgba(0, 72, 118, 0.8) 
            ),
            url("${leftSide1ImgSrc}"); 
           background-size: cover;
           background-position: left;
           position: relative;
        }
        
        .left-side__content {
          width: 75%;
          padding: 10px;
          position: absolute;
          top: 40%;
          left: 4%;
        }
        
        .left-side__content .left-side__content--title {
          text-transform: uppercase !important;
          margin-bottom: 8px;
          font-style: normal !important;
          font-weight: 500 !important;
        }
        
        .left-side__content .left-side__content--title p {
          margin: 0;
          color: #fff !important;
          font-size: 26px !important;
        }
        
        .left-side__content .left-side__content--subtitle {
          width: 80%;
          font-size: 15px;
          color: #fff;
        }
        
        /* Button left side styles*/
        .left-side__content--btn {
          background-color: #ffea28;
          color: #333;
          display: block;
          /*color: #fff;*/
          text-align: center;
          padding: 9px;
          margin-top: 30px;
          cursor: pointer;
          font-size: 16px;
          text-transform: uppercase;
          position: relative;
          /*background-color: #0082c3;*/
          border: none;
          width: 170px;
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.4s;
          text-decoration: none;
          overflow: hidden;
        }
        .left-side__content--btn:hover {
          background: #fff;
          box-shadow: 0px 2px 10px 5px #97b1bf;
          color: #000;
        }
        
        .left-side__content--btn:after {
          content: "";
          background: #ffea28;
          display: block;
          position: absolute;
          padding-top: 300%;
          padding-left: 350%;
          margin-left: -20px !important;
          margin-top: -120%;
          opacity: 0;
          transition: all 0.8s;
        }
        .left-side__content--btn:active:after {
          padding: 0;
          margin: 0;
          opacity: 1;
          transition: 0s;
        }
        /* END Button left side styles*/
        
        .right-side {
          flex: 0.3;
          display: none;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .right-side__top {
          height: 50%;
          background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
            url("${rightSide1TopImgSrc}");
          background-size: cover;
          background-position: bottom;
          position: relative;
        }
        
        .right-side__bottom {
          height: 50%;
          background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
            url("${rightSide1BottomImgSrc}");
          background-size: cover;
          background-position: bottom;
          position: relative;
        }
        
        .right-side__top-content,
        .right-side__bottom-content {
          text-align: center;
          padding: 5px;
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
        }
        
        .right-side__top-content h4,
        .right-side__bottom-content h4 {
          font-size: 16px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        
        .right-side__top-content a,
        .right-side__bottom-content a {
          text-decoration: none;
          color: #fff;
          font-size: 13px;
         
        }
        
        .right-side__top-content a:hover,
        .right-side__bottom-content a:hover {
          font-weight: bold;
        }
        
        .mobile-additinal-links-section {
          height: 174px;
          /*border-top: 1px solid lightgray;
          border-bottom: 1px solid lightgray;*/
          display: flex;
          overflow-y: hidden;
          overflow-x: auto;
          justify-content: space-around;
        }
        
        .mobile-additinal-links-section__productContiner {
          /* border: 1px solid green; */
          width: 125px;
          padding: 12px 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        
        .mobile-additinal-links-section__productContiner img {
          width: 82px;
          object-fit: contain;
        }
        .mobile-additinal-links-section__productContiner p {
          text-transform: uppercase;
          font-size: 12px;
          text-align: center;
        }
        
        @media(max-width: 760px) {
            .left-side {
            flex: 1;
            background: linear-gradient(
                to left,
                rgba(0, 72, 118, 0.1) 48%,
                rgba(0, 72, 118, 0.8) 
              ),
              url("${leftSide1ImgSrc}"); 
            background-size: cover;
            background-position: center;
            position: relative;
          }
        }
        
        @media (min-width: 760px) {
        .slider-container {
          height: 76vh;
        }
          .left-side__content .left-side__content--title {
            text-transform: uppercase;
            font-size: 27px;
            margin-bottom: 8px;
          }
          .left-side__content--btn {
            background-color: #ffea28;
            color: #333; 
            display: block;
            /*color: #fff;*/
            text-align: center;
            padding: 10px;
            margin-top: 30px;
            cursor: pointer;
            font-size: 18px;
            text-transform: uppercase;
            position: relative;
            /*background-color: #0082c3;*/
            border: none;
            width: 200px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            text-decoration: none;
            overflow: hidden;
          }
          .right-side {
            display: flex;
          }
          .left-side {
            flex: 0.7;
          }
          .slider-container__2 .left-side {
            flex: 0.7;
          }
        
          .left-side__content {
            width: 50%;
            top: 35%;
          }
        
          .right-side__top-content h4,
          .right-side__bottom-content h4 {
            font-size: 14px;
          }
        
          .mobile-additinal-links-section {
            display: none;
          }
        }
        
        @media (min-width: 1200px) {
          .left-side__content .left-side__content--title {
            text-transform: uppercase;
            font-size: 32px;
            margin-bottom: 8px;
          }
          .left-side__content--btn {
            background-color: #ffea28;
            color: #333;
            display: block;
            /*color: #fff;*/
            text-align: center;
            padding: 10px;
            margin-top: 30px;
            cursor: pointer;
            font-size: 20px;
            text-transform: uppercase;
            position: relative;
            /*background-color: #0082c3;*/
            border: none;
            width: 240px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            text-decoration: none;
            overflow: hidden;
          }
        
          .right-side__top-content h4,
          .right-side__bottom-content h4 {
            font-size: 16px;
          }
        
          .left-side__content .left-side__content--title p {
            font-size: 28px !important;
          }
        }
        </style>
        
            <div class="newHpContainer">
              <!-- START BANNER -->
              <div class="slider-container slider-container__1">
                <div class="left-side">
                  <div class="left-side__content">
                    <h2 class="left-side__content--title">
                      <p>${leftSide1Title}</p>
                      <p></p>
                    </h2>
                    <p class="left-side__content--subtitle">${leftSide1Text}</p>
                    <a
                      href="${leftSide1BtnLinkUrl}"
                      class="left-side__content--btn"
                      >${leftSide1BtnText}</a
                    >
                  </div>
                </div>
                <div class="right-side">
                  <div class="right-side__top">
                    <div class="right-side__top-content">
                      <h4>${rightSide1TopTitle}</h4>
                      <a
                        href="${rightSide1TopLinkUrl}"
                        >${rightSide1TopLinkText} →</a
                      >
                    </div>
                  </div>
                  <div class="right-side__bottom">
                    <div class="right-side__bottom-content">
                      <h4>${rightSide1BottomTitle}</h4>
                      <a
                        href="${rightSide1BottomLinkUrl}"
                        >${rightSide1BottomLinkText} →</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- END BANNER -->
        
          </div>
          <!-- END .newHpContainer-->
        
          <!-- START mobile additional products -->
            <div class="mobile-additinal-links-section">
        
              <div class="mobile-additinal-links-section__productContiner">
                <a
                  href="${rightSide1TopLinkUrl}"
                >
                <img
                src="${mobileImgSrc1}"
                alt="${rightSide1TopTitle}"
              />
                </a>
                <p>${rightSide1TopTitle}</p>
              </div>
        
        
              <div class="mobile-additinal-links-section__productContiner">
                <a
                href="${rightSide1BottomLinkUrl}"
                >
                <img
                src="${mobileImgSrc2}"
                alt="${rightSide1BottomTitle}"
              />
                </a>
                <p>${rightSide1BottomTitle}</p>
              </div>
            </div>
            <!-- END mobile additional products -->
        
        
        
        <!-- ******************* END HP TOP BANNER MOBILE AND DESKTOP ******************* -->
            
            
      `);
    } else if(props.userDataObjFromSheet.languageType === "RTL") {
      setCodeOfComponent(`
  


      <!-- ******************* START HP TOP BANNER MOBILE AND DESKTOP ******************* -->
  
      <style>
        .newHpContainer {
          position: relative;
          font-family: Roboto-Condensed, Arial, Helvetica, sans-serif;
        }
        
        .slider-container {
          display: flex;
          height: 550px;
          background-color: lightgray;
          color: #fff;
          position: relative;
        }
        .left-side {
          flex: 1;
          background: linear-gradient(
              to left,
              rgba(0, 72, 118, 0.1) 48%,
              rgba(0, 72, 118, 0.8) 
            ),
            url("${leftSide1ImgSrc}"); 
           background-size: cover;
           background-position: left;
           position: relative;
        }
        
        .left-side__content {
          width: 75%;
          padding: 10px;
          position: absolute;
          top: 40%;
          left: 4%;
        }
        
        .left-side__content .left-side__content--title {
          text-transform: uppercase !important;
          margin-bottom: 8px;
          font-style: normal !important;
          font-weight: 500 !important;
        }
        
        .left-side__content .left-side__content--title p {
          margin: 0;
          color: #fff !important;
          font-size: 26px !important;
        }
        
        .left-side__content .left-side__content--subtitle {
          width: 80%;
          font-size: 15px;
          color: #fff;
        }
        
        /* Button left side styles*/
        .left-side__content--btn {
          background-color: #ffea28;
          color: #333;
          display: block;
          /*color: #fff;*/
          text-align: center;
          padding: 9px;
          margin-top: 30px;
          cursor: pointer;
          font-size: 16px;
          text-transform: uppercase;
          position: relative;
          /*background-color: #0082c3;*/
          border: none;
          width: 170px;
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.4s;
          text-decoration: none;
          overflow: hidden;
        }
        .left-side__content--btn:hover {
          background: #fff;
          box-shadow: 0px 2px 10px 5px #97b1bf;
          color: #000;
        }
        
        .left-side__content--btn:after {
          content: "";
          background: #ffea28;
          display: block;
          position: absolute;
          padding-top: 300%;
          padding-left: 350%;
          margin-left: -20px !important;
          margin-top: -120%;
          opacity: 0;
          transition: all 0.8s;
        }
        .left-side__content--btn:active:after {
          padding: 0;
          margin: 0;
          opacity: 1;
          transition: 0s;
        }
        /* END Button left side styles*/
        
        .right-side {
          flex: 0.3;
          display: none;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .right-side__top {
          height: 50%;
          background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
            url("${rightSide1TopImgSrc}");
          background-size: cover;
          background-position: bottom;
          position: relative;
        }
        
        .right-side__bottom {
          height: 50%;
          background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
            url("${rightSide1BottomImgSrc}");
          background-size: cover;
          background-position: bottom;
          position: relative;
        }
        
        .right-side__top-content,
        .right-side__bottom-content {
          text-align: center;
          padding: 5px;
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
        }
        
        .right-side__top-content h4,
        .right-side__bottom-content h4 {
          font-size: 16px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        
        .right-side__top-content a,
        .right-side__bottom-content a {
          text-decoration: none;
          color: #fff;
          font-size: 13px;
         
        }
        
        .right-side__top-content a:hover,
        .right-side__bottom-content a:hover {
          font-weight: bold;
        }
        
        .mobile-additinal-links-section {
          height: 174px;
          /*border-top: 1px solid lightgray;
          border-bottom: 1px solid lightgray;*/
          display: flex;
          overflow-y: hidden;
          overflow-x: auto;
          justify-content: space-around;
        }
        
        .mobile-additinal-links-section__productContiner {
          /* border: 1px solid green; */
          width: 125px;
          padding: 12px 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        
        .mobile-additinal-links-section__productContiner img {
          width: 82px;
          object-fit: contain;
        }
        .mobile-additinal-links-section__productContiner p {
          text-transform: uppercase;
          font-size: 12px;
          text-align: center;
        }
        
        @media(max-width: 760px) {
            .left-side {
            flex: 1;
            background: linear-gradient(
                to left,
                rgba(0, 72, 118, 0.1) 48%,
                rgba(0, 72, 118, 0.8) 
              ),
              url("${leftSide1ImgSrc}"); 
            background-size: cover;
            background-position: center;
            position: relative;
          }
        }
        
        @media (min-width: 760px) {
        .slider-container {
          height: 76vh;
        }
          .left-side__content .left-side__content--title {
            text-transform: uppercase;
            font-size: 27px;
            margin-bottom: 8px;
          }
          .left-side__content--btn {
            background-color: #ffea28;
            color: #333; 
            display: block;
            /*color: #fff;*/
            text-align: center;
            padding: 10px;
            margin-top: 30px;
            cursor: pointer;
            font-size: 18px;
            text-transform: uppercase;
            position: relative;
            /*background-color: #0082c3;*/
            border: none;
            width: 200px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            text-decoration: none;
            overflow: hidden;
          }
          .right-side {
            display: flex;
          }
          .left-side {
            flex: 0.7;
          }
          .slider-container__2 .left-side {
            flex: 0.7;
          }
        
          .left-side__content {
            width: 50%;
            top: 35%;
          }
        
          .right-side__top-content h4,
          .right-side__bottom-content h4 {
            font-size: 14px;
          }
        
          .mobile-additinal-links-section {
            display: none;
          }
        }
        
        @media (min-width: 1200px) {
          .left-side__content .left-side__content--title {
            text-transform: uppercase;
            font-size: 32px;
            margin-bottom: 8px;
          }
          .left-side__content--btn {
            background-color: #ffea28;
            color: #333;
            display: block;
            /*color: #fff;*/
            text-align: center;
            padding: 10px;
            margin-top: 30px;
            cursor: pointer;
            font-size: 20px;
            text-transform: uppercase;
            position: relative;
            /*background-color: #0082c3;*/
            border: none;
            width: 240px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
            text-decoration: none;
            overflow: hidden;
          }
        
          .right-side__top-content h4,
          .right-side__bottom-content h4 {
            font-size: 16px;
          }
        
          .left-side__content .left-side__content--title p {
            font-size: 28px !important;
          }
        }

        /* START RTL CSS OVERRIDE */
        .left-side__content {
            left: auto;
            right: 4%;
        }
        /* END RTL CSS OVERRIDE */
        </style>
        
            <div class="newHpContainer" dir="rtl">
              <!-- START BANNER -->
              <div class="slider-container slider-container__1">
                <div class="left-side">
                  <div class="left-side__content">
                    <h2 class="left-side__content--title">
                      <p>${leftSide1Title}</p>
                      <p></p>
                    </h2>
                    <p class="left-side__content--subtitle">${leftSide1Text}</p>
                    <a
                      href="${leftSide1BtnLinkUrl}"
                      class="left-side__content--btn"
                      >${leftSide1BtnText}</a
                    >
                  </div>
                </div>
                <div class="right-side">
                  <div class="right-side__top">
                    <div class="right-side__top-content">
                      <h4>${rightSide1TopTitle}</h4>
                      <a
                        href="${rightSide1TopLinkUrl}"
                        >${rightSide1TopLinkText} ←</a
                      >
                    </div>
                  </div>
                  <div class="right-side__bottom">
                    <div class="right-side__bottom-content">
                      <h4>${rightSide1BottomTitle}</h4>
                      <a
                        href="${rightSide1BottomLinkUrl}"
                        >${rightSide1BottomLinkText} ←</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- END BANNER -->
        
          </div>
          <!-- END .newHpContainer-->
        
          <!-- START mobile additional products -->
            <div class="mobile-additinal-links-section">
        
              <div class="mobile-additinal-links-section__productContiner">
                <a
                  href="${rightSide1TopLinkUrl}"
                >
                <img
                src="${mobileImgSrc1}"
                alt="${rightSide1TopTitle}"
              />
                </a>
                <p>${rightSide1TopTitle}</p>
              </div>
        
        
              <div class="mobile-additinal-links-section__productContiner">
                <a
                href="${rightSide1BottomLinkUrl}"
                >
                <img
                src="${mobileImgSrc2}"
                alt="${rightSide1BottomTitle}"
              />
                </a>
                <p>${rightSide1BottomTitle}</p>
              </div>
            </div>
            <!-- END mobile additional products -->
        
        
        
        <!-- ******************* END HP TOP BANNER MOBILE AND DESKTOP ******************* -->
            
            
            
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
                  left side
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="background image src"
                    style={{ width: "80%" }}
                    onChange={leftSide1ImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title text"
                    style={{ width: "80%" }}
                    onChange={leftSide1TitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="subtitle text"
                    style={{ width: "80%" }}
                    onChange={leftSide1TextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="call to action button text"
                    style={{ width: "80%" }}
                    onChange={leftSide1BtnTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="call to action button link url"
                    style={{ width: "80%" }}
                    onChange={leftSide1BtnLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  right side top
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="background image src"
                    style={{ width: "80%" }}
                    onChange={rightSide1TopImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title text"
                    style={{ width: "80%" }}
                    onChange={rightSide1TopTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="call to action link text"
                    style={{ width: "80%" }}
                    onChange={rightSide1TopLinkTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="call to action link url"
                    style={{ width: "80%" }}
                    onChange={rightSide1TopLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  right side bottom
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="background image src"
                    style={{ width: "80%" }}
                    onChange={rightSide1BottomImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title text"
                    style={{ width: "80%" }}
                    onChange={rightSide1BottomTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="call to action link text"
                    style={{ width: "80%" }}
                    onChange={rightSide1BottomLinkTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="call to action link url"
                    style={{ width: "80%" }}
                    onChange={rightSide1BottomLinkUrlHandleOnChange}
                  />
                </div>
              </div>



              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  mobile - product images
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label={`image 1 src (${rightSide1TopTitle})`}
                    style={{ width: "80%" }}
                    onChange={mobileImgSrc1HandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label={`image 2 src (${rightSide1BottomTitle})`}
                    style={{ width: "80%" }}
                    onChange={mobileImgSrc2HandleOnChange}
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
