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

const App = () => {
  return (<TestApp />)
}

export default App;
