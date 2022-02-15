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

export default function DecaStories(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* ## START STATES AND FUNCTIONS NEW 08/02 ## */
  const [storiesDataFromDb, setStoriesDataFromDb] = useState([]);
  const [previewStory, setPreviewStory] = useState(false);
  const [previewStoryType, setPreviewStoryType] = useState("");
  const [previewStoryTemplateData, setPreviewStoryTemplateData] = useState({});
  const [updateStoryModeBool, setUpdateStoryModeBool] = useState(false);
  const [clickedStoryObjectData, setClickedStoryObjectData] = useState({});
  const [openUpdateStoryAreaElemBool, setOpenUpdateStoryAreaElemBool] =
    useState(false);
  const [
    newDisplayInPagesUrlsFromTextarea,
    setNewDisplayInPagesUrlsFromTextarea,
  ] = useState("");
  const [
    openDeleteStoryMessageAfterClickBool,
    setOpenDeleteStoryMessageAfterClickBool,
  ] = useState(false);
  const [openCreateStoryAreaElemBool, setOpenCreateStoryAreaElemBool] =
    useState(false);
  const [displayLoadingProgressBarBool, setDisplayLoadingProgressBarBool] =
    useState(false);

  // GET DATA FROM DB:
  const getStoriesDataFromDb = () => {
    const client = algoliasearch(
      "OMS093QIQZ",
      "2baf38763a4fce040e0a5ffe4c495f6f"
    );
    const index = client.initIndex("decastories_index");
    index.search().then((result) => {
      setStoriesDataFromDb(result.hits);
    });
  };

  // OPEN PREVIEW STORY (existing story) ON CLICK (CLICK ON ICON)
  const openStoryPreviewOnClick = (e) => {
    getClickedStoryObjectDataFunc(e);
    setPreviewStory(true);
    setPreviewStoryType(e.story_type);
    setPreviewStoryTemplateData({
      backgroung_image_url: e.template_data.backgroung_image_url,
      main_title_text: e.template_data.main_title_text,
      main_title_color: e.template_data.main_title_color,
      subtitle_text: e.template_data.subtitle_text,
      subtitle_color: e.template_data.subtitle_color,
      btn_text: e.template_data.btn_text,
      btn_link_url: e.template_data.btn_link_url,
      btn_text_color: e.template_data.btn_text_color,
      btn_background_color: e.template_data.btn_background_color,
    });
  };

  // OPEN PREVIEW STORY (create new story) ON CLICK (CLICK ON ICON)
  const openNewStoryPreviewOnClick = () => {
    setPreviewStory(true);
  };

  // CLOSE STORY PREVIEW ON CLICK
  const closeStoryPreviewOnClick = () => {
    setPreviewStory(false);
  };

  // OPEN STORY EDITING AREA ON CLICK (CLICK ON ICON)
  const updateStoryOnClick = (e) => {
    setUpdateStoryModeBool(true);
    getClickedStoryObjectDataFunc(e);
  };

  // GET REL OBJECT DATA OF CLICKED STORY
  const getClickedStoryObjectDataFunc = (e) => {
    setClickedStoryObjectData(e);
  };

  // CONCAT THE NEW DISPLAY IN PAGES ARRAY TO THE CURRENT ARRAY
  const pushNewPagesUrlsToDisplayInPagesArrFunc = () => {
    let convertInputTextToArr = newDisplayInPagesUrlsFromTextarea.split(",");
    let copyOfCurrentArrDisplayInPages = [
      ...clickedStoryObjectData.display_in_pages,
    ];
    let concatedArr = copyOfCurrentArrDisplayInPages.concat(
      convertInputTextToArr
    );
    return concatedArr;
  };

  // UPDATE STORY ON CLICK (IN STORY EDITING AREA)
  const sendUpdateStoryRequestBtnOnClick = () => {
    sendUpdateStoryRequestToSheet();
  };

  // SEND UPDATE STORY REQUEST TO GOOGLE SHEET
  const sendUpdateStoryRequestToSheet = () => {
    setDisplayLoadingProgressBarBool(true);
    const ObjToSend = {
      id: null,
      request_status: "pending",
      request_type: "update story",
      request_for_story_id: clickedStoryObjectData.id,
      story_object_code: {
        id: clickedStoryObjectData.id,
        upload_date: clickedStoryObjectData.upload_date,
        duration: clickedStoryObjectData.duration,
        story_type: clickedStoryObjectData.story_type,
        template_data: {
          backgroung_image_url:
            clickedStoryObjectData.template_data.backgroung_image_url,
          main_title_text: clickedStoryObjectData.template_data.main_title_text,
          main_title_color:
            clickedStoryObjectData.template_data.main_title_color,
          subtitle_text: clickedStoryObjectData.template_data.subtitle_text,
          subtitle_color: clickedStoryObjectData.template_data.subtitle_color,
          btn_text: clickedStoryObjectData.template_data.btn_text,
          btn_link_url: clickedStoryObjectData.template_data.btn_link_url,
          btn_text_color: clickedStoryObjectData.template_data.btn_text_color,
          btn_background_color:
            clickedStoryObjectData.template_data.btn_background_color,
        },
        icon_background_image_url:
          clickedStoryObjectData.icon_background_image_url,
        active_all_pages: clickedStoryObjectData.active_all_pages,
        display_in_pages: pushNewPagesUrlsToDisplayInPagesArrFunc(),
        start_date: clickedStoryObjectData.start_date,
        start_hour: clickedStoryObjectData.start_hour,
        end_date: clickedStoryObjectData.end_date,
        end_hour: clickedStoryObjectData.end_hour,
      },
      created_by: props.userDataObjFromSheet.email,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/c8feae53-0533-4a8e-ba5d-e67decf24417",
        ObjToSend
      )
      .then((res) => {
        setDisplayLoadingProgressBarBool(false);
        alert("The data was sent successfully, thanks.");
        setUpdateStoryModeBool(false);
      })
      .catch((err) => {
        setDisplayLoadingProgressBarBool(false);
        alert("Something went wrong. The data was not sent");
        setUpdateStoryModeBool(false);
      });
  }; // end sendUpdateStoryRequestToSheet function

  // OPEN STORY DELETE AREA ON CLICK (CLICK ON ICON)
  const deleteStoryOnClick = (e) => {
    setOpenDeleteStoryMessageAfterClickBool(true);
    getClickedStoryObjectDataFunc(e);
  };

  // SEND DELETE STORY REQUEST TO GOOGLE SHEET
  const sendDeleteStoryRequestBtnOnClick = () => {
    setDisplayLoadingProgressBarBool(true);
    const ObjToSend = {
      id: null,
      request_status: "pending",
      request_type: "delete story",
      request_for_story_id: clickedStoryObjectData.id,
      story_object_code: "",
      created_by: props.userDataObjFromSheet.email,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/c8feae53-0533-4a8e-ba5d-e67decf24417",
        ObjToSend
      )
      .then((res) => {
        setDisplayLoadingProgressBarBool(false);
        alert("The data was sent successfully, thanks.");
        setOpenDeleteStoryMessageAfterClickBool(false);
      })
      .catch((err) => {
        setDisplayLoadingProgressBarBool(false);
        alert("Something went wrong. The data was not sent.");
        setOpenDeleteStoryMessageAfterClickBool(false);
      });
  };

  // OPEN STORY CREATION AREA ON CLICK (CLICK ON ICON)
  const createStoryOnClick = (e) => {
    resetClickedStoryObjectDataFunc();
    setOpenCreateStoryAreaElemBool(true);
  };

  // SEND CREATE STORY REQUEST TO GOOGLE SHEET
  const sendCreateStoryRequestBtnOnClick = () => {
    setDisplayLoadingProgressBarBool(true);

    const ObjToSend = {
      id: null,
      request_status: "pending",
      request_type: "create story",
      request_for_story_id: clickedStoryObjectData.id,
      story_object_code: {
        id: clickedStoryObjectData.id,
        upload_date: clickedStoryObjectData.upload_date,
        duration: clickedStoryObjectData.duration,
        story_type: clickedStoryObjectData.story_type,
        template_data: {
          backgroung_image_url:
            clickedStoryObjectData.template_data.backgroung_image_url,
          main_title_text: clickedStoryObjectData.template_data.main_title_text,
          main_title_color:
            clickedStoryObjectData.template_data.main_title_color,
          subtitle_text: clickedStoryObjectData.template_data.subtitle_text,
          subtitle_color: clickedStoryObjectData.template_data.subtitle_color,
          btn_text: clickedStoryObjectData.template_data.btn_text,
          btn_link_url: clickedStoryObjectData.template_data.btn_link_url,
          btn_text_color: clickedStoryObjectData.template_data.btn_text_color,
          btn_background_color:
            clickedStoryObjectData.template_data.btn_background_color,
        },
        icon_background_image_url:
          clickedStoryObjectData.icon_background_image_url,
        active_all_pages: clickedStoryObjectData.active_all_pages,
        display_in_pages: pushNewPagesUrlsToDisplayInPagesArrFunc(),
        start_date: clickedStoryObjectData.start_date,
        start_hour: clickedStoryObjectData.start_hour,
        end_date: clickedStoryObjectData.end_date,
        end_hour: clickedStoryObjectData.end_hour,
      },
      created_by: props.userDataObjFromSheet.email,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/c8feae53-0533-4a8e-ba5d-e67decf24417",
        ObjToSend
      )
      .then((res) => {
        setDisplayLoadingProgressBarBool(false);
        alert("The data was sent successfully, thanks.");
      })
      .catch((err) => {
        setDisplayLoadingProgressBarBool(false);
        alert("Something went wrong. The data was not sent");
      });
  };

  // RESET clickedStoryObjectData OBJECT
  const resetClickedStoryObjectDataFunc = () => {
    setClickedStoryObjectData({
      id: "",
      upload_date: "",
      duration: "",
      story_type: "",
      template_data: {
        backgroung_image_url: "",
        main_title_text: "",
        main_title_color: "",
        subtitle_text: "",
        subtitle_color: "",
        btn_text: "",
        btn_link_url: "",
        btn_text_color: "",
        btn_background_color: "",
      },

      icon_background_image_url: "",
      img_url: "",
      active_all_pages: true,
      display_in_pages: [],
      start_date: "",
      start_hour: "",
      end_date: "",
      end_hour: "",
    });
  };

  /* ## END STATES AND FUNCTIONS NEW 08/02 ## */

  // END STATES AND FUNCTIONS OF STORIES
  console.log("clickedStoryObjectData: ", clickedStoryObjectData);
  return (
    <div>
      {/* **--** START PREVIEW STORY **--** */}
      {previewStory && (
        <div className="decastories__preview-story--story-container">
          <div
            onClick={closeStoryPreviewOnClick}
            className="decastories__preview-story--close-story-icon"
          >
            X
          </div>
          {clickedStoryObjectData.story_type === "template-1" ? (
            <div
              className="decastories__preview-story--template-1-container"
              style={{
                backgroundImage: `linear-gradient(  rgba(0, 72, 118, 0.4) 48%, rgba(0, 72, 118, 0.1) ), url("${clickedStoryObjectData.template_data.backgroung_image_url}")`,
              }}
            >
              <span
                className="decastories__preview-story--template-1-main-title"
                style={{
                  color: clickedStoryObjectData.template_data.main_title_color,
                }}
              >
                {clickedStoryObjectData.template_data.main_title_text}
              </span>
              <span
                className="decastories__preview-story--template-1-subtitle"
                style={{
                  color: clickedStoryObjectData.template_data.subtitle_color,
                }}
              >
                {clickedStoryObjectData.template_data.subtitle_text}
              </span>
              <div
                className="decastories__preview-story--template-1-cta-btn"
                style={{
                  color: clickedStoryObjectData.template_data.btn_text_color,
                  backgroundColor:
                    clickedStoryObjectData.template_data.btn_background_color,
                }}
              >
                {clickedStoryObjectData.template_data.btn_text}
              </div>
            </div>
          ) : null}
          {/* **--** END PREVIEW STORY **--** */}
        </div>
      )}

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
              {/* **--** START MENU BTNS **--** */}
              <div
                className="popupInputsContainer__sectionWrapper"
                style={{ borderBottom: "none", marginBottom: "30px" }}
              >
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    onClick={getStoriesDataFromDb}
                    color="primary"
                  >
                    view stories database
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => createStoryOnClick()}
                  >
                    create a new story
                  </Button>
                </Stack>
              </div>
              {/* **--** END MENU BTNS **--** */}

              {/* **--** START EDITING AREA **--** */}
              {updateStoryModeBool && (
                <div className="decastories__edit-area">
                  <div
                    className="decastories__edit-close-icon"
                    onClick={() => setUpdateStoryModeBool(false)}
                  >
                    X
                  </div>
                  <div className="decastories__edit-area--story-details">
                    <p>
                      editing story id number:{" "}
                      <span>{clickedStoryObjectData.id}</span>
                    </p>
                    <p>
                      story template:{" "}
                      <span>{clickedStoryObjectData.story_type}</span>
                    </p>
                  </div>
                  <div className="decastories__edit-area--inputs">
                    <div className="decastories__edit-area--input">
                      <span>main title text: </span>
                      <input
                        type="text"
                        value={
                          clickedStoryObjectData.template_data.main_title_text
                        }
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              main_title_text: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>main title color: </span>
                      <input
                        type="text"
                        value={
                          clickedStoryObjectData.template_data.main_title_color
                        }
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              main_title_color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>subtitle text: </span>
                      <input
                        type="text"
                        value={
                          clickedStoryObjectData.template_data.subtitle_text
                        }
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              subtitle_text: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>subtitle color: </span>
                      <input
                        type="text"
                        value={
                          clickedStoryObjectData.template_data.subtitle_color
                        }
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              subtitle_color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>button text: </span>
                      <input
                        type="text"
                        value={clickedStoryObjectData.template_data.btn_text}
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              btn_text: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>button background color: </span>
                      <input
                        type="text"
                        value={
                          clickedStoryObjectData.template_data
                            .btn_background_color
                        }
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              btn_background_color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>button text color: </span>
                      <input
                        type="text"
                        value={
                          clickedStoryObjectData.template_data.btn_text_color
                        }
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              btn_text_color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>button link URL: </span>
                      <input
                        type="text"
                        value={
                          clickedStoryObjectData.template_data.btn_link_url
                        }
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              btn_link_url: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input decastories__edit-area--input-radio">
                      <span>active all pages: </span>
                      <div>
                        <input
                          type="radio"
                          id="decastories__edit-area--active-all-pages-yes"
                          name="edit-area-active-all-pages"
                          value="yes"
                          checked={clickedStoryObjectData.active_all_pages}
                          onChange={(e) =>
                            setClickedStoryObjectData({
                              ...clickedStoryObjectData,
                              active_all_pages: true,
                            })
                          }
                        />
                        <label for="decastories__edit-area--active-all-pages-yes">
                          yes
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="decastories__edit-area--active-all-pages-no"
                          name="edit-area-active-all-pages"
                          value="no"
                          checked={!clickedStoryObjectData.active_all_pages}
                          onChange={(e) =>
                            setClickedStoryObjectData({
                              ...clickedStoryObjectData,
                              active_all_pages: false,
                            })
                          }
                        />
                        <label for="decastories__edit-area--active-all-pages-no">
                          no
                        </label>
                      </div>
                    </div>

                    {clickedStoryObjectData.display_in_pages.length > 0 && (
                      <div
                        className="decastories__edit-area--input"
                        style={{
                          border: "1px solid lightgray",
                          padding: "4px 0",
                          marginTop: "10px",
                          marginbottom: "10px",
                        }}
                      >
                        <span>active in pages: </span>
                        <div style={{ width: "80%" }}>
                          {clickedStoryObjectData.display_in_pages.map((el) => (
                            <div style={{ marginBottom: "2px" }}>
                              <input
                                type="text"
                                value={el}
                                style={{ width: "100%" }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="decastories__edit-area--input">
                      <span>
                        add pages URL's:{" "}
                        <span style={{ fontSize: "10px", display: "block" }}>
                          (Separated by a comma)
                        </span>
                      </span>
                      <textarea
                        style={{ width: "80%" }}
                        type="text"
                        onChange={(e) =>
                          setNewDisplayInPagesUrlsFromTextarea(e.target.value)
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>start date (mm/dd/yyyy): </span>
                      <input
                        type="text"
                        value={clickedStoryObjectData.start_date}
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            start_date: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>start hour (example: 11): </span>
                      <input
                        type="number"
                        value={clickedStoryObjectData.start_hour}
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            start_hour: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>end date (mm/dd/yyyy): </span>
                      <input
                        type="text"
                        value={clickedStoryObjectData.end_date}
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            end_date: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>end hour (example: 11): </span>
                      <input
                        type="number"
                        value={clickedStoryObjectData.end_hour}
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            end_hour: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>duration (ms): </span>
                      <input
                        type="number"
                        value={clickedStoryObjectData.duration}
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            duration: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>
                        background img URL:
                        <span style={{ fontSize: "10px", display: "block" }}>
                          (1000*1000)
                        </span>
                      </span>
                      <input
                        type="text"
                        value={
                          clickedStoryObjectData.template_data
                            .backgroung_image_url
                        }
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              backgroung_image_url: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>
                        background icon img URL:
                        <span style={{ fontSize: "10px", display: "block" }}>
                          (100*100)
                        </span>
                      </span>
                      <input
                        type="text"
                        value={clickedStoryObjectData.icon_background_image_url}
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            icon_background_image_url: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--update-btn">
                      {displayLoadingProgressBarBool && (
                        <div style={{ margin: "10px 0" }}>
                          <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                          </Box>
                        </div>
                      )}
                      <button onClick={sendUpdateStoryRequestBtnOnClick}>
                        UPDATE STORY
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* **--** END EDITING AREA **--** */}

              {/* **--** START CREATE AREA **--** */}
              {openCreateStoryAreaElemBool && (
                <div className="decastories__edit-area">
                  <div
                    className="decastories__edit-close-icon"
                    onClick={() => setOpenCreateStoryAreaElemBool(false)}
                  >
                    X
                  </div>

                  <div onClick={() => setPreviewStory(true)}>
                    <PreviewIcon
                      style={{
                        fontSize: "14px",
                        cursor: "pointer",
                        margin: "3px",
                      }}
                    />
                  </div>

                  <div className="decastories__edit-area--story-details">
                    <label for="story-templates">
                      Choose a story template:
                    </label>

                    <select
                      name="story-templates"
                      id="story-templates"
                      onChange={(e) =>
                        setClickedStoryObjectData({
                          ...clickedStoryObjectData,
                          story_type: e.target.value,
                        })
                      }
                    >
                      <option value=""></option>
                      <option value="template-1">template-1</option>
                    </select>
                  </div>
                  <div className="decastories__edit-area--inputs">
                    <div className="decastories__edit-area--input">
                      <span>main title text: </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              main_title_text: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>main title color: </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              main_title_color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>subtitle text: </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              subtitle_text: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>subtitle color: </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              subtitle_color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>button text: </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              btn_text: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>button background color: </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              btn_background_color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>button text color: </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              btn_text_color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>button link URL: </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              btn_link_url: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input decastories__edit-area--input-radio">
                      <span>active all pages: </span>
                      <div>
                        <input
                          type="radio"
                          id="decastories__edit-area--active-all-pages-yes"
                          name="edit-area-active-all-pages"
                          value="yes"
                          onChange={(e) =>
                            setClickedStoryObjectData({
                              ...clickedStoryObjectData,
                              active_all_pages: true,
                            })
                          }
                        />
                        <label for="decastories__edit-area--active-all-pages-yes">
                          yes
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="decastories__edit-area--active-all-pages-no"
                          name="edit-area-active-all-pages"
                          value="no"
                          onChange={(e) =>
                            setClickedStoryObjectData({
                              ...clickedStoryObjectData,
                              active_all_pages: false,
                            })
                          }
                        />
                        <label for="decastories__edit-area--active-all-pages-no">
                          no
                        </label>
                      </div>
                    </div>

                    {clickedStoryObjectData.display_in_pages &&
                      clickedStoryObjectData.display_in_pages.length > 0 && (
                        <div
                          className="decastories__edit-area--input"
                          style={{
                            border: "1px solid lightgray",
                            padding: "4px 0",
                            marginTop: "10px",
                            marginbottom: "10px",
                          }}
                        >
                          <span>active in pages: </span>
                          <div style={{ width: "80%" }}>
                            {clickedStoryObjectData.display_in_pages.map(
                              (el) => (
                                <div style={{ marginBottom: "2px" }}>
                                  <input
                                    type="text"
                                    value={el}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    <div className="decastories__edit-area--input">
                      <span>
                        add pages URL's:{" "}
                        <span style={{ fontSize: "10px", display: "block" }}>
                          (Separated by a comma)
                        </span>
                      </span>
                      <textarea
                        style={{ width: "80%" }}
                        type="text"
                        onChange={(e) =>
                          setNewDisplayInPagesUrlsFromTextarea(e.target.value)
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>start date (mm/dd/yyyy): </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            start_date: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>start hour (example: 11): </span>
                      <input
                        type="number"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            start_hour: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>end date (mm/dd/yyyy): </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            end_date: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>end hour (example: 11): </span>
                      <input
                        type="number"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            end_hour: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>duration (ms): </span>
                      <input
                        type="number"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            duration: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>
                        background img URL:
                        <span style={{ fontSize: "10px", display: "block" }}>
                          (1000*1000)
                        </span>
                      </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            template_data: {
                              ...clickedStoryObjectData.template_data,
                              backgroung_image_url: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--input">
                      <span>
                        background icon img URL:
                        <span style={{ fontSize: "10px", display: "block" }}>
                          (100*100)
                        </span>
                      </span>
                      <input
                        type="text"
                        onChange={(e) =>
                          setClickedStoryObjectData({
                            ...clickedStoryObjectData,
                            icon_background_image_url: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="decastories__edit-area--update-btn">
                      {displayLoadingProgressBarBool && (
                        <div style={{ margin: "10px 0" }}>
                          <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                          </Box>
                        </div>
                      )}
                      <button onClick={sendCreateStoryRequestBtnOnClick}>
                        CREATE STORY
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* **--** END CREATE AREA **--** */}

              {/* **--** START DELETE MESSAGE AREA **--** */}
              {openDeleteStoryMessageAfterClickBool && (
                <div className="decastories__delete-area">
                  <p>are you sure? (story id: {clickedStoryObjectData.id})</p>
                  {displayLoadingProgressBarBool && (
                    <div style={{ margin: "10px 0" }}>
                      <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                      </Box>
                    </div>
                  )}
                  <button
                    style={{ backgroundColor: "green", color: "#fff" }}
                    onClick={sendDeleteStoryRequestBtnOnClick}
                  >
                    yes, I want to delete this story
                  </button>

                  <button
                    style={{ backgroundColor: "red", color: "#fff" }}
                    onClick={() =>
                      setOpenDeleteStoryMessageAfterClickBool(false)
                    }
                  >
                    no
                  </button>
                </div>
              )}

              {/* **--** END DELETE MESSAGE AREA **--** */}

              {/* **--** START VIEW STORIES DATABASE **--** */}
              <div>
                {storiesDataFromDb.length > 0 && (
                  <span>total stories: {storiesDataFromDb.length}</span>
                )}

                {storiesDataFromDb.map((e, i) => (
                  <div
                    style={{
                      border: "1px solid #eee",
                      padding: "12px",
                      marginBottom: "12px",
                      backgroundColor: "#004876",
                      color: "#fff",
                      position: "relative",
                    }}
                  >
                    <div className="decastories_view-story-btns">
                      <PreviewIcon
                        style={{
                          fontSize: "14px",
                          cursor: "pointer",
                          margin: "3px",
                        }}
                        onClick={() => openStoryPreviewOnClick(e)}
                      />
                      <EditIcon
                        style={{
                          fontSize: "14px",
                          cursor: "pointer",
                          margin: "3px",
                        }}
                        onClick={() => updateStoryOnClick(e)}
                      />

                      <DeleteIcon
                        style={{
                          fontSize: "14px",
                          cursor: "pointer",
                          margin: "3px",
                        }}
                        onClick={() => deleteStoryOnClick(e)}
                      />
                    </div>

                    <div className="decastories__view-story-section">
                      <p>story id: {e.id}</p>
                      <p>story type: {e.story_type}</p>
                    </div>

                    <div className="decastories__view-story-section">
                      <p>main title: {e.template_data.main_title_text}</p>
                      <p>subtitle: {e.template_data.subtitle_text}</p>
                      <p>btn text: {e.template_data.btn_text}</p>
                      <p>btn link url: {e.template_data.btn_link_url}</p>
                    </div>

                    <div className="decastories__view-story-section">
                      <p>
                        active all pages: {e.active_all_pages ? "yes" : "no"}
                      </p>
                      <p>
                        active in pages:{" "}
                        {e.display_in_pages.map((p, index) => (
                          <span style={{ display: "block" }}>{p}</span>
                        ))}
                      </p>
                    </div>

                    <div className="decastories__view-story-section">
                      <p>start date: {e.start_date} (mm/dd/yyyy)</p>
                      <p>start hour: {e.start_hour}</p>
                      <p>end date: {e.end_date} (mm/dd/yyyy)</p>
                      <p>end hour: {e.end_hour}</p>
                    </div>

                    <div className="decastories__view-story-section">
                      <p>story duration: {e.duration} ms</p>
                    </div>

                    <div className="decastories__view-story-section">
                      <div>
                        background-image:
                        <img
                          style={{ width: "120px", display: "block" }}
                          src={e.template_data.backgroung_image_url}
                        />
                      </div>
                    </div>
                    {updateStoryModeBool && (
                      <div style={{ margin: "10px 0", cursor: "pointer" }}>
                        <button onClick={sendUpdateStoryRequestBtnOnClick}>
                          update story
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* **--** END VIEW STORIES DATABASE **--** */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
