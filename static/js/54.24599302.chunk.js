(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[54],{1450:function(e,t,n){},1451:function(e,t,n){},1490:function(e,t,n){"use strict";n.r(t);var a=n(49),c=n(0),i=n.n(c),s=n(1),r=n(7),d=n(13),l=n(44),o=n(1103),u=(n(1107),n(16)),b=n(92),j=n(695),p=n.n(j),f=n(77),h=n(841),O=(n(1450),n(1451),n(32)),m=b[u.a.get()].chainInfo;t.default=Object(f.b)("wallet")(Object(f.c)((function(e){var t=e.wallet,n=e.lang,c=Object(d.useState)("liquidity"),b=Object(r.a)(c,2),j=b[0],f=b[1],v=Object(l.useParams)(),k=v.version,x=v.chainId,y=v.baseToken,w=v.address,I=v.type,g=Object(h.a)(),N=m[x].name,q=Object(d.useState)(!1),T=Object(r.a)(q,2),_=T[0],C=T[1],J={version:k,chainId:x,baseToken:y,address:w,wallet:t,type:I,lang:n},S=p()("mining-info",j);g.has("baseTokenId")&&(J.baseTokenId=g.get("baseTokenId")),g.has("symbolId")&&(J.symbolId=g.get("symbolId"));var E=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.kb)(t.detail.chainId,w,t.detail.account);case 2:n=e.sent,C(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.sb.update();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){t&&t.detail&&t.detail.account&&"v2_lite_open"===k&&(F(),E())}),[t,t.detail,w]),Object(O.jsxs)("div",{className:S,children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsxs)("div",{className:"pool-network",children:[y," @ ",N]}),"v2_lite_open"!==k&&Object(O.jsx)("div",{className:"check-trade-liquidity",children:Object(O.jsx)("div",{className:"liquidity-mining",onClick:function(){return f("liquidity")},children:n["liquidity-mining"]})})]}),Object(O.jsx)("div",{className:"pool-info",children:Object(O.jsx)(o.a,Object(a.a)({},J))}),_&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"add-symbol",children:Object(O.jsx)("button",{onClick:function(){alert(n["please-operat"])},children:n["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=54.24599302.chunk.js.map