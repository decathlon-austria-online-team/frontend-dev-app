import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
/* 
import { CSVReader } from 'react-papaparse';

const buttonRef = React.createRef()
*/


const SportLPV2 = () => {
    /*
     const handleOpenDialog = (e) => {
        // Note that the ref is set async, so it might be null at some point
        if (buttonRef.current) {
          buttonRef.current.open(e)
        }
      }

      const handleOnFileLoad = (data) => {
        console.log('---------------------------')
        console.log(data)
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
    */
   

    return(
        <div className="sportLPV2 page">
          <p className="sportLPV2__example-link">Example sport page</p>
          <div className="sportLPV2__boxes">
                <div className="sportLPV2__box">
                    <h2 className="sportLPV2__box-title">I want to create a new sport page</h2>
                    <div className="sportLPV2__box-icon-container">
                    <lord-icon
                        className="sportLPV2__lordicon"
                       src="https://cdn.lordicon.com/mlnkdrif.json"
                       trigger="loop"
                       colors="primary:#ffea28,secondary:#0082c3"
                       style={{width: '200px', height: '200px'}}>
                          
                   </lord-icon>
                    </div>

                    <div className="sportLPV2__box-btn-container"><Link to="/create-new-sport-page"><Button variant="contained" color="primary">create page</Button></Link></div>
                </div>

                <div className="sportLPV2__box">
                    <h2 className="sportLPV2__box-title">I want to edit an existing sport page</h2>
                    <div className="sportLPV2__box-icon-container">
                    <lord-icon
                      src="https://cdn.lordicon.com/qoozyitg.json"
                      trigger="loop"
                      colors="primary:#0082c3,secondary:#ffea28"
                      style={{width: '200px', height: '200px'}}>
                   </lord-icon>
                    </div>
                    <div className="sportLPV2__box-btn-container"><Button variant="contained" color="primary">edit page</Button></div>
                </div>
          </div>
            {/*
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
              flexDirection: 'row',
              marginBottom: 10
            }}
          >
            <button
              type='button'
              onClick={handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: '40%',
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              Browse file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
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
            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20
              }}
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
            */}
        
        </div>
    )
}

export default SportLPV2;