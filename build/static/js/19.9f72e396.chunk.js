/*! For license information please see 19.9f72e396.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[19],{608:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(609);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o,r=a(631),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default},609:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.XS="xs",o=t.S="s",r=t.L="l",i=t.XL="xl",s=(t.SIZES=[n,o,r,i],t.CONTRACT="contract"),l=t.CONTRACT_OVERLAY="contract-overlay",u=t.EXPAND_LEFT="expand-left",d=t.EXPAND_RIGHT="expand-right",c=t.EXPAND_UP="expand-up",f=t.EXPAND_DOWN="expand-down",p=t.SLIDE_LEFT="slide-left",h=t.SLIDE_RIGHT="slide-right",m=t.SLIDE_UP="slide-up",b=t.SLIDE_DOWN="slide-down",g=t.ZOOM_IN="zoom-in",F=t.ZOOM_OUT="zoom-out";t.STYLES=[s,l,u,d,c,f,p,h,m,b,g,F]},631:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(2),i=d(r),s=d(a(77)),l=d(a(632)),u=a(609);function d(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=["loading","progress"],h=function(e){function t(){var e,a,n;c(this,t);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return a=n=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.setNode=function(e){n.node=e},n.updateLaddaInstance=function(e){e.loading!==n.props.loading&&(e.loading?n.laddaInstance.start():e.disabled?n.laddaInstance.disable():n.laddaInstance.stop()),e.progress!==n.props.progress&&n.laddaInstance.setProgress(e.progress)},f(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.laddaInstance=l.default.create(this.node),this.props.loading&&this.laddaInstance.start(),"undefined"!==typeof this.props.progress&&this.laddaInstance.setProgress(this.props.progress)}},{key:"componentWillReceiveProps",value:function(e){this.updateLaddaInstance(e)}},{key:"componentWillUnmount",value:function(){this.laddaInstance.remove()}},{key:"render",value:function(){return i.default.createElement("button",n({},function(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}(this.props,p),{className:"ladda-button "+(this.props.className||""),ref:this.setNode,disabled:this.props.disabled||this.props.loading}),i.default.createElement("span",{className:"ladda-label"},this.props.children))}}]),t}(r.Component);h.propTypes={children:s.default.node,className:s.default.string,progress:s.default.number,loading:s.default.bool,disabled:s.default.bool,"data-color":s.default.string,"data-size":s.default.oneOf(u.SIZES),"data-style":s.default.oneOf(u.STYLES),"data-spinner-size":s.default.number,"data-spinner-color":s.default.string,"data-spinner-lines":s.default.number},t.default=h},632:function(e,t,a){!function(t,n){"use strict";e.exports=function(e){var t=[];function a(a){if(void 0!==a){if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var n=document.createElement("span");n.className="ladda-label",o=a,r=n,(i=document.createRange()).selectNodeContents(o),i.surroundContents(r),o.appendChild(r)}var o,r,i,s,l,u=a.querySelector(".ladda-spinner");u||((u=document.createElement("span")).className="ladda-spinner"),a.appendChild(u);var d={start:function(){return s||(s=function(t){var a,n,o=t.offsetHeight;0===o&&(o=parseFloat(window.getComputedStyle(t).height)),o>32&&(o*=.8),t.hasAttribute("data-spinner-size")&&(o=parseInt(t.getAttribute("data-spinner-size"),10)),t.hasAttribute("data-spinner-color")&&(a=t.getAttribute("data-spinner-color")),t.hasAttribute("data-spinner-lines")&&(n=parseInt(t.getAttribute("data-spinner-lines"),10));var r=.2*o;return new e({color:a||"#fff",lines:n||12,radius:r,length:.6*r,width:r<7?2:3,zIndex:"auto",top:"auto",left:"auto",className:""})}(a)),a.disabled=!0,a.setAttribute("data-loading",""),clearTimeout(l),s.spin(u),this.setProgress(0),this},startAfter:function(e){return clearTimeout(l),l=setTimeout((function(){d.start()}),e),this},stop:function(){return d.isLoading()&&(a.disabled=!1,a.removeAttribute("data-loading")),clearTimeout(l),s&&(l=setTimeout((function(){s.stop()}),1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(e){e=Math.max(Math.min(e,1),0);var t=a.querySelector(".ladda-progress");0===e&&t&&t.parentNode?t.parentNode.removeChild(t):(t||((t=document.createElement("div")).className="ladda-progress",a.appendChild(t)),t.style.width=(e||0)*a.offsetWidth+"px")},enable:function(){return this.stop()},disable:function(){return this.stop(),a.disabled=!0,this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(l),a.disabled=!1,a.removeAttribute("data-loading"),s&&(s.stop(),s=null),t.splice(t.indexOf(d),1)}};return t.push(d),d}console.warn("Ladda button target must be defined.")}function n(e,t){if("function"==typeof e.addEventListener){var n=a(e),o=-1;e.addEventListener("click",(function(){var a,r,i=!0,s=function(e,t){for(;e.parentNode&&e.tagName!==t;)e=e.parentNode;return t===e.tagName?e:void 0}(e,"FORM");if(void 0!==s&&!s.hasAttribute("novalidate"))if("function"==typeof s.checkValidity)i=s.checkValidity();else for(var l=(a=s,r=[],["input","textarea","select"].forEach((function(e){for(var t=a.getElementsByTagName(e),n=0;n<t.length;n++)t[n].hasAttribute("required")&&r.push(t[n])})),r),u=0;u<l.length;u++){var d=l[u],c=d.getAttribute("type");if(""===d.value.replace(/^\s+|\s+$/g,"")&&(i=!1),"checkbox"!==c&&"radio"!==c||d.checked||(i=!1),"email"===c&&(i=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(d.value)),"url"===c&&(i=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d.value)),!i)break}i&&(n.startAfter(1),"number"==typeof t.timeout&&(clearTimeout(o),o=setTimeout(n.stop,t.timeout)),"function"==typeof t.callback&&t.callback.apply(null,[n]))}),!1)}}return{bind:function(e,t){var a;if("string"==typeof e)a=document.querySelectorAll(e);else{if("object"!=typeof e)throw new Error("target must be string or object");a=[e]}t=t||{};for(var o=0;o<a.length;o++)n(a[o],t)},create:a,stopAll:function(){for(var e=0,a=t.length;e<a;e++)t[e].stop()}}}(a(633))}()},633:function(e,t,a){var n,o,r;r=function(){"use strict";var e,t,a=["webkit","Moz","ms","O"],n={};function o(e,t){var a,n=document.createElement(e||"div");for(a in t)n[a]=t[a];return n}function r(e){for(var t=1,a=arguments.length;t<a;t++)e.appendChild(arguments[t]);return e}function i(a,o,r,i){var s=["opacity",o,~~(100*a),r,i].join("-"),l=.01+r/i*100,u=Math.max(1-(1-a)/o*(100-l),a),d=e.substring(0,e.indexOf("Animation")).toLowerCase(),c=d&&"-"+d+"-"||"";return n[s]||(t.insertRule("@"+c+"keyframes "+s+"{0%{opacity:"+u+"}"+l+"%{opacity:"+a+"}"+(l+.01)+"%{opacity:1}"+(l+o)%100+"%{opacity:"+a+"}100%{opacity:"+u+"}}",t.cssRules.length),n[s]=1),s}function s(e,t){var n,o,r=e.style;if(void 0!==r[t=t.charAt(0).toUpperCase()+t.slice(1)])return t;for(o=0;o<a.length;o++)if(void 0!==r[n=a[o]+t])return n}function l(e,t){for(var a in t)e.style[s(e,a)||a]=t[a];return e}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)void 0===e[n]&&(e[n]=a[n])}return e}function d(e,t){return"string"==typeof e?e:e[t%e.length]}var c={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:1/4,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};function f(e){this.opts=u(e||{},f.defaults,c)}if(f.defaults={},u(f.prototype,{spin:function(t){this.stop();var a=this,n=a.opts,r=a.el=o(null,{className:n.className});if(l(r,{position:n.position,width:0,zIndex:n.zIndex,left:n.left,top:n.top}),t&&t.insertBefore(r,t.firstChild||null),r.setAttribute("role","progressbar"),a.lines(r,a.opts),!e){var i,s=0,u=(n.lines-1)*(1-n.direction)/2,d=n.fps,c=d/n.speed,f=(1-n.opacity)/(c*n.trail/100),p=c/n.lines;!function e(){s++;for(var t=0;t<n.lines;t++)i=Math.max(1-(s+(n.lines-t)*p)%c*f,n.opacity),a.opacity(r,t*n.direction+u,i,n);a.timeout=a.el&&setTimeout(e,~~(1e3/d))}()}return a},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(t,a){var n,s=0,u=(a.lines-1)*(1-a.direction)/2;function c(e,t){return l(o(),{position:"absolute",width:a.scale*(a.length+a.width)+"px",height:a.scale*a.width+"px",background:e,boxShadow:t,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*s+a.rotate)+"deg) translate("+a.scale*a.radius+"px,0)",borderRadius:(a.corners*a.scale*a.width>>1)+"px"})}for(;s<a.lines;s++)n=l(o(),{position:"absolute",top:1+~(a.scale*a.width/2)+"px",transform:a.hwaccel?"translate3d(0,0,0)":"",opacity:a.opacity,animation:e&&i(a.opacity,a.trail,u+s*a.direction,a.lines)+" "+1/a.speed+"s linear infinite"}),a.shadow&&r(n,l(c("#000","0 0 4px #000"),{top:"2px"})),r(t,r(n,c(d(a.color,s),"0 0 1px rgba(0,0,0,.1)")));return t},opacity:function(e,t,a){t<e.childNodes.length&&(e.childNodes[t].style.opacity=a)}}),"undefined"!==typeof document){t=function(){var e=o("style",{type:"text/css"});return r(document.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}();var p=l(o("group"),{behavior:"url(#default#VML)"});!s(p,"transform")&&p.adj?function(){function e(e,t){return o("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}t.addRule(".spin-vml","behavior:url(#default#VML)"),f.prototype.lines=function(t,a){var n=a.scale*(a.length+a.width),o=2*a.scale*n;function i(){return l(e("group",{coordsize:o+" "+o,coordorigin:-n+" "+-n}),{width:o,height:o})}var s,u=-(a.width+a.length)*a.scale*2+"px",c=l(i(),{position:"absolute",top:u,left:u});function f(t,o,s){r(c,r(l(i(),{rotation:360/a.lines*t+"deg",left:~~o}),r(l(e("roundrect",{arcsize:a.corners}),{width:n,height:a.scale*a.width,left:a.scale*a.radius,top:-a.scale*a.width>>1,filter:s}),e("fill",{color:d(a.color,t),opacity:a.opacity}),e("stroke",{opacity:0}))))}if(a.shadow)for(s=1;s<=a.lines;s++)f(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=a.lines;s++)f(s);return r(t,c)},f.prototype.opacity=function(e,t,a,n){var o=e.firstChild;n=n.shadow&&n.lines||0,o&&t+n<o.childNodes.length&&(o=(o=(o=o.childNodes[t+n])&&o.firstChild)&&o.firstChild)&&(o.opacity=a)}}():e=s(p,"animation")}return f},e.exports?e.exports=r():void 0===(o="function"===typeof(n=r)?n.call(t,a,t,e):n)||(e.exports=o)},848:function(e,t,a){"use strict";var n=a(18),o=a(35),r=a(2),i=a.n(r),s=a(77),l=a.n(s),u=a(571),d=a.n(u),c=a(572),f=["className","cssModule","row","disabled","check","inline","tag"],p={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:c.o,className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,a=e.cssModule,r=e.row,s=e.disabled,l=e.check,u=e.inline,p=e.tag,h=Object(o.a)(e,f),m=Object(c.k)(d()(t,!!r&&"row",l?"form-check":"form-group",!(!l||!u)&&"form-check-inline",!(!l||!s)&&"disabled"),a);return"fieldset"===p&&(h.disabled=s),i.a.createElement(p,Object(n.a)({},h,{className:m}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h},877:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(590);var n,o=a(2),r=(a(18),n||(n={}));r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE";var i=Object(o.createContext)({outlet:null,matches:[]});function s(){var e=Object(o.useContext)(i).matches,t=e[e.length-1];return t?t.params:{}}},906:function(e,t,a){"use strict";var n=a(18),o=a(35),r=a(2),i=a.n(r),s=a(77),l=a.n(s),u=a(571),d=a.n(u),c=a(572),f=["className","cssModule","hidden","widths","tag","check","size","for"],p=l.a.oneOfType([l.a.number,l.a.string]),h=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:c.o,className:l.a.string,cssModule:l.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:l.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},F=function(e){var t=e.className,a=e.cssModule,r=e.hidden,s=e.widths,l=e.tag,u=e.check,p=e.size,h=e.for,m=Object(o.a)(e,f),b=[];s.forEach((function(t,n){var o=e[t];if(delete m[t],o||""===o){var r,i=!n;if(Object(c.i)(o)){var s,l=i?"-":"-"+t+"-";r=g(i,t,o.size),b.push(Object(c.k)(d()(((s={})[r]=o.size||""===o.size,s["order"+l+o.order]=o.order||0===o.order,s["offset"+l+o.offset]=o.offset||0===o.offset,s))),a)}else r=g(i,t,o),b.push(r)}}));var F=Object(c.k)(d()(t,!!r&&"sr-only",!!u&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),a);return i.a.createElement(l,Object(n.a)({htmlFor:h},m,{className:F}))};F.propTypes=m,F.defaultProps=b,t.a=F}}]);
//# sourceMappingURL=19.9f72e396.chunk.js.map