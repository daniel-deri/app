(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[14],{649:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),c=n.n(a),r=n(1),s=n(14),i=n(7),o=n(25);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,u=e.afterClick,d=e.checkApprove,b=e.wallet,p=e.spec,j=e.lang,f=Object(i.useState)(a?"disabled":"enabled"),O=Object(s.a)(f,2),m=O[0],v=O[1],x=Object(i.useState)(!0),h=Object(s.a)(x,2),y=h[0],g=h[1],k=Object(i.useState)(!1),I=Object(s.a)(k,2),N=I[0],w=I[1],A=Object(i.useState)(t),S=Object(s.a)(A,2),T=S[0],C=S[1],E=Object(i.useRef)(null),P=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return q(),e.next=5,l();case 5:e.sent&&u&&u(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){v("disabled"),w(!0),E.current&&(E.current.style.display="inline-block")},F=function(){E.current&&(E.current.style.display="none"),v("enabled"),w(!1)},L=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.next=3,b.approve(p.pool,p.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(j["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return L(),function(){}}),[b,p,d]),Object(i.useEffect)((function(){return t&&C(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){y?P():U()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:E,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?j.pending:y?T:j.approve]})}},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(24),c=n(187),r=n(14),s=n(7),i=n(652),o=n(25);function l(e){var t=Object(s.useState)("--"),n=Object(r.a)(t,2),l=n[0],u=n[1];return Object(s.useEffect)((function(){var t=e.allowZero,n=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&u(Object(o.jsx)(i.a,Object(a.a)(Object(a.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},654:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),c=n.n(a),r=n(1),s=n(14),i=n(7),o=n(23),l=n(143),u=n(53),d=(n(35),o.DeriEnv.get()),b=l[d].chainInfo;function p(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],l=n[1],p=Object(i.useState)([]),j=Object(s.a)(p,2),f=j[0],O=j[1],m=Object(i.useState)([]),v=Object(s.a)(m,2),x=v[0],h=v[1],y=Object(i.useState)([]),g=Object(s.a)(y,2),k=g[0],I=g[1],N=Object(i.useState)([]),w=Object(s.a)(N,2),A=w[0],S=w[1],T=Object(i.useState)([]),C=Object(s.a)(T,2),E=C[0],P=C[1];return Object(i.useEffect)((function(){var t=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return a=e.t1,r=t.pool||"",e.abrupt("return",Object.assign(t,{network:b[t.chainId]&&b[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),formatAdd:Object(u.d)(r),address:r,type:"perpetual",buttonText:"STAKING",multiplier:a.multiplier}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e){var t=[];return e.reduce((function(e,t){var n=e.find((function(e){return Object(u.c)(e.pool.address,t.address)}));if(n&&n.list.length<5)n.list.push(t);else{var a={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(a)}return e}),t),t},a=Object(o.getContractAddressConfig)(d,"v2"),s=Object(o.getContractAddressConfig)(d,"v1"),i=Object(o.getContractAddressConfig)(d,"v2_lite"),p=Object(o.getPreminingContractConfig)(d),j=a.concat(s).concat(p).concat(i).reduce((function(e,t){var n=e.findIndex((function(e){return e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version}));return("v2"===t.version||"v2_lite"===t.version)&&n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):e.push(t),e}),[]);j=j.map(t);var m=Object(o.getLpContractAddressConfig)(d).map(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r,s,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(a=e.t1,r=t.pool||"",!Object(u.k)(t.pool)){e.next=18;break}return e.next=16,Object(o.getLpPoolInfoApy)(t.chainId,t.pool);case 16:l=e.sent,s=l&&(100*+l.apy2).toFixed(2);case 18:return Object(u.l)(t.pool)&&(i="SUSHI-APY"),Object(u.j)(t.pool)&&(i="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),formatAdd:Object(u.d)(r),lpApy:s,address:r,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=j.concat(m);return Promise.all(v).then((function(t){var a=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),s=t.filter((function(e){return e.retired&&e.premining}));e&&(a=n(a),c=n(c)),I(c),h(a),O(t),S(r),P(s),l(!0)})),function(){return f.length=0}}),[]),[a,f,x,k,A,E]}},668:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(1),s=n(14),i=n(7),o=n(34),l=n(143),u=n(23),d=n(651),b=n(67),p=n(649),j=n(53),f=n(650),O=n.n(f),m=n(25),v=l[u.DeriEnv.get()].chainInfo;function x(e){var t=e.wallet,n=e.pool,a=e.card,l=e.index,b=e.list,f=e.lang,O=Object(i.useState)(""),v=Object(s.a)(O,2),x=v[0],h=v[1],y=Object(i.useState)(!1),g=Object(s.a)(y,2),k=g[0],I=g[1],N=Object(o.useHistory)(),w=function(){t.connect().then((function(){I(!0)}))},A=function(){var e=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getUserInfoAllForAirDrop)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(f["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.c)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(f["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.mintAirdrop)(n.chainId,t.detail.account);case 11:e.sent.success||alert(f["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?h(Object(m.jsx)(p.a,{btnText:f.claim,click:A,lang:f})):h(Object(m.jsx)(p.a,{btnText:f["connect-wallet"],click:w,lang:f}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(a.type,"/").concat(a.symbol,"/").concat(a.bTokenSymbol,"/").concat(n.address);a.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(a.bTokenId)),a.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(a.symbolId):"".concat(e,"?symbolId=").concat(a.symbolId)),h(Object(m.jsx)("button",{onClick:function(){return function(e){N.push(e)}(e)},children:f.staking}))}return function(){}}),[t.detail.account,k]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"top-info",children:[Object(m.jsxs)("div",{className:"pool-top",children:[Object(m.jsx)("span",{className:"logo ".concat(a.bTokenSymbol)}),Object(m.jsx)("span",{className:"base-token",children:a.bTokenSymbol})]}),Object(m.jsxs)("div",{className:"pool-detail",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"title",children:a.airdrop?f.total:f["pool-liq"]}),Object(m.jsx)(d.a,{value:a.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:a.lpApy?7:0})]}),Object(m.jsx)("div",{className:"multiplier",children:a.multiplier&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{children:f.multiplier}),Object(m.jsxs)("span",{className:"multiplier-value",title:f["multiplier-tip"],children:[a.multiplier,"x"]})]})}),Object(m.jsxs)("div",{className:"apy",children:[Object(m.jsx)("span",{children:f.apy}),Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:a.lpApy?"sushi-apy-underline":"",title:a.lpApy&&f["deri-apy"],children:a.apy?Object(m.jsx)(d.a,{value:a.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),a.lpApy&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{children:" + "}),Object(m.jsxs)("span",{className:a.lpApy?"sushi-apy-underline":"",title:a.lpApy&&a.label,children:[" ",Object(m.jsx)(d.a,{value:a.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]})]})]}),Object(m.jsx)("div",{className:"bottom-btn",children:x})]}),l!==b.length-1&&Object(m.jsx)("div",{className:"top-line"})]})}t.a=Object(b.b)("wallet","version")(Object(b.c)((function(e){var t=e.wallet,n=e.group,a=void 0===n?{}:n,c=e.lang,r=a.pool,s=a.list,i=O()("pool",{"only-one":1===s.length,full:5===s.length});return Object(m.jsxs)("div",{className:i,children:[Object(m.jsxs)("div",{className:"pool-header",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("div",{className:"network",children:r.network&&r.network.toUpperCase()}),Object(m.jsxs)("div",{className:"pool-desc",children:[Object(m.jsxs)("span",{className:"symbol",children:[Object(m.jsxs)("span",{className:"symbol-label",children:[c.symbol,":"]}),Object(m.jsx)("span",{className:"symbol-value",children:r.symbol})]}),Object(m.jsxs)("span",{className:"address",children:[Object(m.jsxs)("span",{className:"address-label",children:[c.address,":"]}),r.airdrop?"--":Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(v[r.chainId]&&v[r.chainId].viewUrl,"/address/").concat(r.address),children:r.formatAdd})]})]})]}),Object(m.jsx)("div",{className:"version",children:c[r.version]})]}),Object(m.jsx)("div",{className:"pool-info",children:s.map((function(e,n){return Object(m.jsx)(x,{card:e,index:n,pool:r,list:s,wallet:t,lang:c},n)}))})]})})))},721:function(e,t,n){},722:function(e,t,n){},762:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(7),r=n(668),s=n(654),i=(n(721),n(722),n(67)),o=n(25);t.default=Object(i.b)("version","loading")(Object(i.c)((function(e){var t=e.lang,n=e.loading,i=Object(s.a)(!0),l=Object(a.a)(i,4),u=l[0],d=(l[1],l[2]),b=l[3];return Object(c.useEffect)((function(){return u?n.loaded():n.loading(),function(){}}),[u]),Object(o.jsxs)("div",{className:"mining-info",children:[Object(o.jsx)("div",{className:"pools",children:b.map((function(e,n){return Object(o.jsx)(r.a,{group:e,lang:t},n)}))}),Object(o.jsx)("div",{className:"pools",children:d.map((function(e,n){return Object(o.jsx)(r.a,{group:e,lang:t},n)}))})]})})))}}]);
//# sourceMappingURL=14.c422d135.chunk.js.map