/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
function matchHeight(){var t=$(window).width();$(".js-height").length>0&&($(".js-height").css("height",""),t>=769?$(".js-height").equalizeHeights():$(".js-height").css("height",""))}$.fn.equalizeHeights=function(){var t=this.map(function(t,h){return $(h).height()}).get();return this.height(Math.max.apply(this,t))},$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top-64},1e3),!1}})}),$(document).ready(function(){matchHeight()}),$(window).on("load",function(){matchHeight()}),$(window).resize(function(){matchHeight()});