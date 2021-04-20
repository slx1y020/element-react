import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
  render() {
    return (
      <div className="jsxzIndex">
        <img className="headerImg" src={require('../img/竞赛须知标题.png').default} alt=""/>
        <div className="titleImg">
          <img src={require('../img/标题左侧.png').default} alt=""/>
          <div className="title">模拟宗旨</div>
          <img src={require('../img/标题右侧.png').default} alt=""/>
        </div>
        <div className="box">
          <img src={require('../img/向左.png').default} alt=""/>
          <div className="z_7"></div>
          <div className="textcontent">
            <div className="u_8"></div>
            <div className="text">
            以习近平新时代中国特色社会主义思想为指导，贯彻习近平总书记关于“四史”学习的重要讲话精神，落实教育部党组等四部门《关于加强高校党的政治建设的若干措施》和2021年 全国教育工作会议精神，聚焦立德树人根本任务，围绕建党百年，开展有影响力的系列活动，做到学史明理、学史增信、学史崇德、学史力行，以高质量党建引领高质量发展，以优异成绩庆祝中国共产党成立100周年。
            </div>
            <div className="d_8"></div>
          </div>
          <div className="y_7"></div>
          <img src={require('../img/向右.png').default} alt=""/>
        </div>
        <div className="footer">
          <div className="line1"></div>
          <div className="Image">
          <img src={require('../img/未选中.png').default} alt=""/>
          <div className="interval">-</div>
          <img src={require('../img/未选中.png').default} alt=""/>
          <div className="interval">-</div>
          <img src={require('../img/选中.png').default} alt=""/>
          <div className="interval">-</div>
          <img src={require('../img/未选中.png').default} alt=""/>
          <div className="interval">-</div>
          <img src={require('../img/未选中.png').default} alt=""/>
          </div>
          <div className="line2"></div>
        </div>
      </div>
    )
  }
}
