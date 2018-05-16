(function() {
  $(window).on('load', function() {
    $('.loader-overlay').fadeOut(500);
    if(screen.width<768){
      $('video').remove();
    }
  });

  //scroll to top on refresh
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

  $(window).resize(function() {
    if (screen.width > 767) {
      var valHeight = 31.4 / 100 * $('.homePage__BnrDiv__Service').height();
      $('.homePage__BnrDiv').css('height', $('#lbhmimage').height());
      $('.homePage__BnrDiv__Service').css('bottom', '-' + valHeight + 'px');
      $('.lb-ourworks-dna').css('margin-top', '160px');
      $('.lb-ourworks').css('margin-top', '50px');
      // $('.homePage__BnrDiv__Service').css({'bottom':'420px',});
      // $('#lbhmimagemobile').css('display','none')
    }
    if (screen.width > 1024) {
      $('.lb-ourworks-dna').css('margin-top', '200px');
    }
    if (screen.width > 1500) {
      $('.homePage__BnrDiv__Service').css('bottom', '0px');
      $('.lb-ourworks-dna').css('margin-top', '100px');
      $('.lb-ourworks').css('margin-top', '20px');
    }
    if (screen.width > 2000) {
      $('.homePage__BnrDiv__Service').css('bottom', '250px');
      $('.lb-ourworks-dna').css('margin-top', '0px');
      $('.lb-ourworks').css('margin-top', '40px');
    }

    // if(screen.width <= 767){
    //      $('#lbhmimagemobile').css('visibility','hidden')
    //      var valHeight = ((31.4/100)*$('.homePage__BnrDiv__Service').height());
    //      var valHeight=(valHeight)+80;
    //      $('.homePage__BnrDiv').css('height',$('#lbhmimagemobile').height())
    //      $('.homePage__BnrDiv__Service').css('bottom','-'+valHeight+'px')
    // }
  });
  // window.onhashchange = function() {
  //     alert('data');
  // }
  $(document).ready(function() {
    // debugger;
    if (screen.width > 767) {
      var valHeight = 31.4 / 100 * $('.homePage__BnrDiv__Service').height();
      $('.homePage__BnrDiv').css('height', $('#lbhmimage').height());
      $('.homePage__BnrDiv__Service').css('bottom', '-' + valHeight + 'px');
      $('.lb-ourworks-dna').css('margin-top', '160px');
      // $('#lbhmimagemobile').css('display','none')
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
    // if(screen.width <= 767){
    //     $('#lbhmimagemobile').css('visibility','hidden');
    //     var valHeight = ((31.4/100)*$('.homePage__BnrDiv__Service').height());
    //     var valHeight=(valHeight)+80;
    //     $('.homePage__BnrDiv').css('height',$('#lbhmimagemobile').height())
    //     $('.homePage__BnrDiv__Service').css('bottom','-'+valHeight+'px')
    // }
    // brandlength=$('.brndcomm').length;
    // $('[data-toggle="popover"]').click(function(){
    //     $(this).popover('show');
    //     $('[data-toggle="popover"]').not(this).popover('hide'); //all but this
    // });
    $('.dropdown-menu li').click(function() {
      $('.option').text($(this).text());
    });
    var widthofwindow = $(window).width();
    if (widthofwindow < 768) {
      // $("[data-toggle=popover]").popover().attr('
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
        // console.log($(this).attr('class'));
        // hide any open popovers when the anywhere else in the body is clicked
        if (
          !$(this).is(e.target) &&
          $(this).has(e.target).length === 0 &&
          $('.popover').has(e.target).length === 0
        ) {
          $(this).popover('hide');
          $(this).removeClass('intro');

          // $('[data-toggle="popover"]').children('.activeimg').hide();
          //  $('[data-toggle="popover"]').children('.normalimg').show();
        } else {
          $(this).popover('toggle');
          $(this).addClass('intro');
          // $(this)
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

    // $('.btn').on('click', function (e) {
    //     $('.btn').not(this).popover('hide');
    // });

    // $('.lb-filter-service').hide();
    $('.lb_work_filterli').click(function() {
      $(this).addClass('lb_work_filterActive');
      var dataValue = $(this).attr('value');
      $(this)
        .siblings()
        .removeClass('lb_work_filterActive');
    });
    //mobile
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
            // console.log('div' + index + ':' + $(this).attr('id'));
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
            // console.log('div' + index + ':' + $(this).attr('id'));
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
            // console.log('div' + index + ':' + $(this).attr('id'));
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
            // console.log('div' + index + ':' + $(this).attr('id'));
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
            // console.log('div' + index + ':' + $(this).attr('id'));
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
            // console.log('div' + index + ':' + $(this).attr('id'));
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
            // console.log('div' + index + ':' + $(this).attr('id'));
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          $('.filterli-' + i + ' ' + '.prod').each(function(index) {
            // console.log('div' + index + ':' + $(this).attr('id'));
            if (index <= 3) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          $('.filterli-' + i + ' ' + '.service').each(function(index) {
            // console.log('div' + index + ':' + $(this).attr('id'));
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
      // $("#lb_btn1").show();
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
      //   $('#lb_service_btn1').show();
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
      // if ($(window).width() > 767) {
      if ($(window).width() > 767) {
        var id = $('.lb_work_filterActive').attr('id');
      }
      if ($(window).width() <= 767) {
        var id = $('.dropdown .lb_work_filterActive').attr('data');
      }
      // var id =$('.lb_work_filterActive').attr('data');

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
      
    });

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
})();
$(document).ready(function() {
  // $('.lb-filter-service').hide();
  // document.getElementById('vid').play();
});

(function() {
  function validEmail(email) {
    // see:
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
  // get all data in form and return object
  function getFormData() {
    var elements = document.getElementById('gform').elements; // all form elements
    var fields = Object.keys(elements)
      .map(function(k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
    var data = {};
    fields.forEach(function(k) {
      data[k] = elements[k].value;
      var str = ''; // declare empty string outside of loop to allow
      // it to be appended to for each item in the loop
      if (elements[k].type === 'checkbox') {
        // special case for Edge's html collection
        str = str + elements[k].checked + ', '; // take the string and append
        // the current checked value to
        // the end of it, along with
        // a comma and a space
        data[k] = str.slice(0, -2); // remove the last comma and space
        // from the  string to make the output
        // prettier in the spreadsheet
      } else if (elements[k].length) {
        for (var i = 0; i < elements[k].length; i++) {
          if (elements[k].item(i).checked) {
            str = str + elements[k].item(i).value + ', '; // same as above
            data[k] = str.slice(0, -2);
          }
        }
      }
    });

    return data;
  }

  $('#gform').on('submit', function(event) {
    //ajax call here

    event.preventDefault(); // we are submitting via xhr below

    var data = getFormData(); // get the values submitted in the form
    // if( !validEmail(data.email) ) {   // if email is not valid show error
    //   document.getElementById('email-invalid').style.display = 'block';
    //   return false;
    // } else {
   
    var url =
      'https://script.google.com/macros/s/AKfycbyj1Z_nA1EnZdfNGe19BK8EYp7o--gifBOynW7vAhxga-yQ7Qnh/exec'; //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      //document.getElementById('gform').style.display = 'none'; // hide form
      var x = document.getElementById('snackbar');

      x.className = 'show';
      // After 3 seconds, remove the show class from DIV
      setTimeout(function() {
        x.className = x.className.replace('show', '');
      }, 3000);
      $('#gform').trigger('reset');
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data)
      .map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      })
      .join('&');
    xhr.send(encoded);

    // }
  });
  // $('.prod').hide();
  // $('.service').hide();
  // $('.alldata').hide();
  // $('.brndcomm').hide();
  // var id = $('.lb_work_filterActive').attr('id');
 
  // if (id == 'filterli-1') {
  //   $('.prod').show();
  // } else if (id == 'filterli-2') {
  //   $('.service').show();
  // } else if (id == 'filterli-3') {
  //   $('.brndcomm').show();
  // } else if (id == 'All') {
  //   $('.alldata').show();
  
  // }
})();
