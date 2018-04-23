$(document).ready(function() {
  $('#fullpage').fullpage();
});

var sVal = false;
$(document).ready(function() {
  if (screen.width > 1024) {
    newFunction();
  }
  $('.prctSec_tab').click(function() {
    $(this).addClass('prctSec_active');
    $(this)
      .siblings()
      .removeClass('prctSec_active')
      .addClass('prctSec_inactive');
    if ($(this).attr('id') == 'prctSectab_2') {
      sVal = true;
      $('html, body').animate(
        {
          scrollTop: $('.prct_svc').offset().top - 50
        },
        2000
      );
    }
  });
});

var valueReceived = '';
var valueReceivedLength = 0;
var testVal = 0;

function newFunction() {
  var lastScrollTop = 0;
  var deg = 0;
  var leftMove = 50;
  var leftM = $('.fixCont img').position().left;
  var count = 0;
  var orig = 0;
  var d;
  var topPosition = $('.rContent').offset().top + 100;
  orig = $('.fixCont').offset().left + $('.fixCont').width() / 2;
  $(window).scroll(function() {
    var visited = false;
    var st = $(this).scrollTop();
    if ($(window).scrollTop() + 80 >= $('.scrollContainer').offset().top) {
      $('.fixCont').addClass('fixedClass');
      $('.right').addClass('active');
      $('.heroText__dna').hide();
    } else {
      $('.fixCont').removeClass('fixedClass');
      $('.right').removeClass('active');
      $('.heroText__dna').show();
    }
    // if($(window).scrollTop() + $(window).height() >= $('.strategy_container').offset().top){
    //   $('.fixCont').addClass("posAbs");
    //   $('.rContent').removeClass('in-view');
    // }
    // else{
    //   $('.fixCont').removeClass("posAbs");
    // }
    lastScrollTop = st;
  });

  $('.lb_work_filterli').click(function(e) {
    let currentTab = e.currentTarget.textContent;

    $('.rContent').hide();
    if (currentTab == 'Perceive') {
      $('.fixCont img').css({
        transform: 'rotate(-32deg)',
        transition: 'all 1s'
      });
      $('.rContent_1').show();
      $('.rContent_1').css({ position: 'relative', opacity: 0, left: '+=100' });
      $('.rContent_1').animate({ left: 0, opacity: 1 }, 500);
    } else if (currentTab == 'Adapt') {
      $('.fixCont img').css({
        transform: 'rotate(90deg)',
        transition: 'all 1s'
      });
      $('.rContent_2').show();
      $('.rContent_2').css({ position: 'relative', opacity: 0, left: '+=100' });
      $('.rContent_2').animate({ left: 0, opacity: 1 }, 500);
    } else {
      $('.fixCont img').css({ transform: 'rotate(210deg)' });
      $('.rContent_3').show();
      $('.rContent_3').css({ position: 'relative', opacity: 0, left: '+=100' });
      $('.rContent_3').animate({ left: 0, opacity: 1 }, 500);
    }
  });
}
