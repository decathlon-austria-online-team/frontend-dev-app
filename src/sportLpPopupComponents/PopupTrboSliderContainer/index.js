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

export default function PopupTrboSliderContainer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [trboSliderContainerId, setTrboSliderContainerId] = useState("");

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(`
<!-- ***************** START TRBO SLIDER CONTAINER WITH LOADING ***************** -->
<div id="${trboSliderContainerId}">
  <div id="${trboSliderContainerId}-loading">
    <p class="${trboSliderContainerId}-loading-text">Produkte werden geladen</p>
    <div class="css-spinner clickable" onclick="lda.css.show('ellipsis')">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</div>

<style>
  /*start loading element styles*/
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #ffea28;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

  #${trboSliderContainerId}-loading {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #${trboSliderContainerId}-loading .${trboSliderContainerId}-loading-text {
    color: #0082c3;
  }
  /*end loading element styles*/
  #${trboSliderContainerId} {
    min-height: 454px;
    position: relative;
  }
</style>
<script>
  const trboPlaceholder = document.getElementById("${trboSliderContainerId}");
  const trboLoadingPlaceholder = document.getElementById(
    "${trboSliderContainerId}-loading"
  );
  function loadingFunc() {
    if (trboPlaceholder.children.length === 0) {
      trboLoadingPlaceholder.style.display = "block";
    } else if (trboPlaceholder.children.length > 1) {
      trboLoadingPlaceholder.style.display = "none";
      stopIntervalLoadingPlaceholder();
    }
  }
  let loadingInterval = setInterval(loadingFunc, 400);
  function stopIntervalLoadingPlaceholder() {
    clearInterval(loadingInterval);
  }
</script>

<!-- ***************** END TRBO SLIDER CONTAINER WITH LOADING ***************** -->
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
                  <TextField
                    id="standard-basic"
                    label="add container id name "
                    style={{ width: "80%" }}
                    onChange={(e) => setTrboSliderContainerId(e.target.value)}
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
                  <p style={{ margin: "20px 0", color: "red" }}>
                    please use this id name for trbo:{" "}
                    <span style={{ color: "gray" }}>
                      #{trboSliderContainerId}
                    </span>
                  </p>
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
