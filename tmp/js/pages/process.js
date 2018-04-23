(function(){
if (screen.width >= 1199) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > $(".service-Bg").height() - $(".commonHeader").height()) {
                $('.commonHeader').css({
                    "background-color": "transparent"
                }).addClass("animated fadeIn");
                $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
                $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
            } else {
                $('.commonHeader').css({
                    "background-color": "transparent"
                });
                $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
                $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
            }
        });
    } else if (screen.width >= 768 && screen.width < 1199) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > $(".service-Bg").height() - $(".commonHeader").height()) {
                $('.commonHeader').css({
                    "background-color": "transparent"
                }).addClass("animated fadeIn");
                $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
                $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
            } else {
                $('.commonHeader').css({
                    "background-color": "transparent"
                });
                $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
                $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
            }
        });
    }
    // else if (screen.width < 768) {
    //     $(window).scroll(function() {
    // if ($(this).scrollTop() > 420){  
    //     $('.commonHeader').css({"background-color":"#fff","padding-top":"10px","padding-bottom":"10px"});
    //     $(".selectSection").css({"position":"static","top":"0%"});
    //     $(".portDetail").css({"position":"relative","top":"0"});
    //     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
    //         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
    //   }
    //   else {
    //     $('.commonHeader').css({"background-color":"transparent","padding-top":"20px","padding-bottom":"20px"});
    //     $(".selectSection").css({"position":"static","top":"0%"});
    //     $(".portDetail").css({"position":"static","left":"0%"});
    //     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
    //         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
    //   }
    // });
    // }
    $(window).resize(function() {
        if (screen.width >= 768) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > $(".service-Bg").height() - $(".commonHeader").height()) {
                    $('.commonHeader').css({
                        "background-color": "transparent"
                    }).addClass("animated fadeIn");
                    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
                    $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
                } else {
                    $('.commonHeader').css({
                        "background-color": "transparent"
                    });
                    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
                    $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
                }
            });
        } else if (screen.width >= 768 && screen.width < 1199) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > $(".service-Bg").height() - $(".commonHeader").height()) {
                    $('.commonHeader').css({
                        "background-color": "transparent"
                    }).addClass("animated fadeIn");
                    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
                    $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
                } else {
                    $('.commonHeader').css({
                        "background-color": "transparent"
                    });
                    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
                    $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
                }
            });
        }
        // else if (screen.width < 768) {
        //     $(window).scroll(function() {
        // if ($(this).scrollTop() > 420){  
        //     $('.commonHeader').css({"background-color":"#fff","padding-top":"10px","padding-bottom":"10px"});
        //     $(".selectSection").css({"position":"static","top":"0%"});
        //     $(".portDetail").css({"position":"relative","top":"0"});
        //     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        //         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
        //   }
        //   else {
        //     $('.commonHeader').css({"background-color":"transparent","padding-top":"20px","padding-bottom":"20px"});
        //     $(".selectSection").css({"position":"static","top":"0%"});
        //     $(".portDetail").css({"position":"static","left":"0%"});
        //     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        //         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
        //   }
        // });
        // }
    });

})();