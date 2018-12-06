import React, { Component } from 'react';
import '../App.css';
import logo from '../img/1.png';
import Parallax from 'parallax-js';
let myVar;
var waypoint;
var docheight;
var getDocHeight;
var output;
var winheight;
var pctScrolled;
var trackLength;
var percentage;


var scene;
var parallaxInstance;

export class Style extends Component{
    constructor(props){
        super(props)
        this.state = {
            im: logo,
            title: 'ФИРМЕННЫЙ СТИЛЬ',
            text: 'В создании фирменного стиля использовался логотип и фирменный паттерн в трех вариантах - к темному и светлому варианту добавился кобинированный узор из двух паттернов. Узор на папке благодря комбинации двух паттернов приобрел более интересную асимметричную форму'
        }
        this.myFunction = this.myFunction.bind(this);
        this.getDocHeight = this.getDocHeight.bind(this);
    }
    getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }

    myFunction() {
        var elmnt = document.getElementById("style");
        winheight = window.innerHeight  || (document.documentElement || document.body).clientHeight;
        docheight = this.getDocHeight();
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var y = elmnt.scrollHeight;
        var x = elmnt.scrollWidth;
        percentage = scrollTop/y *100;
        console.log(percentage);
    
          if (percentage>10 && percentage<70) {
            console.log('scroll is done');
            document.getElementById('pa').style.marginLeft='50px'
                
          }
          else {
           
          }
       
      }

       componentDidMount () {
        scene = document.getElementById('scene');
        parallaxInstance = new Parallax(scene);
          // window.addEventListener('ok', this.myFunction(),false);
       }
 render(){
        return(
        <div>
            <div className="row" id="srleft">
                <div className="col" id="sleft">
                <div id="scene">
 

                <div className ="folder" data-depth='0.8'></div>
                <div className="notebook" data-depth='0.6'></div>
                <div className="pencil" data-depth='0.6'></div>
                <div className="stylecard1" data-depth='0.6'></div>
                <div className="stylecard2" data-depth='1'></div>
                <div className="styles" data-depth='0.6'> </div>
                </div>
                </div>
            </div>
          
            <div className="row" id="arright">
           
                <div class="col" id="aright">
                 <p className="stxt" id="styletext"><div className="v6"/>{this.state.title}</p>
                 <p className="artexts" id="artexts">{this.state.text}</p>
            </div>
        </div>
        </div>
        );
    }
}
export default Style;