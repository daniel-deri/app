(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[19],{1166:function(e,t,n){},1167:function(e,t,n){},1198:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(5),r=(n(1166),n(1167),n(727)),i=n(634),s=n(47),o=n(18);t.default=Object(s.b)("version","loading")(Object(s.c)((function(e){var t=e.version,n=e.lang,s=e.loading,l=Object(i.a)(t),u=Object(c.a)(l,6),d=u[0],b=(u[1],u[2],u[3],u[4]),p=u[5];return Object(a.useEffect)((function(){return d?s.loaded():s.loading(),function(){}}),[d]),Object(o.jsxs)("div",{className:"retired",children:[Object(o.jsxs)("div",{className:"retired-title",children:[Object(o.jsx)("div",{className:"retired-pools",children:n["retired-pools"]}),n["retired-text"],Object(o.jsx)("a",{href:"https://app.deri.finance/#/mining",children:n["new-pools"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:b.map((function(e,t){return Object(o.jsx)(r.a,{pool:e,lang:n},t)}))})}),Object(o.jsxs)("div",{className:"retired-title",children:[Object(o.jsxs)("div",{className:"premining",children:[" ",n["premining-pools"]]}),Object(o.jsx)("span",{children:n["premining-finished"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:p.map((function(e,t){return Object(o.jsx)(r.a,{pool:e,lang:n},t)}))})})]})})))},614:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),r=n(1),i=n(10),s=n(5),o=n(18);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,u=e.afterClick,d=e.checkApprove,b=e.wallet,p=e.spec,j=e.lang,f=Object(s.useState)(c?"disabled":"enabled"),O=Object(i.a)(f,2),A=O[0],m=O[1],x=Object(s.useState)(!0),h=Object(i.a)(x,2),v=h[0],y=h[1],k=Object(s.useState)(!1),w=Object(i.a)(k,2),g=w[0],I=w[1],S=Object(s.useState)(t),N=Object(i.a)(S,2),T=N[0],V=N[1],C=Object(s.useRef)(null),E=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===A){e.next=2;break}return e.abrupt("return");case 2:return Y(),e.next=5,l();case 5:e.sent&&u&&u(),Z();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){m("disabled"),I(!0),C.current&&(C.current.style.display="inline-block")},Z=function(){C.current&&(C.current.style.display="none"),m("enabled"),I(!1)},U=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(),e.next=3,b.approve(p.pool,p.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),Z();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return U(),function(){}}),[b,p,d]),Object(s.useEffect)((function(){return t&&V(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){v?E():K()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),g?j.pending:v?T:j.approve]})}},616:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(5),a=n(618),r=n(18);function i(e){const[t,n]=Object(c.useState)("--");return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&n(Object(r.jsx)(a.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},634:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),r=n(1),i=n(10),s=n(5),o=n(14),l=n(93),u=n(26),d=n(16),b=(n(628),o.a.get()),p=l[b].chainInfo;function j(e,t){var n=Object(s.useState)(!1),c=Object(i.a)(n,2),l=c[0],j=c[1],f=Object(s.useState)([]),O=Object(i.a)(f,2),A=O[0],m=O[1],x=Object(s.useState)([]),h=Object(i.a)(x,2),v=h[0],y=h[1],k=Object(s.useState)([]),w=Object(i.a)(k,2),g=w[0],I=w[1],S=Object(s.useState)([]),N=Object(i.a)(S,2),T=N[0],V=N[1],C=Object(s.useState)([]),E=Object(i.a)(C,2),Y=E[0],Z=E[1],U=Object(s.useState)([]),K=Object(i.a)(U,2),L=K[0],z=K[1],B=Object(s.useState)([]),q=Object(i.a)(B,2),J=q[0],M=q[1];return Object(s.useEffect)((function(){return function(){var n=Object(r.a)(a.a.mark((function n(){var c,i,s,l,f,O,A,x,h,v,k,w,g;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(){var e=Object(r.a)(a.a.mark((function e(n){var c,r,i,s,l,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.D)(n.chainId,n.pool,n.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return c=e.t0,e.next=8,Object(o.C)(n.chainId,n.pool,n.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(r=e.t1,i=n.pool||"",s={network:p[n.chainId]&&p[n.chainId].name,liquidity:c.liquidity,apy:(100*+r.apy).toFixed(2),formatAdd:Object(u.e)(i),address:i,type:"perpetual",buttonText:"STAKING",multiplier:r.multiplier},!t||!t.isConnected()){e.next=23;break}return e.next=17,Object(o.u)(n.chainId,n.pool,t.detail.account,n.bTokenId).catch((function(e){return console.log(e)}));case 17:return l=e.sent,e.next=20,Object(o.K)(t.detail.account);case 20:d=e.sent,l&&(s.pnl=l.pnl),d&&(s.claimed=d.total,s.unclaimed=d.amount);case 23:return e.abrupt("return",Object.assign(n,s));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(e){var t=[];return e.reduce((function(e,t){var n=e.find((function(e){return Object(u.c)(e.pool.address,t.address)}));if(n&&n.list.length<5)n.list.push(t);else{var c={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(c)}return e}),t),t},s=Object(o.n)(b,"v2"),l=Object(o.n)(b,"v1"),f=Object(o.n)(b,"v2_lite"),O=Object(o.n)(b,"option"),A=Object(o.H)(b),x=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Y.update();case 2:return e.abrupt("return",Object(o.n)(b,"v2_lite_open"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.next=10,x();case 10:h=n.sent,v=[],k=(k=s.concat(l).concat(A).concat(f).concat(O).concat(h).reduce((function(e,t){var n=e.findIndex((function(e){return e.chainId===t.chainId&&e.pool===t.pool&&t.version===e.version}));return("v2"===t.version||"v2_lite"===t.version||"option"===t.version||"v2_lite_open"===t.version)&&n>-1?-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):-1===e.findIndex((function(e){return e.bTokenSymbol===t.bTokenSymbol}))&&e.push(t):e.push(t),e}),v)).map(c),w=Object(o.w)(b).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,i,s,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.D)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.C)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(c=e.t1,r=t.pool||"",!Object(u.m)(t.pool)){e.next=18;break}return e.next=16,Object(o.y)(t.chainId,t.pool);case 16:l=e.sent,i=l&&(100*+l.apy2).toFixed(2);case 18:return Object(u.n)(t.pool)&&(s=d.a.get("mining","sushi-apy")),Object(u.l)(t.pool)&&(s=d.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:p[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),formatAdd:Object(u.e)(r),lpApy:i,address:r,type:"lp",label:s,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=k.concat(w),Promise.all(g).then((function(t){var n=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),a=t.filter((function(e){return"option"===e.version&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),s=t.filter((function(e){return e.retired&&e.premining})),o=t.filter((function(e){return e.isOpen}));e&&(n=i(n),c=i(c),a=i(a),o=i(o)),I(c),y(n),V(a),m(t),Z(r),z(s),M(o),j(!0)}));case 17:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){return A.length=0}}),[]),[l,A,v,g,T,Y,L,J]}},679:function(e,t){},727:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(1),i=n(10),s=n(5),o=n(25),l=n(93),u=n(14),d=n(616),b=n(47),p=n(614),j=n(26),f=n(18),O=l[u.a.get()].chainInfo;t.a=Object(b.b)("wallet","version")(Object(b.c)((function(e){var t,n=e.wallet,c=(e.version,e.pool),l=e.lang,b=Object(s.useState)(""),A=Object(i.a)(b,2),m=A[0],x=A[1],h="logo ".concat(c.bTokenSymbol),v=Object(o.useHistory)(),y=function(){n.connect()},k=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.L)(n.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.c)(n.detail.chainId,t.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.V)(t.chainId,n.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(c&&c.airdrop)n.isConnected()?x(Object(f.jsx)(p.a,{btnText:l.claim,click:k,lang:l})):x(Object(f.jsx)(p.a,{btnText:l["connect-wallet"],click:y,lang:l}));else if(c.premining)x(Object(f.jsx)("a",{target:"_blank",href:c.url,children:l.staking}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),x(Object(f.jsx)("button",{onClick:function(){return function(e){v.push(e)}(e)},children:l.staking}))}return function(){}}),[c]),Object(f.jsxs)("div",{className:"pool",children:[Object(f.jsxs)("div",{className:"pool-header",children:[Object(f.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(f.jsxs)("div",{className:"pool-label",children:["v1"===c.version&&Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===c.version&&Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(f.jsx)("div",{className:"pool-info",children:Object(f.jsxs)("div",{className:"info-center",children:[Object(f.jsxs)("div",{className:"top-info",children:[Object(f.jsx)("div",{className:h}),Object(f.jsxs)("div",{className:"pool-detail",children:[Object(f.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"title",children:c.airdrop?l.total:l["pool-liq"]}),Object(f.jsx)(d.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(t=c.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===t||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===t?7:0)})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:l.symbol}),c.symbol]}),Object(f.jsxs)("div",{className:"apy",children:[Object(f.jsx)("span",{children:l.apy}),Object(f.jsxs)("span",{children:[Object(f.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&l["deri-apy"],children:c.apy?Object(f.jsx)(d.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{children:" + "}),Object(f.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(f.jsx)(d.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(f.jsxs)("div",{className:"pool-address",children:[Object(f.jsx)("span",{children:l.address}),c.airdrop?"--":Object(f.jsx)("a",{target:"_blank",rel:"noreferrer",href:O[c.chainId]&&"".concat(O[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.formatAdd})]})]})]}),Object(f.jsx)("div",{className:"bottom-btn",children:m})]})})]})})))}}]);
//# sourceMappingURL=19.a12573ce.chunk.js.map