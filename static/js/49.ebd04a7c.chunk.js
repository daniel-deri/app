(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[49],{1335:function(e,a,t){},1336:function(e,a,t){},1372:function(e,a,t){"use strict";t.r(a);var i=t(4),s=t(21),c=t(991),n=(t(992),t(8)),l=t(58),d=t(613),o=t.n(d),b=t(41),j=t(739),r=(t(1335),t(1336),t(13));const u=n.a.get(),{chainInfo:h}=l[u];a.default=Object(b.b)("wallet")(Object(b.c)((function({wallet:e,lang:a}){const[t,l]=Object(i.useState)("liquidity"),{version:d,chainId:b,baseToken:u,address:m,type:p}=Object(s.useParams)(),O=Object(j.a)(),y=h[b].name,[f,v]=Object(i.useState)(!1),k={version:d,chainId:b,baseToken:u,address:m,wallet:e,type:p,lang:a},x=o()("mining-info",t);return O.has("baseTokenId")&&(k.baseTokenId=O.get("baseTokenId")),O.has("symbolId")&&(k.symbolId=O.get("symbolId")),Object(i.useEffect)((()=>{e&&e.detail&&e.detail.account&&"v2_lite_open"===d&&((async()=>{await n.mb.update()})(),(async()=>{let a=await Object(n.fb)(e.detail.chainId,m,e.detail.account);v(a)})())}),[e,e.detail,m]),Object(r.jsxs)("div",{className:x,children:[Object(r.jsxs)("div",{className:"pool-header",children:[Object(r.jsxs)("div",{className:"pool-network",children:[u," @ ",y]}),"v2_lite_open"!==d&&Object(r.jsx)("div",{className:"check-trade-liquidity",children:Object(r.jsx)("div",{className:"liquidity-mining",onClick:()=>l("liquidity"),children:a["liquidity-mining"]})})]}),Object(r.jsx)("div",{className:"pool-info",children:Object(r.jsx)(c.a,{...k})}),f&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"add-symbol",children:Object(r.jsx)("button",{onClick:()=>{alert(a["please-operat"])},children:a["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=49.ebd04a7c.chunk.js.map