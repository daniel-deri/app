(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[12],{611:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),s=n(1),r=n(17),i=n(4),o=n(18);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,u=e.afterClick,d=e.checkApprove,b=e.wallet,p=e.spec,j=e.lang,f=Object(i.useState)(c?"disabled":"enabled"),O=Object(r.a)(f,2),m=O[0],x=O[1],h=Object(i.useState)(!0),v=Object(r.a)(h,2),y=v[0],g=v[1],k=Object(i.useState)(!1),N=Object(r.a)(k,2),w=N[0],I=N[1],A=Object(i.useState)(t),T=Object(r.a)(A,2),S=T[0],C=T[1],E=Object(i.useRef)(null),q=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return z(),e.next=5,l();case 5:e.sent&&u&&u(),_();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){x("disabled"),I(!0),E.current&&(E.current.style.display="inline-block")},_=function(){E.current&&(E.current.style.display="none"),x("enabled"),I(!1)},F=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(),e.next=3,b.approve(p.pool,p.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(j["approve-failed"])),_();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return F(),function(){}}),[b,p,d]),Object(i.useEffect)((function(){return t&&C(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){y?q():X()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:E,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?j.pending:y?S:j.approve]})}},612:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(4),a=n(613),s=n(18);function r(e){const[t,n]=Object(c.useState)("--");return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&n(Object(s.jsx)(a.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},615:function(e,t,n){"use strict";var c=n(4),a=n(18);t.a=function(e){const t=Object(c.useRef)(null);return Object(c.useEffect)((()=>{const e=t.current;if(e){e.querySelectorAll("[title]").forEach((t=>{const n=`hover-box-${(new Date).getTime()}`;let c=document.body.querySelector(`#${n}`);t.addEventListener("mouseover",(e=>{c||(c=document.createElement("div"),c.style.cssText=`z-index : 1;min-width : 100px;max-width : ${window.screen.width}px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;`,document.body.appendChild(c),c.innerText=e.currentTarget.getAttribute("title"),e.currentTarget.setAttribute("title","")),c.id=n,c.style.display="block";const t=e.currentTarget.getBoundingClientRect();if(c.style.top=`${t.y+t.height+window.document.documentElement.scrollTop}px`,c.offsetWidth+e.pageX>window.screen.width)if(e.pageX-c.offsetWidth>=0)c.style.left=e.pageX-c.offsetWidth+"px";else{const t=e.pageX-c.offsetWidth/2>0?e.pageX-c.offsetWidth/2:0;c.style.left=`${t}px`}else c.style.left=`${e.pageX}px`})),e.addEventListener("mouseout",(e=>{c&&(c.style.display="none")}))}))}return()=>{t.current=null}}),[]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),s=n(1),r=n(17),i=n(4),o=n(15),l=n(93),u=n(33),d=n(14),b=o.a.get(),p=l[b].chainInfo;function j(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1],j=Object(i.useState)([]),f=Object(r.a)(j,2),O=f[0],m=f[1],x=Object(i.useState)([]),h=Object(r.a)(x,2),v=h[0],y=h[1],g=Object(i.useState)([]),k=Object(r.a)(g,2),N=k[0],w=k[1],I=Object(i.useState)([]),A=Object(r.a)(I,2),T=A[0],S=A[1],C=Object(i.useState)([]),E=Object(r.a)(C,2),q=E[0],z=E[1],_=Object(i.useState)([]),F=Object(r.a)(_,2),X=F[0],$=F[1],W=Object(i.useState)([]),R=Object(r.a)(W,2),B=R[0],D=R[1];return Object(i.useEffect)((function(){var t=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.A)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.z)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,s=t.pool||"",e.abrupt("return",Object.assign(t,{network:p[t.chainId]&&p[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),formatAdd:Object(u.e)(s),address:s,type:"perpetual",buttonText:"STAKING",multiplier:c.multiplier}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e){var t=[];return e.reduce((function(e,t){var n=e.find((function(e){return Object(u.d)(e.pool.address,t.address)}));if(n&&n.list.length<5)n.list.push(t);else{var c={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(c)}return e}),t),t},c=Object(o.l)(b,"v2"),r=Object(o.l)(b,"v1"),i=Object(o.l)(b,"v2_lite"),j=Object(o.l)(b,"option"),f=Object(o.D)(b),x=Object(o.l)(b,"v2_lite_open"),h=c.concat(r).concat(f).concat(i).concat(j).concat(x).reduce((function(e,t){var n=e.findIndex((function(e){return e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version}));return("v2"===t.version||"v2_lite"===t.version||"option"===t.version||"v2_lite_open"===t.version)&&n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):e.push(t),e}),[]);h=h.map(t);var v=Object(o.u)(b).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s,r,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.A)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.z)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(c=e.t1,s=t.pool||"",!Object(u.m)(t.pool)){e.next=18;break}return e.next=16,Object(o.w)(t.chainId,t.pool);case 16:l=e.sent,r=l&&(100*+l.apy2).toFixed(2);case 18:return Object(u.n)(t.pool)&&(i=d.a.get("mining","sushi-apy")),Object(u.l)(t.pool)&&(i=d.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:p[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),formatAdd:Object(u.e)(s),lpApy:r,address:s,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=h.concat(v);return Promise.all(g).then((function(t){var c=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),a=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),s=t.filter((function(e){return"option"===e.version&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),i=t.filter((function(e){return e.retired&&e.premining})),o=t.filter((function(e){return e.isOpen}));e&&(c=n(c),a=n(a),s=n(s),o=n(o)),w(a),y(c),S(s),m(t),z(r),$(i),D(o),l(!0)})),function(){return O.length=0}}),[]),[c,O,v,N,T,q,X,B]}},637:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(1),r=n(17),i=n(4),o=n(22),l=n(93),u=n(15),d=n(612),b=n(46),p=n(611),j=n(33),f=n(610),O=n.n(f),m=n(615),x=n(18),h=l[u.a.get()].chainInfo;function v(e){var t=e.wallet,n=e.pool,c=e.card,l=e.index,b=e.list,f=e.lang,O=Object(i.useState)(""),h=Object(r.a)(O,2),v=h[0],y=h[1],g=Object(i.useState)(!1),k=Object(r.a)(g,2),N=k[0],w=k[1],I=Object(o.useHistory)(),A=function(){t.connect().then((function(){w(!0)}))},T=function(){var e=Object(s.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.H)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(f["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.d)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(f["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.Q)(n.chainId,t.detail.account);case 11:e.sent.success||alert(f["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?y(Object(x.jsx)(p.a,{btnText:f.claim,click:T,lang:f})):y(Object(x.jsx)(p.a,{btnText:f["connect-wallet"],click:A,lang:f}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(n.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),y(Object(x.jsx)("button",{onClick:function(){return function(e){I.push(e)}(e)},children:f.staking}))}return function(){}}),[t.detail.account,N]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"info",children:[Object(x.jsxs)("div",{className:"top-info",children:[Object(x.jsxs)("div",{className:"pool-top",children:[Object(x.jsx)("span",{className:"logo ".concat(c.bTokenSymbol)}),Object(x.jsx)("span",{className:"base-token",children:c.bTokenSymbol})]}),Object(x.jsxs)("div",{className:"pool-detail",children:[Object(x.jsxs)("div",{className:"liq",children:[Object(x.jsx)("span",{className:"title",children:c.airdrop?f.total:f["pool-liq"]}),Object(x.jsx)(d.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:c.lpApy?7:0})]}),Object(x.jsx)("div",{className:"multiplier",children:c.multiplier&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:f.multiplier}),Object(x.jsx)(m.a,{block:!1,children:Object(x.jsxs)("span",{className:"multiplier-value",title:f["multiplier-tip"],children:[c.multiplier,"x"]})})]})}),Object(x.jsx)("div",{className:"apy",children:!c.isOpen&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:f.apy}),Object(x.jsxs)(m.a,{block:!1,children:[Object(x.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&f["deri-apy"],children:c.apy?Object(x.jsx)(d.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&c.lpApy>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:" + "}),Object(x.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(x.jsx)(d.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]})})]})]}),Object(x.jsx)("div",{className:"bottom-btn",children:v})]}),l!==b.length-1&&Object(x.jsx)("div",{className:"top-line"})]})}t.a=Object(b.b)("wallet","version")(Object(b.c)((function(e){var t=e.wallet,n=e.group,c=void 0===n?{}:n,a=e.lang,s=c.pool,r=c.list,i=O()("pool",{"only-one":1===r.length,full:5===r.length});return Object(x.jsxs)("div",{className:i,children:[Object(x.jsxs)("div",{className:"pool-header",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"network",children:s.network&&s.network.toUpperCase()}),Object(x.jsxs)("div",{className:"pool-desc",children:[Object(x.jsxs)("span",{className:"symbol",children:[Object(x.jsxs)("span",{className:"symbol-label",children:[a.symbol,":"]}),Object(x.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(x.jsxs)("span",{className:"address",children:[Object(x.jsxs)("span",{className:"address-label",children:[a.address,":"]}),s.airdrop?"--":Object(x.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(h[s.chainId]&&h[s.chainId].viewUrl,"/address/").concat(s.address),children:s.formatAdd})]})]})]}),Object(x.jsx)("div",{className:"version",children:a[s.version]})]}),Object(x.jsx)("div",{className:"pool-info",children:r.map((function(e,n){return Object(x.jsx)(v,{card:e,index:n,pool:s,list:r,wallet:t,lang:a},n)}))})]})})))},638:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(639);var c=n(18);function a(e){var t=e.lang;return Object(c.jsxs)("div",{className:"pool-placehold",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("div",{className:"title",children:t["add-pool"]})}),Object(c.jsxs)("div",{className:"pool-body",children:[Object(c.jsx)("div",{className:"info",children:Object(c.jsx)("div",{children:t["add-pool-text"]})}),Object(c.jsx)("div",{className:"btn-c",children:Object(c.jsx)("button",{onClick:function(){return alert(t["coming-soon"])},children:t.add})})]})]})}},639:function(e,t,n){},740:function(e,t,n){},741:function(e,t,n){},773:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(4),s=(n(740),n(741),n(610)),r=n.n(s),i=n(637),o=n(618),l=n(46),u=n(638),d=n(18);t.default=Object(l.b)("version","loading")(Object(l.c)((function(e){var t=e.lang,n=e.loading,s=Object(o.a)(!0),l=Object(c.a)(s,8),b=l[0],p=(l[1],l[2]),j=l[3],f=l[4],O=(l[5],l[6],l[7]),m=Object(a.useState)("all"),x=Object(c.a)(m,2),h=x[0],v=x[1],y=r()("filter-area",h),g=function(e){v(e===h?"all":e)};return Object(a.useEffect)((function(){return b?n.loaded():n.loading(),function(){}}),[b]),Object(d.jsxs)("div",{className:"mining-info",children:[Object(d.jsxs)("div",{className:y,children:[Object(d.jsx)("span",{className:"future-zone",onClick:function(){return g("future")},children:t.futures}),Object(d.jsx)("span",{className:"option-zone",onClick:function(){return g("option")},children:t.options}),Object(d.jsx)("span",{className:"separator-line"}),Object(d.jsx)("span",{className:"open-zone",onClick:function(){return g("open")},children:t["open-zone"]})]}),"all"===h&&Object(d.jsxs)("div",{className:"pools",children:[Object(d.jsx)("div",{className:"pools",children:f.map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)}))}),j.concat(p).map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)}))]}),"future"===h&&Object(d.jsx)("div",{className:"pools",children:j.concat(p).map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)}))}),"option"===h&&Object(d.jsx)("div",{className:"pools",children:Object(d.jsx)("div",{className:"pools",children:f.map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)}))})}),"open"===h&&Object(d.jsxs)("div",{className:"pools open-pool",children:[O.map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)})),Object(d.jsx)(u.a,{lang:t})]})]})})))}}]);
//# sourceMappingURL=12.eded5d7f.chunk.js.map