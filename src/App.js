
// import InlineMath from "react-katex/src/InlineMath";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import {SquareComponent} from "./components/math/square-component";
import {IntegrationComponent} from "./components/math/integration-component";
import {useCallback, useState} from "react/cjs/react.production.min";
import {TestApp} from "./components/math/test-app";
import {Link} from "react-dom";
import firebase from './fire';

import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/pages/HomePage/Home';
import Data from './components/pages/login/Data';
import Editor from './components/pages/editor/Data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import fire from "./fire";


// const App = () => {
//   return (<TestApp />)
// }

function App()  {
    return (

      <Router>
          <Navbar/>
          <Switch>
              <Route path= '/' exact component={Home}  />
              <Route path = '/signup' component = {Data}/>
              <Route path = '/editor' component = {Editor}/>
          </Switch>


      </Router>
  )


  }
  export default App;
