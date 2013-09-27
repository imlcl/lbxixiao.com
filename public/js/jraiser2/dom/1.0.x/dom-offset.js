/*!
 * jRaiser 2 Javascript Library
 * dom-offset - v1.0.0 (2013-08-17T21:28:07+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("dom/1.0.x/dom-offset",["dom/1.0.x/sizzle","dom/1.0.x/dom-base","dom/1.0.x/dom-style","base/1.0.x/",null],function(e,t,n){"use strict";function u(){var e=document.body;e?o=e.offsetTop===0:setTimeout(u,5)}function a(e){if(i.isWindow(e)||e.nodeType===9)return null;var t=e.ownerDocument,n=t.documentElement,u=t.body;if(!r.contains(n,e))return{top:0,left:0};if(e===document.body){var a=u.offsetTop,f=u.offsetLeft;return o&&(a+=parseFloat(s.getStyle(e,"marginTop"))||0,f+=parseFloat(s.getStyle(e,"marginLeft"))||0),{top:a,left:f}}var l=e.getBoundingClientRect(),c=i.getWindow(t);return{top:l.top+(c.pageYOffset||n.scrollTop)-(n.clientTop||u.clientTop||0),left:l.left+(c.pageXOffset||n.scrollLeft)-(n.clientLeft||u.clientLeft||0)}}function l(e){var t=e.offsetParent||document.body;while(t&&!f.test(t.nodeName)&&s.getStyle(t,"position")==="static")t=t.offsetParent;return t||document.body}function c(e){if(i.isWindow(e)||e.nodeType===9)return null;var t=l(e),n=a(e),r=f.test(t.nodeName)?{top:0,left:0}:a(t);return n.top-=parseFloat(s.getStyle(e,"marginTop"))||0,n.left-=parseFloat(s.getStyle(e,"marginLeft"))||0,r.top+=parseFloat(s.getStyle(t,"borderTopWidth"))||0,r.left+=parseFloat(s.getStyle(t,"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}}var r=e("./sizzle"),i=e("./dom-base"),s=e("./dom-style"),o=!0;u();var f=/^(?:body|html)$/i;return{getOffset:a,getOffsetParent:l,getPosition:c,shortcuts:{offsetParent:function(){if(this[0])return new this.constructor([l(this[0])])},offset:function(){if(this[0])return a(this[0])},position:function(){if(this[0])return c(this[0])}}}})