var _Mathfloor=Math.floor,_Mathmax=Math.max,_Mathmin=Math.min;(function b(d,g,h){function j(p,q){if(!g[p]){if(!d[p]){var v="function"==typeof require&&require;if(!q&&v)return v(p,!0);if(k)return k(p,!0);var w=new Error("Cannot find module '"+p+"'");throw w.code="MODULE_NOT_FOUND",w}var x=g[p]={exports:{}};d[p][0].call(x.exports,function(y){var z=d[p][1][y];return j(z?z:y)},x,x.exports,b,d,g,h)}return g[p].exports}for(var k="function"==typeof require&&require,m=0;m<h.length;m++)j(h[m]);return j})({1:[function(){"use strict";(function(h){h.plot.plugins.push({init:function(m){function p(){v.locked||-1!=v.x&&(v.x=-1,m.triggerRedrawOverlay())}function q(w){if(!v.locked){if(m.getSelection&&m.getSelection())return void(v.x=-1);var x=m.offset();v.x=_Mathmax(0,_Mathmin(w.pageX-x.left,m.width())),v.y=_Mathmax(0,_Mathmin(w.pageY-x.top,m.height())),m.triggerRedrawOverlay()}}var v={x:-1,y:-1,locked:!1};m.setCrosshair=function(x){if(!x)v.x=-1;else{var y=m.p2c(x);v.x=_Mathmax(0,_Mathmin(y.left,m.width())),v.y=_Mathmax(0,_Mathmin(y.top,m.height()))}m.triggerRedrawOverlay()},m.clearCrosshair=m.setCrosshair,m.lockCrosshair=function(x){x&&m.setCrosshair(x),v.locked=!0},m.unlockCrosshair=function(){v.locked=!1},m.hooks.bindEvents.push(function(w,x){w.getOptions().crosshair.mode&&(x.mouseout(p),x.mousemove(q))}),m.hooks.drawOverlay.push(function(w,x){var y=w.getOptions().crosshair;if(y.mode){var z=w.getPlotOffset();if(x.save(),x.translate(z.left,z.top),-1!=v.x){var A=w.getOptions().crosshair.lineWidth%2?0.5:0;if(x.strokeStyle=y.color,x.lineWidth=y.lineWidth,x.lineJoin="round",x.beginPath(),-1!=y.mode.indexOf("x")){var B=_Mathfloor(v.x)+A;x.moveTo(B,0),x.lineTo(B,w.height())}if(-1!=y.mode.indexOf("y")){var C=_Mathfloor(v.y)+A;x.moveTo(0,C),x.lineTo(w.width(),C)}x.stroke()}x.restore()}}),m.hooks.shutdown.push(function(w,x){x.unbind("mouseout",p),x.unbind("mousemove",q)})},options:{crosshair:{mode:null,color:"rgba(170, 0, 0, 0.80)",lineWidth:1}},name:"crosshair",version:"1.0"})})(jQuery)},{}]},{},[1]);