var _Mathabs=Math.abs,_Mathmax=Math.max;(function b(c,d,g){function h(m,p){if(!d[m]){if(!c[m]){var q="function"==typeof require&&require;if(!p&&q)return q(m,!0);if(j)return j(m,!0);var v=new Error("Cannot find module '"+m+"'");throw v.code="MODULE_NOT_FOUND",v}var w=d[m]={exports:{}};c[m][0].call(w.exports,function(y){var z=c[m][1][y];return h(z?z:y)},w,w.exports,b,c,d,g)}return d[m].exports}for(var j="function"==typeof require&&require,k=0;k<g.length;k++)h(g[k]);return h})({1:[function(){"use strict";var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(h){return typeof h}:function(h){return h&&"function"==typeof Symbol&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h};(function h(j,k,m){function p(w,y){if(!k[w]){if(!j[w]){var z="function"==typeof jsRequire&&jsRequire;if(!y&&z)return z(w,!0);if(q)return q(w,!0);var A=new Error("Cannot find module '"+w+"'");throw A.code="MODULE_NOT_FOUND",A}var B=k[w]={exports:{}};j[w][0].call(B.exports,function(C){var D=j[w][1][C];return p(D?D:C)},B,B.exports,h,j,k,m)}return k[w].exports}for(var q="function"==typeof jsRequire&&jsRequire,v=0;v<m.length;v++)p(m[v]);return p})({1:[function(h,j){"use strict";function m(w){w.fn.perfectScrollbar=function(y){return this.each(function(){if("object"===("undefined"==typeof y?"undefined":g(y))||"undefined"==typeof y){q.get(this)||p.initialize(this,y)}else{var A=y;"update"===A?p.update(this):"destroy"===A&&p.destroy(this)}})}}var p=h("../main"),q=h("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],m);else{var v=window.jQuery?window.jQuery:window.$;"undefined"!=typeof v&&m(v)}j.exports=m},{"../main":7,"../plugin/instances":18}],2:[function(h,j,k){"use strict";function m(q,v){var w=q.className.split(" ");0>w.indexOf(v)&&w.push(v),q.className=w.join(" ")}function p(q,v){var w=q.className.split(" "),y=w.indexOf(v);0<=y&&w.splice(y,1),q.className=w.join(" ")}k.add=function(q,v){q.classList?q.classList.add(v):m(q,v)},k.remove=function(q,v){q.classList?q.classList.remove(v):p(q,v)},k.list=function(q){return q.classList?Array.prototype.slice.apply(q.classList):q.className.split(" ")}},{}],3:[function(h,j){"use strict";function m(w,y){return window.getComputedStyle(w)[y]}function p(w,y,z){return"number"==typeof z&&(z=z.toString()+"px"),w.style[y]=z,w}function q(w,y){for(var z in y){var A=y[z];"number"==typeof A&&(A=A.toString()+"px"),w.style[z]=A}return w}var v={};v.e=function(w,y){var z=document.createElement(w);return z.className=y,z},v.appendTo=function(w,y){return y.appendChild(w),w},v.css=function(w,y,z){return"object"===("undefined"==typeof y?"undefined":g(y))?q(w,y):"undefined"==typeof z?m(w,y):p(w,y,z)},v.matches=function(w,y){if("undefined"!=typeof w.matches)return w.matches(y);return"undefined"==typeof w.matchesSelector?"undefined"==typeof w.webkitMatchesSelector?"undefined"==typeof w.mozMatchesSelector?"undefined"==typeof w.msMatchesSelector?void 0:w.msMatchesSelector(y):w.mozMatchesSelector(y):w.webkitMatchesSelector(y):w.matchesSelector(y)},v.remove=function(w){"undefined"==typeof w.remove?w.parentNode&&w.parentNode.removeChild(w):w.remove()},v.queryChildren=function(w,y){return Array.prototype.filter.call(w.childNodes,function(z){return v.matches(z,y)})},j.exports=v},{}],4:[function(h,j){"use strict";var m=function(v){this.element=v,this.events={}};m.prototype.bind=function(q,v){"undefined"==typeof this.events[q]&&(this.events[q]=[]),this.events[q].push(v),this.element.addEventListener(q,v,!1)},m.prototype.unbind=function(q,v){this.events[q]=this.events[q].filter(function(y){return"undefined"!=typeof v&&y!==v||(this.element.removeEventListener(q,y,!1),!1)},this)},m.prototype.unbindAll=function(){for(var q in this.events)this.unbind(q)};var p=function(){this.eventElements=[]};p.prototype.eventElement=function(q){var v=this.eventElements.filter(function(w){return w.element===q})[0];return"undefined"==typeof v&&(v=new m(q),this.eventElements.push(v)),v},p.prototype.bind=function(q,v,w){this.eventElement(q).bind(v,w)},p.prototype.unbind=function(q,v,w){this.eventElement(q).unbind(v,w)},p.prototype.unbindAll=function(){for(var q=0;q<this.eventElements.length;q++)this.eventElements[q].unbindAll()},p.prototype.once=function(q,v,w){var y=this.eventElement(q);y.bind(v,function A(B){y.unbind(v,A),w(B)})},j.exports=p},{}],5:[function(h,j){"use strict";j.exports=function(){function m(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return m()+m()+"-"+m()+"-"+m()+"-"+m()+"-"+m()+m()+m()}}()},{}],6:[function(h,j,k){"use strict";var m=h("./class"),p=h("./dom"),q=k.toInt=function(w){return parseInt(w,10)||0},v=k.clone=function(w){if(!w)return null;if(w.constructor===Array)return w.map(v);if("object"===("undefined"==typeof w?"undefined":g(w))){var y={};for(var z in w)y[z]=v(w[z]);return y}return w};k.extend=function(w,y){var z=v(w);for(var A in y)z[A]=v(y[A]);return z},k.isEditable=function(w){return p.matches(w,"input,[contenteditable]")||p.matches(w,"select,[contenteditable]")||p.matches(w,"textarea,[contenteditable]")||p.matches(w,"button,[contenteditable]")},k.removePsClasses=function(w){for(var A,y=m.list(w),z=0;z<y.length;z++)A=y[z],0===A.indexOf("ps-")&&m.remove(w,A)},k.outerWidth=function(w){return q(p.css(w,"width"))+q(p.css(w,"paddingLeft"))+q(p.css(w,"paddingRight"))+q(p.css(w,"borderLeftWidth"))+q(p.css(w,"borderRightWidth"))},k.startScrolling=function(w,y){m.add(w,"ps-in-scrolling"),"undefined"==typeof y?(m.add(w,"ps-x"),m.add(w,"ps-y")):m.add(w,"ps-"+y)},k.stopScrolling=function(w,y){m.remove(w,"ps-in-scrolling"),"undefined"==typeof y?(m.remove(w,"ps-x"),m.remove(w,"ps-y")):m.remove(w,"ps-"+y)},k.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(h,j){"use strict";var m=h("./plugin/destroy"),p=h("./plugin/initialize"),q=h("./plugin/update");j.exports={initialize:p,update:q,destroy:m}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(h,j){"use strict";j.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(h,j){"use strict";var m=h("../lib/helper"),p=h("../lib/dom"),q=h("./instances");j.exports=function(v){var w=q.get(v);w&&(w.event.unbindAll(),p.remove(w.scrollbarX),p.remove(w.scrollbarY),p.remove(w.scrollbarXRail),p.remove(w.scrollbarYRail),m.removePsClasses(v),q.remove(v))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(h,j){"use strict";function m(w,y){function z(B){return B.getBoundingClientRect()}var A=function(C){C.stopPropagation()};y.event.bind(y.scrollbarY,"click",A),y.event.bind(y.scrollbarYRail,"click",function(B){var C=B.pageY-window.pageYOffset-z(y.scrollbarYRail).top,D=C>y.scrollbarYTop?1:-1;v(w,"top",w.scrollTop+D*y.containerHeight),q(w),B.stopPropagation()}),y.event.bind(y.scrollbarX,"click",A),y.event.bind(y.scrollbarXRail,"click",function(B){var C=B.pageX-window.pageXOffset-z(y.scrollbarXRail).left,D=C>y.scrollbarXLeft?1:-1;v(w,"left",w.scrollLeft+D*y.containerWidth),q(w),B.stopPropagation()})}var p=h("../instances"),q=h("../update-geometry"),v=h("../update-scroll");j.exports=function(w){var y=p.get(w);m(w,y)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(h,j){"use strict";function m(A,B){function C(H){var I=D+H*B.railXRatio,J=_Mathmax(0,B.scrollbarXRail.getBoundingClientRect().left)+B.railXRatio*(B.railXWidth-B.scrollbarXWidth);B.scrollbarXLeft=0>I?0:I>J?J:I;var K=q.toInt(B.scrollbarXLeft*(B.contentWidth-B.containerWidth)/(B.containerWidth-B.railXRatio*B.scrollbarXWidth))-B.negativeScrollAdjustment;z(A,"left",K)}var D=null,E=null,F=function(I){C(I.pageX-E),y(A),I.stopPropagation(),I.preventDefault()},G=function(){q.stopScrolling(A,"x"),B.event.unbind(B.ownerDocument,"mousemove",F)};B.event.bind(B.scrollbarX,"mousedown",function(H){E=H.pageX,D=q.toInt(v.css(B.scrollbarX,"left"))*B.railXRatio,q.startScrolling(A,"x"),B.event.bind(B.ownerDocument,"mousemove",F),B.event.once(B.ownerDocument,"mouseup",G),H.stopPropagation(),H.preventDefault()})}function p(A,B){function C(H){var I=D+H*B.railYRatio,J=_Mathmax(0,B.scrollbarYRail.getBoundingClientRect().top)+B.railYRatio*(B.railYHeight-B.scrollbarYHeight);B.scrollbarYTop=0>I?0:I>J?J:I;var K=q.toInt(B.scrollbarYTop*(B.contentHeight-B.containerHeight)/(B.containerHeight-B.railYRatio*B.scrollbarYHeight));z(A,"top",K)}var D=null,E=null,F=function(I){C(I.pageY-E),y(A),I.stopPropagation(),I.preventDefault()},G=function(){q.stopScrolling(A,"y"),B.event.unbind(B.ownerDocument,"mousemove",F)};B.event.bind(B.scrollbarY,"mousedown",function(H){E=H.pageY,D=q.toInt(v.css(B.scrollbarY,"top"))*B.railYRatio,q.startScrolling(A,"y"),B.event.bind(B.ownerDocument,"mousemove",F),B.event.once(B.ownerDocument,"mouseup",G),H.stopPropagation(),H.preventDefault()})}var q=h("../../lib/helper"),v=h("../../lib/dom"),w=h("../instances"),y=h("../update-geometry"),z=h("../update-scroll");j.exports=function(A){var B=w.get(A);m(A,B),p(A,B)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(h,j){"use strict";function m(z,A){function B(E,F){var G=z.scrollTop;if(0===E){if(!A.scrollbarYActive)return!1;if(0===G&&0<F||G>=A.contentHeight-A.containerHeight&&0>F)return!A.settings.wheelPropagation}var H=z.scrollLeft;if(0===F){if(!A.scrollbarXActive)return!1;if(0===H&&0>E||H>=A.contentWidth-A.containerWidth&&0<E)return!A.settings.wheelPropagation}return!0}var C=!1;A.event.bind(z,"mouseenter",function(){C=!0}),A.event.bind(z,"mouseleave",function(){C=!1});var D=!1;A.event.bind(A.ownerDocument,"keydown",function(E){if(!(E.isDefaultPrevented&&E.isDefaultPrevented()||E.defaultPrevented)){var F=q.matches(A.scrollbarX,":focus")||q.matches(A.scrollbarY,":focus");if(C||F){var G=document.activeElement?document.activeElement:A.ownerDocument.activeElement;if(G){if("IFRAME"===G.tagName)G=G.contentDocument.activeElement;else for(;G.shadowRoot;)G=G.shadowRoot.activeElement;if(p.isEditable(G))return}var H=0,I=0;switch(E.which){case 37:H=E.metaKey?-A.contentWidth:E.altKey?-A.containerWidth:-30;break;case 38:I=E.metaKey?A.contentHeight:E.altKey?A.containerHeight:30;break;case 39:H=E.metaKey?A.contentWidth:E.altKey?A.containerWidth:30;break;case 40:I=E.metaKey?-A.contentHeight:E.altKey?-A.containerHeight:-30;break;case 33:I=90;break;case 32:I=E.shiftKey?90:-90;break;case 34:I=-90;break;case 35:I=E.ctrlKey?-A.contentHeight:-A.containerHeight;break;case 36:I=E.ctrlKey?z.scrollTop:A.containerHeight;break;default:return;}y(z,"top",z.scrollTop-I),y(z,"left",z.scrollLeft+H),w(z),D=B(H,I),D&&E.preventDefault()}}})}var p=h("../../lib/helper"),q=h("../../lib/dom"),v=h("../instances"),w=h("../update-geometry"),y=h("../update-scroll");j.exports=function(z){var A=v.get(z);m(z,A)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(h,j){"use strict";function m(w,y){function z(E,F){var G=w.scrollTop;if(0===E){if(!y.scrollbarYActive)return!1;if(0===G&&0<F||G>=y.contentHeight-y.containerHeight&&0>F)return!y.settings.wheelPropagation}var H=w.scrollLeft;if(0===F){if(!y.scrollbarXActive)return!1;if(0===H&&0>E||H>=y.contentWidth-y.containerWidth&&0<E)return!y.settings.wheelPropagation}return!0}function A(E){var F=E.deltaX,G=-1*E.deltaY;return("undefined"==typeof F||"undefined"==typeof G)&&(F=-1*E.wheelDeltaX/6,G=E.wheelDeltaY/6),E.deltaMode&&1===E.deltaMode&&(F*=10,G*=10),F!==F&&G!=G&&(F=0,G=E.wheelDelta),E.shiftKey?[-G,-F]:[F,G]}function B(E,F){var G=w.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(G){if(!window.getComputedStyle(G).overflow.match(/(scroll|auto)/))return!1;var H=G.scrollHeight-G.clientHeight;if(0<H&&!(0===G.scrollTop&&0<F)&&!(G.scrollTop===H&&0>F))return!0;var I=G.scrollLeft-G.clientWidth;if(0<I&&!(0===G.scrollLeft&&0>E)&&!(G.scrollLeft===I&&0<E))return!0}return!1}function C(E){var F=A(E),G=F[0],H=F[1];B(G,H)||(D=!1,y.settings.useBothWheelAxes?y.scrollbarYActive&&!y.scrollbarXActive?(H?v(w,"top",w.scrollTop-H*y.settings.wheelSpeed):v(w,"top",w.scrollTop+G*y.settings.wheelSpeed),D=!0):y.scrollbarXActive&&!y.scrollbarYActive&&(G?v(w,"left",w.scrollLeft+G*y.settings.wheelSpeed):v(w,"left",w.scrollLeft-H*y.settings.wheelSpeed),D=!0):(v(w,"top",w.scrollTop-H*y.settings.wheelSpeed),v(w,"left",w.scrollLeft+G*y.settings.wheelSpeed)),q(w),D=D||z(G,H),D&&(E.stopPropagation(),E.preventDefault()))}var D=!1;"undefined"==typeof window.onwheel?"undefined"!=typeof window.onmousewheel&&y.event.bind(w,"mousewheel",C):y.event.bind(w,"wheel",C)}var p=h("../instances"),q=h("../update-geometry"),v=h("../update-scroll");j.exports=function(w){var y=p.get(w);m(w,y)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(h,j){"use strict";function m(v,w){w.event.bind(v,"scroll",function(){q(v)})}var p=h("../instances"),q=h("../update-geometry");j.exports=function(v){var w=p.get(v);m(v,w)}},{"../instances":18,"../update-geometry":19}],15:[function(h,j){"use strict";function m(y,z){function A(){var G=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===G.toString().length?null:G.getRangeAt(0).commonAncestorContainer}function B(){D||(D=setInterval(function(){return q.get(y)?void(w(y,"top",y.scrollTop+E.top),w(y,"left",y.scrollLeft+E.left),v(y)):void clearInterval(D)},50))}function C(){D&&(clearInterval(D),D=null),p.stopScrolling(y)}var D=null,E={top:0,left:0},F=!1;z.event.bind(z.ownerDocument,"selectionchange",function(){y.contains(A())?F=!0:(F=!1,C())}),z.event.bind(window,"mouseup",function(){F&&(F=!1,C())}),z.event.bind(window,"keyup",function(){F&&(F=!1,C())}),z.event.bind(window,"mousemove",function(G){if(F){var H={x:G.pageX,y:G.pageY},I={left:y.offsetLeft,right:y.offsetLeft+y.offsetWidth,top:y.offsetTop,bottom:y.offsetTop+y.offsetHeight};H.x<I.left+3?(E.left=-5,p.startScrolling(y,"x")):H.x>I.right-3?(E.left=5,p.startScrolling(y,"x")):E.left=0,H.y<I.top+3?(E.top=5>I.top+3-H.y?-5:-20,p.startScrolling(y,"y")):H.y>I.bottom-3?(E.top=5>H.y-I.bottom+3?5:20,p.startScrolling(y,"y")):E.top=0,0===E.top&&0===E.left?C():B()}})}var p=h("../../lib/helper"),q=h("../instances"),v=h("../update-geometry"),w=h("../update-scroll");j.exports=function(y){var z=q.get(y);m(y,z)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(h,j){"use strict";function m(y,z,A,B){function C(R,S){var T=y.scrollTop,U=y.scrollLeft,V=_Mathabs(R),W=_Mathabs(S);if(W>V){if(0>S&&T===z.contentHeight-z.containerHeight||0<S&&0===T)return!z.settings.swipePropagation;}else if(V>W&&(0>R&&U===z.contentWidth-z.containerWidth||0<R&&0===U))return!z.settings.swipePropagation;return!0}function D(R,S){w(y,"top",y.scrollTop-S),w(y,"left",y.scrollLeft-R),v(y)}function E(){P=!0}function F(){P=!1}function G(R){return R.targetTouches?R.targetTouches[0]:R}function H(R){return R.targetTouches&&1===R.targetTouches.length||R.pointerType&&"mouse"!==R.pointerType&&R.pointerType!==R.MSPOINTER_TYPE_MOUSE}function I(R){if(H(R)){Q=!0;var S=G(R);L.pageX=S.pageX,L.pageY=S.pageY,M=new Date().getTime(),null!=O&&clearInterval(O),R.stopPropagation()}}function J(R){if(!Q&&z.settings.swipePropagation&&I(R),!P&&Q&&H(R)){var S=G(R),T={pageX:S.pageX,pageY:S.pageY},U=T.pageX-L.pageX,V=T.pageY-L.pageY;D(U,V),L=T;var W=new Date().getTime(),X=W-M;0<X&&(N.x=U/X,N.y=V/X,M=W),C(U,V)&&(R.stopPropagation(),R.preventDefault())}}function K(){!P&&Q&&(Q=!1,clearInterval(O),O=setInterval(function(){return q.get(y)?N.x||N.y?0.01>_Mathabs(N.x)&&0.01>_Mathabs(N.y)?void clearInterval(O):void(D(30*N.x,30*N.y),N.x*=0.8,N.y*=0.8):void clearInterval(O):void clearInterval(O)},10))}var L={},M=0,N={},O=null,P=!1,Q=!1;A?(z.event.bind(window,"touchstart",E),z.event.bind(window,"touchend",F),z.event.bind(y,"touchstart",I),z.event.bind(y,"touchmove",J),z.event.bind(y,"touchend",K)):B&&(window.PointerEvent?(z.event.bind(window,"pointerdown",E),z.event.bind(window,"pointerup",F),z.event.bind(y,"pointerdown",I),z.event.bind(y,"pointermove",J),z.event.bind(y,"pointerup",K)):window.MSPointerEvent&&(z.event.bind(window,"MSPointerDown",E),z.event.bind(window,"MSPointerUp",F),z.event.bind(y,"MSPointerDown",I),z.event.bind(y,"MSPointerMove",J),z.event.bind(y,"MSPointerUp",K)))}var p=h("../../lib/helper"),q=h("../instances"),v=h("../update-geometry"),w=h("../update-scroll");j.exports=function(y){if(p.env.supportsTouch||p.env.supportsIePointer){var z=q.get(y);m(y,z,p.env.supportsTouch,p.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(h,j){"use strict";var m=h("../lib/helper"),p=h("../lib/class"),q=h("./instances"),v=h("./update-geometry"),w={"click-rail":h("./handler/click-rail"),"drag-scrollbar":h("./handler/drag-scrollbar"),keyboard:h("./handler/keyboard"),wheel:h("./handler/mouse-wheel"),touch:h("./handler/touch"),selection:h("./handler/selection")},y=h("./handler/native-scroll");j.exports=function(z,A){A="object"===("undefined"==typeof A?"undefined":g(A))?A:{},p.add(z,"ps-container");var B=q.add(z);B.settings=m.extend(B.settings,A),p.add(z,"ps-theme-"+B.settings.theme),B.settings.handlers.forEach(function(C){w[C](z)}),y(z),v(z)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(h,j,k){"use strict";function m(E){function F(){y.add(E,"ps-focus")}function G(){y.remove(E,"ps-focus")}var H=this;H.settings=w.clone(z),H.containerWidth=null,H.containerHeight=null,H.contentWidth=null,H.contentHeight=null,H.isRtl="rtl"===A.css(E,"direction"),H.isNegativeScroll=function(){var I=E.scrollLeft,J=null;return E.scrollLeft=-1,J=0>E.scrollLeft,E.scrollLeft=I,J}(),H.negativeScrollAdjustment=H.isNegativeScroll?E.scrollWidth-E.clientWidth:0,H.event=new B,H.ownerDocument=E.ownerDocument||document,H.scrollbarXRail=A.appendTo(A.e("div","ps-scrollbar-x-rail"),E),H.scrollbarX=A.appendTo(A.e("div","ps-scrollbar-x"),H.scrollbarXRail),H.scrollbarX.setAttribute("tabindex",0),H.event.bind(H.scrollbarX,"focus",F),H.event.bind(H.scrollbarX,"blur",G),H.scrollbarXActive=null,H.scrollbarXWidth=null,H.scrollbarXLeft=null,H.scrollbarXBottom=w.toInt(A.css(H.scrollbarXRail,"bottom")),H.isScrollbarXUsingBottom=H.scrollbarXBottom===H.scrollbarXBottom,H.scrollbarXTop=H.isScrollbarXUsingBottom?null:w.toInt(A.css(H.scrollbarXRail,"top")),H.railBorderXWidth=w.toInt(A.css(H.scrollbarXRail,"borderLeftWidth"))+w.toInt(A.css(H.scrollbarXRail,"borderRightWidth")),A.css(H.scrollbarXRail,"display","block"),H.railXMarginWidth=w.toInt(A.css(H.scrollbarXRail,"marginLeft"))+w.toInt(A.css(H.scrollbarXRail,"marginRight")),A.css(H.scrollbarXRail,"display",""),H.railXWidth=null,H.railXRatio=null,H.scrollbarYRail=A.appendTo(A.e("div","ps-scrollbar-y-rail"),E),H.scrollbarY=A.appendTo(A.e("div","ps-scrollbar-y"),H.scrollbarYRail),H.scrollbarY.setAttribute("tabindex",0),H.event.bind(H.scrollbarY,"focus",F),H.event.bind(H.scrollbarY,"blur",G),H.scrollbarYActive=null,H.scrollbarYHeight=null,H.scrollbarYTop=null,H.scrollbarYRight=w.toInt(A.css(H.scrollbarYRail,"right")),H.isScrollbarYUsingRight=H.scrollbarYRight===H.scrollbarYRight,H.scrollbarYLeft=H.isScrollbarYUsingRight?null:w.toInt(A.css(H.scrollbarYRail,"left")),H.scrollbarYOuterWidth=H.isRtl?w.outerWidth(H.scrollbarY):null,H.railBorderYWidth=w.toInt(A.css(H.scrollbarYRail,"borderTopWidth"))+w.toInt(A.css(H.scrollbarYRail,"borderBottomWidth")),A.css(H.scrollbarYRail,"display","block"),H.railYMarginHeight=w.toInt(A.css(H.scrollbarYRail,"marginTop"))+w.toInt(A.css(H.scrollbarYRail,"marginBottom")),A.css(H.scrollbarYRail,"display",""),H.railYHeight=null,H.railYRatio=null}function p(E){return E.getAttribute("data-ps-id")}function q(E,F){E.setAttribute("data-ps-id",F)}function v(E){E.removeAttribute("data-ps-id")}var w=h("../lib/helper"),y=h("../lib/class"),z=h("./default-setting"),A=h("../lib/dom"),B=h("../lib/event-manager"),C=h("../lib/guid"),D={};k.add=function(E){var F=C();return q(E,F),D[F]=new m(E),D[F]},k.remove=function(E){delete D[p(E)],v(E)},k.get=function(E){return D[p(E)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(h,j){"use strict";function m(A,B){return A.settings.minScrollbarLength&&(B=_Mathmax(B,A.settings.minScrollbarLength)),A.settings.maxScrollbarLength&&(B=Math.min(B,A.settings.maxScrollbarLength)),B}function p(A,B){var C={width:B.railXWidth};C.left=B.isRtl?B.negativeScrollAdjustment+A.scrollLeft+B.containerWidth-B.contentWidth:A.scrollLeft,B.isScrollbarXUsingBottom?C.bottom=B.scrollbarXBottom-A.scrollTop:C.top=B.scrollbarXTop+A.scrollTop,w.css(B.scrollbarXRail,C);var D={top:A.scrollTop,height:B.railYHeight};B.isScrollbarYUsingRight?B.isRtl?D.right=B.contentWidth-(B.negativeScrollAdjustment+A.scrollLeft)-B.scrollbarYRight-B.scrollbarYOuterWidth:D.right=B.scrollbarYRight-A.scrollLeft:B.isRtl?D.left=B.negativeScrollAdjustment+A.scrollLeft+2*B.containerWidth-B.contentWidth-B.scrollbarYLeft-B.scrollbarYOuterWidth:D.left=B.scrollbarYLeft+A.scrollLeft,w.css(B.scrollbarYRail,D),w.css(B.scrollbarX,{left:B.scrollbarXLeft,width:B.scrollbarXWidth-B.railBorderXWidth}),w.css(B.scrollbarY,{top:B.scrollbarYTop,height:B.scrollbarYHeight-B.railBorderYWidth})}var q=h("../lib/helper"),v=h("../lib/class"),w=h("../lib/dom"),y=h("./instances"),z=h("./update-scroll");j.exports=function(A){var B=y.get(A);B.containerWidth=A.clientWidth,B.containerHeight=A.clientHeight,B.contentWidth=A.scrollWidth,B.contentHeight=A.scrollHeight;var C;A.contains(B.scrollbarXRail)||(C=w.queryChildren(A,".ps-scrollbar-x-rail"),0<C.length&&C.forEach(function(D){w.remove(D)}),w.appendTo(B.scrollbarXRail,A)),A.contains(B.scrollbarYRail)||(C=w.queryChildren(A,".ps-scrollbar-y-rail"),0<C.length&&C.forEach(function(D){w.remove(D)}),w.appendTo(B.scrollbarYRail,A)),!B.settings.suppressScrollX&&B.containerWidth+B.settings.scrollXMarginOffset<B.contentWidth?(B.scrollbarXActive=!0,B.railXWidth=B.containerWidth-B.railXMarginWidth,B.railXRatio=B.containerWidth/B.railXWidth,B.scrollbarXWidth=m(B,q.toInt(B.railXWidth*B.containerWidth/B.contentWidth)),B.scrollbarXLeft=q.toInt((B.negativeScrollAdjustment+A.scrollLeft)*(B.railXWidth-B.scrollbarXWidth)/(B.contentWidth-B.containerWidth))):B.scrollbarXActive=!1,!B.settings.suppressScrollY&&B.containerHeight+B.settings.scrollYMarginOffset<B.contentHeight?(B.scrollbarYActive=!0,B.railYHeight=B.containerHeight-B.railYMarginHeight,B.railYRatio=B.containerHeight/B.railYHeight,B.scrollbarYHeight=m(B,q.toInt(B.railYHeight*B.containerHeight/B.contentHeight)),B.scrollbarYTop=q.toInt(A.scrollTop*(B.railYHeight-B.scrollbarYHeight)/(B.contentHeight-B.containerHeight))):B.scrollbarYActive=!1,B.scrollbarXLeft>=B.railXWidth-B.scrollbarXWidth&&(B.scrollbarXLeft=B.railXWidth-B.scrollbarXWidth),B.scrollbarYTop>=B.railYHeight-B.scrollbarYHeight&&(B.scrollbarYTop=B.railYHeight-B.scrollbarYHeight),p(A,B),B.scrollbarXActive?v.add(A,"ps-active-x"):(v.remove(A,"ps-active-x"),B.scrollbarXWidth=0,B.scrollbarXLeft=0,z(A,"left",0)),B.scrollbarYActive?v.add(A,"ps-active-y"):(v.remove(A,"ps-active-y"),B.scrollbarYHeight=0,B.scrollbarYTop=0,z(A,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(h,j){"use strict";var m=h("./instances"),p,q,v=function(y){var z=document.createEvent("Event");return z.initEvent(y,!0,!0),z};j.exports=function(w,y,z){if("undefined"==typeof w)throw"You must provide an element to the update-scroll function";if("undefined"==typeof y)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof z)throw"You must provide a value to the update-scroll function";"top"===y&&0>=z&&(w.scrollTop=z=0,w.dispatchEvent(v("ps-y-reach-start"))),"left"===y&&0>=z&&(w.scrollLeft=z=0,w.dispatchEvent(v("ps-x-reach-start")));var A=m.get(w);"top"===y&&z>=A.contentHeight-A.containerHeight&&(z=A.contentHeight-A.containerHeight,1>=z-w.scrollTop?z=w.scrollTop:w.scrollTop=z,w.dispatchEvent(v("ps-y-reach-end"))),"left"===y&&z>=A.contentWidth-A.containerWidth&&(z=A.contentWidth-A.containerWidth,1>=z-w.scrollLeft?z=w.scrollLeft:w.scrollLeft=z,w.dispatchEvent(v("ps-x-reach-end"))),p||(p=w.scrollTop),q||(q=w.scrollLeft),"top"===y&&z<p&&w.dispatchEvent(v("ps-scroll-up")),"top"===y&&z>p&&w.dispatchEvent(v("ps-scroll-down")),"left"===y&&z<q&&w.dispatchEvent(v("ps-scroll-left")),"left"===y&&z>q&&w.dispatchEvent(v("ps-scroll-right")),"top"===y&&(w.scrollTop=p=z,w.dispatchEvent(v("ps-scroll-y"))),"left"===y&&(w.scrollLeft=q=z,w.dispatchEvent(v("ps-scroll-x")))}},{"./instances":18}],21:[function(h,j){"use strict";var m=h("../lib/helper"),p=h("../lib/dom"),q=h("./instances"),v=h("./update-geometry"),w=h("./update-scroll");j.exports=function(y){var z=q.get(y);z&&(z.negativeScrollAdjustment=z.isNegativeScroll?y.scrollWidth-y.clientWidth:0,p.css(z.scrollbarXRail,"display","block"),p.css(z.scrollbarYRail,"display","block"),z.railXMarginWidth=m.toInt(p.css(z.scrollbarXRail,"marginLeft"))+m.toInt(p.css(z.scrollbarXRail,"marginRight")),z.railYMarginHeight=m.toInt(p.css(z.scrollbarYRail,"marginTop"))+m.toInt(p.css(z.scrollbarYRail,"marginBottom")),p.css(z.scrollbarXRail,"display","none"),p.css(z.scrollbarYRail,"display","none"),v(y),w(y,"top",y.scrollTop),w(y,"left",y.scrollLeft),p.css(z.scrollbarXRail,"display",""),p.css(z.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1])},{}]},{},[1]);