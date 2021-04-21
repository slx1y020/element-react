import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
  state={
    active:1
  }
  handleClick=(e)=>{
    this.setState({active:e.target.id})
  }
  componentDidUpdate(){
    console.log(this.state.active)
  }
  render() {
    const {active}=this.state
    const Num=[1,2,3,4,5,6]
    return (
      <div className="mnjlIndex">
        <img className="headerImg" src={require('../img/模拟记录标题.png').default} alt="" />
        <div className="box">
          <img src={require('../img/左三角.png').default} alt=""/>
          <div className="box-1"></div>
          <img src={require('../img/右三角.png').default} alt=""/>
        </div>
        <div className="box-list">
          <div className="list-title">
            <div className="title">
              <div>日期</div>
              <div>分数</div>
              <div>答对题</div>
              <div>错误数</div>
            </div>
            <div className="list-item">
              <div>2021年4月21号</div>
              <div>95</div>
              <div>19</div>
              <div>1</div>
            </div>
            <div className="list-item">
              <div>2021年4月21号</div>
              <div>95</div>
              <div>19</div>
              <div>1</div>
            </div>
            <div className="list-item">
              <div>2021年4月21号</div>
              <div>95</div>
              <div>19</div>
              <div>1</div>
            </div>
            <div className="list-item">
              <div>2021年4月21号</div>
              <div>95</div>
              <div>19</div>
              <div>1</div>
            </div>
            <div className="list-item">
              <div>2021年4月21号</div>
              <div>95</div>
              <div>19</div>
              <div>1</div>
            </div>
            <div className="list-item">
              <div>2021年4月21号</div>
              <div>95</div>
              <div>19</div>
              <div>1</div>
            </div>
          </div>
        </div>
        <div className="pagin">
          {
            Num.map((x,i)=><span key={i} id={i+1}  className={active===i+1 ?'active':''} onClick={e=>this.handleClick(e)}>{x}</span>)
          }
        </div>
      </div>
    )
  }
}
