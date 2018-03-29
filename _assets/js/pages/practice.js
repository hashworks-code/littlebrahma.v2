$(document).ready(function() {
    // $('.dicContents .title').clone().prependTo(".imgContainer").addClass("hckTitle");
    newFunction();
});

var valueReceived = ""; 
var valueReceivedLength = 0;
var testVal = 0;
function scrollFn(val,d){
  valueReceived = val;
  var vL = val[val.length-1];
  valueReceivedLength = parseInt(valueReceivedLength);
  vL = parseInt(vL);
  if(d == "down"){
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
  if(d == "up"){
    if(valueReceivedLength >= vL){
      valueReceivedLength = vL
      if(valueReceivedLength != testVal){
        testVal = valueReceivedLength
        if("rContent_"+testVal == "rContent_1"){
          return false;
          // $('html, body').animate({
          //   scrollTop: $(".rContent_"+testVal).offset().top - ($(".rContent_"+testVal).height()/2)+20
          // }, 500);
          // $('html, body').animate({
          //   scrollTop: $(".rContent_"+testVal).offset().top - ($("."+valueReceived).height()/2)+20
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

          // scrollFn("rContent_1",d)

          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1s" });
          if($(window).width() > 1024){
              setTimeout(function(){
                $('.prct .rContent_1').css({visibility:"visible"});
                // $('html, body').animate({
                //   scrollTop: $(".rContent_1").offset().top - ($(".rContent_1").height()/2)+20
                // }, 500);
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

