import React, { Component } from 'react';
import Client from './components/Client';
import Task from './components/Task';
import Management from './components/Management';
import Site from './components/Site';
import Branding from './components/Branding';
import Auto from './components/Auto';
import Style from './components/Style';
import Contact from './components/Contact';
import {Row} from 'react-bootstrap';
import './App.css';
import Parallax from 'parallax-js';

var scene;
var parallaxInstance;
class App extends Component {
componentDidMount() {
scene = document.getElementById('scene');
parallaxInstance = new Parallax(scene);
}
  render() {
    return (
      <body>
      <div className="all" id="all"> 
      <div className="MainContainer" id ="maincontainer">
        <Row id="client" className="ParallaxContainer">
          <Client/>
        </Row>

        <Row id="task" className="ContentContainer">
          <Task/>
        </Row>
     
      
      
        <Row id="manage" className="ParallaxContainer">
        <Management/>
        </Row>
      

        <Row id="site"  className="ContentContainer" >
          <Site/>
        </Row>
        
        <Row id="branding" className="ParallaxContainer">
          <Branding/>
        </Row>

        <Row id="auto"  className="ContentContainer"  >
          <Auto/>
        </Row>

        <Row id="style" className="ParallaxContainer">
          <Style/>
          <div id="scene">
  <div data-depth="0.8">My first Layer!</div>
  <div data-depth="0.6">My second Layer!</div>
</div>
        </Row>

        <Row id="contact" className="ContentContainer"  >
          <Contact/>
          
        </Row>




      </div>

      
      </div>
     </body>
    );
  }
}

export default App;
