import React from 'react';
import '../assets/css/institution.css';
import {Link} from 'react-router';

class Institution extends React.Component{
  render(){
    return(
      <div className="institution">
        <section className="bgpic">
          <div className="big-picin">
            <img src="/src/assets/img/agent_banner.jpg" alt=""/>
          </div>
          <div>
            <div className="teacherpic"><img src="/src/assets/img/zixun_mes_pic.png" alt=""/></div>
            <div className='teachercontent clfff f16'>
              <p className="mb10">
                红黄蓝幼儿园<span className="f14 pl15">评分5.0</span>
              </p>
            </div>
          </div>
          <i className="icon-tel"></i>
          <p className="teacherbot clfff flex">
            <span className="items teacherbotin1"></span>
            <span className="item">浏览12300次</span>
            <span className="item">好评99%</span>
          </p>
        </section>

        {/*<!-- 背景图区局end -->

         <!-- 下方文字区start -->*/}
        <div className='flex bgfff b1sc tac pt10 pb10 dtext'>
          <span className="items dtexts" ></span>
          <span className="item">现有课程:2000</span>
          <span className="item">学员人数:2000</span>
        </div>
        {/*<!-- 下方文字区end -->

         <!-- 课程几评价start -->*/}
        <section className="flex tac clfff mt5 mb10">
          <Link
            className="item f16 bgred pt5 pb5"
            style={{color:'white'}}
            to="home"
          >主页</Link>
          <Link
            className="item f16 bgred pt5 pb5"
            style={{color:'white'}}
            to="list"
          >课程</Link>
          <Link
            className="item f16 bgred pt5 pb5"
            style={{color:'white'}}
            to="teacher"
          >老师</Link>
          <Link
            className="item f16 bgred pt5 pb5"
            style={{color:'white'}}
          >活动</Link>
        </section>
        {/*<!-- 课程几评价end -->

         <!-- 机构信息start -->*/}
        <section className="message bgfff f16 cl999">
          <h2 className="l-center-r  pl20 fb bb1se pt10 pb10">
            <span>机构信息{this.props.params.aid}</span>
          </h2>
          <div className="flex bb1se pt10 pb10">
            <div className="items pl20 ">开设课程:</div>
            <div className="item pr20 cl666 ">中小学英语 小提琴 手风琴 电吉他 芭蕾舞 武术套路</div>
          </div>
          <div className="flex bb1se pt10 pb10">
            <div className="items pl20 ">机构类型:</div>
            <div className="item pr20 cl666 ">k12培训</div>
          </div>
          <div className="flex bb1se pt10 pb10">
            <div className="items pl20 ">机构简介:</div>
            <div className="item pr20 cl666 ">本机构名师云集,财力雄厚,历史悠久</div>
          </div>
        </section>

        {/*<!-- 机构信息end -->

         <!-- 分校区信息start -->*/}
        <section className="message bgfff f16 cl999 mb10">
          <h2 className="l-center-r  pl20 fb bb1se pt10 pb10 pr20">
            <span>望京第一分校区</span>
            <a href="" ><span className="bg58B26E clfff">离我最近</span><span className="cl58B26E b1s58B26E">1000km</span></a>
          </h2>

          <p className="pl20 pt10 pb10 bb1se pr20">北京市望京西路82号(宣家花园东侧36米居民楼内)</p>

          <h2 className="l-center-r  pl20 fb bb1se pt10 pb10">
            <span className="red">查看分校区地址</span>
            <span className="pr20">></span>
          </h2>
        </section>
        {/*<!-- 分校区信息end-->

         <!-- 相册视频start -->*/}
        <section className="message bgfff f16 cl999 mb10">
          <h2 className="l-center-r  pl20 fb bb1se pt10 pb10 pr20">
            <span>相册/视频<span className="f14 cl999 pl10">20个照片 20个视频</span></span>
          </h2>

          <ul className="pic pl20 pr20 pt10 bb1se">
            <li>

              <img src="/src/assets/img/menu_list_img.jpg" alt=""/>


            </li>
            <li>

              <img src="/src/assets/img/photo.png" alt=""/>

            </li>
            <li>

              <img src="/src/assets/img/topic_l.jpg" alt=""/>

            </li>
            <li>

              <img src="/src/assets/img/icon_quality_goods.jpg" alt=""/>

            </li>
          </ul>

          <ul className="pic pl20 pr20 pb10">
            <li>

              <img src="/src/assets/img/agent_img.jpg" alt=""/>


            </li>
            <li>

              <img src="/src/assets/img/u=4164293181,558695848&fm=21&gp=0.jpg" alt=""/>

            </li>
            <li>

              <img src="/src/assets/img/return.png" alt=""/>

            </li>
            <li>

              <img src="/src/assets/img/u=735005700,1502945716&fm=21&gp=0.jpg" alt=""/>

            </li>
          </ul>

          <h2 className="l-center-r  pl20 fb bb1se pt10 pb10">
            <span className="red">查看全部视频照片</span>
            <span className="pr20">></span>
          </h2>
        </section>
      </div>
    )
  }
}

export default Institution;