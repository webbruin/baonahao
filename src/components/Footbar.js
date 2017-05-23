import React from 'react';
import {Link} from 'react-router';

class Footbar extends React.Component{
  render(){
    return(
      <footer>
        <p className="foot-one">
          <Link to='/login'>登录</Link>
          <i>|</i>
          <Link to='/reg'>注册</Link>
          <i>|</i>
          <a href="javascript:;">反馈</a>
          <i>|</i>
          <a href="javascript:;">帮助</a>
        </p>

        <p className="foot-two">
          <a href="">app</a><a href="" className="reds">触屏版</a><a href="">电脑版</a>
        </p>

        <p className="foot-three">Copyright 报哪好 m.baonahao.com</p>

      </footer>
    )
  }
}

export default Footbar;