(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[43],{1407:function(e,t,n){},1454:function(e,t,n){"use strict";n.r(t);var c=n(911),a=(n(1407),n(32));t.default=function({lang:e}){return Object(a.jsx)("div",{children:Object(a.jsx)(c.a,{lang:e})})}},696:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),s=n(2),r=n(5),i=n(11),u=n(32);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,b=e.afterClick,o=e.checkApprove,d=e.wallet,f=e.spec,p=e.lang,j=Object(i.useState)(c?"disabled":"enabled"),O=Object(r.a)(j,2),x=O[0],h=O[1],v=Object(i.useState)(!0),k=Object(r.a)(v,2),w=k[0],g=k[1],m=Object(i.useState)(!1),y=Object(r.a)(m,2),N=y[0],B=y[1],T=Object(i.useState)(t),S=Object(r.a)(T,2),A=S[0],C=S[1],E=Object(i.useRef)(null),I=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===x){e.next=2;break}return e.abrupt("return");case 2:return D(),e.next=5,l();case 5:e.sent&&b&&b(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){h("disabled"),B(!0),E.current&&(E.current.style.display="inline-block")},F=function(){E.current&&(E.current.style.display="none"),h("enabled"),B(!1)},J=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o&&d&&d.detail.account)){e.next=5;break}return e.next=3,d.isApproved(f.pool,f.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(),e.next=3,d.approve(f.pool,f.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(p["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return J(),function(){}}),[d,f,o]),Object(i.useEffect)((function(){return t&&C(t),function(){}}),[t]),Object(u.jsxs)("button",{className:n,onClick:function(){w?I():R()},children:[Object(u.jsx)("span",{className:"btn-loading-wrap",children:Object(u.jsx)("span",{ref:E,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?p.pending:w?A:p.approve]})}},911:function(e,t,n){"use strict";n(11);var c=n(75),a=n(696),s=n(16),r=n(32);t.a=Object(c.b)("wallet")(Object(c.c)((function({wallet:e={},lang:t}){const n="0xaa2B8115c094445e96C2CD951c17a30F41867323",c="0x8e60B350FA4fbaF209712bB721373364DE858A5d",i=()=>e&&e.detail&&e.detail.account;return Object(r.jsxs)("div",{className:"faucet-box",children:[Object(r.jsx)("div",{class:"title",children:t["obtain-testnet-token"]}),Object(r.jsx)("div",{class:"BUSD",children:Object(r.jsx)(a.a,{className:"btn",click:async()=>{if(i()){(await Object(s.nb)(e.detail.chainId,n,e.detail.account)).success}},btnText:t.tbusd,lang:t})}),Object(r.jsx)("div",{class:"WETH",children:Object(r.jsx)(a.a,{className:"btn",click:async()=>{if(i()){(await Object(s.nb)(e.detail.chainId,c,e.detail.account)).success}},btnText:t.tweth,lang:t})}),Object(r.jsx)("div",{class:"go-to-bnb",children:t["go-to-bnb"]}),Object(r.jsx)("div",{class:"BNB",children:Object(r.jsx)("a",{target:"_blank",href:"https://testnet.binance.org/faucet-smart",children:t.bnb})})]})})))}}]);
//# sourceMappingURL=43.f88b5ff1.chunk.js.map