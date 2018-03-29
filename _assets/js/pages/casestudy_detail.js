(function(){

if (screen.width >= 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".detailBg").height() - $(".commonHeader").height() || $(this).scrollTop() > $('.info').height()+$('.challenge').height()){  
    $('.commonHeader').css({"background-color":"transparent"}).addClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }
});
}
else if(screen.width >= 768 && screen.width < 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".detailBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }

});
}

$(window).resize(function() {
  if (screen.width >= 768) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".detailBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"transparent"}).addClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }
});
}
else if(screen.width >= 768 && screen.width < 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".detailBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }
});
}
});


})();