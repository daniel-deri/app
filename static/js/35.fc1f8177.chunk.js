(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[35],{1173:function(e,a,t){},1174:function(e,a,t){},1206:function(e,a,t){"use strict";t.r(a);var i=t(5),s=t(25),c=t(822),n=(t(824),t(13)),d=t(93),l=t(618),o=t.n(l),b=t(47),j=t(658),r=(t(1173),t(1174),t(18));const u=n.a.get(),{chainInfo:h}=d[u];a.default=Object(b.b)("wallet")(Object(b.c)((function({wallet:e,lang:a}){const[t,d]=Object(i.useState)("liquidity"),{version:l,chainId:b,baseToken:u,address:p,type:m}=Object(s.useParams)(),O=Object(j.a)(),y=h[b].name,[f,v]=Object(i.useState)(!1),k={version:l,chainId:b,baseToken:u,address:p,wallet:e,type:m,lang:a},x=o()("mining-info",t);return O.has("baseTokenId")&&(k.baseTokenId=O.get("baseTokenId")),O.has("symbolId")&&(k.symbolId=O.get("symbolId")),Object(i.useEffect)((()=>{e&&e.detail&&e.detail.account&&((async()=>{let a=await Object(n.W)(e.detail.chainId,p,e.detail.account);v(a)})(),"v2_lite_open"===l&&(async()=>{await n.db.update()})())}),[e,e.detail,p]),Object(r.jsxs)("div",{className:x,children:[Object(r.jsxs)("div",{className:"pool-header",children:[Object(r.jsxs)("div",{className:"pool-network",children:[u," @ ",y]}),"v2_lite_open"!==l&&Object(r.jsx)("div",{className:"check-trade-liquidity",children:Object(r.jsx)("div",{className:"liquidity-mining",onClick:()=>d("liquidity"),children:a["liquidity-mining"]})})]}),Object(r.jsx)("div",{className:"pool-info",children:Object(r.jsx)(c.a,{...k})}),f&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"add-symbol",children:Object(r.jsx)("button",{onClick:()=>{alert(a["please-operat"])},children:a["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=35.fc1f8177.chunk.js.map