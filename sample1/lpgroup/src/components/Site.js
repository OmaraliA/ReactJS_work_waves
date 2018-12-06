import React, { Component } from 'react';
import '../App.css';

export class Site extends Component{
    constructor(props){
        super(props)
        this.state = {
          title: '',
          text1: 'Доработка кабинетов для персональной партнерской скидки и привязка цен сайта к плавающему курсу евро, с автоматическим перерасчетом на тенге',
          text2: 'Доработка кабинетов для персональной партнерской скидки и привязка цен сайта к плавающему курсу евро, с автоматическим перерасчетом на тенге'
        }
      }
  
    render(){
        return(
            <div id ="stop">
                <p className="stxt" id="stxtsite"><div className="v3"/>САЙТ</p>
                <div className="siteimages1"></div>
                <div className="siteimages2"></div>
                <table id="scard">
                        <tr>
                            <td className="site_text">  
                                <p className="site_theme">БИТРИКС</p>
                                <p className="site_text">{this.state.text1}</p> 
                            </td>
                            <td className="site_image" ></td>
                 
                        </tr>
                </table>

                <table id="scard_second">
                        <tr>
                            <td className="site_text">  
                                <p className="site_theme">САЙТ</p>
                                <p className="site_text">{this.state.text2}</p>
                            </td>
                            <td className="site_images"></td>
                        </tr>
                </table>
             

            </div>
        );


    }
}
export default Site;