import React, { useState, useEffect } from "react";
import "./index.css";
import data from "../../components/data/products-data.json";
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

  console.log(
    "productObjAccordingToModalCodeGivenByUser: ",
    productObjAccordingToModalCodeGivenByUser
  );

  // FUNCTIONS:
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
              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  modal code
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    type="text"
                    id="standard-basic"
                    label="type here your modal code"
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
            </div>

            {!productObjAccordingToModalCodeGivenByUser &&
              getModalCodeFromUser && (
                <div>
                  can't find product {getModalCodeFromUser} in the products data
                </div>
              )}

            {productObjAccordingToModalCodeGivenByUser && (
              <div class="group-modalcodes__results-container">
                <div>
                  <div
                    className="group-modalcodes__product"
                    style={{
                      //border: "1px solid green",
                      marginBottom: "20px",
                    }}
                  >
                    <div className="group-modalcodes__product-img">
                      <img
                        src={
                          productObjAccordingToModalCodeGivenByUser.image_link
                        }
                      />
                    </div>
                    <div className="group-modalcodes__product-info">
                      <p>
                        Modal code:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {
                            productObjAccordingToModalCodeGivenByUser.de_modelundefined
                          }
                        </span>
                      </p>
                      <p>
                        Name:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {productObjAccordingToModalCodeGivenByUser.title}
                        </span>
                      </p>
                      <p>
                        Brand:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {productObjAccordingToModalCodeGivenByUser.brand}
                        </span>
                      </p>
                      <p>
                        Price:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {productObjAccordingToModalCodeGivenByUser.price[0]}
                        </span>
                      </p>
                    </div>
                  </div>

                  {groupOfProductsUnderSupermodalCode &&
                    groupOfProductsUnderSupermodalCode.map((p) => (
                      <div className="group-modalcodes__product">
                        <div className="group-modalcodes__product-info">
                          <p>
                            {" "}
                            <span
                              style={{ fontWeight: "bold", display: "block" }}
                            >
                              {p.de_modelundefined}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
