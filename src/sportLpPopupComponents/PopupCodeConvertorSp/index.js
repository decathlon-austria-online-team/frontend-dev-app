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
import CircularProgress from '@material-ui/core/CircularProgress';

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

const useStylesLoading = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function PopupCodeConvertorSp(props) {
  const classes = useStyles();
  const classesLoading = useStylesLoading();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  /* START STATES */
  const [codeOfSportPageV1, setCodeOfSportPageV1] = useState("");
  const codeOfSportPageV1HandleOnChange = (e) => {
    setCodeOfSportPageV1(e.target.value);
  };

  const [h1HeaderTitle, setH1HeaderTitle] = useState("");
  const [headerTextParagraph, setHeaderTextParagraph] = useState("");
  const [headerImageUrl, setHeaderImageUrl] = useState("");
  const [contentComponents, setContentComponents] = useState(false);
  const [menuTopItemsState, setMenuTopItemsState] = useState(false);
  const [pageWithOrWithoutMenu, setPageWithOrWithoutMenu] = useState('with-menu');
  const handleOnChangePageWithOrWithoutMenu = (e) => {
    setPageWithOrWithoutMenu(e.target.value);
  };

  /* END STATES */




  function getAndStoreRelevantDataFromV1Code() {
    return new Promise(function(resolve, reject) {
      if(codeOfSportPageV1 === "") {
        alert('No code found in input!')
      } else {
 // convert back the code from string to html
 let catchCodeInTheDiv = document.getElementById('catchV1Code');
 catchCodeInTheDiv.innerHTML = codeOfSportPageV1;

// display loading:
document.getElementById('loading-conversion-message').style.display = "block";

// display sport page v1:
document.getElementById('catchV1Code').style.opacity = "1";
document.getElementById('catchV1Code').style.height = "auto";
document.getElementById('catchV1Code').style.visibility = "visible";

// hide conversion completed message:
document.getElementById('conversion-completed-message').style.display = "none";


// get the header title of the page:
//const h1TitleOfPage = catchCodeInTheDiv.getElementsByTagName('h1')[0] && catchCodeInTheDiv.getElementsByTagName('h1')[0].textContent;
const h1TitleOfPage = catchCodeInTheDiv.getElementsByClassName('sportpage-header__left--title')[0] && catchCodeInTheDiv.getElementsByClassName('sportpage-header__left--title')[0].textContent;
 setH1HeaderTitle(h1TitleOfPage);



// get the header paragraph of the page
const headerParagraphOfPage = catchCodeInTheDiv.getElementsByClassName('sportpage-header__left--subtitle')[0] && catchCodeInTheDiv.getElementsByClassName('sportpage-header__left--subtitle')[0].textContent;
setHeaderTextParagraph(headerParagraphOfPage);

// get the header img url 
const headerImgDiv = catchCodeInTheDiv.getElementsByClassName('sportpage-header__right--img')[0];
const headerImgUrlAllValue = headerImgDiv && getComputedStyle(headerImgDiv).backgroundImage;
const headerImgUrl = headerImgUrlAllValue && headerImgUrlAllValue.slice(5, headerImgUrlAllValue.length - 2);
if(headerImgUrl.includes('https://stoic-bassi-94aeb7.netlify.app')) {
  setHeaderImageUrl(headerImgUrl.slice(38, headerImgUrl.length));
} else {
  setHeaderImageUrl(headerImgUrl);
}


// get components 
const sportpageComponents = catchCodeInTheDiv.getElementsByClassName('sportpage-box');
let sportpageComponentsArrOfData = [];
for(let i = 0; i < sportpageComponents.length; i++) {
  sportpageComponentsArrOfData.push(sportpageComponents[i].innerHTML);
}
setContentComponents(sportpageComponentsArrOfData);


// get menu top categories and category images, and subcategories names and links
const menuTopItems = document.getElementsByClassName('mobile-sportpage-navigation__top-level-item');
let TopItemsArr = [];
for(let i = 0; i < menuTopItems.length; i++) {
  TopItemsArr.push(menuTopItems[i]);
}
setMenuTopItemsState(TopItemsArr);
const subMenus = document.getElementsByClassName('mobile-sportpage-navigation__sublist');
const menuTopItemsText = [];
const menuTopItemsImages = [];
const menuTopItemsImagesAltText = [];
const submenuItemsContent = [];


// loop through menuTopItems
for(let i = 0; i < menuTopItems.length; i++) {
  // get top categories names
  menuTopItemsText.push(menuTopItems[i].getElementsByClassName('mobile-sportpage-navigation__top-level-item--text')[0].textContent);

  // get top categories images and alt text of images
  menuTopItemsImages.push(menuTopItems[i].getElementsByClassName('mobile-sportpage-navigation__top-level-item--img')[0].getElementsByTagName('img')[0].getAttribute('src'));
  menuTopItemsImagesAltText.push(menuTopItems[i].getElementsByClassName('mobile-sportpage-navigation__top-level-item--img')[0].getElementsByTagName('img')[0].getAttribute('alt'));
}

// loop through submenus
for(let i = 0; i < subMenus.length; i++) {
  submenuItemsContent.push(subMenus[i].getElementsByClassName('mobile-sportpage-navigation__second-level-item--content'));
}
resolve();
      }
    });
    
  } // end getAndStoreRelevantDataFromV1Code function



  
  function codeConversionCompeledMessage() {
    // hide loading:
    document.getElementById('loading-conversion-message').style.display = "none";
    // hide sport page v1:
    document.getElementById('catchV1Code').style.opacity = "0";
    document.getElementById('catchV1Code').style.height = "0";
    document.getElementById('catchV1Code').style.visibility = "hidden";
    // display conversion completed message:
    document.getElementById('conversion-completed-message').style.display = "block";
    // display generate new code btn:
    document.getElementById('generate-new-code-btn').style.display = "block";
    document.getElementById('generate-new-code-btn').classList.add('generate-btn-animation-active');

    // display restart btn:
    document.getElementById('restart-btn').style.display = "block";
    // hide execute conversion btn:
     document.getElementById('execute-conversion-btn').style.display = "none";
  }

  function runConversionFuncs() {
    getAndStoreRelevantDataFromV1Code()
    .then(setTimeout(codeConversionCompeledMessage , 3000))
  }



  function restartConversion() {
    setCodeOfSportPageV1('');
        // display execute conversion btn:
        document.getElementById('execute-conversion-btn').style.display = "block";
        // display generate new code btn:
        document.getElementById('generate-new-code-btn').style.display = "none";
        // hide restart btn:
       document.getElementById('restart-btn').style.display = "none";
        // hide conversion completed message:
    document.getElementById('conversion-completed-message').style.display = "none";
    // delete code of component state
    setCodeOfComponent('');
    setGenerateCode(false);
  }



  /* ----------hhhhhh----------------- */

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(`
   <!-- ***************** START ONESHOP SPORT PAGE  ***************** -->
<!-- START SPORT PAGE SCRIPTS -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script
  src="https://kit.fontawesome.com/68857e56a4.js"
  crossorigin="anonymous"
></script>
<link rel="stylesheet" href="https://decathlon-source.eu/frontend/sport-pages/code-files/sport-page/style.css">

<!-- END SPORT PAGE SCRIPTS -->
<style>
#header-img {
  background-image: url('${headerImageUrl}') !important;
}

${pageWithOrWithoutMenu === "without-menu" ? (
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
): (
  ``
)}
</style>





<div class="sportpage">
  <div class="sportpage__header">
    <div class="sportpage__header--text">
      <h1>${h1HeaderTitle}</h1>
      <p>
       ${headerTextParagraph}
      </p>
    </div>
    <div class="sportpage__header--img">
      <div id="header-img"></div>
    </div>
  </div>

  <div class="sportpage__nav-container">
    <nav class="sportpage__nav">
      <ul class="sportpage__menu">
      ${menuTopItemsState && menuTopItemsState.map((el) => (
        el.getElementsByClassName('mobile-sportpage-navigation__sublist')[0].children.length < 2 ? (
          `
          <li class="sportpage__menu-item">
          <a href="${el.getElementsByTagName('a')[0].getAttribute('href')}">
            <div class="sportpage__menu-item-content">
              <div class="sportpage__menu-item-content--left">
                <div class="sportpage__menu-item-content--left-img">
                  <img
                    alt="${el.getElementsByTagName('img')[0].getAttribute('alt')}"
                    src="${el.getElementsByTagName('img')[0].getAttribute('src')}"
                  />
                </div>
                <div class="sportpage__menu-item-content--left-text">
                  ${el.getElementsByClassName('mobile-sportpage-navigation__top-level-item--text')[0].textContent}
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
        ) : (
          `
          <li class="sportpage__menu-item">
          <div class="sportpage__menu-item-content">
            <div class="sportpage__menu-item-content--left">
              <div class="sportpage__menu-item-content--left-img">
                <img
                alt="${el.getElementsByTagName('img')[0].getAttribute('alt')}"
                src="${el.getElementsByTagName('img')[0].getAttribute('src')}"
                />
              </div>
              <div class="sportpage__menu-item-content--left-text">
                ${el.getElementsByClassName('mobile-sportpage-navigation__top-level-item--text')[0].textContent}
              </div>
            </div>
            <div class="sportpage__menu-item-content--right">
              <i class="fas fa-plus"></i>
              <i class="fas fa-minus"></i>
            </div>
          </div>
          <ul class="sportpage__submenu">
          ${Array.from(el.getElementsByClassName('mobile-sportpage-navigation__sublist')[0].children).map((subel) => (
            `
            <li class="sportpage__submenu-item">
            <a href="${subel.getElementsByTagName('a')[0].getAttribute('href')}">
              <div class="sportpage__submenu-item-content">
                <div class="sportpage__submenu-item-content--left">
                ${subel.getElementsByTagName('a')[0].textContent}
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
        )
      )).join('')}
       
      </ul>
    </nav>
  </div>


  <!-- START SPORT PAGE COMPONENTS -->
  <div class="sportpage__content">
  ${contentComponents && contentComponents.map((el) => (
    `<div class="sportpage__content--box">
      ${el}
    </div>
    `
  )).join('')}

    <!--
    <div class="sportpage__content--box"></div>
    <div class="sportpage__content--box"></div>
    <div class="sportpage__content--box"></div>
    <div class="sportpage__content--box"></div>
    <div class="sportpage__content--box"></div>
  -->
  </div>
 <!-- START SPORT PAGE COMPONENTS -->
 
</div>

<style>
.fa-minus {
  display: none;
}
</style>

<script src="https://decathlon-source.eu/frontend/sport-pages/code-files/sport-page/index.js"></script>




<!-- ***************** END ONESHOP SPORT PAGE  ***************** -->

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
                Do you want to convert sport page code that contains or does not contain a menu?
                </p>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>

                    <RadioGroup
                      aria-label="convert_code_width_or_without_menu"
                      name="convert_code_width_or_without_menu"
                      value={pageWithOrWithoutMenu}
                      onChange={handleOnChangePageWithOrWithoutMenu}
                    >
                      <FormControlLabel
                        value="with-menu"
                        control={<Radio />}
                        label="with"
                      />
                      <FormControlLabel
                        value="without-menu"
                        control={<Radio />}
                        label="without"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            <div className="popupInputsContainer__sectionWrapper">
            <p className="popupInputsContainer__titleOfInputsGroup">
                   Sport page version 1 code:
            </p>
            <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="filled-multiline-static"
                    variant="filled"
                    multiline
                    rows={10}
                    label="Add the code here:"
                    style={{ width: "80%" }}
                    onChange={codeOfSportPageV1HandleOnChange}
                    value={codeOfSportPageV1}
                  />
                </div>
            </div>
            <div className={classesLoading.root} id="loading-conversion-message" style={{display: 'none'}}>
             <CircularProgress color="secondary" />
             <p style={{color: 'orange', fontSize: '24px'}}>Code conversion is in progress</p>
           </div>
        
           <div id="conversion-completed-message" style={{display: 'none'}}>
           <div><a href="javascript:void(0);" style={{display: 'none'}} id="restart-btn" onClick={restartConversion}>restart</a></div>
             <p style={{color: 'green', fontSize: '24px', marginTop: '12px'}}> Code conversion completed! 🙂</p>
             <p style={{color: 'green', fontSize: '16px'}}> Please click on the "Generate the new sport page code" button and copy the new code!</p>
           </div>
           
            <div id="catchV1Code"></div>
            

            
            
          
            <div className="popupInputsContainer__wrapper">
            <Button
                  variant="contained"
                  color="secondary"
                  id="execute-conversion-btn"
                  onClick={runConversionFuncs}
                 
                >
                  Execute code conversion
                </Button>
              </div>

              <div className="popupInputsContainer__wrapper">
                <Button
                  variant="contained"
                  color="primary"
                  id="generate-new-code-btn"
                  style={{display: 'none'}}
                  onClick={generateCodeFunc}
                 
                >
                  Generate the new sport page code
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
