(function b(c,d,g){function h(m,p){if(!d[m]){if(!c[m]){var q="function"==typeof require&&require;if(!p&&q)return q(m,!0);if(j)return j(m,!0);var v=new Error("Cannot find module '"+m+"'");throw v.code="MODULE_NOT_FOUND",v}var w=d[m]={exports:{}};c[m][0].call(w.exports,function(x){var y=c[m][1][x];return h(y?y:x)},w,w.exports,b,c,d,g)}return d[m].exports}for(var j="function"==typeof require&&require,k=0;k<g.length;k++)h(g[k]);return h})({1:[function(){"use strict";(function(){$(document).ready(function(){"use strict";$("#notification-light").on("click",function(){$.gritter.add({class_name:"-light",title:"Light Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-dark").on("click",function(){$.gritter.add({class_name:"-dark",title:"Dark Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-primary").on("click",function(){$.gritter.add({class_name:"-primary",title:"Primary Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-secondary").on("click",function(){$.gritter.add({class_name:"-secondary",title:"Secondary Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-success").on("click",function(){$.gritter.add({class_name:"-success",title:"Success Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-info").on("click",function(){$.gritter.add({class_name:"-info",title:"Info Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-warning").on("click",function(){$.gritter.add({class_name:"-warning",title:"Warning Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-danger").on("click",function(){$.gritter.add({class_name:"-danger",title:"Danger Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-basic").on("click",function(){$.gritter.add({class_name:"-dark",title:"Basic Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:6e3})}),$("#notification-sticky").on("click",function(){$.gritter.add({class_name:"-dark",title:"Sticky Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",sticky:!0})}),$("#notification-image").on("click",function(){$.gritter.add({class_name:"-dark",title:"Image Notification",text:"Many web page editors now use Lorem Ipsum as their model text.",image:$("#notification-image").attr("data-image")})}),$("#notification-top-right").on("click",function(){$.extend($.gritter.options,{position:"top-right"}),$.gritter.add({class_name:"-dark",title:"Top Right Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:3e3})}),$("#notification-top-left").on("click",function(){$.extend($.gritter.options,{position:"top-left"}),$.gritter.add({class_name:"-dark",title:"Top Left Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:3e3}),$.extend($.gritter.options,{position:"top-right"})}),$("#notification-bottom-left").on("click",function(){$.extend($.gritter.options,{position:"bottom-left"}),$.gritter.add({class_name:"-dark",title:"Bottom Left Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:3e3}),$.extend($.gritter.options,{position:"top-right"})}),$("#notification-bottom-right").on("click",function(){$.extend($.gritter.options,{position:"bottom-right"}),$.gritter.add({class_name:"-dark",title:"Bottom Right Notification",text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",time:3e3}),$.extend($.gritter.options,{position:"top-right"})}),$("#notification-facebook").on("click",function(){$.gritter.add({class_name:"-facebook -social",title:"You have 3 new comments!",text:"Click here to read your newly received post comments.",image:$("#notification-facebook").attr("data-image")})}),$("#notification-twitter").on("click",function(){$.gritter.add({class_name:"-twitter -social",title:"You have 4 new followers!",text:"Click here to see who has started following you.",image:$("#notification-twitter").attr("data-image")})}),$("#notification-google-plus").on("click",function(){$.gritter.add({class_name:"-google-plus -social",title:"You have a new +1!",text:"Click here to see who was interested in what you posted.",image:$("#notification-google-plus").attr("data-image")})}),$("#notification-dribbble").on("click",function(){$.gritter.add({class_name:"-dribbble -social",title:"You have 2 new comments!",text:"Click here to read your newly received artwork comments.",image:$("#notification-dribbble").attr("data-image")})}),$("#notification-behance").on("click",function(){$.gritter.add({class_name:"-behance -social",title:"You have 3 new likes!",text:"Click here to see who liked the new artwork you've uploaded.",image:$("#notification-behance").attr("data-image")})}),$("#notification-flickr").on("click",function(){$.gritter.add({class_name:"-flickr -social",title:"You have 5 new likes!",text:"Click here to see who liked the new photo you've uploaded.",image:$("#notification-flickr").attr("data-image")})}),$("#notification-linkedin").on("click",function(){$.gritter.add({class_name:"-linkedin -social",title:"You have 5 new profile visits!",text:"Click here to see who was interested in your profile.",image:$("#notification-linkedin").attr("data-image")})}),$("#notification-youtube").on("click",function(){$.gritter.add({class_name:"-youtube -social",title:"You have 4 new subscribers!",text:"Click here to see who your new subscribers are.",image:$("#notification-youtube").attr("data-image")})}),$("#notification-pinterest").on("click",function(){$.gritter.add({class_name:"-pinterest -social",title:"You have 3 new likes!",text:"Click here to see who liked the new photo you've uploaded.",image:$("#notification-pinterest").attr("data-image")})}),$("#notification-github").on("click",function(){$.gritter.add({class_name:"-github -social",title:"You have a new pull request!",text:"Click here to review the code of the new pull request.",image:$("#notification-github").attr("data-image")})}),$("#notification-tumblr").on("click",function(){$.gritter.add({class_name:"-tumblr -social",title:"You have 35 new likes!",text:"Click here to see who liked the new photo you've uploaded.",image:$("#notification-tumblr").attr("data-image")})}),$("#notification-twitch").on("click",function(){$.gritter.add({class_name:"-twitch -social",title:"You have 35 new subscribers!",text:"Click here to see who your new subscribers are.",image:$("#notification-twitch").attr("data-image")})}),$("#notification-envato").on("click",function(){$.gritter.add({class_name:"-envato -social",title:"You have 5 new sales!",text:"Click here to review your account balance.",image:$("#notification-envato").attr("data-image")})})})}).call(void 0)},{}]},{},[1]);