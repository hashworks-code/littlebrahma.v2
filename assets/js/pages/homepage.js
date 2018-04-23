// $(document).ready(function(){

//     if(sessionStorage.getItem("Hometab") != "" &&  sessionStorage.getItem("Hometab") != null) {
//         slowScroll();
    
//       }
      
    
//     function slowScroll(){
//       setTimeout(function() {
//         $('html, body').animate({
//           'scrollTop' : $(".lb_work_filter").position().top-150
//         });
//         if(sessionStorage.getItem("Hometab") == "Service Design") {
//             $('#filterli-2').click();
//           } else if(sessionStorage.getItem("Hometab") == "Product Design") {
//             $('#filterli-1').click();
//           } else if(sessionStorage.getItem("Hometab") == "Branding & Comm.") {
//             $('#filterli-3').click();
//           }
//           sessionStorage.setItem("Hometab", ""); 
//           sessionStorage.setItem("pageDetails", ""); 

//       },500);
    
//     }
// })

$(document).ready(function(){
    if(sessionStorage.getItem("Hometab") != "" &&  sessionStorage.getItem("Hometab") != null) {
        slowScroll();
    
      }
    function slowScroll() {
        setTimeout(function() {
          $('html, body').animate({
            'scrollTop' : $(".lb_caseStusy").position().top
          });
          if(sessionStorage.getItem("pageDetails") == "Service Design") {
              $(".option").text('Service Design');
            $('#filterli-2').click();
          } else if(sessionStorage.getItem("pageDetails") == "Product Design") {
            $('#filterli-1').click();
            $(".option").text('Product Design');
    
          } else if(sessionStorage.getItem("pageDetails") == "Branding &amp; Communication") {
            $('#filterli-3').click();
            $(".option").text('Branding & Comm.');
    
          }
          sessionStorage.setItem("Hometab", ""); 
    
          sessionStorage.setItem("pageDetails", ""); 
        }, 500);
      }
    })