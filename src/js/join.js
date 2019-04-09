;(function(){
    let oJob = $("#job");
    let oTitle = $("#title");
    let oDuty = $(".cont1 .wrap");
    let oAsk = $(".cont2 .wrap");
    let oAsk2 = $(".cont3 .wrap");
    oJob.on('click','a',function(event){
        let index = $(this).index();
        $(oTitle).text($(this).text());
        $(this).addClass("active").siblings().removeClass("active");
        $(oDuty).eq(index).addClass("active").siblings().removeClass("active");
        $(oAsk).eq(index).addClass("active").siblings().removeClass("active");
        $(oAsk2).eq(index).addClass("active").siblings().removeClass("active");
    });
})();