(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  var browser = 'other';
  var os = 'linux';

  switch (true) {
    // Chrome 1+
    case !!window.chrome && !!window.chrome.webstore:
      browser = 'chrome';
      break;

    // Firefox 1.0+
    case typeof InstallTrigger !== 'undefined':
      browser = 'firefox';
      break;

    // Internet Explorer 6-11
    case /*@cc_on!@*/false || !!document.documentMode:
      browser = 'ie';
      break;

    // Edge 20+
    case !!!document.documentMode && !!window.StyleMedia:
      browser = 'edge';
      break;

    // Safari 3.0+ "[object HTMLElementConstructor]"
    case /constructor/i.test(window.HTMLElement) || function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    }(!window['safari'] || safari.pushNotification):
      browser = 'safari';
      break;

    // Opera 8.0+
    case !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0:
      browser = 'opera';
      break;
  }

  switch (true) {
    // Windows
    case navigator.appVersion.indexOf('Windows') != -1:
      os = 'windows';
      break;

    // Mac
    case navigator.appVersion.indexOf('Mac') != -1:
      os = 'mac';
      break;
  }

  // Simple document ready implementation
  //
  function r(f) {
    /in/.test(document.readyState) ? setTimeout(r, 50, f) : f();
  }

  // Set body attributes once the browser is ready
  //
  r(function () {
    document.body.dataset.os = os;
    document.body.dataset.browser = browser;
  });
})();

},{}]},{},[1])

//# sourceMappingURL=browser.js.map
