import React from 'react';
import '../assets/css/login.css';
import {Link} from 'react-router';

class Reg extends React.Component{
  render(){
    return(
      <div className="reg">
        <header className="l-center-r heads mb20">
          <span className="city" onClick={this.props.router.goBack}></span>
          <span className="f20 fb">注册</span>
          <Link to="login" className="f20 fb">登录</Link>
        </header>

        <form action="" className="forms">
          <input
            className="mb10"
            type="text"
            required
            placeholder="请输入手机号"
          />
          <span className="input11"></span><br/>
          <input
            className="mb10"
            type="text"
            placeholder="请输入验证码"
          /><br/>
          <input
            className="input3"
            type="checkbox"
          />我已同意并阅读《报哪好服务协议》
          <input
            className="mb10 bgred tac clfff fb f16 input4"
            type="submit"
            value="注册"
          />
        </form>
        <a href="" className="pl20 cl666 f14">找回密码</a>
      </div>
    )
  }
}

export default Reg;