(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[19],{695:function(e,n,i){},696:function(e,n,i){},719:function(e,n,i){"use strict";i.r(n);var a=i(29),c=i(17),t=i(7),s=i(33),d=i(661),l=i(663),o=i(26),r=i(176),b=(i(695),i(696),i(620)),j=i.n(b),u=i(96),m=i(628),h=i(60),O=r[o.DeriEnv.get()].chainInfo;n.default=Object(u.b)("wallet")(Object(u.c)((function(e){var n=e.wallet,i=e.lang,o=Object(t.useState)("liquidity"),r=Object(c.a)(o,2),b=r[0],u=r[1],p=Object(s.useParams)(),v=p.version,f=p.chainId,y=p.symbol,g=p.baseToken,k=p.address,x=p.type,I=Object(m.a)(),N=O[f].text,w={version:v,chainId:f,symbol:y,baseToken:g,address:k,wallet:n,type:x,lang:i};I.has("baseTokenId")&&(w.baseTokenId=I.get("baseTokenId")),I.has("symbolId")&&(w.symbolId=I.get("symbolId"));var q=j()("mining-info",b);return Object(h.jsxs)("div",{className:q,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsx)("div",{className:"pool-network",children:"lp"===x||"v2"===v?"".concat(g," @ ").concat(N):"".concat(y,"/").concat(g," @ ").concat(N)}),Object(h.jsxs)("div",{className:"check-trade-liquidity",children:[Object(h.jsx)("div",{className:"liquidity-mining",onClick:function(){return u("liquidity")},children:i["liquidity-mining"]}),Object(h.jsx)("div",{className:"trade-mining",onClick:function(){return u("trade")},children:i["trading-mining"]})]})]}),Object(h.jsxs)("div",{className:"pool-info",children:[Object(h.jsx)(d.a,Object(a.a)({},w)),Object(h.jsx)(l.a,Object(a.a)({},w))]})]})})))}}]);
//# sourceMappingURL=19.d87c895f.chunk.js.map