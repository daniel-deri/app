(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[16],{1125:function(e,t,n){},1126:function(e,t,n){},1206:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(1),l=n(9),r=n(8),i=n(643),o=n(614),d=n.n(o),u=(n(1125),n(1126),n(47)),j=n(738),b=n(722),p=n(18);function O(e){var t=e.optionPools,n=e.v1Pools,c=e.v2Pools,a=e.openPools,s=e.type,l=e.lang;return Object(p.jsxs)("div",{children:[""===s&&Object(p.jsxs)("div",{className:"official-pool",children:[Object(p.jsx)("div",{className:"pools",children:t.map((function(e,t){return Object(p.jsx)(j.a,{group:e,lang:l},t)}))}),Object(p.jsx)("div",{className:"pools",children:c.map((function(e,t){return Object(p.jsx)(j.a,{group:e,lang:l},t)}))}),Object(p.jsx)("div",{className:"pools",children:n.map((function(e,t){return Object(p.jsx)(j.a,{group:e,lang:l},t)}))})]}),"options"===s&&Object(p.jsx)("div",{className:"official-pool",children:Object(p.jsx)("div",{className:"pools",children:t.map((function(e,t){return Object(p.jsx)(j.a,{group:e,lang:l},t)}))})}),"futures"===s&&Object(p.jsxs)("div",{className:"official-pool",children:[Object(p.jsx)("div",{className:"pools",children:c.map((function(e,t){return Object(p.jsx)(j.a,{group:e,lang:l},t)}))}),Object(p.jsx)("div",{className:"pools",children:n.map((function(e,t){return Object(p.jsx)(j.a,{group:e,lang:l},t)}))})]}),"opens"===s&&Object(p.jsxs)("div",{className:"pools open-pool",children:[a.map((function(e,t){return Object(p.jsx)(j.a,{group:e,lang:l},t)})),a.length>0&&Object(p.jsx)(b.a,{lang:l})]})]})}var f=n(66),m=n(616),x=n(13),h=n(26),v=n(116),g=n(27),y=n(619),N=f[x.a.get()].chainInfo;function k(e){var t=e.group,n=e.lang,c=e.index,a=e.wallet,s=t.pool,l=t.list;return Object(p.jsxs)("div",{className:"pool-list",children:[Object(p.jsxs)("div",{className:"pool-list-header",children:[Object(p.jsxs)("div",{className:"list-header-left",children:[Object(p.jsx)("div",{className:"l-h-network",children:s.network&&s.network.toUpperCase()}),Object(p.jsxs)("div",{className:"l-h-y-ad",children:[Object(p.jsxs)("span",{className:"symbol",children:[Object(p.jsxs)("span",{className:"symbol-label",children:[n.symbol," : "]}),Object(p.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(p.jsxs)("span",{className:"add",children:[Object(p.jsxs)("span",{className:"add-label",children:[n.address," : "]}),s.airdrop?"--":Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(N[s.chainId]&&N[s.chainId].viewUrl,"/address/").concat(s.address),children:s.formatAdd})]})]})]}),Object(p.jsx)("div",{className:"list-header-right",children:n[s.version]})]}),Object(p.jsx)("div",{className:"pool-list-body",children:l.map((function(e,t){return Object(p.jsx)(w,{index:t,item:e,lang:n,wallet:a,pool:s})}))})]},c)}function w(e){var t=e.index,n=e.item,c=e.lang,i=e.wallet,o=e.pool,d=Object(r.useState)(!1),u=Object(l.a)(d,2),j=u[0],b=u[1],O=Object(r.useState)(""),f=Object(l.a)(O,2),N=f[0],k=f[1],w=(Object(h.useHistory)(),function(){i.connect().then((function(){b(!0)}))}),A=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.O)(i.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(c["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(g.e)(i.detail.chainId,t.chainId)){e.next=9;break}return alert(c["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(x.cb)(t.chainId,i.detail.account);case 11:e.sent.success||alert(c["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(n&&n.airdrop)i.isConnected()?k(Object(p.jsx)("a",{href:"#",onClick:A,children:c.claim})):k(Object(p.jsx)("a",{href:"#",onClick:w,children:c["connect-wallet"]}));else{var e="/mining/".concat(o.version||"v1","/").concat(o.chainId,"/").concat(n.type,"/").concat(n.symbol,"/").concat(n.bTokenSymbol,"/").concat(o.address);n.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(n.bTokenId)),n.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(n.symbolId):"".concat(e,"?symbolId=").concat(n.symbolId)),k(Object(p.jsx)(v.b,{to:e,children:c.staking}))}return function(){}}),[i.detail.account,j]),Object(p.jsxs)("div",{className:"list-item",children:[Object(p.jsxs)("span",{className:"col btoken",children:[Object(p.jsx)("span",{className:"logo ".concat(n.bTokenSymbol)}),Object(p.jsx)("span",{className:"base-token",children:n.bTokenSymbol})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:n.airdrop?c.total:c["pool-liq"]}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsx)(m.a,{value:n.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:n.lpApy?7:0})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:c.multiplier}),Object(p.jsx)(y.a,{children:Object(p.jsx)("div",{className:"col-value",tip:c["multiplier-tip"],children:Object(p.jsx)("span",{className:"underline",children:Object(p.jsx)(m.a,{value:n.multiplier,suffix:"x"})})})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:c.apy}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsxs)("span",{children:[Object(p.jsx)(y.a,{block:!1,children:Object(p.jsx)("span",{className:n.lpApy?"sushi-apy-underline":"",tip:n.lpApy&&c["deri-apy"],children:n.apy?Object(p.jsx)(m.a,{value:n.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"})}),n.lpApy&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:" + "}),Object(p.jsx)(y.a,{block:!1,children:Object(p.jsxs)("span",{className:n.lpApy?"sushi-apy-underline":"",tip:n.lpApy&&n.label,children:[" ",Object(p.jsx)(m.a,{value:n.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})})]})]})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:c["claimed-deri"]}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsx)(m.a,{value:n.claimed,decimalScale:2})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:c["unclaimed-deri"]}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsx)(m.a,{value:n.unclaimed,decimalScale:2})})]}),Object(p.jsxs)("span",{className:"col",children:[Object(p.jsx)("div",{className:"col-label",children:c["mining-pnl"]}),Object(p.jsx)("div",{className:"col-value",children:Object(p.jsx)(m.a,{value:n.pnl,decimalScale:2})})]}),Object(p.jsx)("span",{className:"col",children:Object(p.jsxs)("div",{className:"staking",children:[N," >"]})})]},t)}function A(e){var t=e.optionPools,n=e.v1Pools,c=e.v2Pools,a=e.openPools,s=e.type,l=e.lang,r=e.wallet;return Object(p.jsxs)("div",{children:[""===s&&Object(p.jsxs)(p.Fragment,{children:[t.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)})),c.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)})),n.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)}))]}),"futures"===s&&Object(p.jsxs)(p.Fragment,{children:[c.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)})),n.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)}))]}),"options"===s&&Object(p.jsx)(p.Fragment,{children:t.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)}))}),"opens"===s&&Object(p.jsx)(p.Fragment,{children:a.map((function(e,t){return Object(p.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)}))})]})}var S=x.a.get(),I=f[S].chainInfo;t.default=Object(u.b)("version","loading","wallet")(Object(u.c)((function(e){var t=e.lang,n=e.loading,c=e.wallet,o=Object(i.a)(!0,c),u=Object(l.a)(o,7),j=u[0],b=(u[1],u[2]),f=u[3],m=u[4],h=(u[5],u[6],Object(r.useState)([])),v=Object(l.a)(h,2),y=v[0],N=v[1],k=Object(r.useState)(""),w=Object(l.a)(k,2),T=w[0],F=w[1],C=Object(r.useState)("card"),B=Object(l.a)(C,2),E=B[0],P=(B[1],d()("filter-area",T)),J=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fb.update();case 2:return e.abrupt("return",Object(x.p)(S,"v2_lite_open"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(a.a.mark((function e(t){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(t===T?"":t),"opens"!==t||0!==y.length){e.next=10;break}return n.loading(),e.t0=g.c,e.next=6,J();case 6:e.t1=e.sent,s=(s=(0,e.t0)(e.t1)).map((function(e){return Object(g.r)(e,c,I)})),Promise.all(s).then((function(e){for(var t=0,c=(s=Object(g.l)(e)).length;t<c;t++){for(var a=void 0,l=void 0,r=0,i=s.length;r<i;r++)"--"===s[r].pool.symbol&&(a=r,l=s[r]);s.splice(a,1),s.push(l)}N(s),n.loaded()}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return j?n.loaded():n.loading(),console.log(c.isConnected()),function(){}}),[j,c]),Object(p.jsxs)("div",{className:"pool-list",children:[Object(p.jsx)("div",{className:"checkout-pools",children:Object(p.jsxs)("div",{className:P,children:[Object(p.jsx)("div",{className:"futures",onClick:function(){return W("futures")},children:t.futures}),Object(p.jsx)("div",{className:"options",onClick:function(){return W("options")},children:t.options}),Object(p.jsx)("div",{className:"separator-line"}),Object(p.jsx)("div",{className:"opens",onClick:function(){return W("opens")},children:t["open-zone"]})]})}),"list"===E?Object(p.jsx)(A,{type:T,optionPools:m,v1Pools:b,v2Pools:f,openPools:y,lang:t,wallet:c}):Object(p.jsx)(O,{type:T,optionPools:m,v1Pools:b,v2Pools:f,openPools:y,lang:t})]})})))},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0),a=n.n(c),s=n(1),l=n(9),r=n(8),i=n(18);function o(e){var t=e.btnText,n=e.className,c=e.disabled,o=e.click,d=e.afterClick,u=e.checkApprove,j=e.wallet,b=e.spec,p=e.lang,O=Object(r.useState)(c?"disabled":"enabled"),f=Object(l.a)(O,2),m=f[0],x=f[1],h=Object(r.useState)(!0),v=Object(l.a)(h,2),g=v[0],y=v[1],N=Object(r.useState)(!1),k=Object(l.a)(N,2),w=k[0],A=k[1],S=Object(r.useState)(t),I=Object(l.a)(S,2),T=I[0],F=I[1],C=Object(r.useRef)(null),B=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,o();case 5:e.sent&&d&&d(),P();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){x("disabled"),A(!0),C.current&&(C.current.style.display="inline-block")},P=function(){C.current&&(C.current.style.display="none"),x("enabled"),A(!1)},J=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,j.approve(b.pool,b.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(p["approve-failed"])),P();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return J(),function(){}}),[j,b,u]),Object(r.useEffect)((function(){return t&&F(t),function(){}}),[t]),Object(i.jsxs)("button",{className:n,onClick:function(){g?B():W()},children:[Object(i.jsx)("span",{className:"btn-loading-wrap",children:Object(i.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?p.pending:g?T:p.approve]})}},616:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(53),a=n(42),s=n(618),l=n(9),r=n(8),i=n(617),o=n(18),d=["allowZero"];function u(e){var t=Object(r.useState)(Object(o.jsx)("span",{className:"loading-line"})),n=Object(l.a)(t,2),u=n[0],j=n[1];return Object(r.useEffect)((function(){var t=e.allowZero,n=Object(s.a)(e,d);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&j(Object(o.jsx)(i.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),u}},619:function(e,t,n){"use strict";var c=n(8),a=n(18);t.a=function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var n=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var c="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(c)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n),n.innerText=t,n.id=c,n.style.display="block";var a=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(a.y+a.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var s=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(s,"px")}else n.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},643:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(0),a=n.n(c),s=n(1),l=n(9),r=n(8),i=n(13),o=n(66),d=n(27),u=n(15),j=(n(630),i.a.get()),b=o[j].chainInfo;function p(e,t,n){var c=Object(r.useState)(!1),o=Object(l.a)(c,2),p=o[0],O=o[1],f=Object(r.useState)([]),m=Object(l.a)(f,2),x=m[0],h=m[1],v=Object(r.useState)([]),g=Object(l.a)(v,2),y=g[0],N=g[1],k=Object(r.useState)([]),w=Object(l.a)(k,2),A=w[0],S=w[1],I=Object(r.useState)([]),T=Object(l.a)(I,2),F=T[0],C=T[1],B=Object(r.useState)([]),E=Object(l.a)(B,2),P=E[0],J=E[1],W=Object(r.useState)([]),q=Object(l.a)(W,2),L=q[0],Y=q[1];return Object(r.useEffect)((function(){var c=function(){var c=Object(s.a)(a.a.mark((function c(){var l,r,o,p,f,m,x,v;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:l=Object(i.p)(j,"v2"),r=Object(i.p)(j,"v2_lite"),o=Object(i.p)(j,"option"),p=l.concat(r).concat(o),n&&(f=Object(i.p)(j,"v1"),m=Object(i.K)(j),p=f.concat(m)),p=(p=Object(d.c)(p)).map((function(e){return Object(d.r)(e,t,b)})),x=Object(i.z)(j).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pool||"",Object(d.p)(t.pool),Object(d.q)(t.pool)&&(c=u.a.get("mining","sushi-apy")),Object(d.o)(t.pool)&&(c=u.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,formatAdd:Object(d.g)(n),address:n,type:"lp",label:c,buttonText:"STAKING"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=p.concat(x),Promise.all(v).then((function(t){(new Date).getTime()<=16330824e5&&t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"3564",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"});var n=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),a=t.filter((function(e){return"option"===e.version&&!e.retired})),s=t.filter((function(e){return e.retired&&!e.premining})),l=t.filter((function(e){return e.retired&&e.premining})),r=t.filter((function(e){return e.isOpen}));e&&(n=Object(d.l)(n),c=Object(d.l)(c),a=Object(d.l)(a),r=Object(d.l)(r)),S(c),N(n),C(a),h(t),J(s),Y(l),O(!0)}));case 10:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return c(),function(){return x.length=0}}),[]),[p,x,y,A,F,P,L]}},683:function(e,t){},722:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(723);var c=n(116),a=n(160),s=n(18);function l(e){var t=e.lang;return Object(s.jsxs)("div",{className:"pool-placehold",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("div",{className:"title",children:t["add-pool"]})}),Object(s.jsxs)("div",{className:"pool-body",children:[Object(s.jsx)("div",{className:"info",children:Object(s.jsx)("div",{children:t["add-pool-text"]})}),Object(s.jsxs)("div",{className:"btn-c",children:[a.isMobile&&Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{onClick:function(){alert(t["please-operate"])},children:t.add})}),a.isBrowser&&Object(s.jsx)(c.b,{to:"/addpool",children:Object(s.jsx)("button",{children:t.add})})]})]})]})}},723:function(e,t,n){},738:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(1),l=n(9),r=n(8),i=n(26),o=n(66),d=n(13),u=n(616),j=n(47),b=n(615),p=n(27),O=n(614),f=n.n(O),m=n(619),x=(n(630),n(18)),h=o[d.a.get()].chainInfo;function v(e){var t=e.wallet,n=e.pool,c=e.card,o=e.index,j=e.list,O=e.lang,f=Object(r.useState)(""),h=Object(l.a)(f,2),v=h[0],g=h[1],y=Object(r.useState)(!1),N=Object(l.a)(y,2),k=N[0],w=N[1],A=Object(r.useState)({}),S=Object(l.a)(A,2),I=S[0],T=S[1],F=Object(i.useHistory)(),C=function(){t.connect().then((function(){w(!0)}))},B=function(){var e=Object(s.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.O)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(O["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(p.e)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(O["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(d.cb)(n.chainId,t.detail.account);case 11:e.sent.success||alert(O["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s,l,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.F)(t.chainId,t.pool,t.bTokenId);case 2:return n=e.sent,e.next=5,Object(d.G)(t.chainId,t.pool,t.bTokenId);case 5:if(c=e.sent,s={liquidity:c.liquidity,apy:(100*+n.apy).toFixed(2),multiplier:n.multiplier},!t.isLp){e.next=13;break}return e.next=10,Object(d.B)(t.chainId,t.pool);case 10:l=e.sent,r=(100*+l.apy2).toFixed(2),s.lpApy=r;case 13:T(s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?g(Object(x.jsx)(b.a,{btnText:O.claim,click:B,lang:O})):g(Object(x.jsx)(b.a,{btnText:O["connect-wallet"],click:C,lang:O}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(n.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),g(Object(x.jsx)("button",{onClick:function(){return function(e){F.push(e)}(e)},children:O.staking}))}n&&n.airdrop?T({liquidity:c.liquidity,airdrop:n.airdrop}):E(c)}),[t.detail.account,k,c]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"info",children:[Object(x.jsxs)("div",{className:"top-info",children:[Object(x.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==n.version&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{className:"logo ".concat(c.bTokenSymbol)})}),"v2_lite_open"===n.version&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{className:"bg-logo",children:Object(x.jsx)("img",{onError:function(e){e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABHNCSVQICAgIfAhkiAAABmVJREFUaEPVmnloXFUUxjvZE/zHhdpJWxDBUEzS7EmtiNTWWmKbumBRaSGiQixaSW1IaFOpImqCNFYJFlSQCFULQdJIKqWLraDNOpNMEjdQBJupWmNBJXvi74T7wstkljcz902nDx5v5r17v3O+e84999zFsUzz5fF4bh0bGytPSEjIA9qp7hXqKdK8c3NzXofDcVl+83QnJSV15OXl/aFTFYcOsN7e3rWzs7PbwNrOvRpSLSg/gtJeUZ7/l1NSUuT3ssnJSSff5F4hT16t4rmL56+UawPnRElJyWC0ekVFrK+vb+PMzMw+CIiC7aJYYWFhTyRKuVyukunp6e1gVXBfgmxjcXHxuUiwpE5ExLBQES3bQP057modLWwmIB4AsSbezfCsBd8VLsGwifX09DQjrBTr1BYVFZ0NV2A45bu7uzdhvQbkfQO5F8Kpa5mYBIWJiYlBBO2C0JfhCIm2LATLwfgQ2bm45xUreJaIAXw/YC24X05ZWdlfVoB1l1EN64Hc41Y8JSQx/H0HrvA0LfWAbmUjwaORT9MNmiH3ebD6QYkpUhWQ2hmJEnbVgdwxsFvpd62BZAQkJu6H2ffFi6V8CRDEzvDutUBDgl9i4s/j4+NuWkTGp7i9IPcn4+gaf/3eL7FgFeKJZTADLCEm4xQu2B7rkB5pgxEHthLcNuOSe8wYi4ipjOIoLlgSqaBrUY944EpMTKwknes35C8ipkLp61bGiWtBIJBMvGwz3/ZitS1LiKmEtg5jyWB83V2QO8f4dgirnRflFyyGtU7yv0Z3QhurFurq6sqHmIT/rQvEVDbdwsv8WClihxyMM0hf24HVhuctxosDRMI0iB3ULRAXeQ/M9USuLJGh8Ef4/x0tfIT+3K5LJrLeAOsqPBoMYl0w3R3pJNGfYvTZPJLmDr5lBlIccuOQ/QhFntNBDs9bh8zDdKf1DruyDFrvUjBSPkTqpJV1kDOSCwed7imstQaXqNUBLBjK/aoMPCxzxnA7Zckq3lWaXPNviN2kQz7d6jA4LgdKvM2PXwA+ogNYEfuW5zqFNwC2rFgtulCgTdY3jJfyW0d/g89eMFcKsc8AbQX0uC5iVnCQ+yblzF6ixR1psCfgs02IXeDHAYh9bUUhHWV8A4sEETp8uibse8n4XxFiP9LHHiwoKPhJB3AoDOQ9Q5lG7htNZY/qioxutztramqqXYj9k56e7szOzv43lFLRfhf3wzovmoKGQGojJWBDQ0M3sBLtjRkxZan3TZFSxrBDusK8gWsmFhNXhJhMKdYqBWT5u0pHFPT1ogVXJIqcp48dJOu4EK2rBauPnDGTCzZgqTo75BGYFoJHTMI9FpPlcOPSEtr9NYw53GsfoO2whFVMGvAlyjodJI6V/MjG32usVo7nclisifSt19Hf37+cPasBBkjZnLPtiqErXsnIyMgypi2d7Co+zyDdbRezWBAjcNxF1vEWRrp7nhjuuJ95TAYv6q9nYioBGIVHo2GxHELxMUKwMc7Yxc9WXIgNI+AReHy/aDFHbeYN2CrdJnBIFQL96qLFHJHFhw086vmw0SbZtsJKooFh6o1ZyqIFU8idkk1tfPS0rVpoBidGbCFG7EFv2fmcv3xXggvoax9gtSLNsm2FU3noTvT2+CWmIuS7mPQkoV9WmOL+wgUr0HcDLlhtVtbvNhKFvWlpafm5ubm/xzMzMvmVTCov4oKrffUMtD92CwWHMe3yeCaGC44yM7kd77pqiZhyyfvokPtpjU3xSA6v+gpSLweaboXaXH+YKPkYlnsynshB6lP0+YRGbwukV8jjEIA8SqTcHS/jm1gKMk3BSC0J94HYq8H7eGpqas61CigSKDhE5iECPmRlth/SYgbZzs7OmwEd5H6W0PpFLF1TQjrympmB5PoLFP50sUzMqIz13qHf3YN71uKep+wkKBkFshqQddZ3nAolN2xiAqhWcmV3JJXIWV1aWuoOJSic75LQqmN9/6kGXMgorOJERMwAlxUhiNWgxG1yhIK7jZa9aFW4uZxMEsGSE6ridj/Lcb5olt2jImYieKccnYWgnBC9g+fHPH+Ts7+MNSP0S29ycvKIlCdTyKSsk5luJmUyKbOK13J09gdu2YE5IfOpSBrHXEcLMTOgCjLlKCj72XL2V3Y0nUJCyslZYR5yyFmesnDqJn3rYIl9NFoy5vr/AzORQD3bVOp7AAAAAElFTkSuQmCC"},src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(c.bTokenSymbol,".png")})})}),Object(x.jsx)("span",{className:"base-token",children:c.bTokenSymbol})]}),Object(x.jsxs)("div",{className:"pool-detail",children:[Object(x.jsxs)("div",{className:"liq",children:[Object(x.jsx)("span",{className:"title",children:c.airdrop?O.total:O["pool-liq"]}),Object(x.jsx)(u.a,{value:I.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:I.lpApy?7:0})]}),Object(x.jsx)("div",{className:"multiplier",children:I.multiplier&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:O.multiplier}),Object(x.jsx)(m.a,{block:!1,children:Object(x.jsxs)("span",{className:"multiplier-value",tip:O["multiplier-tip"],children:[I.multiplier,"x"]})})]})}),Object(x.jsx)("div",{className:"apy ".concat(I.lpApy&&"lp-apy"),children:!c.isOpen&&!c.airdrop&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:O.apy}),Object(x.jsx)(m.a,{block:!1,title:I.lpApy,children:Object(x.jsx)("span",{className:I.lpApy?"sushi-apy-underline":"",tip:I.lpApy?O["deri-apy"]:"",children:Object(x.jsx)(u.a,{value:I.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})}),I.lpApy&&I.lpApy>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:"+"}),Object(x.jsx)(m.a,{block:!1,children:Object(x.jsx)("span",{className:I.lpApy?"sushi-apy-underline":"",tip:c.label,children:Object(x.jsx)(u.a,{value:I.lpApy,displayType:"text",suffix:"%",decimalScale:2})})})]})]})})]})]}),Object(x.jsx)("div",{className:"bottom-btn",children:v})]}),o!==j.length-1&&Object(x.jsx)("div",{className:"top-line"})]})}t.a=Object(j.b)("wallet","version")(Object(j.c)((function(e){var t=e.wallet,n=e.group,c=void 0===n?{}:n,a=e.lang,s=c.pool,l=c.list,r=f()("pool",{"only-one":1===l.length,full:5===l.length});return Object(x.jsxs)("div",{className:r,children:[Object(x.jsxs)("div",{className:"pool-header",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"network",children:s.network&&s.network.toUpperCase()}),Object(x.jsxs)("div",{className:"pool-desc",children:[Object(x.jsxs)("span",{className:"symbol",children:[Object(x.jsxs)("span",{className:"symbol-label",children:[a.symbol,":"]}),Object(x.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(x.jsxs)("span",{className:"address",children:[Object(x.jsxs)("span",{className:"address-label",children:[a.address,":"]}),s.airdrop?"--":Object(x.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(h[s.chainId]&&h[s.chainId].viewUrl,"/address/").concat(s.address),children:s.formatAdd})]})]})]}),Object(x.jsx)("div",{className:"version",children:a[s.version]})]}),Object(x.jsx)("div",{className:"pool-info",children:l.map((function(e,n){return Object(x.jsx)(v,{card:e,index:n,pool:s,list:l,wallet:t,lang:a},n)}))})]})})))}}]);
//# sourceMappingURL=16.eced1504.chunk.js.map