(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[21],{1308:function(e,t,n){},1309:function(e,t,n){},1346:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(1),s=n(9),i=n(8),o=(n(1308),n(1309),n(617)),l=n.n(o),u=n(924),d=n(673),p=n(47),b=n(842),j=n(13),f=n(66),O=n(844),h=n(27),m=n(18),x=j.a.get(),v=f[x].chainInfo,g=O.openPoolList;t.default=Object(p.b)("version","loading")(Object(p.c)((function(e){var t=e.lang,n=e.loading,c=Object(d.a)(!0),o=Object(s.a)(c,5),p=o[0],f=(o[1],o[2]),O=o[3],y=o[4],k=Object(i.useState)([]),N=Object(s.a)(k,2),A=N[0],w=N[1],S=Object(i.useState)("all"),F=Object(s.a)(S,2),I=F[0],T=F[1],C=l()("filter-area",I),B=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.jb.update();case 2:return e.abrupt("return",Object(j.p)(x,"v2_lite_open"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(r.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(t===I?"all":t),"open"!==t||0!==A.length){e.next=11;break}return n.loading(),e.t0=h.c,e.next=6,B();case 6:e.t1=e.sent,c=(c=(c=(0,e.t0)(e.t1)).filter((function(e){return!g.includes(e.pool)}))).map((function(e){return Object(h.r)(e,null,v)})),Promise.all(c).then((function(e){c=Object(h.l)(e),w(c),n.loaded()}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return p?n.loaded():n.loading(),function(){}}),[p]),Object(m.jsxs)("div",{className:"mining-info",children:[Object(m.jsxs)("div",{className:C,children:[Object(m.jsx)("span",{className:"future-zone",onClick:function(){return E("future")},children:t.futures}),Object(m.jsx)("span",{className:"option-zone",onClick:function(){return E("option")},children:t.options}),Object(m.jsx)("span",{className:"separator-line"}),Object(m.jsx)("span",{className:"open-zone",onClick:function(){return E("open")},children:t["open-zone"]})]}),"all"===I&&Object(m.jsxs)("div",{className:"pools",children:[y.map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)})),O.concat(f).map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)}))]}),"future"===I&&Object(m.jsx)("div",{className:"pools",children:O.concat(f).map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)}))}),"option"===I&&Object(m.jsx)("div",{className:"pools",children:Object(m.jsx)("div",{className:"pools",children:y.map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)}))})}),"open"===I&&Object(m.jsxs)("div",{className:"pools open-pool",children:[A.map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)})),A.length>0&&Object(m.jsx)(b.a,{lang:t})]})]})})))},620:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),r=n(1),s=n(9),i=n(8),o=n(18);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,u=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(c?"disabled":"enabled"),O=Object(s.a)(f,2),h=O[0],m=O[1],x=Object(i.useState)(!0),v=Object(s.a)(x,2),g=v[0],y=v[1],k=Object(i.useState)(!1),N=Object(s.a)(k,2),A=N[0],w=N[1],S=Object(i.useState)(t),F=Object(s.a)(S,2),I=F[0],T=F[1],C=Object(i.useRef)(null),B=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===h){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,l();case 5:e.sent&&u&&u(),L();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){m("disabled"),w(!0),C.current&&(C.current.style.display="inline-block")},L=function(){C.current&&(C.current.style.display="none"),m("enabled"),w(!1)},J=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),L();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return J(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){g?B():W()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),A?j.pending:g?I:j.approve]})}},622:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(53),a=n(42),r=n(628),s=n(9),i=n(8),o=n(627),l=n(18),u=["allowZero"];function d(e){var t=Object(i.useState)(Object(l.jsx)("span",{className:"loading-line"})),n=Object(s.a)(t,2),d=n[0],p=n[1];return Object(i.useEffect)((function(){var t=e.allowZero,n=Object(r.a)(e,u);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&p(Object(l.jsx)(o.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),d}},631:function(e,t,n){"use strict";var c=n(8),a=n(18);t.a=function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var n=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var c="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(c)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n),n.innerText=t,n.id=c,n.style.display="block";var a=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(a.y+a.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var r=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(r,"px")}else n.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},673:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),r=n(1),s=n(9),i=n(8),o=n(13),l=n(66),u=n(27),d=n(15),p=(n(662),o.a.get()),b=l[p].chainInfo;function j(e,t,n){var c=Object(i.useState)(!1),l=Object(s.a)(c,2),j=l[0],f=l[1],O=Object(i.useState)([]),h=Object(s.a)(O,2),m=h[0],x=h[1],v=Object(i.useState)([]),g=Object(s.a)(v,2),y=g[0],k=g[1],N=Object(i.useState)([]),A=Object(s.a)(N,2),w=A[0],S=A[1],F=Object(i.useState)([]),I=Object(s.a)(F,2),T=I[0],C=I[1],B=Object(i.useState)([]),E=Object(s.a)(B,2),L=E[0],J=E[1],W=Object(i.useState)([]),q=Object(s.a)(W,2),Y=q[0],z=q[1];return Object(i.useEffect)((function(){var c=function(){var c=Object(r.a)(a.a.mark((function c(){var s,i,l,j,O,h,m,v;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:s=Object(o.p)(p,"v2"),i=Object(o.p)(p,"v2_lite"),l=Object(o.p)(p,"option"),j=s.concat(i).concat(l),n&&(O=Object(o.p)(p,"v1"),h=Object(o.K)(p),j=O.concat(h)),j=(j=Object(u.c)(j)).map((function(e){return Object(u.r)(e,t,b)})),m=Object(o.z)(p).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pool||"",Object(u.p)(t.pool),Object(u.q)(t.pool)&&(c=d.a.get("mining","sushi-apy")),Object(u.o)(t.pool)&&(c=d.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,formatAdd:Object(u.g)(n),address:n,type:"lp",label:c,buttonText:"STAKING"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=j.concat(m),Promise.all(v).then((function(t){(new Date).getTime()<=16345512e5&&t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"4000",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"});var n=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),a=t.filter((function(e){return"option"===e.version&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),s=t.filter((function(e){return e.retired&&e.premining})),i=t.filter((function(e){return e.isOpen}));e&&(n=Object(u.l)(n),c=Object(u.l)(c),a=Object(u.l)(a),i=Object(u.l)(i)),S(c),k(n),C(a),x(t),J(r),z(s),f(!0)}));case 10:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return c(),function(){return m.length=0}}),[]),[j,m,y,w,T,L,Y]}},776:function(e,t){},842:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(843);var c=n(116),a=n(161),r=n(18);function s(e){var t=e.lang;return Object(r.jsxs)("div",{className:"pool-placehold",children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("div",{className:"title",children:t["add-pool"]})}),Object(r.jsxs)("div",{className:"pool-body",children:[Object(r.jsx)("div",{className:"info",children:Object(r.jsx)("div",{children:t["add-pool-text"]})}),Object(r.jsxs)("div",{className:"btn-c",children:[a.isMobile&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{onClick:function(){alert(t["please-operate"])},children:t.add})}),a.isBrowser&&Object(r.jsx)(c.b,{to:"/addpool",children:Object(r.jsx)("button",{children:t.add})})]})]})]})}},843:function(e,t,n){},844:function(e){e.exports=JSON.parse('{"openPoolList":["0xbe63f663349059F436364aC1700603d9570bFBc3","0x6D1c634964CA200faaF384CD767020C2c64466aC"]}')},924:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(1),s=n(9),i=n(8),o=n(25),l=n(66),u=n(13),d=n(622),p=n(47),b=n(620),j=n(27),f=n(617),O=n.n(f),h=n(631),m=(n(662),n(18)),x=l[u.a.get()].chainInfo;function v(e){var t=e.wallet,n=e.pool,c=e.card,l=e.index,p=e.list,f=e.lang,O=Object(i.useState)(""),x=Object(s.a)(O,2),v=x[0],g=x[1],y=Object(i.useState)(!1),k=Object(s.a)(y,2),N=k[0],A=k[1],w=Object(i.useState)({}),S=Object(s.a)(w,2),F=S[0],I=S[1],T=Object(o.useHistory)(),C=function(){t.connect().then((function(){A(!0)}))},B=function(){var e=Object(r.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.P)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(f["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.e)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(f["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.gb)(n.chainId,t.detail.account);case 11:e.sent.success||alert(f["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.F)(t.chainId,t.pool,t.bTokenId);case 2:return c=e.sent,e.next=5,Object(u.G)(t.chainId,t.pool,t.bTokenId);case 5:if(r=e.sent,s={liquidity:r.liquidity,apy:(100*+c.apy).toFixed(2),multiplier:c.multiplier},!t.isLp){e.next=15;break}return e.next=10,Object(u.B)(t.chainId,t.pool);case 10:i=e.sent,o=(100*+i.apy2).toFixed(2),s.lpApy=o,s.isCakeLP=Object(j.o)(n.address),s.isSushiLP=Object(j.q)(n.address);case 15:I(s);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?g(Object(m.jsx)(b.a,{btnText:f.claim,click:B,lang:f})):g(Object(m.jsx)(b.a,{btnText:f["connect-wallet"],click:C,lang:f}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(n.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),g(Object(m.jsx)("button",{onClick:function(){return function(e){T.push(e)}(e)},children:f.staking}))}n&&n.airdrop?I({liquidity:c.liquidity,airdrop:n.airdrop}):E(c)}),[t.detail.account,N,c]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"top-info",children:[Object(m.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==n.version&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("span",{className:"logo ".concat(c.bTokenSymbol)})}),"v2_lite_open"===n.version&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("span",{className:"bg-logo",children:Object(m.jsx)("img",{onError:function(e){e.target.src="data:image/png;base64,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"},src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(c.bTokenSymbol,".png")})})}),Object(j.o)(n.address)&&Object(m.jsx)(h.a,{children:Object(m.jsx)("span",{tip:f["cake-lp-hover"],className:"base-token lp-token",children:c.bTokenSymbol})}),Object(j.q)(n.address)&&Object(m.jsx)(h.a,{children:Object(m.jsx)("span",{tip:f["sushi-lp-hover"],className:"base-token lp-token",children:c.bTokenSymbol})}),!c.isLp&&Object(m.jsx)("span",{className:"base-token",children:c.bTokenSymbol})]}),Object(m.jsxs)("div",{className:"pool-detail",children:[Object(m.jsxs)("div",{className:"liq",children:[Object(m.jsx)("span",{className:"title",children:c.airdrop?f.total:f["pool-liq"]}),Object(m.jsx)(d.a,{value:F.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:F.lpApy?7:0})]}),Object(m.jsx)("div",{className:"multiplier",children:F.multiplier&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{children:f.multiplier}),Object(m.jsx)(h.a,{block:!1,children:Object(m.jsxs)("span",{className:"multiplier-value",tip:f["multiplier-tip"],children:[F.multiplier,"x"]})})]})}),Object(m.jsx)("div",{className:"apy ".concat(F.lpApy&&"lp-apy"),children:!c.isOpen&&!c.airdrop&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{children:f.apy}),Object(m.jsx)(h.a,{block:!1,title:F.lpApy,children:Object(m.jsx)("span",{className:F.lpApy?"sushi-apy-underline":"",tip:F.lpApy?f["deri-apy"]:"",children:Object(m.jsx)(d.a,{value:F.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})}),F.lpApy&&F.lpApy>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{children:"+"}),Object(m.jsx)(h.a,{block:!1,children:Object(m.jsx)("span",{className:F.lpApy?"sushi-apy-underline":"",tip:c.label,children:Object(m.jsx)(d.a,{value:F.lpApy,displayType:"text",suffix:"%",decimalScale:2})})})]})]})})]})]}),Object(m.jsx)("div",{className:"bottom-btn",children:v})]}),l!==p.length-1&&Object(m.jsx)("div",{className:"top-line"})]})}t.a=Object(p.b)("wallet","version")(Object(p.c)((function(e){var t=e.wallet,n=e.group,c=void 0===n?{}:n,a=e.lang,r=c.pool,s=c.list,i=O()("pool",{"only-one":1===s.length,full:5===s.length});return Object(m.jsxs)("div",{className:i,children:[Object(m.jsxs)("div",{className:"pool-header",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("div",{className:"network",children:r.network&&r.network.toUpperCase()}),Object(m.jsxs)("div",{className:"pool-desc",children:[Object(m.jsxs)("span",{className:"symbol",children:[Object(m.jsxs)("span",{className:"symbol-label",children:[a.symbol,":"]}),Object(m.jsx)("span",{className:"symbol-value",children:r.symbol})]}),Object(m.jsxs)("span",{className:"address",children:[Object(m.jsxs)("span",{className:"address-label",children:[a.address,":"]}),r.airdrop?"--":Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(x[r.chainId]&&x[r.chainId].viewUrl,"/address/").concat(r.address),children:r.formatAdd})]})]})]}),Object(m.jsx)("div",{className:"version",children:a[r.version]})]}),Object(m.jsx)("div",{className:"pool-info",children:s.map((function(e,n){return Object(m.jsx)(v,{card:e,index:n,pool:r,list:s,wallet:t,lang:a},n)}))})]})})))}}]);
//# sourceMappingURL=21.1318258d.chunk.js.map