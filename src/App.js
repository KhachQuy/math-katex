import logo from './logo.svg';
import React from 'react';
import './App.css';
// import InlineMath from "react-katex/src/InlineMath";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import {SquareComponent} from "./components/square-component";
import {IntegrationComponent} from "./components/integration-component";
import {useCallback, useState} from "react/cjs/react.production.min";
import {TestApp} from "./components/test-app";
import {Link} from "react-dom";

// const App = () => {
//   return (<TestApp />)
// }
function App() {
  return (
      <div className ='App'>
        <nav className="navbar fixed-top bg-dark navbar-dark navbar-expand-lg m-0" id="navbar">
          <a className="navbar-brand" href="#">EasyMathDoc</a>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">

              {/*<li className="nav-item" id="admin">*/}
                <a className="nav-link" href="Login.php">
                  {/*<i className="fa fa-user" style="font-size:20px; color: lightgray;"></i>*/}
                  <span data-toggle="collapse" data-target=".navbar-collapse.show">Log in</span>
                </a>
              {/*</li>*/}
            </ul>

          </div>

        </nav>
        
      </div>
  )

}
export default App;
