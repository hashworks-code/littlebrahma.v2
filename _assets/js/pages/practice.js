var sVal = false;
$(window).resize(function(){
  if(screen.width > 1024){
    newFunction();
 }
});
$(document).ready(function() {  
    if(screen.width > 1024){
       newFunction();
    //   jqueryScrollPlugin()
    //   jqueryScrollPluginSetting()
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
  $(window).scroll(function (e) {
    var visited = false;
    var st = $(this).scrollTop();
    if ($(window).scrollTop()+80 >= $(".scrollContainer").offset().top) {
      $('.fixCont').addClass('fixedClass');
      $('.rContent').addClass('fixedContainer');
      if (st > lastScrollTop) {
        if(($(window).scrollTop() + $(window).height()) >= topPosition && ($(window).scrollTop() + $(window).height()) < (topPosition+$('.rContent').height())){
          d="down";
          e.stopPropagation();
          e.preventDefault();
          scrollFn("rContent_1",d);
          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1s" });
        }
        else if(($(window).scrollTop() + $(window).height()) >= (topPosition+$('.rContent').height()) && ($(window).scrollTop() + $(window).height()) < (topPosition+(2*($('.rContent').height())))){
          d="down";
          scrollFn("rContent_2",d);
          $('.fixCont img').css({ transform: 'rotate(90deg)',transition: "all 1s"});
        }
        else if(($(window).scrollTop() + $(window).height()) >= (topPosition+(2*($('.rContent').height())))){
          d="down";
          scrollFn("rContent_3",d);
          $('.fixCont img').css({ transform: 'rotate(210deg)' });
        }
      }
      else {
        if(($(window).scrollTop() + $(window).height()) >= topPosition && ($(window).scrollTop() + $(window).height()) < (topPosition+$('.rContent').height())){
          e.stopPropagation();
          e.preventDefault();
          d="up";
          scrollFn("rContent_1",d);
          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1s" });
        }
        else if(($(window).scrollTop() + $(window).height()) >= (topPosition+$('.rContent').height()) && ($(window).scrollTop() + $(window).height()) < (topPosition+(2*($('.rContent').height())))){
          d="up";
          scrollFn("rContent_2",d);
          $('.fixCont img').css({ transform: 'rotate(90deg)',transition: "all 1s"});
        }
        else if(($(window).scrollTop() + $(window).height()) >= (topPosition+(2*($('.rContent').height())))){
          d="up";
          scrollFn("rContent_3",d);
          $('.fixCont img').css({ transform: 'rotate(210deg)' });
        }
      }
    }
    else {
      $(".fixCont").removeClass("fixedClass");
      $('.rContent').removeClass('fixedContainer');
      testVal = 0;
      if($(window).width() > 1024){
        $('.prct .rContent').hide();
      }
    }

    if($(window).scrollTop() + $(window).height() >= $('.strategy_container').offset().top){
      $('.fixCont').addClass("posAbs");
      $('.prct .rContent').fadeOut("slow");
      $('.rContent_3').removeClass('fadedIn');
    }
    else{
      $('.fixCont').removeClass("posAbs");
    }
    lastScrollTop = st;
  });
}



function jqueryScrollPlugin(){

  /***
  Version    : 0.2 [Beta]
  Author     : Tommy Chiu
  Contact    : tommychoo8689@gmail.com
  Description: A mini jquery plugin tool to detect the Scroll Up or Scroll Down to trigger anything event.
  Last Updated: 17/07/2015
  ***/
  
  (function($) {
      $.fn.scrolltrigger = function( options ) {
  
          // Default Setting
          var settings = $.extend({
              preventDefault: true,
              threshold: 20,
  
              lastAnimation    : 0,
              quietPeriod      : 500,
              animationTime    : 500,
  
              swipeMode        : false,
              swipeUp          : null,
              swipeDown        : null,
              swipeLeft        : null,
              swipeRight       : null,
  
              scrollUp         : null,
              scrollDown       : null
          }, options);
  
          return this.each( function() {
  
              var $this = this;
              var lastAnimation = settings.lastAnimation;
              var quietPeriod = settings.quietPeriod;
              var animationTime = settings.animationTime;
              var swipeMode = settings.swipeMode;
  
              if ( navigator.userAgent.match(/iPad|iPhone|iPod/g) ) {
                  var threshold = 10;
              } else {
                  var threshold = settings.threshold;
              }
  
              if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  
                  if (swipeMode == true) {
  
                      var startX,
                      startY,
                      isMoving = false;
  
                      function onTouchEnd() {
                          $this.removeEventListener('touchmove', onTouchMove);
                          $this.removeEventListener('touchend', onTouchEnd);
                          isMoving = false;
                      }
                      function onTouchMove(e) {
                          if ( settings.preventDefault == true ) {
                              e.preventDefault();
                          }
                          if ( isMoving ) {
                              var x = e.touches[0].pageX;
                              var y = e.touches[0].pageY;
                              var dx = startX - x;
                              var dy = startY - y;
                              var dir;
                              if ( Math.abs(dx) >= threshold ) {
                                  //dir = dx > 0 ? 'left' : 'right'
                                  if ( dx > 0 ) {
                                      settings.swipeLeft.call($this);
                                  } else {
                                      settings.swipeRight.call($this);
                                  }
                              } else if ( Math.abs(dy) >= threshold ) {
                                  //dir = dy > 0 ? 'down' : 'up'
                                  if ( dx > 0 ) {
                                      settings.swipeDown.call($this);
                                  } else {
                                      settings.swipeUp.call($this);
                                  }
                              }
  
                              onTouchEnd.call($this);
  
                          }
                      }
                      function onTouchStart(e) {
                          if ( e.touches.length == 1 ) {
                              startX = e.touches[0].pageX;
                              startY = e.touches[0].pageY;
                              isMoving = true;
                              $this.addEventListener('touchmove', onTouchMove, false);
                              $this.addEventListener('touchend', onTouchEnd, false);
                          }
                      }
                      function setup() {
                          $this.addEventListener && $this.addEventListener('touchstart', onTouchStart, false);
                      }
                      function teardown() {
                          $this.removeEventListener('touchstart', onTouchStart);
                      }
  
                      setup();
  
                  } else {
                      //alert('Oh Sorry, you should turn on the swipe mode.');
                  }
  
              } else {
  
                  function init(event, delta) {
                      deltaOfInterest = delta;
                      var timeNow = new Date().getTime();
                      if( timeNow - lastAnimation < quietPeriod + animationTime ) {
                          event.preventDefault();
                          return;
                      }
  
                      if ( deltaOfInterest < 0 ) {
                          // Call Back
                          if ( $.isFunction( settings.scrollUp ) ) {
                              settings.scrollUp.call($this);
                          }
                      } else {
                          // Call Back
                          if ( $.isFunction( settings.scrollDown ) ) {
                              settings.scrollDown.call($this);
                          }
                      }
                      lastAnimation = timeNow;
                  }
  
                  $(this).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
                      event.stopPropagation();
                      event.preventDefault();
                      var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
                      init(event, delta);
                  });
  
              }
  
          });
  
      }
  }(jQuery));
  }
  var current = 0;  
  function jqueryScrollPluginSetting(){
    $(function() {
    $('html').scrolltrigger({
        lastAnimation   : 0,
        quietPeriod     : 100,
        animationTime   : 100,
        swipeMode       : true,
        swipeUp : function() {
          
        },
        swipeDown : function() {
            
        },
        swipeLeft : function() {
            
        },
        swipeRight : function() {
          
        },
        scrollDown : function() {
          scrollFn(current++,'down');            
        },
        scrollUp : function() {
          scrollFn(current--,'up');
        }
    });
 });
 }