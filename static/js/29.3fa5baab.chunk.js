(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[29],{723:function(e,i,n){},724:function(e,i,n){},761:function(e,i,n){"use strict";n.r(i);var a=n(25),c=n(14),s=n(8),t=n(32),l=n(681),o=(n(683),n(23)),d=n(140),b=(n(723),n(724),n(630)),r=n.n(b),j=n(104),u=n(643),h=n(62),m=d[o.DeriEnv.get()].chainInfo;i.default=Object(j.b)("wallet")(Object(j.c)((function(e){var i=e.wallet,n=e.lang,o=Object(s.useState)("liquidity"),d=Object(c.a)(o,2),b=d[0],j=d[1],p=Object(t.useParams)(),v=p.version,O=p.chainId,y=p.symbol,f=p.baseToken,k=p.address,I=p.type,g=Object(u.a)(),x=m[O]&&m[O].name,w={version:v,chainId:O,symbol:y,baseToken:f,address:k,wallet:i,type:I,lang:n};g.has("baseTokenId")&&(w.baseTokenId=g.get("baseTokenId")),g.has("symbolId")&&(w.symbolId=g.get("symbolId"));var N=r()("mining-info",b);return Object(h.jsxs)("div",{className:N,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsx)("div",{className:"pool-network",children:"lp"===I||"v2"===v||"v2_lite"===v?"".concat(f," @ ").concat(x):"".concat(y,"/").concat(f," @ ").concat(x)}),Object(h.jsx)("div",{className:"check-trade-liquidity",children:Object(h.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:n["liquidity-mining"]})})]}),Object(h.jsx)("div",{className:"pool-info",children:Object(h.jsx)(l.a,Object(a.a)({},w))})]})})))}}]);
//# sourceMappingURL=29.3fa5baab.chunk.js.map