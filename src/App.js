
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
import Signup from "./pages/authemtication/Signup";
import { AuthProvider } from "./context/AuthContext"
import Home from "./pages/home/Home"
import Login from "./pages/authemtication/Login"
import PrivateRoute from "./pages/authemtication/PrivateRoute"
import ForgotPassword from "./pages/authemtication/ForgotPassword"
// import EditorCenter from './pages/editor/EidtorCenter';
import { Editor } from './pages/editor';
import User from './pages/authemtication/User';
import UpdateProfile from './pages/authemtication/UpdateProfile'

function App() {
  return (

    <Router>
      {/* <Navbar/> */}
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/editor" component={Editor} />
              <PrivateRoute path="/user" component={User} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />

              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
    </Router>

  )
}

  export default App;
