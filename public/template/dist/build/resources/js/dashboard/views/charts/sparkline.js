var _Mathfloor=Math.floor;(function b(c,d,g){function h(m,p){if(!d[m]){if(!c[m]){var q="function"==typeof require&&require;if(!p&&q)return q(m,!0);if(j)return j(m,!0);var v=new Error("Cannot find module '"+m+"'");throw v.code="MODULE_NOT_FOUND",v}var w=d[m]={exports:{}};c[m][0].call(w.exports,function(x){var y=c[m][1][x];return h(y?y:x)},w,w.exports,b,c,d,g)}return d[m].exports}for(var j="function"==typeof require&&require,k=0;k<g.length;k++)h(g[k]);return h})({1:[function(){"use strict";(function(){$(document).ready(function(){"use strict";var g,h;g=function(){var k,m,p;m=1280>$(window).width(),p=m?_Mathfloor($("#chart-sales-status").parent().width()):150,k=[45,56,76,48,78,99,70,90,79,102,74,90,98,120,90,102,74,90,98,120,90,77,103,105,120],$("#chart-sales-status").sparkline(k,{type:"bar",height:50,width:"100%",barWidth:4*p/6/k.length,barSpacing:2*p/6/k.length,barColor:hexToRGBA(colors.green,0.5),negBarColor:hexToRGBA(colors.red,0.5),spotColor:hexToRGBA(colors.green,0.5),minSpotColor:hexToRGBA(colors.green,0.5),maxSpotColor:hexToRGBA(colors.green,0.5)}),p=m?_Mathfloor($("#chart-users-status").parent().width()):150,$("#chart-users-status").sparkline([40,60,30,50,80,100,70,90],{type:"line",height:50,width:p,lineWidth:2,lineColor:hexToRGBA(colors.blue,0.5),fillColor:"transparent",spotColor:hexToRGBA(colors.blue,0.5),minSpotColor:hexToRGBA(colors.blue,0.5),maxSpotColor:hexToRGBA(colors.blue,0.5),highlightSpotColor:hexToRGBA(colors.blue,0.5),highlightLineColor:hexToRGBA(colors.blue,0.5)}),p=m?_Mathfloor($("#chart-impressions-status").parent().width()):150,$("#chart-impressions-status").sparkline([440,400,460,400,250,330,350,370],{type:"line",height:50,width:p,lineWidth:2,lineColor:hexToRGBA(colors.orange,0.5),fillColor:"transparent",spotColor:hexToRGBA(colors.orange,0.5),minSpotColor:hexToRGBA(colors.orange,0.5),maxSpotColor:hexToRGBA(colors.orange,0.5),highlightSpotColor:hexToRGBA(colors.orange,0.5),highlightLineColor:hexToRGBA(colors.orange,0.5)}),p=m?_Mathfloor($("#chart-downloads-status").parent().width()):150,$("#chart-downloads-status").sparkline([344,280,285,311,244,232,188],{type:"line",height:50,width:p,lineWidth:2,lineColor:hexToRGBA(colors.red,0.5),fillColor:"transparent",spotColor:hexToRGBA(colors.red,0.5),minSpotColor:hexToRGBA(colors.red,0.5),maxSpotColor:hexToRGBA(colors.red,0.5),highlightSpotColor:hexToRGBA(colors.red,0.5),highlightLineColor:hexToRGBA(colors.red,0.5)})},h=void 0,$(window).on("resize",function(){clearTimeout(h),h=setTimeout(g,500)}),g(),$("#sparkline-chart-line").sparkline([5,6,7,9,9,5,3,2,2,4,6,7],{type:"line",height:"25px",width:"80px",lineColor:hexToRGBA(colors.primary,0.5),fillColor:"transparent"}),$("#sparkline-chart-bar").sparkline([5,6,7,2,0,-4,-2,4],{type:"bar",height:"25px",width:"80px",barColor:hexToRGBA(colors.primary,0.5),negBarColor:hexToRGBA(colors.red,0.5)}),$("#sparkline-chart-tristate").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1],{type:"tristate",height:"25px",width:"80px",posBarColor:hexToRGBA(colors.green,0.5),negBarColor:hexToRGBA(colors.red,0.5),zeroBarColor:hexToRGBA(colors.primary,0.5)}),$("#sparkline-chart-discrete").sparkline([4,6,7,7,4,3,2,1,4,4,4,6,7,7,4,6,7,8,8,6,6,4],{type:"discrete",height:"25px",lineColor:hexToRGBA(colors.primary,0.5)}),$("#sparkline-chart-bullet").sparkline([10,12,12,9,7],{type:"bullet",height:"25px",width:"80px",performanceColor:hexToRGBA(colors.black,0.5),targetColor:hexToRGBA(colors.red,0.5),rangeColors:[hexToRGBA(colors.primary,0.25),hexToRGBA(colors.primary,0.5),hexToRGBA(colors.primary,0.75)]}),$("#sparkline-chart-pie").sparkline([1,1,2],{type:"pie",height:"25px",width:"25px",sliceColors:[hexToRGBA(colors.primary,0.25),hexToRGBA(colors.primary,0.5),hexToRGBA(colors.primary,0.75)]}),$("#sparkline-chart-box").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100],{type:"box",height:"25px",width:"80px",lineColor:hexToRGBA(colors.primary,0.5),boxFillColor:hexToRGBA(colors.primary,0.5),boxLineColor:hexToRGBA(colors.primary,0.25),whiskerColor:hexToRGBA(colors.primary,0.5),medianColor:hexToRGBA(colors.primary,0.5),targetColor:hexToRGBA(colors.green,0.5)}),$("#sparkline-chart-composite").sparkline("html",{type:"line",height:"25px",width:"80px"}),$("#sparkline-chart-composite").sparkline([5,6,7,9,9,5,3,2,2,4,6,7],{lineColor:hexToRGBA(colors.primary,0.5),fillColor:"transparent",composite:!0}),$("#sparkline-chart-composite").sparkline([4,5,4,5,7,8,4,3,2,1,5,7],{lineColor:hexToRGBA(colors.blue,0.5),fillColor:"transparent",composite:!0})})}).call(void 0)},{}]},{},[1]);