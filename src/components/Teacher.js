import React from 'react';
import '../assets/css/teacher.css';

class Teacher extends React.Component{
  render(){
    return(
      <div className="teacher">
        <header className="l-center-r heads">
          <span className="city" onClick={this.props.router.goBack}></span>
          <span className="f20 fb">教师主页</span>
          <span className="login"></span>
        </header>

        <section className="bgpic">
          <div className="big-picin">
            <img src="/src/assets/img/agent_banner.jpg" alt=""/>
          </div>
          <div>
            <div className="teacherpic"><img src="/src/assets/img/kid_img_big.png" alt=""/></div>
            <div className='teachercontent clfff f16'>
              <p className="mb10">
                教师姓名<span className="f14 pl15">18年教龄</span>
              </p>
              <p>教师个人说明:全天候辅导</p>
            </div>
          </div>
          <i className="icon-tel"></i>
          <p className="teacherbot clfff flex">
            <span className="items"></span>
            <span className="item">浏览12300次</span>
            <span className="item">好评99%</span>
          </p>
        </section>


        <div className='flex bgfff b1sc tac pt10 pb10'>
          <span className="items"></span>
          <span className="item">现有课程:2000</span>
          <span className="item">学员人数:2000</span>
        </div>

        <section className="flex tac clfff mt5 mb10">
          <span className="item f16 bgdarkred pt5 pb5">课程</span>
          <span className="item f16 bgred pt5 pb5">评价</span>
        </section>

        <section className="bgfff cl999 f16">
          <h2 className="l-center-r b1se">
            <span className=" pl20">共五门课程</span>
          </h2>
          <div className="pl20 classescenter">
            <h3 className="l-center-r cl666 fb">
              <span className="">课程名称</span>
            </h3>
            <p className="l-center-r pr20">
              <span className="">已报<i className="red">3</i>/9人</span>
              <span className=""><strong className="red pr20 fb">¥9000</strong>原价¥8000</span>
            </p>
            <p className="contentcls">课程总数:10课时(2小时/课时)</p>
            <p className="contentcls">课程时间:2015-06-08至2016-09-10</p>
            <p className="contentcls">授课地点:中关村大厦06-705</p>

          </div>
          <div className='picclass flex b1se pt10 pb10'>
            <div className="item">
              <div className='flex pl20'>
                <span className="item s1">√ 随时退班</span>
                <span className="item s2">√ 随时插板</span>
                <span className="item s3">√ 免费试听</span>
              </div>
            </div>

            <div className="items1 mr5">
              <a className="">立即报名</a>
            </div>

          </div>
          <h3 className="pl20 b1se red pt5 pb5">
            <span className="">更多课程</span>
          </h3>
        </section>
      </div>
    )
  }
}

export default Teacher;