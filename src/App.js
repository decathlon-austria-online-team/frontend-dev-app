import React, { useState, useEffect } from "react";
import "./App.css";

import Typography from "@material-ui/core/Typography";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SportLP from "./components/SportLP";
import SportLPV2 from "./components/SportLPV2";
import AddNewSportPageV2 from "./components/AddNewSportPageV2";
import SportLPV3 from "./components/SportLPV3";
import GeneralComponentsPage from "./components/GeneralComponentsPage";
import HpComponents from "./components/HpComponents";
import HpComponentsPage from "./components/HpComponentsPage";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import NotDecaEmail from "./components/NotDecaEmail";
import Settings from "./components/Settings";
import FirstSettingsForm from "./components/FirstSettingsForm";
import Contact from "./components/Contact";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [usersDataFromSheet, setUsersDataFromSheet] = useState([]);
  const [sheetApiDoneLoading, setSheetApiDoneLoading] = useState(false);
  const [
    userEmailFitOneOfEmailsInSheetBool,
    setUserEmailFitOneOfEmailsInSheetBool,
  ] = useState(false);
  const [userDataObjFromSheet, setUserDataObjFromSheet] = useState({});
  const [userHasAllDataInSheetBool, setUserHasAllDataInSheetBool] =
    useState(false);

  // 1.  get api request users collection
  const getUsersFromSheet = () => {
    const usersDataSheet = axios
      .get("https://sheet.best/api/sheets/4d898e1e-d9e1-4dd8-a598-4435e56bdd53")
      .then((res) => {
        setUsersDataFromSheet(res.data);
        setSheetApiDoneLoading(true);
        checkIfUserInUsersCollection(usersDataFromSheet);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 2. check if user exist in users collection google sheet
  const checkIfUserInUsersCollection = () => {
    if (usersDataFromSheet.length > 0) {
      if (usersDataFromSheet.some((u) => u.email === user.email)) {
        console.log("yess we have this email!");
        setUserEmailFitOneOfEmailsInSheetBool(true);
        const getUserObj = usersDataFromSheet.find(
          (el) => el.email === user.email
        );
        setUserDataObjFromSheet(getUserObj);

        // check if user has rel data info in sheet
        if (
          getUserObj.country === "" ||
          getUserObj.country === null ||
          getUserObj.currencySymbol === "" ||
          getUserObj.currencySymbol === null ||
          getUserObj.languageType === "" ||
          getUserObj.languageType === null
        ) {
          setUserHasAllDataInSheetBool(false);
        } else {
          setUserHasAllDataInSheetBool(true);
        }
      } else {
        console.log("noo we couldnt find this email!");
      }
    }
  };
  console.log("user has all data: ", userHasAllDataInSheetBool);
  useEffect(() => {
    checkIfUserInUsersCollection();
  }, [usersDataFromSheet]);

  useEffect(() => {
    if (isAuthenticated) {
      // get users collection from sheet.best api
      getUsersFromSheet();
    }
  }, [user]);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <lord-icon
          className="sportLPV2__lordicon"
          src="https://cdn.lordicon.com/mlnkdrif.json"
          trigger="loop"
          colors="primary:#ffea28,secondary:#0082c3"
          style={{ width: "200px", height: "200px" }}
        ></lord-icon>
        <Typography variant="h4" component="h4" gutterBottom className="title">
          Loading app..
        </Typography>
      </div>
    );
  }

  return (
    <div className="app">
      {isAuthenticated && user.email.indexOf("@decathlon.com") === -1 ? (
        <NotDecaEmail />
      ) : isAuthenticated &&
        user.email.indexOf("@decathlon.com") > -1 &&
        userEmailFitOneOfEmailsInSheetBool &&
        sheetApiDoneLoading ? (
        <div className="app__appAfterAuth">
          <Router>
            <Header userHasAllDataInSheetBool={userHasAllDataInSheetBool} />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="item"
                  >
                    <Switch location={location}>
                      <Route path="/" exact>
                        <Home
                          userHasAllDataInSheetBool={userHasAllDataInSheetBool}
                        />
                      </Route>

                      <Route path="/hp-components">
                        <HpComponentsPage />
                      </Route>

                      <Route path="/sport-lp-components-v1">
                        <SportLP />
                      </Route>
                      {/*
                     <Route path="/sport-lp">
                      <SportLPV2 />
                    </Route>
                    */}

                      {/*
                    <Route path="/create-new-sport-page-to-delete">
                      <AddNewSportPageV2 />
                    </Route>
                    */}

                      <Route path="/create-new-sport-page">
                        <SportLPV3
                          userDataObjFromSheet={userDataObjFromSheet}
                        />
                      </Route>
                      <Route path="/merch-zones">
                        <GeneralComponentsPage
                          userDataObjFromSheet={userDataObjFromSheet}
                        />
                      </Route>
                      <Route path="/home-page-components">
                        <HpComponents
                          userDataObjFromSheet={userDataObjFromSheet}
                        />
                      </Route>

                      <Route path="/profile">
                        <Profile />
                      </Route>
                      <Route path="/settings">
                        <Settings userDataObjFromSheet={userDataObjFromSheet} />
                      </Route>
                      <Route path="/contact">
                        <Contact />
                      </Route>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />

            <Footer />
          </Router>
        </div>
      ) : isAuthenticated &&
        sheetApiDoneLoading &&
        !userEmailFitOneOfEmailsInSheetBool ? (
        <FirstSettingsForm user={user} />
      ) : !isAuthenticated ? (
        <LoginPage />
      ) : (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <lord-icon
            className="sportLPV2__lordicon"
            src="https://cdn.lordicon.com/mlnkdrif.json"
            trigger="loop"
            colors="primary:#ffea28,secondary:#0082c3"
            style={{ width: "200px", height: "200px" }}
          ></lord-icon>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            className="title"
          >
            Loading user data..
          </Typography>
        </div>
      )}
    </div>
  );
}

export default App;
