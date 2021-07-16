import React, { useEffect, useState } from "react";
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

export default function PopupOneshopSportpage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  get input states and on change func

  const [sliderId, setSliderId] = useState("");
  const sliderIdHandleOnChange = (e) => {
    setSliderId(e.target.value);
  };

  /* -----------------------------*****------------------------------- */
  // HEADER PAGE
  const [oneshopSportpageH1Title, setOneshopSportpageH1Title] = useState("");
  const [oneshopSportpageSubtitle, setOneshopSportpageSubtitle] = useState("");
  const [oneshopSportpageTopImgUrl, setOneshopSportpageTopImgUrl] = useState(
    ""
  );

  // NAV
  const [mainNavData, setMainNavData] = useState([]);

  const handleOnChangeSubCategoryName = (
    e,
    indexOfObjSubCate,
    topLevelState,
    setTopLevelState
  ) => {
    let copyArr = [...topLevelState.subcategories];

    if (copyArr[indexOfObjSubCate] != undefined) {
      copyArr[indexOfObjSubCate].secondLevelCategoryName = e.target.value;
    }

    setTopLevelState({
      ...topLevelState,
      subcategories: copyArr,
    });
  };

  const handleOnChangeSubCategoryUrl = (
    e,
    indexOfObjSubCate,
    topLevelState,
    setTopLevelState
  ) => {
    let copyArr = [...topLevelState.subcategories];

    if (copyArr[indexOfObjSubCate] != undefined) {
      copyArr[indexOfObjSubCate].secondLevelCategoryUrl = e.target.value;
    }

    setTopLevelState({
      ...topLevelState,
      subcategories: copyArr,
    });
  };

  const [amountOfCategories, setAmountOfCategories] = useState(0);
  const [
    amountOfSubcategoriesTopCategory1,
    setAmountOfSubcategoriesTopCategory1,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory2,
    setAmountOfSubcategoriesTopCategory2,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory3,
    setAmountOfSubcategoriesTopCategory3,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory4,
    setAmountOfSubcategoriesTopCategory4,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory5,
    setAmountOfSubcategoriesTopCategory5,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory6,
    setAmountOfSubcategoriesTopCategory6,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory7,
    setAmountOfSubcategoriesTopCategory7,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory8,
    setAmountOfSubcategoriesTopCategory8,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory9,
    setAmountOfSubcategoriesTopCategory9,
  ] = useState(0);
  const [
    amountOfSubcategoriesTopCategory10,
    setAmountOfSubcategoriesTopCategory10,
  ] = useState(0);

  // top level category 1
  const [topLevelCategory1, setTopLevelCategory1] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 2
  const [topLevelCategory2, setTopLevelCategory2] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 3
  const [topLevelCategory3, setTopLevelCategory3] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 4
  const [topLevelCategory4, setTopLevelCategory4] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 5
  const [topLevelCategory5, setTopLevelCategory5] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 6
  const [topLevelCategory6, setTopLevelCategory6] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 7
  const [topLevelCategory7, setTopLevelCategory7] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 8
  const [topLevelCategory8, setTopLevelCategory8] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 9
  const [topLevelCategory9, setTopLevelCategory9] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // top level category 10
  const [topLevelCategory10, setTopLevelCategory10] = useState({
    topLevelCategoryName: "",
    topLevelCategoryProductImgUrl: "",
    toAllProductsAsSubcategoryDisplayBool: "no",
    toAllProductsAsSubcategoryUrl: "",
    subcategories: [
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
      {
        secondLevelCategoryName: "",
        secondLevelCategoryUrl: "",
      },
    ],
  });

  // GENERATE FUNCTIONS
  const sliceSubcategoriesAccordingToNum = () => {
    let copySubArr1 = [...topLevelCategory1.subcategories];
    let sliceSubsTop1 = copySubArr1.slice(0, amountOfSubcategoriesTopCategory1);
    setTopLevelCategory1({
      ...topLevelCategory1,
      subcategories: sliceSubsTop1,
    });

    let copySubArr2 = [...topLevelCategory2.subcategories];
    let sliceSubsTop2 = copySubArr2.slice(0, amountOfSubcategoriesTopCategory2);
    setTopLevelCategory2({
      ...topLevelCategory2,
      subcategories: sliceSubsTop2,
    });

    let copySubArr3 = [...topLevelCategory3.subcategories];
    let sliceSubsTop3 = copySubArr3.slice(0, amountOfSubcategoriesTopCategory3);
    setTopLevelCategory3({
      ...topLevelCategory3,
      subcategories: sliceSubsTop3,
    });

    let copySubArr4 = [...topLevelCategory4.subcategories];
    let sliceSubsTop4 = copySubArr4.slice(0, amountOfSubcategoriesTopCategory4);
    setTopLevelCategory4({
      ...topLevelCategory4,
      subcategories: sliceSubsTop4,
    });

    let copySubArr5 = [...topLevelCategory5.subcategories];
    let sliceSubsTop5 = copySubArr5.slice(0, amountOfSubcategoriesTopCategory5);
    setTopLevelCategory5({
      ...topLevelCategory5,
      subcategories: sliceSubsTop5,
    });

    let copySubArr6 = [...topLevelCategory6.subcategories];
    let sliceSubsTop6 = copySubArr6.slice(0, amountOfSubcategoriesTopCategory6);
    setTopLevelCategory6({
      ...topLevelCategory6,
      subcategories: sliceSubsTop6,
    });

    let copySubArr7 = [...topLevelCategory7.subcategories];
    let sliceSubsTop7 = copySubArr7.slice(0, amountOfSubcategoriesTopCategory7);
    setTopLevelCategory7({
      ...topLevelCategory7,
      subcategories: sliceSubsTop7,
    });

    let copySubArr8 = [...topLevelCategory8.subcategories];
    let sliceSubsTop8 = copySubArr8.slice(0, amountOfSubcategoriesTopCategory8);
    setTopLevelCategory8({
      ...topLevelCategory8,
      subcategories: sliceSubsTop8,
    });

    let copySubArr9 = [...topLevelCategory9.subcategories];
    let sliceSubsTop9 = copySubArr9.slice(0, amountOfSubcategoriesTopCategory9);
    setTopLevelCategory9({
      ...topLevelCategory9,
      subcategories: sliceSubsTop9,
    });

    let copySubArr10 = [...topLevelCategory10.subcategories];
    let sliceSubsTop10 = copySubArr10.slice(
      0,
      amountOfSubcategoriesTopCategory10
    );
    setTopLevelCategory10({
      ...topLevelCategory10,
      subcategories: sliceSubsTop10,
    });
  };

  useEffect(() => {
    generateMainNavData();
  }, [
    topLevelCategory1,
    topLevelCategory2,
    topLevelCategory3,
    topLevelCategory4,
    topLevelCategory5,
    topLevelCategory6,
    topLevelCategory7,
    topLevelCategory8,
    topLevelCategory9,
    topLevelCategory10,
  ]);

  const generateMainNavData = () => {
    // 1. slice the subcategories from all topLevelCategories

    // 2. push all 10 top categories state obj to main nav arr
    let arr = [];
    arr.push(
      topLevelCategory1,
      topLevelCategory2,
      topLevelCategory3,
      topLevelCategory4,
      topLevelCategory5,
      topLevelCategory6,
      topLevelCategory7,
      topLevelCategory8,
      topLevelCategory9,
      topLevelCategory10
    );

    // 3. slice the arr according to ammount of categories
    let slicedArr = arr.slice(0, amountOfCategories);

    setMainNavData(slicedArr);
  };

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  useEffect(() => {
    generateCodeFunc();
  }, [mainNavData]);

  const generateCodeFunc = () => {
    //setGenerateCode(true);
    setCodeOfComponent(`
    <!-- ***************** START ONESHOP SPORT PAGE  ***************** -->
    <!-- START SPORT PAGE SCRIPTS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <link href="https://www.decathlon.at/ecat/static/fontawesome-free-5.15.2-web/css/all.css" rel="stylesheet">
    <script
    src="https://kit.fontawesome.com/68857e56a4.js"
    crossorigin="anonymous"
    ></script>
    <!-- END SPORT PAGE SCRIPTS -->
    
    <link
    rel="stylesheet"
    href="https://decathlon-source.eu/frontend/sport-pages/code-files/components/oneshop-sport-page-v1.css"
    />
    
    <style>
        .sportLp__section-title,
       .products-slider1 {
         background-color: #f4f5f7 !important;
       }
    
       .mobile-sportpage-navigation__top-level-item--text {
        font-style: normal;
       }
    
       .desktop-sportpage-navigation__top-level-item--text {
        color: #242323;
       }
    
       .mobile-sportpage-navigation__top-level-item--icon,
       .desktop-sportpage-navigation__top-level-item--icon,
       .desktop-sportpage-navigation ul li a {
         color: #242323 !important;
       }
    
       .desktop-sportpage-navigation__second-level-item {
         padding-bottom: 5px;
       }

       .products-slider1__display-category-btn p {
        margin-bottom: 0 !important;
    }
    
       /* change top image here*/
       .sportpage-header__right--img {
        background-image: url('${oneshopSportpageTopImgUrl}') !important;
        background-position: center;
    }
     </style>
    
    
    
    
      <div class="sportpage-top-container">
      <!------------------- START MOBILE CODE -------------------> 
          <div class="mobile-sportpage-navigation">
            <h1>${oneshopSportpageH1Title}</h1>
            <nav class="mobile-sportpage-navigation__nav">
              <ul class="mobile-sportpage-navigation__list">
              ${mainNavData
                .map(
                  (el, index) =>
                    ` <li
                  class="mobile-sportpage-navigation__top-level-item"
                  id="mobile-sportpage-navigation__top-level-item${index + 1}"
                >
                  <div
                    class="mobile-sportpage-navigation__top-level-item--container"
                    id="mobile-sportpage-navigation__top-level-item--container${
                      index + 1
                    }"
                    onclick="toggleSublist${index + 1}()"
                  >
                    <div class="mobile-sportpage-navigation__top-level-item--content">
                      <div
                        class="mobile-sportpage-navigation__top-level-item--text"
                        id="mobile-sportpage-navigation__top-level-item--text${
                          index + 1
                        }"
                      >
                      ${el.topLevelCategoryName}
                      </div>
                      <div class="mobile-sportpage-navigation__top-level-item--img">
                        <img
                          src="${el.topLevelCategoryProductImgUrl}"
                          alt="${el.topLevelCategoryName} Foto"
                         
                        />
                      </div>
                    </div>
                    <div class="mobile-sportpage-navigation__top-level-item--icon">
                      <i class="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <ul
                    class="mobile-sportpage-navigation__sublist"
                    id="mobile-sportpage-navigation__sublist${index + 1}"
                  >
                  ${el.subcategories
                    .map(
                      (sub) =>
                        `
                  <li class="mobile-sportpage-navigation__second-level-item">
                    <div class="mobile-sportpage-navigation__second-level-item--icon">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div class="mobile-sportpage-navigation__second-level-item--content">
                      <a href="${sub.secondLevelCategoryUrl}">${sub.secondLevelCategoryName}</a>
                    </div>
                  </li>
                  `
                    )
                    .join("")}

                   ${
                     el.toAllProductsAsSubcategoryDisplayBool === "yes"
                       ? `   
                    <li class="mobile-sportpage-navigation__second-level-item">
                      <div class="mobile-sportpage-navigation__second-level-item--icon">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                      <div class="mobile-sportpage-navigation__second-level-item--content">
                        <a href="${el.toAllProductsAsSubcategoryUrl}">Zu allen Produkten</a>
                      </div>
                    </li>
                    `
                       : ""
                   }
                   
                  </ul>
                </li>`
                )
                .join("")}  
         </ul>
        </li>
       </ul>
      </nav>
      </div>
      <!------------------- END MOBILE CODE ------------------->
      
      
      
      <!------------------- START DESKTOP CODE  ------------------->
          <div class="desktop-sportpage-navigation" id="desktop-sportpage-navigation">
            <nav class="desktop-sportpage-navigation__nav">
              <ul class="desktop-sportpage-navigation__list" id="desktop-sportpage-navigation__list">
              ${mainNavData
                .map(
                  (el, index) =>
                    `
                <li
                class="desktop-sportpage-navigation__top-level-item"
                id="desktop-sportpage-navigation__top-level-item${index + 1}"
              >
                <div
                  class="desktop-sportpage-navigation__top-level-item--container"
                  id="desktop-sportpage-navigation__top-level-item--container${
                    index + 1
                  }"
                 
                >
                  <div class="desktop-sportpage-navigation__top-level-item--content" onclick="toggleDeskList${
                    index + 1
                  }()">
                    <div
                      class="desktop-sportpage-navigation__top-level-item--text"
                      id="desktop-sportpage-navigation__top-level-item--text${
                        index + 1
                      }"
                    >
                    <img src="${el.topLevelCategoryProductImgUrl}" 
                         alt="${el.topLevelCategoryName} Foto" 
                         class="desktop-sportpage-navigation__top-level-text--img">
                    
                    <span>${el.topLevelCategoryName}</span>
                    </div>
                    <div class="desktop-sportpage-navigation__top-level-item--icon">
                      <i class="fas fa-angle-right" id="desktop-arrow${
                        index + 1
                      }"></i>
                    </div>
                  </div>
                </div>
                <ul
                  class="desktop-sportpage-navigation__sublist"
                  id="desktop-sportpage-navigation__sublist${index + 1}"
                >
                ${el.subcategories
                  .map(
                    (sub) =>
                      `
                  <li class="desktop-sportpage-navigation__second-level-item">
                    <div class="desktop-sportpage-navigation__second-level-item--content">
                      <a href="${sub.secondLevelCategoryUrl}">${sub.secondLevelCategoryName}</a>
                    </div>
                  </li>
                
                  `
                  )
                  .join("")}
                 
                ${
                  el.toAllProductsAsSubcategoryDisplayBool === "yes"
                    ? `   
                    <li class="desktop-sportpage-navigation__second-level-item">
                    <div class="desktop-sportpage-navigation__second-level-item--content">
                      <a href="${el.toAllProductsAsSubcategoryUrl}" class="all-products-sub-category">Zu allen Produkten</a>
                    </div>
                  </li>
                 `
                    : ""
                }

                </ul>
              </li>
                `
                )
                .join("")}
               
                    
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
      <!------------------- END DESKTOP CODE ------------------->
      
      
      
      
      <!------------------- START MAIN CONTENT PAGE ------------------->
      <div class="sportpage__main-content">
    
        <!-- START DISPLAY DESKTOP SPORT PAGE HEADER -->
        <div class="sportpage-header">
          <div class="sportpage-header__content">
          <div class="sportpage-header__left">
            <h1 class="sportpage-header__left--title">${oneshopSportpageH1Title}</h1>
            <p class="sportpage-header__left--subtitle">${oneshopSportpageSubtitle}</p>
          </div>
          <div class="sportpage-header__right">
            <div class="sportpage-header__right--img">&nbsp;</div>
          </div>
         </div>
        </div>
        <!-- END DISPLAY DESKTOP SPORT PAGE HEADER -->
    
    
      <!-- START SPORT PAGE COMPONENTS BOXES -->
      
        <!--
        <div class="sportpage-box"></div>
        <div class="sportpage-box"></div>
        <div class="sportpage-box"></div>
        <div class="sportpage-box"></div>
        <div class="sportpage-box"></div>
        <div class="sportpage-box"></div>
        -->
    <!-- END SPORT PAGE COMPONENTS BOXES -->
       </div>
      <!------------------- END MAIN CONTENT PAGE ------------------->
      </div>
      
      
    
    
    <!------------------- START GENERAL NAV JS ------------------->
    <script>
        function openSubMenuOnClick(topListNum, topListNumTitle, subListNum) {
         subListNum.style.opacity = "1";
         subListNum.style.visibility = "visible";
         subListNum.style.height = "auto";
         
         
         topListNum.style.backgroundColor = "#fff";
         topListNum.style.borderTop = "2px solid #0082c3";
         
         topListNumTitle.style.color = "#0082c3";
         }
         
         function closeSubMenuOnClick(topListNum, topListNumTitle, subListNum) {
         subListNum.style.opacity = "0";
         subListNum.style.visibility = "hidden";
         subListNum.style.height = "0";
         
         topListNum.style.backgroundColor = "transparent";
         topListNum.style.borderTop = "none";
         
         topListNumTitle.style.color = "#242323";
         }
         </script>
       <!------------------- END GENERAL NAV JS ------------------->
       
       
       
         <!------------------- START MOBILE NAV JS ------------------->
         <script>
         
           // LIST ITEM 1 FUNCTIONALITY
           const topListContainer1 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--container1"
           );
           
           const topList1 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item1"
           );
           const topList1Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text1"
           );
           const subList1 = document.getElementById("mobile-sportpage-navigation__sublist1");
           
           let subList1Toggle = false;
           
           function toggleSublist1() {
             subList1Toggle = !subList1Toggle;
             if (subList1Toggle) {
               openSubMenuOnClick(topList1, topList1Title, subList1);
             } else {
               closeSubMenuOnClick(topList1, topList1Title, subList1);
             }
           }
           
           function openList1() {
             openSubMenuOnClick(topList1, topList1Title, subList1);
           }
           function closeList1() {
             closeSubMenuOnClick(topList1, topList1Title, subList1);
           }
           
           if (screen.width > 1000) {
             topList1.addEventListener("click", openList1);
             topList1.addEventListener("click", closeList1);
           }
           
           //topList1.addEventListener("mouseout", toggleSublist1);
           
           // LIST ITEM 2 FUNCTIONALITY
           const topList2 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item2"
           );
           const topList2Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text2"
           );
           const subList2 = document.getElementById("mobile-sportpage-navigation__sublist2");
           let subList2Toggle = false;
           
           function toggleSublist2() {
             subList2Toggle = !subList2Toggle;
             if (subList2Toggle) {
               openSubMenuOnClick(topList2, topList2Title, subList2);
             } else {
               closeSubMenuOnClick(topList2, topList2Title, subList2);
             }
           }
           
           function openList2() {
             openSubMenuOnClick(topList2, topList2Title, subList2);
           }
           function closeList2() {
             closeSubMenuOnClick(topList2, topList2Title, subList2);
           }
           
           if (screen.width > 1000) {
             topList2.addEventListener("click", openList2);
             topList2.addEventListener("cick", closeList2);
           }
           
           // LIST ITEM 3 FUNCTIONALITY
           const topList3 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item3"
           );
           const topList3Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text3"
           );
           const subList3 = document.getElementById("mobile-sportpage-navigation__sublist3");
           let subList3Toggle = false;
           
           function toggleSublist3() {
             subList3Toggle = !subList3Toggle;
             if (subList3Toggle) {
               openSubMenuOnClick(topList3, topList3Title, subList3);
             } else {
               closeSubMenuOnClick(topList3, topList3Title, subList3);
             }
           }
           
           function openList3() {
             openSubMenuOnClick(topList3, topList3Title, subList3);
           }
           function closeList3() {
             closeSubMenuOnClick(topList3, topList3Title, subList3);
           }
           
           if (screen.width > 1000) {
             topList3.addEventListener("click", openList3);
             topList3.addEventListener("click", closeList3);
           }
           
           // LIST ITEM 4 FUNCTIONALITY
           const topList4 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item4"
           );
           const topList4Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text4"
           );
           const subList4 = document.getElementById("mobile-sportpage-navigation__sublist4");
           let subList4Toggle = false;
           
           function toggleSublist4() {
             subList4Toggle = !subList4Toggle;
             if (subList4Toggle) {
               openSubMenuOnClick(topList4, topList4Title, subList4);
             } else {
               closeSubMenuOnClick(topList4, topList4Title, subList4);
             }
           }
           
           function openList4() {
             openSubMenuOnClick(topList4, topList4Title, subList4);
           }
           function closeList4() {
             closeSubMenuOnClick(topList4, topList4Title, subList4);
           }
           
           if (screen.width > 1000) {
             topList4.addEventListener("click", openList4);
             topList4.addEventListener("click", closeList4);
           }
           
           
           
           // LIST ITEM 5 FUNCTIONALITY
           const topList5 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item5"
           );
           const topList5Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text5"
           );
           const subList5 = document.getElementById("mobile-sportpage-navigation__sublist5");
           let subList5Toggle = false;
           
           function toggleSublist5() {
             subList5Toggle = !subList5Toggle;
             if (subList5Toggle) {
               openSubMenuOnClick(topList5, topList5Title, subList5);
             } else {
               closeSubMenuOnClick(topList5, topList5Title, subList5);
             }
           }
           
           function openList5() {
             openSubMenuOnClick(topList5, topList5Title, subList5);
           }
           function closeList5() {
             closeSubMenuOnClick(topList5, topList5Title, subList5);
           }
           
           if (screen.width > 1000) {
             topList5.addEventListener("click", openList5);
             topList5.addEventListener("click", closeList5);
           }
           
           
           // LIST ITEM 6 FUNCTIONALITY
           const topList6 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item6"
           );
           const topList6Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text6"
           );
           const subList6 = document.getElementById("mobile-sportpage-navigation__sublist6");
           let subList6Toggle = false;
           
           function toggleSublist6() {
             subList6Toggle = !subList6Toggle;
             if (subList6Toggle) {
               openSubMenuOnClick(topList6, topList6Title, subList6);
             } else {
               closeSubMenuOnClick(topList6, topList6Title, subList6);
             }
           }
           
           function openList6() {
             openSubMenuOnClick(topList6, topList6Title, subList6);
           }
           function closeList6() {
             closeSubMenuOnClick(topList6, topList6Title, subList6);
           }
           
           if (screen.width > 1000) {
             topList6.addEventListener("click", openList6);
             topList6.addEventListener("click", closeList6);
           }
           
           
           
           // LIST ITEM 7 FUNCTIONALITY
           const topList7 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item7"
           );
           const topList7Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text7"
           );
           const subList7 = document.getElementById("mobile-sportpage-navigation__sublist7");
           let subList7Toggle = false;
           
           function toggleSublist7() {
             subList7Toggle = !subList7Toggle;
             if (subList7Toggle) {
               openSubMenuOnClick(topList7, topList7Title, subList7);
             } else {
               closeSubMenuOnClick(topList7, topList7Title, subList7);
             }
           }
           
           function openList7() {
             openSubMenuOnClick(topList7, topList7Title, subList7);
           }
           function closeList7() {
             closeSubMenuOnClick(topList7, topList7Title, subList7);
           }
           
           if (screen.width > 1000) {
             topList7.addEventListener("click", openList7);
             topList7.addEventListener("click", closeList7);
           }
       
       
           // LIST ITEM 8 FUNCTIONALITY
           const topList8 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item8"
           );
           const topList8Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text8"
           );
           const subList8 = document.getElementById("mobile-sportpage-navigation__sublist8");
           let subList8Toggle = false;
           
           function toggleSublist8() {
             subList8Toggle = !subList8Toggle;
             if (subList8Toggle) {
               openSubMenuOnClick(topList8, topList8Title, subList8);
             } else {
               closeSubMenuOnClick(topList8, topList8Title, subList8);
             }
           }
           
           function openList8() {
             openSubMenuOnClick(topList8, topList8Title, subList8);
           }
           function closeList8() {
             closeSubMenuOnClick(topList8, topList8Title, subList8);
           }
           
           if (screen.width > 1000) {
             topList8.addEventListener("click", openList8);
             topList8.addEventListener("click", closeList8);
           }
       
       
       
               // LIST ITEM 9 FUNCTIONALITY
               const topList9 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item9"
           );
           const topList9Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text9"
           );
           const subList9 = document.getElementById("mobile-sportpage-navigation__sublist9");
           let subList9Toggle = false;
           
           function toggleSublist9() {
             subList9Toggle = !subList9Toggle;
             if (subList9Toggle) {
               openSubMenuOnClick(topList9, topList9Title, subList9);
             } else {
               closeSubMenuOnClick(topList9, topList9Title, subList9);
             }
           }
           
           function openList9() {
             openSubMenuOnClick(topList9, topList9Title, subList9);
           }
           function closeList9() {
             closeSubMenuOnClick(topList9, topList9Title, subList9);
           }
           
           if (screen.width > 1000) {
             topList9.addEventListener("click", openList9);
             topList9.addEventListener("click", closeList9);
           }
           
       
           // LIST ITEM 10 FUNCTIONALITY
             const topList10 = document.getElementById(
             "mobile-sportpage-navigation__top-level-item10"
           );
           const topList10Title = document.getElementById(
             "mobile-sportpage-navigation__top-level-item--text10"
           );
           const subList10 = document.getElementById("mobile-sportpage-navigation__sublist10");
           let subList10Toggle = false;
           
           function toggleSublist10() {
             subList10Toggle = !subList10Toggle;
             if (subList10Toggle) {
               openSubMenuOnClick(topList10, topList10Title, subList10);
             } else {
               closeSubMenuOnClick(topList10, topList10Title, subList10);
             }
           }
           
           function openList10() {
             openSubMenuOnClick(topList10, topList10Title, subList10);
           }
           function closeList10() {
             closeSubMenuOnClick(topList10, topList10Title, subList10);
           }
           
           if (screen.width > 1000) {
             topList10.addEventListener("click", openList10);
             topList10.addEventListener("click", closeList10);
           }
           
           
           </script>
         <!------------------- END MOBILE NAV JS ------------------->
       
       
           <!------------------- START DESKTOP NAV JS ------------------->
           <script>
               // desk list 1 func
               let DeskSublist1ToggleBool = false;
               function toggleDeskList1() {
                 DeskSublist1ToggleBool = !DeskSublist1ToggleBool;
                 if(DeskSublist1ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow1').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#0082c3";
                   
                   
       
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
                   DeskSublist6ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   
                 }
               }
         
               // desk list 2 func
               let DeskSublist2ToggleBool = false;
               function toggleDeskList2() {
                 DeskSublist2ToggleBool = !DeskSublist2ToggleBool;
                 if(DeskSublist2ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow2').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#0082c3";
                  
       
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
                   DeskSublist6ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   
                 }
               }
         
         
               // desk list 3 func
                let DeskSublist3ToggleBool = false;
               function toggleDeskList3() {
                 DeskSublist3ToggleBool = !DeskSublist3ToggleBool;
                 if(DeskSublist3ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow3').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#0082c3";
       
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
                   DeskSublist6ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                 }
               }
         
                // desk list 4 func
                let DeskSublist4ToggleBool = false;
               function toggleDeskList4() {
                 DeskSublist4ToggleBool = !DeskSublist4ToggleBool;
                 if(DeskSublist4ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow4').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#0082c3";
       
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
       
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
                   DeskSublist6ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   
                 }
               }
         
               // desk list 5 func
               let DeskSublist5ToggleBool = false;
               function toggleDeskList5() {
                 DeskSublist5ToggleBool = !DeskSublist5ToggleBool;
                 if(DeskSublist5ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow5').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#0082c3";
       
       
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
       
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
                   DeskSublist6ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                   
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                 }
               }
         
         
               // desk list 6 func
                let DeskSublist6ToggleBool = false;
               function toggleDeskList6() {
                 DeskSublist6ToggleBool = !DeskSublist6ToggleBool;
                 if(DeskSublist6ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow6').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#0082c3";
       
                   
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
       
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
                 }
               }
         
         
                 // desk list 7 func
                let DeskSublist7ToggleBool = false;
               function toggleDeskList7() {
                 DeskSublist7ToggleBool = !DeskSublist7ToggleBool;
                 if(DeskSublist7ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow7').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#0082c3";
       
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
       
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
                   DeskSublist6ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                   
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                 }
               }
       
       
       
               // desk list 8 func
               let DeskSublist8ToggleBool = false;
               function toggleDeskList8() {
                 DeskSublist8ToggleBool = !DeskSublist8ToggleBool;
                 if(DeskSublist8ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#0082c3";
       
                   
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
       
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
                 }
               }
       
       
               // desk list 9 func
               let DeskSublist9ToggleBool = false;
               function toggleDeskList9() {
                 DeskSublist9ToggleBool = !DeskSublist9ToggleBool;
                 if(DeskSublist9ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#0082c3";
       
                   
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
       
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
                 }
               }
       
       
                // desk list 10 func
               let DeskSublist10ToggleBool = false;
               function toggleDeskList10() {
                 DeskSublist10ToggleBool = !DeskSublist10ToggleBool;
                 if(DeskSublist10ToggleBool) {
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "1000px";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "1";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "visible";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "5px";
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#0082c3";
       
                   
                   // close the others categories
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist1').style.marginBottom = "0";
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow1').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text1').style.color = "#242323";
                   DeskSublist1ToggleBool = false;
       
       
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist2').style.marginBottom = "0";
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow2').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text2').style.color = "#242323";
                   DeskSublist2ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist3').style.marginBottom = "0";
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow3').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text3').style.color = "#242323";
                   DeskSublist3ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist4').style.marginBottom = "0";
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow4').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text4').style.color = "#242323";
                   DeskSublist4ToggleBool = false;
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist5').style.marginBottom = "0";
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow5').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text5').style.color = "#242323";
                   DeskSublist5ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist6').style.marginBottom = "0";
                   document.getElementById('desktop-arrow6').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow6').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text6').style.color = "#242323";
       
                   
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist7').style.marginBottom = "0";
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow7').classList.remove('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text7').style.color = "#242323";
                   DeskSublist7ToggleBool = false;
       
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist8').style.marginBottom = "0";
                   document.getElementById('desktop-arrow8').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow8').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text8').style.color = "#242323";
       
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist9').style.marginBottom = "0";
                   document.getElementById('desktop-arrow9').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow9').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text9').style.color = "#242323";
       
                 } else {
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.maxHeight = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.opacity = "0";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.visibility = "hidden";
                   document.getElementById('desktop-sportpage-navigation__sublist10').style.marginBottom = "0";
                   document.getElementById('desktop-arrow10').classList.remove('desktop-rotate-arrow-down');
                   document.getElementById('desktop-arrow10').classList.add('desktop-rotate-arrow-reset');
                   document.getElementById('desktop-sportpage-navigation__top-level-item--text10').style.color = "#242323";
                 }
               }
         
       
       
       
               // When the user scrolls the page, execute myFunction
               window.onscroll = function() {fixedNavAfterScroll()};
       
               // fixed nav func
               function fixedNavAfterScroll() {
                if (window.pageYOffset > 200 && window.pageYOffset < document.getElementById('desktop-sportpage-navigation').offsetHeight - 300) {
                  document.getElementById('desktop-sportpage-navigation__list').classList.add('desktop-fixed-nav');
               } else {
                   document.getElementById('desktop-sportpage-navigation__list').classList.remove('desktop-fixed-nav');
              }
            }
       
            
             </script>
           <!------------------- END DESKTOP NAV JS ------------------->
    
    
  

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
                  Header page:
                </p>

                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="H1 title"
                    style={{ width: "80%" }}
                    onChange={(e) => setOneshopSportpageH1Title(e.target.value)}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="Header text"
                    style={{ width: "80%" }}
                    onChange={(e) =>
                      setOneshopSportpageSubtitle(e.target.value)
                    }
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="Header image url (recommended 600*600)"
                    style={{ width: "80%" }}
                    onChange={(e) =>
                      setOneshopSportpageTopImgUrl(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  Navigation Categories and Subcategories
                </p>

                {/* -- TOP CATEGOTY 1 INPUTS -- */}
                {amountOfCategories >= 1 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory1({
                            ...topLevelCategory1,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory1({
                            ...topLevelCategory1,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory1.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory1({
                              ...topLevelCategory1,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory1.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory1({
                              ...topLevelCategory1,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory1 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory1 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory1 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory1 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        {/* yesss */}
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}

                    {amountOfSubcategoriesTopCategory1 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        {/* yesss */}
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}

                    {amountOfSubcategoriesTopCategory1 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        {/* yesss */}
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory1 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        {/* yesss */}
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory1 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        {/* yesss */}
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory1 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        {/* yesss */}
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory1 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        {/* yesss */}
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory1,
                              setTopLevelCategory1
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory1 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory1(
                            amountOfSubcategoriesTopCategory1 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory1}
                        {amountOfSubcategoriesTopCategory1 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 2 INPUTS -- */}
                {amountOfCategories >= 2 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory2({
                            ...topLevelCategory2,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory2({
                            ...topLevelCategory2,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory2.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory2({
                              ...topLevelCategory2,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory2.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory2({
                              ...topLevelCategory2,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory2 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory2 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory2,
                              setTopLevelCategory2
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory2 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory2(
                            amountOfSubcategoriesTopCategory2 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory2}
                        {amountOfSubcategoriesTopCategory2 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 3 INPUTS -- */}
                {amountOfCategories >= 3 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory3({
                            ...topLevelCategory3,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory3({
                            ...topLevelCategory3,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory3.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory3({
                              ...topLevelCategory3,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory3.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory3({
                              ...topLevelCategory3,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory3 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory3 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory3,
                              setTopLevelCategory3
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory3 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory3(
                            amountOfSubcategoriesTopCategory3 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory3}
                        {amountOfSubcategoriesTopCategory3 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 4 INPUTS -- */}
                {amountOfCategories >= 4 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory4({
                            ...topLevelCategory4,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory4({
                            ...topLevelCategory4,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory4.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory4({
                              ...topLevelCategory4,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory4.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory4({
                              ...topLevelCategory4,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory4 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory4 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory4,
                              setTopLevelCategory4
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory4 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory4(
                            amountOfSubcategoriesTopCategory4 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory4}
                        {amountOfSubcategoriesTopCategory4 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 5 INPUTS -- */}
                {amountOfCategories >= 5 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory5({
                            ...topLevelCategory5,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory5({
                            ...topLevelCategory5,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory5.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory5({
                              ...topLevelCategory5,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory5.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory5({
                              ...topLevelCategory5,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory5 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory5 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory5,
                              setTopLevelCategory5
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory5 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory5(
                            amountOfSubcategoriesTopCategory5 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory5}
                        {amountOfSubcategoriesTopCategory5 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 6 INPUTS -- */}
                {amountOfCategories >= 6 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory6({
                            ...topLevelCategory6,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory6({
                            ...topLevelCategory6,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory6.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory6({
                              ...topLevelCategory6,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory6.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory6({
                              ...topLevelCategory6,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory6 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory6 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory6,
                              setTopLevelCategory6
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory6 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory6(
                            amountOfSubcategoriesTopCategory6 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory6}
                        {amountOfSubcategoriesTopCategory6 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 7 INPUTS -- */}
                {amountOfCategories >= 7 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory7({
                            ...topLevelCategory7,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory7({
                            ...topLevelCategory7,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory7.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory7({
                              ...topLevelCategory7,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory7.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory7({
                              ...topLevelCategory7,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory7 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory7 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory7,
                              setTopLevelCategory7
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory7 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory7(
                            amountOfSubcategoriesTopCategory7 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory7}
                        {amountOfSubcategoriesTopCategory7 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 8 INPUTS -- */}

                {amountOfCategories >= 8 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory8({
                            ...topLevelCategory8,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory8({
                            ...topLevelCategory8,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory8.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory8({
                              ...topLevelCategory8,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory8.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory8({
                              ...topLevelCategory8,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory8 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory8 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory8,
                              setTopLevelCategory8
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory8 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory8(
                            amountOfSubcategoriesTopCategory8 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory8}
                        {amountOfSubcategoriesTopCategory8 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 9 INPUTS -- */}
                {amountOfCategories >= 9 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory9({
                            ...topLevelCategory9,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory9({
                            ...topLevelCategory9,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory9.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory9({
                              ...topLevelCategory9,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory9.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory9({
                              ...topLevelCategory9,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory9 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory9 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory9,
                              setTopLevelCategory9
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory9 >= 10 ? true : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory9(
                            amountOfSubcategoriesTopCategory9 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory9}
                        {amountOfSubcategoriesTopCategory9 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                {/* -- TOP CATEGOTY 10 INPUTS -- */}

                {amountOfCategories >= 10 && (
                  <div
                    className="popupInputsContainer__sectionWrapper"
                    style={{ border: "1px solid #f50057", padding: "3px" }}
                  >
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level category name"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory10({
                            ...topLevelCategory10,
                            topLevelCategoryName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add top level product image url"
                        style={{ width: "80%" }}
                        onChange={(e) =>
                          setTopLevelCategory10({
                            ...topLevelCategory10,
                            topLevelCategoryProductImgUrl: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Do you want to display as the last subcategory: "Zu
                          allen Produkten" ?
                        </FormLabel>

                        <RadioGroup
                          aria-label="last_all_product_subcategory"
                          name="last_all_product_subcategory"
                          value={
                            topLevelCategory10.toAllProductsAsSubcategoryDisplayBool
                          }
                          onChange={(e) =>
                            setTopLevelCategory10({
                              ...topLevelCategory10,
                              toAllProductsAsSubcategoryDisplayBool:
                                e.target.value,
                            })
                          }
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="no"
                          />
                        </RadioGroup>
                      </FormControl>
                      {topLevelCategory10.toAllProductsAsSubcategoryDisplayBool ===
                        "yes" && (
                        <TextField
                          id="standard-basic"
                          label="add subcategory 'Zu allen Produkten' link url"
                          style={{ width: "80%" }}
                          onChange={(e) =>
                            setTopLevelCategory10({
                              ...topLevelCategory10,
                              toAllProductsAsSubcategoryUrl: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                    {amountOfSubcategoriesTopCategory10 >= 1 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              0,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              0,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 2 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              1,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              1,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 3 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              2,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              2,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 4 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              3,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              3,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 5 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              4,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              4,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 6 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              5,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              5,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 7 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              6,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              6,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 8 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              7,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              7,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 9 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              8,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              8,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    {amountOfSubcategoriesTopCategory10 >= 10 && (
                      <div
                        className="popupInputsContainer__wrapper"
                        style={{ border: "1px solid green", padding: "3px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="add subcategory name"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryName(
                              e,
                              9,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="add subcategory link url"
                          style={{ width: "80%" }}
                          onChange={(e, sub, top, setTop) =>
                            handleOnChangeSubCategoryUrl(
                              e,
                              9,
                              topLevelCategory10,
                              setTopLevelCategory10
                            )
                          }
                        />
                      </div>
                    )}
                    <div className="popupInputsContainer__wrapper">
                      <button
                        disabled={
                          amountOfSubcategoriesTopCategory10 >= 10
                            ? true
                            : false
                        }
                        onClick={() =>
                          setAmountOfSubcategoriesTopCategory10(
                            amountOfSubcategoriesTopCategory10 + 1
                          )
                        }
                      >
                        add subcategory +
                      </button>
                      <p>
                        you already defined {amountOfSubcategoriesTopCategory10}
                        {amountOfSubcategoriesTopCategory10 <= 1
                          ? " subcategory"
                          : " subcategories"}
                      </p>
                      <small
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "3px",
                        }}
                      >
                        max 10 subcategories!
                      </small>
                    </div>
                  </div>
                )}

                <div className="popupInputsContainer__wrapper">
                  <button
                    style={{ padding: "4px 8px", cursor: "pointer" }}
                    disabled={amountOfCategories >= 10 ? true : false}
                    onClick={() =>
                      setAmountOfCategories(amountOfCategories + 1)
                    }
                  >
                    {" "}
                    Add new top level category +
                  </button>
                  <p>
                    you already defined {amountOfCategories} top level{" "}
                    {amountOfCategories <= 1 ? "category" : "categories"}
                  </p>
                  <small
                    style={{
                      background: "yellow",
                      padding: "3px",
                      color: "black",
                    }}
                  >
                    max 10 top level categories!
                  </small>
                </div>
                {/* ----------------------------------------------- */}
              </div>

              <div className="popupInputsContainer__wrapper">
                <Button
                  variant="contained"
                  color="primary"
                  //onClick={generateCodeFunc}
                  onClick={() => {
                    sliceSubcategoriesAccordingToNum();
                    setGenerateCode(true);
                  }}
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
