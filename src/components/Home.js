import React from 'react';
import '../assets/css/index.css';
import {Link} from 'react-router';
import Course from './Course';
import Slider from './Slider';
import {connect} from 'react-redux';

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      obj:{},
      arr:['/src/assets/img/midschool/f4ae79388c2579a56438efe8249f8af4.jpg',
           '/src/assets/img/midschool/b01f7477d5efd5ed5e7b6d3c738d4c17.jpg',
           '/src/assets/img/midschool/112d3a0c82c0d27535f23c05ffb48680.jpg',
           '/src/assets/img/midschool/8ff8fb118261a2ca2aa013a4cd2d3635.jpeg'
      ]
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount(){
    this.getData();

  }
  getData(){
    let {showLoading,hideLoading} = this.props;
    let url = '/src/data/nav.json';
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        showLoading();
        setTimeout(()=>{
          this.setState({
            obj:data
          })
          hideLoading();
        },1000)
      })
    }).catch((error)=>{
      alert('获取信息错误');
    })
  }
  render(){
    let {obj,arr} = this.state;
    return(
      <div className="home">
        <Slider/>
        {/*<!-- 轮播end -->

         <!-- 按钮导航start -->*/}
        <nav  className="naviconwarp1">
          {obj.u1?<Course obj={obj}/>:''}
        </nav>
        {/*<!-- 按钮导航end -->

         <!-- 限时优惠start -->*/}
        <section className="xianshiyouhui">
          <h1 className="l-center-r ">
            <span>限时优惠</span>
            <a href="">更多>></a>
          </h1>
          <ul className="u-img-d-txt">
            <li>
              <a href="">
                <div className="imgbox"><img src="/src/assets/img/favorable_1.jpg" alt=""/></div>
                <div className="txtbox">
                  <p>小学</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="imgbox"><img src="/src/assets/img/favorable_2.jpg" alt=""/></div>
                <div className="txtbox">
                  <p>初中</p>
                </div>
              </a>
            </li>
          </ul>
        </section>
        {/*<!-- 限时优惠end -->

         <!-- 中小学start -->*/}
        <section className="midschool">
          <h2 className="l-center-r ">
            <span>中小学</span>
            <a href="">更多>></a>
          </h2>
          <ul className="u-img-d-txt">
            <li>
              <a href="">
                <div className="imgbox"><img src="/src/assets/img/midschool/cls_mid1.jpg" alt=""/></div>
                <div className="txtbox udp">
                  <p>高一英语</p>
                </div>
              </a>

            </li>
            <li>
              <a href="">
                <div className="imgbox"><img src="/src/assets/img/midschool/cls_mid2.jpg" alt=""/></div>
                <div className="txtbox udp">
                  <p>8人课后托管班</p>
                </div>
              </a>
            </li>
          </ul>

          <ul className="l-txt-r-img">
            <li>
              <a href="">
                <div className="txtbox"><p>初一数学</p></div>
                <div className="imgbox"><img src="/src/assets/img/midschool/cls_icon_mid1.jpg" alt=""/></div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="txtbox"><p>中等英语</p></div>
                <div className="imgbox"><img src="/src/assets/img/midschool/cls_icon_mid2.jpg" alt=""/></div>
              </a>
            </li>
          </ul>
          <ul className="l-txt-r-img">
            <li>
              <a href="">
                <div className="txtbox"><p>初一数学</p></div>
                <div className="imgbox"><img src="/src/assets/img/midschool/cls_icon_mid3.jpg" alt=""/></div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="txtbox"><p>中等英语</p></div>
                <div className="imgbox"><img src="/src/assets/img/midschool/cls_icon_mid4.jpg" alt=""/></div>
              </a>
            </li>
          </ul>
        </section>
        {/*<!-- 中小学end -->

         <!-- 逛机构start -->*/}
        <section className="gujigou">
          <h2 className="l-center-r ">
            <span>逛机构</span>
            <a href="">更多>></a>
          </h2>
          <ul className="pic">
            {
              arr.map((item,index)=>{
                return(
                  <li key={index}>
                    <Link to={{
                      pathname:'institution/'+((index+1)*11111111111111)
                    }}>
                      <img src={item} alt=""/>
                    </Link>
                  </li>
                )
              })
            }
          </ul>

        </section>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    bLoading:state.bLoading
  };
}

const mapDispatchToProps=(dispatch)=>{
  return {
    showLoading:()=>{
      dispatch({
        type:'SHOW_LOADING'
      })
    },
    hideLoading:()=>{
      dispatch({
        type:'HIDE_LOADING'
      })
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);