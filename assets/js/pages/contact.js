!function(){function e(){var e=document.getElementById("gform").elements,n=Object.keys(e).map(function(n){return void 0!==e[n].name?e[n].name:e[n].length>0?e[n].item(0).name:void 0}).filter(function(e,n,t){return t.indexOf(e)==n&&e}),t={};return n.forEach(function(n){t[n]=e[n].value;var o="";if("checkbox"===e[n].type)o=o+e[n].checked+", ",t[n]=o.slice(0,-2);else if(e[n].length)for(var c=0;c<e[n].length;c++)e[n].item(c).checked&&(o=o+e[n].item(c).value+", ",t[n]=o.slice(0,-2))}),t}$("#gform").on("submit",function(n){n.preventDefault();var t=e(),o=new XMLHttpRequest;o.open("POST","https://script.google.com/macros/s/AKfycbyj1Z_nA1EnZdfNGe19BK8EYp7o--gifBOynW7vAhxga-yQ7Qnh/exec"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){document.getElementById("thankyou_message").style.display="block",setTimeout(function(){document.getElementById("thankyou_message").style.display="none"},3e3),$("#gform").trigger("reset")};var c=Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&");o.send(c)})}();