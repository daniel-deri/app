(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[33],{1007:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(1),i=n(7),s=n(13),o=n(44),l=n(92),u=n(16),b=n(697),d=n(77),p=n(696),j=n(33),f=n(32),O=l[u.a.get()].chainInfo;t.a=Object(d.b)("wallet","version")(Object(d.c)((function(e){var t,n=e.wallet,c=(e.version,e.pool),l=e.lang,d=Object(s.useState)(""),v=Object(i.a)(d,2),m=v[0],h=v[1],x="logo ".concat(c.bTokenSymbol),y=Object(s.useState)({}),A=Object(i.a)(y,2),g=A[0],k=A[1],w=Object(o.useHistory)(),N=function(){n.connect()},S=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.R)(n.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.e)(n.detail.chainId,t.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.ob)(t.chainId,n.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.H)(t.chainId,t.pool,t.bTokenId);case 2:return n=e.sent,e.next=5,Object(u.I)(t.chainId,t.pool,t.bTokenId);case 5:if(c=e.sent,r={liquidity:c.liquidity,apy:(100*+n.apy).toFixed(2),multiplier:n.multiplier},!t.isLp){e.next=13;break}return e.next=10,Object(u.D)(t.chainId,t.pool);case 10:i=e.sent,s=(100*+i.apy2).toFixed(2),r.lpApy=s;case 13:k(r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(c&&c.airdrop)n.isConnected()?h(Object(f.jsx)(p.a,{btnText:l.claim,click:S,lang:l})):h(Object(f.jsx)(p.a,{btnText:l["connect-wallet"],click:N,lang:l}));else if(c.premining)h(Object(f.jsx)("a",{target:"_blank",href:c.url,children:l.staking}));else if("v1"===c.version){var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),h(Object(f.jsx)("button",{onClick:function(){return function(e){w.push(e)}(e)},children:l.staking}))}else h(Object(f.jsx)("a",{target:"_blank",href:"https://app.deri.finance/#/pool/".concat(c.version,"/").concat(c.chainId,"/").concat(c.type,"/").concat(c.address),children:l.staking}));return c&&I(c),function(){}}),[c]),Object(f.jsxs)("div",{className:"pool",children:[Object(f.jsxs)("div",{className:"pool-header",children:[Object(f.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(f.jsxs)("div",{className:"pool-label",children:["v1"===c.version&&Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v1"!==c.version&&l[c.version]]})]}),Object(f.jsx)("div",{className:"pool-info",children:Object(f.jsxs)("div",{className:"info-center",children:[Object(f.jsxs)("div",{className:"top-info",children:[Object(f.jsx)("div",{className:x}),Object(f.jsxs)("div",{className:"pool-detail",children:[Object(f.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"title",children:c.airdrop?l.total:l["pool-liq"]}),Object(f.jsx)(b.a,{value:g.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(t=c.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===t||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===t?7:0)})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:l.symbol}),Object(f.jsx)("span",{className:"symbol-retired",children:c.symbol})]}),Object(f.jsxs)("div",{className:"apy",children:[Object(f.jsx)("span",{children:l.apy}),Object(f.jsxs)("span",{children:[Object(f.jsx)("span",{className:g.lpApy?"sushi-apy-underline":"",tip:g.lpApy&&l["deri-apy"],children:g.apy?Object(f.jsx)(b.a,{value:g.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),g.lpApy&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{children:" + "}),Object(f.jsxs)("span",{className:g.lpApy?"sushi-apy-underline":"",tip:g.lpApy&&c.label,children:[" ",Object(f.jsx)(b.a,{value:g.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(f.jsxs)("div",{className:"pool-address",children:[Object(f.jsx)("span",{children:l.address}),c.airdrop?"--":Object(f.jsx)("a",{target:"_blank",rel:"noreferrer",href:O[c.chainId]&&"".concat(O[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.formatAdd})]})]})]}),Object(f.jsx)("div",{className:"bottom-btn",children:m})]})})]})})))},1448:function(e,t,n){},1449:function(e,t,n){},1489:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n(13),r=(n(1448),n(1449),n(1007)),i=n(761),s=n(77),o=n(152),l=n(32);t.default=Object(s.b)("version","loading")(Object(s.c)((function(e){var t=e.version,n=e.lang,s=e.loading,u=Object(i.a)(t,null,!0),b=Object(c.a)(u,7),d=b[0],p=(b[1],b[2],b[3],b[4],b[5]),j=b[6];return Object(a.useEffect)((function(){return d?s.loaded():s.loading(),function(){}}),[d]),Object(l.jsxs)("div",{className:"retired",children:[Object(l.jsxs)("div",{className:"retired-title",children:[Object(l.jsx)("div",{className:"retired-pools",children:n["retired-markets"]}),n["v1-markets"]," ",Object(l.jsx)(o.b,{to:"/futures/lite/v1",children:n["v1-here"]})," ",n["to-close-position"],Object(l.jsx)("div",{className:"retired-pools",children:n["retired-pools"]}),n["retired-text"],Object(l.jsx)("a",{href:"https://app.deri.finance/#/mining",children:n["new-pools"]})]}),Object(l.jsx)("div",{className:"retired-mining-info",children:Object(l.jsx)("div",{className:"pools",children:p.map((function(e,t){return Object(l.jsx)(r.a,{pool:e,lang:n},t)}))})}),Object(l.jsxs)("div",{className:"retired-title",children:[Object(l.jsxs)("div",{className:"premining",children:[" ",n["premining-pools"]]}),Object(l.jsx)("span",{children:n["premining-finished"]})]}),Object(l.jsx)("div",{className:"retired-mining-info",children:Object(l.jsx)("div",{className:"pools",children:j.map((function(e,t){return Object(l.jsx)(r.a,{pool:e,lang:n},t)}))})})]})})))},696:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),r=n(1),i=n(7),s=n(13),o=n(32);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,u=e.afterClick,b=e.checkApprove,d=e.wallet,p=e.spec,j=e.lang,f=Object(s.useState)(c?"disabled":"enabled"),O=Object(i.a)(f,2),v=O[0],m=O[1],h=Object(s.useState)(!0),x=Object(i.a)(h,2),y=x[0],A=x[1],g=Object(s.useState)(!1),k=Object(i.a)(g,2),w=k[0],N=k[1],S=Object(s.useState)(t),I=Object(i.a)(S,2),T=I[0],C=I[1],V=Object(s.useRef)(null),Z=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return Y(),e.next=5,l();case 5:e.sent&&u&&u(),E();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){m("disabled"),N(!0),V.current&&(V.current.style.display="inline-block")},E=function(){V.current&&(V.current.style.display="none"),m("enabled"),N(!1)},B=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&d&&d.detail.account)){e.next=5;break}return e.next=3,d.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,A(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(),e.next=3,d.approve(p.pool,p.bTokenId);case 3:e.sent.success?A(!0):(A(!1),alert(j["approve-failed"])),E();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return B(),function(){}}),[d,p,b]),Object(s.useEffect)((function(){return t&&C(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){y?Z():F()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:V,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?j.pending:y?T:j.approve]})}},697:function(e,t,n){"use strict";var c=n(49),a=n(706),r=n(43),i=n(7),s=n(13),o=n(703),l=n(77),u=n(32);t.a=Object(l.b)("wallet","trading")(Object(l.c)((function(e){var t=Object(s.useState)(Object(u.jsx)("span",{className:"loading-line"})),n=Object(i.a)(t,2),l=n[0],b=n[1],d=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t};return Object(s.useEffect)((function(){e.allowZero;var t=e.wallet,n=e.defaultValue,r=void 0===n?"--":n,i=Object(a.a)(e,["allowZero","wallet","defaultValue"]);d()?b(Object(u.jsx)(o.a,Object(c.a)(Object(c.a)({},i),{},{displayType:"text",fixedDecimalScale:!0}))):b(Object(u.jsx)("span",{className:"loading-line"}));var s=window.setTimeout((function(){d()||!t||t.isConnected()||b(r)}),3e4);return function(){clearTimeout(s)}}),[e.value]),l})))},761:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),r=n(1),i=n(7),s=n(13),o=n(16),l=n(92),u=n(33),b=n(18),d=(n(753),o.a.get()),p=l[d].chainInfo;function j(e,t,n){var c=Object(s.useState)(!1),l=Object(i.a)(c,2),j=l[0],f=l[1],O=Object(s.useState)([]),v=Object(i.a)(O,2),m=v[0],h=v[1],x=Object(s.useState)([]),y=Object(i.a)(x,2),A=y[0],g=y[1],k=Object(s.useState)([]),w=Object(i.a)(k,2),N=w[0],S=w[1],I=Object(s.useState)([]),T=Object(i.a)(I,2),C=T[0],V=T[1],Z=Object(s.useState)([]),Y=Object(i.a)(Z,2),E=Y[0],B=Y[1],F=Object(s.useState)([]),K=Object(i.a)(F,2),U=K[0],D=K[1];return Object(s.useEffect)((function(){return function(){var c=Object(r.a)(a.a.mark((function c(){var i,s,l,j,O,v,m,x;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:i=Object(o.r)(d,"v2"),s=Object(o.r)(d,"v2_lite"),l=Object(o.r)(d,"option"),j=i.concat(s).concat(l),n&&(O=Object(o.r)(d,"v1"),v=Object(o.M)(d),j=(j=j.concat(v)).concat(O)),j=(j=Object(u.c)(j)).map((function(e){return Object(u.u)(e,t,p)})),m=Object(o.B)(d).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pool||"",Object(u.s)(t.pool),Object(u.t)(t.pool)&&(c=b.a.get("mining","sushi-apy")),Object(u.r)(t.pool)&&(c=b.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:p[t.chainId].name,formatAdd:Object(u.g)(n),address:n,type:"lp",label:c,buttonText:"STAKING"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=j.concat(m),Promise.all(x).then((function(t){(new Date).getTime()<=1637316e6&&t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"5500",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"});var n=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version||"v2_lite_dpmm"===e.version)&&!e.retired})),a=t.filter((function(e){return"option"===e.version&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),i=t.filter((function(e){return e.retired&&e.premining})),s=t.filter((function(e){return e.isOpen}));e&&(n=Object(u.o)(n),c=Object(u.o)(c),a=Object(u.o)(a),s=Object(u.o)(s)),S(c),g(n),V(a),h(t),B(r),D(i),f(!0)}));case 10:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}()(),function(){return m.length=0}}),[]),[j,m,A,N,C,E,U]}},869:function(e,t){}}]);
//# sourceMappingURL=33.b418de03.chunk.js.map