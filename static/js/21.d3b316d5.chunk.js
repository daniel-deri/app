(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[21],{1362:function(e,t,c){},1363:function(e,t,c){},1461:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(2),l=c(16),i=c(12),r=c(744),o=c(688),d=c.n(o),j=(c(1362),c(1363),c(74)),u=c(983),b=c(895),p=c(31);function O(e){var t=e.optionPools,c=e.v1Pools,n=e.v2Pools,a=e.openPools,s=e.type,l=e.lang;return Object(p.jsxs)("div",{children:[""===s&&Object(p.jsxs)("div",{className:"official-pool",children:[Object(p.jsx)("div",{className:"pools",children:t.map((function(e,t){return Object(p.jsx)(u.a,{group:e,lang:l},t)}))}),Object(p.jsx)("div",{className:"pools",children:n.map((function(e,t){return Object(p.jsx)(u.a,{group:e,lang:l},t)}))}),Object(p.jsx)("div",{className:"pools",children:c.map((function(e,t){return Object(p.jsx)(u.a,{group:e,lang:l},t)}))})]}),"options"===s&&Object(p.jsx)("div",{className:"official-pool",children:Object(p.jsx)("div",{className:"pools",children:t.map((function(e,t){return Object(p.jsx)(u.a,{group:e,lang:l},t)}))})}),"futures"===s&&Object(p.jsxs)("div",{className:"official-pool",children:[Object(p.jsx)("div",{className:"pools",children:n.map((function(e,t){return Object(p.jsx)(u.a,{group:e,lang:l},t)}))}),Object(p.jsx)("div",{className:"pools",children:c.map((function(e,t){return Object(p.jsx)(u.a,{group:e,lang:l},t)}))})]}),"opens"===s&&Object(p.jsxs)("div",{className:"pools open-pool",children:[a.map((function(e,t){return Object(p.jsx)(u.a,{group:e,lang:l},t)})),a.length>0&&Object(p.jsx)(b.a,{lang:l})]})]})}var m=c(98),x=c(690),h=c(18),f=c(41),v=c(158),g=c(44),y=c(700),N=m[h.a.get()].chainInfo;function k(e){var t=e.group,c=e.lang,n=e.index,a=e.wallet,s=t.pool,l=t.list;return Object(p.jsxs)("div",{className:"pool-list",children:[Object(p.jsxs)("div",{className:"pool-list-header",children:[Object(p.jsxs)("div",{className:"list-header-left",children:[Object(p.jsx)("div",{className:"l-h-network",children:s.network&&s.network.toUpperCase()}),Object(p.jsxs)("div",{className:"l-h-y-ad",children:[Object(p.jsxs)("span",{className:"symbol",children:[Object(p.jsxs)("span",{className:"symbol-label",children:[c.symbol," : "]}),Object(p.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(p.jsxs)("span",{className:"add",children:[Object(p.jsxs)("span",{className:"add-label",children:[c.address," : "]}),s.airdrop?"--":Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(N[s.chainId]&&N[s.chainId].viewUrl,"/address/").concat(s.address),children:s.formatAdd})]})]})]}),Object(p.jsx)("div",{className:"list-header-right",children:c[s.version]})]}),Object(p.jsx)("div",{className:"pool-list-body",children:l.map((function(e,t){return Object(p.jsx)(w,{index:t,item:e,lang:c,wallet:a,pool:s})}))})]},n)}function w(e){var t=e.index,c=e.item,n=e.lang,r=e.wallet,o=e.pool,d=Object(i.useState)(!1),j=Object(l.a)(d,2),u=j[0],b=j[1],O=Object(i.useState)(""),m=Object(l.a)(O,2),N=m[0],k=m[1],w=(Object(f.useHistory)(),function(){r.connect().then((function(){b(!0)}))}),A=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.P)(r.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(n["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(g.e)(r.detail.chainId,t.chainId)){e.next=9;break}return alert(n["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(h.jb)(t.chainId,r.detail.account);case 11:e.sent.success||alert(n["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(c&&c.airdrop)r.isConnected()?k(Object(p.jsx)("a",{href:"#",onClick:A,children:n.claim})):k(Object(p.jsx)("a",{href:"#",onClick:w,children:n["connect-wallet"]}));else{var e="/mining/".concat(o.version||"v1","/").concat(o.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(o.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),k(Object(p.jsx)(v.b,{to:e,children:n.staking}))}return function(){}}),[r.detail.account,u]),Object(p.jsxs)("div",{className:"list-item",children:[Object(p.jsxs)("span",{className:"col btoken",children:[Object(p.jsx)("span",{className:"logo ".concat(c.bTokenSymbol)}),Object(p.jsx)("span",{className:"base-token",children:c.bTokenSymbol})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:c.airdrop?n.total:n["pool-liq"]}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsx)(x.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:c.lpApy?7:0})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:n.multiplier}),Object(p.jsx)(y.a,{children:Object(p.jsx)("div",{className:"col-value",tip:n["multiplier-tip"],children:Object(p.jsx)("span",{className:"underline",children:Object(p.jsx)(x.a,{value:c.multiplier,suffix:"x"})})})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:n.apy}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsxs)("span",{children:[Object(p.jsx)(y.a,{block:!1,children:Object(p.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",tip:c.lpApy&&n["deri-apy"],children:c.apy?Object(p.jsx)(x.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"})}),c.lpApy&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:" + "}),Object(p.jsx)(y.a,{block:!1,children:Object(p.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",tip:c.lpApy&&c.label,children:[" ",Object(p.jsx)(x.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})})]})]})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:n["claimed-deri"]}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsx)(x.a,{value:c.claimed,decimalScale:2})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:n["unclaimed-deri"]}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsx)(x.a,{value:c.unclaimed,decimalScale:2})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:n["mining-pnl"]}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsx)(x.a,{value:c.pnl,decimalScale:2})})]}),Object(p.jsx)("span",{className:"col",children:Object(p.jsxs)("div",{className:"staking",children:[N," >"]})})]},t)}function A(e){var t=e.optionPools,c=e.v1Pools,n=e.v2Pools,a=e.openPools,s=e.type,l=e.lang,i=e.wallet;return Object(p.jsxs)("div",{children:[""===s&&Object(p.jsxs)(p.Fragment,{children:[t.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:i},t)})),n.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:i},t)})),c.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:i},t)}))]}),"futures"===s&&Object(p.jsxs)(p.Fragment,{children:[n.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:i},t)})),c.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:i},t)}))]}),"options"===s&&Object(p.jsx)(p.Fragment,{children:t.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:i},t)}))}),"opens"===s&&Object(p.jsx)(p.Fragment,{children:a.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:i},t)}))})]})}var S=c(897),I=h.a.get(),T=m[I].chainInfo,F=S.openPoolList;t.default=Object(j.b)("version","loading","wallet")(Object(j.c)((function(e){var t=e.lang,c=e.loading,n=e.wallet,o=Object(r.a)(!0,n),j=Object(l.a)(o,7),u=j[0],b=(j[1],j[2]),m=j[3],x=j[4],f=(j[5],j[6],Object(i.useState)([])),v=Object(l.a)(f,2),y=v[0],N=v[1],k=Object(i.useState)(""),w=Object(l.a)(k,2),S=w[0],C=w[1],B=Object(i.useState)("card"),P=Object(l.a)(B,2),E=P[0],L=(P[1],d()("filter-area",S)),J=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.nb.update();case 2:return e.abrupt("return",Object(h.p)(I,"v2_lite_open"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(a.a.mark((function e(t){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(t===S?"":t),"opens"!==t||0!==y.length){e.next=11;break}return c.loading(),e.t0=g.c,e.next=6,J();case 6:e.t1=e.sent,s=(s=(s=(0,e.t0)(e.t1)).filter((function(e){return!F.includes(e.pool)}))).map((function(e){return Object(g.s)(e,n,T)})),Promise.all(s).then((function(e){for(var t=0,n=(s=Object(g.m)(e)).length;t<n;t++){for(var a=void 0,l=void 0,i=0,r=s.length;i<r;i++)"--"===s[i].pool.symbol&&(a=i,l=s[i]);s.splice(a,1),s.push(l)}N(s),c.loaded()}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return u?c.loaded():c.loading(),console.log(n.isConnected()),function(){}}),[u,n]),Object(p.jsxs)("div",{className:"pool-list",children:[Object(p.jsx)("div",{className:"checkout-pools",children:Object(p.jsxs)("div",{className:L,children:[Object(p.jsx)("div",{className:"futures",onClick:function(){return W("futures")},children:t.futures}),Object(p.jsx)("div",{className:"options",onClick:function(){return W("options")},children:t.options}),Object(p.jsx)("div",{className:"separator-line"}),Object(p.jsx)("div",{className:"opens",onClick:function(){return W("opens")},children:t["open-zone"]})]})}),"list"===E?Object(p.jsx)(A,{type:S,optionPools:x,v1Pools:b,v2Pools:m,openPools:y,lang:t,wallet:n}):Object(p.jsx)(O,{type:S,optionPools:x,v1Pools:b,v2Pools:m,openPools:y,lang:t})]})})))},689:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0),a=c.n(n),s=c(2),l=c(16),i=c(12),r=c(31);function o(e){var t=e.btnText,c=e.className,n=e.disabled,o=e.click,d=e.afterClick,j=e.checkApprove,u=e.wallet,b=e.spec,p=e.lang,O=Object(i.useState)(n?"disabled":"enabled"),m=Object(l.a)(O,2),x=m[0],h=m[1],f=Object(i.useState)(!0),v=Object(l.a)(f,2),g=v[0],y=v[1],N=Object(i.useState)(!1),k=Object(l.a)(N,2),w=k[0],A=k[1],S=Object(i.useState)(t),I=Object(l.a)(S,2),T=I[0],F=I[1],C=Object(i.useRef)(null),B=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===x){e.next=2;break}return e.abrupt("return");case 2:return P(),e.next=5,o();case 5:e.sent&&d&&d(),E();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){h("disabled"),A(!0),C.current&&(C.current.style.display="inline-block")},E=function(){C.current&&(C.current.style.display="none"),h("enabled"),A(!1)},L=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(j&&u&&u.detail.account)){e.next=5;break}return e.next=3,u.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(),e.next=3,u.approve(b.pool,b.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(p["approve-failed"])),E();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return L(),function(){}}),[u,b,j]),Object(i.useEffect)((function(){return t&&F(t),function(){}}),[t]),Object(r.jsxs)("button",{className:c,onClick:function(){g?B():J()},children:[Object(r.jsx)("span",{className:"btn-loading-wrap",children:Object(r.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?p.pending:g?T:p.approve]})}},690:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c(69),a=c(75),s=c(698),l=c(16),i=c(12),r=c(697),o=c(31),d=["allowZero"];function j(e){var t=Object(i.useState)(Object(o.jsx)("span",{className:"loading-line"})),c=Object(l.a)(t,2),j=c[0],u=c[1];return Object(i.useEffect)((function(){var t=e.allowZero,c=Object(s.a)(e,d);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&u(Object(o.jsx)(r.a,Object(n.a)(Object(n.a)({},c),{},{displayType:"text",fixedDecimalScale:!0}))),function(){}}),[e.value]),j}},700:function(e,t,c){"use strict";var n=c(12),a=c(31);t.a=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var c=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var n="hover-box-".concat((new Date).getTime());c=document.body.querySelector("#".concat(n)),(c=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(c),c.innerText=t,c.id=n,c.style.display="block";var a=e.currentTarget.getBoundingClientRect();if(c.style.top="".concat(a.y+a.height+window.document.documentElement.scrollTop,"px"),c.offsetWidth+e.pageX>window.screen.width)if(e.pageX-c.offsetWidth>=0)c.style.left="".concat(e.pageX-c.offsetWidth,"px");else{var s=e.pageX-c.offsetWidth/2>0?e.pageX-c.offsetWidth/2:0;c.style.left="".concat(s,"px")}else c.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){c&&c.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},744:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var n=c(12),a=c(18),s=c(98),l=c(44),i=c(19);c(734);const r=a.a.get(),{chainInfo:o}=s[r];function d(e,t,c){const[s,d]=Object(n.useState)(!1),[j,u]=Object(n.useState)([]),[b,p]=Object(n.useState)([]),[O,m]=Object(n.useState)([]),[x,h]=Object(n.useState)([]),[f,v]=Object(n.useState)([]),[g,y]=Object(n.useState)([]);return Object(n.useEffect)((()=>((async()=>{let n=Object(a.p)(r,"v2");const s=Object(a.p)(r,"v2_lite"),j=Object(a.p)(r,"option");let b=n.concat(s).concat(j);if(c){let e=Object(a.p)(r,"v1");const t=Object(a.K)(r);b=e.concat(t)}b=Object(l.c)(b),b=b.map((e=>Object(l.s)(e,t,o)));const O=Object(a.z)(r).map((async e=>{const t=e.pool||"";let c;return Object(l.q)(e.pool),Object(l.r)(e.pool)&&(c=i.a.get("mining","sushi-apy")),Object(l.p)(e.pool)&&(c=i.a.get("mining","cake-apy")),Object.assign(e,{network:o[e.chainId].name,formatAdd:Object(l.g)(t),address:t,type:"lp",label:c,buttonText:"STAKING"})})),x=b.concat(O);Promise.all(x).then((t=>{const c={network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1740",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"};(new Date).getTime()<=16356744e5&&t.push(c);let n=t.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),a=t.filter((e=>("v2"===e.version||"v2_lite"===e.version||"v2_lite_dpmm"===e.version)&&!e.retired)),s=t.filter((e=>"option"===e.version&&!e.retired));const i=t.filter((e=>e.retired&&!e.premining)),r=t.filter((e=>e.retired&&e.premining));let o=t.filter((e=>e.isOpen));e&&(n=Object(l.m)(n),a=Object(l.m)(a),s=Object(l.m)(s),o=Object(l.m)(o)),m(a),p(n),h(s),u(t),v(i),y(r),d(!0)}))})(),()=>j.length=0)),[]),[s,j,b,O,x,f,g]}},842:function(e,t){},895:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));c(896);var n=c(158),a=c(202),s=c(31);function l(e){var t=e.lang;return Object(s.jsxs)("div",{className:"pool-placehold",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("div",{className:"title",children:t["add-pool"]})}),Object(s.jsxs)("div",{className:"pool-body",children:[Object(s.jsx)("div",{className:"info",children:Object(s.jsx)("div",{children:t["add-pool-text"]})}),Object(s.jsxs)("div",{className:"btn-c",children:[a.isMobile&&Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{onClick:function(){alert(t["please-operate"])},children:t.add})}),a.isBrowser&&Object(s.jsx)(n.b,{to:"/addpool",children:Object(s.jsx)("button",{children:t.add})})]})]})]})}},896:function(e,t,c){},897:function(e){e.exports=JSON.parse('{"openPoolList":["0xbe63f663349059F436364aC1700603d9570bFBc3","0x6D1c634964CA200faaF384CD767020C2c64466aC"]}')},983:function(e,t,c){"use strict";var n=c(0),a=c.n(n),s=c(2),l=c(16),i=c(12),r=c(41),o=c(98),d=c(18),j=c(690),u=c(74),b=c(689),p=c(44),O=c(688),m=c.n(O),x=c(700),h=(c(734),c(31)),f=o[d.a.get()].chainInfo;function v(e){var t=e.wallet,c=e.pool,n=e.card,o=e.index,u=e.list,O=e.lang,m=Object(i.useState)(""),f=Object(l.a)(m,2),v=f[0],g=f[1],y=Object(i.useState)(!1),N=Object(l.a)(y,2),k=N[0],w=N[1],A=Object(i.useState)({}),S=Object(l.a)(A,2),I=S[0],T=S[1],F=Object(r.useHistory)(),C=function(){t.connect().then((function(){w(!0)}))},B=function(){var e=Object(s.a)(a.a.mark((function e(){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.P)(t.detail.account);case 2:if((c=e.sent).valid){e.next=6;break}return alert(O["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(p.e)(t.detail.chainId,c.chainId)){e.next=9;break}return alert(O["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(d.jb)(c.chainId,t.detail.account);case 11:e.sent.success||alert(O["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,s,l,i,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.F)(t.chainId,t.pool,t.bTokenId);case 2:return n=e.sent,e.next=5,Object(d.G)(t.chainId,t.pool,t.bTokenId);case 5:if(s=e.sent,l={liquidity:s.liquidity,apy:(100*+n.apy).toFixed(2),multiplier:n.multiplier},!t.isLp){e.next=15;break}return e.next=10,Object(d.B)(t.chainId,t.pool);case 10:i=e.sent,r=(100*+i.apy2).toFixed(2),l.lpApy=r,l.isCakeLP=Object(p.p)(c.address),l.isSushiLP=Object(p.r)(c.address);case 15:T(l);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(c&&c.airdrop)t.isConnected()?g(Object(h.jsx)(b.a,{btnText:O.claim,click:B,lang:O})):g(Object(h.jsx)(b.a,{btnText:O["connect-wallet"],click:C,lang:O}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(n.type,"/").concat(n.symbol,"/").concat(n.bTokenSymbol,"/").concat(c.address);n.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(n.bTokenId)),n.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(n.symbolId):"".concat(e,"?symbolId=").concat(n.symbolId)),g(Object(h.jsx)("button",{onClick:function(){return function(e){F.push(e)}(e)},children:O.staking}))}c&&c.airdrop?T({liquidity:n.liquidity,airdrop:c.airdrop}):P(n)}),[t.detail.account,k,n]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"top-info",children:[Object(h.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==c.version&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"logo ".concat(n.bTokenSymbol)})}),"v2_lite_open"===c.version&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"bg-logo",children:Object(h.jsx)("img",{onError:function(e){e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABHNCSVQICAgIfAhkiAAABmVJREFUaEPVmnloXFUUxjvZE/zHhdpJWxDBUEzS7EmtiNTWWmKbumBRaSGiQixaSW1IaFOpImqCNFYJFlSQCFULQdJIKqWLraDNOpNMEjdQBJupWmNBJXvi74T7wstkljcz902nDx5v5r17v3O+e84999zFsUzz5fF4bh0bGytPSEjIA9qp7hXqKdK8c3NzXofDcVl+83QnJSV15OXl/aFTFYcOsN7e3rWzs7PbwNrOvRpSLSg/gtJeUZ7/l1NSUuT3ssnJSSff5F4hT16t4rmL56+UawPnRElJyWC0ekVFrK+vb+PMzMw+CIiC7aJYYWFhTyRKuVyukunp6e1gVXBfgmxjcXHxuUiwpE5ExLBQES3bQP057modLWwmIB4AsSbezfCsBd8VLsGwifX09DQjrBTr1BYVFZ0NV2A45bu7uzdhvQbkfQO5F8Kpa5mYBIWJiYlBBO2C0JfhCIm2LATLwfgQ2bm45xUreJaIAXw/YC24X05ZWdlfVoB1l1EN64Hc41Y8JSQx/H0HrvA0LfWAbmUjwaORT9MNmiH3ebD6QYkpUhWQ2hmJEnbVgdwxsFvpd62BZAQkJu6H2ffFi6V8CRDEzvDutUBDgl9i4s/j4+NuWkTGp7i9IPcn4+gaf/3eL7FgFeKJZTADLCEm4xQu2B7rkB5pgxEHthLcNuOSe8wYi4ipjOIoLlgSqaBrUY944EpMTKwknes35C8ipkLp61bGiWtBIJBMvGwz3/ZitS1LiKmEtg5jyWB83V2QO8f4dgirnRflFyyGtU7yv0Z3QhurFurq6sqHmIT/rQvEVDbdwsv8WClihxyMM0hf24HVhuctxosDRMI0iB3ULRAXeQ/M9USuLJGh8Ef4/x0tfIT+3K5LJrLeAOsqPBoMYl0w3R3pJNGfYvTZPJLmDr5lBlIccuOQ/QhFntNBDs9bh8zDdKf1DruyDFrvUjBSPkTqpJV1kDOSCwed7imstQaXqNUBLBjK/aoMPCxzxnA7Zckq3lWaXPNviN2kQz7d6jA4LgdKvM2PXwA+ogNYEfuW5zqFNwC2rFgtulCgTdY3jJfyW0d/g89eMFcKsc8AbQX0uC5iVnCQ+yblzF6ixR1psCfgs02IXeDHAYh9bUUhHWV8A4sEETp8uibse8n4XxFiP9LHHiwoKPhJB3AoDOQ9Q5lG7htNZY/qioxutztramqqXYj9k56e7szOzv43lFLRfhf3wzovmoKGQGojJWBDQ0M3sBLtjRkxZan3TZFSxrBDusK8gWsmFhNXhJhMKdYqBWT5u0pHFPT1ogVXJIqcp48dJOu4EK2rBauPnDGTCzZgqTo75BGYFoJHTMI9FpPlcOPSEtr9NYw53GsfoO2whFVMGvAlyjodJI6V/MjG32usVo7nclisifSt19Hf37+cPasBBkjZnLPtiqErXsnIyMgypi2d7Co+zyDdbRezWBAjcNxF1vEWRrp7nhjuuJ95TAYv6q9nYioBGIVHo2GxHELxMUKwMc7Yxc9WXIgNI+AReHy/aDFHbeYN2CrdJnBIFQL96qLFHJHFhw086vmw0SbZtsJKooFh6o1ZyqIFU8idkk1tfPS0rVpoBidGbCFG7EFv2fmcv3xXggvoax9gtSLNsm2FU3noTvT2+CWmIuS7mPQkoV9WmOL+wgUr0HcDLlhtVtbvNhKFvWlpafm5ubm/xzMzMvmVTCov4oKrffUMtD92CwWHMe3yeCaGC44yM7kd77pqiZhyyfvokPtpjU3xSA6v+gpSLweaboXaXH+YKPkYlnsynshB6lP0+YRGbwukV8jjEIA8SqTcHS/jm1gKMk3BSC0J94HYq8H7eGpqas61CigSKDhE5iECPmRlth/SYgbZzs7OmwEd5H6W0PpFLF1TQjrympmB5PoLFP50sUzMqIz13qHf3YN71uKep+wkKBkFshqQddZ3nAolN2xiAqhWcmV3JJXIWV1aWuoOJSic75LQqmN9/6kGXMgorOJERMwAlxUhiNWgxG1yhIK7jZa9aFW4uZxMEsGSE6ridj/Lcb5olt2jImYieKccnYWgnBC9g+fHPH+Ts7+MNSP0S29ycvKIlCdTyKSsk5luJmUyKbOK13J09gdu2YE5IfOpSBrHXEcLMTOgCjLlKCj72XL2V3Y0nUJCyslZYR5yyFmesnDqJn3rYIl9NFoy5vr/AzORQD3bVOp7AAAAAElFTkSuQmCC"},src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(n.bTokenSymbol,".png")})})}),Object(p.p)(c.address)&&Object(h.jsx)(x.a,{children:Object(h.jsx)("span",{tip:O["cake-lp-hover"],className:"base-token lp-token",children:n.bTokenSymbol})}),Object(p.r)(c.address)&&Object(h.jsx)(x.a,{children:Object(h.jsx)("span",{tip:O["sushi-lp-hover"],className:"base-token lp-token",children:n.bTokenSymbol})}),!n.isLp&&Object(h.jsx)("span",{className:"base-token",children:n.bTokenSymbol})]}),Object(h.jsxs)("div",{className:"pool-detail",children:[Object(h.jsxs)("div",{className:"liq",children:[Object(h.jsx)("span",{className:"title",children:n.airdrop?O.total:O["pool-liq"]}),Object(h.jsx)(j.a,{value:I.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:I.lpApy?7:0})]}),Object(h.jsx)("div",{className:"multiplier",children:I.multiplier&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:O.multiplier}),Object(h.jsx)(x.a,{block:!1,children:Object(h.jsxs)("span",{className:"multiplier-value",tip:O["multiplier-tip"],children:[I.multiplier,"x"]})})]})}),Object(h.jsx)("div",{className:"apy ".concat(I.lpApy&&"lp-apy"),children:!n.isOpen&&!n.airdrop&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:O.apy}),Object(h.jsx)(x.a,{block:!1,title:I.lpApy,children:Object(h.jsx)("span",{className:I.lpApy?"sushi-apy-underline":"",tip:I.lpApy?O["deri-apy"]:"",children:Object(h.jsx)(j.a,{value:I.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})}),I.lpApy&&I.lpApy>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:"+"}),Object(h.jsx)(x.a,{block:!1,children:Object(h.jsx)("span",{className:I.lpApy?"sushi-apy-underline":"",tip:n.label,children:Object(h.jsx)(j.a,{value:I.lpApy,displayType:"text",suffix:"%",decimalScale:2})})})]})]})})]})]}),Object(h.jsx)("div",{className:"bottom-btn",children:v})]}),o!==u.length-1&&Object(h.jsx)("div",{className:"top-line"})]})}t.a=Object(u.b)("wallet","version")(Object(u.c)((function(e){var t=e.wallet,c=e.group,n=void 0===c?{}:c,a=e.lang,s=n.pool,l=n.list,i=m()("pool",{"only-one":1===l.length,full:5===l.length});return Object(h.jsxs)("div",{className:i,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("div",{className:"network",children:s.network&&s.network.toUpperCase()}),Object(h.jsxs)("div",{className:"pool-desc",children:[Object(h.jsxs)("span",{className:"symbol",children:[Object(h.jsxs)("span",{className:"symbol-label",children:[a.symbol,":"]}),Object(h.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(h.jsxs)("span",{className:"address",children:[Object(h.jsxs)("span",{className:"address-label",children:[a.address,":"]}),s.airdrop?"--":Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(f[s.chainId]&&f[s.chainId].viewUrl,"/address/").concat(s.address),children:s.formatAdd})]})]})]}),Object(h.jsx)("div",{className:"version",children:a[s.version]})]}),Object(h.jsx)("div",{className:"pool-info",children:l.map((function(e,c){return Object(h.jsx)(v,{card:e,index:c,pool:s,list:l,wallet:t,lang:a},c)}))})]})})))}}]);
//# sourceMappingURL=21.d3b316d5.chunk.js.map