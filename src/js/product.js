import Swiper from '../js/swiper.min.js';
import "../css/swiper.min.css"
import "../css/product.css"
import { resolve } from 'url';

let slidesPerView = 3;
let navli = $("#main .left-nav");
let DomSwiper = $("#pro1");
let swiperH = null;
let nav = $(".nav-com");

if (!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
    $(window).scroll(()=>{
        if($(window).scrollTop()>100){
            nav.addClass("fixed");
        }else{
            nav.removeClass("fixed");
        }
    })
}




window.onload = function(){
    setTimeout(()=>{
        swiperH = DomSwiper.height();
        navli.css({"height":swiperH+"px"});
  },500)
}

$(window).resize(function(){
    setTimeout(()=>{
        swiperH = DomSwiper.height();
        navli.css({"height":swiperH+"px"});
    },200)
})

getData("pro1",1)
getData("pro2",2);
getData("pro3",3);
getData("pro4",4);
//获取产品数据
function getData(dom,category){
  let content = $("#"+dom);
  $.ajax({
      url: "./data/product.json",
      type: "get",
      dataType: "json",
      success: function(data) {
          let newData = data.data.filter(function(item){
              return item.category == category;
          });
          $.each(newData, function(i, item) {
              let str = `<div class="swiper-slide">
                            <div class="pro">
                                <img src="${item.imgPath}" alt="${item.title}">
                                <div class="bottom">
                                    <p class="text-center">${item.title}</p>
                                    <p class="text-center">
                                        <span>${item.volume} ml</span>
                                        <span class="line">|</span>
                                        <span>&yen; ${item.price}</span>
                                    </p>
                                </div>
                                <div class="box">
                                    <p class="text-center">${item.title}</p>
                                    <img src="./images/wx.png" alt="二唯码">
                                    <p>查看详情-扫码下载商城APP</p>
                                </div>
                            </div>
                        </div>`;
              $(content).append(str);
          });

          if (!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
            slidesPerView = 3;
          }else{
            slidesPerView = 1;
          }
          let Swiper1 = new Swiper('.swiper1', {
              loop :false,
              slidesPerView : slidesPerView, //可见数
              spaceBetween : 20,  //间隔
              observer:true,//修改swiper子元素时，自动初始化swiper
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
          });
          
      }
  });
};
