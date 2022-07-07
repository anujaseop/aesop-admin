/*! For license information please see 18.b7ef4f0d.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[18],{594:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=function(e,t,a,n){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i="";return!0===r&&""===e?"".concat(t," field is required"):(e.length<a&&(i="".concat(t," must be greater then ")+a+" characters"),e.length>n&&(i="".concat(t," field must be less then ")+n+" characters"),i)},r=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!0===a&&""===e)return"".concat(t," field is required");var n=/^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-z0-9]+([a-z0-9]+)*(\.[a-z0-9]+([a-z0-9]+)*)*\.[a-z]{2,4}$/;return n.test(e)?"":"Enter a valid email: "+e},i=function(e,t){var a="";return""!==e&&void 0!==e&&null!==e||(a="".concat(t," field is required")),a}},608:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(609);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var r,i=a(631),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default},609:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.XS="xs",r=t.S="s",i=t.L="l",o=t.XL="xl",s=(t.SIZES=[n,r,i,o],t.CONTRACT="contract"),l=t.CONTRACT_OVERLAY="contract-overlay",c=t.EXPAND_LEFT="expand-left",u=t.EXPAND_RIGHT="expand-right",d=t.EXPAND_UP="expand-up",p=t.EXPAND_DOWN="expand-down",f=t.SLIDE_LEFT="slide-left",h=t.SLIDE_RIGHT="slide-right",m=t.SLIDE_UP="slide-up",b=t.SLIDE_DOWN="slide-down",g=t.ZOOM_IN="zoom-in",v=t.ZOOM_OUT="zoom-out";t.STYLES=[s,l,c,u,d,p,f,h,m,b,g,v]},631:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(2),o=u(i),s=u(a(77)),l=u(a(632)),c=a(609);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=["loading","progress"],h=function(e){function t(){var e,a,n;d(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return a=n=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.setNode=function(e){n.node=e},n.updateLaddaInstance=function(e){e.loading!==n.props.loading&&(e.loading?n.laddaInstance.start():e.disabled?n.laddaInstance.disable():n.laddaInstance.stop()),e.progress!==n.props.progress&&n.laddaInstance.setProgress(e.progress)},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.laddaInstance=l.default.create(this.node),this.props.loading&&this.laddaInstance.start(),"undefined"!==typeof this.props.progress&&this.laddaInstance.setProgress(this.props.progress)}},{key:"componentWillReceiveProps",value:function(e){this.updateLaddaInstance(e)}},{key:"componentWillUnmount",value:function(){this.laddaInstance.remove()}},{key:"render",value:function(){return o.default.createElement("button",n({},function(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}(this.props,f),{className:"ladda-button "+(this.props.className||""),ref:this.setNode,disabled:this.props.disabled||this.props.loading}),o.default.createElement("span",{className:"ladda-label"},this.props.children))}}]),t}(i.Component);h.propTypes={children:s.default.node,className:s.default.string,progress:s.default.number,loading:s.default.bool,disabled:s.default.bool,"data-color":s.default.string,"data-size":s.default.oneOf(c.SIZES),"data-style":s.default.oneOf(c.STYLES),"data-spinner-size":s.default.number,"data-spinner-color":s.default.string,"data-spinner-lines":s.default.number},t.default=h},632:function(e,t,a){!function(t,n){"use strict";e.exports=function(e){var t=[];function a(a){if(void 0!==a){if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var n=document.createElement("span");n.className="ladda-label",r=a,i=n,(o=document.createRange()).selectNodeContents(r),o.surroundContents(i),r.appendChild(i)}var r,i,o,s,l,c=a.querySelector(".ladda-spinner");c||((c=document.createElement("span")).className="ladda-spinner"),a.appendChild(c);var u={start:function(){return s||(s=function(t){var a,n,r=t.offsetHeight;0===r&&(r=parseFloat(window.getComputedStyle(t).height)),r>32&&(r*=.8),t.hasAttribute("data-spinner-size")&&(r=parseInt(t.getAttribute("data-spinner-size"),10)),t.hasAttribute("data-spinner-color")&&(a=t.getAttribute("data-spinner-color")),t.hasAttribute("data-spinner-lines")&&(n=parseInt(t.getAttribute("data-spinner-lines"),10));var i=.2*r;return new e({color:a||"#fff",lines:n||12,radius:i,length:.6*i,width:i<7?2:3,zIndex:"auto",top:"auto",left:"auto",className:""})}(a)),a.disabled=!0,a.setAttribute("data-loading",""),clearTimeout(l),s.spin(c),this.setProgress(0),this},startAfter:function(e){return clearTimeout(l),l=setTimeout((function(){u.start()}),e),this},stop:function(){return u.isLoading()&&(a.disabled=!1,a.removeAttribute("data-loading")),clearTimeout(l),s&&(l=setTimeout((function(){s.stop()}),1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(e){e=Math.max(Math.min(e,1),0);var t=a.querySelector(".ladda-progress");0===e&&t&&t.parentNode?t.parentNode.removeChild(t):(t||((t=document.createElement("div")).className="ladda-progress",a.appendChild(t)),t.style.width=(e||0)*a.offsetWidth+"px")},enable:function(){return this.stop()},disable:function(){return this.stop(),a.disabled=!0,this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(l),a.disabled=!1,a.removeAttribute("data-loading"),s&&(s.stop(),s=null),t.splice(t.indexOf(u),1)}};return t.push(u),u}console.warn("Ladda button target must be defined.")}function n(e,t){if("function"==typeof e.addEventListener){var n=a(e),r=-1;e.addEventListener("click",(function(){var a,i,o=!0,s=function(e,t){for(;e.parentNode&&e.tagName!==t;)e=e.parentNode;return t===e.tagName?e:void 0}(e,"FORM");if(void 0!==s&&!s.hasAttribute("novalidate"))if("function"==typeof s.checkValidity)o=s.checkValidity();else for(var l=(a=s,i=[],["input","textarea","select"].forEach((function(e){for(var t=a.getElementsByTagName(e),n=0;n<t.length;n++)t[n].hasAttribute("required")&&i.push(t[n])})),i),c=0;c<l.length;c++){var u=l[c],d=u.getAttribute("type");if(""===u.value.replace(/^\s+|\s+$/g,"")&&(o=!1),"checkbox"!==d&&"radio"!==d||u.checked||(o=!1),"email"===d&&(o=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(u.value)),"url"===d&&(o=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(u.value)),!o)break}o&&(n.startAfter(1),"number"==typeof t.timeout&&(clearTimeout(r),r=setTimeout(n.stop,t.timeout)),"function"==typeof t.callback&&t.callback.apply(null,[n]))}),!1)}}return{bind:function(e,t){var a;if("string"==typeof e)a=document.querySelectorAll(e);else{if("object"!=typeof e)throw new Error("target must be string or object");a=[e]}t=t||{};for(var r=0;r<a.length;r++)n(a[r],t)},create:a,stopAll:function(){for(var e=0,a=t.length;e<a;e++)t[e].stop()}}}(a(633))}()},633:function(e,t,a){var n,r,i;i=function(){"use strict";var e,t,a=["webkit","Moz","ms","O"],n={};function r(e,t){var a,n=document.createElement(e||"div");for(a in t)n[a]=t[a];return n}function i(e){for(var t=1,a=arguments.length;t<a;t++)e.appendChild(arguments[t]);return e}function o(a,r,i,o){var s=["opacity",r,~~(100*a),i,o].join("-"),l=.01+i/o*100,c=Math.max(1-(1-a)/r*(100-l),a),u=e.substring(0,e.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";return n[s]||(t.insertRule("@"+d+"keyframes "+s+"{0%{opacity:"+c+"}"+l+"%{opacity:"+a+"}"+(l+.01)+"%{opacity:1}"+(l+r)%100+"%{opacity:"+a+"}100%{opacity:"+c+"}}",t.cssRules.length),n[s]=1),s}function s(e,t){var n,r,i=e.style;if(void 0!==i[t=t.charAt(0).toUpperCase()+t.slice(1)])return t;for(r=0;r<a.length;r++)if(void 0!==i[n=a[r]+t])return n}function l(e,t){for(var a in t)e.style[s(e,a)||a]=t[a];return e}function c(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)void 0===e[n]&&(e[n]=a[n])}return e}function u(e,t){return"string"==typeof e?e:e[t%e.length]}var d={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:1/4,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};function p(e){this.opts=c(e||{},p.defaults,d)}if(p.defaults={},c(p.prototype,{spin:function(t){this.stop();var a=this,n=a.opts,i=a.el=r(null,{className:n.className});if(l(i,{position:n.position,width:0,zIndex:n.zIndex,left:n.left,top:n.top}),t&&t.insertBefore(i,t.firstChild||null),i.setAttribute("role","progressbar"),a.lines(i,a.opts),!e){var o,s=0,c=(n.lines-1)*(1-n.direction)/2,u=n.fps,d=u/n.speed,p=(1-n.opacity)/(d*n.trail/100),f=d/n.lines;!function e(){s++;for(var t=0;t<n.lines;t++)o=Math.max(1-(s+(n.lines-t)*f)%d*p,n.opacity),a.opacity(i,t*n.direction+c,o,n);a.timeout=a.el&&setTimeout(e,~~(1e3/u))}()}return a},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(t,a){var n,s=0,c=(a.lines-1)*(1-a.direction)/2;function d(e,t){return l(r(),{position:"absolute",width:a.scale*(a.length+a.width)+"px",height:a.scale*a.width+"px",background:e,boxShadow:t,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*s+a.rotate)+"deg) translate("+a.scale*a.radius+"px,0)",borderRadius:(a.corners*a.scale*a.width>>1)+"px"})}for(;s<a.lines;s++)n=l(r(),{position:"absolute",top:1+~(a.scale*a.width/2)+"px",transform:a.hwaccel?"translate3d(0,0,0)":"",opacity:a.opacity,animation:e&&o(a.opacity,a.trail,c+s*a.direction,a.lines)+" "+1/a.speed+"s linear infinite"}),a.shadow&&i(n,l(d("#000","0 0 4px #000"),{top:"2px"})),i(t,i(n,d(u(a.color,s),"0 0 1px rgba(0,0,0,.1)")));return t},opacity:function(e,t,a){t<e.childNodes.length&&(e.childNodes[t].style.opacity=a)}}),"undefined"!==typeof document){t=function(){var e=r("style",{type:"text/css"});return i(document.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}();var f=l(r("group"),{behavior:"url(#default#VML)"});!s(f,"transform")&&f.adj?function(){function e(e,t){return r("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}t.addRule(".spin-vml","behavior:url(#default#VML)"),p.prototype.lines=function(t,a){var n=a.scale*(a.length+a.width),r=2*a.scale*n;function o(){return l(e("group",{coordsize:r+" "+r,coordorigin:-n+" "+-n}),{width:r,height:r})}var s,c=-(a.width+a.length)*a.scale*2+"px",d=l(o(),{position:"absolute",top:c,left:c});function p(t,r,s){i(d,i(l(o(),{rotation:360/a.lines*t+"deg",left:~~r}),i(l(e("roundrect",{arcsize:a.corners}),{width:n,height:a.scale*a.width,left:a.scale*a.radius,top:-a.scale*a.width>>1,filter:s}),e("fill",{color:u(a.color,t),opacity:a.opacity}),e("stroke",{opacity:0}))))}if(a.shadow)for(s=1;s<=a.lines;s++)p(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=a.lines;s++)p(s);return i(t,d)},p.prototype.opacity=function(e,t,a,n){var r=e.firstChild;n=n.shadow&&n.lines||0,r&&t+n<r.childNodes.length&&(r=(r=(r=r.childNodes[t+n])&&r.firstChild)&&r.firstChild)&&(r.opacity=a)}}():e=s(f,"animation")}return p},e.exports?e.exports=i():void 0===(r="function"===typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},713:function(e,t,a){"use strict";t.a=a.p+"static/media/logo-b.ca078e0d.png"},722:function(e,t,a){"use strict";a(2);var n=a(185),r=a(53),i=a(24);t.a=Object(n.b)((function(e){return{alerts:e.alert}}),{deleteAlert:r.a})((function(e){var t=e.alerts;e.deleteAlert;return null!==t&&t.length>0&&t.map((function(e){return Object(i.jsx)("div",{className:"alert alert-".concat(e.alertType),children:e.msg},e.id)}))}))},888:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a.n(n),i=a(50),o=a(191),s=a(187),l=a(188),c=a(190),u=a(189),d=a(2),p=a(26),f=a(185),h=a(594),m=a(712),b=a(710),g=a(711),v=a(889),F=a(785),y=a(786),j=a(827),x=a(723),O=a(724),w=a(620),N=a(725),_=a(53),A=a(722),E=a(192),D=a(571),C=a.n(D),z=a(713),T=a(608),k=a.n(T),I=(a(414),a(24)),S=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onInputChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.onSubmitForm=function(){var t=Object(i.a)(r.a.mark((function t(a){var n,i,o,s,l,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,i=n.email,o=n.password,s=n.errors,l=!0,(c=Object(h.a)(i,"Email",1,50))&&(l=!1,s.error_email=c),(c=Object(h.c)(o,"Password",1,25))&&(l=!1,s.error_password=c),!0!==l){t.next=13;break}return e.setState({loginLoading:!0}),t.next=11,e.props.login({email:i,password:o}).then((function(t){e.setState({loginLoading:!1})}));case 11:t.next=14;break;case 13:e.setState({errors:s});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",password:"",loginLoading:!1,errors:{error_email:"",error_password:""}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.deleteAllAlert()}},{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.errors,i=t.loginLoading,o=this.props.auth,s=o.isAuthenticated,l=o.loading;return!0===s&&!1===l?Object(I.jsx)(p.a,{to:"/user"}):Object(I.jsx)("div",{className:"app flex-row align-items-center",children:Object(I.jsx)(m.a,{children:Object(I.jsx)(b.a,{className:"justify-content-center",children:Object(I.jsx)(g.a,{md:"8",children:Object(I.jsxs)(v.a,{children:[Object(I.jsx)(F.a,{className:" p-4",children:Object(I.jsxs)(y.a,{children:[Object(I.jsx)(A.a,{}),Object(I.jsxs)(j.a,{onSubmit:this.onSubmitForm,children:[Object(I.jsx)("h1",{children:"Login"}),Object(I.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(I.jsxs)(x.a,{className:"mb-3",children:[Object(I.jsx)(O.a,{addonType:"prepend",children:Object(I.jsx)(w.a,{children:Object(I.jsx)("i",{className:"icon-user"})})}),Object(I.jsx)(N.a,{type:"text",placeholder:"Email",name:"email",value:a,onChange:function(t){return e.onInputChange(t)},className:C()({input:!0},{"is-invalid":r.error_email.length>0})}),r.error_email?Object(I.jsx)("em",{id:"email-error",className:"error invalid-feedback",children:r.error_email}):null]}),Object(I.jsxs)(x.a,{className:"mb-4",children:[Object(I.jsx)(O.a,{addonType:"prepend",children:Object(I.jsx)(w.a,{children:Object(I.jsx)("i",{className:"icon-lock"})})}),Object(I.jsx)(N.a,{type:"password",placeholder:"Password",name:"password",value:n,onChange:function(t){return e.onInputChange(t)},className:C()({input:!0},{"is-invalid":r.error_password.length>0})}),r.error_password?Object(I.jsx)("em",{id:"email-error",className:"error invalid-feedback",children:r.error_password}):null]}),Object(I.jsx)(b.a,{children:Object(I.jsx)(g.a,{xs:"6",children:Object(I.jsx)(k.a,{className:"btn btnColor px-4 btn-ladda",loading:i,"data-color":"blue","data-style":T.ZOOM_OUT,children:"Login"})})})]})]})}),Object(I.jsx)(F.a,{className:"text-white logincard d-md-down-none",children:Object(I.jsx)(y.a,{className:"d-flex align-items-center justify-content-center",children:Object(I.jsx)("div",{className:"cardtext  pt-0",children:Object(I.jsx)("img",{src:z.a,alt:"App Logo",style:{width:"162px"}})})})})]})})})})})}}]),a}(d.Component);t.default=Object(f.b)((function(e){return{auth:e.auth}}),{setAlert:_.c,deleteAlert:_.a,login:E.c,deleteAllAlert:_.b})(S)}}]);
//# sourceMappingURL=18.b7ef4f0d.chunk.js.map