(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[28],{688:function(e,a,i){},689:function(e,a,i){},726:function(e,a,i){"use strict";i.r(a);var n=i(17),c=i(9),s=i(5),t=i(22),l=i(655),o=(i(657),i(16)),d=i(108),b=(i(688),i(689),i(610)),r=i.n(b),j=i(47),u=i(622),h=i(18),m=d[o.a.get()].chainInfo;a.default=Object(j.b)("wallet")(Object(j.c)((function(e){var a=e.wallet,i=e.lang,o=Object(s.useState)("liquidity"),d=Object(c.a)(o,2),b=d[0],j=d[1],p=Object(t.useParams)(),O=p.version,v=p.chainId,y=p.symbol,f=p.baseToken,k=p.address,I=p.type,g=Object(u.a)(),x=m[v]&&m[v].name,w={version:O,chainId:v,symbol:y,baseToken:f,address:k,wallet:a,type:I,lang:i};g.has("baseTokenId")&&(w.baseTokenId=g.get("baseTokenId")),g.has("symbolId")&&(w.symbolId=g.get("symbolId"));var N=r()("mining-info",b);return Object(h.jsxs)("div",{className:N,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsx)("div",{className:"pool-network",children:"lp"===I||"v2"===O||"v2_lite"===O?"".concat(f," @ ").concat(x):"".concat(y,"/").concat(f," @ ").concat(x)}),Object(h.jsx)("div",{className:"check-trade-liquidity",children:Object(h.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:i["liquidity-mining"]})})]}),Object(h.jsx)("div",{className:"pool-info",children:Object(h.jsx)(l.a,Object(n.a)({},w))})]})})))}}]);
//# sourceMappingURL=28.0a6169b1.chunk.js.map