
a=$(window).scrollTop();
h=$(window).height();
ww=$(window).width()
r=1;
i=1;
l=1;
q=0;
v=0
x=["0","0","0","0","0","0","0","0"]
y=["0","0","0","0","0","0","0","0"]
var w=parseFloat($(".logo").css("width"))*233/300;
var n=0;
var b=parseFloat($("#dash").css("left"));
function verifysize(){
    ww=$(window).width()
    $("#back_img,nav").css("background-size",182800/ww+"%");
    $("#static_image").css("height",h+200)
    $("#laptop").css("display","none")
    $("#icon").attr("href","files/img/fevicon.png")
    $(".screen").css("display","block")
    $(".mobile-laptop").css("display","block")
    $(".mobile-laptop,.laptop-screen,.screen").css("zoom","100%")
    $("").css("zoom","100%")
    $(".about").removeClass("col-lg-8")
    $(".about").addClass("col-lg-6")
    zoom=172800/$(window).width();

    if($("#n").offset().left>$("#nathead").offset().left)
        $("#dash").css("left",$("#n").offset().left)
    else
        $("#dash").css("left",$("#nathead").offset().left)
    b=parseFloat($("#dash").css("left"));

    if(ww<500){
        $(".service-heading,.question").css("font-size","36px")
        $("#content-caption").css("font-size","33px")
        $("#caption,.abtus").css("font-size","18px")
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
        $("#content-caption,#caption").css("font-size","36px")
        $(".gif").css("display","none")
        $(".empty").css("height","400px")
        $(".about").removeClass("col-lg-6")
        $(".about").addClass("col-lg-8")
        $("#service-panel").css("height","3000px")
        $("#whorv,#wwd").css("height","800px")
        $(".question").css("font-size","72px")
        $(".abtus").css("font-size","20px")
        $(".about").css("margin-left","0%")
    }
    else if(ww<1400){
        $(".screen,.mobile-laptop,.laptop-screen").css("zoom","140%")
        $(".empty").css("height","500px")
        $(".gif").css("display","none")
        $(".about").removeClass("col-lg-6")
        $(".about").addClass("col-lg-8")
        $(".about").css("margin-left","10%")
        $("#service-panel").css("height","4000px")
        $("#whorv,#wwd").css("height","800px")
        $(".service-heading,.question").css("font-size","72px")
        $("#content-caption").css("font-size","66px")
        $("#caption").css("font-size","36px")
        $(".abtus").css("font-size","20px")


    }
    else{
        $("#laptop,.gif").css("display","block")
        $(".screen,.mobile-laptop").css("display","none")
        $(".empty").css("height","600px")
        $(".about").css("margin-left","10%")
        $(".gif").css({"zoom":"70%","margin":"16% 0%"})
        $("#service-panel").css("height","4800px")
        $("#whorv,#wwd").css("height","800px")
        $(".service-heading,.question").css("font-size","72px")
        $("#content-caption").css("font-size","66px")
        $("#caption").css("font-size","36px")
        $(".abtus").css("font-size","20px")
    }
}

verifysize();

$(window).resize(function(){
    verifysize();
})


$(window).on("scroll touchmove",function() {
    var scroll = $(window).scrollTop();
    var m=a-scroll;
    if(v==0){
        $("#static_image").css("display","block")
        v=1
    }

    if(m<0 && n==0){
        $("#nathead,#dash").stop();
        $("#nathead").fadeOut(100);
        $("#n").show();
        $("#dash").animate({left: b-w}, 100);
        n=1;
    }
    else if(m>0 && n==1){
        $("#nathead,#dash").stop();
        $("#nathead").fadeIn(100,function(){
        $("#n").hide();
        });
        $("#dash").animate({left: b}, 100);
        n=0;
        }
    
    if(scroll>($("#whorv").offset().top-50)){
        if(v==1){
            $("nav").css("background-image","url(files/img/service.jpeg)")
            v=2
        }

        if(m>0&&r==0){
            $("nav").fadeIn(150);
            r++
        }
        else if(m<0&&r==1){
            $("nav").fadeOut(150);
            r--;
        }
    }   
    else{
        $("#back_img,nav").css("background-size",zoom+scroll/5+"%");
        if(v==2){
            $("nav").css("background-image","url(files/img/header.jpeg)")
            v=1
        }
        if(r==0)
            $("nav").fadeIn(150);
    }
    z=0
    if(($(window).width())<1400)
        z=198.7
    for(i=1;i<9;i++){
        item=$("#t"+i)
        if(((item.offset().top+item.height()+z)<=(scroll+h) )&& (item.offset().top>=scroll))
        {
            if(q==0){
                item.animate({opacity:"1"},100);
                q=i
                $("#laptop-screen").animate({scrollLeft:(i-1)*444.2}, 100);
               
            }
        }
        else if(i==q)
            {
                item.animate({opacity:"0"},100);
                q=0
            }
    }
    a=$(window).scrollTop();
})
