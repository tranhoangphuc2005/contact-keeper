import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import ContactState from "./Components/context/contact/ContactState";
import AuthState from "./Components/context/auth/AuthState";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import AlertState from "./Components/context/alert/AlertState";
import Alerts from "./Components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./Components/routing/PrivateRoute";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home}></PrivateRoute>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/register">
                    <Register />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
