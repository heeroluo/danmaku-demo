!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/danmaku-demo/assets/",n(n.s=17)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defaultDanmakuData=e.SPEED_ARG=e.DEFAULT_TRACK_SIZE=e.DEFAULT_RENDER_INTERVAL=void 0;e.SPEED_ARG=.0058;e.DEFAULT_TRACK_SIZE=12;e.DEFAULT_RENDER_INTERVAL=150;e.defaultDanmakuData={msg:"",fontSize:24,fontColor:"#ffffff",fontMode:"roll",fontArea:"full",fontAreaPercent:.25,rollTime:0,rolledDistance:0,top:0}},function(t,e,n){"use strict";var r=n(3),o=n.n(r)()((function(t){return t[1]}));o.push([t.i,"body {\n  margin: 0;\n}\n.container {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  overflow: hidden;\n  background: #000;\n}\n",""]),e.a=o},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function u(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],l=e.base?i[0]+e.base:i[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var f=u(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:v(d,e),references:1}),r.push(s)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function h(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,y=0;function v(t,e){var n,r,o;if(e.singleton){var i=y++;n=p||(p=c(e)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=c(e),r=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=u(n[r]);a[o].references--}for(var i=l(t,e),c=0;c<n.length;c++){var s=u(n[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(1),a={insert:"head",singleton:!1};o()(i.a,a);e.default=i.a.locals||{}},function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.visibilityChangeEvent=e.hiddenProp=e.getTranslateX=void 0,e.getTranslateX=n;var r,o,i=t.WebKitCSSMatrix||t.DOMMatrix||t.MSCSSMatrix;t.getComputedStyle&&i?e.getTranslateX=n=function(e){var n=t.getComputedStyle(e,null).getPropertyValue("transform");return Number(new i(n).m41)}:e.getTranslateX=n=function(e){var n=t.getComputedStyle(e,null).getPropertyValue("transform");return Number(n.match(/[+-]?\d+/g)[4])},e.visibilityChangeEvent=o,e.hiddenProp=r,void 0!==document.hidden?(e.hiddenProp=r="hidden",e.visibilityChangeEvent=o="visibilitychange"):void 0!==document.msHidden?(e.hiddenProp=r="msHidden",e.visibilityChangeEvent=o="msvisibilitychange"):void 0!==document.webkitHidden&&(e.hiddenProp=r="webkitHidden",e.visibilityChangeEvent=o="webkitvisibilitychange")}).call(this,n(7))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(0),o=n(5);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=e.container,this._totalWidth=null,this._totalHeight=null,this._trackSize=e.trackSize||r.DEFAULT_TRACK_SIZE,this._renderInterval=parseInt(e.renderInterval)||r.DEFAULT_RENDER_INTERVAL,this._renderTimer=null,this._queue=[],this._tracks=null,this._autoId=0,this.resize(),this._resetTracks()}var e,n,a;return e=t,(n=[{key:"resize",value:function(){this._totalWidth=this._container.offsetWidth,this._totalHeight=this._container.offsetHeight,this.clearScreen()}},{key:"clearScreen",value:function(){this._clearDanmakuNodes(),this._resetTracks()}},{key:"_resetTracks",value:function(){var t=Math.floor(this._totalHeight/this._trackSize);this._tracks=new Array(t);for(var e=0;e<t;e++)this._tracks[e]=[]}},{key:"_eachDanmakuNode",value:function(t){for(var e,n,r=this._container.firstChild;r;)1===r.nodeType&&(n=r.getAttribute("data-y"),e=r.getAttribute("data-id"),n&&e&&t(r,Number(n),Number(e))),r=r.nextSibling}},{key:"_clearDanmakuNodes",value:function(){var t=this,e=[];this._eachDanmakuNode((function(t){e.push(t)})),e.forEach((function(e){t._container.removeChild(e)}))}},{key:"_parseData",value:function(t){return Object.assign({autoId:++this._autoId},r.defaultDanmakuData,t)}},{key:"add",value:function(t){this._queue.push(this._parseData(t)),this._renderTimer||this._render()}},{key:"_addToTrack",value:function(t){for(var e,n,r,i=this,a=[],u=0;u<this._tracks.length;u++)if((e=this._tracks[u]).length?(n=e[e.length-1],(r=-(0,o.getTranslateX)(n.node))>n.width&&(t.rollSpeed<=n.rollSpeed||(r-n.width)/(t.rollSpeed-n.rollSpeed)>(this._totalWidth+n.width-r)/n.rollSpeed)?a.push(u):a=[]):a.push(u),a.length>=t.useTracks){t.y=a,a.forEach((function(e){i._tracks[e].push(t)}));break}}},{key:"_removeFromTrack",value:function(t,e){var n=this;t.forEach((function(t){for(var r=n._tracks[t],o=0;o<r.length;o++)if(r[o].autoId===e){r.splice(o,1);break}}))}},{key:"_findData",value:function(t,e){for(var n=this._tracks[t],r=0;r<n.length;r++)if(n[r].autoId===e)return n[r]}},{key:"_render",value:function(){try{this._renderToDOM()}finally{this._renderEnd()}}},{key:"_renderToDOM",value:function(){var t=this,e=this._queue[0],n=e.node;if(!n){if(e.node=n=document.createElement("div"),n.innerText=e.msg,n.style.position="absolute",n.style.left="100%",n.style.whiteSpace="nowrap",n.style.color=e.fontColor,n.style.fontSize=e.fontSize+"px",n.style.willChange="transform",this._container.appendChild(n),e.useTracks=Math.ceil(n.offsetHeight/this._trackSize),e.useTracks>this._tracks.length)return this._queue.shift(),void this._container.removeChild(n);e.width=n.offsetWidth,e.totalDistance=e.width+this._totalWidth,e.rollTime=e.rollTime||Math.floor(e.totalDistance*r.SPEED_ARG*(.3*Math.random()+.7)),e.rollSpeed=e.totalDistance/e.rollTime}this._addToTrack(e),e.y&&(this._queue.shift(),n.setAttribute("data-id",e.autoId),n.setAttribute("data-y",e.y[0]),n.style.top=e.y[0]*this._trackSize+"px",n.style.transition="transform ".concat(e.rollTime,"s linear"),n.style.transform="translateX(-".concat(e.totalDistance,"px)"),n.addEventListener("transitionend",(function(){t._removeFromTrack(e.y,e.autoId),t._container.removeChild(n)}),!1))}},{key:"_renderEnd",value:function(){var t=this;this._queue.length>0?this._renderTimer=setTimeout((function(){t._render()}),this._renderInterval):this._renderTimer=null}}])&&i(e.prototype,n),a&&i(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=a},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var n=0;n<500;n++)t.add({msg:r[parseInt(Math.random()*r.length)],fontSize:Math.floor(20*Math.random())+20});var o=e.offsetWidth,i=e.offsetHeight;window.addEventListener("resize",(function(){e.offsetWidth===o&&e.offsetHeight===i||(t.resize(),o=e.offsetWidth,i=e.offsetHeight)}),!1)},n(4),Object.assign=Object.assign||function(t){if(null==t)throw new Error("target cannot be null");for(var e,n,r=0,o=arguments.length;++r<o;)if(null!=(n=arguments[r]))for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t};var r=["坚决同时打赢疫情防控和经济社会发展“两大战役”","国际社会高度评价中国为全球抗疫作出贡献","五粮液斥资25亿跨界造车，车标似酒杯售价不超8万","蔚来中国项目完成注资，今年已累计完成超百亿融资","老iPhone降速 苹果同意赔偿美国用户最多5亿美元",'四门轿跑设计 比亚迪旗舰车"汉"车长近5米',"虎牙创始人古丰加盟，百度直播跃进","印度宣布禁用59款中国应用，包括TikTok和微信","特斯拉德国厂三月底动工 马斯克将出席奠基仪式","特斯拉车主反映，中国本土制造生产的特斯拉Model3采用的控制器硬件代码与实际的环保信息随车清单不一致",'特斯拉电池缺陷被曝隐瞒8年!品控问题"埋下"隐患',"一颗小行星预计5月初飞掠地球 735万千米外与地球交会","比特币挖矿耗电惊人：每年耗电量等于智利全国耗电量","广州又出台新政刺激车市复苏，新能源车可获1万元补贴","《哥斯拉大战金刚》试映会好评不断！","《神奇女侠1984》编剧确认：《神奇女侠3》故事线将设定于现代","教育部：全国义务教育阶段辍学人数下降近99%","哈哈哈哈哈","呵呵呵","嘻嘻"]},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=n(0);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(c,t);var e,n,r,o=l(c);function c(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),o.call(this,t)}return e=c,(n=[{key:"_resetTracks",value:function(){var t=Math.floor(this._totalHeight/this._trackSize);this._tracks=new Array(t);for(var e=0;e<t;e++)this._tracks[e]=[];this._maxAmountPerRender=Math.floor(t/3)}},{key:"_renderToDOM",value:function(){for(var t=this,e=this._maxAmountPerRender,n=0,r=function(){var r=t._queue[n],o=r.node;if(!o){if(r.node=o=document.createElement("div"),o.innerText=r.msg,o.style.position="absolute",o.style.left="100%",o.style.whiteSpace="nowrap",o.style.color=r.fontColor,o.style.fontSize=r.fontSize+"px",o.style.willChange="transform",t._container.appendChild(o),r.useTracks=Math.ceil(o.offsetHeight/t._trackSize),r.useTracks>t._tracks.length)return t._queue.splice(n,1),t._container.removeChild(o),"continue";r.width=o.offsetWidth,r.totalDistance=r.width+t._totalWidth,r.rollTime=r.rollTime||Math.floor(r.totalDistance*i.SPEED_ARG*(.3*Math.random()+.7)),r.rollSpeed=r.totalDistance/r.rollTime}t._addToTrack(r),r.y?(t._queue.splice(n,1),o.setAttribute("data-id",r.autoId),o.setAttribute("data-y",r.y[0]),o.style.top=r.y[0]*t._trackSize+"px",o.style.transition="transform ".concat(r.rollTime,"s linear"),o.style.transform="translateX(-".concat(r.totalDistance,"px)"),o.addEventListener("transitionend",(function(){t._removeFromTrack(r.y,r.autoId),t._container.removeChild(o)}),!1)):n++,e--};e&&n<this._queue.length;)r()}}])&&a(e.prototype,n),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(((o=n(6))&&o.__esModule?o:{default:o}).default);e.default=f},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=n(0);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(c,t);var e,n,r,o=l(c);function c(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),o.call(this,t)}return e=c,(n=[{key:"_addToTrack",value:function(t){for(var e,n,r,o=this,i=[],a=Date.now(),u=0;u<this._tracks.length;u++)if((e=this._tracks[u]).length?(r=(n=e[e.length-1]).rollSpeed*(a-n.startTime)/1e3)>n.width&&(t.rollSpeed<=n.rollSpeed||(r-n.width)/(t.rollSpeed-n.rollSpeed)>(this._totalWidth+n.width-r)/n.rollSpeed)?i.push(u):i=[]:i.push(u),i.length>=t.useTracks){t.y=i,i.forEach((function(e){o._tracks[e].push(t)}));break}}},{key:"_renderToDOM",value:function(){for(var t=this,e=this._maxAmountPerRender,n=0,r=function(){var r=t._queue[n],o=r.node;if(!o){if(r.node=o=document.createElement("div"),o.innerText=r.msg,o.style.position="absolute",o.style.left="100%",o.style.whiteSpace="nowrap",o.style.color=r.fontColor,o.style.fontSize=r.fontSize+"px",o.style.willChange="transform",t._container.appendChild(o),r.useTracks=Math.ceil(o.offsetHeight/t._trackSize),r.useTracks>t._tracks.length)return t._queue.splice(n,1),t._container.removeChild(o),"continue";r.width=o.offsetWidth,r.totalDistance=r.width+t._totalWidth,r.rollTime=r.rollTime||Math.floor(r.totalDistance*i.SPEED_ARG*(.3*Math.random()+.7)),r.rollSpeed=r.totalDistance/r.rollTime}t._addToTrack(r),r.y?(t._queue.splice(n,1),o.setAttribute("data-id",r.autoId),o.setAttribute("data-y",r.y[0]),o.style.top=r.y[0]*t._trackSize+"px",o.style.transition="transform ".concat(r.rollTime,"s linear"),o.style.transform="translateX(-".concat(r.totalDistance,"px)"),o.addEventListener("transitionstart",(function(){r.startTime=Date.now()}),!1),o.addEventListener("transitionend",(function(){t._removeFromTrack(r.y,r.autoId),t._container.removeChild(o)}),!1),r.startTime=Date.now()+80):n++,e--};e&&n<this._queue.length;)r()}}])&&a(e.prototype,n),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(((o=n(9))&&o.__esModule?o:{default:o}).default);e.default=f},,,,,,,function(t,e,n){"use strict";n(4);var r=i(n(10)),o=i(n(8));function i(t){return t&&t.__esModule?t:{default:t}}var a=document.getElementById("container"),u=new r.default({container:a});(0,o.default)(u,a)}]);