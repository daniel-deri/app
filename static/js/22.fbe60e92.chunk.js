(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[22],{701:function(e,i,n){},702:function(e,i,n){},730:function(e,i,n){"use strict";n.r(i);var a=n(26),c=n(18),t=n(7),s=n(31),l=n(667),o=(n(668),n(23)),d=n(175),b=(n(701),n(702),n(620)),r=n.n(b),j=n(95),u=n(628),h=n(58),m=d[o.DeriEnv.get()].chainInfo;i.default=Object(j.b)("wallet")(Object(j.c)((function(e){var i=e.wallet,n=e.lang,o=Object(t.useState)("liquidity"),d=Object(c.a)(o,2),b=d[0],j=d[1],p=Object(s.useParams)(),O=p.version,v=p.chainId,y=p.symbol,f=p.baseToken,k=p.address,I=p.type,g=Object(u.a)(),x=m[v].text,w={version:O,chainId:v,symbol:y,baseToken:f,address:k,wallet:i,type:I,lang:n};g.has("baseTokenId")&&(w.baseTokenId=g.get("baseTokenId")),g.has("symbolId")&&(w.symbolId=g.get("symbolId"));var N=r()("mining-info",b);return Object(h.jsxs)("div",{className:N,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsx)("div",{className:"pool-network",children:"lp"===I||"v2"===O?"".concat(f," @ ").concat(x):"".concat(y,"/").concat(f," @ ").concat(x)}),Object(h.jsx)("div",{className:"check-trade-liquidity",children:Object(h.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:n["liquidity-mining"]})})]}),Object(h.jsx)("div",{className:"pool-info",children:Object(h.jsx)(l.a,Object(a.a)({},w))})]})})))}}]);
//# sourceMappingURL=22.fbe60e92.chunk.js.map