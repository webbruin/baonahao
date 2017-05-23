import React from 'react';
import '../assets/css/login.css';
import {Link} from 'react-router';

class Login extends React.Component{
  render(){
    return(
      <div className="login">
        <header className="l-center-r heads mb30">
          <span className="city" onClick={this.props.router.goBack}></span>
          <span className="f20 fb">登录</span>
          <Link to="reg" className="f20 fb">注册</Link>
        </header>

        <form action="" className="forms">
          <input
            className="mb10"
            type="text"
            required
            placeholder="请输入手机号"
          />
          <span className="input1"></span><br/>
            <input
              className="mb20"
              type="password"
              placeholder="请输入密码"
            />
          <span className="input2"></span><br/>
              <input
                className="mb10 bgred tac clfff fb f16 input4"
                type="submit"
                value="登录"
              />
        </form>
        <a href="" className="pl20 cl666 f14">找回密码</a>
      </div>
    )
  }
}

export default Login;