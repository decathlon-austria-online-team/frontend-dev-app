import React, {useState, useEffect} from 'react';
import './index.css';

// import external installations
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-html";
import copy from "copy-to-clipboard";

// import material ui:
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoneIcon from "@material-ui/icons/Done";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


// import images
import screenshotOneshopSportpage from "../../img/oneshop-sportpage-screenshot.png";
import screenshotTwoCategories from "../../img/two-categories-screenshot.png";
import screenshotThreeCategories from "../../img/three-categories-screenshot.png";
import screenshotFourCategories from "../../img/four-categories-screenshot.png";
import screenshotArticle1 from "../../img/article1-screenshot.png";
import screenshotBanner1 from "../../img/banner1-screenshot.png";
import screenshotVideo from "../../img/video-section.png";
import screenshotTrboLoading from "../../img/trbo-loading.png";
import screenshotProductsSlider2 from "../../img/products-slider2-screenshot.png";
import screenshotProductsSlider1 from "../../img/oneshop-product-slider-1-screenshop.png";
import codeImage from "../../img/sport-page-code-convertor.jpg";



// import popups components
import PopupSportPage from "../../sportLpPopupComponents/PopupOneshopSportpageV2";
import Popup2Categories from "../../sportLpPopupComponents/Popup2Categories";
import Popup3Categories from "../../sportLpPopupComponents/Popup3Categories"; 
import Popup4Categories from "../../sportLpPopupComponents/Popup4Categories";
import PopupArticle1 from "../../sportLpPopupComponents/PopupArticle1";
import PopupBanner1 from "../../sportLpPopupComponents/PopupBanner1";
import PopupVideo from "../../sportLpPopupComponents/PopupVideo";
import PopupTrboSliderContainer from "../../sportLpPopupComponents/PopupTrboSliderContainer";
import PopupProductsSlider2 from "../../sportLpPopupComponents/PopupProductsSlider2";
import PopupProductsSlider1 from "../../sportLpPopupComponents/PopupProductsSlider1";
import PopupProductsSlider1V2 from "../../sportLpPopupComponents/PopupProductsSlider1V2";
import PopupCodeConvertorSp from "../../sportLpPopupComponents/PopupCodeConvertorSp";


const useStylesImgList = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      //backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      //width: 500,
     // height: 450
       width: 600,
       height: 550

    },
    icon: {
      //color: 'rgba(255, 255, 255, 0.54)',
        color: '#fff',
    },
  }));





const SportLPV3 = (props) => {
    const classesImgList = useStylesImgList();
    const [imgData, setImgData] = useState([
        {
            img: screenshotOneshopSportpage,
            title: 'Sport page',
            type: 'base code, header and menu',
            onclick: () => setOpenSportPageComponent(true)
            
        },
        {
            img: screenshotTwoCategories,
            title: '2 categories',
            type: 'page component',
            onclick: () => setOpen2CategoriesComponent(true)
        }, 
        {
            img: screenshotThreeCategories,
            title: '3 categories',
            type: 'page component',
            onclick: () => setOpen3CategoriesComponent(true)
        },
        { 
            img: screenshotFourCategories,
            title: '4 categories',
            type: 'page component',
            onclick: () => setOpen4CategoriesComponent(true)
        },
        {
            img: screenshotArticle1,
            title: 'Article',
            type: 'page component',
            onclick: () => setOpenArticle1Component(true)
        },
        {
            img: screenshotBanner1,
            title: 'Banner',
            type: 'page component',
            onclick: () => setOpenBanner1Component(true)
        },
        {
            img: screenshotVideo,
            title: 'Video',
            type: 'page component',
            onclick: () => setOpenVideoComponent(true)
        }, 
        {
          img: screenshotTrboLoading,
          title: 'Trbo Slider Container',
          type: 'page component',
          onclick: () => setOpenTrboLoadingContainerComponent(true)
      },
      { 
        img: screenshotProductsSlider2,
        title: 'Product advantages slider',
        type: 'page component',
        onclick: () => setOpenProductsSlider2Component(true)
    },
   /* {
      img: screenshotProductsSlider1,
      title: 'Product slider',
      type: 'page component',
      onclick: () => setOpenProductsSlider1Component(true)
    },*/
    {
      img: screenshotProductsSlider1,
      title: 'Product slider',
      type: 'page component',
      onclick: () => setOpenProductsSlider1V2Component(true)
    }
   /* {
      img: codeImage,
      title: 'sport page v1 to v2',
      type: 'code converter',
      onclick: () => setOpenSportPageCodeConvertorV1ToV2(true)
    }*/
    ]);


    const [getMainCode, setGetMainCode] = useState('');

    // open/close popup states
      const [openSportPageComponent, setOpenSportPageComponent] = useState(
        false
      );
      const [open2CategoriesComponent, setOpen2CategoriesComponent] = useState(
        false
      );
      const [open3CategoriesComponent, setOpen3CategoriesComponent] = useState(
        false
      );

      const [open4CategoriesComponent, setOpen4CategoriesComponent] = useState(
        false
      );

      const [openArticle1Component, setOpenArticle1Component] = useState(false);

      const [openBanner1Component, setOpenBanner1Component] = useState(false);

      const [
        openVideoComponent,
        setOpenVideoComponent,
      ] = useState(false);

      const [
        openTrboLoadingContainerComponent,
        setOpenTrboLoadingContainerComponent,
      ] = useState(false);

      const [
        openProductsSlider2Component,
        setOpenProductsSlider2Component,
      ] = useState(false);

      const [
        openProductsSlider1Component,
        setOpenProductsSlider1Component,
      ] = useState(false);

      const [
        openProductsSlider1V2Component,
        setOpenProductsSlider1V2Component,
      ] = useState(false);

      const [
        openSportPageCodeConvertorV1ToV2,
        setOpenSportPageCodeConvertorV1ToV2,
      ] = useState(false);



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
    return(
        <div className="sportLPV3 page">    
            <Typography variant="h3" component="h2" gutterBottom className="title">
                sport page
            </Typography>

            <div className="sportLPV3__content">
                <div className="sportLPV3__components" style={codeEditorModeFull ? {width: '0'} : {} }>
                 <div className="sportLPV3__content-title" style={{marginBottom: '10px'}} style={codeEditorModeFull ? {display: 'none'}: {marginBottom: '10px'}}>
                     <p>Available components:</p>
                     {/*
                    <Button variant="contained">
                       How to use
                    </Button>
                     */}
               <ImageListItem key="Subheader" cols={2} style={{ height: 'auto', listStyle: 'none' }}>
                    <ListSubheader component="div">
                   
                      <LiveHelpIcon style={{color: '#0082C3', opacity: '0'}} />
           
                      
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
                        <IconButton aria-label={`info about ${item.title}`} className={classesImgList.icon} onClick={item.onclick}>
                            <AddToQueueIcon />
                        </IconButton>
                        }
                    />
                    </ImageListItem>
                  ))}
                  </ImageList>
                 </div>
                </div>

                <div className="sportLPV3__code-editor" style={codeEditorModeFull ? {width: '100%'} : {} }>
                <div className="sportLPV3__content-title" style={{marginBottom: '10px', position: 'relative'}}>
                     <p style={{display: 'flex', alignItems: 'center'}}>
                       {
                         !codeEditorModeFull ? (
                          <ChevronLeftIcon onClick={() => setCodeEditorModeFull(!codeEditorModeFull)} style={{color: 'lightgray', cursor: 'pointer'}} />
                         ) : (
                          <ChevronRightIcon onClick={() => setCodeEditorModeFull(!codeEditorModeFull)} style={{color: 'lightgray', cursor: 'pointer'}} />
                         )
                       }
                       
                        Code editor: </p>

                     <Button onClick={copyToClipFunc} variant="contained">
                         Copy code
                      </Button> 

                    {showSuccessCopied && (
                    <div style={{ margin: "10px 0", position: "absolute", right: '125px' }}>
                      <DoneIcon
                        style={{ color: "green" }}
                        fontSize="small"
                      />
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
        <PopupSportPage
                imgUrl={screenshotOneshopSportpage}
                open={openSportPageComponent}
                handleClose={() => setOpenSportPageComponent(false)}
                userDataObjFromSheet={props.userDataObjFromSheet} 
            />
            <Popup2Categories
                imgUrl={screenshotTwoCategories}
                open={open2CategoriesComponent}
                handleClose={() => setOpen2CategoriesComponent(false)}
                userDataObjFromSheet={props.userDataObjFromSheet}  
            />
            <Popup3Categories
                imgUrl={screenshotThreeCategories}
                open={open3CategoriesComponent} 
                handleClose={() => setOpen3CategoriesComponent(false)}
                userDataObjFromSheet={props.userDataObjFromSheet}  
            />
             <Popup4Categories
                imgUrl={screenshotFourCategories}
                open={open4CategoriesComponent}
                handleClose={() => setOpen4CategoriesComponent(false)}
                userDataObjFromSheet={props.userDataObjFromSheet}  
            />
             <PopupArticle1 
                imgUrl={screenshotArticle1}
                open={openArticle1Component}
                handleClose={() => setOpenArticle1Component(false)}
                userDataObjFromSheet={props.userDataObjFromSheet} 
            />
             <PopupBanner1
                imgUrl={screenshotBanner1}
                open={openBanner1Component}
                handleClose={() => setOpenBanner1Component(false)}
                userDataObjFromSheet={props.userDataObjFromSheet}
            />
           <PopupVideo
                imgUrl={screenshotVideo}
                open={openVideoComponent}
                handleClose={() => setOpenVideoComponent(false)}
            />
            <PopupTrboSliderContainer
                imgUrl={screenshotTrboLoading}
                open={openTrboLoadingContainerComponent}
                handleClose={() => setOpenTrboLoadingContainerComponent(false)}
            />
            <PopupProductsSlider2
                imgUrl={screenshotProductsSlider2}
                open={openProductsSlider2Component}
                handleClose={() => setOpenProductsSlider2Component(false)}
                userDataObjFromSheet={props.userDataObjFromSheet}
            />
             <PopupProductsSlider1
              imgUrl={screenshotProductsSlider1}
              open={openProductsSlider1Component}
              handleClose={() => setOpenProductsSlider1Component(false)}
              userDataObjFromSheet={props.userDataObjFromSheet}
            />
            <PopupProductsSlider1V2
              imgUrl={screenshotProductsSlider1}
              open={openProductsSlider1V2Component}
              handleClose={() => setOpenProductsSlider1V2Component(false)}
              userDataObjFromSheet={props.userDataObjFromSheet}
            />

             <PopupCodeConvertorSp 
              imgUrl={codeImage}
              open={openSportPageCodeConvertorV1ToV2}
              handleClose={() => setOpenSportPageCodeConvertorV1ToV2(false)}
        />
            

        </div>
      </div>
    )
}

export default SportLPV3;