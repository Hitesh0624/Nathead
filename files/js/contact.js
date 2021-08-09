
a=$(window).scrollTop();
var n=0;

function verifysize(){
    ww=$(window).width()
    $("#back_img,nav").css("background-size",182800/ww+"%");
    $("#static_image").css("zoom","100%")
    $("#static_image").css("top","0")
    $("#laptop").css("display","none")
    $("#icon").attr("href","files/img/fevicon.webp")
    $(".screen,.mobile-laptop").css("display","block")
    $(".mobile-laptop,.laptop-screen,.screen").css("zoom","100%")
    $(".about").removeClass("col-lg-8")
    $(".about").addClass("col-lg-6")
    $(".service-div").css("opacity","1")
    zoom=172800/$(window).width();

    if($("#n").css("display")!="none")
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
        $("#service-panel").css("height","5800px")
        $("#icon").attr("href","files/img/fevicon_dark.webp")
        $(".gif").css({"height": "240px","width": "320px","margin":"auto","display":"block"})
        $(".about").css("margin-left","0%")
        $(".empty").css("height","300px")
        $("#static_image").css("left","-140%")

        $(".service-div").css("margin-bottom","400px")
    }
    else if(ww<800){
        $(".service-heading").css("font-size","40px")
        $("#content-caption,#caption").css("font-size","36px")
        $(".gif").css("display","none")
        $(".empty").css("height","300px")
        $(".about").removeClass("col-lg-6")
        $(".about").addClass("col-lg-8")
        $("#service-panel").css("height","6500px")
        $("#whorv,#wwd").css("height","800px")
        $(".question").css("font-size","72px")
        $(".abtus").css("font-size","20px")
        $(".about").css("margin-left","0%")
        $(".service-div").css("margin-bottom","500px")
        $("#static_image").css("left","0%")
        $("#static_image").css("zoom","500%")
    }
    else if(ww<1400){
        $(".screen,.mobile-laptop,.laptop-screen").css("zoom","140%")
        $(".empty").css("height","400px")
        $(".gif").css("display","none")
        $(".about").removeClass("col-lg-6")
        $(".about").addClass("col-lg-8")
        $(".about").css("margin-left","10%")
        $("#service-panel").css("height","8000px")
        $("#whorv,#wwd").css("height","800px")
        $(".service-heading,.question").css("font-size","72px")
        $("#content-caption").css("font-size","56px")
        $("#caption").css("font-size","36px")
        $(".abtus").css("font-size","20px")
        $(".service-div").css("margin-bottom","500px")
        $("#static_image").css("left","0%")


    }
    else{
        $("#laptop,.gif").css("display","block")
        $(".screen,.mobile-laptop").css("display","none")
        $(".empty").css("height","600px")
        $(".about").css("margin-left","10%")
        $(".gif").css({"height": "420px","width": "560px","margin":"16% 0%"})
        $("#service-panel").css("height","4200px")
        $("#whorv,#wwd").css("height","800px")
        $(".service-heading,.question").css("font-size","72px")
        $("#content-caption").css("font-size","66px")
        $("#caption").css("font-size","36px")
        $(".abtus").css("font-size","20px")
        $(".service-div").css("opacity","0")
        $(".service-div").css("margin-bottom","0px")
        $("#static_image").css("left","0%")
    }
}

verifysize();

$(window).resize(function(){
    if($(window).width()-ww!=0)
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
        $("#nathead,#dash,#n").stop();
        $("#nathead").fadeOut(100);
        $("#n").show();
        $("#dash").animate({left: b-w}, 100);
        n=1;
    }
    else if(m>0 && n==1){
        $("#nathead,#dash,#n").stop();
        $("#nathead").fadeIn(100,function(){
        $("#n").hide();
        });
        $("#dash").animate({left: b}, 100);
        n=0;
        }
    
    a=$(window).scrollTop();
})


