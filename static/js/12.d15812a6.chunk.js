(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[12],{1062:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var c=a(9),s=a(776),i=a(728),n=a(12),l=a(665),r=a(29),d=a(666),o=a(28);function j({wallet:e,miningClaim:t,tradingClaim:a,lang:j}){const[u,b]=Object(c.useState)(j["connect-wallet"]),[m,x]=Object(c.useState)(!1),[O,v]=Object(s.a)(e),[h,p]=Object(c.useState)(""),f=Object(i.a)(O.chainId);return Object(c.useEffect)((()=>{let a=null;return t&&(a=window.setInterval((()=>{let e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,c=parseInt(a/3600),s=parseInt(a%3600/60),i=parseInt(a%60);p(`${c} ${j.h} ${s} ${j.m} ${i} ${j.s}`)}),1e3)),e.isConnected()?b(j.claim):b(j["collect-wallet"]),()=>{a&&clearInterval(a)}}),[e.detail.account]),Object(o.jsxs)("div",{className:"claim-box",children:[Object(o.jsx)("div",{className:"odd title",children:t?j["my-liquidity-providing-harvest-in-current-epoch"]:j["my-trading-harvest-in-current-epoch"]}),t&&Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title",children:j["current-epoch-remaining-time"]}),Object(o.jsx)("div",{className:"text-num",children:h})]}),Object(o.jsxs)("div",{className:"odd text",children:[t&&Object(o.jsx)("div",{className:"text-title",children:j["my-harvest-in-current-epoch-estimated"]}),a&&Object(o.jsx)("div",{className:"text-title",children:j["my-trading-harvest-in-current-epoch-Est"]}),Object(o.jsxs)("div",{className:"text-num",children:[t?O.harvestDeriLp:O.harvestDeriTrade," ",j.deri]})]}),Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title",children:j["claimed-deri"]}),Object(o.jsx)("div",{className:"text-num",children:m?(+O.claimed+ +O.unclaimed).toFixed(2):O.claimed})]}),Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title"}),Object(o.jsx)("div",{className:"text-num"})]}),Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title",children:j["unclaimed-deri"]}),Object(o.jsx)("div",{className:"text-num",children:m?0:Object(o.jsx)(d.a,{value:O.unclaimed,decimalScale:2})})]}),a&&Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title"}),Object(o.jsx)("div",{className:"text-num"})]}),Object(o.jsx)("div",{className:"odd claim-network",children:t&&Object(o.jsxs)("div",{className:"text-title",children:[j["your-deri-is-on"]," ",f.name,"  ",j["connect-to"]," ",f.name," ",j["to-claim"]]})}),Object(o.jsx)("div",{className:"claim-btn",children:Object(o.jsx)(l.a,{btnText:u,click:async()=>{if(e.isConnected()){await(async()=>void 0===f.name?void alert(`${j["wrong-network"]}`):Object(r.e)(e.detail.chainId,O.chainId)?0===+O.unclaimed?void alert(j["no-deri-to-claim-yet"]):parseInt(Date.now()/1e3)%28800<1800?void alert(j["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]):(await Object(n.nb)(e.detail.chainId,e.detail.account)).success?(clearInterval(v),!0):(alert(j["claim-failed"]),!1):void alert(`${j["your-deri-is-on"]} ${f.name} ${j["connect-to"]} ${f.name} ${j["to-claim"]}`))()&&x(!0)}else try{return!!await e.connect()}catch(t){return!1}},className:"claim",lang:j})})]})}},1067:function(e,t,a){"use strict";var c=a(1062),s=a(120),i=a(1),n=a.n(i),l=a(3),r=a(7),d=a(9),o=a(12),j=a(671),u=a(665);a(1373);function b({wallet:e,address:t,symbolId:a}){const[c,s]=Object(d.useState)({});return Object(d.useEffect)((()=>((async()=>{if(e.isConnected()&&t){const c=await Object(o.M)(e.detail.chainId,t,a);s(c)}})(),()=>{})),e.detail.account,t),c}var m=a(703),x=a(666),O=a(28);var v=a(70),h=a(184),p=a(29);var f=Object(h.a)((function({wallet:e,address:t,baseToken:a,onClose:c,afterAdd:s,balance:i,isLpPool:n,baseTokenId:l,symbolId:r,lang:v}){const[h,p]=Object(d.useState)("0"),[f,N]=Object(d.useState)("00"),[y,w]=Object(d.useState)(""),g=b({wallet:e,address:t,symbolId:r});return Object(m.a)(),Object(d.useEffect)((()=>{const e=(+i).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return p(e),N(t),()=>{}}),[i]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:v["add-liquidity"]}),Object(O.jsx)("div",{className:"close",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsx)("div",{children:v["wallet-balance"]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(j.a,{displayType:"text",value:h,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(O.jsx)("span",{className:"float",children:Object(O.jsx)(j.a,{displayType:"text",value:f,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(O.jsx)("div",{className:"base-token",children:a})]}),Object(O.jsx)("span",{className:"add"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:y?"block":"none"},children:v.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:v.liquidity,value:y,onChange:e=>{const{value:t}=e.target;w(t)}})]})}),Object(O.jsx)("div",{children:a})]}),Object(O.jsxs)("div",{className:"max",children:[v.max,": ",Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(x.a,{value:i,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:()=>{w(i)},children:v["add-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(u.a,{className:"margin-btn",click:async()=>{const a=Object(o.g)(i);if(Object(o.g)(y).gt(a))return alert(v["not-sufficient-funds"]),!1;if(g&&+y<+g.minAddLiquidity)return alert(`${v["the-input-liquidity-shall-not-be-less-than"]} ${g.minAddLiquidity}`),!1;if(y<=0||isNaN(y))return alert(v["it-has-to-be-greater-than-zero"]),!1;let c=null;return c=n?await Object(o.c)(e.detail.chainId,t,e.detail.account,y):await Object(o.b)(e.detail.chainId,t,e.detail.account,y,l),c&&c.success||alert(v["failure-of-transaction"]),!0},btnText:v.add,afterClick:s,lang:v})})]})})]})})})),N=Object(h.a)((function({wallet:e,address:t,liqInfo:a,onClose:c,afterRemove:s,isLpPool:i,baseTokenId:n,unit:l,lang:r,version:b}){const[v,h]=Object(d.useState)(""),[p,f]=Object(d.useState)("0"),[N,y]=Object(d.useState)("00");return Object(m.a)(),Object(d.useEffect)((()=>{if(a&&a.formatShares){const e=a.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);f(e),y(t)}return()=>{}}),[a.totalShares]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:r["remove-liquidity"]}),Object(O.jsx)("div",{className:"close","data-dismiss":"modal",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsxs)("div",{children:[" ","v1"===b||"v2_lite"===b||"v2_lite_open"===b?r["shares-available"]:r["liquidity-available"]]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsx)("span",{children:Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(j.a,{displayType:"text",value:p,decimalScale:0,thousandSeparator:!0}),".",Object(O.jsx)("span",{className:"float",children:N})]})}),Object(O.jsx)("span",{className:"remove"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:v?"block":"none"},children:"v1"===b||"v2_lite"===b||"v2_lite_open"===b?r["liquidity-shares"]:r.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:"v1"===b||"v2_lite"===b||"v2_lite_open"===b?r["liquidity-shares"]:r.liquidity,value:v,onChange:e=>{const{value:t}=e.target;h(t)}})]})}),Object(O.jsx)("div",{children:"v2"===b?l:r.shares})]}),Object(O.jsxs)("div",{className:"max",children:[Object(O.jsx)("span",{children:r["max-removeable"]}),Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(x.a,{value:a.totalShares,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:()=>{h(a.totalShares)},children:r["remove-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(u.a,{click:async()=>{const c=Object(o.g)(a.totalShares),s=Object(o.g)(v);if(s.gt(c))return alert(`${r["your-current-max-removable-shares-are"]}  ${a.totalShares}`),!1;if(!i&&"v1"===b){const e=+a.totalShares-+v;if(e<1&&e>0)return alert(r["staking-max-limit-tip"]),!1}if(+v<=0||isNaN(v))return alert(r["invalid-liquidity"]),!1;let l=null;return l=i?await Object(o.tb)(e.detail.chainId,t,e.detail.account,v):await Object(o.sb)(e.detail.chainId,t,e.detail.account,v,n,c.eq(s)),!(!l||!l.success)||(alert(r["failure-of-transaction"]),!1)},className:"margin-btn",btnText:r.remove,afterClick:s,lang:r})})]})})]})})})),y=function(e){var t=e.version,a=e.wallet,c=e.chainId,i=e.address,j=e.baseToken,b=e.isLpPool,m=e.liqInfo,x=e.loadLiqidityInfo,v=e.baseTokenId,h=e.symbolId,y=e.lang,w=Object(d.useState)(!1),g=Object(r.a)(w,2),k=g[0],S=g[1],I=Object(d.useState)("add"),q=Object(r.a)(I,2),C=q[0],T=q[1],_=Object(d.useState)(!1),A=Object(r.a)(_,2),F=A[0],L=A[1],D=Object(d.useState)(""),E=Object(r.a)(D,2),$=E[0],P=E[1],Z=Object(d.useState)(null),V=Object(r.a)(Z,2),B=V[0],R=V[1],M=function(){var e=Object(l.a)(n.a.mark((function e(){var l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!Object(p.e)(a.detail.chainId,c)){e.next=15;break}if(l=null,"v2_lite_open"!==t){e.next=5;break}return e.next=5,o.qb.update();case 5:if(!b){e.next=11;break}return e.next=8,Object(o.D)(a.detail.chainId,i,a.detail.account);case 8:l=e.sent,e.next=14;break;case 11:return e.next=13,Object(o.cb)(a.detail.chainId,i,a.detail.account,v);case 13:l=e.sent;case 14:"object"!==Object(s.a)(l)&&P(l);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){return M(),x(),function(){}}),[a.detail.account]);var G=function(){var e=Object(l.a)(n.a.mark((function e(){var s,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("v2_lite_open"!==t){e.next=3;break}return e.next=3,o.qb.update();case 3:if(!b){e.next=11;break}return e.next=6,Object(o.gb)(c,i,a.detail.account);case 6:return s=e.sent,S(s),e.abrupt("return",s);case 11:return e.next=13,Object(o.jb)(c,i,a.detail.account,v);case 13:return l=e.sent,S(l),e.abrupt("return",l);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!b){e.next=7;break}return e.next=4,Object(o.Bb)(c,i,a.detail.account);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(o.yb)(c,i,a.detail.account,v);case 9:t=e.sent;case 10:t&&t.success?S(!0):alert(t.error&&t.error.message||y["approve-failed"]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.connect();case 3:return t=e.sent,e.abrupt("return",!!t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(){L(!0),T("add")},K=function(){L(!1),M(),x(),a.refresh()},U=function(){L(!0),T("remove")};return Object(d.useEffect)((function(){return a.isConnected()&&Object(p.e)(a.detail.chainId,c)&&G(),function(){}}),[a.detail.account]),Object(d.useEffect)((function(){if(a.isConnected()&&Object(p.e)(a.detail.chainId,c)&&k)R(Object(O.jsxs)("div",{className:"add-remove-liquidity",children:[Object(O.jsx)("button",{className:"add-liquidity",onClick:z,children:y["add-liquidity"]}),Object(O.jsx)("button",{className:"remove-liquidity",onClick:U,children:y["remove-liquidity"]})]}));else{var e=null;a.isConnected()?Object(p.e)(a.detail.chainId,c)?k||(e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(u.a,{className:"approve-btn",click:H,btnText:y.approve,lang:y})})):(a.switchNetwork({id:c}),e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(u.a,{className:"approve-btn wrong-network",btnText:y["wrong-network"],lang:y,click:function(){return a.switchNetwork({id:c})}})})):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(u.a,{className:"approve-btn",click:J,btnText:y["connect-wallet"],lang:y})}),R(e)}return function(){}}),[a.detail.account,k]),Object(O.jsxs)("div",{className:"liquidity-btn",children:["add"===C?Object(O.jsx)(f,{modalIsOpen:F,isLpPool:b,onClose:K,balance:$,address:i,wallet:a,baseToken:j,afterAdd:K,baseTokenId:v,symbolId:h,lang:y}):Object(O.jsx)(N,{modalIsOpen:F,isLpPool:b,onClose:K,liqInfo:m,address:i,wallet:a,version:t,unit:"v1"===t||"v2_lite"===t||"option"===t?y.shares:j,afterRemove:K,baseTokenId:v,symbolId:h,lang:y}),B]})},w=Object(v.b)("wallet","loading")(Object(v.c)((function(e){var t=e.wallet,a=e.version,c=e.chainId,s=e.baseToken,i=e.address,j=e.type,u=e.baseTokenId,b=e.symbolId,m=e.lang,v=e.loading,h=Object(d.useState)({}),f=Object(r.a)(h,2),N=f[0],w=f[1],g=Object(d.useState)(s),k=Object(r.a)(g,2),S=k[0],I=k[1],q="lp"===j,C=function(){var e=Object(l.a)(n.a.mark((function e(){var l,r,d,j,b,x,O,h,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("v2_lite_open"!==a){e.next=3;break}return e.next=3,o.qb.update();case 3:return v.loading(),e.next=6,Object(o.G)(c,i,u);case 6:return l=e.sent,e.next=9,Object(o.H)(c,i,u);case 9:if(r=e.sent,!t.isConnected()||!Object(p.e)(c,t.detail.chainId)){e.next=29;break}if(d=null,!q){e.next=18;break}return e.next=15,Object(o.B)(c,i,t.detail.account);case 15:d=e.sent,e.next=21;break;case 18:return e.next=20,Object(o.y)(c,i,t.detail.account,u);case 20:d=e.sent;case 21:if(!Object(p.s)(i)){e.next=26;break}return e.next=24,Object(o.C)(c,i);case 24:b=e.sent,j=100*+b.apy2;case 26:d&&(x=d.shares?Object(o.g)(d.shares):Object(o.g)(0),"v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a?(O=x.isNaN()?Object(o.g)(0):x.multipliedBy(d.shareValue),w({total:d.poolLiquidity,apy:(100*+l.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?O.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:x.toFixed(2),formatShares:x.toFixed(2),totalShares:Object(o.g)(x).toString(),values:O.toFixed(4),lpApy:j,unit:m.shares,sharesTitle:m["staked-balance"]})):w({total:d.poolLiquidity,apy:(100*+l.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),swappedPnl:(+d.swappedPnl).toFixed(2),shares:x.toString(),formatShares:x.toFixed(2),totalShares:Object(o.g)(x).toString(),percent:d.poolLiquidity>0?x.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:s,pnlToken:d.bToken0Symbol,sharesTitle:m["my-Liquidity"],multiplier:"".concat(l.multiplier,"x")})),e.next=35;break;case 29:if(!Object(p.s)(i)){e.next=34;break}return e.next=32,Object(o.C)(c,i);case 32:f=e.sent,h=100*+f.apy2;case 34:r&&w({total:r.liquidity,apy:100*+l.apy,lpApy:h});case 35:v.loaded();case 36:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){return C(),Object(p.r)(i)&&I("CAKE-LP"),function(){}}),[t.detail.account,s]),Object(O.jsxs)("div",{className:"liquidity-box",children:["v2_lite_open"===a?Object(O.jsx)("div",{className:"odd title",children:m["my-liqudity-providing"]}):Object(O.jsxs)("div",{className:"odd title",children:[m.provide,q?Object(O.jsx)("a",{href:/DERI-USDT/.test(S)?"https://app.sushi.com/add/0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9/0xdAC17F958D2ee523a2206206994597C13D831ec7":"https://pancakeswap.finance/add/0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",target:"_blank",rel:"noreferrer",children:S}):" ".concat(S," "),m["earn-deri"]]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:m["pool-total-liquidity"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(x.a,{allowZero:!0,value:N.total,suffix:" ".concat(S),thousandSeparator:!0})})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:m.multiplier}),Object(O.jsx)("div",{className:"text-num multiplier",tip:m["multiplier-tip"],children:N.multiplier})]}),"v2_lite_open"!==a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:m.apy}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)("span",{tip:Object(p.s)(i)&&m["deri-apy"],className:"".concat(Object(p.s)(i)&&"sushi-apy-underline"),children:Object(O.jsx)(x.a,{value:N.apy,decimalScale:2,suffix:"%"})}),Object(p.s)(i)&&N.lpApy>0&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" +"})," ",Object(O.jsx)("span",{className:"sushi-apy-underline text-num",tip:Object(p.t)(i)?m["sushi-apy"]:m["cake-apy"],children:Object(O.jsx)(x.a,{value:N.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),("v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a)&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:m["liquidity-share-value"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(x.a,{allowZero:!0,decimalScale:6,value:N.shareValue,suffix:" "+S,thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:m["my-liquidity-pencentage"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(x.a,{allowZero:!0,value:N.percent,decimalScale:2,suffix:"%"})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsxs)("div",{className:"text-title",children:[N.sharesTitle," "]}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)(x.a,{allowZero:!0,value:N.formatShares,decimalScale:2})," ",Object(O.jsx)("span",{children:N.unit})," "]})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text claim-network",children:[Object(O.jsx)("div",{className:"text-title",children:m["mining-pnl"]}),Object(O.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(O.jsx)(x.a,{allowZero:!0,prefix:" ",value:N.swappedPnl,decimalScale:2,suffix:" "+S})]})]}),("v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a)&&Object(O.jsx)("div",{className:"odd claim-network",children:Object(O.jsxs)("div",{className:"text-title money",children:[" \u2248 ",Object(O.jsx)(x.a,{allowZero:!0,value:N.values,suffix:" "+S,decimalScale:4})]})}),Object(O.jsx)(y,{version:a,wallet:t,chainId:c,address:i,liqInfo:N,baseToken:S,isLpPool:q,loadLiqidityInfo:C,symbolId:b,baseTokenId:u,lang:m})]})})));t.a=function(e){return Object(O.jsxs)("div",{className:"liquidity-info",children:["v2_lite_open"!==e.version&&Object(O.jsx)(c.a,{...e,miningClaim:!0}),Object(O.jsx)(w,{...e})]})}},1070:function(e,t,a){"use strict";a(1062);var c=a(9),s=a(12),i=a(41),n=a(70),l=a(29),r=a(290),d=a(28);const o=new r.a;Object(n.b)("version")(Object(n.c)((function({wallet:e={},version:t,chainId:a,address:n,symbolId:r,lang:j}){const[u,b]=Object(c.useState)({}),[m,x]=Object(c.useState)({}),O=Object(i.useHistory)();return Object(c.useEffect)((()=>(e&&e.account&&((async()=>{const t=await Object(s.P)(e.account),c=await Object(s.R)(a,n,e.account),i=(+t.trade).toFixed(2),l=c.volume1h;b({harvestDeriTrade:i,myTradingVolumeCurrent:l})})(),(async()=>{const e=(await Object(s.G)(a,n)).volume1h;x({totalTradingVolumeCurrent:e})})()),()=>{})),[]),Object(d.jsxs)("div",{className:"liquidity-box",children:[Object(d.jsx)("div",{className:"odd title",children:j["trade-to-earn-deri"]}),Object(d.jsxs)("div",{className:"odd text",children:[Object(d.jsx)("div",{className:"text-title",children:j["total-trading-volume-in-current-hour"]}),Object(d.jsx)("div",{className:"text-num",children:m.totalTradingVolumeCurrent||0})]}),Object(d.jsxs)("div",{className:"odd text",children:[Object(d.jsx)("div",{className:"text-title",children:j["my-trading-volume-in-current-hour"]}),Object(d.jsx)("div",{className:"text-num",children:u.myTradingVolumeCurrent||0})]}),Object(d.jsxs)("div",{className:"odd text",children:[Object(d.jsx)("div",{className:"text-title"}),Object(d.jsx)("div",{className:"text-num"})]}),Object(d.jsxs)("div",{className:"odd text",children:[Object(d.jsx)("div",{className:"text-title"}),Object(d.jsx)("div",{className:"text-num"})]}),Object(d.jsxs)("div",{className:"odd text",children:[Object(d.jsx)("div",{className:"text-title"}),Object(d.jsx)("div",{className:"text-num"})]}),Object(d.jsx)("div",{className:"odd claim-network"}),Object(d.jsx)("div",{className:"claim-btn",children:Object(d.jsx)("button",{className:"claim",onClick:()=>{const e=o.load(t),a=t.isV1?e.find((e=>Object(l.e)(e.pool,n))):e.find((e=>Object(l.e)(e.pool,n)&&e.symbolId===r));Object(l.y)(t.current,a),O.push("/lite")},children:j.trade})})]})})))},1373:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c,s=a(188),i=(c=s)&&c.__esModule?c:{default:c};t.default=i.default,e.exports=t.default},665:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(9),s=a(28);function i({btnText:e,className:t,disabled:a,click:i,afterClick:n,checkApprove:l,wallet:r,spec:d,lang:o}){const[j,u]=Object(c.useState)(a?"disabled":"enabled"),[b,m]=Object(c.useState)(!0),[x,O]=Object(c.useState)(!1),[v,h]=Object(c.useState)(e),p=Object(c.useRef)(null),f=()=>{u("disabled"),O(!0),p.current&&(p.current.style.display="inline-block")},N=()=>{p.current&&(p.current.style.display="none"),u("enabled"),O(!1)};return Object(c.useEffect)((()=>((async()=>{if(l&&r&&r.detail.account){const e=await r.isApproved(d.pool,d.bTokenId);m(e)}})(),()=>{})),[r,d,l]),Object(c.useEffect)((()=>(e&&h(e),()=>{})),[e]),Object(s.jsxs)("button",{className:t,onClick:()=>{b?(async()=>{if("enabled"!==j)return;f(),await i()&&n&&n(),N()})():(async()=>{f(),(await r.approve(d.pool,d.bTokenId)).success?m(!0):(m(!1),alert(o["approve-failed"])),N()})()},children:[Object(s.jsx)("span",{className:"btn-loading-wrap",children:Object(s.jsx)("span",{ref:p,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),x?o.pending:b?v:o.approve]})}},666:function(e,t,a){"use strict";var c=a(54),s=a(677),i=a(120),n=a(7),l=a(9),r=a(671),d=a(70),o=a(28);t.a=Object(d.b)("wallet","trading")(Object(d.c)((function(e){var t=Object(l.useState)(Object(o.jsx)("span",{className:"loading-line"})),a=Object(n.a)(t,2),d=a[0],j=a[1],u=function(){var t=e.allowZero;return"object"!==Object(i.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t};return Object(l.useEffect)((function(){e.allowZero;var t=e.wallet,a=e.defaultValue,i=void 0===a?"--":a,n=Object(s.a)(e,["allowZero","wallet","defaultValue"]);u()?j(Object(o.jsx)(r.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text",fixedDecimalScale:!0}))):j(Object(o.jsx)("span",{className:"loading-line"}));var l=window.setTimeout((function(){u()||!t||t.isConnected()||j(i)}),3e4);return function(){clearTimeout(l)}}),[e.value]),d})))},703:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(9);function s(e){return Object(c.useEffect)((()=>(document.querySelector("body").style.overflow="hidden",()=>{e||(document.querySelector("body").style.overflow="auto")})),[]),null}},776:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(9),s=a(12);function i(e){const[t,a]=Object(c.useState)({});let i=null;const n=async()=>{if(e.isConnected()){const t=await Object(s.P)(e.detail.account),c=(+t.total).toFixed(2),i=t.valid?(+t.amount).toFixed(2):0,n=(+t.lp).toFixed(2),l=(+t.trade).toFixed(2),r=t.chainId;a({claimed:c,unclaimed:i,harvestDeriLp:n,harvestDeriTrade:l,chainId:r})}};return Object(c.useEffect)((()=>(i=window.setInterval(n,18e4),n(),()=>clearInterval(i))),[e.detail.account]),[t,i]}}}]);
//# sourceMappingURL=12.d15812a6.chunk.js.map