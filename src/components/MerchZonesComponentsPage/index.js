import React, { useState, useEffect } from "react";
import "./index.css";

// import external installations
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-html";
import copy from "copy-to-clipboard";

// import material ui:
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/Done";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// import images
import screenshotSimilarCategories from "../../img/similar-categories-screenshots.png";

// import popups components
import SimilarCategories from "../../generalComponents/SimilarCategories";

const useStylesImgList = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    //backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    //width: 500,
    // height: 450
    width: 600,
    height: 550,
  },
  icon: {
    //color: 'rgba(255, 255, 255, 0.54)',
    color: "#fff",
  },
}));

const MerchZonesComponentsPage = (props) => {
  const classesImgList = useStylesImgList();
  const [imgData, setImgData] = useState([
    {
      img: screenshotSimilarCategories,
      title: "Cross links",
      type: "top merch zone",
      onclick: () => setOpenSimilarCategories(true),
    },
  ]);

  const [getMainCode, setGetMainCode] = useState("");

  // open/close popup states
  const [openSimilarCategories, setOpenSimilarCategories] = useState(false);

  // GENERAL STATES:
  const [codeEditorModeFull, setCodeEditorModeFull] = useState(false);

  // copy to clip func
  const [showSuccessCopied, setShowSuccessCopied] = useState(false);
  const copyToClipFunc = () => {
    setShowSuccessCopied(true);
    copy(getMainCode);

    setTimeout(function () {
      setShowSuccessCopied(false);
    }, 2000);
  };

  useEffect(() => {
    // console.log('getMainCode: ', getMainCode);
  }, [getMainCode]);
  // console.log('sportl3 userDataObjFromSheet: ', props.userDataObjFromSheet);
  return (
    <div className="sportLPV3 page">
      <Typography variant="h3" component="h2" gutterBottom className="title">
        merch zones
      </Typography>

      <div className="sportLPV3__content">
        <div
          className="sportLPV3__components"
          style={codeEditorModeFull ? { width: "0" } : {}}
        >
          <div
            className="sportLPV3__content-title"
            style={{ marginBottom: "10px" }}
            style={
              codeEditorModeFull
                ? { display: "none" }
                : { marginBottom: "10px" }
            }
          >
            <p>Available components:</p>
            {/*
                    <Button variant="contained">
                       How to use
                    </Button>
                     */}
            <ImageListItem
              key="Subheader"
              cols={2}
              style={{ height: "auto", listStyle: "none" }}
            >
              <ListSubheader component="div">
                <LiveHelpIcon style={{ color: "#0082C3", opacity: "0" }} />
              </ListSubheader>
            </ImageListItem>
          </div>

          <div className={classesImgList.root}>
            <ImageList rowHeight={180} className={classesImgList.imageList}>
              {imgData.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item.img} alt={item.title} />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.type}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${item.title}`}
                        className={classesImgList.icon}
                        onClick={item.onclick}
                      >
                        <AddToQueueIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>

        <div
          className="sportLPV3__code-editor"
          style={codeEditorModeFull ? { width: "100%" } : {}}
        >
          <div
            className="sportLPV3__content-title"
            style={{ marginBottom: "10px", position: "relative" }}
          >
            <p style={{ display: "flex", alignItems: "center" }}>
              {!codeEditorModeFull ? (
                <ChevronLeftIcon
                  onClick={() => setCodeEditorModeFull(!codeEditorModeFull)}
                  style={{ color: "lightgray", cursor: "pointer" }}
                />
              ) : (
                <ChevronRightIcon
                  onClick={() => setCodeEditorModeFull(!codeEditorModeFull)}
                  style={{ color: "lightgray", cursor: "pointer" }}
                />
              )}
              Code editor:{" "}
            </p>

            <Button onClick={copyToClipFunc} variant="contained">
              Copy code
            </Button>

            {showSuccessCopied && (
              <div
                style={{
                  margin: "10px 0",
                  position: "absolute",
                  right: "125px",
                }}
              >
                <DoneIcon style={{ color: "green" }} fontSize="small" />
              </div>
            )}
          </div>
          <AceEditor
            mode="html"
            width="100%"
            height="700px"
            theme="monokai"
            fontSize={14}
            onChange={(e) => setGetMainCode(e)}
          />
        </div>
      </div>

      <div className="sportLPV3__popups">
        <SimilarCategories
          imgUrl={screenshotSimilarCategories}
          open={openSimilarCategories}
          handleClose={() => setOpenSimilarCategories(false)}
          userDataObjFromSheet={props.userDataObjFromSheet}
        />
      </div>
    </div>
  );
};

export default MerchZonesComponentsPage;
