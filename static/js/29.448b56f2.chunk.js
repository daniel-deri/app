(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[29],{1323:function(e,t,c){},1370:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return s}));var n=c(871),a=(c(1323),c(872),c(18));function s(e){var t=e.lang;return Object(a.jsx)("div",{className:"governance",children:Object(a.jsx)(n.a,{lang:t})})}},639:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0),a=c.n(n),s=c(1),r=c(9),i=c(8),l=c(18);function o(e){var t=e.btnText,c=e.className,n=e.disabled,o=e.click,u=e.afterClick,j=e.checkApprove,b=e.wallet,d=e.spec,O=e.lang,p=Object(i.useState)(n?"disabled":"enabled"),f=Object(r.a)(p,2),v=f[0],x=f[1],h=Object(i.useState)(!0),m=Object(r.a)(h,2),N=m[0],w=m[1],I=Object(i.useState)(!1),g=Object(r.a)(I,2),k=g[0],y=g[1],S=Object(i.useState)(t),C=Object(r.a)(S,2),E=C[0],_=C[1],T=Object(i.useRef)(null),R=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return D(),e.next=5,o();case 5:e.sent&&u&&u(),B();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){x("disabled"),y(!0),T.current&&(T.current.style.display="inline-block")},B=function(){T.current&&(T.current.style.display="none"),x("enabled"),y(!1)},V=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(j&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(d.pool,d.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(),e.next=3,b.approve(d.pool,d.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(O["approve-failed"])),B();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return V(),function(){}}),[b,d,j]),Object(i.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(l.jsxs)("button",{className:c,onClick:function(){N?R():A()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:T,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?O.pending:N?E:O.approve]})}},641:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c(53),a=c(42),s=c(649),r=c(9),i=c(8),l=c(647),o=c(18),u=["allowZero"];function j(e){var t=Object(i.useState)(Object(o.jsx)("span",{className:"loading-line"})),c=Object(r.a)(t,2),j=c[0],b=c[1];return Object(i.useEffect)((function(){var t=e.allowZero,c=Object(s.a)(e,u);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&b(Object(o.jsx)(l.a,Object(n.a)(Object(n.a)({},c),{},{displayType:"text"}))),function(){}}),[e.value]),j}},743:function(e,t,c){"use strict";var n=c(0),a=c.n(n),s=c(1),r=c(9),i=c(8),l=c(47),o=c(639),u=c(641),j=c(13),b=c(18);t.a=Object(l.b)("wallet","loading")(Object(l.c)((function(e){var t=e.wallet,c=void 0===t?{}:t,n=e.lang,l=e.loading,d=Object(i.useState)(!1),O=Object(r.a)(d,2),p=O[0],f=O[1],v=Object(i.useState)(!1),x=Object(r.a)(v,2),h=x[0],m=x[1],N=Object(i.useState)(!1),w=Object(r.a)(N,2),I=w[0],g=w[1],k=Object(i.useState)(""),y=Object(r.a)(k,2),S=y[0],C=y[1],E=Object(i.useState)(""),_=Object(r.a)(E,2),T=_[0],R=_[1],D=Object(i.useState)(""),B=Object(r.a)(D,2),V=B[0],A=B[1],F=Object(i.useState)([]),H=Object(r.a)(F,2),J=H[0],Z=H[1],M=Object(i.useState)(""),P=Object(r.a)(M,2),U=P[0],Y=P[1],q=Object(i.useState)(""),z=Object(r.a)(q,2),G=z[0],K=z[1],L=function(){c.connect()},Q=Object(i.useState)(Object(b.jsx)(o.a,{click:L,lang:n,className:"vote",btnText:n["connet-wallet"]})),W=Object(r.a)(Q,2),X=W[0],$=W[1],ee=function(e){var t=e.target.value;C(t)},te=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=3;break}return alert(n["please-choose-your-vote-first"]),e.abrupt("return");case 3:return e.next=5,ce();case 5:e.sent&&(ne(),ae(),se());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.yb)(c.detail.chainId,c.detail.account,S);case 2:if(!e.sent.success){e.next=13;break}t=!0;case 5:if(!t){e.next=12;break}return e.next=8,Object(j.V)(c.detail.account);case 8:n=e.sent,t=n.timestamp?!(n.timestamp>G):!n.timestamp,e.next=5;break;case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.V)(c.detail.account);case 2:(t=e.sent)&&("1"===t.option?(f(!0),R("I")):"2"===t.option?(m(!0),R("II")):"3"===t.option&&(g(!0),R("III")),K(t.timestamp));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.U)(c.detail.account);case 2:(t=e.sent)&&A(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(s.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.Y)();case 2:t=e.sent,l.loaded(),t?(c=+t[0]+ +t[1]+ +t[2],Z(t),Y(c)):alert(t.error);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){l.loading();window.setInterval((function(){se()}),1e3)}),[]),Object(i.useEffect)((function(){document.getElementsByClassName("pre_eth")[0].style.width="".concat(+J[0]/U*100,"%"),document.getElementsByClassName("pre_bsc")[0].style.width="".concat(+J[1]/U*100,"%"),document.getElementsByClassName("pre_heco")[0].style.width="".concat(+J[2]/U*100,"%")}),[J,U]),Object(i.useEffect)((function(){c.isConnected()&&window.setInterval((function(){ae(),ne()}),1e3)}),[c,c.detail.account]),Object(i.useEffect)((function(){var e;e=c.isConnected()?Object(b.jsx)(o.a,{className:"vote",lang:n,btnText:n.vote,click:te}):Object(b.jsx)(o.a,{click:L,className:"vote",lang:n,btnText:n["connet-wallet"]}),$(e)}),[c.detail.account,S]),Object(b.jsxs)("div",{className:"dip_two_box",children:[Object(b.jsx)("div",{className:"H2 DIP1",children:n["governance-title"]}),Object(b.jsxs)("div",{className:"flex",children:[n["governance-describe"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"flex",children:["I.",n["governance-options-one-describe"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"II.",n["governance-options-two-describe"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"III.",n["governance-options-three"],Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"radio",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return ee(e)},defaultChecked:p})," ",Object(b.jsx)("label",{for:"I",children:"I"})]}),Object(b.jsxs)("div",{className:"prele_eth",children:[Object(b.jsx)("div",{className:"pre_eth"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",J[0]?Object(b.jsx)(u.a,{value:J[0],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return ee(e)},defaultChecked:h})," ",Object(b.jsx)("label",{for:"II",children:"II"})]}),Object(b.jsxs)("div",{className:"prele_bsc",children:[Object(b.jsx)("div",{className:"pre_bsc"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",J[1]?Object(b.jsx)(u.a,{value:J[1],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return ee(e)},defaultChecked:I})," ",Object(b.jsx)("label",{for:"III",children:"III"})]}),Object(b.jsxs)("div",{className:"prele_heco",children:[Object(b.jsx)("div",{className:"pre_heco"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",J[2]?Object(b.jsx)(u.a,{value:J[2],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]})]}),Object(b.jsx)("div",{children:X}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[n["your-vote"]," : ",T]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[n["your-voting-power"]," : ",V?Object(b.jsx)(u.a,{value:V,decimalScale:0,thousandSeparator:!0}):"0"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{class:"H2",children:"Voting rules:"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"1.",n["vote-rules-one"],Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-one"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-two"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-three"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-four"]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"2. ",n["vote-rules-two"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"3. ",n["vote-rules-three"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"4. ",n["vote-rules-four"]]})]})]})})))},871:function(e,t,c){"use strict";var n=c(0),a=c.n(n),s=c(1),r=c(9),i=c(8),l=c(47),o=(c(638),c(116)),u=c(743),j=c(18);t.a=Object(l.b)("wallet")(Object(l.c)((function(e){e.wallet;var t=e.lang,c=Object(i.useState)(!0),n=Object(r.a)(c,2),l=n[0],b=n[1],d=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"governance_box",children:[Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)("div",{className:l?"checked-now":"",onClick:function(){return d(!0)},children:t["vote-now"]}),Object(j.jsx)("div",{className:l?"":"checked-now",onClick:function(){return d(!1)},children:t.closed})]}),l&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"now-vote",children:Object(j.jsx)(u.a,{lang:t})})}),!l&&Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"closed",children:[Object(j.jsx)("div",{className:"title"}),Object(j.jsx)("div",{children:Object(j.jsxs)(o.b,{to:"/diphistory",children:[" ",t["dip-one"]," "]})})]})})]})})))},872:function(e,t,c){}}]);
//# sourceMappingURL=29.448b56f2.chunk.js.map