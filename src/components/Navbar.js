import React from 'react';
import '../assets/css/navbar.css';
import {Link} from 'react-router';

class Navbar extends React.Component{
  render(){
    return(
      <div className="topone">
        <header className="l-center-r head">
          <Link href="javascript:;" className="city" to="home">首页</Link>
          <form action="" className="c">
            <input type="text" className="search" placeholder="搜索、课程、机构"/>
          </form>
          <Link to="/user" className="login">我的</Link>
        </header>
      </div>
    )
  }
}

export default Navbar;