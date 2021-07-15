
a=$(window).scrollTop();
h=$(window).height();
ww=$(window).width()
$("#static_image").css("display","block")
r=1;
i=1;
l=1;
q=0
x=["0","0","0","0","0","0","0","0"]
y=["0","0","0","0","0","0","0","0"]
$("#static_image").css("height",$(window).height())
function verifysize(){
    ww=$(window).width()
    $("#back_img,nav").css("background-size",182800/ww+"%");
    $(".service-heading").css("font-size","72px")
    $("#content-caption").css("font-size","66px")
    $("#caption").css("font-size","36px")
    $(".question").css("font-size","72px")
    $("body").css("zoom","100%")
    $("#whorv").css("height","800px")
    $("#wwd").css("height","800px")
    $(".abtus").css("font-size","20px")
    $("#laptop").css("display","none")
    $("#service-panel").css("height","4800px")
    $("#icon").attr("href","files/img/fevicon.png")
    $(".gif").css("zoom","70%")
    $(".gif").css("margin","16% 0%")
    $(".about").css("margin-left","10%")
    $(".empty").css("height","600px")
    $("#static_image").css("left","0%")
    $("#static_image").css("width",ww)
    $(".screen").css("display","block")
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
        $(".gif").css("zoom","40%")
        $(".gif").css("margin","auto")
        $(".about").css("margin-left","0%")
        $(".empty").css("height","300px")
        $("#static_image").css("left","-150%")
    }
    else if(ww<800){
        $(".service-heading").css("font-size","40px")
        $("#content-caption").css("font-size","36px")
        $(".gif").css("zoom","50%")
    }
    else if(ww>1400){
        $("#laptop").css("display","block")
        $(".screen").css("display","none")
    }
}
verifysize();

$(window).resize(function(){
    verifysize();
})

$(window).on("scroll touchmove",function() {
    var scroll = $(window).scrollTop();
    var zoom=172800/$(window).width();
    $("#back_img,nav").css("background-size",zoom+scroll/5+"%");
    if(scroll>($("#whorv").offset().top-50)){
        $("nav").css("background-image","url(files/img/13.jpeg)")
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
        $("nav").css("background-image","url(files/img/12.jpeg)")
        $("nav").fadeIn(150);
    }
    for(i=1;i<9;i++){
        item=$("#t"+i)
        if(((item.offset().top+item.height())<=(scroll+h) )&& (item.offset().top>=scroll))
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
