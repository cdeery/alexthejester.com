(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){var e=document.querySelector('.un7');e.setAttribute('src',(dpi>1)?'images/purple-730.png':'images/purple-365.png');
var e=document.querySelector('.un8');e.setAttribute('src','images/1-227.png');
var e=document.querySelector('.un9');e.setAttribute('src','images/2-227.png');
var e=document.querySelector('.un10');e.setAttribute('src','images/31-201.png');}else{var e=document.querySelector('.un7');e.setAttribute('src',(dpi>1)?'images/purple-400.png':'images/purple-200.png');
var e=document.querySelector('.un8');e.setAttribute('src',(dpi>1)?'images/1-178.png':'images/1-89.png');
var e=document.querySelector('.un9');e.setAttribute('src',(dpi>1)?'images/2-232.png':'images/2-116.png');
var e=document.querySelector('.un10');e.setAttribute('src',(dpi>1)?'images/31-210.png':'images/31-105.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var n=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));n||(n=1);var r=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];if(!r)return;var l=/chrome/i.test(navigator.userAgent);o=l?r.getBoundingClientRect().top*n+pageYOffset:(r.getBoundingClientRect().top+pageYOffset)*n}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var a=pageYOffset,i=null;requestAnimationFrame(function e(t){i||(i=t);var n=t-i;scrollTo(0,a<o?(o-a)*n/400+a:a-(a-o)*n/400),n<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
initMenu($('#m3')[0]);
$('.c67').Stickyfill();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")&&setTimeout(o,100)};o()}

});