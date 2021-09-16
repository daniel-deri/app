(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[20],{1119:function(e,t,n){},1120:function(e,t,n){},1163:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(8),r=n(727),i=n(639),s=(n(1119),n(1120),n(47)),o=n(18);t.default=Object(s.b)("version","loading")(Object(s.c)((function(e){var t=e.version,n=e.lang,s=e.loading,l=Object(i.a)(t,null,!0),b=Object(c.a)(l,7),u=b[0],d=(b[1],b[2],b[3],b[4],b[5]),p=b[6];return Object(a.useEffect)((function(){return u?s.loaded():s.loading(),function(){}}),[u]),Object(o.jsxs)("div",{className:"retired",children:[Object(o.jsxs)("div",{className:"retired-title",children:[Object(o.jsx)("div",{className:"retired-pools",children:n["retired-pools"]}),n["retired-text"],Object(o.jsx)("a",{href:"https://app.deri.finance/#/mining",children:n["new-pools"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:d.map((function(e,t){return Object(o.jsx)(r.a,{pool:e,lang:n},t)}))})}),Object(o.jsxs)("div",{className:"retired-title premining",children:[n["premining-pools"],Object(o.jsx)("span",{className:"premining-finished",children:n["premining-finished"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:p.map((function(e,t){return Object(o.jsx)(r.a,{pool:e,lang:n},t)}))})})]})})))},611:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),r=n(1),i=n(9),s=n(8),o=n(18);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,b=e.afterClick,u=e.checkApprove,d=e.wallet,p=e.spec,j=e.lang,O=Object(s.useState)(c?"disabled":"enabled"),f=Object(i.a)(O,2),A=f[0],m=f[1],h=Object(s.useState)(!0),x=Object(i.a)(h,2),v=x[0],y=x[1],g=Object(s.useState)(!1),w=Object(i.a)(g,2),k=w[0],N=w[1],S=Object(s.useState)(t),V=Object(i.a)(S,2),I=V[0],T=V[1],C=Object(s.useRef)(null),E=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===A){e.next=2;break}return e.abrupt("return");case 2:return Y(),e.next=5,l();case 5:e.sent&&b&&b(),Z();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){m("disabled"),N(!0),C.current&&(C.current.style.display="inline-block")},Z=function(){C.current&&(C.current.style.display="none"),m("enabled"),N(!1)},U=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&d&&d.detail.account)){e.next=5;break}return e.next=3,d.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(),e.next=3,d.approve(p.pool,p.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),Z();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return U(),function(){}}),[d,p,u]),Object(s.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){v?E():z()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?j.pending:v?I:j.approve]})}},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(53),a=n(33),r=n(615),i=n(9),s=n(8),o=n(614),l=n(18),b=["allowZero"];function u(e){var t=Object(s.useState)(Object(l.jsx)("span",{className:"loading-line"})),n=Object(i.a)(t,2),u=n[0],d=n[1];return Object(s.useEffect)((function(){var t=e.allowZero,n=Object(r.a)(e,b);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&d(Object(l.jsx)(o.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),u}},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),r=n(1),i=n(9),s=n(8),o=n(13),l=n(67),b=n(26),u=n(15),d=(n(627),o.a.get()),p=l[d].chainInfo;function j(e,t,n){var c=Object(s.useState)(!1),l=Object(i.a)(c,2),j=l[0],O=l[1],f=Object(s.useState)([]),A=Object(i.a)(f,2),m=A[0],h=A[1],x=Object(s.useState)([]),v=Object(i.a)(x,2),y=v[0],g=v[1],w=Object(s.useState)([]),k=Object(i.a)(w,2),N=k[0],S=k[1],V=Object(s.useState)([]),I=Object(i.a)(V,2),T=I[0],C=I[1],E=Object(s.useState)([]),Y=Object(i.a)(E,2),Z=Y[0],U=Y[1],z=Object(s.useState)([]),B=Object(i.a)(z,2),L=B[0],K=B[1];return Object(s.useEffect)((function(){var c=function(){var c=Object(r.a)(a.a.mark((function c(){var i,s,l,j,f,A,m,x;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:i=Object(o.o)(d,"v2"),s=Object(o.o)(d,"v2_lite"),l=Object(o.o)(d,"option"),j=i.concat(s).concat(l),n&&(f=Object(o.o)(d,"v1"),A=Object(o.I)(d),j=f.concat(A)),j=(j=Object(b.c)(j)).map((function(e){return Object(b.q)(e,t,p)})),m=Object(o.x)(d).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pool||"",Object(b.o)(t.pool),Object(b.p)(t.pool)&&(c=u.a.get("mining","sushi-apy")),Object(b.n)(t.pool)&&(c=u.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:p[t.chainId].name,formatAdd:Object(b.f)(n),address:n,type:"lp",label:c,buttonText:"STAKING"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=j.concat(m),Promise.all(x).then((function(t){var n=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),a=t.filter((function(e){return"option"===e.version&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),i=t.filter((function(e){return e.retired&&e.premining})),s=t.filter((function(e){return e.isOpen}));e&&(n=Object(b.k)(n),c=Object(b.k)(c),a=Object(b.k)(a),s=Object(b.k)(s)),S(c),g(n),C(a),h(t),U(r),K(i),O(!0)}));case 10:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return c(),function(){return m.length=0}}),[]),[j,m,y,N,T,Z,L]}},679:function(e,t){},727:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(1),i=n(9),s=n(8),o=n(25),l=n(67),b=n(13),u=n(613),d=n(47),p=n(611),j=n(26),O=n(18),f=l[b.a.get()].chainInfo;t.a=Object(d.b)("wallet","version")(Object(d.c)((function(e){var t,n=e.wallet,c=(e.version,e.pool),l=e.lang,d=Object(s.useState)(""),A=Object(i.a)(d,2),m=A[0],h=A[1],x="logo ".concat(c.bTokenSymbol),v=Object(o.useHistory)(),y=function(){n.connect()},g=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.M)(n.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.d)(n.detail.chainId,t.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(b.ab)(t.chainId,n.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(c&&c.airdrop)n.isConnected()?h(Object(O.jsx)(p.a,{btnText:l.claim,click:g,lang:l})):h(Object(O.jsx)(p.a,{btnText:l["connect-wallet"],click:y,lang:l}));else if(c.premining)h(Object(O.jsx)("a",{target:"_blank",href:c.url,children:l.staking}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),h(Object(O.jsx)("button",{onClick:function(){return function(e){v.push(e)}(e)},children:l.staking}))}return function(){}}),[c]),Object(O.jsxs)("div",{className:"pool",children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(O.jsxs)("div",{className:"pool-label",children:["v1"===c.version&&Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===c.version&&Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(O.jsx)("div",{className:"pool-info",children:Object(O.jsxs)("div",{className:"info-center",children:[Object(O.jsxs)("div",{className:"top-info",children:[Object(O.jsx)("div",{className:x}),Object(O.jsxs)("div",{className:"pool-detail",children:[Object(O.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"title",children:c.airdrop?l.total:l["pool-liq"]}),Object(O.jsx)(u.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(t=c.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===t||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===t?7:0)})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:l.symbol}),c.symbol]}),Object(O.jsxs)("div",{className:"apy",children:[Object(O.jsx)("span",{children:l.apy}),Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",tip:c.lpApy&&l["deri-apy"],children:c.apy?Object(O.jsx)(u.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" + "}),Object(O.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",tip:c.lpApy&&c.label,children:[" ",Object(O.jsx)(u.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(O.jsxs)("div",{className:"pool-address",children:[Object(O.jsx)("span",{children:l.address}),c.airdrop?"--":Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:f[c.chainId]&&"".concat(f[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.formatAdd})]})]})]}),Object(O.jsx)("div",{className:"bottom-btn",children:m})]})})]})})))}}]);
//# sourceMappingURL=20.04722258.chunk.js.map