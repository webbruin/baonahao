import React from 'react';
import ReactDom from 'react-dom';
import '../assets/css/list.css';

class List extends React.Component{
  render(){
    return(
      <div className="list">
        <nav>
          <ul className="pic navs">
            <li><a href="">附近</a></li>
            <li><a href="">艺术</a></li>
            <li><a href="">排序</a></li>
            <li><a href="">课程</a></li>
          </ul>
        </nav>

        {/*<!--导航end-->*/}
        <div className="iscrollbox">
          <div className="iscrollcontent">

            {/*<!-- 评论栏start -->*/}
            <section className="pinglun">
              <h2 className="l-center-r ">
                <span>水粉班</span>

              </h2>

              <ul className="speak1 ">
                <li className="lis1">
                  <a href="">
                    <div className="imgbox"><img src="/src/assets/img/zixun_chart_teacher.png" alt=""/></div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="txtbox say">
                      <p><span className="thismony">¥3000.00 </span><del>原价$2000 </del> 已报<span className="thispel">10</span>/20人</p>
                      <p>上课地点:北京市海淀区</p>
                      <p>上课时间:2016年7月至2016年9月</p>
                    </div>
                  </a>
                </li>
              </ul>
              <h2 className="l-center-r ">
                <span>随时退班 随时插班 免费试听</span>
                <a href="">12km</a>
              </h2>
            </section>

            <section className="pinglun">
              <h2 className="l-center-r ">
                <span>钢琴班</span>

              </h2>

              <ul className="speak1">
                <li className="lis1">
                  <a href="">
                    <div className="imgbox"><img src="/src/assets/img/tercher_img.jpg" alt=""/></div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="txtbox say">
                      <p><span className="thismony">¥4000.00 </span><del>原价$2000 </del> 已报<span className="thispel">15</span>/20人</p>
                      <p>上课地点:北京市朝阳区</p>
                      <p>上课时间:2016年4月至2016年10月</p>
                    </div>
                  </a>
                </li>
              </ul>
              <h2 className="l-center-r ">
                <span>包教包会 随时插班 免费试练</span>
                <a href="">19km</a>
              </h2>
            </section>

            <section className="pinglun">
              <h2 className="l-center-r ">
                <span>舞蹈班</span>

              </h2>

              <ul className="speak1">
                <li className="lis1">
                  <a href="">
                    <div className="imgbox"><img src="/src/assets/img/topic_l.jpg" alt=""/></div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="txtbox say">
                      <p><span className="thismony">¥9000.00 </span><del>原价$5000 </del> 已报<span className="thispel">19</span>/20人</p>
                      <p>上课地点:北京市大兴区</p>
                      <p>上课时间:2016年10月至2016年12月</p>
                    </div>
                  </a>
                </li>
              </ul>
              <h2 className="l-center-r ">
                <span>气质提升 名师指导 免费试练</span>
                <a href="">3km</a>
              </h2>
            </section>

            <section className="pinglun">
              <h2 className="l-center-r ">
                <span>武术班</span>
              </h2>

              <ul className="speak1">
                <li className="lis1">
                  <a href="">
                    <div className="imgbox"><img src="/src/assets/img/31.jpg" alt=""/></div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="txtbox say">
                      <p><span className="thismony">¥19000.00 </span><del>原价$15000 </del> 已报<span className="thispel">19</span>/20人</p>
                      <p>上课地点:北京市东城区</p>
                      <p>上课时间:2016年11月至2016年12月</p>
                    </div>
                  </a>
                </li>
              </ul>
              <h2 className="l-center-r ">
                <span>气质提升 名师指导 免费试练</span>
                <a href="">6km</a>
              </h2>
            </section>
            {/*<!-- 评论栏end -->*/}
          </div>
        </div>
      </div>
    )
  }
}

export default List;