import React, { Component } from 'react'
import './App.css'
import 'element-theme-default';
import {BrowserRouter as Router} from "react-router-dom";
import Maprouter from './router';
export default class App extends Component {
 render(){
  return (
    <Router>
      <Maprouter/>
    </Router>
    )
  }
}

