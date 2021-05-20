(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[4],{564:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(2),r=a(17),i=a(4),l=a(48);function d(e){var t=e.btnText,a=e.className,n=e.disabled,d=e.click,u=e.afterClick,o=Object(i.useState)(n?"disabled":"enabled"),j=Object(r.a)(o,2),b=j[0],x=j[1],O=Object(i.useState)(!1),m=Object(r.a)(O,2),f=m[0],h=m[1],v=Object(i.useRef)(null),p=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===b){e.next=2;break}return e.abrupt("return");case 2:return x("disabled"),h(!0),v.current&&(v.current.style.display="inline-block"),e.next=7,d();case 7:e.sent&&u&&u(),v.current&&(v.current.style.display="none"),x("enabled"),h(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("button",{className:a,onClick:p,children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:v,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),f?"PENDING":t]})}},565:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(22),c=a(567),s=a(17),r=a(4),i=a(566),l=a(48);function d(e){var t=Object(r.useState)("--"),a=Object(s.a)(t,2),d=a[0],u=a[1];return Object(r.useEffect)((function(){var t=e.allowZero,a=Object(c.a)(e,["allowZero"]);return(e.value||0===Math.abs(e.value)&&!0===t)&&u(Object(l.jsx)(i.a,Object(n.a)(Object(n.a)({},a),{},{displayType:"text"}))),function(){}}),[e.value]),d}},568:function(e,t,a){"use strict";var n=a(22),c=a(5),s=a(6),r=a(13),i=a(12),l=a(4),d=a.n(l),u=a(572),o=a.n(u),j=a(48);t.a=function(e){var t=document.getElementById("root"),a={overlay:{position:"fixed",zIndex:2,background:"rgb(0 0 0 / 0.5)"},content:{position:"absolute",border:0,background:"none",inset:0,overflow:"initial"}};return function(l){Object(r.a)(u,l);var d=Object(i.a)(u);function u(e){var t;return Object(c.a)(this,u),(t=d.call(this,e)).state={modalIsOpen:!1},t}return Object(s.a)(u,[{key:"render",value:function(){var c=this.props,s=c.modalIsOpen,r=c.className;return Object(j.jsx)(o.a,{isOpen:s,style:a,appElement:t,children:Object(j.jsx)("div",{className:r,children:Object(j.jsx)(e,Object(n.a)(Object(n.a)({},this.props),{},{className:r,onClose:this.props.onClose}))})})}}]),u}(d.a.Component)}},586:function(e,t,a){"use strict";var n=a(22),c=a(587),s=a(53),r=a(0),i=a.n(r),l=a(2),d=a(17),u=a(4),o=a(49),j=a(566),b=a(564);a(613);var x=a(48);var O=a(156),m=a(568),f=a(84),h=a(565);var v=Object(m.a)((function(e){var t=e.wallet,a=e.address,n=e.baseToken,c=e.onClose,s=e.afterAdd,r=e.balance,O=e.isLpPool,m=Object(u.useState)("0"),f=Object(d.a)(m,2),h=f[0],v=f[1],p=Object(u.useState)("00"),N=Object(d.a)(p,2),y=N[0],I=N[1],k=Object(u.useState)(""),w=Object(d.a)(k,2),g=w[0],L=w[1],S=function(e){var t=e.wallet,a=e.address,n=Object(u.useState)({}),c=Object(d.a)(n,2),s=c[0],r=c[1],j=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(o.getSpecification)(t.detail.chainId,a,t.detail.account);case 3:n=e.sent,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return j(),function(){}}),t.detail.account,a),s}({wallet:t,address:a}),C=function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(o.bg)(r),!Object(o.bg)(g).gt(n)){e.next=5;break}return alert("not sufficient funds"),e.abrupt("return",!1);case 5:if(!(S&&+g<+S.minAddLiquidity)){e.next=8;break}return alert("The input liquidity shall not be less than ".concat(S.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(g<=0||isNaN(g))){e.next=11;break}return alert("It has to be greater than zero"),e.abrupt("return",!1);case 11:if(c=null,!O){e.next=18;break}return e.next=15,Object(o.addLpLiquidity)(t.detail.chainId,a,t.detail.account,g);case 15:c=e.sent,e.next=21;break;case 18:return e.next=20,Object(o.addLiquidity)(t.detail.chainId,a,t.detail.account,g);case 20:c=e.sent;case 21:return c&&c.success||alert("failure of transaction"),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e=(+r).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return v(e),I(t),function(){}}),[r]),Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("div",{className:"title",children:"ADD LIQUIDITY"}),Object(x.jsx)("div",{className:"close",onClick:c,children:Object(x.jsx)("span",{children:"\xd7"})})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"margin-box-info",children:[Object(x.jsx)("div",{children:"Wallet Balance"}),Object(x.jsxs)("div",{className:"money",children:[Object(x.jsxs)("span",{children:[Object(x.jsxs)("span",{className:"bt-balance",children:[Object(x.jsx)(j.a,{displayType:"text",value:h,thousandSeparator:!0,allowZero:!0}),".",Object(x.jsx)("span",{className:"float",children:Object(x.jsx)(j.a,{displayType:"text",value:y,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(x.jsx)("div",{className:"base-token",children:n})]}),Object(x.jsx)("span",{className:"add"})]}),Object(x.jsxs)("div",{className:"enter-margin",children:[Object(x.jsx)("div",{className:"input-margin",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"amount",style:{display:g?"block":"none"},children:"LIQUIDITY"}),Object(x.jsx)("input",{type:"number",className:"margin-value",placeholder:"LIQUIDITY",value:g,onChange:function(e){var t=e.target.value;L(t)}})]})}),Object(x.jsx)("div",{children:n})]}),Object(x.jsxs)("div",{className:"max",children:["MAX: ",Object(x.jsx)("span",{className:"max-num",children:r}),Object(x.jsx)("span",{className:"max-btn-left",onClick:function(){L(r)},children:"ADD ALL"})]}),Object(x.jsx)("div",{className:"add-margin-btn",children:Object(x.jsx)(b.a,{className:"margin-btn",click:C,btnText:"ADD",afterClick:s})})]})})]})})})),p=Object(m.a)((function(e){var t=e.wallet,a=e.address,n=e.liqInfo,c=e.onClose,s=e.afterRemove,r=e.isLpPool,O=Object(u.useState)(""),m=Object(d.a)(O,2),f=m[0],h=m[1],v=Object(u.useState)("0"),p=Object(d.a)(v,2),N=p[0],y=p[1],I=Object(u.useState)("00"),k=Object(d.a)(I,2),w=k[0],g=k[1],L=function(){var e=Object(l.a)(i.a.mark((function e(){var c,s,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(o.bg)(n.shares),s=Object(o.bg)(f),r){e.next=7;break}if(!((l=+n.shares-+f)<1&&0!==l)){e.next=7;break}return alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.'),e.abrupt("return",!1);case 7:if(!s.gt(c)){e.next=10;break}return alert("Your current max removable shares are  ".concat(n.shares)),e.abrupt("return",!1);case 10:if(!(+f<=0||isNaN(f))){e.next=13;break}return alert("Invalid Liquidity!"),e.abrupt("return",!1);case 13:if(d=null,!r){e.next=20;break}return e.next=17,Object(o.removeLpLiquidity)(t.detail.chainId,a,t.detail.account,f);case 17:d=e.sent,e.next=23;break;case 20:return e.next=22,Object(o.removeLiquidity)(t.detail.chainId,a,t.detail.account,f);case 22:d=e.sent;case 23:if(d&&d.success){e.next=26;break}return alert("failure of transaction"),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){if(n&&n.shares){var e=(+n.shares).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);y(e),g(t)}return function(){}}),[n.shares]),Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("div",{className:"title",children:"REMOVE LIQUIDITY"}),Object(x.jsx)("div",{className:"close","data-dismiss":"modal",onClick:c,children:Object(x.jsx)("span",{children:"\xd7"})})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"margin-box-info",children:[Object(x.jsx)("div",{children:"Shares Available"}),Object(x.jsxs)("div",{className:"money",children:[Object(x.jsx)("span",{children:Object(x.jsxs)("span",{className:"bt-balance",children:[Object(x.jsx)(j.a,{displayType:"text",value:N,decimalScale:0,thousandSeparator:!0}),".",Object(x.jsx)("span",{className:"float",children:w})]})}),Object(x.jsx)("span",{className:"remove"})]}),Object(x.jsxs)("div",{className:"enter-margin",children:[Object(x.jsx)("div",{className:"input-margin",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"amount",style:{display:f?"block":"none"},children:"LIQUIDITY SHARES"}),Object(x.jsx)("input",{type:"number",className:"margin-value",placeholder:"LIQUIDITY SHARES",value:f,onChange:function(e){var t=e.target.value;h(t)}})]})}),Object(x.jsx)("div",{children:"Shares"})]}),Object(x.jsxs)("div",{className:"max",children:[Object(x.jsx)("span",{children:"MAX REMOVEABLE:"}),Object(x.jsx)("span",{className:"max-num",children:n.shares}),Object(x.jsx)("span",{className:"max-btn-left",onClick:function(){h(n.shares)},children:"REMOVE ALL"})]}),Object(x.jsx)("div",{className:"add-margin-btn",children:Object(x.jsx)(b.a,{click:L,className:"margin-btn",btnText:"REMOVE",afterClick:s})})]})})]})})})),N=function(e){var t=e.wallet,a=e.chainId,n=e.address,c=e.baseToken,r=e.loadLiquidity,j=e.isLpPool,O=e.liqInfo,m=e.loadLiqidityInfo,h=Object(u.useState)(!1),N=Object(d.a)(h,2),y=N[0],I=N[1],k=Object(u.useState)("add"),w=Object(d.a)(k,2),g=w[0],L=w[1],S=Object(u.useState)(!1),C=Object(d.a)(S,2),E=C[0],T=C[1],q=Object(u.useState)(""),D=Object(d.a)(q,2),A=D[0],R=D[1],P=Object(u.useState)(null),V=Object(d.a)(P,2),M=V[0],U=V[1],Y=function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!Object(f.b)(t.detail.chainId,a)){e.next=12;break}if(c=null,!j){e.next=8;break}return e.next=5,Object(o.getLpWalletBalance)(t.detail.chainId,n,t.detail.account);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,Object(o.getWalletBalance)(t.detail.chainId,n,t.detail.account);case 10:c=e.sent;case 11:"object"!==Object(s.a)(c)&&R(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){return Y(),m(),function(){}}),[t.detail.account]);var Z=function(){var e=Object(l.a)(i.a.mark((function e(){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=8;break}return e.next=3,Object(o.isLpUnlocked)(a,n,t.detail.account);case 3:return c=e.sent,I(c),e.abrupt("return",c);case 8:return e.next=10,Object(o.isUnlocked)(a,n,t.detail.account);case 10:return s=e.sent,I(s),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=null,!j){e.next=7;break}return e.next=4,Object(o.unlockLp)(a,n,t.detail.account);case 4:c=e.sent,e.next=10;break;case 7:return e.next=9,Object(o.unlock)(a,n,t.detail.account);case 9:c=e.sent;case 10:c&&c.success?I(!0):alert(c.error&&c.error.message||"Approve failed");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.connect();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){T(!0),L("add")},W=function(){T(!1),r(),Y(),m()},B=function(){T(!0),L("remove")};return Object(u.useEffect)((function(){return t.isConnected()&&Object(f.b)(t.detail.chainId,a)&&Z(),function(){}}),[t.detail.account]),Object(u.useEffect)((function(){if(t.isConnected()&&Object(f.b)(t.detail.chainId,a)&&y)U(Object(x.jsxs)("div",{className:"add-remove-liquidity",children:[Object(x.jsx)("button",{className:"add-liquidity",onClick:H,children:"ADD LIQUIDITY"}),Object(x.jsx)("button",{className:"remove-liquidity",onClick:B,children:"REMOVE LIQUIDITY"})]}));else{var e=null;t.isConnected()?Object(f.b)(t.detail.chainId,a)?y||(e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(b.a,{className:"approve-btn",click:F,btnText:"APPROVE"})})):e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(b.a,{className:"approve-btn wrong-network",btnText:"Wrong Network"})}):e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(b.a,{className:"approve-btn",click:Q,btnText:"Connect Wallet"})}),U(e)}return function(){}}),[t.detail.account,y]),Object(x.jsxs)("div",{className:"liquidity-btn",children:["add"===g?Object(x.jsx)(v,{modalIsOpen:E,isLpPool:j,onClose:W,balance:A,address:n,wallet:t,baseToken:c,afterAdd:W}):Object(x.jsx)(p,{modalIsOpen:E,isLpPool:j,onClose:W,liqInfo:O,address:n,wallet:t,baseToken:c,afterRemove:W}),M]})},y=Object(O.b)("wallet")(Object(O.c)((function(e){var t=e.wallet,a=e.chainId,n=e.baseToken,c=e.address,s=e.type,r=Object(u.useState)({}),j=Object(d.a)(r,2),b=j[0],O=j[1],m="lp"===s,v=function(){var e=Object(l.a)(i.a.mark((function e(){var n,s,r,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolInfoApy)(a,c);case 2:return n=e.sent,e.next=5,Object(o.getPoolLiquidity)(a,c);case 5:if(s=e.sent,!t.isConnected()||!Object(f.b)(a,t.detail.chainId)){e.next=21;break}if(r=null,!m){e.next=14;break}return e.next=11,Object(o.getLpLiquidityInfo)(a,c,t.detail.account);case 11:r=e.sent,e.next=17;break;case 14:return e.next=16,Object(o.getLiquidityInfo)(a,c,t.detail.account);case 16:r=e.sent;case 17:Object(f.e)(c)&&(l=.22008070161007/+s.liquidity*100),r&&O({total:+r.poolLiquidity,apy:100*+n.apy,shareValue:r.shareValue,percent:r.shares*r.shareValue/r.poolLiquidity*100,shares:r.shares,values:r.shares*r.shareValue,sushiApy:l}),e.next=23;break;case 21:Object(f.e)(c)&&(d=.22008070161007/s.liquidity*100),s&&O({total:s.liquidity,apy:100*+n.apy,sushiApy:d});case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return v(),function(){}}),[t.detail.account]),Object(x.jsxs)("div",{className:"liquidity-box",children:[Object(x.jsxs)("div",{className:"odd title",children:["Provide ",n," Earn DERI"]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:"Pool Total Liquidity"}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(h.a,{allowZero:!0,value:b.total,suffix:" ".concat(n),thousandSeparator:!0})})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:"APY"}),Object(x.jsxs)("div",{className:"text-num",children:[Object(x.jsx)("span",{title:Object(f.e)(c)&&"DERI-APY",className:"".concat(Object(f.e)(c)&&"sushi-apy-underline"),children:Object(x.jsx)(h.a,{value:b.apy,decimalScale:2,suffix:"%"})}),Object(f.e)(c)&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:" +"})," ",Object(x.jsx)("span",{className:"sushi-apy-underline text-num",title:"SUSHI-APY",children:Object(x.jsx)(h.a,{value:b.sushiApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:"Liquidity Share Value"}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(h.a,{allowZero:!0,decimalScale:6,value:b.shareValue,suffix:" "+n,thousandSeparator:!0})})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:"My Liquidity Pencentage"}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(h.a,{allowZero:!0,value:b.percent,decimalScale:2,suffix:"%"})})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:"Staked Balance "}),Object(x.jsxs)("div",{className:"text-num",children:[Object(x.jsx)(h.a,{allowZero:!0,value:b.shares,decimalScale:2})," ",Object(x.jsx)("span",{children:"Shares"})," "]})]}),Object(x.jsx)("div",{className:"odd claim-network",children:Object(x.jsx)("div",{className:"text-title money",children:Object(x.jsx)(h.a,{allowZero:!0,value:b.values,suffix:" "+n,decimalScale:2})})}),Object(x.jsx)("div",{className:"title-check"}),Object(x.jsx)(N,{wallet:t,chainId:a,address:c,liqInfo:b,baseToken:n,loadLiquidity:v,isLpPool:m,loadLiqidityInfo:v})]})})));t.a=function(e){return Object(x.jsxs)("div",{className:"liquidity-info",children:[Object(x.jsx)(c.a,Object(n.a)({},e)),Object(x.jsx)(y,Object(n.a)({},e))]})}},587:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),c=a.n(n),s=a(2),r=a(17),i=a(4),l=a(49);var d=a(158);var u=a(564),o=a(84),j=a(48);function b(e){var t=e.wallet,a=Object(i.useState)("Collect Wallet"),n=Object(r.a)(a,2),b=n[0],x=n[1],O=Object(i.useState)(!1),m=Object(r.a)(O,2),f=m[0],h=m[1],v=function(e){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],d=a[1],u=null,o=function(){var t=Object(s.a)(c.a.mark((function t(){var a,n,s,r,i,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(l.getUserInfoAll)(e.detail.account);case 3:a=t.sent,n=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,r=(+a.lp).toFixed(2),i=(+a.trade).toFixed(2),u=a.chainId,d({claimed:n,unclaimed:s,harvestDeriLp:r,harvestDeriTrade:i,chainId:u});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){return u=window.setInterval(o,18e4),o(),function(){return clearInterval(u)}}),[e.detail.account]),[n,u]}(t),p=Object(r.a)(v,2),N=p[0],y=p[1],I=Object(i.useState)(""),k=Object(r.a)(I,2),w=k[0],g=k[1],L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return d[l.DeriEnv.get()][t][e]||{}}(N.chainId),S=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(o.b)(t.detail.chainId,N.chainId)){e.next=3;break}return alert("Your DERI is on ".concat(L.text," . Connect to ").concat(L.text," to claim.")),e.abrupt("return");case 3:if(0!==N.unclaimed){e.next=6;break}return alert("Sorry,no DERI to claim yet"),e.abrupt("return");case 6:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=10;break}return alert("Claiming DERI is disabled during first 30 minutes of each epoch"),e.abrupt("return");case 10:return e.next=12,Object(l.mintDToken)(t.detail.chainId,t.detail.account);case 12:if(!e.sent.success){e.next=18;break}return clearInterval(y),e.abrupt("return",!0);case 18:return alert("Claim failed"),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,S();case 3:e.sent&&h(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,n=parseInt(a/3600),c=parseInt(a%3600/60),s=parseInt(a%60);g("".concat(n," h ").concat(c," m ").concat(s," s"))}),1e3);return t.isConnected()?x("CLAIM"):x("Collect Wallet"),function(){clearInterval(e)}}),[t.detail.account]),Object(j.jsxs)("div",{className:"claim-box",children:[Object(j.jsx)("div",{className:"odd title",children:"My Liquidity-Providing Harvest in Current Epoch"}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:"Current Epoch Remaining Time"}),Object(j.jsx)("div",{className:"text-num",children:w})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:"My Harvest in Current Epoch (estimated)"}),Object(j.jsxs)("div",{className:"text-num",children:[N.harvestDeriLp," DERI"]})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:"Claimed DERI"}),Object(j.jsx)("div",{className:"text-num",children:N.claimed})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title"}),Object(j.jsx)("div",{className:"text-num"})]}),Object(j.jsxs)("div",{className:"odd text",children:[Object(j.jsx)("div",{className:"text-title",children:"Unclaimed DERI"}),Object(j.jsx)("div",{className:"text-num",children:f?0:N.unclaimed})]}),Object(j.jsx)("div",{className:"odd claim-network",children:Object(j.jsxs)("div",{className:"text-title",children:["Your DERI is on ",L.text," . Connect to ",L.text," to claim."]})}),Object(j.jsx)("div",{className:"claim-btn",children:Object(j.jsx)(u.a,{btnText:b,click:C,className:"claim"})})]})}},588:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(22),c=a(567),s=a(587),r=a(0),i=a.n(r),l=a(2),d=a(17),u=a(4),o=a(49),j=a(24),b=a(156),x=a(48);var O=Object(b.b)("trading")(Object(b.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,n=e.trading,c=e.chainId,s=e.address,r=e.symbol,b=Object(u.useState)({}),O=Object(d.a)(b,2),m=O[0],f=O[1],h=Object(u.useState)({}),v=Object(d.a)(h,2),p=v[0],N=v[1],y=Object(j.g)(),I=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getUserInfoAll)(a.account);case 2:return t=e.sent,e.next=5,Object(o.getUserInfoInPool)(c,s,a.account);case 5:n=e.sent,r=(+t.trade).toFixed(2),l=n.volume1h,f({harvestDeriTrade:r,myTradingVolumeCurrent:l});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolInfoApy)(c,s);case 2:t=e.sent,a=t.volume1h,N({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return a&&a.account&&(I(),k()),function(){}}),[]),Object(x.jsxs)("div",{className:"liquidity-box",children:[Object(x.jsx)("div",{className:"odd title",children:"Trade to Earn DERI"}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:"Total Trading Volume in Current Hour"}),Object(x.jsx)("div",{className:"text-num",children:p.totalTradingVolumeCurrent||0})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:"My Trading Volume in Current Hour"}),Object(x.jsx)("div",{className:"text-num",children:m.myTradingVolumeCurrent||0})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsx)("div",{className:"odd claim-network"}),Object(x.jsx)("div",{className:"claim-btn",children:Object(x.jsx)("button",{className:"claim",onClick:function(){n.switch({chainId:c,pool:s,symbol:r}),y.push("/lite")},children:"TRADE"})})]})})));function m(e){var t=e.wallet,a=Object(c.a)(e,["wallet"]);return Object(x.jsxs)("div",{className:"trade-info",children:[Object(x.jsx)(s.a,{wallet:t}),Object(x.jsx)(O,Object(n.a)({},a))]})}},613:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(572),s=(n=c)&&n.__esModule?n:{default:n};t.default=s.default,e.exports=t.default}}]);
//# sourceMappingURL=4.b9e691d3.chunk.js.map