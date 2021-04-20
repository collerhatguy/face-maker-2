import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppPage from "./components/AppPage";
import AccountCreationPage from "./components/AccountCreationPage";

import './styles/App.css';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/create-account">
          Create Account
        </Link>
        <Link to="/">
          Home
        </Link>
      </nav>
      <Switch>
          <Route path="/" exact component={AppPage} />
          <Route path="/create-account" component={AccountCreationPage} />
      </Switch>
    </Router>
  );
}

export default App;