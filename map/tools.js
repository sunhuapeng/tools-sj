!function(e,r){for(var n in r)e[n]=r[n]}(exports,function(H){function M(e){delete installedChunks[e]}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(B[e]&&l[e]){for(var n in l[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(L[n]=r[n]);0==--s&&0===p&&h()}}(e,r),n&&n(e,r)};var q,t=!0,A="46429ead8e5383c01072",r=1e4,U={},R=[],o=[];function c(r){var n=W[r];if(!n)return X;function t(e){return n.hot.active?(W[e]?-1===W[e].parents.indexOf(r)&&W[e].parents.push(r):(R=[r],q=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+r),R=[]),X(e)}for(var e in X)Object.prototype.hasOwnProperty.call(X,e)&&"e"!==e&&"t"!==e&&Object.defineProperty(t,e,function(r){return{configurable:!0,enumerable:!0,get:function(){return X[r]},set:function(e){X[r]=e}}}(e));return t.e=function(e){return"ready"===a&&S("prepare"),p++,X.e(e).then(r,function(e){throw r(),e});function r(){p--,"prepare"===a&&(u[e]||_(e),0===p&&0===s&&h())}},t.t=function(e,r){return 1&r&&(e=t(e)),X.t(e,-2&r)},t}var i=[],a="idle";function S(e){a=e;for(var r=0;r<i.length;r++)i[r].call(null,e)}var d,L,T,C,s=0,p=0,u={},l={},B={};function K(e){return+e+""===e?+e:e}function f(e){if("idle"!==a)throw new Error("check() is only allowed in idle status");return t=e,S("check"),c=(c=r)||1e4,new Promise(function(r,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=X.p+""+A+".hot-update.json";t.open("GET",o,!0),t.timeout=c,t.send(null)}catch(e){return n(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)r();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void n(e)}r(e)}}}).then(function(e){if(!e)return S(N()?"ready":"idle"),null;l={},u={},B=e.c,T=e.h,S("prepare");e=new Promise(function(e,r){d={resolve:e,reject:r}});L={};return _("tools"),"prepare"===a&&0===p&&0===s&&h(),e});var c}function _(e){var r,n;B[e]?(l[e]=!0,s++,r=e,(n=document.createElement("script")).charset="utf-8",n.src=X.p+""+r+"."+A+".hot-update.js",document.head.appendChild(n)):u[e]=!0}function h(){S("ready");var r=d;if(d=null,r)if(t)Promise.resolve().then(function(){return v(t)}).then(function(e){r.resolve(e)},function(e){r.reject(e)});else{var e,n=[];for(e in L)Object.prototype.hasOwnProperty.call(L,e)&&n.push(K(e));r.resolve(n)}}function v(e){if("ready"!==a)throw new Error("apply() is only allowed in ready status");return function e(n){N();var r;var t;var o;var p;function c(e){for(var r=[e],n={},t=r.map(function(e){return{chain:[e],id:e}});0<t.length;){var o=t.pop(),c=o.id,i=o.chain;if((p=W[c])&&(!p.hot._selfAccepted||p.hot._selfInvalidated)){if(p.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(p.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var a=0;a<p.parents.length;a++){var d=p.parents[a],s=W[d];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([d]),moduleId:c,parentId:d};-1===r.indexOf(d)&&(s.hot._acceptedDependencies[c]?(n[d]||(n[d]=[]),u(n[d],[c])):(delete n[d],r.push(d),t.push({chain:i.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function u(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}var i={};var a=[];var d={};var s=function(){console.warn("[HMR] unexpected require("+f.moduleId+") to disposed module")};for(var l in L)if(Object.prototype.hasOwnProperty.call(L,l)){var f;b=K(l),f=L[l]?c(b):{type:"disposed",moduleId:l};var _=!1,h=!1,v=!1,y="";switch(f.chain&&(y="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":n.onDeclined&&n.onDeclined(f),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+f.moduleId+y));break;case"declined":n.onDeclined&&n.onDeclined(f),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+y));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(f),n.ignoreUnaccepted||(_=new Error("Aborted because "+b+" is not accepted"+y));break;case"accepted":n.onAccepted&&n.onAccepted(f),h=!0;break;case"disposed":n.onDisposed&&n.onDisposed(f),v=!0;break;default:throw new Error("Unexception type "+f.type)}if(_)return S("abort"),Promise.reject(_);if(h)for(var b in d[b]=L[b],u(a,f.outdatedModules),f.outdatedDependencies)Object.prototype.hasOwnProperty.call(f.outdatedDependencies,b)&&(i[b]||(i[b]=[]),u(i[b],f.outdatedDependencies[b]));v&&(u(a,[f.moduleId]),d[b]=s)}var w=[];for(t=0;t<a.length;t++)b=a[t],W[b]&&W[b].hot._selfAccepted&&d[b]!==s&&!W[b].hot._selfInvalidated&&w.push({module:b,parents:W[b].parents.slice(),errorHandler:W[b].hot._selfAccepted});S("dispose");Object.keys(B).forEach(function(e){!1===B[e]&&M(e)});var m;var O=a.slice();for(;0<O.length;)if(b=O.pop(),p=W[b]){var g={},x=p.hot._disposeHandlers;for(o=0;o<x.length;o++)(r=x[o])(g);for(U[b]=g,p.hot.active=!1,delete W[b],delete i[b],o=0;o<p.children.length;o++){var k=W[p.children[o]];k&&0<=(m=k.parents.indexOf(b))&&k.parents.splice(m,1)}}var D;var E;for(b in i)if(Object.prototype.hasOwnProperty.call(i,b)&&(p=W[b]))for(E=i[b],o=0;o<E.length;o++)D=E[o],0<=(m=p.children.indexOf(D))&&p.children.splice(m,1);S("apply");void 0!==T&&(A=T,T=void 0);L=void 0;for(b in d)Object.prototype.hasOwnProperty.call(d,b)&&(H[b]=d[b]);var j=null;for(b in i)if(Object.prototype.hasOwnProperty.call(i,b)&&(p=W[b])){E=i[b];var P=[];for(t=0;t<E.length;t++)D=E[t],(r=p.hot._acceptedDependencies[D])&&-1===P.indexOf(r)&&P.push(r);for(t=0;t<P.length;t++){r=P[t];try{r(E)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:b,dependencyId:E[t],error:e}),n.ignoreErrored||(j=j||e)}}}for(t=0;t<w.length;t++){var I=w[t];b=I.module,R=I.parents,q=b;try{X(b)}catch(r){if("function"==typeof I.errorHandler)try{I.errorHandler(r)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:e,originalError:r}),j=(j=!n.ignoreErrored?j||e:j)||r}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:b,error:r}),n.ignoreErrored||(j=j||r)}}if(j)return S("fail"),Promise.reject(j);if(C)return e(n).then(function(r){return a.forEach(function(e){r.indexOf(e)<0&&r.push(e)}),r});S("idle");return new Promise(function(e){e(a)})}(e=e||{})}function N(){return C&&(L=L||{},C.forEach(y),C=void 0,1)}function y(e){Object.prototype.hasOwnProperty.call(L,e)||(L[e]=H[e])}var W={};function X(e){if(W[e])return W[e].exports;var r,t,n=W[e]={i:e,l:!1,exports:{},hot:(t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:q!==(r=e),active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){e=t._disposeHandlers.indexOf(e);0<=e&&t._disposeHandlers.splice(e,1)},invalidate:function(){switch(this._selfInvalidated=!0,a){case"idle":(L={})[r]=H[r],S("ready");break;case"ready":y(r);break;case"prepare":case"check":case"dispose":case"apply":(C=C||[]).push(r)}},check:f,apply:v,status:function(e){if(!e)return a;i.push(e)},addStatusHandler:function(e){i.push(e)},removeStatusHandler:function(e){e=i.indexOf(e);0<=e&&i.splice(e,1)},data:U[r]},q=void 0,t),parents:(o=R,R=[],o),children:[]};return H[e].call(n.exports,n,n.exports,c(e)),n.l=!0,n.exports}return X.m=H,X.c=W,X.d=function(e,r,n){X.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},X.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},X.t=function(r,e){if(1&e&&(r=X(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(X.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)X.d(n,t,function(e){return r[e]}.bind(null,t));return n},X.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return X.d(r,"a",r),r},X.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},X.p="",X.h=function(){return A},c("./src/scene/index.ts")(X.s="./src/scene/index.ts")}({"./src/scene/index.ts":
/*!****************************!*\
  !*** ./src/scene/index.ts ***!
  \****************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__(/*! ./tools */ "./src/scene/tools.ts");\r\n\n\n//# sourceURL=webpack:///./src/scene/index.ts?')},"./src/scene/string.ts":
/*!*****************************!*\
  !*** ./src/scene/string.ts ***!
  \*****************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nfunction trim(str, type) {\r\n    return type ? str.replace(/\\s+/g, '') : str.replace(/^\\s+|\\s+$/g, '');\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (trim);\r\n\n\n//# sourceURL=webpack:///./src/scene/string.ts?")},"./src/scene/tools.ts":
/*!****************************!*\
  !*** ./src/scene/tools.ts ***!
  \****************************/
/*! exports provided: trim, test */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/scene/string.ts");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return _string__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n\r\nfunction test(str) {\r\n    return str + \'-test\';\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/scene/tools.ts?')}}));