import React, {useEffect, useState} from 'react';
import './index.css';
import axios from 'axios';
import { countriesList } from '../../countriesList';

// material ui imports
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStylesSelect = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
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

  const useStylesAlert = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Settings = (props) => {
    const classesSelect = useStylesSelect();
    const classesLoading = useStylesLoading();
    const classesAlert = useStylesAlert();
    const [userCountry, setUserCountry] = useState(''); 
    const [userLanguageType, setUserLanguageType] = useState('');
    const [userCurrencySymbol, setUserCurrencySymbol] = useState('');
    const [userId, setUserId] = useState('');
    const [listOfCountries, setListOfCountries] = useState('');
    const [showLoadingUpdate, setShowLoadingUpdate] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

   


    useEffect(() => {
      setUserCountry(props.userDataObjFromSheet.country);
      setUserLanguageType(props.userDataObjFromSheet.languageType);
      setUserCurrencySymbol(props.userDataObjFromSheet.currencySymbol);
      setUserId(props.userDataObjFromSheet.id);
    }, [props.userDataObjFromSheet]);


// API UPDATE SETTINGS REQUEST FUNCTION
const updateSettingsReq = async () => {
  setShowLoadingUpdate(true);
  const updateDataSheet = await axios
    .patch(`https://sheet.best/api/sheets/4d898e1e-d9e1-4dd8-a598-4435e56bdd53/${userId - 1}`, {
      id: userId == 1 ? "=ARRAYFORMULA(ROW(A2:A)-1)" : null,
      country: userCountry,
      languageType: userLanguageType,
      currencySymbol: userCurrencySymbol,
    })
    .then((res) => {
      console.log(res);
      setShowLoadingUpdate(false);
      setOpenAlertSuccess(true);

      setTimeout(function () {
        setOpenAlertSuccess(false);
        window.location.reload();
      }, 1200);
    })
    .catch((err) => {
      console.log(err);
      setShowLoadingUpdate(false);
      setOpenAlertError(true);
      setTimeout(function () {
        setOpenAlertError(false);
        
      }, 1200);
  
    });
};
   
    return (
        <div className="settings page">
          <div className="settings__inputWrapper">
          <FormControl className={classesSelect.formControl}>
            <InputLabel htmlFor="age-native-simple">Country</InputLabel>
              <Select
                native
                value={userCountry}
                onChange={(e) => setUserCountry(e.target.value)}
                >
          <option aria-label="None" value="" />
          {countriesList.map((c) => (
            <option value={c.name}>{c.name}</option>
          ))}
            
    
              </Select>
              </FormControl>
          </div>

          <div className="settings__inputWrapper">
          <FormControl className={classesSelect.formControl}>
            <InputLabel htmlFor="age-native-simple">Language type</InputLabel>
              <Select
                native
                value={userLanguageType}
                onChange={(e) => setUserLanguageType(e.target.value)}
              >
         <option aria-label="None" value="" />
         <option value="LTR">LEFT TO RIGHT</option>
         <option value="RTL">RIGHT TO LEFT</option>
   
            </Select>
            </FormControl>
          </div>

          <div className="settings__inputWrapper">
            <p style={{color: 'gray', fontSize: '10px'}}>* will be displayed in prices:</p>
            <TextField id="standard-basic" label="Currency symbol" value={userCurrencySymbol} onChange={(e) => setUserCurrencySymbol(e.target.value)} />
          </div>

          <div className="settings__inputWrapper primary-button-container">
            {
              !showLoadingUpdate ? (
                <Button onClick={updateSettingsReq} variant="contained">Update settings</Button>
              ) : (
                <div className={classesLoading.root}>
                <CircularProgress />
              </div>
              )
            }

            {
              openAlertSuccess && (
                <Alert style={{marginTop: '15px'}} severity="success">Your settings have been successfully updated! 😀</Alert>
              )
            }

            {
              openAlertError && (
                <Alert style={{marginTop: '15px'}} severity="error">An error has occurred! 😓</Alert>
              )
            }

            
          </div>
         
        </div>
    )
}

export default Settings;