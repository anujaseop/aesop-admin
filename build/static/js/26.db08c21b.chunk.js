(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[26],{579:function(e,t,r){"use strict";r.d(t,"g",(function(){return d})),r.d(t,"a",(function(){return l})),r.d(t,"i",(function(){return b})),r.d(t,"d",(function(){return f})),r.d(t,"f",(function(){return j})),r.d(t,"h",(function(){return h})),r.d(t,"e",(function(){return v})),r.d(t,"b",(function(){return O})),r.d(t,"j",(function(){return x})),r.d(t,"c",(function(){return m}));var n=r(27),a=r.n(n),c=r(50),s=r(59),u=r.n(s),i=r(8),o="https://api.aesoptips.com/api/",p={headers:{"Content-Type":"application/json"}},d=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return function(){var p=Object(c.a)(a.a.mark((function c(p){var d;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.get(o+"user?page="+e+"&limit="+t+"&search="+r+"&role="+n+"&flag="+s);case 2:return d=a.sent,p({type:i.t,payload:d.data.result}),a.abrupt("return",d);case 5:case"end":return a.stop()}}),c)})));return function(e){return p.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post(o+"user",e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t){return function(){var r=Object(c.a)(a.a.mark((function r(n){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.put(o+"user/"+e,t);case 2:return c=r.sent,r.abrupt("return",c);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete(o+"user/"+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.patch(o+"user/"+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get(o+"tip/admin?user="+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t,r,n){return function(){var s=Object(c.a)(a.a.mark((function c(s){var p;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.get("".concat(o,"group/admin/subscribe/").concat(e,"?page=").concat(t,"&limit=").concat(r,"&search=").concat(n));case 2:return p=a.sent,s({type:i.v,payload:p.data.result}),a.abrupt("return",p);case 5:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify(e),t.next=3,u.a.post("".concat(o,"group/admin/rating"),n,p);case 3:return c=t.sent,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var r=Object(c.a)(a.a.mark((function r(n){var c,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=JSON.stringify(t),r.next=3,u.a.put("".concat(o,"user/change-status/").concat(e),c,p);case 3:return s=r.sent,r.abrupt("return",s);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat(o,"admin/consultant?type=").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},628:function(e,t,r){"use strict";var n=r(18),a=r(35),c=r(2),s=r.n(c),u=r(77),i=r.n(u),o=r(571),p=r.n(o),d=r(572),l=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],b={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:d.o,responsiveTag:d.o,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},f=function(e){var t=e.className,r=e.cssModule,c=e.size,u=e.bordered,i=e.borderless,o=e.striped,b=e.dark,f=e.hover,j=e.responsive,h=e.tag,v=e.responsiveTag,O=e.innerRef,x=Object(a.a)(e,l),m=Object(d.k)(p()(t,"table",!!c&&"table-"+c,!!u&&"table-bordered",!!i&&"table-borderless",!!o&&"table-striped",!!b&&"table-dark",!!f&&"table-hover"),r),g=s.a.createElement(h,Object(n.a)({},x,{ref:O,className:m}));if(j){var y=Object(d.k)(!0===j?"table-responsive":"table-responsive-"+j,r);return s.a.createElement(v,{className:y},g)}return g};f.propTypes=b,f.defaultProps={tag:"table",responsiveTag:"div"},t.a=f},870:function(e,t,r){"use strict";r.r(t);var n=r(590),a=r(2),c=r(710),s=r(711),u=r(785),i=r(786),o=r(628),p=r(26),d=r(185),l=r(579),b=r(24);t.default=Object(d.b)((function(e){return{}}),{getUserDetailsById:l.f})((function(e){var t=Object(p.g)().id,r=e.getUserDetailsById,d=Object(a.useState)(""),l=Object(n.a)(d,2),f=l[0],j=l[1],h=Object(a.useState)(!1),v=Object(n.a)(h,2),O=v[0],x=v[1];return Object(a.useEffect)((function(){r(t).then((function(e){var t=e.data.result;j(t),x(!0)}))}),[t]),Object(b.jsx)(c.a,{children:Object(b.jsx)(s.a,{xs:"12",children:Object(b.jsx)(u.a,{children:O?Object(b.jsx)(i.a,{children:Object(b.jsx)(o.a,{responsive:!0,striped:!0,className:"custome-table-th-td",children:Object(b.jsx)("tbody",{children:Object(b.jsxs)(a.Fragment,{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsxs)("td",{children:[f.first_name," ",f.last_name]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("td",{children:f.email})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Profile"}),Object(b.jsx)("th",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:f.image,alt:"",width:"50px"})})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Subscription"}),Object(b.jsxs)("td",{children:[null===f||void 0===f?void 0:f.subscription_fee_limit," Months"]})]})," ",Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Investmen amount"}),Object(b.jsxs)("td",{children:[null===f||void 0===f?void 0:f.investment_amount," "]})]})," ",Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Phone Number"}),Object(b.jsx)("td",{children:f.phone_number})]})," ",Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Dmat Account"}),Object(b.jsx)("td",{children:null===f||void 0===f?void 0:f.dmat_account_type})]})]})})})}):""})})})}))}}]);
//# sourceMappingURL=26.db08c21b.chunk.js.map