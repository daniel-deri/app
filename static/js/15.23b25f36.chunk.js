(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[15],{649:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),c=n.n(a),r=n(2),s=n(17),i=n(7),l=n(25);function o(e){var t=e.btnText,n=e.className,a=e.disabled,o=e.click,d=e.afterClick,u=e.checkApprove,b=e.wallet,p=e.spec,j=e.lang,f=Object(i.useState)(a?"disabled":"enabled"),O=Object(s.a)(f,2),m=O[0],h=O[1],v=Object(i.useState)(!0),x=Object(s.a)(v,2),y=x[0],g=x[1],k=Object(i.useState)(!1),I=Object(s.a)(k,2),N=I[0],w=I[1],A=Object(i.useState)(t),S=Object(s.a)(A,2),T=S[0],C=S[1],$=Object(i.useRef)(null),E=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return q(),e.next=5,o();case 5:e.sent&&d&&d(),P();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){h("disabled"),w(!0),$.current&&($.current.style.display="inline-block")},P=function(){$.current&&($.current.style.display="none"),h("enabled"),w(!1)},F=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.next=3,b.approve(p.pool,p.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(j["approve-failed"])),P();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return F(),function(){}}),[b,p,u]),Object(i.useEffect)((function(){return t&&C(t),function(){}}),[t]),Object(l.jsxs)("button",{className:n,onClick:function(){y?E():L()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:$,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?j.pending:y?T:j.approve]})}},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(24),c=n(186),r=n(17),s=n(7),i=n(652),l=n(25);function o(e){var t=Object(s.useState)("--"),n=Object(r.a)(t,2),o=n[0],d=n[1];return Object(s.useEffect)((function(){var t=e.allowZero,n=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&d(Object(l.jsx)(i.a,Object(a.a)(Object(a.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),o}},654:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),c=n.n(a),r=n(2),s=n(17),i=n(7),l=n(23),o=n(142),d=n(53),u=(n(35),l.DeriEnv.get()),b=o[u].chainInfo;function p(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],o=n[1],p=Object(i.useState)([]),j=Object(s.a)(p,2),f=j[0],O=j[1],m=Object(i.useState)([]),h=Object(s.a)(m,2),v=h[0],x=h[1],y=Object(i.useState)([]),g=Object(s.a)(y,2),k=g[0],I=g[1],N=Object(i.useState)([]),w=Object(s.a)(N,2),A=w[0],S=w[1],T=Object(i.useState)([]),C=Object(s.a)(T,2),$=C[0],E=C[1];return Object(i.useEffect)((function(){var t=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolLiquidity)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(l.getPoolInfoApy)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return a=e.t1,r=t.pool||"",e.abrupt("return",Object.assign(t,{network:b[t.chainId]&&b[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),formatAdd:Object(d.d)(r),address:r,type:"perpetual",buttonText:"STAKING",multiplier:a.multiplier}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(e){var t=[];return e.reduce((function(e,t){var n=e.find((function(e){return Object(d.c)(e.pool.address,t.address)}));if(n&&n.list.length<5)n.list.push(t);else{var a={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(a)}return e}),t),t},a=Object(l.getContractAddressConfig)(u,"v2"),s=Object(l.getContractAddressConfig)(u,"v1"),i=Object(l.getContractAddressConfig)(u,"v2_lite"),p=Object(l.getPreminingContractConfig)(u),j=a.concat(s).concat(p).concat(i).reduce((function(e,t){var n=e.findIndex((function(e){return e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version}));return("v2"===t.version||"v2_lite"===t.version)&&n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):e.push(t),e}),[]);j=j.map(t);var m=Object(l.getLpContractAddressConfig)(u).map(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r,s,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(l.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(a=e.t1,r=t.pool||"",!Object(d.k)(t.pool)){e.next=18;break}return e.next=16,Object(l.getLpPoolInfoApy)(t.chainId,t.pool);case 16:o=e.sent,s=o&&(100*+o.apy2).toFixed(2);case 18:return Object(d.l)(t.pool)&&(i="SUSHI-APY"),Object(d.j)(t.pool)&&(i="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),formatAdd:Object(d.d)(r),lpApy:s,address:r,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=j.concat(m);return Promise.all(h).then((function(t){t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"2600",symbol:"--",airdrop:!0,chainId:56,buttonText:"CLAIM"});var a=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),s=t.filter((function(e){return e.retired&&e.premining}));e&&(a=n(a),c=n(c)),I(c),x(a),O(t),S(r),E(s),o(!0)})),function(){return f.length=0}}),[]),[a,f,v,k,A,$]}},668:function(e,t,n){"use strict";var a=n(7),c=n(34),r=n(142),s=n(23),i=n(651),l=n(67),o=n(649),d=n(53),u=n(650),b=n.n(u),p=n(25);const j=r[s.DeriEnv.get()].chainInfo;function f({wallet:e,pool:t,card:n,index:r,list:l,lang:u}){const[b,j]=Object(a.useState)(""),[f,O]=Object(a.useState)(!1),m=Object(c.useHistory)(),h=()=>{e.connect().then((()=>{O(!0)}))},v=async()=>{let t=await Object(s.getUserInfoAllForAirDrop)(e.detail.account);t.valid?Object(d.c)(e.detail.chainId,t.chainId)?(await Object(s.mintAirdrop)(t.chainId,e.detail.account)).success||alert(u["claim-failed"]):alert(u["please-switch-to-BSC-to-claim-deri"]):alert(u["no-deri-to-claim"])};return Object(a.useEffect)((()=>{if(t&&t.airdrop)e.isConnected()?j(Object(p.jsx)(o.a,{btnText:u.claim,click:v,lang:u})):j(Object(p.jsx)(o.a,{btnText:u["connect-wallet"],click:h,lang:u}));else{let e=`/mining/${t.version||"v1"}/${t.chainId}/${n.type}/${n.symbol}/${n.bTokenSymbol}/${t.address}`;n.bTokenId&&(e=`${e}?baseTokenId=${n.bTokenId}`),n.symbolId&&(e=e.indexOf("?")>0?`${e}&symbolId=${n.symbolId}`:`${e}?symbolId=${n.symbolId}`),j(Object(p.jsx)("button",{onClick:()=>(e=>{m.push(e)})(e),children:u.staking}))}return()=>{}}),[e.detail.account,f]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("div",{className:"top-info",children:[Object(p.jsxs)("div",{className:"pool-top",children:[Object(p.jsx)("span",{className:`logo ${n.bTokenSymbol}`}),Object(p.jsx)("span",{className:"base-token",children:n.bTokenSymbol})]}),Object(p.jsxs)("div",{className:"pool-detail",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:"title",children:n.airdrop?u.total:u["pool-liq"]}),Object(p.jsx)(i.a,{value:n.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:n.lpApy?7:0})]}),Object(p.jsx)("div",{className:"multiplier",children:n.multiplier&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:u.multiplier}),Object(p.jsxs)("span",{className:"multiplier-value",title:u["multiplier-tip"],children:[n.multiplier,"x"]})]})}),Object(p.jsxs)("div",{className:"apy",children:[Object(p.jsx)("span",{children:u.apy}),Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:n.lpApy?"sushi-apy-underline":"",title:n.lpApy&&u["deri-apy"],children:n.apy?Object(p.jsx)(i.a,{value:n.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),n.lpApy&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:" + "}),Object(p.jsxs)("span",{className:n.lpApy?"sushi-apy-underline":"",title:n.lpApy&&n.label,children:[" ",Object(p.jsx)(i.a,{value:n.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]})]})]}),Object(p.jsx)("div",{className:"bottom-btn",children:b})]}),r!==l.length-1&&Object(p.jsx)("div",{className:"top-line"})]})}t.a=Object(l.b)("wallet","version")(Object(l.c)((function({wallet:e,group:t={},lang:n}){const{pool:a,list:c}=t,r=b()("pool",{"only-one":1===c.length,full:5===c.length});return Object(p.jsxs)("div",{className:r,children:[Object(p.jsxs)("div",{className:"pool-header",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("div",{className:"network",children:a.network&&a.network.toUpperCase()}),Object(p.jsxs)("div",{className:"pool-desc",children:[Object(p.jsxs)("span",{className:"symbol",children:[Object(p.jsxs)("span",{className:"symbol-label",children:[n.symbol,":"]}),Object(p.jsx)("span",{className:"symbol-value",children:a.symbol})]}),Object(p.jsxs)("span",{className:"address",children:[Object(p.jsxs)("span",{className:"address-label",children:[n.address,":"]}),a.airdrop?"--":Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${j[a.chainId]&&j[a.chainId].viewUrl}/address/${a.address}`,children:a.formatAdd})]})]})]}),Object(p.jsx)("div",{className:"version",children:n[a.version]})]}),Object(p.jsx)("div",{className:"pool-info",children:c.map(((t,r)=>Object(p.jsx)(f,{card:t,index:r,pool:a,list:c,wallet:e,lang:n},r)))})]})})))},746:function(e,t,n){},747:function(e,t,n){},778:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n(7),r=(n(746),n(747),n(668)),s=n(654),i=n(67),l=n(25);t.default=Object(i.b)("version","loading")(Object(i.c)((function(e){var t=e.lang,n=e.loading,i=Object(s.a)(!0),o=Object(a.a)(i,4),d=o[0],u=(o[1],o[2]),b=o[3];return Object(c.useEffect)((function(){return d?n.loaded():n.loading(),function(){}}),[d]),Object(l.jsx)("div",{className:"mining-info",children:Object(l.jsx)("div",{className:"pools",children:b.concat(u).map((function(e,n){return Object(l.jsx)(r.a,{group:e,lang:t},n)}))})})})))}}]);
//# sourceMappingURL=15.23b25f36.chunk.js.map