(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[11],{1079:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),c=a.n(n),s=a(1),r=a(7),i=a(13),l=a(909),d=a(771),u=a(17),o=a(696),b=a(46),j=a(698),x=a(32);function m(e){var t=e.wallet,a=e.miningClaim,n=e.tradingClaim,m=e.lang,O=Object(i.useState)(m["connect-wallet"]),p=Object(r.a)(O,2),v=p[0],f=p[1],h=Object(i.useState)(!1),N=Object(r.a)(h,2),y=N[0],k=N[1],w=Object(l.a)(t),g=Object(r.a)(w,2),S=g[0],I=g[1],q=Object(i.useState)(""),C=Object(r.a)(q,2),T=C[0],_=C[1],F=Object(d.a)(S.chainId),A=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==F.name){e.next=3;break}return alert("".concat(m["wrong-network"])),e.abrupt("return");case 3:if(Object(b.e)(t.detail.chainId,S.chainId)){e.next=6;break}return alert("".concat(m["your-deri-is-on"]," ").concat(F.name," ").concat(m["connect-to"]," ").concat(F.name," ").concat(m["to-claim"])),e.abrupt("return");case 6:if(0!==+S.unclaimed){e.next=9;break}return alert(m["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return alert(m["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,Object(u.kb)(t.detail.chainId,t.detail.account);case 15:if(!e.sent.success){e.next=21;break}return clearInterval(I),e.abrupt("return",!0);case 21:return alert(m["claim-failed"]),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=7;break}return e.next=3,A();case 3:e.sent&&k(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,t.connect();case 10:return a=e.sent,e.abrupt("return",!!a);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=null;return a&&(e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,n=parseInt(a/3600),c=parseInt(a%3600/60),s=parseInt(a%60);_("".concat(n," ").concat(m.h," ").concat(c," ").concat(m.m," ").concat(s," ").concat(m.s))}),1e3)),t.isConnected()?f(m.claim):f(m["collect-wallet"]),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(x.jsxs)("div",{className:"claim-box",children:[Object(x.jsx)("div",{className:"odd title",children:a?m["my-liquidity-providing-harvest-in-current-epoch"]:m["my-trading-harvest-in-current-epoch"]}),a&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["current-epoch-remaining-time"]}),Object(x.jsx)("div",{className:"text-num",children:T})]}),Object(x.jsxs)("div",{className:"odd text",children:[a&&Object(x.jsx)("div",{className:"text-title",children:m["my-harvest-in-current-epoch-estimated"]}),n&&Object(x.jsx)("div",{className:"text-title",children:m["my-trading-harvest-in-current-epoch-Est"]}),Object(x.jsxs)("div",{className:"text-num",children:[a?S.harvestDeriLp:S.harvestDeriTrade," ",m.deri]})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["claimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:y?(+S.claimed+ +S.unclaimed).toFixed(2):S.claimed})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["unclaimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:y?0:Object(x.jsx)(j.a,{value:S.unclaimed,decimalScale:2})})]}),n&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsx)("div",{className:"odd claim-network",children:a&&Object(x.jsxs)("div",{className:"text-title",children:[m["your-deri-is-on"]," ",F.name,"  ",m["connect-to"]," ",F.name," ",m["to-claim"]]})}),Object(x.jsx)("div",{className:"claim-btn",children:Object(x.jsx)(o.a,{btnText:v,click:L,className:"claim",lang:m})})]})}},1085:function(e,t,a){"use strict";var n=a(49),c=a(1079),s=a(42),r=a(0),i=a.n(r),l=a(1),d=a(7),u=a(13),o=a(17),b=a(704),j=a(696);a(1390);var x=a(729),m=a(698),O=a(32);var p=a(76),v=a(197),f=a(46);var h=Object(v.a)((function(e){var t=e.wallet,a=e.address,n=e.baseToken,c=e.onClose,s=e.afterAdd,r=e.balance,p=e.isLpPool,v=e.baseTokenId,f=e.symbolId,h=e.lang,N=Object(u.useState)("0"),y=Object(d.a)(N,2),k=y[0],w=y[1],g=Object(u.useState)("00"),S=Object(d.a)(g,2),I=S[0],q=S[1],C=Object(u.useState)(""),T=Object(d.a)(C,2),_=T[0],F=T[1],A=function(e){var t=e.wallet,a=e.address,n=e.symbolId,c=Object(u.useState)({}),s=Object(d.a)(c,2),r=s[0],b=s[1],j=function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(o.L)(t.detail.chainId,a,n);case 3:c=e.sent,b(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return j(),function(){}}),t.detail.account,a),r}({wallet:t,address:a,symbolId:f});Object(x.a)();var L=function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(o.g)(r),!Object(o.g)(_).gt(n)){e.next=5;break}return alert(h["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(A&&+_<+A.minAddLiquidity)){e.next=8;break}return alert("".concat(h["the-input-liquidity-shall-not-be-less-than"]," ").concat(A.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(_<=0||isNaN(_))){e.next=11;break}return alert(h["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 11:if(c=null,!p){e.next=18;break}return e.next=15,Object(o.c)(t.detail.chainId,a,t.detail.account,_);case 15:c=e.sent,e.next=21;break;case 18:return e.next=20,Object(o.b)(t.detail.chainId,a,t.detail.account,_,v);case 20:c=e.sent;case 21:return c&&c.success||alert(h["failure-of-transaction"]),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e=(+r).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return w(e),q(t),function(){}}),[r]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:h["add-liquidity"]}),Object(O.jsx)("div",{className:"close",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsx)("div",{children:h["wallet-balance"]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:k,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(O.jsx)("span",{className:"float",children:Object(O.jsx)(b.a,{displayType:"text",value:I,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(O.jsx)("div",{className:"base-token",children:n})]}),Object(O.jsx)("span",{className:"add"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:_?"block":"none"},children:h.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:h.liquidity,value:_,onChange:function(e){var t=e.target.value;F(t)}})]})}),Object(O.jsx)("div",{children:n})]}),Object(O.jsxs)("div",{className:"max",children:[h.max,": ",Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(m.a,{value:r,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){F(r)},children:h["add-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{className:"margin-btn",click:L,btnText:h.add,afterClick:s,lang:h})})]})})]})})})),N=Object(v.a)((function(e){var t=e.wallet,a=e.address,n=e.liqInfo,c=e.onClose,s=e.afterRemove,r=e.isLpPool,p=e.baseTokenId,v=e.unit,f=e.lang,h=e.version,N=Object(u.useState)(""),y=Object(d.a)(N,2),k=y[0],w=y[1],g=Object(u.useState)("0"),S=Object(d.a)(g,2),I=S[0],q=S[1],C=Object(u.useState)("00"),T=Object(d.a)(C,2),_=T[0],F=T[1];Object(x.a)();var A=function(){var e=Object(l.a)(i.a.mark((function e(){var c,s,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(o.g)(n.totalShares),!(s=Object(o.g)(k)).gt(c)){e.next=5;break}return alert("".concat(f["your-current-max-removable-shares-are"],"  ").concat(n.totalShares)),e.abrupt("return",!1);case 5:if(r||"v1"!==h){e.next=10;break}if(!((l=+n.totalShares-+k)<1&&l>0)){e.next=10;break}return alert(f["staking-max-limit-tip"]),e.abrupt("return",!1);case 10:if(!(+k<=0||isNaN(k))){e.next=13;break}return alert(f["invalid-liquidity"]),e.abrupt("return",!1);case 13:if(d=null,!r){e.next=20;break}return e.next=17,Object(o.qb)(t.detail.chainId,a,t.detail.account,k);case 17:d=e.sent,e.next=23;break;case 20:return e.next=22,Object(o.pb)(t.detail.chainId,a,t.detail.account,k,p,c.eq(s));case 22:d=e.sent;case 23:if(d&&d.success){e.next=26;break}return alert(f["failure-of-transaction"]),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){if(n&&n.formatShares){var e=n.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);q(e),F(t)}return function(){}}),[n.totalShares]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:f["remove-liquidity"]}),Object(O.jsx)("div",{className:"close","data-dismiss":"modal",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsxs)("div",{children:[" ","v1"===h||"v2_lite"===h||"v2_lite_open"===h?f["shares-available"]:f["liquidity-available"]]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsx)("span",{children:Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:I,decimalScale:0,thousandSeparator:!0}),".",Object(O.jsx)("span",{className:"float",children:_})]})}),Object(O.jsx)("span",{className:"remove"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:k?"block":"none"},children:"v1"===h||"v2_lite"===h||"v2_lite_open"===h?f["liquidity-shares"]:f.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:"v1"===h||"v2_lite"===h||"v2_lite_open"===h?f["liquidity-shares"]:f.liquidity,value:k,onChange:function(e){var t=e.target.value;w(t)}})]})}),Object(O.jsx)("div",{children:"v2"===h?v:f.shares})]}),Object(O.jsxs)("div",{className:"max",children:[Object(O.jsx)("span",{children:f["max-removeable"]}),Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(m.a,{value:n.totalShares,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){w(n.totalShares)},children:f["remove-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{click:A,className:"margin-btn",btnText:f.remove,afterClick:s,lang:f})})]})})]})})})),y=function(e){var t=e.version,a=e.wallet,n=e.chainId,c=e.address,r=e.baseToken,b=e.isLpPool,x=e.liqInfo,m=e.loadLiqidityInfo,p=e.baseTokenId,v=e.symbolId,y=e.lang,k=Object(u.useState)(!1),w=Object(d.a)(k,2),g=w[0],S=w[1],I=Object(u.useState)("add"),q=Object(d.a)(I,2),C=q[0],T=q[1],_=Object(u.useState)(!1),F=Object(d.a)(_,2),A=F[0],L=F[1],E=Object(u.useState)(""),D=Object(d.a)(E,2),Z=D[0],P=D[1],B=Object(u.useState)(null),V=Object(d.a)(B,2),R=V[0],M=V[1],J=function(){var e=Object(l.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!Object(f.e)(a.detail.chainId,n)){e.next=15;break}if(r=null,"v2_lite_open"!==t){e.next=5;break}return e.next=5,o.nb.update();case 5:if(!b){e.next=11;break}return e.next=8,Object(o.C)(a.detail.chainId,c,a.detail.account);case 8:r=e.sent,e.next=14;break;case 11:return e.next=13,Object(o.Z)(a.detail.chainId,c,a.detail.account,p);case 13:r=e.sent;case 14:"object"!==Object(s.a)(r)&&P(r);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){return J(),m(),function(){}}),[a.detail.account]);var z=function(){var e=Object(l.a)(i.a.mark((function e(){var s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("v2_lite_open"!==t){e.next=3;break}return e.next=3,o.nb.update();case 3:if(!b){e.next=11;break}return e.next=6,Object(o.db)(n,c,a.detail.account);case 6:return s=e.sent,S(s),e.abrupt("return",s);case 11:return e.next=13,Object(o.gb)(n,c,a.detail.account,p);case 13:return r=e.sent,S(r),e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!b){e.next=7;break}return e.next=4,Object(o.yb)(n,c,a.detail.account);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(o.vb)(n,c,a.detail.account,p);case 9:t=e.sent;case 10:t&&t.success?S(!0):alert(t.error&&t.error.message||y["approve-failed"]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.connect();case 3:return t=e.sent,e.abrupt("return",!!t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),K=function(){L(!0),T("add")},Q=function(){L(!1),J(),m(),a.refresh()},U=function(){L(!0),T("remove")};return Object(u.useEffect)((function(){return a.isConnected()&&Object(f.e)(a.detail.chainId,n)&&z(),function(){}}),[a.detail.account]),Object(u.useEffect)((function(){if(a.isConnected()&&Object(f.e)(a.detail.chainId,n)&&g)M(Object(O.jsxs)("div",{className:"add-remove-liquidity",children:[Object(O.jsx)("button",{className:"add-liquidity",onClick:K,children:y["add-liquidity"]}),Object(O.jsx)("button",{className:"remove-liquidity",onClick:U,children:y["remove-liquidity"]})]}));else{var e=null;a.isConnected()?Object(f.e)(a.detail.chainId,n)?g||(e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:G,btnText:y.approve,lang:y})})):(a.switchNetwork({id:n}),e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn wrong-network",btnText:y["wrong-network"],lang:y,click:function(){return a.switchNetwork({id:n})}})})):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:H,btnText:y["connect-wallet"],lang:y})}),M(e)}return function(){}}),[a.detail.account,g]),Object(O.jsxs)("div",{className:"liquidity-btn",children:["add"===C?Object(O.jsx)(h,{modalIsOpen:A,isLpPool:b,onClose:Q,balance:Z,address:c,wallet:a,baseToken:r,afterAdd:Q,baseTokenId:p,symbolId:v,lang:y}):Object(O.jsx)(N,{modalIsOpen:A,isLpPool:b,onClose:Q,liqInfo:x,address:c,wallet:a,version:t,unit:"v1"===t||"v2_lite"===t||"option"===t?y.shares:r,afterRemove:Q,baseTokenId:p,symbolId:v,lang:y}),R]})},k=Object(p.b)("wallet","loading")(Object(p.c)((function(e){var t=e.wallet,a=e.version,n=e.chainId,c=e.baseToken,s=e.address,r=e.type,b=e.baseTokenId,j=e.symbolId,x=e.lang,p=e.loading,v=Object(u.useState)({}),h=Object(d.a)(v,2),N=h[0],k=h[1],w=Object(u.useState)(c),g=Object(d.a)(w,2),S=g[0],I=g[1],q="lp"===r,C=function(){var e=Object(l.a)(i.a.mark((function e(){var r,l,d,u,j,m,O,v,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("v2_lite_open"!==a){e.next=3;break}return e.next=3,o.nb.update();case 3:return p.loading(),e.next=6,Object(o.F)(n,s,b);case 6:return r=e.sent,e.next=9,Object(o.G)(n,s,b);case 9:if(l=e.sent,!t.isConnected()||!Object(f.e)(n,t.detail.chainId)){e.next=29;break}if(d=null,!q){e.next=18;break}return e.next=15,Object(o.A)(n,s,t.detail.account);case 15:d=e.sent,e.next=21;break;case 18:return e.next=20,Object(o.x)(n,s,t.detail.account,b);case 20:d=e.sent;case 21:if(!Object(f.q)(s)){e.next=26;break}return e.next=24,Object(o.B)(n,s);case 24:j=e.sent,u=100*+j.apy2;case 26:d&&(m=d.shares?Object(o.g)(d.shares):Object(o.g)(0),"v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a?(O=m.isNaN()?Object(o.g)(0):m.multipliedBy(d.shareValue),k({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?O.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:m.toFixed(2),formatShares:m.toFixed(2),totalShares:Object(o.g)(m).toString(),values:O.toFixed(4),lpApy:u,unit:x.shares,sharesTitle:x["staked-balance"]})):k({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),swappedPnl:(+d.swappedPnl).toFixed(2),shares:m.toString(),formatShares:m.toFixed(2),totalShares:Object(o.g)(m).toString(),percent:d.poolLiquidity>0?m.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:c,pnlToken:d.bToken0Symbol,sharesTitle:x["my-Liquidity"],multiplier:"".concat(r.multiplier,"x")})),e.next=35;break;case 29:if(!Object(f.q)(s)){e.next=34;break}return e.next=32,Object(o.B)(n,s);case 32:h=e.sent,v=100*+h.apy2;case 34:l&&k({total:l.liquidity,apy:100*+r.apy,lpApy:v});case 35:p.loaded();case 36:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return C(),Object(f.p)(s)&&I("CAKE-LP"),function(){}}),[t.detail.account,c]),Object(O.jsxs)("div",{className:"liquidity-box",children:["v2_lite_open"===a?Object(O.jsx)("div",{className:"odd title",children:x["my-liqudity-providing"]}):Object(O.jsxs)("div",{className:"odd title",children:[x.provide,q?Object(O.jsx)("a",{href:/DERI-USDT/.test(S)?"https://app.sushi.com/add/0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9/0xdAC17F958D2ee523a2206206994597C13D831ec7":"https://pancakeswap.finance/add/0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",target:"_blank",rel:"noreferrer",children:S}):" ".concat(S," "),x["earn-deri"]]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["pool-total-liquidity"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,value:N.total,suffix:" ".concat(S),thousandSeparator:!0})})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.multiplier}),Object(O.jsx)("div",{className:"text-num multiplier",tip:x["multiplier-tip"],children:N.multiplier})]}),"v2_lite_open"!==a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.apy}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)("span",{tip:Object(f.q)(s)&&x["deri-apy"],className:"".concat(Object(f.q)(s)&&"sushi-apy-underline"),children:Object(O.jsx)(m.a,{value:N.apy,decimalScale:2,suffix:"%"})}),Object(f.q)(s)&&N.lpApy>0&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" +"})," ",Object(O.jsx)("span",{className:"sushi-apy-underline text-num",tip:Object(f.r)(s)?x["sushi-apy"]:x["cake-apy"],children:Object(O.jsx)(m.a,{value:N.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),("v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a)&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["liquidity-share-value"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,decimalScale:6,value:N.shareValue,suffix:" "+S,thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["my-liquidity-pencentage"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,value:N.percent,decimalScale:2,suffix:"%"})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsxs)("div",{className:"text-title",children:[N.sharesTitle," "]}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)(m.a,{allowZero:!0,value:N.formatShares,decimalScale:2})," ",Object(O.jsx)("span",{children:N.unit})," "]})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text claim-network",children:[Object(O.jsx)("div",{className:"text-title",children:x["mining-pnl"]}),Object(O.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(O.jsx)(m.a,{allowZero:!0,prefix:" ",value:N.swappedPnl,decimalScale:2,suffix:" "+S})]})]}),("v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a)&&Object(O.jsx)("div",{className:"odd claim-network",children:Object(O.jsxs)("div",{className:"text-title money",children:[" \u2248 ",Object(O.jsx)(m.a,{allowZero:!0,value:N.values,suffix:" "+S,decimalScale:4})]})}),Object(O.jsx)(y,{version:a,wallet:t,chainId:n,address:s,liqInfo:N,baseToken:S,isLpPool:q,loadLiqidityInfo:C,symbolId:j,baseTokenId:b,lang:x})]})})));t.a=function(e){return Object(O.jsxs)("div",{className:"liquidity-info",children:["v2_lite_open"!==e.version&&Object(O.jsx)(c.a,Object(n.a)(Object(n.a)({},e),{},{miningClaim:!0})),Object(O.jsx)(k,Object(n.a)({},e))]})}},1087:function(e,t,a){"use strict";a(49),a(707),a(1079);var n=a(0),c=a.n(n),s=a(1),r=a(7),i=a(13),l=a(17),d=a(43),u=a(76),o=a(46),b=a(308),j=a(32),x=new b.a;Object(u.b)("version")(Object(u.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,n=e.version,u=e.chainId,b=e.address,m=e.symbolId,O=e.lang,p=Object(i.useState)({}),v=Object(r.a)(p,2),f=v[0],h=v[1],N=Object(i.useState)({}),y=Object(r.a)(N,2),k=y[0],w=y[1],g=Object(d.useHistory)(),S=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.O)(a.account);case 2:return t=e.sent,e.next=5,Object(l.Q)(u,b,a.account);case 5:n=e.sent,s=(+t.trade).toFixed(2),r=n.volume1h,h({harvestDeriTrade:s,myTradingVolumeCurrent:r});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.F)(u,b);case 2:t=e.sent,a=t.volume1h,w({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return a&&a.account&&(S(),I()),function(){}}),[]),Object(j.jsxs)("div",{className:"liquidity-box",children:[Object(j.jsx)("div",{className:"odd title",children:O["trade-to-earn-deri"]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:O["total-trading-volume-in-current-hour"]}),Object(j.jsx)("div",{className:"text-num",children:k.totalTradingVolumeCurrent||0})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:O["my-trading-volume-in-current-hour"]}),Object(j.jsx)("div",{className:"text-num",children:f.myTradingVolumeCurrent||0})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsx)("div",{className:"odd claim-network"}),Object(j.jsx)("div",{className:"claim-btn",children:Object(j.jsx)("button",{className:"claim",onClick:function(){var e=x.load(n),t=n.isV1?e.find((function(e){return Object(o.e)(e.pool,b)})):e.find((function(e){return Object(o.e)(e.pool,b)&&e.symbolId===m}));Object(o.w)(n.current,t),g.push("/lite")},children:O.trade})})]})})))},1390:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(204),s=(n=c)&&n.__esModule?n:{default:n};t.default=s.default,e.exports=t.default},696:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(7),i=a(13),l=a(32);function d(e){var t=e.btnText,a=e.className,n=e.disabled,d=e.click,u=e.afterClick,o=e.checkApprove,b=e.wallet,j=e.spec,x=e.lang,m=Object(i.useState)(n?"disabled":"enabled"),O=Object(r.a)(m,2),p=O[0],v=O[1],f=Object(i.useState)(!0),h=Object(r.a)(f,2),N=h[0],y=h[1],k=Object(i.useState)(!1),w=Object(r.a)(k,2),g=w[0],S=w[1],I=Object(i.useState)(t),q=Object(r.a)(I,2),C=q[0],T=q[1],_=Object(i.useRef)(null),F=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===p){e.next=2;break}return e.abrupt("return");case 2:return A(),e.next=5,d();case 5:e.sent&&u&&u(),L();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){v("disabled"),S(!0),_.current&&(_.current.style.display="inline-block")},L=function(){_.current&&(_.current.style.display="none"),v("enabled"),S(!1)},E=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.next=3,b.approve(j.pool,j.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(x["approve-failed"])),L();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return E(),function(){}}),[b,j,o]),Object(i.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(l.jsxs)("button",{className:a,onClick:function(){N?F():D()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:_,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),g?x.pending:N?C:x.approve]})}},698:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(49),c=a(42),s=a(707),r=a(7),i=a(13),l=a(704),d=a(32);function u(e){var t=Object(i.useState)(Object(d.jsx)("span",{className:"loading-line"})),a=Object(r.a)(t,2),u=a[0],o=a[1];return Object(i.useEffect)((function(){var t=e.allowZero,a=Object(s.a)(e,["allowZero"]);return("object"!==Object(c.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&o(Object(d.jsx)(l.a,Object(n.a)(Object(n.a)({},a),{},{displayType:"text",fixedDecimalScale:!0}))),function(){}}),[e.value]),u}},729:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(13);function c(e){return Object(n.useEffect)((function(){return document.querySelector("body").style.overflow="hidden",function(){e||(document.querySelector("body").style.overflow="auto")}}),[]),null}},909:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(7),i=a(13),l=a(17);function d(e){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],d=a[1],u=null,o=function(){var t=Object(s.a)(c.a.mark((function t(){var a,n,s,r,i,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(l.O)(e.detail.account);case 3:a=t.sent,n=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,r=(+a.lp).toFixed(2),i=(+a.trade).toFixed(2),u=a.chainId,d({claimed:n,unclaimed:s,harvestDeriLp:r,harvestDeriTrade:i,chainId:u});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){return u=window.setInterval(o,18e4),o(),function(){return clearInterval(u)}}),[e.detail.account]),[n,u]}}}]);
//# sourceMappingURL=11.ef79f547.chunk.js.map