import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppPage from "./components/AppPage";
import AccountCreationPage from "./components/AccountCreationPage";
import LoginPage from "./components/LoginPage";

import './styles/App.css';


function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/create-account">
            Create Account
          </Link>
          <Link to="/login">
            Login
          </Link>
          <Link to="/">
            Home
          </Link>
        </nav>
      </header>
      <Switch>
          <Route path="/" exact component={AppPage} />
          <Route path="/create-account" component={AccountCreationPage} />
          <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;