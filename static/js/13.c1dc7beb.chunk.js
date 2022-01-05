(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[13],{1167:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return g}));var n=a(0),c=a.n(n),i=a(2),r=a(7),o=a(8),s=a(35),l=a(773),u=a.n(l),d=a(867),j=a(868),f=(a(869),a(870)),b=a(28),O=a(761),p=(a(774),a(872)),h=a(9),x="".concat("https://infoapi.deri.finance","/get_pools"),m="".concat("https://infoapi.deri.finance","/get_trade_history"),v=function(t){var e=t.record,a=t.children,n=t.onClick;return Object(h.jsx)("span",{style:{width:"100%",display:"block",height:"44px",lineHeight:"44px"},onClick:function(){return n(e)},children:a})};function g(){var t=Object(o.useState)({}),e=Object(r.a)(t,2),a=e[0],n=e[1],l=Object(o.useState)(m),g=Object(r.a)(l,2),y=g[0],k=g[1],w=Object(s.g)(),C=[{title:"ZONE",dataIndex:"catalog",key:"catalog",width:"15%",render:function(t,e){return Object(h.jsx)(v,{record:e,onClick:S,children:t&&t.indexOf("-")>0?t.substring(t.indexOf("-")+1,t.length).toUpperCase():""})}},{title:"POOL",dataIndex:"catalog",key:"pool",width:"15%",render:function(t,e){return Object(h.jsx)(v,{record:e,onClick:S,children:t?t.toUpperCase():""})}},{title:"BASE TOKEN",dataIndex:"bToken",key:"bToken",width:"20%",render:function(t,e){return Object(h.jsx)(v,{record:e,onClick:S,children:t?t.split("|").join(" | "):""})}},{title:"POOL ADDRESS",dataIndex:"address",key:"address",width:"15%",render:function(t,e){return Object(h.jsx)(v,{record:e,onClick:S,children:Object(b.h)(t)})}},{title:"LIQUIDITY",dataIndex:"liquidity",key:"liquidity",width:"20%",render:function(t,e){return Object(h.jsxs)(v,{record:e,onClick:S,children:[" ",Object(h.jsx)(O.a,{value:t,suffix:" ".concat(e.bToken.split("|")[0]),decimalScale:"2"})]})}},{title:"TRADE VOLUME",dataIndex:"notional",key:"notional",width:"20%",render:function(t,e){return Object(h.jsx)(v,{record:e,onClick:S,children:Object(h.jsx)(O.a,{value:t,suffix:" ".concat(e.bToken.split("|")[0]),decimalScale:"2"})})}}],N=function(){var t=Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get(x);case 2:200===(e=t.sent).status&&e.data.data&&n(e.data.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(t){w.push("/info/".concat(t.address,"/").concat(t.catalog,"/").concat(t.bToken,"/").concat(t.chain))};return Object(o.useEffect)((function(){N()}),[]),Object(h.jsxs)("div",{className:"info-main",children:[Object(h.jsx)("div",{className:"title",children:"Deri Overview"}),Object(h.jsxs)("div",{className:"charts",children:[Object(h.jsx)("div",{className:"graph tvl",children:Object(h.jsx)(j.a,{title:"TVL",url:"".concat("https://infoapi.deri.finance","/get_liquidity_history")})}),Object(h.jsxs)("div",{className:"graph volume24",children:[Object(h.jsx)(p.a,{url:m,onChange:function(t){return k(t)}}),Object(h.jsx)(d.a,{title:"Volume 24H",url:y})]})]}),Object(h.jsx)("div",{className:"list-by-chain",children:Object.keys(a).map((function(t){return Object(h.jsx)(f.a,{columns:C,title:t,initialData:a[t]},t)}))})]})}},761:function(t,e,a){"use strict";var n,c=a(39),i=a(103),r=a(46),o=a(7),s=a(48),l=a(8),u=(a(75),a(776)),d=a(47),j=a(28),f=a(13),b=a(9),O=Object(d.a)(u.a)(n||(n=Object(s.a)(["\n  width : ","px;\n"])),(function(t){return t.width}));e.a=function(t){var e=Object(l.useState)(Object(b.jsx)("span",{className:"loading-line"})),a=Object(o.a)(e,2),n=a[0],s=a[1],u=Object(l.useState)(!0),d=Object(o.a)(u,2),p=d[0],h=d[1],x=(Object(l.useRef)(),function(){var e=t.allowZero;return"object"!==Object(r.a)(t.value)&&void 0!==t.value&&""!==t.value&&!isNaN(t.value)&&"NaN"!==t.value||0===(isNaN(t.value)&&Math.abs(t.value))&&!0===e});return Object(l.useEffect)((function(){t.allowZero,t.wallet;var e=t.defaultValue,a=void 0===e?"--":e,n=Object(i.a)(t,["allowZero","wallet","defaultValue"]);x()?(n.value&&/\d+\.0*[1-9]+/.test(n.value)&&0===+Object(f.bg)(n.value).toFixed(+n.decimalScale||2)&&(n.decimalScale=Object(j.c)(n.value)+1),n.value=Object(j.D)(n.value),s(Object(b.jsx)(O,Object(c.a)(Object(c.a)({},n),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}))),h(!1)):p&&s(Object(b.jsx)("span",{className:"loading-line",style:{width:t.width,height:t.height}}));var r=window.setTimeout((function(){x()||s(a)}),3e4);return function(){clearTimeout(r)}}),[t.value,t.decimalScale,t.suffix]),n}},774:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n,c=a(7),i=a(48),r=a(8),o=a(207),s=a(47),l=a(9),u=s.a.div(n||(n=Object(i.a)(["\n    display : flex;\n    width: 100%;\n    justify-content: space-between;\n  "])));function d(t){var e=t.groups,a=void 0===e?["25%","50%","75%","100%"]:e,n=t.selectedBorderColor,i=t.defaultBorderColor,s=t.onChange,d=t.defaultValue,j=t.outline,f=t.outlineColor,b=t.width,O=t.height,p=t.bgColor,h=t.className,x=Object(r.useState)(d),m=Object(c.a)(x,2),v=m[0],g=m[1];return Object(r.useEffect)((function(){g(d)}),[d]),Object(l.jsx)(u,{className:h,children:a.map((function(t,e){return Object(l.jsx)(o.a,{label:t,selectedBorderColor:n,isSelected:t===v,disabled:!1,outline:j,bgColor:p,className:"g-button",defaultBorderColor:i,outlineColor:f,width:b,height:O,onClick:function(){var e;(e=t)!==v?(g(e),s&&s(e)):e===v?(g(""),s&&s("")):g(e)}},e)}))})}},811:function(t,e,a){"use strict";var n,c=a(48),i=a(28),r=a(804),o=a(47),s=a(9),l=o.a.div(n||(n=Object(c.a)(["\n&.custom-tooltip {\n  padding: 0 0 0 10px;\n  color: #E0ECFF;\n  z-index: 2;\n  .tip-title {\n    font-size: 16px;\n    color: #E0ECFF;\n  }\n  .value {\n    font-size: 32px;\n    font-weight : 700;\n    font-family : Barlow;\n  }\n  .date {\n    margin-top: 4px;\n    margin-left: 4px;\n    font-size: 14px;\n    height: 14px;\n  }\n}\n"])));e.a=function(t){var e=t.title,a=t.active,n=t.payload,c=(t.label,t.lastItem);return a&&n&&n.length?Object(s.jsxs)(l,{className:"custom-tooltip",children:[Object(s.jsx)("div",{className:"tip-title",children:e}),Object(s.jsx)("div",{className:"value",children:Object(i.b)(n[0].payload.value)}),Object(s.jsx)("div",{className:"date",children:"".concat(Object(r.a)(new Date(1e3*n[0].payload.time),"yyyy-mm-dd"),"(UTC)")})]}):e&&c.value?Object(s.jsxs)(l,{className:"custom-tooltip",children:[Object(s.jsx)("div",{className:"tip-title",children:e}),Object(s.jsx)("div",{className:"value",children:Object(i.b)(c.value)}),Object(s.jsx)("div",{className:"date",children:"".concat(Object(r.a)(new Date(1e3*c.timestamp),"yyyy-mm-dd"),"(UTC)")})]}):null}},867:function(t,e,a){"use strict";a.d(e,"a",(function(){return g}));var n=a(0),c=a.n(n),i=a(2),r=a(7),o=a(8),s=a(773),l=a.n(s),u=a(1168),d=a(1169),j=a(1170),f=a(937),b=a(938),O=a(1161),p=a(1159),h=a(804),x=a(811),m=a(28),v=(a(207),a(774),a(9));function g(t){var e=t.url,a=t.title,n=Object(o.useState)(null),s=Object(r.a)(n,2),g=s[0],y=s[1],k=Object(o.useState)({}),w=Object(r.a)(k,2),C=w[0],N=w[1],S=Object(o.useState)({}),D=Object(r.a)(S,2),E=D[0],L=D[1],T=Object(o.useState)({}),I=Object(r.a)(T,2),A=I[0],B=I[1],F=function(){var t=Object(i.a)(c.a.mark((function t(e){var a,n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(e);case 2:a=t.sent,n=[],200===a.status&&Array.isArray(a.data.data)&&(n=a.data.data.sort((function(t,e){return t.timestamp>e.timestamp?1:t.timestamp<e.timestamp?-1:0}))).length>0&&(i=a.data.last_24h?a.data.last_24h:n[n.length-1].value,N({timestamp:n[n.length-1].timestamp,value:i})),y(n.map((function(t){return{time:t.timestamp,value:Number(t.value)}})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(o.useEffect)((function(){var t=document.querySelector(".graph").getBoundingClientRect();L(t),F(e)}),[e]);var z=Object(m.t)()?3:2;return g?Object(v.jsx)(u.a,{height:300,children:Object(v.jsxs)(d.a,{height:300,width:E.width,data:g,children:[Object(v.jsx)("defs",{children:Object(v.jsxs)("linearGradient",{id:"colorArea",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(v.jsx)("stop",{offset:"5%",stopColor:"#3756CD",stopOpacity:.85}),Object(v.jsx)("stop",{offset:"95%",stopColor:"#3756CD",stopOpacity:0})]})}),Object(v.jsx)(j.a,{vertical:!1,strokeDasharray:"9",stroke:"#203B60"}),Object(v.jsx)(f.a,{dataKey:"time",axisLine:!1,tickLine:!1,tick:{fill:"#fff",fontSize:"14"},padding:{left:12,right:12},tickFormatter:function(t){return t&&"auto"!==t?Object(h.a)(new Date(1e3*t),"mm-dd"):""},interval:z}),Object(v.jsx)(b.a,{dataKey:"value",axisLine:!1,tickLine:!1,tickFormatter:m.d,tick:{fill:"#fff",fontSize:"14"},padding:{top:25}}),Object(v.jsx)(O.a,{position:{x:16,y:-106},cursor:{y:A.y-10,height:A.height+10,stroke:"#fff",fill:"#3756CD",strokeWidth:0,fillOpacity:.5},content:Object(v.jsx)(x.a,{title:a,lastItem:C})}),Object(v.jsx)(p.a,{type:"monotone",dataKey:"value",fill:"#3756CD",radius:[10,10,0,0],fillOpacity:.9,onMouseOver:function(t){B(t)}})]})}):null}},868:function(t,e,a){"use strict";a.d(e,"a",(function(){return g}));var n=a(0),c=a.n(n),i=a(2),r=a(7),o=a(8),s=a(773),l=a.n(s),u=a(1168),d=a(1171),j=a(1170),f=a(937),b=a(938),O=a(1161),p=a(1147),h=a(804),x=a(811),m=a(28),v=a(9);function g(t){var e=t.url,a=t.title,n=Object(o.useState)(null),s=Object(r.a)(n,2),g=s[0],y=s[1],k=Object(o.useState)({}),w=Object(r.a)(k,2),C=w[0],N=w[1],S=Object(o.useState)({}),D=Object(r.a)(S,2),E=D[0],L=D[1],T=function(){var t=Object(i.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(e);case 2:a=t.sent,n=[],200===a.status&&Array.isArray(a.data.data)&&(n=a.data.data.sort((function(t,e){return t.timestamp>e.timestamp?1:t.timestamp<e.timestamp?-1:0}))).length>0&&N(n[n.length-1]),y(n.map((function(t){return{time:t.timestamp,value:Number(t.value)}})));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){var t=document.querySelector(".graph").getBoundingClientRect();L(t),T()}),[]),g?Object(v.jsx)(u.a,{height:300,children:Object(v.jsxs)(d.a,{width:E.width,data:g,children:[Object(v.jsx)("defs",{children:Object(v.jsxs)("linearGradient",{id:"colorArea",x1:"0",y1:"1",x2:"0",y2:"0",children:[Object(v.jsx)("stop",{offset:"10%",stopColor:"#2772F0",stopOpacity:.1}),Object(v.jsx)("stop",{offset:"90%",stopColor:"#2772f0",stopOpacity:.3})]})}),Object(v.jsx)(j.a,{vertical:!1,strokeDasharray:"9",stroke:"#203B60"}),Object(v.jsx)(f.a,{dataKey:"time",axisLine:!1,tickLine:!1,tick:{fill:"#fff",fontSize:"14"},padding:{left:12,right:14},allowDataOverflow:!1,tickFormatter:function(t){return t&&"auto"!==t?Object(h.a)(new Date(1e3*t),"mm-dd"):""}}),Object(v.jsx)(b.a,{dataKey:"value",tickLine:!1,axisLine:!1,tickFormatter:m.d,tick:{fill:"#fff",fontSize:"14"},padding:{top:65}}),Object(v.jsx)(O.a,{position:{x:16,y:-106},cursor:!1,content:Object(v.jsx)(x.a,{title:a,lastItem:C})}),Object(v.jsx)(p.a,{type:"monotone",dataKey:"value",stroke:"#3756CD",fillOpacity:.5,strokeWidth:3,fill:"url(#colorArea)"})]})}):null}},869:function(t,e,a){},870:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),c=a.n(n),i=a(2),r=a(7),o=a(8),s=a(941),l=a(944),u=(a(939),a(940)),d=a.n(u),j=a(773),f=a.n(j),b=(a(871),a(34)),O=a(9);function p(t){var e=t.title,a=t.columns,n=t.initialData,l=void 0===n?[]:n,u=t.url,d=t.pagination,j=Object(o.useState)(l),b=Object(r.a)(j,2),p=b[0],x=b[1],m=Object(o.useState)(1),v=Object(r.a)(m,2),g=v[0],y=v[1],k=Object(o.useState)(),w=Object(r.a)(k,2),C=w[0],N=w[1],S=Object(o.useState)(10),D=Object(r.a)(S,2),E=D[0],L=(D[1],function(){var t=Object(i.a)(c.a.mark((function t(e,a){var n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,d&&(n="".concat(n,"&page=").concat(a,"&page_amount=").concat(E)),t.next=4,f.a.get(n);case 4:200===(i=t.sent).status&&Array.isArray(i.data.data)&&(N(i.data.count/E),i.data.count%E>0&&N(Math.floor(i.data.count/E)+1),x(i.data.data),y(a));case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),T=function(t){L(u,t)};return Object(o.useEffect)((function(){u&&L(u,1)}),[u]),Object(O.jsxs)("div",{className:"table",children:[Object(O.jsx)("div",{className:"t-title",children:e}),Object(O.jsx)(s.a,{data:p,columns:a,footer:function(){return d&&Object(O.jsx)(h,{page:g,count:C,onPage:T})}})]})}function h(t){var e=t.page,a=t.count,n=t.onPage;return Object(O.jsx)("div",{className:"pagination",children:Object(O.jsx)(l.a,{onChange:n,current:e,total:a,prevIcon:function(){return Object(O.jsx)(b.a,{token:"arrow-left"})},nextIcon:function(){return Object(O.jsx)(b.a,{token:"arrow-right"})},locale:d.a})})}},871:function(t,e,a){},872:function(t,e,a){"use strict";var n,c=a(48),i=a(774),r=a(47),o=a(28),s=a(9),l=r.a.div(n||(n=Object(c.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 70px;\n  margin-right: 32px;\n  .filter{\n    justify-content: flex-end;\n    .g-button {\n      margin-left: 8px ;\n    }\n  }\n"])));e.a=function(t){var e=t.url,a=t.onChange,n=Object(o.t)()?64:96;return Object(s.jsx)(l,{children:Object(s.jsx)(i.a,{groups:["WEEKLY","MONTHLY"],selectedBorderColor:"rgba(205, 122, 55)",defaultValue:"MONTHLY",defaultBorderColor:"rgba(85, 119, 253, 0.1)",bgColor:"rgba(85, 119, 253, 0.1)",className:"filter",width:n,height:"32",onChange:function(t){var n=new URL(e),c=n.searchParams;c.has("cycle")&&c.delete("cycle"),c.append("cycle",t),a(n.toString())},outline:!0,outlineColor:"rgba(205, 122, 55, 0.5)"})})}}}]);
//# sourceMappingURL=13.c1dc7beb.chunk.js.map