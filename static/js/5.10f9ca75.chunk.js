(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[5],{631:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(8),l=a(63);function d(e){var t=e.btnText,a=e.className,n=e.disabled,d=e.click,o=e.afterClick,u=e.checkApprove,b=e.wallet,j=e.spec,x=e.lang,m=Object(i.useState)(n?"disabled":"enabled"),O=Object(r.a)(m,2),p=O[0],v=O[1],f=Object(i.useState)(!0),h=Object(r.a)(f,2),y=h[0],N=h[1],k=Object(i.useState)(!1),g=Object(r.a)(k,2),w=g[0],I=g[1],S=Object(i.useState)(t),q=Object(r.a)(S,2),C=q[0],T=q[1],L=Object(i.useRef)(null),E=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===p){e.next=2;break}return e.abrupt("return");case 2:return A(),e.next=5,d();case 5:e.sent&&o&&o(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){v("disabled"),I(!0),L.current&&(L.current.style.display="inline-block")},F=function(){L.current&&(L.current.style.display="none"),v("enabled"),I(!1)},P=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.next=3,b.approve(j.pool,j.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(x["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return P(),function(){}}),[b,j,u]),Object(i.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(l.jsxs)("button",{className:a,onClick:function(){y?E():Z()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:L,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?x.pending:y?C:x.approve]})}},632:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(25),c=a(183),s=a(14),r=a(8),i=a(633),l=a(63);function d(e){var t=Object(r.useState)("--"),a=Object(s.a)(t,2),d=a[0],o=a[1];return Object(r.useEffect)((function(){var t=e.allowZero,a=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&o(Object(l.jsx)(i.a,Object(n.a)(Object(n.a)({},a),{},{displayType:"text"}))),function(){}}),[e.value]),d}},635:function(e,t,a){"use strict";var n=a(25),c=a(4),s=a(5),r=a(11),i=a(10),l=a(8),d=a.n(l),o=a(645),u=a.n(o),b=a(104),j=a(63);t.a=function(e){var t=document.getElementById("root"),a={overlay:{position:"fixed",zIndex:1,background:"rgb(0 0 0 / 0.5)"},content:{position:"absolute",border:0,background:"none",inset:0,overflow:"initial"}},l=function(l){Object(r.a)(o,l);var d=Object(i.a)(o);function o(e){var t;return Object(c.a)(this,o),(t=d.call(this,e)).state={modalIsOpen:!1},t}return Object(s.a)(o,[{key:"render",value:function(){var c=this.props,s=c.modalIsOpen,r=c.className,i=c.overlay,l=void 0===i?{}:i,d=Object.assign(a.overlay,Object(n.a)({},l)),o=Object.assign(a,{overlay:d});return Object(j.jsx)(u.a,{isOpen:s,style:o,appElement:t,portalClassName:this.props.intl.locale,children:Object(j.jsx)("div",{className:r,children:Object(j.jsx)(e,Object(n.a)(Object(n.a)({},this.props),{},{className:r,onClose:this.props.onClose}))})})}}]),o}(d.a.Component);return Object(b.b)("intl")(Object(b.c)(l))}},638:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(8);function c(e){return Object(n.useEffect)((function(){return document.querySelector("body").style.overflow="hidden",function(){e||(document.querySelector("body").style.overflow="auto")}}),[]),null}},656:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(8),l=a(23);function d(e){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],d=a[1],o=null,u=function(){var t=Object(s.a)(c.a.mark((function t(){var a,n,s,r,i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(l.getUserInfoAll)(e.detail.account);case 3:a=t.sent,n=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,r=(+a.lp).toFixed(2),i=(+a.trade).toFixed(2),o=a.chainId,d({claimed:n,unclaimed:s,harvestDeriLp:r,harvestDeriTrade:i,chainId:o});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){return o=window.setInterval(u,18e4),u(),function(){return clearInterval(o)}}),[e.detail.account]),[n,o]}},677:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(8),l=a(656),d=a(637),o=a(23),u=a(631),b=a(49),j=a(632),x=a(63);function m(e){var t=e.wallet,a=e.miningClaim,n=e.tradingClaim,m=e.lang,O=Object(i.useState)(m["connect-wallet"]),p=Object(r.a)(O,2),v=p[0],f=p[1],h=Object(i.useState)(!1),y=Object(r.a)(h,2),N=y[0],k=y[1],g=Object(l.a)(t),w=Object(r.a)(g,2),I=w[0],S=w[1],q=Object(i.useState)(""),C=Object(r.a)(q,2),T=C[0],L=C[1],E=Object(d.a)(I.chainId),A=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==E.name){e.next=3;break}return alert("".concat(m["wrong-network"])),e.abrupt("return");case 3:if(Object(b.c)(t.detail.chainId,I.chainId)){e.next=6;break}return alert("".concat(m["your-deri-is-on"]," ").concat(E.name," ").concat(m["connect-to"]," ").concat(E.name," ").concat(m["to-claim"])),e.abrupt("return");case 6:if(0!==+I.unclaimed){e.next=9;break}return alert(m["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return alert(m["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,Object(o.mintDToken)(t.detail.chainId,t.detail.account);case 15:if(!e.sent.success){e.next=21;break}return clearInterval(S),e.abrupt("return",!0);case 21:return alert(m["claim-failed"]),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=7;break}return e.next=3,A();case 3:e.sent&&k(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,t.connect();case 10:return a=e.sent,e.abrupt("return",!!a);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=null;return a&&(e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,n=parseInt(a/3600),c=parseInt(a%3600/60),s=parseInt(a%60);L("".concat(n," ").concat(m.h," ").concat(c," ").concat(m.m," ").concat(s," ").concat(m.s))}),1e3)),t.isConnected()?f(m.claim):f(m["collect-wallet"]),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(x.jsxs)("div",{className:"claim-box",children:[Object(x.jsx)("div",{className:"odd title",children:a?m["my-liquidity-providing-harvest-in-current-epoch"]:m["my-trading-harvest-in-current-epoch"]}),a&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["current-epoch-remaining-time"]}),Object(x.jsx)("div",{className:"text-num",children:T})]}),Object(x.jsxs)("div",{className:"odd text",children:[a&&Object(x.jsx)("div",{className:"text-title",children:m["my-harvest-in-current-epoch-estimated"]}),n&&Object(x.jsx)("div",{className:"text-title",children:m["my-trading-harvest-in-current-epoch-Est"]}),Object(x.jsxs)("div",{className:"text-num",children:[a?I.harvestDeriLp:I.harvestDeriTrade," ",m.deri]})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["claimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:N?(+I.claimed+ +I.unclaimed).toFixed(2):I.claimed})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["unclaimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:N?0:Object(x.jsx)(j.a,{value:I.unclaimed,decimalScale:2})})]}),n&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsx)("div",{className:"odd claim-network",children:a&&Object(x.jsxs)("div",{className:"text-title",children:[m["your-deri-is-on"]," ",E.name,"  ",m["connect-to"]," ",E.name," ",m["to-claim"]]})}),Object(x.jsx)("div",{className:"claim-btn",children:Object(x.jsx)(u.a,{btnText:v,click:F,className:"claim",lang:m})})]})}},681:function(e,t,a){"use strict";var n=a(25),c=a(677),s=a(44),r=a(0),i=a.n(r),l=a(1),d=a(14),o=a(8),u=a(23),b=a(633),j=a(631);a(722);var x=a(638),m=a(632),O=a(63);var p=a(104),v=a(635),f=a(49);var h=Object(v.a)((function(e){var t=e.wallet,a=e.address,n=e.baseToken,c=e.onClose,s=e.afterAdd,r=e.balance,p=e.isLpPool,v=e.baseTokenId,f=e.symbolId,h=e.lang,y=Object(o.useState)("0"),N=Object(d.a)(y,2),k=N[0],g=N[1],w=Object(o.useState)("00"),I=Object(d.a)(w,2),S=I[0],q=I[1],C=Object(o.useState)(""),T=Object(d.a)(C,2),L=T[0],E=T[1],A=function(e){var t=e.wallet,a=e.address,n=e.symbolId,c=Object(o.useState)({}),s=Object(d.a)(c,2),r=s[0],b=s[1],j=function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(u.getSpecification)(t.detail.chainId,a,n);case 3:c=e.sent,b(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return j(),function(){}}),t.detail.account,a),r}({wallet:t,address:a,symbolId:f});Object(x.a)();var F=function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(u.bg)(r),!Object(u.bg)(L).gt(n)){e.next=5;break}return alert(h["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(A&&+L<+A.minAddLiquidity)){e.next=8;break}return alert("".concat(h["the-input-liquidity-shall-not-be-less-than"]," ").concat(A.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(L<=0||isNaN(L))){e.next=11;break}return alert(h["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 11:if(c=null,!p){e.next=18;break}return e.next=15,Object(u.addLpLiquidity)(t.detail.chainId,a,t.detail.account,L);case 15:c=e.sent,e.next=21;break;case 18:return e.next=20,Object(u.addLiquidity)(t.detail.chainId,a,t.detail.account,L,v);case 20:c=e.sent;case 21:return c&&c.success||alert(h["failure-of-transaction"]),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e=(+r).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return g(e),q(t),function(){}}),[r]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:h["add-liquidity"]}),Object(O.jsx)("div",{className:"close",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsx)("div",{children:h["wallet-balance"]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:k,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(O.jsx)("span",{className:"float",children:Object(O.jsx)(b.a,{displayType:"text",value:S,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(O.jsx)("div",{className:"base-token",children:n})]}),Object(O.jsx)("span",{className:"add"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:L?"block":"none"},children:h.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:h.liquidity,value:L,onChange:function(e){var t=e.target.value;E(t)}})]})}),Object(O.jsx)("div",{children:n})]}),Object(O.jsxs)("div",{className:"max",children:[h.max,": ",Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(m.a,{value:r,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){E(r)},children:h["add-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{className:"margin-btn",click:F,btnText:h.add,afterClick:s,lang:h})})]})})]})})})),y=Object(v.a)((function(e){var t=e.wallet,a=e.address,n=e.liqInfo,c=e.onClose,s=e.afterRemove,r=e.isLpPool,p=e.baseTokenId,v=e.unit,f=e.lang,h=e.version,y=Object(o.useState)(""),N=Object(d.a)(y,2),k=N[0],g=N[1],w=Object(o.useState)("0"),I=Object(d.a)(w,2),S=I[0],q=I[1],C=Object(o.useState)("00"),T=Object(d.a)(C,2),L=T[0],E=T[1];Object(x.a)();var A=function(){var e=Object(l.a)(i.a.mark((function e(){var c,s,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(u.bg)(n.totalShares),!(s=Object(u.bg)(k)).gt(c)){e.next=5;break}return alert("".concat(f["your-current-max-removable-shares-are"],"  ").concat(n.totalShares)),e.abrupt("return",!1);case 5:if(r||"v1"!==h){e.next=10;break}if(!((l=+n.totalShares-+k)<1&&l>0)){e.next=10;break}return alert(f["staking-max-limit-tip"]),e.abrupt("return",!1);case 10:if(!(+k<=0||isNaN(k))){e.next=13;break}return alert(f["invalid-liquidity"]),e.abrupt("return",!1);case 13:if(d=null,!r){e.next=20;break}return e.next=17,Object(u.removeLpLiquidity)(t.detail.chainId,a,t.detail.account,k);case 17:d=e.sent,e.next=23;break;case 20:return e.next=22,Object(u.removeLiquidity)(t.detail.chainId,a,t.detail.account,k,p,c.eq(s));case 22:d=e.sent;case 23:if(d&&d.success){e.next=26;break}return alert(f["failure-of-transaction"]),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){if(n&&n.formatShares){var e=n.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);q(e),E(t)}return function(){}}),[n.totalShares]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:f["remove-liquidity"]}),Object(O.jsx)("div",{className:"close","data-dismiss":"modal",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsxs)("div",{children:[" ","v1"===h?f["shares-available"]:f["liquidity-available"]]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsx)("span",{children:Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:S,decimalScale:0,thousandSeparator:!0}),".",Object(O.jsx)("span",{className:"float",children:L})]})}),Object(O.jsx)("span",{className:"remove"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:k?"block":"none"},children:"v1"===h?f["liquidity-shares"]:f.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:"v1"===h?f["liquidity-shares"]:f.liquidity,value:k,onChange:function(e){var t=e.target.value;g(t)}})]})}),Object(O.jsx)("div",{children:v})]}),Object(O.jsxs)("div",{className:"max",children:[Object(O.jsx)("span",{children:f["max-removeable"]}),Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(m.a,{value:n.totalShares,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){g(n.totalShares)},children:f["remove-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{click:A,className:"margin-btn",btnText:f.remove,afterClick:s,lang:f})})]})})]})})})),N=function(e){var t=e.version,a=e.wallet,n=e.chainId,c=e.address,r=e.baseToken,b=e.isLpPool,x=e.liqInfo,m=e.loadLiqidityInfo,p=e.baseTokenId,v=e.symbolId,N=e.lang,k=Object(o.useState)(!1),g=Object(d.a)(k,2),w=g[0],I=g[1],S=Object(o.useState)("add"),q=Object(d.a)(S,2),C=q[0],T=q[1],L=Object(o.useState)(!1),E=Object(d.a)(L,2),A=E[0],F=E[1],P=Object(o.useState)(""),Z=Object(d.a)(P,2),D=Z[0],V=Z[1],B=Object(o.useState)(null),_=Object(d.a)(B,2),R=_[0],U=_[1],M=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!Object(f.c)(a.detail.chainId,n)){e.next=12;break}if(t=null,!b){e.next=8;break}return e.next=5,Object(u.getLpWalletBalance)(a.detail.chainId,c,a.detail.account);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,Object(u.getWalletBalance)(a.detail.chainId,c,a.detail.account,p);case 10:t=e.sent;case 11:"object"!==Object(s.a)(t)&&V(t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){return M(),m(),function(){}}),[a.detail.account]);var z=function(){var e=Object(l.a)(i.a.mark((function e(){var t,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=8;break}return e.next=3,Object(u.isLpUnlocked)(n,c,a.detail.account);case 3:return t=e.sent,I(t),e.abrupt("return",t);case 8:return e.next=10,Object(u.isUnlocked)(n,c,a.detail.account,p);case 10:return s=e.sent,I(s),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!b){e.next=7;break}return e.next=4,Object(u.unlockLp)(n,c,a.detail.account);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(u.unlock)(n,c,a.detail.account,p);case 9:t=e.sent;case 10:t&&t.success?I(!0):alert(t.error&&t.error.message||N["approve-failed"]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.connect();case 3:return t=e.sent,e.abrupt("return",!!t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),H=function(){F(!0),T("add")},K=function(){F(!1),M(),m(),a.refresh()},Y=function(){F(!0),T("remove")};return Object(o.useEffect)((function(){return a.isConnected()&&Object(f.c)(a.detail.chainId,n)&&z(),function(){}}),[a.detail.account]),Object(o.useEffect)((function(){if(a.isConnected()&&Object(f.c)(a.detail.chainId,n)&&w)U(Object(O.jsxs)("div",{className:"add-remove-liquidity",children:[Object(O.jsx)("button",{className:"add-liquidity",onClick:H,children:N["add-liquidity"]}),Object(O.jsx)("button",{className:"remove-liquidity",onClick:Y,children:N["remove-liquidity"]})]}));else{var e=null;a.isConnected()?Object(f.c)(a.detail.chainId,n)?w||(e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:J,btnText:N.approve,lang:N})})):(a.switchNetwork({id:n}),e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn wrong-network",btnText:N["wrong-network"],lang:N,click:function(){return a.switchNetwork({id:n})}})})):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:W,btnText:N["connect-wallet"],lang:N})}),U(e)}return function(){}}),[a.detail.account,w]),Object(O.jsxs)("div",{className:"liquidity-btn",children:["add"===C?Object(O.jsx)(h,{modalIsOpen:A,isLpPool:b,onClose:K,balance:D,address:c,wallet:a,baseToken:r,afterAdd:K,baseTokenId:p,symbolId:v,lang:N}):Object(O.jsx)(y,{modalIsOpen:A,isLpPool:b,onClose:K,liqInfo:x,address:c,wallet:a,version:t,unit:"v1"===t?N.shares:r,afterRemove:K,baseTokenId:p,symbolId:v,lang:N}),R]})},k=Object(p.b)("wallet")(Object(p.c)((function(e){var t=e.wallet,a=e.version,n=e.chainId,c=e.baseToken,s=e.address,r=e.type,b=e.baseTokenId,j=e.symbolId,x=e.lang,p=Object(o.useState)({}),v=Object(d.a)(p,2),h=v[0],y=v[1],k=Object(o.useState)(c),g=Object(d.a)(k,2),w=g[0],I=g[1],S="lp"===r,q=function(){var e=Object(l.a)(i.a.mark((function e(){var r,l,d,o,j,m,O,p,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getPoolInfoApy)(n,s,b);case 2:return r=e.sent,e.next=5,Object(u.getPoolLiquidity)(n,s,b);case 5:if(l=e.sent,!t.isConnected()||!Object(f.c)(n,t.detail.chainId)){e.next=25;break}if(d=null,!S){e.next=14;break}return e.next=11,Object(u.getLpLiquidityInfo)(n,s,t.detail.account);case 11:d=e.sent,e.next=17;break;case 14:return e.next=16,Object(u.getLiquidityInfo)(n,s,t.detail.account,b);case 16:d=e.sent;case 17:if(!Object(f.k)(s)){e.next=22;break}return e.next=20,Object(u.getLpPoolInfoApy)(n,s);case 20:j=e.sent,o=100*+j.apy2;case 22:d&&(m=d.shares?Object(u.bg)(d.shares):Object(u.bg)(0),"v1"===a||"v2_lite"===a?(O=m.isNaN()?Object(u.bg)(0):m.multipliedBy(d.shareValue),y({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?O.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:m.toFixed(2),formatShares:m.toFixed(2),totalShares:Object(u.bg)(m).toString(),values:O.toFixed(2),lpApy:o,unit:x.shares,sharesTitle:x["staked-balance"]})):y({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),shares:m.toString(),formatShares:Object(u.bg)(m).plus(d.pnl).toFixed(2),totalShares:Object(u.bg)(m).plus(d.pnl).toString(),percent:d.poolLiquidity>0?m.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:c,sharesTitle:x["my-Liquidity"],multiplier:"".concat(r.multiplier,"x")})),e.next=31;break;case 25:if(!Object(f.k)(s)){e.next=30;break}return e.next=28,Object(u.getLpPoolInfoApy)(n,s);case 28:v=e.sent,p=100*+v.apy2;case 30:l&&y({total:l.liquidity,apy:100*+r.apy,lpApy:p});case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return q(),Object(f.j)(s)&&I("CAKE-LP"),function(){}}),[t.detail.account,c]),Object(O.jsxs)("div",{className:"liquidity-box",children:[Object(O.jsxs)("div",{className:"odd title",children:[x.provide," ",w," ",x["earn-deri"]]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["pool-total-liquidity"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,value:h.total,suffix:" ".concat(w),thousandSeparator:!0})})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.multiplier}),Object(O.jsx)("div",{className:"text-num multiplier",title:x["multiplier-tip"],children:h.multiplier})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.apy}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)("span",{title:Object(f.k)(s)&&"DERI-APY",className:"".concat(Object(f.k)(s)&&"sushi-apy-underline"),children:Object(O.jsx)(m.a,{value:h.apy,decimalScale:2,suffix:"%"})}),Object(f.k)(s)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" +"})," ",Object(O.jsx)("span",{className:"sushi-apy-underline text-num",title:Object(f.l)(s)?x["sushi-apy"]:x["cake-apy"],children:Object(O.jsx)(m.a,{value:h.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),("v1"===a||"v2_lite"===a)&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["liquidity-share-value"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,decimalScale:6,value:h.shareValue,suffix:" "+w,thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["my-liquidity-pencentage"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,value:h.percent,decimalScale:2,suffix:"%"})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsxs)("div",{className:"text-title",children:[h.sharesTitle," "]}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)(m.a,{allowZero:!0,value:h.formatShares,decimalScale:2})," ",Object(O.jsx)("span",{children:h.unit})," "]})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text claim-network",children:[Object(O.jsx)("div",{className:"text-title",children:x["mining-pnl"]}),Object(O.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(O.jsx)(m.a,{allowZero:!0,prefix:" ",value:h.pnl,decimalScale:2,suffix:" "+w})]})]}),("v1"===a||"v2_lite"===a)&&Object(O.jsx)("div",{className:"odd claim-network",children:Object(O.jsxs)("div",{className:"text-title money",children:[" ",Object(O.jsx)(m.a,{allowZero:!0,value:h.values,suffix:" "+w,decimalScale:2})]})}),Object(O.jsx)(N,{version:a,wallet:t,chainId:n,address:s,liqInfo:h,baseToken:w,isLpPool:S,loadLiqidityInfo:q,symbolId:j,baseTokenId:b,lang:x})]})})));t.a=function(e){return Object(O.jsxs)("div",{className:"liquidity-info",children:[Object(O.jsx)(c.a,Object(n.a)(Object(n.a)({},e),{},{miningClaim:!0})),Object(O.jsx)(k,Object(n.a)({},e))]})}},683:function(e,t,a){"use strict";a(25),a(183),a(677);var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(8),l=a(23),d=a(32),o=a(104),u=a(49),b=a(290),j=a(63),x=new b.a;Object(o.b)("version")(Object(o.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,n=e.version,o=e.chainId,b=e.address,m=e.symbolId,O=e.lang,p=Object(i.useState)({}),v=Object(r.a)(p,2),f=v[0],h=v[1],y=Object(i.useState)({}),N=Object(r.a)(y,2),k=N[0],g=N[1],w=Object(d.useHistory)(),I=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getUserInfoAll)(a.account);case 2:return t=e.sent,e.next=5,Object(l.getUserInfoInPool)(o,b,a.account);case 5:n=e.sent,s=(+t.trade).toFixed(2),r=n.volume1h,h({harvestDeriTrade:s,myTradingVolumeCurrent:r});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolInfoApy)(o,b);case 2:t=e.sent,a=t.volume1h,g({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return a&&a.account&&(I(),S()),function(){}}),[]),Object(j.jsxs)("div",{className:"liquidity-box",children:[Object(j.jsx)("div",{className:"odd title",children:O["trade-to-earn-deri"]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:O["total-trading-volume-in-current-hour"]}),Object(j.jsx)("div",{className:"text-num",children:k.totalTradingVolumeCurrent||0})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:O["my-trading-volume-in-current-hour"]}),Object(j.jsx)("div",{className:"text-num",children:f.myTradingVolumeCurrent||0})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsx)("div",{className:"odd claim-network"}),Object(j.jsx)("div",{className:"claim-btn",children:Object(j.jsx)("button",{className:"claim",onClick:function(){var e=x.load(n),t=n.isV1?e.find((function(e){return Object(u.c)(e.pool,b)})):e.find((function(e){return Object(u.c)(e.pool,b)&&e.symbolId===m}));Object(u.o)(n.current,t),w.push("/lite")},children:O.trade})})]})})))},722:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(645),s=(n=c)&&n.__esModule?n:{default:n};t.default=s.default,e.exports=t.default}}]);
//# sourceMappingURL=5.10f9ca75.chunk.js.map