(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[13],{1137:function(e,t,n){},1138:function(e,t,n){},1209:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(5),s=n(634),l=n(615),r=n.n(l),i=(n(1137),n(1138),n(47)),o=n(726),d=n(716),u=n(18);function j(e){var t=e.optionPools,n=e.v1Pools,c=e.v2Pools,a=e.openPools,s=e.type,l=e.lang;return Object(u.jsxs)("div",{children:[""===s&&Object(u.jsxs)("div",{className:"official-pool",children:[Object(u.jsx)("div",{className:"pools",children:t.map((function(e,t){return Object(u.jsx)(o.a,{group:e,lang:l},t)}))}),Object(u.jsx)("div",{className:"pools",children:c.map((function(e,t){return Object(u.jsx)(o.a,{group:e,lang:l},t)}))}),Object(u.jsx)("div",{className:"pools",children:n.map((function(e,t){return Object(u.jsx)(o.a,{group:e,lang:l},t)}))})]}),"options"===s&&Object(u.jsx)("div",{className:"official-pool",children:Object(u.jsx)("div",{className:"pools",children:t.map((function(e,t){return Object(u.jsx)(o.a,{group:e,lang:l},t)}))})}),"futures"===s&&Object(u.jsxs)("div",{className:"official-pool",children:[Object(u.jsx)("div",{className:"pools",children:c.map((function(e,t){return Object(u.jsx)(o.a,{group:e,lang:l},t)}))}),Object(u.jsx)("div",{className:"pools",children:n.map((function(e,t){return Object(u.jsx)(o.a,{group:e,lang:l},t)}))})]}),"opens"===s&&Object(u.jsxs)("div",{className:"pools open-pool",children:[a.map((function(e,t){return Object(u.jsx)(o.a,{group:e,lang:l},t)})),Object(u.jsx)(d.a,{lang:l})]})]})}var b=n(0),p=n.n(b),m=n(1),f=n(93),O=n(616),x=n(14),h=n(25),v=n(110),y=n(26),g=n(619),N=f[x.a.get()].chainInfo;function k(e){var t=e.group,n=e.lang,c=e.index,a=e.wallet,s=t.pool,l=t.list;return Object(u.jsxs)("div",{className:"pool-list",children:[Object(u.jsxs)("div",{className:"pool-list-header",children:[Object(u.jsxs)("div",{className:"list-header-left",children:[Object(u.jsx)("div",{className:"l-h-network",children:s.network&&s.network.toUpperCase()}),Object(u.jsxs)("div",{className:"l-h-y-ad",children:[Object(u.jsxs)("span",{className:"symbol",children:[Object(u.jsxs)("span",{className:"symbol-label",children:[n.symbol," : "]}),Object(u.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(u.jsxs)("span",{className:"add",children:[Object(u.jsxs)("span",{className:"add-label",children:[n.address," : "]}),s.airdrop?"--":Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(N[s.chainId]&&N[s.chainId].viewUrl,"/address/").concat(s.address),children:s.formatAdd})]})]})]}),Object(u.jsx)("div",{className:"list-header-right",children:n[s.version]})]}),Object(u.jsx)("div",{className:"pool-list-body",children:l.map((function(e,t){return Object(u.jsx)(w,{index:t,item:e,lang:n,wallet:a,pool:s})}))})]},c)}function w(e){var t=e.index,n=e.item,s=e.lang,l=e.wallet,r=e.pool,i=Object(a.useState)(!1),o=Object(c.a)(i,2),d=o[0],j=o[1],b=Object(a.useState)(""),f=Object(c.a)(b,2),N=f[0],k=f[1],w=(Object(h.useHistory)(),function(){l.connect().then((function(){j(!0)}))}),A=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.L)(l.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(s["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(y.c)(l.detail.chainId,t.chainId)){e.next=9;break}return alert(s["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(x.V)(t.chainId,l.detail.account);case 11:e.sent.success||alert(s["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(n&&n.airdrop)l.isConnected()?k(Object(u.jsx)("a",{href:"#",onClick:A,children:s.claim})):k(Object(u.jsx)("a",{href:"#",onClick:w,children:s["connect-wallet"]}));else{var e="/mining/".concat(r.version||"v1","/").concat(r.chainId,"/").concat(n.type,"/").concat(n.symbol,"/").concat(n.bTokenSymbol,"/").concat(r.address);n.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(n.bTokenId)),n.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(n.symbolId):"".concat(e,"?symbolId=").concat(n.symbolId)),k(Object(u.jsx)(v.b,{to:e,children:s.staking}))}return function(){}}),[l.detail.account,d]),Object(u.jsxs)("div",{className:"list-item",children:[Object(u.jsxs)("span",{className:"col btoken",children:[Object(u.jsx)("span",{className:"logo ".concat(n.bTokenSymbol)}),Object(u.jsx)("span",{className:"base-token",children:n.bTokenSymbol})]}),Object(u.jsxs)("span",{className:"col",children:[Object(u.jsx)("div",{className:"col-label",children:n.airdrop?s.total:s["pool-liq"]}),Object(u.jsx)("div",{className:"col-value",children:Object(u.jsx)(O.a,{value:n.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:n.lpApy?7:0})})]}),Object(u.jsxs)("span",{className:"col",children:[Object(u.jsx)("div",{className:"col-label",children:s.multiplier}),Object(u.jsx)(g.a,{children:Object(u.jsx)("div",{className:"col-value",title:s["multiplier-tip"],children:Object(u.jsx)("span",{className:"underline",children:Object(u.jsx)(O.a,{value:n.multiplier,suffix:"x"})})})})]}),Object(u.jsxs)("span",{className:"col",children:[Object(u.jsx)("div",{className:"col-label",children:s.apy}),Object(u.jsx)("div",{className:"col-value",children:Object(u.jsxs)("span",{children:[Object(u.jsx)(g.a,{block:!1,children:Object(u.jsx)("span",{className:n.lpApy?"sushi-apy-underline":"",title:n.lpApy&&s["deri-apy"],children:n.apy?Object(u.jsx)(O.a,{value:n.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"})}),n.lpApy&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:" + "}),Object(u.jsx)(g.a,{block:!1,children:Object(u.jsxs)("span",{className:n.lpApy?"sushi-apy-underline":"",title:n.lpApy&&n.label,children:[" ",Object(u.jsx)(O.a,{value:n.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})})]})]})})]}),Object(u.jsxs)("span",{className:"col",children:[Object(u.jsx)("div",{className:"col-label",children:s["claimed-deri"]}),Object(u.jsx)("div",{className:"col-value",children:Object(u.jsx)(O.a,{value:n.claimed,decimalScale:2})})]}),Object(u.jsxs)("span",{className:"col",children:[Object(u.jsx)("div",{className:"col-label",children:s["unclaimed-deri"]}),Object(u.jsx)("div",{className:"col-value",children:Object(u.jsx)(O.a,{value:n.unclaimed,decimalScale:2})})]}),Object(u.jsxs)("span",{className:"col",children:[Object(u.jsx)("div",{className:"col-label",children:s["mining-pnl"]}),Object(u.jsx)("div",{className:"col-value",children:Object(u.jsx)(O.a,{value:n.pnl,decimalScale:2})})]}),Object(u.jsx)("span",{className:"col",children:Object(u.jsxs)("div",{className:"staking",children:[N," >"]})})]},t)}function A(e){var t=e.optionPools,n=e.v1Pools,c=e.v2Pools,a=e.openPools,s=e.type,l=e.lang,r=e.wallet;return Object(u.jsxs)("div",{children:[""===s&&Object(u.jsxs)(u.Fragment,{children:[t.map((function(e,t){return Object(u.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)})),c.map((function(e,t){return Object(u.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)})),n.map((function(e,t){return Object(u.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)}))]}),"futures"===s&&Object(u.jsxs)(u.Fragment,{children:[c.map((function(e,t){return Object(u.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)})),n.map((function(e,t){return Object(u.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)}))]}),"options"===s&&Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)}))}),"opens"===s&&Object(u.jsx)(u.Fragment,{children:a.map((function(e,t){return Object(u.jsx)(k,{group:e,lang:l,index:t,wallet:r},t)}))})]})}t.default=Object(i.b)("version","loading","wallet")(Object(i.c)((function(e){var t=e.lang,n=e.loading,l=e.wallet,i=Object(s.a)(!0,l),o=Object(c.a)(i,8),d=o[0],b=(o[1],o[2]),p=o[3],m=o[4],f=(o[5],o[6],o[7]),O=Object(a.useState)(""),x=Object(c.a)(O,2),h=x[0],v=x[1],y=Object(a.useState)("card"),g=Object(c.a)(y,2),N=g[0],k=(g[1],Object(a.useState)(!1)),w=Object(c.a)(k,2),I=w[0],S=(w[1],r()("filter-area",h)),T=(r()("style-select",N),r()("switch-btn",{checked:I}),function(e){v(e===h?"":e)});return Object(a.useEffect)((function(){return d?n.loaded():n.loading(),console.log(l.isConnected()),function(){}}),[d,l]),Object(u.jsxs)("div",{className:"mining-info",children:[Object(u.jsx)("div",{className:"checkout-pools",children:Object(u.jsxs)("div",{className:S,children:[Object(u.jsx)("div",{className:"futures",onClick:function(){return T("futures")},children:t.futures}),Object(u.jsx)("div",{className:"options",onClick:function(){return T("options")},children:t.options}),Object(u.jsx)("div",{className:"separator-line"}),Object(u.jsx)("div",{className:"opens",onClick:function(){return T("opens")},children:t["open-zone"]})]})}),"list"===N?Object(u.jsx)(A,{type:h,optionPools:m,v1Pools:b,v2Pools:p,openPools:f,lang:t,wallet:l}):Object(u.jsx)(j,{type:h,optionPools:m,v1Pools:b,v2Pools:p,openPools:f,lang:t})]})})))},614:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0),a=n.n(c),s=n(1),l=n(10),r=n(5),i=n(18);function o(e){var t=e.btnText,n=e.className,c=e.disabled,o=e.click,d=e.afterClick,u=e.checkApprove,j=e.wallet,b=e.spec,p=e.lang,m=Object(r.useState)(c?"disabled":"enabled"),f=Object(l.a)(m,2),O=f[0],x=f[1],h=Object(r.useState)(!0),v=Object(l.a)(h,2),y=v[0],g=v[1],N=Object(r.useState)(!1),k=Object(l.a)(N,2),w=k[0],A=k[1],I=Object(r.useState)(t),S=Object(l.a)(I,2),T=S[0],F=S[1],C=Object(r.useRef)(null),B=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,o();case 5:e.sent&&d&&d(),P();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){x("disabled"),A(!0),C.current&&(C.current.style.display="inline-block")},P=function(){C.current&&(C.current.style.display="none"),x("enabled"),A(!1)},J=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,j.approve(b.pool,b.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(p["approve-failed"])),P();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return J(),function(){}}),[j,b,u]),Object(r.useEffect)((function(){return t&&F(t),function(){}}),[t]),Object(i.jsxs)("button",{className:n,onClick:function(){y?B():L()},children:[Object(i.jsx)("span",{className:"btn-loading-wrap",children:Object(i.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?p.pending:y?T:p.approve]})}},616:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(5),a=n(618),s=n(18);function l(e){const[t,n]=Object(c.useState)("--");return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&n(Object(s.jsx)(a.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},619:function(e,t,n){"use strict";var c=n(5),a=n(18);t.a=function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[title]").forEach((function(t){var n=t.addEventListener("mouseover",(function(e){var t="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(t)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n);var c=e.currentTarget,a=c.getAttribute("title");n.innerText=a||c.getAttribute("origin-title"),a&&(c.setAttribute("origin-title",a),c.setAttribute("title","")),n.id=t,n.style.display="block";var s=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(s.y+s.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var l=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(l,"px")}else n.style.left="".concat(e.pageX,"px")}));e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},634:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(0),a=n.n(c),s=n(1),l=n(10),r=n(5),i=n(14),o=n(93),d=n(26),u=n(16),j=(n(628),i.a.get()),b=o[j].chainInfo;function p(e,t){var n=Object(r.useState)(!1),c=Object(l.a)(n,2),o=c[0],p=c[1],m=Object(r.useState)([]),f=Object(l.a)(m,2),O=f[0],x=f[1],h=Object(r.useState)([]),v=Object(l.a)(h,2),y=v[0],g=v[1],N=Object(r.useState)([]),k=Object(l.a)(N,2),w=k[0],A=k[1],I=Object(r.useState)([]),S=Object(l.a)(I,2),T=S[0],F=S[1],C=Object(r.useState)([]),B=Object(l.a)(C,2),E=B[0],P=B[1],J=Object(r.useState)([]),L=Object(l.a)(J,2),W=L[0],q=L[1],Y=Object(r.useState)([]),K=Object(l.a)(Y,2),H=K[0],M=K[1];return Object(r.useEffect)((function(){return function(){var n=Object(s.a)(a.a.mark((function n(){var c,l,r,o,m,f,O,h,v,y,N,k,w;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(){var e=Object(s.a)(a.a.mark((function e(n){var c,s,l,r,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.D)(n.chainId,n.pool,n.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return c=e.t0,e.next=8,Object(i.C)(n.chainId,n.pool,n.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(s=e.t1,l=n.pool||"",r={network:b[n.chainId]&&b[n.chainId].name,liquidity:c.liquidity,apy:(100*+s.apy).toFixed(2),formatAdd:Object(d.e)(l),address:l,type:"perpetual",buttonText:"STAKING",multiplier:s.multiplier},!t||!t.isConnected()){e.next=23;break}return e.next=17,Object(i.u)(n.chainId,n.pool,t.detail.account,n.bTokenId).catch((function(e){return console.log(e)}));case 17:return o=e.sent,e.next=20,Object(i.K)(t.detail.account);case 20:u=e.sent,o&&(r.pnl=o.pnl),u&&(r.claimed=u.total,r.unclaimed=u.amount);case 23:return e.abrupt("return",Object.assign(n,r));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=[];return e.reduce((function(e,t){var n=e.find((function(e){return Object(d.c)(e.pool.address,t.address)}));if(n&&n.list.length<5)n.list.push(t);else{var c={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(c)}return e}),t),t},r=Object(i.n)(j,"v2"),o=Object(i.n)(j,"v1"),m=Object(i.n)(j,"v2_lite"),f=Object(i.n)(j,"option"),O=Object(i.H)(j),h=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Y.update();case 2:return e.abrupt("return",Object(i.n)(j,"v2_lite_open"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.next=10,h();case 10:v=n.sent,y=[],N=(N=r.concat(o).concat(O).concat(m).concat(f).concat(v).reduce((function(e,t){var n=e.findIndex((function(e){return e.chainId===t.chainId&&e.pool===t.pool&&t.version===e.version}));return("v2"===t.version||"v2_lite"===t.version||"option"===t.version||"v2_lite_open"===t.version)&&n>-1?-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):-1===e.findIndex((function(e){return e.bTokenSymbol===t.bTokenSymbol}))&&e.push(t):e.push(t),e}),y)).map(c),k=Object(i.w)(j).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s,l,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.D)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(i.C)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(c=e.t1,s=t.pool||"",!Object(d.m)(t.pool)){e.next=18;break}return e.next=16,Object(i.y)(t.chainId,t.pool);case 16:o=e.sent,l=o&&(100*+o.apy2).toFixed(2);case 18:return Object(d.n)(t.pool)&&(r=u.a.get("mining","sushi-apy")),Object(d.l)(t.pool)&&(r=u.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),formatAdd:Object(d.e)(s),lpApy:l,address:s,type:"lp",label:r,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=N.concat(k),Promise.all(w).then((function(t){t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"6048",symbol:"--",airdrop:!0,chainId:56,buttonText:"CLAIM"});var n=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),a=t.filter((function(e){return"option"===e.version&&!e.retired})),s=t.filter((function(e){return e.retired&&!e.premining})),r=t.filter((function(e){return e.retired&&e.premining})),i=t.filter((function(e){return e.isOpen}));e&&(n=l(n),c=l(c),a=l(a),i=l(i)),A(c),g(n),F(a),x(t),P(s),q(r),M(i),p(!0)}));case 17:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){return O.length=0}}),[]),[o,O,y,w,T,E,W,H]}},679:function(e,t){},716:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(717);var c=n(110),a=n(111),s=n(18);function l({lang:e}){return Object(s.jsxs)("div",{className:"pool-placehold",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("div",{className:"title",children:e["add-pool"]})}),Object(s.jsxs)("div",{className:"pool-body",children:[Object(s.jsx)("div",{className:"info",children:Object(s.jsx)("div",{children:e["add-pool-text"]})}),Object(s.jsxs)("div",{className:"btn-c",children:[a.isMobile&&Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{onClick:()=>{alert(e["please-operat"])},children:e.add})}),a.isBrowser&&Object(s.jsx)(c.b,{to:"/addpool",children:Object(s.jsx)("button",{children:e.add})})]})]})]})}},717:function(e,t,n){},726:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(1),l=n(10),r=n(5),i=n(25),o=n(93),d=n(14),u=n(616),j=n(47),b=n(614),p=n(26),m=n(615),f=n.n(m),O=n(619),x=(n(628),n.p,n(18)),h=o[d.a.get()].chainInfo;function v(e){var t=e.wallet,n=e.pool,c=e.card,o=e.index,j=e.list,m=e.lang,f=Object(r.useState)(""),h=Object(l.a)(f,2),v=h[0],y=h[1],g=Object(r.useState)(!1),N=Object(l.a)(g,2),k=N[0],w=N[1],A=Object(i.useHistory)(),I=function(){t.connect().then((function(){w(!0)}))},S=function(){var e=Object(s.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.L)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(m["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(p.c)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(m["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(d.V)(n.chainId,t.detail.account);case 11:e.sent.success||alert(m["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?y(Object(x.jsx)(b.a,{btnText:m.claim,click:S,lang:m})):y(Object(x.jsx)(b.a,{btnText:m["connect-wallet"],click:I,lang:m}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(n.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),y(Object(x.jsx)("button",{onClick:function(){return function(e){A.push(e)}(e)},children:m.staking}))}return function(){}}),[t.detail.account,k]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"info",children:[Object(x.jsxs)("div",{className:"top-info",children:[Object(x.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==n.version&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{className:"logo ".concat(c.bTokenSymbol)})}),"v2_lite_open"===n.version&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{className:"bg-logo",children:Object(x.jsx)("img",{onError:function(e){e.target.src="data:image/png;base64,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"},src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(c.bTokenSymbol,".png")})})}),Object(x.jsx)("span",{className:"base-token",children:c.bTokenSymbol})]}),Object(x.jsxs)("div",{className:"pool-detail",children:[Object(x.jsxs)("div",{className:"liq",children:[Object(x.jsx)("span",{className:"title",children:c.airdrop?m.total:m["pool-liq"]}),Object(x.jsx)(u.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:c.lpApy?7:0})]}),Object(x.jsx)("div",{className:"multiplier",children:c.multiplier&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:m.multiplier}),Object(x.jsx)(O.a,{block:!1,children:Object(x.jsxs)("span",{className:"multiplier-value",title:m["multiplier-tip"],children:[c.multiplier,"x"]})})]})}),Object(x.jsx)("div",{className:"apy",children:!c.isOpen&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:m.apy}),Object(x.jsxs)(O.a,{block:!1,children:[Object(x.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&m["deri-apy"],children:c.apy?Object(x.jsx)(u.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&c.lpApy>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:" + "}),Object(x.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(x.jsx)(u.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]})})]})]}),Object(x.jsx)("div",{className:"bottom-btn",children:v})]}),o!==j.length-1&&Object(x.jsx)("div",{className:"top-line"})]})}t.a=Object(j.b)("wallet","version")(Object(j.c)((function(e){var t=e.wallet,n=e.group,c=void 0===n?{}:n,a=e.lang,s=c.pool,l=c.list,r=f()("pool",{"only-one":1===l.length,full:5===l.length});return Object(x.jsxs)("div",{className:r,children:[Object(x.jsxs)("div",{className:"pool-header",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"network",children:s.network&&s.network.toUpperCase()}),Object(x.jsxs)("div",{className:"pool-desc",children:[Object(x.jsxs)("span",{className:"symbol",children:[Object(x.jsxs)("span",{className:"symbol-label",children:[a.symbol,":"]}),Object(x.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(x.jsxs)("span",{className:"address",children:[Object(x.jsxs)("span",{className:"address-label",children:[a.address,":"]}),s.airdrop?"--":Object(x.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(h[s.chainId]&&h[s.chainId].viewUrl,"/address/").concat(s.address),children:s.formatAdd})]})]})]}),Object(x.jsx)("div",{className:"version",children:a[s.version]})]}),Object(x.jsx)("div",{className:"pool-info",children:l.map((function(e,n){return Object(x.jsx)(v,{card:e,index:n,pool:s,list:l,wallet:t,lang:a},n)}))})]})})))}}]);
//# sourceMappingURL=13.de047723.chunk.js.map