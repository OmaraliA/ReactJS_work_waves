import React, { Component } from 'react';
import '../App.css';

let myVar;
var waypoint;
var docheight;
var getDocHeight;
var output;
var winheight;
var pctScrolled;
var trackLength;
var percentage;
export class Auto extends Component{
    constructor(props){
        super(props)
        this.state = {
          title: '',
          text: '   Разработка дизайна обклейки фирменных автомобилей вдохновила весь офис. На брейншторме все предлагали варианты, вдохновившись раскраской гоночных болидов из игр, и спортивных тачек из фильмов. Нам удалось соблюсти все выдержанные требования для оформления  брендированных авто, чтобы они смотрелись в одном стиле с машинами государственных служб; и в то же время наш вариант обклейки сохраняет динамику композиции и строгие геометрические формы.'
        }
        this.move = this.move.bind(this);
      }
    
    move() {


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
        var autoheight = document.getElementById("auto");
        winheight = window.innerHeight  || (document.documentElement || document.body).clientHeight;
        docheight = this.getDocHeight();
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var blockscroll = scrollTop - 4063;
        var y = autoheight.scrollHeight;
        var x = autoheight.scrollWidth;
        percentage = (blockscroll/y)*100;
        console.log(y);
        console.log(scrollTop);
        console.log(percentage);
    
         /* if (percentage>10 && percentage<70) 
          {
            console.log('scroll is done');
            document.getElementById('automove').style.animation='slideauto 3s ';
            document.getElementById('autolight').style.animation='slidelight 3s ';
            myVar = setTimeout(()=>
            document.getElementById('autolight').style.animation='blinker 0.5s infinite',
            document.getElementById('autolight').style.animationTimingFunction='cubic-bezier(1.0,0,0,1.0)',1000) 
            document.getElementById('automove').style.opacity='1'; 
          }
          else {
            document.getElementById('automove').style.opacity='0';
            document.getElementById('autolight').style.opacity='0';
            document.getElementById('automove').style.animation='none';
            document.getElementById('autolight').style.animation='none';
          }
       */
      }

    componentDidMount() {

        /*window.addEventListener("scroll", 
        this.myFunction(), false)
        percentage = setInterval(
          () => this.myFunction(),
          1000
      );*/

        document.getElementById('automove').style.opacity='1';
        document.getElementById('autolight').style.opacity='1';
              
    }
    render(){
        return(
            <div>
              
                <div class="row" id="arleft">
                
                    <div class="col" id="aleft">
                        <div id='automove' className="autos"></div>
                        <div id='autolight' className="light"></div>
                    </div>
                </div>

                <div class="row" id="arright">
                    <div class="col" id="aright">
                        <p className="atxt"><div class="v3"/> СЛУЖЕБНЫЕ АВТО</p>
                        <p className="artexts" >{this.state.text}</p>
                    </div>
                 </div>
            </div>
        );
    }
}
export default Auto;