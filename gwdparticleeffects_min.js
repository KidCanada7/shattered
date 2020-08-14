(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var f="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var l={G:!0},m={};try{m.__proto__=l;k=m.G;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=h,r=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var t=function(a,b,c){a=parseInt(a.getAttribute(b),10);isNaN(a)&&(a=c);return a},u=function(a){a=parseFloat(a.getAttribute("time-limit"));isFinite(a)||(a=-1);return 0<a?a:-1};var v=/[^\d]+$/,w=function(a,b,c){if(!a.hasAttribute(b))return 0;b=a.getAttribute(b);if(isNaN(parseFloat(b)))c=0;else{a=parseFloat(b);(b=(b=b.match(v))&&b[0]||null)&&(b=b.trim());var d=a;"%"==b&&(d=Number((a/100*c).toFixed(2)));c=d}return c};var x=function(a,b){var c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d)};var y=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},z=function(a){if(y(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&y(a))return a;return null};var A=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(A,Error);A.prototype.name="CustomError";var B=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");A.call(this,c+a[d])};r(B,A);B.prototype.name="AssertionError";var C=function(a,b,c){if("number"!==typeof a){var d=typeof a,e=["object"!=d?d:a?Array.isArray(a)?"array":d:"null",a];d="Assertion failed";b?(d+=": "+b,e=Array.prototype.slice.call(arguments,2)):d+=": Expected number but got %s: %s.";throw new B(""+d,e||[]);}return a};var D=function(){var a=HTMLElement.call(this)||this;a.canvas=null;a.j=!1;a.a=[];a.s=a.J.bind(a);a.I=a.K.bind(a);a.h=a.L.bind(a);a.l=[];a.u=a.B.bind(a);a.b=null;a.c=2;a.m=null;a.i=-1;a.o=null;a.D=!1;return a},E=HTMLElement;D.prototype=f(E.prototype);D.prototype.constructor=D;if(n)n(D,E);else for(var G in E)if("prototype"!=G)if(Object.defineProperties){var H=Object.getOwnPropertyDescriptor(E,G);H&&Object.defineProperty(D,G,H)}else D[G]=E[G];
D.prototype.connectedCallback=function(){var a=this;this.width=this.clientWidth;this.height=this.clientHeight;this.g=window.devicePixelRatio;this.canvas||(this.canvas=this.ownerDocument.createElement("canvas"),this.appendChild(this.canvas));this.canvas.style.width=this.width+"px";this.canvas.style.height=this.height+"px";this.canvas.width=this.width*this.g;this.canvas.height=this.height*this.g;this.f=this.canvas.getContext("2d");this.H=this.hasAttribute("autoplay");null===this.o?this.i=1E3*u(this):
this.D&&this.play();setTimeout(function(){if(!a.gwdIsLoaded()){var b=z(a);b?b.gwdIsLoaded()&&a.gwdLoad():a.gwdLoad()}},0)};D.prototype.disconnectedCallback=function(){this.gwdIsLoaded()?(this.D=0==this.c,this.pause(!1)):I(this)};
D.prototype.gwdLoad=function(){if(!this.gwdIsLoaded()){I(this);for(var a=0,b=0;b<this.children.length;b++){var c=this.children[b];if(J(c))c.gwdIsLoaded()||K(this,c),this.addEventListener("request-reload",this.I,!1);else if("image"==c.getAttribute("assettype")){var d=c.getAttribute("source"),e=w(c,"left",this.width),g=w(c,"top",this.height),p=w(c,"width",this.width),q=w(c,"height",this.height),F=t(c,"opacity",100);d={canvas:null,src:d,A:e*this.g,C:g*this.g,F:p*this.g,v:q*this.g,opacity:Math.min((0<=
F?F:100)/100,1)};e=this.ownerDocument.createElement("img");this.a.push(e);e.addEventListener("load",this.h,!1);e.addEventListener("error",this.h,!1);this.l[a]=d;c.setAttribute("image-index",a);e.setAttribute("image-index",a++);e.width=d.F;e.height=d.v;e.src=d.src}}this.j=!0;L(this)}};D.prototype.gwdIsLoaded=function(){return this.j&&0==this.a.length};
var K=function(a,b){-1==a.a.indexOf(b)&&(a.a.push(b),b.addEventListener("ready",a.s,!1));b.gwdLoad()},I=function(a){for(;a.a.length;){var b=a.a.pop();b.removeEventListener("ready",a.s,!1);b.removeEventListener("load",a.h,!1);b.removeEventListener("error",a.h,!1)}a.j=!1;a.l.length=0},L=function(a){a.j&&0==a.a.length&&(x("ready",a),a.H?a.play(!0):null!=a.m&&a.play(a.m),a.m=null)};
D.prototype.J=function(a){a=a.target;var b=this.a.indexOf(a);0<=b&&(this.a.splice(b,1),a.removeEventListener("ready",this.s,!1),L(this))};D.prototype.K=function(a){K(this,a.target)};
D.prototype.L=function(a){var b=this,c=a.target;c.removeEventListener("load",this.h,!1);c.removeEventListener("error",this.h,!1);var d=this.a.indexOf(c);if(0<=d){var e=parseInt(c.getAttribute("image-index"),10);if("load"==a.type){var g=this.ownerDocument.createElement("canvas");g.width=c.width;g.height=c.height;var p=this.l[e],q=g.getContext("2d");q.globalAlpha=p.opacity;setTimeout(function(){d=b.a.indexOf(c);b.a.splice(d,1);q.drawImage(c,0,0,c.width,c.height);p.canvas=g;L(b)},50)}else this.a.splice(d,
1),L(this)}};var J=function(a){return"gwd-particles"==a.tagName.toLowerCase()};D.prototype.play=function(a){a=void 0===a?!0:a;if(!this.gwdIsLoaded())this.m=0!=a;else if(0!=this.c){null==this.o&&(this.o=Date.now());if(2==this.c)for(var b=0;b<this.children.length;b++){var c=this.children[b].hasAttribute("autoplay");J(this.children[b])&&c&&this.children[b].play()}0==a?this.B(!1):this.b=requestAnimationFrame(this.u);this.c=0}};
D.prototype.pause=function(a){a=void 0===a?!0:a;this.b&&(cancelAnimationFrame(this.b),this.b=null,a&&(this.i=-1),this.c=1)};D.prototype.stop=function(){if(2!=this.c){for(var a=0;a<this.children.length;a++)J(this.children[a])&&this.children[a].stop();this.b&&(cancelAnimationFrame(this.b),this.b=null,this.i=-1);this.c=2;this.f.clearRect(0,0,this.canvas.width,this.canvas.height)}};
D.prototype.B=function(a){if(0!=a&&0<this.i&&Date.now()-C(this.o)>this.i)this.pause(),x("timelimitreached",this);else{this.f.clearRect(0,0,this.canvas.width,this.canvas.height);for(var b=0;b<this.children.length;b++){var c=this.children[b];c.hasAttribute("hidden")||(J(c)&&c.gwdIsLoaded()?c.updateAndDraw():"image"==c.getAttribute("assettype")&&(c=t(c,"image-index",-1),-1!=c&&(c=this.l[c],c.canvas?this.f.drawImage(c.canvas,c.A,c.C):this.hasAttribute("data-gwd-node")&&(this.f.strokeStyle="#c0c0c0",this.f.lineWidth=
1,this.f.strokeRect(c.A,c.C,c.F,c.v)))))}0!=a&&(this.b=requestAnimationFrame(this.u))}};customElements.define("gwd-particleeffects",D);}).call(this);
