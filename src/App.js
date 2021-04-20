import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AppPage from "./components/AppPage";
import AccountCreationPage from "./components/AccountCreationPage";

import './styles/App.css';


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={AppPage} />
          <Route path="/create-account" component={AccountCreationPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;