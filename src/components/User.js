import React from 'react';
import '../assets/css/users.css';
import {Link} from 'react-router';

class User extends React.Component{
  render(){
    return(
      <div className="user">
        <header className="l-center-r heads">
          <span className="city" onClick={this.props.router.goBack}></span>
          <span className="f20 fb">我的</span>
          <span className="login"></span>
        </header>

        <section className="setting bgfff mb10">
          <div className="setting-pic">
            <img src="/src/assets/img/index-hot2.jpg" alt=""/>

          </div>
          <ul className="flex">
            <li className="item b1sc">
              <div className="tac">待上课</div>
              <div className="tac">2</div>
            </li>
            <li className="item b1se">
              <div className="tac">上课中</div>
              <div className="tac">2</div>
            </li>
          </ul>
        </section>

        <section className="bgfff mb10 frvorable">
          <h2 className="l-center-r b1se">
            <span className="l-bgpic-txt myfrvorable">我的订单</span>
            <a href="javascript:;">查看全部订单>></a>
          </h2>
          <ul className="flex ">
            <li className="item flexcol tac"><a href="javascript:;"><img src="/src/assets/img/ding_staus_money.png" alt=""/></a><span >待付款</span></li>
            <li className="item flexcol tac"><a href="javascript:;"><img src="/src/assets/img/ding_staus_tui.png" alt=""/></a><span>退班中</span></li>
            <li className="item flexcol tac"><a href="javascript:;"><img src="/src/assets/img/ding_staus_ping.png" alt=""/></a><span>待评价</span></li>
          </ul>
        </section>

        <section className="mythis mb10 bgfff">
          <ul>
            <li className="l-center-r b1se"><span className="l-bgpic-txt mythisbg1">我的课表</span><a href="javascript:;">></a></li>
            <li className="l-center-r b1se"><span className="l-bgpic-txt mythisbg2">孩子课程</span><a href="javascript:;">></a></li>
            <li className="l-center-r b1se"><span className="l-bgpic-txt mythisbg3">我的孩子</span><a href="javascript:;"></a>></li>
            <li className="l-center-r b1se"><span className="l-bgpic-txt mythisbg4">我的试听</span><a href="javascript:;"></a>></li>
            <li className="l-center-r b1se"><span className="l-bgpic-txt mythisbg5">我的钱包</span><a href="javascript:;"></a>></li>
            <li className="l-center-r b1se"><span className="l-bgpic-txt mythisbg6">我的优惠</span><a href="javascript:;"></a>></li>
            <li className="l-center-r b1se"><span className="l-bgpic-txt mythisbg7">我的收藏</span><a href="javascript:;"></a>></li>
          </ul>
        </section>

        <section className="mypsw mb10 bgfff">
          <ul>
            <li className="l-center-r b1se"><span  className="l-bgpic-txt mypswbg1">管理支付密码</span><a href="javascript:;">设置></a></li>
            <li className="l-center-r b1se"><span  className="l-bgpic-txt mypswbg2">个人设置</span><a href="javascript:;">></a></li>
          </ul>
        </section>

        <p className="wtel tac bgfff f16 cl666 mb10">客服电话:400-002-1717</p>
      </div>
    )
  }
}

export default User;