import React from "react";
import "./index.css";
import HpComponentsPage from "../HpComponentsPage";
import Updates from '../Updates';
import MainIllu from "../../img/main-illu.svg";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const Home = (props) => {
 // console.log('userHasAllDataInSheetBool home: ', props.userHasAllDataInSheetBool);
  return (
    <div className="home page">
      { 
        props.userHasAllDataInSheetBool ? (
          
         <div className="home__container">
           <div className="home__left">

            <lord-icon
              src="https://cdn.lordicon.com/pithnlch.json"
              trigger="loop"
              colors="primary:#0082c3,secondary:#ffea28"
              style={{width: '70px', height: '70px'}}>
            </lord-icon>
            <Typography variant="h4" component="h4" gutterBottom className="title all-set-title"> 
                  All set, you can start to work!
            </Typography>
           </div>
          <div className="home__right">
            <Updates />
          </div>

         </div>
        ) : (
          <div className="home-settings-missing-message">
              <lord-icon
                  src="https://cdn.lordicon.com/tdrtiskw.json"
                  trigger="loop"
                  colors="primary:#0082c3,secondary:#ffea28"
                  style={{width: '250px', height: '250px'}}
                  >
              </lord-icon>
              <Typography variant="h4" component="h4" gutterBottom className="title">
              To use the app please complete the settings
            </Typography>
            <div className="primary-button-container home-settings-missing-message__btn-container">
            <Link style={{color: '#fff', textDecoration: 'none'}} to="/settings">
              <Button variant="contained">Set up now</Button>
            </Link>
            </div>
            </div>
        )
      }

    
    </div>
  );
};

export default Home;
