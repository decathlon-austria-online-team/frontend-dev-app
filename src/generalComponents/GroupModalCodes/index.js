import React, { useState, useEffect } from "react";
import "./index.css";
import data from "../../components/data/products-data.json";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
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
    width: "90%",
    height: "75%",
  },
}));

export default function GroupModalCodes(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // STATES:
  const [getModalCodeFromUser, setGetModalCodeFromUser] = useState("");
  const [
    productObjAccordingToModalCodeGivenByUser,
    setProductObjAccordingToModalCodeGivenByUser,
  ] = useState("");
  const [
    groupOfProductsUnderSupermodalCode,
    setGroupOfProductsUnderSupermodalCode,
  ] = useState("");
  //----
  const [arrOfModalCodesGivenByTheUser, setArrOfModalCodesGivenByTheUser] =
    useState([]);
  const [
    arrOfObjsFromModalCodesGivenByTheUser,
    setArrOfObjsFromModalCodesGivenByTheUser,
  ] = useState([]);
  const [arrOfObjsWithVariantsProperty, setArrOfObjsWithVariantsProperty] =
    useState([]);
  const [
    arrOfModalCodesGivenByTheUserButNotAvailableInData,
    setArrOfModalCodesGivenByTheUserButNotAvailableInData,
  ] = useState([]);

  const [storeRelevantModalCodesForCopy, setStoreRelevantModalCodesForCopy] =
    useState("");

  const [arrOfAllVariantsModalCodes, setArrOfAllVariantsModalCodes] = useState(
    []
  );

  // FUNCTIONS:
  // store relevant products objs according to modal codes given by the user
  const storeRelProductsObjsAccordingToModalCodesGivenByUser = () => {
    // split all modal codes given by the user and push to an array
    let arr = getModalCodeFromUser.split(" ");
    setArrOfModalCodesGivenByTheUser(arr.filter((e) => e.length > 0));
    // chack availablity of modal codes in data and push the product objs to an new array
    let arrOfObjs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (arr[i] === data[j].de_modelundefined) {
          arrOfObjs.push(data[j]);
        }
      }
    }
    setArrOfObjsFromModalCodesGivenByTheUser(arrOfObjs);
  };
  useEffect(() => {
    storeRelProductsObjsAccordingToModalCodesGivenByUser();
  }, [getModalCodeFromUser]);

  // add variants supermodal arr to each product obj
  const addVariantsSupermodalArrToEachProductObj = () => {
    let arr = [...arrOfObjsFromModalCodesGivenByTheUser];
    let arrVariants = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (arrOfObjsFromModalCodesGivenByTheUser) {
          if (arr[i].item_group_id === data[j].item_group_id) {
            arrVariants.push(data[j]);
            arrVariants = arrVariants.filter(
              (p) => p.item_group_id === arr[i].item_group_id
            );
            arr[i].variants = arrVariants.filter(
              (p) => p.item_group_id === arr[i].item_group_id
            );
          }
        }
      }
    }
    setArrOfObjsWithVariantsProperty(arr);
  };
  useEffect(() => {
    addVariantsSupermodalArrToEachProductObj();
  }, [arrOfObjsFromModalCodesGivenByTheUser]);

  // create array of all modal codes that are not available in data
  const createArrOfNotAvailableProductsInData = () => {
    let arr = [];

    for (let i = 0; i < arrOfModalCodesGivenByTheUser.length; i++) {
      for (let j = 0; j < arrOfObjsFromModalCodesGivenByTheUser.length; j++) {
        if (
          arrOfModalCodesGivenByTheUser[i] ===
          arrOfObjsFromModalCodesGivenByTheUser[j].de_modelundefined
        ) {
          arr.push(arrOfModalCodesGivenByTheUser[i]);
        }
      }
    }
    //array1 = array1.filter(val => !array2.includes(val));
    arr = arrOfModalCodesGivenByTheUser.filter((val) => !arr.includes(val));
    setArrOfModalCodesGivenByTheUserButNotAvailableInData(arr);
  };
  useEffect(() => {
    createArrOfNotAvailableProductsInData();
  }, [arrOfObjsFromModalCodesGivenByTheUser]);

  // ---------#####-------

  // store relevant product obj  according to modal code given by the user
  const storeRelProductObjAccordingToModalCodeGivenByUser = () => {
    let relProduct = data.filter(
      (p) => p.de_modelundefined === getModalCodeFromUser
    );
    setProductObjAccordingToModalCodeGivenByUser(relProduct[0]);
  };
  useEffect(() => {
    storeRelProductObjAccordingToModalCodeGivenByUser();
  }, [getModalCodeFromUser]);

  // group all products under the same supermodal according to modal code given by the user
  const groupAllProductsWithTheSameSupermodal = () => {
    if (productObjAccordingToModalCodeGivenByUser) {
      let groupSupermodals = data.filter(
        (p) =>
          p.item_group_id ===
          productObjAccordingToModalCodeGivenByUser.item_group_id
      );
      setGroupOfProductsUnderSupermodalCode(groupSupermodals);
    }
  };
  useEffect(() => {
    groupAllProductsWithTheSameSupermodal();
  }, [productObjAccordingToModalCodeGivenByUser]);

  // create array of all variants modal code numbers
  const createArrOfAllVariantsModalCodes = () => {
    let arr = [];
    for (let i = 0; i < arrOfObjsWithVariantsProperty.length; i++) {
      for (
        let j = 0;
        j < arrOfObjsWithVariantsProperty[i].variants.length;
        j++
      ) {
        arr.push(
          arrOfObjsWithVariantsProperty[i].variants[j].de_modelundefined
        );
      }
    }
    setArrOfAllVariantsModalCodes(arr);
  };
  useEffect(() => {
    createArrOfAllVariantsModalCodes();
  }, [arrOfObjsWithVariantsProperty]);

  const storeRelevantModalCodesForCopyHandleOnClick = (index) => {
    let modalCodes = document.getElementById(
      `group-modalcodes__modal-codes-group-to-copy${index}`
    ).innerText;
    setStoreRelevantModalCodesForCopy(modalCodes);
    copyToClipFunc();
  };

  // copy to clip func
  const [showSuccessCopied, setShowSuccessCopied] = useState(false);
  const copyToClipFunc = () => {
    setShowSuccessCopied(true);
    copy(storeRelevantModalCodesForCopy);

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
            {/*         
             <img src={props.imgUrl} className="popupImg" />
          */}

            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.text}</p>
            <div className="popupInputsContainer">
              <div
                className="popupInputsContainer__sectionWrapper"
                style={{ borderBottom: "none" }}
              >
                <p className="popupInputsContainer__titleOfInputsGroup">
                  group modal codes under supermodal code
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    type="text"
                    id="standard-basic"
                    label="type here your modal code/codes (separated by a space)"
                    style={{ width: "80%" }}
                    value={getModalCodeFromUser}
                    onChange={(e) => setGetModalCodeFromUser(e.target.value)}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__wrapper primary-button-container">
                {/*
                <Button
                variant="contained"
                color="primary"
                onClick={() => setDisplayResultsToUser(true)}
              >
                Get all the modal codes under this supermodal
              </Button>
              */}
              </div>
              <div
                className="popupInputsContainer__sectionWrapper"
                style={{ borderBottom: "none" }}
              >
                {!productObjAccordingToModalCodeGivenByUser &&
                  getModalCodeFromUser && (
                    <div style={{ marginBottom: "12px" }}>
                      {arrOfModalCodesGivenByTheUserButNotAvailableInData &&
                      arrOfModalCodesGivenByTheUserButNotAvailableInData.length >
                        0 ? (
                        <div>
                          <p>Not available in data (modal code):</p>
                          <ul style={{ listStyle: "none" }}>
                            {arrOfModalCodesGivenByTheUserButNotAvailableInData &&
                              arrOfModalCodesGivenByTheUserButNotAvailableInData.map(
                                (e, i) => <li style={{ color: "red" }}>{e}</li>
                              )}
                          </ul>
                        </div>
                      ) : (
                        <p style={{ color: "green" }}>
                          All the modal codes available in the data{" "}
                        </p>
                      )}
                    </div>
                  )}

                {arrOfObjsWithVariantsProperty &&
                  arrOfObjsWithVariantsProperty.map((obj, i) => (
                    <div className="group-modalcodes__product">
                      <div className="group-modalcodes__product-img">
                        <img src={obj.image_link} />
                      </div>
                      <div className="group-modalcodes__product-content">
                        <p>
                          Modal code:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {obj.de_modelundefined}
                          </span>
                        </p>
                        <p>
                          Name:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {obj.title}
                          </span>
                        </p>
                        <p>
                          Brand:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {obj.brand}
                          </span>
                        </p>
                        <p>
                          Price:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {obj.price[0]}
                          </span>
                        </p>
                      </div>
                      <div className="group-modalcodes__product-supermodal-codes">
                        {/*
                        <button
                        style={{
                          padding: "2px 3px",
                          cursor: "pointer",
                          marginBottom: "4px",
                        }}
                        onClick={() =>
                          storeRelevantModalCodesForCopyHandleOnClick(i)
                        }
                      >
                        copy
                      </button>
                      */}

                        <div
                          id={`group-modalcodes__modal-codes-group-to-copy${i}`}
                        >
                          {obj.variants.map((objv, index) => (
                            <p>{objv.de_modelundefined}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                {arrOfObjsWithVariantsProperty &&
                  arrOfObjsWithVariantsProperty.length > 1 && (
                    <div className="group-modalcodes__product">
                      <div className="group-modalcodes__product-img">
                        {/*
                 <img src="https://contents.mediadecathlon.com/p1177878/k$f18e7f47afa678bbc12cc36abc513e52/skihelm-h-100-kinder-blau.jpg?&f=800x800" />
                */}
                      </div>

                      <div
                        className="group-modalcodes__product-content"
                        style={{ fontWeight: "bold", fontSize: "26px" }}
                      >
                        All modal codes
                      </div>

                      <div className="group-modalcodes__product-supermodal-codes">
                        {arrOfAllVariantsModalCodes.map((p) => (
                          <p>{p}</p>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
