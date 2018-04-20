(function() {

//scroll to top on refresh
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(window).resize(function(){
    if(screen.width > 767){
        var valHeight = ((31.4/100)*$('.homePage__BnrDiv__Service').height());
        $('.homePage__BnrDiv').css('height',$('#lbhmimage').height())
        $('.homePage__BnrDiv__Service').css('bottom','-'+valHeight+'px');
        $('.lb-ourworks-dna').css('margin-top','160px');
        $('.lb-ourworks').css('margin-top','50px');
        // $('.homePage__BnrDiv__Service').css({'bottom':'420px',});
        // $('#lbhmimagemobile').css('display','none')
    }
    if(screen.width > 1024){
        $('.lb-ourworks-dna').css('margin-top','250px');
    }
    if(screen.width >1500){
        $('.homePage__BnrDiv__Service').css('bottom','0px');
        $('.lb-ourworks-dna').css('margin-top','80px');
        $('.lb-ourworks').css('margin-top','20px');
    }
    if(screen.width >2000){
        $('.homePage__BnrDiv__Service').css('bottom','250px');
        $('.lb-ourworks-dna').css('margin-top','0px');
        $('.lb-ourworks').css('margin-top','40px');
    }

    // if(screen.width <= 767){
    //      $('#lbhmimagemobile').css('visibility','hidden')
    //      var valHeight = ((31.4/100)*$('.homePage__BnrDiv__Service').height());
    //      var valHeight=(valHeight)+80;
    //      $('.homePage__BnrDiv').css('height',$('#lbhmimagemobile').height())
    //      $('.homePage__BnrDiv__Service').css('bottom','-'+valHeight+'px')
    // }
    
});
    window.onhashchange = function() {
        alert('data');
    }
    $(document).ready(function() {
        // debugger;
        if(screen.width > 767){
            var valHeight = ((31.4/100)*$('.homePage__BnrDiv__Service').height());
            $('.homePage__BnrDiv').css('height',$('#lbhmimage').height())
            $('.homePage__BnrDiv__Service').css('bottom','-'+valHeight+'px');
            $('.lb-ourworks-dna').css('margin-top','160px');
            // $('#lbhmimagemobile').css('display','none')
            $('.lb-ourworks').css('margin-top','50px');
        }  
        if(screen.width > 1024){
            $('.lb-ourworks-dna').css('margin-top','250px');
        }
        if(screen.width >1500){
            $('.homePage__BnrDiv__Service').css('bottom','0px');
            $('.lb-ourworks-dna').css('margin-top','80px');
            $('.lb-ourworks').css('margin-top','20px');
        }
        if(screen.width >2000){
            $('.homePage__BnrDiv__Service').css('bottom','250px');
            $('.lb-ourworks-dna').css('margin-top','0px');
            $('.lb-ourworks').css('margin-top','40px');
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
        $(".dropdown-menu li").click(function(){
            $(".option").text($(this).text());
        });
        var widthofwindow=$(window).width();
            if(widthofwindow<768){
                // $("[data-toggle=popover]").popover().attr('
                $("[data-toggle=popover]").popover({
                    html: true, 
                    placement: 'right',
                    content: function() {
                          return $('#popover-content').html();
                        }
            });
            }
            else{
        $("[data-toggle=popover]").popover({
            html: true, 
            placement: 'bottom',
            content: function() {
                  return $('#popover-content').html();
                }
        });
    }
    
        $('body').on('click', function (e) {
            var count =1;
            $('[data-toggle=popover]').each(function () {
                // console.log($(this).attr('class'));
                // hide any open popovers when the anywhere else in the body is clicked
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                    $(this).removeClass('intro');
                     
                    // $('[data-toggle="popover"]').children('.activeimg').hide();
                    //  $('[data-toggle="popover"]').children('.normalimg').show();
                }
                else{
                    $(this).popover('toggle');
                    $(this).addClass('intro');
                    // $(this)
                    $(this).children('.activeimg').show();
                    $(this).children('.normalimg').hide();
                     $('[data-toggle="popover"]').not(this).children('.activeimg').hide();
                     $('[data-toggle="popover"]').not(this).children('.normalimg').show();
                     count =0;
                }
                if(count == 1){
                    $('.activeimg').hide();
                    $('.normalimg').show();
                }
            });
        });
        if(screen.width > 767){
         $(".trigger-1").trigger( "click" );
        }
        
        $('.prod').each(function (index) { 
            var prod=$('.prod').length;
            if(prod<=4){
                $("#lb_btn").hide();
                $('.load-more').hide();
            }
            else{
                $("#lb_btn").show();
            }
            if(index<=3){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        })
        $('.service').each(function (index) { 
            var service=$('.service').length;
            if(service<=4){
                $("#lb_btn").hide();
                $('.load-more').hide();
            }
            if(index<=3){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        })
        $('.brndcomm').each(function (index) { 
            var brndcomm=$('.brndcomm').length;
            if(brndcomm<=4){
                $("#lb_btn").hide();
                $('.load-more').hide();
            }
            
            if(index<=3){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        })
        $('.alldata').each(function (index) { 
            var all=$('.alldata').length;
            if(all<=4){
                $("#lb_btn").hide();
                $('.load-more').hide();
            }
            else{
                $("#lb_btn").show();
            }
            if(index<=3){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        })

        // $('.btn').on('click', function (e) {
        //     $('.btn').not(this).popover('hide');
        // });
       
    
        // $('.lb-filter-service').hide();
        $(".lb_work_filterli").click(function(){
            $(this).addClass('lb_work_filterActive');
            var dataValue=$(this).attr("value");
            $(this).siblings().removeClass('lb_work_filterActive');
            // if(dataValue=="Productdesign"){
            //   $('.Productdesign').show();
            //   $('.Servicedesign').hide();
            //   $('.BrandingandCommunication').hide();
            // }
            // if(dataValue=="Servicedesign"){
            //   $('.Productdesign').hide();
            //   $('.Servicedesign').show();
            //   $('.BrandingandCommunication').hide();
            // }
            // if(dataValue=="BrandingandCommunication"){
            //   $('.Productdesign').hide();
            //   $('.Servicedesign').hide();
            //   $('.BrandingandCommunication').show();
            // }
        });

        $(".lb_work_filterli").click(function() {
            $("#lb_btn1").hide();
            $("#lb_btn").show();
            var data=$(this).attr('id');
            var length = $(".common-filter").length;
            for(var i=1;i<length+1;i++){
                tempvalue="filterli-"+i;
                if(data == tempvalue){
                    $('.all').hide();
                    $(".filterli-"+i).show();
                    $(".filterli-"+i+' '+'.brndcomm').each(function (index) { 
                        // console.log('div' + index + ':' + $(this).attr('id')); 
                        var brand=$(".filterli-"+i+' '+'.brndcomm').length;
                        if(brand<=4){
                            $("#lb_btn").hide();
                        }

                        if(index<=3){
                            $(this).show();
                        }
                        else{
                            $(this).hide();
                        }
                    })
                    $(".filterli-"+i+' '+'.prod').each(function (index) { 
                        // console.log('div' + index + ':' + $(this).attr('id')); 
                        var prod=$(".filterli-"+i+' '+'.prod').length;
                        if(prod<=4){
                            $("#lb_btn").hide();
                        }
                        if(index<=3){
                            $(this).show();
                        }
                        else{
                            $(this).hide();
                        }
                    })
                    $(".filterli-"+i+' '+'.service').each(function (index) { 
                        // console.log('div' + index + ':' + $(this).attr('id')); 
                        var service=$(".filterli-"+i+' '+'.service').length;
                        if(service<=4){
                            $("#lb_btn").hide();
                        }
                        if(index<=3){
                            $(this).show();
                        }
                        else{
                            $(this).hide();
                        }
                    })
                }
                
                else{
                    $(".filterli-"+i).hide();
                }
                if(data == 'All'){
                    $('.all').show();
                    $('.alldata').each(function (index) { 
                        var all=$('.alldata').length;
                        if(all<=4){
                            $("#lb_btn").hide();
                        }
                        
                        if(index<=3){
                            $(this).show();
                        }
                        else{
                            $(this).hide();
                        }
                    })
                }
            }
        });
        
        $(".work_select").change(function() {
            var data=$(this).val();
            $("#lb_btn1").hide();
            $("#lb_btn").show();
            var length = $(".common-filter").length;
            for(var i=1;i<length+1;i++){
                tempvalue="filterli-"+i;
                if(data == tempvalue){
                    $(".filterli-"+i).show();
                    $(".filterli-"+i+' '+'.brndcomm').each(function (index) { 
                        // console.log('div' + index + ':' + $(this).attr('id')); 
                        if(index<=3){
                            $(this).show();
                        }
                        else{
                            $(this).hide();
                        }
                    })
                    $(".filterli-"+i+' '+'.prod').each(function (index) { 
                        // console.log('div' + index + ':' + $(this).attr('id')); 
                        if(index<=3){
                            $(this).show();
                        }
                        else{
                            $(this).hide();
                        }
                    })
                    $(".filterli-"+i+' '+'.service').each(function (index) { 
                        // console.log('div' + index + ':' + $(this).attr('id')); 
                        if(index<=3){
                            $(this).show();
                        }
                        else{
                            $(this).hide();
                        }
                    })
                }
                else{
                    $(".filterli-"+i).hide();
                }
            }
        });

        $('#lb_btn').click(function(){
           debugger;
            // $("#lb_btn1").show();
             $("#lb_btn").hide();
              
             if ($(window).width() > 767) {
                var id =$('.lb_work_filterActive').attr('id');
             }
             if ($(window).width() <= 767) {
                var id =$('.dropdown .lb_work_filterActive').attr('data');
             }
                if(id == 'filterli-1'){
                    $('.prod').show();
                }
                else if(id == 'filterli-2'){
                    $('.service').show();
                }
                else if(id == 'filterli-3'){
                        $('.brndcomm').show();
                }   
                else if(id == 'All'){
                    $('.alldata').show();
                }  
            
            
        });

        $('#lb_service_btn').click(function(){
              var value=$(this).val();
              $('#lb_service_btn1').show();
              $(this).hide();
              if(value == 'Product'){
                $('.prod').show();
            }
            else if(value == 'Service'){
                $('.service').show();
            }
            else if(value == 'Branding & Communication'){
                    $('.brndcomm').show();
            }   
        })
        $('#lb_service_btn1').click(function(){
            var value=$(this).val();
            $('#lb_service_btn').show();
            $(this).hide();
            if(value == 'Product'){
                $('.prod').each(function (index) { 
                    if(index<=3){
                        $(this).show();
                    }
                    else{
                        $(this).hide();
                    }
                })
            }
            else if(value == 'Service'){
                $('.service').each(function (index) { 
                    if(index<=3){
                        $(this).show();
                    }
                    else{
                        $(this).hide();
                    }
                })
            }
            else if(value == 'Branding & Communication'){
                var prodcount=$('.brndcomm').length;
                $('.brndcomm').each(function (index) { 
                    if(index<=3){
                        $(this).show();
                    }
                    else{
                        $(this).hide();
                    }
                })
            } 
      })
    
        $('#lb_btn1').click(function(){
            $("#lb_btn1").hide();
            $("#lb_btn").show();
            // if ($(window).width() > 767) {
                if ($(window).width() > 767) {
                    var id =$('.lb_work_filterActive').attr('id');
                 }
                 if ($(window).width() <= 767) {
                    var id =$('.dropdown .lb_work_filterActive').attr('data');
                 }
            // var id =$('.lb_work_filterActive').attr('data');
            
            var count=0;
            if(id == 'filterli-1'){
                $('.prod').each(function (index) { 
                    if(index<=3){
                        $(this).add();
                    }
                    else{
                        $(this).hide();
                    }
                })
            }
            else if(id == 'filterli-2'){
                $('.service').each(function (index) { 
                    if(index<=3){
                        $(this).add();
                    }
                    else{
                        $(this).hide();
                    }
                })
            }
            else if(id == 'filterli-3'){
                var prodcount=$('.brndcomm').length;
                $('.brndcomm').each(function (index) { 
                    if(index<=3){
                        $(this).add();
                    }
                    else{
                        $(this).hide();
                    }
                })
            }
        // }
        // if ($(window).width() <= 767) {
            // var id =$('.work_select').attr('value');
            // if(id == 'filterli-1'){
            //     $('.prod').each(function (index) { 
            //         if(index<=3){
            //             $(this).add();
            //         }
            //         else{
            //             $(this).hide();
            //         }
            //     })
            // }
            // else if(id == 'filterli-2'){
            //     $('.service').each(function (index) { 
            //         if(index<=3){
            //             $(this).add();
            //         }
            //         else{
            //             $(this).hide();
            //         }
            //     })
            // }
            // else if(id == 'filterli-3'){
            //     var prodcount=$('.brndcomm').length;
            //     $('.brndcomm').each(function (index) { 
            //         if(index<=3){
            //             $(this).add();
            //         }
            //         else{
            //             $(this).hide();
            //         }
            //     })
            // } 
        // }
        })
       
        // var count=0;
      
        // var length = $(".lb-filter-service").length;
        //     var id = $("#active").data("id");
        //     for (var i = 1; i <= length; i++) {
        //         var id1 = $(".work" + i).data("id");
        //         if (id == id1) {
        //             count++;
        //             if(count<=1){
        //                 $(".work" + i).show();
        //             }
        //         }
        //     }
     
                //   $(".lb_work_filterli").click(function() {
                //     $("#lb_btn1").hide();
                //     $("#lb_btn").show();
                //       count=0;
                //     $('.lb-filter-service').hide();
                //       var id = $(this).data("id");
                //       for (var i = 1; i <= length; i++) {
                //           var id1 = $(".work" + i).data("id");
                //           if (id == id1) {
                //            count++;
                //            if(count<=1){
                //             $(".work" + i).show();
                //         }
                //           }
                //       }
                //   });

                //   $("#lb_btn").click(function() {
                //     $('.lb-filter-service').hide();
                //         var id = $('.lb_work_filterli.lb_work_filterActive').data("id");
                //         var id2 = $('.work_select').val();
                //         for (var i = 1; i <= length; i++) {
                //             var id1 = $(".work" + i).data("id");
                //             if ($(window).width() > 767) {
                //                 if (id == id1 ) {
                //                     $(".work" + i).show();
                //                 }
                //             }
                //             if ($(window).width() <= 767) {
                //                 if (id2 == id1) {
                //                     $(".work" + i).show();
                //                 }
                //             }
                //         }
                //     // for (var i = 1; i <= count; i++) {
                //     //     $(".work" + i).show();
                //     // }
                //     $("#lb_btn").hide();
                //     $("#lb_btn1").show();
                // }); 

                // $("#lb_btn1").click(function() {
                //     count=0;
                //     $('.lb-filter-service').hide();
                //         var id = $('.lb_work_filterli.lb_work_filterActive').data("id");
                //         var id2 = $('.work_select').val();
                //         for (var i = 1; i <= length; i++) {
                //             var id1 = $(".work" + i).data("id");
                //             if ($(window).width() > 767) {
                //             if (id == id1) {
                //                 count++;
                //                 if(count<=1){
                //                     $(".work" + i).show();
                //                 }
                //             }
                //         }
                //         if ($(window).width() <= 767) {
                //             if (id2 == id1) {
                //                 count++;
                //                 if(count<=1){
                //                     $(".work" + i).show();
                //                 }
                //             }
                //         }
                //         }
                //     $("#lb_btn1").hide();
                //     $("#lb_btn").show();
                // }); 


                //   $(".work_select").change(function() {
                //     $("#lb_btn1").hide();
                //     $("#lb_btn").show();
                //       count=0;
                //     var id = $(this).val();
                //     $('.lb-filter-service').hide();
                      
                //       for (var i = 1; i <= length; i++) {
                //           var id1 = $(".work" + i).data("id");
                //           if (id == id1) {
                //             count++;
                //             if(count<=1){
                //                 $(".work" + i).show();
                //             }
       
       
                //           }
                //       }
                //   });
//         if ($(window).width() <= 1024){

//         /* scroll up */

//         $('.nav-scroll-up').click(function(e) {

//             $('html, body').animate({
//                 scrollTop: '0px'
//             }, 1.7e3);
//         });

//         /* end of scroll up */

//         /* scroll to top button*/
//         $(document).scroll(function() {
//             var main = $(this).scrollTop();

//             if (main >= 330) {
//                 $(".apst-wrapper").show();
//             } else {
//                 $(".apst-wrapper").hide();
//             }

//         });
//         /* end scroll to top */

// }

//          $(".blog-filter").hide();

//         if ($(window).width() > 1024 || $(window).width() < 768) {
//             $(".MenuList__common").addClass("fadeInUp");
//             $(".MenuList__ch").addClass("fadeInUp");
//         } else {
//             $(".MenuList__common").addClass("fadeInDown");
//         }

//         $(".MenuContent").css("visibility", "hidden");
//         $(".commonMenu__icon").click(function() {

//             $(this).hide();
//             $(".MenuContent").addClass("fadeInRight");
//             $(".MenuContent").removeClass("fadeOutRight");
//             $(".MenuContent").css({ "opacity": "1", "visibility": "visible" });
//             $(".scroll-indicators").css("opacity", "0");
//             $(".about-indicators").css("opacity", "0");
//             $(".arrow-right").css("opacity", "0");
//             $(".arrow-left").css("opacity", "0");
//         });
//         $(".MenuContent__close").click(function() {
//             $(".commonMenu__icon").show();
//             $(".MenuContent").addClass("fadeOutRight");
//             $(".MenuContent").removeClass("fadeInRight");
//             $(".MenuContent").css({ "opacity": "1", "visibility": "visible" });
//             $(".MenuList__common").hide();
//             $(".scroll-indicators").css("opacity", "1");
//             $(".about-indicators").css("opacity", "1");
//             $(".arrow-right").css("opacity", "1");
//             $(".arrow-left").css("opacity", "1");
//             $(".arrow").removeClass("MenuList__arrowDown1")
//             $(".arrow").addClass("MenuList__arrowDown");
//             $(".MenuList__common").removeClass("fadeInDown");
//             $(".MenuList__common").hasClass("fadeInUp");
//         });
//         // $(".MenuList__common").hide();
//         $(".MenuList__wwa").click(function() {

//             var MenuList__common = $(".MenuList__common").hasClass("fadeInDown");

//             if (MenuList__common) {
//                 $(".MenuList__common").removeClass("fadeInDown");
//                 $(".MenuList__common").addClass("fadeInUp");
//                 $(".MenuList__ch").removeClass("fadeInDown");
//                 $(".MenuList__ch").addClass("fadeInUp");

//             } else {
//                 $(".MenuList__common").addClass("fadeInDown");
//                 $(".MenuList__common").removeClass("fadeInUp");



//                 $(".MenuList__ch").addClass("fadeInDown");
//                 $(".MenuList__ch").removeClass("fadeInUp");


//             }

//             $(".MenuList__common").toggle();
//             $(".arrow").toggleClass("MenuList__arrowDown MenuList__arrowDown1");
//         });


//         /* default select category */

//         location.queryString = {};
//         location.search.substr(1).split("&").forEach(function(pair) {
//             if (pair === "") return;
//             var parts = pair.split("=");
//             location.queryString[parts[0]] = parts[1] &&
//                 decodeURIComponent(parts[1].replace(/\+/g, " "));
//         });
//         if (location.queryString.category == undefined) {
//             $("#r-option1").prop("checked", true);
//             $("#dropdownTitle").text($("#mobileRadio0").attr('data-category'));
//         } else {
//             $('*[data-category="' + location.queryString.category + '"]').prop("checked", true);
//             $("#dropdownTitle").text(location.queryString.category);
//         }

//         /*end default select category*/

//         if ($("#r-option1").prop('checked') == true || $('*[data-category="' + location.queryString.category + '"]').prop("checked") == true) {
//             var category = $('input:radio:checked').data("category");
//             $(".blog-filter").hide();
//             var classArr = category.replace(/[^a-z0-9\s]/gi, ' ').split(" ");
//             var finalArray = classArr.filter(function(v) { return v !== '' });
//             $("." + finalArray.join('.')).show();
//         }
//         $('input[type="radio"]').click(function() {

//             if ($(this).is(':checked')) {
//                 var category = $('input:radio:checked').data("category");
//                 var params = { 'category': category };
//                 window.history.pushState(null, document.title, '?' + jQuery.param(params));
//                 $(".blog-filter").hide();

//                 var classArr = category.replace(/[^a-z0-9\s]/gi, ' ').split(" ");
//                 var finalArray = classArr.filter(function(v) { return v !== '' });
//                 $("." + finalArray.join('.')).show();
//             }
//         });

//         $("li[data-category]").click(function() {
//             var category = $(this).attr('data-category');
//             var params = { 'category': category };
//             window.history.pushState(null, document.title, '?' + jQuery.param(params));
//             $("#dropdownTitle").text(category);
//             $(".blog-filter").hide();
//             var classArr = category.replace(/[^a-z0-9\s]/gi, ' ').split(" ");
//             var finalArray = classArr.filter(function(v) { return v !== '' });
//             $("." + finalArray.join('.')).show();
//         });


//         $(".job_detail").hide();
//         $(".career__link").click(function() {

//             var job = $(this).data("id");
//             $(".job").hide();

//             $(".job_detail" + job).show();

//         });

//         $(".career__img2").click(function() {
//             $(".job_detail").hide();
//             var job = $(".job").length;
//             if ($('input[type="radio"]').is(':checked')) {
//                 var category = $('input:radio:checked').data("category");
//                 $(".blog-filter").hide();

//                 var classArr = category.replace(/[^a-z0-9\s]/gi, ' ').split(" ");
//                 var finalArray = classArr.filter(function(v) { return v !== '' });
//                 $("." + finalArray.join('.')).show();
//             }
//         });



//         $('.valuable-clients-right').hide();
//         $("#company1").show();
//         var length = $(".valuable-clients-left__list").length;
//         for (var i = 1; i <= length; i++) {
//             $("#abt-img" + i).click(function() {
//                 var id = $(this).data("id");
//                 for (var j = 1; j <= length; j++) {
//                     var id1 = $("#company" + j).data("id");
//                     if (id == id1) {
//                         $('.valuable-clients-right').hide();
//                         $("#company" + j).show();


//                     }
//                 }
//             });
//         }

//         $("#company9").show();
//         var length1 = $(".valuable-clients-right__list").length;
//         for (var i = 9; i <= length1; i++) {
//             $("#about-img" + i).click(function() {
//                 var id2 = $(this).data("id");
//                 for (var j = 9; j <= length1; j++) {
//                     var id3 = $("#company" + j).data("id");
//                     if (id2 == id3) {
//                         $('.valuable-clients-right').hide();
//                         $("#company" + j).show();


//                     }
//                 }
//             });
//         }

//         $(".mobileDropDown__menu").hide();

//         $(".mobileDropDown__container").click(function() {

//             $(".mobileDropDown__menu").fadeToggle();
//             $("#test").toggleClass("drop_arrow");
//         })
//         $(".toHide").click(function() {
//             $(".mobileDropDown__menu").hide();
//             $("#test").toggleClass("drop_arrow");
//         })
            $('.knowmore a').click(function() {
                var text = $(this).closest("div").parent().find("div.indTxt").html();
                sessionStorage.setItem("pageDetails", text);
            }); 
    });

})();