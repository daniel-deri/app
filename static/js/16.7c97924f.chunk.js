(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[16],{649:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),r=n(2),i=n(17),s=n(7),o=n(25);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,d=e.afterClick,b=e.checkApprove,u=e.wallet,p=e.spec,j=e.lang,f=Object(s.useState)(c?"disabled":"enabled"),A=Object(i.a)(f,2),O=A[0],m=A[1],h=Object(s.useState)(!0),x=Object(i.a)(h,2),v=x[0],y=x[1],g=Object(s.useState)(!1),k=Object(i.a)(g,2),w=k[0],I=k[1],S=Object(s.useState)(t),N=Object(i.a)(S,2),T=N[0],C=N[1],V=Object(s.useRef)(null),E=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return Y(),e.next=5,l();case 5:e.sent&&d&&d(),L();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){m("disabled"),I(!0),V.current&&(V.current.style.display="inline-block")},L=function(){V.current&&(V.current.style.display="none"),m("enabled"),I(!1)},U=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&u&&u.detail.account)){e.next=5;break}return e.next=3,u.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(),e.next=3,u.approve(p.pool,p.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),L();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return U(),function(){}}),[u,p,b]),Object(s.useEffect)((function(){return t&&C(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){v?E():Z()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:V,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?j.pending:v?T:j.approve]})}},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(24),a=n(186),r=n(17),i=n(7),s=n(652),o=n(25);function l(e){var t=Object(i.useState)("--"),n=Object(r.a)(t,2),l=n[0],d=n[1];return Object(i.useEffect)((function(){var t=e.allowZero,n=Object(a.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&d(Object(o.jsx)(s.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},654:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(0),a=n.n(c),r=n(2),i=n(17),s=n(7),o=n(23),l=n(142),d=n(53),b=(n(35),o.DeriEnv.get()),u=l[b].chainInfo;function p(e){var t=Object(s.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1],p=Object(s.useState)([]),j=Object(i.a)(p,2),f=j[0],A=j[1],O=Object(s.useState)([]),m=Object(i.a)(O,2),h=m[0],x=m[1],v=Object(s.useState)([]),y=Object(i.a)(v,2),g=y[0],k=y[1],w=Object(s.useState)([]),I=Object(i.a)(w,2),S=I[0],N=I[1],T=Object(s.useState)([]),C=Object(i.a)(T,2),V=C[0],E=C[1];return Object(s.useEffect)((function(){var t=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,r=t.pool||"",e.abrupt("return",Object.assign(t,{network:u[t.chainId]&&u[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),formatAdd:Object(d.d)(r),address:r,type:"perpetual",buttonText:"STAKING",multiplier:c.multiplier}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e){var t=[];return e.reduce((function(e,t){var n=e.find((function(e){return Object(d.c)(e.pool.address,t.address)}));if(n&&n.list.length<5)n.list.push(t);else{var c={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(c)}return e}),t),t},c=Object(o.getContractAddressConfig)(b,"v2"),i=Object(o.getContractAddressConfig)(b,"v1"),s=Object(o.getContractAddressConfig)(b,"v2_lite"),p=Object(o.getPreminingContractConfig)(b),j=c.concat(i).concat(p).concat(s).reduce((function(e,t){var n=e.findIndex((function(e){return e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version}));return("v2"===t.version||"v2_lite"===t.version)&&n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):e.push(t),e}),[]);j=j.map(t);var O=Object(o.getLpContractAddressConfig)(b).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,i,s,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(c=e.t1,r=t.pool||"",!Object(d.k)(t.pool)){e.next=18;break}return e.next=16,Object(o.getLpPoolInfoApy)(t.chainId,t.pool);case 16:l=e.sent,i=l&&(100*+l.apy2).toFixed(2);case 18:return Object(d.l)(t.pool)&&(s="SUSHI-APY"),Object(d.j)(t.pool)&&(s="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:u[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),formatAdd:Object(d.d)(r),lpApy:i,address:r,type:"lp",label:s,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=j.concat(O);return Promise.all(m).then((function(t){t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1002200",symbol:"--",airdrop:!0,chainId:56,buttonText:"CLAIM"});var c=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),a=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),i=t.filter((function(e){return e.retired&&e.premining}));e&&(c=n(c),a=n(a)),k(a),x(c),A(t),N(r),E(i),l(!0)})),function(){return f.length=0}}),[]),[c,f,h,g,S,V]}},677:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(2),i=n(17),s=n(7),o=n(34),l=n(142),d=n(23),b=n(651),u=n(67),p=n(649),j=n(53),f=n(25),A=l[d.DeriEnv.get()].chainInfo;t.a=Object(u.b)("wallet","version")(Object(u.c)((function(e){var t,n=e.wallet,c=(e.version,e.pool),l=e.lang,u=Object(s.useState)(""),O=Object(i.a)(u,2),m=O[0],h=O[1],x="logo ".concat(c.bTokenSymbol),v=Object(o.useHistory)(),y=function(){n.connect()},g=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.getUserInfoAllForAirDrop)(n.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.c)(n.detail.chainId,t.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(d.mintAirdrop)(t.chainId,n.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(c&&c.airdrop)n.isConnected()?h(Object(f.jsx)(p.a,{btnText:l.claim,click:g,lang:l})):h(Object(f.jsx)(p.a,{btnText:l["connect-wallet"],click:y,lang:l}));else if(c.premining)h(Object(f.jsx)("a",{target:"_blank",href:c.url,children:l.staking}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),h(Object(f.jsx)("button",{onClick:function(){return function(e){v.push(e)}(e)},children:l.staking}))}return function(){}}),[c]),Object(f.jsxs)("div",{className:"pool",children:[Object(f.jsxs)("div",{className:"pool-header",children:[Object(f.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(f.jsxs)("div",{className:"pool-label",children:["v1"===c.version&&Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===c.version&&Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(f.jsx)("div",{className:"pool-info",children:Object(f.jsxs)("div",{className:"info-center",children:[Object(f.jsxs)("div",{className:"top-info",children:[Object(f.jsx)("div",{className:x}),Object(f.jsxs)("div",{className:"pool-detail",children:[Object(f.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"title",children:c.airdrop?l.total:l["pool-liq"]}),Object(f.jsx)(b.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(t=c.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===t||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===t?7:0)})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:l.symbol}),c.symbol]}),Object(f.jsxs)("div",{className:"apy",children:[Object(f.jsx)("span",{children:l.apy}),Object(f.jsxs)("span",{children:[Object(f.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&l["deri-apy"],children:c.apy?Object(f.jsx)(b.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{children:" + "}),Object(f.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(f.jsx)(b.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(f.jsxs)("div",{className:"pool-address",children:[Object(f.jsx)("span",{children:l.address}),c.airdrop?"--":Object(f.jsx)("a",{target:"_blank",rel:"noreferrer",href:A[c.chainId]&&"".concat(A[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.formatAdd})]})]})]}),Object(f.jsx)("div",{className:"bottom-btn",children:m})]})})]})})))},724:function(e,t,n){},725:function(e,t,n){},764:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(7),r=n(677),i=n(654),s=(n(724),n(725),n(67)),o=n(25);t.default=Object(s.b)("version","loading")(Object(s.c)((function(e){var t=e.version,n=e.lang,s=e.loading,l=Object(i.a)(t),d=Object(c.a)(l,6),b=d[0],u=(d[1],d[2],d[3],d[4]),p=d[5];return Object(a.useEffect)((function(){return b?s.loaded():s.loading(),function(){}}),[b]),Object(o.jsxs)("div",{className:"retired",children:[Object(o.jsxs)("div",{className:"retired-title",children:[Object(o.jsx)("div",{className:"retired-pools",children:n["retired-pools"]}),n["retired-text"],Object(o.jsx)("a",{href:"https://app.deri.finance/#/mining",children:n["new-pools"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:u.map((function(e,t){return Object(o.jsx)(r.a,{pool:e,lang:n},t)}))})}),Object(o.jsxs)("div",{className:"retired-title premining",children:[n["premining-pools"],Object(o.jsx)("span",{className:"premining-finished",children:n["premining-finished"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:p.map((function(e,t){return Object(o.jsx)(r.a,{pool:e,lang:n},t)}))})})]})})))}}]);
//# sourceMappingURL=16.7c97924f.chunk.js.map