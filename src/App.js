import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SportLP from "./components/SportLP";
import HpComponentsPage from "./components/HpComponentsPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/hp-components">
            <HpComponentsPage />
          </Route>

          <Route path="/sport-lp-components">
            <SportLP />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
