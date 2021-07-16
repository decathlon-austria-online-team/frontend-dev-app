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

export default function PopupHpMainBanner(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  get input states and on change func

  // slider 1 parameters
  // left side 1
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
  const [rightSide1BottomLinkUrl, setRightSide1BottomLinkUrl] = useState("");
  const rightSide1BottomLinkUrlHandleOnChange = (e) => {
    setRightSide1BottomLinkUrl(e.target.value);
  };

  // slider 2 parameters
  // left side 2
  const [leftSide2ImgSrc, setLeftSide2ImgSrc] = useState("");
  const leftSide2ImgSrcHandleOnChange = (e) => {
    setLeftSide2ImgSrc(e.target.value);
  };
  const [leftSide2Title, setLeftSide2Title] = useState("");
  const leftSide2TitleHandleOnChange = (e) => {
    setLeftSide2Title(e.target.value);
  };
  const [leftSide2Text, setLeftSide2Text] = useState("");
  const leftSide2TextHandleOnChange = (e) => {
    setLeftSide2Text(e.target.value);
  };
  const [leftSide2BtnText, setLeftSide2BtnText] = useState("");
  const leftSide2BtnTextHandleOnChange = (e) => {
    setLeftSide2BtnText(e.target.value);
  };
  const [leftSide2BtnLinkUrl, setLeftSide2BtnLinkUrl] = useState("");
  const leftSide2BtnLinkUrlHandleOnChange = (e) => {
    setLeftSide2BtnLinkUrl(e.target.value);
  };

  // right Side2 top
  const [rightSide2TopImgSrc, setRightSide2TopImgSrc] = useState("");
  const rightSide2TopImgSrcHandleOnChange = (e) => {
    setRightSide2TopImgSrc(e.target.value);
  };
  const [rightSide2TopTitle, setRightSide2TopTitle] = useState("");
  const rightSide2TopTitleHandleOnChange = (e) => {
    setRightSide2TopTitle(e.target.value);
  };
  const [rightSide2TopLinkUrl, setRightSide2TopLinkUrl] = useState("");
  const rightSide2TopLinkUrlHandleOnChange = (e) => {
    setRightSide2TopLinkUrl(e.target.value);
  };

  // right Side2 bottom
  const [rightSide2BottomImgSrc, setRightSide2BottomImgSrc] = useState("");
  const rightSide2BottomImgSrcHandleOnChange = (e) => {
    setRightSide2BottomImgSrc(e.target.value);
  };
  const [rightSide2BottomTitle, setRightSide2BottomTitle] = useState("");
  const rightSide2BottomTitleHandleOnChange = (e) => {
    setRightSide2BottomTitle(e.target.value);
  };
  const [rightSide2BottomLinkUrl, setRightSide2BottomLinkUrl] = useState("");
  const rightSide2BottomLinkUrlHandleOnChange = (e) => {
    setRightSide2BottomLinkUrl(e.target.value);
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

  const [mobileImgSrc3, setMobileImgSrc3] = useState("");
  const mobileImgSrc3HandleOnChange = (e) => {
    setMobileImgSrc3(e.target.value);
  };

  const [mobileImgSrc4, setMobileImgSrc4] = useState("");
  const mobileImgSrc4HandleOnChange = (e) => {
    setMobileImgSrc4(e.target.value);
  };

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(`
   <!-- ******************* START HP TOP BANNER MOBILE AND DESKTOP ******************* -->



</div>

<!--
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
<link
  rel="stylesheet"
  href="https://unpkg.com/swiper/swiper-bundle.min.css"
/>
-->
<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>



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

.pagination {
    top: 530px;
}


.pagination-start {
  background-color: #0082c3;
}

.swiper-pagination > .swiper-pagination-bullet {
    opacity: 1;
    /*border: white solid 1px;*/
    background-color: white;
}
.swiper-pagination > .swiper-pagination-bullet-active {
    background-color: #0082c3;
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
  top: 45%;
  left: 4%;
}

.left-side__content .left-side__content--title {
  text-transform: uppercase;
  font-size: 26px;
  margin-bottom: 8px;
}

.left-side__content .left-side__content--title p {
  margin: 0;
}

.left-side__content .left-side__content--subtitle {
  width: 80%;
  font-size: 15px;
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

.slider-container__2 .left-side {
  flex: 1;
  background: linear-gradient(
      to left,
      rgba(0, 72, 118, 0.1) 48%,
      rgba(0, 72, 118, 0.8) 
    ),
    url("${leftSide2ImgSrc}");
  background-size: cover;
  position: relative;
  background-position: center;
}

.slider-container__2 .right-side__top {
  height: 50%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("${rightSide2TopImgSrc}");
  background-size: cover;
  background-position: bottom;
  position: relative;
}

.slider-container__2 .right-side__bottom {
  height: 50%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url("${rightSide2BottomImgSrc}");
  background-size: cover;
  background-position: bottom;
  position: relative;
}

.mobile-additinal-links-section {
  height: 140px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
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
  width: 70px;
  object-fit: contain;
}
.mobile-additinal-links-section__productContiner p {
  text-transform: uppercase;
  font-size: 10px;
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
    background-position: left;
    position: relative;
  }
}

@media (min-width: 760px) {

.slider-container {
  height: 76vh;
}

.pagination {
    top: 72vh;
}

  .slider-container__1,
  .slider-container__2 {
    /*transition: all 400ms ease-out;*/
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
    top: 25%;
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
}

</style>

    <div class="newHpContainer">
      <div class="swiper-container">
        <div class="swiper-wrapper">


      <!-- START .slider 1-->
      <div class="slider-container slider-container__1 swiper-slide">
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
                >Jetzt entdecken →</a
              >
            </div>
          </div>
          <div class="right-side__bottom">
            <div class="right-side__bottom-content">
              <h4>${rightSide1BottomTitle}</h4>
              <a
                href="${rightSide1BottomLinkUrl}"
                >Jetzt entdecken →</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- END .slider 1-->

      <!-- START .slider 2-->
      <div class="slider-container slider-container__2 swiper-slide">
        <div class="left-side">
          <div class="left-side__content">
            <h2 class="left-side__content--title">
              <p>${leftSide2Title}</p>
              <p></p>
            </h2>
            <p class="left-side__content--subtitle left-side__content--subtitle-title">
              ${leftSide2Text}
            </p>
            <a
              href="${leftSide2BtnLinkUrl}"
              class="left-side__content--btn"
              >${leftSide2BtnText}</a
            >
          </div>
        </div>
        <div class="right-side">
          <div class="right-side__top">
            <div class="right-side__top-content">
              <h4>${rightSide2TopTitle}</h4>
              <a
                href="${rightSide2TopLinkUrl}"
                >Jetzt entdecken →</a
              >
            </div>
          </div>
          <div class="right-side__bottom">
            <div class="right-side__bottom-content">
              <h4>${rightSide2BottomTitle}</h4>
              <a
                href="${rightSide2BottomLinkUrl}"
                >Jetzt entdecken →</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- END .slider 2-->
     </div> 
     <!-- end .swiper-wrapper -->

     <!-- Add Pagination -->
    <div class="swiper-pagination pagination"></div>
    </div>
    <!-- end .swiper-container -->
      
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
        alt="${rightSide1TopTitle} Foto"
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
        alt="${rightSide1BottomTitle} Foto"
      />
        </a>

        <p>${rightSide1BottomTitle}</p>
      </div>
      <div class="mobile-additinal-links-section__productContiner">
        <a
        href="${rightSide2TopLinkUrl}"
        >
        <img
        src="${mobileImgSrc3}"
        alt="${rightSide2TopTitle} Foto"
      />
        </a>

        <p>${rightSide2TopTitle}</p>
      </div>
      <div class="mobile-additinal-links-section__productContiner">
        <a
        href="${rightSide2BottomLinkUrl}"
        >
        <img
        src="${mobileImgSrc4}"
        alt="${rightSide2BottomTitle} Foto"
      />
        </a>

        <p>${rightSide2BottomTitle}</p>
      </div>
    </div>
    <!-- END mobile additional products -->

<!-- START blue banner -->
    <div class="hadar-blue-banner-container">
      <div class="hadar-blue-banner-box">
        <div class="hadar-blue-banner-box__icon">
          <span
            class="icon-v2 icon-delivery-truck"
            style="font-family: DecathlonCubeV2 !important"
          ></span>
        </div>
        <div class="hadar-blue-banner-box__text">
          <a
            href="/lieferung.html#1"
            id="click-collect"
            style="text-decoration: none; color: #fff"
            onclick="Osmose.component.Analytics.analyticsTrackEvent(this, 'ProductEvent', 'Footer', 'Service Zone', 'Free Shipping');"
          >
            <span> Standard</span><br />
            <strong>Versand 3,95€</strong>
          </a>
        </div>
      </div>
      <div class="hadar-blue-banner-box">
        <div class="hadar-blue-banner-box__icon">
          <span
            class="icon-v2 icon-exchange"
            style="font-family: DecathlonCubeV2 !important"
          ></span>
        </div>
        <div class="hadar-blue-banner-box__text">
          <a
            href="https://www.decathlon.at/ruecksendung.html"
            id="free-returns"
            style="text-decoration: none; color: #fff"
            onclick="Osmose.component.Analytics.analyticsTrackEvent(this, 'ProductEvent', 'Footer', 'Service Zone', 'Free Returns');"
          >
            <span>Teste dein Produkt</span><br />
            <strong>30 Tage</strong>
          </a>
        </div>
      </div>
      <div class="hadar-blue-banner-box">
        <div class="hadar-blue-banner-box__icon">
          <span class="picto-services" id="picto-services-icon"></span>
        </div>
        <div class="hadar-blue-banner-box__text">
          <a
            href="https://www.decathlon.at/services.html"
            id="loyalty"
            style="text-decoration: none; color: #fff"
            onclick="Osmose.component.Analytics.analyticsTrackEvent(this, 'ProductEvent', 'Footer', 'Service Zone', 'Loyalty Card');"
          >
            <span>Entdecke über</span><br />
            <strong>70 Sportarten</strong>
          </a>
        </div>
      </div>
    </div>
      

    <!-- END blue banner -->

    <style>
      .hadar-blue-banner-container {
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

      .hadar-blue-banner-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 32%;
      }

      .hadar-blue-banner-box__text {
        text-align: center;
        font-size: 13px;
        margin-top: 4px;
      }

      .hadar-blue-banner-box__icon span {
        font-size: 22px;
      }

      #picto-services-icon {
        font-family: DecathlonCube !important;
      }
      #picto-services-icon::before {
        content: "\E04E";
        position: relative;
        top: -5px;
      }

      @media (min-width: 760px) {
      }

      @media (min-width: 1200px) {
        .hadar-blue-banner-container {
          justify-content: space-around;
        }
        .hadar-blue-banner-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          max-width: 32%;
        }
        .hadar-blue-banner-box__text {
          text-align: left;
          font-size: 16px;
          margin-top: 0;
          margin-left: 10px;
        }
        .hadar-blue-banner-box__text a {
          text-align: left;
          font-size: 16px;
          margin-top: 0;
        }

        .hadar-blue-banner-box__icon span {
          font-size: 36px;
        }
      }
    </style>



<script>
        var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        
        autoplay: {
          delay: 9000,
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

      });
</script>

<!-- ******************* END HP TOP BANNER MOBILE AND DESKTOP ******************* -->
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
                  desktop slider 1 - left side
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image src"
                    style={{ width: "80%" }}
                    onChange={leftSide1ImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title"
                    style={{ width: "80%" }}
                    onChange={leftSide1TitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="subtitle/text"
                    style={{ width: "80%" }}
                    onChange={leftSide1TextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="button text"
                    style={{ width: "80%" }}
                    onChange={leftSide1BtnTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="button link url"
                    style={{ width: "80%" }}
                    onChange={leftSide1BtnLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  desktop slider 1 - right side top
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image src"
                    style={{ width: "80%" }}
                    onChange={rightSide1TopImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title"
                    style={{ width: "80%" }}
                    onChange={rightSide1TopTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link url"
                    style={{ width: "80%" }}
                    onChange={rightSide1TopLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  desktop slider 1 - right side bottom
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image src"
                    style={{ width: "80%" }}
                    onChange={rightSide1BottomImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title"
                    style={{ width: "80%" }}
                    onChange={rightSide1BottomTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link url"
                    style={{ width: "80%" }}
                    onChange={rightSide1BottomLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  desktop slider 2 - left side
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image src"
                    style={{ width: "80%" }}
                    onChange={leftSide2ImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title"
                    style={{ width: "80%" }}
                    onChange={leftSide2TitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="subtitle/text"
                    style={{ width: "80%" }}
                    onChange={leftSide2TextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="button text"
                    style={{ width: "80%" }}
                    onChange={leftSide2BtnTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="button link url"
                    style={{ width: "80%" }}
                    onChange={leftSide2BtnLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  desktop slider 2 - right side top
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image src"
                    style={{ width: "80%" }}
                    onChange={rightSide2TopImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title"
                    style={{ width: "80%" }}
                    onChange={rightSide2TopTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link url"
                    style={{ width: "80%" }}
                    onChange={rightSide2TopLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  desktop slider 2 - right side bottom
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image src"
                    style={{ width: "80%" }}
                    onChange={rightSide2BottomImgSrcHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title"
                    style={{ width: "80%" }}
                    onChange={rightSide2BottomTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link url"
                    style={{ width: "80%" }}
                    onChange={rightSide2BottomLinkUrlHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  mobile - images
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
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label={`image 3 src (${rightSide2TopTitle})`}
                    style={{ width: "80%" }}
                    onChange={mobileImgSrc3HandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label={`image 4 src (${rightSide2BottomTitle})`}
                    style={{ width: "80%" }}
                    onChange={mobileImgSrc4HandleOnChange}
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
