(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(c,d,a){var b=(function(){var h=["","-webkit-","-moz-","-o-","-ms-"];
var f={"animation-delay":"transitionend","-o-animation-delay":"oTransitionEnd","-moz-animation-delay":"transitionend","-webkit-animation-delay":"webkitTransitionEnd","-ms-animation-delay":"transitionend"};
var l={"animation-delay":"animationstart","-o-animation-delay":"oanimationstart","-moz-animation-delay":"animationstart","-webkit-animation-delay":"webkitAnimationStart","-ms-animation-delay":"MSAnimationStart"};
var i={"animation-delay":"animationiteration","-o-animation-delay":"oanimationiteration","-moz-animation-delay":"animationiteration","-webkit-animation-delay":"webkitAnimationIteration","-ms-animation-delay":"MSAnimationIteration"};
var o={"animation-delay":"animationend","-o-animation-delay":"oanimationend","-moz-animation-delay":"animationend","-webkit-animation-delay":"webkitAnimationEnd","-ms-animation-delay":"MSAnimationEnd"};
var g=document.createElement("_");var j=["","-webkit-","-moz-","-o-","-ms-"];function n(r){for(var p=0;
p<j.length;p++){var q=h[p]+r;if(g.style[q]!==undefined){return q}}return undefined
}var m=["-webkit-","","-moz-","-o-","-ms-"];function k(r){for(var p=0;p<m.length;
p++){var q=m[p]+r;if(g.style[q]!==undefined){return q}}return undefined}return{filter:k("filter"),transform:n("transform"),transformOrigin:n("transform-origin"),transition:n("transition"),transitionDelay:n("transition-delay"),transitionDuration:n("transition-duration"),transitionProperty:n("transition-property"),transitionTimingFunction:n("transition-timing-function"),transitionEnd:f[n("animation-delay")],animation:n("animation"),animationDelay:n("animation-delay"),animationDirection:n("animation-direction"),animationDuration:n("animation-duration"),animationFillMode:n("animation-fill-mode"),animationIterationCount:n("animation-iteration-count"),animationName:n("animation-name"),animationTimingFunction:n("animation-timing-function"),animationPlayState:n("animation-play-state"),animationStart:l[n("animation-delay")],animationIteration:i[n("animation-delay")],animationEnd:o[n("animation-delay")]}
}());d.exports=b},{}],2:[function(d,b,f){var g=d("./utils/eventTypeAvailable");
var j=d("./shared/camelCasedEventTypes");var c=d("./shared/windowFallbackEventTypes");
var h=d("./shared/prefixHelper");var a={};b.exports=function i(m,l){var n;var o;
var k;l=l||"div";m=m.toLowerCase();if(!(l in a)){a[l]={}}o=a[l];if(m in o){return o[m]
}if(g(m,l)){return o[m]=m}if(m in j){for(k=0;k<j[m].length;k++){n=j[m][k];if(g(n.toLowerCase(),l)){return o[m]=n
}}}for(k=0;k<h.evt.length;k++){n=h.evt[k]+m;if(g(n,l)){h.reduce(k);return o[m]=n
}}if(l!=="window"&&c.indexOf(m)){return o[m]=i(m,"window")}return o[m]=false}},{"./shared/camelCasedEventTypes":3,"./shared/prefixHelper":4,"./shared/windowFallbackEventTypes":5,"./utils/eventTypeAvailable":6}],3:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],4:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],5:[function(b,c,a){c.exports=["transitionend","animationstart","animationend","animationiteration",]
},{}],6:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],7:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),removeEventListener:b("./removeEventListener")}
},{"./addEventListener":8,"./dispatchEvent":9,"./removeEventListener":10}],8:[function(c,d,b){var a=c("./shared/getEventType");
d.exports=function f(j,h,i,g){h=a(j,h);g=g||false;j.addEventListener(h,i,g)}},{"./shared/getEventType":11}],9:[function(c,d,b){var a=c("./shared/getEventType");
d.exports=function f(j,i,h){var g;i=a(j,i);g=h?new CustomEvent(i,h):new CustomEvent(i);
j.dispatchEvent(g)}},{"./shared/getEventType":11}],10:[function(c,d,b){var a=c("./shared/getEventType");
d.exports=function f(j,h,i,g){h=a(j,h);g=g||false;j.removeEventListener(h,i,g)}
},{"./shared/getEventType":11}],11:[function(c,f,b){var d=c("@marcom/ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);return g||i}},{"@marcom/ac-prefixer/getEventType":2}],12:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":13,"./ac-clock/ThrottledClock":14,"./ac-clock/sharedClockInstance":15}],13:[function(c,d,b){c("@marcom/ac-polyfills/Function/prototype.bind");
c("@marcom/ac-polyfills/requestAnimationFrame");var g;var f=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var a=new Date().getTime();function h(){f.call(this);this.lastFrameTime=null;this._animationFrame=null;
this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}g=h.prototype=new f(null);
g.start=function(){if(this._active){return}this._tick()};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
};g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};g._onAnimationFrame=function(k){if(this.lastFrameTime===null){this.lastFrameTime=k
}var l=k-this.lastFrameTime;var j=0;if(l>=1000){l=0}if(l!==0){j=1000/l}if(this._firstFrame===true){l=0;
this._firstFrame=false}if(j===0){this._firstFrame=true}else{var i={time:k,delta:l,fps:j,naturalFps:j,timeNow:this._getTime()};
this.trigger("update",i);this.trigger("draw",i)}this._animationFrame=null;this.lastFrameTime=k;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{"@marcom/ac-event-emitter-micro":61,"@marcom/ac-polyfills/Function/prototype.bind":undefined,"@marcom/ac-polyfills/requestAnimationFrame":undefined}],14:[function(c,d,b){c("@marcom/ac-polyfills/requestAnimationFrame");
var g;var a=c("./sharedClockInstance"),f=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
};g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(Math.ceil(1000/j)>=this._fps+2){return}this._clockEvent=i;this._clockEvent.delta=j;
this._clockEvent.fps=1000/j;this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};d.exports=h},{"./sharedClockInstance":15,"@marcom/ac-event-emitter-micro":61,"@marcom/ac-polyfills/requestAnimationFrame":undefined}],15:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":13}],16:[function(b,c,a){c.exports={Clip:b("./ac-clip/Clip")}
},{"./ac-clip/Clip":17}],17:[function(c,b,d){c("@marcom/ac-polyfills/Array/isArray");
var g=c("@marcom/ac-object/create");var l=c("@marcom/ac-easing").createPredefined;
var a=c("@marcom/ac-clock");var j=c("@marcom/ac-easing").Ease;var k=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var i="ease";function h(o,n,q,m){m=m||{};this._options=m;this._isYoyo=m.yoyo;this._direction=1;
this._timeScale=1;this._loop=m.loop||0;this._loopCount=0;this._target=o;this.duration(n);
this._delay=(m.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=m.clock||a;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._propsTo=q||{};this._propsFrom=m.propsFrom||{};this._onStart=m.onStart||null;
this._onUpdate=m.onUpdate||null;this._onDraw=m.onDraw||null;this._onComplete=m.onComplete||null;
var p=m.ease||i;this._ease=(typeof p==="function")?new j(p):l(p);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
h._add(this);k.call(this)}var f=h.prototype=g(k.prototype);h.COMPLETE="complete";
h.PAUSE="pause";h.PLAY="play";f.play=function(){if(!this._playing){this._playing=true;
if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
this._delayStart=this._getTime()}}return this};f.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(h.PAUSE,this)}return this
};f.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
this._onUpdate=null;this._onDraw=null;this._onComplete=null;h._remove(this);k.prototype.destroy.call(this);
return this};f.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}return this};f.playing=function(){return this._playing
};f.target=function(){return this._target};f.duration=function(m){if(m!==undefined){this._duration=m;
this._durationMs=(m*1000)/this._timeScale;if(this._playing){this._setStartTime()
}}return this._duration};f.timeScale=function(m){if(m!==undefined){this._timeScale=m;
this.duration(this._duration)}return this._timeScale};f.currentTime=function(m){if(m!==undefined){return this.progress(m/this._duration)*this._duration
}return(this.progress()*this._duration)};f.progress=function(m){if(m!==undefined){this._progress=Math.min(1,Math.max(0,m));
this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&m===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};f._resetLoop=function(n,m){var o;
for(o in m){if(m.hasOwnProperty(o)){if(m[o]!==null){if(typeof m[o]==="object"){this._resetLoop(n[o],m[o])
}else{n[o]=m[o]}}}}};f._cloneObjects=function(){var o={};var n={};var m={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,o,n,m);
return{target:o,propsTo:n,propsFrom:m}};f._cloneObjectsLoop=function(p,t,s,r,n,m){var o;
var q;for(q in s){if(s.hasOwnProperty(q)&&t[q]===undefined&&p[q]!==undefined){r[q]=p[q];
n[q]=p[q];m[q]=s[q]}}for(q in t){if(p.hasOwnProperty(q)){o=typeof p[q];if(p[q]!==null&&o==="object"){if(Array.isArray(p[q])){r[q]=[];
n[q]=[];m[q]=[]}else{r[q]={};n[q]={};m[q]={}}this._cloneObjectsLoop(p[q],t[q]||{},s[q]||{},r[q],n[q],m[q])
}else{if(t[q]!==null&&o==="number"){r[q]=p[q];n[q]=t[q];if(s&&s[q]!==undefined){m[q]=s[q]
}}}}}};f._prepareProperties=function(){if(!this._isPrepared){var m=this._cloneObjects();
this._storeTarget=m.target;this._propsTo=m.propsTo;this._storePropsTo=this._propsTo;
this._propsFrom=m.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
}};f._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
};f._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
f._setDiffLoop=function(r,q,o,n){var m;var p;for(p in r){if(r.hasOwnProperty(p)){m=typeof r[p];
if(r[p]!==null&&m==="object"){q[p]=q[p]||{};n[p]=n[p]||{};this._setDiffLoop(r[p],q[p],o[p],n[p])
}else{if(m==="number"&&o[p]!==undefined){if(q[p]!==undefined){o[p]=q[p]}else{q[p]=o[p]
}n[p]=r[p]-o[p]}else{r[p]=null;q[p]=null}}}}};f._start=function(){this._startTimeout=null;
this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
}this.trigger(h.PLAY,this)};f._stop=function(){this._playing=false;this._running=false;
this._clock.off("update",this._update);this._clock.off("draw",this._draw)};f._updateProps=function(){var m;
if(this._direction===1){m=this._ease.getValue(this._progress)}else{m=1-this._ease.getValue(1-this._progress)
}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,m)
};f._updatePropsLoop=function(r,q,o,n,m){var p;for(p in r){if(r.hasOwnProperty(p)&&r[p]!==null){if(typeof r[p]!=="number"){this._updatePropsLoop(r[p],q[p],o[p],n[p],m)
}else{o[p]=q[p]+(n[p]*m)}}}};f._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};f._completePropsLoop=function(o,m){var n;for(n in o){if(o.hasOwnProperty(n)&&o[n]!==null){if(typeof o[n]!=="number"){this._completePropsLoop(o[n],m[n])
}else{m[n]=o[n]}}}};f._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.progress(0);this._start()}else{this.trigger(h.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
}if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};f._update=function(m){if(this._running){this._progress=(m.timeNow-this._startTime)/this._durationMs;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
f._draw=function(m){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
if(this._progress===1){this._complete()}}};h._instantiate=function(){this._clips=[];
return this};h._add=function(m){this._clips.push(m)};h._remove=function(n){var m=this._clips.indexOf(n);
if(m>-1){this._clips.splice(m,1)}};h.getAll=function(o){if(o!==undefined){var m=[];
var n=this._clips.length;while(n--){if(this._clips[n].target()===o){m.push(this._clips[n])
}}return m}return Array.prototype.slice.call(this._clips)};h.destroyAll=function(o){var m=this.getAll(o);
if(this._clips.length===m.length){this._clips=[]}var n=m.length;while(n--){m[n].destroy()
}return m};h.to=function(o,n,p,m){m=m||{};if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new h(o,n,p,m).play()};h.from=function(p,o,m,n){n=n||{};n.propsFrom=m;if(n.destroyOnComplete===undefined){n.destroyOnComplete=true
}return new h(p,o,n.propsTo,n).play()};b.exports=h._instantiate()},{"@marcom/ac-clock":12,"@marcom/ac-easing":53,"@marcom/ac-event-emitter-micro":61,"@marcom/ac-object/create":66,"@marcom/ac-polyfills/Array/isArray":undefined}],18:[function(b,c,a){var d=b("./ac-color/Color");
d.decimalToHex=b("./ac-color/static/decimalToHex");d.hexToDecimal=b("./ac-color/static/hexToDecimal");
d.hexToRgb=b("./ac-color/static/hexToRgb");d.isColor=b("./ac-color/static/isColor");
d.isHex=b("./ac-color/static/isHex");d.isRgb=b("./ac-color/static/isRgb");d.isRgba=b("./ac-color/static/isRgba");
d.mixColors=b("./ac-color/static/mixColors");d.rgbaToArray=b("./ac-color/static/rgbaToArray");
d.rgbToArray=b("./ac-color/static/rgbToArray");d.rgbToDecimal=b("./ac-color/static/rgbToDecimal");
d.rgbToHex=b("./ac-color/static/rgbToHex");d.rgbToHsl=b("./ac-color/static/rgbToHsl");
d.rgbToHsv=b("./ac-color/static/rgbToHsv");d.rgbaToObject=b("./ac-color/static/rgbaToObject");
d.rgbToObject=b("./ac-color/static/rgbToObject");d.shortToLongHex=b("./ac-color/static/shortToLongHex");
c.exports={Color:d}},{"./ac-color/Color":19,"./ac-color/static/decimalToHex":21,"./ac-color/static/hexToDecimal":22,"./ac-color/static/hexToRgb":23,"./ac-color/static/isColor":24,"./ac-color/static/isHex":25,"./ac-color/static/isRgb":26,"./ac-color/static/isRgba":27,"./ac-color/static/mixColors":28,"./ac-color/static/rgbToArray":29,"./ac-color/static/rgbToDecimal":30,"./ac-color/static/rgbToHex":31,"./ac-color/static/rgbToHsl":32,"./ac-color/static/rgbToHsv":33,"./ac-color/static/rgbToObject":34,"./ac-color/static/rgbaToArray":35,"./ac-color/static/rgbaToObject":36,"./ac-color/static/shortToLongHex":37}],19:[function(d,a,q){var h=d("./helpers/cssColorNames");
var m=d("./static/hexToRgb");var l=d("./static/isColor");var f=d("./static/isHex");
var b=d("./static/isRgba");var p=d("./static/mixColors");var k=d("./static/rgbaToArray");
var n=d("./static/rgbToArray");var s=d("./static/rgbToDecimal");var i=d("./static/rgbToHex");
var c=d("./static/rgbaToObject");var j=d("./static/rgbToObject");var o=d("./static/shortToLongHex");
function r(t){if(!l(t)&&!h.nameToRgbObject[t]){throw new Error(t+" is not a supported color.")
}this._setColor(t)}var g=r.prototype;g._setColor=function(t){this._color={};if(f(t)){this._color.hex=o(t);
this._color.rgb={color:m(t)}}else{if(b(t)){this._color.rgba={color:t};var v=this.rgbaObject();
this._color.rgb={color:"rgb("+v.r+", "+v.g+", "+v.b+")"}}else{if(h.nameToRgbObject[t]){var u=h.nameToRgbObject[t];
this._color.rgb={object:u,color:"rgb("+u.r+", "+u.g+", "+u.b+")"}}else{this._color.rgb={color:t}
}}}};g.rgb=function(){return this._color.rgb.color};g.rgba=function(){if(this._color.rgba===undefined){var t=this.rgbObject();
this._color.rgba={color:"rgba("+t.r+", "+t.g+", "+t.b+", 1)"}}return this._color.rgba.color
};g.hex=function(){if(this._color.hex===undefined){this._color.hex=i.apply(this,this.rgbArray())
}return this._color.hex};g.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=s(this.rgb())
}return this._color.decimal};g.cssName=function(){return h.rgbToName[this.rgb()]||null
};g.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=n(this.rgb())
}return this._color.rgb.array};g.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=k(this.rgba())}return this._color.rgba.array
};g.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=j(this.rgb())
}return this._color.rgb.object};g.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=c(this.rgba())
}return this._color.rgba.object};g.getRed=function(){return this.rgbObject().r};
g.getGreen=function(){return this.rgbObject().g};g.getBlue=function(){return this.rgbObject().b
};g.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};g.setRed=function(t){if(t!==this.getRed()){this._setColor("rgba("+t+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};g.setGreen=function(t){if(t!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+t+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};g.setBlue=function(t){if(t!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+t+", "+this.getAlpha()+")")
}return this.rgbObject().b};g.setAlpha=function(t){if(t!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+t+")")
}return this.rgbaObject().a};g.mix=function(t,u){var v=j(p(this.rgb(),t,u));this._setColor("rgba("+v.r+", "+v.g+", "+v.b+", "+this.getAlpha()+")");
return this.rgb()};g.clone=function(){return new r(this.rgb())};a.exports=r},{"./helpers/cssColorNames":20,"./static/hexToRgb":23,"./static/isColor":24,"./static/isHex":25,"./static/isRgba":27,"./static/mixColors":28,"./static/rgbToArray":29,"./static/rgbToDecimal":30,"./static/rgbToHex":31,"./static/rgbToObject":34,"./static/rgbaToArray":35,"./static/rgbaToObject":36,"./static/shortToLongHex":37}],20:[function(b,c,a){var d={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var f={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
c.exports={rgbToName:d,nameToRgbObject:f}},{}],21:[function(c,d,b){d.exports=function a(f){return"#"+(f).toString(16)
}},{}],22:[function(c,d,a){d.exports=function b(f){return parseInt(f.substr(1),16)
}},{}],23:[function(d,f,c){var a=d("./shortToLongHex");f.exports=function b(h){h=a(h);
var g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return g?"rgb("+parseInt(g[1],16)+", "+parseInt(g[2],16)+", "+parseInt(g[3],16)+")":null
}},{"./shortToLongHex":37}],24:[function(c,f,b){var h=c("./isRgb");var g=c("./isRgba");
var a=c("./isHex");f.exports=function d(i){return a(i)||h(i)||g(i)}},{"./isHex":25,"./isRgb":26,"./isRgba":27}],25:[function(c,d,b){d.exports=function a(g){var f=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return f.test(g)}},{}],26:[function(b,c,a){c.exports=function d(g){var f=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return f.exec(g)!==null}},{}],27:[function(b,c,a){c.exports=function d(g){var f=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return f.exec(g)!==null}},{}],28:[function(d,f,c){var b=d("./isHex");var a=d("./hexToRgb");
var h=d("./rgbToObject");f.exports=function g(n,m,l){n=b(n)?a(n):n;m=b(m)?a(m):m;
n=h(n);m=h(m);var k=n.r+((m.r-n.r)*l);var j=n.g+((m.g-n.g)*l);var i=n.b+((m.b-n.b)*l);
return"rgb("+Math.round(k)+", "+Math.round(j)+", "+Math.round(i)+")"}},{"./hexToRgb":23,"./isHex":25,"./rgbToObject":34}],29:[function(b,c,a){var d=b("./rgbToObject");
c.exports=function f(g){var h=d(g);return[h.r,h.g,h.b]}},{"./rgbToObject":34}],30:[function(d,f,b){var c=d("./hexToDecimal");
var h=d("./rgbToArray");var g=d("./rgbToHex");f.exports=function a(i){var j=g.apply(this,h(i));
return c(j)}},{"./hexToDecimal":22,"./rgbToArray":29,"./rgbToHex":31}],31:[function(b,c,a){c.exports=function d(i,h,f){return"#"+((1<<24)+(i<<16)+(h<<8)+f).toString(16).slice(1)
}},{}],32:[function(c,d,b){d.exports=function a(f,m,o){if(arguments.length!==3){return false
}f/=255;m/=255;o/=255;var p=Math.max(f,m,o);var j=Math.min(f,m,o);var n=p+j;var q=p-j;
var k;var t;var i=(n/2);if(p===j){k=t=0}else{t=i>0.5?q/(2-p-j):q/n;switch(p){case f:k=(m-o)/q;
break;case m:k=2+((o-f)/q);break;case o:k=4+((f-m)/q);break}k*=60;if(k<0){k+=360
}}return([k,Math.round(100*t),Math.round(100*i)])}},{}],33:[function(c,d,a){d.exports=function b(f,m,n){if(arguments.length!==3){return false
}var i=f/255;var j=m/255;var p=n/255;var o=Math.max(i,j,p);var k=Math.min(i,j,p);
var l;var u;var t=o;var q=o-k;u=o===0?0:q/o;if(o===k){l=0}else{switch(o){case i:l=(j-p)/q+(j<p?6:0);
break;case j:l=(p-i)/q+2;break;case p:l=(i-j)/q+4;break}l/=6}return[Math.round(360*l),Math.round(100*u),Math.round(100*t)]
}},{}],34:[function(b,c,a){c.exports=function d(g){var h=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3])}}},{}],35:[function(b,c,a){var f=b("./rgbaToObject");
c.exports=function d(g){var h=f(g);return[h.r,h.g,h.b,h.a]}},{"./rgbaToObject":36}],36:[function(b,c,a){c.exports=function d(g){var h=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3]),a:Number(f[4])}
}},{}],37:[function(c,d,b){d.exports=function a(g){var f=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
g=g.replace(f,function(i,k,j,h){return"#"+k+k+j+j+h+h});return g}},{}],38:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":39}],39:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],40:[function(d,f,c){var b=d("./shared/stylePropertyCache");var h=d("./getStyleProperty");
var g=d("./getStyleValue");f.exports=function a(k,j){var i;k=h(k);if(!k){return false
}i=b[k].css;if(typeof j!=="undefined"){j=g(k,j);if(j===false){return false}i+=":"+j+";"
}return i}},{"./getStyleProperty":41,"./getStyleValue":42,"./shared/stylePropertyCache":45}],41:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":43,"./shared/prefixHelper":44,"./shared/stylePropertyCache":45,"./utils/toCSS":48,"./utils/toDOM":49}],42:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":41,"./shared/prefixHelper":44,"./shared/stylePropertyCache":45,"./shared/styleValueAvailable":46}],43:[function(c,d,b){var f;
d.exports=function a(){if(!f){f=document.createElement("_")}else{f.style.cssText="";
f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null}},{}],44:[function(b,c,a){arguments[4][4][0].apply(a,arguments)
},{dup:4}],45:[function(b,c,a){c.exports={}},{}],46:[function(c,b,d){var a=c("./stylePropertyCache");
var f=c("./getStyleTestElement");var i=false;var k;var j;var g=function(){var l;
if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);j=false;l=f();try{l.style.width="invalid"
}catch(m){j=true}}};b.exports=function h(o,n){var m;var l;g();if(k){o=a[o].css;
return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n}catch(p){return false
}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":43,"./stylePropertyCache":45}],47:[function(c,d,a){var b=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
d.exports=function f(g){g=String.prototype.replace.call(g,b,"");return g.charAt(0).toLowerCase()+g.substring(1)
}},{}],48:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],49:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],50:[function(c,d,b){var f=c("@marcom/ac-prefixer/getStyleProperty");
var g=c("@marcom/ac-prefixer/stripPrefixes");d.exports=function a(){var k=Array.prototype.slice.call(arguments);
var p=k.shift(k);var m=window.getComputedStyle(p);var l={};var o;var h;var n;var j;
if(typeof k[0]!=="string"){k=k[0]}for(j=0;j<k.length;j++){o=k[j];h=f(o);if(h){o=g(h);
n=m[h];if(!n||n==="auto"){n=null}if(n){n=g(n)}}else{n=null}l[o]=n}return l}},{"@marcom/ac-prefixer/getStyleProperty":41,"@marcom/ac-prefixer/stripPrefixes":47}],51:[function(c,d,b){d.exports=function a(j){var h;
var g;var f;if(!j&&j!==0){return""}if(Array.isArray(j)){return j+""}if(typeof j==="object"){h="";
g=Object.keys(j);for(f=0;f<g.length;f++){h+=g[f]+"("+j[g[f]]+") "}return h.trim()
}return j}},{}],52:[function(d,f,c){var a=d("@marcom/ac-prefixer/getStyleCSS");
var g=d("@marcom/ac-prefixer/getStyleProperty");var b=d("./internal/normalizeValue");
f.exports=function h(o,l){var k="";var j;var n;var i;var m;var p;if(typeof l!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(n in l){m=b(l[n]);if(!m&&m!==0){i=g(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=a(n,m);if(j!==false){k+=" "+j}}}if(k.length){p=o.style.cssText;
if(p.charAt(p.length-1)!==";"){p+=";"}p+=k;o.style.cssText=p}return o}},{"./internal/normalizeValue":51,"@marcom/ac-prefixer/getStyleCSS":40,"@marcom/ac-prefixer/getStyleProperty":41}],53:[function(b,c,a){c.exports={createBezier:b("./ac-easing/createBezier"),createPredefined:b("./ac-easing/createPredefined"),createStep:b("./ac-easing/createStep"),Ease:b("./ac-easing/Ease")}
},{"./ac-easing/Ease":54,"./ac-easing/createBezier":55,"./ac-easing/createPredefined":56,"./ac-easing/createStep":57}],54:[function(b,c,a){var g="Ease expects an easing function.";
function f(i,h){if(typeof i!=="function"){throw new TypeError(g)}this.easingFunction=i;
this.cssString=h||null}var d=f.prototype;d.getValue=function(h){return this.easingFunction(h,0,1,1)
};c.exports=f},{}],55:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.every");
var f=b("./Ease");var h=b("./helpers/KeySpline");var d="Bezier curve expects exactly four (4) numbers. Given: ";
c.exports=function g(j,p,i,o){var q=Array.prototype.slice.call(arguments);var m=q.every(function(r){return(typeof r==="number")
});if(q.length!==4||!m){throw new TypeError(d+q)}var n=new h(j,p,i,o);var k=function(t,r,u,s){return n.get(t/s)*u+r
};var l="cubic-bezier("+q.join(", ")+")";return new f(k,l)}},{"./Ease":54,"./helpers/KeySpline":58,"@marcom/ac-polyfills/Array/prototype.every":undefined}],56:[function(c,a,d){var i=c("./createStep");
var f=c("./helpers/cssAliases");var b=c("./helpers/easingFunctions");var h=c("./Ease");
var g='Easing function "%TYPE%" not recognized among the following: '+Object.keys(b).join(", ");
a.exports=function j(k){var l;if(k==="step-start"){return i(1,"start")}else{if(k==="step-end"){return i(1,"end")
}else{l=b[k]}}if(!l){throw new Error(g.replace("%TYPE%",k))}return new h(l,f[k])
}},{"./Ease":54,"./createStep":57,"./helpers/cssAliases":59,"./helpers/easingFunctions":60}],57:[function(d,f,c){var g=d("./Ease");
var b="Step function expects a numeric value greater than zero. Given: ";var a='Step function direction must be either "start" or "end" (default). Given: ';
f.exports=function h(i,l){l=l||"end";if(typeof i!=="number"||i<1){throw new TypeError(b+i)
}if(l!=="start"&&l!=="end"){throw new TypeError(a+l)}var k=function(q,m,r,p){var o=r/i;
var n=Math[(l==="start")?"floor":"ceil"](q/p*i);return m+o*n};var j="steps("+i+", "+l+")";
return new g(k,j)}},{"./Ease":54}],58:[function(b,c,a){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function d(o,l,n,j){this.get=function(p){if(o===l&&n===j){return p
}return g(k(p),l,j)};function i(p,q){return 1-3*q+3*p}function h(p,q){return 3*q-6*p
}function f(p){return 3*p}function g(r,p,q){return((i(p,q)*r+h(p,q))*r+f(p))*r}function m(r,p,q){return 3*i(p,q)*r*r+2*h(p,q)*r+f(p)
}function k(s){var q=s;for(var r=0;r<4;++r){var t=m(q,o,n);if(t===0){return q}var p=g(q,o,n)-s;
q-=p/t}return q}}c.exports=d},{}],59:[function(c,d,b){var a={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
a.easeIn=a["ease-in"];a.easeOut=a["ease-out"];a.easeInOut=a["ease-in-out"];a.easeInCubic=a["ease-in-cubic"];
a.easeOutCubic=a["ease-out-cubic"];a.easeInOutCubic=a["ease-in-out-cubic"];a.easeInQuad=a["ease-in-quad"];
a.easeOutQuad=a["ease-out-quad"];a.easeInOutQuad=a["ease-in-out-quad"];a.easeInQuart=a["ease-in-quart"];
a.easeOutQuart=a["ease-out-quart"];a.easeInOutQuart=a["ease-in-out-quart"];a.easeInQuint=a["ease-in-quint"];
a.easeOutQuint=a["ease-out-quint"];a.easeInOutQuint=a["ease-in-out-quint"];a.easeInSine=a["ease-in-sine"];
a.easeOutSine=a["ease-out-sine"];a.easeInOutSine=a["ease-in-out-sine"];a.easeInExpo=a["ease-in-expo"];
a.easeOutExpo=a["ease-out-expo"];a.easeInOutExpo=a["ease-in-out-expo"];a.easeInCirc=a["ease-in-circ"];
a.easeOutCirc=a["ease-out-circ"];a.easeInOutCirc=a["ease-in-out-circ"];a.easeInBack=a["ease-in-back"];
a.easeOutBack=a["ease-out-back"];a.easeInOutBack=a["ease-in-out-back"];d.exports=a
},{}],60:[function(d,b,F){var J=d("../createBezier");var w=J(0.25,0.1,0.25,1).easingFunction;
var g=J(0.42,0,1,1).easingFunction;var C=J(0,0,0.58,1).easingFunction;var x=J(0.42,0,0.58,1).easingFunction;
var u=function(Q,O,R,P){return R*Q/P+O};var h=function(Q,O,R,P){return R*(Q/=P)*Q+O
};var N=function(Q,O,R,P){return -R*(Q/=P)*(Q-2)+O};var D=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q+O
}return -R/2*((--Q)*(Q-2)-1)+O};var i=function(Q,O,R,P){return R*(Q/=P)*Q*Q+O};
var a=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q+1)+O};var j=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q+2)+O};var o=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q+O};
var m=function(Q,O,R,P){return -R*((Q=Q/P-1)*Q*Q*Q-1)+O};var p=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q+O
}return -R/2*((Q-=2)*Q*Q*Q-2)+O};var y=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q*Q+O
};var v=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q*Q*Q+1)+O};var z=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q*Q*Q+2)+O};var c=function(Q,O,R,P){return -R*Math.cos(Q/P*(Math.PI/2))+R+O
};var L=function(Q,O,R,P){return R*Math.sin(Q/P*(Math.PI/2))+O};var B=function(Q,O,R,P){return -R/2*(Math.cos(Math.PI*Q/P)-1)+O
};var G=function(Q,O,R,P){return(Q===0)?O:R*Math.pow(2,10*(Q/P-1))+O};var A=function(Q,O,R,P){return(Q===P)?O+R:R*(-Math.pow(2,-10*Q/P)+1)+O
};var r=function(Q,O,R,P){if(Q===0){return O}else{if(Q===P){return O+R}else{if((Q/=P/2)<1){return R/2*Math.pow(2,10*(Q-1))+O
}}}return R/2*(-Math.pow(2,-10*--Q)+2)+O};var l=function(Q,O,R,P){return -R*(Math.sqrt(1-(Q/=P)*Q)-1)+O
};var f=function(Q,O,R,P){return R*Math.sqrt(1-(Q=Q/P-1)*Q)+O};var I=function(Q,O,R,P){if((Q/=P/2)<1){return -R/2*(Math.sqrt(1-Q*Q)-1)+O
}return R/2*(Math.sqrt(1-(Q-=2)*Q)+1)+O};var E=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U}}if(!T){T=R*0.3
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}return -(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
};var H=function(S,Q,U,R){var O=1.70158;var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U
}}if(!T){T=R*0.3}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)
}return P*Math.pow(2,-10*S)*Math.sin((S*R-O)*(2*Math.PI)/T)+U+Q};var t=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R/2)===2){return Q+U}}if(!T){T=R*(0.3*1.5)
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}if(S<1){return -0.5*(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
}return P*Math.pow(2,-10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T)*0.5+U+Q};var s=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*(R/=Q)*R*((O+1)*R-O)+P};var q=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*((R=R/Q-1)*R*((O+1)*R+O)+1)+P};var k=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}if((R/=Q/2)<1){return S/2*(R*R*(((O*=(1.525))+1)*R-O))+P}return S/2*((R-=2)*R*(((O*=(1.525))+1)*R+O)+2)+P
};var K=function(Q,O,R,P){if((Q/=P)<(1/2.75)){return R*(7.5625*Q*Q)+O}else{if(Q<(2/2.75)){return R*(7.5625*(Q-=(1.5/2.75))*Q+0.75)+O
}else{if(Q<(2.5/2.75)){return R*(7.5625*(Q-=(2.25/2.75))*Q+0.9375)+O}}}return R*(7.5625*(Q-=(2.625/2.75))*Q+0.984375)+O
};var n=function(Q,O,R,P){return R-K(P-Q,0,R,P)+O};var M=function(Q,O,R,P){if(Q<P/2){return n(Q*2,0,R,P)*0.5+O
}return K(Q*2-P,0,R,P)*0.5+R*0.5+O};b.exports={linear:u,ease:w,easeIn:g,"ease-in":g,easeOut:C,"ease-out":C,easeInOut:x,"ease-in-out":x,easeInCubic:i,"ease-in-cubic":i,easeOutCubic:a,"ease-out-cubic":a,easeInOutCubic:j,"ease-in-out-cubic":j,easeInQuad:h,"ease-in-quad":h,easeOutQuad:N,"ease-out-quad":N,easeInOutQuad:D,"ease-in-out-quad":D,easeInQuart:o,"ease-in-quart":o,easeOutQuart:m,"ease-out-quart":m,easeInOutQuart:p,"ease-in-out-quart":p,easeInQuint:y,"ease-in-quint":y,easeOutQuint:v,"ease-out-quint":v,easeInOutQuint:z,"ease-in-out-quint":z,easeInSine:c,"ease-in-sine":c,easeOutSine:L,"ease-out-sine":L,easeInOutSine:B,"ease-in-out-sine":B,easeInExpo:G,"ease-in-expo":G,easeOutExpo:A,"ease-out-expo":A,easeInOutExpo:r,"ease-in-out-expo":r,easeInCirc:l,"ease-in-circ":l,easeOutCirc:f,"ease-out-circ":f,easeInOutCirc:I,"ease-in-out-circ":I,easeInBack:s,"ease-in-back":s,easeOutBack:q,"ease-out-back":q,easeInOutBack:k,"ease-in-out-back":k,easeInElastic:E,"ease-in-elastic":E,easeOutElastic:H,"ease-out-elastic":H,easeInOutElastic:t,"ease-in-out-elastic":t,easeInBounce:n,"ease-in-bounce":n,easeOutBounce:K,"ease-out-bounce":K,easeInOutBounce:M,"ease-in-out-bounce":M}
},{"../createBezier":55}],61:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":62}],62:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}var h=this._events[g].indexOf(i);
if(h===-1){return}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return
}for(var h=this._events[g].length-1;h>=0;h--){if(j!==undefined){this._events[g][h](j)
}else{this._events[g][h]()}}};d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],63:[function(f,g,b){var d="f7c9180f-5c45-47b4-8de4-428015f096c0";
var c=!!window.localStorage.getItem(d);g.exports=function a(h){return function(){if(c&&typeof(window.console)==="object"){return console[h].apply(console,Array.prototype.slice.call(arguments,0))
}}}},{}],64:[function(b,c,a){c.exports=b("./internal/expose")("log")},{"./internal/expose":63}],65:[function(c,d,b){c("@marcom/ac-polyfills/Array/isArray");
var i=c("./extend");var a=Object.prototype.hasOwnProperty;var f=c("@marcom/ac-console/log");
var g=function(j,k){var l;for(l in k){if(a.call(k,l)){if(k[l]===null){j[l]=null
}else{if(typeof k[l]==="object"){j[l]=Array.isArray(k[l])?[]:{};g(j[l],k[l])}else{j[l]=k[l]
}}}}return j};d.exports=function h(k,j){f("`@marcom/ac-object/clone` is deprecated. For shallow clone use native `Object.assign`. For deep clone use `@marcom/object-utils/deepClone`. `@marcom/ac-object` will be renamed to `@marcom/object-utils` with the `2.0.0` release.");
if(j){return g({},k)}return i({},k)}},{"./extend":67,"@marcom/ac-console/log":64,"@marcom/ac-polyfills/Array/isArray":undefined}],66:[function(b,d,a){var f=b("@marcom/ac-console/log");
var g=function(){};d.exports=function c(h){f("`@marcom/ac-object/create` is deprecated. Use native `Object.create`.");
if(arguments.length>1){throw new Error("Second argument not supported")}if(h===null||typeof h!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(h)}else{g.prototype=h;
return new g()}}},{"@marcom/ac-console/log":64}],67:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;var f=c("@marcom/ac-console/log");d.exports=function g(){f("`@marcom/ac-object/defaults` is deprecated. Use native `Object.assign`.");
var i;var h;if(arguments.length<2){i=[{},arguments[0]]}else{i=[].slice.call(arguments)
}h=i.shift();i.forEach(function(k){if(k!=null){for(var j in k){if(a.call(k,j)){h[j]=k[j]
}}}});return h}},{"@marcom/ac-console/log":64,"@marcom/ac-polyfills/Array/prototype.forEach":undefined}],68:[function(b,c,a){c.exports={PageVisibilityManager:b("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":69}],69:[function(c,f,b){var d=c("@marcom/ac-object/create");
var h=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;function a(){if(typeof document.addEventListener==="undefined"){return
}var i;if(typeof document.hidden!=="undefined"){this._hidden="hidden";i="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";i="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";i="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
i="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}if(i){document.addEventListener(i,this._handleVisibilityChange.bind(this),false)
}h.call(this)}var g=a.prototype=d(h.prototype);g.CHANGED="changed";g._handleVisibilityChange=function(i){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{isHidden:this.isHidden})};f.exports=new a()},{"@marcom/ac-event-emitter-micro":61,"@marcom/ac-object/create":66}],70:[function(b,c,a){c.exports=d;
function d(f){var g=new Float32Array(16);g[0]=f[0];g[1]=f[1];g[2]=f[2];g[3]=f[3];
g[4]=f[4];g[5]=f[5];g[6]=f[6];g[7]=f[7];g[8]=f[8];g[9]=f[9];g[10]=f[10];g[11]=f[11];
g[12]=f[12];g[13]=f[13];g[14]=f[14];g[15]=f[15];return g}},{}],71:[function(b,d,a){d.exports=c;
function c(){var f=new Float32Array(16);f[0]=1;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=1;
f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;f[12]=0;f[13]=0;f[14]=0;f[15]=1;return f
}},{}],72:[function(b,c,a){c.exports=d;function d(t,r,o){var l=r[0],k=r[1],j=r[2],m=r[3],u=l+l,f=k+k,n=j+j,i=l*u,h=l*f,g=l*n,s=k*f,p=k*n,C=j*n,D=m*u,B=m*f,A=m*n;
t[0]=1-(s+C);t[1]=h+A;t[2]=g-B;t[3]=0;t[4]=h-A;t[5]=1-(i+C);t[6]=p+D;t[7]=0;t[8]=g+B;
t[9]=p-D;t[10]=1-(i+s);t[11]=0;t[12]=o[0];t[13]=o[1];t[14]=o[2];t[15]=1;return t
}},{}],73:[function(c,d,b){d.exports=a;function a(f){f[0]=1;f[1]=0;f[2]=0;f[3]=0;
f[4]=0;f[5]=1;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;f[12]=0;f[13]=0;f[14]=0;
f[15]=1;return f}},{}],74:[function(b,c,a){c.exports=d;function d(y,D){var H=D[0],F=D[1],E=D[2],B=D[3],j=D[4],i=D[5],h=D[6],g=D[7],x=D[8],w=D[9],v=D[10],u=D[11],J=D[12],I=D[13],G=D[14],C=D[15],t=H*i-F*j,s=H*h-E*j,r=H*g-B*j,q=F*h-E*i,p=F*g-B*i,o=E*g-B*h,n=x*I-w*J,m=x*G-v*J,l=x*C-u*J,k=w*G-v*I,A=w*C-u*I,z=v*C-u*G,f=t*z-s*A+r*k+q*l-p*m+o*n;
if(!f){return null}f=1/f;y[0]=(i*z-h*A+g*k)*f;y[1]=(E*A-F*z-B*k)*f;y[2]=(I*o-G*p+C*q)*f;
y[3]=(v*p-w*o-u*q)*f;y[4]=(h*l-j*z-g*m)*f;y[5]=(H*z-E*l+B*m)*f;y[6]=(G*r-J*o-C*s)*f;
y[7]=(x*o-v*r+u*s)*f;y[8]=(j*A-i*l+g*n)*f;y[9]=(F*l-H*A-B*n)*f;y[10]=(J*p-I*r+C*t)*f;
y[11]=(w*r-x*p-u*t)*f;y[12]=(i*m-j*k-h*n)*f;y[13]=(H*k-F*m+E*n)*f;y[14]=(I*s-J*q-G*t)*f;
y[15]=(x*q-w*s+v*t)*f;return y}},{}],75:[function(c,d,b){d.exports=a;function a(r,v,s){var z=v[0],y=v[1],w=v[2],t=v[3],l=v[4],j=v[5],h=v[6],f=v[7],q=v[8],p=v[9],o=v[10],n=v[11],B=v[12],A=v[13],x=v[14],u=v[15];
var m=s[0],k=s[1],i=s[2],g=s[3];r[0]=m*z+k*l+i*q+g*B;r[1]=m*y+k*j+i*p+g*A;r[2]=m*w+k*h+i*o+g*x;
r[3]=m*t+k*f+i*n+g*u;m=s[4];k=s[5];i=s[6];g=s[7];r[4]=m*z+k*l+i*q+g*B;r[5]=m*y+k*j+i*p+g*A;
r[6]=m*w+k*h+i*o+g*x;r[7]=m*t+k*f+i*n+g*u;m=s[8];k=s[9];i=s[10];g=s[11];r[8]=m*z+k*l+i*q+g*B;
r[9]=m*y+k*j+i*p+g*A;r[10]=m*w+k*h+i*o+g*x;r[11]=m*t+k*f+i*n+g*u;m=s[12];k=s[13];
i=s[14];g=s[15];r[12]=m*z+k*l+i*q+g*B;r[13]=m*y+k*j+i*p+g*A;r[14]=m*w+k*h+i*o+g*x;
r[15]=m*t+k*f+i*n+g*u;return r}},{}],76:[function(c,d,a){d.exports=b;function b(E,L,N,f){var p=f[0],o=f[1],n=f[2],F=Math.sqrt(p*p+o*o+n*n),w,J,v,P,O,M,K,m,l,k,j,D,C,B,A,u,r,q,I,H,G,i,h,g;
if(Math.abs(F)<0.000001){return null}F=1/F;p*=F;o*=F;n*=F;w=Math.sin(N);J=Math.cos(N);
v=1-J;P=L[0];O=L[1];M=L[2];K=L[3];m=L[4];l=L[5];k=L[6];j=L[7];D=L[8];C=L[9];B=L[10];
A=L[11];u=p*p*v+J;r=o*p*v+n*w;q=n*p*v-o*w;I=p*o*v-n*w;H=o*o*v+J;G=n*o*v+p*w;i=p*n*v+o*w;
h=o*n*v-p*w;g=n*n*v+J;E[0]=P*u+m*r+D*q;E[1]=O*u+l*r+C*q;E[2]=M*u+k*r+B*q;E[3]=K*u+j*r+A*q;
E[4]=P*I+m*H+D*G;E[5]=O*I+l*H+C*G;E[6]=M*I+k*H+B*G;E[7]=K*I+j*H+A*G;E[8]=P*i+m*h+D*g;
E[9]=O*i+l*h+C*g;E[10]=M*i+k*h+B*g;E[11]=K*i+j*h+A*g;if(L!==E){E[12]=L[12];E[13]=L[13];
E[14]=L[14];E[15]=L[15]}return E}},{}],77:[function(c,d,a){d.exports=b;function b(f,m,l){var r=Math.sin(l),k=Math.cos(l),q=m[4],p=m[5],o=m[6],n=m[7],j=m[8],i=m[9],h=m[10],g=m[11];
if(m!==f){f[0]=m[0];f[1]=m[1];f[2]=m[2];f[3]=m[3];f[12]=m[12];f[13]=m[13];f[14]=m[14];
f[15]=m[15]}f[4]=q*k+j*r;f[5]=p*k+i*r;f[6]=o*k+h*r;f[7]=n*k+g*r;f[8]=j*k-q*r;f[9]=i*k-p*r;
f[10]=h*k-o*r;f[11]=g*k-n*r;return f}},{}],78:[function(c,d,b){d.exports=a;function a(j,q,p){var r=Math.sin(p),o=Math.cos(p),i=q[0],h=q[1],g=q[2],f=q[3],n=q[8],m=q[9],l=q[10],k=q[11];
if(q!==j){j[4]=q[4];j[5]=q[5];j[6]=q[6];j[7]=q[7];j[12]=q[12];j[13]=q[13];j[14]=q[14];
j[15]=q[15]}j[0]=i*o-n*r;j[1]=h*o-m*r;j[2]=g*o-l*r;j[3]=f*o-k*r;j[8]=i*r+n*o;j[9]=h*r+m*o;
j[10]=g*r+l*o;j[11]=f*r+k*o;return j}},{}],79:[function(c,d,b){d.exports=a;function a(j,m,l){var r=Math.sin(l),k=Math.cos(l),i=m[0],h=m[1],g=m[2],f=m[3],q=m[4],p=m[5],o=m[6],n=m[7];
if(m!==j){j[8]=m[8];j[9]=m[9];j[10]=m[10];j[11]=m[11];j[12]=m[12];j[13]=m[13];j[14]=m[14];
j[15]=m[15]}j[0]=i*k+q*r;j[1]=h*k+p*r;j[2]=g*k+o*r;j[3]=f*k+n*r;j[4]=q*k-i*r;j[5]=p*k-h*r;
j[6]=o*k-g*r;j[7]=n*k-f*r;return j}},{}],80:[function(b,c,a){c.exports=d;function d(i,g,h){var f=h[0],k=h[1],j=h[2];
i[0]=g[0]*f;i[1]=g[1]*f;i[2]=g[2]*f;i[3]=g[3]*f;i[4]=g[4]*k;i[5]=g[5]*k;i[6]=g[6]*k;
i[7]=g[7]*k;i[8]=g[8]*j;i[9]=g[9]*j;i[10]=g[10]*j;i[11]=g[11]*j;i[12]=g[12];i[13]=g[13];
i[14]=g[14];i[15]=g[15];return i}},{}],81:[function(b,c,a){c.exports=d;function d(r,t,m){var l=m[0],k=m[1],j=m[2],A,w,u,s,i,h,g,f,q,p,o,n;
if(t===r){r[12]=t[0]*l+t[4]*k+t[8]*j+t[12];r[13]=t[1]*l+t[5]*k+t[9]*j+t[13];r[14]=t[2]*l+t[6]*k+t[10]*j+t[14];
r[15]=t[3]*l+t[7]*k+t[11]*j+t[15]}else{A=t[0];w=t[1];u=t[2];s=t[3];i=t[4];h=t[5];
g=t[6];f=t[7];q=t[8];p=t[9];o=t[10];n=t[11];r[0]=A;r[1]=w;r[2]=u;r[3]=s;r[4]=i;
r[5]=h;r[6]=g;r[7]=f;r[8]=q;r[9]=p;r[10]=o;r[11]=n;r[12]=A*l+i*k+q*j+t[12];r[13]=w*l+h*k+p*j+t[13];
r[14]=u*l+g*k+o*j+t[14];r[15]=s*l+f*k+n*j+t[15]}return r}},{}],82:[function(b,c,a){c.exports=d;
function d(i,h){if(i===h){var m=h[1],k=h[2],j=h[3],f=h[6],l=h[7],g=h[11];i[1]=h[4];
i[2]=h[8];i[3]=h[12];i[4]=m;i[6]=h[9];i[7]=h[13];i[8]=k;i[9]=f;i[11]=h[14];i[12]=j;
i[13]=l;i[14]=g}else{i[0]=h[0];i[1]=h[4];i[2]=h[8];i[3]=h[12];i[4]=h[1];i[5]=h[5];
i[6]=h[9];i[7]=h[13];i[8]=h[2];i[9]=h[6];i[10]=h[10];i[11]=h[14];i[12]=h[3];i[13]=h[7];
i[14]=h[11];i[15]=h[15]}return i}},{}],83:[function(b,d,a){d.exports=c;function c(){var f=new Float32Array(3);
f[0]=0;f[1]=0;f[2]=0;return f}},{}],84:[function(b,c,a){c.exports=d;function d(g,l,k){var f=l[0],n=l[1],m=l[2],j=k[0],i=k[1],h=k[2];
g[0]=n*h-m*i;g[1]=m*j-f*h;g[2]=f*i-n*j;return g}},{}],85:[function(c,d,b){d.exports=a;
function a(g,f){return g[0]*f[0]+g[1]*f[1]+g[2]*f[2]}},{}],86:[function(b,c,a){c.exports=d;
function d(f,i,h){var g=new Float32Array(3);g[0]=f;g[1]=i;g[2]=h;return g}},{}],87:[function(b,c,a){c.exports=d;
function d(g){var f=g[0],i=g[1],h=g[2];return Math.sqrt(f*f+i*i+h*h)}},{}],88:[function(c,d,b){d.exports=a;
function a(i,h){var g=h[0],k=h[1],j=h[2];var f=g*g+k*k+j*j;if(f>0){f=1/Math.sqrt(f);
i[0]=h[0]*f;i[1]=h[1]*f;i[2]=h[2]*f}return i}},{}],89:[function(b,d,a){d.exports=c;
function c(){var f=new Float32Array(4);f[0]=0;f[1]=0;f[2]=0;f[3]=0;return f}},{}],90:[function(b,c,a){c.exports=d;
function d(f,j,i,g){var h=new Float32Array(4);h[0]=f;h[1]=j;h[2]=i;h[3]=g;return h
}},{}],91:[function(b,d,a){d.exports=c;function c(j,i,g){var f=i[0],l=i[1],k=i[2],h=i[3];
j[0]=g[0]*f+g[4]*l+g[8]*k+g[12]*h;j[1]=g[1]*f+g[5]*l+g[9]*k+g[13]*h;j[2]=g[2]*f+g[6]*l+g[10]*k+g[14]*h;
j[3]=g[3]*f+g[7]*l+g[11]*k+g[15]*h;return j}},{}],92:[function(b,c,a){c.exports={Transform:b("./ac-transform/Transform")}
},{"./ac-transform/Transform":93}],93:[function(l,d,H){var k=l("./gl-matrix/mat4");
var b=l("./gl-matrix/vec3");var a=l("./gl-matrix/vec4");var f=Math.PI/180;var c=180/Math.PI;
var F=0,y=0,D=1,x=1,B=2,z=3;var j=4,w=4,i=5,v=5,h=6,g=7;var t=8,q=9,o=10,n=11;var G=12,u=12,E=13,s=13,C=14,A=15;
function p(){this.m=k.create()}var r=p.prototype;r.rotateX=function(J){var I=f*J;
k.rotateX(this.m,this.m,I);return this};r.rotateY=function(J){var I=f*J;k.rotateY(this.m,this.m,I);
return this};r.rotateZ=function(J){var I=f*J;k.rotateZ(this.m,this.m,I);return this
};r.rotate=r.rotateZ;r.rotate3d=function(J,M,L,K){if(M===null||M===undefined){M=J
}if(L===null||M===undefined){L=J}var I=f*K;k.rotate(this.m,this.m,I,[J,M,L]);return this
};r.rotateAxisAngle=r.rotate3d;r.scale=function(J,I){I=I||J;k.scale(this.m,this.m,[J,I,1]);
return this};r.scaleX=function(I){k.scale(this.m,this.m,[I,1,1]);return this};r.scaleY=function(I){k.scale(this.m,this.m,[1,I,1]);
return this};r.scaleZ=function(I){k.scale(this.m,this.m,[1,1,I]);return this};r.scale3d=function(K,J,I){k.scale(this.m,this.m,[K,J,I]);
return this};r.skew=function(K,J){if(J===null||J===undefined){return this.skewX(K)
}K=f*K;J=f*J;var I=k.create();I[w]=Math.tan(K);I[x]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.skewX=function(J){J=f*J;var I=k.create();I[w]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.skewY=function(J){J=f*J;var I=k.create();I[x]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.translate=function(J,I){I=I||0;k.translate(this.m,this.m,[J,I,0]);
return this};r.translate3d=function(J,I,K){k.translate(this.m,this.m,[J,I,K]);return this
};r.translateX=function(I){k.translate(this.m,this.m,[I,0,0]);return this};r.translateY=function(I){k.translate(this.m,this.m,[0,I,0]);
return this};r.translateZ=function(I){k.translate(this.m,this.m,[0,0,I]);return this
};r.perspective=function(J){var I=k.create();if(J!==0){I[n]=-1/J}k.multiply(this.m,this.m,I)
};r.inverse=function(){var I=this.clone();I.m=k.invert(I.m,this.m);return I};r.reset=function(){k.identity(this.m);
return this};r.getTranslateXY=function(){var I=this.m;if(this.isAffine()){return[I[u],I[s]]
}return[I[G],I[E]]};r.getTranslateXYZ=function(){var I=this.m;if(this.isAffine()){return[I[u],I[s],0]
}return[I[G],I[E],I[C]]};r.getTranslateX=function(){var I=this.m;if(this.isAffine()){return I[u]
}return I[G]};r.getTranslateY=function(){var I=this.m;if(this.isAffine()){return I[s]
}return I[E]};r.getTranslateZ=function(){var I=this.m;if(this.isAffine()){return 0
}return I[C]};r.clone=function(){var I=new p();I.m=k.clone(this.m);return I};r.toArray=function(){var I=this.m;
if(this.isAffine()){return[I[y],I[x],I[w],I[v],I[u],I[s]]}return[I[F],I[D],I[B],I[z],I[j],I[i],I[h],I[g],I[t],I[q],I[o],I[n],I[G],I[E],I[C],I[A]]
};r.fromArray=function(I){this.m=Array.prototype.slice.call(I);return this};r.setMatrixValue=function(J){J=String(J).trim();
var I=k.create();if(J==="none"){this.m=I;return this}var L=J.slice(0,J.indexOf("(")),M,K;
if(L==="matrix3d"){M=J.slice(9,-1).split(",");for(K=0;K<M.length;K++){I[K]=parseFloat(M[K])
}}else{if(L==="matrix"){M=J.slice(7,-1).split(",");for(K=M.length;K--;){M[K]=parseFloat(M[K])
}I[F]=M[0];I[D]=M[1];I[G]=M[4];I[j]=M[2];I[i]=M[3];I[E]=M[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=I;return this};var m=function(I){return Math.abs(I)<0.0001};r.decompose=function(T){T=T||false;
var X=k.clone(this.m);var O=b.create();var ad=b.create();var L=b.create();var Q=a.create();
var J=a.create();var K=b.create();for(var Z=0;Z<16;Z++){X[Z]/=X[A]}var V=k.clone(X);
V[z]=0;V[g]=0;V[n]=0;V[A]=1;var aa=X[3],M=X[7],P=X[11],af=X[12],ae=X[13],ac=X[14],ab=X[15];
var S=a.create();if(!m(X[z])||!m(X[g])||!m(X[n])){S[0]=X[z];S[1]=X[g];S[2]=X[n];
S[3]=X[A];var Y=k.invert(k.create(),V);var R=k.transpose(k.create(),Y);Q=a.transformMat4(Q,S,R)
}else{Q=a.fromValues(0,0,0,1)}O[0]=af;O[1]=ae;O[2]=ac;var N=[b.create(),b.create(),b.create()];
N[0][0]=X[0];N[0][1]=X[1];N[0][2]=X[2];N[1][0]=X[4];N[1][1]=X[5];N[1][2]=X[6];N[2][0]=X[8];
N[2][1]=X[9];N[2][2]=X[10];ad[0]=b.length(N[0]);b.normalize(N[0],N[0]);L[0]=b.dot(N[0],N[1]);
N[1]=this._combine(N[1],N[0],1,-L[0]);ad[1]=b.length(N[1]);b.normalize(N[1],N[1]);
L[0]/=ad[1];L[1]=b.dot(N[0],N[2]);N[2]=this._combine(N[2],N[0],1,-L[1]);L[2]=b.dot(N[1],N[2]);
N[2]=this._combine(N[2],N[1],1,-L[2]);ad[2]=b.length(N[2]);b.normalize(N[2],N[2]);
L[1]/=ad[2];L[2]/=ad[2];var W=b.cross(b.create(),N[1],N[2]);if(b.dot(N[0],W)<0){for(Z=0;
Z<3;Z++){ad[Z]*=-1;N[Z][0]*=-1;N[Z][1]*=-1;N[Z][2]*=-1}}J[0]=0.5*Math.sqrt(Math.max(1+N[0][0]-N[1][1]-N[2][2],0));
J[1]=0.5*Math.sqrt(Math.max(1-N[0][0]+N[1][1]-N[2][2],0));J[2]=0.5*Math.sqrt(Math.max(1-N[0][0]-N[1][1]+N[2][2],0));
J[3]=0.5*Math.sqrt(Math.max(1+N[0][0]+N[1][1]+N[2][2],0));if(N[2][1]>N[1][2]){J[0]=-J[0]
}if(N[0][2]>N[2][0]){J[1]=-J[1]}if(N[1][0]>N[0][1]){J[2]=-J[2]}var I=a.fromValues(J[0],J[1],J[2],2*Math.acos(J[3]));
var U=this._rotationFromQuat(J);if(T){L[0]=Math.round(L[0]*c*100)/100;L[1]=Math.round(L[1]*c*100)/100;
L[2]=Math.round(L[2]*c*100)/100;U[0]=Math.round(U[0]*c*100)/100;U[1]=Math.round(U[1]*c*100)/100;
U[2]=Math.round(U[2]*c*100)/100;I[3]=Math.round(I[3]*c*100)/100}return{translation:O,scale:ad,skew:L,perspective:Q,quaternion:J,eulerRotation:U,axisAngle:I}
};r.recompose=function(O,N,K,L,M){O=O||b.create();N=N||b.create();K=K||b.create();
L=L||a.create();M=M||a.create();var J=k.fromRotationTranslation(k.create(),M,O);
J[z]=L[0];J[g]=L[1];J[n]=L[2];J[A]=L[3];var I=k.create();if(K[2]!==0){I[q]=K[2];
k.multiply(J,J,I)}if(K[1]!==0){I[q]=0;I[t]=K[1];k.multiply(J,J,I)}if(K[0]){I[t]=0;
I[4]=K[0];k.multiply(J,J,I)}k.scale(J,J,N);this.m=J;return this};r.isAffine=function(){return(this.m[B]===0&&this.m[z]===0&&this.m[h]===0&&this.m[g]===0&&this.m[t]===0&&this.m[q]===0&&this.m[o]===1&&this.m[n]===0&&this.m[C]===0&&this.m[A]===1)
};r.toString=function(){var I=this.m;if(this.isAffine()){return"matrix("+I[y]+", "+I[x]+", "+I[w]+", "+I[v]+", "+I[u]+", "+I[s]+")"
}return"matrix3d("+I[F]+", "+I[D]+", "+I[B]+", "+I[z]+", "+I[j]+", "+I[i]+", "+I[h]+", "+I[g]+", "+I[t]+", "+I[q]+", "+I[o]+", "+I[n]+", "+I[G]+", "+I[E]+", "+I[C]+", "+I[A]+")"
};r.toCSSString=r.toString;r._combine=function(J,M,L,K){var I=b.create();I[0]=(L*J[0])+(K*M[0]);
I[1]=(L*J[1])+(K*M[1]);I[2]=(L*J[2])+(K*M[2]);return I};r._matrix2dToMat4=function(I){var K=k.create();
for(var L=0;L<4;L++){for(var J=0;J<4;J++){K[L*4+J]=I[L][J]}}return K};r._mat4ToMatrix2d=function(L){var I=[];
for(var K=0;K<4;K++){I[K]=[];for(var J=0;J<4;J++){I[K][J]=L[K*4+J]}}return I};r._rotationFromQuat=function(I){var M=I[3]*I[3];
var L=I[0]*I[0];var K=I[1]*I[1];var J=I[2]*I[2];var R=L+K+J+M;var N=I[0]*I[1]+I[2]*I[3];
var Q,P,O;if(N>0.499*R){P=2*Math.atan2(I[0],I[3]);O=Math.PI/2;Q=0;return b.fromValues(Q,P,O)
}if(N<-0.499*R){P=-2*Math.atan2(I[0],I[3]);O=-Math.PI/2;Q=0;return b.fromValues(Q,P,O)
}P=Math.atan2(2*I[1]*I[3]-2*I[0]*I[2],L-K-J+M);O=Math.asin(2*N/R);Q=Math.atan2(2*I[0]*I[3]-2*I[1]*I[2],-L+K-J+M);
return b.fromValues(Q,P,O)};d.exports=p},{"./gl-matrix/mat4":94,"./gl-matrix/vec3":95,"./gl-matrix/vec4":96}],94:[function(c,d,a){var b={create:c("gl-mat4/create"),rotate:c("gl-mat4/rotate"),rotateX:c("gl-mat4/rotateX"),rotateY:c("gl-mat4/rotateY"),rotateZ:c("gl-mat4/rotateZ"),scale:c("gl-mat4/scale"),multiply:c("gl-mat4/multiply"),translate:c("gl-mat4/translate"),invert:c("gl-mat4/invert"),clone:c("gl-mat4/clone"),transpose:c("gl-mat4/transpose"),identity:c("gl-mat4/identity"),fromRotationTranslation:c("gl-mat4/fromRotationTranslation")};
d.exports=b},{"gl-mat4/clone":70,"gl-mat4/create":71,"gl-mat4/fromRotationTranslation":72,"gl-mat4/identity":73,"gl-mat4/invert":74,"gl-mat4/multiply":75,"gl-mat4/rotate":76,"gl-mat4/rotateX":77,"gl-mat4/rotateY":78,"gl-mat4/rotateZ":79,"gl-mat4/scale":80,"gl-mat4/translate":81,"gl-mat4/transpose":82}],95:[function(b,d,a){var c={create:b("gl-vec3/create"),dot:b("gl-vec3/dot"),normalize:b("gl-vec3/normalize"),length:b("gl-vec3/length"),cross:b("gl-vec3/cross"),fromValues:b("gl-vec3/fromValues")};
d.exports=c},{"gl-vec3/create":83,"gl-vec3/cross":84,"gl-vec3/dot":85,"gl-vec3/fromValues":86,"gl-vec3/length":87,"gl-vec3/normalize":88}],96:[function(c,d,a){var b={create:c("gl-vec4/create"),transformMat4:c("gl-vec4/transformMat4"),fromValues:c("gl-vec4/fromValues")};
d.exports=b},{"gl-vec4/create":89,"gl-vec4/fromValues":90,"gl-vec4/transformMat4":91}],97:[function(g,d,h){g("./helpers/Float32Array");
var c=g("./helpers/transitionEnd");var i=g("@marcom/ac-clip").Clip;var k=g("./clips/ClipEasing");
var f=g("./clips/ClipInlineCss");var j=g("./clips/ClipTransitionCss");function b(n,m,o,l){if(n.nodeType){if(c===undefined||(l&&l.inlineStyles)){return new f(n,m,o,l)
}return new j(n,m,o,l)}return new k(n,m,o,l)}for(var a in i){if(typeof i[a]==="function"&&a.substr(0,1)!=="_"){b[a]=i[a].bind(i)
}}b.to=function(n,m,o,l){l=l||{};if(l.destroyOnComplete===undefined){l.destroyOnComplete=true
}return new b(n,m,o,l).play()};b.from=function(o,n,l,m){m=m||{};m.propsFrom=l;if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new b(o,n,m.propsTo,m).play()};d.exports=b},{"./clips/ClipEasing":100,"./clips/ClipInlineCss":101,"./clips/ClipTransitionCss":102,"./helpers/Float32Array":105,"./helpers/transitionEnd":114,"@marcom/ac-clip":16}],98:[function(b,c,a){c.exports=b("./timeline/Timeline")
},{"./timeline/Timeline":116}],99:[function(b,c,a){c.exports={Clip:b("./Clip"),Timeline:b("./Timeline")}
},{"./Clip":97,"./Timeline":98}],100:[function(b,a,c){var k=b("@marcom/ac-object/clone");
var g=b("@marcom/ac-object/create");var n=b("@marcom/ac-easing").createPredefined;
var l=b("../helpers/isCssCubicBezierString");var f=b("../helpers/BezierCurveCssManager");
var i=b("@marcom/ac-clip").Clip;var j=b("@marcom/ac-easing").Ease;function m(q,p,r,o){if(o&&l(o.ease)){o.ease=f.create(o.ease).toEasingFunction()
}o=o||{};this._propsEase=o.propsEase||{};i.call(this,q,p,r,o)}var h=i.prototype;
var d=m.prototype=g(h);d.reset=function(){var p=h.reset.call(this);if(this._clips){var o=this._clips.length;
while(o--){this._clips[o].reset()}}return p};d.destroy=function(){if(this._clips){var o=this._clips.length;
while(o--){this._clips[o].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return h.destroy.call(this)};d._prepareProperties=function(){var o=0;var r={};var p={};
var s={};var v;var u;if(this._propsEase){for(v in this._propsTo){if(this._propsTo.hasOwnProperty(v)){u=this._propsEase[v];
if(l(u)){u=f.create(u).toEasingFunction()}if(u===undefined){if(r[this._ease]===undefined){r[this._ease]={};
p[this._ease]={};s[this._ease]=this._ease.easingFunction;o++}r[this._ease][v]=this._propsTo[v];
p[this._ease][v]=this._propsFrom[v]}else{if(typeof u==="function"){r[o]={};p[o]={};
r[o][v]=this._propsTo[v];p[o][v]=this._propsFrom[v];s[o]=u;o++}else{if(r[u]===undefined){r[u]={};
p[u]={};s[u]=u;o++}r[u][v]=this._propsTo[v];p[u][v]=this._propsFrom[v]}}}}if(o>1){var q=k(this._options||{},true);
var t=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
q.onStart=null;q.onUpdate=null;q.onDraw=null;q.onComplete=null;this._clips=[];for(u in r){if(r.hasOwnProperty(u)){q.ease=s[u];
q.propsFrom=p[u];this._clips.push(new i(this._target,t,r[u],q))}}u="linear";this._propsTo={};
this._propsFrom={}}else{for(v in s){if(s.hasOwnProperty(v)){u=s[v]}}}if(u!==undefined){this._ease=(typeof u==="function")?new j(u):n(u)
}}return h._prepareProperties.call(this)};d._onUpdateClips=function(q){var o=(this._direction===1)?q.progress():1-q.progress();
var p=this._clips.length;while(p--){this._clips[p].progress(o)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
}};a.exports=m},{"../helpers/BezierCurveCssManager":104,"../helpers/isCssCubicBezierString":110,"@marcom/ac-clip":16,"@marcom/ac-easing":53,"@marcom/ac-object/clone":65,"@marcom/ac-object/create":66}],101:[function(f,c,g){var l=f("@marcom/ac-dom-styles/setStyle");
var b=f("../helpers/convertToStyleObject");var d=f("../helpers/convertToTransitionableObjects");
var i=f("@marcom/ac-object/create");var j=f("../helpers/removeTransitions");var m=f("./ClipEasing");
function a(p,o,q,n){n=n||{};this._el=p;this._storeOnStart=n.onStart||null;this._storeOnDraw=n.onDraw||null;
this._storeOnComplete=n.onComplete||null;n.onStart=this._onStart;n.onDraw=this._onDraw;
n.onComplete=this._onComplete;m.call(this,{},o,q,n)}var k=m.prototype;var h=a.prototype=i(k);
h.play=function(){var n=k.play.call(this);if(this._remainingDelay!==0){l(this._el,b(this._target))
}return n};h.reset=function(){var n=k.reset.call(this);l(this._el,b(this._target));
return n};h.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
this._storeOnDraw=null;this._storeOnComplete=null;return k.destroy.call(this)};
h.target=function(){return this._el};h._prepareProperties=function(){var q=d(this._el,this._propsTo,this._propsFrom);
this._target=q.target;this._propsFrom=q.propsFrom;this._propsTo=q.propsTo;j(this._el,this._target);
var o=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=b(o);if(this._options.removeStylesOnComplete!==undefined){var r;
var p=this._options.removeStylesOnComplete;if(typeof p==="boolean"&&p){for(r in this._completeStyles){if(this._completeStyles.hasOwnProperty(r)){this._completeStyles[r]=null
}}}else{if(typeof p==="object"&&p.length){var n=p.length;while(n--){r=p[n];if(this._completeStyles.hasOwnProperty(r)){this._completeStyles[r]=null
}}}}}return k._prepareProperties.call(this)};h._onStart=function(n){if(this.playing()&&this._direction===1&&this._delay===0){l(this._el,b(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
h._onDraw=function(n){l(this._el,b(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
}};h._onComplete=function(n){l(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};c.exports=a},{"../helpers/convertToStyleObject":107,"../helpers/convertToTransitionableObjects":108,"../helpers/removeTransitions":111,"./ClipEasing":100,"@marcom/ac-dom-styles/setStyle":52,"@marcom/ac-object/create":66}],102:[function(k,b,y){var d=k("@marcom/ac-dom-styles/setStyle");
var f=k("@marcom/ac-dom-styles/getStyle");var c=k("../helpers/convertToStyleObject");
var p=k("../helpers/convertToTransitionableObjects");var x=k("@marcom/ac-object/clone");
var n=k("@marcom/ac-object/create");var u=k("@marcom/ac-easing").createPredefined;
var m=k("../helpers/isCssCubicBezierString");var v=k("../helpers/removeTransitions");
var j=k("../helpers/transitionEnd");var o=k("../helpers/waitAnimationFrames");var w=k("../helpers/BezierCurveCssManager");
var a=k("@marcom/ac-clip").Clip;var s=k("./ClipEasing");var t=k("@marcom/ac-page-visibility").PageVisibilityManager;
var g="ease";var i="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var l="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function h(B,A,C,z){z=z||{};this._el=B;this._storeEase=z.ease;if(typeof this._storeEase==="function"){throw new Error(l)
}this._storeOnStart=z.onStart||null;this._storeOnComplete=z.onComplete||null;z.onStart=this._onStart.bind(this);
z.onComplete=this._onComplete.bind(this);this._stylesTo=x(C,true);this._stylesFrom=(z.propsFrom)?x(z.propsFrom,true):{};
this._propsEase=(z.propsEase)?x(z.propsEase,true):{};if(m(z.ease)){z.ease=w.create(z.ease).toEasingFunction()
}a.call(this,{},A,{},z);this._propsFrom={}}var q=a.prototype;var r=h.prototype=n(q);
r.play=function(){var z=q.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,c(this._stylesFrom))
}return z};r.reset=function(){var z=q.reset.call(this);this._stylesClip.reset();
this._applyStyles(0,c(this._styles));return z};r.destroy=function(){t.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return q.destroy.call(this)};r.target=function(){return this._el};r.duration=function(A){var z=q.duration.call(this,A);
if(A===undefined){return z}if(this.playing()){this.progress(this._progress)}return z
};r.progress=function(z){var A=q.progress.call(this,z);if(z===undefined){return A
}z=(this._direction===1)?z:1-z;this._stylesClip.progress(z);this._applyStyles(0,c(this._styles));
if(this.playing()){this._isWaitingForStylesToBeApplied=true;o(this._setStylesAfterWaiting,2)
}return A};r._prepareProperties=function(){var B=p(this._el,this._stylesTo,this._stylesFrom);
this._styles=B.target;this._stylesTo=B.propsTo;this._stylesFrom=B.propsFrom;var C=this._storeEase||g;
this._eases={};this._propsArray=[];var E;this._styleCompleteTo=c(this._stylesTo);
this._styleCompleteFrom=c(this._stylesFrom);this._propsEaseKeys={};var D;for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){this._propsArray[this._propsArray.length]=D;
if(this._propsEase[D]===undefined){if(this._eases[C]===undefined){E=this._convertEase(C);
this._eases[C]=E.css}this._propsEaseKeys[D]=C}else{if(this._eases[this._propsEase[D]]===undefined){E=this._convertEase(this._propsEase[D]);
this._eases[this._propsEase[D]]=E.css;this._propsEaseKeys[D]=this._propsEase[D];
this._propsEase[D]=E.js}else{if(m(this._propsEase[D])){this._propsEaseKeys[D]=this._propsEase[D];
this._propsEase[D]=this._eases[this._propsEase[D]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=c((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var A=this._options.removeStylesOnComplete;
if(typeof A==="boolean"&&A){for(D in this._stylesTo){this._completeStyles[D]=null
}}else{if(typeof A==="object"&&A.length){var z=A.length;while(z--){this._completeStyles[A[z]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);t.on(t.CHANGED,this._onVisibilityChanged);
this._stylesClip=new s(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
a._remove(this._stylesClip);return q._prepareProperties.call(this)};r._convertEase=function(B){if(typeof B==="function"){throw new Error(l)
}var z;var A;if(m(B)){z=w.create(B);A=z.toEasingFunction()}else{var C=u(B);if(C.cssString===null){throw new Error(i.replace(/%EASE%/g,B))
}z=w.create(C.cssString);A=B}return{css:{"1":z,"-1":z.reversed()},js:A}};r._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
q._complete.call(this)}};r._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};r._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(j,this._onTransitionEnded)
}};r._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(j,this._onTransitionEnded)
}};r._applyStyles=function(B,z){if(B>0){var C="";var A={};var D;for(D in this._eases){if(this._eases.hasOwnProperty(D)){A[D]=this._eases[D][this._direction].splitAt(this.progress()).toCSSString()
}}for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){C+=D+" "+B+"ms "+A[this._propsEaseKeys[D]]+" 0ms, "
}}this._currentTransitionStyles=C.substr(0,C.length-2);if(!this._doStylesMatchCurrentStyles(z)){this._addTransitionListener()
}else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
}z.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
d(this._el,z)};r._doStylesMatchCurrentStyles=function(B){var A=f.apply(this,[this._el].concat([this._propsArray]));
var z;for(z in B){if(B.hasOwnProperty(z)&&A.hasOwnProperty(z)&&B[z]!==A[z]){return false
}}return true};r._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.playing()){var A=this._durationMs*(1-this.progress());var z=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
this._applyStyles(A,z)}};r._setOtherTransitions=function(){v(this._el,this._stylesTo);
var z=a.getAll(this._el);var A=z.length;while(A--){if(z[A]!==this&&z[A].playing()&&z[A]._otherTransitions&&z[A]._otherTransitions.length){this._otherTransitions=z[A]._otherTransitions;
return}}this._otherTransitions=f(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};r._getTransitionStyles=function(){var z=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){z+=this._otherTransitions}else{if(z.length){z=z.substr(0,z.length-2)
}}return z};r._getOtherClipTransitionStyles=function(){var B="";var z=a.getAll(this._el);
var A=z.length;while(A--){if(z[A]!==this&&z[A].playing()&&z[A]._currentTransitionStyles&&z[A]._currentTransitionStyles.length){B+=z[A]._currentTransitionStyles+", "
}}return B};r._onVisibilityChanged=function(z){if(this.playing()&&!z.isHidden){this._update({timeNow:this._getTime()});
var A=this.progress();if(A<1){this.progress(A)}}};r._onPaused=function(A){var z=f.apply(this,[this._el].concat([this._propsArray]));
z.transition=this._getTransitionStyles();this._removeTransitionListener();d(this._el,z)
};r._onStart=function(z){var A=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
if(A){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
}o(this._setStylesAfterWaiting,A);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
}};r._onComplete=function(z){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
d(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};b.exports=h},{"../helpers/BezierCurveCssManager":104,"../helpers/convertToStyleObject":107,"../helpers/convertToTransitionableObjects":108,"../helpers/isCssCubicBezierString":110,"../helpers/removeTransitions":111,"../helpers/transitionEnd":114,"../helpers/waitAnimationFrames":115,"./ClipEasing":100,"@marcom/ac-clip":16,"@marcom/ac-dom-styles/getStyle":50,"@marcom/ac-dom-styles/setStyle":52,"@marcom/ac-easing":53,"@marcom/ac-object/clone":65,"@marcom/ac-object/create":66,"@marcom/ac-page-visibility":68}],103:[function(c,d,a){var g=c("@marcom/ac-easing").createBezier;
function b(i,h){this.manager=h;this.p1={x:i[0],y:i[1]};this.p2={x:i[2],y:i[3]};
this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
}var f=b.prototype;f.splitAt=function(k){if(this._isLinear){return this}k=Math.round(k*40)/40;
if(k===0){return this}else{if(this._cacheSplits[k]!==undefined){return this._cacheSplits[k]
}}var q=[this.p1.x,this.p2.x];var n=[this.p1.y,this.p2.y];var m=0;var o=k;var i=0;
var p=1;var j=this._getStartX(k,q);while(o!==j&&m<1000){if(o<j){p=k}else{i=k}k=i+((p-i)*0.5);
j=this._getStartX(k,q);++m}var l=this._splitBezier(k,q,n);var r=this._normalize(l);
var h=this.manager.create(r);this._cacheSplits[o]=h;return h};f.reversed=function(){var h=this.toArray();
return this.manager.create([0.5-(h[2]-0.5),0.5-(h[3]-0.5),0.5-(h[0]-0.5),0.5-(h[1]-0.5)])
};f.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};f.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};f.toEasingFunction=function(){return g.apply(this,this.toArray()).easingFunction
};f._getStartX=function(m,h){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return i-3*k*l*h[1]+3*m*j*h[0]
};f._splitBezier=function(m,h,n){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return[i-3*k*l*h[1]+3*m*j*h[0],i-3*k*l*n[1]+3*m*j*n[0],k-2*m*l*h[1]+j*h[0],k-2*m*l*n[1]+j*n[0],m-l*h[1],m-l*n[1]]
};f._normalize=function(h){return[(h[2]-h[0])/(1-h[0]),(h[3]-h[1])/(1-h[1]),(h[4]-h[0])/(1-h[0]),(h[5]-h[1])/(1-h[1])]
};d.exports=b},{"@marcom/ac-easing":53}],104:[function(c,d,a){var b=c("./BezierCurveCss");
function g(){this._instances={}}var f=g.prototype;f.create=function(k){var j;if(typeof k==="string"){j=k.replace(/ /g,"")
}else{j="cubic-bezier("+k.join(",")+")"}if(this._instances[j]===undefined){if(typeof k==="string"){k=k.match(/\d*\.?\d+/g);
var h=k.length;while(h--){k[h]=Number(k[h])}}this._instances[j]=new b(k,this)}return this._instances[j]
};d.exports=new g()},{"./BezierCurveCss":103}],105:[function(b,c,a){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],106:[function(f,g,d){var a=f("@marcom/ac-dom-metrics/getDimensions");var c=f("./splitUnits");
var b={translateX:"width",translateY:"height"};function i(j,l,m){this._transform=j;
var k;var n;var o;for(o in m){if(m.hasOwnProperty(o)&&typeof this._transform[o]==="function"){k=c(m[o]);
if(k.unit==="%"){n=this._convertPercentToPixelValue(o,k.value,l)}else{n=k.value
}this._transform[o].call(this._transform,n)}}}var h=i.prototype;h._convertPercentToPixelValue=function(m,l,k){m=b[m];
var j=a(k);if(j[m]){l*=0.01;return j[m]*l}return l};h.toArray=function(){return this._transform.toArray()
};h.toCSSString=function(){return this._transform.toCSSString()};g.exports=i},{"./splitUnits":112,"@marcom/ac-dom-metrics/getDimensions":38}],107:[function(b,c,a){c.exports=function d(h){var g={};
var f;var i;for(i in h){if(h.hasOwnProperty(i)&&h[i]!==null){if(h[i].isColor){if(h[i].isRgb){g[i]="rgb("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+")"
}else{if(h[i].isRgba){g[i]="rgba("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+", "+h[i].a+")"
}}}else{if(i==="transform"){f=(h[i].length===6)?"matrix":"matrix3d";g[i]=f+"("+h[i].join(",")+")"
}else{if(!h[i].unit){g[i]=h[i].value}else{g[i]=h[i].value+h[i].unit}}}}}return g
}},{}],108:[function(h,d,j){var m=h("@marcom/ac-dom-styles/getStyle");var o=h("@marcom/ac-object/clone");
var f=h("./splitUnits");var b=h("./toCamCase");var c=h("@marcom/ac-color").Color;
var l=h("@marcom/ac-feature/cssPropertyAvailable");var i=h("@marcom/ac-transform").Transform;
var a=h("./TransformMatrix");var n=function(s){if(c.isRgba(s)){s=new c(s).rgbaObject();
s.isRgba=true}else{s=new c(s).rgbObject();s.isRgb=true}s.isColor=true;return s};
var r=function(s){if(s.isRgb){s.isRgb=false;s.isRgba=true;s.a=1}};var q=function(t,s,u){if(t.isRgba||s.isRgba||u.isRgba){r(t);
r(s);r(u)}};var p=function(s){return[s[0],s[1],0,0,s[2],s[3],0,0,0,0,1,0,s[4],s[5],0,1]
};var k=function(t,s,u){if(t.transform.length===16||s.transform.length===16||u.transform.length===16){if(t.transform.length===6){t.transform=p(t.transform)
}if(s.transform.length===6){s.transform=p(s.transform)}if(u.transform.length===6){u.transform=p(u.transform)
}}};d.exports=function g(u,A,z){var w={};A=o(A,true);z=o(z,true);var t;var B;var x;
var y;var v=l("transform");var s;for(s in A){if(A.hasOwnProperty(s)&&A[s]!==null){if(s==="transform"){if(v){B=new i();
t=m(u,"transform")["transform"]||"none";B.setMatrixValue(t);x=new a(new i(),u,A[s])
}if(x&&x.toCSSString()!==B.toCSSString()){y=new a(z[s]?new i():B.clone(),u,z[s]);
w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null}}else{t=m(u,s)[b(s)]||z[s];
if(c.isColor(t)){w[s]=n(t);z[s]=(z[s]!==undefined)?n(z[s]):o(w[s],true);A[s]=n(A[s])
}else{w[s]=f(t);z[s]=(z[s]!==undefined)?f(z[s]):o(w[s],true);A[s]=f(A[s])}}}}for(s in z){if(z.hasOwnProperty(s)&&z[s]!==null&&(A[s]===undefined||A[s]===null)){if(s==="transform"){if(v){B=new i();
B.setMatrixValue(getComputedStyle(u).transform||getComputedStyle(u).webkitTransform||"none");
y=new a(new i(),u,z[s])}if(y&&y.toCSSString()!==B.toCSSString()){x=new a(B.clone());
w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null;z[s]=null
}}else{t=m(u,s)[b(s)];if(c.isColor(t)){w[s]=n(t);A[s]=o(w[s],true);z[s]=n(z[s])
}else{w[s]=f(t);z[s]=f(z[s]);A[s]=o(w[s],true)}}}if(w[s]&&w[s].isColor){q(w[s],z[s],A[s])
}}if(w.transform){k(w,z,A)}return{target:w,propsTo:A,propsFrom:z}}},{"./TransformMatrix":106,"./splitUnits":112,"./toCamCase":113,"@marcom/ac-color":18,"@marcom/ac-dom-styles/getStyle":50,"@marcom/ac-feature/cssPropertyAvailable":160,"@marcom/ac-object/clone":65,"@marcom/ac-transform":92}],109:[function(b,c,a){c.exports=function d(j){if(j.transitionProperty){var m="";
var h=j.transitionProperty.split(", ");var k=j.transitionDuration.split(", ");var l=j.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(i){return i.substr(0,i.length-1)
}).split(", ");var f=j.transitionDelay.split(", ");var g=h.length;while(g--){m+=h[g]+" "+k[g]+" "+l[g]+" "+f[g]+", "
}return m.substr(0,m.length-2)}return false}},{}],110:[function(c,d,b){d.exports=function a(f){return typeof f==="string"&&f.substr(0,13)==="cubic-bezier("
}},{}],111:[function(d,f,c){var h=d("@marcom/ac-dom-styles/setStyle");var a=d("@marcom/ac-dom-styles/getStyle");
var g=d("./getShorthandTransition");f.exports=function b(l,n){var m=a(l,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
m=m.transition||g(m);if(m&&m.length){m=m.split(",");var k=0;var o;var j=m.length;
while(j--){o=m[j].trim().split(" ")[0];if(n[o]!==undefined){m.splice(j,1);++k}}if(k){if(m.length===0){m=["all"]
}h(l,{transition:m.join(",").trim()})}}}},{"./getShorthandTransition":109,"@marcom/ac-dom-styles/getStyle":50,"@marcom/ac-dom-styles/setStyle":52}],112:[function(c,d,b){d.exports=function a(i){i=String(i);
if(i.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var h=/(\d*\.?\d*)(.*)/;var f=1;if(i&&i.substr(0,1)==="-"){i=i.substr(1);f=-1}var g=String(i).match(h);
return{value:Number(g[1])*f,unit:g[2]}}},{}],113:[function(c,d,b){d.exports=function a(g){var f=function(i,j,k,h){return(k===0)&&(h.substr(1,3)!=="moz")?j:j.toUpperCase()
};return g.replace(/-(\w)/g,f)}},{}],114:[function(d,f,c){var a;f.exports=(function b(){if(a){return a
}var g;var h=document.createElement("fakeelement");var i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(g in i){if(h.style[g]!==undefined){a=i[g];return a}}})()},{}],115:[function(d,f,b){var a=d("@marcom/ac-page-visibility").PageVisibilityManager;
f.exports=function c(k,i){if(i){var j=function(l){if(a.isHidden){setTimeout(l,16)
}else{window.requestAnimationFrame(l)}};var h=0;var g=function(){if(h===i){k.call(this)
}else{++h;j(g)}};g()}else{k.call(this)}}},{"@marcom/ac-page-visibility":68}],116:[function(c,a,d){var h=c("@marcom/ac-object/create");
var i=c("@marcom/ac-clip").Clip;var f=c("./TimelineClip");var b=c("./TimelineCallback");
var l=c("./TimelineItemList");var k=i.prototype;function j(m){m=m||{};m.ease=m.ease||"linear";
m.destroyOnComplete=false;this.options=m;i.call(this,{t:0},0,{t:1},m);this._itemList=new l()
}var g=j.prototype=h(k);j.prototype.constructor=j;g._update=function(m){k._update.call(this,m);
this._render()};g.progress=function(m){k.progress.call(this,m);if(m!==undefined){this._render()
}return this._progress};g._render=function(){if(this._itemList.length===0){return
}var p=this._target.t*this._duration;var m=this._itemList.head;var n=m;while(n){n=m.next;
var o=(p-m.position);m.currentTime(o);m=n}};g.addClip=function(o,n){n=(n===undefined)?this.duration():n;
var m=o._delay/1000;this._itemList.append(new f(o,n+m));this._updateDuration()};
g.addCallback=function(n,m){m=(m===undefined)?this.duration():m;this._itemList.append(new b(n,m));
this._updateDuration()};g.remove=function(m){var n=this._itemList.getItem(m);if(n){this._itemList.remove(n);
this._updateDuration()}};g._updateDuration=function(){var m=this._itemList.head;
var n=m.position+m.duration();this._itemList.forEach(function(p){var o=p.position+p.duration();
if(o>=n){m=p;n=o}});this.duration(n)};g.destroy=function(){var m=this._itemList.head;
while(m){var n=m;m=n.next;this._itemList.remove(n)}this._duration=0;return k.destroy.call(this)
};a.exports=j},{"./TimelineCallback":117,"./TimelineClip":118,"./TimelineItemList":119,"@marcom/ac-clip":16,"@marcom/ac-object/create":66}],117:[function(b,c,a){function f(h,g){this.callback=h;
this._delay=0;this.position=g;this._hasTriggered=false;this.prev=null;this.next=null
}var d=f.prototype;d.duration=function(){return 0};d.currentTime=function(g){if(g>=0&&!this._hasTriggered){this.callback();
this._hasTriggered=true}if(g<0&&this._hasTriggered){this.callback();this._hasTriggered=false
}return 0};c.exports=f},{}],118:[function(b,c,a){function f(h,g){this.clip=h;this.position=g;
this.duration=this.clip.duration.bind(this.clip);this.lastProgress=-1;this.prev=null;
this.next=null}var d=f.prototype;d.currentTime=function(h){var g=Math.min(1,Math.max(0,h/this.clip._duration));
if(g!==g){g=1}if(this.lastProgress===g){return this.lastProgress}if(this.lastProgress===0||g===0||this.lastProgress===-1){if(this.clip._storeOnStart){this.clip._storeOnStart(this.clip)
}}this.clip._playing=(g*this.clip._duration===this.clip._duration);this.lastProgress=this.clip.progress(g);
return this.lastProgress};d.destroy=function(){this.clip.destroy();this.prev=null;
this.next=null;this.duration=null};c.exports=f},{}],119:[function(b,c,a){var h=b("./TimelineClip");
var f=b("./TimelineCallback");var g=function(){this.head=null;this.tail=null;this.length=0
};var d=g.prototype;d.append=function(i){i.prev=null;i.next=null;if(this.tail){this.tail.next=i;
i.prev=this.tail}else{this.head=i}this.tail=i;this.length++};d.remove=function(i){if(i===this.head){this.head=this.head.next
}else{if(i===this.tail){this.tail=this.tail.prev}}if(i.prev){i.prev.next=i.next
}if(i.next){i.next.prev=i.prev}i.next=i.prev=null;if(this.head===null){this.tail=null
}this.length--};d.getItem=function(i){var j=this.head;while(j){var k=j;if((k instanceof h&&k.clip===i)||(k instanceof f&&k.callback===i)){return k
}j=k.next}return null};d.forEach=function(m){var j=0;var k=this.head;while(k){var l=k;
m(l,j,this.length);k=l.next}};d.destroy=function(){while(this.head){var i=this.head;
this.remove(i);i.destroy()}};c.exports=g},{"./TimelineCallback":117,"./TimelineClip":118}],120:[function(c,d,b){d.exports=function a(f,h){var g;
if(h){g=f.getBoundingClientRect();return{width:g.width,height:g.height}}return{width:f.offsetWidth,height:f.offsetHeight}
}},{}],121:[function(f,g,d){var c=f("./getDimensions");var b=f("./getScrollX");
var a=f("./getScrollY");g.exports=function h(i,n){var k;var m;var l;var j;if(n){k=i.getBoundingClientRect();
m=b();l=a();return{top:k.top+l,right:k.right+m,bottom:k.bottom+l,left:k.left+m}
}j=c(i,n);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height};while((i=i.offsetParent)){k.top+=i.offsetTop;
k.left+=i.offsetLeft}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}
}},{"./getDimensions":120,"./getScrollX":122,"./getScrollY":123}],122:[function(c,d,b){d.exports=function a(f){f=f||window;
if(f===window){return window.scrollX||window.pageXOffset}return f.scrollLeft}},{}],123:[function(c,d,b){d.exports=function a(f){f=f||window;
if(f===window){return window.scrollY||window.pageYOffset}return f.scrollTop}},{}],124:[function(b,c,a){c.exports=1
},{}],125:[function(b,c,a){var d=b("../isNode");c.exports=function f(h,g){if(!d(h)){return false
}if(typeof g==="number"){return(h.nodeType===g)}return(g.indexOf(h.nodeType)!==-1)
}},{"../isNode":127}],126:[function(c,d,b){var g=c("./internal/isNodeType");var a=c("./ELEMENT_NODE");
d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":124,"./internal/isNodeType":125}],127:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],128:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],129:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");c.exports=new d();
c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":130}],130:[function(d,c,h){var k={isNodeList:d("@marcom/ac-dom-nodes/isNodeList"),isElement:d("@marcom/ac-dom-nodes/isElement")};
var a={getDimensions:d("@marcom/ac-dom-metrics/getDimensions"),getPagePosition:d("@marcom/ac-dom-metrics/getPagePosition"),getScrollY:d("@marcom/ac-dom-metrics/getScrollY")};
var f={clone:d("@marcom/ac-object/clone"),extend:d("@marcom/ac-object/extend")};
var j=d("./TrackedElement");var g={autoStart:false,useRenderedPosition:false};function b(m,l){this.options=f.clone(g);
this.options=typeof l==="object"?f.extend(this.options,l):this.options;this._scrollY=this._getScrollY();
this._windowHeight=this._getWindowHeight();this.tracking=false;this.elements=[];
if(m&&(Array.isArray(m)||k.isNodeList(m)||k.isElement(m))){this.addElements(m)}this.refreshAllElementStates=this.refreshAllElementStates.bind(this);
this.refreshAllElementMetrics=this.refreshAllElementMetrics.bind(this);if(this.options.autoStart){this.start()
}}var i=b.prototype;i.destroy=function(){var m,l;this.stop();for(m=0,l=this.elements.length;
m<l;m++){this.elements[m].destroy()}this.elements=null;this.options=null};i._registerTrackedElements=function(l){var m=[].concat(l);
m.forEach(function(n){if(this._elementInDOM(n.element)){n.offsetTop=n.element.offsetTop;
this.elements.push(n)}},this)};i._elementInDOM=function(n){var m=false;var l=document.getElementsByTagName("body")[0];
if(k.isElement(n)&&l.contains(n)){m=true}return m};i._elementPercentInView=function(l){return l.pixelsInView/l.height
};i._elementPixelsInView=function(m){var l=m.top-this._scrollY;var n=m.bottom-this._scrollY;
if(l>this._windowHeight||n<0){return 0}return Math.min(n,this._windowHeight)-Math.max(l,0)
};i._ifInView=function(l,m){if(!m){l.trigger("enterview",l)}};i._ifAlreadyInView=function(l){if(!l.inView){l.trigger("exitview",l)
}};i.addElements=function(o,n){if(typeof n==="undefined"){n=this.options.useRenderedPosition
}o=k.isNodeList(o)?Array.prototype.slice.call(o):[].concat(o);for(var m=0,l=o.length;
m<l;m++){this.addElement(o[m],n)}};i.addElement=function(m,n){var l=null;if(typeof n==="undefined"){n=this.options.useRenderedPosition
}if(k.isElement(m)){l=new j(m,n);this._registerTrackedElements(l);this.refreshElementMetrics(l);
this.refreshElementState(l)}else{throw new TypeError("ElementTracker: "+m+" is not a valid DOM element")
}return l};i.removeElement=function(n){var m=[];var l;this.elements.forEach(function(p,o){if(p===n||p.element===n){m.push(o)
}});l=this.elements.filter(function(p,o){return m.indexOf(o)<0});this.elements=l
};i.start=function(){if(this.tracking===false){this.tracking=true;window.addEventListener("resize",this.refreshAllElementMetrics);
window.addEventListener("orientationchange",this.refreshAllElementMetrics);window.addEventListener("scroll",this.refreshAllElementStates);
this.refreshAllElementMetrics()}};i.stop=function(){if(this.tracking===true){this.tracking=false;
window.removeEventListener("resize",this.refreshAllElementMetrics);window.removeEventListener("orientationchange",this.refreshAllElementMetrics);
window.removeEventListener("scroll",this.refreshAllElementStates)}};i.refreshAllElementMetrics=function(l,m){if(typeof l!=="number"){l=this._getScrollY()
}if(typeof m!=="number"){m=this._getWindowHeight()}this._scrollY=l;this._windowHeight=m;
this.elements.forEach(this.refreshElementMetrics,this)};i.refreshElementMetrics=function(m){var n=a.getDimensions(m.element,m.useRenderedPosition);
var l=a.getPagePosition(m.element,m.useRenderedPosition);m=f.extend(m,n,l);return this.refreshElementState(m)
};i.refreshAllElementStates=function(l){if(typeof l!=="number"){l=this._getScrollY()
}this._scrollY=l;this.elements.forEach(this.refreshElementState,this)};i.refreshElementState=function(l){var m=l.inView;
l.pixelsInView=this._elementPixelsInView(l);l.percentInView=this._elementPercentInView(l);
l.inView=l.pixelsInView>0;if(l.inView){this._ifInView(l,m)}if(m){this._ifAlreadyInView(l)
}return l};i._getWindowHeight=function(){return window.innerHeight};i._getScrollY=function(){return a.getScrollY()
};c.exports=b},{"./TrackedElement":131,"@marcom/ac-dom-metrics/getDimensions":120,"@marcom/ac-dom-metrics/getPagePosition":121,"@marcom/ac-dom-metrics/getScrollY":123,"@marcom/ac-dom-nodes/isElement":126,"@marcom/ac-dom-nodes/isNodeList":128,"@marcom/ac-object/clone":134,"@marcom/ac-object/extend":136}],131:[function(c,d,b){var a={isElement:c("@marcom/ac-dom-nodes/isElement")};
var g=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;var i=g.prototype;function h(j,k){if(!a.isElement(j)){throw new TypeError("TrackedElement: "+j+" is not a valid DOM element")
}g.call(this);this.element=j;this.inView=false;this.percentInView=0;this.pixelsInView=0;
this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;this.width=0;
this.height=0;this.useRenderedPosition=k||false}var f=h.prototype=Object.create(i);
f.destroy=function(){this.element=null;i.destroy.call(this)};d.exports=h},{"@marcom/ac-dom-nodes/isElement":126,"@marcom/ac-event-emitter-micro":139}],132:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{dup:63}],133:[function(b,c,a){arguments[4][64][0].apply(a,arguments)},{"./internal/expose":132,dup:64}],134:[function(b,c,a){arguments[4][65][0].apply(a,arguments)
},{"./extend":136,"@marcom/ac-console/log":133,"@marcom/ac-polyfills/Array/isArray":undefined,dup:65}],135:[function(b,c,a){var g=b("./extend");
var d=b("@marcom/ac-console/log");c.exports=function f(i,h){d("`@marcom/ac-object/defaults` is deprecated. Use native `Object.assign`.");
if(typeof i!=="object"){throw new TypeError("defaults: must provide a defaults object")
}h=h||{};if(typeof h!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return g({},i,h)}},{"./extend":136,"@marcom/ac-console/log":133}],136:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"@marcom/ac-console/log":133,"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:67}],137:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":138}],138:[function(c,b,f){var g;
var k=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;var d={defaults:c("@marcom/ac-object/defaults"),extend:c("@marcom/ac-object/extend")};
var h=c("@marcom/ac-element-tracker").ElementTracker;var j={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var i={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(l){h.call(this,null,l);k.call(this);this._thresholdEnter=this._thresholdEnter.bind(this);
this._thresholdExit=this._thresholdExit.bind(this);this._enterView=this._enterView.bind(this);
this._exitView=this._exitView.bind(this)};g=a.prototype=Object.create(h.prototype);
g=d.extend(g,k.prototype);g._decorateTrackedElement=function(m,l){var n;n=d.defaults(j,l||{});
d.extend(m,n);d.extend(m,i)};g._attachElementListeners=function(l){l.on("thresholdenter",this._thresholdEnter,this);
l.on("thresholdexit",this._thresholdExit,this);l.on("enterview",this._enterView,this);
l.on("exitview",this._exitView,this)};g._removeElementListeners=function(l){l.off("thresholdenter",this._thresholdEnter);
l.off("thresholdexit",this._thresholdExit);l.off("enterview",this._enterView);l.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(l){if(!l.stopOnEngaged){this._attachElementListeners(l)
}else{if(!l.engaged){this._attachElementListeners(l)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(l){this._removeElementListeners(l)
},this)};g._elementInViewPastThreshold=function(m){var l=false;if(m.pixelsInView===this._windowHeight){l=true
}else{l=(m.percentInView>m.inViewThreshold)}return l};g._ifInView=function(l,n){var m=l.inThreshold;
h.prototype._ifInView.apply(this,arguments);if(!m&&this._elementInViewPastThreshold(l)){l.inThreshold=true;
l.trigger("thresholdenter",l);if(typeof l.timeToEngage==="number"&&l.timeToEngage>=0){l.engagedTimeout=window.setTimeout(this._engaged.bind(this,l),l.timeToEngage)
}}};g._ifAlreadyInView=function(l){var m=l.inThreshold;h.prototype._ifAlreadyInView.apply(this,arguments);
if(m&&!this._elementInViewPastThreshold(l)){l.inThreshold=false;l.trigger("thresholdexit",l);
if(l.engagedTimeout){window.clearTimeout(l.engagedTimeout);l.engagedTimeout=null
}}};g._engaged=function(l){l.engagedTimeout=null;this._elementEngaged(l);l.trigger("engaged",l);
this.trigger("engaged",l)};g._thresholdEnter=function(l){l.thresholdEnterTime=Date.now();
l.thresholdExitTime=0;this.trigger("thresholdenter",l)};g._thresholdExit=function(l){l.thresholdExitTime=Date.now();
this.trigger("thresholdexit",l)};g._enterView=function(l){this.trigger("enterview",l)
};g._exitView=function(l){this.trigger("exitview",l)};g._elementEngaged=function(l){l.engaged=true;
if(l.stopOnEngaged){this.stop(l)}};g.stop=function(l){if(this.tracking&&!l){this._removeAllElementListeners();
h.prototype.stop.call(this)}if(l&&l.tracking){l.tracking=false;this._removeElementListeners(l);
this.removeElement(l)}};g.start=function(l){if(!l){this._attachAllElementListeners()
}if(l&&!l.tracking){if(!l.stopOnEngaged){l.tracking=true;this._attachElementListeners(l)
}else{if(!l.engaged){l.tracking=true;this._attachElementListeners(l)}}}if(!this.tracking){h.prototype.start.call(this)
}else{this.refreshAllElementMetrics();this.refreshAllElementStates()}};g.addElement=function(n,l){l=l||{};
var m=h.prototype.addElement.call(this,n,l.useRenderedPosition);this._decorateTrackedElement(m,l);
return m};g.addElements=function(m,l){[].forEach.call(m,function(n){this.addElement(n,l)
},this)};b.exports=a},{"@marcom/ac-element-tracker":129,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-object/defaults":135,"@marcom/ac-object/extend":136}],139:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":140}],140:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}if(arguments.length===1){this._events[g]=null;
delete this._events[g];return}var h=this._events[g].indexOf(i);if(h===-1){return
}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return}for(var h=this._events[g].length-1;
h>=0;h--){if(j!==undefined){this._events[g][h](j)}else{this._events[g][h]()}}};
d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],141:[function(c,d,b){var a=function(){var h="";
var g;for(g=0;g<arguments.length;g++){if(g>0){h+=","}h+=arguments[g]}return h};
d.exports=function f(i,h){h=h||a;var g=function(){var j=arguments;var k=h.apply(this,j);
if(!(k in g.cache)){g.cache[k]=i.apply(this,j)}return g.cache[k]};g.cache={};return g
}},{}],142:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)
}return f}}},{}],143:[function(b,c,a){arguments[4][2][0].apply(a,arguments)},{"./shared/camelCasedEventTypes":146,"./shared/prefixHelper":148,"./shared/windowFallbackEventTypes":151,"./utils/eventTypeAvailable":152,dup:2}],144:[function(b,c,a){arguments[4][41][0].apply(a,arguments)
},{"./shared/getStyleTestElement":147,"./shared/prefixHelper":148,"./shared/stylePropertyCache":149,"./utils/toCSS":153,"./utils/toDOM":154,dup:41}],145:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{"./getStyleProperty":144,"./shared/prefixHelper":148,"./shared/stylePropertyCache":149,"./shared/styleValueAvailable":150,dup:42}],146:[function(b,c,a){arguments[4][3][0].apply(a,arguments)
},{dup:3}],147:[function(b,c,a){arguments[4][43][0].apply(a,arguments)},{dup:43}],148:[function(b,c,a){arguments[4][4][0].apply(a,arguments)
},{dup:4}],149:[function(b,c,a){arguments[4][45][0].apply(a,arguments)},{dup:45}],150:[function(b,c,a){arguments[4][46][0].apply(a,arguments)
},{"./getStyleTestElement":147,"./stylePropertyCache":149,dup:46}],151:[function(b,c,a){arguments[4][5][0].apply(a,arguments)
},{dup:5}],152:[function(b,c,a){arguments[4][6][0].apply(a,arguments)},{dup:6}],153:[function(b,c,a){arguments[4][48][0].apply(a,arguments)
},{dup:48}],154:[function(b,c,a){arguments[4][49][0].apply(a,arguments)},{dup:49}],155:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),mediaQueriesAvailable:b("./mediaQueriesAvailable"),prefersReducedMotion:b("./prefersReducedMotion"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":156,"./continuousScrollEventsAvailable":157,"./cookiesAvailable":158,"./cssLinearGradientAvailable":159,"./cssPropertyAvailable":160,"./cssViewportUnitsAvailable":161,"./elementAttributeAvailable":162,"./eventTypeAvailable":163,"./isDesktop":165,"./isHandheld":166,"./isRetina":167,"./isTablet":168,"./localStorageAvailable":169,"./mediaElementsAvailable":170,"./mediaQueriesAvailable":171,"./prefersReducedMotion":172,"./sessionStorageAvailable":173,"./svgAvailable":174,"./threeDTransformsAvailable":175,"./touchAvailable":176,"./webGLAvailable":177}],156:[function(b,c,a){var g=b("./helpers/globals");
var f=b("@marcom/ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
c.exports.original=d},{"./helpers/globals":164,"@marcom/ac-function/once":142}],157:[function(c,f,b){var d=c("@marcom/ac-useragent");
var a=c("./touchAvailable").original;var g=c("@marcom/ac-function/once");function h(){return(!a()||(d.os.ios&&d.os.version.major>=8)||d.browser.chrome)
}f.exports=g(h);f.exports.original=h},{"./touchAvailable":176,"@marcom/ac-function/once":142,"@marcom/ac-useragent":449}],158:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var k=false;var h=g.getDocument();
var j=g.getNavigator();try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";
k=(h.cookie.indexOf("ac_feature_cookie")!==-1);h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(i){}return k}d.exports=f(a);d.exports.original=a},{"./helpers/globals":164,"@marcom/ac-function/once":142}],159:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"@marcom/ac-function/once":142,"@marcom/ac-prefixer/getStyleValue":145}],160:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-prefixer/getStyleProperty");var h=c("@marcom/ac-function/memoize");
function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)}else{return !!f(j)}}d.exports=h(a);
d.exports.original=a},{"@marcom/ac-function/memoize":141,"@marcom/ac-prefixer/getStyleProperty":144,"@marcom/ac-prefixer/getStyleValue":145}],161:[function(b,c,a){var f=b("@marcom/ac-prefixer/getStyleValue");
var d=b("@marcom/ac-function/once");function g(){return !!f("margin","1vw 1vh")
}c.exports=d(g);c.exports.original=g},{"@marcom/ac-function/once":142,"@marcom/ac-prefixer/getStyleValue":145}],162:[function(b,d,a){var f=b("./helpers/globals");
var g=b("@marcom/ac-function/memoize");function c(h,j){var i=f.getDocument();var k;
j=j||"div";k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c
},{"./helpers/globals":164,"@marcom/ac-function/memoize":141}],163:[function(c,f,b){var a=c("@marcom/ac-prefixer/getEventType");
var g=c("@marcom/ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);
f.exports.original=d},{"@marcom/ac-function/memoize":141,"@marcom/ac-prefixer/getEventType":143}],164:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],165:[function(d,f,b){var a=d("./touchAvailable").original;var h=d("./helpers/globals");
var g=d("@marcom/ac-function/once");function c(){var i=h.getWindow();return(!a()&&!i.orientation)
}f.exports=g(c);f.exports.original=c},{"./helpers/globals":164,"./touchAvailable":176,"@marcom/ac-function/once":142}],166:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("@marcom/ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":165,"./isTablet":168,"@marcom/ac-function/once":142}],167:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":164}],168:[function(f,g,c){var d=f("./isDesktop").original;
var i=f("./helpers/globals");var h=f("@marcom/ac-function/once");var b=600;function a(){var k=i.getWindow();
var j=k.screen.width;if(k.orientation&&k.screen.height<j){j=k.screen.height}return(!d()&&j>=b)
}g.exports=h(a);g.exports.original=a},{"./helpers/globals":164,"./isDesktop":165,"@marcom/ac-function/once":142}],169:[function(c,d,a){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function b(){var j=g.getWindow();var i=false;
try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)}catch(h){}return i
}d.exports=f(b);d.exports.original=b},{"./helpers/globals":164,"@marcom/ac-function/once":142}],170:[function(b,c,a){var g=b("./helpers/globals");
var d=b("@marcom/ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":164,"@marcom/ac-function/once":142}],171:[function(c,d,b){c("@marcom/ac-polyfills/matchMedia");
var g=c("./helpers/globals");var f=c("@marcom/ac-function/once");function a(){var i=g.getWindow();
var h=i.matchMedia("only all");return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a
},{"./helpers/globals":164,"@marcom/ac-function/once":142,"@marcom/ac-polyfills/matchMedia":undefined}],172:[function(b,c,a){var f=b("./helpers/globals");
function d(){var h=f.getWindow();var g=h.matchMedia("(prefers-reduced-motion)");
return !!(g&&g.matches)}c.exports=d},{"./helpers/globals":164}],173:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=false;
try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":164,"@marcom/ac-function/once":142}],174:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":164,"@marcom/ac-function/once":142}],175:[function(b,c,a){var g=b("@marcom/ac-prefixer/getStyleValue");
var d=b("@marcom/ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"@marcom/ac-function/once":142,"@marcom/ac-prefixer/getStyleValue":145}],176:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":164,"@marcom/ac-function/once":142}],177:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
if(typeof i.getContext==="function"){return !!(i.getContext("webgl")||i.getContext("experimental-webgl"))
}return false}d.exports=f(a);d.exports.original=a},{"./helpers/globals":164,"@marcom/ac-function/once":142}],178:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");
b("@marcom/ac-polyfills/Element/prototype.classList");var d=b("./className/add");
c.exports=function f(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);return
}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":180,"@marcom/ac-polyfills/Array/prototype.slice":undefined,"@marcom/ac-polyfills/Element/prototype.classList":undefined}],179:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":180,"./className/contains":181,"./className/remove":183}],180:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":181}],181:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":182}],182:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],183:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":181,"./getTokenRegExp":182}],184:[function(b,d,a){b("@marcom/ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":181,"@marcom/ac-polyfills/Element/prototype.classList":undefined}],185:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":178,"./contains":184,"./remove":186,"./toggle":187}],186:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Element/prototype.classList");var b=d("./className/remove");
f.exports=function a(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":183,"@marcom/ac-polyfills/Array/prototype.slice":undefined,"@marcom/ac-polyfills/Element/prototype.classList":undefined}],187:[function(c,d,b){c("@marcom/ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":179,"@marcom/ac-polyfills/Element/prototype.classList":undefined}],188:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":196,"./utils/addEventListener":197}],189:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":190,"./shared/prefixHelper":191,"./shared/windowFallbackEventTypes":192,"./utils/eventTypeAvailable":193,dup:2}],190:[function(b,c,a){arguments[4][3][0].apply(a,arguments)
},{dup:3}],191:[function(b,c,a){arguments[4][4][0].apply(a,arguments)},{dup:4}],192:[function(b,c,a){arguments[4][5][0].apply(a,arguments)
},{dup:5}],193:[function(b,c,a){arguments[4][6][0].apply(a,arguments)},{dup:6}],194:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],195:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":196,"./utils/removeEventListener":198}],196:[function(c,f,b){var d=c("@marcom/ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);if(g){return g}return i}},{"@marcom/ac-prefixer/getEventType":189}],197:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],198:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],199:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
}},{"./utils/getBoundingClientRect":209}],200:[function(b,c,a){arguments[4][38][0].apply(a,arguments)
},{"./utils/getBoundingClientRect":209,dup:38}],201:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,o){var l;var n;var m;var k;if(o){l=d(j);n=b();m=a();return{top:l.top+m,right:l.right+n,bottom:l.bottom+m,left:l.left+n}
}k=c(j,o);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};while((j=j.offsetParent)){l.top+=j.offsetTop;
l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":200,"./getScrollX":205,"./getScrollY":206,"./utils/getBoundingClientRect":209}],202:[function(c,f,b){var a=c("./getDimensions");
var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
return(i/h)}},{"./getDimensions":200,"./getPixelsInViewport":203}],203:[function(c,d,b){var a=c("./getViewportPosition");
d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
}if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":207}],204:[function(d,f,c){var a=d("./getDimensions");
var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
}}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":200,"./utils/getBoundingClientRect":209}],205:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],206:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],207:[function(g,h,f){var i=g("./getPagePosition");
var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
}j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
}},{"./getPagePosition":201,"./getScrollX":205,"./getScrollY":206,"./utils/getBoundingClientRect":209}],208:[function(b,d,a){var g=b("./getPixelsInViewport");
var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":202,"./getPixelsInViewport":203}],209:[function(b,c,a){arguments[4][39][0].apply(a,arguments)
},{dup:39}],210:[function(b,c,a){arguments[4][40][0].apply(a,arguments)},{"./getStyleProperty":211,"./getStyleValue":212,"./shared/stylePropertyCache":215,dup:40}],211:[function(b,c,a){arguments[4][41][0].apply(a,arguments)
},{"./shared/getStyleTestElement":213,"./shared/prefixHelper":214,"./shared/stylePropertyCache":215,"./utils/toCSS":218,"./utils/toDOM":219,dup:41}],212:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{"./getStyleProperty":211,"./shared/prefixHelper":214,"./shared/stylePropertyCache":215,"./shared/styleValueAvailable":216,dup:42}],213:[function(b,c,a){arguments[4][43][0].apply(a,arguments)
},{dup:43}],214:[function(b,c,a){arguments[4][4][0].apply(a,arguments)},{dup:4}],215:[function(b,c,a){arguments[4][45][0].apply(a,arguments)
},{dup:45}],216:[function(b,c,a){arguments[4][46][0].apply(a,arguments)},{"./getStyleTestElement":213,"./stylePropertyCache":215,dup:46}],217:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],218:[function(b,c,a){arguments[4][48][0].apply(a,arguments)},{dup:48}],219:[function(b,c,a){arguments[4][49][0].apply(a,arguments)
},{dup:49}],220:[function(b,c,a){c.exports={getStyle:b("./getStyle"),setStyle:b("./setStyle")}
},{"./getStyle":221,"./setStyle":223}],221:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":211,"@marcom/ac-prefixer/stripPrefixes":217,dup:50}],222:[function(b,c,a){arguments[4][51][0].apply(a,arguments)
},{dup:51}],223:[function(b,c,a){arguments[4][52][0].apply(a,arguments)},{"./internal/normalizeValue":222,"@marcom/ac-prefixer/getStyleCSS":210,"@marcom/ac-prefixer/getStyleProperty":211,dup:52}],224:[function(b,c,a){c.exports=8
},{}],225:[function(b,c,a){c.exports=11},{}],226:[function(b,c,a){c.exports=9},{}],227:[function(b,c,a){arguments[4][124][0].apply(a,arguments)
},{dup:124}],228:[function(b,c,a){c.exports=3},{}],229:[function(b,c,a){arguments[4][125][0].apply(a,arguments)
},{"../isNode":233,dup:125}],230:[function(g,d,j){var b=g("./isNodeType");var c=g("../COMMENT_NODE");
var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");var h=g("../TEXT_NODE");
var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":224,"../DOCUMENT_FRAGMENT_NODE":225,"../ELEMENT_NODE":227,"../TEXT_NODE":228,"./isNodeType":229}],231:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":225,"./internal/isNodeType":229}],232:[function(b,c,a){arguments[4][126][0].apply(a,arguments)
},{"./ELEMENT_NODE":227,"./internal/isNodeType":229,dup:126}],233:[function(b,c,a){arguments[4][127][0].apply(a,arguments)
},{dup:127}],234:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":230}],235:[function(c,d,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(m,j,i,l){var k=[];
h.childNode(m,true,"ancestors");h.selector(j,false,"ancestors");if(i&&g(m)&&(!j||a(m,j))){k.push(m)
}l=l||document.body;if(m!==l){while((m=m.parentNode)&&g(m)){if(!j||a(m,j)){k.push(m)
}if(m===l){break}}}return k}},{"./internal/validate":237,"./matchesSelector":238,"@marcom/ac-dom-nodes/isElement":232}],236:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],237:[function(g,c,i){g("@marcom/ac-polyfills/Array/prototype.indexOf");
var o=g("@marcom/ac-dom-nodes/isNode");var b=g("@marcom/ac-dom-nodes/COMMENT_NODE");
var k=g("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var j=g("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var h=g("@marcom/ac-dom-nodes/ELEMENT_NODE");var f=g("@marcom/ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":224,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":225,"@marcom/ac-dom-nodes/DOCUMENT_NODE":226,"@marcom/ac-dom-nodes/ELEMENT_NODE":227,"@marcom/ac-dom-nodes/TEXT_NODE":228,"@marcom/ac-dom-nodes/isNode":233,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined}],238:[function(d,f,c){var g=d("@marcom/ac-dom-nodes/isElement");
var i=d("./internal/validate");var a=d("./internal/nativeMatches");var h=d("./shims/matchesSelector");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":236,"./internal/validate":237,"./shims/matchesSelector":241,"@marcom/ac-dom-nodes/isElement":232}],239:[function(c,d,a){var h=c("./internal/validate");
var b=c("./shims/querySelector");var g=("querySelector" in document);d.exports=function f(i,j){j=j||document;
h.parentNode(j,true,"querySelector","context");h.selector(i,true,"querySelector");
if(!g){return b(i,j)}return j.querySelector(i)}},{"./internal/validate":237,"./shims/querySelector":242}],240:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");
var h=b("./internal/validate");var g=b("./shims/querySelectorAll");var f=("querySelectorAll" in document);
c.exports=function d(i,j){j=j||document;h.parentNode(j,true,"querySelectorAll","context");
h.selector(i,true,"querySelectorAll");if(!f){return g(i,j)}return Array.prototype.slice.call(j.querySelectorAll(i))
}},{"./internal/validate":237,"./shims/querySelectorAll":243,"@marcom/ac-polyfills/Array/prototype.slice":undefined}],241:[function(c,d,b){var f=c("../querySelectorAll");
d.exports=function a(l,g){var k=l.parentNode||document;var h=f(g,k);var j;for(j=0;
j<h.length;j++){if(h[j]===l){return true}}return false}},{"../querySelectorAll":240}],242:[function(b,c,a){var d=b("./querySelectorAll");
c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":243}],243:[function(c,b,f){c("@marcom/ac-polyfills/Array/prototype.indexOf");
var j=c("@marcom/ac-dom-nodes/isElement");var h=c("@marcom/ac-dom-nodes/isDocumentFragment");
var k=c("@marcom/ac-dom-nodes/remove");var d="_ac_qsa_";var i=function(n,l){var m;
if(l===document){return true}m=n;while((m=m.parentNode)&&j(m)){if(m===l){return true
}}return false};var g=function(l){if("recalc" in l){l.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};b.exports=function a(l,n){var p=document.createElement("style");
var q=d+(Math.random()+"").slice(-6);var m=[];var o;n=n||document;document[q]=[];
if(h(n)){n.appendChild(p)}else{document.documentElement.firstChild.appendChild(p)
}p.styleSheet.cssText="*{display:recalc;}"+l+'{ac-qsa:expression(document["'+q+'"] && document["'+q+'"].push(this));}';
g(n);while(document[q].length){o=document[q].shift();o.style.removeAttribute("ac-qsa");
if(m.indexOf(o)===-1&&i(o,n)){m.push(o)}}document[q]=null;k(p);g(n);return m}},{"@marcom/ac-dom-nodes/isDocumentFragment":231,"@marcom/ac-dom-nodes/isElement":232,"@marcom/ac-dom-nodes/remove":234,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined}],244:[function(b,c,a){c.exports=function d(f,h){var g=null;
return function(){if(g===null){f.apply(this,arguments);g=setTimeout(function(){g=null
},h)}}}},{}],245:[function(b,c,a){arguments[4][63][0].apply(a,arguments)},{dup:63}],246:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{"./internal/expose":245,dup:64}],247:[function(b,c,a){arguments[4][65][0].apply(a,arguments)
},{"./extend":249,"@marcom/ac-console/log":246,"@marcom/ac-polyfills/Array/isArray":undefined,dup:65}],248:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"@marcom/ac-console/log":246,dup:66}],249:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"@marcom/ac-console/log":246,"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:67}],250:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{"./ac-page-visibility/PageVisibilityManager":251,dup:68}],251:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"@marcom/ac-event-emitter-micro":139,"@marcom/ac-object/create":248,dup:69}],252:[function(b,c,a){arguments[4][70][0].apply(a,arguments)
},{dup:70}],253:[function(b,c,a){arguments[4][71][0].apply(a,arguments)},{dup:71}],254:[function(b,c,a){arguments[4][72][0].apply(a,arguments)
},{dup:72}],255:[function(b,c,a){arguments[4][73][0].apply(a,arguments)},{dup:73}],256:[function(b,c,a){arguments[4][74][0].apply(a,arguments)
},{dup:74}],257:[function(b,c,a){arguments[4][75][0].apply(a,arguments)},{dup:75}],258:[function(b,c,a){arguments[4][76][0].apply(a,arguments)
},{dup:76}],259:[function(b,c,a){arguments[4][77][0].apply(a,arguments)},{dup:77}],260:[function(b,c,a){arguments[4][78][0].apply(a,arguments)
},{dup:78}],261:[function(b,c,a){arguments[4][79][0].apply(a,arguments)},{dup:79}],262:[function(b,c,a){arguments[4][80][0].apply(a,arguments)
},{dup:80}],263:[function(b,c,a){arguments[4][81][0].apply(a,arguments)},{dup:81}],264:[function(b,c,a){arguments[4][82][0].apply(a,arguments)
},{dup:82}],265:[function(b,c,a){arguments[4][83][0].apply(a,arguments)},{dup:83}],266:[function(b,c,a){arguments[4][84][0].apply(a,arguments)
},{dup:84}],267:[function(b,c,a){arguments[4][85][0].apply(a,arguments)},{dup:85}],268:[function(b,c,a){arguments[4][86][0].apply(a,arguments)
},{dup:86}],269:[function(b,c,a){arguments[4][87][0].apply(a,arguments)},{dup:87}],270:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{dup:88}],271:[function(b,c,a){arguments[4][89][0].apply(a,arguments)},{dup:89}],272:[function(b,c,a){arguments[4][90][0].apply(a,arguments)
},{dup:90}],273:[function(b,c,a){arguments[4][91][0].apply(a,arguments)},{dup:91}],274:[function(b,c,a){arguments[4][92][0].apply(a,arguments)
},{"./ac-transform/Transform":275,dup:92}],275:[function(b,c,a){arguments[4][93][0].apply(a,arguments)
},{"./gl-matrix/mat4":276,"./gl-matrix/vec3":277,"./gl-matrix/vec4":278,dup:93}],276:[function(b,c,a){arguments[4][94][0].apply(a,arguments)
},{dup:94,"gl-mat4/clone":252,"gl-mat4/create":253,"gl-mat4/fromRotationTranslation":254,"gl-mat4/identity":255,"gl-mat4/invert":256,"gl-mat4/multiply":257,"gl-mat4/rotate":258,"gl-mat4/rotateX":259,"gl-mat4/rotateY":260,"gl-mat4/rotateZ":261,"gl-mat4/scale":262,"gl-mat4/translate":263,"gl-mat4/transpose":264}],277:[function(b,c,a){arguments[4][95][0].apply(a,arguments)
},{dup:95,"gl-vec3/create":265,"gl-vec3/cross":266,"gl-vec3/dot":267,"gl-vec3/fromValues":268,"gl-vec3/length":269,"gl-vec3/normalize":270}],278:[function(b,c,a){arguments[4][96][0].apply(a,arguments)
},{dup:96,"gl-vec4/create":271,"gl-vec4/fromValues":272,"gl-vec4/transformMat4":273}],279:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
var a=d("@marcom/ac-feature/cssPropertyAvailable");f.exports=function g(i,l,k,j,h){if(a("opacity")){h=h||{};
if(j){h.autoplay=(h.autoplay===false)?h.autoplay:true;h.propsFrom=h.propsFrom||{};
h.propsFrom.opacity=l;if(h.autoplay){return c.to(i,j,{opacity:k},h)}return new c(i,j,{opacity:k},h)
}i.style.opacity=k;if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}else{i.style.visibility=(k)?"visible":"hidden";if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}},{"@marcom/ac-eclipse":99,"@marcom/ac-feature/cssPropertyAvailable":160}],280:[function(f,g,c){var d=f("@marcom/ac-eclipse").Clip;
var b=f("@marcom/ac-feature/cssPropertyAvailable");g.exports=function a(i,j,h){var k=1;
h=h||{};if(b("opacity")){if(j){h.autoplay=(h.autoplay===false)?h.autoplay:true;
if(h.autoplay){return d.to(i,j,{opacity:k},h)}return new d(i,j,{opacity:k},h)}i.style.opacity=k;
if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}else{i.style.visibility="visible";if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}},{"@marcom/ac-eclipse":99,"@marcom/ac-feature/cssPropertyAvailable":160}],281:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
var a=d("@marcom/ac-feature/cssPropertyAvailable");f.exports=function g(i,j,h){var k=0;
h=h||{};if(a("opacity")){if(j){h.autoplay=(h.autoplay===false)?h.autoplay:true;
if(h.autoplay){return c.to(i,j,{opacity:k},h)}return new c(i,j,{opacity:k},h)}i.style.opacity=k;
if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}else{i.style.visibility="hidden";if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}},{"@marcom/ac-eclipse":99,"@marcom/ac-feature/cssPropertyAvailable":160}],282:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
var g=d("@marcom/ac-dom-styles");f.exports=function a(k,h,o,l,j){j=j||{};j.autoplay=(j.autoplay===false)?j.autoplay:true;
var i=j.onStart||null;var n=j.onComplete||null;var m;m={transform:{translateX:h+"px",translateY:o+"px"}};
if(l){j.onStart=function(){k.style.willChange="transform";if(i!==null){i.call(this)
}};j.onComplete=function(){k.style.willChange="";if(n!==null){n.call(this)}};if(j.autoplay){return c.to(k,l,m,j)
}return new c(k,l,m,j)}g.setStyle(k,m);if(typeof j.onStart==="function"){j.onStart()
}if(typeof j.onComplete==="function"){j.onComplete()}}},{"@marcom/ac-dom-styles":220,"@marcom/ac-eclipse":99}],283:[function(f,g,b){var d=f("@marcom/ac-browser-prefixed");
var c=f("@marcom/ac-transform").Transform;var a=f("./move");g.exports=function h(l,i,m,k){var j=new c();
j.setMatrixValue(getComputedStyle(l)[d.transform]);return a(l,i,j.getTranslateY(),m,k)
}},{"./move":282,"@marcom/ac-browser-prefixed":1,"@marcom/ac-transform":274}],284:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
f.exports=function a(g,o,k,i,r){r=r||{};r.autoplay=(r.autoplay===false)?r.autoplay:true;
var h=g===window;var q;var n;if(h){q=g.pageXOffset;n=g.pageYOffset}else{q=g.scrollLeft;
n=g.scrollTop}var m={x:q,y:n};var p={x:o,y:k};if(typeof r.onDraw==="function"){var l=r.onDraw
}var j=function(s){if(h){g.scrollTo(m.x,m.y)}else{g.scrollLeft=m.x;g.scrollTop=m.y
}if(l){l.call(this,s)}};r.onDraw=j;if(r.autoplay){return c.to(m,i,p,r)}return new c(m,i,p,r)
}},{"@marcom/ac-eclipse":99}],285:[function(c,d,b){var a=c("./scroll");d.exports=function f(k,g,l,j){var i=k===window;
var h;if(i){h=k.pageYOffset}else{h=k.scrollTop}return a(k,g,h,l,j)}},{"./scroll":284}],286:[function(b,a,f){var d=b("@marcom/ac-classlist");
var j=b("./singletons/analyticsManager");var h=b("@marcom/ac-object/create");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var c=b("./Item");function i(m){m=m||{};this._wrapAround=m.wrapAround||false;this._itemType=m.itemType||c;
this._items=[];this._itemsIdLookup={};this.showNext=this.showNext.bind(this);this.showPrevious=this.showPrevious.bind(this);
this._update=this._update.bind(this);this._updateItems=this._updateItems.bind(this);
l.call(this);if(m.startAt){this._startAt(m.startAt)}i._add(this,m.analyticsOptions)
}i.FADE="fade";i.FADE_SELECTOR="[data-ac-gallery-fade]";i.SLIDE="slide";i.SLIDE_SELECTOR="[data-ac-gallery-slide]";
i.UPDATE="update";i.UPDATE_COMPLETE="update:complete";var k=l.prototype;var g=i.prototype=h(k);
g.addItem=function(n,m){if(n.nodeType){n=new this._itemType(n)}else{if(this._items.indexOf(n)>-1){return n
}}if(typeof m==="number"){this._items.splice(m,0,n)}else{this._items.push(n)}if(this._items.length===1){n.show();
this._setCurrentItem(n)}else{n.hide();if(this.getNextItem()===n){this._setNextItem(n)
}if(this.getPreviousItem()===n){this._setPreviousItem(n)}}if(n.getElementId()!==null){this._itemsIdLookup[n.getElementId()]=n
}n.on(c.SELECTED,this._update);return n};g.removeItem=function(q,p){p=p||{};if(typeof q==="number"){q=this._items[q]
}var o=this._items.indexOf(q);if(o>-1){var m=this.getNextItem();var n=this.getPreviousItem();
this._items.splice(o,1);q.off(c.SELECTED,this._update);if(m===q){this._setNextItem(this.getNextItem())
}if(n===q){this._setPreviousItem(this.getPreviousItem())}}if(q===this._currentItem&&this._items.length&&p.setCurrentItem!==false){this._update({item:this._items[0]});
this._setLastItem(null)}if(p.destroyItem&&q.getElement()){q.destroy()}return q};
g.show=function(n,m){if(typeof n==="number"){n=this._items[n]}else{if(typeof n==="string"){n=this._itemsIdLookup[n]
}}if(n){m=m||{};this._update({item:n,interactionEvent:m.interactionEvent})}return n||null
};g.showNext=function(m){var n=this.getNextItem();if(n){this.show(n,m)}return n
};g.showPrevious=function(m){var n=this.getPreviousItem();if(n){this.show(n,m)}return n
};g.isInView=function(){return this._currentItem&&this._currentItem.isInView()};
g.getTotalItems=function(){return this._items.length};g.getItems=function(){return this._items
};g.getItem=function(m){if(typeof m==="number"){return this.getItemAt(m)}else{if(typeof m==="string"){return this.getItemById(m)
}}};g.getItemAt=function(m){return this._items[m]||null};g.getItemById=function(m){return this._itemsIdLookup[m]||null
};g.getItemIndex=function(m){return this._items.indexOf(m)};g.getCurrentItem=function(){return this._currentItem||null
};g.getLastItem=function(){return this._lastItem||null};g.getNextItem=function(){var n;
var m=this._items.indexOf(this._currentItem);if(m<this._items.length-1){n=this._items[m+1]
}else{if(this._wrapAround){n=this._items[0]}}return n||null};g.getPreviousItem=function(){var n;
var m=this._items.indexOf(this._currentItem);if(m>0){n=this._items[m-1]}else{if(this._wrapAround){n=this._items[this._items.length-1]
}}return n||null};g.getId=function(){return this._id};g.destroy=function(m){m=m||{};
if(m.destroyItems===undefined){m.destroyItems=true}this._setCurrentItem(null);if(m.destroyItems){var n;
while(this._items.length){n=this._items[0];n.off(c.SELECTED,this._update);this.removeItem(n,{destroyItem:true,setCurrentItem:false})
}}this._items=null;this._itemsIdLookup=null;i._remove(this);return k.destroy.call(this)
};g._startAt=function(m){var n=this._items[m];if(n&&(this._currentItem!==n)){this._currentItem.hide();
this._setCurrentItem(n);this._currentItem.show();this.trigger(i.UPDATE,this._items)
}};g._setCurrentItem=function(m){if(this._currentItem&&this._currentItem.getElement()&&this._currentItem!==m){d.remove(this._currentItem.getElement(),c.CSS_CURRENT_ITEM);
this._setLastItem(this._currentItem)}this._currentItem=m;if(this._currentItem&&this._currentItem.getElement()){d.add(this._currentItem.getElement(),c.CSS_CURRENT_ITEM);
this._setNextItem(this.getNextItem());this._setPreviousItem(this.getPreviousItem())
}};g._setLastItem=function(m){if(this._lastItem&&this._lastItem.getElement()&&this._lastItem!==m){d.remove(this._lastItem.getElement(),c.CSS_LAST_ITEM)
}this._lastItem=m;if(this._lastItem&&this._lastItem.getElement()){d.add(this._lastItem.getElement(),c.CSS_LAST_ITEM)
}};g._setNextItem=function(m){if(this._nextItem&&this._nextItem.getElement()&&this._nextItem!==m){d.remove(this._nextItem.getElement(),c.CSS_NEXT_ITEM)
}this._nextItem=m;if(this._nextItem&&this._nextItem.getElement()){d.add(this._nextItem.getElement(),c.CSS_NEXT_ITEM)
}};g._setPreviousItem=function(m){if(this._previousItem&&this._previousItem.getElement()&&this._previousItem!==m){d.remove(this._previousItem.getElement(),c.CSS_PREVIOUS_ITEM)
}this._previousItem=m;if(this._previousItem&&this._previousItem.getElement()){d.add(this._previousItem.getElement(),c.CSS_PREVIOUS_ITEM)
}};g._updateItems=function(n,m){if(n.outgoing[0]){n.outgoing[0].hide()}n.incoming[0].show();
if(!m){this.trigger(i.UPDATE_COMPLETE,n)}};g._update=function(m){var o=this._currentItem!==m.item;
if(o){this._setCurrentItem(m.item)}var n={incoming:[m.item],outgoing:(this._lastItem)?[this._lastItem]:[],interactionEvent:m.interactionEvent||null};
if(o){this.trigger(i.UPDATE,n)}this._updateItems(n,!o)};i._instantiate=function(){this._galleries=[];
this._idCounter=0;return this};i._add=function(n,m){this._galleries.push(n);n._id=++this._idCounter;
j.add(n,m)};i._remove=function(m){var n=this._galleries.indexOf(m);if(n>-1){this._galleries.splice(n,1);
j.remove(m)}};i.getAll=function(){return Array.prototype.slice.call(this._galleries)
};i.getAllInView=function(){var n=[];var m=this._galleries.length;while(m--){if(this._galleries[m].isInView()){n.push(this._galleries[m])
}}return n};i.destroyAll=function(){var m=this._galleries.length;while(m--){this._galleries[m].destroy()
}this._galleries=[]};a.exports=i._instantiate()},{"./Item":287,"./singletons/analyticsManager":301,"@marcom/ac-classlist":185,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-object/create":248}],287:[function(m,b,s){var c=m("@marcom/ac-classlist");
var i=m("@marcom/ac-dom-events/addEventListener");var k=m("@marcom/ac-dom-events/removeEventListener");
var l=m("@marcom/ac-dom-events/preventDefault");var h=m("@marcom/ac-dom-metrics/isInViewport");
var a=m("@marcom/ac-dom-metrics/getPercentInViewport");var r=m("@marcom/ac-dom-traversal/querySelectorAll");
var n=m("@marcom/ac-object/create");var g=m("./singletons/tabManager");var q=m("@marcom/ac-keyboard/keyMap");
var o=m("@marcom/ac-event-emitter-micro").EventEmitterMicro;var f=m("@marcom/ac-keyboard");
var j="current";function d(u,t){this._el=u;t=t||{};this._triggerKeys=[];this._triggerEls={};
this._isShown=false;this._isACaption=(t.isACaption===undefined)?false:t.isACaption;
this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);this._onTriggered=this._onTriggered.bind(this);
if(!this._isACaption){this._el.setAttribute("role","tabpanel")}this._focusableEls=r(g.focusableSelectors,u);
o.call(this)}d.CSS_CURRENT_ITEM="ac-gallery-currentitem";d.CSS_LAST_ITEM="ac-gallery-lastitem";
d.CSS_NEXT_ITEM="ac-gallery-nextitem";d.CSS_PREVIOUS_ITEM="ac-gallery-previousitem";
d.SELECTED="selected";d.SHOW="show";d.HIDE="hide";var p=d.prototype=n(o.prototype);
p.show=function(){this._isShown=true;this._addCurrentClassToTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this.trigger(d.SHOW,this)};p.hide=function(){this._isShown=false;
this._removeCurrentClassFromTriggers();this._setTabIndexOnFocusableItems("-1");
this._el.setAttribute("aria-hidden","true");this.trigger(d.HIDE,this)};p.addElementTrigger=function(v,u){u=u||"click";
if(this._triggerEls[u]===undefined){this._triggerEls[u]=[]}var t=this._triggerEls[u].indexOf(v);
if(t<0){v.setAttribute("role","tab");v.setAttribute("tabindex","0");var w=this.getElementId();
if(w){v.setAttribute("aria-controls",w)}w=v.getAttribute("id");if(w&&this._el.getAttribute("aria-labelledby")===null){this._el.setAttribute("aria-labelledby",w)
}i(v,u,this._onTriggered);this._triggerEls[u].push(v);if(this._isShown){v.setAttribute("aria-selected","true");
c.add(v,j)}else{v.setAttribute("aria-selected","false")}}};p.removeElementTrigger=function(v,u){u=u||"click";
if(this._triggerEls[u]===undefined){return}var t=this._triggerEls[u].indexOf(v);
if(t>-1){this._cleanElementTrigger(v,u)}if(this._triggerEls[u].length===0){this._triggerEls[u]=undefined
}};p.addKeyTrigger=function(u){if(typeof u==="string"){u=q[u.toUpperCase()]}if(typeof u==="number"){var t=this._triggerKeys.indexOf(u);
if(t<0){f.onDown(u,this._onKeyboardInteraction);this._triggerKeys.push(u)}}};p.removeKeyTrigger=function(u){if(typeof u==="string"){u=q[u.toUpperCase()]
}if(typeof u==="number"){var t=this._triggerKeys.indexOf(u);if(t>-1){f.offDown(u,this._onKeyboardInteraction);
this._triggerKeys.splice(t,1)}}};p.removeAllTriggers=function(){var u;var t=this._triggerKeys.length;
while(t--){u=this._triggerKeys[t];f.offDown(u,this._onKeyboardInteraction)}this._triggerKeys=[];
var w;var v;for(v in this._triggerEls){t=this._triggerEls[v].length;while(t--){w=this._triggerEls[v][t];
this._cleanElementTrigger(w,v)}}this._triggerEls={}};p.isInView=function(){if(this._el){return h(this._el)
}return false};p.percentageInView=function(){if(this._el){return a(this._el)}return 0
};p.getElement=function(){return this._el};p.getElementId=function(){if(this._elId!==undefined){return this._elId
}this._elId=this._el.getAttribute("id")||null;return this._elId};p.destroy=function(){if(this._isShown){this._isShown=null;
c.remove(this._el,d.CSS_CURRENT_ITEM,d.CSS_LAST_ITEM,d.CSS_NEXT_ITEM,d.CSS_PREVIOUS_ITEM);
this._removeCurrentClassFromTriggers()}this.removeAllTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this._el.removeAttribute("role");this._el.removeAttribute("aria-labelledby");
this._isACaption=null;this._triggerKeys=null;this._triggerEls=null;this._el=null
};p._addCurrentClassToTriggers=function(){var v;var u;var t;for(u in this._triggerEls){t=this._triggerEls[u].length;
while(t--){v=this._triggerEls[u][t];v.setAttribute("aria-selected","true");c.add(v,j)
}}};p._removeCurrentClassFromTriggers=function(){var v;var u;var t;for(u in this._triggerEls){t=this._triggerEls[u].length;
while(t--){v=this._triggerEls[u][t];v.setAttribute("aria-selected","false");c.remove(v,j)
}}};p._cleanElementTrigger=function(u,t){u.removeAttribute("aria-selected");u.removeAttribute("role");
u.removeAttribute("tabindex");u.removeAttribute("aria-controls");k(u,t,this._onTriggered);
if(this._isShown){c.remove(u,j)}};p._onKeyboardInteraction=function(t){if(this.isInView()){this._onTriggered(t)
}};p._setTabIndexOnFocusableItems=function(u){var t=u===null;var w=[];this._currentTabbableEls=this._currentTabbableEls||g.getTabbable(this._focusableEls);
if(!t){w=g.getTabbable(this._focusableEls);this._currentTabbableEls=w}var v=this._currentTabbableEls.length;
while(v--){if(t){this._currentTabbableEls[v].removeAttribute("tabindex")}else{this._currentTabbableEls[v].setAttribute("tabindex",u)
}}};p._onTriggered=function(t){l(t);this.trigger(d.SELECTED,{item:this,interactionEvent:t})
};b.exports=d},{"./singletons/tabManager":302,"@marcom/ac-classlist":185,"@marcom/ac-dom-events/addEventListener":188,"@marcom/ac-dom-events/preventDefault":194,"@marcom/ac-dom-events/removeEventListener":195,"@marcom/ac-dom-metrics/getPercentInViewport":202,"@marcom/ac-dom-metrics/isInViewport":208,"@marcom/ac-dom-traversal/querySelectorAll":240,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-keyboard":315,"@marcom/ac-keyboard/keyMap":317,"@marcom/ac-object/create":248}],288:[function(d,a,g){var h=d("./helpers/extendProto");
var j=d("./Gallery");var b=d("./auto/AutoGallery");var i=d("./fade/FadeGallery");
var l=d("./fade/FadeItem");var c=d("./slide/SlideGallery");var k=d("./slide/SlideItem");
var f=d("./Item");j.create=d("./factories/create");j.autoCreate=d("./factories/autoCreate");
j.extend=h;b.extend=h;i.extend=h;l.extend=h;c.extend=h;k.extend=h;f.extend=h;a.exports={Gallery:j,AutoGallery:b,FadeGallery:i,FadeGalleryItem:l,SlideGallery:c,SlideGalleryItem:k,Item:f,ToggleNav:d("./navigation/ToggleNav")}
},{"./Gallery":286,"./Item":287,"./auto/AutoGallery":290,"./factories/autoCreate":291,"./factories/create":292,"./fade/FadeGallery":293,"./fade/FadeItem":294,"./helpers/extendProto":295,"./navigation/ToggleNav":300,"./slide/SlideGallery":303,"./slide/SlideItem":304}],289:[function(b,d,a){var i;
try{i=b("ac-analytics").observer.Gallery}catch(h){}var g="data-analytics-gallery-id";
function c(){this._observers={}}var f=c.prototype;f.add=function(j,l){var m=j.getId();
if(!i||this._observers[m]){return}l=l||{};if(!l.galleryName){l.galleryName=this._getAnalyticsId(j,l.dataAttribute)||m
}if(!l.beforeUpdateEvent){l.beforeUpdateEvent="update"}if(!l.afterUpdateEvent){l.afterUpdateEvent="update:complete"
}var k=new i(j,l);if(k.gallery){this._observers[m]=k}};f.remove=function(j){var k=j.getId();
if(!i||!this._observers[k]){return}if(typeof this._observers[k].destroy==="function"){this._observers[k].destroy()
}this._observers[k]=null};f._getAnalyticsId=function(j,k){if(typeof j.getElement==="function"){k=k||g;
var l=j.getElement();return l.getAttribute(k)||l.getAttribute("id")}return null
};d.exports=c},{"ac-analytics":undefined}],290:[function(o,b,H){o("@marcom/ac-polyfills/requestAnimationFrame");
var c=o("@marcom/ac-classlist");var j=o("@marcom/ac-dom-events/addEventListener");
var m=o("@marcom/ac-dom-events/removeEventListener");var n=o("@marcom/ac-dom-events/preventDefault");
var v=o("@marcom/ac-dom-styles");var g=o("@marcom/ac-dom-traversal/querySelector");
var E=o("@marcom/ac-dom-traversal/querySelectorAll");var q=o("@marcom/ac-object/create");
var F=o("@marcom/ac-dom-metrics/getContentDimensions");var w=o("@marcom/ac-keyboard/keyMap");
var D=o("./../helpers/selectElementFromDataAttributeValue");var p=o("./../helpers/selectElementThatHasDataAttribute");
var l=o("./../helpers/inputHasFocus");var i=o("@marcom/ac-function/throttle");var k=o("@marcom/ac-feature/touchAvailable");
var s=o("./../Gallery");var d=o("@marcom/ac-keyboard");var y=o("@marcom/ac-page-visibility").PageVisibilityManager;
var h=o("@marcom/ac-pointer-tracker").PointerTracker;var u=o("./../navigation/ToggleNav");
var A="disabled";var z=3;var f=0.5;var x="[data-ac-gallery-item]";var C=0.12;var B=o("../templates/paddlenav.js");
var G="No element supplied.";var I='Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.';
function r(M,L){L=L||{};if(!M||M.nodeType===undefined){throw new Error(G)}this._el=M;
s.call(this,L);this._itemHeights=[];this._itemHeightsLookup={};this._toggleNavDuration=L.toggleNavDuration;
this._isRightToLeft=(L.rightToLeft===undefined)?v.getStyle(M,"direction").direction==="rtl":L.rightToLeft;
this._keyboardThrottleDelay=((L.keyboardThrottleDelay===undefined)?C:L.keyboardThrottleDelay)*1000;
this._resizeContainer=!!L.resizeContainer;this._setUpContainerAutoResize(L.resizeContainerOnUpdate);
this._createToggleNav();this._addPaddleNav(L.addPaddleNav);this._isACaptionsGallery=M.getAttribute("data-ac-gallery-captions")==="";
this._addItems(L.itemSelector||x);if(!this._wrapAround){this._updatePaddleNavState()
}if(L.enableArrowKeys!==false){this._enableArrowKeys=true;this._addKeyboardListener()
}if(L.updateOnWindowResize!==false){this._onWindowResize=this._onWindowResize.bind(this);
j(window,"resize",this._onWindowResize)}this._componentsContainer=document.getElementById(L.container);
if(L.startAt){this._startAt(L.startAt)}this.stopAutoPlay=this.stopAutoPlay.bind(this);
if(L.autoPlay){if(!this._componentsContainer){throw new Error(I)}var K=(typeof L.autoPlay==="number")?L.autoPlay:z;
this.startAutoPlay(K)}if(L.deeplink!==false){var N=this._getDeeplinkedItem();if(N&&N!==this._currentItem){this.show(N)
}}if(this._containerResizeDuration!==false){var J=this._itemHeightsLookup[this._currentItem.getElementId()];
if(J){this._setElHeight(J)}}if(this._toggleNav){this._toggleNav.start()}this._setUpSwiping(L.touch&&k(),L.desktopSwipe);
if(this._componentsContainer){this._componentsContainer.setAttribute("tabIndex",-1)
}}r.RESIZED="resized";r.UPDATE=s.UPDATE;r.UPDATE_COMPLETE=s.UPDATE_COMPLETE;var a=s.prototype;
var t=r.prototype=q(a);t.addItem=function(L,J){if(L.nodeType){var K=this._isACaptionsGallery;
L=new this._itemType(L,{isACaption:K})}else{if(this._items.indexOf(L)>-1){return L
}}if(this._resizeContainer){this._storeItemHeight(L,this._containerResizeDuration===false)
}this._addItemTriggers(L);return a.addItem.call(this,L,J)};t.removeItem=function(L,K){if(this._resizeContainer){var J=this._itemHeights.length;
while(J--){if(this._itemHeights[J].item===L){this._itemHeights.splice(J,1);if(J===0&&this._itemHeights.length){this._setElHeight(this._itemHeights[0].height)
}}}}return a.removeItem.call(this,L,K)};t.startAutoPlay=function(K,J){J=J||{};this._isAutoPlaying=true;
this._autoPlayDelay=(K||z)*1000;this._cancelAutoPlayOnInteraction=(J.cancelOnInteraction===undefined)?true:J.cancelOnInteraction;
setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);if(this._cancelAutoPlayOnInteraction){this.on(s.UPDATE,this.stopAutoPlay)
}if(this._componentsContainer){j(this._componentsContainer,"focus",this.stopAutoPlay,true);
j(this._componentsContainer,"touchend",this.stopAutoPlay,true);j(this._componentsContainer,"click",this.stopAutoPlay,true)
}else{throw new Error(I)}};t.stopAutoPlay=function(){this._isAutoPlaying=false;
if(this._cancelAutoPlayOnInteraction){this.off(s.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){m(this._componentsContainer,"focus",this.stopAutoPlay,true);
m(this._componentsContainer,"touchend",this.stopAutoPlay,true);m(this._componentsContainer,"click",this.stopAutoPlay,true)
}};t.getElement=function(){return this._el};t.getToggleNav=function(){return this._toggleNav||null
};t.resize=function(K,J){if(this._resizeContainer){this._itemHeights=[];var L=this._items.length;
while(L--){this._storeItemHeight(this._items[L],false)}if(this._containerResizeDuration!==false){this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()])
}else{this._setElHeight(this._itemHeights[0].height)}}if(this._toggleNav){this._toggleNav.resize()
}this.trigger(r.RESIZED,this)};t.enableKeyboard=function(){if(!this._enableArrowKeys){this._enableArrowKeys=true;
this._addKeyboardListener()}};t.disableKeyboard=function(){if(this._enableArrowKeys){this._enableArrowKeys=false;
d.offDown(w.ARROW_RIGHT,this._rightArrowFunc);d.offDown(w.ARROW_LEFT,this._leftArrowFunc)
}};t.enableTouch=function(){if(!this._touchSwipe){this._setUpSwiping(true,false)
}};t.disableTouch=function(){if(this._touchSwipe){this._touchSwipe.off(h.END,this._onSwipeEnd);
this._touchSwipe.destroy();this._touchSwipe=null}};t.enableDesktopSwipe=function(){if(!this._clickSwipe){this._setUpSwiping(false,true)
}};t.disableDesktopSwipe=function(){if(this._clickSwipe){this._clickSwipe.off(h.END,this._onSwipeEnd);
this._clickSwipe.destroy();this._clickSwipe=null}};t.destroy=function(K){if(this._isAutoPlaying){this.stopAutoPlay()
}if(this._componentsContainer){m(this._componentsContainer,"focus",this.stopAutoPlay,true);
m(this._componentsContainer,"touchend",this.stopAutoPlay,true);m(this._componentsContainer,"click",this.stopAutoPlay,true)
}if(this._resizeContainer){v.setStyle(this._el,{height:null,transition:null})}if(this._enableArrowKeys){d.offDown(w.ARROW_RIGHT,this._rightArrowFunc);
d.offDown(w.ARROW_LEFT,this._leftArrowFunc)}var J;if(this._previousButtons){J=this._previousButtons.length;
while(J--){m(this._previousButtons[J],"click",this._onPaddlePrevious)}this._setPaddleDisabledState(this._previousButtons,false)
}if(this._nextButtons){J=this._nextButtons.length;while(J--){m(this._nextButtons[J],"click",this._onPaddleNext)
}this._setPaddleDisabledState(this._nextButtons,false)}if(this._dynamicPaddleNav){this._el.removeChild(this._dynamicPaddleNav)
}if(this._hasPaddleNavStateHandler){this.off(s.UPDATE,this._updatePaddleNavState)
}this.disableTouch();this.disableDesktopSwipe();if(this._toggleNav){this._toggleNav.destroy();
this._toggleNav=null}m(window,"resize",this._onWindowResize);this._el=null;this._itemHeights=null;
this._itemHeightsLookup=null;this._resizeContainer=null;this._isRightToLeft=null;
this._enableArrowKeys=null;this._previousButtons=null;this._onPaddlePrevious=null;
this._nextButtons=null;this._onPaddleNext=null;this._isACaptionsGallery=null;this._componentsContainer=null;
return a.destroy.call(this,K)};t._getDeeplinkedItem=function(){var L=window.location.hash.substr(1);
var K;var J=this._items.length;while(J--){K=this._items[J];if(L===K.getElementId()){return K
}}return null};t._addItems=function(K){var P;var J;var N=/(^\[).*(\]$)/.test(K);
if(N){K=K.replace(/\[|\]/g,"");J=p(K,this._el)}else{J=E(K,this._el)}var L=0;var O=J.length;
var M=this._isACaptionsGallery;for(L;L<O;L++){P=new this._itemType(J[L],{isACaption:M});
this.addItem(P);this._addItemTriggers(P)}};t._createToggleNav=function(){var L=this._getElementId();
var J='[data-ac-gallery-togglenav="'+L+'"], [data-ac-gallery-tabnav="'+L+'"]';var K=g(J);
if(K){this._toggleNav=new u(K,this,{duration:this._toggleNavDuration})}};t._addItemTriggers=function(N,J){var L=D("data-ac-gallery-trigger",N.getElementId());
if(J&&J.length){L=L.concat(J)}var K=0;var M=L.length;for(K;K<M;K++){N.addElementTrigger(L[K]);
if(this._toggleNav){this._toggleNav.addTrigger(L[K],N)}}};t._addPaddleNav=function(N){var L;
var P=this._getElementId();if(N){var M=(typeof N==="string")?N:B;M=M.replace(/%ID%/g,this._getElementId());
this._dynamicPaddleNav=document.createElement("div");this._dynamicPaddleNav.innerHTML=M;
this._el.insertBefore(this._dynamicPaddleNav,this._el.firstChild)}this._previousButtons=D("data-ac-gallery-previous-trigger",P);
this._nextButtons=D("data-ac-gallery-next-trigger",P);var J=this._el.getAttribute("aria-label")||"";
if(J.length){J="("+J+")"}this._onPaddlePrevious=this._onPaddleInteraction.bind(null,this.showPrevious);
L=this._previousButtons.length;if(L){var O=this._el.getAttribute("data-ac-gallery-previouslabel");
if(O&&J.length){if(this._isRightToLeft){O=J+" "+O}else{O+=" "+J}}while(L--){if(O&&this._previousButtons[L].getAttribute("aria-label")===null){this._previousButtons[L].setAttribute("aria-label",O)
}j(this._previousButtons[L],"click",this._onPaddlePrevious)}}this._onPaddleNext=this._onPaddleInteraction.bind(null,this.showNext);
L=this._nextButtons.length;if(L){var K=this._el.getAttribute("data-ac-gallery-nextlabel");
if(K&&J.length){if(this._isRightToLeft){K=J+" "+K}else{K+=" "+J}}while(L--){if(K&&this._nextButtons[L].getAttribute("aria-label")===null){this._nextButtons[L].setAttribute("aria-label",K)
}j(this._nextButtons[L],"click",this._onPaddleNext)}}if(this._nextButtons.length||this._previousButtons.length){this._hasPaddleNavStateHandler=true;
this._updatePaddleNavState=this._updatePaddleNavState.bind(this);this.on(s.UPDATE,this._updatePaddleNavState)
}};t._onPaddleInteraction=function(K,J){n(J);K.call(null,{interactionEvent:J})};
t._updatePaddleNavState=function(){if(!this._wrapAround){var J=this._items.indexOf(this._currentItem);
if(J===0&&this._previousButtons.length){this._setPaddleDisabledState(this._previousButtons,true);
this._setPaddleDisabledState(this._nextButtons,false)}else{if(J===this._items.length-1&&this._nextButtons.length){this._setPaddleDisabledState(this._nextButtons,true);
this._setPaddleDisabledState(this._previousButtons,false)}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}}}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}};t._setPaddleDisabledState=function(L,J){var K=L.length;
while(K--){L[K].disabled=J;if(J){c.add(L[K],A)}else{c.remove(L[K],A)}}};t._addKeyboardListener=function(){if(this._enableArrowKeys){this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
var J;var K;if(this._isRightToLeft){J=this.showPrevious;K=this.showNext}else{J=this.showNext;
K=this.showPrevious}this._rightArrowFunc=i(this._onKeyboardInteraction.bind(null,J),this._keyboardThrottleDelay);
this._leftArrowFunc=i(this._onKeyboardInteraction.bind(null,K),this._keyboardThrottleDelay);
d.onDown(w.ARROW_RIGHT,this._rightArrowFunc);d.onDown(w.ARROW_LEFT,this._leftArrowFunc)
}};t._onKeyboardInteraction=function(L,K){if(this.isInView()&&!l()){var J=s.getAllInView();
if(J.length>1){J.sort(function(N,M){N=(N._enableArrowKeys)?N.getCurrentItem().percentageInView():0;
M=(M._enableArrowKeys)?M.getCurrentItem().percentageInView():0;return M-N});if(this!==J[0]){return
}}L.call(null,{interactionEvent:K})}};t._setUpSwiping=function(K,J){this._onSwipeEnd=this._onSwipeEnd.bind(this);
if(K){this._touchSwipe=new h(this._el,h.TOUCH_EVENTS);this._touchSwipe.on(h.END,this._onSwipeEnd)
}if(J){this._clickSwipe=new h(this._el,h.MOUSE_EVENTS);this._clickSwipe.on(h.END,this._onSwipeEnd)
}};t._onSwipeEnd=function(K){var O;var J=K.interactionEvent;var M=J.type!=="touchend"||J.type!=="touchstart"||J.type!=="touchmove";
if(M){var N={type:"touchmove",target:J.target,srcElement:J.srcElement}}var L={interactionEvent:N||J};
if(K.swipe===h.SWIPE_RIGHT){O=(this._isRightToLeft)?this.showNext:this.showPrevious
}else{if(K.swipe===h.SWIPE_LEFT){O=(this._isRightToLeft)?this.showPrevious:this.showNext
}}if(O){return O.call(this,L)}J=null;return null};t._getElementId=function(){if(this._elementId===undefined){this._elementId=this._el.getAttribute("id")
}return this._elementId};t._setUpContainerAutoResize=function(J){if(typeof J==="number"){this._containerResizeDuration=J
}else{if(J){this._containerResizeDuration=f}else{this._containerResizeDuration=false
}}if(this._containerResizeDuration!==false){this._resizeContainer=true;this._updateContainerSize=this._updateContainerSize.bind(this);
this.on(s.UPDATE,this._updateContainerSize)}};t._updateContainerSize=function(K){var J=this._itemHeightsLookup[K.incoming[0].getElementId()];
if(J){this._setElHeight(J,this._containerResizeDuration)}};t._storeItemHeight=function(K,L){var J=F(K.getElement());
this._itemHeights.push({item:K,height:J.height});this._itemHeightsLookup[K.getElementId()]=J.height;
this._itemHeights.sort(function(N,M){return M.height-N.height});if(L&&this._itemHeights[0].item===K){this._setElHeight(J.height)
}};t._setElHeight=function(J,L){var K={height:J+"px"};if(L){K.transition="height "+L+"s"
}else{K.transition=null}v.setStyle(this._el,K)};t._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!y.isHidden&&this._currentItem.isInView()){if(this._cancelAutoPlayOnInteraction){this.off(s.UPDATE,this.stopAutoPlay)
}var J=this.showNext();if(J!==null){if(this._cancelAutoPlayOnInteraction){this.on(s.UPDATE,this.stopAutoPlay)
}setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)}}else{setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}};t._onWindowResize=function(J){window.requestAnimationFrame(function(){if(this._el){this.resize()
}}.bind(this))};b.exports=r},{"../templates/paddlenav.js":306,"./../Gallery":286,"./../helpers/inputHasFocus":297,"./../helpers/selectElementFromDataAttributeValue":298,"./../helpers/selectElementThatHasDataAttribute":299,"./../navigation/ToggleNav":300,"@marcom/ac-classlist":185,"@marcom/ac-dom-events/addEventListener":188,"@marcom/ac-dom-events/preventDefault":194,"@marcom/ac-dom-events/removeEventListener":195,"@marcom/ac-dom-metrics/getContentDimensions":199,"@marcom/ac-dom-styles":220,"@marcom/ac-dom-traversal/querySelector":239,"@marcom/ac-dom-traversal/querySelectorAll":240,"@marcom/ac-feature/touchAvailable":176,"@marcom/ac-function/throttle":244,"@marcom/ac-keyboard":315,"@marcom/ac-keyboard/keyMap":317,"@marcom/ac-object/create":248,"@marcom/ac-page-visibility":250,"@marcom/ac-pointer-tracker":356,"@marcom/ac-polyfills/requestAnimationFrame":undefined}],291:[function(c,b,d){var h=c("./create");
var j=c("./../helpers/selectElementThatHasDataAttribute");var i=c("./../Gallery");
var a=i.FADE_SELECTOR.replace(/\[|\]/g,"");var g=i.SLIDE_SELECTOR.replace(/\[|\]/g,"");
b.exports=function f(l){l=l||{};var m=l.context||document.body;var n;var k;n=j(g,m);
k=n.length;while(k--){h(n[k],i.SLIDE,l)}n=j(a,m);k=n.length;while(k--){h(n[k],i.FADE,l)
}return i.getAll()}},{"./../Gallery":286,"./../helpers/selectElementThatHasDataAttribute":299,"./create":292}],292:[function(d,b,f){var i=d("./../fade/FadeGallery");
var k=d("./../Gallery");var c=d("./../slide/SlideGallery");var j="%TYPE% is not a supported gallery type and el has no gallery data attribute.";
var a=k.FADE_SELECTOR.replace(/\[|\]/g,"");var h=k.SLIDE_SELECTOR.replace(/\[|\]/g,"");
b.exports=function g(o,n,m){var l;if(typeof n==="string"){if(n===k.SLIDE){l=c}else{if(n===k.FADE){l=i
}}}if(l===undefined){if(o.getAttribute(h)!==null){l=c}else{if(o.getAttribute(a)!==null){l=i
}}}if(l===undefined){throw new Error(j.replace(/%TYPE%/g,n))}return new l(o,m)}
},{"./../Gallery":286,"./../fade/FadeGallery":293,"./../slide/SlideGallery":303}],293:[function(c,a,f){var j=c("@marcom/ac-object/clone");
var h=c("@marcom/ac-object/create");var d=c("./FadeItem");var b=c("./../auto/AutoGallery");
var k=0.5;function i(n,m){m=j(m)||{};m.itemType=m.itemType||d;this._fadeDuration=m.duration||k;
m.toggleNavDuration=(m.toggleNavDuration===undefined)?this._fadeDuration:m.toggleNavDuration;
this._crossFade=m.crossFade;this._zIndexCount=m.startZIndex||1;this._ease=m.ease;
if(m.resizeContainerOnUpdate===true){m.resizeContainerOnUpdate=this._fadeDuration
}this._onItemShowComplete=this._onItemShowComplete.bind(this);b.call(this,n,m);
if(this._currentItem){this._currentItem.fadeIn(0)}}i.RESIZED=b.RESIZED;i.UPDATE=b.UPDATE;
i.UPDATE_COMPLETE=b.UPDATE_COMPLETE;var l=b.prototype;var g=i.prototype=h(l);g.addItem=function(o,m){if(o.nodeType){o=new this._itemType(o)
}var n=l.addItem.call(this,o,m);if(o!==this._currentItem){o.fadeOut()}else{o.fadeIn(0)
}return n};g.destroy=function(m){var n=l.destroy.call(this,m);this._fadeDuration=null;
this._crossFade=null;this._zIndexCount=null;this._ease=null;this._onItemShowComplete=null;
return n};g._startAt=function(m){var n=this._items[m];if(n&&(this._currentItem!==n)){this._currentItem.fadeOut(0);
this._currentItem.hide();this._setCurrentItem(n);this._currentItem.show();this._currentItem.fadeIn(0);
this.trigger(i.UPDATE,this._items)}};g._onItemShowComplete=function(o){if(o&&o.target()!==this._currentItem.getElement()){if(!this._currentItem.isFading()){this._currentItem.fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}return}var n;var m=this._items.length;while(m--){n=this._items[m];if(n!==this._currentItem){n.fadeOut()
}}if(this._incomingOutgoingItems){this.trigger(i.UPDATE_COMPLETE,this._incomingOutgoingItems)
}};g._updateItems=function(n,m){if(m){return}if(this._crossFade){var o=(m)?null:this.trigger.bind(this,i.UPDATE_COMPLETE,n);
n.outgoing[0].fadeOut(this._fadeDuration*0.99,this._ease);n.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,o)
}else{this._incomingOutgoingItems=(m)?false:n;if(!n.outgoing[0].isFading()){n.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}}n.outgoing[0].hide();n.incoming[0].show()};a.exports=i},{"./../auto/AutoGallery":290,"./FadeItem":294,"@marcom/ac-object/clone":247,"@marcom/ac-object/create":248}],294:[function(b,a,g){var k=b("@marcom/ac-dom-styles/setStyle");
var j=b("@marcom/ac-object/create");var f=b("@marcom/ac-solar/fade");var l=b("@marcom/ac-solar/fadeIn");
var i=b("@marcom/ac-solar/fadeOut");var d=b("./../Item");function c(o,n){d.call(this,o,n);
k(o,{position:"absolute"})}c.SELECTED=d.SELECTED;c.SHOW=d.SHOW;c.HIDE=d.HIDE;var m=d.prototype;
var h=c.prototype=j(m);h.fadeIn=function(n,o,q,p){if(n){k(this._el,{zIndex:q||1});
this._destroyCurrentClip();this._clip=f(this._el,0,1,n,{ease:o,onComplete:p})}else{l(this._el,0);
k(this._el,{zIndex:q||1})}};h.fadeOut=function(n,o){if(n){this._destroyCurrentClip();
this._clip=i(this._el,n,{ease:o})}else{i(this._el,0)}};h.isFading=function(){return !!(this._clip&&this._clip.playing())
};h.destroy=function(){k(this._el,{position:null,opacity:null,zIndex:null});m.destroy.call(this);
this._destroyCurrentClip();this._clip=null};h._destroyCurrentClip=function(){if(this.isFading()){this._clip.destroy()
}};a.exports=c},{"./../Item":287,"@marcom/ac-dom-styles/setStyle":223,"@marcom/ac-object/create":248,"@marcom/ac-solar/fade":279,"@marcom/ac-solar/fadeIn":280,"@marcom/ac-solar/fadeOut":281}],295:[function(c,f,b){var d=c("@marcom/ac-object/create");
var g=c("@marcom/ac-object/extend");f.exports=function a(k){var i=this;var j=function(){i.apply(this,arguments)
};var h=d(this.prototype);j.prototype=g(h,k);g(j,this);return j}},{"@marcom/ac-object/create":248,"@marcom/ac-object/extend":249}],296:[function(d,f,c){var b=d("@marcom/ac-dom-styles/getStyle");
var a=d("@marcom/ac-dom-metrics/getContentDimensions");f.exports=function g(h){var i=b(h,"margin-right","margin-left");
return Math.round(a(h).width)+parseInt(i.marginRight,10)+parseInt(i.marginLeft,10)
}},{"@marcom/ac-dom-metrics/getContentDimensions":199,"@marcom/ac-dom-styles/getStyle":221}],297:[function(b,c,a){c.exports=function d(){var f=["input","select","textarea"];
return f.indexOf(document.activeElement.nodeName.toLowerCase())>-1}},{}],298:[function(c,f,b){var g=c("@marcom/ac-dom-traversal/querySelectorAll");
var a=function(i,n){var j;var m=document.getElementsByTagName("*");var h=0;var k=m.length;
var l=[];for(h;h<k;h++){j=m[h];if(j.getAttribute(i)!==null&&j.getAttribute(i).split(" ").indexOf(n)>-1){l[l.length]=j
}}return l};f.exports=function d(j,m){var l=g("["+j+'*="'+m+'"]');if(l.length===0&&document.documentMode===7){return a(j,m)
}var n=[];var i=0;var k=l.length;var h;for(i;i<k;i++){h=l[i].getAttribute(j);if(h===m){n.push(l[i])
}else{if(h&&h.length){h=h.split(" ");if(h.indexOf(m)>-1){n.push(l[i])}}}}return n
}},{"@marcom/ac-dom-traversal/querySelectorAll":240}],299:[function(c,d,b){var h=c("@marcom/ac-dom-traversal/querySelectorAll");
var f=c("@marcom/ac-dom-traversal/ancestors");var a=function(j,k){var l;var o=document.getElementsByTagName("*");
var i=0;var m=o.length;var n=[];for(i;i<m;i++){l=o[i];if(l.getAttribute(j)!==null&&(!k||f(l).indexOf(k)>-1)){n[n.length]=l
}}return n};d.exports=function g(i,j){j=j||document.body;var k=h("["+i+"]",j);if(k.length===0&&document.documentMode===7){return a(i,j)
}return k}},{"@marcom/ac-dom-traversal/ancestors":235,"@marcom/ac-dom-traversal/querySelectorAll":240}],300:[function(i,c,s){var g=i("@marcom/ac-dom-events/addEventListener");
var h=i("@marcom/ac-dom-events/removeEventListener");var m=i("@marcom/ac-dom-metrics/getDimensions");
var r=i("@marcom/ac-dom-metrics/getPosition");var f=i("@marcom/ac-dom-styles/getStyle");
var d=i("@marcom/ac-dom-styles/setStyle");var a=i("@marcom/ac-dom-traversal/ancestors");
var j=i("@marcom/ac-object/create");var q=i("@marcom/ac-solar/scrollX");var k=i("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var n=i("./../Gallery");var l=0.5;function p(v,t,u){u=u||{};this._el=v;this._isRightToLeft=(u.rightToLeft===undefined)?f(v,"direction").direction==="rtl":u.rightToLeft;
this._scrollType=this._scrollDirection();this._gallery=t;this._triggers={};this._ordered=[];
this._containerEl=this._el.children[0];this._slideDuration=(u.duration===undefined)?l:u.duration;
k.call(this)}var b=k.prototype;var o=p.prototype=j(b);o.start=function(){this._onWindowLoad=this._onWindowLoad.bind(this);
this._onGalleryUpdated=this._onGalleryUpdated.bind(this);this._gallery.on(n.UPDATE,this._onGalleryUpdated);
this.resize();g(window,"load",this._onWindowLoad)};o.addTrigger=function(u,v){if(this._triggers[v.getElementId()]!==undefined){return
}var t=a(u);if(t.indexOf(this._el)>-1){var w={el:u};this._triggers[v.getElementId()]=w;
this._ordered.push(w)}};o.resize=function(){if(!this._ordered.length){return}d(this._containerEl,{paddingLeft:null,paddingRight:null});
this._containerWidth=m(this._containerEl).width;this._width=m(this._el).width;this._viewCenter=Math.round(this._width*0.5);
var v=this._ordered.length;while(v--){this._setTriggerData(this._ordered[v])}this._ordered.sort(function(A,z){return A.left-z.left
});if(this._containerWidth>this._width){var x=this._ordered[0];var w=this._ordered[this._ordered.length-1];
var u=(this._width-x.width)*0.5;var y=(this._width-w.width)*0.5;d(this._containerEl,{paddingLeft:u+"px",paddingRight:y+"px"});
var t=this._triggers[this._gallery.getCurrentItem().getElementId()];if(t){this._centerNav(t)
}}};o.destroy=function(){this._gallery.off(n.UPDATE,this._onGalleryUpdated);h(window,"load",this._onWindowLoad);
d(this._containerEl,{paddingLeft:null,paddingRight:null});this._el=null;this._gallery=null;
this._triggers=null;this._ordered=null;this._containerEl=null;this._destroyCurrentClip();
this._clip=null;return b.destroy.call(this)};o._onWindowLoad=function(){h(window,"load",this._onWindowLoad);
this.resize()};o._setTriggerData=function(u){u.width=m(u.el).width;var t=r(u.el);
u.left=t.left;u.right=t.right;u.center=u.left+(u.width*0.5)};o._centerNav=function(t,v){this._setTriggerData(t);
this._width=m(this._el).width;this._viewCenter=Math.round(this._width*0.5);var u=Math.round(t.center-this._viewCenter);
if(this._isRightToLeft){if(this._scrollType!=="negative"){u=Math.abs(u)}if(this._scrollType==="default"){u=this._el.scrollWidth-this._el.clientWidth-u
}}this._destroyCurrentClip();if(v){this._clip=q(this._el,u,v)}else{this._el.scrollLeft=u
}};o._onGalleryUpdated=function(t){var u=this._triggers[t.incoming[0].getElementId()];
if(u){this._centerNav(u,this._slideDuration)}};o._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};o._scrollDirection=function(){var u="reverse";var t=document.createElement("div");
t.style.cssText="width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;";
t.style.direction="rtl";t.innerHTML="test";document.body.appendChild(t);if(t.scrollLeft>0){u="default"
}else{t.scrollLeft=1;if(t.scrollLeft===0){u="negative"}}document.body.removeChild(t);
return u};c.exports=p},{"./../Gallery":286,"@marcom/ac-dom-events/addEventListener":188,"@marcom/ac-dom-events/removeEventListener":195,"@marcom/ac-dom-metrics/getDimensions":200,"@marcom/ac-dom-metrics/getPosition":204,"@marcom/ac-dom-styles/getStyle":221,"@marcom/ac-dom-styles/setStyle":223,"@marcom/ac-dom-traversal/ancestors":235,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-object/create":248,"@marcom/ac-solar/scrollX":285}],301:[function(b,d,a){var c=b("./../analytics/AnalyticsManager");
d.exports=new c()},{"./../analytics/AnalyticsManager":289}],302:[function(c,d,b){var g=["input","select","textarea","button","object"];
var h=["href","tabindex","contenteditable"];var a=function(){this.focusableSelectors=g.concat(h.map(function(i){return(i==="href")?"a["+i+"]":"*["+i+"]"
})).join(",")};var f=a.prototype;f.isFocusable=function(k,i){var l=k.nodeName.toLowerCase();
var j=g.indexOf(l)>-1;if(l==="a"){return true}if(j){return !k.disabled}if(!k.contentEditable){return true
}i=i||k.tabIndex;return isNaN(i)};f.isTabbable=function(j){var i=j.getAttribute("tabindex");
if(!isNaN(i)){return(i>=0)}else{return this.isFocusable(j,i)}};f.getTabbable=function(n){var k=n.length;
var j=[];for(var m=0;m<k;m++){if(this.isTabbable(n[m])){j.push(n[m])}}return j};
d.exports=new a()},{}],303:[function(g,c,w){var d=g("@marcom/ac-classlist");var o=g("@marcom/ac-dom-styles");
var u=g("@marcom/ac-dom-traversal/querySelectorAll");var s=g("@marcom/ac-object/clone");
var i=g("@marcom/ac-object/create");var v=g("./../helpers/getElementFullWidth");
var m=g("@marcom/ac-solar/moveX");var t=g("./../helpers/selectElementFromDataAttributeValue");
var h=g("./../helpers/selectElementThatHasDataAttribute");var l=g("./../auto/AutoGallery");
var f=g("@marcom/ac-pointer-tracker").PointerTracker;var q=g("./SlideItem");var j=g("./SlideItemWrapper");
var a=0.5;var k=0.5;var r=true;function p(z,y){y=s(y)||{};y.itemType=y.itemType||q;
this._itemsPerSlide=y.itemsPerSlide||1;var x=y.deeplink!==false;y.deeplink=false;
this._slideDuration=(y.duration!==undefined)?y.duration:k;y.toggleNavDuration=(y.toggleNavDuration===undefined)?this._slideDuration:y.toggleNavDuration;
this._itemCenterPoint=(y.itemCenterPoint!==undefined)?y.itemCenterPoint:a;this._edgePullResistance=(y.edgePullResistance?y.edgePullResistance:r);
this._slideOptions={ease:y.ease};if(y.resizeContainerOnUpdate===true){y.resizeContainerOnUpdate=this._slideDuration
}y.touch=y.touch!==false;this._originalWrapAround=y.wrapAround||false;l.call(this,z,y);
if(x){var A=this._getDeeplinkedItem();if(A){if(this._currentItem!==A){this._currentItem.hide();
this._setCurrentItem(A);this._currentItem.show()}}}this._positionItems=this._positionItems.bind(this);
this._createContainer();if(this._items.length!==0){this._positionItems()}this._isInstantiated=true
}p.RESIZED=l.RESIZED;p.UPDATE=l.UPDATE;p.UPDATE_COMPLETE=l.UPDATE_COMPLETE;var b=l.prototype;
var n=p.prototype=i(b);n.addItem=function(z,x){if(z.nodeType){z=new this._itemType(z)
}var y=b.addItem.call(this,z,x);if(this._containerEl!==undefined){this._addItemToContainer(z);
this._positionItems()}this._updateWrapAround();return y};n.removeItem=function(A,y){if(this._containerEl&&A.getElement().parentElement===this._containerEl){var x=A.getOriginalParentElement();
if(x){x.appendChild(A.getElement())}else{if(typeof A.removeItems==="function"){A.removeItems();
y.destroyItem=true}}var z=b.removeItem.call(this,A,y);if(this._currentItem){this._positionItems(this._currentItem)
}this._updateWrapAround();return z}return b.removeItem.call(this,A,y)};n.resize=function(){this._positionItems();
this._snapToPosition(this._currentItem.position());return b.resize.call(this)};
n.destroy=function(y){this._destroyCurrentClip();this._clip=null;var x=this._items.length;
while(x--){this._items[x].off(q.CENTER_POINT_CHANGED,this._positionItems)}if(this._touchSwipe){this._touchSwipe.off(f.START,this._onSwipeStart);
this._touchSwipe.off(f.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.off(f.START,this._onSwipeStart);
this._clickSwipe.off(f.UPDATE,this._onSwipeUpdate)}var A=this._el;var z=b.destroy.call(this,y);
A.removeChild(this._containerEl);this._containerEl=null;this._slideDuration=null;
this._itemCenterPoint=null;this._positionItems=null;this._slideOptions=null;return z
};n._addItems=function(A){if(this._itemsPerSlide>1){var F;var z=/(^\[).*(\]$)/.test(A);
if(z){F=h(A.replace(/\[|\]/g,""),this._el)}else{F=u(A,this._el)}var x;var E;var B;
var C=0;var D=0;var y=F.length;for(D;D<y;D++){if(C===0){x=new j()}x.addItem(F[D]);
B=F[D].getAttribute("id");if(B){E=t("data-ac-gallery-trigger",B);this._addItemTriggers(x,E)
}if(++C===this._itemsPerSlide||D===y-1){C=0;x.resize();this.addItem(x)}}}else{b._addItems.call(this,A)
}};n._createContainer=function(){this._containerEl=document.createElement("div");
d.add(this._containerEl,"ac-gallery-slidecontainer");o.setStyle(this._containerEl,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"});
this._el.appendChild(this._containerEl);var x=0;var y=this._items.length;for(x;
x<y;x++){this._addItemToContainer(this._items[x])}};n._addItemToContainer=function(x){this._containerEl.appendChild(x.getElement());
x.on(q.CENTER_POINT_CHANGED,this._positionItems)};n._positionItems=function(B){B=B||this._currentItem;
var F=this._items;if(this._wrapAround){F=this._shuffleItems()}var H=(this._getActualPositionX()-B.position())||0;
var G=parseInt(o.getStyle(this._el,"width").width,10);var y=0;var D=0;var A=F.length;
var I;var z;var x;var C;var E;for(D;D<A;D++){I=F[D];I.resize();z=I.getElement();
o.setStyle(z,{left:y+"px"});x=v(z);C=G-x;E=(I.centerPoint&&I.centerPoint()!==null)?I.centerPoint():this._itemCenterPoint;
I.position((y*-1)+(C*E));if(this._isRightToLeft){y-=x}else{y+=x}}y=B.position()+H;
this._snapToPosition(y)};n._getActualPositionX=function(){var y=o.getStyle(this._containerEl,"transform").transform;
if(!y||y==="none"){var z=o.getStyle(this._containerEl,"left").left;return parseInt(z,10)
}else{if(y===this._transformStyles&&this._actualPositionX!==undefined){return this._actualPositionX
}}this._transformStyles=y;var x=this._transformStyles.split(",");this._actualPositionX=x[4]||this._currentItem.position();
return this._actualPositionX*1};n._snapToPosition=function(x){this._destroyCurrentClip();
this._positionX=x;o.setStyle(this._containerEl,{transition:"transform 0s, left 0s"});
m(this._containerEl,x,0,this._slideOptions)};n._slideToPosition=function(x,y,z){this._positionX=x;
this._clip=m(this._containerEl,x,y,{ease:this._slideOptions.ease,onComplete:z})
};n._setUpSwiping=function(y,x){var z=b._setUpSwiping.call(this,y,x);this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeUpdate=this._onSwipeUpdate.bind(this);if(this._touchSwipe){this._touchSwipe.on(f.START,this._onSwipeStart);
this._touchSwipe.on(f.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.on(f.START,this._onSwipeStart);
this._clickSwipe.on(f.UPDATE,this._onSwipeUpdate)}return z};n._onSwipeStart=function(x){if(this._clip&&this._clip.playing()){this._destroyCurrentClip();
this._positionX=this._getActualPositionX()}};n._onSwipeUpdate=function(x){this._destroyCurrentClip();
var z=this.getItems().slice(-1)[0].position();var A=this._positionX>0||this._positionX<z;
var y=x.diffX;if(this._edgePullResistance&&!this._wrapAround&&A){y*=0.5}this._snapToPosition(this._positionX-y)
};n._onSwipeEnd=function(x){var y=b._onSwipeEnd.call(this,x);if(y===null){y=this.show(this._currentItem,{interactionEvent:x.interactionEvent})
}return y};n._shuffleItems=function(){var B=this._items.length===2&&!this._isAutoPlaying;
if(B){return this._items.slice()}var E=this._items.length;var y=this._items.indexOf(this._currentItem);
var D=Math.floor(E*0.5);var A;var x;var z;if(y<D){A=D-y;var C=E-A;x=this._items.slice(C);
z=this._items.slice(0,C);return x.concat(z)}else{if(y>D){A=y-D;x=this._items.slice(0,A);
z=this._items.slice(A);return z.concat(x)}}return this._items};n._updateItems=function(y,x){this._destroyCurrentClip();
if(this._wrapAround){this._positionItems(y.outgoing[0])}if(this.getItemIndex(y.outgoing[0])>-1){var A=(x)?null:this.trigger.bind(this,p.UPDATE_COMPLETE,y);
var z=this._slideDuration;this._slideToPosition(y.incoming[0].position(),z,A);if(y.incoming[0]!==y.outgoing[0]){y.incoming[0].show();
y.outgoing[0].hide()}}else{this._slideToPosition(this._currentItem.position(),this._slideDuration);
y.incoming[0].show();if(!x){this.trigger(p.UPDATE_COMPLETE,y)}}};n._updateWrapAround=function(){if(this._items.length<=2){this._wrapAround=false
}else{if(this._originalWrapAround){this._wrapAround=this._originalWrapAround}}if(this._isInstantiated&&(this._previousButtons||this._nextButtons)){this._updatePaddleNavState()
}};n._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};c.exports=p},{"./../auto/AutoGallery":290,"./../helpers/getElementFullWidth":296,"./../helpers/selectElementFromDataAttributeValue":298,"./../helpers/selectElementThatHasDataAttribute":299,"./SlideItem":304,"./SlideItemWrapper":305,"@marcom/ac-classlist":185,"@marcom/ac-dom-styles":220,"@marcom/ac-dom-traversal/querySelectorAll":240,"@marcom/ac-object/clone":247,"@marcom/ac-object/create":248,"@marcom/ac-pointer-tracker":356,"@marcom/ac-solar/moveX":283}],304:[function(b,a,d){var h=b("@marcom/ac-dom-styles/setStyle");
var g=b("@marcom/ac-object/create");var c=b("./../Item");function i(l,k){c.call(this,l,k);
h(l,{position:"absolute",transform:{translateZ:0}});this._parentElement=l.parentElement
}i.CENTER_POINT_CHANGED="centerpointchanged";i.SELECTED=c.SELECTED;i.SHOW=c.SHOW;
i.HIDE=c.HIDE;var j=c.prototype;var f=i.prototype=g(j);f.position=function(k){if(k!==undefined){this._position=k
}return this._position||0};f.centerPoint=function(k){if(k!==undefined){this._centerPoint=k;
this.trigger(i.CENTER_POINT_CHANGED)}return(this._centerPoint!==undefined)?this._centerPoint:null
};f.getOriginalParentElement=function(){return this._parentElement};f.resize=function(){};
f.destroy=function(){h(this._el,{position:null,left:null,transform:null});j.destroy.call(this)
};a.exports=i},{"./../Item":287,"@marcom/ac-dom-styles/setStyle":223,"@marcom/ac-object/create":248}],305:[function(g,d,h){var n=g("@marcom/ac-classlist");
var k=g("@marcom/ac-dom-styles/setStyle");var c=g("@marcom/ac-dom-traversal/querySelectorAll");
var j=g("@marcom/ac-object/create");var o=g("./../singletons/tabManager");var a=g("./../helpers/getElementFullWidth");
var l=g("./SlideItem");var b="ac-gallery-slideitemwrapper";function f(){l.call(this,document.createElement("div"));
this._items=[];this._currentWidth=0;n.add(this._el,b)}var m=l.prototype;var i=f.prototype=j(m);
i.addItem=function(r){this._items.push({el:r,parentElement:r.parentElement});this._el.appendChild(r);
var p=r.getAttribute("id");if(p){var s=this._el.getAttribute("id")||"";var q=(s.length)?"-":"";
s+=q+p;this._el.setAttribute("id",s)}this._focusableEls=this._focusableEls.concat(c(o.focusableSelectors,r))
};i.removeItems=function(){var r;var p;var q=0;var s=this._items.length;for(q;q<s;
q++){r=this._items[q].el;k(r,{position:null,left:null});p=this._items[q].parentElement;
if(p){p.appendChild(r)}}};i.resize=function(){this._currentWidth=0;var q;var p=0;
var r=this._items.length;for(p;p<r;p++){q=this._items[p].el;k(q,{position:"absolute",left:this._currentWidth+"px"});
this._currentWidth+=a(q)}k(this._el,{width:this._currentWidth+"px"})};i.destroy=function(){this.removeItems();
this._items=null;this._currentWidth=null;var p=this._el.parentElement;if(p){p.removeChild(this._el)
}m.destroy.call(this)};d.exports=f},{"./../helpers/getElementFullWidth":296,"./../singletons/tabManager":302,"./SlideItem":304,"@marcom/ac-classlist":185,"@marcom/ac-dom-styles/setStyle":223,"@marcom/ac-dom-traversal/querySelectorAll":240,"@marcom/ac-object/create":248}],306:[function(b,c,a){var d="";
d+='<nav class="paddlenav">';d+="<ul>";d+='<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>';
d+='<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>';
d+="</ul>";d+="</nav>";c.exports=d},{}],307:[function(b,c,a){var f={};c.exports=function d(h,g,l){h=h.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
if(l||!f.hasOwnProperty(h)){var j=new RegExp("[\\?&]"+h+"=([^&#]*)");var i=j.exec(location.search);
var k=(i===null)?g:decodeURIComponent(i[1].replace(/\+/g," "));if(k==="true"||k==="false"){k=(k==="true")
}if(!isNaN(parseFloat(k))){k=parseFloat(k)}f[h]=k}return f[h]}},{}],308:[function(c,b,d){var j="data-focus-method";
var h="touch";var i="mouse";var a="key";function g(l,k){this._target=l||document.body;
this._attr=k||j;this._focusMethod=this._lastFocusMethod=false;this._onKeyDown=this._onKeyDown.bind(this);
this._onMouseDown=this._onMouseDown.bind(this);this._onTouchStart=this._onTouchStart.bind(this);
this._onFocus=this._onFocus.bind(this);this._onBlur=this._onBlur.bind(this);this._onWindowBlur=this._onWindowBlur.bind(this);
this._bindEvents()}var f=g.prototype;f._bindEvents=function(){if(this._target.addEventListener){this._target.addEventListener("keydown",this._onKeyDown,true);
this._target.addEventListener("mousedown",this._onMouseDown,true);this._target.addEventListener("touchstart",this._onTouchStart,true);
this._target.addEventListener("focus",this._onFocus,true);this._target.addEventListener("blur",this._onBlur,true);
window.addEventListener("blur",this._onWindowBlur)}};f._onKeyDown=function(k){this._focusMethod=a
};f._onMouseDown=function(k){if(this._focusMethod===h){return}this._focusMethod=i
};f._onTouchStart=function(k){this._focusMethod=h};f._onFocus=function(k){if(!this._focusMethod){this._focusMethod=this._lastFocusMethod
}k.target.setAttribute(this._attr,this._focusMethod);this._lastFocusMethod=this._focusMethod;
this._focusMethod=false};f._onBlur=function(k){k.target.removeAttribute(this._attr)
};f._onWindowBlur=function(k){this._focusMethod=false};b.exports=g},{}],309:[function(b,c,a){arguments[4][197][0].apply(a,arguments)
},{dup:197}],310:[function(b,c,a){arguments[4][198][0].apply(a,arguments)},{dup:198}],311:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{dup:63}],312:[function(b,c,a){arguments[4][64][0].apply(a,arguments)},{"./internal/expose":311,dup:64}],313:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"@marcom/ac-console/log":312,dup:66}],314:[function(d,c,g){var m=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=d("@marcom/ac-dom-events/utils/addEventListener");var b=d("@marcom/ac-dom-events/utils/removeEventListener");
var i=d("@marcom/ac-object/create");var f=d("./internal/KeyEvent");var k="keydown";
var l="keyup";function a(n){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);this._context=n||document;j(this._context,k,this._DOMKeyDown,true);
j(this._context,l,this._DOMKeyUp,true);m.call(this)}var h=a.prototype=i(m.prototype);
h.onDown=function(n,o){return this.on(k+":"+n,o)};h.onceDown=function(n,o){return this.once(k+":"+n,o)
};h.offDown=function(n,o){return this.off(k+":"+n,o)};h.onUp=function(n,o){return this.on(l+":"+n,o)
};h.onceUp=function(n,o){return this.once(l+":"+n,o)};h.offUp=function(n,o){return this.off(l+":"+n,o)
};h.isDown=function(n){n+="";return this._keysDown[n]||false};h.isUp=function(n){return !this.isDown(n)
};h.destroy=function(){b(this._context,k,this._DOMKeyDown,true);b(this._context,l,this._DOMKeyUp,true);
this._keysDown=null;this._context=null;m.prototype.destroy.call(this);return this
};h._DOMKeyDown=function(o){var n=this._normalizeKeyboardEvent(o);var p=n.keyCode+="";
this._trackKeyDown(p);this.trigger(k+":"+p,n)};h._DOMKeyUp=function(o){var n=this._normalizeKeyboardEvent(o);
var p=n.keyCode+="";this._trackKeyUp(p);this.trigger(l+":"+p,n)};h._normalizeKeyboardEvent=function(n){return new f(n)
};h._trackKeyUp=function(n){if(this._keysDown[n]){this._keysDown[n]=false}};h._trackKeyDown=function(n){if(!this._keysDown[n]){this._keysDown[n]=true
}};c.exports=a},{"./internal/KeyEvent":316,"@marcom/ac-dom-events/utils/addEventListener":309,"@marcom/ac-dom-events/utils/removeEventListener":310,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-object/create":313}],315:[function(c,d,b){var a=c("./Keyboard");
d.exports=new a()},{"./Keyboard":314}],316:[function(c,d,b){var a=["keyLocation"];
function f(g){this.originalEvent=g;var h;for(h in g){if(a.indexOf(h)===-1&&typeof g[h]!=="function"){this[h]=g[h]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}f.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};d.exports=f},{}],317:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],318:[function(d,f,b){var g=d("./ac-browser/BrowserData");var a=/applewebkit/i;
var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":319,"./ac-browser/IE":320}],319:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.filter");
b("@marcom/ac-polyfills/Array/prototype.some");var d=b("./data");function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;
if(!h||!i){return}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
var l=h.indexOf(k);if(l>-1){g=parseFloat(h.substring(l+k.length+1));return true
}});return g},__getName:function(g){return this.__getIdentityStringFromArray(g)
},__getIdentity:function(g){if(g.string){return this.__matchSubString(g)}else{if(g.prop){return g.identity
}}},__getIdentityStringFromArray:function(g){for(var k=0,h=g.length,j;k<h;k++){j=this.__getIdentity(g[k]);
if(j){return j}}},__getOS:function(g){return this.__getIdentityStringFromArray(g)
},__getOSVersion:function(i,l){if(!i||!l){return}var k=d.os.filter(function(m){return m.identity===l
})[0];var g=k.versionSearch||l;var j=new RegExp(g+" ([\\d_\\.]+)","i");var h=i.match(j);
if(h!==null){return h[1].replace(/_/g,".")}},__matchSubString:function(h){var g=h.subString;
if(g){var i=g.test?!!g.test(h.string):h.string.indexOf(g)>-1;if(i){return h.identity
}}}};f.create=function(){var g=new f();var h={};h.name=g.__getName(d.browser);h.version=g.__getBrowserVersion(d.versionString,h.name);
h.os=g.__getOS(d.os);h.osVersion=g.__getOSVersion(d.versionString,h.os);return h
};c.exports=f},{"./data":321,"@marcom/ac-polyfills/Array/prototype.filter":undefined,"@marcom/ac-polyfills/Array/prototype.some":undefined}],320:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],321:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],322:[function(b,c,a){arguments[4][188][0].apply(a,arguments)},{"./shared/getEventType":332,"./utils/addEventListener":336,dup:188}],323:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":332,"./utils/dispatchEvent":337}],324:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":322,"./dispatchEvent":323,"./preventDefault":330,"./removeEventListener":331,"./stop":333,"./stopPropagation":334,"./target":335}],325:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":326,"./shared/prefixHelper":327,"./shared/windowFallbackEventTypes":328,"./utils/eventTypeAvailable":329,dup:2}],326:[function(b,c,a){arguments[4][3][0].apply(a,arguments)
},{dup:3}],327:[function(b,c,a){arguments[4][4][0].apply(a,arguments)},{dup:4}],328:[function(b,c,a){arguments[4][5][0].apply(a,arguments)
},{dup:5}],329:[function(b,c,a){arguments[4][6][0].apply(a,arguments)},{dup:6}],330:[function(b,c,a){arguments[4][194][0].apply(a,arguments)
},{dup:194}],331:[function(b,c,a){arguments[4][195][0].apply(a,arguments)},{"./shared/getEventType":332,"./utils/removeEventListener":338,dup:195}],332:[function(b,c,a){arguments[4][196][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getEventType":325,dup:196}],333:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":330,"./stopPropagation":334}],334:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],335:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],336:[function(b,c,a){arguments[4][197][0].apply(a,arguments)
},{dup:197}],337:[function(b,c,a){b("@marcom/ac-polyfills/CustomEvent");c.exports=function d(i,h,g){var f;
if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)}else{f=new CustomEvent(h)}i.dispatchEvent(f)
}else{f=document.createEventObject();if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)
}return i}},{"@marcom/ac-polyfills/CustomEvent":undefined}],338:[function(b,c,a){arguments[4][198][0].apply(a,arguments)
},{dup:198}],339:[function(b,c,a){arguments[4][40][0].apply(a,arguments)},{"./getStyleProperty":340,"./getStyleValue":341,"./shared/stylePropertyCache":344,dup:40}],340:[function(b,c,a){arguments[4][41][0].apply(a,arguments)
},{"./shared/getStyleTestElement":342,"./shared/prefixHelper":343,"./shared/stylePropertyCache":344,"./utils/toCSS":347,"./utils/toDOM":348,dup:41}],341:[function(b,c,a){arguments[4][42][0].apply(a,arguments)
},{"./getStyleProperty":340,"./shared/prefixHelper":343,"./shared/stylePropertyCache":344,"./shared/styleValueAvailable":345,dup:42}],342:[function(b,c,a){arguments[4][43][0].apply(a,arguments)
},{dup:43}],343:[function(b,c,a){arguments[4][4][0].apply(a,arguments)},{dup:4}],344:[function(b,c,a){arguments[4][45][0].apply(a,arguments)
},{dup:45}],345:[function(b,c,a){arguments[4][46][0].apply(a,arguments)},{"./getStyleTestElement":342,"./stylePropertyCache":344,dup:46}],346:[function(b,c,a){arguments[4][47][0].apply(a,arguments)
},{dup:47}],347:[function(b,c,a){arguments[4][48][0].apply(a,arguments)},{dup:48}],348:[function(b,c,a){arguments[4][49][0].apply(a,arguments)
},{dup:49}],349:[function(b,c,a){arguments[4][220][0].apply(a,arguments)},{"./getStyle":350,"./setStyle":352,dup:220}],350:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":340,"@marcom/ac-prefixer/stripPrefixes":346,dup:50}],351:[function(b,c,a){arguments[4][51][0].apply(a,arguments)
},{dup:51}],352:[function(b,c,a){arguments[4][52][0].apply(a,arguments)},{"./internal/normalizeValue":351,"@marcom/ac-prefixer/getStyleCSS":339,"@marcom/ac-prefixer/getStyleProperty":340,dup:52}],353:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{dup:63}],354:[function(b,c,a){arguments[4][64][0].apply(a,arguments)},{"./internal/expose":353,dup:64}],355:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"@marcom/ac-console/log":354,dup:66}],356:[function(b,c,a){c.exports={PointerTracker:b("./ac-pointer-tracker/PointerTracker")}
},{"./ac-pointer-tracker/PointerTracker":357}],357:[function(b,a,f){var n=b("@marcom/ac-browser");
var l=b("@marcom/ac-dom-events");var k=b("@marcom/ac-dom-styles");var h=b("@marcom/ac-object/create");
var c=n.os==="Android"||(n.name==="IE"&&n.version<=8);var j=b("@marcom/ac-feature/touchAvailable")();
var m=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;function d(p,q,o){this._el=p;
o=o||{};this._lockVertical=o.lockVertical!==false;this._swipeThreshold=o.swipeThreshold||d.DEFAULT_SWIPE_THRESHOLD;
this._pointerEvents=q||{};this._trackHover=o.trackHover;if(!this._trackHover){this._pointerEvents.down=this._pointerEvents.down||((j)?d.TOUCH_EVENTS.down:d.MOUSE_EVENTS.down);
this._pointerEvents.up=this._pointerEvents.up||((j)?d.TOUCH_EVENTS.up:d.MOUSE_EVENTS.up)
}else{this._pointerEvents.down=this._pointerEvents.down||d.MOUSE_EVENTS.over;this._pointerEvents.up=this._pointerEvents.up||d.MOUSE_EVENTS.out
}this._pointerEvents.out=this._pointerEvents.out||((j)?d.TOUCH_EVENTS.out:d.MOUSE_EVENTS.out);
this._pointerEvents.move=this._pointerEvents.move||((j)?d.TOUCH_EVENTS.move:d.MOUSE_EVENTS.move);
this._onMouseDown=this._onMouseDown.bind(this);this._onMouseUp=this._onMouseUp.bind(this);
this._onMouseOut=this._onMouseOut.bind(this);this._onMouseMove=this._onMouseMove.bind(this);
m.call(this);l.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
this._setCursorStyle("grab")}d.START="start";d.END="end";d.UPDATE="update";d.SWIPE_RIGHT="swiperight";
d.SWIPE_LEFT="swipeleft";d.DEFAULT_SWIPE_THRESHOLD=(c)?2:8;d.TOUCH_EVENTS={down:"touchstart",up:"touchend",out:"mouseout",move:"touchmove"};
d.MOUSE_EVENTS={down:"mousedown",up:"mouseup",out:"mouseout",move:"mousemove",over:"mouseover"};
var i=m.prototype;var g=d.prototype=h(i);g.destroy=function(){if(this._isDragging){this._onMouseUp()
}l.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);this._setCursorStyle(null);
this._el=null;this._pointerEvents=null;this._lockVertical=null;this._swipeThreshold=null;
this._checkForTouchScrollY=null;this._isDragging=null;this._currentX=null;this._currentY=null;
this._velocityX=null;this._velocityY=null;this._lastX=null;this._lastY=null;return i.destroy.call(this)
};g._onMouseDown=function(o){if(this._isDragging){return}this._isDragging=true;
this._setCursorStyle("grabbing");l.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
l.addEventListener(document.body,this._pointerEvents.up,this._onMouseUp);l.addEventListener(document,this._pointerEvents.out,this._onMouseOut);
l.addEventListener(document.body,this._pointerEvents.move,this._onMouseMove);this._checkForTouchScrollY=this._lockVertical&&!!(o.touches&&o.touches[0]);
if(this._checkForTouchScrollY){this._lastY=this._getTouchY(o)}var p=this._storeAndGetValues(o);
this._velocityX=p.diffX=0;this._velocityY=p.diffY=0;this.trigger(d.START,p)};g._onMouseUp=function(o){if(!this._isDragging){return
}this._isDragging=false;this._setCursorStyle("grab");l.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
l.removeEventListener(document.body,this._pointerEvents.up,this._onMouseUp);l.removeEventListener(document,this._pointerEvents.out,this._onMouseOut);
l.removeEventListener(document.body,this._pointerEvents.move,this._onMouseMove);
var q;if(this._checkForTouchScrollY||this._trackHover){q=null}else{if(this._velocityX>this._swipeThreshold){q=d.SWIPE_LEFT
}else{if((this._velocityX*-1)>this._swipeThreshold){q=d.SWIPE_RIGHT}}}var p=this._storeAndGetValues(o);
p.swipe=q;this.trigger(d.END,p);if(q&&!this._trackHover){this.trigger(q,p)}};g._onMouseOut=function(o){o=(o)?o:window.event;
var p=o.relatedTarget||o.toElement;if(!p||p.nodeName==="HTML"){this._onMouseUp(o)
}};g._onMouseMove=function(o){if(this._checkForTouchScrollY&&this._isVerticalTouchMove(o)){this._onMouseUp(o);
return}l.preventDefault(o);this.trigger(d.UPDATE,this._storeAndGetValues(o))};g._storeAndGetValues=function(o){if(o===undefined){return{}
}this._currentX=this._getPointerX(o);this._currentY=this._getPointerY(o);this._velocityX=this._lastX-this._currentX;
this._velocityY=this._lastY-this._currentY;var p={x:this._currentX,y:this._currentY,lastX:this._lastX,lastY:this._lastY,diffX:this._velocityX,diffY:this._velocityY,interactionEvent:o};
this._lastX=this._currentX;this._lastY=this._currentY;return p};g._getPointerX=function(o){if(o.pageX){return o.pageX
}else{if(o.touches&&o.touches[0]){return o.touches[0].pageX}else{if(o.clientX){return o.clientX
}}}return 0};g._getPointerY=function(o){if(o.pageY){return o.pageY}else{if(o.touches&&o.touches[0]){return o.touches[0].pageY
}else{if(o.clientY){return o.clientY}}}return 0};g._getTouchX=function(o){if(o.touches&&o.touches[0]){return o.touches[0].pageX
}return 0};g._getTouchY=function(o){if(o.touches&&o.touches[0]){return o.touches[0].pageY
}return 0};g._isVerticalTouchMove=function(p){var o=this._getTouchX(p);var s=this._getTouchY(p);
var r=Math.abs(o-this._lastX);var q=Math.abs(s-this._lastY);this._checkForTouchScrollY=(r<q);
return this._checkForTouchScrollY};g._setCursorStyle=function(o){k.setStyle(this._el,{cursor:o})
};a.exports=d},{"@marcom/ac-browser":318,"@marcom/ac-dom-events":324,"@marcom/ac-dom-styles":349,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-feature/touchAvailable":176,"@marcom/ac-object/create":355}],358:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{dup:63}],359:[function(b,c,a){arguments[4][64][0].apply(a,arguments)},{"./internal/expose":358,dup:64}],360:[function(b,c,a){arguments[4][65][0].apply(a,arguments)
},{"./extend":362,"@marcom/ac-console/log":359,"@marcom/ac-polyfills/Array/isArray":undefined,dup:65}],361:[function(b,c,a){arguments[4][135][0].apply(a,arguments)
},{"./extend":362,"@marcom/ac-console/log":359,dup:135}],362:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"@marcom/ac-console/log":359,"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:67}],363:[function(b,c,a){c.exports={Queue:b("./ac-queue/Queue"),QueueItem:b("./ac-queue/QueueItem"),LiveQueue:b("./ac-queue/LiveQueue")}
},{"./ac-queue/LiveQueue":364,"./ac-queue/Queue":365,"./ac-queue/QueueItem":366}],364:[function(b,c,a){b("@marcom/ac-polyfills/Promise");
b("@marcom/ac-polyfills/requestAnimationFrame");b("@marcom/ac-polyfills/Function/prototype.bind");
var g=b("./Queue");var h=b("./QueueItem");function f(i){this._queue=new g();this._maxProcesses=i||1;
this._availableSlots=this._maxProcesses;this._rafId=0;this._isRunning=false;this._boundFunctions={_run:this._run.bind(this),_releaseSlot:this._releaseSlot.bind(this)}
}var d=f.prototype;d.start=function(){if(this._isRunning){cancelAnimationFrame(this._rafId)
}this._rafId=requestAnimationFrame(this._boundFunctions._run);this._isRunning=true
};d.pause=function(){if(this._isRunning){cancelAnimationFrame(this._rafId);this._rafId=0
}this._isRunning=false};d.stop=function(){this.pause();this.clear()};d.enqueue=function(i,j){if(typeof i!=="function"){throw new Error("LiveQueue can only enqueue functions")
}if(j===undefined){j=g.PRIORITY_DEFAULT}var k=new h(i,j);return this.enqueueQueueItem(k)
};d.enqueueQueueItem=function(i){this._queue.enqueueQueueItem(i);if(this._isRunning&&this._rafId===0){this.start()
}return i};d.dequeueQueueItem=function(i){return this._queue.dequeueQueueItem(i)
};d.clear=function(){this._queue=new g()};d.destroy=function(){this.pause();this._isRunning=false;
this._queue=null;this._boundFunctions=null};d.count=function(){return this._queue.count()+this.pending()
};d.pending=function(){return this._maxProcesses-this._availableSlots};d.isEmpty=function(){return this.count()===0
};d._run=function(){if(!this._isRunning){return}this._rafId=requestAnimationFrame(this._boundFunctions._run);
if(this._queue.isEmpty()||this._availableSlots===0){return}var j=this._queue.dequeue();
var i=j.data();if(this._isPromise(i)){this._retainSlot();i.then(this._boundFunctions._releaseSlot,this._boundFunctions._releaseSlot)
}this._stopRunningIfDone()};d._retainSlot=function(){this._availableSlots--};d._releaseSlot=function(){this._availableSlots++;
this._stopRunningIfDone()};d._stopRunningIfDone=function(){if(this._rafId!=0&&this._queue.count()===0&&this._availableSlots==this._maxProcesses){cancelAnimationFrame(this._rafId);
this._rafId=0}};d._isPromise=function(i){return !!(i&&typeof i.then==="function")
};c.exports=f},{"./Queue":365,"./QueueItem":366,"@marcom/ac-polyfills/Function/prototype.bind":undefined,"@marcom/ac-polyfills/Promise":undefined,"@marcom/ac-polyfills/requestAnimationFrame":undefined}],365:[function(b,c,a){var g=b("./QueueItem");
function f(){this._items=[]}var d=f.prototype;d.enqueue=function(j,h){if(h===undefined){h=f.PRIORITY_DEFAULT
}var i=new g(j,h);return this.enqueueQueueItem(i)};d.enqueueQueueItem=function(h){if(this._items.indexOf(h)===-1){this._items.push(h)
}return h};d.dequeue=function(){this._heapSort();var i=this._items.length-1;var h=this._items[0];
this._items[0]=this._items[i];this._items.pop();return h};d.dequeueQueueItem=function(i){var h=this._items.indexOf(i);
if(h>-1){this._items.splice(h,1)}return i};d.peek=function(){if(this.count()==0){return null
}this._heapSort();return this._items[0]};d.isEmpty=function(){return this._items.length===0
};d.count=function(){return this._items.length};d.toString=function(){var j=["Queue total items: "+this.count()+"\n"];
for(var h=0;h<this.count();++h){j.push(this._items[h].toString()+"\n")}return j.join("")
};d._heapSort=function(){var h=0;for(var m=this._items.length-1;m>=0;m--){var n=m;
while(n>0){h++;var j=Math.floor((n-1)/2);if(this._items[n].compareTo(this._items[j])>=0){break
}var l=this._items[n];this._items[n]=this._items[j];this._items[j]=l;n=j}}};f.PRIORITY_LOW=10;
f.PRIORITY_DEFAULT=5;f.PRIORITY_HIGH=1;c.exports=f},{"./QueueItem":366}],366:[function(b,c,a){var g=0;
function f(i,h){this.priority=h;this.data=i;this.insertionOrder=g++}var d=f.prototype;
d.compareTo=function(h){if(this.priority<h.priority){return -1}else{if(this.priority>h.priority){return 1
}else{return(this.insertionOrder<h.insertionOrder)?-1:1}}};d.toString=function(){return"QueueItem {priority:"+this.priority+",\tdata:"+this.data+"\tinsertionOrder:"+this.insertionOrder+"}"
};c.exports=f},{}],367:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":368}],368:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],369:[function(c,f,b){var a=c("@marcom/ac-shared-instance").SharedInstance;
var g="ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",d="1.0.3";
var h=function(){this._currentID=0};h.prototype.getNewID=function(){this._currentID++;
return"raf:"+this._currentID};f.exports=a.share(g,d,h)},{"@marcom/ac-shared-instance":367}],370:[function(b,c,a){arguments[4][367][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":371,dup:367}],371:[function(b,c,a){arguments[4][368][0].apply(a,arguments)
},{dup:368}],372:[function(b,d,a){b("@marcom/ac-polyfills/performance/now");var f;
function c(g){g=g||{};this._reset();this._willRun=false;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._boundOnExternalAnimationFrame=this._onExternalAnimationFrame.bind(this)}f=c.prototype;
f.subscribe=function(g){if(this._nextFrameSubscribers[g.id]){return false}this._nextFrameSubscribers[g.id]=g;
this._nextFrameSubscriberCount++;this._run();return true};f.unsubscribe=function(g){if(!this._nextFrameSubscribers[g.id]){return false
}this._nextFrameSubscribers[g.id]=null;this._nextFrameSubscriberCount--;if(this._nextFrameSubscriberCount===0){this._cancel()
}return true};f.trigger=function(j,h){var g;for(g in this._subscribers){if(this._subscribers.hasOwnProperty(g)&&this._subscribers[g]!==null&&this._subscribers[g]._didDestroy===false){this._subscribers[g].trigger(j,h)
}}};f.destroy=function(){var g=this._cancel();this._subscribers=null;this._nextFrameSubscribers=null;
this._rafData=null;this._boundOnAnimationFrame=null;this._onExternalAnimationFrame=null;
return g};f.useExternalAnimationFrame=function(g){if(typeof g!=="boolean"){return
}var h=this._isUsingExternalAnimationFrame;if(g&&this._animationFrame){cancelAnimationFrame(this._animationFrame);
this._animationFrame=null}if(this._willRun&&!g&&!this._animationFrame){this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
}this._isUsingExternalAnimationFrame=g;if(g){return this._boundOnExternalAnimationFrame
}return h||false};f._run=function(){if(!this._willRun){this._willRun=true;if(this.lastFrameTime===0){this.lastFrameTime=performance.now()
}this._animationFrameActive=true;if(!this._isUsingExternalAnimationFrame){this._animationFrame=requestAnimationFrame(this._boundOnAnimationFrame)
}return true}};f._cancel=function(){var g=false;if(this._animationFrameActive){if(this._animationFrame){cancelAnimationFrame(this._animationFrame);
this._animationFrame=null}this._animationFrameActive=false;this._willRun=false;
g=true}if(!this._isRunning){this._reset()}return g};f._onSubscribersAnimationFrameStart=function(h){var g;
for(g in this._subscribers){if(this._subscribers.hasOwnProperty(g)&&this._subscribers[g]!==null&&this._subscribers[g]._didDestroy===false){this._subscribers[g]._onAnimationFrameStart(h)
}}};f._onSubscribersAnimationFrameEnd=function(h){var g;for(g in this._subscribers){if(this._subscribers.hasOwnProperty(g)&&this._subscribers[g]!==null&&this._subscribers[g]._didDestroy===false){this._subscribers[g]._onAnimationFrameEnd(h)
}}};f._onAnimationFrame=function(g){this._subscribers=this._nextFrameSubscribers;
this._nextFrameSubscribers={};this._nextFrameSubscriberCount=0;this._isRunning=true;
this._willRun=false;this._didRequestNextRAF=false;this._rafData.delta=g-this.lastFrameTime;
this.lastFrameTime=g;this._rafData.fps=0;if(this._rafData.delta>=1000){this._rafData.delta=0
}if(this._rafData.delta!==0){this._rafData.fps=1000/this._rafData.delta}this._rafData.time=g;
this._rafData.naturalFps=this._rafData.fps;this._rafData.timeNow=Date.now();this._onSubscribersAnimationFrameStart(this._rafData);
this.trigger("update",this._rafData);this.trigger("draw",this._rafData);this._onSubscribersAnimationFrameEnd(this._rafData);
if(!this._willRun){this._reset()}};f._onExternalAnimationFrame=function(g){if(!this._isUsingExternalAnimationFrame){return
}this._onAnimationFrame(g)};f._reset=function(){this._rafData={time:0,delta:0,fps:0,naturalFps:0,timeNow:0};
this._subscribers={};this._nextFrameSubscribers={};this._nextFrameSubscriberCount=0;
this._didEmitFrameData=false;this._animationFrame=null;this._animationFrameActive=false;
this._isRunning=false;this._shouldReset=false;this.lastFrameTime=0};d.exports=c
},{"@marcom/ac-polyfills/performance/now":undefined}],373:[function(c,g,b){var a=c("@marcom/ac-shared-instance").SharedInstance;
var h="ac-raf-executor:sharedRAFExecutorInstance",f="1.0.3";var d=c("./RAFExecutor");
g.exports=a.share(h,f,d)},{"./RAFExecutor":372,"@marcom/ac-shared-instance":370}],374:[function(f,g,d){var i;
var h=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;var c=f("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
var b=f("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
function a(j){j=j||{};h.call(this);this.id=b.getNewID();this.executor=j.executor||c;
this._reset();this._willRun=false;this._didDestroy=false}i=a.prototype=Object.create(h.prototype);
i.run=function(){if(!this._willRun){this._willRun=true;this.executor.subscribe(this);
return true}return false};i.cancel=function(){var j=false;if(this._willRun){this.executor.unsubscribe(this);
this._willRun=false;j=true}this._reset();return j};i.destroy=function(){var j=this.cancel();
this.executor.unsubscribe(this);this.executor=null;h.prototype.destroy.call(this);
this._didDestroy=true;return j};i.willRun=function(){return this._willRun};i.isRunning=function(){return this._isRunning
};i._onAnimationFrameStart=function(j){this._isRunning=true;this._willRun=false;
if(!this._didEmitFrameData){this._didEmitFrameData=true;this.trigger("start",j)
}};i._onAnimationFrameEnd=function(j){if(!this._willRun){this.trigger("stop",j);
this._reset()}};i._reset=function(){this._didEmitFrameData=false;this._isRunning=false
};g.exports=a},{"@marcom/ac-event-emitter-micro":139,"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance":369,"@marcom/ac-raf-executor/sharedRAFExecutorInstance":373}],375:[function(d,f,c){var h;
var a=d("./RAFEmitter");var i=d("@marcom/ac-object/clone");var g=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function b(k,j){g.call(this);j=j||{};this._fps=k||0;this._delta=0;this._currentFps=0;
this._rafEmitter=j.rafEmitter||new a();this._lastThrottledTime=0;this._didEmitFrameData=false;
this._rafEmitterEvent=null;this._shouldDraw=false;this._boundOnRAFEmitterUpdate=this._onRAFEmitterUpdate.bind(this);
this._boundOnRAFEmitterDraw=this._onRAFEmitterDraw.bind(this);this._boundOnRAFEmitterStop=this._onRAFEmitterStop.bind(this);
this._rafEmitter.on("update",this._boundOnRAFEmitterUpdate);this._rafEmitter.on("draw",this._boundOnRAFEmitterDraw);
this._rafEmitter.on("stop",this._boundOnRAFEmitterStop)}h=b.prototype=Object.create(g.prototype);
h.setFps=function(j){if(j===this._fps){return false}this._fps=j;return true};h.getFps=function(){return this._fps
};h.run=function(){return this._rafEmitter.run()};h.cancel=function(){return this._rafEmitter.cancel()
};h.willRun=function(){return this._rafEmitter.willRun()};h.isRunning=function(){return this._rafEmitter.isRunning()
};h.destroy=function(){var j=this._rafEmitter.destroy();g.prototype.destroy.call(this);
this._rafEmitter=null;this._boundOnRAFEmitterUpdate=null;this._boundOnRAFEmitterDraw=null;
this._boundOnRAFEmitterStop=null;this._rafEmitterEvent=null;return j};h._onRAFEmitterUpdate=function(j){if(this._lastThrottledTime===0){this._lastThrottledTime=this._rafEmitter.executor.lastFrameTime
}this._delta=j.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}this._currentFps=1000/this._delta;if(this._currentFps>this._fps){this._rafEmitter.run();
return}this._rafEmitterEvent=i(j);this._rafEmitterEvent.delta=this._delta;this._rafEmitterEvent.fps=this._currentFps;
this._lastThrottledTime=this._rafEmitterEvent.time;this._shouldDraw=true;if(!this._didEmitFrameData){this.trigger("start",this._rafEmitterEvent);
this._didEmitFrameData=true}this.trigger("update",this._rafEmitterEvent)};h._onRAFEmitterDraw=function(){if(this._shouldDraw){this._shouldDraw=false;
this.trigger("draw",this._rafEmitterEvent)}};h._onRAFEmitterStop=function(){this._lastThrottledTime=0;
this._didEmitFrameData=false;this.trigger("stop",this._rafEmitterEvent)};f.exports=b
},{"./RAFEmitter":374,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-object/clone":360}],376:[function(b,d,a){var c=b("./singleCall");
d.exports=c("draw")},{"./singleCall":377}],377:[function(d,f,c){var a=d("./RAFEmitter");
var b=d("./ThrottledRAFEmitter");f.exports=function(g){return function(j,i){var h;
if(i){h=new b(i)}else{h=new a()}h.once(g,function(k){j(k);h.destroy();j=h=null});
h.run()}}},{"./RAFEmitter":374,"./ThrottledRAFEmitter":375}],378:[function(b,d,a){var c=b("./singleCall");
d.exports=c("update")},{"./singleCall":377}],379:[function(b,a,h){var d=b("@marcom/ac-object/defaults");
var f=b("@marcom/ac-queue").LiveQueue;var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var g=b("@marcom/ac-raf-emitter/update");var j=b("@marcom/ac-raf-emitter/draw");
var c={container:document.body,includeContainer:false};var k={loadingPoolSize:8,timeout:null,imageDataAttribute:"data-progressive-image",imageAnimate:true,imageAnimateClass:"progressive-image-animated"};
m.Events={ImageLoad:"image-load",Complete:"complete"};function m(n){l.call(this);
this.options=d(c,n);this.loadingOptions=null;this.els=[];this.loadingQueue=null;
this._queueItems=[];this._queueItemsObj={};this._loadOrder=[];this._timeout=null;
this._didCallLoad=false}var i=m.prototype=Object.create(l.prototype);i.load=function(n){if(this._didCallLoad){return
}this._didCallLoad=true;this.loadingOptions=d(k,n);this.loadingQueue=new f(this.loadingOptions.loadingPoolSize);
this.els=Array.from(this._getProgressiveImageElements());if(this.options.includeContainer&&this.options.container.hasAttribute(this._getProgressiveImageDataAttribute())){this.els.unshift(this.options.container)
}j(function(){var p,o=this.els.length,q;for(p=0;p<o;p++){q={queueItem:this.loadingQueue.enqueue(this._loadNextItem.bind(this,p),p),el:this.els[p],id:p};
this._queueItems.push(q);this._queueItemsObj[p]=q;if(this.loadingOptions.imageAnimate){this.els[p].classList.add(this.loadingOptions.imageAnimateClass)
}}g(function(){this.loadingQueue.start();if(typeof this.loadingOptions.timeout==="number"){this._timeout=setTimeout(this.cancel.bind(this),this.loadingOptions.timeout)
}}.bind(this))}.bind(this))};i.setVisible=function(n){return new Promise(function(p,o){j(function(){n.removeAttribute(this._getProgressiveImageDataAttribute());
p();n=null}.bind(this))}.bind(this))};i.cancel=function(){if(this.els){var o,n=this.els.length;
for(o=0;o<n;o++){this.setVisible(this.els[o]);if(this.loadingOptions.imageAnimate){j(function(){this.els[o].setAttribute("data-progressive-image-loaded","")
}.bind(this,o))}}}this._handleLoadingComplete()};i.destroy=function(){this.cancel();
this.off();l.prototype.destroy.call(this)};i._loadNextItem=function(n){return new Promise(function(o,q,p){var r=this._queueItemsObj[o];
this._loadAndSetVisible(r.el).then(function(){var s=this._queueItems.indexOf(r);
this._queueItems.splice(s,1);this._queueItemsObj[r.id]=null;q();this._handleImageLoad(r.el);
r=q=null;if(this.loadingQueue.count()===1){this._handleLoadingComplete()}}.bind(this))
}.bind(this,n))};i._loadAndSetVisible=function(n){return new Promise(function(p,o){this.setVisible(n).then(function(){this._getBackgroundImageSrc(n).then(function(q){this._loadImage(q).then(p);
n=null}.bind(this))}.bind(this))}.bind(this))};i._getBackgroundImageSrc=function(n){return new Promise(function(p,o){g(function(){var q=n.currentStyle;
if(!q){q=window.getComputedStyle(n,false)}n=null;if(q.backgroundImage.indexOf("url(")===0){p(q.backgroundImage.slice(4,-1).replace(/"/g,""));
return}p(null)}.bind(this))}.bind(this))};i._getProgressiveImageDataAttribute=function(){return this.loadingOptions.imageDataAttribute
};i._getProgressiveImageCSSQuery=function(){return"["+this._getProgressiveImageDataAttribute()+"]"
};i._getProgressiveImageElements=function(){return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery())||[]
};i._loadImage=function(n){return new Promise(this._loadImagePromiseFunc.bind(this,n))
};i._loadImagePromiseFunc=function(r,q,p){function o(){this.removeEventListener("load",o);
q(this);q=null}if(!r){q(null);return}var n=new Image();n.addEventListener("load",o);
n.src=r};i._clearTimeout=function(){if(this._timeout){window.clearTimeout(this._timeout);
this._timeout=null}};i._handleImageLoad=function(n){j(function(){this.trigger(m.Events.ImageLoad,n);
if(this.loadingOptions.imageAnimate){n.setAttribute("data-progressive-image-loaded","")
}n=null}.bind(this))};i._handleLoadingComplete=function(){this.loadingQueue.stop();
this._clearTimeout();this.trigger(m.Events.Complete)};a.exports=m},{"@marcom/ac-event-emitter-micro":139,"@marcom/ac-object/defaults":361,"@marcom/ac-queue":363,"@marcom/ac-raf-emitter/draw":376,"@marcom/ac-raf-emitter/update":378}],380:[function(b,c,a){c.exports={log:b("./ac-console/log")}
},{"./ac-console/log":381}],381:[function(d,f,b){var a="f7c9180f-5c45-47b4-8de4-428015f096c0";
var c=!!(function(){try{return window.localStorage.getItem(a)}catch(h){}}());f.exports=function g(){if(window.console&&typeof console.log!=="undefined"&&c){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],382:[function(b,c,a){arguments[4][224][0].apply(a,arguments)},{dup:224}],383:[function(b,c,a){arguments[4][225][0].apply(a,arguments)
},{dup:225}],384:[function(b,c,a){arguments[4][226][0].apply(a,arguments)},{dup:226}],385:[function(b,c,a){c.exports=10
},{}],386:[function(b,c,a){arguments[4][124][0].apply(a,arguments)},{dup:124}],387:[function(b,c,a){arguments[4][228][0].apply(a,arguments)
},{dup:228}],388:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),indexOf:b("./indexOf"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":382,"./DOCUMENT_FRAGMENT_NODE":383,"./DOCUMENT_NODE":384,"./DOCUMENT_TYPE_NODE":385,"./ELEMENT_NODE":386,"./TEXT_NODE":387,"./createDocumentFragment":389,"./filterByNodeType":390,"./hasAttribute":391,"./indexOf":392,"./insertAfter":393,"./insertBefore":394,"./insertFirstChild":395,"./insertLastChild":396,"./isComment":399,"./isDocument":400,"./isDocumentFragment":401,"./isDocumentType":402,"./isElement":403,"./isNode":404,"./isNodeList":405,"./isTextNode":406,"./remove":407,"./replace":408}],389:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],390:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Array/prototype.filter");var g=d("./internal/isNodeType");
var a=d("./ELEMENT_NODE");f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);
return i.filter(function(j){return g(j,h)})}},{"./ELEMENT_NODE":386,"./internal/isNodeType":397,"@marcom/ac-polyfills/Array/prototype.filter":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined}],391:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],392:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.indexOf");
c("@marcom/ac-polyfills/Array/prototype.slice");var g=c("./internal/validate");
var a=c("./filterByNodeType");d.exports=function f(k,i){var h=k.parentNode;var j;
if(!h){return 0}j=h.childNodes;if(i!==false){j=a(j,i)}else{j=Array.prototype.slice.call(j)
}return j.indexOf(k)}},{"./filterByNodeType":390,"./internal/validate":398,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined}],393:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":398}],394:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":398}],395:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":398}],396:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":398}],397:[function(b,c,a){arguments[4][125][0].apply(a,arguments)
},{"../isNode":404,dup:125}],398:[function(b,c,a){arguments[4][230][0].apply(a,arguments)
},{"../COMMENT_NODE":382,"../DOCUMENT_FRAGMENT_NODE":383,"../ELEMENT_NODE":386,"../TEXT_NODE":387,"./isNodeType":397,dup:230}],399:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":382,"./internal/isNodeType":397}],400:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":384,"./internal/isNodeType":397}],401:[function(b,c,a){arguments[4][231][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":383,"./internal/isNodeType":397,dup:231}],402:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":385,"./internal/isNodeType":397}],403:[function(b,c,a){arguments[4][126][0].apply(a,arguments)
},{"./ELEMENT_NODE":386,"./internal/isNodeType":397,dup:126}],404:[function(b,c,a){arguments[4][127][0].apply(a,arguments)
},{dup:127}],405:[function(b,c,a){arguments[4][128][0].apply(a,arguments)},{dup:128}],406:[function(c,d,a){var g=c("./internal/isNodeType");
var b=c("./TEXT_NODE");d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":387,"./internal/isNodeType":397}],407:[function(b,c,a){arguments[4][234][0].apply(a,arguments)
},{"./internal/validate":398,dup:234}],408:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":398}],409:[function(b,c,a){arguments[4][237][0].apply(a,arguments)
},{"@marcom/ac-dom-nodes/COMMENT_NODE":382,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":383,"@marcom/ac-dom-nodes/DOCUMENT_NODE":384,"@marcom/ac-dom-nodes/ELEMENT_NODE":386,"@marcom/ac-dom-nodes/TEXT_NODE":387,"@marcom/ac-dom-nodes/isNode":404,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined,dup:237}],410:[function(b,c,a){arguments[4][240][0].apply(a,arguments)
},{"./internal/validate":409,"./shims/querySelectorAll":411,"@marcom/ac-polyfills/Array/prototype.slice":undefined,dup:240}],411:[function(b,c,a){arguments[4][243][0].apply(a,arguments)
},{"@marcom/ac-dom-nodes/isDocumentFragment":401,"@marcom/ac-dom-nodes/isElement":403,"@marcom/ac-dom-nodes/remove":407,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined,dup:243}],412:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{dup:63}],413:[function(b,c,a){arguments[4][64][0].apply(a,arguments)},{"./internal/expose":412,dup:64}],414:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":415,"./create":416,"./defaults":417,"./extend":418,"./getPrototypeOf":419,"./isDate":420,"./isEmpty":421,"./isRegExp":422,"./toQueryParameters":423}],415:[function(b,c,a){arguments[4][65][0].apply(a,arguments)
},{"./extend":418,"@marcom/ac-console/log":413,"@marcom/ac-polyfills/Array/isArray":undefined,dup:65}],416:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"@marcom/ac-console/log":413,dup:66}],417:[function(b,c,a){arguments[4][135][0].apply(a,arguments)
},{"./extend":418,"@marcom/ac-console/log":413,dup:135}],418:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{"@marcom/ac-console/log":413,"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:67}],419:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
var g=c("@marcom/ac-console/log");d.exports=function f(j){g("`@marcom/ac-object/getPrototypeOf` is deprecated. Use native `Object.create`.");
if(Object.getPrototypeOf){return Object.getPrototypeOf(j)}else{if(typeof j!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return j.__proto__}else{var h=j.constructor;
var i;if(a.call(j,"constructor")){i=h;if(!(delete j.constructor)){return null}h=j.constructor;
j.constructor=i}return h?h.prototype:null}}}}},{"@marcom/ac-console/log":413}],420:[function(b,d,a){var f=b("@marcom/ac-console/log");
d.exports=function c(g){f("`@marcom/ac-object/isDate` is deprecated. Write own implementation if needed.");
return Object.prototype.toString.call(g)==="[object Date]"}},{"@marcom/ac-console/log":413}],421:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(g){var h;if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],422:[function(c,d,b){var f=c("@marcom/ac-console/log");
d.exports=function a(g){f("`@marcom/ac-object/isRegExp` is deprecated. Write own implementation if needed.");
return window.RegExp?g instanceof RegExp:false}},{"@marcom/ac-console/log":413}],423:[function(c,f,b){var a=c("@marcom/ac-url/joinSearchParams");
var g=c("@marcom/ac-console/log");f.exports=function d(h){g("`@marcom/ac-object/toQueryParameters` is deprecated. Use `@marcom/ac-url/joinSearchParams`");
if(typeof h!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a(h,false)}},{"@marcom/ac-console/log":413,"@marcom/ac-url/joinSearchParams":437}],424:[function(b,c,a){c.exports={adler32:b("./ac-checksum/adler32")}
},{"./ac-checksum/adler32":425}],425:[function(b,c,a){c.exports=function d(h){var f=65521;
var k=1;var g=0;var l;var j;for(j=0;j<h.length;j+=1){l=h.charCodeAt(j);k=(k+l)%f;
g=(g+k)%f}return(g<<16)|k}},{}],426:[function(d,g,a){var h="ac-storage-";var c=d("./ac-storage/Item");
var i=d("./ac-storage/Storage");var b=d("./ac-storage/Storage/storageAvailable");
var f=new i(h);f.Item=c;f.storageAvailable=b;g.exports=f},{"./ac-storage/Item":427,"./ac-storage/Storage":434,"./ac-storage/Storage/storageAvailable":436}],427:[function(d,b,j){var a=d("@marcom/ac-checksum").adler32;
var i=d("@marcom/ac-object");var k=d("./Item/apis");var c=d("./Item/createExpirationDate");
var l=d("./Item/encoder");var h=1000*60*60*24;var g=30;function f(m){if(!m||typeof m!=="string"){throw"ac-storage/Item: Key for Item must be a string"
}this._key=m;this._checksum=null;this._expirationDate=null;this._metadata=null;
this._value=null;this.setExpirationDate(f.createExpirationDate(g))}f.prototype={save:function(){var o;
var n;var p;var m={};o=k.best(m);if(o){if(this.value()===null&&typeof o.removeItem==="function"){return o.removeItem(this.key())
}else{if(typeof o.setItem==="function"){n=this.__state();p=l.encode(n);return o.setItem(this.key(),p,this.expirationDate())
}}}return false},load:function(){var m;var n;m=k.best();if(m&&typeof m.getItem==="function"){n=m.getItem(this.key());
this.__updateState(l.decode(n));if(n===null||this.hasExpired()){this.remove();return false
}else{return true}}else{return false}},remove:function(){var m;this.__updateState(null);
m=k.best();return m.removeItem(this.key())},hasExpired:function(m){if(((this.expirationDate()!==false)&&(this.expirationDate()<=Date.now()))||!this.__checksumIsValid(m)){return true
}return false},value:function(m){if(this.hasExpired(m)){this.remove()}return this._value
},setValue:function(m){this._value=m},setChecksum:function(m){if(m===null){this._checksum=m
}else{if(typeof m==="string"&&m!==""){this._checksum=a(m)}else{throw"ac-storage/Item#setChecksum: Checksum must be null or a string"
}}},checksum:function(){return this._checksum},setExpirationDate:function(m){if(m===null){m=f.createExpirationDate(g)
}if(m!==false){if(typeof m==="string"){m=new Date(m).getTime()}if(m&&typeof m.getTime==="function"){m=m.getTime()
}if(!m||isNaN(m)){throw"ac-storage/Item: Invalid date object provided as expirationDate"
}m-=m%h;if(m<=Date.now()){m=false}}this._expirationDate=m},expirationDate:function(){return this._expirationDate
},__state:function(){var m={};m.checksum=this.checksum();m.expirationDate=this.expirationDate();
m.metadata=this.metadata();m.value=this.value();return m},__updateState:function(m){var o;
var n;if(m===null){m={checksum:null,expirationDate:null,metadata:null,value:null}
}for(o in m){n="set"+o.charAt(0).toUpperCase()+o.slice(1);if(typeof this[n]==="function"){this[n](m[o])
}}},__checksumIsValid:function(m){if(m){m=a(m);if(!this.checksum()){throw"ac-storage/Item: No checksum exists to determine if this Item’s value is valid. Try loading context from persistent storage first."
}else{if(m===this.checksum()){return true}}return false}else{if(this.checksum()){throw"ac-storage/Item: No checksum passed, but checksum exists in Item’s state."
}}return true},setKey:function(){throw"ac-storage/Item: Cannot set key /after/ initialization!"
},key:function(){return this._key},metadata:function(){return this._metadata},setMetadata:function(m){this._metadata=m
}};f.createExpirationDate=c;b.exports=f},{"./Item/apis":428,"./Item/createExpirationDate":431,"./Item/encoder":432,"@marcom/ac-checksum":424,"@marcom/ac-object":414}],428:[function(d,g,b){var h=d("@marcom/ac-console").log;
var c=d("./apis/localStorage");var a=d("./apis/userData");var f={_list:[c,a],list:function(){return this._list
},all:function(k){h("ac-storage/Item/apis.all: Method is deprecated");var i=Array.prototype.slice.call(arguments,1);
if(typeof k!=="string"){throw"ac-storage/Item/apis.all: Method name must be provided as a string"
}var j=this.list().map(function(l){if(l.available()){if(typeof l[k]==="function"){return l[k].apply(l,i)
}else{throw"ac-storage/Item/apis.all: Method not available on api"}}return false
});return j},best:function(){var i=null;this.list().some(function(j){if(j.available()){i=j;
return true}});return i}};g.exports=f},{"./apis/localStorage":429,"./apis/userData":430,"@marcom/ac-console":380}],429:[function(d,a,g){var c=d("@marcom/ac-feature");
var b;try{var h=window.localStorage;var j=window.sessionStorage}catch(i){b=false
}var f={name:"localStorage",available:function(){try{h.setItem("localStorage",1);
h.removeItem("localStorage")}catch(k){b=false}if(b===undefined){b=c.localStorageAvailable()
}return b},getItem:function(k){return h.getItem(k)||j.getItem(k)},setItem:function(l,m,k){if(k===false){j.setItem(l,m)
}else{h.setItem(l,m)}return true},removeItem:function(k){h.removeItem(k);j.removeItem(k);
return true}};a.exports=f},{"@marcom/ac-feature":155}],430:[function(d,f,c){var g=d("@marcom/ac-dom-nodes");
var i=1000*60*60*24;var a="ac-storage";var h;var b={name:"userData",available:function(){if(h===undefined){h=false;
if(document&&document.body){var j=this.element();if(g.isElement(j)&&j.addBehavior!==undefined){h=true
}if(h===false){this.removeElement()}}else{throw"ac-storage/Item/apis/userData: DOM must be ready before using #userData."
}}return h},getItem:function(j){var k=this.element();k.load(a);return k.getAttribute(j)||null
},setItem:function(k,m,j){var l=this.element();l.setAttribute(k,m);if(j===false){j=new Date(Date.now()+i)
}if(j&&typeof j.toUTCString==="function"){l.expires=j.toUTCString()}l.save(a);return true
},removeItem:function(j){var k=this.element();k.removeAttribute(j);k.save(a);return true
},_element:null,element:function(){if(this._element===null){this._element=document.createElement("meta");
this._element.setAttribute("id","userData");this._element.setAttribute("name","ac-storage");
this._element.style.behavior="url('#default#userData')";document.getElementsByTagName("head")[0].appendChild(this._element)
}return this._element},removeElement:function(){if(this._element!==null){g.remove(this._element)
}return this._element}};f.exports=b},{"@marcom/ac-dom-nodes":388}],431:[function(b,c,a){var f=1000*60*60*24;
var d=function(h,g){if(typeof h!=="number"){throw"ac-storage/Item/createExpirationDate: days parameter must be a number."
}if(g===undefined||typeof g==="number"){g=g===undefined?new Date():new Date(g)}if(typeof g.toUTCString!=="function"||g.toUTCString()==="Invalid Date"){throw"ac-storage/Item/createExpirationDate: fromDate must be a date object, timestamp, or undefined."
}g.setTime(g.getTime()+(h*f));return g.getTime()};c.exports=d},{}],432:[function(b,c,a){var f=b("./encoder/compressor");
var d={encode:function(i){var g;var h;h=f.compress(i);try{g=JSON.stringify(h)}catch(j){}if(!this.__isValidStateObjString(g)){throw"ac-storage/Item/encoder/encode: state object is invalid or cannot be saved as string"
}return g},decode:function(g){var h;var i;if(!this.__isValidStateObjString(g)){if(g===undefined||g===null||g===""){return null
}throw"ac-storage/Item/encoder/decode: state string does not contain a valid state object"
}try{h=JSON.parse(g)}catch(j){throw"ac-storage/Item/encoder/decode: Item state object could not be decoded"
}i=f.decompress(h);return i},__isValidStateObjString:function(g){try{if(g!==undefined&&g.substring(0,1)==="{"){return true
}return false}catch(h){return false}}};c.exports=d},{"./encoder/compressor":433}],433:[function(b,c,a){var g=1000*60*60*24;
var d=14975;var f={mapping:{key:"k",checksum:"c",expirationDate:"e",metadata:"m",value:"v"},compress:function(j){var h={};
var i=f.mapping;for(var l in i){if(j.hasOwnProperty(l)&&j[l]){if(l==="expirationDate"){var k=this.millisecondsToOffsetDays(j[l]);
h[i[l]]=k}else{h[i[l]]=j[l]}}}return h},decompress:function(h){var k={};var j=f.mapping;
for(var l in j){if(h.hasOwnProperty(j[l])){if(l==="expirationDate"){var i=this.offsetDaysToMilliseconds(h[j[l]]);
k[l]=i}else{k[l]=h[j[l]]}}}return k},millisecondsToOffsetDays:function(h){return Math.floor(h/g)-d
},offsetDaysToMilliseconds:function(h){return(h+d)*g}};c.exports=f},{}],434:[function(g,h,d){var c=g("@marcom/ac-object");
var f=g("./Item/apis/localStorage");var b=g("./Storage/registry");var a={};function i(k,j){this._namespace=k||"";
this._options=c.extend(c.clone(a),j||{})}i.prototype={getItem:function(j){var k=this.__item(j);
k.load();return k.value()},setItem:function(j,l){var k=this.__item(j);if(l===undefined){throw"ac-storage/Storage#setItem: Must provide value to set key to. Use #removeItem to remove."
}k.setValue(l);return k.save()},removeItem:function(j){var k=this.__item(j);b.remove(k.key(),true);
return k.save()},removeExpired:function(){var p;var n;if(f.available()){for(n=0;
n<window.localStorage.length;n++){p=this.__item(window.localStorage.key(n));if(p.hasExpired()&&JSON.parse(window.localStorage[window.localStorage.key(n)]).v!=="undefined"){p.remove()
}}}else{var l="ac-storage";var o=document.getElementById("userData");o.load(l);
var k;var q=o.xmlDocument;var m=q.firstChild.attributes;var j=m.length;n=-1;while(++n<j){k=m[n];
p=this.__item(k.nodeName);if(p.hasExpired()&&JSON.parse(k.nodeValue).v!=="undefined"){p.remove()
}}}},__item:function(j){if(typeof j!=="string"||j===""){throw"ac-storage/Storage: Key must be a String."
}var k=b.item(this.namespace()+j);return k},namespace:function(){return this._namespace
},setNamespace:function(j){this._namespace=j},options:function(){return this._namespace
},setOptions:function(j){this._namespace=j}};h.exports=i},{"./Item/apis/localStorage":429,"./Storage/registry":435,"@marcom/ac-object":414}],435:[function(f,g,c){var d=f("../Item");
var b={};var a={item:function(h){var i=b[h];if(!i){i=this.register(h)}return i},register:function(h){var i=b[h];
if(!i){i=new d(h);b[h]=i}return i},clear:function(i){var h;for(h in b){this.remove(h,i)
}return true},remove:function(h,i){var j=b[h];if(j&&!!i){j.remove()}b[h]=null;return true
}};g.exports=a},{"../Item":427}],436:[function(c,f,a){var d=c("../Item/apis");var g;
f.exports=function b(){if(g!==undefined){return g}g=!!d.best();return g}},{"../Item/apis":428}],437:[function(d,f,c){var a=d("qs");
f.exports=function b(h,g){var i=a.stringify(h,{strictNullHandling:true});if(i&&g!==false){i="?"+i
}return i}},{qs:438}],438:[function(b,d,a){var g=b("./stringify");var c=b("./parse");
var f={};d.exports={stringify:g,parse:c}},{"./parse":439,"./stringify":440}],439:[function(b,c,a){var f=b("./utils");
var d={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000,strictNullHandling:false,plainObjects:false,allowPrototypes:false};
d.parseValues=function(m,q){var k={};var j=m.split(q.delimiter,q.parameterLimit===Infinity?undefined:q.parameterLimit);
for(var l=0,o=j.length;l<o;++l){var g=j[l];var n=g.indexOf("]=")===-1?g.indexOf("="):g.indexOf("]=")+1;
if(n===-1){k[f.decode(g)]="";if(q.strictNullHandling){k[f.decode(g)]=null}}else{var p=f.decode(g.slice(0,n));
var h=f.decode(g.slice(n+1));if(!Object.prototype.hasOwnProperty.call(k,p)){k[p]=h
}else{k[p]=[].concat(k[p]).concat(h)}}}return k};d.parseObject=function(l,n,k){if(!l.length){return n
}var g=l.shift();var m;if(g==="[]"){m=[];m=m.concat(d.parseObject(l,n,k))}else{m=k.plainObjects?Object.create(null):{};
var j=g[0]==="["&&g[g.length-1]==="]"?g.slice(1,g.length-1):g;var i=parseInt(j,10);
var h=""+i;if(!isNaN(i)&&g!==j&&h===j&&i>=0&&(k.parseArrays&&i<=k.arrayLimit)){m=[];
m[i]=d.parseObject(l,n,k)}else{m[j]=d.parseObject(l,n,k)}}return m};d.parseKeys=function(j,n,g){if(!j){return
}if(g.allowDots){j=j.replace(/\.([^\.\[]+)/g,"[$1]")}var k=/^([^\[\]]*)/;var o=/(\[[^\[\]]*\])/g;
var m=k.exec(j);var l=[];if(m[1]){if(!g.plainObjects&&Object.prototype.hasOwnProperty(m[1])){if(!g.allowPrototypes){return
}}l.push(m[1])}var h=0;while((m=o.exec(j))!==null&&h<g.depth){++h;if(!g.plainObjects&&Object.prototype.hasOwnProperty(m[1].replace(/\[|\]/g,""))){if(!g.allowPrototypes){continue
}}l.push(m[1])}if(m){l.push("["+j.slice(m.index)+"]")}return d.parseObject(l,n,g)
};c.exports=function(k,p){p=p||{};p.delimiter=typeof p.delimiter==="string"||f.isRegExp(p.delimiter)?p.delimiter:d.delimiter;
p.depth=typeof p.depth==="number"?p.depth:d.depth;p.arrayLimit=typeof p.arrayLimit==="number"?p.arrayLimit:d.arrayLimit;
p.parseArrays=p.parseArrays!==false;p.allowDots=p.allowDots!==false;p.plainObjects=typeof p.plainObjects==="boolean"?p.plainObjects:d.plainObjects;
p.allowPrototypes=typeof p.allowPrototypes==="boolean"?p.allowPrototypes:d.allowPrototypes;
p.parameterLimit=typeof p.parameterLimit==="number"?p.parameterLimit:d.parameterLimit;
p.strictNullHandling=typeof p.strictNullHandling==="boolean"?p.strictNullHandling:d.strictNullHandling;
if(k===""||k===null||typeof k==="undefined"){return p.plainObjects?Object.create(null):{}
}var l=typeof k==="string"?d.parseValues(k,p):k;var h=p.plainObjects?Object.create(null):{};
var o=Object.keys(l);for(var j=0,m=o.length;j<m;++j){var n=o[j];var g=d.parseKeys(n,l[n],p);
h=f.merge(h,g,p)}return f.compact(h)}},{"./utils":441}],440:[function(b,c,a){var f=b("./utils");
var d={delimiter:"&",arrayPrefixGenerators:{brackets:function(h,g){return h+"[]"
},indices:function(h,g){return h+"["+g+"]"},repeat:function(h,g){return h}},strictNullHandling:false};
d.stringify=function(l,n,g,j,h){if(typeof h==="function"){l=h(n,l)}else{if(f.isBuffer(l)){l=l.toString()
}else{if(l instanceof Date){l=l.toISOString()}else{if(l===null){if(j){return f.encode(n)
}l=""}}}}if(typeof l==="string"||typeof l==="number"||typeof l==="boolean"){return[f.encode(n)+"="+f.encode(l)]
}var q=[];if(typeof l==="undefined"){return q}var k=Array.isArray(h)?h:Object.keys(l);
for(var m=0,o=k.length;m<o;++m){var p=k[m];if(Array.isArray(l)){q=q.concat(d.stringify(l[p],g(n,p),g,j,h))
}else{q=q.concat(d.stringify(l[p],n+"["+p+"]",g,j,h))}}return q};c.exports=function(o,s){s=s||{};
var j=typeof s.delimiter==="undefined"?d.delimiter:s.delimiter;var l=typeof s.strictNullHandling==="boolean"?s.strictNullHandling:d.strictNullHandling;
var n;var k;if(typeof s.filter==="function"){k=s.filter;o=k("",o)}else{if(Array.isArray(s.filter)){n=k=s.filter
}}var r=[];if(typeof o!=="object"||o===null){return""}var g;if(s.arrayFormat in d.arrayPrefixGenerators){g=s.arrayFormat
}else{if("indices" in s){g=s.indices?"indices":"repeat"}else{g="indices"}}var h=d.arrayPrefixGenerators[g];
if(!n){n=Object.keys(o)}for(var m=0,p=n.length;m<p;++m){var q=n[m];r=r.concat(d.stringify(o[q],q,h,l,k))
}return r.join(j)}},{"./utils":441}],441:[function(b,c,a){var f={};f.hexTable=new Array(256);
for(var d=0;d<256;++d){f.hexTable[d]="%"+((d<16?"0":"")+d.toString(16)).toUpperCase()
}a.arrayToObject=function(k,h){var l=h.plainObjects?Object.create(null):{};for(var j=0,g=k.length;
j<g;++j){if(typeof k[j]!=="undefined"){l[j]=k[j]}}return l};a.merge=function(o,n,h){if(!n){return o
}if(typeof n!=="object"){if(Array.isArray(o)){o.push(n)}else{if(typeof o==="object"){o[n]=true
}else{o=[o,n]}}return o}if(typeof o!=="object"){o=[o].concat(n);return o}if(Array.isArray(o)&&!Array.isArray(n)){o=a.arrayToObject(o,h)
}var l=Object.keys(n);for(var g=0,j=l.length;g<j;++g){var i=l[g];var m=n[i];if(!Object.prototype.hasOwnProperty.call(o,i)){o[i]=m
}else{o[i]=a.merge(o[i],m,h)}}return o};a.decode=function(h){try{return decodeURIComponent(h.replace(/\+/g," "))
}catch(g){return h}};a.encode=function(k){if(k.length===0){return k}if(typeof k!=="string"){k=""+k
}var h="";for(var j=0,g=k.length;j<g;++j){var l=k.charCodeAt(j);if(l===45||l===46||l===95||l===126||(l>=48&&l<=57)||(l>=65&&l<=90)||(l>=97&&l<=122)){h+=k[j];
continue}if(l<128){h+=f.hexTable[l];continue}if(l<2048){h+=f.hexTable[192|(l>>6)]+f.hexTable[128|(l&63)];
continue}if(l<55296||l>=57344){h+=f.hexTable[224|(l>>12)]+f.hexTable[128|((l>>6)&63)]+f.hexTable[128|(l&63)];
continue}++j;l=65536+(((l&1023)<<10)|(k.charCodeAt(j)&1023));h+=f.hexTable[240|(l>>18)]+f.hexTable[128|((l>>12)&63)]+f.hexTable[128|((l>>6)&63)]+f.hexTable[128|(l&63)]
}return h};a.compact=function(o,j){if(typeof o!=="object"||o===null){return o}j=j||[];
var n=j.indexOf(o);if(n!==-1){return j[n]}j.push(o);if(Array.isArray(o)){var g=[];
for(var l=0,h=o.length;l<h;++l){if(typeof o[l]!=="undefined"){g.push(o[l])}}return g
}var m=Object.keys(o);for(l=0,h=m.length;l<h;++l){var k=m[l];o[k]=a.compact(o[k],j)
}return o};a.isRegExp=function(g){return Object.prototype.toString.call(g)==="[object RegExp]"
};a.isBuffer=function(g){if(g===null||typeof g==="undefined"){return false}return !!(g.constructor&&g.constructor.isBuffer&&g.constructor.isBuffer(g))
}},{}],442:[function(c,d,b){var a=c("qs");d.exports=function f(g){g=g||window.location.search;
g=g.replace(/^\?/,"");return a.parse(g,{strictNullHandling:true})}},{qs:438}],443:[function(c,d,b){var f=c("./parseSearchParams");
d.exports=function a(g){var i;var h;if(!g){i=window.location}else{if(window.URL){i=new URL(g,window.location)
}else{i=document.createElement("a");i.href=g;i.href=i.href}}return{hash:i.hash,host:i.host,hostname:i.hostname,href:i.href,origin:i.origin||i.protocol+"//"+i.host,pathname:i.pathname,port:i.port,protocol:i.protocol,search:i.search,searchParams:f(i.search)}
}},{"./parseSearchParams":442}],444:[function(c,b,d){var j=c("@marcom/ac-console").log;
var a=c("@marcom/ac-dom-traversal/querySelectorAll");var h=c("./PromoManager");
var i=c("./PromoManager/selectors");function g(l,k){this._options=k||{};this._el=l;
this._selectors=i;this.promoManagers={};this._initialize()}var f=g.prototype;f._setUpPromoManagersProp=function(){var l=this._selectors.manager.types.length;
for(var k=0;k<l;k++){this.promoManagers[this._selectors.manager.types[k]]=[]}};
f._initialize=function(){var l=a(this._selectors.manager.selector,this._el);var m=l.length;
var n;this._setUpPromoManagersProp();for(var k=0;k<m;k++){n=l[k].getAttribute(this._selectors.manager.dataAttribute);
if(this.promoManagers[n]){this.promoManagers[n].push(new h(l[k],this._options))
}else{j(n+" is not a valid manager type.")}}};b.exports=g},{"./PromoManager":445,"./PromoManager/selectors":448,"@marcom/ac-console":380,"@marcom/ac-dom-traversal/querySelectorAll":410}],445:[function(c,b,f){var j=c("@marcom/ac-url/parseURL");
var a=c("@marcom/ac-dom-traversal/querySelectorAll");var d=c("./PromoManager/History");
var i=c("./PromoManager/Promo");var k=c("./PromoManager/selectors");function h(m,l){this._options=l;
this._id=m.id;this._selectors=k;this._history=null;this._type=null;this.el=m;this.promos={all:null,current:null};
this._removeManagerAttr=this._removeManagerAttr.bind(this);this._initialize()}var g=h.prototype;
g.setCurrentPromo=function(l){this.promos.current=l;this._history.addValue(l.historyValue)
};g._getManagerType=function(){var l=this.el.getAttribute(this._selectors.manager.dataAttribute);
if(this._selectors.manager.types.indexOf(l)!==-1){return l}};g._createPromoArr=function(m){var p=a(this._selectors.promo.selector,m);
var o=p.length-1;var n=[];var l;while(o>=0){l=new i(p[o]);l.index=o;n.unshift(l);
o--}return n};g._getURLIdentifier=function(){var l=j().pathname;l=l.replace(/\/+/g,"/");
l=l.substring(1,l.lastIndexOf("/")+1);l=l.replace(/\//g,"-");return l};g._assembleHistoryKey=function(n){var m=this._getURLIdentifier();
var l=n.concat("-",this._type);return m.concat(l)};g._setupHistory=function(){var l=this.promos.all.length-1;
var m=this._assembleHistoryKey(this._id);return new d(m,l,this._options)};g._getPromosNotInHistory=function(){var l=this._history.getValue();
var m=function(n){return l.indexOf(n.historyValue)===-1};return this.promos.all.filter(m)
};g._selectFirstPromo=function(){var m=this.promos.all.length;var n=this._getPromosNotInHistory();
var o=n.length;var l;if(m>1&&o>0){l=n[0]}else{l=this.promos.all[0];if(o<1){this._history.resetValue()
}}return l};g._removeHiddenPromos=function(){var l=this.promos.all.length-1;while(l>=0){if(this.promos.all[l].historyValue!==this.promos.current.historyValue){this.promos.all[l].remove()
}l--}};g._reorderPromoArr=function(){var m=this.promos.all.splice(this.promos.current.index);
var l;this.promos.all=m.concat(this.promos.all);l=this.promos.all.length-1;while(l>=0){this.promos.all[l].index=l;
l--}};g._appendPromoArrToDom=function(){var l=document.createDocumentFragment();
var o=this.promos.all.length;var m=0;var n;while(m<o){n=this.promos.all[m].el;l.appendChild(n);
m++}this.el.appendChild(l)};g._removeManagerAttr=function(){this.el.removeAttribute(this._selectors.manager.dataAttribute)
};g._initialize=function(){var l;this._type=this._getManagerType();this.promos.all=this._createPromoArr(this.el);
this._history=this._setupHistory();l=this._selectFirstPromo();this.setCurrentPromo(l);
if(this._type===this._selectors.manager.types[0]){this._removeHiddenPromos()}else{if(this._type===this._selectors.manager.types[1]){this._reorderPromoArr();
this._appendPromoArrToDom()}else{throw new Error("PromoManager must be supplied with a valid manager type")
}}window.requestAnimationFrame(this._removeManagerAttr)};b.exports=h},{"./PromoManager/History":446,"./PromoManager/Promo":447,"./PromoManager/selectors":448,"@marcom/ac-dom-traversal/querySelectorAll":410,"@marcom/ac-url/parseURL":443}],446:[function(d,b,h){var c=d("@marcom/ac-storage");
var j=c.Item;var k=d("@marcom/ac-console").log;var g=d("@marcom/ac-object/defaults");
var a={daysUntilExpires:null};function f(n,l,m){this._key=n;this._maxLen=l;this._options=g(a,m);
this._item=null;this._initialize()}var i=f.prototype;i.getValue=function(){this._item.load();
return this._item.value()||[]};i.addValue=function(m){var l=this.getValue();l.unshift(m);
l=this._maxLenArrTrim(l);this._item.setValue(l);this._item.save()};i.resetValue=function(){this._item.setValue([]);
this._item.save()};i._setHistoryExpiration=function(m){var l=this._options.daysUntilExpires;
var n=m;if(l!==30&&l!==null){if(typeof l!=="number"){k("daysUntilExpires option must be a number.")
}else{l=j.createExpirationDate(l);m.setExpirationDate(l)}}return n};i._createLocalStorageItem=function(){var l;
l=new c.Item(this._key);l.load();if(!l.value()){l.setValue([]);l.save();l=this._setHistoryExpiration(l)
}return l};i._maxLenArrTrim=function(l){var m=l;if(m.length>this._maxLen){m.pop()
}return m};i._initialize=function(){this._item=this._createLocalStorageItem();this._item.save()
};b.exports=f},{"@marcom/ac-console":380,"@marcom/ac-object/defaults":417,"@marcom/ac-storage":426}],447:[function(b,d,a){var f=b("@marcom/ac-dom-nodes/remove");
var c=b("./selectors");function h(i){this.el=i;this.index=null;this.historyValue=this._getDataAttribPromoId()
}var g=h.prototype;g.remove=function(){f(this.el)};g._getDataAttribPromoId=function(){var i=c.promo.dataAttribute;
return this.el.getAttribute(i)};d.exports=h},{"./selectors":448,"@marcom/ac-dom-nodes/remove":407}],448:[function(b,d,a){function c(){this.dataAttributePrefix="data-promo-";
this.promo={attribute:"id",dataAttribute:null,selector:null};this.manager={types:["show-hide","reorder"],attribute:"type",dataAttribute:null,selector:null};
this._initialize()}var f=c.prototype;f._assembleDataAttribute=function(g){return this.dataAttributePrefix+g
};f._assembleDataAttribSelector=function(g){return"["+g+"]"};f._initialize=function(){this.promo.dataAttribute=this._assembleDataAttribute(this.promo.attribute);
this.promo.selector=this._assembleDataAttribSelector(this.promo.dataAttribute);
this.manager.dataAttribute=this._assembleDataAttribute(this.manager.attribute);
this.manager.selector=this._assembleDataAttribSelector(this.manager.dataAttribute)
};d.exports=new c()},{}],449:[function(b,c,a){var d={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
c.exports=b("./parseUserAgent")(d)},{"./parseUserAgent":452}],450:[function(b,c,a){c.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],451:[function(b,c,a){c.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(d){return(d.ua.indexOf("Edge")>-1||d.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(d){return(d.ua.indexOf("Firefox")>-1&&d.ua.indexOf("Opera")===-1)
},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(d){return(d.ua.indexOf("Safari")>-1&&d.vendor.indexOf("Apple")>-1)
},version:"Version"},{name:"ie",test:function(d){return(d.ua.indexOf("IE")>-1||d.ua.indexOf("Trident")>-1)
},version:["MSIE","rv"],parseDocumentMode:function(){var d=false;if(document.documentMode){d=parseInt(document.documentMode,10)
}return d}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(d){return(d.platform.indexOf("Win")>-1)
},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(d){return(d.platform.indexOf("Mac")>-1)
}},{name:"ios",test:function(d){return(d.ua.indexOf("iPhone")>-1||d.ua.indexOf("iPad")>-1)
},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(d){return(d.platform.indexOf("Linux")>-1&&d.ua.indexOf("Android")===-1)
}},{name:"fireos",test:function(d){return(d.ua.indexOf("Firefox")>-1&&d.ua.indexOf("Mobile")>-1)
},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}
},{}],452:[function(b,a,d){var c=b("./defaults");var h=b("./dictionary");function g(k){return new RegExp(k+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function f(n,m){if(typeof n.parseVersion==="function"){return n.parseVersion(m)
}else{var p=n.version||n.userAgent;if(typeof p==="string"){p=[p]}var o=p.length;
var k;for(var l=0;l<o;l++){k=m.match(g(p[l]));if(k&&k.length>1){return k[1].replace(/_/g,".")
}}}}function j(m,r,p){var o=m.length;var q;var k;for(var n=0;n<o;n++){if(typeof m[n].test==="function"){if(m[n].test(p)===true){q=m[n].name
}}else{if(p.ua.indexOf(m[n].userAgent)>-1){q=m[n].name}}if(q){r[q]=true;k=f(m[n],p.ua);
if(typeof k==="string"){var l=k.split(".");r.version.name=k;if(l&&l.length>0){r.version.major=parseInt(l[0]||0);
r.version.minor=parseInt(l[1]||0);r.version.patch=parseInt(l[2]||0)}}else{if(q==="edge"){r.version.name="12.0.0";
r.version.major="12";r.version.minor="0";r.version.patch="0"}}if(typeof m[n].parseDocumentMode==="function"){r.version.documentMode=m[n].parseDocumentMode()
}return r}}return r}function i(l){var k={};k.browser=j(h.browser,c.browser,l);k.os=j(h.os,c.os,l);
return k}a.exports=i},{"./defaults":450,"./dictionary":451}],453:[function(b,c,a){arguments[4][197][0].apply(a,arguments)
},{dup:197}],454:[function(b,a,f){b("@marcom/ac-polyfills/Function/prototype.bind");
b("@marcom/ac-polyfills/Object/keys");b("@marcom/ac-polyfills/Object/create");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var i=b("@marcom/ac-dom-events/utils/addEventListener");var h=b("@marcom/ac-feature/mediaQueriesAvailable");
var c="viewport-emitter";var j="::before";var d="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function k(m){l.call(this);this._initializeElement(m);if(h()){this._updateViewport=this._updateViewport.bind(this);
i(window,"resize",this._updateViewport);i(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(d);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var g=k.prototype=Object.create(l.prototype);
g.viewport=false;g.retina=false;g._initializeElement=function(n){var m;n=n||c;m=document.getElementById(n);
if(!m){m=document.createElement("div");m.id=n;m=document.body.appendChild(m)}this._el=m
};g._getElementContent=function(){var m;if("currentStyle" in this._el){m=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();m=window.getComputedStyle(this._el,j).content}if(m){m=m.replace(/["']/g,"")
}if(m){return m}return false};g._updateViewport=function(){var m=this.viewport;
var n;var o;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(m&&this.viewport!==m){o={from:m,to:this.viewport};this.trigger("change",o);
this.trigger("from:"+m,o);this.trigger("to:"+this.viewport,o)}};g._updateRetina=function(m){var n=this.retina;
this.retina=this._retinaQuery.matches;if(n!==this.retina){this.trigger("retinachange",{from:n,to:this.retina})
}};g._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};a.exports=k},{"@marcom/ac-dom-events/utils/addEventListener":453,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-feature/mediaQueriesAvailable":171,"@marcom/ac-polyfills/Function/prototype.bind":undefined,"@marcom/ac-polyfills/Object/create":undefined,"@marcom/ac-polyfills/Object/keys":undefined}],455:[function(c,d,b){var a=c("./ViewportEmitter");
d.exports=new a()},{"./ViewportEmitter":454}],456:[function(b,c,a){c.exports={lerp:function(f,g,d){return g+(d-g)*f
},map:function(h,g,d,f,i){return f+(i-f)*(h-g)/(d-g)},mapClamp:function(h,g,d,f,j){var i=f+(j-f)*(h-g)/(d-g);
return Math.max(f,Math.min(j,i))},norm:function(g,f,d){return(g-f)/(d-f)},clamp:function(g,f,d){return Math.max(f,Math.min(d,g))
},randFloat:function(f,d){return(Math.random()*(d-f))+f},randInt:function(f,d){return Math.floor((Math.random()*(d-f))+f)
}}},{}],457:[function(b,a,c){var h=b("@marcom/ac-dom-events").addEventListener;
var d=b("@marcom/ac-feature/isTablet");var f=b("@marcom/ac-feature/touchAvailable");
var g="a.backing-link";var k="has-backing-link";var i="homepage-section";var j=b("./js/extendedHomepageSectionsLib.built.js");
a.exports=function(){var m=[];[].forEach.call(document.querySelectorAll("."+i),function(n,o){m.push(new j[n.getAttribute("data-section-content-type")](n,o))
});function l(){var o=document.body.scrollTop;var n=document.body.offsetHeight-window.innerHeight+1;
if(o>n){window.scrollTo(0,n)}}if(d&&f){h(window,"orientationchange",l)}}},{"./js/extendedHomepageSectionsLib.built.js":469,"@marcom/ac-dom-events":7,"@marcom/ac-feature/isTablet":168,"@marcom/ac-feature/touchAvailable":176}],458:[function(o,d,E){var w=o("@marcom/ac-gallery").Gallery;
var t=o("@marcom/ac-gallery").AutoGallery;var b=t.prototype;var n=o("@marcom/ac-useragent").browser.edge;
var k=o("@marcom/ac-headjs/FocusManager");var v=o("@marcom/ac-keyboard/keyMap");
var j=o("@marcom/ac-pointer-tracker").PointerTracker;var A=o("@marcom/sm-math-utils");
var q=o("@marcom/ac-browser-prefixed");var c=o("@marcom/ac-eclipse").Clip;var l=o("@marcom/ac-dom-events").addEventListener;
var i=o("@marcom/ac-viewport-emitter");var g=o("./homepageGallery-Constants");var r=".gallery-slide-wrapper";
var a="a.backing-link";var C="has-backing-link";var m="showing-first-slide";var D="showing-last-slide";
var y="is-autoplaying";var s="is-interacting";var u=!(document.getElementsByTagName("html")[0].classList.contains("no-touch"));
var h=!(document.getElementsByTagName("html")[0].classList.contains("no-android"));
var p=u?"easeOutCubic":"easeInOutCubic";if(!Date.now){Date.now=function f(){return new Date().getTime()
}}var B=function(G,F){this._lastReportedWidth=document.body.offsetWidth;t.apply(this,arguments);
this._singleSlideStaticGallery=(this.getTotalItems()===1);this._wrapAround=F.wrapAround;
this.hasOtherSections=F.hasOtherSections||false;this.movementRateMultiplier=F.movementRateMultiplier||2;
this.positionX=0;this.swipeVelocity=0;this.velocityMultiplier=F.velocityMultiplier||8;
this.autoPlayerTimeTracker=0;this._wasAutoPlaying=this._isAutoPlaying;this._onResizeDebouncedTimeout=-1;
this._onOrientationChangeDebouncedTimeout=-1;this.currentSlideIndex=-1;this.widthOfSlideItem=this.getWidthOfSingleSlide();
this.galleryContainer=this._el.parentNode;this.slideWrapperElement=this._el.querySelector(r);
this.previousPaddle=this._el.querySelector("[data-ac-gallery-previous-trigger]");
this.nextPaddle=this._el.querySelector("[data-ac-gallery-next-trigger]");this.previousPaddleContainer=this._el.querySelector(".paddlenav-arrow-container-previous");
this.nextPaddleContainer=this._el.querySelector(".paddlenav-arrow-container-next");
this.lastInteractionEvent=null;this._onRequestAnimationFrame=this._onRequestAnimationFrame.bind(this);
this._onPreviousPaddleClick=this._onPreviousPaddleClick.bind(this);this._onNextPaddleClick=this._onNextPaddleClick.bind(this);
this._onDashnavTriggerClicked=this._onDashnavTriggerClicked.bind(this);this._onResizeDebounced=this._onResizeDebounced.bind(this);
this._onBreakpointChanged=this._onBreakpointChanged.bind(this);this._onOrientationChange=this._onOrientationChange.bind(this);
this._validateGalleryHeight=this._validateGalleryHeight.bind(this);this._onVisibilityChanged=this._onVisibilityChanged.bind(this);
this._onPaddleNavContainerClick=this._onPaddleNavContainerClick.bind(this);this._onFocusChangePreventShifts=this._onFocusChangePreventShifts.bind(this);
this._setSlideSpecificWrapperClasses=this._setSlideSpecificWrapperClasses.bind(this);
this._killAutoPlay=this._killAutoPlay.bind(this);g.updateConstants(i.viewport);
this._setupEvents();this._validateGalleryHeight();this._setInitialPositions();this._onFocusChangePreventShifts();
this._setSlideSpecificWrapperClasses();if(!this._singleSlideStaticGallery){this.lastTime=Date.now();
this._onRequestAnimationFrame()}};var x=B.prototype=Object.create(t.prototype);
B.prototype.constructor=B;x._onVisibilityChanged=function(){if(document.hidden){this._wasAutoPlaying=this._isAutoPlaying;
this.stopAutoPlay()}if(!document.hidden&&this._wasAutoPlaying&&!this._singleSlideStaticGallery){this.startAutoPlay()
}};x._onFocusChangePreventShifts=function(){this._el.scrollLeft=0};x._setSlideSpecificWrapperClasses=function(){var G=this.getCurrentItem();
var F=this.getItemIndex(G);var H=G.getElement().querySelector(a);this._el.classList[(H&&H.getAttribute("href"))?"add":"remove"](C);
this._el.classList[(F===0)?"add":"remove"](m);this._el.classList[(F===this.getTotalItems()-1)?"add":"remove"](D)
};x._killAutoPlay=function(){if(this.getItemIndex(this.getCurrentItem())===this.getTotalItems()-1&&this._isAutoPlaying){setTimeout(function(){this._onAutoPlayToNextItem();
this.stopAutoPlay()}.bind(this),this._autoPlayDelay)}this._lastAutoPlayerTimeTracker=this.autoPlayerTimeTracker
};x._setupEvents=function(){if(!this._singleSlideStaticGallery){[this.previousPaddleContainer,this.nextPaddleContainer,this.previousPaddle,this.nextPaddle].forEach(function(G){new k(G)
}.bind(this));if(this.previousPaddle&&this.previousPaddleContainer){l(this.previousPaddle,"click",this._onPreviousPaddleClick);
l(this.previousPaddleContainer,"click",this._onPaddleNavContainerClick)}if(this.nextPaddle&&this.nextPaddleContainer){l(this.nextPaddle,"click",this._onNextPaddleClick);
l(this.nextPaddleContainer,"click",this._onPaddleNavContainerClick)}for(var F=0;
F<this._items.length;F++){this._items[F].on("selected",this._onDashnavTriggerClicked)
}this.on(w.UPDATE_COMPLETE,this._killAutoPlay)}l(this._el,"scroll",this._onFocusChangePreventShifts,true);
l(window,"orientationchange",this._onOrientationChange);l(document,"visibilitychange",this._onVisibilityChanged);
this.on(w.UPDATE_COMPLETE,this._setSlideSpecificWrapperClasses);i.on("change",this._onBreakpointChanged)
};x._onPaddleNavContainerClick=function(F){var G=this.getCurrentItem().getElement().querySelector(a);
if(n&&F.target.getAttribute("data-focus-method")==="mouse"){F.target.blur()}if(G&&G.getAttribute("href")){window.location.href=G.getAttribute("href")
}};x._validateGalleryHeight=function(){if(!u){return}var F=window.innerHeight;if(this.hasOtherSections){F=F-g.Gallery.promoImageOffset
}this.galleryContainer.style.height=F+"px"};x.startAutoPlay=function(G,F){if(!this._singleSlideStaticGallery){this._el.classList.add(y);
this._el.classList.remove(s);this.autoPlayerTimeTracker=this._autoPlayDelay*this.wrapSlideIndex(this.getSlideIndexTakingAnimationIntoAccount());
this.lastTime=Date.now();b.startAutoPlay.call(this,G,F)}};x.stopAutoPlay=function(F){this._el.classList.remove(y);
this._el.classList.add(s);b.stopAutoPlay.call(this)};x._setInitialPositions=function(){var G=this._items[this._items.length-1];
for(var H=0;H<this._items.length;H++){this._items[H].prev=G;this._items[H].next=this._items[H+1];
this._items[H].zIndex=1000+H;var F=this.widthOfSlideItem*this._items.length;this._items[H]._el.style[q.transform]="translate3d("+F+"px, 0, 0)";
this._items[H].x=this._items[H].width*H;G=this._items[H]}G.next=this._items[0];
this._items[0]._el.style[q.transform]="translate3d("+0+"px, 0, 0)"};x._setUpSwiping=function(G,F){this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeEnd=this._onSwipeEnd.bind(this);this._onSwipeUpdate=this._onSwipeUpdate.bind(this);
if(G){this._touchSwipe=new j(this._el,j.TOUCH_EVENTS);this._touchSwipe.on(j.START,this._onSwipeStart);
this._touchSwipe.on(j.END,this._onSwipeEnd);this._touchSwipe.on(j.UPDATE,this._onSwipeUpdate);
window.addEventListener("touchmove",function(){})}if(F){this._clickSwipe=new j(this._el,j.MOUSE_EVENTS);
this._clickSwipe.on(j.START,this._onSwipeStart);this._clickSwipe.on(j.END,this._onSwipeEnd);
this._clickSwipe.on(j.UPDATE,this._onSwipeUpdate)}};x._onSwipeStart=function(F){if(this.clip){this.clip.destroy()
}if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
}this.lastInteractionEvent=F;this.swipeVelocity=0};x._onSwipeUpdate=function(F){var G=this.positionX;
this.lastPositionX=this.positionX;this.positionX+=F.diffX*this.movementRateMultiplier;
this.lastInteractionEvent=F;this.swipeVelocity=(this.positionX-G)*this.velocityMultiplier
};x._onSwipeEnd=function(N){var M=[this.currentSlideIndex-1,this.currentSlideIndex,this.currentSlideIndex+1];
var L=0;var K=Number.MAX_VALUE;for(var G=0,H=M.length;G<H;G++){var O=M[G]*this.widthOfSlideItem;
var F=Math.abs(O-(this.positionX+this.swipeVelocity));if(F<K){K=F;L=G}}this.lastInteractionEvent=N;
var I=this.wrapSlideIndex(M[L]),J=(I+1)%2;this.animateToSlide(M[L]);if(this._items.length==2){this._items[I]._addCurrentClassToTriggers();
this._items[J]._removeCurrentClassFromTriggers()}};x._onWindowResize=function(F){if(this._lastReportedWidth!=document.body.offsetWidth){this._lastReportedWidth=document.body.offsetWidth;
window.clearTimeout(this._onResizeDebouncedTimeout);this._onResizeDebouncedTimeout=setTimeout(this._onResizeDebounced,500);
b._onWindowResize.call(this,F)}};x._onOrientationChange=function(){if(h){window.clearTimeout(this._onOrientationChangeDebouncedTimeout);
this._onOrientationChangeDebouncedTimeout=setTimeout(this._validateGalleryHeight,200)
}else{this._validateGalleryHeight()}};x._onResizeDebounced=function(){if(this.clip&&this.clip._running){this.clip.destroy()
}this.widthOfSlideItem=this.getWidthOfSingleSlide(true);for(var F=0;F<this._items.length;
F++){var H=this._items[F];H.x=this.widthOfSlideItem*F;H.width=H.updateWidth()}for(F=0;
F<this._items.length;F++){H=this._items[F];H.slideElement.style[q.transform]="translate3d("+H.x+"px, 0,0)"
}var G=this.wrapSlideIndex(this.currentSlideIndex);this.lastPositionX=this.positionX;
this.positionX=this._items[G].x;this.currentSlideIndex=-1};x._onBreakpointChanged=function(F){g.updateConstants(F.to)
};x._onRequestAnimationFrame=function(){window.requestAnimationFrame(this._onRequestAnimationFrame);
this.msSinceLastRenderTime=(typeof this.lastRenderTime!=="undefined")?new Date()-this.lastRenderTime:1000;
if(this.msSinceLastRenderTime>=1000/25){this.lastRenderTime=new Date();this.throttledDashnavFrameHasArrived=true
}else{this.throttledDashnavFrameHasArrived=false}this.slideWrapperElement.style[q.transform]="translate3d("+(-this.positionX)+"px, 0,0)";
this.updateAutoPlayTimeTracker();if(this._items.length==2){this.checkForCurrentSlideUpdateForTwoSlideGallery()
}else{this.checkForCurrentSlideUpdate()}var F=this._isAutoPlaying?this.getDashTForAutoPlay():this.getDashTForInteraction();
var I=1/this._items.length;for(var J=0,M=this._items.length;J<M;J++){var Q=this._items[J];
var K=this.positionX-Q.x;var L=K/this.widthOfSlideItem;Q.onRequestAnimationFrame(L);
var G=1;if(this._isAutoPlaying){var H=J*I;var P=(J+1)*I;G=A.norm(F,H,P)}else{var N=this.wrapSlideIndex(this.currentSlideIndex);
var O=this.wrapSlideIndex(this.getSlideIndexTakingAnimationIntoAccount());G=(J===N||J===O)?1:0
}if(Q.lastTValue!=G&&this.throttledDashnavFrameHasArrived){Q.updateDash(G)}}};x.animateToSlide=function(I,G){var K=p;
if(this.clip){if(this.clip._running){K="easeOutQuint"}this.clip.destroy()}if(this._isAutoPlaying&&u){K="easeInOutCubic"
}var J=I*this.widthOfSlideItem;var H={slideIndex:I,x:this.positionX,extraOptions:null};
var F=this;this.clip=new c(H,g.Gallery.animationDuration,{x:J},{ease:K,destroyOnComplete:true,onUpdate:function(){F.lastPositionX=F.positionX;
F.positionX=H.x}});this.clip.play()};x._onAutoPlayToNextItem=function(){this.lastInteractionEvent=null;
if(!document.hidden){if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){var F=(this._wrapAround===false&&this.getItemIndex(this.getCurrentItem())===this.getTotalItems()-1)?0:this.currentSlideIndex+1;
this.animateToSlide(F)}}b._onAutoPlayToNextItem.call(this)};x._onDashnavTriggerClicked=function(G){this.lastInteractionEvent=null;
if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()}var H=this.getCurrentItemIndex();
var I=this.getItemIndex(G.item);var F=I-H;this.animateToSlide(this.currentSlideIndex+F)
};x._onPreviousPaddleClick=function(F){F.stopPropagation();if(n&&F.target.getAttribute("data-focus-method")==="mouse"){F.target.blur()
}this.lastInteractionEvent=null;if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
}var G=this.getSlideIndexTakingAnimationIntoAccount();if(G>0||this._wrapAround){this.animateToSlide(G-1)
}};x._onNextPaddleClick=function(F){F.stopPropagation();if(n&&F.target.getAttribute("data-focus-method")==="mouse"){F.target.blur()
}this.lastInteractionEvent=null;if(this._isAutoPlaying&&this._cancelAutoPlayOnInteraction){this.stopAutoPlay()
}var G=this.getSlideIndexTakingAnimationIntoAccount();if(G<this.getTotalItems()-1||this._wrapAround){this.animateToSlide(G+1)
}};x._onKeyboardInteraction=function(H,F){this.lastInteractionEvent=null;var G=this.getSlideIndexTakingAnimationIntoAccount();
if(F.keyCode==v.ARROW_RIGHT&&(G<this.getTotalItems()-1||this._wrapAround)){this.animateToSlide(G+1)
}if(F.keyCode==v.ARROW_LEFT&&(G>0||this._wrapAround)){this.animateToSlide(G-1)}b._onKeyboardInteraction.call(this,H,F)
};x.getSlideIndexTakingAnimationIntoAccount=function(){var F=this.currentSlideIndex;
if(this.clip&&this.clip.target()){F=this.clip.target().slideIndex}return F};x.checkForCurrentSlideUpdate=function(){var G=Math.floor((this.positionX+this.widthOfSlideItem*0.5)/this.widthOfSlideItem);
if(G==this.currentSlideIndex){return}this.currentSlideIndex=G;var I=this.getCurrentItemIndex();
var J=this._items[I];var F=null;if(this.lastInteractionEvent){F={interactionEvent:this.lastInteractionEvent.interactionEvent}
}this.show(J,F);var H;H=J.next;H.x=((this.currentSlideIndex+1)*this.widthOfSlideItem);
H.slideElement.style[q.transform]="translate3d("+H.x+"px, 0,0)";H=J.prev;H.x=((this.currentSlideIndex-1)*this.widthOfSlideItem);
H.slideElement.style[q.transform]="translate3d("+H.x+"px, 0,0)"};x.checkForCurrentSlideUpdateForTwoSlideGallery=function(){var L=this.positionX<this.lastPositionX?1:-1;
var F=L==-1?0.001:0.9999;var H=Math.floor((this.positionX+this.widthOfSlideItem*F)/this.widthOfSlideItem);
if(this.currentSlideIndex!=H){var G=null;if(this.lastInteractionEvent){G={interactionEvent:this.lastInteractionEvent.interactionEvent}
}this.show(this.wrapSlideIndex(H),G)}this.currentSlideIndex=H;var J=this.getCurrentItemIndex();
var K=this._items[J];var I;if(L<0){I=K.next;I.x=((this.currentSlideIndex+1)*this.widthOfSlideItem);
I.slideElement.style[q.transform]="translate3d("+I.x+"px, 0,0)"}else{I=K.prev;I.x=((this.currentSlideIndex-1)*this.widthOfSlideItem);
I.slideElement.style[q.transform]="translate3d("+I.x+"px, 0,0)"}};x.updateAutoPlayTimeTracker=function(){if(!document.hidden){var F=Date.now();
var G=(F-this.lastTime);this.lastTime=F;this.autoPlayerTimeTracker+=G}};x.getDashTForAutoPlay=function(){var H=(this._autoPlayDelay*this._items.length);
var F=(this.autoPlayerTimeTracker)%H;var G=F/H;return G};x.getDashTForInteraction=function(){return 1
};x.getCurrentItemIndex=function(){var F=this.currentSlideIndex%this._items.length;
if(F<0){F=this._items.length+F}return F};x.getWidthOfSingleSlide=function(F){if(F){return this._items[0].updateWidth()
}return this._items[0].width};x.wrapSlideIndex=function(F){F=F%this._items.length;
if(F<0){return this._items.length+F}return F};var z=function(){t.prototype.startAutoPlay=function(G,F){F=F||{};
this.options=F||{};this._isAutoPlaying=true;this._autoPlayDelay=this._autoPlayDelay||(G*1000);
this._cancelAutoPlayOnInteraction=(F.cancelOnInteraction===undefined)?true:F.cancelOnInteraction;
clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);
if(this._cancelAutoPlayOnInteraction){this.on(w.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){l(this._componentsContainer,"focus",this.stopAutoPlay,true);
l(this._componentsContainer,"touchend",this.stopAutoPlay,true);l(this._componentsContainer,"click",this.stopAutoPlay,true)
}};t.prototype.stopAutoPlay=function(){clearTimeout(this._autoPlayTimeoutId);this._isAutoPlaying=false;
if(this._cancelAutoPlayOnInteraction){this.off(w.UPDATE,this.stopAutoPlay)}};t.prototype._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!document.hidden){if(this._cancelAutoPlayOnInteraction){this.off(w.UPDATE,this.stopAutoPlay)
}var F=this.showNext();if(F!==null){if(this._cancelAutoPlayOnInteraction){this.on(w.UPDATE,this.stopAutoPlay)
}clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}else{clearTimeout(this._autoPlayTimeoutId);this._autoPlayTimeoutId=setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}}};z();d.exports=B},{"./homepageGallery-Constants":460,"@marcom/ac-browser-prefixed":1,"@marcom/ac-dom-events":7,"@marcom/ac-eclipse":99,"@marcom/ac-gallery":288,"@marcom/ac-headjs/FocusManager":308,"@marcom/ac-keyboard/keyMap":317,"@marcom/ac-pointer-tracker":356,"@marcom/ac-useragent":449,"@marcom/ac-viewport-emitter":455,"@marcom/sm-math-utils":456}],459:[function(f,b,h){var o=f("../../js/BaseHomepageSection.js");
var c=o.prototype;var a=f("@marcom/ac-useragent");var p=f("@marcom/ac-get-param");
var l=f("@marcom/ac-feature/touchAvailable");var q=f("@marcom/ac-feature/threeDTransformsAvailable");
var m=f("@marcom/ac-feature/cssPropertyAvailable");var k=f("@marcom/ac-feature/cssViewportUnitsAvailable");
var n=f("./homepageGallery-create-dashnav");var d=f("./homepageGallery-set-backing-links");
var r=f("./HomepageGallery");var i=f("./homepageGallery-SlideScaleItem");function g(s,t){o.apply(this,arguments);
this.testEnvironmentalCondtions();this.init()}var j=g.prototype=Object.create(c);
j.destroy=function(){c.destroy.call(this)};j.testEnvironmentalCondtions=function(){this.isEnhancedGallery=this.testEnhancedGallerySupport();
this.isAndroid=a.os.android;this.isIe=a.browser.ie;this.isEdge=a.browser.edge;this.hasTouch=a.browser.edge;
this.isSoloSection=(document.querySelectorAll(".homepage-section[data-section-content-type]").length===1);
[{className:"enhanced-gallery",value:this.isEnhancedGallery,applyToContents:true},{className:"android",value:this.isAndroid,applyToContents:false},{className:"ie",value:this.isIe,applyToContents:false},{className:"ie-edge",value:this.isEdge,applyToContents:false},{className:"touch",value:l(),applyToContents:false},{className:"is-solo-section",value:this.isSoloSection,applyToContents:false}].forEach(function(s){this.addWrapperClass((s.value)?s.className:"no-"+s.className);
if(s.applyToContents&&s.value){Array.from(this.sectionUnits).forEach(function(t,u){t.classList.add(s.className)
})}}.bind(this))};j.testEnhancedGallerySupport=function(){if(!/^[a-z]{4,5}\:(\/){2}(www\.){0,1}apple\.com/i.test(document.location.href)&&p("enhanced-gallery")!==undefined){return p("enhanced-gallery")
}return(m("background-size","contain")&&m("background-size","cover")&&k("vh")&&k("vw")&&q())
};j.setGalleryItemTrackingAttributes=function(s){Array.from(s.querySelectorAll("[data-ac-gallery-item]>.enhanced-gallery-hero")).forEach(function(t){t.parentNode.setAttribute("data-analytics-gallery-item-id",t.getAttribute("data-promo-id"))
})};j.createGallery=function(){var v="enhanced-gallery-hero-gallery";var u=document.getElementById(v);
var s=document.getElementById(v).classList.contains("infinite-gallery");var t={container:v,wrapAround:s,enableArrowKeys:true,touch:true,desktopSwipe:false,movementRateMultiplier:1.15,velocityMultiplier:8,autoPlay:3.5,hasOtherSections:!this.isSoloSection};
var x=u.querySelectorAll("[data-ac-gallery-item]").length;d(u);if(x>1){n(u)}t.itemType=i;
this.setGalleryItemTrackingAttributes(u);this.slideGallery=new r(u,t);try{f("ac-analytics").resetActivityMap()
}catch(w){}};j.init=function(){this.sectionGalleryEngagement=this.elementEngagement.addElement(this.sectionElement,{timeToEngage:250,inViewThreshold:0.2});
this.sectionImageLoaderEngagement.once("engaged",function(){this.createGallery()
}.bind(this))};b.exports=g},{"../../js/BaseHomepageSection.js":467,"./HomepageGallery":458,"./homepageGallery-SlideScaleItem":461,"./homepageGallery-create-dashnav":462,"./homepageGallery-set-backing-links":463,"@marcom/ac-feature/cssPropertyAvailable":160,"@marcom/ac-feature/cssViewportUnitsAvailable":161,"@marcom/ac-feature/threeDTransformsAvailable":175,"@marcom/ac-feature/touchAvailable":176,"@marcom/ac-get-param":307,"@marcom/ac-useragent":449,"ac-analytics":undefined}],460:[function(b,d,a){var c={Gallery:{animationDuration:1,promoImageOffset:200},Item:{Incoming:{CopyXScaleFactor:-0.2},Outgoing:{CopyXScaleFactor:0.95}},updateConstants:function(f){switch(f){case"x-large":this.Gallery.promoImageOffset=200;
case"large":this.Gallery.animationDuration=1;this.Gallery.promoImageOffset=100;
break;case"medium":this.Gallery.animationDuration=0.8;this.Gallery.promoImageOffset=80;
break;case"small":this.Gallery.animationDuration=0.4;this.Gallery.promoImageOffset=74;
break;default:}}};d.exports=c},{}],461:[function(c,b,f){var l=c("@marcom/ac-browser-prefixed");
var g=c("@marcom/sm-math-utils");var a=c("./homepageGallery-Constants");var d=c("@marcom/ac-gallery").Item;
var m=d.prototype;var n=c("@marcom/ac-gallery/singletons/tabManager");var j=0;var h=function(){d.apply(this,arguments);
this.zIndex=1000;this.mI=j++;this.slideElement=this._el;this.imageElement=this.slideElement.querySelector(".gallery-item-image-element");
this.copyElement=this.slideElement.querySelector(".gallery-item-copy-wrapper");
this.width=this.slideElement.clientWidth;this.dashnavElement=document.querySelector('[data-ac-gallery-trigger="'+this._el.id+'"]');
if(this.dashnavElement){this.dashnavProgressElement=this.dashnavElement.querySelector(".dashnav-progress");
this.dashnavMaxWidth=this.dashnavElement.clientWidth}};var k=h.prototype=Object.create(d.prototype);
k.onRequestAnimationFrame=function(o){var i,p;o=g.clamp(o,-1,1);if(o>=0){i=o*this.width*a.Item.Outgoing.CopyXScaleFactor;
p=g.map(o,0,1,1,0.9);this.copyElement.style[l.transform]="translate3d("+i+"px, 0, 0) scale3d("+p+","+p+", 1)";
p=g.map(o,0,1,1,0.9);i=g.map(o,0,1,0,this.width*0.9);if(this.imageElement){this.imageElement.style[l.transform]="translate3d("+i+"px, 0, 0) scale3d("+p+","+p+", 1)"
}}else{i=o*this.width*a.Item.Incoming.CopyXScaleFactor;p=1;this.copyElement.style[l.transform]="translate3d("+i+"px, 0, 0) scale3d("+p+","+p+", 1)";
i=0;p=1;if(this.imageElement){this.imageElement.style[l.transform]="translate3d("+i+"px, 0, 0) scale3d("+p+","+p+", 1)"
}}};k.updateDash=function(i){this.lastTValue=i;i=g.clamp(i,0,1);if(this.dashnavProgressElement){this.dashnavProgressElement.style[l.transform]="scaleX("+i+")"
}};k.setZIndex=function(i){this.zIndex=i;this.slideElement.style.zIndex=i};k.updateWidth=function(){this.width=this._el.clientWidth;
return this.width};k._setTabIndexOnFocusableItems=function(p){var o=p===null;var r=[];
this._currentTabbableEls=this._currentTabbableEls||n.getTabbable(this._focusableEls);
var q=this._currentTabbableEls.length;while(q--){if(o){this._currentTabbableEls[q].removeAttribute("tabindex")
}else{this._currentTabbableEls[q].setAttribute("tabindex",p)}}};b.exports=h},{"./homepageGallery-Constants":460,"@marcom/ac-browser-prefixed":1,"@marcom/ac-gallery":288,"@marcom/ac-gallery/singletons/tabManager":302,"@marcom/sm-math-utils":456}],462:[function(c,d,a){var b=function(f){var g=document.querySelector(".dashnav ul");
if(g){var h=f.querySelectorAll(".gallery-item");[].forEach.call(h,function(j){var m=document.createElement("li");
var l=document.createElement("a");var k=j.querySelector("h1, h2");var i="";i=k.textContent;
l.setAttribute("href","#"+j.id);l.setAttribute("data-ac-gallery-trigger",j.id);
l.setAttribute("id",j.id+"-trigger");l.className="dashnav-item";l.innerHTML='<div class="dashnav-dash"><span class="dashnav-progress"></span><span class="dashnav-label">'+i+"</span></div>";
m.setAttribute("role","presentation");m.appendChild(l);g.appendChild(m)})}};d.exports=b
},{}],463:[function(d,f,b){var h=d("@marcom/ac-gallery").SlideGallery;var a="backing-link";
var g="data-backing-link";var c=function(i){var j=i.querySelectorAll(".gallery-item>.enhanced-gallery-hero");
[].forEach.call(j,function(l){var k=(l.querySelectorAll("a").length>1);var m=l.querySelector("["+g+"][href]:not(."+a+")"),m=m||l.querySelector("a[href]:not(."+a+")");
if(m){var n=document.createElement("a");n.classList.add(a);n.setAttribute("aria-hidden","true");
n.setAttribute("tabindex","-1");n=l.insertBefore(n,l.firstChild);n.setAttribute("href",m.getAttribute("href"));
n.setAttribute("data-analytics-title",l.getAttribute("data-promo-id")+" : bl")}})
};f.exports=c},{"@marcom/ac-gallery":288}],464:[function(d,f,c){var a=d("../../js/BaseHomepageSection.js");
var h=a.prototype;function b(i,j){a.apply(this,arguments)}var g=b.prototype=Object.create(h);
g.destroy=function(){h.destroy.call(this)};f.exports=b},{"../../js/BaseHomepageSection.js":467}],465:[function(b,c,a){arguments[4][464][0].apply(a,arguments)
},{"../../js/BaseHomepageSection.js":467,dup:464}],466:[function(b,c,a){arguments[4][464][0].apply(a,arguments)
},{"../../js/BaseHomepageSection.js":467,dup:464}],467:[function(c,b,f){var j=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var h=c("./PromoManager");var k=j.prototype;var a=c("@marcom/ac-element-engagement").ElementEngagement;
var l=c("@marcom/ac-progressive-image-loader/ProgressiveImageLoader");function d(m){var n=/^http(s)?\:\/\//i;
if(n.test(m)){m=m.split(n)[2]}if(m.indexOf(document.location.host)===0){m=m.split(document.location.host)[1]
}return m}function i(m,n){j.apply(this);this.sectionElement=m;this.sectionIndex=n;
this.sectionAnalyticsRegion=m.getAttribute("data-analytics-region");this.promoManager=new h(this.sectionElement);
this.sectionUnits=this.sectionElement.querySelectorAll(".homepage-section-positions .homepage-section-item>.promo-managed-unit");
this.elementEngagement=new a();this.setProgressiveImageLoading();this.elementEngagement.start()
}var g=i.prototype=Object.create(k);g.destroy=function(){k.destroy.call(this)};
g.addWrapperClass=function(m){this.sectionElement.classList.add(m)};g.removeWrapperClass=function(m){this.sectionElement.classList.remove(m)
};g.setProgressiveImageLoading=function(){this.sectionImageLoaderEngagement=this.elementEngagement.addElement(this.sectionElement,{timeToEngage:0,inViewThreshold:0.001});
this.sectionImageLoaderEngagement.once("engaged",function(){this.sectionImageLoader=new l({container:this.sectionElement,includeContainer:true});
this.sectionImageLoader.load({imageAnimate:false})}.bind(this))};b.exports=i},{"./PromoManager":468,"@marcom/ac-element-engagement":137,"@marcom/ac-event-emitter-micro":139,"@marcom/ac-progressive-image-loader/ProgressiveImageLoader":379}],468:[function(d,f,c){var a=d("@marcom/ac-promomanager/AutoPromoManager");
var h=d("@marcom/ac-gallery").FadeGallery;var b=function(j,i){this.sectionElement=j;
this._options=i||{};this.intervalPromos=null;this.initialize()};var g=b.prototype;
g.initialize=function(){var i=this._initAutoPromoManager();this.intervalPromoArr=this._initIntervalGalleries(i);
this._addIntervalGalleryItems(this.intervalPromoArr);this._initUpdateIntervalCurrentPromos(this.intervalPromoArr);
this._startIntervalGallery(this.intervalPromoArr)};g._initAutoPromoManager=function(){var i=this.sectionElement.querySelector(".homepage-section-positions");
return new a(i,this._options)};g._initIntervalGalleries=function(q){var p=q.promoManagers.reorder;
var l=p.length;var n=[];var o={enableArrowKeys:false,deeplink:false,wrapAround:true};
var k;var j;if(l>0){for(var m=0;m<l;m++){k=p[m];j=new h(k.el,o);n.push({promoManager:k,gallery:j})
}}return n};g._addIntervalGalleryItems=function(q){var m=q.length;var r;var l;var p;
var k;for(var o=0;o<m;o++){l=q[o].gallery;p=q[o].promoManager.promos.all;k=p.length;
for(var n=0;n<k;n++){l.addItem(p[n].el)}}};g._onIntervalGalleryUpdate=function(k){var l=this;
var j=l.gallery.getItemIndex(k.incoming[0]);var i=l.promoManager.promos.all[j];
l.promoManager.setCurrentPromo(i)};g._bindIntervalGalleryUpdate=function(l){var j=l.length;
var m;for(var k=0;k<j;k++){m=l[k];m.boundUpdate=this._onIntervalGalleryUpdate.bind(l[k])
}};g._initUpdateIntervalCurrentPromos=function(l){var k=l.length;this._bindIntervalGalleryUpdate(l);
for(var j=0;j<k;j++){l[j].gallery.on("update",l[j].boundUpdate)}};g._startIntervalGallery=function(l){var j=l.length;
for(var k=0;k<j;k++){l[k].gallery.startAutoPlay()}};f.exports=b},{"@marcom/ac-gallery":288,"@marcom/ac-promomanager/AutoPromoManager":444}],469:[function(b,c,a){c.exports={"enhanced-gallery-heroes":b("../../../ac-homepage/src/content-type-definitions/enhanced-gallery-heroes/SectionClass.js"),generic:b("../../../ac-homepage/src/content-type-definitions/generic/SectionClass.js"),"image-row-banners":b("../../../ac-homepage/src/content-type-definitions/image-row-banners/SectionClass.js"),"row-promos":b("../../../ac-homepage/src/content-type-definitions/row-promos/SectionClass.js")}
},{"../../../ac-homepage/src/content-type-definitions/enhanced-gallery-heroes/SectionClass.js":459,"../../../ac-homepage/src/content-type-definitions/generic/SectionClass.js":464,"../../../ac-homepage/src/content-type-definitions/image-row-banners/SectionClass.js":465,"../../../ac-homepage/src/content-type-definitions/row-promos/SectionClass.js":466}],470:[function(b,c,a){b("@marcom/ac-homepage/main")()
},{"@marcom/ac-homepage/main":457}]},{},[470]);