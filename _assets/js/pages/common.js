if (typeof jQuery == 'undefined') {
  document.write(
    '<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'
  );
} else {
  $(window).on('load', function() {
    $('.loader-overlay').fadeOut(500);
  });

  $(window).resize(function() {
    if (screen.width > 767) {
      var valHeight = 31.4 / 100 * $('.homePage__BnrDiv__Service').height();
      $('.homePage__BnrDiv').css('height', $('#lbhmimage').height());
      $('.homePage__BnrDiv__Service').css('bottom', '-' + valHeight + 'px');
      $('.lb-ourworks-dna').css('margin-top', '160px');
      $('.lb-ourworks').css('margin-top', '50px');
    }
    if (screen.width > 1024) {
      $('.lb-ourworks-dna').css('margin-top', '250px');
    }
    if (screen.width > 1500) {
      $('.homePage__BnrDiv__Service').css('bottom', '0px');
      $('.lb-ourworks-dna').css('margin-top', '80px');
      $('.lb-ourworks').css('margin-top', '20px');
    }
    if (screen.width > 2000) {
      $('.homePage__BnrDiv__Service').css('bottom', '250px');
      $('.lb-ourworks-dna').css('margin-top', '0px');
      $('.lb-ourworks').css('margin-top', '40px');
    }
  });
  $(document).ready(function() {
    if (screen.width > 767) {
      var valHeight = 31.4 / 100 * $('.homePage__BnrDiv__Service').height();
      $('.homePage__BnrDiv').css('height', $('#lbhmimage').height());
      $('.homePage__BnrDiv__Service').css('bottom', '-' + valHeight + 'px');
      $('.lb-ourworks-dna').css('margin-top', '160px');
      $('.lb-ourworks').css('margin-top', '50px');
    }
    if (screen.width > 1024) {
      $('.lb-ourworks-dna').css('margin-top', '250px');
    }
    if (screen.width > 1500) {
      $('.homePage__BnrDiv__Service').css('bottom', '0px');
      $('.lb-ourworks-dna').css('margin-top', '80px');
      $('.lb-ourworks').css('margin-top', '20px');
    }
    if (screen.width > 2000) {
      $('.homePage__BnrDiv__Service').css('bottom', '250px');
      $('.lb-ourworks-dna').css('margin-top', '0px');
      $('.lb-ourworks').css('margin-top', '40px');
    }

    $('.dropdown-menu li').click(function() {
      $('.option').text($(this).text());
    });
    var widthofwindow = $(window).width();
    if (widthofwindow < 768) {
      $('[data-toggle=popover]').popover({
        html: true,
        placement: 'right',
        content: function() {
          return $('#popover-content').html();
        }
      });
    } else {
      $('[data-toggle=popover]').popover({
        html: true,
        placement: 'bottom',
        content: function() {
          return $('#popover-content').html();
        }
      });
    }

    $('body').on('click', function(e) {
      var count = 1;
      $('[data-toggle=popover]').each(function() {
        if (
          !$(this).is(e.target) &&
          $(this).has(e.target).length === 0 &&
          $('.popover').has(e.target).length === 0
        ) {
          $(this).popover('hide');
          $(this).removeClass('intro');
        } else {
          $(this).popover('toggle');
          $(this).addClass('intro');
          $(this)
            .children('.activeimg')
            .show();
          $(this)
            .children('.normalimg')
            .hide();
          $('[data-toggle="popover"]')
            .not(this)
            .children('.activeimg')
            .hide();
          $('[data-toggle="popover"]')
            .not(this)
            .children('.normalimg')
            .show();
          count = 0;
        }
        if (count == 1) {
          $('.activeimg').hide();
          $('.normalimg').show();
        }
      });
    });
    if (screen.width > 767) {
      $('.trigger-1').trigger('click');
    }

    $('.prod').each(function(index) {
      var prod = $('.prod').length;
      if (prod <= 4) {
        $('#lb_btn').hide();
        $('.load-more').hide();
      } else {
        $('#lb_btn').show();
      }
      if (index <= 3) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    $('.service').each(function(index) {
      var service = $('.service').length;
      if (service <= 4) {
        $('#lb_btn').hide();
        $('.load-more').hide();
      }
      if (index <= 3) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    $('.brndcomm').each(function(index) {
      var brndcomm = $('.brndcomm').length;
      if (brndcomm <= 4) {
        $('#lb_btn').hide();
        $('.load-more').hide();
      }

      if (index <= 3) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    $('.alldata').each(function(index) {
      var all = $('.alldata').length;
      if (all <= 4) {
        $('#lb_btn').hide();
        $('.load-more').hide();
      } else {
        $('#lb_btn').show();
      }
      if (index <= 3) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    $('.lb_work_filterli').click(function() {
      $(this).addClass('lb_work_filterActive');
      var dataValue = $(this).attr('value');
      $(this)
        .siblings()
        .removeClass('lb_work_filterActive');
    });

    $('.lb_work_filterli-mb').click(function() {
      $(this).addClass('lb_work_filterActive');
      var dataValue = $(this).attr('value');
      $(this)
        .siblings()
        .removeClass('lb_work_filterActive');
    });

    $('.lb_work_filterli').click(function() {
      $('#lb_btn1').hide();
      $('#lb_btn').show();
      var data = $(this).attr('id');
      var length = $('.common-filter').length;
      for (var i = 1; i < length + 1; i++) {
        tempvalue = 'filterli-' + i;
        if (data == tempvalue) {
          $('.all').hide();
          $('.filterli-' + i).show();
          $('.filterli-' + i + ' ' + '.brndcomm').each(function(index) {
            var brand = $('.filterli-' + i + ' ' + '.brndcomm').length;
            if (brand <= 4) {
              $('#lb_btn').hide();
            }

            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          $('.filterli-' + i + ' ' + '.prod').each(function(index) {
            var prod = $('.filterli-' + i + ' ' + '.prod').length;
            if (prod <= 4) {
              $('#lb_btn').hide();
            }
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          $('.filterli-' + i + ' ' + '.service').each(function(index) {
            var service = $('.filterli-' + i + ' ' + '.service').length;
            if (service <= 4) {
              $('#lb_btn').hide();
            }
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        } else {
          $('.filterli-' + i).hide();
        }
        if (data == 'All') {
          $('.all').show();
          $('.alldata').each(function(index) {
            var all = $('.alldata').length;
            if (all <= 4) {
              $('#lb_btn').hide();
            }

            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        }
      }
    });

    // mobile
    $('.lb_work_filterli-mb').click(function() {
      $('#lb_btn1').hide();
      $('#lb_btn').show();
      var data = $(this).attr('data');
      var length = $('.common-filter').length;
      for (var i = 1; i < length + 1; i++) {
        tempvalue = 'filterli-' + i;
        if (data == tempvalue) {
          $('.all').hide();
          $('.filterli-' + i).show();
          $('.filterli-' + i + ' ' + '.brndcomm').each(function(index) {
            var brand = $('.filterli-' + i + ' ' + '.brndcomm').length;
            if (brand <= 4) {
              $('#lb_btn').hide();
            }

            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          $('.filterli-' + i + ' ' + '.prod').each(function(index) {
            var prod = $('.filterli-' + i + ' ' + '.prod').length;
            if (prod <= 4) {
              $('#lb_btn').hide();
            }
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          $('.filterli-' + i + ' ' + '.service').each(function(index) {
            var service = $('.filterli-' + i + ' ' + '.service').length;
            if (service <= 4) {
              $('#lb_btn').hide();
            }
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        } else {
          $('.filterli-' + i).hide();
        }
        if (data == 'All') {
          $('.all').show();
          $('.alldata').each(function(index) {
            var all = $('.alldata').length;
            if (all <= 4) {
              $('#lb_btn').hide();
            }

            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        }
      }
    });

    $('.work_select').change(function() {
      var data = $(this).val();
      $('#lb_btn1').hide();
      $('#lb_btn').show();
      var length = $('.common-filter').length;
      for (var i = 1; i < length + 1; i++) {
        tempvalue = 'filterli-' + i;
        if (data == tempvalue) {
          $('.filterli-' + i).show();
          $('.filterli-' + i + ' ' + '.brndcomm').each(function(index) {
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          $('.filterli-' + i + ' ' + '.prod').each(function(index) {
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          $('.filterli-' + i + ' ' + '.service').each(function(index) {
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        } else {
          $('.filterli-' + i).hide();
        }
      }
    });

    $('#lb_btn').click(function() {
      $('#lb_btn').hide();

      if ($(window).width() > 767) {
        var id = $('.lb_work_filterActive').attr('id');
      }
      if ($(window).width() <= 767) {
        var id = $('.dropdown .lb_work_filterActive').attr('data');
      }
      if (id == 'filterli-1') {
        $('.prod').show();
      } else if (id == 'filterli-2') {
        $('.service').show();
      } else if (id == 'filterli-3') {
        $('.brndcomm').show();
      } else if (id == 'All') {
        $('.alldata').show();
      }
    });

    $('#lb_service_btn').click(function() {
      var value = $(this).val();

      $(this)
        .parent('div')
        .hide();
      if (value == 'Product') {
        $('.prod').show();
      } else if (value == 'Service') {
        $('.service').show();
      } else if (value == 'Branding &') {
        $('.brndcomm').show();
      }
    });
    $('#lb_btn1').click(function() {
      $('#lb_btn1').hide();
      $('#lb_btn').show();

      if ($(window).width() > 767) {
        var id = $('.lb_work_filterActive').attr('id');
      }
      if ($(window).width() <= 767) {
        var id = $('.dropdown .lb_work_filterActive').attr('data');
      }
      var count = 0;
      if (id == 'filterli-1') {
        $('.prod').each(function(index) {
          if (index <= 3) {
            $(this).add();
          } else {
            $(this).hide();
          }
        });
      } else if (id == 'filterli-2') {
        $('.service').each(function(index) {
          if (index <= 3) {
            $(this).add();
          } else {
            $(this).hide();
          }
        });
      } else if (id == 'filterli-3') {
        var prodcount = $('.brndcomm').length;
        $('.brndcomm').each(function(index) {
          if (index <= 3) {
            $(this).add();
          } else {
            $(this).hide();
          }
        });
      }
      $('.knowmore a').click(function() {
        var text = $(this)
          .closest('div')
          .parent()
          .find('div.indTxt')
          .html();
        text = text.replace('&amp;', '&');
        sessionStorage.setItem('pageDetails', text);
      });

      $('.data-loc').click(function() {
        var data = $(this).attr('data-loc');
        sessionStorage.setItem('Hometab', data);
      });
    });
    $(document).ready(function() {
      $('.slider-nav').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });
  });
}
