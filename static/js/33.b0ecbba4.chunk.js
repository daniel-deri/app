(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[33],{1425:function(e,t,c){},1474:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return s}));var n=c(928),a=(c(1425),c(929),c(32));function s(e){var t=e.lang;return Object(a.jsx)("div",{className:"governance",children:Object(a.jsx)(n.a,{lang:t})})}},696:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0),a=c.n(n),s=c(1),r=c(7),i=c(13),l=c(32);function o(e){var t=e.btnText,c=e.className,n=e.disabled,o=e.click,u=e.afterClick,j=e.checkApprove,b=e.wallet,d=e.spec,O=e.lang,f=Object(i.useState)(n?"disabled":"enabled"),p=Object(r.a)(f,2),v=p[0],x=p[1],h=Object(i.useState)(!0),m=Object(r.a)(h,2),w=m[0],N=m[1],g=Object(i.useState)(!1),I=Object(r.a)(g,2),k=I[0],y=I[1],S=Object(i.useState)(t),C=Object(r.a)(S,2),E=C[0],_=C[1],T=Object(i.useRef)(null),D=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return R(),e.next=5,o();case 5:e.sent&&u&&u(),V();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){x("disabled"),y(!0),T.current&&(T.current.style.display="inline-block")},V=function(){T.current&&(T.current.style.display="none"),x("enabled"),y(!1)},Z=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(j&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(d.pool,d.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.next=3,b.approve(d.pool,d.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(O["approve-failed"])),V();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return Z(),function(){}}),[b,d,j]),Object(i.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(l.jsxs)("button",{className:c,onClick:function(){w?D():A()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:T,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?O.pending:w?E:O.approve]})}},697:function(e,t,c){"use strict";var n=c(49),a=c(706),s=c(43),r=c(7),i=c(13),l=c(703),o=c(77),u=c(32);t.a=Object(o.b)("wallet","trading")(Object(o.c)((function(e){var t=Object(i.useState)(Object(u.jsx)("span",{className:"loading-line"})),c=Object(r.a)(t,2),o=c[0],j=c[1],b=function(){var t=e.allowZero;return"object"!==Object(s.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t};return Object(i.useEffect)((function(){e.allowZero;var t=e.wallet,c=e.defaultValue,s=void 0===c?"--":c,r=Object(a.a)(e,["allowZero","wallet","defaultValue"]);b()?j(Object(u.jsx)(l.a,Object(n.a)(Object(n.a)({},r),{},{displayType:"text",fixedDecimalScale:!0}))):j(Object(u.jsx)("span",{className:"loading-line"}));var i=window.setTimeout((function(){b()||!t||t.isConnected()||j(s)}),1e4);return function(){clearTimeout(i)}}),[e.value]),o})))},766:function(e,t,c){"use strict";var n=c(0),a=c.n(n),s=c(1),r=c(7),i=c(13),l=c(77),o=c(696),u=c(697),j=c(16),b=c(32);t.a=Object(l.b)("wallet","loading")(Object(l.c)((function(e){var t=e.wallet,c=void 0===t?{}:t,n=e.lang,l=e.loading,d=Object(i.useState)(!1),O=Object(r.a)(d,2),f=O[0],p=O[1],v=Object(i.useState)(!1),x=Object(r.a)(v,2),h=x[0],m=x[1],w=Object(i.useState)(!1),N=Object(r.a)(w,2),g=N[0],I=N[1],k=Object(i.useState)(""),y=Object(r.a)(k,2),S=y[0],C=y[1],E=Object(i.useState)(""),_=Object(r.a)(E,2),T=_[0],D=_[1],R=Object(i.useState)(""),V=Object(r.a)(R,2),Z=V[0],A=V[1],B=Object(i.useState)([]),q=Object(r.a)(B,2),F=q[0],H=q[1],J=Object(i.useState)(""),M=Object(r.a)(J,2),P=M[0],U=M[1],z=Object(i.useState)(""),G=Object(r.a)(z,2),K=G[0],L=G[1],Q=function(){c.connect()},W=Object(i.useState)(Object(b.jsx)(o.a,{click:Q,lang:n,className:"vote",btnText:n["connet-wallet"]})),X=Object(r.a)(W,2),Y=X[0],$=X[1],ee=function(e){var t=e.target.value;C(t)},te=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=3;break}return alert(n["please-choose-your-vote-first"]),e.abrupt("return");case 3:return e.next=5,ce();case 5:e.sent&&(ne(),ae(),se());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.Ab)(c.detail.chainId,c.detail.account,S);case 2:if(!e.sent.success){e.next=13;break}t=!0;case 5:if(!t){e.next=12;break}return e.next=8,Object(j.V)(c.detail.account);case 8:n=e.sent,t=n.timestamp?!(n.timestamp>K):!n.timestamp,e.next=5;break;case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.V)(c.detail.account);case 2:(t=e.sent)&&("1"===t.option?(p(!0),D("I")):"2"===t.option?(m(!0),D("II")):"3"===t.option&&(I(!0),D("III")),L(t.timestamp));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.U)(c.detail.account);case 2:(t=e.sent)&&A(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(s.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.Z)();case 2:t=e.sent,l.loaded(),t?(c=+t[0]+ +t[1]+ +t[2],H(t),U(c)):alert(t.error);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){l.loading();window.setInterval((function(){se()}),1e3)}),[]),Object(i.useEffect)((function(){document.getElementsByClassName("pre_eth")[0].style.width="".concat(+F[0]/P*100,"%"),document.getElementsByClassName("pre_bsc")[0].style.width="".concat(+F[1]/P*100,"%"),document.getElementsByClassName("pre_heco")[0].style.width="".concat(+F[2]/P*100,"%")}),[F,P]),Object(i.useEffect)((function(){c.isConnected()&&window.setInterval((function(){ae(),ne()}),1e3)}),[c,c.detail.account]),Object(i.useEffect)((function(){var e;e=c.isConnected()?Object(b.jsx)(o.a,{className:"vote",lang:n,btnText:n.vote,click:te}):Object(b.jsx)(o.a,{click:Q,className:"vote",lang:n,btnText:n["connet-wallet"]}),$(e)}),[c.detail.account,S]),Object(b.jsxs)("div",{className:"dip_two_box",children:[Object(b.jsx)("div",{className:"H2 DIP1",children:n["governance-title"]}),Object(b.jsxs)("div",{className:"title-describe",children:[Object(b.jsx)("div",{children:n["governance-describe"]}),Object(b.jsx)("div",{children:n["governance-describe-two"]}),Object(b.jsxs)("div",{children:[n["governance-describe-three"]," ",Object(b.jsx)("a",{className:"doc-a",rel:"noreferrer",target:"_blank",href:"https://docs.deri.finance/mining-faq#what-do-i-harvest-for-liquidity-mining",children:n["governance-describe-three-a"]}),"  ",n["governance-describe-three-one"]]}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"flex",children:["I.",n["governance-options-one-describe"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"II.",n["governance-options-two-describe"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"III.",n["governance-options-three"],Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"radio",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return ee(e)},defaultChecked:f})," ",Object(b.jsx)("label",{for:"I",children:"I"})]}),Object(b.jsxs)("div",{className:"prele_eth",children:[Object(b.jsx)("div",{className:"pre_eth"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",F[0]?Object(b.jsx)(u.a,{value:F[0],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return ee(e)},defaultChecked:h})," ",Object(b.jsx)("label",{for:"II",children:"II"})]}),Object(b.jsxs)("div",{className:"prele_bsc",children:[Object(b.jsx)("div",{className:"pre_bsc"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",F[1]?Object(b.jsx)(u.a,{value:F[1],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return ee(e)},defaultChecked:g})," ",Object(b.jsx)("label",{for:"III",children:"III"})]}),Object(b.jsxs)("div",{className:"prele_heco",children:[Object(b.jsx)("div",{className:"pre_heco"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",F[2]?Object(b.jsx)(u.a,{value:F[2],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]})]}),Object(b.jsx)("div",{children:Y}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[n["your-vote"]," : ",T]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[n["your-voting-power"]," : ",Z?Object(b.jsx)(u.a,{value:Z,decimalScale:0,thousandSeparator:!0}):"0"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{class:"H2",children:"Voting rules:"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"1.",n["vote-rules-one"],Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-one"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-two"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-three"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-four"]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"2. ",n["vote-rules-two"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"3. ",n["vote-rules-three"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"4. ",n["vote-rules-four"]]})]})]})})))},928:function(e,t,c){"use strict";var n=c(0),a=c.n(n),s=c(1),r=c(7),i=c(13),l=c(77),o=(c(695),c(152)),u=(c(766),c(32));t.a=Object(l.b)("wallet")(Object(l.c)((function(e){e.wallet;var t=e.lang,c=Object(i.useState)(!0),n=Object(r.a)(c,2),l=n[0],j=n[1],b=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"governance_box",children:[Object(u.jsxs)("div",{className:"check",children:[Object(u.jsx)("div",{className:l?"checked-now":"",onClick:function(){return b(!0)},children:t["vote-now"]}),Object(u.jsx)("div",{className:l?"":"checked-now",onClick:function(){return b(!1)},children:t.closed})]}),l&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"now-vote",children:t["no-proposals-found"]})}),!l&&Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"closed",children:[Object(u.jsx)("div",{className:"title"}),Object(u.jsx)("div",{children:Object(u.jsxs)(o.b,{to:"/diptwo",children:[" ",t["dip-two"]," "]})}),Object(u.jsx)("div",{children:Object(u.jsxs)(o.b,{to:"/diphistory",children:[" ",t["dip-one"]," "]})})]})})]})})))},929:function(e,t,c){}}]);
//# sourceMappingURL=33.b0ecbba4.chunk.js.map