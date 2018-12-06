import React, { Component } from 'react';
import '../App.css';
export class Task extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      text1: 'Правильно преподнести  и доработать элементы брендинга, которые помогут презентовать весь положительный имидж компании, который она заработала на протяжении более 20 лет работы на рынке.',
      text2: 'ЛПГруп - это не рядовая компания, коих сейчас много на рынке, основной момент заключается в том, что целевыми проектами предприятия являются крупные контракты из сферы Нефтегаза.'
    }

    this.show = this.show.bind(this);
    this.showFirst = this.showFirst.bind(this);
  }

  componentDidMount () {
    document.getElementById('second').style.visibility ='hidden';  
  }
  show() {
    document.getElementById('second').style.backgroundColor ='#054f80';
    document.getElementById('second').style.visibility ='hidden';
    document.getElementById('third').style.animation ='none';
    document.getElementById('first').style.animation ='none';
   
  }

  showFirst() {
    document.getElementById('second').style.backgroundColor ='054f80';
    document.getElementById('third').style.animation ='moving 2s';
    document.getElementById('third').style.animationFillMode='forwards';
    document.getElementById('first').style.animation ='movingtop 2s';
    document.getElementById('first').style.animationFillMode='forwards';
    document.getElementById('second').style.visibility ='visible';
  }

  render(){
    return(
      <div className="container">
        <p className="ttask" 
        onMouseOut={this.show} onMouseOver={this.showFirst}> <div className="v4"/>Задачи проекта</p>




        <div className="row" id="images">
            <div className="col" id="first"></div>

        </div>
          
       
        <div className="row"  id="images">
          <div class="col" id="second">
            <p className="ttexts">{this.state.text1}
              <br/><br/>{this.state.text2}

                               </p>
          </div>
        </div>

        <div className="row"  id="images">
          <div className="col" id="third"></div>
        </div>
      </div>
    );
  }
}
export default Task;