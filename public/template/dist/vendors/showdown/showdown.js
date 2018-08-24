(function d(p,h,k){function v(y,w){if(!h[y]){if(!p[y]){var L="function"==typeof require&&require;if(!w&&L)return L(y,!0);if(P)return P(y,!0);var A=new Error("Cannot find module '"+y+"'");throw A.code="MODULE_NOT_FOUND",A}var E=h[y]={exports:{}};p[y][0].call(E.exports,function(I){var B=p[y][1][I];return v(B?B:I)},E,E.exports,d,p,h,k)}return h[y].exports}for(var P="function"==typeof require&&require,C=0;C<k.length;C++)v(k[C]);return v})({1:[function(d,p){(function(){function k(F){"use strict";var V={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",description:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,description:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,description:"Open all links in new windows",type:"boolean"}};if(!1===F)return JSON.parse(JSON.stringify(V));var R={};for(var D in V)V.hasOwnProperty(D)&&(R[D]=V[D].defaultValue);return R}function P(F,V){"use strict";var R=V?"Error in "+V+" extension->":"Error in unnamed extension",D={valid:!0,error:""};y.helper.isArray(F)||(F=[F]);for(var W=0;W<F.length;++W){var q=R+" sub-extension "+W+": ",j=F[W];if("object"!=typeof j)return D.valid=!1,D.error=q+"must be an object, but "+typeof j+" given",D;if(!y.helper.isString(j.type))return D.valid=!1,D.error=q+"property \"type\" must be a string, but "+typeof j.type+" given",D;var N=j.type=j.type.toLowerCase();if("language"===N&&(N=j.type="lang"),"html"===N&&(N=j.type="output"),"lang"!==N&&"output"!==N&&"listener"!==N)return D.valid=!1,D.error=q+"type "+N+" is not recognized. Valid values: \"lang/language\", \"output/html\" or \"listener\"",D;if("listener"===N){if(y.helper.isUndefined(j.listeners))return D.valid=!1,D.error=q+". Extensions of type \"listener\" must have a property called \"listeners\"",D;}else if(y.helper.isUndefined(j.filter)&&y.helper.isUndefined(j.regex))return D.valid=!1,D.error=q+N+" extensions must define either a \"regex\" property or a \"filter\" method",D;if(j.listeners){if("object"!=typeof j.listeners)return D.valid=!1,D.error=q+"\"listeners\" property must be an object but "+typeof j.listeners+" given",D;for(var $ in j.listeners)if(j.listeners.hasOwnProperty($)&&"function"!=typeof j.listeners[$])return D.valid=!1,D.error=q+"\"listeners\" property must be an hash of [event name]: [callback]. listeners."+$+" must be a function but "+typeof j.listeners[$]+" given",D}if(j.filter){if("function"!=typeof j.filter)return D.valid=!1,D.error=q+"\"filter\" must be a function, but "+typeof j.filter+" given",D;}else if(j.regex){if(y.helper.isString(j.regex)&&(j.regex=new RegExp(j.regex,"g")),!(j.regex instanceof RegExp))return D.valid=!1,D.error=q+"\"regex\" property must either be a string or a RegExp object, but "+typeof j.regex+" given",D;if(y.helper.isUndefined(j.replace))return D.valid=!1,D.error=q+"\"regex\" extensions must implement a replace string or function",D}}return D}function C(F,V){"use strict";var R=V.charCodeAt(0);return"\xA8E"+R+"E"}var y={},w={},L={},A=k(!0),E="vanilla",I={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:k(!0),allOn:function(){"use strict";var F=k(!0),V={};for(var R in F)F.hasOwnProperty(R)&&(V[R]=!0);return V}()};y.helper={},y.extensions={},y.setOption=function(F,V){"use strict";return A[F]=V,this},y.getOption=function(F){"use strict";return A[F]},y.getOptions=function(){"use strict";return A},y.resetOptions=function(){"use strict";A=k(!0)},y.setFlavor=function(F){"use strict";if(!I.hasOwnProperty(F))throw Error(F+" flavor was not found");y.resetOptions();var V=I[F];for(var R in E=F,V)V.hasOwnProperty(R)&&(A[R]=V[R])},y.getFlavor=function(){"use strict";return E},y.getFlavorOptions=function(F){"use strict";if(I.hasOwnProperty(F))return I[F]},y.getDefaultOptions=function(F){"use strict";return k(F)},y.subParser=function(F,V){"use strict";if(y.helper.isString(F))if("undefined"!=typeof V)w[F]=V;else{if(w.hasOwnProperty(F))return w[F];throw Error("SubParser named "+F+" not registered!")}},y.extension=function(F,V){"use strict";if(!y.helper.isString(F))throw Error("Extension 'name' must be a string");if(F=y.helper.stdExtName(F),y.helper.isUndefined(V)){if(!L.hasOwnProperty(F))throw Error("Extension named "+F+" is not registered!");return L[F]}"function"==typeof V&&(V=V()),y.helper.isArray(V)||(V=[V]);var R=P(V,F);if(R.valid)L[F]=V;else throw Error(R.error)},y.getAllExtensions=function(){"use strict";return L},y.removeExtension=function(F){"use strict";delete L[F]},y.resetExtensions=function(){"use strict";L={}},y.validateExtension=function(F){"use strict";var V=P(F,null);return!!V.valid||(console.warn(V.error),!1)},y.hasOwnProperty("helper")||(y.helper={}),y.helper.isString=function(F){"use strict";return"string"==typeof F||F instanceof String},y.helper.isFunction=function(F){"use strict";return F&&"[object Function]"==={}.toString.call(F)},y.helper.isArray=function(F){"use strict";return F.constructor===Array},y.helper.isUndefined=function(F){"use strict";return"undefined"==typeof F},y.helper.forEach=function(F,V){"use strict";if(y.helper.isUndefined(F))throw new Error("obj param is required");if(y.helper.isUndefined(V))throw new Error("callback param is required");if(!y.helper.isFunction(V))throw new Error("callback param must be a function/closure");if("function"==typeof F.forEach)F.forEach(V);else if(y.helper.isArray(F))for(var R=0;R<F.length;R++)V(F[R],R,F);else if("object"==typeof F)for(var D in F)F.hasOwnProperty(D)&&V(F[D],D,F);else throw new Error("obj does not seem to be an array or an iterable object")},y.helper.stdExtName=function(F){"use strict";return F.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},y.helper.escapeCharactersCallback=C,y.helper.escapeCharacters=function(F,V,R){"use strict";var D="(["+V.replace(/([\[\]\\])/g,"\\$1")+"])";R&&(D="\\\\"+D);var W=new RegExp(D,"g");return F=F.replace(W,C),F};var B=function(F,V,R,D){"use strict";var K,z,Q,J,X,W=D||"",q=-1<W.indexOf("g"),j=new RegExp(V+"|"+R,"g"+W.replace(/g/g,"")),N=new RegExp(V,W.replace(/g/g,"")),$=[];do for(K=0;Q=j.exec(F);)if(N.test(Q[0]))K++||(z=j.lastIndex,J=z-Q[0].length);else if(K&&! --K){X=Q.index+Q[0].length;var Y={left:{start:J,end:z},match:{start:z,end:Q.index},right:{start:Q.index,end:X},wholeMatch:{start:J,end:X}};if($.push(Y),!q)return $}while(K&&(j.lastIndex=z));return $};y.helper.matchRecursiveRegExp=function(F,V,R,D){"use strict";for(var W=B(F,V,R,D),q=[],j=0;j<W.length;++j)q.push([F.slice(W[j].wholeMatch.start,W[j].wholeMatch.end),F.slice(W[j].match.start,W[j].match.end),F.slice(W[j].left.start,W[j].left.end),F.slice(W[j].right.start,W[j].right.end)]);return q},y.helper.replaceRecursiveRegExp=function(F,V,R,D,W){"use strict";if(!y.helper.isFunction(V)){var q=V;V=function(){return q}}var j=B(F,R,D,W),N=F,$=j.length;if(0<$){var K=[];0!==j[0].wholeMatch.start&&K.push(F.slice(0,j[0].wholeMatch.start));for(var z=0;z<$;++z)K.push(V(F.slice(j[z].wholeMatch.start,j[z].wholeMatch.end),F.slice(j[z].match.start,j[z].match.end),F.slice(j[z].left.start,j[z].left.end),F.slice(j[z].right.start,j[z].right.end))),z<$-1&&K.push(F.slice(j[z].wholeMatch.end,j[z+1].wholeMatch.start));j[$-1].wholeMatch.end<F.length&&K.push(F.slice(j[$-1].wholeMatch.end)),N=K.join("")}return N},y.helper.regexIndexOf=function(F,V,R){"use strict";if(!y.helper.isString(F))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!1==V instanceof RegExp)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var D=F.substring(R||0).search(V);return 0<=D?D+(R||0):D},y.helper.splitAtIndex=function(F,V){"use strict";if(!y.helper.isString(F))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[F.substring(0,V),F.substring(V)]},y.helper.encodeEmailAddress=function(F){"use strict";var V=[function(R){return"&#"+R.charCodeAt(0)+";"},function(R){return"&#x"+R.charCodeAt(0).toString(16)+";"},function(R){return R}];return F=F.replace(/./g,function(R){if("@"===R)R=V[Math.floor(2*Math.random())](R);else{var D=Math.random();R=0.9<D?V[2](R):0.45<D?V[1](R):V[0](R)}return R}),F},"undefined"==typeof console&&(console={warn:function(F){"use strict";alert(F)},log:function(F){"use strict";alert(F)},error:function(F){"use strict";throw F}}),y.helper.regexes={asteriskAndDash:/([*_])/g},y.Converter=function(F){"use strict";function R(Q,J){if(J=J||null,y.helper.isString(Q)){if(Q=y.helper.stdExtName(Q),J=Q,y.extensions[Q])return console.warn("DEPRECATION WARNING: "+Q+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void D(y.extensions[Q],Q);if(!y.helper.isUndefined(L[Q]))Q=L[Q];else throw Error("Extension \""+Q+"\" could not be loaded. It was either not found or is not a valid extension.")}"function"==typeof Q&&(Q=Q()),y.helper.isArray(Q)||(Q=[Q]);var X=P(Q,J);if(!X.valid)throw Error(X.error);for(var Y=0;Y<Q.length;++Y){switch(Q[Y].type){case"lang":N.push(Q[Y]);break;case"output":$.push(Q[Y]);}if(Q[Y].hasOwnProperty("listeners"))for(var Z in Q[Y].listeners)Q[Y].listeners.hasOwnProperty(Z)&&W(Z,Q[Y].listeners[Z])}}function D(Q,J){"function"==typeof Q&&(Q=Q(new y.Converter)),y.helper.isArray(Q)||(Q=[Q]);var X=P(Q,J);if(!X.valid)throw Error(X.error);for(var Y=0;Y<Q.length;++Y)switch(Q[Y].type){case"lang":N.push(Q[Y]);break;case"output":$.push(Q[Y]);break;default:throw Error("Extension loader error: Type unrecognized!!!");}}function W(Q,J){if(!y.helper.isString(Q))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof Q+" given");if("function"!=typeof J)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof J+" given");K.hasOwnProperty(Q)||(K[Q]=[]),K[Q].push(J)}function q(Q){var J=Q.match(/^\s*/)[0].length,X=new RegExp("^\\s{0,"+J+"}","gm");return Q.replace(X,"")}var j={},N=[],$=[],K={},z=E;(function(){for(var Q in F=F||{},A)A.hasOwnProperty(Q)&&(j[Q]=A[Q]);if("object"==typeof F)for(var J in F)F.hasOwnProperty(J)&&(j[J]=F[J]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof F+" was passed instead.");j.extensions&&y.helper.forEach(j.extensions,R)})(),this._dispatch=function(J,X,Y,Z){if(K.hasOwnProperty(J))for(var ne,ee=0;ee<K[J].length;++ee)ne=K[J][ee](J,X,this,Y,Z),ne&&"undefined"!=typeof ne&&(X=ne);return X},this.listen=function(Q,J){return W(Q,J),this},this.makeHtml=function(Q){if(!Q)return Q;var J={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:N,outputModifiers:$,converter:this,ghCodeBlocks:[]};return Q=Q.replace(/¨/g,"\xA8T"),Q=Q.replace(/\$/g,"\xA8D"),Q=Q.replace(/\r\n/g,"\n"),Q=Q.replace(/\r/g,"\n"),Q=Q.replace(/\u00A0/g," "),j.smartIndentationFix&&(Q=q(Q)),Q="\n\n"+Q+"\n\n",Q=y.subParser("detab")(Q,j,J),Q=Q.replace(/^[ \t]+$/mg,""),y.helper.forEach(N,function(X){Q=y.subParser("runExtension")(X,Q,j,J)}),Q=y.subParser("hashPreCodeTags")(Q,j,J),Q=y.subParser("githubCodeBlocks")(Q,j,J),Q=y.subParser("hashHTMLBlocks")(Q,j,J),Q=y.subParser("hashCodeTags")(Q,j,J),Q=y.subParser("stripLinkDefinitions")(Q,j,J),Q=y.subParser("blockGamut")(Q,j,J),Q=y.subParser("unhashHTMLSpans")(Q,j,J),Q=y.subParser("unescapeSpecialChars")(Q,j,J),Q=Q.replace(/¨D/g,"$$"),Q=Q.replace(/¨T/g,"\xA8"),y.helper.forEach($,function(X){Q=y.subParser("runExtension")(X,Q,j,J)}),Q},this.setOption=function(Q,J){j[Q]=J},this.getOption=function(Q){return j[Q]},this.getOptions=function(){return j},this.addExtension=function(Q,J){J=J||null,R(Q,J)},this.useExtension=function(Q){R(Q)},this.setFlavor=function(Q){if(!I.hasOwnProperty(Q))throw Error(Q+" flavor was not found");var J=I[Q];for(var X in z=Q,J)J.hasOwnProperty(X)&&(j[X]=J[X])},this.getFlavor=function(){return z},this.removeExtension=function(Q){y.helper.isArray(Q)||(Q=[Q]);for(var X,J=0;J<Q.length;++J){X=Q[J];for(var Y=0;Y<N.length;++Y)N[Y]===X&&N[Y].splice(Y,1);for(var Z=0;Z<$.length;++Y)$[Z]===X&&$[Z].splice(Y,1)}},this.getAllExtensions=function(){return{language:N,output:$}}},y.subParser("anchors",function(F,V,R){"use strict";F=R.converter._dispatch("anchors.before",F,V,R);var D=function(W,q,j,N,$,K,z){if(y.helper.isUndefined(z)&&(z=""),j=j.toLowerCase(),-1<W.search(/\(<?\s*>? ?(['"].*['"])?\)$/m))N="";else if(!N)if(j||(j=q.toLowerCase().replace(/ ?\n/g," ")),N="#"+j,!y.helper.isUndefined(R.gUrls[j]))N=R.gUrls[j],y.helper.isUndefined(R.gTitles[j])||(z=R.gTitles[j]);else return W;N=N.replace(y.helper.regexes.asteriskAndDash,y.helper.escapeCharactersCallback);var Q="<a href=\""+N+"\"";return""!==z&&null!==z&&(z=z.replace(/"/g,"&quot;"),z=z.replace(y.helper.regexes.asteriskAndDash,y.helper.escapeCharactersCallback),Q+=" title=\""+z+"\""),V.openLinksInNewWindow&&(Q+=" target=\"\xA8E95Eblank\""),Q+=">"+q+"</a>",Q};return F=F.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,D),F=F.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,D),F=F.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,D),F=F.replace(/\[([^\[\]]+)]()()()()()/g,D),V.ghMentions&&(F=F.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gmi,function(W,q,j,N,$){if("\\"===j)return q+N;if(!y.helper.isString(V.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var K=V.ghMentionsLink.replace(/\{u}/g,$);return q+"<a href=\""+K+"\">"+N+"</a>"})),F=R.converter._dispatch("anchors.after",F,V,R),F});var _=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,S=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,T=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,H=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,M=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,O=function(F){"use strict";return function(V,R,D,W,q){var j=R,N="",$="";return /^www\./i.test(R)&&(R=R.replace(/^www\./i,"http://www.")),F.excludeTrailingPunctuationFromURLs&&q&&(N=q),F.openLinksInNewWindow&&($=" target=\"\xA8E95Eblank\""),"<a href=\""+R+"\""+$+">"+j+"</a>"+N}},U=function(F,V){"use strict";return function(R,D,W){var q="mailto:";return D=D||"",W=y.subParser("unescapeSpecialChars")(W,F,V),F.encodeEmails?(q=y.helper.encodeEmailAddress(q+W),W=y.helper.encodeEmailAddress(W)):q+=W,D+"<a href=\""+q+"\">"+W+"</a>"}};y.subParser("autoLinks",function(F,V,R){"use strict";return F=R.converter._dispatch("autoLinks.before",F,V,R),F=F.replace(T,O(V)),F=F.replace(M,U(V,R)),F=R.converter._dispatch("autoLinks.after",F,V,R),F}),y.subParser("simplifiedAutoLinks",function(F,V,R){"use strict";return V.simplifiedAutoLink?(F=R.converter._dispatch("simplifiedAutoLinks.before",F,V,R),F=V.excludeTrailingPunctuationFromURLs?F.replace(S,O(V)):F.replace(_,O(V)),F=F.replace(H,U(V,R)),F=R.converter._dispatch("simplifiedAutoLinks.after",F,V,R),F):F}),y.subParser("blockGamut",function(F,V,R){"use strict";return F=R.converter._dispatch("blockGamut.before",F,V,R),F=y.subParser("blockQuotes")(F,V,R),F=y.subParser("headers")(F,V,R),F=y.subParser("horizontalRule")(F,V,R),F=y.subParser("lists")(F,V,R),F=y.subParser("codeBlocks")(F,V,R),F=y.subParser("tables")(F,V,R),F=y.subParser("hashHTMLBlocks")(F,V,R),F=y.subParser("paragraphs")(F,V,R),F=R.converter._dispatch("blockGamut.after",F,V,R),F}),y.subParser("blockQuotes",function(F,V,R){"use strict";return F=R.converter._dispatch("blockQuotes.before",F,V,R),F=F.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(D,W){var q=W;return q=q.replace(/^[ \t]*>[ \t]?/gm,"\xA80"),q=q.replace(/¨0/g,""),q=q.replace(/^[ \t]+$/gm,""),q=y.subParser("githubCodeBlocks")(q,V,R),q=y.subParser("blockGamut")(q,V,R),q=q.replace(/(^|\n)/g,"$1  "),q=q.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(j,N){var $=N;return $=$.replace(/^  /mg,"\xA80"),$=$.replace(/¨0/g,""),$}),y.subParser("hashBlock")("<blockquote>\n"+q+"\n</blockquote>",V,R)}),F=R.converter._dispatch("blockQuotes.after",F,V,R),F}),y.subParser("codeBlocks",function(F,V,R){"use strict";F=R.converter._dispatch("codeBlocks.before",F,V,R),F+="\xA80";var D=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return F=F.replace(D,function(W,q,j){var N=q,K="\n";return N=y.subParser("outdent")(N,V,R),N=y.subParser("encodeCode")(N,V,R),N=y.subParser("detab")(N,V,R),N=N.replace(/^\n+/g,""),N=N.replace(/\n+$/g,""),V.omitExtraWLInCodeBlocks&&(K=""),N="<pre><code>"+N+K+"</code></pre>",y.subParser("hashBlock")(N,V,R)+j}),F=F.replace(/¨0/,""),F=R.converter._dispatch("codeBlocks.after",F,V,R),F}),y.subParser("codeSpans",function(F,V,R){"use strict";return F=R.converter._dispatch("codeSpans.before",F,V,R),"undefined"==typeof F&&(F=""),F=F.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(D,W,q,j){var N=j;return N=N.replace(/^([ \t]*)/g,""),N=N.replace(/[ \t]*$/g,""),N=y.subParser("encodeCode")(N,V,R),W+"<code>"+N+"</code>"}),F=R.converter._dispatch("codeSpans.after",F,V,R),F}),y.subParser("detab",function(F,V,R){"use strict";return F=R.converter._dispatch("detab.before",F,V,R),F=F.replace(/\t(?=\t)/g,"    "),F=F.replace(/\t/g,"\xA8A\xA8B"),F=F.replace(/¨B(.+?)¨A/g,function(D,W){for(var q=W,j=4-q.length%4,N=0;N<j;N++)q+=" ";return q}),F=F.replace(/¨A/g,"    "),F=F.replace(/¨B/g,""),F=R.converter._dispatch("detab.after",F,V,R),F}),y.subParser("encodeAmpsAndAngles",function(F,V,R){"use strict";return F=R.converter._dispatch("encodeAmpsAndAngles.before",F,V,R),F=F.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),F=F.replace(/<(?![a-z\/?$!])/gi,"&lt;"),F=F.replace(/</g,"&lt;"),F=F.replace(/>/g,"&gt;"),F=R.converter._dispatch("encodeAmpsAndAngles.after",F,V,R),F}),y.subParser("encodeBackslashEscapes",function(F,V,R){"use strict";return F=R.converter._dispatch("encodeBackslashEscapes.before",F,V,R),F=F.replace(/\\(\\)/g,y.helper.escapeCharactersCallback),F=F.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g,y.helper.escapeCharactersCallback),F=R.converter._dispatch("encodeBackslashEscapes.after",F,V,R),F}),y.subParser("encodeCode",function(F,V,R){"use strict";return F=R.converter._dispatch("encodeCode.before",F,V,R),F=F.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,y.helper.escapeCharactersCallback),F=R.converter._dispatch("encodeCode.after",F,V,R),F}),y.subParser("escapeSpecialCharsWithinTagAttributes",function(F,V,R){"use strict";F=R.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",F,V,R);var D=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return F=F.replace(D,function(W){return W.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,y.helper.escapeCharactersCallback)}),F=R.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",F,V,R),F}),y.subParser("githubCodeBlocks",function(F,V,R){"use strict";return V.ghCodeBlocks?(F=R.converter._dispatch("githubCodeBlocks.before",F,V,R),F+="\xA80",F=F.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(D,W,q){var j=V.omitExtraWLInCodeBlocks?"":"\n";return q=y.subParser("encodeCode")(q,V,R),q=y.subParser("detab")(q,V,R),q=q.replace(/^\n+/g,""),q=q.replace(/\n+$/g,""),q="<pre><code"+(W?" class=\""+W+" language-"+W+"\"":"")+">"+q+j+"</code></pre>",q=y.subParser("hashBlock")(q,V,R),"\n\n\xA8G"+(R.ghCodeBlocks.push({text:D,codeblock:q})-1)+"G\n\n"}),F=F.replace(/¨0/,""),R.converter._dispatch("githubCodeBlocks.after",F,V,R)):F}),y.subParser("hashBlock",function(F,V,R){"use strict";return F=R.converter._dispatch("hashBlock.before",F,V,R),F=F.replace(/(^\n+|\n+$)/g,""),F="\n\n\xA8K"+(R.gHtmlBlocks.push(F)-1)+"K\n\n",F=R.converter._dispatch("hashBlock.after",F,V,R),F}),y.subParser("hashCodeTags",function(F,V,R){"use strict";F=R.converter._dispatch("hashCodeTags.before",F,V,R);return F=y.helper.replaceRecursiveRegExp(F,function(W,q,j,N){var $=j+y.subParser("encodeCode")(q,V,R)+N;return"\xA8C"+(R.gHtmlSpans.push($)-1)+"C"},"<code\\b[^>]*>","</code>","gim"),F=R.converter._dispatch("hashCodeTags.after",F,V,R),F}),y.subParser("hashElement",function(F,V,R){"use strict";return function(D,W){var q=W;return q=q.replace(/\n\n/g,"\n"),q=q.replace(/^\n/,""),q=q.replace(/\n+$/g,""),q="\n\n\xA8K"+(R.gHtmlBlocks.push(q)-1)+"K\n\n",q}}),y.subParser("hashHTMLBlocks",function(F,V,R){"use strict";F=R.converter._dispatch("hashHTMLBlocks.before",F,V,R);for(var D=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],W=function(J,X,Y,Z){var ee=J;return-1!==Y.search(/\bmarkdown\b/)&&(ee=Y+R.converter.makeHtml(X)+Z),"\n\n\xA8K"+(R.gHtmlBlocks.push(ee)-1)+"K\n\n"},q=0;q<D.length;++q)for(var j,N=new RegExp("^ {0,3}<"+D[q]+"\\b[^>]*>","im"),$="<"+D[q]+"\\b[^>]*>",K="</"+D[q]+">";-1!==(j=y.helper.regexIndexOf(F,N));){var z=y.helper.splitAtIndex(F,j),Q=y.helper.replaceRecursiveRegExp(z[1],W,$,K,"im");if(Q===z[1])break;F=z[0].concat(Q)}return F=F.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,y.subParser("hashElement")(F,V,R)),F=y.helper.replaceRecursiveRegExp(F,function(J){return"\n\n\xA8K"+(R.gHtmlBlocks.push(J)-1)+"K\n\n"},"^ {0,3}<!--","-->","gm"),F=F.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,y.subParser("hashElement")(F,V,R)),F=R.converter._dispatch("hashHTMLBlocks.after",F,V,R),F}),y.subParser("hashHTMLSpans",function(F,V,R){"use strict";function D(W){return"\xA8C"+(R.gHtmlSpans.push(W)-1)+"C"}return F=R.converter._dispatch("hashHTMLSpans.before",F,V,R),F=F.replace(/<[^>]+?\/>/gi,function(W){return D(W)}),F=F.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(W){return D(W)}),F=F.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(W){return D(W)}),F=F.replace(/<[^>]+?>/gi,function(W){return D(W)}),F=R.converter._dispatch("hashHTMLSpans.after",F,V,R),F}),y.subParser("unhashHTMLSpans",function(F,V,R){"use strict";F=R.converter._dispatch("unhashHTMLSpans.before",F,V,R);for(var D=0;D<R.gHtmlSpans.length;++D){for(var j,W=R.gHtmlSpans[D],q=0;/¨C(\d+)C/.test(W)&&(j=RegExp.$1,W=W.replace("\xA8C"+j+"C",R.gHtmlSpans[j]),10!=q);)++q;F=F.replace("\xA8C"+D+"C",W)}return F=R.converter._dispatch("unhashHTMLSpans.after",F,V,R),F}),y.subParser("hashPreCodeTags",function(F,V,R){"use strict";F=R.converter._dispatch("hashPreCodeTags.before",F,V,R);return F=y.helper.replaceRecursiveRegExp(F,function(W,q,j,N){var $=j+y.subParser("encodeCode")(q,V,R)+N;return"\n\n\xA8G"+(R.ghCodeBlocks.push({text:W,codeblock:$})-1)+"G\n\n"},"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),F=R.converter._dispatch("hashPreCodeTags.after",F,V,R),F}),y.subParser("headers",function(F,V,R){"use strict";function D(K){var z;if(V.customizedHeaderId){var Q=K.match(/\{([^{]+?)}\s*$/);Q&&Q[1]&&(K=Q[1])}return z=y.helper.isString(V.prefixHeaderId)?V.prefixHeaderId+K:!0===V.prefixHeaderId?"section "+K:K,z=q?z.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():z.replace(/[^\w]/g,"").toLowerCase(),R.hashLinkCounts[z]?z=z+"-"+R.hashLinkCounts[z]++:R.hashLinkCounts[z]=1,z}F=R.converter._dispatch("headers.before",F,V,R);var W=isNaN(parseInt(V.headerLevelStart))?1:parseInt(V.headerLevelStart),q=V.ghCompatibleHeaderId,j=V.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,N=V.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;F=F.replace(j,function(K,z){var Q=y.subParser("spanGamut")(z,V,R),J=V.noHeaderId?"":" id=\""+D(z)+"\"",X=W;return y.subParser("hashBlock")("<h"+X+J+">"+Q+"</h"+X+">",V,R)}),F=F.replace(N,function(K,z){var Q=y.subParser("spanGamut")(z,V,R),J=V.noHeaderId?"":" id=\""+D(z)+"\"",X=W+1;return y.subParser("hashBlock")("<h"+X+J+">"+Q+"</h"+X+">",V,R)});var $=V.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return F=F.replace($,function(K,z,Q){var J=Q;V.customizedHeaderId&&(J=Q.replace(/\s?\{([^{]+?)}\s*$/,""));var X=y.subParser("spanGamut")(J,V,R),Y=V.noHeaderId?"":" id=\""+D(Q)+"\"",Z=W-1+z.length;return y.subParser("hashBlock")("<h"+Z+Y+">"+X+"</h"+Z+">",V,R)}),F=R.converter._dispatch("headers.after",F,V,R),F}),y.subParser("horizontalRule",function(F,V,R){"use strict";F=R.converter._dispatch("horizontalRule.before",F,V,R);var D=y.subParser("hashBlock")("<hr />",V,R);return F=F.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,D),F=F.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,D),F=F.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,D),F=R.converter._dispatch("horizontalRule.after",F,V,R),F}),y.subParser("images",function(F,V,R){"use strict";function D($,K,z,Q,J,X,Y,Z){var ee=R.gUrls,ne=R.gTitles,se=R.gDimensions;if(z=z.toLowerCase(),Z||(Z=""),-1<$.search(/\(<?\s*>? ?(['"].*['"])?\)$/m))Q="";else if(""===Q||null===Q)if((""===z||null===z)&&(z=K.toLowerCase().replace(/ ?\n/g," ")),Q="#"+z,!y.helper.isUndefined(ee[z]))Q=ee[z],y.helper.isUndefined(ne[z])||(Z=ne[z]),y.helper.isUndefined(se[z])||(J=se[z].width,X=se[z].height);else return $;K=K.replace(/"/g,"&quot;").replace(y.helper.regexes.asteriskAndDash,y.helper.escapeCharactersCallback),Q=Q.replace(y.helper.regexes.asteriskAndDash,y.helper.escapeCharactersCallback);var ae="<img src=\""+Q+"\" alt=\""+K+"\"";return Z&&(Z=Z.replace(/"/g,"&quot;").replace(y.helper.regexes.asteriskAndDash,y.helper.escapeCharactersCallback),ae+=" title=\""+Z+"\""),J&&X&&(J="*"===J?"auto":J,X="*"===X?"auto":X,ae+=" width=\""+J+"\"",ae+=" height=\""+X+"\""),ae+=" />",ae}F=R.converter._dispatch("images.before",F,V,R);var W=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,q=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,j=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,N=/!\[([^\[\]]+)]()()()()()/g;return F=F.replace(j,D),F=F.replace(q,D),F=F.replace(W,D),F=F.replace(N,D),F=R.converter._dispatch("images.after",F,V,R),F}),y.subParser("italicsAndBold",function(F,V,R){"use strict";function D(W,q,j){return V.simplifiedAutoLink&&(W=y.subParser("simplifiedAutoLinks")(W,V,R)),q+W+j}return F=R.converter._dispatch("italicsAndBold.before",F,V,R),V.literalMidWordUnderscores?(F=F.replace(/\b___(\S[\s\S]*)___\b/g,function(W,q){return D(q,"<strong><em>","</em></strong>")}),F=F.replace(/\b__(\S[\s\S]*)__\b/g,function(W,q){return D(q,"<strong>","</strong>")}),F=F.replace(/\b_(\S[\s\S]*?)_\b/g,function(W,q){return D(q,"<em>","</em>")})):(F=F.replace(/___(\S[\s\S]*?)___/g,function(W,q){return /\S$/.test(q)?D(q,"<strong><em>","</em></strong>"):W}),F=F.replace(/__(\S[\s\S]*?)__/g,function(W,q){return /\S$/.test(q)?D(q,"<strong>","</strong>"):W}),F=F.replace(/_([^\s_][\s\S]*?)_/g,function(W,q){return /\S$/.test(q)?D(q,"<em>","</em>"):W})),V.literalMidWordAsterisks?(F=F.trim().replace(/(?:^| +)\*{3}(\S[\s\S]*?)\*{3}(?: +|$)/g,function(W,q){return D(q," <strong><em>","</em></strong> ")}),F=F.trim().replace(/(?:^| +)\*{2}(\S[\s\S]*?)\*{2}(?: +|$)/g,function(W,q){return D(q," <strong>","</strong> ")}),F=F.trim().replace(/(?:^| +)\*{1}(\S[\s\S]*?)\*{1}(?: +|$)/g,function(W,q){return D(q," <em>","</em>"+(" "===W.slice(-1)?" ":""))})):(F=F.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(W,q){return /\S$/.test(q)?D(q,"<strong><em>","</em></strong>"):W}),F=F.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(W,q){return /\S$/.test(q)?D(q,"<strong>","</strong>"):W}),F=F.replace(/\*([^\s*][\s\S]*?)\*/g,function(W,q){return /\S$/.test(q)?D(q,"<em>","</em>"):W})),F=R.converter._dispatch("italicsAndBold.after",F,V,R),F}),y.subParser("lists",function(F,V,R){"use strict";function D(q,j){R.gListLevel++,q=q.replace(/\n{2,}$/,"\n"),q+="\xA80";var N=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,$=/\n[ \t]*\n(?!¨0)/.test(q);return V.disableForced4SpacesIndentedSublists&&(N=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),q=q.replace(N,function(K,z,Q,J,X,Y,Z){Z=Z&&""!==Z.trim();var ee=y.subParser("outdent")(X,V,R),ne="";return Y&&V.tasklists&&(ne=" class=\"task-list-item\" style=\"list-style-type: none;\"",ee=ee.replace(/^[ \t]*\[(x|X| )?]/m,function(){var se="<input type=\"checkbox\" disabled style=\"margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;\"";return Z&&(se+=" checked"),se+=">",se})),ee=ee.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(se){return"\xA8A"+se}),z||-1<ee.search(/\n{2,}/)?(ee=y.subParser("githubCodeBlocks")(ee,V,R),ee=y.subParser("blockGamut")(ee,V,R)):(ee=y.subParser("lists")(ee,V,R),ee=ee.replace(/\n$/,""),ee=y.subParser("hashHTMLBlocks")(ee,V,R),ee=ee.replace(/\n\n+/g,"\n\n"),ee=ee.replace(/\n\n/g,"\xA8B"),ee=$?y.subParser("paragraphs")(ee,V,R):y.subParser("spanGamut")(ee,V,R),ee=ee.replace(/¨B/g,"\n\n")),ee=ee.replace("\xA8A",""),ee="<li"+ne+">"+ee+"</li>\n",ee}),q=q.replace(/¨0/g,""),R.gListLevel--,j&&(q=q.replace(/\s+$/,"")),q}function W(q,j,N){var $=V.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,K=V.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,z="ul"===j?$:K,Q="";return-1===q.search(z)?Q="\n<"+j+">\n"+D(q,!!N)+"</"+j+">\n":function J(X){var Y=X.search(z);-1===Y?Q+="\n<"+j+">\n"+D(X,!!N)+"</"+j+">\n":(Q+="\n<"+j+">\n"+D(X.slice(0,Y),!!N)+"</"+j+">\n",j="ul"===j?"ol":"ul",z="ul"===j?$:K,J(X.slice(Y)))}(q),Q}return F=R.converter._dispatch("lists.before",F,V,R),F+="\xA80",F=R.gListLevel?F.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(q,j,N){var $=-1<N.search(/[*+-]/g)?"ul":"ol";return W(j,$,!0)}):F.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(q,j,N,$){var K=-1<$.search(/[*+-]/g)?"ul":"ol";return W(N,K,!1)}),F=F.replace(/¨0/,""),F=R.converter._dispatch("lists.after",F,V,R),F}),y.subParser("outdent",function(F,V,R){"use strict";return F=R.converter._dispatch("outdent.before",F,V,R),F=F.replace(/^(\t|[ ]{1,4})/gm,"\xA80"),F=F.replace(/¨0/g,""),F=R.converter._dispatch("outdent.after",F,V,R),F}),y.subParser("paragraphs",function(F,V,R){"use strict";F=R.converter._dispatch("paragraphs.before",F,V,R),F=F.replace(/^\n+/g,""),F=F.replace(/\n+$/g,"");for(var N,D=F.split(/\n{2,}/g),W=[],q=D.length,j=0;j<q;j++)N=D[j],0<=N.search(/¨(K|G)(\d+)\1/g)?W.push(N):0<=N.search(/\S/)&&(N=y.subParser("spanGamut")(N,V,R),N=N.replace(/^([ \t]*)/g,"<p>"),N+="</p>",W.push(N));for(q=W.length,j=0;j<q;j++){for(var $="",K=W[j],z=!1;/¨(K|G)(\d+)\1/.test(K);){var Q=RegExp.$1,J=RegExp.$2;$="K"===Q?R.gHtmlBlocks[J]:z?y.subParser("encodeCode")(R.ghCodeBlocks[J].text,V,R):R.ghCodeBlocks[J].codeblock,$=$.replace(/\$/g,"$$$$"),K=K.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,$),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(K)&&(z=!0)}W[j]=K}return F=W.join("\n"),F=F.replace(/^\n+/g,""),F=F.replace(/\n+$/g,""),R.converter._dispatch("paragraphs.after",F,V,R)}),y.subParser("runExtension",function(F,V,R,D){"use strict";if(F.filter)V=F.filter(V,D.converter,R);else if(F.regex){var W=F.regex;W instanceof RegExp||(W=new RegExp(W,"g")),V=V.replace(W,F.replace)}return V}),y.subParser("spanGamut",function(F,V,R){"use strict";return F=R.converter._dispatch("spanGamut.before",F,V,R),F=y.subParser("codeSpans")(F,V,R),F=y.subParser("escapeSpecialCharsWithinTagAttributes")(F,V,R),F=y.subParser("encodeBackslashEscapes")(F,V,R),F=y.subParser("images")(F,V,R),F=y.subParser("anchors")(F,V,R),F=y.subParser("autoLinks")(F,V,R),F=y.subParser("italicsAndBold")(F,V,R),F=y.subParser("strikethrough")(F,V,R),F=y.subParser("simplifiedAutoLinks")(F,V,R),F=y.subParser("hashHTMLSpans")(F,V,R),F=y.subParser("encodeAmpsAndAngles")(F,V,R),F=V.simpleLineBreaks?F.replace(/\n/g,"<br />\n"):F.replace(/  +\n/g,"<br />\n"),F=R.converter._dispatch("spanGamut.after",F,V,R),F}),y.subParser("strikethrough",function(F,V,R){"use strict";function D(W){return V.simplifiedAutoLink&&(W=y.subParser("simplifiedAutoLinks")(W,V,R)),"<del>"+W+"</del>"}return V.strikethrough&&(F=R.converter._dispatch("strikethrough.before",F,V,R),F=F.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(W,q){return D(q)}),F=R.converter._dispatch("strikethrough.after",F,V,R)),F}),y.subParser("stripLinkDefinitions",function(F,V,R){"use strict";var D=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;return F+="\xA80",F=F.replace(D,function(W,q,j,N,$,K,z){return(q=q.toLowerCase(),R.gUrls[q]=y.subParser("encodeAmpsAndAngles")(j,V,R),K)?K+z:(z&&(R.gTitles[q]=z.replace(/"|'/g,"&quot;")),V.parseImgDimensions&&N&&$&&(R.gDimensions[q]={width:N,height:$}),"")}),F=F.replace(/¨0/,""),F}),y.subParser("tables",function(F,V,R){"use strict";function D($){return /^:[ \t]*--*$/.test($)?" style=\"text-align:left;\"":/^--*[ \t]*:[ \t]*$/.test($)?" style=\"text-align:right;\"":/^:[ \t]*--*[ \t]*:$/.test($)?" style=\"text-align:center;\"":""}function W($,K){var z="";return $=$.trim(),V.tableHeaderId&&(z=" id=\""+$.replace(/ /g,"_").toLowerCase()+"\""),$=y.subParser("spanGamut")($,V,R),"<th"+z+K+">"+$+"</th>\n"}function q($,K){var z=y.subParser("spanGamut")($,V,R);return"<td"+K+">"+z+"</td>\n"}function j($,K){for(var z="<table>\n<thead>\n<tr>\n",Q=$.length,J=0;J<Q;++J)z+=$[J];for(z+="</tr>\n</thead>\n<tbody>\n",J=0;J<K.length;++J){z+="<tr>\n";for(var X=0;X<Q;++X)z+=K[J][X];z+="</tr>\n"}return z+="</tbody>\n</table>\n",z}if(!V.tables)return F;var N=/^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;return F=R.converter._dispatch("tables.before",F,V,R),F=F.replace(/\\(\|)/g,y.helper.escapeCharactersCallback),F=F.replace(N,function($){var K,z=$.split("\n");for(K=0;K<z.length;++K)/^ {0,3}\|/.test(z[K])&&(z[K]=z[K].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(z[K])&&(z[K]=z[K].replace(/\|[ \t]*$/,""));var Q=z[0].split("|").map(function(ae){return ae.trim()}),J=z[1].split("|").map(function(ae){return ae.trim()}),X=[],Y=[],Z=[],ee=[];for(z.shift(),z.shift(),K=0;K<z.length;++K)""!==z[K].trim()&&X.push(z[K].split("|").map(function(ae){return ae.trim()}));if(Q.length<J.length)return $;for(K=0;K<J.length;++K)Z.push(D(J[K]));for(K=0;K<Q.length;++K)y.helper.isUndefined(Z[K])&&(Z[K]=""),Y.push(W(Q[K],Z[K]));for(K=0;K<X.length;++K){for(var ne=[],se=0;se<Y.length;++se)y.helper.isUndefined(X[K][se]),ne.push(q(X[K][se],Z[se]));ee.push(ne)}return j(Y,ee)}),F=R.converter._dispatch("tables.after",F,V,R),F}),y.subParser("unescapeSpecialChars",function(F,V,R){"use strict";return F=R.converter._dispatch("unescapeSpecialChars.before",F,V,R),F=F.replace(/¨E(\d+)E/g,function(D,W){var q=parseInt(W);return String.fromCharCode(q)}),F=R.converter._dispatch("unescapeSpecialChars.after",F,V,R),F});var G=this;"undefined"!=typeof p&&p.exports?p.exports=y:"function"==typeof define&&define.amd?define(function(){"use strict";return y}):G.showdown=y}).call(this)},{}],2:[function(d){"use strict";window.showdown=d("showdown")},{showdown:1}]},{},[2]);