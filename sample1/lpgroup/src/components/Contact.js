import React, { Component } from 'react';
import '../App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

let myVar;
var waypoint;
var docheight;
var getDocHeight;
var output;
var winheight;
var pctScrolled;
var trackLength;
var percentage;

export class Contact extends Component{  

    constructor(props){
        super(props)
        this.state = {
            title: 'МАРКЕТИНГ',
            text: 'Проведение рекламных кампаний, SERM, SMM + PPC , email рассылки, сопровождение. ЛПГруп - это не рядовая компания, коих сейчас много на рынке, основной момент заключается в том, что целевыми проектами предприятия являются крупные контракты из сферы Нефтегаза.'
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
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );
        var ok = window.innerWidth;
        var okk = window.pageYOffset;
        
        var elmnt = document.getElementById("mtext");
        var elmnt2 = document.getElementById("maincontainer");
        winheight = window.innerHeight  || (document.documentElement || document.body).clientHeight;
        docheight = this.getDocHeight();
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var y = elmnt.scrollHeight;
        var x = elmnt.scrollWidth;
        percentage = scrollTop/y *100;

        var scrollTops = window.pageYOffset || document.documentElement.scrollTop;
        var ys = elmnt2.scrollTop;;

        console.log(y);
        console.log(scrollHeight);
        console.log(ok);
        console.log(ys);

        var pp = scrollTop/ys *100;
        console.log(pp);
      

    
          if (ys<5500 && ys>600) {
            console.log('ok');
            /*document.getElementById('icon1').style.animationName='bounceicon';
            document.getElementById('icon1').style.animationDelay='2s';
            document.getElementById('icon1').style.animationDuration='2s';*/
        
           
          }

          else {
           
           
          }
       
      }

       componentDidMount () {
        window.addEventListener("scroll", 
        this.myFunction(), false)
        percentage = setInterval(
          () => this.myFunction(),
          1000
      );
       }
    

    render(){
        return(
            <div className="main">
                <div className="row" id="ctop">
                <p className="mtxt" id="mtext"><div className="v8"/>{this.state.title}</p>
                 <p className="mrtexts" id="mrtexts">{this.state.text}</p>
                
                </div>
                <div className="row" id="mbottoms">
                    <div className="vector1">
                   
                    </div>
                 
                    <div className="vector2">
                
                        <div className="icon1" id='icon1'> </div>
                      
                       
                    </div>
                    
                   
                    <div className="vector3">
                        <div className="icon2" id='icon2'> </div>
                    </div>
                    <div className="icon3" id='icon3'> </div>
                    <p className="ctxt"><hr/>КОМАНДА ПРОЕКТА</p>
                    <table id="parent">
                        <tr className="tr1">
                            <td className="col1">  
                                <p className="contact_sp">арт-директор</p>
                                <p className="contacts">Игрик</p>
                                <p className="contact_sp">дизайнеры</p>
                                <p className="contacts">Кеша</p>
                                <p className="contacts">Лем</p>   
                            </td>
                            <td className="col2">
                                <p className="contact_sp">арт-директор</p>
                                <p className="contacts">Игрик</p>
                                <p className="contact_sp">дизайнеры</p>
                                <p className="contacts">Кеша</p>
                                <p className="contacts">Лем</p>
                            </td>
                            <td className="col3">
                                <p className="contact_sp">разработчики</p>
                                <p className="contacts">Турбо</p>
                                <p className="contacts">Маня</p>
                                <p className="contact_sp">менеджер</p>
                                <p className="contacts">Кисик</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default Contact;