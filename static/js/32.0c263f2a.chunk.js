(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[32],{1437:function(e,t,c){},1475:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return n}));var a=c(913),s=(c(1437),c(980),c(32));function n(e){var t=e.lang;return Object(s.jsx)("div",{className:"governance",children:Object(s.jsx)(a.a,{lang:t})})}},696:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var a=c(0),s=c.n(a),n=c(2),r=c(5),i=c(11),l=c(32);function o(e){var t=e.btnText,c=e.className,a=e.disabled,o=e.click,j=e.afterClick,b=e.checkApprove,d=e.wallet,u=e.spec,O=e.lang,v=Object(i.useState)(a?"disabled":"enabled"),x=Object(r.a)(v,2),p=x[0],h=x[1],f=Object(i.useState)(!0),m=Object(r.a)(f,2),w=m[0],N=m[1],g=Object(i.useState)(!1),I=Object(r.a)(g,2),y=I[0],k=I[1],S=Object(i.useState)(t),C=Object(r.a)(S,2),E=C[0],_=C[1],T=Object(i.useRef)(null),D=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===p){e.next=2;break}return e.abrupt("return");case 2:return R(),e.next=5,o();case 5:e.sent&&j&&j(),V();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){h("disabled"),k(!0),T.current&&(T.current.style.display="inline-block")},V=function(){T.current&&(T.current.style.display="none"),h("enabled"),k(!1)},Z=function(){var e=Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&d&&d.detail.account)){e.next=5;break}return e.next=3,d.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.next=3,d.approve(u.pool,u.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(O["approve-failed"])),V();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return Z(),function(){}}),[d,u,b]),Object(i.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(l.jsxs)("button",{className:c,onClick:function(){w?D():A()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:T,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),y?O.pending:w?E:O.approve]})}},698:function(e,t,c){"use strict";var a=c(59),s=c(707),n=c(76),r=c(5),i=c(11),l=c(704),o=c(75),j=c(32);t.a=Object(o.b)("wallet","trading")(Object(o.c)((function(e){var t=Object(i.useState)(Object(j.jsx)("span",{className:"loading-line"})),c=Object(r.a)(t,2),o=c[0],b=c[1],d=function(){var t=e.allowZero;return"object"!==Object(n.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t};return Object(i.useEffect)((function(){e.allowZero;var t=e.wallet,c=e.defaultValue,n=void 0===c?"--":c,r=Object(s.a)(e,["allowZero","wallet","defaultValue"]);d()?b(Object(j.jsx)(l.a,Object(a.a)(Object(a.a)({},r),{},{displayType:"text",fixedDecimalScale:!0}))):b(Object(j.jsx)("span",{className:"loading-line"}));var i=window.setTimeout((function(){d()||!t||t.isConnected()||b(n)}),1e4);return function(){clearTimeout(i)}}),[e.value]),o})))},755:function(e,t,c){"use strict";var a=c(11),s=c(75),n=c(696),r=c(698),i=c(16),l=c(32);t.a=Object(s.b)("wallet","loading")(Object(s.c)((function({wallet:e={},lang:t,loading:c}){const[s,o]=Object(a.useState)(!1),[j,b]=Object(a.useState)(!1),[d,u]=Object(a.useState)(!1),[O,v]=Object(a.useState)(""),[x,p]=Object(a.useState)(""),[h,f]=Object(a.useState)(""),[m,w]=Object(a.useState)([]),[N,g]=Object(a.useState)(""),[I,y]=Object(a.useState)(""),k=()=>{e.connect()},[S,C]=Object(a.useState)(Object(l.jsx)(n.a,{click:k,lang:t,className:"vote",btnText:t["connet-wallet"]})),E=e=>{let{value:t}=e.target;v(t)},_=async()=>{if(!O)return void alert(t["please-choose-your-vote-first"]);await T()&&(D(),R(),V())},T=async()=>{if((await Object(i.Ab)(e.detail.chainId,e.detail.account,O)).success){let t=!0;for(;t;){let c=await Object(i.V)(e.detail.account);t=c.timestamp?!(c.timestamp>I):!c.timestamp}return!0}},D=async()=>{let t=await Object(i.V)(e.detail.account);t&&("1"===t.option?(o(!0),p("I")):"2"===t.option?(b(!0),p("II")):"3"===t.option&&(u(!0),p("III")),y(t.timestamp))},R=async()=>{let t=await Object(i.U)(e.detail.account);t&&f(t)},V=async()=>{let e=await Object(i.Z)();if(c.loaded(),e){let t=+e[0]+ +e[1]+ +e[2];w(e),g(t)}else alert(e.error)};return Object(a.useEffect)((()=>{c.loading();let e=null;e=window.setInterval((()=>{V()}),1e3)}),[]),Object(a.useEffect)((()=>{document.getElementsByClassName("pre_eth")[0].style.width=+m[0]/N*100+"%",document.getElementsByClassName("pre_bsc")[0].style.width=+m[1]/N*100+"%",document.getElementsByClassName("pre_heco")[0].style.width=+m[2]/N*100+"%"}),[m,N]),Object(a.useEffect)((()=>{let t=null;e.isConnected()&&(t=window.setInterval((()=>{R(),D()}),1e3))}),[e,e.detail.account]),Object(a.useEffect)((()=>{let c;c=e.isConnected()?Object(l.jsx)(n.a,{className:"vote",lang:t,btnText:t.vote,click:_}):Object(l.jsx)(n.a,{click:k,className:"vote",lang:t,btnText:t["connet-wallet"]}),C(c)}),[e.detail.account,O]),Object(l.jsxs)("div",{className:"dip_two_box",children:[Object(l.jsx)("div",{className:"H2 DIP1",children:t["governance-title"]}),Object(l.jsxs)("div",{className:"title-describe",children:[Object(l.jsx)("div",{children:t["governance-describe"]}),Object(l.jsx)("div",{children:t["governance-describe-two"]}),Object(l.jsxs)("div",{children:[t["governance-describe-three"]," ",Object(l.jsx)("a",{className:"doc-a",rel:"noreferrer",target:"_blank",href:"https://docs.deri.finance/mining-faq#what-do-i-harvest-for-liquidity-mining",children:t["governance-describe-three-a"]}),"  ",t["governance-describe-three-one"]]}),Object(l.jsx)("br",{})]}),Object(l.jsxs)("div",{className:"flex",children:["I.",t["governance-options-one-describe"],Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"II.",t["governance-options-two-describe"],Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"III.",t["governance-options-three"],Object(l.jsx)("br",{})]}),Object(l.jsxs)("div",{className:"radio",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"fle",children:[Object(l.jsxs)("div",{className:"rad",children:[Object(l.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:e=>E(e),defaultChecked:s})," ",Object(l.jsx)("label",{for:"I",children:"I"})]}),Object(l.jsxs)("div",{className:"prele_eth",children:[Object(l.jsx)("div",{className:"pre_eth"}),Object(l.jsxs)("span",{className:"num-deri",children:[" ",m[0]?Object(l.jsx)(r.a,{value:m[0],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(l.jsxs)("div",{className:"fle",children:[Object(l.jsxs)("div",{className:"rad",children:[Object(l.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:e=>E(e),defaultChecked:j})," ",Object(l.jsx)("label",{for:"II",children:"II"})]}),Object(l.jsxs)("div",{className:"prele_bsc",children:[Object(l.jsx)("div",{className:"pre_bsc"}),Object(l.jsxs)("span",{className:"num-deri",children:[" ",m[1]?Object(l.jsx)(r.a,{value:m[1],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(l.jsxs)("div",{className:"fle",children:[Object(l.jsxs)("div",{className:"rad",children:[Object(l.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:e=>E(e),defaultChecked:d})," ",Object(l.jsx)("label",{for:"III",children:"III"})]}),Object(l.jsxs)("div",{className:"prele_heco",children:[Object(l.jsx)("div",{className:"pre_heco"}),Object(l.jsxs)("span",{className:"num-deri",children:[" ",m[2]?Object(l.jsx)(r.a,{value:m[2],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]})]}),Object(l.jsx)("div",{children:S}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[t["your-vote"]," : ",x]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[t["your-voting-power"]," : ",h?Object(l.jsx)(r.a,{value:h,decimalScale:0,thousandSeparator:!0}):"0"]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{class:"H2",children:"Voting rules:"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"1.",t["vote-rules-one"],Object(l.jsx)("br",{}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"rules-describe",children:t["vote-rules-one-describe-one"]}),Object(l.jsx)("li",{className:"rules-describe",children:t["vote-rules-one-describe-two"]}),Object(l.jsx)("li",{className:"rules-describe",children:t["vote-rules-one-describe-three"]}),Object(l.jsx)("li",{className:"rules-describe",children:t["vote-rules-one-describe-four"]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2. ",t["vote-rules-two"],Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"3. ",t["vote-rules-three"],Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"4. ",t["vote-rules-four"]]})]})]})})))},913:function(e,t,c){"use strict";var a=c(0),s=c.n(a),n=c(2),r=c(5),i=c(11),l=c(75),o=(c(695),c(153)),j=(c(755),c(32));t.a=Object(l.b)("wallet")(Object(l.c)((function(e){e.wallet;var t=e.lang,c=Object(i.useState)(!0),a=Object(r.a)(c,2),l=a[0],b=a[1],d=function(){var e=Object(n.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"governance_box",children:[Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)("div",{className:l?"checked-now":"",onClick:function(){return d(!0)},children:t["vote-now"]}),Object(j.jsx)("div",{className:l?"":"checked-now",onClick:function(){return d(!1)},children:t.closed})]}),l&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"now-vote",children:t["no-proposals-found"]})}),!l&&Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"closed",children:[Object(j.jsx)("div",{className:"title"}),Object(j.jsx)("div",{children:Object(j.jsxs)(o.b,{to:"/diptwo",children:[" ",t["dip-two"]," "]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(o.b,{to:"/diphistory",children:[" ",t["dip-one"]," "]})})]})})]})})))},980:function(e,t,c){}}]);
//# sourceMappingURL=32.0c263f2a.chunk.js.map