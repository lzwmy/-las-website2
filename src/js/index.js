import "../css/index.css"

let w = $(window).width();
let oLeftImg = $("#left_js");
let oWrap = $("#start_js");
let oRightImg = $("#right_js");
let oTl = $(".tl");
let oLeftImgW = oLeftImg.width();
let oRightImgW  = null;
let oRight = $(".main-right");


if(!window.sessionStorage.getItem('name')){
    window.sessionStorage.setItem('name','olomi');
    if (!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
        oRightImgW = oRightImg.width();
    }else{
        oRightImgW = oRightImg.width()/2;
    }
    let oLeftImgT = oRightImg.height()/2+oRightImg.offset().top;
    oLeftImg.css({"right": w-oRightImgW+"px","top":oLeftImgT+"px"});

    //首屏动画1.4秒
    setTimeout(()=>{
        oLeftImg.addClass("active");
        oLeftImg.css({"right": oRightImgW/2+"px"})
        oWrap.addClass("active");
    },1400);
}else{
    $("#start_js").css("display","none");
}

$(window).resize(function(){
    w = $(window).width();
    oLeftImgW = oLeftImg.width();
    oRightImgW = oRightImg.width();
    oRightImg.css({"right":"-80px"})
    oLeftImg.css({"right": oRightImgW+"px"})
});

init();
function init(){
    oTl.on("mouseenter",".t",function(){
        $(this).addClass("active").siblings().removeClass("active");
        let bgPath = $(this).attr("data-img");
        $(oRight).css({"background-image":"url("+bgPath+")"});
    });
    
};
