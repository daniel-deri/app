(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[15],{1155:function(e,t,a){},1186:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(2),r=a(7),s=a(8),l=a(42),u=a(28),d=a(162),o=a(761),j=a(207),b=a(31),v=a.p+"static/media/time.0b0bfc0e.svg",O=(a(1155),a(9));t.default=Object(l.b)("wallet","poolManager")(Object(l.c)((function(e){var t=e.lang,a=e.wallet,c=void 0===a?{}:a,l=Object(s.useState)(0),f=Object(r.a)(l,2),h=f[0],p=f[1],x=Object(s.useState)(!0),m=Object(r.a)(x,2),w=m[0],N=m[1],g=Object(d.c)(),S=Object(s.useState)({}),k=Object(r.a)(S,2),y=k[0],C=k[1],D=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=5;break}return e.next=3,b.a.request("getDeriBalance",[c.detail.chainId,c.detail.account]);case 3:t=e.sent,p(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=8;break}return e.next=3,b.a.request("getUserInfoAllForAirDrop",[c.detail.account]);case 3:t=e.sent,C(t),N(!t.valid),(new Date).getTime()>=16402536e5&&N(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(n.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.valid){e.next=3;break}return g.error(t["no-deri-to-claim"]),e.abrupt("return");case 3:if(Object(u.e)(c.detail.chainId,y.chainId)){e.next=6;break}return g.error(t["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 6:return e.next=8,b.a.request("mintAirdrop",[y.chainId,c.detail.account],{includeResponse:!0});case 8:(a=e.sent).success||g.error(t["claim-failed"]),a.success&&N(!0),D();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){D(),I()}),[c,c.detail]),Object(O.jsx)("div",{className:"airdrop-box",children:Object(O.jsx)("div",{className:"airdrop-info",children:Object(O.jsxs)("div",{className:"airdrop-info-box",children:[Object(O.jsx)("div",{className:"airdrop-title",children:t.title}),Object(O.jsxs)("div",{className:"wallet-address",children:[Object(O.jsx)("span",{className:"blue-logo"}),Object(u.h)(c.detail.account)]}),Object(O.jsxs)("div",{className:"wallet-balance",children:[t["wallet-balance"]," : ",Object(O.jsx)(o.a,{value:h,decimalScale:0,thousandSeparator:!0})," DERI"]}),Object(O.jsxs)("div",{className:"airdrop-time",children:[Object(O.jsx)("div",{className:"time-logo",children:Object(O.jsx)("img",{src:v,alt:""})}),Object(O.jsxs)("div",{className:"time-text",children:[Object(O.jsxs)("div",{className:"time-title",children:[Object(O.jsx)("div",{children:t["start-time"]}),Object(O.jsx)("div",{children:t["expire-time"]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"2021-12-23 10:00:00 UTC"}),Object(O.jsx)("div",{children:"2021-12-25 10:00:00 UTC"})]})]})]}),Object(O.jsx)("div",{className:"claim",children:Object(O.jsx)(j.a,{fontWeight:"bold",disabled:w,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:T})})]})})})})))},761:function(e,t,a){"use strict";var c,i=a(40),n=a(103),r=a(46),s=a(7),l=a(48),u=a(8),d=(a(75),a(776)),o=a(47),j=a(28),b=a(13),v=a(9),O=Object(o.a)(d.a)(c||(c=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width}));t.a=function(e){var t=Object(u.useState)(Object(v.jsx)("span",{className:"loading-line"})),a=Object(s.a)(t,2),c=a[0],l=a[1],d=Object(u.useState)(!0),o=Object(s.a)(d,2),f=o[0],h=o[1],p=(Object(u.useRef)(),function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t});return Object(u.useEffect)((function(){e.allowZero,e.wallet;var t=e.defaultValue,a=void 0===t?"--":t,c=Object(n.a)(e,["allowZero","wallet","defaultValue"]);p()?(c.value&&/\d+\.0*[1-9]+/.test(c.value)&&0===+Object(b.bg)(c.value).toFixed(+c.decimalScale||2)&&(c.decimalScale=Object(j.c)(c.value)+1),c.value=Object(j.D)(c.value),l(Object(v.jsx)(O,Object(i.a)(Object(i.a)({},c),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}))),h(!1)):f&&l(Object(v.jsx)("span",{className:"loading-line",style:{width:e.width,height:e.height}}));var r=window.setTimeout((function(){p()||l(a)}),3e4);return function(){clearTimeout(r)}}),[e.value,e.decimalScale,e.suffix]),c}}}]);
//# sourceMappingURL=15.4fb8348e.chunk.js.map