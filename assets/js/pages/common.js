!function(){$(window).on("load",function(){$(".loader-overlay").fadeOut(500),screen.width<768&&$("video").remove()}),$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(window).resize(function(){if(screen.width>767){var e=.314*$(".homePage__BnrDiv__Service").height();$(".homePage__BnrDiv").css("height",$("#lbhmimage").height()),$(".homePage__BnrDiv__Service").css("bottom","-"+e+"px"),$(".lb-ourworks-dna").css("margin-top","160px"),$(".lb-ourworks").css("margin-top","50px")}screen.width>1024&&$(".lb-ourworks-dna").css("margin-top","200px"),screen.width>1500&&($(".homePage__BnrDiv__Service").css("bottom","0px"),$(".lb-ourworks-dna").css("margin-top","100px"),$(".lb-ourworks").css("margin-top","20px")),screen.width>2e3&&($(".homePage__BnrDiv__Service").css("bottom","250px"),$(".lb-ourworks-dna").css("margin-top","0px"),$(".lb-ourworks").css("margin-top","40px"))}),$(document).ready(function(){if(screen.width>767){var e=.314*$(".homePage__BnrDiv__Service").height();$(".homePage__BnrDiv").css("height",$("#lbhmimage").height()),$(".homePage__BnrDiv__Service").css("bottom","-"+e+"px"),$(".lb-ourworks-dna").css("margin-top","160px"),$(".lb-ourworks").css("margin-top","50px")}screen.width>1024&&$(".lb-ourworks-dna").css("margin-top","250px"),screen.width>1500&&($(".homePage__BnrDiv__Service").css("bottom","0px"),$(".lb-ourworks-dna").css("margin-top","80px"),$(".lb-ourworks").css("margin-top","20px")),screen.width>2e3&&($(".homePage__BnrDiv__Service").css("bottom","250px"),$(".lb-ourworks-dna").css("margin-top","0px"),$(".lb-ourworks").css("margin-top","40px")),$(".dropdown-menu li").click(function(){$(".option").text($(this).text())}),$(window).width()<768?$("[data-toggle=popover]").popover({html:!0,placement:"right",content:function(){return $("#popover-content").html()}}):$("[data-toggle=popover]").popover({html:!0,placement:"bottom",content:function(){return $("#popover-content").html()}}),$("body").on("click",function(e){var t=1;$("[data-toggle=popover]").each(function(){$(this).is(e.target)||0!==$(this).has(e.target).length||0!==$(".popover").has(e.target).length?($(this).popover("toggle"),$(this).addClass("intro"),$(this).children(".activeimg").show(),$(this).children(".normalimg").hide(),$('[data-toggle="popover"]').not(this).children(".activeimg").hide(),$('[data-toggle="popover"]').not(this).children(".normalimg").show(),t=0):($(this).popover("hide"),$(this).removeClass("intro")),1==t&&($(".activeimg").hide(),$(".normalimg").show())})}),screen.width>767&&$(".trigger-1").trigger("click"),$(".prod").each(function(e){$(".prod").length<=4?($("#lb_btn").hide(),$(".load-more").hide()):$("#lb_btn").show(),e<=3?$(this).show():$(this).hide()}),$(".service").each(function(e){$(".service").length<=4&&($("#lb_btn").hide(),$(".load-more").hide()),e<=3?$(this).show():$(this).hide()}),$(".brndcomm").each(function(e){$(".brndcomm").length<=4&&($("#lb_btn").hide(),$(".load-more").hide()),e<=3?$(this).show():$(this).hide()}),$(".alldata").each(function(e){$(".alldata").length<=4?($("#lb_btn").hide(),$(".load-more").hide()):$("#lb_btn").show(),e<=3?$(this).show():$(this).hide()}),$(".lb_work_filterli").click(function(){$(this).addClass("lb_work_filterActive"),$(this).attr("value"),$(this).siblings().removeClass("lb_work_filterActive")}),$(".lb_work_filterli-mb").click(function(){$(this).addClass("lb_work_filterActive"),$(this).attr("value"),$(this).siblings().removeClass("lb_work_filterActive")}),$(".lb_work_filterli").click(function(){$("#lb_btn1").hide(),$("#lb_btn").show();for(var e=$(this).attr("id"),t=$(".common-filter").length,i=1;i<t+1;i++)tempvalue="filterli-"+i,e==tempvalue?($(".all").hide(),$(".filterli-"+i).show(),$(".filterli-"+i+" .brndcomm").each(function(e){$(".filterli-"+i+" .brndcomm").length<=4&&$("#lb_btn").hide(),e<=3?$(this).show():$(this).hide()}),$(".filterli-"+i+" .prod").each(function(e){$(".filterli-"+i+" .prod").length<=4&&$("#lb_btn").hide(),e<=3?$(this).show():$(this).hide()}),$(".filterli-"+i+" .service").each(function(e){$(".filterli-"+i+" .service").length<=4&&$("#lb_btn").hide(),e<=3?$(this).show():$(this).hide()})):$(".filterli-"+i).hide(),"All"==e&&($(".all").show(),$(".alldata").each(function(e){$(".alldata").length<=4&&$("#lb_btn").hide(),e<=3?$(this).show():$(this).hide()}))}),$(".lb_work_filterli-mb").click(function(){$("#lb_btn1").hide(),$("#lb_btn").show();for(var e=$(this).attr("data"),t=$(".common-filter").length,i=1;i<t+1;i++)tempvalue="filterli-"+i,e==tempvalue?($(".all").hide(),$(".filterli-"+i).show(),$(".filterli-"+i+" .brndcomm").each(function(e){$(".filterli-"+i+" .brndcomm").length<=4&&$("#lb_btn").hide(),e<=3?$(this).show():$(this).hide()}),$(".filterli-"+i+" .prod").each(function(e){$(".filterli-"+i+" .prod").length<=4&&$("#lb_btn").hide(),e<=3?$(this).show():$(this).hide()}),$(".filterli-"+i+" .service").each(function(e){$(".filterli-"+i+" .service").length<=4&&$("#lb_btn").hide(),e<=3?$(this).show():$(this).hide()})):$(".filterli-"+i).hide(),"All"==e&&($(".all").show(),$(".alldata").each(function(e){$(".alldata").length<=4&&$("#lb_btn").hide(),e<=3?$(this).show():$(this).hide()}))}),$(".work_select").change(function(){var e=$(this).val();$("#lb_btn1").hide(),$("#lb_btn").show();for(var t=$(".common-filter").length,i=1;i<t+1;i++)tempvalue="filterli-"+i,e==tempvalue?($(".filterli-"+i).show(),$(".filterli-"+i+" .brndcomm").each(function(e){e<=3?$(this).show():$(this).hide()}),$(".filterli-"+i+" .prod").each(function(e){e<=3?$(this).show():$(this).hide()}),$(".filterli-"+i+" .service").each(function(e){e<=3?$(this).show():$(this).hide()})):$(".filterli-"+i).hide()}),$("#lb_btn").click(function(){if($("#lb_btn").hide(),$(window).width()>767)var e=$(".lb_work_filterActive").attr("id");if($(window).width()<=767)var e=$(".dropdown .lb_work_filterActive").attr("data");"filterli-1"==e?$(".prod").show():"filterli-2"==e?$(".service").show():"filterli-3"==e?$(".brndcomm").show():"All"==e&&$(".alldata").show()}),$("#lb_service_btn").click(function(){var e=$(this).val();$(this).parent("div").hide(),"Product"==e?$(".prod").show():"Service"==e?$(".service").show():"Branding &"==e&&$(".brndcomm").show()}),$("#lb_btn1").click(function(){if($("#lb_btn1").hide(),$("#lb_btn").show(),$(window).width()>767)var e=$(".lb_work_filterActive").attr("id");if($(window).width()<=767)var e=$(".dropdown .lb_work_filterActive").attr("data");"filterli-1"==e?$(".prod").each(function(e){e<=3?$(this).add():$(this).hide()}):"filterli-2"==e?$(".service").each(function(e){e<=3?$(this).add():$(this).hide()}):"filterli-3"==e&&($(".brndcomm").length,$(".brndcomm").each(function(e){e<=3?$(this).add():$(this).hide()}))}),$(".knowmore a").click(function(){var e=$(this).closest("div").parent().find("div.indTxt").html();e=e.replace("&amp;","&"),sessionStorage.setItem("pageDetails",e)}),$(".data-loc").click(function(){var e=$(this).attr("data-loc");sessionStorage.setItem("Hometab",e)})})}(),$(document).ready(function(){}),function(){function e(){var e=document.getElementById("gform").elements,t=Object.keys(e).map(function(t){return void 0!==e[t].name?e[t].name:e[t].length>0?e[t].item(0).name:void 0}).filter(function(e,t,i){return i.indexOf(e)==t&&e}),i={};return t.forEach(function(t){i[t]=e[t].value;var o="";if("checkbox"===e[t].type)o=o+e[t].checked+", ",i[t]=o.slice(0,-2);else if(e[t].length)for(var n=0;n<e[t].length;n++)e[t].item(n).checked&&(o=o+e[t].item(n).value+", ",i[t]=o.slice(0,-2))}),i}$("#gform").on("submit",function(t){t.preventDefault();var i=e(),o=new XMLHttpRequest;o.open("POST","https://script.google.com/macros/s/AKfycbyj1Z_nA1EnZdfNGe19BK8EYp7o--gifBOynW7vAhxga-yQ7Qnh/exec"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){var e=document.getElementById("snackbar");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3),$("#gform").trigger("reset")};var n=Object.keys(i).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(i[e])}).join("&");o.send(n)})}();