
$(window).on("scroll touchmove",function(){
    if(($(window).scrollTop())>=15){
        $(".hiddentext").css("display","block");
        $(".showntext").css("display","none")
    }
    else if(($(window).scrollTop())<15){
        $(".hiddentext").css("display","none")
        $(".showntext").css("display","block")
    };
})