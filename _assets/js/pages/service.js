
$(document).ready(function() {
    
     $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return decodeURI(results[1]) || 0;
        }
    }
    var data=$.urlParam('url');
    console.log(data);
    if(data!= null){
        $('html, body').animate({
            scrollTop: $(".lb-filterDiv").offset().top-100
          }, 2000);
    }
$(".lb_work_filterli").click(function() {
    var data=$(this).attr('id');
    var arr = data.split('-');
    tempdata="datavalue-"+arr[1]
    var length = $(".stepwizard").length;
    for(var i=1;i<length+1;i++){
        tempvalue="datavalue-"+i;
        if(tempdata == tempvalue){
             $(".datavalue-"+i).css("display", "table");  
        }
        else{
            $(".datavalue-"+i).hide();
        }
    }
});

  
window.size=$(window).width();

if(size<768){
$('.step-setting').addClass('step-mob-padder');

}


$('.btn-circle.service-btn').click(function(){
  $(this).addClass('transparent');
  $(this).parent('.stepwizard-step').prevAll('.stepwizard-step').addClass('active');
  $(this).parent('.stepwizard-step').nextAll('.stepwizard-step').removeClass('active');
  $(this).parent('.stepwizard-step').removeClass('active');
         $(this).parent('.stepwizard-step').siblings('.stepwizard-step').children('.btn-circle.service-btn').removeClass('transparent');
$(this).siblings('.circle1,.circle2').addClass('circle-animation');
$(this).siblings('.step-content').addClass('step-content-show');
$(this).parent('.stepwizard-step').siblings('.stepwizard-step').children('.step-content').removeClass('step-content-show');
$(this).parent('.stepwizard-step').siblings('.stepwizard-step').children('.circle1,.circle2').removeClass('circle-animation');

if(size<768){
 $(this).parent('.stepwizard-step').addClass('step-mob-padder');
 $(this).parent('.stepwizard-step').siblings('.stepwizard-step').removeClass('step-mob-padder');
}

}) 
 

})
