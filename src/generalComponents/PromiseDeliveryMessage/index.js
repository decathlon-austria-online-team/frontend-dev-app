import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Stack from "@mui/material/Stack";
import copy from "copy-to-clipboard";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import algoliasearch from "algoliasearch/lite";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import DoneIcon from "@material-ui/icons/Done";

// import papaparse:
import { CSVReader } from "react-papaparse";
const buttonRef1 = React.createRef();
const buttonRef2 = React.createRef();
const buttonRef3 = React.createRef();
const buttonRef4 = React.createRef();
const buttonRef5 = React.createRef();
const buttonRef6 = React.createRef();
const buttonRef7 = React.createRef();
const buttonRef8 = React.createRef();
const buttonRef9 = React.createRef();

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

export default function PromiseDeliveryMessage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // copy to clip func
  const [showSuccessCopied, setShowSuccessCopied] = useState(false);
  const [generateCode, setGenerateCode] = useState(false);
  const copyToClipFunc = () => {
    setShowSuccessCopied(true);
    copy(readyScriptCodeAsString);

    setTimeout(function () {
      setShowSuccessCopied(false);
    }, 2000);
  };

  /* start papaparse multiple btns and files functions (test) */
  const handleOpenDialog = (e, btn_ref) => {
    // Note that the ref is set async, so it might be null at some point
    if (btn_ref.current) {
      btn_ref.current.open(e);
    }
  };

  const handleOnFileLoad = (data, setStateOfFileData) => {
    console.log("---------------------------");
    console.log(data);
    setStateOfFileData(data);
    console.log("---------------------------");

    //start execute functions

    //end execute functions
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  /* end papaparse multiple btns and files functions (test) */

  /* start papaparse functions */
  /*
  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data) => {
    console.log("---------------------------");
    console.log(data);
    //setProductDataDirectFromCsv(data);
    console.log("---------------------------");
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  */
  /* end papaparse functions */

  /* ## START STATES AND FUNCTIONS PROMISE DELIVERY MESSAGE ## */
  // ** start "general" states and functions
  const [generalDirectDataFromCsv, setGeneralDirectDataFromCsv] =
    useState(false);
  // ** end "general" states and functions

  // ** start "prios_clickandcollect" states and functions
  const [
    priosClickandcollectDirectDataFromCsv,
    setPriosClickandcollectDirectDataFromCsv,
  ] = useState(false);
  // ** end "prios_clickandcollect" states and functions

  // ** start "prios_delivery" states and functions
  const [priosDeliverytDirectDataFromCsv, setPriosDeliverytDirectDataFromCsv] =
    useState(false);
  // ** end "prios_delivery" states and functions

  // ** start "in_prios_override_clickandcollect" states and functions
  const [
    inPriosOverrideClickandcollectDirectDataFromCsv,
    setInPriosOverrideClickandcollectDirectDataFromCsv,
  ] = useState(false);
  // ** end "in_prios_override_clickandcollect" states and functions

  // ** start "in_prios_override_delivery" states and functions
  const [
    inPriosOverrideDeliverytDirectDataFromCsv,
    setInPriosOverrideDeliverytDirectDataFromCsv,
  ] = useState(false);
  // ** end "in_prios_override_delivery" states and functions

  // ** start "strict_overrides_clickandcollect" states and functions
  const [
    strictOverrideClickandcollectDirectDataFromCsv,
    setStrictOverrideClickandcollectDirectDataFromCsv,
  ] = useState(false);
  // ** end "strict_overrides_clickandcollect" states and functions

  // ** start "strict_overrides_delivery" states and functions
  const [
    strictOverrideDeliveryDirectDataFromCsv,
    setStrictOverrideDeliveryDirectDataFromCsv,
  ] = useState(false);
  // ** end "strict_overrides_delivery" states and functions

  // ** start "general_settings_clickandcollect" states and functions
  const [
    generalSettingsClickandcollectDirectDataFromCsv,
    setGeneralSettingsClickandcollectDirectDataFromCsv,
  ] = useState(false);
  // ** end "general_settings_clickandcollect" states and functions

  // ** start "general_settings_delivery" states and functions
  const [
    generalSettingsDeliveryDirectDataFromCsv,
    setGeneralSettingsDeliveryDirectDataFromCsv,
  ] = useState(false);
  // ** end "general_settings_delivery" states and functions

  // ** start reuseable functions
  //remove first item from array:
  const removeFirstItemInArray = (arr) => {
    return arr.slice(1, arr.length);
  };
  //convert zones string to array string:
  const convertStringToArrayString = (str) => {
    return str
      .split(",")
      .map((e) => e.trim())
      .map((e) => `"${e}"`)
      .toString();
  };
  //convert prio overrides to objects:
  const convertPrioOverridesToObjects = (
    data_direct_from_csv,
    prio_num,
    override_by
  ) => {
    let cuttedArr = removeFirstItemInArray(data_direct_from_csv);
    let objStr;
    let readyObjsStr = "";

    for (let i = 0; i < cuttedArr.length; i++) {
      if (
        cuttedArr[i].data[0] === prio_num &&
        cuttedArr[i].data[1] === override_by
      ) {
        //check if override by product nature or model code and set obj accordingly
        if (override_by === "product-nature") {
          objStr = `
          {
            values: [${convertStringToArrayString(cuttedArr[i].data[2])}],
            override_exeptions_modal_codes: [${convertStringToArrayString(
              cuttedArr[i].data[3]
            )}],
            override_text_message: "${cuttedArr[i].data[4]}",
            override_add_commentBool: ${
              cuttedArr[i].data[5] === "yes" ? true : false
            },
            override_comment_text:
              "${cuttedArr[i].data[6]}",
          }
          `;
        } else if (override_by === "model-code") {
          objStr = `
          {
            values: [${convertStringToArrayString(cuttedArr[i].data[2])}],
            override_exeptions_product_nature: [${convertStringToArrayString(
              cuttedArr[i].data[3]
            )}],
            override_text_message: "${cuttedArr[i].data[4]}",
            override_add_commentBool: ${
              cuttedArr[i].data[5] === "yes" ? true : false
            },
            override_comment_text: "${cuttedArr[i].data[6]}",
          },
          `;
        }

        //check if first obj
        if (readyObjsStr.length === 0) {
          readyObjsStr = readyObjsStr + objStr;
        } else {
          readyObjsStr = readyObjsStr + "," + objStr;
        }
      }
    }

    return readyObjsStr;
  };

  //convert prio overrides to objects:
  const convertStrictOverridesToObjects = (
    data_direct_from_csv,
    override_by
  ) => {
    let cuttedArr = removeFirstItemInArray(data_direct_from_csv);
    let objStr;
    let readyObjsStr = "";

    for (let i = 0; i < cuttedArr.length; i++) {
      if (cuttedArr[i].data[0] === override_by) {
        //check if override by product nature or model code and set obj accordingly
        if (override_by === "product-nature") {
          objStr = `
            {
              values: [${convertStringToArrayString(cuttedArr[i].data[1])}],
              override_exeptions_modal_codes: [${convertStringToArrayString(
                cuttedArr[i].data[2]
              )}],
              override_text_message: "${cuttedArr[i].data[3]}",
              override_add_commentBool: ${
                cuttedArr[i].data[4] === "yes" ? true : false
              },
              override_comment_text:
                "${cuttedArr[i].data[5]}",
            }
            `;
        } else if (override_by === "model-code") {
          objStr = `
            {
              values: [${convertStringToArrayString(cuttedArr[i].data[1])}],
              override_exeptions_product_nature: [${convertStringToArrayString(
                cuttedArr[i].data[2]
              )}],
              override_text_message: "${cuttedArr[i].data[3]}",
              override_add_commentBool: ${
                cuttedArr[i].data[4] === "yes" ? true : false
              },
              override_comment_text: "${cuttedArr[i].data[5]}",
            },
            `;
        }

        //check if first obj
        if (readyObjsStr.length === 0) {
          readyObjsStr = readyObjsStr + objStr;
        } else {
          readyObjsStr = readyObjsStr + "," + objStr;
        }
      }
    }

    return readyObjsStr;
  };
  // ** end reuseable functions

  // check if all CSV files are uploaded
  const checkIfAllFilesAreUploaded = () => {
    if (
      generalDirectDataFromCsv &&
      priosClickandcollectDirectDataFromCsv &&
      priosDeliverytDirectDataFromCsv &&
      inPriosOverrideClickandcollectDirectDataFromCsv &&
      inPriosOverrideDeliverytDirectDataFromCsv &&
      strictOverrideClickandcollectDirectDataFromCsv &&
      strictOverrideDeliveryDirectDataFromCsv &&
      generalSettingsClickandcollectDirectDataFromCsv &&
      generalSettingsDeliveryDirectDataFromCsv
    ) {
      generateScriptCode();
    } else {
      alert("You have not uploaded all the files😅");
    }
  };

  // start generate code
  const [readyScriptCodeAsString, setReadyScriptCodeAsString] = useState("");
  const generateScriptCode = () => {
    setGenerateCode(true);
    setReadyScriptCodeAsString(
      `

      function promiseDeliveryMessage() {
        /* -- START ALGOLIA DETAILS -- */
        var algoliaDetails = {
            app_id: "${generalDirectDataFromCsv[1].data[0]}",
            api_search_key: "${generalDirectDataFromCsv[1].data[1]}",
            index_name: "${generalDirectDataFromCsv[1].data[2]}"
        }
        /* -- END ALGOLIA DETAILS -- */
      
        /* -- START STYLES -- */
        ${
          generalDirectDataFromCsv[1].data[3] === "use-default-styles"
            ? `
          var styles = {
            text_size: "14px",
            text_color: "#242323",
            font_weight: "bold",
            borders_color: "rgb(238, 238, 238)",
            icon_size: "19px",
            icon_color: "#0082C3",
            comment_size: "10px",
            comment_color: "#242323",
          };  
          `
            : `
          var styles = {
            text_size: "${generalDirectDataFromCsv[1].data[4]}",
            text_color: "${generalDirectDataFromCsv[1].data[5]}",
            font_weight: "${generalDirectDataFromCsv[1].data[6]}",
            borders_color: "${generalDirectDataFromCsv[1].data[9]}",
            icon_size: "${generalDirectDataFromCsv[1].data[10]}",
            icon_color: "${generalDirectDataFromCsv[1].data[11]}",
            comment_size: "${generalDirectDataFromCsv[1].data[8]}",
            comment_color: "${generalDirectDataFromCsv[1].data[7]}",
          };
          `
        }
        /* -- END STYLES -- */
      
        /* -- START DEFAULT SETTINGS CLICK AND COLLECT -- */
        var defaultSettingsClickAndCollect = {
          hide_message_bool_no_prio_fit: ${
            generalSettingsClickandcollectDirectDataFromCsv[1].data[0] === "yes"
              ? true
              : false
          },
          message_text_no_prio_fit: "${
            generalSettingsClickandcollectDirectDataFromCsv[1].data[1]
          }",
          display_comment_no_prio_fit: ${
            generalSettingsClickandcollectDirectDataFromCsv[1].data[2] === "yes"
              ? true
              : false
          },
          comment_text_no_prio_fit: "${
            generalSettingsClickandcollectDirectDataFromCsv[1].data[3]
          }",
        };
        /* -- END DEFAULT DEFAULT SETTINGS CLICK AND COLLECT -- */


        /* -- START DEFAULT SETTINGS DELIVERY -- */
        var defaultSettingsDelivery = {
          hide_message_bool_no_prio_fit: ${
            generalSettingsDeliveryDirectDataFromCsv[1].data[0] === "yes"
              ? true
              : false
          },
          message_text_no_prio_fit: "${
            generalSettingsDeliveryDirectDataFromCsv[1].data[1]
          }",
          display_comment_no_prio_fit: ${
            generalSettingsDeliveryDirectDataFromCsv[1].data[2] === "yes"
              ? true
              : false
          },
          comment_text_no_prio_fit: "${
            generalSettingsDeliveryDirectDataFromCsv[1].data[3]
          }",
        };
        /* -- END DEFAULT SETTINGS DELIVERY -- */
      


        /* -- START GENERAL OVERRIDES CLICK AND COLLECT -- */
        var clickAndCollectGeneralOverrides = {
          general_overrides_bool: true,
          overrides_product_nature: [
            ${convertStrictOverridesToObjects(
              strictOverrideClickandcollectDirectDataFromCsv,
              "product-nature"
            )}
           ],
          overrides_modal_code: [
            ${convertStrictOverridesToObjects(
              strictOverrideClickandcollectDirectDataFromCsv,
              "model-code"
            )}
           ],
        };
        /* -- END GENERAL OVERRIDES CLICK AND COLLECT -- */

        /* -- START GENERAL OVERRIDES DELIVERY -- */
        var deliveryGeneralOverrides = {
          general_overrides_bool: true,
          overrides_product_nature: [
            ${convertStrictOverridesToObjects(
              strictOverrideDeliveryDirectDataFromCsv,
              "product-nature"
            )}
           ],
          overrides_modal_code: [
            ${convertStrictOverridesToObjects(
              strictOverrideDeliveryDirectDataFromCsv,
              "model-code"
            )}
           ],
        };
        /* -- END GENERAL OVERRIDES DELIVERY -- */

      
        /* -- START CLICK AND COLLECT VARS OBJECT -- */
        var clickAndCollectVars = {
          general: {
            messageText: "",
            commentText: "",
            commentTextDisplayBool: false,
            hideElemBool: false
          },
          prio1: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio2: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio3: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio4: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio5: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio6: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio7: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio8: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          }
        };
        /* -- END CLICK AND COLLECT VARS OBJECT -- */
      
        /* -- START DELIVERY VARS OBJECT -- */
        var deliveryVars = {
          general: {
            messageText: "",
            commentText: "",
            commentTextDisplayBool: false,
            hideElemBool: false
          },
          prio1: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio2: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio3: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio4: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio5: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio6: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio7: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          },
          prio8: {
            availableBool: false,
            overrideExistBool: false,
            overrideTextMessage: "",
            overrideCommentBool: false,
            overrideCommentMessageText: ""
          }
        };
        /* -- END VARS DELIVERY -- */
      
        /* -- START PRIOS CLICK AND COLLECT -- */
        var priosClickAndCollect = {
          prio_1: {
            text_message: "${priosClickandcollectDirectDataFromCsv[1].data[2]}",
            add_commentBool: ${
              priosClickandcollectDirectDataFromCsv[1].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosClickandcollectDirectDataFromCsv[1].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosClickandcollectDirectDataFromCsv[1].data[1]
            )}],
            overrides_product_nature: [
             ${convertPrioOverridesToObjects(
               inPriosOverrideClickandcollectDirectDataFromCsv,
               "1",
               "product-nature"
             )}
            ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "1",
                "model-code"
              )}
            ],
          },
      
          prio_2: {
            text_message: "${priosClickandcollectDirectDataFromCsv[2].data[2]}",
            add_commentBool: ${
              priosClickandcollectDirectDataFromCsv[2].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosClickandcollectDirectDataFromCsv[2].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosClickandcollectDirectDataFromCsv[2].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "2",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "2",
                "model-code"
              )}
            ],
          },
      
          prio_3: {
            text_message: "${priosClickandcollectDirectDataFromCsv[3].data[2]}",
            add_commentBool: ${
              priosClickandcollectDirectDataFromCsv[3].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosClickandcollectDirectDataFromCsv[3].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosClickandcollectDirectDataFromCsv[3].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "3",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "3",
                "model-code"
              )}
            ],
          },
      
          prio_4: {
            text_message: "${priosClickandcollectDirectDataFromCsv[4].data[2]}",
            add_commentBool: ${
              priosClickandcollectDirectDataFromCsv[4].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosClickandcollectDirectDataFromCsv[4].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosClickandcollectDirectDataFromCsv[4].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "4",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "4",
                "model-code"
              )}
            ],
          },
      
          prio_5: {
            text_message: "${priosClickandcollectDirectDataFromCsv[5].data[2]}",
            add_commentBool: ${
              priosClickandcollectDirectDataFromCsv[5].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosClickandcollectDirectDataFromCsv[5].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosClickandcollectDirectDataFromCsv[5].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "5",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "5",
                "model-code"
              )}
            ],
          },
      
          prio_6: {
            text_message: "${priosClickandcollectDirectDataFromCsv[6].data[2]}",
            add_commentBool: ${
              priosClickandcollectDirectDataFromCsv[6].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosClickandcollectDirectDataFromCsv[6].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosClickandcollectDirectDataFromCsv[6].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "6",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "6",
                "model-code"
              )}
            ],
          },
      
          prio_7: {
            text_message: "${priosClickandcollectDirectDataFromCsv[7].data[2]}",
            add_commentBool: ${
              priosClickandcollectDirectDataFromCsv[7].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosClickandcollectDirectDataFromCsv[7].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosClickandcollectDirectDataFromCsv[7].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "7",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "7",
                "model-code"
              )}
            ],
          },
      
          prio_8: {
            text_message: "${priosClickandcollectDirectDataFromCsv[8].data[2]}",
            add_commentBool: ${
              priosClickandcollectDirectDataFromCsv[8].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosClickandcollectDirectDataFromCsv[7].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosClickandcollectDirectDataFromCsv[8].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "8",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideClickandcollectDirectDataFromCsv,
                "8",
                "model-code"
              )}
            ],
          },
        };
        /* -- END PRIOS CLICK AND COLLECT -- */


        /* -- START PRIOS DELIVERY -- */
        var priosDelivery = {
          prio_1: {
            text_message: "${priosDeliverytDirectDataFromCsv[1].data[2]}",
            add_commentBool: ${
              priosDeliverytDirectDataFromCsv[1].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosDeliverytDirectDataFromCsv[1].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosDeliverytDirectDataFromCsv[1].data[1]
            )}],
            overrides_product_nature: [
             ${convertPrioOverridesToObjects(
               inPriosOverrideDeliverytDirectDataFromCsv,
               "1",
               "product-nature"
             )}
            ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "1",
                "model-code"
              )}
            ],
          },
      
          prio_2: {
            text_message: "${priosDeliverytDirectDataFromCsv[2].data[2]}",
            add_commentBool: ${
              priosDeliverytDirectDataFromCsv[2].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosDeliverytDirectDataFromCsv[2].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosDeliverytDirectDataFromCsv[2].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "2",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "2",
                "model-code"
              )}
            ],
          },
      
          prio_3: {
            text_message: "${priosDeliverytDirectDataFromCsv[3].data[2]}",
            add_commentBool: ${
              priosDeliverytDirectDataFromCsv[3].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosDeliverytDirectDataFromCsv[3].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosDeliverytDirectDataFromCsv[3].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "3",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "3",
                "model-code"
              )}
            ],
          },
      
          prio_4: {
            text_message: "${priosDeliverytDirectDataFromCsv[4].data[2]}",
            add_commentBool: ${
              priosDeliverytDirectDataFromCsv[4].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosDeliverytDirectDataFromCsv[4].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosDeliverytDirectDataFromCsv[4].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "4",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "4",
                "model-code"
              )}
            ],
          },
      
          prio_5: {
            text_message: "${priosDeliverytDirectDataFromCsv[5].data[2]}",
            add_commentBool: ${
              priosDeliverytDirectDataFromCsv[5].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosDeliverytDirectDataFromCsv[5].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosDeliverytDirectDataFromCsv[5].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "5",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "5",
                "model-code"
              )}
            ],
          },
      
          prio_6: {
            text_message: "${priosDeliverytDirectDataFromCsv[6].data[2]}",
            add_commentBool: ${
              priosDeliverytDirectDataFromCsv[6].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosDeliverytDirectDataFromCsv[6].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosDeliverytDirectDataFromCsv[6].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "6",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "6",
                "model-code"
              )}
            ],
          },
      
          prio_7: {
            text_message: "${priosDeliverytDirectDataFromCsv[7].data[2]}",
            add_commentBool: ${
              priosDeliverytDirectDataFromCsv[7].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosDeliverytDirectDataFromCsv[7].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosDeliverytDirectDataFromCsv[7].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "7",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "7",
                "model-code"
              )}
            ],
          },
      
          prio_8: {
            text_message: "${priosDeliverytDirectDataFromCsv[8].data[2]}",
            add_commentBool: ${
              priosDeliverytDirectDataFromCsv[8].data[3] === "yes"
                ? true
                : false
            },
            comment_text: "${priosDeliverytDirectDataFromCsv[7].data[4]}",
            code_zones: [${convertStringToArrayString(
              priosDeliverytDirectDataFromCsv[8].data[1]
            )}],
            overrides_product_nature: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "8",
                "product-nature"
              )}
             ],
            overrides_modal_code: [
              ${convertPrioOverridesToObjects(
                inPriosOverrideDeliverytDirectDataFromCsv,
                "8",
                "model-code"
              )}
            ],
          },
        };
        /* -- END PRIOS DELIVERY -- */
      
        /* -- START GET PRODUCT DATA FROM ALGOLIA -- */
        var result;
        var productModalCode = dataLayer && dataLayer[4].products.articles[0].model.id;
        var clientAlg = algoliasearch(algoliaDetails.app_id, algoliaDetails.api_search_key);
        var index = clientAlg.initIndex(algoliaDetails.index_name);
        index.search(productModalCode).then(function (r) {
          result = r;
          createPromiseMessages(priosClickAndCollect, clickAndCollectVars, clickAndCollectGeneralOverrides, defaultSettingsClickAndCollect);
          createPromiseMessages(priosDelivery, deliveryVars, deliveryGeneralOverrides, defaultSettingsDelivery);
        }).then(function () {
          insertHtmlCodeToPage();
        });
        /* -- END GET PRODUCT DATA FROM ALGOLIA -- */
      
        /* -- START CREATE PROMISES MESSAGES FUNCTION  -- */
      
        function createPromiseMessages(priosObj, varsObj, generalOverrides, defaultSettings) {
          checkZonesAvailability(); // -- START CHECK ZONES AVAILABILITY
      
          function checkZonesAvailability() {
            // start check prio 1 group
            for (var i = 0; i < priosObj.prio_1.code_zones.length; i++) {
              if (result.hits[0].zones[priosObj.prio_1.code_zones[i]] && result.hits[0].zones[priosObj.prio_1.code_zones[i]].available) {
                varsObj.prio1.availableBool = true;
              }
            } // end check prio 1 group
            // start check prio 2 group
      
      
            for (var _i = 0; _i < priosObj.prio_2.code_zones.length; _i++) {
              if (result.hits[0].zones[priosObj.prio_2.code_zones[_i]] && result.hits[0].zones[priosObj.prio_2.code_zones[_i]].available) {
                varsObj.prio2.availableBool = true;
              }
            } // end check prio 2 group
            // start check prio 3 group
      
      
            for (var _i2 = 0; _i2 < priosObj.prio_3.code_zones.length; _i2++) {
              if (result.hits[0].zones[priosObj.prio_3.code_zones[_i2]] && result.hits[0].zones[priosObj.prio_3.code_zones[_i2]].available) {
                varsObj.prio3.availableBool = true;
              }
            } // end check prio 3 group
            // start check prio 4 group
      
      
            for (var _i3 = 0; _i3 < priosObj.prio_4.code_zones.length; _i3++) {
              if (result.hits[0].zones[priosObj.prio_4.code_zones[_i3]] && result.hits[0].zones[priosObj.prio_4.code_zones[_i3]].available) {
                varsObj.prio4.availableBool = true;
              }
            } // end check prio 4 group
            // start check prio 5 group
      
      
            for (var _i4 = 0; _i4 < priosObj.prio_5.code_zones.length; _i4++) {
              if (result.hits[0].zones[priosObj.prio_5.code_zones[_i4]] && result.hits[0].zones[priosObj.prio_5.code_zones[_i4]].available) {
                varsObj.prio5.availableBool = true;
              }
            } // end check prio 5 group
            // start check prio 6 group
      
      
            for (var _i5 = 0; _i5 < priosObj.prio_6.code_zones.length; _i5++) {
              if (result.hits[0].zones[priosObj.prio_6.code_zones[_i5]] && result.hits[0].zones[priosObj.prio_6.code_zones[_i5]].available) {
                varsObj.prio6.availableBool = true;
              }
            } // end check prio 6 group
            // start check prio 7 group
      
      
            for (var _i6 = 0; _i6 < priosObj.prio_7.code_zones.length; _i6++) {
              if (result.hits[0].zones[priosObj.prio_7.code_zones[_i6]] && result.hits[0].zones[priosObj.prio_7.code_zones[_i6]].available) {
                varsObj.prio7.availableBool = true;
              }
            } // end check prio 7 group
            // start check prio 8 group
      
      
            for (var _i7 = 0; _i7 < priosObj.prio_8.code_zones.length; _i7++) {
              if (result.hits[0].zones[priosObj.prio_8.code_zones[_i7]] && result.hits[0].zones[priosObj.prio_8.code_zones[_i7]].available) {
                varsObj.prio8.availableBool = true;
              }
            } // end check prio 8 group
      
      
            checkOverridePrios();
          } // end checkZonesAvailability function
          // -- END CHECK ZONES AVAILABILITY
          // -- START CHECK OVERRIDE PRIOS
      
      
          function checkOverridePrios() {
            // START PRIO 1
            // start check overrides product nature in prio 1
            for (var i = 0; i < priosObj.prio_1.overrides_product_nature.length; i++) {
              if (priosObj.prio_1.overrides_product_nature[i].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !priosObj.prio_1.overrides_product_nature[i].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.prio1.overrideExistBool = true;
                varsObj.prio1.overrideTextMessage = priosObj.prio_1.overrides_product_nature[i].override_text_message;
                varsObj.prio1.overrideCommentBool = priosObj.prio_1.overrides_product_nature[i].override_add_commentBool;
                varsObj.prio1.overrideCommentMessageText = priosObj.prio_1.overrides_product_nature[i].override_comment_text;
              }
            } // end check overrides product nature in prio 1
            // start check overrides model code in prio 1
      
      
            for (var _i8 = 0; _i8 < priosObj.prio_1.overrides_modal_code.length; _i8++) {
              if (priosObj.prio_1.overrides_modal_code[_i8].values.includes(result.hits[0].id_code_model) && !priosObj.prio_1.overrides_modal_code[_i8].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.prio1.overrideExistBool = true;
                varsObj.prio1.overrideTextMessage = priosObj.prio_1.overrides_modal_code[_i8].override_text_message;
                varsObj.prio1.overrideCommentBool = priosObj.prio_1.overrides_modal_code[_i8].override_add_commentBool;
                varsObj.prio1.overrideCommentMessageText = priosObj.prio_1.overrides_modal_code[_i8].override_comment_text;
              }
            } // end check overrides model code in prio 1
            // END PRIO 1
            // START PRIO 2
            // start check overrides product nature in prio 2
      
      
            for (var _i9 = 0; _i9 < priosObj.prio_2.overrides_product_nature.length; _i9++) {
              if (priosObj.prio_2.overrides_product_nature[_i9].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !priosObj.prio_2.overrides_product_nature[_i9].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.prio2.overrideExistBool = true;
                varsObj.prio2.overrideTextMessage = priosObj.prio_2.overrides_product_nature[_i9].override_text_message;
                varsObj.prio2.overrideCommentBool = priosObj.prio_2.overrides_product_nature[_i9].override_add_commentBool;
                varsObj.prio2.overrideCommentMessageText = priosObj.prio_2.overrides_product_nature[_i9].override_comment_text;
              }
            } // end check overrides product nature in prio 2
            // start check overrides model code in prio 2
      
      
            for (var _i10 = 0; _i10 < priosObj.prio_2.overrides_modal_code.length; _i10++) {
              if (priosObj.prio_2.overrides_modal_code[_i10].values.includes(result.hits[0].id_code_model) && !priosObj.prio_2.overrides_modal_code[_i10].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.prio2.overrideExistBool = true;
                varsObj.prio2.overrideTextMessage = priosObj.prio_2.overrides_modal_code[_i10].override_text_message;
                varsObj.prio2.overrideCommentBool = priosObj.prio_2.overrides_modal_code[_i10].override_add_commentBool;
                varsObj.prio2.overrideCommentMessageText = priosObj.prio_2.overrides_modal_code[_i10].override_comment_text;
              }
            } // end check overrides model code in prio 2
            // END PRIO 2
            // START PRIO 3
            // start check overrides product nature in prio 3
      
      
            for (var _i11 = 0; _i11 < priosObj.prio_3.overrides_product_nature.length; _i11++) {
              if (priosObj.prio_3.overrides_product_nature[_i11].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !priosObj.prio_3.overrides_product_nature[_i11].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.prio3.overrideExistBool = true;
                varsObj.prio3.overrideTextMessage = priosObj.prio_3.overrides_product_nature[_i11].override_text_message;
                varsObj.prio3.overrideCommentBool = priosObj.prio_3.overrides_product_nature[_i11].override_add_commentBool;
                varsObj.prio3.overrideCommentMessageText = priosObj.prio_3.overrides_product_nature[_i11].override_comment_text;
              }
            } // end check overrides product nature in prio 3
            // start check overrides model code in prio 3
      
      
            for (var _i12 = 0; _i12 < priosObj.prio_3.overrides_modal_code.length; _i12++) {
              if (priosObj.prio_3.overrides_modal_code[_i12].values.includes(result.hits[0].id_code_model) && !priosObj.prio_3.overrides_modal_code[_i12].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.prio3.overrideExistBool = true;
                varsObj.prio3.overrideTextMessage = priosObj.prio_3.overrides_modal_code[_i12].override_text_message;
                varsObj.prio3.overrideCommentBool = priosObj.prio_3.overrides_modal_code[_i12].override_add_commentBool;
                varsObj.prio3.overrideCommentMessageText = priosObj.prio_3.overrides_modal_code[_i12].override_comment_text;
              }
            } // end check overrides model code in prio 3
            // END PRIO 3
            // START PRIO 4
            // start check overrides product nature in prio 4
      
      
            for (var _i13 = 0; _i13 < priosObj.prio_4.overrides_product_nature.length; _i13++) {
              if (priosObj.prio_4.overrides_product_nature[_i13].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !priosObj.prio_4.overrides_product_nature[_i13].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.prio4.overrideExistBool = true;
                varsObj.prio4.overrideTextMessage = priosObj.prio_4.overrides_product_nature[_i13].override_text_message;
                varsObj.prio4.overrideCommentBool = priosObj.prio_4.overrides_product_nature[_i13].override_add_commentBool;
                varsObj.prio4.overrideCommentMessageText = priosObj.prio_4.overrides_product_nature[_i13].override_comment_text;
              }
            } // end check overrides product nature in prio 4
            // start check overrides model code in prio 4
      
      
            for (var _i14 = 0; _i14 < priosObj.prio_4.overrides_modal_code.length; _i14++) {
              if (priosObj.prio_4.overrides_modal_code[_i14].values.includes(result.hits[0].id_code_model) && !priosObj.prio_4.overrides_modal_code[_i14].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.prio4.overrideExistBool = true;
                varsObj.prio4.overrideTextMessage = priosObj.prio_4.overrides_modal_code[_i14].override_text_message;
                varsObj.prio4.overrideCommentBool = priosObj.prio_4.overrides_modal_code[_i14].override_add_commentBool;
                varsObj.prio4.overrideCommentMessageText = priosObj.prio_4.overrides_modal_code[_i14].override_comment_text;
              }
            } // end check overrides model code in prio 4
            // END PRIO 4
            // START PRIO 5
            // start check overrides product nature in prio 5
      
      
            for (var _i15 = 0; _i15 < priosObj.prio_5.overrides_product_nature.length; _i15++) {
              if (priosObj.prio_5.overrides_product_nature[_i15].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !priosObj.prio_5.overrides_product_nature[_i15].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.prio5.overrideExistBool = true;
                varsObj.prio5.overrideTextMessage = priosObj.prio_5.overrides_product_nature[_i15].override_text_message;
                varsObj.prio5.overrideCommentBool = priosObj.prio_5.overrides_product_nature[_i15].override_add_commentBool;
                varsObj.prio5.overrideCommentMessageText = priosObj.prio_5.overrides_product_nature[_i15].override_comment_text;
              }
            } // end check overrides product nature in prio 5
            // start check overrides model code in prio 5
      
      
            for (var _i16 = 0; _i16 < priosObj.prio_5.overrides_modal_code.length; _i16++) {
              if (priosObj.prio_5.overrides_modal_code[_i16].values.includes(result.hits[0].id_code_model) && !priosObj.prio_5.overrides_modal_code[_i16].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.prio5.overrideExistBool = true;
                varsObj.prio5.overrideTextMessage = priosObj.prio_5.overrides_modal_code[_i16].override_text_message;
                varsObj.prio5.overrideCommentBool = priosObj.prio_5.overrides_modal_code[_i16].override_add_commentBool;
                varsObj.prio5.overrideCommentMessageText = priosObj.prio_5.overrides_modal_code[_i16].override_comment_text;
              }
            } // end check overrides model code in prio 5
            // END PRIO 5
            // START PRIO 6
            // start check overrides product nature in prio 6
      
      
            for (var _i17 = 0; _i17 < priosObj.prio_6.overrides_product_nature.length; _i17++) {
              if (priosObj.prio_6.overrides_product_nature[_i17].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !priosObj.prio_6.overrides_product_nature[_i17].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.prio6.overrideExistBool = true;
                varsObj.prio6.overrideTextMessage = priosObj.prio_6.overrides_product_nature[_i17].override_text_message;
                varsObj.prio6.overrideCommentBool = priosObj.prio_6.overrides_product_nature[_i17].override_add_commentBool;
                varsObj.prio6.overrideCommentMessageText = priosObj.prio_6.overrides_product_nature[_i17].override_comment_text;
              }
            } // end check overrides product nature in prio 6
            // start check overrides model code in prio 6
      
      
            for (var _i18 = 0; _i18 < priosObj.prio_6.overrides_modal_code.length; _i18++) {
              if (priosObj.prio_6.overrides_modal_code[_i18].values.includes(result.hits[0].id_code_model) && !priosObj.prio_6.overrides_modal_code[_i18].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.prio6.overrideExistBool = true;
                varsObj.prio6.overrideTextMessage = priosObj.prio_6.overrides_modal_code[_i18].override_text_message;
                varsObj.prio6.overrideCommentBool = priosObj.prio_6.overrides_modal_code[_i18].override_add_commentBool;
                varsObj.prio6.overrideCommentMessageText = priosObj.prio_6.overrides_modal_code[_i18].override_comment_text;
              }
            } // end check overrides model code in prio 6
            // END PRIO 6
            // START PRIO 7
            // start check overrides product nature in prio 7
      
      
            for (var _i19 = 0; _i19 < priosObj.prio_7.overrides_product_nature.length; _i19++) {
              if (priosObj.prio_7.overrides_product_nature[_i19].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !priosObj.prio_7.overrides_product_nature[_i19].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.prio7.overrideExistBool = true;
                varsObj.prio7.overrideTextMessage = priosObj.prio_7.overrides_product_nature[_i19].override_text_message;
                varsObj.prio7.overrideCommentBool = priosObj.prio_7.overrides_product_nature[_i19].override_add_commentBool;
                varsObj.prio7.overrideCommentMessageText = priosObj.prio_7.overrides_product_nature[_i19].override_comment_text;
              }
            } // end check overrides product nature in prio 7
            // start check overrides model code in prio 7
      
      
            for (var _i20 = 0; _i20 < priosObj.prio_7.overrides_modal_code.length; _i20++) {
              if (priosObj.prio_7.overrides_modal_code[_i20].values.includes(result.hits[0].id_code_model) && !priosObj.prio_7.overrides_modal_code[_i20].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.prio7.overrideExistBool = true;
                varsObj.prio7.overrideTextMessage = priosObj.prio_7.overrides_modal_code[_i20].override_text_message;
                varsObj.prio7.overrideCommentBool = priosObj.prio_7.overrides_modal_code[_i20].override_add_commentBool;
                varsObj.prio7.overrideCommentMessageText = priosObj.prio_7.overrides_modal_code[_i20].override_comment_text;
              }
            } // end check overrides model code in prio 7
            // END PRIO 7
            // START PRIO 8
            // start check overrides product nature in prio 8
      
      
            for (var _i21 = 0; _i21 < priosObj.prio_8.overrides_product_nature.length; _i21++) {
              if (priosObj.prio_8.overrides_product_nature[_i21].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !priosObj.prio_8.overrides_product_nature[_i21].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.prio8.overrideExistBool = true;
                varsObj.prio8.overrideTextMessage = priosObj.prio_8.overrides_product_nature[_i21].override_text_message;
                varsObj.prio8.overrideCommentBool = priosObj.prio_8.overrides_product_nature[_i21].override_add_commentBool;
                varsObj.prio8.overrideCommentMessageText = priosObj.prio_8.overrides_product_nature[_i21].override_comment_text;
              }
            } // end check overrides product nature in prio 8
            // start check overrides model code in prio 8
      
      
            for (var _i22 = 0; _i22 < priosObj.prio_8.overrides_modal_code.length; _i22++) {
              if (priosObj.prio_8.overrides_modal_code[_i22].values.includes(result.hits[0].id_code_model) && !priosObj.prio_8.overrides_modal_code[_i22].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.prio8.overrideExistBool = true;
                varsObj.prio8.overrideTextMessage = priosObj.prio_8.overrides_modal_code[_i22].override_text_message;
                varsObj.prio8.overrideCommentBool = priosObj.prio_8.overrides_modal_code[_i22].override_add_commentBool;
                varsObj.prio8.overrideCommentMessageText = priosObj.prio_8.overrides_modal_code[_i22].override_comment_text;
              }
            } // end check overrides model code in prio 8
            // END PRIO 8
      
      
            setMessageAccordingToPrios();
          } // end checkOverridePrios function
          // -- END CHECK OVERRIDE PRIOS
          // -- START SET MESSAGE ACCORDING TO PRIOS
      
      
          function setMessageAccordingToPrios() {
            // start check and set according to prio 1
            if (varsObj.prio1.availableBool) {
              if (varsObj.prio1.overrideExistBool) {
                varsObj.general.messageText = varsObj.prio1.overrideTextMessage;
                varsObj.general.commentTextDisplayBool = varsObj.prio1.overrideCommentBool;
                varsObj.general.commentText = varsObj.prio1.overrideCommentMessageText;
              } else {
                varsObj.general.messageText = priosObj.prio_1.text_message;
                varsObj.general.commentTextDisplayBool = priosObj.prio_1.add_commentBool;
                varsObj.general.commentText = priosObj.prio_1.comment_text;
              } // end check and set according to prio 1
              // start check and set according to prio 2
      
            } else if (varsObj.prio2.availableBool) {
              if (varsObj.prio2.overrideExistBool) {
                varsObj.general.messageText = varsObj.prio2.overrideTextMessage;
                varsObj.general.commentTextDisplayBool = varsObj.prio2.overrideCommentBool;
                varsObj.general.commentText = varsObj.prio2.overrideCommentMessageText;
              } else {
                varsObj.general.messageText = priosObj.prio_2.text_message;
                varsObj.general.commentTextDisplayBool = priosObj.prio_2.add_commentBool;
                varsObj.general.commentText = priosObj.prio_2.comment_text;
              } // end check and set according to prio 2
              // start check and set according to prio 3
      
            } else if (varsObj.prio3.availableBool) {
              if (varsObj.prio3.overrideExistBool) {
                varsObj.general.messageText = varsObj.prio3.overrideTextMessage;
                varsObj.general.commentTextDisplayBool = varsObj.prio3.overrideCommentBool;
                varsObj.general.commentText = varsObj.prio3.overrideCommentMessageText;
              } else {
                varsObj.general.messageText = priosObj.prio_3.text_message;
                varsObj.general.commentTextDisplayBool = priosObj.prio_3.add_commentBool;
                varsObj.general.commentText = priosObj.prio_3.comment_text;
              } // end check and set according to prio 3
              // start check and set according to prio 4
      
            } else if (varsObj.prio4.availableBool) {
              if (varsObj.prio4.overrideExistBool) {
                varsObj.general.messageText = varsObj.prio4.overrideTextMessage;
                varsObj.general.commentTextDisplayBool = varsObj.prio4.overrideCommentBool;
                varsObj.general.commentText = varsObj.prio4.overrideCommentMessageText;
              } else {
                varsObj.general.messageText = priosObj.prio_4.text_message;
                varsObj.general.commentTextDisplayBool = priosObj.prio_4.add_commentBool;
                varsObj.general.commentText = priosObj.prio_4.comment_text;
              } // end check and set according to prio 4
              // start check and set according to prio 5
      
            } else if (varsObj.prio5.availableBool) {
              if (varsObj.prio5.overrideExistBool) {
                varsObj.general.messageText = varsObj.prio5.overrideTextMessage;
                varsObj.general.commentTextDisplayBool = varsObj.prio5.overrideCommentBool;
                varsObj.general.commentText = varsObj.prio5.overrideCommentMessageText;
              } else {
                varsObj.general.messageText = priosObj.prio_5.text_message;
                varsObj.general.commentTextDisplayBool = priosObj.prio_5.add_commentBool;
                varsObj.general.commentText = priosObj.prio_5.comment_text;
              } // end check and set according to prio 5
              // start check and set according to prio 6
      
            } else if (varsObj.prio6.availableBool) {
              if (varsObj.prio6.overrideExistBool) {
                varsObj.general.messageText = varsObj.prio6.overrideTextMessage;
                varsObj.general.commentTextDisplayBool = varsObj.prio6.overrideCommentBool;
                varsObj.general.commentText = varsObj.prio6.overrideCommentMessageText;
              } else {
                varsObj.general.messageText = priosObj.prio_6.text_message;
                varsObj.general.commentTextDisplayBool = priosObj.prio_6.add_commentBool;
                varsObj.general.commentText = priosObj.prio_6.comment_text;
              } // end check and set according to prio 6
              // start check and set according to prio 7
      
            } else if (varsObj.prio7.availableBool) {
              if (varsObj.prio7.overrideExistBool) {
                varsObj.general.messageText = varsObj.prio7.overrideTextMessage;
                varsObj.general.commentTextDisplayBool = varsObj.prio7.overrideCommentBool;
                varsObj.general.commentText = varsObj.prio7.overrideCommentMessageText;
              } else {
                varsObj.general.messageText = priosObj.prio_7.text_message;
                varsObj.general.commentTextDisplayBool = priosObj.prio_7.add_commentBool;
                varsObj.general.commentText = priosObj.prio_7.comment_text;
              } // end check and set according to prio 7
              // start check and set according to prio 8
      
            } else if (varsObj.prio8.availableBool) {
              if (varsObj.prio8.overrideExistBool) {
                varsObj.general.messageText = varsObj.prio8.overrideTextMessage;
                varsObj.general.commentTextDisplayBool = varsObj.prio8.overrideCommentBool;
                varsObj.general.commentText = varsObj.prio8.overrideCommentMessageText;
              } else {
                varsObj.general.messageText = priosObj.prio_8.text_message;
                varsObj.general.commentTextDisplayBool = priosObj.prio_8.add_commentBool;
                varsObj.general.commentText = priosObj.prio_8.comment_text;
              } // end check and set according to prio 8
              // start no prio group fit
      
            } else {
              if (defaultSettings.hide_message_bool_no_prio_fit) {
                varsObj.general.hideElemBool = true;
              } else {
                varsObj.general.messageText = defaultSettings.message_text_no_prio_fit;
                varsObj.general.commentTextDisplayBool = defaultSettings.display_comment_no_prio_fit;
                varsObj.general.commentText = defaultSettings.comment_text_no_prio_fit;
              } // end no prio group fit
      
            }
      
            overrideMessageAccordingToGeneralOverrides();
          } // end setMessageAccordingToPrios function
          // -- END SET MESSAGE ACCORDING TO PRIOS
          // -- START OVERRIDE MESSAGE ACCORDING TO GENERAL OVERRIDES
      
      
          function overrideMessageAccordingToGeneralOverrides() {
            // start check and set according to product nature
            for (var i = 0; i < generalOverrides.overrides_product_nature.length; i++) {
              if (generalOverrides.overrides_product_nature[i].values.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase()) && !generalOverrides.overrides_product_nature[i].override_exeptions_modal_codes.includes(result.hits[0].id_code_model)) {
                varsObj.general.messageText = generalOverrides.overrides_product_nature[i].override_text_message;
                varsObj.general.commentTextDisplayBool = generalOverrides.overrides_product_nature[i].override_add_commentBool;
                varsObj.general.commentText = generalOverrides.overrides_product_nature[i].override_comment_text;
              } // end top if
      
            } // end check and set according to product nature
            // start check and set according to model code
      
      
            for (var _i23 = 0; _i23 < generalOverrides.overrides_modal_code.length; _i23++) {
              if (generalOverrides.overrides_modal_code[_i23].values.includes(result.hits[0].id_code_model) && !generalOverrides.overrides_modal_code[_i23].override_exeptions_product_nature.map(function (e) {
                return e.toLowerCase();
              }).includes(result.hits[0].nature.toLowerCase())) {
                varsObj.general.messageText = generalOverrides.overrides_modal_code[_i23].override_text_message;
                varsObj.general.commentTextDisplayBool = generalOverrides.overrides_modal_code[_i23].override_add_commentBool;
                varsObj.general.commentText = generalOverrides.overrides_modal_code[_i23].override_comment_text;
              } // end top if
      
            } // end check and set according to model code
      
          } // end overrideMessageAccordingToGeneralOverrides
          // -- END OVERRIDE MESSAGE ACCORDING TO GENERAL OVERRIDES
      
        } // end createPromiseMessages function
      
        /* -- START INSERT HTML CODE TO PAGE FUNCTION  -- */
      
      
        function insertHtmlCodeToPage() {
          var messageContainerDiv = document.createElement("div");
          messageContainerDiv.innerHTML = "${
            document.getElementById("aa").innerHTML
          }n                <div style=${
        document.getElementById("aa").innerHTML
      }"font-size: ".concat(styles.text_size, "; font-weight: ").concat(styles.font_weight, "; margin: 15px 0px; padding: 10px 2px; border-top: 1px solid ").concat(styles.borders_color, "; border-bottom: 1px solid ").concat(styles.borders_color, ";${
        document.getElementById("aa").innerHTML
      }">${
        document.getElementById("aa").innerHTML
      }n                          <div class=${
        document.getElementById("aa").innerHTML
      }"promise-delivery-messages__delivery${
        document.getElementById("aa").innerHTML
      }" style=${
        document.getElementById("aa").innerHTML
      }"padding-bottom: 10px; margin-bottom: 10px; ").concat(deliveryVars.general.hideElemBool && "display: none", "${
        document.getElementById("aa").innerHTML
      }">${document.getElementById("aa").innerHTML}n                          ${
        document.getElementById("aa").innerHTML
      }n                              <div style=${
        document.getElementById("aa").innerHTML
      }"display:flex;${document.getElementById("aa").innerHTML}">${
        document.getElementById("aa").innerHTML
      }n                        <div>${
        document.getElementById("aa").innerHTML
      }n                        <svg style=${
        document.getElementById("aa").innerHTML
      }"color:").concat(styles.icon_color, "; margin-bottom: -3px; margin-right: 5px${
        document.getElementById("aa").innerHTML
      }" aria-hidden=${document.getElementById("aa").innerHTML}"true${
        document.getElementById("aa").innerHTML
      }" role=${document.getElementById("aa").innerHTML}"img${
        document.getElementById("aa").innerHTML
      }" width=${
        document.getElementById("aa").innerHTML
      }"").concat(styles.icon_size, "${
        document.getElementById("aa").innerHTML
      }" height=${
        document.getElementById("aa").innerHTML
      }"").concat(styles.icon_size, "${
        document.getElementById("aa").innerHTML
      }" preserveAspectRatio=${
        document.getElementById("aa").innerHTML
      }"xMidYMid meet${document.getElementById("aa").innerHTML}" viewBox=${
        document.getElementById("aa").innerHTML
      }"0 0 32 32${document.getElementById("aa").innerHTML}"><path fill=${
        document.getElementById("aa").innerHTML
      }"currentColor${document.getElementById("aa").innerHTML}" d=${
        document.getElementById("aa").innerHTML
      }"M4 16h12v2H4zm-2-5h10v2H2z${
        document.getElementById("aa").innerHTML
      }"></path><path fill=${
        document.getElementById("aa").innerHTML
      }"currentColor${document.getElementById("aa").innerHTML}" d=${
        document.getElementById("aa").innerHTML
      }"m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394ZM9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z${
        document.getElementById("aa").innerHTML
      }"></path></svg>${
        document.getElementById("aa").innerHTML
      }n                        </div>${
        document.getElementById("aa").innerHTML
      }n                        ${
        document.getElementById("aa").innerHTML
      }n                        <div>${
        document.getElementById("aa").innerHTML
      }n                        <span class=${
        document.getElementById("aa").innerHTML
      }"promise-delivery-messages__delivery--text${
        document.getElementById("aa").innerHTML
      }">").concat(deliveryVars.general.messageText, "</span>${
        document.getElementById("aa").innerHTML
      }n                       ").concat(deliveryVars.general.commentTextDisplayBool ? "${
        document.getElementById("aa").innerHTML
      }n                           <span style=${
        document.getElementById("aa").innerHTML
      }"display:block; margin-top:3px; color: ".concat(styles.comment_color, "; font-size: ").concat(styles.comment_size, "${
        document.getElementById("aa").innerHTML
      }" class=${
        document.getElementById("aa").innerHTML
      }"promise-delivery-messages__click-and-collect--sm-message${
        document.getElementById("aa").innerHTML
      }">${
        document.getElementById("aa").innerHTML
      }n      ").concat(deliveryVars.general.commentText, "${
        document.getElementById("aa").innerHTML
      }n                        </span>${
        document.getElementById("aa").innerHTML
      }n                           ") : "", "${
        document.getElementById("aa").innerHTML
      }n${document.getElementById("aa").innerHTML}n${
        document.getElementById("aa").innerHTML
      }n                        </div>${
        document.getElementById("aa").innerHTML
      }n                        </div>${
        document.getElementById("aa").innerHTML
      }n                        </div>${
        document.getElementById("aa").innerHTML
      }n                              ${
        document.getElementById("aa").innerHTML
      }n                      ${
        document.getElementById("aa").innerHTML
      }n                      ${
        document.getElementById("aa").innerHTML
      }n                      <div ").concat(clickAndCollectVars.general.hideElemBool && "style=${
        document.getElementById("aa").innerHTML
      }"display: none${document.getElementById("aa").innerHTML}"", " class=${
        document.getElementById("aa").innerHTML
      }"promise-delivery-messages__click-and-collect${
        document.getElementById("aa").innerHTML
      }">${
        document.getElementById("aa").innerHTML
      }n                      <div style=${
        document.getElementById("aa").innerHTML
      }"display:flex;${document.getElementById("aa").innerHTML}">${
        document.getElementById("aa").innerHTML
      }n                      <div>${
        document.getElementById("aa").innerHTML
      }n                      <svg style=${
        document.getElementById("aa").innerHTML
      }"color:").concat(styles.icon_color, "; margin-bottom: -3px;margin-right:5px${
        document.getElementById("aa").innerHTML
      }" aria-hidden=${document.getElementById("aa").innerHTML}"true${
        document.getElementById("aa").innerHTML
      }" role=${document.getElementById("aa").innerHTML}"img${
        document.getElementById("aa").innerHTML
      }" width=${
        document.getElementById("aa").innerHTML
      }"").concat(styles.icon_size, "${
        document.getElementById("aa").innerHTML
      }" height=${
        document.getElementById("aa").innerHTML
      }"").concat(styles.icon_size, "${
        document.getElementById("aa").innerHTML
      }" preserveAspectRatio=${
        document.getElementById("aa").innerHTML
      }"xMidYMid meet${document.getElementById("aa").innerHTML}" viewBox=${
        document.getElementById("aa").innerHTML
      }"0 0 32 32${document.getElementById("aa").innerHTML}"><path fill=${
        document.getElementById("aa").innerHTML
      }"currentColor${document.getElementById("aa").innerHTML}" d=${
        document.getElementById("aa").innerHTML
      }"m30 10.68l-2-6A1 1 0 0 0 27 4H5a1 1 0 0 0-1 .68l-2 6A1.19 1.19 0 0 0 2 11v6a1 1 0 0 0 1 1h1v10h2V18h6v10h16V18h1a1 1 0 0 0 1-1v-6a1.19 1.19 0 0 0 0-.32ZM26 26H14v-8h12Zm2-10h-4v-4h-2v4h-5v-4h-2v4h-5v-4H8v4H4v-4.84L5.72 6h20.56L28 11.16Z${
        document.getElementById("aa").innerHTML
      }"></path></svg>${
        document.getElementById("aa").innerHTML
      }n                      </div>${
        document.getElementById("aa").innerHTML
      }n                      ${
        document.getElementById("aa").innerHTML
      }n                      <div>${
        document.getElementById("aa").innerHTML
      }n                      <span class=${
        document.getElementById("aa").innerHTML
      }"promise-delivery-messages__click-and-collect--text${
        document.getElementById("aa").innerHTML
      }">").concat(clickAndCollectVars.general.messageText, "</span>${
        document.getElementById("aa").innerHTML
      }n                      ").concat(clickAndCollectVars.general.commentTextDisplayBool ? "${
        document.getElementById("aa").innerHTML
      }n                            <span style=${
        document.getElementById("aa").innerHTML
      }"display:block; margin-top:3px; color: ".concat(styles.comment_color, "; font-size: ").concat(styles.comment_size, "${
        document.getElementById("aa").innerHTML
      }" class=${
        document.getElementById("aa").innerHTML
      }"promise-delivery-messages__click-and-collect--sm-message${
        document.getElementById("aa").innerHTML
      }">${
        document.getElementById("aa").innerHTML
      }n                             ").concat(clickAndCollectVars.general.commentText, "${
        document.getElementById("aa").innerHTML
      }n                            </span>${
        document.getElementById("aa").innerHTML
      }n                            ") : "", "${
        document.getElementById("aa").innerHTML
      }n  ${
        document.getElementById("aa").innerHTML
      }n                      </div>${
        document.getElementById("aa").innerHTML
      }n                      </div>${
        document.getElementById("aa").innerHTML
      }n                      ${
        document.getElementById("aa").innerHTML
      }n                      </div>${
        document.getElementById("aa").innerHTML
      }n                          </div>${
        document.getElementById("aa").innerHTML
      }n                "); //insert element
      
          var elementToInsert = document.getElementsByClassName("block--description")[0].getElementsByClassName("description")[0];
          elementToInsert.after(messageContainerDiv);
        } // end insertHtmlCodeToPage function
      
        /* -- END INSERT HTML CODE TO PAGE FUNCTION  -- */
      
      } // end promiseDeliveryMessage function
      
      
      promiseDeliveryMessage();
        
        `
    );
  };
  // end generate code

  console.log("readyScriptCodeAsString: ", readyScriptCodeAsString);
  /* ## END STATES AND FUNCTIONS PROMISE DELIVERY MESSAGE ## */

  return (
    <div className="promise-delivery-message">
      {/* **--** START JS OPERETOR INSERT TO CODE **--** */}
      <div style={{ visibile: "hidden" }} id="aa">
        \
      </div>
      {/* **--** END JS OPERETOR INSERT TO CODE **--** */}

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
            <img
              src={props.imgUrl}
              className="popupImg"
              style={{ width: "200px" }}
            />

            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.text}</p>
            <div className="popupInputsContainer">
              <div
                style={{ textTransform: "uppercase", marginBottom: "40px" }}
                className="popupInputsContainer__wrapper"
              >
                <h2 className="promise-delivery-message__section-title">
                  Relevant links:
                </h2>
                <p style={{ marginBottom: "10px" }}>
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1Ee5Xc9NFYW2dGxAgeBQGg_tJ8H3f-MC3rT9F-9hwKLE/edit?usp=sharing"
                  >
                    instructions document
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1xorrJrgQvCBKnwZUVuCTvi4KNcO2oY1uLYLetxUx9S8/edit?usp=sharing"
                  >
                    google sheet templates
                  </a>{" "}
                  <span style={{ color: "red" }}>(please make a copy!)</span>
                </p>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <h2 className="promise-delivery-message__section-title">
                  Upload csv files:
                </h2>
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"general"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef1}
                    onFileLoad={(data) =>
                      handleOnFileLoad(data, setGeneralDirectDataFromCsv)
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef1)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"prios_clickandcollect"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef2}
                    onFileLoad={(data) =>
                      handleOnFileLoad(
                        data,
                        setPriosClickandcollectDirectDataFromCsv
                      )
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef2)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"in_prios_override_clickandcollect"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef3}
                    onFileLoad={(data) =>
                      handleOnFileLoad(
                        data,
                        setInPriosOverrideClickandcollectDirectDataFromCsv
                      )
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef3)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"strict_overrides_clickandcollect"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef4}
                    onFileLoad={(data) =>
                      handleOnFileLoad(
                        data,
                        setStrictOverrideClickandcollectDirectDataFromCsv
                      )
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef4)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"general_settings_clickandcollect"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef5}
                    onFileLoad={(data) =>
                      handleOnFileLoad(
                        data,
                        setGeneralSettingsClickandcollectDirectDataFromCsv
                      )
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef5)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"prios_delivery"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef6}
                    onFileLoad={(data) =>
                      handleOnFileLoad(data, setPriosDeliverytDirectDataFromCsv)
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef6)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"in_prios_override_delivery"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef7}
                    onFileLoad={(data) =>
                      handleOnFileLoad(
                        data,
                        setInPriosOverrideDeliverytDirectDataFromCsv
                      )
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef7)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"strict_overrides_delivery"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef8}
                    onFileLoad={(data) =>
                      handleOnFileLoad(
                        data,
                        setStrictOverrideDeliveryDirectDataFromCsv
                      )
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef8)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper promise-delivery-message__section">
                <div className="promise-delivery-message__text">
                  <p>
                    File name: <span>"general_settings_delivery"</span>
                  </p>
                </div>
                <div className="promise-delivery-message__btn">
                  <CSVReader
                    ref={buttonRef9}
                    onFileLoad={(data) =>
                      handleOnFileLoad(
                        data,
                        setGeneralSettingsDeliveryDirectDataFromCsv
                      )
                    }
                    onError={handleOnError}
                    noClick
                    noDrag
                    onRemoveFile={handleOnRemoveFile}
                  >
                    {({ file }) => (
                      <aside
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 10,
                        }}
                      >
                        <Button
                          style={{ maxWidth: "50%" }}
                          variant="contained"
                          onClick={(e) => handleOpenDialog(e, buttonRef9)}
                        >
                          upload csv
                        </Button>

                        <div
                          style={{
                            height: 45,
                            lineHeight: 2.5,
                            marginTop: 5,
                            marginBottom: 5,
                            paddingLeft: 13,
                            paddingTop: 3,
                            width: "60%",
                            color: "green",
                          }}
                        >
                          {file && file.name}
                        </div>
                      </aside>
                    )}
                  </CSVReader>
                </div>
              </div>

              <div className="popupInputsContainer__wrapper primary-button-container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={checkIfAllFilesAreUploaded}
                >
                  Generate script
                </Button>
              </div>
              {generateCode && (
                <div>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={copyToClipFunc}
                  >
                    copy script
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
                    <code>{readyScriptCodeAsString}</code>
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
