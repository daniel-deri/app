(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[10],{564:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),s=n(2),r=n(17),i=n(4),o=n(48);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,u=e.afterClick,d=Object(i.useState)(c?"disabled":"enabled"),b=Object(r.a)(d,2),j=b[0],p=b[1],O=Object(i.useState)(!1),f=Object(r.a)(O,2),h=f[0],x=f[1],y=Object(i.useRef)(null),m=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===j){e.next=2;break}return e.abrupt("return");case 2:return p("disabled"),x(!0),y.current&&(y.current.style.display="inline-block"),e.next=7,l();case 7:e.sent&&u&&u(),y.current&&(y.current.style.display="none"),p("enabled"),x(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("button",{className:n,onClick:m,children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:y,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),h?"PENDING":t]})}},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(22),a=n(567),s=n(17),r=n(4),i=n(566),o=n(48);function l(e){var t=Object(r.useState)("--"),n=Object(s.a)(t,2),l=n[0],u=n[1];return Object(r.useEffect)((function(){var t=e.allowZero,n=Object(a.a)(e,["allowZero"]);return(e.value||0===Math.abs(e.value)&&!0===t)&&u(Object(o.jsx)(i.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},576:function(e,t,n){"use strict";var c=n(17),a=n(4),s=n(24),r=n(158),i=n(49),o=n(565),l=n(156),u=n(564),d=n(84),b=n(48),j=r[i.DeriEnv.get()].chainInfo;t.a=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,n=e.pool,r=Object(a.useState)(""),l=Object(c.a)(r,2),p=l[0],O=l[1],f="logo ".concat(n.bTokenSymbol),h=Object(s.g)(),x=function(){var e=Object(i.getUserInfoAllForAirDrop)(n.pool);if(e){var c=e.chainId;if(!e.valid)return void alert("No DERI to claim");if(!Object(d.b)(t.detail.chainId,c))return void alert("Please switch to BSC to claim DERI");Object(i.mintAirdrop)(c,t.detail.account)}},y=function(){return h.push("/mining/".concat(n.chainId,"/").concat(n.type,"/").concat(n.symbol,"/").concat(n.bTokenSymbol,"/").concat(n.address))},m=function(){t.connect()};return Object(a.useEffect)((function(){return n&&n.airdrop?t.isConnected()?O(Object(b.jsx)(u.a,{btnText:"CLAIM",click:x})):O(Object(b.jsx)(u.a,{btnText:"Connect Wallet",click:m})):O(Object(b.jsx)("button",{onClick:y,children:"STAKING"})),function(){}}),[n]),Object(b.jsxs)("div",{className:"pool",children:[Object(b.jsx)("div",{className:"pool-header",children:Object(b.jsx)("div",{className:"network",children:n.network&&n.network.toUpperCase()})}),Object(b.jsx)("div",{className:"pool-info",children:Object(b.jsxs)("div",{className:"info-center",children:[Object(b.jsxs)("div",{className:"top-info",children:[Object(b.jsx)("div",{className:f}),Object(b.jsxs)("div",{className:"pool-detail",children:[Object(b.jsx)("div",{className:"base-token",children:n.bTokenSymbol}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n.airdrop?"Total":"Pool Liq"}),Object(b.jsx)(o.a,{value:n.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:n.sushiApy?7:0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Symbol"}),n.symbol]}),Object(b.jsxs)("div",{className:"apy",children:[Object(b.jsx)("span",{children:"APY"}),Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{className:n.sushiApy?"sushi-apy-underline":"",title:n.sushiApy&&"DERI-APY",children:n.apy?Object(b.jsx)(o.a,{value:n.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),n.sushiApy&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{children:" + "}),Object(b.jsxs)("span",{className:n.sushiApy?"sushi-apy-underline":"",title:n.sushiApy&&"SUSHI-APY",children:[" ",Object(b.jsx)(o.a,{value:n.sushiApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(b.jsxs)("div",{className:"pool-address",children:[Object(b.jsx)("span",{children:"Address"}),n.airdrop?"--":Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(j[n.chainId].viewUrl,"/address/").concat(n.address||n.pool),children:n.pool})]})]})]}),Object(b.jsx)("div",{className:"bottom-btn",children:p})]})})]})})))},577:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),s=n(2),r=n(17),i=n(4),o=n(49),l=n(158),u=n(84),d=o.DeriEnv.get(),b=l[d].chainInfo;function j(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(i.useState)([]),j=Object(r.a)(l,2),p=j[0],O=j[1];return Object(i.useEffect)((function(){var e=Object(o.getContractAddressConfig)(d).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,s=t.pool||"",e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,liquidity:n.liquidity,apy:100*+c.apy,pool:Object(u.c)(s),address:s,type:"perpetual",buttonText:"STAKING"}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=Object(o.getLpContractAddressConfig)(d).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,s=t.pool||"",Object(u.e)(t.pool)&&(r=.22008070161007/n.liquidity*100),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,liquidity:n.liquidity,apy:100*+c.apy,pool:Object(u.c)(s),sushiApy:r,address:s,type:"lp",buttonText:"STAKING"}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n=e.concat(t);return Promise.all(n).then((function(e){e.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"12800",symbol:"--",airdrop:!0,buttonText:"CLAIM"}),O(e),c(!0)})),function(){return p.length=0}})),[n,p]}},612:function(e,t,n){},620:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(17),a=n(576),s=n(577),r=(n(612),n(48));function i(){var e=Object(s.a)(),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(r.jsx)("div",{className:"mining-info",children:Object(r.jsxs)("div",{className:"pools",children:[i.map((function(e,t){return Object(r.jsx)(a.a,{pool:e},t)})),!n&&Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})}}}]);
//# sourceMappingURL=10.86e2dd53.chunk.js.map