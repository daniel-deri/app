(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[16],{1206:function(e,t,a){},1234:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(2),s=a(5),l=a(10),r=a(44),o=a(32),d=a(794),u=a(809),j=a(30),b=(a(860),a(834),a.p+"static/media/logo-deri.8af5c8cc.svg"),h=a(861),p=(a(1206),a(9));t.default=Object(r.b)("wallet")(Object(r.c)((function(e){var t=e.lang,a=e.wallet,c=Object(l.useState)(),r=Object(s.a)(c,2),O=r[0],x=r[1],v=Object(l.useState)(1),f=Object(s.a)(v,2),m=f[0],g=f[1],w=Object(l.useState)([]),N=Object(s.a)(w,2),S=N[0],k=N[1],y=Object(l.useState)([]),E=Object(s.a)(y,2),C=E[0],z=E[1],T=function(){var e=Object(i.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getUserEarnInfo",[a.detail.account,1]);case 2:(t=e.sent)&&(c=0===+t.pnl?0:100*(t.pnl-1),x(c));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getEarnTop50Users",[1]);case 2:(t=e.sent)&&(a=t.map((function(e){return e.pnl=0===+e.pnl?0:100*(e.pnl-1),e.account=Object(j.i)(e.account),e})),k(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e;e=1===m?S.slice(0,10*m):S.slice(10*(m-1),10*m),z(e)}),[S,m]),Object(l.useEffect)((function(){a.isConnected()&&T(),_()}),[a.detail,a]),Object(p.jsxs)("div",{className:"testnet-practice",children:[Object(p.jsxs)("div",{className:"practice-info",children:[Object(p.jsx)("div",{className:"practice-title",children:t["practice-to-earn"]}),Object(p.jsx)("div",{className:"practice-time",children:t.time}),Object(p.jsxs)("div",{className:"practice-info-box",children:[Object(p.jsxs)("div",{className:"practice-info-left",children:[Object(p.jsx)("div",{className:"total-rewards-pool",children:Object(p.jsxs)("div",{className:"total-rewards-box",children:[Object(p.jsx)("div",{className:"deri-logo",children:Object(p.jsx)("img",{src:b,alt:"deri"})}),Object(p.jsxs)("div",{className:"total-rewards-num",children:[Object(p.jsx)("div",{className:"total-rewards-pool-title",children:t["total-rewards-pool"]}),Object(p.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(p.jsx)("span",{children:"50,000"}),Object(p.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(p.jsxs)("div",{className:"your-pnl",children:[Object(p.jsx)("span",{children:Object(p.jsx)(u.a,{text:t["your-pnl"],tip:t["your-pnl-tip"],multiline:!0})}),Object(p.jsx)("span",{className:"your-pnl-pen",children:Object(p.jsx)(d.a,{value:O,suffix:"%",decimalScale:2})})]})]}),Object(p.jsxs)("div",{className:"practice-info-right",children:[Object(p.jsxs)("div",{className:"top-pnl-list-box",children:[Object(p.jsx)("div",{className:"top-pnl-list-box-title",children:t["top-pnl"]}),Object(p.jsxs)("div",{className:"top-pnl-list",children:[Object(p.jsxs)("div",{className:"top-pnl-list-title",children:[Object(p.jsx)("span",{children:t.no}),Object(p.jsx)("span",{children:t["user-addr"]}),Object(p.jsx)("span",{children:t.pnl})]}),Object(p.jsx)("div",{className:"top-pnl-list-info",children:C.map((function(e,t){return Object(p.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(p.jsx)("div",{className:"no",children:e.index}),Object(p.jsx)("div",{className:"address",children:e.account}),Object(p.jsx)("div",{className:"pnl",children:Object(p.jsx)(d.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)}))})]})]}),Object(p.jsxs)("div",{className:"page-box",children:[Object(p.jsx)(h.a,{page:m,onPage:function(e){g(e)},count:S.length,pageSize:10}),Object(p.jsxs)("div",{className:"remind",children:["* ",t["update-every-hour"]]})]})]})]})]}),Object(p.jsx)("div",{className:"detailed-rules",children:Object(p.jsx)("a",{target:"_blank",href:"https://deri-protocol.medium.com/practice-to-earn-4c58c36bd754",rel:"noreferrer",children:t["detailed-rules"]})})]})})))},794:function(e,t,a){"use strict";var c,n,i=a(19),s=a(104),l=a(52),r=a(5),o=a(48),d=a(10),u=(a(76),a(824)),j=a(47),b=a(30),h=a(13),p=a(9),O=Object(j.a)(u.a)(c||(c=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),x=j.a.div(n||(n=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(p.jsx)("span",{className:"loading-line"})),a=Object(r.a)(t,2),c=a[0],n=a[1],o=Object(d.useState)(!0),u=Object(r.a)(o,2),j=u[0],v=u[1],f=function(){var t=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,l=void 0===c?"--":c,r=Object(s.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(f())!t&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&0===+Object(h.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(b.d)(Math.abs(r.value))+2),r.value=Object(b.F)(r.value),r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),n(Object(p.jsx)(O,Object(i.a)(Object(i.a)({},r),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var o=e.width,d=e.height;n(Object(p.jsx)(x,{className:"loading-line",width:o,height:d})),a&&v(!1)}var u=window.setTimeout((function(){f()||n(l)}),6e4);return function(){clearTimeout(u)}}),[e.value,e.decimalScale,e.suffix]),c}},809:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var c,n=a(48),i=a(47),s=a(835),l=a.n(s),r=a(106),o=a(30),d=a(211),u=a(9),j=i.a.div(c||(c=Object(n.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function b(e){var t=e.text,a=e.id,c=void 0===a?Object(o.a)(t):a,n=e.tip,i=e.multiline,s=e.html,b=e.className,h=e.element,p=void 0===h?"":h,O=e.block,x=void 0===O?"block":O,v=e.width,f=void 0===v?"auto":v,m=e.children,g=e.tiggerEvent;return Object(u.jsxs)(j,{className:b,block:x,isWin:d.isWindows,children:[Object(u.jsx)("div",{className:"text","data-for":c,"data-tip":s?l.a.renderToString(p):n,"data-event":Object(o.u)()?"click":g,"data-html":s,children:t||m}),n&&Object(u.jsx)(r.a,{id:c,width:f,padding:"12",place:"bottom",overridePosition:function(e,t,a,c,n,i,s,l){var r=a.getBoundingClientRect(),o=c.getBoundingClientRect(),d=r.x,u=r.y,j=r.height,b=r.width;e.left,e.top;return d+o.width/2>document.documentElement.clientWidth?d-=Math.abs(b-o.width):d-(o.width-b)/2<0?d-=b:d-=(o.width-b)/2,u+j+o.height>=document.documentElement.clientHeight?u=u+j-o.height:u+=j,d<0&&(d=0),u<0&&(u=0),{top:u,left:d}},html:s,borderRadius:8,multiline:i})]})}},861:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(865),n=a(862),i=a.n(n),s=a(864),l=(a(834),a(35)),r=(a(863),a(9));function o({page:e,count:t,onPage:a,pageSize:n,onShowSizeChange:o}){return Object(r.jsx)("div",{className:"pagination",children:Object(r.jsx)(c.a,{selectComponentClass:s.a,onChange:a,current:e,total:t,pageSize:n,prevIcon:()=>Object(r.jsx)(l.a,{token:"arrow-left"}),nextIcon:()=>Object(r.jsx)(l.a,{token:"arrow-right"}),showSizeChanger:!0,onShowSizeChange:o,locale:i.a,pageSizeOptions:["10","20","30","50"]})})}},863:function(e,t,a){}}]);
//# sourceMappingURL=16.de92e9fd.chunk.js.map