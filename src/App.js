import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
// import News apiKey = {apiKey}Modern from './component/News apiKey = {apiKey}Modern';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import News from './component/News';


export default class App extends Component {
  apiKey = process.env.REACT_APP_api;
  // Must start with REACT_APP_ in .env.local file 
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
              <Route exact path="/"><News apiKey = {this.apiKey} key="general" pageSize={6} country={'in'} category={'general'}/></Route>
              <Route exact path="/about"><News apiKey = {this.apiKey} key="about" pageSize={6} country={'in'} category={'about'}/></Route>
              <Route exact path="/business"><News apiKey = {this.apiKey} key="business" pageSize={6} country={'in'} category={'business'}/></Route>
              <Route exact path="/entertainment"><News apiKey = {this.apiKey} key="entertainment" pageSize={6} country={'in'} category={'entertainment'}/></Route>
              <Route exact path="/health"><News apiKey = {this.apiKey} key="health" pageSize={6} country={'in'} category={'health'}/></Route>
              <Route exact path="/science"><News apiKey = {this.apiKey} key="science" pageSize={6} country={'in'} category={'science'}/></Route>
              <Route exact path="/sports"><News apiKey = {this.apiKey} key="sports" pageSize={6} country={'in'} category={'sports'}/></Route>
              <Route exact path="/technology"><News apiKey = {this.apiKey} key="technology" pageSize={6} country={'in'} category={'technology'}/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

