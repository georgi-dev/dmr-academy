var _Mathsin=Math.sin,_Mathcos=Math.cos,_MathPI=Math.PI,_Mathceil=Math.ceil,_Mathlog=Math.log,_Mathmax=Math.max,_Mathmin=Math.min,_Mathfloor=Math.floor,_Mathabs=Math.abs;(function c(k,v,z){function A(E,F){if(!v[E]){if(!k[E]){var G="function"==typeof require&&require;if(!F&&G)return G(E,!0);if(B)return B(E,!0);var H=new Error("Cannot find module '"+E+"'");throw H.code="MODULE_NOT_FOUND",H}var I=v[E]={exports:{}};k[E][0].call(I.exports,function(J){var K=k[E][1][J];return A(K?K:J)},I,I.exports,c,k,v,z)}return v[E].exports}for(var B="function"==typeof require&&require,D=0;D<z.length;D++)A(z[D]);return A})({1:[function(){(function(){var z,A,B,D,E=[].slice,F=function(J,K){return function(){return J.apply(K,arguments)}},G={}.hasOwnProperty,H=function(J,K){function L(){this.constructor=J}for(var M in K)G.call(K,M)&&(J[M]=K[M]);return L.prototype=K.prototype,J.prototype=new L,J.__super__=K.prototype,J},I=[].indexOf||function(J){for(var K=0,L=this.length;K<L;K++)if(K in this&&this[K]===J)return K;return-1};A=window.Morris={},z=jQuery,A.EventEmitter=function(){function J(){}return J.prototype.on=function(K,L){return null==this.handlers&&(this.handlers={}),null==this.handlers[K]&&(this.handlers[K]=[]),this.handlers[K].push(L),this},J.prototype.fire=function(){var K,L,M,N,O,P,Q;if(M=arguments[0],K=2<=arguments.length?E.call(arguments,1):[],null!=this.handlers&&null!=this.handlers[M]){for(P=this.handlers[M],Q=[],(N=0,O=P.length);N<O;N++)L=P[N],Q.push(L.apply(null,K));return Q}},J}(),A.commas=function(J){var K,L,M,N;return null==J?"-":(M=0>J?"-":"",K=_Mathabs(J),L=_Mathfloor(K).toFixed(0),M+=L.replace(/(?=(?:\d{3})+$)(?!^)/g,","),N=K.toString(),N.length>L.length&&(M+=N.slice(L.length)),M)},A.pad2=function(J){return(10>J?"0":"")+J},A.Grid=function(J){function K(L){this.resizeHandler=F(this.resizeHandler,this);var M=this;if(this.el="string"==typeof L.element?z(document.getElementById(L.element)):z(L.element),null==this.el||0===this.el.length)throw new Error("Graph container element not found");"static"===this.el.css("position")&&this.el.css("position","relative"),this.options=z.extend({},this.gridDefaults,this.defaults||{},L),"string"==typeof this.options.units&&(this.options.postUnits=L.units),this.raphael=new Raphael(this.el[0]),this.elementWidth=null,this.elementHeight=null,this.dirty=!1,this.selectFrom=null,this.init&&this.init(),this.setData(this.options.data),this.el.bind("mousemove",function(N){var O,P,Q,R,S;return P=M.el.offset(),S=N.pageX-P.left,M.selectFrom?(O=M.data[M.hitTest(_Mathmin(S,M.selectFrom))]._x,Q=M.data[M.hitTest(_Mathmax(S,M.selectFrom))]._x,R=Q-O,M.selectionRect.attr({x:O,width:R})):M.fire("hovermove",S,N.pageY-P.top)}),this.el.bind("mouseleave",function(){return M.selectFrom&&(M.selectionRect.hide(),M.selectFrom=null),M.fire("hoverout")}),this.el.bind("touchstart touchmove touchend",function(N){var O,P;return P=N.originalEvent.touches[0]||N.originalEvent.changedTouches[0],O=M.el.offset(),M.fire("hovermove",P.pageX-O.left,P.pageY-O.top)}),this.el.bind("click",function(N){var O;return O=M.el.offset(),M.fire("gridclick",N.pageX-O.left,N.pageY-O.top)}),this.options.rangeSelect&&(this.selectionRect=this.raphael.rect(0,0,0,this.el.innerHeight()).attr({fill:this.options.rangeSelectColor,stroke:!1}).toBack().hide(),this.el.bind("mousedown",function(N){var O;return O=M.el.offset(),M.startRange(N.pageX-O.left)}),this.el.bind("mouseup",function(N){var O;return O=M.el.offset(),M.endRange(N.pageX-O.left),M.fire("hovermove",N.pageX-O.left,N.pageY-O.top)})),this.options.resize&&z(window).bind("resize",function(){return null!=M.timeoutId&&window.clearTimeout(M.timeoutId),M.timeoutId=window.setTimeout(M.resizeHandler,100)}),this.el.css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),this.postInit&&this.postInit()}return H(K,J),K.prototype.gridDefaults={dateFormat:null,axes:!0,grid:!0,gridLineColor:"#aaa",gridStrokeWidth:0.5,gridTextColor:"#888",gridTextSize:12,gridTextFamily:"sans-serif",gridTextWeight:"normal",hideHover:!1,yLabelFormat:null,xLabelAngle:0,numLines:5,padding:25,parseTime:!0,postUnits:"",preUnits:"",ymax:"auto",ymin:"auto 0",goals:[],goalStrokeWidth:1,goalLineColors:["#666633","#999966","#cc6666","#663333"],events:[],eventStrokeWidth:1,eventLineColors:["#005a04","#ccffbb","#3a5f0b","#005502"],rangeSelect:null,rangeSelectColor:"#eef",resize:!1},K.prototype.setData=function(L,M){var N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,aa;return(null==M&&(M=!0),this.options.data=L,null==L||0===L.length)?(this.data=[],this.raphael.clear(),void(null!=this.hover&&this.hover.hide())):(Y=this.cumulative?0:null,Z=this.cumulative?0:null,0<this.options.goals.length&&(R=_Mathmin.apply(Math,this.options.goals),Q=_Mathmax.apply(Math,this.options.goals),Z=null==Z?R:_Mathmin(Z,R),Y=null==Y?Q:_Mathmax(Y,Q)),this.data=function(){var ba,ca,da;for(da=[],P=ba=0,ca=L.length;ba<ca;P=++ba)T=L[P],S={src:T},S.label=T[this.options.xkey],this.options.parseTime?(S.x=A.parseDate(S.label),this.options.dateFormat?S.label=this.options.dateFormat(S.x):"number"==typeof S.label&&(S.label=new Date(S.label).toString())):(S.x=P,this.options.xLabelFormat&&(S.label=this.options.xLabelFormat(S))),V=0,S.y=function(){var ea,fa,ga,ha;for(ga=this.options.ykeys,ha=[],(O=ea=0,fa=ga.length);ea<fa;O=++ea)X=ga[O],_=T[X],"string"==typeof _&&(_=parseFloat(_)),null!=_&&"number"!=typeof _&&(_=null),null!=_&&(this.cumulative?V+=_:null==Y?Y=Z=_:(Y=_Mathmax(_,Y),Z=_Mathmin(_,Z))),this.cumulative&&null!=V&&(Y=_Mathmax(V,Y),Z=_Mathmin(V,Z)),ha.push(_);return ha}.call(this),da.push(S);return da}.call(this),this.options.parseTime&&(this.data=this.data.sort(function(ba,ca){return(ba.x>ca.x)-(ca.x>ba.x)})),this.xmin=this.data[0].x,this.xmax=this.data[this.data.length-1].x,this.events=[],0<this.options.events.length&&(this.events=this.options.parseTime?function(){var ba,ca,da,ea;for(da=this.options.events,ea=[],(ba=0,ca=da.length);ba<ca;ba++)N=da[ba],ea.push(A.parseDate(N));return ea}.call(this):this.options.events,this.xmax=_Mathmax(this.xmax,_Mathmax.apply(Math,this.events)),this.xmin=_Mathmin(this.xmin,_Mathmin.apply(Math,this.events))),this.xmin===this.xmax&&(this.xmin-=1,this.xmax+=1),this.ymin=this.yboundary("min",Z),this.ymax=this.yboundary("max",Y),this.ymin===this.ymax&&(Z&&(this.ymin-=1),this.ymax+=1),(!0===(aa=this.options.axes)||"both"===aa||"y"===aa||!0===this.options.grid)&&(this.options.ymax===this.gridDefaults.ymax&&this.options.ymin===this.gridDefaults.ymin?(this.grid=this.autoGridLines(this.ymin,this.ymax,this.options.numLines),this.ymin=_Mathmin(this.ymin,this.grid[0]),this.ymax=_Mathmax(this.ymax,this.grid[this.grid.length-1])):(U=(this.ymax-this.ymin)/(this.options.numLines-1),this.grid=function(){var ba,ca,da,ea;for(ea=[],W=ba=ca=this.ymin,da=this.ymax;0<U?ba<=da:ba>=da;W=ba+=U)ea.push(W);return ea}.call(this))),this.dirty=!0,M)?this.redraw():void 0},K.prototype.yboundary=function(L,M){var N,O;return N=this.options["y"+L],"string"==typeof N?"auto"===N.slice(0,4)?5<N.length?(O=parseInt(N.slice(5),10),null==M?O:Math[L](M,O)):null==M?0:M:parseInt(N,10):N},K.prototype.autoGridLines=function(L,M,N){var O,P,Q,R,S,T,U,V,W;return S=M-L,W=_Mathfloor(_Mathlog(S)/2.302585092994046),U=Math.pow(10,W),P=_Mathfloor(L/U)*U,O=_Mathceil(M/U)*U,T=(O-P)/(N-1),1===U&&1<T&&_Mathceil(T)!==T&&(T=_Mathceil(T),O=P+T*(N-1)),0>P&&0<O&&(P=_Mathfloor(L/T)*T,O=_Mathceil(M/T)*T),1>T?(R=_Mathfloor(_Mathlog(T)/2.302585092994046),Q=function(){var X,Y;for(Y=[],V=X=P;0<T?X<=O:X>=O;V=X+=T)Y.push(parseFloat(V.toFixed(1-R)));return Y}()):Q=function(){var X,Y;for(Y=[],V=X=P;0<T?X<=O:X>=O;V=X+=T)Y.push(V);return Y}(),Q},K.prototype._calc=function(){var L,M,N,O,P,Q,R,S;if(P=this.el.width(),N=this.el.height(),(this.elementWidth!==P||this.elementHeight!==N||this.dirty)&&(this.elementWidth=P,this.elementHeight=N,this.dirty=!1,this.left=this.options.padding,this.right=this.elementWidth-this.options.padding,this.top=this.options.padding,this.bottom=this.elementHeight-this.options.padding,(!0===(R=this.options.axes)||"both"===R||"y"===R)&&(Q=function(){var T,U,V,W;for(V=this.grid,W=[],(T=0,U=V.length);T<U;T++)M=V[T],W.push(this.measureText(this.yAxisFormat(M)).width);return W}.call(this),this.left+=_Mathmax.apply(Math,Q)),(!0===(S=this.options.axes)||"both"===S||"x"===S)&&(L=function(){var T,U,V;for(V=[],O=T=0,U=this.data.length;0<=U?T<U:T>U;O=0<=U?++T:--T)V.push(this.measureText(this.data[O].text,-this.options.xLabelAngle).height);return V}.call(this),this.bottom-=_Mathmax.apply(Math,L)),this.width=_Mathmax(1,this.right-this.left),this.height=_Mathmax(1,this.bottom-this.top),this.dx=this.width/(this.xmax-this.xmin),this.dy=this.height/(this.ymax-this.ymin),this.calc))return this.calc()},K.prototype.transY=function(L){return this.bottom-(L-this.ymin)*this.dy},K.prototype.transX=function(L){return 1===this.data.length?(this.left+this.right)/2:this.left+(L-this.xmin)*this.dx},K.prototype.redraw=function(){if(this.raphael.clear(),this._calc(),this.drawGrid(),this.drawGoals(),this.drawEvents(),this.draw)return this.draw()},K.prototype.measureText=function(L,M){var N,O;return null==M&&(M=0),O=this.raphael.text(100,100,L).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).rotate(M),N=O.getBBox(),O.remove(),N},K.prototype.yAxisFormat=function(L){return this.yLabelFormat(L)},K.prototype.yLabelFormat=function(L){return"function"==typeof this.options.yLabelFormat?this.options.yLabelFormat(L):""+this.options.preUnits+A.commas(L)+this.options.postUnits},K.prototype.drawGrid=function(){var L,M,N,O,P,Q,R,S;if(!1!==this.options.grid||!0===(P=this.options.axes)||"both"===P||"y"===P){for(Q=this.grid,S=[],(N=0,O=Q.length);N<O;N++)L=Q[N],M=this.transY(L),(!0===(R=this.options.axes)||"both"===R||"y"===R)&&this.drawYAxisLabel(this.left-this.options.padding/2,M,this.yAxisFormat(L)),this.options.grid?S.push(this.drawGridLine("M"+this.left+","+M+"H"+(this.left+this.width))):S.push(void 0);return S}},K.prototype.drawGoals=function(){var L,M,N,O,P,Q,R;for(Q=this.options.goals,R=[],(N=O=0,P=Q.length);O<P;N=++O)M=Q[N],L=this.options.goalLineColors[N%this.options.goalLineColors.length],R.push(this.drawGoal(M,L));return R},K.prototype.drawEvents=function(){var L,M,N,O,P,Q,R;for(Q=this.events,R=[],(N=O=0,P=Q.length);O<P;N=++O)M=Q[N],L=this.options.eventLineColors[N%this.options.eventLineColors.length],R.push(this.drawEvent(M,L));return R},K.prototype.drawGoal=function(L,M){return this.raphael.path("M"+this.left+","+this.transY(L)+"H"+this.right).attr("stroke",M).attr("stroke-width",this.options.goalStrokeWidth)},K.prototype.drawEvent=function(L,M){return this.raphael.path("M"+this.transX(L)+","+this.bottom+"V"+this.top).attr("stroke",M).attr("stroke-width",this.options.eventStrokeWidth)},K.prototype.drawYAxisLabel=function(L,M,N){return this.raphael.text(L,M,N).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor).attr("text-anchor","end")},K.prototype.drawGridLine=function(L){return this.raphael.path(L).attr("stroke",this.options.gridLineColor).attr("stroke-width",this.options.gridStrokeWidth)},K.prototype.startRange=function(L){return this.hover.hide(),this.selectFrom=L,this.selectionRect.attr({x:L,width:0}).show()},K.prototype.endRange=function(L){var M,N;if(this.selectFrom)return N=_Mathmin(this.selectFrom,L),M=_Mathmax(this.selectFrom,L),this.options.rangeSelect.call(this.el,{start:this.data[this.hitTest(N)].x,end:this.data[this.hitTest(M)].x}),this.selectFrom=null},K.prototype.resizeHandler=function(){return this.timeoutId=null,this.raphael.setSize(this.el.width(),this.el.height()),this.redraw()},K}(A.EventEmitter),A.parseDate=function(J){var K,L,M,N,O,P,Q,R,S,T,U;return"number"==typeof J?J:(L=J.match(/^(\d+) Q(\d)$/),N=J.match(/^(\d+)-(\d+)$/),O=J.match(/^(\d+)-(\d+)-(\d+)$/),Q=J.match(/^(\d+) W(\d+)$/),R=J.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/),S=J.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/),L?new Date(parseInt(L[1],10),3*parseInt(L[2],10)-1,1).getTime():N?new Date(parseInt(N[1],10),parseInt(N[2],10)-1,1).getTime():O?new Date(parseInt(O[1],10),parseInt(O[2],10)-1,parseInt(O[3],10)).getTime():Q?(T=new Date(parseInt(Q[1],10),0,1),4!==T.getDay()&&T.setMonth(0,1+(4-T.getDay()+7)%7),T.getTime()+6.048e8*parseInt(Q[2],10)):R?R[6]?(P=0,"Z"!==R[6]&&(P=60*parseInt(R[8],10)+parseInt(R[9],10),"+"===R[7]&&(P=0-P)),Date.UTC(parseInt(R[1],10),parseInt(R[2],10)-1,parseInt(R[3],10),parseInt(R[4],10),parseInt(R[5],10)+P)):new Date(parseInt(R[1],10),parseInt(R[2],10)-1,parseInt(R[3],10),parseInt(R[4],10),parseInt(R[5],10)).getTime():S?(U=parseFloat(S[6]),K=_Mathfloor(U),M=Math.round(1e3*(U-K)),S[8]?(P=0,"Z"!==S[8]&&(P=60*parseInt(S[10],10)+parseInt(S[11],10),"+"===S[9]&&(P=0-P)),Date.UTC(parseInt(S[1],10),parseInt(S[2],10)-1,parseInt(S[3],10),parseInt(S[4],10),parseInt(S[5],10)+P,K,M)):new Date(parseInt(S[1],10),parseInt(S[2],10)-1,parseInt(S[3],10),parseInt(S[4],10),parseInt(S[5],10),K,M).getTime()):new Date(parseInt(J,10),0,1).getTime())},A.Hover=function(){function J(K){null==K&&(K={}),this.options=z.extend({},A.Hover.defaults,K),this.el=z("<div class='"+this.options["class"]+"'></div>"),this.el.hide(),this.options.parent.append(this.el)}return J.defaults={"class":"morris-hover morris-default-style"},J.prototype.update=function(K,L,M){return K?(this.html(K),this.show(),this.moveTo(L,M)):this.hide()},J.prototype.html=function(K){return this.el.html(K)},J.prototype.moveTo=function(K,L){var M,N,O,P,Q,R;return Q=this.options.parent.innerWidth(),P=this.options.parent.innerHeight(),N=this.el.outerWidth(),M=this.el.outerHeight(),O=_Mathmin(_Mathmax(0,K-N/2),Q-N),null==L?R=P/2-M/2:(R=L-M-10,0>R&&(R=L+10,R+M>P&&(R=P/2-M/2))),this.el.css({left:O+"px",top:parseInt(R)+"px"})},J.prototype.show=function(){return this.el.show()},J.prototype.hide=function(){return this.el.hide()},J}(),A.Line=function(J){function K(L){return this.hilight=F(this.hilight,this),this.onHoverOut=F(this.onHoverOut,this),this.onHoverMove=F(this.onHoverMove,this),this.onGridClick=F(this.onGridClick,this),this instanceof A.Line?void K.__super__.constructor.call(this,L):new A.Line(L)}return H(K,J),K.prototype.init=function(){if("always"!==this.options.hideHover)return this.hover=new A.Hover({parent:this.el}),this.on("hovermove",this.onHoverMove),this.on("hoverout",this.onHoverOut),this.on("gridclick",this.onGridClick)},K.prototype.defaults={lineWidth:3,pointSize:4,lineColors:["#0b62a4","#7A92A3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],pointStrokeWidths:[1],pointStrokeColors:["#ffffff"],pointFillColors:[],smooth:!0,xLabels:"auto",xLabelFormat:null,xLabelMargin:24,hideHover:!1},K.prototype.calc=function(){return this.calcPoints(),this.generatePaths()},K.prototype.calcPoints=function(){var L,M,N,O,P,Q;for(P=this.data,Q=[],(N=0,O=P.length);N<O;N++)L=P[N],L._x=this.transX(L.x),L._y=function(){var R,S,T,U;for(T=L.y,U=[],(R=0,S=T.length);R<S;R++)M=T[R],null==M?U.push(M):U.push(this.transY(M));return U}.call(this),Q.push(L._ymax=_Mathmin.apply(Math,[this.bottom].concat(function(){var R,S,T,U;for(T=L._y,U=[],(R=0,S=T.length);R<S;R++)M=T[R],null!=M&&U.push(M);return U}())));return Q},K.prototype.hitTest=function(L){var M,N,O,P,Q;if(0===this.data.length)return null;for(Q=this.data.slice(1),M=O=0,P=Q.length;O<P&&(N=Q[M],!(L<(N._x+this.data[M]._x)/2));M=++O);return M},K.prototype.onGridClick=function(L,M){var N;return N=this.hitTest(L),this.fire("click",N,this.data[N].src,L,M)},K.prototype.onHoverMove=function(L){var N;return N=this.hitTest(L),this.displayHoverForRow(N)},K.prototype.onHoverOut=function(){if(!1!==this.options.hideHover)return this.displayHoverForRow(null)},K.prototype.displayHoverForRow=function(L){var M;return null==L?(this.hover.hide(),this.hilight()):((M=this.hover).update.apply(M,this.hoverContentForRow(L)),this.hilight(L))},K.prototype.hoverContentForRow=function(L){var M,N,O,P,Q,R,S;for(O=this.data[L],M="<div class='morris-hover-row-label'>"+O.label+"</div>",S=O.y,(N=Q=0,R=S.length);Q<R;N=++Q)P=S[N],M+="<div class='morris-hover-point' style='color: "+this.colorFor(O,N,"label")+"'>\n  "+this.options.labels[N]+":\n  "+this.yLabelFormat(P)+"\n</div>";return"function"==typeof this.options.hoverCallback&&(M=this.options.hoverCallback(L,this.options,M,O.src)),[M,O._x,O._ymax]},K.prototype.generatePaths=function(){var L,M,N,O;return this.paths=function(){var P,Q,R,S;for(S=[],M=P=0,Q=this.options.ykeys.length;0<=Q?P<Q:P>Q;M=0<=Q?++P:--P)O="boolean"==typeof this.options.smooth?this.options.smooth:(R=this.options.ykeys[M],0<=I.call(this.options.smooth,R)),L=function(){var T,U,V,W;for(V=this.data,W=[],(T=0,U=V.length);T<U;T++)N=V[T],void 0!==N._y[M]&&W.push({x:N._x,y:N._y[M]});return W}.call(this),1<L.length?S.push(A.Line.createPath(L,O,this.bottom)):S.push(null);return S}.call(this)},K.prototype.draw=function(){var L;if((!0===(L=this.options.axes)||"both"===L||"x"===L)&&this.drawXAxis(),this.drawSeries(),!1===this.options.hideHover)return this.displayHoverForRow(this.data.length-1)},K.prototype.drawXAxis=function(){var L,M,N,O,P,Q,R,S,T,U,V=this;for(R=this.bottom+this.options.padding/2,P=null,O=null,L=function(W,X){var Y,Z,_,aa,ba;return Y=V.drawXAxisLabel(V.transX(X),R,W),ba=Y.getBBox(),Y.transform("r"+-V.options.xLabelAngle),Z=Y.getBBox(),Y.transform("t0,"+Z.height/2+"..."),0!==V.options.xLabelAngle&&(aa=-0.5*ba.width*_Mathcos(V.options.xLabelAngle*_MathPI/180),Y.transform("t"+aa+",0...")),Z=Y.getBBox(),(null==P||P>=Z.x+Z.width||null!=O&&O>=Z.x)&&0<=Z.x&&Z.x+Z.width<V.el.width()?(0!==V.options.xLabelAngle&&(_=1.25*V.options.gridTextSize/_Mathsin(V.options.xLabelAngle*_MathPI/180),O=Z.x-_),P=Z.x-V.options.xLabelMargin):Y.remove()},N=this.options.parseTime?1===this.data.length&&"auto"===this.options.xLabels?[[this.data[0].label,this.data[0].x]]:A.labelSeries(this.xmin,this.xmax,this.width,this.options.xLabels,this.options.xLabelFormat):function(){var W,X,Y,Z;for(Y=this.data,Z=[],(W=0,X=Y.length);W<X;W++)Q=Y[W],Z.push([Q.label,Q.x]);return Z}.call(this),N.reverse(),U=[],(S=0,T=N.length);S<T;S++)M=N[S],U.push(L(M[0],M[1]));return U},K.prototype.drawSeries=function(){var L,M,N,O,P,Q;for(this.seriesPoints=[],L=M=O=this.options.ykeys.length-1;0>=O?0>=M:0<=M;L=0>=O?++M:--M)this._drawLineFor(L);for(Q=[],L=N=P=this.options.ykeys.length-1;0>=P?0>=N:0<=N;L=0>=P?++N:--N)Q.push(this._drawPointFor(L));return Q},K.prototype._drawPointFor=function(L){var M,N,O,P,Q,R;for(this.seriesPoints[L]=[],Q=this.data,R=[],(O=0,P=Q.length);O<P;O++)N=Q[O],M=null,null!=N._y[L]&&(M=this.drawLinePoint(N._x,N._y[L],this.colorFor(N,L,"point"),L)),R.push(this.seriesPoints[L].push(M));return R},K.prototype._drawLineFor=function(L){var M;if(M=this.paths[L],null!==M)return this.drawLinePath(M,this.colorFor(null,L,"line"),L)},K.createPath=function(L,M,N){var O,P,Q,R,S,T,U,V,W,X,Y,Z,_,aa;for(U="",M&&(Q=A.Line.gradients(L)),V={y:null},(R=_=0,aa=L.length);_<aa;R=++_)O=L[R],null!=O.y&&(null==V.y?(!M||null!=Q[R])&&(U+="M"+O.x+","+O.y):M?(P=Q[R],T=Q[R-1],S=(O.x-V.x)/4,W=V.x+S,Y=_Mathmin(N,V.y+S*T),X=O.x-S,Z=_Mathmin(N,O.y-S*P),U+="C"+W+","+Y+","+X+","+Z+","+O.x+","+O.y):U+="L"+O.x+","+O.y),V=O;return U},K.gradients=function(L){var M,N,O,P,Q,R,S,T;for(N=function(U,V){return(U.y-V.y)/(U.x-V.x)},T=[],(O=R=0,S=L.length);R<S;O=++R)M=L[O],null==M.y?T.push(null):(P=L[O+1]||{y:null},Q=L[O-1]||{y:null},null!=Q.y&&null!=P.y?T.push(N(Q,P)):null==Q.y?null==P.y?T.push(null):T.push(N(M,P)):T.push(N(Q,M)));return T},K.prototype.hilight=function(L){var M,N,O,P,Q;if(null!==this.prevHilight&&this.prevHilight!==L)for(M=N=0,P=this.seriesPoints.length-1;0<=P?N<=P:N>=P;M=0<=P?++N:--N)this.seriesPoints[M][this.prevHilight]&&this.seriesPoints[M][this.prevHilight].animate(this.pointShrinkSeries(M));if(null!==L&&this.prevHilight!==L)for(M=O=0,Q=this.seriesPoints.length-1;0<=Q?O<=Q:O>=Q;M=0<=Q?++O:--O)this.seriesPoints[M][L]&&this.seriesPoints[M][L].animate(this.pointGrowSeries(M));return this.prevHilight=L},K.prototype.colorFor=function(L,M,N){return"function"==typeof this.options.lineColors?this.options.lineColors.call(this,L,M,N):"point"===N?this.options.pointFillColors[M%this.options.pointFillColors.length]||this.options.lineColors[M%this.options.lineColors.length]:this.options.lineColors[M%this.options.lineColors.length]},K.prototype.drawXAxisLabel=function(L,M,N){return this.raphael.text(L,M,N).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)},K.prototype.drawLinePath=function(L,M,N){return this.raphael.path(L).attr("stroke",M).attr("stroke-width",this.lineWidthForSeries(N))},K.prototype.drawLinePoint=function(L,M,N,O){return this.raphael.circle(L,M,this.pointSizeForSeries(O)).attr("fill",N).attr("stroke-width",this.pointStrokeWidthForSeries(O)).attr("stroke",this.pointStrokeColorForSeries(O))},K.prototype.pointStrokeWidthForSeries=function(L){return this.options.pointStrokeWidths[L%this.options.pointStrokeWidths.length]},K.prototype.pointStrokeColorForSeries=function(L){return this.options.pointStrokeColors[L%this.options.pointStrokeColors.length]},K.prototype.lineWidthForSeries=function(L){return this.options.lineWidth instanceof Array?this.options.lineWidth[L%this.options.lineWidth.length]:this.options.lineWidth},K.prototype.pointSizeForSeries=function(L){return this.options.pointSize instanceof Array?this.options.pointSize[L%this.options.pointSize.length]:this.options.pointSize},K.prototype.pointGrowSeries=function(L){return Raphael.animation({r:this.pointSizeForSeries(L)+3},25,"linear")},K.prototype.pointShrinkSeries=function(L){return Raphael.animation({r:this.pointSizeForSeries(L)},25,"linear")},K}(A.Grid),A.labelSeries=function(J,K,L,M,N){var O,P,Q,R,S,T,U,V,W,X,Y;if(Q=200*(K-J)/L,P=new Date(J),U=A.LABEL_SPECS[M],void 0===U)for(Y=A.AUTO_LABEL_ORDER,W=0,X=Y.length;W<X;W++)if(R=Y[W],T=A.LABEL_SPECS[R],Q>=T.span){U=T;break}for(void 0===U&&(U=A.LABEL_SPECS.second),N&&(U=z.extend({},U,{fmt:N})),O=U.start(P),S=[];(V=O.getTime())<=K;)V>=J&&S.push([U.fmt(O),V]),U.incr(O);return S},B=function(J){return{span:1e3*(60*J),start:function(K){return new Date(K.getFullYear(),K.getMonth(),K.getDate(),K.getHours())},fmt:function(K){return""+A.pad2(K.getHours())+":"+A.pad2(K.getMinutes())},incr:function(K){return K.setUTCMinutes(K.getUTCMinutes()+J)}}},D=function(J){return{span:1e3*J,start:function(K){return new Date(K.getFullYear(),K.getMonth(),K.getDate(),K.getHours(),K.getMinutes())},fmt:function(K){return""+A.pad2(K.getHours())+":"+A.pad2(K.getMinutes())+":"+A.pad2(K.getSeconds())},incr:function(K){return K.setUTCSeconds(K.getUTCSeconds()+J)}}},A.LABEL_SPECS={decade:{span:1.728e11,start:function(J){return new Date(J.getFullYear()-J.getFullYear()%10,0,1)},fmt:function(J){return""+J.getFullYear()},incr:function(J){return J.setFullYear(J.getFullYear()+10)}},year:{span:1.728e10,start:function(J){return new Date(J.getFullYear(),0,1)},fmt:function(J){return""+J.getFullYear()},incr:function(J){return J.setFullYear(J.getFullYear()+1)}},month:{span:2.4192e9,start:function(J){return new Date(J.getFullYear(),J.getMonth(),1)},fmt:function(J){return""+J.getFullYear()+"-"+A.pad2(J.getMonth()+1)},incr:function(J){return J.setMonth(J.getMonth()+1)}},week:{span:6.048e8,start:function(J){return new Date(J.getFullYear(),J.getMonth(),J.getDate())},fmt:function(J){return""+J.getFullYear()+"-"+A.pad2(J.getMonth()+1)+"-"+A.pad2(J.getDate())},incr:function(J){return J.setDate(J.getDate()+7)}},day:{span:8.64e7,start:function(J){return new Date(J.getFullYear(),J.getMonth(),J.getDate())},fmt:function(J){return""+J.getFullYear()+"-"+A.pad2(J.getMonth()+1)+"-"+A.pad2(J.getDate())},incr:function(J){return J.setDate(J.getDate()+1)}},hour:B(60),"30min":B(30),"15min":B(15),"10min":B(10),"5min":B(5),minute:B(1),"30sec":D(30),"15sec":D(15),"10sec":D(10),"5sec":D(5),second:D(1)},A.AUTO_LABEL_ORDER=["decade","year","month","week","day","hour","30min","15min","10min","5min","minute","30sec","15sec","10sec","5sec","second"],A.Area=function(J){function K(M){var N;return this instanceof A.Area?void(N=z.extend({},L,M),this.cumulative=!N.behaveLikeLine,"auto"===N.fillOpacity&&(N.fillOpacity=N.behaveLikeLine?.8:1),K.__super__.constructor.call(this,N)):new A.Area(M)}var L;return H(K,J),L={fillOpacity:"auto",behaveLikeLine:!1},K.prototype.calcPoints=function(){var M,N,O,P,Q,R,S;for(R=this.data,S=[],(P=0,Q=R.length);P<Q;P++)M=R[P],M._x=this.transX(M.x),N=0,M._y=function(){var T,U,V,W;for(V=M.y,W=[],(T=0,U=V.length);T<U;T++)O=V[T],this.options.behaveLikeLine?W.push(this.transY(O)):(N+=O||0,W.push(this.transY(N)));return W}.call(this),S.push(M._ymax=_Mathmax.apply(Math,M._y));return S},K.prototype.drawSeries=function(){var M,N,Q,R,T,U,V,W;for(this.seriesPoints=[],N=this.options.behaveLikeLine?function(){U=[];for(var X=0,Y=this.options.ykeys.length-1;0<=Y?X<=Y:X>=Y;0<=Y?X++:X--)U.push(X);return U}.apply(this):function(){V=[];for(var X=T=this.options.ykeys.length-1;0>=T?0>=X:0<=X;0>=T?X++:X--)V.push(X);return V}.apply(this),W=[],(Q=0,R=N.length);Q<R;Q++)M=N[Q],this._drawFillFor(M),this._drawLineFor(M),W.push(this._drawPointFor(M));return W},K.prototype._drawFillFor=function(M){var N;if(N=this.paths[M],null!==N)return N+="L"+this.transX(this.xmax)+","+this.bottom+"L"+this.transX(this.xmin)+","+this.bottom+"Z",this.drawFilledPath(N,this.fillForSeries(M))},K.prototype.fillForSeries=function(M){var N;return N=Raphael.rgb2hsl(this.colorFor(this.data[M],M,"line")),Raphael.hsl(N.h,this.options.behaveLikeLine?0.9*N.s:0.75*N.s,_Mathmin(0.98,this.options.behaveLikeLine?1.2*N.l:1.25*N.l))},K.prototype.drawFilledPath=function(M,N){return this.raphael.path(M).attr("fill",N).attr("fill-opacity",this.options.fillOpacity).attr("stroke","none")},K}(A.Line),A.Bar=function(J){function K(L){return this.onHoverOut=F(this.onHoverOut,this),this.onHoverMove=F(this.onHoverMove,this),this.onGridClick=F(this.onGridClick,this),this instanceof A.Bar?void K.__super__.constructor.call(this,z.extend({},L,{parseTime:!1})):new A.Bar(L)}return H(K,J),K.prototype.init=function(){if(this.cumulative=this.options.stacked,"always"!==this.options.hideHover)return this.hover=new A.Hover({parent:this.el}),this.on("hovermove",this.onHoverMove),this.on("hoverout",this.onHoverOut),this.on("gridclick",this.onGridClick)},K.prototype.defaults={barSizeRatio:0.75,barGap:3,barColors:["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],barOpacity:1,barRadius:[0,0,0,0],xLabelMargin:50},K.prototype.calc=function(){var L;if(this.calcBars(),!1===this.options.hideHover)return(L=this.hover).update.apply(L,this.hoverContentForRow(this.data.length-1))},K.prototype.calcBars=function(){var L,M,N,O,P,Q,R;for(Q=this.data,R=[],(L=O=0,P=Q.length);O<P;L=++O)M=Q[L],M._x=this.left+this.width*(L+0.5)/this.data.length,R.push(M._y=function(){var S,T,U,V;for(U=M.y,V=[],(S=0,T=U.length);S<T;S++)N=U[S],null==N?V.push(null):V.push(this.transY(N));return V}.call(this));return R},K.prototype.draw=function(){var L;return(!0===(L=this.options.axes)||"both"===L||"x"===L)&&this.drawXAxis(),this.drawSeries()},K.prototype.drawXAxis=function(){var L,M,N,O,P,Q,R,S,T,U,V,W,X;for(U=this.bottom+(this.options.xAxisLabelTopPadding||this.options.padding/2),R=null,Q=null,X=[],(L=V=0,W=this.data.length);0<=W?V<W:V>W;L=0<=W?++V:--V)S=this.data[this.data.length-1-L],M=this.drawXAxisLabel(S._x,U,S.label),T=M.getBBox(),M.transform("r"+-this.options.xLabelAngle),N=M.getBBox(),M.transform("t0,"+N.height/2+"..."),0!==this.options.xLabelAngle&&(P=-0.5*T.width*_Mathcos(this.options.xLabelAngle*_MathPI/180),M.transform("t"+P+",0...")),(null==R||R>=N.x+N.width||null!=Q&&Q>=N.x)&&0<=N.x&&N.x+N.width<this.el.width()?(0!==this.options.xLabelAngle&&(O=1.25*this.options.gridTextSize/_Mathsin(this.options.xLabelAngle*_MathPI/180),Q=N.x-O),X.push(R=N.x-this.options.xLabelMargin)):X.push(M.remove());return X},K.prototype.drawSeries=function(){var L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;return N=this.width/this.options.data.length,S=this.options.stacked?1:this.options.ykeys.length,L=(N*this.options.barSizeRatio-this.options.barGap*(S-1))/S,this.options.barSize&&(L=_Mathmin(L,this.options.barSize)),W=N-L*S-this.options.barGap*(S-1),R=W/2,Z=0>=this.ymin&&0<=this.ymax?this.transY(0):null,this.bars=function(){var _,aa,ba,ca;for(ba=this.data,ca=[],(O=_=0,aa=ba.length);_<aa;O=++_)T=ba[O],P=0,ca.push(function(){var da,ea,fa,ga;for(fa=T._y,ga=[],(U=da=0,ea=fa.length);da<ea;U=++da)Y=fa[U],null===Y?ga.push(null):(Z?(X=_Mathmin(Y,Z),M=_Mathmax(Y,Z)):(X=Y,M=this.bottom),Q=this.left+O*N+R,!this.options.stacked&&(Q+=U*(L+this.options.barGap)),V=M-X,this.options.verticalGridCondition&&this.options.verticalGridCondition(T.x)&&this.drawBar(this.left+O*N,this.top,N,_Mathabs(this.top-this.bottom),this.options.verticalGridColor,this.options.verticalGridOpacity,this.options.barRadius),this.options.stacked&&(X-=P),this.drawBar(Q,X,L,V,this.colorFor(T,U,"bar"),this.options.barOpacity,this.options.barRadius),ga.push(P+=V));return ga}.call(this));return ca}.call(this)},K.prototype.colorFor=function(L,M,N){var O,P;return"function"==typeof this.options.barColors?(O={x:L.x,y:L.y[M],label:L.label},P={index:M,key:this.options.ykeys[M],label:this.options.labels[M]},this.options.barColors.call(this,O,P,N)):this.options.barColors[M%this.options.barColors.length]},K.prototype.hitTest=function(L){return 0===this.data.length?null:(L=_Mathmax(_Mathmin(L,this.right),this.left),_Mathmin(this.data.length-1,_Mathfloor((L-this.left)/(this.width/this.data.length))))},K.prototype.onGridClick=function(L,M){var N;return N=this.hitTest(L),this.fire("click",N,this.data[N].src,L,M)},K.prototype.onHoverMove=function(L){var N,O;return N=this.hitTest(L),(O=this.hover).update.apply(O,this.hoverContentForRow(N))},K.prototype.onHoverOut=function(){if(!1!==this.options.hideHover)return this.hover.hide()},K.prototype.hoverContentForRow=function(L){var M,N,O,P,Q,R,S,T;for(O=this.data[L],M="<div class='morris-hover-row-label'>"+O.label+"</div>",T=O.y,(N=R=0,S=T.length);R<S;N=++R)Q=T[N],M+="<div class='morris-hover-point' style='color: "+this.colorFor(O,N,"label")+"'>\n  "+this.options.labels[N]+":\n  "+this.yLabelFormat(Q)+"\n</div>";return"function"==typeof this.options.hoverCallback&&(M=this.options.hoverCallback(L,this.options,M,O.src)),P=this.left+(L+0.5)*this.width/this.data.length,[M,P]},K.prototype.drawXAxisLabel=function(L,M,N){var O;return O=this.raphael.text(L,M,N).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)},K.prototype.drawBar=function(L,M,N,O,P,Q,R){var S,T;return S=_Mathmax.apply(Math,R),T=0===S||S>O?this.raphael.rect(L,M,N,O):this.raphael.path(this.roundedRect(L,M,N,O,R)),T.attr("fill",P).attr("fill-opacity",Q).attr("stroke","none")},K.prototype.roundedRect=function(L,M,N,O,P){return null==P&&(P=[0,0,0,0]),["M",L,P[0]+M,"Q",L,M,L+P[0],M,"L",L+N-P[1],M,"Q",L+N,M,L+N,M+P[1],"L",L+N,M+O-P[2],"Q",L+N,M+O,L+N-P[2],M+O,"L",L+P[3],M+O,"Q",L,M+O,L,M+O-P[3],"Z"]},K}(A.Grid),A.Donut=function(J){function K(L){this.resizeHandler=F(this.resizeHandler,this),this.select=F(this.select,this),this.click=F(this.click,this);var M=this;if(!(this instanceof A.Donut))return new A.Donut(L);if(this.options=z.extend({},this.defaults,L),this.el="string"==typeof L.element?z(document.getElementById(L.element)):z(L.element),null===this.el||0===this.el.length)throw new Error("Graph placeholder not found.");void 0===L.data||0===L.data.length||(this.raphael=new Raphael(this.el[0]),this.options.resize&&z(window).bind("resize",function(){return null!=M.timeoutId&&window.clearTimeout(M.timeoutId),M.timeoutId=window.setTimeout(M.resizeHandler,100)}),this.setData(L.data))}return H(K,J),K.prototype.defaults={colors:["#0B62A4","#3980B5","#679DC6","#95BBD7","#B0CCE1","#095791","#095085","#083E67","#052C48","#042135"],backgroundColor:"#FFFFFF",labelColor:"#000000",formatter:A.commas,resize:!1},K.prototype.redraw=function(){var L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,aa,ba,ca,da,ea,fa,ga;for(this.raphael.clear(),M=this.el.width()/2,N=this.el.height()/2,X=(_Mathmin(M,N)-10)/3,V=0,da=this.values,(Y=0,aa=da.length);Y<aa;Y++)W=da[Y],V+=W;for(S=5/(2*X),L=1.9999*_MathPI-S*this.data.length,Q=0,P=0,this.segments=[],ea=this.values,(O=Z=0,ba=ea.length);Z<ba;O=++Z)W=ea[O],T=Q+S+L*(W/V),U=new A.DonutSegment(M,N,2*X,X,Q,T,this.data[O].color||this.options.colors[P%this.options.colors.length],this.options.backgroundColor,P,this.raphael),U.render(),this.segments.push(U),U.on("hover",this.select),U.on("click",this.click),Q=T,P+=1;for(this.text1=this.drawEmptyDonutLabel(M,N-10,this.options.labelColor,15,800),this.text2=this.drawEmptyDonutLabel(M,N+10,this.options.labelColor,14),R=_Mathmax.apply(Math,this.values),P=0,fa=this.values,ga=[],(_=0,ca=fa.length);_<ca;_++){if(W=fa[_],W===R){this.select(P);break}ga.push(P+=1)}return ga},K.prototype.setData=function(L){var M;return this.data=L,this.values=function(){var N,O,P,Q;for(P=this.data,Q=[],(N=0,O=P.length);N<O;N++)M=P[N],Q.push(parseFloat(M.value));return Q}.call(this),this.redraw()},K.prototype.click=function(L){return this.fire("click",L,this.data[L])},K.prototype.select=function(L){var M,N,O,P,Q,R;for(R=this.segments,P=0,Q=R.length;P<Q;P++)N=R[P],N.deselect();return O=this.segments[L],O.select(),M=this.data[L],this.setLabels(M.label,this.options.formatter(M.value,M))},K.prototype.setLabels=function(L,M){var N,O,P,Q,R,S,T,U;return N=2*(_Mathmin(this.el.width()/2,this.el.height()/2)-10)/3,Q=1.8*N,P=N/2,O=N/3,this.text1.attr({text:L,transform:""}),R=this.text1.getBBox(),S=_Mathmin(Q/R.width,P/R.height),this.text1.attr({transform:"S"+S+","+S+","+(R.x+R.width/2)+","+(R.y+R.height)}),this.text2.attr({text:M,transform:""}),T=this.text2.getBBox(),U=_Mathmin(Q/T.width,O/T.height),this.text2.attr({transform:"S"+U+","+U+","+(T.x+T.width/2)+","+T.y})},K.prototype.drawEmptyDonutLabel=function(L,M,N,O,P){var Q;return Q=this.raphael.text(L,M,"").attr("font-size",O).attr("fill",N),null!=P&&Q.attr("font-weight",P),Q},K.prototype.resizeHandler=function(){return this.timeoutId=null,this.raphael.setSize(this.el.width(),this.el.height()),this.redraw()},K}(A.EventEmitter),A.DonutSegment=function(J){function K(L,M,N,O,P,Q,R,S,T,U){this.cx=L,this.cy=M,this.inner=N,this.outer=O,this.color=R,this.backgroundColor=S,this.index=T,this.raphael=U,this.deselect=F(this.deselect,this),this.select=F(this.select,this),this.sin_p0=_Mathsin(P),this.cos_p0=_Mathcos(P),this.sin_p1=_Mathsin(Q),this.cos_p1=_Mathcos(Q),this.is_long=Q-P>_MathPI?1:0,this.path=this.calcSegment(this.inner+3,this.inner+this.outer-5),this.selectedPath=this.calcSegment(this.inner+3,this.inner+this.outer),this.hilight=this.calcArc(this.inner)}return H(K,J),K.prototype.calcArcPoints=function(L){return[this.cx+L*this.sin_p0,this.cy+L*this.cos_p0,this.cx+L*this.sin_p1,this.cy+L*this.cos_p1]},K.prototype.calcSegment=function(L,M){var N,O,P,Q,R,S,T,U,V,W;return V=this.calcArcPoints(L),N=V[0],P=V[1],O=V[2],Q=V[3],W=this.calcArcPoints(M),R=W[0],T=W[1],S=W[2],U=W[3],"M"+N+","+P+("A"+L+","+L+",0,"+this.is_long+",0,"+O+","+Q)+("L"+S+","+U)+("A"+M+","+M+",0,"+this.is_long+",1,"+R+","+T)+"Z"},K.prototype.calcArc=function(L){var M,N,O,P,Q;return Q=this.calcArcPoints(L),M=Q[0],O=Q[1],N=Q[2],P=Q[3],"M"+M+","+O+("A"+L+","+L+",0,"+this.is_long+",0,"+N+","+P)},K.prototype.render=function(){var L=this;return this.arc=this.drawDonutArc(this.hilight,this.color),this.seg=this.drawDonutSegment(this.path,this.color,this.backgroundColor,function(){return L.fire("hover",L.index)},function(){return L.fire("click",L.index)})},K.prototype.drawDonutArc=function(L,M){return this.raphael.path(L).attr({stroke:M,"stroke-width":2,opacity:0})},K.prototype.drawDonutSegment=function(L,M,N,O,P){return this.raphael.path(L).attr({fill:M,stroke:N,"stroke-width":3}).hover(O).click(P)},K.prototype.select=function(){if(!this.selected)return this.seg.animate({path:this.selectedPath},150,"<>"),this.arc.animate({opacity:1},150,"<>"),this.selected=!0},K.prototype.deselect=function(){if(this.selected)return this.seg.animate({path:this.path},150,"<>"),this.arc.animate({opacity:0},150,"<>"),this.selected=!1},K}(A.EventEmitter)}).call(this)},{}],2:[function(c){"use strict";c("morris.js/morris")},{"morris.js/morris":1}]},{},[2]);