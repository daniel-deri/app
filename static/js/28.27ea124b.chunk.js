(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[28],{712:function(e,i,n){},729:function(e,i,n){"use strict";n.r(i);var a=n(29),s=n(17),t=n(7),c=n(33),d=n(661),l=n(663),r=n(26),o=n(176),b=(n(712),n(620)),j=n.n(b),u=n(96),h=n(628),O=n(60),m=o[r.DeriEnv.get()].chainInfo;i.default=Object(u.b)("wallet")(Object(u.c)((function(e){var i=e.wallet,n=e.lang,r=Object(t.useState)("liquidity"),o=Object(s.a)(r,2),b=o[0],u=o[1],p=Object(c.useParams)(),v=p.version,f=p.chainId,g=p.baseToken,k=p.address,x=p.type,y=Object(h.a)(),I=m[f].text,N={version:v,chainId:f,baseToken:g,address:k,wallet:i,type:x,lang:n},w=j()("mining-info",b);return y.has("baseTokenId")&&(N.baseTokenId=y.get("baseTokenId")),y.has("symbolId")&&(N.symbolId=y.get("symbolId")),Object(O.jsxs)("div",{className:w,children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsxs)("div",{className:"pool-network",children:[g," @ ",I]}),Object(O.jsxs)("div",{className:"check-trade-liquidity",children:[Object(O.jsx)("div",{className:"liquidity-mining",onClick:function(){return u("liquidity")},children:n["liquidity-mining"]}),Object(O.jsx)("div",{className:"trade-mining",onClick:function(){return u("trade")},children:n["trading-mining"]})]})]}),Object(O.jsxs)("div",{className:"pool-info",children:[Object(O.jsx)(d.a,Object(a.a)({},N)),Object(O.jsx)(l.a,Object(a.a)({},N))]})]})})))}}]);
//# sourceMappingURL=28.27ea124b.chunk.js.map