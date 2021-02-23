!function(I){var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!R[e]||!u[e])return;for(var r in u[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(U[r]=n[r]);0==--s&&0===l&&y()}(e,n),r&&r(e,n)};var c,t=!0,k="f9ee4a0413ffc72f9efa",n=1e4,M={},A=[],o=[];function i(n){var r=C[n];if(!r)return N;function t(e){return r.hot.active?(C[e]?-1===C[e].parents.indexOf(n)&&C[e].parents.push(n):(A=[n],c=e),-1===r.children.indexOf(e)&&r.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+n),A=[]),N(e)}function e(n){return{configurable:!0,enumerable:!0,get:function(){return N[n]},set:function(e){N[n]=e}}}for(var o in N)Object.prototype.hasOwnProperty.call(N,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(t,o,e(o));return t.e=function(e){return"ready"===S&&T("prepare"),l++,N.e(e).then(n,function(e){throw n(),e});function n(){l--,"prepare"===S&&(p[e]||h(e),0===l&&0===s&&y())}},t.t=function(e,n){return 1&n&&(e=t(e)),N.t(e,-2&n)},t}var d=[],S="idle";function T(e){S=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var a,U,q,s=0,l=0,p={},u={},R={};function L(e){return+e+""===e?+e:e}function f(e){if("idle"!==S)throw new Error("check() is only allowed in idle status");return t=e,T("check"),(c=(c=n)||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=N.p+""+k+".hot-update.json";t.open("GET",o,!0),t.timeout=c,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})).then(function(e){if(!e)return T("idle"),null;u={},p={},R=e.c,q=e.h,T("prepare");var n=new Promise(function(e,n){a={resolve:e,reject:n}});U={};return h("tools"),"prepare"===S&&0===l&&0===s&&y(),n});var c}function h(e){var n,r;R[e]?(u[e]=!0,s++,n=e,(r=document.createElement("script")).charset="utf-8",r.src=N.p+""+n+"."+k+".hot-update.js",document.head.appendChild(r)):p[e]=!0}function y(){T("ready");var n=a;if(a=null,n)if(t)Promise.resolve().then(function(){return v(t)}).then(function(e){n.resolve(e)},function(e){n.reject(e)});else{var e=[];for(var r in U)Object.prototype.hasOwnProperty.call(U,r)&&e.push(L(r));n.resolve(e)}}function v(r){if("ready"!==S)throw new Error("apply() is only allowed in ready status");var e,n,t,l,o;function c(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});0<t.length;){var o=t.pop(),c=o.id,i=o.chain;if((l=C[c])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<l.parents.length;d++){var a=l.parents[d],s=C[a];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([a]),moduleId:c,parentId:a};-1===n.indexOf(a)&&(s.hot._acceptedDependencies[c]?(r[a]||(r[a]=[]),p(r[a],[c])):(delete r[a],n.push(a),t.push({chain:i.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}r=r||{};function i(){console.warn("[HMR] unexpected require("+f.moduleId+") to disposed module")}var d={},a=[],s={};for(var u in U)if(Object.prototype.hasOwnProperty.call(U,u)){var f;o=L(u);var h=!1,y=!1,v=!1,b="";switch((f=U[u]?c(o):{type:"disposed",moduleId:u}).chain&&(b="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":r.onDeclined&&r.onDeclined(f),r.ignoreDeclined||(h=new Error("Aborted because of self decline: "+f.moduleId+b));break;case"declined":r.onDeclined&&r.onDeclined(f),r.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+b));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(f),r.ignoreUnaccepted||(h=new Error("Aborted because "+o+" is not accepted"+b));break;case"accepted":r.onAccepted&&r.onAccepted(f),y=!0;break;case"disposed":r.onDisposed&&r.onDisposed(f),v=!0;break;default:throw new Error("Unexception type "+f.type)}if(h)return T("abort"),Promise.reject(h);if(y)for(o in s[o]=U[o],p(a,f.outdatedModules),f.outdatedDependencies)Object.prototype.hasOwnProperty.call(f.outdatedDependencies,o)&&(d[o]||(d[o]=[]),p(d[o],f.outdatedDependencies[o]));v&&(p(a,[f.moduleId]),s[o]=i)}var m,w=[];for(n=0;n<a.length;n++)o=a[n],C[o]&&C[o].hot._selfAccepted&&s[o]!==i&&w.push({module:o,errorHandler:C[o].hot._selfAccepted});T("dispose"),Object.keys(R).forEach(function(e){!1===R[e]&&delete installedChunks[e]});for(var O,g,_=a.slice();0<_.length;)if(o=_.pop(),l=C[o]){var j={},D=l.hot._disposeHandlers;for(t=0;t<D.length;t++)(e=D[t])(j);for(M[o]=j,l.hot.active=!1,delete C[o],delete d[o],t=0;t<l.children.length;t++){var x=C[l.children[t]];x&&0<=(m=x.parents.indexOf(o))&&x.parents.splice(m,1)}}for(o in d)if(Object.prototype.hasOwnProperty.call(d,o)&&(l=C[o]))for(g=d[o],t=0;t<g.length;t++)O=g[t],0<=(m=l.children.indexOf(O))&&l.children.splice(m,1);for(o in T("apply"),k=q,s)Object.prototype.hasOwnProperty.call(s,o)&&(I[o]=s[o]);var E=null;for(o in d)if(Object.prototype.hasOwnProperty.call(d,o)&&(l=C[o])){g=d[o];var P=[];for(n=0;n<g.length;n++)if(O=g[n],e=l.hot._acceptedDependencies[O]){if(-1!==P.indexOf(e))continue;P.push(e)}for(n=0;n<P.length;n++){e=P[n];try{e(g)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:o,dependencyId:g[n],error:e}),r.ignoreErrored||(E=E||e)}}}for(n=0;n<w.length;n++){var H=w[n];o=H.module,A=[o];try{N(o)}catch(n){if("function"==typeof H.errorHandler)try{H.errorHandler(n)}catch(e){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:e,originalError:n}),r.ignoreErrored||(E=E||e),E=E||n}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:o,error:n}),r.ignoreErrored||(E=E||n)}}return E?(T("fail"),Promise.reject(E)):(T("idle"),new Promise(function(e){e(a)}))}var C={};function N(e){if(C[e])return C[e].exports;var n,t,r=C[e]={i:e,l:!1,exports:{},hot:(n=e,t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:c!==n,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);0<=n&&t._disposeHandlers.splice(n,1)},check:f,apply:v,status:function(e){if(!e)return S;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);0<=n&&d.splice(n,1)},data:M[n]},c=void 0,t),parents:(o=A,A=[],o),children:[]};return I[e].call(r.exports,r,r.exports,i(e)),r.l=!0,r.exports}N.m=I,N.c=C,N.d=function(e,n,r){N.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(n,e){if(1&e&&(n=N(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(N.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)N.d(r,t,function(e){return n[e]}.bind(null,t));return r},N.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(n,"a",n),n},N.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},N.p="",N.h=function(){return k},i("./src/scene/index.ts")(N.s="./src/scene/index.ts")}({"./src/scene/index.ts":
/*!****************************!*\
  !*** ./src/scene/index.ts ***!
  \****************************/
/*! no static exports found */function(module,exports){eval("var Tools = /** @class */ (function () {\r\n    function Tools() {\r\n    }\r\n    Tools.prototype.trim = function (str, type) {\r\n        console.log('test');\r\n        return type ? str.replace(/\\s+/g, '') : str.replace(/^\\s+|\\s+$/g, '');\r\n    };\r\n    return Tools;\r\n}());\r\nmodule.exports = Tools;\r\n\n\n//# sourceURL=webpack:///./src/scene/index.ts?")}});