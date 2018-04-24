$(document).ready(function() {
  if (screen.width > 1025) {
    $('#fullpage').fullpage({
      verticalCentered: false,
      afterLoad: function(anchorLink, index) {
        var loadedSection = $(this);
        if (index == 3) {
          $('.fixCont').addClass('fixedClass');
          $('.right').addClass('active');
          $('.heroText__dna').hide();
        }
      },
      onLeave: function(index, nextIndex, direction) {
        var leavingSection = $(this);
      }
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
        $('.rContent_1').css({
          position: 'relative',
          opacity: 0,
          left: '+=100'
        });
        $('.rContent_1').animate({ left: 0, opacity: 1 }, 500);
      } else if (currentTab == 'Adapt') {
        $('.fixCont img').css({
          transform: 'rotate(90deg)',
          transition: 'all 1s'
        });
        $('.rContent_2').show();
        $('.rContent_2').css({
          position: 'relative',
          opacity: 0,
          left: '+=100'
        });
        $('.rContent_2').animate({ left: 0, opacity: 1 }, 500);
      } else {
        $('.fixCont img').css({ transform: 'rotate(210deg)' });
        $('.rContent_3').show();
        $('.rContent_3').css({
          position: 'relative',
          opacity: 0,
          left: '+=100'
        });
        $('.rContent_3').animate({ left: 0, opacity: 1 }, 500);
      }
    });
  }
});
