(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[4],{618:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(16),i=a(7),l=a(58);function d(e){var t=e.btnText,a=e.className,n=e.disabled,d=e.click,o=e.afterClick,u=e.checkApprove,b=e.wallet,j=e.spec,x=e.lang,O=Object(i.useState)(n?"disabled":"enabled"),m=Object(r.a)(O,2),v=m[0],p=m[1],f=Object(i.useState)(!0),h=Object(r.a)(f,2),y=h[0],N=h[1],k=Object(i.useState)(!1),g=Object(r.a)(k,2),w=g[0],I=g[1],S=Object(i.useRef)(null),q=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return C(),e.next=5,d();case 5:e.sent&&o&&o(),T();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){p("disabled"),I(!0),S.current&&(S.current.style.display="inline-block")},T=function(){S.current&&(S.current.style.display="none"),p("enabled"),I(!1)},L=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(),e.next=3,b.approve(j.pool,j.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(x["approve-failed"])),T();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return L(),function(){}}),[b,j,u]),Object(l.jsxs)("button",{className:a,onClick:function(){y?q():E()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:S,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?x.pending:y?t:x.approve]})}},619:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(26),c=a(175),s=a(16),r=a(7),i=a(620),l=a(58);function d(e){var t=Object(r.useState)("--"),a=Object(s.a)(t,2),d=a[0],o=a[1];return Object(r.useEffect)((function(){var t=e.allowZero,a=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&o(Object(l.jsx)(i.a,Object(n.a)(Object(n.a)({},a),{},{displayType:"text"}))),function(){}}),[e.value]),d}},622:function(e,t,a){"use strict";var n=a(26),c=a(5),s=a(6),r=a(11),i=a(10),l=a(7),d=a.n(l),o=a(632),u=a.n(o),b=a(94),j=a(58);t.a=function(e){var t=document.getElementById("root"),a={overlay:{position:"fixed",zIndex:1,background:"rgb(0 0 0 / 0.5)"},content:{position:"absolute",border:0,background:"none",inset:0,overflow:"initial"}},l=function(l){Object(r.a)(o,l);var d=Object(i.a)(o);function o(e){var t;return Object(c.a)(this,o),(t=d.call(this,e)).state={modalIsOpen:!1},t}return Object(s.a)(o,[{key:"render",value:function(){var c=this.props,s=c.modalIsOpen,r=c.className,i=c.overlay,l=void 0===i?{}:i,d=Object.assign(a.overlay,Object(n.a)({},l)),o=Object.assign(a,{overlay:d});return Object(j.jsx)(u.a,{isOpen:s,style:o,appElement:t,portalClassName:this.props.intl.locale,children:Object(j.jsx)("div",{className:r,children:Object(j.jsx)(e,Object(n.a)(Object(n.a)({},this.props),{},{className:r,onClose:this.props.onClose}))})})}}]),o}(d.a.Component);return Object(b.b)("intl")(Object(b.c)(l))}},623:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(7);function c(e){return Object(n.useEffect)((function(){return document.querySelector("body").style.overflow="hidden",function(){e||(document.querySelector("body").style.overflow="auto")}}),[]),null}},659:function(e,t,a){"use strict";var n=a(26),c=a(660),s=a(43),r=a(0),i=a.n(r),l=a(1),d=a(16),o=a(7),u=a(23),b=a(620),j=a(618);a(692);var x=a(623),O=a(58);var m=a(94),v=a(622),p=a(46),f=a(619);var h=Object(v.a)((function(e){var t=e.wallet,a=e.address,n=e.baseToken,c=e.onClose,s=e.afterAdd,r=e.balance,m=e.isLpPool,v=e.baseTokenId,p=e.symbolId,f=e.lang,h=Object(o.useState)("0"),y=Object(d.a)(h,2),N=y[0],k=y[1],g=Object(o.useState)("00"),w=Object(d.a)(g,2),I=w[0],S=w[1],q=Object(o.useState)(""),C=Object(d.a)(q,2),T=C[0],L=C[1],E=function(e){var t=e.wallet,a=e.address,n=e.symbolId,c=Object(o.useState)({}),s=Object(d.a)(c,2),r=s[0],b=s[1],j=function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(u.getSpecification)(t.detail.chainId,a,n);case 3:c=e.sent,b(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return j(),function(){}}),t.detail.account,a),r}({wallet:t,address:a,symbolId:p});Object(x.a)();var F=function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(u.bg)(r),!Object(u.bg)(T).gt(n)){e.next=5;break}return alert(f["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(E&&+T<+E.minAddLiquidity)){e.next=8;break}return alert("".concat(f["the-input-liquidity-shall-not-be-less-than"]," ").concat(E.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(T<=0||isNaN(T))){e.next=11;break}return alert(f["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 11:if(c=null,!m){e.next=18;break}return e.next=15,Object(u.addLpLiquidity)(t.detail.chainId,a,t.detail.account,T);case 15:c=e.sent,e.next=21;break;case 18:return e.next=20,Object(u.addLiquidity)(t.detail.chainId,a,t.detail.account,T,v);case 20:c=e.sent;case 21:return c&&c.success||alert(f["failure-of-transaction"]),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e=(+r).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return k(e),S(t),function(){}}),[r]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:f["add-liquidity"]}),Object(O.jsx)("div",{className:"close",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsx)("div",{children:f["wallet-balance"]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:N,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(O.jsx)("span",{className:"float",children:Object(O.jsx)(b.a,{displayType:"text",value:I,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(O.jsx)("div",{className:"base-token",children:n})]}),Object(O.jsx)("span",{className:"add"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:T?"block":"none"},children:f.liquidity}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:f.liquidity,value:T,onChange:function(e){var t=e.target.value;L(t)}})]})}),Object(O.jsx)("div",{children:n})]}),Object(O.jsxs)("div",{className:"max",children:[f.max,": ",Object(O.jsx)("span",{className:"max-num",children:r}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){L(r)},children:f["add-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{className:"margin-btn",click:F,btnText:f.add,afterClick:s,lang:f})})]})})]})})})),y=Object(v.a)((function(e){var t=e.wallet,a=e.address,n=e.liqInfo,c=e.onClose,s=e.afterRemove,r=e.isLpPool,m=e.baseTokenId,v=e.unit,p=e.lang,f=Object(o.useState)(""),h=Object(d.a)(f,2),y=h[0],N=h[1],k=Object(o.useState)("0"),g=Object(d.a)(k,2),w=g[0],I=g[1],S=Object(o.useState)("00"),q=Object(d.a)(S,2),C=q[0],T=q[1];Object(x.a)();var L=function(){var e=Object(l.a)(i.a.mark((function e(){var c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(u.bg)(n.totalShares),!Object(u.bg)(y).gt(c)){e.next=5;break}return alert("".concat(p["your-current-max-removable-shares-are"],"  ").concat(n.totalShares)),e.abrupt("return",!1);case 5:if(r){e.next=10;break}if(!((s=+n.totalShares-+y)<1&&s>0)){e.next=10;break}return alert(p["staking-max-limit-tip"]),e.abrupt("return",!1);case 10:if(!(+y<=0||isNaN(y))){e.next=13;break}return alert(p["invalid-liquidity"]),e.abrupt("return",!1);case 13:if(l=null,!r){e.next=20;break}return e.next=17,Object(u.removeLpLiquidity)(t.detail.chainId,a,t.detail.account,y);case 17:l=e.sent,e.next=23;break;case 20:return e.next=22,Object(u.removeLiquidity)(t.detail.chainId,a,t.detail.account,y,m);case 22:l=e.sent;case 23:if(l&&l.success){e.next=26;break}return alert(p["failure-of-transaction"]),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){if(n&&n.formatShares){var e=n.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);I(e),T(t)}return function(){}}),[n.totalShares]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:p["remove-liquidity"]}),Object(O.jsx)("div",{className:"close","data-dismiss":"modal",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsxs)("div",{children:[" ",p["shares-available"]]}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsx)("span",{children:Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:w,decimalScale:0,thousandSeparator:!0}),".",Object(O.jsx)("span",{className:"float",children:C})]})}),Object(O.jsx)("span",{className:"remove"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:y?"block":"none"},children:p["liquidity-shares"]}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:p["liquidity-shares"],value:y,onChange:function(e){var t=e.target.value;N(t)}})]})}),Object(O.jsx)("div",{children:v})]}),Object(O.jsxs)("div",{className:"max",children:[Object(O.jsx)("span",{children:p["max-removeable"]}),Object(O.jsx)("span",{className:"max-num",children:n.totalShares}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){N(n.totalShares)},children:p["remove-all"]})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{click:L,className:"margin-btn",btnText:p.remove,afterClick:s,lang:p})})]})})]})})})),N=function(e){var t=e.version,a=e.wallet,n=e.chainId,c=e.address,r=e.baseToken,b=e.isLpPool,x=e.liqInfo,m=e.loadLiqidityInfo,v=e.baseTokenId,f=e.symbolId,N=e.lang,k=Object(o.useState)(!1),g=Object(d.a)(k,2),w=g[0],I=g[1],S=Object(o.useState)("add"),q=Object(d.a)(S,2),C=q[0],T=q[1],L=Object(o.useState)(!1),E=Object(d.a)(L,2),F=E[0],A=E[1],P=Object(o.useState)(""),D=Object(d.a)(P,2),Z=D[0],V=D[1],B=Object(o.useState)(null),R=Object(d.a)(B,2),U=R[0],_=R[1],M=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!Object(p.b)(a.detail.chainId,n)){e.next=12;break}if(t=null,!b){e.next=8;break}return e.next=5,Object(u.getLpWalletBalance)(a.detail.chainId,c,a.detail.account);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,Object(u.getWalletBalance)(a.detail.chainId,c,a.detail.account,v);case 10:t=e.sent;case 11:"object"!==Object(s.a)(t)&&V(t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){return M(),m(),function(){}}),[a.detail.account]);var W=function(){var e=Object(l.a)(i.a.mark((function e(){var t,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=8;break}return e.next=3,Object(u.isLpUnlocked)(n,c,a.detail.account);case 3:return t=e.sent,I(t),e.abrupt("return",t);case 8:return e.next=10,Object(u.isUnlocked)(n,c,a.detail.account,v);case 10:return s=e.sent,I(s),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!b){e.next=7;break}return e.next=4,Object(u.unlockLp)(n,c,a.detail.account);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(u.unlock)(n,c,a.detail.account,v);case 9:t=e.sent;case 10:t&&t.success?I(!0):alert(t.error&&t.error.message||N["approve-failed"]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.connect();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){A(!0),T("add")},K=function(){A(!1),M(),m()},Y=function(){A(!0),T("remove")};return Object(o.useEffect)((function(){return a.isConnected()&&Object(p.b)(a.detail.chainId,n)&&W(),function(){}}),[a.detail.account]),Object(o.useEffect)((function(){if(a.isConnected()&&Object(p.b)(a.detail.chainId,n)&&w)_(Object(O.jsxs)("div",{className:"add-remove-liquidity",children:[Object(O.jsx)("button",{className:"add-liquidity",onClick:H,children:N["add-liquidity"]}),Object(O.jsx)("button",{className:"remove-liquidity",onClick:Y,children:N["remove-liquidity"]})]}));else{var e=null;a.isConnected()?Object(p.b)(a.detail.chainId,n)?w||(e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:z,btnText:N.approve,lang:N})})):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn wrong-network",btnText:N["wrong-network"],lang:N})}):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:J,btnText:N["connect-callet"],lang:N})}),_(e)}return function(){}}),[a.detail.account,w]),Object(O.jsxs)("div",{className:"liquidity-btn",children:["add"===C?Object(O.jsx)(h,{modalIsOpen:F,isLpPool:b,onClose:K,balance:Z,address:c,wallet:a,baseToken:r,afterAdd:K,baseTokenId:v,symbolId:f,lang:N}):Object(O.jsx)(y,{modalIsOpen:F,isLpPool:b,onClose:K,liqInfo:x,address:c,wallet:a,unit:"v1"===t?N.shares:r,afterRemove:K,baseTokenId:v,symbolId:f,lang:N}),U]})},k=Object(m.b)("wallet")(Object(m.c)((function(e){var t=e.wallet,a=e.version,n=e.chainId,c=e.baseToken,s=e.address,r=e.type,b=e.baseTokenId,j=e.symbolId,x=e.lang,m=Object(o.useState)({}),v=Object(d.a)(m,2),h=v[0],y=v[1],k=Object(o.useState)(c),g=Object(d.a)(k,2),w=g[0],I=g[1],S="lp"===r,q=function(){var e=Object(l.a)(i.a.mark((function e(){var r,l,d,o,j,O,m,v,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getPoolInfoApy)(n,s,b);case 2:return r=e.sent,e.next=5,Object(u.getPoolLiquidity)(n,s,b);case 5:if(l=e.sent,!t.isConnected()||!Object(p.b)(n,t.detail.chainId)){e.next=25;break}if(d=null,!S){e.next=14;break}return e.next=11,Object(u.getLpLiquidityInfo)(n,s,t.detail.account);case 11:d=e.sent,e.next=17;break;case 14:return e.next=16,Object(u.getLiquidityInfo)(n,s,t.detail.account,b);case 16:d=e.sent;case 17:if(!Object(p.g)(s)){e.next=22;break}return e.next=20,Object(u.getLpPoolInfoApy)(n,s);case 20:j=e.sent,o=100*+j.apy2;case 22:d&&(O=Object(u.bg)(d.shares),"v1"===a?(m=O.multipliedBy(d.shareValue),y({total:+d.poolLiquidity,apy:(100*+r.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?m.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:O.toFixed(2),formatShares:O.toFixed(2),totalShares:Object(u.bg)(O).toString(),values:m.toFixed(2),lpApy:o,unit:x.shares,sharesTitle:x["staked-balance"]})):y({total:+d.poolLiquidity,apy:(100*+r.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),shares:O.toString(),formatShares:O.toFixed(2),totalShares:Object(u.bg)(O).plus(d.pnl).toString(),percent:d.poolLiquidity>0?O.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:c,sharesTitle:x["my-Liquidity"]})),e.next=31;break;case 25:if(!Object(p.g)(s)){e.next=30;break}return e.next=28,Object(u.getLpPoolInfoApy)(n,s);case 28:f=e.sent,v=100*+f.apy2;case 30:l&&y({total:l.liquidity,apy:100*+r.apy,lpApy:v});case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return q(),Object(p.f)(s)&&I("CAKE-LP"),function(){}}),[t.detail.account,c]),Object(O.jsxs)("div",{className:"liquidity-box",children:[Object(O.jsxs)("div",{className:"odd title",children:[x.provide," ",w," ",x["earn-deri"]]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["pool-total-liquidity"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(f.a,{allowZero:!0,value:h.total,suffix:" ".concat(w),thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x.apy}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)("span",{title:Object(p.g)(s)&&"DERI-APY",className:"".concat(Object(p.g)(s)&&"sushi-apy-underline"),children:Object(O.jsx)(f.a,{value:h.apy,decimalScale:2,suffix:"%"})}),Object(p.g)(s)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" +"})," ",Object(O.jsx)("span",{className:"sushi-apy-underline text-num",title:Object(p.h)(s)?x["sushi-apy"]:x["cake-apy"],children:Object(O.jsx)(f.a,{value:h.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),"v1"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["liquidity-share-value"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(f.a,{allowZero:!0,decimalScale:6,value:h.shareValue,suffix:" "+w,thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["my-liquidity-pencentage"]}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(f.a,{allowZero:!0,value:h.percent,decimalScale:2,suffix:"%"})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsxs)("div",{className:"text-title",children:[h.sharesTitle," "]}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)(f.a,{allowZero:!0,value:h.formatShares,decimalScale:2})," ",Object(O.jsx)("span",{children:h.unit})," "]})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:x["mining-pnl"]}),Object(O.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(O.jsx)(f.a,{allowZero:!0,prefix:" ",value:h.pnl,decimalScale:2,suffix:" "+w})]})]}),Object(O.jsx)("div",{className:"odd claim-network",children:Object(O.jsx)("div",{className:"text-title money",children:"v1"===a&&Object(O.jsx)(f.a,{allowZero:!0,value:h.values,suffix:" "+w,decimalScale:2})})}),Object(O.jsx)(N,{version:a,wallet:t,chainId:n,address:s,liqInfo:h,baseToken:w,isLpPool:S,loadLiqidityInfo:q,symbolId:j,baseTokenId:b,lang:x})]})})));t.a=function(e){return Object(O.jsxs)("div",{className:"liquidity-info",children:[Object(O.jsx)(c.a,Object(n.a)(Object(n.a)({},e),{},{miningClaim:!0})),Object(O.jsx)(k,Object(n.a)({},e))]})}},660:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),c=a.n(n),s=a(1),r=a(16),i=a(7),l=a(23);var d=a(174);var o=a(618),u=a(46),b=a(58);function j(e){var t=e.wallet,a=e.miningClaim,n=e.tradingClaim,j=e.lang,x=Object(i.useState)("Collect Wallet"),O=Object(r.a)(x,2),m=O[0],v=O[1],p=Object(i.useState)(!1),f=Object(r.a)(p,2),h=f[0],y=f[1],N=function(e){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],d=a[1],o=null,u=function(){var t=Object(s.a)(c.a.mark((function t(){var a,n,s,r,i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(l.getUserInfoAll)(e.detail.account);case 3:a=t.sent,n=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,r=(+a.lp).toFixed(2),i=(+a.trade).toFixed(2),o=a.chainId,d({claimed:n,unclaimed:s,harvestDeriLp:r,harvestDeriTrade:i,chainId:o});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){return o=window.setInterval(u,18e4),u(),function(){return clearInterval(o)}}),[e.detail.account]),[n,o]}(t),k=Object(r.a)(N,2),g=k[0],w=k[1],I=Object(i.useState)(""),S=Object(r.a)(I,2),q=S[0],C=S[1],T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return d[l.DeriEnv.get()][t][e]||{}}(g.chainId),L=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(u.b)(t.detail.chainId,g.chainId)){e.next=3;break}return alert("".concat(j["your-deri-is-on"]," ").concat(T.text," . ").concat(j["connect-to"]," ").concat(T.text," ").concat(j["to-claim"],".")),e.abrupt("return");case 3:if(0!==+g.unclaimed){e.next=6;break}return alert(j["no-deri-to-claim-yet"]),e.abrupt("return");case 6:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=10;break}return alert(j["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 10:return e.next=12,Object(l.mintDToken)(t.detail.chainId,t.detail.account);case 12:if(!e.sent.success){e.next=18;break}return clearInterval(w),e.abrupt("return",!0);case 18:return alert(j["claim-failed"]),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,L();case 3:e.sent&&y(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=null;return a&&(e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,n=parseInt(a/3600),c=parseInt(a%3600/60),s=parseInt(a%60);C("".concat(n," ").concat(j.h," ").concat(c," ").concat(j.m," ").concat(s," ").concat(j.s))}),1e3)),t.isConnected()?v(j.claim):v(j["collect-wallet"]),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(b.jsxs)("div",{className:"claim-box",children:[Object(b.jsx)("div",{className:"odd title",children:a?j["my-liquidity-providing-harvest-in-current-epoch"]:j["my-trading-harvest-in-current-epoch"]}),a&&Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:j["current-epoch-remaining-time"]}),Object(b.jsx)("div",{className:"text-num",children:q})]}),Object(b.jsxs)("div",{className:"odd text",children:[a&&Object(b.jsx)("div",{className:"text-title",children:j["my-harvest-in-current-epoch-estimated"]}),n&&Object(b.jsx)("div",{className:"text-title",children:j["my-trading-harvest-in-current-epoch-Est"]}),Object(b.jsxs)("div",{className:"text-num",children:[a?g.harvestDeriLp:g.harvestDeriTrade," ",j.deri]})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:j["claimed-deri"]}),Object(b.jsx)("div",{className:"text-num",children:h?(+g.claimed+ +g.unclaimed).toFixed(2):g.claimed})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:j["unclaimed-deri"]}),Object(b.jsx)("div",{className:"text-num",children:h?0:(+g.unclaimed).toFixed(2)})]}),n&&Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsx)("div",{className:"odd claim-network",children:a&&Object(b.jsxs)("div",{className:"text-title",children:[j["your-deri-is-on"]," ",T.text,"  ",j["connect-to"]," ",T.text," ",j["to-claim"]]})}),Object(b.jsx)("div",{className:"claim-btn",children:Object(b.jsx)(o.a,{btnText:m,click:E,className:"claim",lang:j})})]})}},661:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(26),c=a(175),s=a(660),r=a(0),i=a.n(r),l=a(1),d=a(16),o=a(7),u=a(23),b=a(31),j=a(94),x=a(46),O=a(283),m=a(58),v=new O.a;var p=Object(j.b)("version")(Object(j.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,n=e.version,c=e.chainId,s=e.address,r=e.symbolId,j=e.lang,O=Object(o.useState)({}),p=Object(d.a)(O,2),f=p[0],h=p[1],y=Object(o.useState)({}),N=Object(d.a)(y,2),k=N[0],g=N[1],w=Object(b.useHistory)(),I=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getUserInfoAll)(a.account);case 2:return t=e.sent,e.next=5,Object(u.getUserInfoInPool)(c,s,a.account);case 5:n=e.sent,r=(+t.trade).toFixed(2),l=n.volume1h,h({harvestDeriTrade:r,myTradingVolumeCurrent:l});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getPoolInfoApy)(c,s);case 2:t=e.sent,a=t.volume1h,g({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return a&&a.account&&(I(),S()),function(){}}),[]),Object(m.jsxs)("div",{className:"liquidity-box",children:[Object(m.jsx)("div",{className:"odd title",children:j["trade-to-earn-deri"]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title",children:j["total-trading-volume-in-current-hour"]}),Object(m.jsx)("div",{className:"text-num",children:k.totalTradingVolumeCurrent||0})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title",children:j["my-trading-volume-in-current-hour"]}),Object(m.jsx)("div",{className:"text-num",children:f.myTradingVolumeCurrent||0})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title"}),Object(m.jsx)("div",{className:"text-num"})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title"}),Object(m.jsx)("div",{className:"text-num"})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title"}),Object(m.jsx)("div",{className:"text-num"})]}),Object(m.jsx)("div",{className:"odd claim-network"}),Object(m.jsx)("div",{className:"claim-btn",children:Object(m.jsx)("button",{className:"claim",onClick:function(){var e=v.load(n),t=n.isV1?e.find((function(e){return Object(x.b)(e.pool,s)})):e.find((function(e){return Object(x.b)(e.pool,s)&&e.symbolId===r}));Object(x.k)(n.current,t),w.push("/lite")},children:j.trade})})]})})));function f(e){var t=e.wallet,a=Object(c.a)(e,["wallet"]);return Object(m.jsxs)("div",{className:"trade-info",children:[Object(m.jsx)(s.a,Object(n.a)(Object(n.a)({},a),{},{wallet:t,tradingClaim:!0})),Object(m.jsx)(p,Object(n.a)({},a))]})}},692:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(632),s=(n=c)&&n.__esModule?n:{default:n};t.default=s.default,e.exports=t.default}}]);
//# sourceMappingURL=4.f9053fbd.chunk.js.map