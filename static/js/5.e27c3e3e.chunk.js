(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[5],{597:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(0),n=a.n(c),s=a(1),i=a(21),r=a(5),l=a(55);function d(e){var t=e.btnText,a=e.className,c=e.disabled,d=e.click,o=e.afterClick,u=e.checkApprove,j=e.wallet,b=e.spec,x=e.lang,m=Object(r.useState)(c?"disabled":"enabled"),O=Object(i.a)(m,2),p=O[0],v=O[1],f=Object(r.useState)(!0),h=Object(i.a)(f,2),y=h[0],N=h[1],k=Object(r.useState)(!1),g=Object(i.a)(k,2),w=g[0],I=g[1],S=Object(r.useState)(t),q=Object(i.a)(S,2),C=q[0],T=q[1],L=Object(r.useRef)(null),E=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===p){e.next=2;break}return e.abrupt("return");case 2:return A(),e.next=5,d();case 5:e.sent&&o&&o(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){v("disabled"),I(!0),L.current&&(L.current.style.display="inline-block")},F=function(){L.current&&(L.current.style.display="none"),v("enabled"),I(!1)},P=function(){var e=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.next=3,j.approve(b.pool,b.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(x["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return P(),function(){}}),[j,b,u]),Object(r.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(l.jsxs)("button",{className:a,onClick:function(){y?E():D()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:L,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?x.pending:y?C:x.approve]})}},599:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(5),n=a(600),s=a(55);function i(e){const[t,a]=Object(c.useState)("--");return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&a(Object(s.jsx)(n.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},603:function(e,t,a){"use strict";var c=a(107),n=a(8),s=a(9),i=a(17),r=a(16),l=a(5),d=a.n(l),o=a(612),u=a.n(o),j=a(88),b=a(55);t.a=function(e){var t=document.getElementById("root"),a={overlay:{position:"fixed",zIndex:1,background:"rgb(0 0 0 / 0.5)"},content:{position:"absolute",border:0,background:"none",inset:0,overflow:"initial"}},l=function(l){Object(i.a)(o,l);var d=Object(r.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=d.call(this,e)).state={modalIsOpen:!1},t}return Object(s.a)(o,[{key:"render",value:function(){var n=this.props,s=n.modalIsOpen,i=n.className,r=n.overlay,l=void 0===r?{}:r,d=Object.assign(a.overlay,Object(c.a)({},l)),o=Object.assign(a,{overlay:d});return Object(b.jsx)(u.a,{isOpen:s,style:o,appElement:t,portalClassName:this.props.intl.locale,children:Object(b.jsx)("div",{className:i,children:Object(b.jsx)(e,Object(c.a)(Object(c.a)({},this.props),{},{className:i,onClose:this.props.onClose}))})})}}]),o}(d.a.Component);return Object(j.b)("intl")(Object(j.c)(l))}},604:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(5);function n(e){return Object(c.useEffect)((()=>(document.querySelector("body").style.overflow="hidden",()=>{e||(document.querySelector("body").style.overflow="auto")})),[]),null}},622:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(5),n=a(24);function s(e){const[t,a]=Object(c.useState)({});let s=null;const i=async()=>{if(e.isConnected()){const t=await Object(n.getUserInfoAll)(e.detail.account),c=(+t.total).toFixed(2),s=t.valid?(+t.amount).toFixed(2):0,i=(+t.lp).toFixed(2),r=(+t.trade).toFixed(2),l=t.chainId;a({claimed:c,unclaimed:s,harvestDeriLp:i,harvestDeriTrade:r,chainId:l})}};return Object(c.useEffect)((()=>(s=window.setInterval(i,18e4),i(),()=>clearInterval(s))),[e.detail.account]),[t,s]}},641:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var c=a(0),n=a.n(c),s=a(1),i=a(21),r=a(5),l=a(622),d=a(609),o=a(24),u=a(597),j=a(43),b=a(599),x=a(55);function m(e){var t=e.wallet,a=e.miningClaim,c=e.tradingClaim,m=e.lang,O=Object(r.useState)(m["connect-wallet"]),p=Object(i.a)(O,2),v=p[0],f=p[1],h=Object(r.useState)(!1),y=Object(i.a)(h,2),N=y[0],k=y[1],g=Object(l.a)(t),w=Object(i.a)(g,2),I=w[0],S=w[1],q=Object(r.useState)(""),C=Object(i.a)(q,2),T=C[0],L=C[1],E=Object(d.a)(I.chainId),A=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(j.c)(t.detail.chainId,I.chainId)){e.next=3;break}return alert("".concat(m["your-deri-is-on"]," ").concat(E.text," ").concat(m["connect-to"]," ").concat(E.text," ").concat(m["to-claim"])),e.abrupt("return");case 3:if(0!==+I.unclaimed){e.next=6;break}return alert(m["no-deri-to-claim-yet"]),e.abrupt("return");case 6:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=10;break}return alert(m["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 10:return e.next=12,Object(o.mintDToken)(t.detail.chainId,t.detail.account);case 12:if(!e.sent.success){e.next=18;break}return clearInterval(S),e.abrupt("return",!0);case 18:return alert(m["claim-failed"]),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=7;break}return e.next=3,A();case 3:e.sent&&k(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,t.connect();case 10:return a=e.sent,e.abrupt("return",!!a);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=null;return a&&(e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,c=parseInt(a/3600),n=parseInt(a%3600/60),s=parseInt(a%60);L("".concat(c," ").concat(m.h," ").concat(n," ").concat(m.m," ").concat(s," ").concat(m.s))}),1e3)),t.isConnected()?f(m.claim):f(m["collect-wallet"]),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(x.jsxs)("div",{className:"claim-box",children:[Object(x.jsx)("div",{className:"odd title",children:a?m["my-liquidity-providing-harvest-in-current-epoch"]:m["my-trading-harvest-in-current-epoch"]}),a&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["current-epoch-remaining-time"]}),Object(x.jsx)("div",{className:"text-num",children:T})]}),Object(x.jsxs)("div",{className:"odd text",children:[a&&Object(x.jsx)("div",{className:"text-title",children:m["my-harvest-in-current-epoch-estimated"]}),c&&Object(x.jsx)("div",{className:"text-title",children:m["my-trading-harvest-in-current-epoch-Est"]}),Object(x.jsxs)("div",{className:"text-num",children:[a?I.harvestDeriLp:I.harvestDeriTrade," ",m.deri]})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["claimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:N?(+I.claimed+ +I.unclaimed).toFixed(2):I.claimed})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["unclaimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:N?0:Object(x.jsx)(b.a,{value:I.unclaimed,decimalScale:2})})]}),c&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsx)("div",{className:"odd claim-network",children:a&&Object(x.jsxs)("div",{className:"text-title",children:[m["your-deri-is-on"]," ",E.text,"  ",m["connect-to"]," ",E.text," ",m["to-claim"]]})}),Object(x.jsx)("div",{className:"claim-btn",children:Object(x.jsx)(u.a,{btnText:v,click:F,className:"claim",lang:m})})]})}},645:function(e,t,a){"use strict";var c=a(641),n=a(53),s=a(0),i=a.n(s),r=a(1),l=a(21),d=a(5),o=a(24),u=a(600),j=a(597);a(683);function b({wallet:e,address:t,symbolId:a}){const[c,n]=Object(d.useState)({});return Object(d.useEffect)((()=>((async()=>{if(e.isConnected()&&t){const c=await Object(o.getSpecification)(e.detail.chainId,t,a);n(c)}})(),()=>{})),e.detail.account,t),c}var x=a(604),m=a(599),O=a(55);var p=a(88),v=a(603),f=a(43);var h=Object(v.a)((function(e){var t=e.wallet,a=e.address,c=e.baseToken,n=e.onClose,s=e.afterAdd,p=e.balance,v=e.isLpPool,f=e.baseTokenId,h=e.symbolId,y=e.lang,N=Object(d.useState)("0"),k=Object(l.a)(N,2),g=k[0],w=k[1],I=Object(d.useState)("00"),S=Object(l.a)(I,2),q=S[0],C=S[1],T=Object(d.useState)(""),L=Object(l.a)(T,2),E=L[0],A=L[1],F=b({wallet:t,address:a,symbolId:h});Object(x.a)();var P=function(){var e=Object(r.a)(i.a.mark((function e(){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(o.bg)(p),!Object(o.bg)(E).gt(c)){e.next=5;break}return alert(y["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(F&&+E<+F.minAddLiquidity)){e.next=8;break}return alert("".concat(y["the-input-liquidity-shall-not-be-less-than"]," ").concat(F.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(E<=0||isNaN(E))){e.next=11;break}return alert(y["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 11:if(n=null,!v){e.next=18;break}return e.next=15,Object(o.addLpLiquidity)(t.detail.chainId,a,t.detail.account,E);case 15:n=e.sent,e.next=21;break;case 18:return e.next=20,Object(o.addLiquidity)(t.detail.chainId,a,t.detail.account,E,f);case 20:n=e.sent;case 21:return n&&n.success||alert(y["failure-of-transaction"]),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){var e=(+p).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return w(e),C(t),function(){}}),[p]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:y["add-liquidity"]}),Object(O.jsx)("div",{className:"close",onClick:n,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsx)("div",{children:y["wallet-balance"]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(u.a,{displayType:"text",value:g,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(O.jsx)("span",{className:"float",children:Object(O.jsx)(u.a,{displayType:"text",value:q,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(O.jsx)("div",{className:"base-token",children:c})]}),Object(O.jsx)("span",{className:"add"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:E?"block":"none"},children:y.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:y.liquidity,value:E,onChange:function(e){var t=e.target.value;A(t)}})]})}),Object(O.jsx)("div",{children:c})]}),Object(O.jsxs)("div",{className:"max",children:[y.max,": ",Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(m.a,{value:p,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){A(p)},children:y["add-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{className:"margin-btn",click:P,btnText:y.add,afterClick:s,lang:y})})]})})]})})})),y=Object(v.a)((function(e){var t=e.wallet,a=e.address,c=e.liqInfo,n=e.onClose,s=e.afterRemove,b=e.isLpPool,p=e.baseTokenId,v=e.unit,f=e.lang,h=e.version,y=Object(d.useState)(""),N=Object(l.a)(y,2),k=N[0],g=N[1],w=Object(d.useState)("0"),I=Object(l.a)(w,2),S=I[0],q=I[1],C=Object(d.useState)("00"),T=Object(l.a)(C,2),L=T[0],E=T[1];Object(x.a)();var A=function(){var e=Object(r.a)(i.a.mark((function e(){var n,s,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(o.bg)(c.totalShares),!(s=Object(o.bg)(k)).gt(n)){e.next=5;break}return alert("".concat(f["your-current-max-removable-shares-are"],"  ").concat(c.totalShares)),e.abrupt("return",!1);case 5:if(b||"v1"!==h){e.next=10;break}if(!((r=+c.totalShares-+k)<1&&r>0)){e.next=10;break}return alert(f["staking-max-limit-tip"]),e.abrupt("return",!1);case 10:if(!(+k<=0||isNaN(k))){e.next=13;break}return alert(f["invalid-liquidity"]),e.abrupt("return",!1);case 13:if(l=null,!b){e.next=20;break}return e.next=17,Object(o.removeLpLiquidity)(t.detail.chainId,a,t.detail.account,k);case 17:l=e.sent,e.next=23;break;case 20:return e.next=22,Object(o.removeLiquidity)(t.detail.chainId,a,t.detail.account,k,p,n.eq(s));case 22:l=e.sent;case 23:if(l&&l.success){e.next=26;break}return alert(f["failure-of-transaction"]),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){if(c&&c.formatShares){var e=c.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);q(e),E(t)}return function(){}}),[c.totalShares]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:f["remove-liquidity"]}),Object(O.jsx)("div",{className:"close","data-dismiss":"modal",onClick:n,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsxs)("div",{children:[" ","v1"===h?f["shares-available"]:f["liquidity-available"]]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsx)("span",{children:Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(u.a,{displayType:"text",value:S,decimalScale:0,thousandSeparator:!0}),".",Object(O.jsx)("span",{className:"float",children:L})]})}),Object(O.jsx)("span",{className:"remove"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:k?"block":"none"},children:"v1"===h?f["liquidity-shares"]:f.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:"v1"===h?f["liquidity-shares"]:f.liquidity,value:k,onChange:function(e){var t=e.target.value;g(t)}})]})}),Object(O.jsx)("div",{children:v})]}),Object(O.jsxs)("div",{className:"max",children:[Object(O.jsx)("span",{children:f["max-removeable"]}),Object(O.jsx)("span",{className:"max-num",children:Object(O.jsx)(m.a,{value:c.totalShares,decimalScale:8})}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){g(c.totalShares)},children:f["remove-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{click:A,className:"margin-btn",btnText:f.remove,afterClick:s,lang:f})})]})})]})})})),N=function(e){var t=e.version,a=e.wallet,c=e.chainId,s=e.address,u=e.baseToken,b=e.isLpPool,x=e.liqInfo,m=e.loadLiqidityInfo,p=e.baseTokenId,v=e.symbolId,N=e.lang,k=Object(d.useState)(!1),g=Object(l.a)(k,2),w=g[0],I=g[1],S=Object(d.useState)("add"),q=Object(l.a)(S,2),C=q[0],T=q[1],L=Object(d.useState)(!1),E=Object(l.a)(L,2),A=E[0],F=E[1],P=Object(d.useState)(""),D=Object(l.a)(P,2),Z=D[0],V=D[1],B=Object(d.useState)(null),R=Object(l.a)(B,2),U=R[0],_=R[1],M=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!Object(f.c)(a.detail.chainId,c)){e.next=12;break}if(t=null,!b){e.next=8;break}return e.next=5,Object(o.getLpWalletBalance)(a.detail.chainId,s,a.detail.account);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,Object(o.getWalletBalance)(a.detail.chainId,s,a.detail.account,p);case 10:t=e.sent;case 11:"object"!==Object(n.a)(t)&&V(t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){return M(),m(),function(){}}),[a.detail.account]);var z=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=8;break}return e.next=3,Object(o.isLpUnlocked)(c,s,a.detail.account);case 3:return t=e.sent,I(t),e.abrupt("return",t);case 8:return e.next=10,Object(o.isUnlocked)(c,s,a.detail.account,p);case 10:return n=e.sent,I(n),e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!b){e.next=7;break}return e.next=4,Object(o.unlockLp)(c,s,a.detail.account);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(o.unlock)(c,s,a.detail.account,p);case 9:t=e.sent;case 10:t&&t.success?I(!0):alert(t.error&&t.error.message||N["approve-failed"]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.connect();case 3:return t=e.sent,e.abrupt("return",!!t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),H=function(){F(!0),T("add")},K=function(){F(!1),M(),m(),a.refresh()},Y=function(){F(!0),T("remove")};return Object(d.useEffect)((function(){return a.isConnected()&&Object(f.c)(a.detail.chainId,c)&&z(),function(){}}),[a.detail.account]),Object(d.useEffect)((function(){if(a.isConnected()&&Object(f.c)(a.detail.chainId,c)&&w)_(Object(O.jsxs)("div",{className:"add-remove-liquidity",children:[Object(O.jsx)("button",{className:"add-liquidity",onClick:H,children:N["add-liquidity"]}),Object(O.jsx)("button",{className:"remove-liquidity",onClick:Y,children:N["remove-liquidity"]})]}));else{var e=null;a.isConnected()?Object(f.c)(a.detail.chainId,c)?w||(e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:J,btnText:N.approve,lang:N})})):(a.switchNetwork({id:c}),e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn wrong-network",btnText:N["wrong-network"],lang:N,click:function(){return a.switchNetwork({id:c})}})})):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:W,btnText:N["connect-wallet"],lang:N})}),_(e)}return function(){}}),[a.detail.account,w]),Object(O.jsxs)("div",{className:"liquidity-btn",children:["add"===C?Object(O.jsx)(h,{modalIsOpen:A,isLpPool:b,onClose:K,balance:Z,address:s,wallet:a,baseToken:u,afterAdd:K,baseTokenId:p,symbolId:v,lang:N}):Object(O.jsx)(y,{modalIsOpen:A,isLpPool:b,onClose:K,liqInfo:x,address:s,wallet:a,version:t,unit:"v1"===t?N.shares:u,afterRemove:K,baseTokenId:p,symbolId:v,lang:N}),U]})},k=Object(p.b)("wallet")(Object(p.c)((function(e){var t=e.wallet,a=e.version,c=e.chainId,n=e.baseToken,s=e.address,u=e.type,j=e.baseTokenId,b=e.symbolId,x=e.lang,p=Object(d.useState)({}),v=Object(l.a)(p,2),h=v[0],y=v[1],k=Object(d.useState)(n),g=Object(l.a)(k,2),w=g[0],I=g[1],S="lp"===u,q=function(){var e=Object(r.a)(i.a.mark((function e(){var r,l,d,u,b,m,O,p,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolInfoApy)(c,s,j);case 2:return r=e.sent,e.next=5,Object(o.getPoolLiquidity)(c,s,j);case 5:if(l=e.sent,!t.isConnected()||!Object(f.c)(c,t.detail.chainId)){e.next=25;break}if(d=null,!S){e.next=14;break}return e.next=11,Object(o.getLpLiquidityInfo)(c,s,t.detail.account);case 11:d=e.sent,e.next=17;break;case 14:return e.next=16,Object(o.getLiquidityInfo)(c,s,t.detail.account,j);case 16:d=e.sent;case 17:if(!Object(f.k)(s)){e.next=22;break}return e.next=20,Object(o.getLpPoolInfoApy)(c,s);case 20:b=e.sent,u=100*+b.apy2;case 22:d&&(m=d.shares?Object(o.bg)(d.shares):Object(o.bg)(0),"v1"===a?(O=m.isNaN()?m.multipliedBy(d.shareValue):Object(o.bg)(0),y({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?O.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:m.toFixed(2),formatShares:m.toFixed(2),totalShares:Object(o.bg)(m).toString(),values:O.toFixed(2),lpApy:u,unit:x.shares,sharesTitle:x["staked-balance"]})):y({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),shares:m.toString(),formatShares:Object(o.bg)(m).plus(d.pnl).toFixed(2),totalShares:Object(o.bg)(m).plus(d.pnl).toString(),percent:d.poolLiquidity>0?m.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:n,sharesTitle:x["my-Liquidity"],multiplier:"".concat(r.multiplier,"x")})),e.next=31;break;case 25:if(!Object(f.k)(s)){e.next=30;break}return e.next=28,Object(o.getLpPoolInfoApy)(c,s);case 28:v=e.sent,p=100*+v.apy2;case 30:l&&y({total:l.liquidity,apy:100*+r.apy,lpApy:p});case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){return q(),Object(f.j)(s)&&I("CAKE-LP"),function(){}}),[t.detail.account,n]),Object(O.jsxs)("div",{className:"liquidity-box",children:[Object(O.jsxs)("div",{className:"odd title",children:[x.provide," ",w," ",x["earn-deri"]]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["pool-total-liquidity"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,value:h.total,suffix:" ".concat(w),thousandSeparator:!0})})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.multiplier}),Object(O.jsx)("div",{className:"text-num multiplier",title:x["multiplier-tip"],children:h.multiplier})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.apy}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)("span",{title:Object(f.k)(s)&&"DERI-APY",className:"".concat(Object(f.k)(s)&&"sushi-apy-underline"),children:Object(O.jsx)(m.a,{value:h.apy,decimalScale:2,suffix:"%"})}),Object(f.k)(s)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" +"})," ",Object(O.jsx)("span",{className:"sushi-apy-underline text-num",title:Object(f.l)(s)?x["sushi-apy"]:x["cake-apy"],children:Object(O.jsx)(m.a,{value:h.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),"v1"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["liquidity-share-value"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,decimalScale:6,value:h.shareValue,suffix:" "+w,thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["my-liquidity-pencentage"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(m.a,{allowZero:!0,value:h.percent,decimalScale:2,suffix:"%"})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsxs)("div",{className:"text-title",children:[h.sharesTitle," "]}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)(m.a,{allowZero:!0,value:h.formatShares,decimalScale:2})," ",Object(O.jsx)("span",{children:h.unit})," "]})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text claim-network",children:[Object(O.jsx)("div",{className:"text-title",children:x["mining-pnl"]}),Object(O.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(O.jsx)(m.a,{allowZero:!0,prefix:" ",value:h.pnl,decimalScale:2,suffix:" "+w})]})]}),"v1"===a&&Object(O.jsx)("div",{className:"odd claim-network",children:Object(O.jsxs)("div",{className:"text-title money",children:[" ",Object(O.jsx)(m.a,{allowZero:!0,value:h.values,suffix:" "+w,decimalScale:2})]})}),Object(O.jsx)(N,{version:a,wallet:t,chainId:c,address:s,liqInfo:h,baseToken:w,isLpPool:S,loadLiqidityInfo:q,symbolId:b,baseTokenId:j,lang:x})]})})));t.a=function(e){return Object(O.jsxs)("div",{className:"liquidity-info",children:[Object(O.jsx)(c.a,{...e,miningClaim:!0}),Object(O.jsx)(k,{...e})]})}},646:function(e,t,a){"use strict";a(107),a(167),a(641);var c=a(0),n=a.n(c),s=a(1),i=a(21),r=a(5),l=a(24),d=a(30),o=a(88),u=a(43),j=a(268),b=a(55),x=new j.a;Object(o.b)("version")(Object(o.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,c=e.version,o=e.chainId,j=e.address,m=e.symbolId,O=e.lang,p=Object(r.useState)({}),v=Object(i.a)(p,2),f=v[0],h=v[1],y=Object(r.useState)({}),N=Object(i.a)(y,2),k=N[0],g=N[1],w=Object(d.useHistory)(),I=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getUserInfoAll)(a.account);case 2:return t=e.sent,e.next=5,Object(l.getUserInfoInPool)(o,j,a.account);case 5:c=e.sent,s=(+t.trade).toFixed(2),i=c.volume1h,h({harvestDeriTrade:s,myTradingVolumeCurrent:i});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getPoolInfoApy)(o,j);case 2:t=e.sent,a=t.volume1h,g({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return a&&a.account&&(I(),S()),function(){}}),[]),Object(b.jsxs)("div",{className:"liquidity-box",children:[Object(b.jsx)("div",{className:"odd title",children:O["trade-to-earn-deri"]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:O["total-trading-volume-in-current-hour"]}),Object(b.jsx)("div",{className:"text-num",children:k.totalTradingVolumeCurrent||0})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:O["my-trading-volume-in-current-hour"]}),Object(b.jsx)("div",{className:"text-num",children:f.myTradingVolumeCurrent||0})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsx)("div",{className:"odd claim-network"}),Object(b.jsx)("div",{className:"claim-btn",children:Object(b.jsx)("button",{className:"claim",onClick:function(){var e=x.load(c),t=c.isV1?e.find((function(e){return Object(u.c)(e.pool,j)})):e.find((function(e){return Object(u.c)(e.pool,j)&&e.symbolId===m}));Object(u.o)(c.current,t),w.push("/lite")},children:O.trade})})]})})))},683:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c,n=a(612),s=(c=n)&&c.__esModule?c:{default:c};t.default=s.default,e.exports=t.default}}]);
//# sourceMappingURL=5.e27c3e3e.chunk.js.map