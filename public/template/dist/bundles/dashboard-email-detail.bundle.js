webpackJsonp([17],{324:function(c,n,e){e(5)},5:function(c,n){$(document).ready(function(){"use strict";var c,n,e;e=$(".mail-item"),c=$("#mail-check-all"),n=$("#email-body"),e.length>0&&(c.on("change",function(){var n;n=c.is(":checked"),e.each(function(c,e){var t,a;e=$(e),t=$('.mail-item-actions input[type="checkbox"]',e),a=t.is(":checked"),n&&!a?t.prop("checked",!0):!n&&a&&t.prop("checked",!1)})}),e.each(function(c,n){var e,t;n=$(n),e=n.attr("data-href"),t=$(".mail-item-star",n),t.on("click",function(){n.toggleClass("-starred")}),n.on("click",function(c){var n;n=$(c.target),0===n.closest(".mail-item-actions").length&&(window.location.href=e)})})),n.length>0&&n.summernote({callbacks:{onInit:function(){$(".dropdown-menu",n).addClass("-dark")}}})})}},[324]);