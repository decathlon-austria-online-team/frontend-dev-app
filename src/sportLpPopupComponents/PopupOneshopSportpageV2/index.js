import React, { useState, useEffect } from "react";
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

// import papaparse:
import { CSVReader } from 'react-papaparse';
const buttonRef = React.createRef();

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

export default function PopupOneshopSportpageV2(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  // ---------------------------
  const [pageWithOrWithoutMenu, setPageWithOrWithoutMenu] = useState('yes');
  const [menuDataFromCsv, setMenuDataFromCsv] = useState(false);
  const [menuReadyDataToMap, setMenuReadyDataToMap] = useState(false);

  const [headerImgSrc, setHeaderImgSrc] = useState('');
  const [headerTitle, setHeaderTitle] = useState('');
  const [headerText, setHeaderText] = useState('');

    // code of component
    const [generateCode, setGenerateCode] = useState(false);
    const [codeOfComponent, setCodeOfComponent] = useState("");

  // copy to clip func
  const [showSuccessCopied, setShowSuccessCopied] = useState(false);
  const copyToClipFunc = () => {
    setShowSuccessCopied(true);
    copy(codeOfComponent);

    setTimeout(function () {
      setShowSuccessCopied(false);
    }, 2000);
  };


        /* start papaparse functions */
        const handleOpenDialog = (e) => {
            // Note that the ref is set async, so it might be null at some point
            if (buttonRef.current) {
              buttonRef.current.open(e)
            }
          }
    
          const handleOnFileLoad = (data) => {
            console.log('---------------------------')
            console.log(data);
            setMenuDataFromCsv(data);
            console.log('---------------------------')
          }
    
          const handleOnError = (err, file, inputElem, reason) => {
            console.log(err)
          }    
    
    
          const handleOnRemoveFile = (data) => {
            console.log('---------------------------')
            console.log(data)
            console.log('---------------------------')
          }
        
          const handleRemoveFile = (e) => {
            // Note that the ref is set async, so it might be null at some point
            if (buttonRef.current) {
              buttonRef.current.removeFile(e)
            }
          }
          /* end papaparse functions */


          const convertCsvDataToReadyArrToMap = () => {
            let dataFromCsv = menuDataFromCsv;
            let dataFromCsvArr = [];
          
           
          
            // convert dataFromCsv obj to array
            for(let i = 0; i < dataFromCsv.length; i++) {
               if(dataFromCsv[i] != undefined) {
                 dataFromCsv[i] = dataFromCsv[i].data;
                 dataFromCsvArr.push(dataFromCsv[i]);
               }
             }
             dataFromCsvArr = dataFromCsvArr.slice(1);
             console.log('dataFromCsvArr: ', dataFromCsvArr);
           
             // slice each array of category to top and subs
             for(let i = 0; i < dataFromCsvArr.length; i++) {
               if(dataFromCsvArr[i] != undefined) {
                 dataFromCsvArr[i] = [dataFromCsvArr[i].slice(0, 4), dataFromCsvArr[i].slice(4, dataFromCsvArr[i].length)];
               }
             }
             console.log('dataFromCsvArrAfterLoop: ', dataFromCsvArr);
           
           
             //slice each sub into array
             for(let i = 0; i < dataFromCsvArr.length; i++) {
               if(dataFromCsvArr[i] != undefined) {
                 let newArrOfSubs = [];
                  for(let j = 0; j < dataFromCsvArr[i][1].length; j+=3) {
                   newArrOfSubs.push([dataFromCsvArr[i][1][j], dataFromCsvArr[i][1][j + 1], dataFromCsvArr[i][1][j + 2]]);
                  }
                  dataFromCsvArr[i][1] = newArrOfSubs;
               }
             }
          
             // remove empty arrays
             if(dataFromCsvArr != undefined) {
               for(let i = 0; i < dataFromCsvArr.length; i++) { 
                 if(dataFromCsvArr[i] != undefined) {
                  for(let j = 0; j < dataFromCsvArr[i][1].length; j++) {
                    dataFromCsvArr[i][1][j] = dataFromCsvArr[i][1][j].filter((e) => e);
                  }
                 }
              }
            }
          
               // remove empty arrays
               if(dataFromCsvArr != undefined) {
                for(let i = 0; i < dataFromCsvArr.length; i++) { 
                  if(dataFromCsvArr[i] != undefined) {
                   for(let j = 0; j < dataFromCsvArr[i][1].length; j++) {
                    dataFromCsvArr[i][1] = dataFromCsvArr[i][1].filter((e) => e.length);
                   }
                  }
               }
             }
          

           // console.log('dataFromCsvArrAfterLoop2: ', dataFromCsvArr);

          // set the var to state
            setMenuReadyDataToMap(dataFromCsvArr);
          
          
            
          }
          //console.log('menuReadyDataToMap: ', menuReadyDataToMap);
          useEffect(() => {
            convertCsvDataToReadyArrToMap();
          }, [menuDataFromCsv]);


  //console.log('ddddddgg: ', menuDataFromCsv);


  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(
        `
        <!-- ***************** START ONESHOP SPORT PAGE  ***************** -->
        <!-- START SPORT PAGE SCRIPTS -->
        <link rel="stylesheet" href="https://decathlon-source.eu/frontend/swiperjs-files-v-6-8-4/swiper-bundle.css" />
        <script src="https://decathlon-source.eu/frontend/swiperjs-files-v-6-8-4/swiper-bundle.js"></script>
        <script
          src="https://kit.fontawesome.com/68857e56a4.js"
          crossorigin="anonymous"
        ></script>
        <link rel="stylesheet" href="https://decathlon-source.eu/frontend/sport-pages/code-files/sport-page/style.css">
        <!-- END SPORT PAGE SCRIPTS -->

        <style>
          #header-img {
            background-image: url('${headerImgSrc}') !important;
          }

          ${pageWithOrWithoutMenu != "yes" ? (
              `
          .sportpage {
              background-color: #f4f5f7 !important;
            }
            
            @media(min-width: 1024px) {
              .sportpage__nav-container {
                  display: none !important;
              }
            
              .sportpage__header, .sportpage__content {
                  padding-left: 0 !important;
              }
            }
              `
          ) : (``)}
        </style>
        
        
        
        <div class="sportpage">
          <div class="sportpage__header">
            <div class="sportpage__header--text">
              <h1>${headerTitle}</h1>
              <p>
                 ${headerText}
              </p>
            </div>
            <div class="sportpage__header--img">
              <div id="header-img"></div>
            </div>
          </div>
        
          <div class="sportpage__nav-container">
            <nav class="sportpage__nav">
              <ul class="sportpage__menu">
              ${menuReadyDataToMap && menuReadyDataToMap.map((el, index) => (
        
                `
                ${el[0][2] === "yes" ? (
                  `
                  <li class="sportpage__menu-item">
                  <div class="sportpage__menu-item-content">
                    <div class="sportpage__menu-item-content--left">
                      <div class="sportpage__menu-item-content--left-img">
                        <img
                          alt="${el[0][0]}"
                          src="${el[0][1]}"
                        />
                      </div>
                      <div class="sportpage__menu-item-content--left-text">
                       ${el[0][0]}
                      </div>
                    </div>
                    <div class="sportpage__menu-item-content--right">
                      <i class="fas fa-plus"></i>
                      <i class="fas fa-minus"></i>
                    </div>
                  </div>
                  <ul class="sportpage__submenu">
                  ${el[1].map((sub) => (
                    `
                    <li class="sportpage__submenu-item">
                    <a href="${sub[1]}">
                      <div class="sportpage__submenu-item-content">
                        <div class="sportpage__submenu-item-content--left" ${sub[2] === "yes" ? `style="font-weight: bold; font-style: italic;"` : ``}>
                           ${sub[0]}
                        </div>
                        <div class="sportpage__submenu-item-content--right">
                          <i class="fas fa-chevron-right"></i>
                        </div>
                      </div>
                    </a>
                  </li>
                    `
                  )).join('')}
                  </ul>
                </li>
                  `
                ) : (
        
                  `
                  <li class="sportpage__menu-item">
                  <a href="${el[0][3]}">
                    <div class="sportpage__menu-item-content">
                      <div class="sportpage__menu-item-content--left">
                        <div class="sportpage__menu-item-content--left-img">
                          <img
                            alt="${el[0][0]}"
                            src="${el[0][1]}"
                          />
                        </div>
                        <div class="sportpage__menu-item-content--left-text">
                           ${el[0][0]}
                        </div>
                      </div>
                      <div class="sportpage__menu-item-content--right">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                    <ul class="sportpage__submenu"></ul>
                  </a>
                </li>
                  `
                )}
                `
              
              )).join('')}
        
        
              </ul>
            </nav>
          </div>
        
        
          
          <div class="sportpage__content">
          <!-- *** START SPORT PAGE COMPONENTS - ADD BELOW *** -->
        

          <!-- *** END SPORT PAGE COMPONENTS - ADD ABOVE *** -->
          </div>
         
         
        </div>
        
        
        <script src="https://decathlon-source.eu/frontend/sport-pages/code-files/sport-page/index.js"></script>
        
        
        
        <!-- ***************** END ONESHOP SPORT PAGE  ***************** -->
        
            `
    );
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
                    label="page title"
                    style={{ width: "80%" }}
                    onChange={(e) => setHeaderTitle(e.target.value)}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="page description"
                    style={{ width: "80%" }}
                    multiline
                    rows={6}
                    onChange={(e) => setHeaderText(e.target.value)}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="page image src"
                    style={{ width: "80%" }}
                    onChange={(e) => setHeaderImgSrc(e.target.value)}
                  />
                </div>
              </div>
                
            

            <div className="popupInputsContainer__sectionWrapper">
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="page_with_or_without_menu"
                        name="page_with_or_without_menu"
                        value={
                        pageWithOrWithoutMenu
                        }
                        onChange={(e) =>
                        setPageWithOrWithoutMenu(e.target.value)
                        } 
                            >
                        <FormControlLabel
                        value="yes"
                        control={<Radio style={{color: '#0082C3'}}/>}
                        label="I want to create a page with a menu"
                        />
                        <FormControlLabel
                            value="no"
                        control={<Radio style={{color: '#0082C3'}} />}
                        label="I want to create a page without a menu"
                        />
                        </RadioGroup>
                </FormControl>
            </div>
 

            {pageWithOrWithoutMenu === "yes" ? (
            <div className="popupInputsContainer__sectionWrapper">
            <div style={{marginBottom: '10px'}}>
              <a style={{display: 'block', cursor: 'pointer', color: '#0082C3'}} href="https://docs.google.com/spreadsheets/d/1Rb8n7hJPyIWj3MwQN8Or2zqGbEL4niJr97tFQ5ymklI/edit?usp=sharing" target="_blank">Google Sheet Template</a>
              <span style={{display: 'block', color: 'red', marginBottom: '16px'}}>Please make a copy and not edit the template! </span>
            </div>
            <div style={{marginBottom: '10px', maxWidth: '40%'}}>
           
                 <CSVReader
                ref={buttonRef}
                onFileLoad={handleOnFileLoad}
                onError={handleOnError}
                noClick
                noDrag
                onRemoveFile={handleOnRemoveFile}
            >
                {({ file }) => (
                <aside
                    style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: 10
                    }}
                >
                    <Button 
                    style={{maxWidth: '50%'}}
                    variant="contained"
                    onClick={handleOpenDialog}
                    >Upload CSV</Button>

                    <div
                    style={{
                        height: 45,
                        lineHeight: 2.5,
                        marginTop: 5,
                        marginBottom: 5,
                        paddingLeft: 13,
                        paddingTop: 3,
                        width: '60%'
                    }}
                    >
                    {file && file.name}
                    </div>

                </aside>
                )}
            </CSVReader>
            </div>
  
        </div>
            ) : (
                <div></div>
            )}



              <div className="popupInputsContainer__wrapper primary-button-container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={generateCodeFunc}
                >
                  Generate Sport Page Code
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
