
a=$(window).scrollTop();
h=$(window).height();
ww=$(window).width()
r=1;
i=1;
l=1;
q=0;
v=0;
s=0;
x=["0","0","0","0","0","0","0","0"]
y=["0","0","0","0","0","0","0","0"]
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
    var w=parseFloat($(".logo").css("width"))*233/300;
    alert(b)
    alert(b-w)

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
    
    if(scroll>($("#whorv").offset().top-50)){
        if(v==1){
            $("nav").css("background-image","url(files/img/service.webp)")
            v=2
        }

        if(m>0&&r==0){
            $("nav").fadeIn(100);
            r++
        }
        else if(m<0&&r==1){
            $("nav").fadeOut(100);
            r--;
        }
    }   
    else{
        if(ww>500)
            $("#back_img,nav").css("background-size",zoom+scroll/5+"%");
        if(v==2){
            $("nav").css("background-image","url(files/img/header.webp)")
            v=1
        }
        if(r==0)
            $("nav").fadeIn(100);
    }
    if(ww>1400)
    for(i=1;i<9;i++){
        item=$("#t"+i)
        if(((item.offset().top+item.height())<=(scroll+h) )&& (item.offset().top>=scroll))
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







function dropboxoff(){
    if(s==1){
        $("#header").animate({height:"70px"},300,function(){$("#dropbox").css("display","none");})
        s=0;         
    }}
$("#mainNav").click(function(){
    if(s==0){
        if(parseFloat($("body").css('width'))>=450)
            $("#header").animate({height:"300px"},300);
        else
            $("#header").animate({height:"330px"},300);
        k=1;
        
        $("#dropbox").css("display","block");
        $(".dropbtn").css("background-color","#D9D9DB");
    }
    else 
        dropboxoff();
})