(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[4],{646:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(7),l=a(25);function d(e){var t=e.btnText,a=e.className,n=e.disabled,d=e.click,u=e.afterClick,o=e.checkApprove,b=e.wallet,j=e.spec,x=e.lang,m=Object(i.useState)(n?"disabled":"enabled"),O=Object(r.a)(m,2),v=O[0],p=O[1],f=Object(i.useState)(!0),h=Object(r.a)(f,2),y=h[0],N=h[1],k=Object(i.useState)(!1),g=Object(r.a)(k,2),w=g[0],I=g[1],S=Object(i.useState)(t),q=Object(r.a)(S,2),T=q[0],L=q[1],C=Object(i.useRef)(null),E=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return A(),e.next=5,d();case 5:e.sent&&u&&u(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){p("disabled"),I(!0),C.current&&(C.current.style.display="inline-block")},F=function(){C.current&&(C.current.style.display="none"),p("enabled"),I(!1)},P=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.next=3,b.approve(j.pool,j.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(x["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return P(),function(){}}),[b,j,o]),Object(i.useEffect)((function(){return t&&L(t),function(){}}),[t]),Object(l.jsxs)("button",{className:a,onClick:function(){y?E():Z()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?x.pending:y?T:x.approve]})}},648:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(24),c=a(184),s=a(14),r=a(7),i=a(649),l=a(25);function d(e){var t=Object(r.useState)("--"),a=Object(s.a)(t,2),d=a[0],u=a[1];return Object(r.useEffect)((function(){var t=e.allowZero,a=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&u(Object(l.jsx)(i.a,Object(n.a)(Object(n.a)({},a),{},{displayType:"text"}))),function(){}}),[e.value]),d}},653:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(7);function c(e){return Object(n.useEffect)((function(){return document.querySelector("body").style.overflow="hidden",function(){e||(document.querySelector("body").style.overflow="auto")}}),[]),null}},666:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(7),l=a(23);function d(e){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],d=a[1],u=null,o=function(){var t=Object(s.a)(c.a.mark((function t(){var a,n,s,r,i,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(l.getUserInfoAll)(e.detail.account);case 3:a=t.sent,n=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,r=(+a.lp).toFixed(2),i=(+a.trade).toFixed(2),u=a.chainId,d({claimed:n,unclaimed:s,harvestDeriLp:r,harvestDeriTrade:i,chainId:u});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){return u=window.setInterval(o,18e4),o(),function(){return clearInterval(u)}}),[e.detail.account]),[n,u]}},687:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(7),l=a(666),d=a(652),u=a(23),o=a(646),b=a(51),j=a(648),x=a(25);function m(e){var t=e.wallet,a=e.miningClaim,n=e.tradingClaim,m=e.lang,O=Object(i.useState)(m["connect-wallet"]),v=Object(r.a)(O,2),p=v[0],f=v[1],h=Object(i.useState)(!1),y=Object(r.a)(h,2),N=y[0],k=y[1],g=Object(l.a)(t),w=Object(r.a)(g,2),I=w[0],S=w[1],q=Object(i.useState)(""),T=Object(r.a)(q,2),L=T[0],C=T[1],E=Object(d.a)(I.chainId),A=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==E.name){e.next=3;break}return alert("".concat(m["wrong-network"])),e.abrupt("return");case 3:if(Object(b.c)(t.detail.chainId,I.chainId)){e.next=6;break}return alert("".concat(m["your-deri-is-on"]," ").concat(E.name," ").concat(m["connect-to"]," ").concat(E.name," ").concat(m["to-claim"])),e.abrupt("return");case 6:if(0!==+I.unclaimed){e.next=9;break}return alert(m["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return alert(m["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,Object(u.mintDToken)(t.detail.chainId,t.detail.account);case 15:if(!e.sent.success){e.next=21;break}return clearInterval(S),e.abrupt("return",!0);case 21:return alert(m["claim-failed"]),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=7;break}return e.next=3,A();case 3:e.sent&&k(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,t.connect();case 10:return a=e.sent,e.abrupt("return",!!a);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=null;return a&&(e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,n=parseInt(a/3600),c=parseInt(a%3600/60),s=parseInt(a%60);C("".concat(n," ").concat(m.h," ").concat(c," ").concat(m.m," ").concat(s," ").concat(m.s))}),1e3)),t.isConnected()?f(m.claim):f(m["collect-wallet"]),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(x.jsxs)("div",{className:"claim-box",children:[Object(x.jsx)("div",{className:"odd title",children:a?m["my-liquidity-providing-harvest-in-current-epoch"]:m["my-trading-harvest-in-current-epoch"]}),a&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["current-epoch-remaining-time"]}),Object(x.jsx)("div",{className:"text-num",children:L})]}),Object(x.jsxs)("div",{className:"odd text",children:[a&&Object(x.jsx)("div",{className:"text-title",children:m["my-harvest-in-current-epoch-estimated"]}),n&&Object(x.jsx)("div",{className:"text-title",children:m["my-trading-harvest-in-current-epoch-Est"]}),Object(x.jsxs)("div",{className:"text-num",children:[a?I.harvestDeriLp:I.harvestDeriTrade," ",m.deri]})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["claimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:N?(+I.claimed+ +I.unclaimed).toFixed(2):I.claimed})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["unclaimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:N?0:Object(x.jsx)(j.a,{value:I.unclaimed,decimalScale:2})})]}),n&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsx)("div",{className:"odd claim-network",children:a&&Object(x.jsxs)("div",{className:"text-title",children:[m["your-deri-is-on"]," ",E.name,"  ",m["connect-to"]," ",E.name," ",m["to-claim"]]})}),Object(x.jsx)("div",{className:"claim-btn",children:Object(x.jsx)(o.a,{btnText:p,click:F,className:"claim",lang:m})})]})}},691:function(e,t,a){"use strict";var n=a(24),c=a(687),s=a(45),r=a(0),i=a.n(r),l=a(1),d=a(14),u=a(7),o=a(23),b=a(649),j=a(646);a(723);var x=a(653),m=a(648),O=a(25);var v=a(66),p=a(185),f=a(51);var h=Object(p.a)((function(e){var t=e.wallet,a=e.address,n=e.baseToken,c=e.onClose,s=e.afterAdd,r=e.balance,v=e.isLpPool,p=e.baseTokenId,f=e.symbolId,h=e.lang,y=Object(u.useState)("0"),N=Object(d.a)(y,2),k=N[0],g=N[1],w=Object(u.useState)("00"),I=Object(d.a)(w,2),S=I[0],q=I[1],T=Object(u.useState)(""),L=Object(d.a)(T,2),C=L[0],E=L[1],A=function(e){var t=e.wallet,a=e.address,n=e.symbolId,c=Object(u.useState)({}),s=Object(d.a)(c,2),r=s[0],b=s[1],j=function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(o.getSpecification)(t.detail.chainId,a,n);case 3:c=e.sent,b(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return j(),function(){}}),t.detail.account,a),r}({wallet:t,address:a,symbolId:f});Object(x.a)();var F=function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(o.bg)(r),!Object(o.bg)(C).gt(n)){e.next=5;break}return alert(h["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(A&&+C<+A.minAddLiquidity)){e.next=8;break}return alert("".concat(h["the-input-liquidity-shall-not-be-less-than"]," ").concat(A.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(C<=0||isNaN(C))){e.next=11;break}return alert(h["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 11:if(c=null,!v){e.next=18;break}return e.next=15,Object(o.addLpLiquidity)(t.detail.chainId,a,t.detail.account,C);case 15:c=e.sent,e.next=21;break;case 18:return e.next=20,Object(o.addLiquidity)(t.detail.chainId,a,t.detail.account,C,p);case 20:c=e.sent;case 21:return c&&c.success||alert(h["failure-of-transaction"]),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e=(+r).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return g(e),q(t),function(){}}),[r]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:h["add-liquidity"]}),Object(O.jsx)("div",{className:"close",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsx)("div",{children:h["wallet-balance"]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:k,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(O.jsx)("span",{className:"float",children:Object(O.jsx)(b.a,{displayType:"text",value:S,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(O.jsx)("div",{className:"base-token",children:n})]}),Object(O.jsx)("span",{className:"add"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:C?"block":"none"},children:h.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:h.liquidity,value:C,onChange:function(e){var t=e.target.value;E(t)}})]})}),Object(O.jsx)("div",{children:n})]}),Object(O.jsxs)("div",{className:"max",children:[h.max,": ",Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(m.a,{value:r,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){E(r)},children:h["add-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{className:"margin-btn",click:F,btnText:h.add,afterClick:s,lang:h})})]})})]})})})),y=Object(p.a)((function(e){var t=e.wallet,a=e.address,n=e.liqInfo,c=e.onClose,s=e.afterRemove,r=e.isLpPool,v=e.baseTokenId,p=e.unit,f=e.lang,h=e.version,y=Object(u.useState)(""),N=Object(d.a)(y,2),k=N[0],g=N[1],w=Object(u.useState)("0"),I=Object(d.a)(w,2),S=I[0],q=I[1],T=Object(u.useState)("00"),L=Object(d.a)(T,2),C=L[0],E=L[1];Object(x.a)();var A=function(){var e=Object(l.a)(i.a.mark((function e(){var c,s,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(o.bg)(n.totalShares),!(s=Object(o.bg)(k)).gt(c)){e.next=5;break}return alert("".concat(f["your-current-max-removable-shares-are"],"  ").concat(n.totalShares)),e.abrupt("return",!1);case 5:if(r||"v1"!==h){e.next=10;break}if(!((l=+n.totalShares-+k)<1&&l>0)){e.next=10;break}return alert(f["staking-max-limit-tip"]),e.abrupt("return",!1);case 10:if(!(+k<=0||isNaN(k))){e.next=13;break}return alert(f["invalid-liquidity"]),e.abrupt("return",!1);case 13:if(d=null,!r){e.next=20;break}return e.next=17,Object(o.removeLpLiquidity)(t.detail.chainId,a,t.detail.account,k);case 17:d=e.sent,e.next=23;break;case 20:return e.next=22,Object(o.removeLiquidity)(t.detail.chainId,a,t.detail.account,k,v,c.eq(s));case 22:d=e.sent;case 23:if(d&&d.success){e.next=26;break}return alert(f["failure-of-transaction"]),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){if(n&&n.formatShares){var e=n.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);q(e),E(t)}return function(){}}),[n.totalShares]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:f["remove-liquidity"]}),Object(O.jsx)("div",{className:"close","data-dismiss":"modal",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsxs)("div",{children:[" ","v1"===h?f["shares-available"]:f["liquidity-available"]]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsx)("span",{children:Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:S,decimalScale:0,thousandSeparator:!0}),".",Object(O.jsx)("span",{className:"float",children:C})]})}),Object(O.jsx)("span",{className:"remove"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:k?"block":"none"},children:"v1"===h?f["liquidity-shares"]:f.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:"v1"===h?f["liquidity-shares"]:f.liquidity,value:k,onChange:function(e){var t=e.target.value;g(t)}})]})}),Object(O.jsx)("div",{children:p})]}),Object(O.jsxs)("div",{className:"max",children:[Object(O.jsx)("span",{children:f["max-removeable"]}),Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(m.a,{value:n.totalShares,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){g(n.totalShares)},children:f["remove-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{click:A,className:"margin-btn",btnText:f.remove,afterClick:s,lang:f})})]})})]})})})),N=function(e){var t=e.version,a=e.wallet,n=e.chainId,c=e.address,r=e.baseToken,b=e.isLpPool,x=e.liqInfo,m=e.loadLiqidityInfo,v=e.baseTokenId,p=e.symbolId,N=e.lang,k=Object(u.useState)(!1),g=Object(d.a)(k,2),w=g[0],I=g[1],S=Object(u.useState)("add"),q=Object(d.a)(S,2),T=q[0],L=q[1],C=Object(u.useState)(!1),E=Object(d.a)(C,2),A=E[0],F=E[1],P=Object(u.useState)(""),Z=Object(d.a)(P,2),D=Z[0],V=Z[1],B=Object(u.useState)(null),_=Object(d.a)(B,2),R=_[0],U=_[1],M=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!Object(f.c)(a.detail.chainId,n)){e.next=12;break}if(t=null,!b){e.next=8;break}return e.next=5,Object(o.getLpWalletBalance)(a.detail.chainId,c,a.detail.account);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,Object(o.getWalletBalance)(a.detail.chainId,c,a.detail.account,v);case 10:t=e.sent;case 11:"object"!==Object(s.a)(t)&&V(t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){return M(),m(),function(){}}),[a.detail.account]);var J=function(){var e=Object(l.a)(i.a.mark((function e(){var t,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=8;break}return e.next=3,Object(o.isLpUnlocked)(n,c,a.detail.account);case 3:return t=e.sent,I(t),e.abrupt("return",t);case 8:return e.next=10,Object(o.isUnlocked)(n,c,a.detail.account,v);case 10:return s=e.sent,I(s),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!b){e.next=7;break}return e.next=4,Object(o.unlockLp)(n,c,a.detail.account);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(o.unlock)(n,c,a.detail.account,v);case 9:t=e.sent;case 10:t&&t.success?I(!0):alert(t.error&&t.error.message||N["approve-failed"]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.connect();case 3:return t=e.sent,e.abrupt("return",!!t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),H=function(){F(!0),L("add")},K=function(){F(!1),M(),m(),a.refresh()},Y=function(){F(!0),L("remove")};return Object(u.useEffect)((function(){return a.isConnected()&&Object(f.c)(a.detail.chainId,n)&&J(),function(){}}),[a.detail.account]),Object(u.useEffect)((function(){if(a.isConnected()&&Object(f.c)(a.detail.chainId,n)&&w)U(Object(O.jsxs)("div",{className:"add-remove-liquidity",children:[Object(O.jsx)("button",{className:"add-liquidity",onClick:H,children:N["add-liquidity"]}),Object(O.jsx)("button",{className:"remove-liquidity",onClick:Y,children:N["remove-liquidity"]})]}));else{var e=null;a.isConnected()?Object(f.c)(a.detail.chainId,n)?w||(e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:W,btnText:N.approve,lang:N})})):(a.switchNetwork({id:n}),e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn wrong-network",btnText:N["wrong-network"],lang:N,click:function(){return a.switchNetwork({id:n})}})})):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:z,btnText:N["connect-wallet"],lang:N})}),U(e)}return function(){}}),[a.detail.account,w]),Object(O.jsxs)("div",{className:"liquidity-btn",children:["add"===T?Object(O.jsx)(h,{modalIsOpen:A,isLpPool:b,onClose:K,balance:D,address:c,wallet:a,baseToken:r,afterAdd:K,baseTokenId:v,symbolId:p,lang:N}):Object(O.jsx)(y,{modalIsOpen:A,isLpPool:b,onClose:K,liqInfo:x,address:c,wallet:a,version:t,unit:"v1"===t?N.shares:r,afterRemove:K,baseTokenId:v,symbolId:p,lang:N}),R]})},k=Object(v.b)("wallet","loading")(Object(v.c)((function(e){var t=e.wallet,a=e.version,n=e.chainId,c=e.baseToken,s=e.address,r=e.type,b=e.baseTokenId,j=e.symbolId,x=e.lang,v=e.loading,p=Object(u.useState)({}),h=Object(d.a)(p,2),y=h[0],k=h[1],g=Object(u.useState)(c),w=Object(d.a)(g,2),I=w[0],S=w[1],q="lp"===r,T=function(){var e=Object(l.a)(i.a.mark((function e(){var r,l,d,u,j,m,O,p,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.loading(),e.next=3,Object(o.getPoolInfoApy)(n,s,b);case 3:return r=e.sent,e.next=6,Object(o.getPoolLiquidity)(n,s,b);case 6:if(l=e.sent,!t.isConnected()||!Object(f.c)(n,t.detail.chainId)){e.next=26;break}if(d=null,!q){e.next=15;break}return e.next=12,Object(o.getLpLiquidityInfo)(n,s,t.detail.account);case 12:d=e.sent,e.next=18;break;case 15:return e.next=17,Object(o.getLiquidityInfo)(n,s,t.detail.account,b);case 17:d=e.sent;case 18:if(!Object(f.k)(s)){e.next=23;break}return e.next=21,Object(o.getLpPoolInfoApy)(n,s);case 21:j=e.sent,u=100*+j.apy2;case 23:d&&(m=d.shares?Object(o.bg)(d.shares):Object(o.bg)(0),"v1"===a||"v2_lite"===a?(O=m.isNaN()?Object(o.bg)(0):m.multipliedBy(d.shareValue),k({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?O.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:m.toFixed(2),formatShares:m.toFixed(2),totalShares:Object(o.bg)(m).toString(),values:O.toFixed(2),lpApy:u,unit:x.shares,sharesTitle:x["staked-balance"]})):k({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),shares:m.toString(),formatShares:Object(o.bg)(m).plus(d.pnl).toFixed(2),totalShares:Object(o.bg)(m).plus(d.pnl).toString(),percent:d.poolLiquidity>0?m.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:c,sharesTitle:x["my-Liquidity"],multiplier:"".concat(r.multiplier,"x")})),e.next=32;break;case 26:if(!Object(f.k)(s)){e.next=31;break}return e.next=29,Object(o.getLpPoolInfoApy)(n,s);case 29:h=e.sent,p=100*+h.apy2;case 31:l&&k({total:l.liquidity,apy:100*+r.apy,lpApy:p});case 32:v.loaded();case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return T(),Object(f.j)(s)&&S("CAKE-LP"),function(){}}),[t.detail.account,c]),Object(O.jsxs)("div",{className:"liquidity-box",children:[Object(O.jsxs)("div",{className:"odd title",children:[x.provide," ",I," ",x["earn-deri"]]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["pool-total-liquidity"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,value:y.total,suffix:" ".concat(I),thousandSeparator:!0})})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.multiplier}),Object(O.jsx)("div",{className:"text-num multiplier",title:x["multiplier-tip"],children:y.multiplier})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.apy}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)("span",{title:Object(f.k)(s)&&"DERI-APY",className:"".concat(Object(f.k)(s)&&"sushi-apy-underline"),children:Object(O.jsx)(m.a,{value:y.apy,decimalScale:2,suffix:"%"})}),Object(f.k)(s)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" +"})," ",Object(O.jsx)("span",{className:"sushi-apy-underline text-num",title:Object(f.l)(s)?x["sushi-apy"]:x["cake-apy"],children:Object(O.jsx)(m.a,{value:y.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),("v1"===a||"v2_lite"===a)&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["liquidity-share-value"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,decimalScale:6,value:y.shareValue,suffix:" "+I,thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["my-liquidity-pencentage"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,value:y.percent,decimalScale:2,suffix:"%"})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsxs)("div",{className:"text-title",children:[y.sharesTitle," "]}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)(m.a,{allowZero:!0,value:y.formatShares,decimalScale:2})," ",Object(O.jsx)("span",{children:y.unit})," "]})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text claim-network",children:[Object(O.jsx)("div",{className:"text-title",children:x["mining-pnl"]}),Object(O.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(O.jsx)(m.a,{allowZero:!0,prefix:" ",value:y.pnl,decimalScale:2,suffix:" "+I})]})]}),("v1"===a||"v2_lite"===a)&&Object(O.jsx)("div",{className:"odd claim-network",children:Object(O.jsxs)("div",{className:"text-title money",children:[" ",Object(O.jsx)(m.a,{allowZero:!0,value:y.values,suffix:" "+I,decimalScale:2})]})}),Object(O.jsx)(N,{version:a,wallet:t,chainId:n,address:s,liqInfo:y,baseToken:I,isLpPool:q,loadLiqidityInfo:T,symbolId:j,baseTokenId:b,lang:x})]})})));t.a=function(e){return Object(O.jsxs)("div",{className:"liquidity-info",children:[Object(O.jsx)(c.a,Object(n.a)(Object(n.a)({},e),{},{miningClaim:!0})),Object(O.jsx)(k,Object(n.a)({},e))]})}},693:function(e,t,a){"use strict";a(24),a(184),a(687);var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(7),l=a(23),d=a(33),u=a(66),o=a(51),b=a(297),j=a(25),x=new b.a;Object(u.b)("version")(Object(u.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,n=e.version,u=e.chainId,b=e.address,m=e.symbolId,O=e.lang,v=Object(i.useState)({}),p=Object(r.a)(v,2),f=p[0],h=p[1],y=Object(i.useState)({}),N=Object(r.a)(y,2),k=N[0],g=N[1],w=Object(d.useHistory)(),I=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getUserInfoAll)(a.account);case 2:return t=e.sent,e.next=5,Object(l.getUserInfoInPool)(u,b,a.account);case 5:n=e.sent,s=(+t.trade).toFixed(2),r=n.volume1h,h({harvestDeriTrade:s,myTradingVolumeCurrent:r});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolInfoApy)(u,b);case 2:t=e.sent,a=t.volume1h,g({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return a&&a.account&&(I(),S()),function(){}}),[]),Object(j.jsxs)("div",{className:"liquidity-box",children:[Object(j.jsx)("div",{className:"odd title",children:O["trade-to-earn-deri"]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:O["total-trading-volume-in-current-hour"]}),Object(j.jsx)("div",{className:"text-num",children:k.totalTradingVolumeCurrent||0})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:O["my-trading-volume-in-current-hour"]}),Object(j.jsx)("div",{className:"text-num",children:f.myTradingVolumeCurrent||0})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsx)("div",{className:"odd claim-network"}),Object(j.jsx)("div",{className:"claim-btn",children:Object(j.jsx)("button",{className:"claim",onClick:function(){var e=x.load(n),t=n.isV1?e.find((function(e){return Object(o.c)(e.pool,b)})):e.find((function(e){return Object(o.c)(e.pool,b)&&e.symbolId===m}));Object(o.o)(n.current,t),w.push("/lite")},children:O.trade})})]})})))},723:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(189),s=(n=c)&&n.__esModule?n:{default:n};t.default=s.default,e.exports=t.default}}]);
//# sourceMappingURL=4.f9c4cee5.chunk.js.map