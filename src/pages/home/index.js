import React from 'react';
import './index.scss'
import JSXZ from '../competition'
import MNJS from '../simulation'
import SSJS from '../fourhistory'
import MNJL from '../analog'
import RYZS from '../certificate'
import JSPM from '../ranking'
class Home extends React.Component {
  state={
    active:1
  }
  render() {
    const {active}=this.state
    const list=[
      {id:1,src:require('../img/竞赛须知.png').default,name:"竞赛须知"},
      {id:2,src:require('../img/模拟竞赛.png').default,name:"模拟竞赛"},
      {id:3,src:require('../img/四史竞赛.png').default,name:"四史竞赛"},
      {id:4,src:require('../img/模拟记录.png').default,name:"模拟记录"},
      {id:5,src:require('../img/荣誉证书.png').default,name:"荣誉证书"},
      {id:6,src:require('../img/竞赛排名.png').default,name:"竞赛排名"},
      {id:7,src:require('../img/退出登录.png').default,name:"退出登录"},
    ]
    return (
      <div className="homeIndex">
        <div className="content">
          <div className="nav">
            {
              list.map(item=><div key={item.id} className="list" onClick={()=>{this.setState({active:item.id},console.log(this.state.active))}}>
                <img src={item.src} alt=""/>
                <p>{item.name}</p>
              </div>)
            }
          </div>
          <div className="box">
            {active===1 && <JSXZ/>}
            {active===2 && <MNJS/>}
            {active===3 && <SSJS/>}
            {active===4 && <MNJL/>}
            {active===5 && <RYZS/>}
            {active===6 && <JSPM/>}
            {active===7 && alert("退出登录！！！")}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;