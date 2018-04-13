// (function(){
// if (screen.width >= 1199) {
//         $(window).scroll(function() {
//             if ($(this).scrollTop() > $(".service-Bg").height() - $(".commonHeader").height()) {
//                 $('.commonHeader').css({
//                     "background-color": "transparent"
//                 }).addClass("animated fadeIn");
//                 $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
//                 $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
//             } else {
//                 $('.commonHeader').css({
//                     "background-color": "transparent"
//                 });
//                 $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//                 $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//             }
//         });
//     } else if (screen.width >= 768 && screen.width < 1199) {
//         $(window).scroll(function() {
//             if ($(this).scrollTop() > $(".service-Bg").height() - $(".commonHeader").height()) {
//                 $('.commonHeader').css({
//                     "background-color": "transparent"
//                 }).addClass("animated fadeIn");
//                 $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
//                 $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
//             } else {
//                 $('.commonHeader').css({
//                     "background-color": "transparent"
//                 });
//                 $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//                 $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//             }
//         });
//     }
//     // else if (screen.width < 768) {
//     //     $(window).scroll(function() {
//     // if ($(this).scrollTop() > 420){  
//     //     $('.commonHeader').css({"background-color":"#fff","padding-top":"10px","padding-bottom":"10px"});
//     //     $(".selectSection").css({"position":"static","top":"0%"});
//     //     $(".portDetail").css({"position":"relative","top":"0"});
//     //     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
//     //         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
//     //   }
//     //   else {
//     //     $('.commonHeader').css({"background-color":"transparent","padding-top":"20px","padding-bottom":"20px"});
//     //     $(".selectSection").css({"position":"static","top":"0%"});
//     //     $(".portDetail").css({"position":"static","left":"0%"});
//     //     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//     //         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//     //   }
//     // });
//     // }
//     $(window).resize(function() {
//         if (screen.width >= 768) {
//             $(window).scroll(function() {
//                 if ($(this).scrollTop() > $(".service-Bg").height() - $(".commonHeader").height()) {
//                     $('.commonHeader').css({
//                         "background-color": "transparent"
//                     }).addClass("animated fadeIn");
//                     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
//                     $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
//                 } else {
//                     $('.commonHeader').css({
//                         "background-color": "transparent"
//                     });
//                     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//                     $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//                 }
//             });
//         } else if (screen.width >= 768 && screen.width < 1199) {
//             $(window).scroll(function() {
//                 if ($(this).scrollTop() > $(".service-Bg").height() - $(".commonHeader").height()) {
//                     $('.commonHeader').css({
//                         "background-color": "transparent"
//                     }).addClass("animated fadeIn");
//                     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
//                     $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
//                 } else {
//                     $('.commonHeader').css({
//                         "background-color": "transparent"
//                     });
//                     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//                     $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//                 }
//             });
//         }
//         // else if (screen.width < 768) {
//         //     $(window).scroll(function() {
//         // if ($(this).scrollTop() > 420){  
//         //     $('.commonHeader').css({"background-color":"#fff","padding-top":"10px","padding-bottom":"10px"});
//         //     $(".selectSection").css({"position":"static","top":"0%"});
//         //     $(".portDetail").css({"position":"relative","top":"0"});
//         //     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
//         //         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
//         //   }
//         //   else {
//         //     $('.commonHeader').css({"background-color":"transparent","padding-top":"20px","padding-bottom":"20px"});
//         //     $(".selectSection").css({"position":"static","top":"0%"});
//         //     $(".portDetail").css({"position":"static","left":"0%"});
//         //     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//         //         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//         //   }
//         // });
//         // }
//     });

// })();
$(document).ready(function() {
    //    $('[data-toggle="popover"]').click(function(){
    //         $(this).popover('toggle');
    //         $('[data-toggle="popover"]').not(this).popover('hide'); //all but this
    //     });
     // var url = urlParams()["url"];
    //  $('[data-toggle="popover"]').popover();
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
