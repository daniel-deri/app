(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[22],{1401:function(e,t,n){},1402:function(e,t,n){},1442:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(2),r=n(16),i=n(12),o=(n(1401),n(1402),n(688)),l=n.n(o),u=n(983),d=n(744),p=n(74),b=n(895),j=n(18),f=n(98),O=n(897),m=n(44),h=n(31),x=j.a.get(),v=f[x].chainInfo,g=O.openPoolList;t.default=Object(p.b)("version","loading")(Object(p.c)((function(e){var t=e.lang,n=e.loading,c=Object(d.a)(!0),o=Object(r.a)(c,5),p=o[0],f=(o[1],o[2]),O=o[3],y=o[4],N=Object(i.useState)([]),k=Object(r.a)(N,2),A=k[0],w=k[1],S=Object(i.useState)("all"),F=Object(r.a)(S,2),I=F[0],T=F[1],C=l()("filter-area",I),B=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.nb.update();case 2:return e.abrupt("return",Object(j.p)(x,"v2_lite_open"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(t===I?"all":t),"open"!==t||0!==A.length){e.next=11;break}return n.loading(),e.t0=m.c,e.next=6,B();case 6:e.t1=e.sent,c=(c=(c=(0,e.t0)(e.t1)).filter((function(e){return!g.includes(e.pool)}))).map((function(e){return Object(m.s)(e,null,v)})),Promise.all(c).then((function(e){c=Object(m.m)(e),w(c),n.loaded()}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return p?n.loaded():n.loading(),function(){}}),[p]),Object(h.jsxs)("div",{className:"mining-info",children:[Object(h.jsxs)("div",{className:C,children:[Object(h.jsx)("span",{className:"future-zone",onClick:function(){return E("future")},children:t.futures}),Object(h.jsx)("span",{className:"option-zone",onClick:function(){return E("option")},children:t.options}),Object(h.jsx)("span",{className:"separator-line"}),Object(h.jsx)("span",{className:"open-zone",onClick:function(){return E("open")},children:t["open-zone"]})]}),"all"===I&&Object(h.jsxs)("div",{className:"pools",children:[y.map((function(e,n){return Object(h.jsx)(u.a,{group:e,lang:t},n)})),O.concat(f).map((function(e,n){return Object(h.jsx)(u.a,{group:e,lang:t},n)}))]}),"future"===I&&Object(h.jsx)("div",{className:"pools",children:O.concat(f).map((function(e,n){return Object(h.jsx)(u.a,{group:e,lang:t},n)}))}),"option"===I&&Object(h.jsx)("div",{className:"pools",children:Object(h.jsx)("div",{className:"pools",children:y.map((function(e,n){return Object(h.jsx)(u.a,{group:e,lang:t},n)}))})}),"open"===I&&Object(h.jsxs)("div",{className:"pools open-pool",children:[A.map((function(e,n){return Object(h.jsx)(u.a,{group:e,lang:t},n)})),A.length>0&&Object(h.jsx)(b.a,{lang:t})]})]})})))},689:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),s=n(2),r=n(16),i=n(12),o=n(31);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,u=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(c?"disabled":"enabled"),O=Object(r.a)(f,2),m=O[0],h=O[1],x=Object(i.useState)(!0),v=Object(r.a)(x,2),g=v[0],y=v[1],N=Object(i.useState)(!1),k=Object(r.a)(N,2),A=k[0],w=k[1],S=Object(i.useState)(t),F=Object(r.a)(S,2),I=F[0],T=F[1],C=Object(i.useRef)(null),B=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,l();case 5:e.sent&&u&&u(),L();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){h("disabled"),w(!0),C.current&&(C.current.style.display="inline-block")},L=function(){C.current&&(C.current.style.display="none"),h("enabled"),w(!1)},J=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),L();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return J(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){g?B():W()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),A?j.pending:g?I:j.approve]})}},690:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(69),a=n(75),s=n(698),r=n(16),i=n(12),o=n(697),l=n(31),u=["allowZero"];function d(e){var t=Object(i.useState)(Object(l.jsx)("span",{className:"loading-line"})),n=Object(r.a)(t,2),d=n[0],p=n[1];return Object(i.useEffect)((function(){var t=e.allowZero,n=Object(s.a)(e,u);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&p(Object(l.jsx)(o.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text",fixedDecimalScale:!0}))),function(){}}),[e.value]),d}},700:function(e,t,n){"use strict";var c=n(12),a=n(31);t.a=function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var n=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var c="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(c)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n),n.innerText=t,n.id=c,n.style.display="block";var a=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(a.y+a.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var s=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(s,"px")}else n.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},744:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(12),a=n(18),s=n(98),r=n(44),i=n(19);n(734);const o=a.a.get(),{chainInfo:l}=s[o];function u(e,t,n){const[s,u]=Object(c.useState)(!1),[d,p]=Object(c.useState)([]),[b,j]=Object(c.useState)([]),[f,O]=Object(c.useState)([]),[m,h]=Object(c.useState)([]),[x,v]=Object(c.useState)([]),[g,y]=Object(c.useState)([]);return Object(c.useEffect)((()=>((async()=>{let c=Object(a.p)(o,"v2");const s=Object(a.p)(o,"v2_lite"),d=Object(a.p)(o,"option");let b=c.concat(s).concat(d);if(n){let e=Object(a.p)(o,"v1");const t=Object(a.K)(o);b=e.concat(t)}b=Object(r.c)(b),b=b.map((e=>Object(r.s)(e,t,l)));const f=Object(a.z)(o).map((async e=>{const t=e.pool||"";let n;return Object(r.q)(e.pool),Object(r.r)(e.pool)&&(n=i.a.get("mining","sushi-apy")),Object(r.p)(e.pool)&&(n=i.a.get("mining","cake-apy")),Object.assign(e,{network:l[e.chainId].name,formatAdd:Object(r.g)(t),address:t,type:"lp",label:n,buttonText:"STAKING"})})),m=b.concat(f);Promise.all(m).then((t=>{const n={network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1740",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"};(new Date).getTime()<=16356744e5&&t.push(n);let c=t.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),a=t.filter((e=>("v2"===e.version||"v2_lite"===e.version||"v2_lite_dpmm"===e.version)&&!e.retired)),s=t.filter((e=>"option"===e.version&&!e.retired));const i=t.filter((e=>e.retired&&!e.premining)),o=t.filter((e=>e.retired&&e.premining));let l=t.filter((e=>e.isOpen));e&&(c=Object(r.m)(c),a=Object(r.m)(a),s=Object(r.m)(s),l=Object(r.m)(l)),O(a),j(c),h(s),p(t),v(i),y(o),u(!0)}))})(),()=>d.length=0)),[]),[s,d,b,f,m,x,g]}},842:function(e,t){},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(896);var c=n(158),a=n(202),s=n(31);function r(e){var t=e.lang;return Object(s.jsxs)("div",{className:"pool-placehold",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("div",{className:"title",children:t["add-pool"]})}),Object(s.jsxs)("div",{className:"pool-body",children:[Object(s.jsx)("div",{className:"info",children:Object(s.jsx)("div",{children:t["add-pool-text"]})}),Object(s.jsxs)("div",{className:"btn-c",children:[a.isMobile&&Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{onClick:function(){alert(t["please-operate"])},children:t.add})}),a.isBrowser&&Object(s.jsx)(c.b,{to:"/addpool",children:Object(s.jsx)("button",{children:t.add})})]})]})]})}},896:function(e,t,n){},897:function(e){e.exports=JSON.parse('{"openPoolList":["0xbe63f663349059F436364aC1700603d9570bFBc3","0x6D1c634964CA200faaF384CD767020C2c64466aC"]}')},983:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(2),r=n(16),i=n(12),o=n(41),l=n(98),u=n(18),d=n(690),p=n(74),b=n(689),j=n(44),f=n(688),O=n.n(f),m=n(700),h=(n(734),n(31)),x=l[u.a.get()].chainInfo;function v(e){var t=e.wallet,n=e.pool,c=e.card,l=e.index,p=e.list,f=e.lang,O=Object(i.useState)(""),x=Object(r.a)(O,2),v=x[0],g=x[1],y=Object(i.useState)(!1),N=Object(r.a)(y,2),k=N[0],A=N[1],w=Object(i.useState)({}),S=Object(r.a)(w,2),F=S[0],I=S[1],T=Object(o.useHistory)(),C=function(){t.connect().then((function(){A(!0)}))},B=function(){var e=Object(s.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.P)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(f["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.e)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(f["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.jb)(n.chainId,t.detail.account);case 11:e.sent.success||alert(f["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(a.a.mark((function e(t){var c,s,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.F)(t.chainId,t.pool,t.bTokenId);case 2:return c=e.sent,e.next=5,Object(u.G)(t.chainId,t.pool,t.bTokenId);case 5:if(s=e.sent,r={liquidity:s.liquidity,apy:(100*+c.apy).toFixed(2),multiplier:c.multiplier},!t.isLp){e.next=15;break}return e.next=10,Object(u.B)(t.chainId,t.pool);case 10:i=e.sent,o=(100*+i.apy2).toFixed(2),r.lpApy=o,r.isCakeLP=Object(j.p)(n.address),r.isSushiLP=Object(j.r)(n.address);case 15:I(r);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?g(Object(h.jsx)(b.a,{btnText:f.claim,click:B,lang:f})):g(Object(h.jsx)(b.a,{btnText:f["connect-wallet"],click:C,lang:f}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(n.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),g(Object(h.jsx)("button",{onClick:function(){return function(e){T.push(e)}(e)},children:f.staking}))}n&&n.airdrop?I({liquidity:c.liquidity,airdrop:n.airdrop}):E(c)}),[t.detail.account,k,c]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"top-info",children:[Object(h.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==n.version&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"logo ".concat(c.bTokenSymbol)})}),"v2_lite_open"===n.version&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"bg-logo",children:Object(h.jsx)("img",{onError:function(e){e.target.src="data:image/png;base64,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"},src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(c.bTokenSymbol,".png")})})}),Object(j.p)(n.address)&&Object(h.jsx)(m.a,{children:Object(h.jsx)("span",{tip:f["cake-lp-hover"],className:"base-token lp-token",children:c.bTokenSymbol})}),Object(j.r)(n.address)&&Object(h.jsx)(m.a,{children:Object(h.jsx)("span",{tip:f["sushi-lp-hover"],className:"base-token lp-token",children:c.bTokenSymbol})}),!c.isLp&&Object(h.jsx)("span",{className:"base-token",children:c.bTokenSymbol})]}),Object(h.jsxs)("div",{className:"pool-detail",children:[Object(h.jsxs)("div",{className:"liq",children:[Object(h.jsx)("span",{className:"title",children:c.airdrop?f.total:f["pool-liq"]}),Object(h.jsx)(d.a,{value:F.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:F.lpApy?7:0})]}),Object(h.jsx)("div",{className:"multiplier",children:F.multiplier&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:f.multiplier}),Object(h.jsx)(m.a,{block:!1,children:Object(h.jsxs)("span",{className:"multiplier-value",tip:f["multiplier-tip"],children:[F.multiplier,"x"]})})]})}),Object(h.jsx)("div",{className:"apy ".concat(F.lpApy&&"lp-apy"),children:!c.isOpen&&!c.airdrop&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:f.apy}),Object(h.jsx)(m.a,{block:!1,title:F.lpApy,children:Object(h.jsx)("span",{className:F.lpApy?"sushi-apy-underline":"",tip:F.lpApy?f["deri-apy"]:"",children:Object(h.jsx)(d.a,{value:F.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})}),F.lpApy&&F.lpApy>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:"+"}),Object(h.jsx)(m.a,{block:!1,children:Object(h.jsx)("span",{className:F.lpApy?"sushi-apy-underline":"",tip:c.label,children:Object(h.jsx)(d.a,{value:F.lpApy,displayType:"text",suffix:"%",decimalScale:2})})})]})]})})]})]}),Object(h.jsx)("div",{className:"bottom-btn",children:v})]}),l!==p.length-1&&Object(h.jsx)("div",{className:"top-line"})]})}t.a=Object(p.b)("wallet","version")(Object(p.c)((function(e){var t=e.wallet,n=e.group,c=void 0===n?{}:n,a=e.lang,s=c.pool,r=c.list,i=O()("pool",{"only-one":1===r.length,full:5===r.length});return Object(h.jsxs)("div",{className:i,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("div",{className:"network",children:s.network&&s.network.toUpperCase()}),Object(h.jsxs)("div",{className:"pool-desc",children:[Object(h.jsxs)("span",{className:"symbol",children:[Object(h.jsxs)("span",{className:"symbol-label",children:[a.symbol,":"]}),Object(h.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(h.jsxs)("span",{className:"address",children:[Object(h.jsxs)("span",{className:"address-label",children:[a.address,":"]}),s.airdrop?"--":Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(x[s.chainId]&&x[s.chainId].viewUrl,"/address/").concat(s.address),children:s.formatAdd})]})]})]}),Object(h.jsx)("div",{className:"version",children:a[s.version]})]}),Object(h.jsx)("div",{className:"pool-info",children:r.map((function(e,n){return Object(h.jsx)(v,{card:e,index:n,pool:s,list:r,wallet:t,lang:a},n)}))})]})})))}}]);
//# sourceMappingURL=22.84b7b06b.chunk.js.map