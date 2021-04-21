import React, { Component } from 'react'
import './index.scss'
import { Radio, Checkbox } from 'element-react'
let int;    let maxtime=10*60;
export default class index extends Component {
  state = {
    value1: '',
    value2: '',
    countdown:"10:00"
  }
  onChange1 = (value1) => {
    console.log(value1)
    this.setState({ value1 })
  }
  onChange2 = (value2) => {
    console.log(value2)
    this.setState({ value2 })
  }
  handleAnswer=()=>{
   int = setInterval(() => { this.getCountdown() }, 1000);
  }
  getCountdown=()=>{
    if(maxtime>=0){
      let minute=Math.floor(maxtime / 60);
      let second=Math.floor(maxtime % 60);
      maxtime--;
      this.setState({countdown: (minute > 9 ? minute : '0' + minute) + ':' + (second > 9 ? second : '0' + second)})
    }else{
      clearInterval(int)
    }
    // if (minute === 0 && second === 0) {
    //   minute = 9;
    //   second = 59;
    // } else if (minute >= 0) {
    //   if (second > 0) {
    //     second--;
    //   } else if (second === 0) {
    //     minute--;
    //     second = 59;
    //   }
    // }


  }
  componentWillUnmount(){
    clearInterval(int)
  }
  render() {
    const {countdown}=this.state
    return (
      <div className="mnjsIndex">
        <div className="left">
          <img className="headerImg" src={require('../img/模拟记录标题.png').default} alt="" />
          <div className="question">
            <div className="question_title">
              1.<span>【单选题 5分】</span><span>中国共产党第一次全国代表大会在（）开幕。</span>
            </div>
            <div className="question_answer">
              <Radio.Group value={this.state.value1} onChange={this.onChange1}>
                <Radio value="1">A 1921年7月1日 南京</Radio>
                <Radio value="2">B 1921年7月21日 上海</Radio>
                <Radio value="3">B 1921年7月1日 上海</Radio>
                <Radio value="4">C 1921年7月27日 北京</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="question">
            <div className="question_title">
              2.<span>【多选题 5分】</span><span>中国共产党第一次全国代表大会在（）开幕。</span>
            </div>
            <div className="question_answer">
              <Checkbox.Group value={this.state.value2} onChange={this.onChange2}>
                <Checkbox value="1">A 1921年7月1日 南京</Checkbox>
                <Checkbox value="2">B 1921年7月21日 上海</Checkbox>
                <Checkbox value="3">B 1921年7月1日 上海</Checkbox>
                <Checkbox value="4">C 1921年7月27日 北京</Checkbox>
              </Checkbox.Group>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="r-begin" onClick={this.handleAnswer} >
            <div className="r-begin-title">开始答题</div>
          </div>
          <div className="clock">
            <img src={require('../img/倒计时.png').default} alt=""/>
            <span>倒计时&nbsp;&nbsp;</span>
            <span>{countdown}</span>
          </div>
          <div className="sheet">答题卡<span>0/20</span></div>
          <div className="selector">
            <div className="choice">
              <div className="choice-title"><span>单选题</span><span>(共14题 70分)</span></div>
              <div className="choice-answer">
                <div className="circle" style={{backgroundColor:'#ff660a',color:'#fff',borderColor:'#ff660a'}}>1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
                <div className="circle">4</div>
                <div className="circle">5</div>
                <div className="circle">6</div>
                <div className="circle">7</div>
                <div className="circle">8</div>
                <div className="circle">9</div>
                <div className="circle">10</div>
                <div className="circle">11</div>
                <div className="circle">12</div>
                <div className="circle">13</div>
                <div className="circle">14</div>
              </div>
            </div>
            <div className="choice">
              <div className="choice-title"><span>多选题</span><span>(共6题 30分)</span></div>
              <div className="choice-answer">
              <div className="circle" style={{backgroundColor:'#ff660a',color:'#fff',borderColor:'#ff660a'}}>15</div>
                <div className="circle">16</div>
                <div className="circle">17</div>
                <div className="circle">18</div>
                <div className="circle">19</div>
                <div className="circle">20</div>
              </div>
            </div>
            <div className="explain">
              <div className="one"><div></div>已做</div>
              <div className="two"><div></div>未做</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
