var _Mathabs=Math.abs;(function p(c,d,h){function m(E,I){if(!d[E]){if(!c[E]){var _="function"==typeof require&&require;if(!I&&_)return _(E,!0);if(g)return g(E,!0);var A=new Error("Cannot find module '"+E+"'");throw A.code="MODULE_NOT_FOUND",A}var C=d[E]={exports:{}};c[E][0].call(C.exports,function(P){var D=c[E][1][P];return m(D?D:P)},C,C.exports,p,c,d,h)}return d[E].exports}for(var g="function"==typeof require&&require,T=0;T<h.length;T++)m(h[T]);return m})({1:[function(p,c){(function(h,m,g,T){"use strict";function E(kt,qt,Ut){return setTimeout(P(kt,Ut),qt)}function I(kt,qt,Ut){return!!Array.isArray(kt)&&(_(kt,Ut[qt],Ut),!0)}function _(kt,qt,Ut){if(kt)if(kt.forEach)kt.forEach(qt,Ut);else if(kt.length!==T)for(Lt=0;Lt<kt.length;)qt.call(Ut,kt[Lt],Lt,kt),Lt++;else for(var Lt in kt)kt.hasOwnProperty(Lt)&&qt.call(Ut,kt[Lt],Lt,kt)}function A(kt,qt,Ut){return function(){var Vt=new Error("get-stack-trace"),jt=Vt&&Vt.stack?Vt.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",Gt=h.console&&(h.console.warn||h.console.log);return Gt&&Gt.call(h.console,"DEPRECATED METHOD: "+qt+"\n"+Ut+" AT \n",jt),kt.apply(this,arguments)}}function C(kt,qt,Ut){var Vt,Lt=qt.prototype;Vt=kt.prototype=Object.create(Lt),Vt.constructor=kt,Vt._super=Lt,Ut&&Ye(Vt,Ut)}function P(kt,qt){return function(){return kt.apply(qt,arguments)}}function D(kt,qt){return typeof kt==Re?kt.apply(qt?qt[0]||T:T,qt):kt}function S(kt,qt){return kt===T?qt:kt}function N(kt,qt,Ut){_(X(qt),function(Lt){kt.addEventListener(Lt,Ut,!1)})}function O(kt,qt,Ut){_(X(qt),function(Lt){kt.removeEventListener(Lt,Ut,!1)})}function R(kt,qt){for(;kt;){if(kt==qt)return!0;kt=kt.parentNode}return!1}function z(kt,qt){return-1<kt.indexOf(qt)}function X(kt){return kt.trim().split(/\s+/g)}function Y(kt,qt,Ut){if(kt.indexOf&&!Ut)return kt.indexOf(qt);for(var Lt=0;Lt<kt.length;){if(Ut&&kt[Lt][Ut]==qt||!Ut&&kt[Lt]===qt)return Lt;Lt++}return-1}function F(kt){return Array.prototype.slice.call(kt,0)}function w(kt,qt,Ut){for(var Gt,Lt=[],Vt=[],jt=0;jt<kt.length;)Gt=qt?kt[jt][qt]:kt[jt],0>Y(Vt,Gt)&&Lt.push(kt[jt]),Vt[jt]=Gt,jt++;return Ut&&(qt?Lt=Lt.sort(function(Zt,Bt){return Zt[qt]>Bt[qt]}):Lt=Lt.sort()),Lt}function M(kt,qt){for(var Ut,Lt,Vt=qt[0].toUpperCase()+qt.slice(1),jt=0;jt<Ne.length;){if(Ut=Ne[jt],Lt=Ut?Ut+Vt:qt,Lt in kt)return Lt;jt++}return T}function H(){return Me++}function W(kt){var qt=kt.ownerDocument||kt;return qt.defaultView||qt.parentWindow||h}function k(kt,qt){var Ut=this;this.manager=kt,this.callback=qt,this.element=kt.element,this.target=kt.options.inputTarget,this.domHandler=function(Lt){D(kt.options.enable,[kt])&&Ut.handler(Lt)},this.init()}function q(kt){var qt,Ut=kt.options.inputClass;return qt=Ut?Ut:ke?ne:qe?re:We?ae:te,new qt(kt,U)}function U(kt,qt,Ut){var Lt=Ut.pointers.length,Vt=Ut.changedPointers.length,jt=qt&Ke&&0==Lt-Vt;Ut.isFirst=!!jt,Ut.isFinal=!!(qt&(Be|Je)&&0==Lt-Vt),jt&&(kt.session={}),Ut.eventType=qt,L(kt,Ut),kt.emit("hammer.input",Ut),kt.recognize(Ut),kt.session.prevInput=Ut}function L(kt,qt){var Ut=kt.session,Lt=qt.pointers,Vt=Lt.length;Ut.firstInput||(Ut.firstInput=G(qt)),1<Vt&&!Ut.firstMultiple?Ut.firstMultiple=G(qt):1===Vt&&(Ut.firstMultiple=!1);var jt=Ut.firstInput,Gt=Ut.firstMultiple,Kt=Gt?Gt.center:jt.center,Zt=qt.center=K(Lt);qt.timeStamp=Xe(),qt.deltaTime=qt.timeStamp-jt.timeStamp,qt.angle=Q(Kt,Zt),qt.distance=J(Kt,Zt),V(Ut,qt),qt.offsetDirection=B(qt.deltaX,qt.deltaY);var Bt=Z(qt.deltaTime,qt.deltaX,qt.deltaY);qt.overallVelocityX=Bt.x,qt.overallVelocityY=Bt.y,qt.overallVelocity=ze(Bt.x)>ze(Bt.y)?Bt.x:Bt.y,qt.scale=Gt?ee(Gt.pointers,Lt):1,qt.rotation=Gt?$(Gt.pointers,Lt):0,qt.maxPointers=Ut.prevInput?qt.pointers.length>Ut.prevInput.maxPointers?qt.pointers.length:Ut.prevInput.maxPointers:qt.pointers.length,j(Ut,qt);var Jt=kt.element;R(qt.srcEvent.target,Jt)&&(Jt=qt.srcEvent.target),qt.target=Jt}function V(kt,qt){var Ut=qt.center,Lt=kt.offsetDelta||{},Vt=kt.prevDelta||{},jt=kt.prevInput||{};(qt.eventType===Ke||jt.eventType===Be)&&(Vt=kt.prevDelta={x:jt.deltaX||0,y:jt.deltaY||0},Lt=kt.offsetDelta={x:Ut.x,y:Ut.y}),qt.deltaX=Vt.x+(Ut.x-Lt.x),qt.deltaY=Vt.y+(Ut.y-Lt.y)}function j(kt,qt){var Vt,jt,Gt,Kt,Ut=kt.lastInterval||qt,Lt=qt.timeStamp-Ut.timeStamp;if(qt.eventType!=Je&&(Lt>Ge||Ut.velocity===T)){var Zt=qt.deltaX-Ut.deltaX,Bt=qt.deltaY-Ut.deltaY,Jt=Z(Lt,Zt,Bt);jt=Jt.x,Gt=Jt.y,Vt=ze(Jt.x)>ze(Jt.y)?Jt.x:Jt.y,Kt=B(Zt,Bt),kt.lastInterval=qt}else Vt=Ut.velocity,jt=Ut.velocityX,Gt=Ut.velocityY,Kt=Ut.direction;qt.velocity=Vt,qt.velocityX=jt,qt.velocityY=Gt,qt.direction=Kt}function G(kt){for(var qt=[],Ut=0;Ut<kt.pointers.length;)qt[Ut]={clientX:be(kt.pointers[Ut].clientX),clientY:be(kt.pointers[Ut].clientY)},Ut++;return{timeStamp:Xe(),pointers:qt,center:K(qt),deltaX:kt.deltaX,deltaY:kt.deltaY}}function K(kt){var qt=kt.length;if(1===qt)return{x:be(kt[0].clientX),y:be(kt[0].clientY)};for(var Ut=0,Lt=0,Vt=0;Vt<qt;)Ut+=kt[Vt].clientX,Lt+=kt[Vt].clientY,Vt++;return{x:be(Ut/qt),y:be(Lt/qt)}}function Z(kt,qt,Ut){return{x:qt/kt||0,y:Ut/kt||0}}function B(kt,qt){return kt===qt?Qe:ze(kt)>=ze(qt)?0>kt?$e:et:0>qt?tt:nt}function J(kt,qt,Ut){Ut||(Ut=st);var Lt=qt[Ut[0]]-kt[Ut[0]],Vt=qt[Ut[1]]-kt[Ut[1]];return Math.sqrt(Lt*Lt+Vt*Vt)}function Q(kt,qt,Ut){Ut||(Ut=st);var Lt=qt[Ut[0]]-kt[Ut[0]],Vt=qt[Ut[1]]-kt[Ut[1]];return 180*Math.atan2(Vt,Lt)/Math.PI}function $(kt,qt){return Q(qt[1],qt[0],at)+Q(kt[1],kt[0],at)}function ee(kt,qt){return J(qt[0],qt[1],at)/J(kt[0],kt[1],at)}function te(){this.evEl=pt,this.evWin=ct,this.pressed=!1,k.apply(this,arguments)}function ne(){this.evEl=ht,this.evWin=mt,k.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function ie(){this.evTarget=vt,this.evWin=Tt,this.started=!1,k.apply(this,arguments)}function oe(kt,qt){var Ut=F(kt.touches),Lt=F(kt.changedTouches);return qt&(Be|Je)&&(Ut=w(Ut.concat(Lt),"identifier",!0)),[Ut,Lt]}function re(){this.evTarget=ft,this.targetIds={},k.apply(this,arguments)}function se(kt,qt){var Ut=F(kt.touches),Lt=this.targetIds;if(qt&(Ke|Ze)&&1===Ut.length)return Lt[Ut[0].identifier]=!0,[Ut,Ut];var Vt,jt,Gt=F(kt.changedTouches),Kt=[],Zt=this.target;if(jt=Ut.filter(function(Bt){return R(Bt.target,Zt)}),qt===Ke)for(Vt=0;Vt<jt.length;)Lt[jt[Vt].identifier]=!0,Vt++;for(Vt=0;Vt<Gt.length;)Lt[Gt[Vt].identifier]&&Kt.push(Gt[Vt]),qt&(Be|Je)&&delete Lt[Gt[Vt].identifier],Vt++;return Kt.length?[w(jt.concat(Kt),"identifier",!0),Kt]:void 0}function ae(){k.apply(this,arguments);var kt=P(this.handler,this);this.touch=new re(this.manager,kt),this.mouse=new te(this.manager,kt),this.primaryTouch=null,this.lastTouches=[]}function le(kt,qt){kt&Ke?(this.primaryTouch=qt.changedPointers[0].identifier,pe.call(this,qt)):kt&(Be|Je)&&pe.call(this,qt)}function pe(kt){var qt=kt.changedPointers[0];if(qt.identifier===this.primaryTouch){var Ut={x:qt.clientX,y:qt.clientY};this.lastTouches.push(Ut);var Lt=this.lastTouches,Vt=function(){var jt=Lt.indexOf(Ut);-1<jt&&Lt.splice(jt,1)};setTimeout(Vt,Et)}}function ce(kt){for(var qt=kt.srcEvent.clientX,Ut=kt.srcEvent.clientY,Lt=0;Lt<this.lastTouches.length;Lt++){var Vt=this.lastTouches[Lt],jt=_Mathabs(qt-Vt.x),Gt=_Mathabs(Ut-Vt.y);if(jt<=It&&Gt<=It)return!0}return!1}function ue(kt,qt){this.manager=kt,this.set(qt)}function de(kt){if(z(kt,Dt))return Dt;var qt=z(kt,St),Ut=z(kt,Nt);return qt&&Ut?Dt:qt||Ut?qt?St:Nt:z(kt,Pt)?Pt:xt}function me(kt){this.options=Ye({},this.defaults,kt||{}),this.id=H(),this.manager=null,this.options.enable=S(this.options.enable,!0),this.state=Rt,this.simultaneous={},this.requireFail=[]}function ge(kt){if(kt&Ft)return"cancel";return kt&Xt?"end":kt&zt?"move":kt&bt?"start":""}function ve(kt){if(kt==nt)return"down";return kt==tt?"up":kt==$e?"left":kt==et?"right":""}function Te(kt,qt){var Ut=qt.manager;return Ut?Ut.get(kt):kt}function ye(){me.apply(this,arguments)}function fe(){ye.apply(this,arguments),this.pX=null,this.pY=null}function Ee(){ye.apply(this,arguments)}function Ie(){me.apply(this,arguments),this._timer=null,this._input=null}function _e(){ye.apply(this,arguments)}function Ae(){ye.apply(this,arguments)}function Ce(){me.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function xe(kt,qt){return qt=qt||{},qt.recognizers=S(qt.recognizers,xe.defaults.preset),new Pe(kt,qt)}function Pe(kt,qt){this.options=Ye({},xe.defaults,qt||{}),this.options.inputTarget=this.options.inputTarget||kt,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=kt,this.input=q(this),this.touchAction=new ue(this,this.options.touchAction),De(this,!0),_(this.options.recognizers,function(Ut){var Lt=this.add(new Ut[0](Ut[1]));Ut[2]&&Lt.recognizeWith(Ut[2]),Ut[3]&&Lt.requireFailure(Ut[3])},this)}function De(kt,qt){var Ut=kt.element;if(Ut.style){var Lt;_(kt.options.cssProps,function(Vt,jt){Lt=M(Ut.style,jt),qt?(kt.oldCssProps[Lt]=Ut.style[Lt],Ut.style[Lt]=Vt):Ut.style[Lt]=kt.oldCssProps[Lt]||""}),qt||(kt.oldCssProps={})}}function Se(kt,qt){var Ut=m.createEvent("Event");Ut.initEvent(kt,!0,!0),Ut.gesture=qt,qt.target.dispatchEvent(Ut)}var Ne=["","webkit","Moz","MS","ms","o"],Oe=m.createElement("div"),Re="function",be=Math.round,ze=_Mathabs,Xe=Date.now,Ye;Ye="function"==typeof Object.assign?Object.assign:function(qt){if(qt===T||null===qt)throw new TypeError("Cannot convert undefined or null to object");for(var Vt,Ut=Object(qt),Lt=1;Lt<arguments.length;Lt++)if(Vt=arguments[Lt],Vt!==T&&null!==Vt)for(var jt in Vt)Vt.hasOwnProperty(jt)&&(Ut[jt]=Vt[jt]);return Ut};var Fe=A(function(qt,Ut,Lt){for(var Vt=Object.keys(Ut),jt=0;jt<Vt.length;)(!Lt||Lt&&qt[Vt[jt]]===T)&&(qt[Vt[jt]]=Ut[Vt[jt]]),jt++;return qt},"extend","Use `assign`."),we=A(function(qt,Ut){return Fe(qt,Ut,!0)},"merge","Use `assign`."),Me=1,He=/mobile|tablet|ip(ad|hone|od)|android/i,We="ontouchstart"in h,ke=M(h,"PointerEvent")!==T,qe=We&&He.test(navigator.userAgent),Ue="touch",Ve="mouse",Ge=25,Ke=1,Ze=2,Be=4,Je=8,Qe=1,$e=2,et=4,tt=8,nt=16,it=$e|et,ot=tt|nt,rt=it|ot,st=["x","y"],at=["clientX","clientY"];k.prototype={handler:function(){},init:function(){this.evEl&&N(this.element,this.evEl,this.domHandler),this.evTarget&&N(this.target,this.evTarget,this.domHandler),this.evWin&&N(W(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&O(this.element,this.evEl,this.domHandler),this.evTarget&&O(this.target,this.evTarget,this.domHandler),this.evWin&&O(W(this.element),this.evWin,this.domHandler)}};var lt={mousedown:Ke,mousemove:Ze,mouseup:Be},pt="mousedown",ct="mousemove mouseup";C(te,k,{handler:function(qt){var Ut=lt[qt.type];Ut&Ke&&0===qt.button&&(this.pressed=!0),Ut&Ze&&1!==qt.which&&(Ut=Be);this.pressed&&(Ut&Be&&(this.pressed=!1),this.callback(this.manager,Ut,{pointers:[qt],changedPointers:[qt],pointerType:Ve,srcEvent:qt}))}});var ut={pointerdown:Ke,pointermove:Ze,pointerup:Be,pointercancel:Je,pointerout:Je},dt={2:Ue,3:"pen",4:Ve,5:"kinect"},ht="pointerdown",mt="pointermove pointerup pointercancel";h.MSPointerEvent&&!h.PointerEvent&&(ht="MSPointerDown",mt="MSPointerMove MSPointerUp MSPointerCancel"),C(ne,k,{handler:function(qt){var Ut=this.store,Lt=!1,Vt=qt.type.toLowerCase().replace("ms",""),jt=ut[Vt],Gt=dt[qt.pointerType]||qt.pointerType,Zt=Y(Ut,qt.pointerId,"pointerId");jt&Ke&&(0===qt.button||Gt==Ue)?0>Zt&&(Ut.push(qt),Zt=Ut.length-1):jt&(Be|Je)&&(Lt=!0);0>Zt||(Ut[Zt]=qt,this.callback(this.manager,jt,{pointers:Ut,changedPointers:[qt],pointerType:Gt,srcEvent:qt}),Lt&&Ut.splice(Zt,1))}});var gt={touchstart:Ke,touchmove:Ze,touchend:Be,touchcancel:Je},vt="touchstart",Tt="touchstart touchmove touchend touchcancel";C(ie,k,{handler:function(qt){var Ut=gt[qt.type];if(Ut===Ke&&(this.started=!0),!!this.started){var Lt=oe.call(this,qt,Ut);Ut&(Be|Je)&&0==Lt[0].length-Lt[1].length&&(this.started=!1),this.callback(this.manager,Ut,{pointers:Lt[0],changedPointers:Lt[1],pointerType:Ue,srcEvent:qt})}}});var yt={touchstart:Ke,touchmove:Ze,touchend:Be,touchcancel:Je},ft="touchstart touchmove touchend touchcancel";C(re,k,{handler:function(qt){var Ut=yt[qt.type],Lt=se.call(this,qt,Ut);Lt&&this.callback(this.manager,Ut,{pointers:Lt[0],changedPointers:Lt[1],pointerType:Ue,srcEvent:qt})}});var Et=2500,It=25;C(ae,k,{handler:function(qt,Ut,Lt){var Vt=Lt.pointerType==Ue,jt=Lt.pointerType==Ve;if(!(jt&&Lt.sourceCapabilities&&Lt.sourceCapabilities.firesTouchEvents)){if(Vt)le.call(this,Ut,Lt);else if(jt&&ce.call(this,Lt))return;this.callback(qt,Ut,Lt)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var _t=M(Oe.style,"touchAction"),At=_t!==T,Ct="compute",xt="auto",Pt="manipulation",Dt="none",St="pan-x",Nt="pan-y",Ot=function(){if(!At)return!1;var kt={},qt=h.CSS&&h.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(Ut){kt[Ut]=!qt||h.CSS.supports("touch-action",Ut)}),kt}();ue.prototype={set:function(kt){kt==Ct&&(kt=this.compute()),At&&this.manager.element.style&&Ot[kt]&&(this.manager.element.style[_t]=kt),this.actions=kt.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var kt=[];return _(this.manager.recognizers,function(qt){D(qt.options.enable,[qt])&&(kt=kt.concat(qt.getTouchAction()))}),de(kt.join(" "))},preventDefaults:function(kt){var qt=kt.srcEvent,Ut=kt.offsetDirection;if(this.manager.session.prevented)return void qt.preventDefault();var Lt=this.actions,Vt=z(Lt,Dt)&&!Ot[Dt],jt=z(Lt,Nt)&&!Ot[Nt],Gt=z(Lt,St)&&!Ot[St];if(Vt){var Kt=1===kt.pointers.length,Zt=2>kt.distance,Bt=250>kt.deltaTime;if(Kt&&Zt&&Bt)return}return Gt&&jt?void 0:Vt||jt&&Ut&it||Gt&&Ut&ot?this.preventSrc(qt):void 0},preventSrc:function(kt){this.manager.session.prevented=!0,kt.preventDefault()}};var Rt=1,bt=2,zt=4,Xt=8,Yt=Xt,Ft=16,wt=32;me.prototype={defaults:{},set:function(kt){return Ye(this.options,kt),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(kt){if(I(kt,"recognizeWith",this))return this;var qt=this.simultaneous;return kt=Te(kt,this),qt[kt.id]||(qt[kt.id]=kt,kt.recognizeWith(this)),this},dropRecognizeWith:function(kt){return I(kt,"dropRecognizeWith",this)?this:(kt=Te(kt,this),delete this.simultaneous[kt.id],this)},requireFailure:function(kt){if(I(kt,"requireFailure",this))return this;var qt=this.requireFail;return kt=Te(kt,this),-1===Y(qt,kt)&&(qt.push(kt),kt.requireFailure(this)),this},dropRequireFailure:function(kt){if(I(kt,"dropRequireFailure",this))return this;kt=Te(kt,this);var qt=Y(this.requireFail,kt);return-1<qt&&this.requireFail.splice(qt,1),this},hasRequireFailures:function(){return 0<this.requireFail.length},canRecognizeWith:function(kt){return!!this.simultaneous[kt.id]},emit:function(kt){function qt(Vt){Ut.manager.emit(Vt,kt)}var Ut=this,Lt=this.state;Lt<Xt&&qt(Ut.options.event+ge(Lt)),qt(Ut.options.event),kt.additionalEvent&&qt(kt.additionalEvent),Lt>=Xt&&qt(Ut.options.event+ge(Lt))},tryEmit:function(kt){return this.canEmit()?this.emit(kt):void(this.state=wt)},canEmit:function(){for(var kt=0;kt<this.requireFail.length;){if(!(this.requireFail[kt].state&(wt|Rt)))return!1;kt++}return!0},recognize:function(kt){var qt=Ye({},kt);return D(this.options.enable,[this,qt])?void(this.state&(Yt|Ft|wt)&&(this.state=Rt),this.state=this.process(qt),this.state&(bt|zt|Xt|Ft)&&this.tryEmit(qt)):(this.reset(),void(this.state=wt))},process:function(){},getTouchAction:function(){},reset:function(){}},C(ye,me,{defaults:{pointers:1},attrTest:function(kt){var qt=this.options.pointers;return 0===qt||kt.pointers.length===qt},process:function(kt){var qt=this.state,Ut=kt.eventType,Lt=qt&(bt|zt),Vt=this.attrTest(kt);if(Lt&&(Ut&Je||!Vt))return qt|Ft;return Lt||Vt?Ut&Be?qt|Xt:qt&bt?qt|zt:bt:wt}}),C(fe,ye,{defaults:{event:"pan",threshold:10,pointers:1,direction:rt},getTouchAction:function(){var kt=this.options.direction,qt=[];return kt&it&&qt.push(Nt),kt&ot&&qt.push(St),qt},directionTest:function(kt){var qt=this.options,Ut=!0,Lt=kt.distance,Vt=kt.direction,jt=kt.deltaX,Gt=kt.deltaY;return Vt&qt.direction||(qt.direction&it?(Vt=0===jt?Qe:0>jt?$e:et,Ut=jt!=this.pX,Lt=_Mathabs(kt.deltaX)):(Vt=0===Gt?Qe:0>Gt?tt:nt,Ut=Gt!=this.pY,Lt=_Mathabs(kt.deltaY))),kt.direction=Vt,Ut&&Lt>qt.threshold&&Vt&qt.direction},attrTest:function(kt){return ye.prototype.attrTest.call(this,kt)&&(this.state&bt||!(this.state&bt)&&this.directionTest(kt))},emit:function(kt){this.pX=kt.deltaX,this.pY=kt.deltaY;var qt=ve(kt.direction);qt&&(kt.additionalEvent=this.options.event+qt),this._super.emit.call(this,kt)}}),C(Ee,ye,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Dt]},attrTest:function(kt){return this._super.attrTest.call(this,kt)&&(_Mathabs(kt.scale-1)>this.options.threshold||this.state&bt)},emit:function(kt){if(1!==kt.scale){var qt=1>kt.scale?"in":"out";kt.additionalEvent=this.options.event+qt}this._super.emit.call(this,kt)}}),C(Ie,me,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[xt]},process:function(kt){var qt=this.options,Ut=kt.pointers.length===qt.pointers,Lt=kt.distance<qt.threshold,Vt=kt.deltaTime>qt.time;if(this._input=kt,!Lt||!Ut||kt.eventType&(Be|Je)&&!Vt)this.reset();else if(kt.eventType&Ke)this.reset(),this._timer=E(function(){this.state=Yt,this.tryEmit()},qt.time,this);else if(kt.eventType&Be)return Yt;return wt},reset:function(){clearTimeout(this._timer)},emit:function(kt){this.state!==Yt||(kt&&kt.eventType&Be?this.manager.emit(this.options.event+"up",kt):(this._input.timeStamp=Xe(),this.manager.emit(this.options.event,this._input)))}}),C(_e,ye,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Dt]},attrTest:function(kt){return this._super.attrTest.call(this,kt)&&(_Mathabs(kt.rotation)>this.options.threshold||this.state&bt)}}),C(Ae,ye,{defaults:{event:"swipe",threshold:10,velocity:0.3,direction:it|ot,pointers:1},getTouchAction:function(){return fe.prototype.getTouchAction.call(this)},attrTest:function(kt){var Ut,qt=this.options.direction;return qt&(it|ot)?Ut=kt.overallVelocity:qt&it?Ut=kt.overallVelocityX:qt&ot&&(Ut=kt.overallVelocityY),this._super.attrTest.call(this,kt)&&qt&kt.offsetDirection&&kt.distance>this.options.threshold&&kt.maxPointers==this.options.pointers&&ze(Ut)>this.options.velocity&&kt.eventType&Be},emit:function(kt){var qt=ve(kt.offsetDirection);qt&&this.manager.emit(this.options.event+qt,kt),this.manager.emit(this.options.event,kt)}}),C(Ce,me,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Pt]},process:function(kt){var qt=this.options,Ut=kt.pointers.length===qt.pointers,Lt=kt.distance<qt.threshold,Vt=kt.deltaTime<qt.time;if(this.reset(),kt.eventType&Ke&&0===this.count)return this.failTimeout();if(Lt&&Vt&&Ut){if(kt.eventType!=Be)return this.failTimeout();var jt=!this.pTime||kt.timeStamp-this.pTime<qt.interval,Gt=!this.pCenter||J(this.pCenter,kt.center)<qt.posThreshold;this.pTime=kt.timeStamp,this.pCenter=kt.center,Gt&&jt?this.count+=1:this.count=1,this._input=kt;var Kt=this.count%qt.taps;if(0==Kt)return this.hasRequireFailures()?(this._timer=E(function(){this.state=Yt,this.tryEmit()},qt.interval,this),bt):Yt}return wt},failTimeout:function(){return this._timer=E(function(){this.state=wt},this.options.interval,this),wt},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Yt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),xe.VERSION="2.0.7",xe.defaults={domEvents:!1,touchAction:Ct,enable:!0,inputTarget:null,inputClass:null,preset:[[_e,{enable:!1}],[Ee,{enable:!1},["rotate"]],[Ae,{direction:it}],[fe,{direction:it},["swipe"]],[Ce],[Ce,{event:"doubletap",taps:2},["tap"]],[Ie]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Ht=2;Pe.prototype={set:function(kt){return Ye(this.options,kt),kt.touchAction&&this.touchAction.update(),kt.inputTarget&&(this.input.destroy(),this.input.target=kt.inputTarget,this.input.init()),this},stop:function(kt){this.session.stopped=kt?Ht:1},recognize:function(kt){var qt=this.session;if(!qt.stopped){this.touchAction.preventDefaults(kt);var Ut,Lt=this.recognizers,Vt=qt.curRecognizer;(!Vt||Vt&&Vt.state&Yt)&&(Vt=qt.curRecognizer=null);for(var jt=0;jt<Lt.length;)Ut=Lt[jt],qt.stopped!==Ht&&(!Vt||Ut==Vt||Ut.canRecognizeWith(Vt))?Ut.recognize(kt):Ut.reset(),!Vt&&Ut.state&(bt|zt|Xt)&&(Vt=qt.curRecognizer=Ut),jt++}},get:function(kt){if(kt instanceof me)return kt;for(var qt=this.recognizers,Ut=0;Ut<qt.length;Ut++)if(qt[Ut].options.event==kt)return qt[Ut];return null},add:function(kt){if(I(kt,"add",this))return this;var qt=this.get(kt.options.event);return qt&&this.remove(qt),this.recognizers.push(kt),kt.manager=this,this.touchAction.update(),kt},remove:function(kt){if(I(kt,"remove",this))return this;if(kt=this.get(kt),kt){var qt=this.recognizers,Ut=Y(qt,kt);-1!==Ut&&(qt.splice(Ut,1),this.touchAction.update())}return this},on:function(kt,qt){if(kt!==T&&qt!==T){var Ut=this.handlers;return _(X(kt),function(Lt){Ut[Lt]=Ut[Lt]||[],Ut[Lt].push(qt)}),this}},off:function(kt,qt){if(kt!==T){var Ut=this.handlers;return _(X(kt),function(Lt){qt?Ut[Lt]&&Ut[Lt].splice(Y(Ut[Lt],qt),1):delete Ut[Lt]}),this}},emit:function(kt,qt){this.options.domEvents&&Se(kt,qt);var Ut=this.handlers[kt]&&this.handlers[kt].slice();if(Ut&&Ut.length){qt.type=kt,qt.preventDefault=function(){qt.srcEvent.preventDefault()};for(var Lt=0;Lt<Ut.length;)Ut[Lt](qt),Lt++}},destroy:function(){this.element&&De(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},Ye(xe,{INPUT_START:Ke,INPUT_MOVE:Ze,INPUT_END:Be,INPUT_CANCEL:Je,STATE_POSSIBLE:Rt,STATE_BEGAN:bt,STATE_CHANGED:zt,STATE_ENDED:Xt,STATE_RECOGNIZED:Yt,STATE_CANCELLED:Ft,STATE_FAILED:wt,DIRECTION_NONE:Qe,DIRECTION_LEFT:$e,DIRECTION_RIGHT:et,DIRECTION_UP:tt,DIRECTION_DOWN:nt,DIRECTION_HORIZONTAL:it,DIRECTION_VERTICAL:ot,DIRECTION_ALL:rt,Manager:Pe,Input:k,TouchAction:ue,TouchInput:re,MouseInput:te,PointerEventInput:ne,TouchMouseInput:ae,SingleTouchInput:ie,Recognizer:me,AttrRecognizer:ye,Tap:Ce,Pan:fe,Swipe:Ae,Pinch:Ee,Rotate:_e,Press:Ie,on:N,off:O,each:_,merge:we,extend:Fe,assign:Ye,inherit:C,bindFn:P,prefixed:M});var Wt="undefined"==typeof h?"undefined"==typeof self?{}:self:h;Wt.Hammer=xe,"function"==typeof define&&define.amd?define(function(){return xe}):"undefined"!=typeof c&&c.exports?c.exports=xe:h[g]=xe})(window,document,"Hammer")},{}],2:[function(p){"use strict";p("hammerjs")},{hammerjs:1}]},{},[2]);