var _Mathmax=Math.max,_Mathmin=Math.min;(function b(c,d,h){function k(q,v){if(!d[q]){if(!c[q]){var w="function"==typeof require&&require;if(!v&&w)return w(q,!0);if(m)return m(q,!0);var y=new Error("Cannot find module '"+q+"'");throw y.code="MODULE_NOT_FOUND",y}var z=d[q]={exports:{}};c[q][0].call(z.exports,function(A){var B=c[q][1][A];return k(B?B:A)},z,z.exports,b,c,d,h)}return d[q].exports}for(var m="function"==typeof require&&require,p=0;p<h.length;p++)k(h[p]);return k})({1:[function(){"use strict";(function(h){"use strict";function m(C){for(var G,D=h.plot.plugins,E=0,F=D.length;E<F;E++)if(G=D[E],G.name===C)return!0;return!1}var y={NOT_PLOTTED_YET:0,PLOTTED_SOME_FRAMES:1,PLOTTED_LAST_FRAME:2},z={none:function(D,E,F,G){if(G===y.NOT_PLOTTED_YET)for(var H=0,I=D.data.length;H<I;H++)D.data[H][F.valueIndex]=D.dataOrg[H][F.valueIndex]},linear:function(D,E,F){var G=_Mathmin(E/D.grow.duration,1),H=D.yaxis;D.bars&&D.bars.show&&D.bars.horizontal&&(H=D.xaxis);for(var K,I=0,J=D.data.length;I<J;I++)K=D.dataOrg[I][F.valueIndex],null===K?D.data[I][F.valueIndex]=null:"up"===F.stepDirection?D.data[I][F.valueIndex]=K*G:"down"===F.stepDirection&&(D.data[I][F.valueIndex]=K+(H.max-K)*(1-G))},maximum:function(D,E,F){var G=_Mathmin(E/D.grow.duration,1),H=D.yaxis;D.bars&&D.bars.show&&D.bars.horizontal&&(H=D.xaxis);for(var O,I=H.max*G,J=H.min*G,K=H.max*(1-G),L=H.min*(1-G),M=0,N=D.data.length;M<N;M++)O=D.dataOrg[M][F.valueIndex],null===O?D.data[M][F.valueIndex]=null:"up"===F.stepDirection?0<=O?D.data[M][F.valueIndex]=_Mathmin(O,I):D.data[M][F.valueIndex]=_Mathmax(O,J):"down"===F.stepDirection&&(0<=O?D.data[M][F.valueIndex]=_Mathmax(O,K):D.data[M][F.valueIndex]=_Mathmin(O,L))},delay:function(D,E,F){if(E>=D.grow.duration)for(var G=0,H=D.data.length;G<H;G++)D.data[G][F.valueIndex]=D.dataOrg[G][F.valueIndex]},reanimate:function(D,E,F){for(var J,G=_Mathmin(E/D.grow.duration,1),H=0,I=D.data.length;H<I;H++)if(J=D.dataOrg[H][F.valueIndex],null===J)D.data[H][F.valueIndex]=null;else if(D.dataOld){var K=D.dataOld[H][F.valueIndex];D.data[H][F.valueIndex]=K+(J-K)*G}}},A,B;(function(){for(var C=window.requestAnimationFrame,D=window.cancelAnimationFrame,E=+new Date,F=["ms","moz","webkit","o"],G=0;G<F.length&&!C;++G)C=window[F[G]+"RequestAnimationFrame"],D=window[F[G]+"CancelAnimationFrame"]||window[F[G]+"CancelRequestAnimationFrame"];C||(C=function(I){var J=+new Date,K=_Mathmax(0,16-(J-E)),L=window.setTimeout(function(){I(J+K)},K);return E=J+K,L}),D||(D=function(I){clearTimeout(I)}),A=C,B=D})(),h.plot.plugins.push({init:function(C){function F(V){U=V.getOptions(),!0===U.series.grow.active&&(G(V.getData(),U),N=0|+new Date,R=A(I)),M=!1}function G(V,W){for(var _,X=W.series.grow.duration,Y=0,Z=V.length;Y<Z;Y++)_=V[Y].grow.duration,X<_&&(X=_);W.series.grow.duration=X}function I(){O=0|+new Date-N,null==T&&(T=[]);for(var V=0,W=T.length;V<W;V++)for(var X=T[V],Y=X.dataOld&&0<X.dataOld.length,Z=0,_=X.grow.growings.length;Z<_;Z++){var ba,aa=X.grow.growings[Z];Y&&"reinit"!==aa.reanimate?("function"==typeof aa.reanimate&&(ba=aa.reanimate),ba="continue"===aa.reanimate?z.reanimate:z.none):"function"==typeof aa.stepMode?ba=aa.stepMode:ba=z[aa.stepMode]||z.none,ba(X,O,aa,P)}S.setData(T),S.draw(),P===y.NOT_PLOTTED_YET&&(P=y.PLOTTED_SOME_FRAMES),O<U.series.grow.duration?R=A(I):(P=y.PLOTTED_LAST_FRAME,R=null,S.getPlaceholder().trigger("growFinished"))}function J(){if(R){for(var W,V=0;V<T.length;V++)W=T[V],W.data=h.extend(!0,[],W.dataOrg);C.setData(T),C.setupGrid()}}var L=!1,M=!0,N=0,O=0,P=y.NOT_PLOTTED_YET,Q=[],R,S=C,T=null,U=null;C.hooks.drawSeries.push(function(V){U=V.getOptions();var W=U.series.grow.valueIndex;if(!0===U.series.grow.active){var X=!1,Y=0;if(U.series.grow.reanimate&&P===y.PLOTTED_LAST_FRAME){L=!1,P=y.NOT_PLOTTED_YET,N=0,T=V.getData();var Z=_Mathmin(T.length,Q.length);for(Y=0;Y<Z;Y++)T[Y].dataOld=Q[Y];X=!0,M=!0}if(!L){for(X||(T=V.getData()),P=y.NOT_PLOTTED_YET,N=0|+new Date,Q=[],Y=0;Y<T.length;Y++){var _=T[Y];if(_.dataOrg=h.extend(!0,[],_.data),Q.push(_.dataOrg),!X){W=_.grow.valueIndex;for(var aa=0;aa<_.data.length;aa++)_.data[aa][W]=null===_.dataOrg[aa][W]?null:0}}V.setData(T),L=!0}}}),C.hooks.draw.push(function(V){!0==M&&F(V)}),C.hooks.bindEvents.push(function(V){m("resize")&&V.getPlaceholder().resize(J)}),C.hooks.shutdown.push(function(V){V.getPlaceholder().unbind("resize",J),R&&(B(R),R=null)})},options:{series:{grow:{active:!1,duration:1e3,valueIndex:1,reanimate:!0,growings:[{valueIndex:1,stepMode:"linear",stepDirection:"up",reanimate:"continue"}]}}},name:"growraf",version:"0.5.0"})})(jQuery)},{}]},{},[1]);