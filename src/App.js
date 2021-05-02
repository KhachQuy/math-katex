
// import InlineMath from "react-katex/src/InlineMath";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import {SquareComponent} from "./components/math/square-component";
import {IntegrationComponent} from "./components/math/integration-component";
import {useCallback, useState} from "react/cjs/react.production.min";
import {TestApp} from "./components/math/test-app";
import {Link} from "react-dom";

import './App.css';

import React from "react";
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Signup from "./pages/signup/Signup";
import { AuthProvider } from "./context/AuthContext"
import Home from "./pages/home/Home"
import Login from "./pages/signup/Login"
import PrivateRoute from "./pages/signup/PrivateRoute"
import ForgotPassword from "./pages/signup/ForgotPassword"
import Dashboard from './pages/editor/Dashboard';


function App() {
  return (

    <Router>
      {/* <Navbar/> */}
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/editor" component={Dashboard} />

              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
    </Router>

  )
}

  export default App;
