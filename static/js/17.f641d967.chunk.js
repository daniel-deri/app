(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[17],{1144:function(e,t,n){},1145:function(e,t,n){},1178:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(1),s=n(9),i=n(8),o=(n(1144),n(1145),n(612)),l=n.n(o),u=n(729),d=n(639),p=n(47),b=n(717),j=n(13),f=n(66),O=n(26),m=n(18),h=j.a.get(),x=f[h].chainInfo;t.default=Object(p.b)("version","loading")(Object(p.c)((function(e){var t=e.lang,n=e.loading,c=Object(d.a)(!0),o=Object(s.a)(c,5),p=o[0],f=(o[1],o[2]),v=o[3],g=o[4],y=Object(i.useState)([]),N=Object(s.a)(y,2),k=N[0],A=N[1],w=Object(i.useState)("all"),S=Object(s.a)(w,2),I=S[0],F=S[1],T=l()("filter-area",I),C=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.eb.update();case 2:return e.abrupt("return",Object(j.p)(h,"v2_lite_open"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(r.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(t===I?"all":t),"open"!==t||0!==k.length){e.next=10;break}return n.loading(),e.t0=O.c,e.next=6,C();case 6:e.t1=e.sent,c=(c=(0,e.t0)(e.t1)).map((function(e){return Object(O.q)(e,null,x)})),Promise.all(c).then((function(e){c=Object(O.k)(e),A(c),n.loaded()}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return p?n.loaded():n.loading(),function(){}}),[p]),Object(m.jsxs)("div",{className:"mining-info",children:[Object(m.jsxs)("div",{className:T,children:[Object(m.jsx)("span",{className:"future-zone",onClick:function(){return B("future")},children:t.futures}),Object(m.jsx)("span",{className:"option-zone",onClick:function(){return B("option")},children:t.options}),Object(m.jsx)("span",{className:"separator-line"}),Object(m.jsx)("span",{className:"open-zone",onClick:function(){return B("open")},children:t["open-zone"]})]}),"all"===I&&Object(m.jsxs)("div",{className:"pools",children:[g.map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)})),v.concat(f).map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)}))]}),"future"===I&&Object(m.jsx)("div",{className:"pools",children:v.concat(f).map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)}))}),"option"===I&&Object(m.jsx)("div",{className:"pools",children:Object(m.jsx)("div",{className:"pools",children:g.map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)}))})}),"open"===I&&Object(m.jsxs)("div",{className:"pools open-pool",children:[k.map((function(e,n){return Object(m.jsx)(u.a,{group:e,lang:t},n)})),k.length>0&&Object(m.jsx)(b.a,{lang:t})]})]})})))},611:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),r=n(1),s=n(9),i=n(8),o=n(18);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,u=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(c?"disabled":"enabled"),O=Object(s.a)(f,2),m=O[0],h=O[1],x=Object(i.useState)(!0),v=Object(s.a)(x,2),g=v[0],y=v[1],N=Object(i.useState)(!1),k=Object(s.a)(N,2),A=k[0],w=k[1],S=Object(i.useState)(t),I=Object(s.a)(S,2),F=I[0],T=I[1],C=Object(i.useRef)(null),B=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,l();case 5:e.sent&&u&&u(),J();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){h("disabled"),w(!0),C.current&&(C.current.style.display="inline-block")},J=function(){C.current&&(C.current.style.display="none"),h("enabled"),w(!1)},W=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),J();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return W(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){g?B():L()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),A?j.pending:g?F:j.approve]})}},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(53),a=n(42),r=n(615),s=n(9),i=n(8),o=n(614),l=n(18),u=["allowZero"];function d(e){var t=Object(i.useState)(Object(l.jsx)("span",{className:"loading-line"})),n=Object(s.a)(t,2),d=n[0],p=n[1];return Object(i.useEffect)((function(){var t=e.allowZero,n=Object(r.a)(e,u);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&p(Object(l.jsx)(o.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),d}},616:function(e,t,n){"use strict";var c=n(8),a=n(18);t.a=function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var n=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var c="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(c)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n),n.innerText=t,n.id=c,n.style.display="block";var a=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(a.y+a.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var r=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(r,"px")}else n.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),r=n(1),s=n(9),i=n(8),o=n(13),l=n(66),u=n(26),d=n(15),p=(n(627),o.a.get()),b=l[p].chainInfo;function j(e,t,n){var c=Object(i.useState)(!1),l=Object(s.a)(c,2),j=l[0],f=l[1],O=Object(i.useState)([]),m=Object(s.a)(O,2),h=m[0],x=m[1],v=Object(i.useState)([]),g=Object(s.a)(v,2),y=g[0],N=g[1],k=Object(i.useState)([]),A=Object(s.a)(k,2),w=A[0],S=A[1],I=Object(i.useState)([]),F=Object(s.a)(I,2),T=F[0],C=F[1],B=Object(i.useState)([]),E=Object(s.a)(B,2),J=E[0],W=E[1],L=Object(i.useState)([]),q=Object(s.a)(L,2),Y=q[0],z=q[1];return Object(i.useEffect)((function(){var c=function(){var c=Object(r.a)(a.a.mark((function c(){var s,i,l,j,O,m,h,v;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:s=Object(o.p)(p,"v2"),i=Object(o.p)(p,"v2_lite"),l=Object(o.p)(p,"option"),j=s.concat(i).concat(l),n&&(O=Object(o.p)(p,"v1"),m=Object(o.J)(p),j=O.concat(m)),j=(j=Object(u.c)(j)).map((function(e){return Object(u.q)(e,t,b)})),h=Object(o.y)(p).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pool||"",Object(u.o)(t.pool),Object(u.p)(t.pool)&&(c=d.a.get("mining","sushi-apy")),Object(u.n)(t.pool)&&(c=d.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,formatAdd:Object(u.f)(n),address:n,type:"lp",label:c,buttonText:"STAKING"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=j.concat(h),Promise.all(v).then((function(t){(new Date).getTime()<=16326504e5&&t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"2000",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"});var n=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),a=t.filter((function(e){return"option"===e.version&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),s=t.filter((function(e){return e.retired&&e.premining})),i=t.filter((function(e){return e.isOpen}));e&&(n=Object(u.k)(n),c=Object(u.k)(c),a=Object(u.k)(a),i=Object(u.k)(i)),S(c),N(n),C(a),x(t),W(r),z(s),f(!0)}));case 10:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return c(),function(){return h.length=0}}),[]),[j,h,y,w,T,J,Y]}},679:function(e,t){},717:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(718);var c=n(116),a=n(118),r=n(18);function s(e){var t=e.lang;return Object(r.jsxs)("div",{className:"pool-placehold",children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("div",{className:"title",children:t["add-pool"]})}),Object(r.jsxs)("div",{className:"pool-body",children:[Object(r.jsx)("div",{className:"info",children:Object(r.jsx)("div",{children:t["add-pool-text"]})}),Object(r.jsxs)("div",{className:"btn-c",children:[a.isMobile&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{onClick:function(){alert(t["please-operate"])},children:t.add})}),a.isBrowser&&Object(r.jsx)(c.b,{to:"/addpool",children:Object(r.jsx)("button",{children:t.add})})]})]})]})}},718:function(e,t,n){},729:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(1),s=n(9),i=n(8),o=n(25),l=n(66),u=n(13),d=n(613),p=n(47),b=n(611),j=n(26),f=n(612),O=n.n(f),m=n(616),h=(n(627),n(18)),x=l[u.a.get()].chainInfo;function v(e){var t=e.wallet,n=e.pool,c=e.card,l=e.index,p=e.list,f=e.lang,O=Object(i.useState)(""),x=Object(s.a)(O,2),v=x[0],g=x[1],y=Object(i.useState)(!1),N=Object(s.a)(y,2),k=N[0],A=N[1],w=Object(i.useState)({}),S=Object(s.a)(w,2),I=S[0],F=S[1],T=Object(o.useHistory)(),C=function(){t.connect().then((function(){A(!0)}))},B=function(){var e=Object(r.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.N)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(f["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.d)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(f["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.bb)(n.chainId,t.detail.account);case 11:e.sent.success||alert(f["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.E)(t.chainId,t.pool,t.bTokenId);case 2:return n=e.sent,e.next=5,Object(u.F)(t.chainId,t.pool,t.bTokenId);case 5:if(c=e.sent,r={liquidity:c.liquidity,apy:(100*+n.apy).toFixed(2),multiplier:n.multiplier},!t.isLp){e.next=13;break}return e.next=10,Object(u.A)(t.chainId,t.pool);case 10:s=e.sent,i=(100*+s.apy2).toFixed(2),r.lpApy=i;case 13:F(r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?g(Object(h.jsx)(b.a,{btnText:f.claim,click:B,lang:f})):g(Object(h.jsx)(b.a,{btnText:f["connect-wallet"],click:C,lang:f}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(n.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),g(Object(h.jsx)("button",{onClick:function(){return function(e){T.push(e)}(e)},children:f.staking}))}n&&n.airdrop?F({liquidity:c.liquidity,airdrop:n.airdrop}):E(c)}),[t.detail.account,k,c]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"top-info",children:[Object(h.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==n.version&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"logo ".concat(c.bTokenSymbol)})}),"v2_lite_open"===n.version&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"bg-logo",children:Object(h.jsx)("img",{onError:function(e){e.target.src="data:image/png;base64,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"},src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(c.bTokenSymbol,".png")})})}),Object(h.jsx)("span",{className:"base-token",children:c.bTokenSymbol})]}),Object(h.jsxs)("div",{className:"pool-detail",children:[Object(h.jsxs)("div",{className:"liq",children:[Object(h.jsx)("span",{className:"title",children:c.airdrop?f.total:f["pool-liq"]}),Object(h.jsx)(d.a,{value:I.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:I.lpApy?7:0})]}),Object(h.jsx)("div",{className:"multiplier",children:I.multiplier&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:f.multiplier}),Object(h.jsx)(m.a,{block:!1,children:Object(h.jsxs)("span",{className:"multiplier-value",tip:f["multiplier-tip"],children:[I.multiplier,"x"]})})]})}),Object(h.jsx)("div",{className:"apy ".concat(I.lpApy&&"lp-apy"),children:!c.isOpen&&!c.airdrop&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:f.apy}),Object(h.jsx)(m.a,{block:!1,title:I.lpApy,children:Object(h.jsx)("span",{className:I.lpApy?"sushi-apy-underline":"",tip:I.lpApy?f["deri-apy"]:"",children:Object(h.jsx)(d.a,{value:I.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})}),I.lpApy&&I.lpApy>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:"+"}),Object(h.jsx)(m.a,{block:!1,children:Object(h.jsx)("span",{className:I.lpApy?"sushi-apy-underline":"",tip:c.label,children:Object(h.jsx)(d.a,{value:I.lpApy,displayType:"text",suffix:"%",decimalScale:2})})})]})]})})]})]}),Object(h.jsx)("div",{className:"bottom-btn",children:v})]}),l!==p.length-1&&Object(h.jsx)("div",{className:"top-line"})]})}t.a=Object(p.b)("wallet","version")(Object(p.c)((function(e){var t=e.wallet,n=e.group,c=void 0===n?{}:n,a=e.lang,r=c.pool,s=c.list,i=O()("pool",{"only-one":1===s.length,full:5===s.length});return Object(h.jsxs)("div",{className:i,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("div",{className:"network",children:r.network&&r.network.toUpperCase()}),Object(h.jsxs)("div",{className:"pool-desc",children:[Object(h.jsxs)("span",{className:"symbol",children:[Object(h.jsxs)("span",{className:"symbol-label",children:[a.symbol,":"]}),Object(h.jsx)("span",{className:"symbol-value",children:r.symbol})]}),Object(h.jsxs)("span",{className:"address",children:[Object(h.jsxs)("span",{className:"address-label",children:[a.address,":"]}),r.airdrop?"--":Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(x[r.chainId]&&x[r.chainId].viewUrl,"/address/").concat(r.address),children:r.formatAdd})]})]})]}),Object(h.jsx)("div",{className:"version",children:a[r.version]})]}),Object(h.jsx)("div",{className:"pool-info",children:s.map((function(e,n){return Object(h.jsx)(v,{card:e,index:n,pool:r,list:s,wallet:t,lang:a},n)}))})]})})))}}]);
//# sourceMappingURL=17.f641d967.chunk.js.map