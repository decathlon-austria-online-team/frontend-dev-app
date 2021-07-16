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

export default function PopupArticle1(props) {
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

  const [article1ImgUrl, setArticle1ImgUrl] = useState("");
  const article1ImgUrlHandleOnChange = (e) => {
    setArticle1ImgUrl(e.target.value);
  };

  const [article1LabelName, setArticle1LabelName] = useState("");
  const article1LabelNameHandleOnChange = (e) => {
    setArticle1LabelName(e.target.value);
  };

  const [article1Title, setArticle1Title] = useState("");
  const article1TitleHandleOnChange = (e) => {
    setArticle1Title(e.target.value);
  };

  const [article1Text, setArticle1Text] = useState("");
  const article1TextHandleOnChange = (e) => {
    setArticle1Text(e.target.value);
  };

  const [article1BtnText, setArticle1BtnText] = useState("");
  const article1BtnTextHandleOnChange = (e) => {
    setArticle1BtnText(e.target.value);
  };

  const [article1BtnLinkUrl, setArticle1BtnLinkUrl] = useState("");
  const article1BtnLinkUrlHandleOnChange = (e) => {
    setArticle1BtnLinkUrl(e.target.value);
  };

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(`
    <!-- ***************** START DISPLAY ARTICLE1 ***************** -->
    
    <link
      rel="stylesheet"
      href="https://decathlon-source.eu/frontend/sport-pages/code-files/components/articles.css"
    />
    <style>
      .article1 .article1__imgContainer${categorySectionIdNumber} {
        background-image: url("${article1ImgUrl}") !important;
        background-position: center;
      }

    </style>
    <div class="article1">
      <div class="article1__imgContainer article1__imgContainer${categorySectionIdNumber}"></div>
      <div class="article1__content">
        <p class="article1__content--categoryName">${article1LabelName}</p>
        <h3 class="article1__content--title">
          ${article1Title}
        </h3>
        <p class="article1__content--text">
          ${article1Text}
        </p>
        <a href="${article1BtnLinkUrl}" class="article1__content--cta">${article1BtnText}</a>
      </div>
    </div>
    <div style="margin: 12px 0">&nbsp;</div>
    <!-- ***************** END DISPLAY ARTICLE1 ***************** -->
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
                  article 1:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image src"
                    style={{ width: "80%" }}
                    onChange={article1ImgUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="label name"
                    style={{ width: "80%" }}
                    onChange={article1LabelNameHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="title"
                    style={{ width: "80%" }}
                    onChange={article1TitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="text"
                    style={{ width: "80%" }}
                    onChange={article1TextHandleOnChange}
                    multiline={true}
                    rows="6"
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="cta btn text"
                    style={{ width: "80%" }}
                    onChange={article1BtnTextHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="cta btn link url"
                    style={{ width: "80%" }}
                    onChange={article1BtnLinkUrlHandleOnChange}
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
