import React, { Component } from 'react';
import '../App.css';
export class Branding extends Component{
    constructor(props){
        super(props)
        this.state = {
          title: '',
          text1: '  В процессе создания фирменного паттерна мы вдохновлялись  треугольной формой логотипа. Разбивка на мозаичные кусочки с разной раскраской делает паттерн нескучным для восприятия и одновременно не мешает восприятию информации в композиции, где паттерн используется как элемент дизайна.',
          text2:'                             Мы разработали два варианта цветовой гаммы фирменного узора - темный и светлый, это позволяет всегда комбинировать составлящие дизайна в хорошем контрасте, например, для удобочитаемости текста'
        }
      }
    render(){
        return(
            <div>
                <div className="row" id="brleft">
                    <div class="col" id="bleft">
                        <p className="btxt"> <div className="v5"/>БРЕНДИНГ</p>
                        <p className="btexts">{this.state.text1}</p>
                    </div>
                </div>

                <div className="row" id="brright">
                    <div className="col" id="bright">
                        <p className="brtexts">
                            {this.state.text2}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Branding;