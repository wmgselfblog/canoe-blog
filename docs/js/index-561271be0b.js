$(function(){Materialize.scrollFire([{selector:".waterfall",offset:200}]),setTocToggle(),setAsideToggle(),$(".tab").click(function(e){window.location.href=$(this).find("a").prop("href")}),$(".modal").modal()});var setTocToggle=function(){function e(){return n.map(function(e){return Math.floor($(e.getAttribute("href")).offset().top-f)})}function o(e,o){var t=e.href?$(e.getAttribute("href")):$(e);$("html, body").animate({scrollTop:t.offset().top-f+1},400,o)}var t=!0,a=$(".toc-panel nav"),s=($("footer.page-footer"),$(".post .card")),i=$("nav.navbar"),n=[].slice.call(a.find("li a")),l=a.outerHeight(),r=s.offset(),c=i.height(),f=c+20,d=e();if(0!==a.length){a.on("click","a",function(e){e.preventDefault(),e.stopPropagation(),t=!1;var s=$(this);a.find("a").removeClass("active"),o(this,function(){t=!0,s.addClass("active")})});var u=function(){if(d){var e=s.height(),o=$("html").scrollTop()||$("body").scrollTop(),i=!1;if(o+c>=r.top&&(a.removeClass("absolute").addClass("fixed").css("top",c),i=!0),o+c+l>=r.top+e&&(a.removeClass("fixed").addClass("absolute").css({top:e-l}),i=!0),i||a.removeClass("fixed").removeClass("absolute").css({top:"initial"}),t){for(var f,u=0,v=d.length-1;u<v;)f=u+v+1>>1,d[f]===o?u=v=f:d[f]<o?u=f:v=f-1;$(n).removeClass("active").eq(u).addClass("active")}}};$(window).resize(function(){d=e(),r=s.offset(),l=a.outerHeight(),c=i.height(),f=c+20,t=!0,u()}),$(window).scroll(function(){u()}),u()}},setAsideToggle=function(){function e(){o.hasClass("open")?(o.removeClass("open"),i.fadeOut(400),t.removeClass("covered"),s.text("menu")):(o.addClass("open"),i.fadeIn(400),t.addClass("covered"),s.text("close"))}var o=$("aside.side-panel"),t=$("body"),a=$(".button-collapse"),s=$("i.material-icons",a),i=$('<div id="js-cover"></div>');return i.click(function(o){o.stopPropagation(),o.preventDefault(),e()}),i.appendTo(t),function(){a.click(e)}}();