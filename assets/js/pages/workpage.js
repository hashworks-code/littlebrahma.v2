$( document ).ready(function() {
    
  $(".lb_work_filterli").click(function(){
      $(this).addClass('lb_work_filterActive');
      $(this).siblings().removeClass('lb_work_filterActive');
  });
});