"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function _taggedTemplateLiteral(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var _templateObject=_taggedTemplateLiteral([" "],[" "]),out=function(e){return o.innerHTML+=e},clrout=function(e){return o.innerHTML=""},nonsense=function(e,r,t){var n=arguments.length<=3||void 0===arguments[3]?[0]:arguments[3],a=arguments.length<=4||void 0===arguments[4]?0:arguments[4],u=arguments.length<=5||void 0===arguments[5]?0:arguments[5];arguments.length<=6||void 0===arguments[6]?0:arguments[6];for(clrout(),console.clear(),e=e.split(_templateObject).map(function(e){return e.replace(/\\s/g," ")}),r=[].concat(_toConsumableArray(r));u<e.length;u++)t=e[u][0],"i"==t&&(n[a]=r[0]?r.shift().charCodeAt():0),"o"==t&&out(n[a]),"p"==t&&out(String.fromCharCode(n[a])),"a"==t&&n[a]++,"s"==t&&n[a]--,"l"==t&&(n[--a]=n[a]||0),"r"==t&&(n[++a]=n[a]||0),"n"==t&&(n[a=e[u].charCodeAt(1)]=n[a]||0),"g"==t&&(u=e[u].charCodeAt(1)-2),"h"==t&&n[a]&&(u=e[u].charCodeAt(1)-2),"c"==t&&(n[a]=e[u].charCodeAt(1)),console.log(e,r,t,n,a,u)};