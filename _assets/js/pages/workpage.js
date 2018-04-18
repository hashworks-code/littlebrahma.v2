$( document ).ready(function() {
  // $('.lb-filter-service').hide();
if(sessionStorage.getItem("pageDetails") != "" && sessionStorage.getItem("pageDetails") != null) {
  smoothScroll();
}
  function smoothScroll(text) {
    setTimeout(function() {
      $('html, body').animate({
        'scrollTop' : $(".lb_caseStusy").position().top
      });
      if(sessionStorage.getItem("pageDetails") == "Service Design") {
        $('#filterli-2').click();
      } else if(sessionStorage.getItem("pageDetails") == "Product Design") {
        $('#filterli-1').click();
      } else if(sessionStorage.getItem("pageDetails") == "Branding &amp; Communication Design") {
        $('#filterli-3').click();
      }
      sessionStorage.setItem("pageDetails", ""); 
    }, 500);
  }


  
});