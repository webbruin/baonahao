import React from 'react';
import '../assets/css/loading.css';

const Loading = (props)=>{
  let show = props.show||false;
  let color = props.color||'red';
  let loading = <div className="spinner" style={{background:color}}></div>
  return(
    <div>
      {show?loading:''}
    </div>
  )
};

export default Loading;