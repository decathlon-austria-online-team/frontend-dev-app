import React, {useState, useEffect} from 'react';
import './index.css';

 
 // import material ui for radio btns:
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";

 // import material ui for dropdown:
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

// import images
import screenshotTwoCategories from "../../img/two-categories-screenshot.png";
import screenshotThreeCategories from "../../img/three-categories-screenshot.png";
import screenshotFourCategories from "../../img/four-categories-screenshot.png";
import screenshotBanner1 from "../../img/banner1-screenshot.png";
import screenshotArticle1 from "../../img/article1-screenshot.png";
import screenshotProductsSlider1 from "../../img/products-slider1-screenshot.png";
import screenshotProductsSlider2 from "../../img/products-slider2-screenshot.png";
import screenshotOneshopSportpage from "../../img/oneshop-sportpage-screenshot.png";
import screenshotTrboLoading from "../../img/trbo-loading.png";
import screenshotVideo from "../../img/video-section.png";
import codeImage from "../../img/sport-page-code-convertor.jpg";

// import papaparse:
import { CSVReader } from 'react-papaparse';
const buttonRef = React.createRef();

const useStylesDropdown = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      flex: 1
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const AddNewSportPageV2 = () => {
    const classesDropdown = useStylesDropdown();
    const [pageWithOrWithoutMenu, setPageWithOrWithoutMenu] = useState('yes');
    const [addTypeOfComponent, setAddTypeOfComponent] = useState('type1');
    const [menuDataFromCsv, setMenuDataFromCsv] = useState(false);
    const [menuReadyDataToMap, setMenuReadyDataToMap] = useState(false);
    const [codeOfSportPage, setCodeOfSportPage] = useState(false);



    const addComponentDropdownHandleOnChange = (event) => {
        setAddTypeOfComponent(event.target.value);
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

console.log('menuDataFromCsv: ', menuDataFromCsv);

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



  console.log('dataFromCsvArrAfterLoop2: ', dataFromCsvArr);


// set the var to state
  setMenuReadyDataToMap(dataFromCsvArr);


  
}
console.log('menuReadyDataToMap: ', menuReadyDataToMap);
useEffect(() => {
  convertCsvDataToReadyArrToMap();
}, [menuDataFromCsv]);


const generateSportPageCode = () => {
  
  setCodeOfSportPage(
    `
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



<div class="sportpage">
  <div class="sportpage__header">
    <div class="sportpage__header--text">
      <h1>radsport</h1>
      <p>
        Unser großes Sortiment an Fahrräder verschiedener Kategorien für Damen
        und für Herren: Mountainbikes, Rennräder, Citybikes, E-Bikes,
        Trekkingräder und Klappräder sowie Kinderfahrrädern. Mit unserer
        Fahrradbeleuchtung bist du sicher im dunkeln unterwegs. Ob für den
        Alltag oder ein ambitioniertes Radtraining - DECATHLON hat für jeden das
        richtige und günstige Rad.
      </p>
    </div>
    <div class="sportpage__header--img">
      <div id="header-img"></div>
    </div>
  </div>

  <div class="sportpage__nav-container">
    <nav class="sportpage__nav">
      <ul class="sportpage__menu">
      ${menuReadyDataToMap.map((el, index) => (

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


  <!-- START SPORT PAGE COMPONENTS -->
  <div class="sportpage__content">

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


<script src="https://decathlon-source.eu/frontend/sport-pages/code-files/sport-page/index.js"></script>



<!-- ***************** END ONESHOP SPORT PAGE  ***************** -->

    `
  );
  console.log('hghg: ', codeOfSportPage);
}
    return(
        <div className="create-sport-page page">
            <p className="create-sport-page__how-to-link">How to use</p>
            <div className="create-sport-page__radio-btns">
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

        <div className="create-sport-page__boxes">
                <div className="create-sport-page__editing-zone">
                    
                    <div className="create-sport-page__editing-zone--left">
                    {pageWithOrWithoutMenu === "yes" ? (
                    <div className="create-sport-page__sub-editing-zone create-sport-page__editing-menu">
                        <h2 className="create-sport-page__editing-zone-subtitle">SP Menu</h2>
                        <p className="create-sport-page__editing-zone-download-link">Download CSV template</p>
                        <div className="create-sport-page__editing-zone-btn-container">
                            {/*
                                 <Button variant="contained">Upload CSV</Button>
                            */}

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
                    ) : null}
                </div>
                    


                    <div className="create-sport-page__editing-zone--right">
                    <div className="create-sport-page__sub-editing-zone create-sport-page__editing-header">
                    <h2 className="create-sport-page__editing-zone-subtitle">Header</h2>
                    <div className="create-sport-page__editing-zone-btn-container">
                        <Button variant="contained">Edit header</Button>
                        </div>
                    </div>

                    <div className="create-sport-page__sub-editing-zone create-sport-page__editing-components">
                    <h2 className="create-sport-page__editing-zone-subtitle">add components</h2>
                    <div className="create-sport-page__editing-components-form-container">
                        <FormControl className={classesDropdown.formControl}>
                        <InputLabel id="demo-simple-select-label">Components</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={addTypeOfComponent}
                            onChange={addComponentDropdownHandleOnChange}
                            >
                            <MenuItem value={'2-categories'}>2 categories</MenuItem>
                            <MenuItem value={'3-categories'}>3 categories</MenuItem>
                            <MenuItem value={'4-categories'}>4 categories</MenuItem>
                            <MenuItem value={'products-slider'}>products slider</MenuItem>
                            <MenuItem value={'product-advantages-slider'}>product advantages slider</MenuItem>
                            <MenuItem value={'trbo-slider-placeholder'}>trbo slider placeholder</MenuItem>
                            <MenuItem value={'video'}>video</MenuItem>
                            <MenuItem value={'article'}>article</MenuItem>
                            <MenuItem value={'banner'}>banner</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained">Add</Button>
                    </div>
                    <div className="create-sport-page__editing-components-get-components"></div>
                    </div>
                    </div>



                </div>

                <div className="create-sport-page__available-components">
                <h2 className="create-sport-page__editing-zone-subtitle">Available Components:</h2>
                <div className="create-sport-page__available-components-container">

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">2 categories</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotTwoCategories} />
                        </div>
                    </div>

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">3 categories</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotThreeCategories} />
                        </div>
                    </div>

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">4 categories</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotFourCategories} />
                        </div>
                    </div>

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">products slider</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotProductsSlider1} />
                        </div>
                    </div>

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">product advantages slider</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotProductsSlider2} />
                        </div>
                    </div>

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">trbo slider placeholder</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotTrboLoading} />
                        </div>
                    </div>

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">video</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotVideo} />
                        </div>
                    </div>

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">article</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotArticle1} />
                        </div>
                    </div>

                    <div className="create-sport-page__available-component">
                        <div className="create-sport-page__available-component-content">
                            <h4 className="create-sport-page__available-component-title">banner</h4>
                            <p className="create-sport-page__available-component-preview">preview</p>
                        </div>
                        <div className="create-sport-page__available-component-img">
                            <img src={screenshotBanner1} />
                        </div>
                    </div>

                </div>
                </div>
            </div>
            <button type="button" onClick={generateSportPageCode} >generate!!!</button>
        </div>
    )
}

export default AddNewSportPageV2;