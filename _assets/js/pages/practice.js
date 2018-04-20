var sVal = false;
$(window).resize(function(){
  if(screen.width > 1024){
    newFunction();
 }
});
$(document).ready(function() {  
    if(screen.width > 1024){
       newFunction();
    }
    $('.prctSec_tab').click(function(){
      $(this).addClass('prctSec_active');
      $(this).siblings().removeClass('prctSec_active').addClass('prctSec_inactive');
      if($(this).attr('id') == 'prctSectab_2'){
        sVal = true;
        $('html, body').animate({
          scrollTop: $(".prct_svc").offset().top-50
        }, 2000);
      }
    });
});

var valueReceived = ""; 
var valueReceivedLength = 0;
var testVal = 0;
function scrollFn(val,d){
  valueReceived = val;
  var vL = val[val.length-1];
  valueReceivedLength = parseInt(valueReceivedLength);
  vL = parseInt(vL);
  console.log(vL);
  if(d == "down"){
    if(vL != testVal){
      testVal = vL;
      $('.rContent').hide();
      if(vL == 1){
        $('.rContent_'+vL).fadeIn(2700);
      } else{
        $('.rContent_'+vL).fadeIn(1000);
      }
      $('.rContent_3').removeClass('fadedIn');
    }
  }
  if(d == "up"){
    if(vL != testVal){
      testVal = vL;
      $('.rContent').hide();
      $('.rContent_'+vL).fadeIn(1000);
      $('.rContent_3').removeClass('fadedIn');
    }
    else if(vL == testVal && vL == 3){
      // $('.rContent').hide();
      if(!$('.rContent_'+vL).hasClass('fadedIn')){
        $('.rContent_'+vL).addClass('fadedIn');
        // $('.rContent_'+vL).fadeIn(1000);
      }
    }
  }
}

function newFunction() {
  var lastScrollTop = 0;
  var deg = 0;
  var leftMove = 50;
  var leftM = $('.fixCont img').position().left;
  var count = 0;
  var orig = 0;
  var d;
  var topPosition = $('.rContent').offset().top;
  orig = $('.fixCont').offset().left + ($('.fixCont').width() / 2);
  $(window).scroll(function () {
    var visited = false;
    var st = $(this).scrollTop();
    if ($(window).scrollTop()+80 >= $(".scrollContainer").offset().top) {
      $('.fixCont').addClass('fixedClass');
      $('.rContent').addClass('fixedContainer');
      // $('.prct .rContent').show();
      if (st > lastScrollTop) {
        if(($(window).scrollTop() + $(window).height()) >= topPosition && ($(window).scrollTop() + $(window).height()) < (topPosition+$('.rContent').height())){
          d="down";
          scrollFn("rContent_1",d)
          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1s" });
          // if($(window).width() > 1024){
          //   setTimeout(function() {
          //     $('.prct .rContent').hide();
          //     $('.prct .rContent_1').show();
          //   },500);
          // }
        }
        else if(($(window).scrollTop() + $(window).height()) >= (topPosition+$('.rContent').height()) && ($(window).scrollTop() + $(window).height()) < (topPosition+(2*($('.rContent').height())))){
          d="down";
          scrollFn("rContent_2",d);
          $('.fixCont img').css({ transform: 'rotate(90deg)',transition: "all 1s"});
          // if($(window).width() > 1024){
          //   $('.prct .rContent').hide();
          //   $('.prct .rContent_2').show();
          // }
        }
        else if(($(window).scrollTop() + $(window).height()) >= (topPosition+(2*($('.rContent').height())))){
          d="down";
          scrollFn("rContent_3",d);
          $('.fixCont img').css({ transform: 'rotate(210deg)' });
          // if($(window).width() > 1024){
          //   $('.prct .rContent').hide();
          //   $('.prct .rContent_3').show();
          // }
        }
      }
      else {
        if(($(window).scrollTop() + $(window).height()) >= topPosition && ($(window).scrollTop() + $(window).height()) < (topPosition+$('.rContent').height())){
          d="up";
          scrollFn("rContent_1",d);
          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1s" });
          // if($(window).width() > 1024){
          //   setTimeout(function() {
          //     $('.prct .rContent').hide();
          //     $('.prct .rContent_1').show();
          //   },1000);
          // }
        }
        else if(($(window).scrollTop() + $(window).height()) >= (topPosition+$('.rContent').height()) && ($(window).scrollTop() + $(window).height()) < (topPosition+(2*($('.rContent').height())))){
          d="up";
          scrollFn("rContent_2",d);
          $('.fixCont img').css({ transform: 'rotate(90deg)',transition: "all 1s"});
          // if($(window).width() > 1024){
          //   $('.prct .rContent').hide();
          //   $('.prct .rContent_2').show();
          // }
        }
        else if(($(window).scrollTop() + $(window).height()) >= (topPosition+(2*($('.rContent').height())))){
          d="up";
          scrollFn("rContent_3",d);
          $('.fixCont img').css({ transform: 'rotate(210deg)' });
          // if($(window).width() > 1024){
          //   $('.prct .rContent').hide();
          //   $('.prct .rContent_3').show();
          //   // .fadeOut("slow",function(){
          //   // });
          // }
        }
      }
    }
    else {
      $(".fixCont").removeClass("fixedClass");
      $('.rContent').removeClass('fixedContainer');
      testVal = 0;
      if($(window).width() > 1024){
        $('.prct .rContent').hide();
        // $('.prct .rContent_1').css("visibility","hidden"); 
      }
    }

    if($(window).scrollTop() + $(window).height() >= $('.strategy_container').offset().top){
      $('.fixCont').addClass("posAbs");
      $('.prct .rContent').fadeOut("slow");
      $('.rContent_3').removeClass('fadedIn');
    }
    else{
      $('.fixCont').removeClass("posAbs");
      // testVal = 0;
      // $('.prct .rContent_3').fadeIn("slow");
      // scrollFn("rContent_3","up");
    }
    lastScrollTop = st;
  });
}

