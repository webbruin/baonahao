import React from 'react';

class Slider extends React.Component{
  componentDidMount(){
    Swipe(document.getElementById('swipeBox'),{
      "startSlide":0,
      "auto":2000,
      "callback":function(e,item){
        //console.info(e,item);
        //去除全部的的li的cur。
        //给当前的li添加ur
        $(".indrector").find("li").removeClass("cur").eq(e).addClass("cur");
      }
    });
  }

  render(){
    return(
      <section className="swipewarp">
        <div id="swipeBox" className="swipe">
          <div className="swipe-wrap">
            <div>
              <a href="#"><img src="/src/assets/img/swipe/banner_test.jpg" /></a>
            </div>
            <div>
              <a href="#"><img src="/src/assets/img/swipe/banner_test1.jpg" /></a>
            </div>
            <div>
              <a href="#"><img src="/src/assets/img/swipe/banner_test2.jpg" /></a>
            </div>
          </div>

          <ul className="indrector">
            <li className="cur"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Slider;