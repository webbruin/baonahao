
  //设置滚动区域的高度
  // console.info($(window).height(),$(".iscrollbox").offset().top,$("footer").height());

  $(".iscrollbox").height($(window).height() -  $(".iscrollbox").offset().top - $("footer").height());
  var s = new IScroll($(".iscrollbox")[0]);

  s.on("scrollEnd",function(){
  if(Math.abs( s.y ) > 200 ){
  $("#gotoTop").show();
}
  else{
  $("#gotoTop").hide();
}
  console.info(s);
});

  $("#gotoTop").on("tap",function(){
  s.scrollTo(0,0,1000);  //scrollTo是iscroll.js插件提供的方法
  // x方向的位置,y方向的位置,时间间隔
  // 1s内回到顶部（Y=0）
})