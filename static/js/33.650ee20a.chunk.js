(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[33],{1169:function(e,t,n){},1170:function(e,t,n){},1200:function(e,t,n){"use strict";n.r(t);var a=n(55),c=n(0),i=n.n(c),s=n(1),r=n(9),d=n(6),l=n(25),o=n(819),u=(n(821),n(14)),b=n(95),j=n(615),p=n.n(j),f=n(48),h=n(656),O=(n(1169),n(1170),n(18)),m=b[u.a.get()].chainInfo;t.default=Object(f.b)("wallet")(Object(f.c)((function(e){var t=e.wallet,n=e.lang,c=Object(d.useState)("liquidity"),b=Object(r.a)(c,2),j=b[0],f=b[1],v=Object(l.useParams)(),x=v.version,y=v.chainId,k=v.baseToken,w=v.address,I=v.type,g=Object(h.a)(),N=m[y].name,q=Object(d.useState)(!1),T=Object(r.a)(q,2),_=T[0],S=T[1],C={version:x,chainId:y,baseToken:k,address:w,wallet:t,type:I,lang:n},J=p()("mining-info",j);g.has("baseTokenId")&&(C.baseTokenId=g.get("baseTokenId")),g.has("symbolId")&&(C.symbolId=g.get("symbolId"));var E=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.S)(t.detail.chainId,w,t.detail.account);case 2:n=e.sent,S(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Y.update();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){t&&t.detail&&t.detail.account&&(E(),"v2_lite_open"===x&&F())}),[t,t.detail,w]),Object(O.jsxs)("div",{className:J,children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsxs)("div",{className:"pool-network",children:[k," @ ",N]}),"v2_lite_open"!==x&&Object(O.jsx)("div",{className:"check-trade-liquidity",children:Object(O.jsx)("div",{className:"liquidity-mining",onClick:function(){return f("liquidity")},children:n["liquidity-mining"]})})]}),Object(O.jsx)("div",{className:"pool-info",children:Object(O.jsx)(o.a,Object(a.a)({},C))}),_&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"add-symbol",children:Object(O.jsx)("button",{onClick:function(){alert(n["please-operat"])},children:n["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=33.650ee20a.chunk.js.map