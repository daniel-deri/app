(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[18],{1203:function(e,t,a){},1232:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(2),r=a(5),s=a(10),l=a(44),d=a(30),u=a(163),o=a(793),j=a(208),b=a(32),h=a.p+"static/media/time.77d9d1c0.svg",v=(a(1203),a(9));t.default=Object(l.b)("wallet","poolManager")(Object(l.c)((function(e){var t=e.lang,a=e.wallet,c=void 0===a?{}:a,l=Object(s.useState)(0),f=Object(r.a)(l,2),O=f[0],x=f[1],p=Object(s.useState)(!0),m=Object(r.a)(p,2),w=m[0],g=m[1],N=Object(u.c)(),S=Object(s.useState)({}),k=Object(r.a)(S,2),C=k[0],I=k[1],T=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=5;break}return e.next=3,b.a.request("getDeriBalance",[c.detail.chainId,c.detail.account]);case 3:t=e.sent,x(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=8;break}return e.next=3,b.a.request("getUserInfoAllForAirDrop",[c.detail.account]);case 3:t=e.sent,I(t),g(!t.valid),(new Date).getTime()>=16435368e5&&g(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(n.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.valid){e.next=3;break}return N.error(t["no-deri-to-claim"]),e.abrupt("return");case 3:if(Object(d.f)(c.detail.chainId,C.chainId)){e.next=6;break}return N.error(t["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 6:return e.next=8,b.a.request("mintAirdrop",[C.chainId,c.detail.account],{includeResponse:!0});case 8:(a=e.sent).success||N.error(t["claim-failed"]),a.success&&g(!0),T();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){T(),y()}),[c,c.detail]),Object(v.jsx)("div",{className:"airdrop-box",children:Object(v.jsx)("div",{className:"airdrop-info",children:Object(v.jsxs)("div",{className:"airdrop-info-box",children:[Object(v.jsx)("div",{className:"airdrop-title",children:t.title}),Object(v.jsxs)("div",{className:"wallet-address",children:[Object(v.jsx)("span",{className:"blue-logo"}),Object(d.i)(c.detail.account)]}),Object(v.jsxs)("div",{className:"wallet-balance",children:[t["wallet-balance"]," : ",Object(v.jsx)(o.a,{value:O,decimalScale:0,thousandSeparator:!0})," DERI"]}),Object(v.jsxs)("div",{className:"airdrop-time",children:[Object(v.jsx)("div",{className:"time-logo",children:Object(v.jsx)("img",{src:h,alt:""})}),Object(v.jsxs)("div",{className:"time-text",children:[Object(v.jsxs)("div",{className:"time-title",children:[Object(v.jsx)("div",{children:t["start-time"]}),Object(v.jsx)("div",{children:t["expire-time"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"2022-01-27 10:00:00 UTC"}),Object(v.jsx)("div",{children:"2022-01-30 10:00:00 UTC"})]})]})]}),Object(v.jsx)("div",{className:"claim",children:Object(v.jsx)(j.a,{fontWeight:"bold",disabled:w,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:A})})]})})})})))},793:function(e,t,a){"use strict";var c,i,n=a(19),r=a(104),s=a(52),l=a(5),d=a(48),u=a(10),o=(a(76),a(823)),j=a(47),b=a(30),h=a(13),v=a(9),f=Object(j.a)(o.a)(c||(c=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=j.a.div(i||(i=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(u.useState)(Object(v.jsx)("span",{className:"loading-line"})),a=Object(l.a)(t,2),c=a[0],i=a[1],d=Object(u.useState)(!0),o=Object(l.a)(d,2),j=o[0],x=o[1],p=function(){var t=e.allowZero;return"object"!==Object(s.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(u.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,s=void 0===c?"--":c,l=Object(r.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(p())!t&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&0===+Object(h.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(b.d)(Math.abs(l.value))+2),l.value=Object(b.F)(l.value),l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),i(Object(v.jsx)(f,Object(n.a)(Object(n.a)({},l),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var d=e.width,u=e.height;i(Object(v.jsx)(O,{className:"loading-line",width:d,height:u})),a&&x(!1)}var o=window.setTimeout((function(){p()||i(s)}),6e4);return function(){clearTimeout(o)}}),[e.value,e.decimalScale,e.suffix]),c}}}]);
//# sourceMappingURL=18.b3673ce9.chunk.js.map