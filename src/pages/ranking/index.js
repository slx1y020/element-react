import React, { Component } from 'react'
import './index.scss'

export default class index extends Component {
  render() {
    return (
      <div className="jspmIndex">
        <img className="headerImg" src={require('../img/模拟记录标题.png').default} alt="" />
        <div className="box">
          <div className="box-1">
            <div className="box-2">
              <div className="box-header">
                <div>排名</div>
                <div>所属学院</div>
                <div>姓名</div>
                <div>学生</div>
                <div>分数</div>
                <div>用时/分钟</div>
              </div>
              <div className="box-content">
                <div><img src={require('../img/1.png').default} alt=""/></div>
                <div>园林学院</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>100</div>
                <div>08:46</div>
              </div>
              <div className="box-content">
                <div><img src={require('../img/2.png').default} alt=""/></div>
                <div>体育学院</div>
                <div>姓名</div>
                <div>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生</div>
                <div>99</div>
                <div>09:12</div>
              </div>
              <div className="box-content">
                <div><img src={require('../img/3.png').default} alt=""/></div>
                <div>所属院系</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>99</div>
                <div>09:51</div>
              </div>
              <div className="box-content">
                <div>4</div>
                <div>所属院系</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>99</div>
                <div>10:51</div>
              </div>
              <div className="box-content">
                <div>5</div>
                <div>所属院系</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>92</div>
                <div>09:51</div>
              </div>
              <div className="box-content">
                <div>6</div>
                <div>所属院系</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>90</div>
                <div>09:51</div>
              </div>
              <div className="box-content">
                <div>7</div>
                <div>所属院系</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>99</div>
                <div>10:51</div>
              </div>
              <div className="box-content">
                <div>8</div>
                <div>所属院系</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>92</div>
                <div>09:51</div>
              </div>
              <div className="box-content">
                <div>9</div>
                <div>所属院系</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>90</div>
                <div>09:51</div>
              </div>
              <div className="box-content">
                <div>10</div>
                <div>所属院系</div>
                <div>姓名</div>
                <div>教职工</div>
                <div>90</div>
                <div>09:51</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
