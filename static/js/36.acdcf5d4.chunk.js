(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[36],{1436:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return r}));var n=c(751),a=(c(903),c(31));function r(e){var t=e.lang;return Object(a.jsx)("div",{className:"Diptwo",children:Object(a.jsx)(n.a,{lang:t})})}},689:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var n=c(0),a=c.n(n),r=c(2),s=c(16),i=c(12),o=c(31);function u(e){var t=e.btnText,c=e.className,n=e.disabled,u=e.click,l=e.afterClick,b=e.checkApprove,j=e.wallet,d=e.spec,O=e.lang,p=Object(i.useState)(n?"disabled":"enabled"),f=Object(s.a)(p,2),v=f[0],x=f[1],h=Object(i.useState)(!0),m=Object(s.a)(h,2),w=m[0],N=m[1],I=Object(i.useState)(!1),g=Object(s.a)(I,2),k=g[0],y=g[1],S=Object(i.useState)(t),C=Object(s.a)(S,2),E=C[0],_=C[1],T=Object(i.useRef)(null),D=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return R(),e.next=5,u();case 5:e.sent&&l&&l(),B();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){x("disabled"),y(!0),T.current&&(T.current.style.display="inline-block")},B=function(){T.current&&(T.current.style.display="none"),x("enabled"),y(!1)},V=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(d.pool,d.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.next=3,j.approve(d.pool,d.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(O["approve-failed"])),B();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return V(),function(){}}),[j,d,b]),Object(i.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(o.jsxs)("button",{className:c,onClick:function(){w?D():q()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:T,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?O.pending:w?E:O.approve]})}},690:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c(69),a=c(75),r=c(698),s=c(16),i=c(12),o=c(697),u=c(31),l=["allowZero"];function b(e){var t=Object(i.useState)(Object(u.jsx)("span",{className:"loading-line"})),c=Object(s.a)(t,2),b=c[0],j=c[1];return Object(i.useEffect)((function(){var t=e.allowZero,c=Object(r.a)(e,l);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&j(Object(u.jsx)(o.a,Object(n.a)(Object(n.a)({},c),{},{displayType:"text"}))),function(){}}),[e.value]),b}},751:function(e,t,c){"use strict";var n=c(0),a=c.n(n),r=c(2),s=c(16),i=c(12),o=c(74),u=c(689),l=c(690),b=c(18),j=c(31);t.a=Object(o.b)("wallet","loading")(Object(o.c)((function(e){var t=e.wallet,c=void 0===t?{}:t,n=e.lang,o=e.loading,d=Object(i.useState)(!1),O=Object(s.a)(d,2),p=O[0],f=O[1],v=Object(i.useState)(!1),x=Object(s.a)(v,2),h=x[0],m=x[1],w=Object(i.useState)(!1),N=Object(s.a)(w,2),I=N[0],g=N[1],k=Object(i.useState)(""),y=Object(s.a)(k,2),S=y[0],C=y[1],E=Object(i.useState)(""),_=Object(s.a)(E,2),T=_[0],D=_[1],R=Object(i.useState)(""),B=Object(s.a)(R,2),V=B[0],q=B[1],A=Object(i.useState)([]),H=Object(s.a)(A,2),J=H[0],Z=H[1],z=Object(i.useState)(""),M=Object(s.a)(z,2),P=M[0],U=M[1],Y=Object(i.useState)(""),F=Object(s.a)(Y,2),G=F[0],K=F[1],L=function(){c.connect()},Q=Object(i.useState)(Object(j.jsx)(u.a,{click:L,lang:n,className:"vote",btnText:n["connet-wallet"]})),W=Object(s.a)(Q,2),X=W[0],$=W[1],ee=function(e){var t=e.target.value;C(t)},te=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=3;break}return alert(n["please-choose-your-vote-first"]),e.abrupt("return");case 3:return e.next=5,ce();case 5:e.sent&&(ne(),ae(),re());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.zb)(c.detail.chainId,c.detail.account,S);case 2:if(!e.sent.success){e.next=13;break}t=!0;case 5:if(!t){e.next=12;break}return e.next=8,Object(b.V)(c.detail.account);case 8:n=e.sent,t=n.timestamp?!(n.timestamp>G):!n.timestamp,e.next=5;break;case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.V)(c.detail.account);case 2:(t=e.sent)&&("1"===t.option?(f(!0),D("I")):"2"===t.option?(m(!0),D("II")):"3"===t.option&&(g(!0),D("III")),K(t.timestamp));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.U)(c.detail.account);case 2:(t=e.sent)&&q(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(r.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.Y)();case 2:t=e.sent,o.loaded(),t?(c=+t[0]+ +t[1]+ +t[2],Z(t),U(c)):alert(t.error);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){o.loading();window.setInterval((function(){re()}),1e3)}),[]),Object(i.useEffect)((function(){document.getElementsByClassName("pre_eth")[0].style.width="".concat(+J[0]/P*100,"%"),document.getElementsByClassName("pre_bsc")[0].style.width="".concat(+J[1]/P*100,"%"),document.getElementsByClassName("pre_heco")[0].style.width="".concat(+J[2]/P*100,"%")}),[J,P]),Object(i.useEffect)((function(){c.isConnected()&&window.setInterval((function(){ae(),ne()}),1e3)}),[c,c.detail.account]),Object(i.useEffect)((function(){var e;e=c.isConnected()?Object(j.jsx)(u.a,{className:"vote",lang:n,btnText:n.vote,click:te}):Object(j.jsx)(u.a,{click:L,className:"vote",lang:n,btnText:n["connet-wallet"]}),$(e)}),[c.detail.account,S]),Object(j.jsxs)("div",{className:"dip_two_box",children:[Object(j.jsx)("div",{className:"H2 DIP1",children:n["governance-title"]}),Object(j.jsxs)("div",{className:"title-describe",children:[Object(j.jsx)("div",{children:n["governance-describe"]}),Object(j.jsx)("div",{children:n["governance-describe-two"]}),Object(j.jsxs)("div",{children:[n["governance-describe-three"]," ",Object(j.jsx)("a",{className:"doc-a",rel:"noreferrer",target:"_blank",href:"https://docs.deri.finance/mining-faq#what-do-i-harvest-for-liquidity-mining",children:n["governance-describe-three-a"]}),"  ",n["governance-describe-three-one"]]}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"flex",children:["I.",n["governance-options-one-describe"],Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"II.",n["governance-options-two-describe"],Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"III.",n["governance-options-three"],Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"radio",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"fle",children:[Object(j.jsxs)("div",{className:"rad",children:[Object(j.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return ee(e)},defaultChecked:p})," ",Object(j.jsx)("label",{for:"I",children:"I"})]}),Object(j.jsxs)("div",{className:"prele_eth",children:[Object(j.jsx)("div",{className:"pre_eth"}),Object(j.jsxs)("span",{className:"num-deri",children:[" ",J[0]?Object(j.jsx)(l.a,{value:J[0],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(j.jsxs)("div",{className:"fle",children:[Object(j.jsxs)("div",{className:"rad",children:[Object(j.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return ee(e)},defaultChecked:h})," ",Object(j.jsx)("label",{for:"II",children:"II"})]}),Object(j.jsxs)("div",{className:"prele_bsc",children:[Object(j.jsx)("div",{className:"pre_bsc"}),Object(j.jsxs)("span",{className:"num-deri",children:[" ",J[1]?Object(j.jsx)(l.a,{value:J[1],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(j.jsxs)("div",{className:"fle",children:[Object(j.jsxs)("div",{className:"rad",children:[Object(j.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return ee(e)},defaultChecked:I})," ",Object(j.jsx)("label",{for:"III",children:"III"})]}),Object(j.jsxs)("div",{className:"prele_heco",children:[Object(j.jsx)("div",{className:"pre_heco"}),Object(j.jsxs)("span",{className:"num-deri",children:[" ",J[2]?Object(j.jsx)(l.a,{value:J[2],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]})]}),Object(j.jsx)("div",{children:X}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[n["your-vote"]," : ",T]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[n["your-voting-power"]," : ",V?Object(j.jsx)(l.a,{value:V,decimalScale:0,thousandSeparator:!0}):"0"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{class:"H2",children:"Voting rules:"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"1.",n["vote-rules-one"],Object(j.jsx)("br",{}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-one"]}),Object(j.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-two"]}),Object(j.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-three"]}),Object(j.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-four"]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"2. ",n["vote-rules-two"],Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"3. ",n["vote-rules-three"],Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"4. ",n["vote-rules-four"]]})]})]})})))},903:function(e,t,c){}}]);
//# sourceMappingURL=36.acdcf5d4.chunk.js.map