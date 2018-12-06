import React, { Component } from 'react';
import '../App.css';

let myVar;
export class Management extends Component{

    constructor(props){
        super(props)

        this.state = {
            text: '',
            title:''
        }
    }

    componentDidMount () {
        document.getElementById('stxtm').style.opacity='0';
        document.getElementById('stextman').style.opacity='0';
   
        myVar = setTimeout(()=>
          this.setState({
          title: 'МЕНЕДЖМЕНТ',
          text: 'Внедрение ЦРМ и гибкой методологии менеджмента КАНБАН. Правильно преподнести  и доработать элементы брендинга, которые помогут презентовать весь положительный имидж компании, который она заработала на протяжении более 20 лет работы на рынке.ЛПГруп - это не рядовая компания, коих сейчас много на рынке.',
        }), 2000) 
      
        myVar = setTimeout(()=> document.getElementById('stxtm').style.opacity='1', 4000) 
        myVar = setTimeout(()=> document.getElementById('stextman').style.opacity='1', 4000) 
     
      };
    render(){
        return(
            <div>
                <div className="row" id="mtop">
                    <p className="stxt" id="stxtm"><div class="v3"/>{this.state.title}</p>
                    <p className="stext" id="stextman">{this.state.text}</p>
                </div>

                <div className="row" id="mbottom">
                    <div className="cards">
                        <div className="names">
                            <p className="name">Общий список</p>
                        </div>
                        <div class="card">
                            <div className="top">
                                <p className="tcard">Договор на поставку ТРК</p>
                            </div>

                            <div className="bottom">
                                <p className="tbcard">Передать на рассмотрение документ, вернуть с подписью руководителя</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div className="top">
                                <p className="tcard">Формирование инвойса</p>
                            </div>

                            <div className="bottom">
                            <p className="tbcard">Собрать перечень необходимой продукции у всех заинтересованных лиц</p>
                            </div>
                        </div>

                        <div class="card">
                            <div className="top">
                                <p className="tcard">Купить коня</p>
                            </div>

                            <div className="bottom">
                                <p className="tbcard">Всегда мечтал о коне... Ух, пойду посмотрю Бо Джека</p>
                            </div>
                        </div>
                    </div>

                
                    <div className="cards_second">
                        <div className="names">
                            <p className="name">На неделе</p>
                        </div>
                        <div class="card">
                            <div className="top">
                                <p className="tcard">Экзаменации сотрудников</p>
                            </div>

                            <div className="bottom">
                                <p className="tbcard">Провести экзамен для всех сотрудников коммерческого отдела</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div className="top">
                                <p className="tcard">Создание рабочих мест</p>
                            </div>

                            <div className="bottom">
                            <p className="tbcard">Оформить покупку и настройку компьютеров для новых сотрудников с отдела </p>
                            </div>
                        </div>
                    </div>

                    <div className="cards_third">
                        <div className="names">
                            <p className="name">Выполняется</p>
                        </div>

                        <div class="card">
                            <div className="top">
                                <p className="tcard">Монтаж оборудования</p>
                            </div>
                            <div className="bottom">
                                <p className="tbcard">Проведение СМР на новом объекте в Атырау</p>
                            </div>
                        </div>
                    </div>

                    <div className="cards_fourth">
                        <div className="names">
                            <p className="name">На проверку</p>
                        </div>

                        <div class="card">
                            <div className="top">
                                <p className="tcard">Отпуск</p>
                            </div>

                            <div className="bottom">
                                <p className="tbcard">Передать на рассмотрение документ, вернуть с подписью руководителя</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div className="top">
                                <p className="tcard">Тендерная документация</p>
                            </div>

                            <div className="bottom">
                            <p className="tbcard">Собрать весь перечень необходимых документов для участия в тендере</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Management;