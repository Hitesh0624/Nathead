
a=$(window).scrollTop();
h=$(window).height();
ww=$(window).width()
r=1;
i=1;
l=1;
q=0
x=["0","0","0","0","0","0","0","0"]
y=["0","0","0","0","0","0","0","0"]
$("#static_image").css("height",h+200)
function verifysize(){
    ww=$(window).width()
    $("#back_img,nav").css("background-size",182800/ww+"%");
    $("#laptop").css("display","none")
    $("#icon").attr("href","files/img/fevicon.png")
    $(".screen").css({"display":"block","zoom":"100%"})
    $(".mobile-laptop").css("display","block")
    $(".mobile-laptop").css("zoom","100%")
    $(".laptop-screen").css("zoom","100%")
    $(".about").removeClass("col-lg-8")
    $(".about").addClass("col-lg-6")

    if(ww<500){
        $(".service-heading").css("font-size","36px")
        $("#content-caption").css("font-size","33px")
        $("#caption").css("font-size","18px")
        $(".question").css("font-size","36px")
        $(".abtus").css("font-size","18px")
        $("#whorv").css("height","900px")
        $("#wwd").css("height","1000px")
        $("#service-panel").css("height","3000px")
        $("#icon").attr("href","files/img/fevicon_dark.png")
        $(".gif").css({"zoom":"40%","margin":"auto","display":"block"})
        $(".about").css("margin-left","0%")
        $(".empty").css("height","300px")
        $("#static_image").css("left","-140%")
    }
    else if(ww<800){
        $(".service-heading").css("font-size","40px")
        $("#content-caption").css("font-size","36px")
        $(".gif").css("display","none")
        $(".empty").css("height","400px")
        $(".about").removeClass("col-lg-6")
        $(".about").addClass("col-lg-8")
        $("#service-panel").css("height","3000px")
        $("#whorv").css("height","800px")
        $("#wwd").css("height","800px")
        $("#caption").css("font-size","36px")
        $(".question").css("font-size","72px")
        $(".abtus").css("font-size","20px")
        $(".about").css("margin-left","0%")
    }
    else if(ww<1400){
        $(".screen").css("zoom","140%")
        $(".mobile-laptop").css("zoom","140%")
        $(".laptop-screen").css("zoom","140%")
        $(".empty").css("height","500px")
        $(".gif").css("display","none")
        $(".about").removeClass("col-lg-6")
        $(".about").addClass("col-lg-8")
        $(".about").css("margin-left","10%")
        $("#service-panel").css("height","4000px")
        $("#whorv").css("height","800px")
        $("#wwd").css("height","800px")
        $(".service-heading").css("font-size","72px")
        $("#content-caption").css("font-size","66px")
        $("#caption").css("font-size","36px")
        $(".question").css("font-size","72px")
        $(".abtus").css("font-size","20px")


    }
    else{
        $("#laptop").css("display","block")
        $(".screen").css("display","none")
        $(".mobile-laptop").css("display","none")
        $(".empty").css("height","600px")
        $(".about").css("margin-left","10%")
        $(".gif").css({"zoom":"70%","margin":"16% 0%","display":"block"})
        $("#service-panel").css("height","4800px")
        $("#whorv").css("height","800px")
        $("#wwd").css("height","800px")
        $(".service-heading").css("font-size","72px")
        $("#content-caption").css("font-size","66px")
        $("#caption").css("font-size","36px")
        $(".question").css("font-size","72px")
        $(".abtus").css("font-size","20px")
    }
}
verifysize();

$(window).resize(function(){
    verifysize();
})


$(window).on("scroll touchmove",function() {
    var scroll = $(window).scrollTop();
    var zoom=172800/$(window).width();
    $("#static_image").css("display","block")
    $("#back_img,nav").css("background-size",zoom+scroll/5+"%");
    if(scroll>($("#whorv").offset().top-50)){
        $("nav").css("background-image","url(files/img/service.jpeg)")
        if(a-scroll>0&&r==0){
            $("nav").fadeIn(150);
            r++
        }
        else if(a-scroll<0&&r==1){
            $("nav").fadeOut(150);
            r--;
        }
    }   
    else{
        $("nav").css("background-image","url(files/img/header.jpeg)")
        $("nav").fadeIn(150);
    }
    z=0
    if(($(window).width())<1400)
        z=198.7
    for(i=1;i<9;i++){
        item=$("#t"+i)
        if(((item.offset().top+item.height()+z)<=(scroll+h) )&& (item.offset().top>=scroll))
        {
            if(JSON.stringify(x)==JSON.stringify(y)){
                x[i-1]="1"
                item.animate({opacity:"1"},100);
                q=i
                $("#laptop-screen").animate({scrollLeft:(i-1)*444.2}, 300);
               
            }
            
        }
        else {
            if(i==q){
                x[i-1]="0"
                item.animate({opacity:"0"},100);
                q=0
            }
        }
        
    }
    
    a=$(window).scrollTop();
})
