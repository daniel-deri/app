(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[33],{719:function(e,i,s){},740:function(e,i,s){"use strict";s.r(i);var a=s(27),n=s(18),t=s(7),c=s(31),d=s(667),l=(s(668),s(23)),o=s(174),b=(s(719),s(620)),r=s.n(b),j=s(95),h=s(628),u=s(56),p=o[l.DeriEnv.get()].chainInfo;i.default=Object(j.b)("wallet")(Object(j.c)((function(e){var i=e.wallet,s=e.lang,l=Object(t.useState)("liquidity"),o=Object(n.a)(l,2),b=o[0],j=o[1],O=Object(c.useParams)(),m=O.version,v=O.chainId,f=O.baseToken,k=O.address,y=O.type,I=Object(h.a)(),g=p[v].text,x={version:m,chainId:v,baseToken:f,address:k,wallet:i,type:y,lang:s},w=r()("mining-info",b);return I.has("baseTokenId")&&(x.baseTokenId=I.get("baseTokenId")),I.has("symbolId")&&(x.symbolId=I.get("symbolId")),Object(u.jsxs)("div",{className:w,children:[Object(u.jsxs)("div",{className:"pool-header",children:[Object(u.jsxs)("div",{className:"pool-network",children:[f," @ ",g]}),Object(u.jsx)("div",{className:"check-trade-liquidity",children:Object(u.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:s["liquidity-mining"]})})]}),Object(u.jsx)("div",{className:"pool-info",children:Object(u.jsx)(d.a,Object(a.a)({},x))})]})})))}}]);
//# sourceMappingURL=33.11cd6643.chunk.js.map