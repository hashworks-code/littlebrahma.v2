$(document).ready(function() {
  if (
    sessionStorage.getItem('Hometab') != '' &&
    sessionStorage.getItem('Hometab') != null
  ) {
    slowScroll();
  }

  if (
    sessionStorage.getItem('pageDetails') != '' &&
    sessionStorage.getItem('pageDetails') != null
  ) {
    smoothScroll();
  } else {
    return false;
  }

  function slowScroll() {
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $('.lb-Workfilter').position().top - 140
      });

      if (sessionStorage.getItem('Hometab') == 'Service Design') {
        $('#filterli-2').click();
        // $(".option").text('Service Design');
        $('.data-2').click();
      } else if (sessionStorage.getItem('Hometab') == 'Product Design') {
        $('#filterli-1').click();
        $('.data-1').click();
      } else if (
        sessionStorage.getItem('Hometab') == 'Branding & Communication'
      ) {
        $('#filterli-3').click();
        $('.data-3').click();
      }
      sessionStorage.setItem('Hometab', '');
      sessionStorage.setItem('pageDetails', '');
    }, 500);
  }

  function smoothScroll() {
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $('.lb-Workfilter').position().top - 140
      });
      if (sessionStorage.getItem('pageDetails') == 'Service Design') {
        $('#filterli-2').click();
        // $(".option").text('Service Design');
        $('.data-2').click();
      } else if (sessionStorage.getItem('pageDetails') == 'Product Design') {
        $('#filterli-1').click();
        $('.data-1').click();
      } else if (
        sessionStorage.getItem('pageDetails') == 'Branding & Communication'
      ) {
        $('#filterli-3').click();
        $('.data-3').click();
      }
      sessionStorage.setItem('Hometab', '');
      sessionStorage.setItem('pageDetails', '');
    }, 500);
  }
});
