!function e(n,r,t){function o(i,u){if(!r[i]){if(!n[i]){var a="function"==typeof require&&require;if(!u&&a)return a(i,!0);if(c)return c(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var s=r[i]={exports:{}};n[i][0].call(s.exports,function(e){var r=n[i][1][e];return o(r?r:e)},s,s.exports,e,n,r,t)}return r[i].exports}for(var c="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var o=e("querystring"),c=t(o),i=((location.hash||"").replace(/^#/,""),(location.search||"").replace(/^\?/,"")),u=c.default.parse(i),a=["./img/block_1.png","./img/block_2.png","./img/block_3.png","./img/block_4.png","./img/block_5.png","./img/block_6.png","./img/block_7.png","./img/block_8.png","./img/block_9.png"],p=(document.querySelector(".container"),document.getElementById("game-root")),s=new Pentrix({rootElement:p,blockImageList:void 0===u.image?null:a.map(function(e){var n=new Image;return n.src=e,n})});s.on("gamequit",function(){s.newGame()}),s.newGame()},{querystring:4}],2:[function(e,n,r){"use strict";function t(e,n){return Object.prototype.hasOwnProperty.call(e,n)}n.exports=function(e,n,r,c){n=n||"&",r=r||"=";var i={};if("string"!=typeof e||0===e.length)return i;var u=/\+/g;e=e.split(n);var a=1e3;c&&"number"==typeof c.maxKeys&&(a=c.maxKeys);var p=e.length;a>0&&p>a&&(p=a);for(var s=0;s<p;++s){var f,l,g,m,d=e[s].replace(u,"%20"),y=d.indexOf(r);y>=0?(f=d.substr(0,y),l=d.substr(y+1)):(f=d,l=""),g=decodeURIComponent(f),m=decodeURIComponent(l),t(i,g)?o(i[g])?i[g].push(m):i[g]=[i[g],m]:i[g]=m}return i};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],3:[function(e,n,r){"use strict";function t(e,n){if(e.map)return e.map(n);for(var r=[],t=0;t<e.length;t++)r.push(n(e[t],t));return r}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};n.exports=function(e,n,r,u){return n=n||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?t(i(e),function(i){var u=encodeURIComponent(o(i))+r;return c(e[i])?t(e[i],function(e){return u+encodeURIComponent(o(e))}).join(n):u+encodeURIComponent(o(e[i]))}).join(n):u?encodeURIComponent(o(u))+r+encodeURIComponent(o(e)):""};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var n=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(r);return n}},{}],4:[function(e,n,r){"use strict";r.decode=r.parse=e("./decode"),r.encode=r.stringify=e("./encode")},{"./decode":2,"./encode":3}]},{},[1]);