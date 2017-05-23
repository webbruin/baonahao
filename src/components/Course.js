import React from 'react';
import {Link} from 'react-router';

class Course extends React.Component{
  render(){
    let {obj} = this.props;
    // JSON.stringify(obj)!='{}'?map.....
    return(
      <div className="naviconwarp1">
        <ul className="u-img-d-txt">
          {
            obj.u1.map((item,index)=>{
              return(
                <li key={index}>
                  <a href="javascript:;">
                    <div className="imgbox">
                      <img src={item.img} alt=""/>
                    </div>
                    <div className="txtbox">
                      <p>{item.name}</p>
                    </div>
                  </a>
                </li>
              )
            })
          }
        </ul>

      </div>
    )
  }
}

export default Course;