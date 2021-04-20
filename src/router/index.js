import React from "react";
import {Route} from "react-router-dom";
import Home from '../pages/home'
export default function Maprouter() {
  return (
   <div>
     <Route exact path="/" component={Home}/>
   </div>
  );
}

