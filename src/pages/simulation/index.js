import React, { Component } from 'react'
import './index.scss'
import { Radio, Checkbox } from 'element-react'
export default class index extends Component {
  state = {
    value1: '',
    value2: ''
  }
  onChange1 = (value1) => {
    console.log(value1)
    this.setState({ value1 })
  }
  onChange2 = (value2) => {
    console.log(value2)
    this.setState({ value2 })
  }
  render() {
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
          456
        </div>
      </div>
    )
  }
}
