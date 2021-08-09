
a=$(window).scrollTop();
w=2911.5291666666667;
var n=0;

function verifysize(){
    ww=$(window).width()
    $("#icon").attr("href","files/img/fevicon.webp")
    zoom=172800/$(window).width();

    if($("#n").css("display")!="none")
        $("#dash").css("left",$("#n").offset().left)
    else
        $("#dash").css("left",$("#nathead").offset().left)
    
    b=parseFloat($("#dash").css("left"));
    
    if(ww<500)
        $("#icon").attr("href","files/img/fevicon_dark.webp")
}

verifysize();

$(window).resize(function(){
    if($(window).width()-ww!=0)
    verifysize();
})


$(window).on("scroll touchmove",function() {
    var scroll = $(window).scrollTop();
    var m=a-scroll;
    

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


