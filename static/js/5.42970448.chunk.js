(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[5],{1146:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c,n=a(159),s=(c=n)&&c.__esModule?c:{default:c};t.default=s.default,e.exports=t.default},617:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(0),n=a.n(c),s=a(1),i=a(12),r=a(5),l=a(18);function d(e){var t=e.btnText,a=e.className,c=e.disabled,d=e.click,o=e.afterClick,u=e.checkApprove,j=e.wallet,b=e.spec,m=e.lang,x=Object(r.useState)(c?"disabled":"enabled"),O=Object(i.a)(x,2),v=O[0],p=O[1],h=Object(r.useState)(!0),f=Object(i.a)(h,2),N=f[0],y=f[1],w=Object(r.useState)(!1),g=Object(i.a)(w,2),k=g[0],I=g[1],S=Object(r.useState)(t),q=Object(i.a)(S,2),T=q[0],_=q[1],C=Object(r.useRef)(null),L=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,d();case 5:e.sent&&o&&o(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){p("disabled"),I(!0),C.current&&(C.current.style.display="inline-block")},F=function(){C.current&&(C.current.style.display="none"),p("enabled"),I(!1)},A=function(){var e=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,j.approve(b.pool,b.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(m["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return A(),function(){}}),[j,b,u]),Object(r.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(l.jsxs)("button",{className:a,onClick:function(){N?L():D()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?m.pending:N?T:m.approve]})}},619:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(5),n=a(621),s=a(18);function i(e){const[t,a]=Object(c.useState)("--");return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&a(Object(s.jsx)(n.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},643:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(5);function n(e){return Object(c.useEffect)((function(){return document.querySelector("body").style.overflow="hidden",function(){e||(document.querySelector("body").style.overflow="auto")}}),[]),null}},721:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(0),n=a.n(c),s=a(1),i=a(12),r=a(5),l=a(13);function d(e){var t=Object(r.useState)({}),a=Object(i.a)(t,2),c=a[0],d=a[1],o=null,u=function(){var t=Object(s.a)(n.a.mark((function t(){var a,c,s,i,r,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(l.L)(e.detail.account);case 3:a=t.sent,c=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,i=(+a.lp).toFixed(2),r=(+a.trade).toFixed(2),o=a.chainId,d({claimed:c,unclaimed:s,harvestDeriLp:i,harvestDeriTrade:r,chainId:o});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){return o=window.setInterval(u,18e4),u(),function(){return clearInterval(o)}}),[e.detail.account]),[c,o]}},818:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var c=a(0),n=a.n(c),s=a(1),i=a(12),r=a(5),l=a(721),d=a(642),o=a(13),u=a(617),j=a(26),b=a(619),m=a(18);function x(e){var t=e.wallet,a=e.miningClaim,c=e.tradingClaim,x=e.lang,O=Object(r.useState)(x["connect-wallet"]),v=Object(i.a)(O,2),p=v[0],h=v[1],f=Object(r.useState)(!1),N=Object(i.a)(f,2),y=N[0],w=N[1],g=Object(l.a)(t),k=Object(i.a)(g,2),I=k[0],S=k[1],q=Object(r.useState)(""),T=Object(i.a)(q,2),_=T[0],C=T[1],L=Object(d.a)(I.chainId),E=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==L.name){e.next=3;break}return alert("".concat(x["wrong-network"])),e.abrupt("return");case 3:if(Object(j.c)(t.detail.chainId,I.chainId)){e.next=6;break}return alert("".concat(x["your-deri-is-on"]," ").concat(L.name," ").concat(x["connect-to"]," ").concat(L.name," ").concat(x["to-claim"])),e.abrupt("return");case 6:if(0!==+I.unclaimed){e.next=9;break}return alert(x["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return alert(x["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,Object(o.bb)(t.detail.chainId,t.detail.account);case 15:if(!e.sent.success){e.next=21;break}return clearInterval(S),e.abrupt("return",!0);case 21:return alert(x["claim-failed"]),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=7;break}return e.next=3,E();case 3:e.sent&&w(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,t.connect();case 10:return a=e.sent,e.abrupt("return",!!a);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=null;return a&&(e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,c=parseInt(a/3600),n=parseInt(a%3600/60),s=parseInt(a%60);C("".concat(c," ").concat(x.h," ").concat(n," ").concat(x.m," ").concat(s," ").concat(x.s))}),1e3)),t.isConnected()?h(x.claim):h(x["collect-wallet"]),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(m.jsxs)("div",{className:"claim-box",children:[Object(m.jsx)("div",{className:"odd title",children:a?x["my-liquidity-providing-harvest-in-current-epoch"]:x["my-trading-harvest-in-current-epoch"]}),a&&Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title",children:x["current-epoch-remaining-time"]}),Object(m.jsx)("div",{className:"text-num",children:_})]}),Object(m.jsxs)("div",{className:"odd text",children:[a&&Object(m.jsx)("div",{className:"text-title",children:x["my-harvest-in-current-epoch-estimated"]}),c&&Object(m.jsx)("div",{className:"text-title",children:x["my-trading-harvest-in-current-epoch-Est"]}),Object(m.jsxs)("div",{className:"text-num",children:[a?I.harvestDeriLp:I.harvestDeriTrade," ",x.deri]})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title",children:x["claimed-deri"]}),Object(m.jsx)("div",{className:"text-num",children:y?(+I.claimed+ +I.unclaimed).toFixed(2):I.claimed})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title"}),Object(m.jsx)("div",{className:"text-num"})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title",children:x["unclaimed-deri"]}),Object(m.jsx)("div",{className:"text-num",children:y?0:Object(m.jsx)(b.a,{value:I.unclaimed,decimalScale:2})})]}),c&&Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title"}),Object(m.jsx)("div",{className:"text-num"})]}),Object(m.jsx)("div",{className:"odd claim-network",children:a&&Object(m.jsxs)("div",{className:"text-title",children:[x["your-deri-is-on"]," ",L.name,"  ",x["connect-to"]," ",L.name," ",x["to-claim"]]})}),Object(m.jsx)("div",{className:"claim-btn",children:Object(m.jsx)(u.a,{btnText:p,click:F,className:"claim",lang:x})})]})}},822:function(e,t,a){"use strict";var c=a(94),n=a(818),s=a(5),i=a(13),r=a(0),l=a.n(r),d=a(1),o=a(12),u=a(621),j=a(617);a(1146);var b=a(643),m=a(619),x=a(18);var O=a(47),v=a(155),p=a(26);const h=Object(v.a)((function(e){var t=e.wallet,a=e.address,c=e.baseToken,n=e.onClose,r=e.afterAdd,O=e.balance,v=e.isLpPool,p=e.baseTokenId,h=e.symbolId,f=e.lang,N=Object(s.useState)("0"),y=Object(o.a)(N,2),w=y[0],g=y[1],k=Object(s.useState)("00"),I=Object(o.a)(k,2),S=I[0],q=I[1],T=Object(s.useState)(""),_=Object(o.a)(T,2),C=_[0],L=_[1],E=function(e){var t=e.wallet,a=e.address,c=e.symbolId,n=Object(s.useState)({}),r=Object(o.a)(n,2),u=r[0],j=r[1],b=function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(i.J)(t.detail.chainId,a,c);case 3:n=e.sent,j(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return b(),function(){}}),t.detail.account,a),u}({wallet:t,address:a,symbolId:h});Object(b.a)();var F=function(){var e=Object(d.a)(l.a.mark((function e(){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(i.g)(O),!Object(i.g)(C).gt(c)){e.next=5;break}return alert(f["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(E&&+C<+E.minAddLiquidity)){e.next=8;break}return alert("".concat(f["the-input-liquidity-shall-not-be-less-than"]," ").concat(E.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(C<=0||isNaN(C))){e.next=11;break}return alert(f["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 11:if(n=null,!v){e.next=18;break}return e.next=15,Object(i.c)(t.detail.chainId,a,t.detail.account,C);case 15:n=e.sent,e.next=21;break;case 18:return e.next=20,Object(i.b)(t.detail.chainId,a,t.detail.account,C,p);case 20:n=e.sent;case 21:return n&&n.success||alert(f["failure-of-transaction"]),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=(+O).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return g(e),q(t),function(){}}),[O]),Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("div",{className:"title",children:f["add-liquidity"]}),Object(x.jsx)("div",{className:"close",onClick:n,children:Object(x.jsx)("span",{children:"\xd7"})})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"margin-box-info",children:[Object(x.jsx)("div",{children:f["wallet-balance"]}),Object(x.jsxs)("div",{className:"money",children:[Object(x.jsxs)("span",{children:[Object(x.jsxs)("span",{className:"bt-balance",children:[Object(x.jsx)(u.a,{displayType:"text",value:w,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(x.jsx)("span",{className:"float",children:Object(x.jsx)(u.a,{displayType:"text",value:S,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(x.jsx)("div",{className:"base-token",children:c})]}),Object(x.jsx)("span",{className:"add"})]}),Object(x.jsxs)("div",{className:"enter-margin",children:[Object(x.jsx)("div",{className:"input-margin",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"amount",style:{display:C?"block":"none"},children:f.liquidity}),Object(x.jsx)("input",{type:"number",className:"margin-value",placeholder:f.liquidity,value:C,onChange:function(e){var t=e.target.value;L(t)}})]})}),Object(x.jsx)("div",{children:c})]}),Object(x.jsxs)("div",{className:"max",children:[f.max,": ",Object(x.jsx)("span",{className:"max-num",children:Object(x.jsx)(m.a,{value:O,decimalScale:8})}),Object(x.jsx)("span",{className:"max-btn-left",onClick:function(){L(O)},children:f["add-all"]})]}),Object(x.jsx)("div",{className:"add-margin-btn",children:Object(x.jsx)(j.a,{className:"margin-btn",click:F,btnText:f.add,afterClick:r,lang:f})})]})})]})})})),f=Object(v.a)((function(e){var t=e.wallet,a=e.address,c=e.liqInfo,n=e.onClose,r=e.afterRemove,O=e.isLpPool,v=e.baseTokenId,p=e.unit,h=e.lang,f=e.version,N=Object(s.useState)(""),y=Object(o.a)(N,2),w=y[0],g=y[1],k=Object(s.useState)("0"),I=Object(o.a)(k,2),S=I[0],q=I[1],T=Object(s.useState)("00"),_=Object(o.a)(T,2),C=_[0],L=_[1];Object(b.a)();var E=function(){var e=Object(d.a)(l.a.mark((function e(){var n,s,r,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(i.g)(c.totalShares),!(s=Object(i.g)(w)).gt(n)){e.next=5;break}return alert("".concat(h["your-current-max-removable-shares-are"],"  ").concat(c.totalShares)),e.abrupt("return",!1);case 5:if(O||"v1"!==f){e.next=10;break}if(!((r=+c.totalShares-+w)<1&&r>0)){e.next=10;break}return alert(h["staking-max-limit-tip"]),e.abrupt("return",!1);case 10:if(!(+w<=0||isNaN(w))){e.next=13;break}return alert(h["invalid-liquidity"]),e.abrupt("return",!1);case 13:if(d=null,!O){e.next=20;break}return e.next=17,Object(i.gb)(t.detail.chainId,a,t.detail.account,w);case 17:d=e.sent,e.next=23;break;case 20:return e.next=22,Object(i.fb)(t.detail.chainId,a,t.detail.account,w,v,n.eq(s));case 22:d=e.sent;case 23:if(d&&d.success){e.next=26;break}return alert(h["failure-of-transaction"]),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(c&&c.formatShares){var e=c.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);q(e),L(t)}return function(){}}),[c.totalShares]),Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("div",{className:"title",children:h["remove-liquidity"]}),Object(x.jsx)("div",{className:"close","data-dismiss":"modal",onClick:n,children:Object(x.jsx)("span",{children:"\xd7"})})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"margin-box-info",children:[Object(x.jsxs)("div",{children:[" ","v1"===f||"v2_lite"===f||"v2_lite_open"===f?h["shares-available"]:h["liquidity-available"]]}),Object(x.jsxs)("div",{className:"money",children:[Object(x.jsx)("span",{children:Object(x.jsxs)("span",{className:"bt-balance",children:[Object(x.jsx)(u.a,{displayType:"text",value:S,decimalScale:0,thousandSeparator:!0}),".",Object(x.jsx)("span",{className:"float",children:C})]})}),Object(x.jsx)("span",{className:"remove"})]}),Object(x.jsxs)("div",{className:"enter-margin",children:[Object(x.jsx)("div",{className:"input-margin",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"amount",style:{display:w?"block":"none"},children:"v1"===f||"v2_lite"===f||"v2_lite_open"===f?h["liquidity-shares"]:h.liquidity}),Object(x.jsx)("input",{type:"number",className:"margin-value",placeholder:"v1"===f||"v2_lite"===f||"v2_lite_open"===f?h["liquidity-shares"]:h.liquidity,value:w,onChange:function(e){var t=e.target.value;g(t)}})]})}),Object(x.jsx)("div",{children:"v2"===f?p:h.shares})]}),Object(x.jsxs)("div",{className:"max",children:[Object(x.jsx)("span",{children:h["max-removeable"]}),Object(x.jsx)("span",{className:"max-num",children:Object(x.jsx)(m.a,{value:c.totalShares,decimalScale:8})}),Object(x.jsx)("span",{className:"max-btn-left",onClick:function(){g(c.totalShares)},children:h["remove-all"]})]}),Object(x.jsx)("div",{className:"add-margin-btn",children:Object(x.jsx)(j.a,{click:E,className:"margin-btn",btnText:h.remove,afterClick:r,lang:h})})]})})]})})})),N=({version:e,wallet:t,chainId:a,address:c,baseToken:n,isLpPool:r,liqInfo:l,loadLiqidityInfo:d,baseTokenId:o,symbolId:u,lang:b})=>{const[m,O]=Object(s.useState)(!1),[v,N]=Object(s.useState)("add"),[y,w]=Object(s.useState)(!1),[g,k]=Object(s.useState)(""),[I,S]=Object(s.useState)(null),q=async()=>{if(t.isConnected()&&Object(p.c)(t.detail.chainId,a)){let a=null;"v2_lite_open"===e&&await i.db.update(),a=r?await Object(i.A)(t.detail.chainId,c,t.detail.account):await Object(i.Q)(t.detail.chainId,c,t.detail.account,o),"object"!==typeof a&&k(a)}};Object(s.useEffect)((()=>(q(),d(),()=>{})),[t.detail.account]);const T=async()=>{let e=null;e=r?await Object(i.ob)(a,c,t.detail.account):await Object(i.lb)(a,c,t.detail.account,o),e&&e.success?O(!0):alert(e.error&&e.error.message||b["approve-failed"])},_=async()=>{try{return!!await t.connect()}catch(e){return!1}},C=()=>{w(!0),N("add")},L=()=>{w(!1),q(),d(),t.refresh()},E=()=>{w(!0),N("remove")};return Object(s.useEffect)((()=>(t.isConnected()&&Object(p.c)(t.detail.chainId,a)&&(async()=>{if("v2_lite_open"===e&&await i.db.update(),r){const e=await Object(i.U)(a,c,t.detail.account);return O(e),e}{const e=await Object(i.X)(a,c,t.detail.account,o);O(e)}})(),()=>{})),[t.detail.account]),Object(s.useEffect)((()=>{if(t.isConnected()&&Object(p.c)(t.detail.chainId,a)&&m)S(Object(x.jsxs)("div",{className:"add-remove-liquidity",children:[Object(x.jsx)("button",{className:"add-liquidity",onClick:C,children:b["add-liquidity"]}),Object(x.jsx)("button",{className:"remove-liquidity",onClick:E,children:b["remove-liquidity"]})]}));else{let e=null;t.isConnected()?Object(p.c)(t.detail.chainId,a)?m||(e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(j.a,{className:"approve-btn",click:T,btnText:b.approve,lang:b})})):(t.switchNetwork({id:a}),e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(j.a,{className:"approve-btn wrong-network",btnText:b["wrong-network"],lang:b,click:()=>t.switchNetwork({id:a})})})):e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(j.a,{className:"approve-btn",click:_,btnText:b["connect-wallet"],lang:b})}),S(e)}return()=>{}}),[t.detail.account,m]),Object(x.jsxs)("div",{className:"liquidity-btn",children:["add"===v?Object(x.jsx)(h,{modalIsOpen:y,isLpPool:r,onClose:L,balance:g,address:c,wallet:t,baseToken:n,afterAdd:L,baseTokenId:o,symbolId:u,lang:b}):Object(x.jsx)(f,{modalIsOpen:y,isLpPool:r,onClose:L,liqInfo:l,address:c,wallet:t,version:e,unit:"v1"===e||"v2_lite"===e||"option"===e?b.shares:n,afterRemove:L,baseTokenId:o,symbolId:u,lang:b}),I]})};var y=Object(O.b)("wallet","loading")(Object(O.c)((function({wallet:e,version:t,chainId:a,baseToken:c,address:n,type:r,baseTokenId:l,symbolId:d,lang:o,loading:u}){const[j,b]=Object(s.useState)({}),[O,v]=Object(s.useState)(c),h="lp"===r,f=async()=>{"v2_lite_open"===t&&await i.db.update(),u.loading();const s=await Object(i.D)(a,n,l),r=await Object(i.E)(a,n,l);if(e.isConnected()&&Object(p.c)(a,e.detail.chainId)){let r,d=null;if(d=h?await Object(i.y)(a,n,e.detail.account):await Object(i.v)(a,n,e.detail.account,l),Object(p.m)(n)){r=100*+(await Object(i.z)(a,n)).apy2}if(d){const e=d.shares?Object(i.g)(d.shares):Object(i.g)(0);if("v1"===t||"v2_lite"===t||"v2_lite_open"===t||"option"===t){const t=e.isNaN()?Object(i.g)(0):e.multipliedBy(d.shareValue);b({total:d.poolLiquidity,apy:(100*+s.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?t.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:e.toFixed(2),formatShares:e.toFixed(2),totalShares:Object(i.g)(e).toString(),values:t.toFixed(2),lpApy:r,unit:o.shares,sharesTitle:o["staked-balance"]})}else b({total:d.poolLiquidity,apy:(100*+s.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),shares:e.toString(),formatShares:Object(i.g)(e).plus(d.pnl).toFixed(2),totalShares:Object(i.g)(e).plus(d.pnl).toString(),percent:d.poolLiquidity>0?e.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:c,sharesTitle:o["my-Liquidity"],multiplier:`${s.multiplier}x`})}}else{let e;if(Object(p.m)(n)){e=100*+(await Object(i.z)(a,n)).apy2}r&&b({total:r.liquidity,apy:100*+s.apy,lpApy:e})}u.loaded()};return Object(s.useEffect)((()=>(f(),Object(p.l)(n)&&v("CAKE-LP"),()=>{})),[e.detail.account,c]),Object(x.jsxs)("div",{className:"liquidity-box",children:["v2_lite_open"===t?Object(x.jsx)("div",{className:"odd title",children:o["my-liqudity-providing"]}):Object(x.jsxs)("div",{className:"odd title",children:[o.provide," ",O," ",o["earn-deri"]]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o["pool-total-liquidity"]}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(m.a,{allowZero:!0,value:j.total,suffix:` ${O}`,thousandSeparator:!0})})]}),"v2"===t&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o.multiplier}),Object(x.jsx)("div",{className:"text-num multiplier",title:o["multiplier-tip"],children:j.multiplier})]}),"v2_lite_open"!==t&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o.apy}),Object(x.jsxs)("div",{className:"text-num",children:[Object(x.jsx)("span",{title:Object(p.m)(n)&&o["deri-apy"],className:`${Object(p.m)(n)&&"sushi-apy-underline"}`,children:Object(x.jsx)(m.a,{value:j.apy,decimalScale:2,suffix:"%"})}),Object(p.m)(n)&&j.lpApy>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:" +"})," ",Object(x.jsx)("span",{className:"sushi-apy-underline text-num",title:Object(p.n)(n)?o["sushi-apy"]:o["cake-apy"],children:Object(x.jsx)(m.a,{value:j.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),("v1"===t||"v2_lite"===t||"v2_lite_open"===t||"option"===t)&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o["liquidity-share-value"]}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(m.a,{allowZero:!0,decimalScale:6,value:j.shareValue,suffix:" "+O,thousandSeparator:!0})})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o["my-liquidity-pencentage"]}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(m.a,{allowZero:!0,value:j.percent,decimalScale:2,suffix:"%"})})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsxs)("div",{className:"text-title",children:[j.sharesTitle," "]}),Object(x.jsxs)("div",{className:"text-num",children:[Object(x.jsx)(m.a,{allowZero:!0,value:j.formatShares,decimalScale:2})," ",Object(x.jsx)("span",{children:j.unit})," "]})]}),"v2"===t&&Object(x.jsxs)("div",{className:"odd text claim-network",children:[Object(x.jsx)("div",{className:"text-title",children:o["mining-pnl"]}),Object(x.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(x.jsx)(m.a,{allowZero:!0,prefix:" ",value:j.pnl,decimalScale:2,suffix:" "+O})]})]}),("v1"===t||"v2_lite"===t||"v2_lite_open"===t||"option"===t)&&Object(x.jsx)("div",{className:"odd claim-network",children:Object(x.jsxs)("div",{className:"text-title money",children:[" ",Object(x.jsx)(m.a,{allowZero:!0,value:j.values,suffix:" "+O,decimalScale:2})]})}),Object(x.jsx)(N,{version:t,wallet:e,chainId:a,address:n,liqInfo:j,baseToken:O,isLpPool:h,loadLiqidityInfo:f,symbolId:d,baseTokenId:l,lang:o})]})})));t.a=function(e){return Object(x.jsxs)("div",{className:"liquidity-info",children:["v2_lite_open"!==e.version&&Object(x.jsx)(n.a,Object(c.a)(Object(c.a)({},e),{},{miningClaim:!0})),Object(x.jsx)(y,Object(c.a)({},e))]})}},824:function(e,t,a){"use strict";a(94),a(732),a(818);var c=a(0),n=a.n(c),s=a(1),i=a(12),r=a(5),l=a(13),d=a(25),o=a(47),u=a(26),j=a(262),b=a(18),m=new j.a;Object(o.b)("version")(Object(o.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,c=e.version,o=e.chainId,j=e.address,x=e.symbolId,O=e.lang,v=Object(r.useState)({}),p=Object(i.a)(v,2),h=p[0],f=p[1],N=Object(r.useState)({}),y=Object(i.a)(N,2),w=y[0],g=y[1],k=Object(d.useHistory)(),I=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.L)(a.account);case 2:return t=e.sent,e.next=5,Object(l.N)(o,j,a.account);case 5:c=e.sent,s=(+t.trade).toFixed(2),i=c.volume1h,f({harvestDeriTrade:s,myTradingVolumeCurrent:i});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.D)(o,j);case 2:t=e.sent,a=t.volume1h,g({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return a&&a.account&&(I(),S()),function(){}}),[]),Object(b.jsxs)("div",{className:"liquidity-box",children:[Object(b.jsx)("div",{className:"odd title",children:O["trade-to-earn-deri"]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:O["total-trading-volume-in-current-hour"]}),Object(b.jsx)("div",{className:"text-num",children:w.totalTradingVolumeCurrent||0})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:O["my-trading-volume-in-current-hour"]}),Object(b.jsx)("div",{className:"text-num",children:h.myTradingVolumeCurrent||0})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsx)("div",{className:"odd claim-network"}),Object(b.jsx)("div",{className:"claim-btn",children:Object(b.jsx)("button",{className:"claim",onClick:function(){var e=m.load(c),t=c.isV1?e.find((function(e){return Object(u.c)(e.pool,j)})):e.find((function(e){return Object(u.c)(e.pool,j)&&e.symbolId===x}));Object(u.r)(c.current,t),k.push("/lite")},children:O.trade})})]})})))}}]);
//# sourceMappingURL=5.42970448.chunk.js.map