(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[39],{1495:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return r}));var n=c(766),a=(c(994),c(32));function r(e){var t=e.lang;return Object(a.jsx)("div",{className:"Diptwo",children:Object(a.jsx)(n.a,{lang:t})})}},696:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0),a=c.n(n),r=c(1),s=c(7),i=c(13),l=c(32);function o(e){var t=e.btnText,c=e.className,n=e.disabled,o=e.click,u=e.afterClick,b=e.checkApprove,j=e.wallet,d=e.spec,O=e.lang,f=Object(i.useState)(n?"disabled":"enabled"),p=Object(s.a)(f,2),v=p[0],x=p[1],h=Object(i.useState)(!0),m=Object(s.a)(h,2),w=m[0],N=m[1],I=Object(i.useState)(!1),g=Object(s.a)(I,2),k=g[0],y=g[1],S=Object(i.useState)(t),C=Object(s.a)(S,2),E=C[0],_=C[1],T=Object(i.useRef)(null),D=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return R(),e.next=5,o();case 5:e.sent&&u&&u(),V();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){x("disabled"),y(!0),T.current&&(T.current.style.display="inline-block")},V=function(){T.current&&(T.current.style.display="none"),x("enabled"),y(!1)},Z=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(d.pool,d.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.next=3,j.approve(d.pool,d.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(O["approve-failed"])),V();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return Z(),function(){}}),[j,d,b]),Object(i.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(l.jsxs)("button",{className:c,onClick:function(){w?D():A()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:T,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?O.pending:w?E:O.approve]})}},697:function(e,t,c){"use strict";var n=c(49),a=c(706),r=c(43),s=c(7),i=c(13),l=c(703),o=c(77),u=c(32);t.a=Object(o.b)("wallet","trading")(Object(o.c)((function(e){var t=Object(i.useState)(Object(u.jsx)("span",{className:"loading-line"})),c=Object(s.a)(t,2),o=c[0],b=c[1],j=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t};return Object(i.useEffect)((function(){e.allowZero;var t=e.wallet,c=e.defaultValue,r=void 0===c?"--":c,s=Object(a.a)(e,["allowZero","wallet","defaultValue"]);j()?b(Object(u.jsx)(l.a,Object(n.a)(Object(n.a)({},s),{},{displayType:"text",fixedDecimalScale:!0}))):b(Object(u.jsx)("span",{className:"loading-line"}));var i=window.setTimeout((function(){j()||!t||t.isConnected()||b(r)}),1e4);return function(){clearTimeout(i)}}),[e.value]),o})))},766:function(e,t,c){"use strict";var n=c(0),a=c.n(n),r=c(1),s=c(7),i=c(13),l=c(77),o=c(696),u=c(697),b=c(16),j=c(32);t.a=Object(l.b)("wallet","loading")(Object(l.c)((function(e){var t=e.wallet,c=void 0===t?{}:t,n=e.lang,l=e.loading,d=Object(i.useState)(!1),O=Object(s.a)(d,2),f=O[0],p=O[1],v=Object(i.useState)(!1),x=Object(s.a)(v,2),h=x[0],m=x[1],w=Object(i.useState)(!1),N=Object(s.a)(w,2),I=N[0],g=N[1],k=Object(i.useState)(""),y=Object(s.a)(k,2),S=y[0],C=y[1],E=Object(i.useState)(""),_=Object(s.a)(E,2),T=_[0],D=_[1],R=Object(i.useState)(""),V=Object(s.a)(R,2),Z=V[0],A=V[1],B=Object(i.useState)([]),q=Object(s.a)(B,2),H=q[0],J=q[1],M=Object(i.useState)(""),P=Object(s.a)(M,2),U=P[0],z=P[1],F=Object(i.useState)(""),G=Object(s.a)(F,2),K=G[0],L=G[1],Q=function(){c.connect()},W=Object(i.useState)(Object(j.jsx)(o.a,{click:Q,lang:n,className:"vote",btnText:n["connet-wallet"]})),X=Object(s.a)(W,2),Y=X[0],$=X[1],ee=function(e){var t=e.target.value;C(t)},te=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=3;break}return alert(n["please-choose-your-vote-first"]),e.abrupt("return");case 3:return e.next=5,ce();case 5:e.sent&&(ne(),ae(),re());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.Ab)(c.detail.chainId,c.detail.account,S);case 2:if(!e.sent.success){e.next=13;break}t=!0;case 5:if(!t){e.next=12;break}return e.next=8,Object(b.V)(c.detail.account);case 8:n=e.sent,t=n.timestamp?!(n.timestamp>K):!n.timestamp,e.next=5;break;case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.V)(c.detail.account);case 2:(t=e.sent)&&("1"===t.option?(p(!0),D("I")):"2"===t.option?(m(!0),D("II")):"3"===t.option&&(g(!0),D("III")),L(t.timestamp));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.U)(c.detail.account);case 2:(t=e.sent)&&A(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(r.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.Z)();case 2:t=e.sent,l.loaded(),t?(c=+t[0]+ +t[1]+ +t[2],J(t),z(c)):alert(t.error);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){l.loading();window.setInterval((function(){re()}),1e3)}),[]),Object(i.useEffect)((function(){document.getElementsByClassName("pre_eth")[0].style.width="".concat(+H[0]/U*100,"%"),document.getElementsByClassName("pre_bsc")[0].style.width="".concat(+H[1]/U*100,"%"),document.getElementsByClassName("pre_heco")[0].style.width="".concat(+H[2]/U*100,"%")}),[H,U]),Object(i.useEffect)((function(){c.isConnected()&&window.setInterval((function(){ae(),ne()}),1e3)}),[c,c.detail.account]),Object(i.useEffect)((function(){var e;e=c.isConnected()?Object(j.jsx)(o.a,{className:"vote",lang:n,btnText:n.vote,click:te}):Object(j.jsx)(o.a,{click:Q,className:"vote",lang:n,btnText:n["connet-wallet"]}),$(e)}),[c.detail.account,S]),Object(j.jsxs)("div",{className:"dip_two_box",children:[Object(j.jsx)("div",{className:"H2 DIP1",children:n["governance-title"]}),Object(j.jsxs)("div",{className:"title-describe",children:[Object(j.jsx)("div",{children:n["governance-describe"]}),Object(j.jsx)("div",{children:n["governance-describe-two"]}),Object(j.jsxs)("div",{children:[n["governance-describe-three"]," ",Object(j.jsx)("a",{className:"doc-a",rel:"noreferrer",target:"_blank",href:"https://docs.deri.finance/mining-faq#what-do-i-harvest-for-liquidity-mining",children:n["governance-describe-three-a"]}),"  ",n["governance-describe-three-one"]]}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"flex",children:["I.",n["governance-options-one-describe"],Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"II.",n["governance-options-two-describe"],Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"III.",n["governance-options-three"],Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"radio",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"fle",children:[Object(j.jsxs)("div",{className:"rad",children:[Object(j.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return ee(e)},defaultChecked:f})," ",Object(j.jsx)("label",{for:"I",children:"I"})]}),Object(j.jsxs)("div",{className:"prele_eth",children:[Object(j.jsx)("div",{className:"pre_eth"}),Object(j.jsxs)("span",{className:"num-deri",children:[" ",H[0]?Object(j.jsx)(u.a,{value:H[0],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(j.jsxs)("div",{className:"fle",children:[Object(j.jsxs)("div",{className:"rad",children:[Object(j.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return ee(e)},defaultChecked:h})," ",Object(j.jsx)("label",{for:"II",children:"II"})]}),Object(j.jsxs)("div",{className:"prele_bsc",children:[Object(j.jsx)("div",{className:"pre_bsc"}),Object(j.jsxs)("span",{className:"num-deri",children:[" ",H[1]?Object(j.jsx)(u.a,{value:H[1],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(j.jsxs)("div",{className:"fle",children:[Object(j.jsxs)("div",{className:"rad",children:[Object(j.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return ee(e)},defaultChecked:I})," ",Object(j.jsx)("label",{for:"III",children:"III"})]}),Object(j.jsxs)("div",{className:"prele_heco",children:[Object(j.jsx)("div",{className:"pre_heco"}),Object(j.jsxs)("span",{className:"num-deri",children:[" ",H[2]?Object(j.jsx)(u.a,{value:H[2],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]})]}),Object(j.jsx)("div",{children:Y}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[n["your-vote"]," : ",T]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[n["your-voting-power"]," : ",Z?Object(j.jsx)(u.a,{value:Z,decimalScale:0,thousandSeparator:!0}):"0"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{class:"H2",children:"Voting rules:"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"1.",n["vote-rules-one"],Object(j.jsx)("br",{}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-one"]}),Object(j.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-two"]}),Object(j.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-three"]}),Object(j.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-four"]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"2. ",n["vote-rules-two"],Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"3. ",n["vote-rules-three"],Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"4. ",n["vote-rules-four"]]})]})]})})))},994:function(e,t,c){}}]);
//# sourceMappingURL=39.0daf1c82.chunk.js.map