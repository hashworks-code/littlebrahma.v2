var sVal = false;
$(window).resize(function(){
  if(screen.width > 1024){
    newFunction();
 }
});
$(document).ready(function() {

  $('.btn-circle.service-btn').click(function(){
    $(this).addClass('transparent');
    $(this).parent('.stepwizard-step').prevAll('.stepwizard-step').addClass('active');
    $(this).parent('.stepwizard-step').nextAll('.stepwizard-step').removeClass('active');
    $(this).parent('.stepwizard-step').removeClass('active');
           $(this).parent('.stepwizard-step').siblings('.stepwizard-step').children('.btn-circle.service-btn').removeClass('transparent');
 $(this).siblings('.circle1,.circle2').addClass('circle-animation');
 $(this).siblings('.step-content').addClass('step-content-show');
 $(this).parent('.stepwizard-step').siblings('.stepwizard-step').children('.step-content').removeClass('step-content-show');
 $(this).parent('.stepwizard-step').siblings('.stepwizard-step').children('.circle1,.circle2').removeClass('circle-animation');

})
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
    })
});

var valueReceived = ""; 
var valueReceivedLength = 0;
var testVal = 0;
function scrollFn(val,d){
  valueReceived = val;
  var vL = val[val.length-1];
  valueReceivedLength = parseInt(valueReceivedLength);
  vL = parseInt(vL);
  if(d == "down" && sVal == false){
    if(valueReceivedLength <= vL){
      valueReceivedLength = vL
      if(valueReceivedLength != testVal){
        testVal = valueReceivedLength;
       
        if("rContent_"+testVal == "rContent_1"){
          return false;
          // $('html, body').animate({
          //   scrollTop: $(".rContent_"+testVal).offset().top - ($(".rContent_"+testVal).height()/2)+20
          // }, 500);
        }
        else{
          $('html, body').animate({
            scrollTop: $(".rContent_"+testVal).offset().top - ($(".rContent_"+testVal).height()/2)+20
          }, 500);
        }
      }
    }
  }
  if(d == "up" && sVal == false){
    if(valueReceivedLength >= vL){
      valueReceivedLength = vL
      if(valueReceivedLength != testVal){
        testVal = valueReceivedLength
        if("rContent_"+testVal == "rContent_1"){
          return false;
        }
        else{
          $('html, body').animate({
            scrollTop: $(".rContent_"+testVal).offset().top - ($(".rContent_"+testVal).height()/2)+20
          }, 500);
        }
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
  orig = $('.fixCont').offset().left + ($('.fixCont').width() / 2);
  $(window).scroll(function () {
    var visited = false;
    var st = $(this).scrollTop();
    if ($(window).scrollTop()+80 >= $(".scrollContainer").offset().top) {
      $('.fixCont').addClass('fixedClass');
      if (st > lastScrollTop) {
        if(($(window).scrollTop() + $(window).height()) >= $('.rContent_1').offset().top && (($(window).scrollTop() + $(window).height()) < $('.rContent_2').offset().top)){
          d="down";
          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1s" });
          if($(window).width() > 1024){
              setTimeout(function(){
                $('.prct .rContent_1').css({visibility:"visible"});
              },500)
          }
        }
        else if(($(window).scrollTop() + $(window).height()) >= $('.rContent_2').offset().top && (($(window).scrollTop() + $(window).height()) < $('.rContent_3').offset().top)){
          d="down";
          scrollFn("rContent_2",d)
          $('.fixCont img').css({ transform: 'rotate(90deg)',transition: "all 1s"});
        }
        else if(($(window).scrollTop() + $(window).height()) >= $('.rContent_3').offset().top){
          d="down";
          scrollFn("rContent_3",d)
          $('.fixCont img').css({ transform: 'rotate(210deg)' });
        }
      }
      else {
        if(($(window).scrollTop() + $(window).height()) >= $('.rContent_1').offset().top && (($(window).scrollTop() + $(window).height()) < $('.rContent_2').offset().top)){
          d="up";
          scrollFn("rContent_1",d)
          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1s" });
        }
        else if(($(window).scrollTop() + $(window).height()) >= $('.rContent_2').offset().top && (($(window).scrollTop() + $(window).height()) < $('.rContent_3').offset().top)){
          d="up";
          scrollFn("rContent_2",d)
          $('.fixCont img').css({ transform: 'rotate(90deg)',transition: "all 1s"});
        }
        else if(($(window).scrollTop() + $(window).height()) >= $('.rContent_3').offset().top){
          d="up";
          scrollFn("rContent_3",d)
          $('.fixCont img').css({ transform: 'rotate(210deg)' })
        }
      }
    }
    else {
      $(".fixCont").removeClass("fixedClass");
      if($(window).width() > 1024){
        $('.prct .rContent_1').css("visibility","hidden"); 
      }
      // sVal = false;
    }

    if($(window).scrollTop() + $(window).height() >= $('.strategy_container').offset().top){
      $('.fixCont').addClass("posAbs");
    }
    else{
      $('.fixCont').removeClass("posAbs");      
    }
    lastScrollTop = st;
  });
}

