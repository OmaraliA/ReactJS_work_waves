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

export class Client extends Component{

  constructor(props){
    super(props)
    this.state = {
      title: '',
      text: 'ЛПГруп - это не рядовая компания, коих сейчас много на рынке, основной момент заключается в том, что целевыми проектами предприятия являются крупные контракты из сферы Нефтегаза. То есть, мы не можем сказать что выбор в пользу какого-либо подрядчика на данном куске рынка является спонтанным. Конкуренция есть, но не большая, как правило все знают друг друга в лицо, поэтому пресейл напоминает фильм крысиные бега, где каждая компания борется за заветный приз. Опять-таки, учитывая специфику, конечные предложения под проект не могут значительно отличаться от предложений конкурентов, в связи с этим основополагающими факторами принятия решения в пользу подрядчика является стоимость его решения и репутация',
      client:'О КЛИЕНТЕ'
    }   
    this.myFunction = this.myFunction.bind(this);
    this.getDocHeight = this.getDocHeight.bind(this);
    //this.calculate = this.calculate.bind(this);
   
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
    var elmnt = document.getElementById("client");
    winheight = window.innerHeight  || (document.documentElement || document.body).clientHeight;
    docheight = this.getDocHeight();
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var y = elmnt.scrollHeight;
    var x = elmnt.scrollWidth;
    percentage = scrollTop/y *100;
    console.log(percentage);

      if (percentage>10 && percentage<70) {
        console.log('scroll is done');
        document.getElementById('aboutclient').style.opacity='1'
        document.getElementById('clients').style.opacity='1'      
      }
      else {
        document.getElementById('aboutclient').style.backgroundColor='white'; 
        document.getElementById('aboutclient').style.opacity='0'
        document.getElementById('clients').style.opacity='0'
      }
   
  }
  componentDidMount () {
  
  
  console.log('You have scrolled the page by: ' + pctScrolled +'%');
  document.getElementById('txts').style.opacity='0';
  //document.getElementById('aboutclient').style.opacity='0';
  //document.getElementById('clients').style.opacity='0';

  
  myVar = setTimeout(()=>
    this.setState({
    title: 'КОНСАЛТИНГ И СОПРОВОЖДЕНИЕ',
    //text: 'ЛПГруп - это не рядовая компания, коих сейчас много на рынке, основной момент заключается в том, что целевыми проектами предприятия являются крупные контракты из сферы Нефтегаза. То есть, мы не можем сказать что выбор в пользу какого-либо подрядчика на данном куске рынка является спонтанным. Конкуренция есть, но не большая, как правило все знают друг друга в лицо, поэтому пресейл напоминает фильм крысиные бега, где каждая компания борется за заветный приз. Опять-таки, учитывая специфику, конечные предложения под проект не могут значительно отличаться от предложений конкурентов, в связи с этим основополагающими факторами принятия решения в пользу подрядчика является стоимость его решения и репутация',
    //client:'О КЛИЕНТЕ'
  }), 2000) 

  myVar = setTimeout(()=> document.getElementById('txts').style.opacity='1', 4000) 
  //myVar = setTimeout(()=> document.getElementById('aboutclient').style.opacity='1', 4000) 
  //myVar = setTimeout(()=> document.getElementById('clients').style.opacity='1', 4000)
  
};
  
  render(){
    return(
      <div>
    
        <div className="im">
          <div className="innerim">
            <p className="tleft">задача<div className="v2"/></p>
            <div className="vl"/>            
          </div>
        <div className="images_sc"></div>
        <div className="v9"/><header><p className="theme_new" id="txts">{this.state.title}</p></header>   
        </div>
        <div>
          <div className="texts">
           <div className="animate"> <p className="txt" id="clients"><div className="v3"/>{this.state.client}</p></div>
            <p id="aboutclient">{this.state.text}</p>
          </div>
          <div className="logo"></div>
            <a href="https://lpgroup.kz/" className="button">перейти</a>
        </div>
      </div>
    );
  }
}
export default Client;

