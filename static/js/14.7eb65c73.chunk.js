(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[14],{609:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),c=n.n(a),r=n(1),s=n(9),i=n(5),l=n(18);function o(e){var t=e.btnText,n=e.className,a=e.disabled,o=e.click,u=e.afterClick,d=e.checkApprove,b=e.wallet,p=e.spec,j=e.lang,f=Object(i.useState)(a?"disabled":"enabled"),O=Object(s.a)(f,2),m=O[0],v=O[1],x=Object(i.useState)(!0),h=Object(s.a)(x,2),y=h[0],k=h[1],I=Object(i.useState)(!1),N=Object(s.a)(I,2),g=N[0],w=N[1],S=Object(i.useState)(t),T=Object(s.a)(S,2),A=T[0],C=T[1],E=Object(i.useRef)(null),F=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return q(),e.next=5,o();case 5:e.sent&&u&&u(),_();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){v("disabled"),w(!0),E.current&&(E.current.style.display="inline-block")},_=function(){E.current&&(E.current.style.display="none"),v("enabled"),w(!1)},K=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,k(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.next=3,b.approve(p.pool,p.bTokenId);case 3:e.sent.success?k(!0):(k(!1),alert(j["approve-failed"])),_();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return K(),function(){}}),[b,p,d]),Object(i.useEffect)((function(){return t&&C(t),function(){}}),[t]),Object(l.jsxs)("button",{className:n,onClick:function(){y?F():P()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:E,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),g?j.pending:y?A:j.approve]})}},611:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(17),c=n(613),r=n(9),s=n(5),i=n(612),l=n(18);function o(e){var t=Object(s.useState)("--"),n=Object(r.a)(t,2),o=n[0],u=n[1];return Object(s.useEffect)((function(){var t=e.allowZero,n=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&u(Object(l.jsx)(i.a,Object(a.a)(Object(a.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),o}},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),c=n.n(a),r=n(1),s=n(9),i=n(5),l=n(16),o=n(108),u=n(35),d=(n(23),l.a.get()),b=o[d].chainInfo;function p(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],o=n[1],p=Object(i.useState)([]),j=Object(s.a)(p,2),f=j[0],O=j[1],m=Object(i.useState)([]),v=Object(s.a)(m,2),x=v[0],h=v[1],y=Object(i.useState)([]),k=Object(s.a)(y,2),I=k[0],N=k[1],g=Object(i.useState)([]),w=Object(s.a)(g,2),S=w[0],T=w[1],A=Object(i.useState)([]),C=Object(s.a)(A,2),E=C[0],F=C[1];return Object(i.useEffect)((function(){var t=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.z)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(l.y)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return a=e.t1,r=t.pool||"",e.abrupt("return",Object.assign(t,{network:b[t.chainId]&&b[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),formatAdd:Object(u.d)(r),address:r,type:"perpetual",buttonText:"STAKING",multiplier:a.multiplier}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e){var t=[];return e.reduce((function(e,t){var n=e.find((function(e){return Object(u.c)(e.pool.address,t.address)}));if(n&&n.list.length<5)n.list.push(t);else{var a={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(a)}return e}),t),t},a=Object(l.l)(d,"v2"),s=Object(l.l)(d,"v1"),i=Object(l.l)(d,"v2_lite"),p=Object(l.B)(d),j=a.concat(s).concat(p).concat(i).reduce((function(e,t){var n=e.findIndex((function(e){return e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version}));return("v2"===t.version||"v2_lite"===t.version)&&n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):e.push(t),e}),[]);j=j.map(t);var m=Object(l.t)(d).map(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r,s,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.z)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(l.y)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(a=e.t1,r=t.pool||"",!Object(u.k)(t.pool)){e.next=18;break}return e.next=16,Object(l.v)(t.chainId,t.pool);case 16:o=e.sent,s=o&&(100*+o.apy2).toFixed(2);case 18:return Object(u.l)(t.pool)&&(i="SUSHI-APY"),Object(u.j)(t.pool)&&(i="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),formatAdd:Object(u.d)(r),lpApy:s,address:r,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=j.concat(m);return Promise.all(v).then((function(t){var a=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),s=t.filter((function(e){return e.retired&&e.premining}));e&&(a=n(a),c=n(c)),N(c),h(a),O(t),T(r),F(s),o(!0)})),function(){return f.length=0}}),[]),[a,f,x,I,S,E]}},629:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(1),s=n(9),i=n(5),l=n(22),o=n(108),u=n(16),d=n(611),b=n(47),p=n(609),j=n(35),f=n(610),O=n.n(f),m=n(18),v=o[u.a.get()].chainInfo;function x(e){var t=e.wallet,n=e.pool,a=e.card,o=e.index,b=e.list,f=e.lang,O=Object(i.useState)(""),v=Object(s.a)(O,2),x=v[0],h=v[1],y=Object(i.useState)(!1),k=Object(s.a)(y,2),I=k[0],N=k[1],g=Object(l.useHistory)(),w=function(){t.connect().then((function(){N(!0)}))},S=function(){var e=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.F)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(f["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.c)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(f["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.O)(n.chainId,t.detail.account);case 11:e.sent.success||alert(f["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?h(Object(m.jsx)(p.a,{btnText:f.claim,click:S,lang:f})):h(Object(m.jsx)(p.a,{btnText:f["connect-wallet"],click:w,lang:f}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(a.type,"/").concat(a.symbol,"/").concat(a.bTokenSymbol,"/").concat(n.address);a.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(a.bTokenId)),a.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(a.symbolId):"".concat(e,"?symbolId=").concat(a.symbolId)),h(Object(m.jsx)("button",{onClick:function(){return function(e){g.push(e)}(e)},children:f.staking}))}return function(){}}),[t.detail.account,I]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"top-info",children:[Object(m.jsxs)("div",{className:"pool-top",children:[Object(m.jsx)("span",{className:"logo ".concat(a.bTokenSymbol)}),Object(m.jsx)("span",{className:"base-token",children:a.bTokenSymbol})]}),Object(m.jsxs)("div",{className:"pool-detail",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"title",children:a.airdrop?f.total:f["pool-liq"]}),Object(m.jsx)(d.a,{value:a.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:a.lpApy?7:0})]}),Object(m.jsx)("div",{className:"multiplier",children:a.multiplier&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{children:f.multiplier}),Object(m.jsxs)("span",{className:"multiplier-value",title:f["multiplier-tip"],children:[a.multiplier,"x"]})]})}),Object(m.jsxs)("div",{className:"apy",children:[Object(m.jsx)("span",{children:f.apy}),Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:a.lpApy?"sushi-apy-underline":"",title:a.lpApy&&f["deri-apy"],children:a.apy?Object(m.jsx)(d.a,{value:a.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),a.lpApy&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{children:" + "}),Object(m.jsxs)("span",{className:a.lpApy?"sushi-apy-underline":"",title:a.lpApy&&a.label,children:[" ",Object(m.jsx)(d.a,{value:a.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]})]})]}),Object(m.jsx)("div",{className:"bottom-btn",children:x})]}),o!==b.length-1&&Object(m.jsx)("div",{className:"top-line"})]})}t.a=Object(b.b)("wallet","version")(Object(b.c)((function(e){var t=e.wallet,n=e.group,a=void 0===n?{}:n,c=e.lang,r=a.pool,s=a.list,i=O()("pool",{"only-one":1===s.length,full:5===s.length});return Object(m.jsxs)("div",{className:i,children:[Object(m.jsxs)("div",{className:"pool-header",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("div",{className:"network",children:r.network&&r.network.toUpperCase()}),Object(m.jsxs)("div",{className:"pool-desc",children:[Object(m.jsxs)("span",{className:"symbol",children:[Object(m.jsxs)("span",{className:"symbol-label",children:[c.symbol,":"]}),Object(m.jsx)("span",{className:"symbol-value",children:r.symbol})]}),Object(m.jsxs)("span",{className:"address",children:[Object(m.jsxs)("span",{className:"address-label",children:[c.address,":"]}),r.airdrop?"--":Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(v[r.chainId]&&v[r.chainId].viewUrl,"/address/").concat(r.address),children:r.formatAdd})]})]})]}),Object(m.jsx)("div",{className:"version",children:c[r.version]})]}),Object(m.jsx)("div",{className:"pool-info",children:s.map((function(e,n){return Object(m.jsx)(x,{card:e,index:n,pool:r,list:s,wallet:t,lang:c},n)}))})]})})))},682:function(e,t,n){},683:function(e,t,n){},723:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(5),r=n(629),s=n(615),i=(n(682),n(683),n(47)),l=n(18);t.default=Object(i.b)("version","loading")(Object(i.c)((function(e){var t=e.lang,n=e.loading,i=Object(s.a)(!0),o=Object(a.a)(i,4),u=o[0],d=(o[1],o[2]),b=o[3];return Object(c.useEffect)((function(){return u?n.loaded():n.loading(),function(){}}),[u]),Object(l.jsxs)("div",{className:"mining-info",children:[Object(l.jsx)("div",{className:"pools",children:b.map((function(e,n){return Object(l.jsx)(r.a,{group:e,lang:t},n)}))}),Object(l.jsx)("div",{className:"pools",children:d.map((function(e,n){return Object(l.jsx)(r.a,{group:e,lang:t},n)}))})]})})))}}]);
//# sourceMappingURL=14.7eb65c73.chunk.js.map