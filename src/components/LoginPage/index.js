import React, {useState, useEffect} from 'react';
import './index.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { useAuth0 } from "@auth0/auth0-react";
import Footer from '../Footer';

// import material ui
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import images
import decathlonLogo from "../../img/decathlon-logo.svg";
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
import loginImgSportPageKajak from "../../img/sport-page-canva.png";
import loginImgHpBanner from "../../img/login-page-img-hp-banner.png";
import loginImgSlider2 from "../../img/login-page-img-slider2.png";
import loginImgCampaignPage from "../../img/login-img-campaign-page.png";
import loginImgContentPage from "../../img/login-img-content-page.png";
import loginImgOverrideCssJs from "../../img/screenshot-override-css-js.png";
import loginImgNewIdeas from "../../img/login-page-img-new-ideas.jpg";

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();
    const [displayIndexNumOfDynamicTextData, setDisplayIndexNumOfDynamicTextData] = useState(0);



    const [displayDynamicText, setDisplayDynamicText] = useState([
        {
         id: 1,
         text: 'sport pages',
         img: loginImgSportPageKajak
        },
        {
        id: 2,
        text: 'hp banners',
        img: loginImgHpBanner
        },
        {
        id: 3,
        text: 'campaign pages',
        img: loginImgCampaignPage
        },
        {
        id: 4,
        text: 'content components',
        img: loginImgContentPage
        },
        {
        id: 5,
        text: 'override css and js',
        img: loginImgOverrideCssJs
        },
        {
        id: 6,
        text: 'New ideas',
        img: loginImgNewIdeas
        },
        {
        id: 7,
        text: 'and more',
        img: loginImgNewIdeas
        },

    ]);

    function next() {
        if(displayIndexNumOfDynamicTextData < 5) {
            setDisplayIndexNumOfDynamicTextData((prev) => prev + 1);
        } else {
            setDisplayIndexNumOfDynamicTextData(0);
        }
    }

    function prev() {
        if(displayIndexNumOfDynamicTextData > 0) {
            setDisplayIndexNumOfDynamicTextData((prev) => prev - 1);
        }
        
    }


       useEffect(() => {
        setTimeout(next, 5000);
       }, [displayIndexNumOfDynamicTextData]);

console.log('displayIndexNumOfDynamicTextData ', displayIndexNumOfDynamicTextData);

    return(
        <>

        <div className="login"> 
        
        <div className="login-content">
            <div className="login__left">
            
                <Typography variant="h1" component="h2" gutterBottom className="title login-title">
                We are developing
                </Typography>
                    <div id="login-dynamic-text-container">
                        <TransitionGroup>
                            <CSSTransition
                            key={displayDynamicText[displayIndexNumOfDynamicTextData] && displayDynamicText[displayIndexNumOfDynamicTextData].id}
                            timeout={300}
                            classNames="item"
                            >
                            <Typography variant="h3" component="h2" gutterBottom className="title login-title" id="login-dynamic-text">
                            {displayDynamicText[displayIndexNumOfDynamicTextData] && displayDynamicText[displayIndexNumOfDynamicTextData].text}
                            </Typography>
                        </CSSTransition>
                        </TransitionGroup>
                    </div>

                <Typography variant="h1" component="h2" gutterBottom className="title login-title">
                for <img src={decathlonLogo} className="login-decathlon-logo" /> oneshop sites
                </Typography>


                <div className="login-btn-container">
                <Button
                    variant="contained"
                    className="login-btn"
                    onClick={() => loginWithRedirect()}
                >
                <span>Login / signup</span>  <i class="fas fa-arrow-right"></i>
                </Button>
                </div>
                <p className="login__decathlon-email-message">* decathlon email address is required</p>
            </div>

            <div className="login__right">
            
            <div className="login__right-img-container">
            <TransitionGroup>
                            <CSSTransition
                            key={displayDynamicText[displayIndexNumOfDynamicTextData] && displayDynamicText[displayIndexNumOfDynamicTextData].id}
                            timeout={300}
                            classNames="item"
                            >
                            <img src={displayDynamicText[displayIndexNumOfDynamicTextData] && displayDynamicText[displayIndexNumOfDynamicTextData].img} />
                        </CSSTransition>
                        </TransitionGroup>
            </div>
               
                {/*
                    <div className="login__right-img-container">
                <TransitionGroup>
                            <CSSTransition
                            key={displayDynamicText[displayIndexNumOfDynamicTextData] && displayDynamicText[displayIndexNumOfDynamicTextData].id}
                            timeout={300}
                            classNames="item"
                            >
                            <img src={displayDynamicText[displayIndexNumOfDynamicTextData] && displayDynamicText[displayIndexNumOfDynamicTextData].img} />
                        </CSSTransition>
                        </TransitionGroup>
                </div>
                */}

            </div>
          </div>
         
        </div>
        <Footer />
        </>
    )
}

export default LoginPage;