(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[19],{1224:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(2),r=c(5),a=c(10),d=c(44),o=(c(911),c(208)),j=c(32),l=c(9);t.default=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,c=void 0===t?{}:t,s=e.lang,d=Object(a.useState)(!1),b=Object(r.a)(d,2),v=b[0],u=b[1],h=Object(a.useState)(!1),O=Object(r.a)(h,2),x=O[0],p=O[1],f=Object(a.useState)(!1),m=Object(r.a)(f,2),g=m[0],N=m[1],I=Object(a.useState)(""),w=Object(r.a)(I,2),k=(w[0],w[1]),S=Object(a.useState)(""),y=Object(r.a)(S,2),C=(y[0],y[1]),q=Object(a.useState)(""),E=Object(r.a)(q,2),R=(E[0],E[1]),D=Object(a.useState)([]),V=Object(r.a)(D,2),J=(V[0],V[1]),U=Object(a.useState)(""),z=Object(r.a)(U,2),P=(z[0],z[1]),_=Object(a.useState)(""),A=Object(r.a)(_,2),B=(A[0],A[1]),F=function(e){var t=e.target.value;k(t)},G=function(){var e=Object(i.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getUserVotingResult",[c.detail.account]);case 2:(t=e.sent)&&("1"===t.option?(u(!0),C("I")):"2"===t.option?(p(!0),C("II")):"3"===t.option&&(N(!0),C("III")),B(t.timestamp));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getUserVotingPower",[c.detail.account]);case 2:(t=e.sent)&&R(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(i.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getVotingResult",[]);case 2:(t=e.sent)?(c=+t[0]+ +t[1]+ +t[2],J(t),P(c)):alert(t.error);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.setInterval((function(){K()}),1e3)}),[]),Object(a.useEffect)((function(){c.isConnected()&&window.setInterval((function(){H(),G()}),1e3)}),[c,c.detail.account]),Object(l.jsx)("div",{className:"dip-box",children:Object(l.jsxs)("div",{className:"dip-box-info",children:[Object(l.jsxs)("div",{className:"dip-info dip-two-info",children:[Object(l.jsxs)("div",{className:"dip-info-title",children:[Object(l.jsx)("div",{className:"dip-title",children:s["dip-two"]}),Object(l.jsxs)("div",{className:"dip-des",children:[Object(l.jsx)("div",{children:s["governance-describe"]}),Object(l.jsx)("div",{children:s["governance-describe-two"]}),Object(l.jsxs)("div",{children:[s["governance-describe-three"]," ",Object(l.jsx)("a",{target:"_blank",href:"https://docs.deri.finance/mining-faq#what-do-i-harvest-for-liquidity-mining",rel:"noreferrer",children:s["governance-describe-three-a"]}),"  ",s["governance-describe-three-one"]]})]})]}),Object(l.jsxs)("div",{className:"dip-options",children:[Object(l.jsxs)("div",{className:"dip-options-checked",children:[Object(l.jsxs)("div",{className:"checkbox",children:[Object(l.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return F(e)},defaultChecked:v}),Object(l.jsx)("label",{for:"I",children:"I."})]}),Object(l.jsx)("div",{className:"option-describe",children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:s["governance-options-one-describe"]})})}),Object(l.jsx)("div",{className:"peng",children:Object(l.jsxs)("div",{className:"peng-box",children:[Object(l.jsx)("div",{className:"peng-bg dip-two-one"}),Object(l.jsx)("div",{className:"peng-num",children:"142,989 DERI"})]})})]}),Object(l.jsxs)("div",{className:"dip-options-checked",children:[Object(l.jsxs)("div",{className:"checkbox",children:[Object(l.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return F(e)},defaultChecked:x}),Object(l.jsx)("label",{for:"II",children:"II."})]}),Object(l.jsx)("div",{className:"option-describe",children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:s["governance-options-two-describe"]})})}),Object(l.jsx)("div",{className:"peng",children:Object(l.jsxs)("div",{className:"peng-box",children:[Object(l.jsx)("div",{className:"peng-bg dip-two-two"}),Object(l.jsx)("div",{className:"peng-num",children:"1,440,582 DERI"})]})})]}),Object(l.jsxs)("div",{className:"dip-options-checked",children:[Object(l.jsxs)("div",{className:"checkbox",children:[Object(l.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return F(e)},defaultChecked:g}),Object(l.jsx)("label",{for:"III",children:"III."})]}),Object(l.jsx)("div",{className:"option-describe",children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:s["governance-options-three"]})})}),Object(l.jsx)("div",{className:"peng",children:Object(l.jsxs)("div",{className:"peng-box",children:[Object(l.jsx)("div",{className:"peng-bg dip-two-three"}),Object(l.jsx)("div",{className:"peng-num",children:"0 DERI"})]})})]}),Object(l.jsx)("div",{className:"vote-button",children:Object(l.jsx)(o.a,{label:s.vote,width:"332",fontSize:"18"})})]})]}),Object(l.jsxs)("div",{className:"voting-rules dip-two-rules",children:[Object(l.jsxs)("div",{className:"voting-rules-title",children:[s["voting-rules"]," :"]}),Object(l.jsxs)("div",{className:"voting-info",children:[Object(l.jsxs)("div",{children:["1. ",s["vote-rules-one"]]}),Object(l.jsx)("div",{children:s["vote-rules-one-describe-one"]}),Object(l.jsx)("div",{children:s["vote-rules-one-describe-two"]}),Object(l.jsx)("div",{children:s["vote-rules-one-describe-three"]}),Object(l.jsx)("div",{children:s["vote-rules-one-describe-four"]})]}),Object(l.jsx)("div",{className:"voting-info",children:Object(l.jsxs)("div",{children:["2.",s["vote-rules-two"]]})}),Object(l.jsx)("div",{className:"voting-info",children:Object(l.jsxs)("div",{children:["3.",s["vote-rules-three"]]})}),Object(l.jsx)("div",{className:"voting-info",children:Object(l.jsxs)("div",{children:["4.",s["vote-rules-four"]]})})]})]})})})))},911:function(e,t,c){}}]);
//# sourceMappingURL=19.ef5b63fa.chunk.js.map