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

  const [categorySectionIdNumber, setCategorySectionIdNumber] = useState("");
  const categorySectionIdNumberHandleOnChange = (e) => {
    setCategorySectionIdNumber(e.target.value);
  };

  const [banner1ImgUrl, setBanner1ImgUrl] = useState("");
  const banner1ImgUrlHandleOnChange = (e) => {
    setBanner1ImgUrl(e.target.value);
  };

  const [banner1FirstTitle, setBanner1FirstTitle] = useState("");
  const banner1FirstTitleHandleOnChange = (e) => {
    setBanner1FirstTitle(e.target.value);
  };

  const [banner1SecondBoldTitle, setBanner1SecondBoldTitle] = useState("");
  const banner1SecondBoldTitleHandleOnChange = (e) => {
    setBanner1SecondBoldTitle(e.target.value);
  };

  const [banner1CtaBtnText, setBanner1CtaBtnText] = useState("");
  const banner1CtaBtnTextHandleOnChange = (e) => {
    setBanner1CtaBtnText(e.target.value);
  };

  const [banner1CtaBtnLinkUrl, setBanner1CtaBtnLinkUrl] = useState("");
  const banner1CtaBtnLinkUrlHandleOnChange = (e) => {
    setBanner1CtaBtnLinkUrl(e.target.value);
  };

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(`
    <!-- ***************** START DISPLAY BANNER1 ***************** -->
    <div style="margin: 15px 0">&nbsp;</div>
    <link
      rel="stylesheet"
      href="https://decathlon-source.eu/frontend/sport-pages/code-files/components/banners.css"
    />
    <style>
      .banner1 .banner1__right-side${categorySectionIdNumber} {
        background-image: url("${banner1ImgUrl}") !important;
        background-position: center;
      }
    </style>
    <div class="banner1">
      <div class="banner1__left-side">
        <div class="banner1__left-side--content">
          <p class="banner1__left-side--text banner1__left-side--text1">
            ${banner1FirstTitle}
          </p>
          <p class="banner1__left-side--text banner1__left-side--text2">
            ${banner1SecondBoldTitle}
          </p>
          <a href="${banner1CtaBtnLinkUrl}" class="banner1__left-side--cta">${banner1CtaBtnText}</a>
        </div>
      </div>
      <div class="banner1__right-side banner1__right-side${categorySectionIdNumber}"></div>
    </div>
    <div style="margin: 15px 0">&nbsp;</div>
    <!-- ***************** END DISPLAY BANNER1 ***************** -->
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
                  section id number:
                </p>
                <small>
                  Please give a section id number (this number should be unique
                  only for this section in order to differentiate from the other
                  sections on the page)
                </small>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add section id number"
                    style={{ width: "80%" }}
                    onChange={categorySectionIdNumberHandleOnChange}
                  />
                </div>
              </div>
              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  banner 1:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image src"
                    style={{ width: "80%" }}
                    onChange={banner1ImgUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="first title"
                    style={{ width: "80%" }}
                    onChange={banner1FirstTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="second bold title"
                    style={{ width: "80%" }}
                    onChange={banner1SecondBoldTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="cta btn text"
                    style={{ width: "80%" }}
                    onChange={banner1CtaBtnTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="cta btn link url"
                    style={{ width: "80%" }}
                    onChange={banner1CtaBtnLinkUrlHandleOnChange}
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
