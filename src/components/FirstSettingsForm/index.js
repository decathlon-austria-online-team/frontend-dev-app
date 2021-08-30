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
import Typography from '@material-ui/core/Typography';


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

const FirstSettingsForm = (props) => {
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

   


 // Create user row in sheet
 const createUserInSheet = (e) => {
    setShowLoadingUpdate(true);
    axios
      .post('https://sheet.best/api/sheets/4d898e1e-d9e1-4dd8-a598-4435e56bdd53', {
        id: null,
     	email: props.user.email,
        country: userCountry,
        languageType: userLanguageType,
        currencySymbol: userCurrencySymbol, 
      })
      .then(function (res) {
        console.log(res);
        setShowLoadingUpdate(false);
        setOpenAlertSuccess(true);

        setTimeout(function () {
          setOpenAlertSuccess(false);
          window.location.href = "/";
        }, 1200);
      })
      .catch(function (err) {
        console.log(err);
        setShowLoadingUpdate(false);
        setOpenAlertError(true);
      });
  };

    return (
        <div className="first-settings-form">
            <div className="first-settings-form__welcome">
            <lord-icon
                src="https://cdn.lordicon.com/lupuorrc.json"
                trigger="loop"
                colors="primary:#0082c3,secondary:#ffea28"
                style={{width: '150px', height: '150px'}}
                >
            </lord-icon>
            <Typography style={{marginTop: '40px'}} variant="h4" component="h4" gutterBottom className="title">
              Welcome to the decathlon frontend development app
            </Typography>
            </div>

            <div className="first-settings-form__form">
            <Typography style={{marginBottom: '30px'}} variant="h6" component="h6" gutterBottom className="title">
            Please choose your settings
            </Typography>
          <div className="first-settings-form__inputWrapper">
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

          <div className="first-settings-form__inputWrapper">
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

          <div className="first-settings-form__inputWrapper">
            <TextField id="standard-basic" label="Currency symbol" value={userCurrencySymbol} onChange={(e) => setUserCurrencySymbol(e.target.value)} />
          </div>

          <div className="first-settings-form__inputWrapper primary-button-container">
            {
              !showLoadingUpdate ? (
                <Button variant="contained" onClick={createUserInSheet}>Save and continue</Button>
              ) : (
                <div className={classesLoading.root} style={{textAlign: 'center'}}>
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


         
        </div>
    )
}

export default FirstSettingsForm;