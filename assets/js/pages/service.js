
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

  

 

})
