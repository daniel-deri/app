(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[32],{1145:function(e,t,i){},1146:function(e,t,i){},1184:function(e,t,i){"use strict";i.r(t);var a=i(4),n=i(23),s=i(819),c=(i(821),i(14)),l=i(93),d=(i(1145),i(1146),i(616)),o=i.n(d),b=i(47),j=i(656),r=i(18);const p=c.a.get(),{chainInfo:u}=l[p];t.default=Object(b.b)("wallet")(Object(b.c)((function({wallet:e,lang:t}){const[i,l]=Object(a.useState)("liquidity"),d=Object(n.useHistory)(),[b,p]=Object(a.useState)(!1),{version:h,chainId:m,symbol:O,baseToken:y,address:v,type:f}=Object(n.useParams)(),k=Object(j.a)(),$=u[m]&&u[m].name,x={version:h,chainId:m,symbol:O,baseToken:y,address:v,wallet:e,type:f,lang:t},I=`/addsymbol/${h||"v1"}/${m}/${f}/${O}/${y}/${v}`;k.has("baseTokenId")&&(x.baseTokenId=k.get("baseTokenId")),k.has("symbolId")&&(x.symbolId=k.get("symbolId")),Object(a.useEffect)((()=>{e&&e.detail&&e.detail.account&&((async()=>{let t=await Object(c.S)(e.detail.chainId,v,e.detail.account);p(t)})(),"v2_lite_open"===h&&(async()=>{await c.Y.update()})())}),[e,e.detail,v]);const g=o()("mining-info",i,{"open-zone":"v2_lite_open"===h});return Object(r.jsxs)("div",{className:g,children:[Object(r.jsxs)("div",{className:"pool-header",children:[Object(r.jsx)("div",{className:"pool-network",children:"lp"===f||"v2"===h||"v2_lite"===h||"v2_lite_open"===h||"option"===h?`${y} @ ${$}`:`${O}/${y} @ ${$}`}),"v2_lite_open"!==h&&Object(r.jsx)("div",{className:"check-trade-liquidity",children:Object(r.jsx)("div",{className:"liquidity-mining",onClick:()=>l("liquidity"),children:t["liquidity-mining"]})})]}),Object(r.jsx)("div",{className:"pool-info",children:Object(r.jsx)(s.a,{...x})}),b&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"add-symbol",children:Object(r.jsx)("button",{onClick:()=>(e=>{d.push(e)})(I),children:t["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=32.54f8ca5b.chunk.js.map