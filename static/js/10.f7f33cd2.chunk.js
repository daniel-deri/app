(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[10],{571:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(23),a=n(165),r=n(14),s=n(6),i=n(573),o=n(57);function l(e){var t=Object(s.useState)("--"),n=Object(r.a)(t,2),l=n[0],b=n[1];return Object(s.useEffect)((function(){var t=e.allowZero,n=Object(a.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&b(Object(o.jsx)(i.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),a=n.n(c),r=n(1),s=n(14),i=n(6),o=n(22),l=n(57);function b(e){var t=e.btnText,n=e.className,c=e.disabled,b=e.click,u=e.afterClick,p=e.checkApprove,d=e.wallet,j=e.spec,A=Object(i.useState)(c?"disabled":"enabled"),f=Object(s.a)(A,2),O=f[0],x=f[1],h=Object(i.useState)(!0),m=Object(s.a)(h,2),v=m[0],y=m[1],w=Object(i.useState)(!1),k=Object(s.a)(w,2),I=k[0],N=k[1],g=Object(i.useRef)(null),S=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return T(),e.next=5,b();case 5:e.sent&&u&&u(),V();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){x("disabled"),N(!0),g.current&&(g.current.style.display="inline-block")},V=function(){g.current&&(g.current.style.display="none"),x("enabled"),N(!1)},C=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p&&d&&d.detail.account)){e.next=5;break}return e.next=3,Object(o.isUnlocked)(d.detail.chainId,j.pool,d.detail.account,j.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),e.next=3,Object(o.unlock)(d.detail.chainId,j.pool,d.detail.account,j.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert("Approve faild")),V();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[d,j,p]),Object(l.jsxs)("button",{className:n,onClick:function(){v?S():Y()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:g,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),I?"PENDING":v?t:"APPROVE"]})}},587:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),r=n(1),s=n(55),i=n(14),o=n(6),l=n(22),b=n(164),u=n(50),p=l.DeriEnv.get(),d=b[p].chainInfo;function j(e){var t=Object(o.useState)(!1),n=Object(i.a)(t,2),c=n[0],b=n[1],j=Object(o.useState)([]),A=Object(i.a)(j,2),f=A[0],O=A[1];return Object(o.useEffect)((function(){var t=Object(l.getContractAddressConfig)(p,e.current),n=t.filter((function(e){return"v2"===e.version})).map((function(e){return[e.pool,e.symbol]})).reduce((function(e,t){return e[t[0]]=e[t[0]]||[],e[t[0]].push(t[1]),e}),{}),c=t.filter((function(e){return"v2"===e.version})).filter((function(e,t,n){return n.map((function(e){return e.bTokenId})).indexOf(e.bTokenId)==t})).map((function(e){return e.symbol=Object(s.a)(new Set(n[e.pool])).join(","),e})),i=Object(l.getContractAddressConfig)(p,"v1"),o=c.concat(i).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolLiquidity)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(l.getPoolInfoApy)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,r=t.pool||"",e.abrupt("return",Object.assign(t,{network:d[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),pool:Object(u.c)(r),address:r,type:"perpetual",buttonText:"STAKING"}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(l.getLpContractAddressConfig)(p).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,s,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(l.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(c=e.t1,r=t.pool||"",!Object(u.g)(t.pool)){e.next=18;break}return e.next=16,Object(l.getLpPoolInfoApy)(t.chainId,t.pool);case 16:o=e.sent,s=(100*+o.apy2).toFixed(2);case 18:return Object(u.h)(t.pool)&&(i="SUSHI-APY"),Object(u.f)(t.pool)&&(i="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:d[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),pool:Object(u.c)(r),lpApy:s,address:r,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=o.concat(j);return Promise.all(A).then((function(e){O(e),b(!0)})),function(){return f.length=0}}),[e.current]),[c,f]}},589:function(e,t,n){"use strict";var c=n(14),a=n(6),r=n(30),s=n(164),i=n(22),o=n(571),l=n(162),b=n(572),u=(n(50),n(57)),p=s[i.DeriEnv.get()].chainInfo;t.a=Object(l.b)("wallet","version")(Object(l.c)((function(e){var t=e.wallet,n=e.version,s=e.pool,i=Object(a.useState)(""),l=Object(c.a)(i,2),d=l[0],j=l[1],A="logo ".concat(s.bTokenSymbol),f=Object(r.g)(),O=function(){t.connect()};return Object(a.useEffect)((function(){if(s&&s.airdrop)t.isConnected()?j(Object(u.jsx)("button",{children:"CLAIM"})):j(Object(u.jsx)(b.a,{btnText:"Connect Wallet",click:O}));else{var e="/mining/".concat(s.version||"v1","/").concat(s.chainId,"/").concat(s.type,"/").concat(s.symbol,"/").concat(s.bTokenSymbol,"/").concat(s.address);s.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(s.bTokenId)),s.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(s.symbolId):"".concat(e,"?symbolId=").concat(s.symbolId)),j(Object(u.jsx)("button",{onClick:function(){return function(e){f.push(e)}(e)},children:"STAKING"}))}return function(){}}),[s]),Object(u.jsxs)("div",{className:"pool",children:[Object(u.jsxs)("div",{className:"pool-header",children:[Object(u.jsx)("div",{className:"network",children:s.network&&s.network.toUpperCase()}),Object(u.jsxs)("div",{className:"pool-label",children:[n.isV2&&"v1"===s.version&&Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),n.isV2&&"v2"===s.version&&Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(u.jsx)("div",{className:"pool-info",children:Object(u.jsxs)("div",{className:"info-center",children:[Object(u.jsxs)("div",{className:"top-info",children:[Object(u.jsx)("div",{className:A}),Object(u.jsxs)("div",{className:"pool-detail",children:[Object(u.jsx)("div",{className:"base-token",children:s.bTokenSymbol}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:s.airdrop?"Total":"Pool Liq"}),Object(u.jsx)(o.a,{value:s.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:s.lpApy?7:0})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Symbol"}),s.symbol]}),Object(u.jsxs)("div",{className:"apy",children:[Object(u.jsx)("span",{children:"APY"}),Object(u.jsxs)("span",{children:[Object(u.jsx)("span",{className:s.lpApy?"sushi-apy-underline":"",title:s.lpApy&&"DERI-APY",children:s.apy?Object(u.jsx)(o.a,{value:s.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),s.lpApy&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:" + "}),Object(u.jsxs)("span",{className:s.lpApy?"sushi-apy-underline":"",title:s.lpApy&&s.label,children:[" ",Object(u.jsx)(o.a,{value:s.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(u.jsxs)("div",{className:"pool-address",children:[Object(u.jsx)("span",{children:"Address"}),s.airdrop?"--":Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(p[s.chainId].viewUrl,"/address/").concat(s.address||s.pool),children:s.pool})]})]})]}),Object(u.jsx)("div",{className:"bottom-btn",children:d})]})})]})})))},625:function(e,t,n){},633:function(e,t,n){"use strict";n.r(t);var c=n(14),a=n(589),r=n(587),s=(n(625),n(162)),i=n(57);t.default=Object(s.b)("version")(Object(s.c)((function(e){var t=e.version,n=Object(r.a)(t),s=Object(c.a)(n,2),o=s[0],l=s[1];return Object(i.jsx)("div",{className:"mining-info",children:Object(i.jsxs)("div",{className:"pools",children:[l.map((function(e,t){return Object(i.jsx)(a.a,{pool:e},t)})),!o&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})})))}}]);
//# sourceMappingURL=10.f7f33cd2.chunk.js.map