import React from 'react';
import ReactDom from 'react-dom';
import '../assets/js/zepto.js';
import '../assets/js/event.js';
import '../assets/js/touch.js';
import '../assets/js/iscroll.js';
import '../assets/js/index.js';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import Footbar from './Footbar';
import Loading from './Loading';


class App extends React.Component{
  componentDidMount(){
    this.props.router.replace("home");
  }
  render(){
    let {bNav,bFoot,bLoading,showNav,hideNav,showFoot,hideFoot} = this.props;
    let path = this.props.location.pathname;
    if(/home|list/.test(path)){
      setTimeout(()=>{
        showNav();
        showFoot();
      },0)
    }else if(/institution/.test(path)){
      setTimeout(()=>{
        showNav();
        hideFoot();
      },0)
    }else if(/user/.test(path)){
      setTimeout(()=>{
        hideNav();
        showFoot();
      },0)
    }else if(/login|reg|teacher/.test(path)){
      setTimeout(()=>{
        hideNav();
        hideFoot();
      },0)
    }

    return(
      <div>
        <Loading show={bLoading} color={'red'}/>
        {bNav?<Navbar/>:''}
        {this.props.children}
        {bFoot?<Footbar/>:''}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    bNav:state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading
  };
}

const mapDispatchToProps=(dispatch)=>{
  return {
    showNav:()=>{
      dispatch({
        type:'SHOW_NAV'
      })
    },
    showFoot:()=>{
      dispatch({
        type:'SHOW_FOOT'
      })
    },
    hideNav:()=>{
      dispatch({
        type:'HIDE_NAV'
      })
    },
    hideFoot:()=>{
      dispatch({
        type:'HIDE_FOOT'
      })
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);