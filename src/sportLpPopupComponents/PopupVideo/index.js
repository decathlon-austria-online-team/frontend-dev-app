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

export default function PopupVideo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [videoSectionId, setVideoSectionId] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoSrc, setVideoSrc] = useState('');

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(`
    <!-- ***************** START VIDEO SECTION ***************** -->
    <style>
      #video-section${videoSectionId} .video-container {
        text-align: center;
      }
      #video-section${videoSectionId} .video-container iframe {
        width: 85%;
        height: 220px;
      }
    
      #video-section${videoSectionId} .video-section__title {
        font-family: "Roboto Condensed", sans-serif;
        color: #242323;
        line-height: 32px;
        padding: 14px 20px;
      }
    
      @media (min-width: 760px) {
        #video-section${videoSectionId} .video-container iframe {
          height: 370px;
        }
    
        #video-section${videoSectionId} .video-section__title {
          line-height: 36px;
        }
      }
    
      @media (min-width: 1200px) {
        #video-section${videoSectionId} .video-container iframe {
          height: 441px;
        }
    
        #video-section1 .video-section__title {
          padding-left: 83px;
        }
      }
    </style>
    
    <div class="video-section" id="video-section${videoSectionId}">
      <h2 class="video-section__title">${videoTitle}</h2>
      <div class="video-container">
        <iframe
          allowfullscreen="allowfullscreen"
          src="${videoSrc}"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div style="margin: 12px 0">&nbsp;</div>
    
    <!-- ***************** END VIDEO SECTION ***************** -->
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
              <div className="popupInputsContainer__wrapper">
                <small>
                Please give a section id number (this number should be unique only for this section in order to differentiate from the other sections on the page)
                </small>
                  <TextField
                    id="standard-basic"
                    label="add id section"
                    style={{ width: "80%" }}
                    onChange={(e) => setVideoSectionId(e.target.value)}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add video title"
                    style={{ width: "80%" }}
                    onChange={(e) => setVideoTitle(e.target.value)}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add video src"
                    style={{ width: "80%" }}
                    onChange={(e) => setVideoSrc(e.target.value)}
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
