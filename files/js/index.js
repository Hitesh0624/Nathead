
a=$(window).scrollTop();
r=1;
h=$(window).height();
alert("Hi")
function verifysize(){
    ww=$(window).width()
    $("#back_img,nav").css("background-size",182800/$(window).width()+"%");
    $(".service-heading").css("font-size","72px")
    $("#content-caption").css("font-size","66px")
    $("#caption").css("font-size","36px")
    $(".question").css("font-size","72px")
    $("body").css("zoom","100%")
    $("#whorv").css("height","800px")
    $("#wwd").css("height","800px")
    $(".abtus").css("font-size","20px")
    $("#laptop").css("display","none")
    $("#service-panel").css("height","8300px")
    $("#icon").attr("href","files/img/fevicon.png")
            
            
    if(ww<500){
        $(".service-heading").css("font-size","36px")
        $("#content-caption").css("font-size","33px")
        $("#caption").css("font-size","18px")
        $(".question").css("font-size","36px")
        $(".abtus").css("font-size","18px")
        $("#whorv").css("height","800px")
        $("#wwd").css("height","900px")
        $("#service-panel").css("height","5000px")
        $("#icon").attr("href","files/img/fevicon_dark.png")
    }
    else if(ww<800){
        $(".service-heading").css("font-size","40px")
        $("#content-caption").css("font-size","36px")
    }
    else if(ww>1400){
        $("#laptop").css("display","block")
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
    if(scroll>(h+50)){
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
    a=$(window).scrollTop();       
});


