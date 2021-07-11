var w=parseFloat($(".logo").css("width"))*233/300;
var n=0;
var a=0;
var b=parseFloat($("#dash").css("left"));
var k=0;
var inititalsize=$("body").css("width")
var services = ["Penetration Testing and Security","Website Development","Online Business Starter","Enhancing Your Teaching Experience","Digital Marketing","Graphic Designing","Coding","Tech Teacher","Tech Support and Advisor","Other Services","This service is not yet available."];

function dropboxoff(){
    if(k==1){
        $("#header").animate({height:"70px"},300,function(){$("#dropbox").css("display","none");})
        $(".dropbtn").css("background-color","transparent");
        k=0;         
    }}
function verifysize(){
    
    var footercontainerwidth=parseInt($(".footer-icons").css("width"))+parseInt($(".subscribe").css("width"))+parseInt($("#servicelinks").css("width"))+parseInt($("#quicklinks").css("width"));
    var screenwidth=parseFloat($("body").css('width'));
    $("body").css("margin-top"),$("#header").css("height")
    $(".dropbtn,#menu").css("margin-right",screenwidth/15);
    $("#mainlogo").css("margin-left",0.0633*screenwidth);
    $("#quicklinks,#servicelinks,.menu").css("display","block");
    $(".footer-icons").css("float","left");
    $(".dropbtn,#droplogin").css("display","none");
    $("#footer").css("height","330px");
    $("nav","#content").css("zoom","100%"); 
    if((screenwidth)<=1100){
        $("#footer").css("zoom","75%");
        $("#content").css("zoom","75%");
        if((screenwidth)<=1000){
            var footercontainerwidth=parseInt($(".footer-icons").css("width"))+parseInt($(".subscribe").css("width"))+parseInt($("#servicelinks").css("width"));
            $("#quicklinks").css("display","none");
            if((screenwidth)<=760){
                $("#menu").css("margin-right","10px");
                $(".menu,#servicelinks").css("display","none");
                $("nav").css("zoom","100%");
                $(".dropbtn").css("display","block");
                var footercontainerwidth=parseInt($(".footer-icons").css("width"))+parseInt($(".subscribe").css("width"));
                    if((screenwidth)>=500)
                        $("#login").css("display","block");  
                    else { 
                        $("#droplogin").css("display","block");
                        $(".footer-icons").css("float","none");
                        $("#footer").css("height","600px");
                        var footercontainerwidth=parseInt($(".subscribe").css("width"));
                        $("#footer").css("zoom","70%");
                    }         
            }
            else
                $("nav").css("zoom","80%");   
        }      
    }
    else
        $("#footer").css("zoom","100%");
    dropboxoff();
    $("#footer-container").css("width",footercontainerwidth+"px");
}

verifysize();

$(window).resize(function(){
    verifysize();
})

$(window).on("scroll touchmove",function(){
    if((a-$(window).scrollTop())<0 && n==0){
        $("#nathead").stop();
        $("#dash").stop();
        $("#nathead").fadeOut(150);
        $("#n").show();
        $("#dash").animate({left: b-w}, 150);
        n=1;
    }
    else if((a-$(window).scrollTop())>0 && n==1){
        $("#nathead").stop();
        $("#dash").stop();
        $("#nathead").fadeIn(150,function(){
        $("#n").hide();
        });
        $("#dash").animate({left: b}, 150);
        n=0;
        }
    
    a=$(window).scrollTop();
            
    if(($(window).height()-a-screen.height)<=220)
        $("nav").fadeOut(150);
    else
        $("nav").fadeIn(150);
})

$("#content-caption").on("scroll touchmove",function(){
    if((a-$(window).scrollTop())<0){
        alert("hi")
    }
})

$("#hor-strip").on("scroll touchmove",function(){ 
    if($("#hor-strip").scrollLeft()>200)
        $("#la").show();
    else
        $("#la").hide();
    if($("#hor-strip").scrollLeft()<1000)
        $("#ra").show();
    else
        $("#ra").hide();
})
$("#ra").on("click",function(){
    $("#hor-strip").animate({scrollLeft:$("#hor-strip").scrollLeft()+600}, 500);
})
$("#la").on("click",function(){
    $("#hor-strip").animate({scrollLeft:$("#hor-strip").scrollLeft()-600}, 500);
})
                   
$(".dropbtn").hover(function(){
        $(this).css("background-color","EBEBEC");
        },function(){
            $(this).css("background-color","transparent");
        })
$(".dropdown-content,.services").hover(function(){
    $(".services").css("color","lightgrey");
    },function(){
    $(".services").css("color","white");
})

$(".dropbtn").click(function(){
    if(k==0){
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

$("#content").click(function(){
    dropboxoff();
})



function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
      
        var h=0;
        var a, b, i, val = this.value,q;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            for(q=0;q<arr[i].length;q++){
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(q, val.length).toUpperCase() == val.toUpperCase()&&i!=(arr.length-1)) {
                    h++;
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = arr[i].substr(0, q) + "<strong>" + arr[i].substr(q, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(q+val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                    break;
                }
                else if((i==(arr.length-1))&&h==0){ 
                    h++;
                    b = document.createElement("DIV");
                    b.innerHTML = arr[i];
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                        closeAllLists();
                    });
                    a.appendChild(b);
                    break;
                }
            }  
        }
      if(h<=5)
        $(".autocomplete-items").css("height",h*42+"px")
      else
        $(".autocomplete-items").css("height","210px")
  });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } 
        else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        }
        else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    inp.addEventListener("focus",function(e){
        var val=inp.value;
        if(val==""){
            var a, b, i;
            closeAllLists();
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", inp.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            inp.parentNode.appendChild(a);
            for (i = 0; i < arr.length-1; i++) {
                b = document.createElement("DIV");
                b.innerHTML = arr[i];
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    })
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}


autocomplete(document.getElementById("search-box"), services);