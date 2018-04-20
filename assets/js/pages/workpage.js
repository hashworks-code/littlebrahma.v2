$( document ).ready(function() {
  // $('.lb-filter-service').hide();
if(sessionStorage.getItem("pageDetails") != "" && sessionStorage.getItem("pageDetails") != null) {
  smoothScroll();

}
else{
  return false;

}
  function smoothScroll() {
    setTimeout(function() {
      $('html, body').animate({
        'scrollTop' : $(".lb_caseStusy").position().top
      });
      if(sessionStorage.getItem("pageDetails") == "Service Design") {
        $('#filterli-2').click();
      } else if(sessionStorage.getItem("pageDetails") == "Product Design") {
        $('#filterli-1').click();
      } else if(sessionStorage.getItem("pageDetails") == "Branding &amp; Communication") {
        $('#filterli-3').click();
      }
      sessionStorage.setItem("Hometab", ""); 

      sessionStorage.setItem("pageDetails", ""); 
    }, 500);
  }

  
 
});
$(document).ready(function(){

  if(sessionStorage.getItem("Hometab") != "" &&  sessionStorage.getItem("Hometab") != null) {
      slowScroll();
  
    }
    
  
  function slowScroll(){
    setTimeout(function() {
      $('html, body').animate({
        'scrollTop' : $(".lb_work_filter").position().top-150
      });
      if(sessionStorage.getItem("Hometab") == "Service Design") {
          $('#filterli-2').click();
        } else if(sessionStorage.getItem("Hometab") == "Product Design") {
          $('#filterli-1').click();
        } else if(sessionStorage.getItem("Hometab") == "Branding & Comm") {
          $('#filterli-3').click();
        }
        sessionStorage.setItem("Hometab", ""); 
        sessionStorage.setItem("pageDetails", ""); 

    },500);
  
  }
})
  

