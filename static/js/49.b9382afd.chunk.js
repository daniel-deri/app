(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[49],{1417:function(e,t,s){},1456:function(e,t,s){"use strict";s.r(t);var c=s(965),a=(s(1417),s(28));t.default=function({lang:e}){return Object(a.jsx)("div",{children:Object(a.jsx)(c.a,{lang:e})})}},665:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var c=s(9),a=s(28);function i({btnText:e,className:t,disabled:s,click:i,afterClick:l,checkApprove:n,wallet:d,spec:r,lang:j}){const[b,o]=Object(c.useState)(s?"disabled":"enabled"),[x,O]=Object(c.useState)(!0),[u,h]=Object(c.useState)(!1),[m,p]=Object(c.useState)(e),v=Object(c.useRef)(null),N=()=>{o("disabled"),h(!0),v.current&&(v.current.style.display="inline-block")},f=()=>{v.current&&(v.current.style.display="none"),o("enabled"),h(!1)};return Object(c.useEffect)((()=>((async()=>{if(n&&d&&d.detail.account){const e=await d.isApproved(r.pool,r.bTokenId);O(e)}})(),()=>{})),[d,r,n]),Object(c.useEffect)((()=>(e&&p(e),()=>{})),[e]),Object(a.jsxs)("button",{className:t,onClick:()=>{x?(async()=>{if("enabled"!==b)return;N(),await i()&&l&&l(),f()})():(async()=>{N(),(await d.approve(r.pool,r.bTokenId)).success?O(!0):(O(!1),alert(j["approve-failed"])),f()})()},children:[Object(a.jsx)("span",{className:"btn-loading-wrap",children:Object(a.jsx)("span",{ref:v,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),u?j.pending:x?m:j.approve]})}},965:function(e,t,s){"use strict";var c=s(9),a=s(70),i=s.p+"static/media/nuls.6f3226a2.svg",l=s.p+"static/media/deri.f30f48a4.svg",n=s.p+"static/media/success.d1b6419b.svg",d=s.p+"static/media/undone.a632686c.svg",r=s.p+"static/media/right.222281a5.svg",j=s(665),b=s(12),o=s(28);t.a=Object(a.b)("wallet")(Object(a.c)((function({wallet:e={},lang:t}){const[s,a]=Object(c.useState)(Object(o.jsx)(j.a,{className:"btn",btnText:t["connect-wallet"]})),x=()=>e&&e.detail&&e.detail.account,[O,u]=Object(c.useState)(!1),[h,m]=Object(c.useState)(!1),[p,v]=Object(c.useState)(!1),[N,f]=Object(c.useState)(!1),[g,w]=Object(c.useState)(!1),[y,k]=Object(c.useState)(!1),A="dev"===b.a.get()?{poolAddress:"0xb18e2815c005a99BE77c8719c79ec2451A59aDAD"}:{poolAddress:"0xB8b79fd4BCB7dc0Ef352F258b4f9eC53306439fd"},S=()=>{e.connect()},I=async()=>{(await Object(b.zb)(e.detail.chainId,A.poolAddress,e.detail.account)).success&&u(!0)},T=async()=>{if(!N)return void alert(t["less-nuls"]);if(y)return void alert(t["use-a-new-address"]);(await Object(b.f)(e.detail.chainId,e.detail.account)).success?m(!0):alert(t.faild)};return Object(c.useEffect)((()=>{x()&&((async()=>{let t=await Object(b.eb)(e.detail.chainId,A.poolAddress,e.detail.account);u(t)})(),(async()=>{let t=await Object(b.hb)(e.detail.chainId,e.detail.account);m(t)})(),(async()=>{let t=await Object(b.db)(e.detail.chainId,A.poolAddress,e.detail.account);f(t)})(),(async()=>{let t=await Object(b.lb)(e.detail.chainId,A.poolAddress,e.detail.account);k(t)})(),(async()=>{await b.qb.update(),(await Object(b.O)(e.detail.chainId,A.poolAddress,e.detail.account,"0")).length>0&&v(!0)})(),(async()=>{+await Object(b.wb)(e.detail.chainId)>=500&&w(!0)})())}),[e.detail]),Object(c.useEffect)((()=>{let e;e=x()?O?h||g?Object(o.jsx)("a",{href:"https://app.deri.finance/#/futures/pro",className:"btn",children:t.trade}):Object(o.jsx)(j.a,{className:"btn",btnText:t.claim,click:T,lang:t}):Object(o.jsx)(j.a,{className:"btn",btnText:t.register,click:I,lang:t}):Object(o.jsx)(j.a,{className:"btn btn-danger connect",btnText:t["connect-wallet"],click:S,lang:t}),a(e)}),[e.detail,O,h,N,y,g]),Object(o.jsxs)("div",{className:"nuls-box",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("div",{children:t.title}),Object(o.jsx)("div",{className:"time",children:t["in-celebration-of-the"]})]}),Object(o.jsxs)("div",{className:"logo",children:[Object(o.jsx)("img",{className:"nuls-img",src:i}),Object(o.jsx)("img",{src:l})]}),Object(o.jsxs)("div",{className:"user-rasks",children:[Object(o.jsx)("div",{className:"header",children:t["user-tasks"]}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"content-text",children:[Object(o.jsxs)("div",{className:"step",children:[Object(o.jsxs)("div",{className:"step-img",children:[Object(o.jsx)("div",{children:O?Object(o.jsx)("img",{src:n}):Object(o.jsx)("img",{src:d})}),Object(o.jsx)("div",{children:t.register})]}),Object(o.jsx)("div",{className:"step-img",children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:r})})}),Object(o.jsxs)("div",{className:"step-img",children:[Object(o.jsx)("div",{children:h?Object(o.jsx)("img",{src:n}):Object(o.jsx)("img",{src:d})}),Object(o.jsx)("div",{children:t.claim})]}),Object(o.jsx)("div",{className:"step-img",children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:r})})}),Object(o.jsxs)("div",{className:"step-img",children:[Object(o.jsx)("div",{children:p?Object(o.jsx)("img",{src:n}):Object(o.jsx)("img",{src:d})}),Object(o.jsx)("div",{children:t.trade})]})]}),Object(o.jsx)("div",{className:"button",children:s}),g?Object(o.jsx)("div",{className:"exceed",children:t["exceed-participants"]}):""]})})]}),Object(o.jsxs)("div",{className:"h2",children:[t["title-one"],Object(o.jsx)("span",{className:"title-num",children:t["title-num"]}),Object(o.jsx)("span",{className:"in-deri",children:t["title-two"]}),Object(o.jsx)("div",{className:"text",children:t["title-three"]})]}),Object(o.jsxs)("div",{className:"rules",children:[Object(o.jsx)("div",{className:"rules-title",children:t.rules}),Object(o.jsx)("div",{className:"text",children:t["rules-one"]}),Object(o.jsx)("div",{className:"text",children:t["rules-two"]}),Object(o.jsx)("div",{className:"text-n",children:t["rules-two-one"]}),Object(o.jsx)("div",{className:"text-n",children:t["rules-two-two"]}),Object(o.jsx)("div",{className:"text-n",children:t["rules-two-three"]}),Object(o.jsx)("div",{className:"text-n",children:t["rules-two-four"]}),Object(o.jsx)("div",{className:"text",children:t["rules-three"]}),Object(o.jsx)("div",{className:"text-n",children:t["rules-two-one"]}),Object(o.jsx)("div",{className:"text-n",children:t["rules-two-two"]}),Object(o.jsx)("div",{className:"text-n",children:t["rules-two-three"]}),Object(o.jsx)("div",{className:"text-n",children:t["rules-two-four"]}),Object(o.jsx)("div",{className:"rules-title",children:t["how-to-participate"]}),Object(o.jsx)("div",{className:"text",children:t["step-one"]}),Object(o.jsx)("div",{className:"text",children:t["step-two"]}),Object(o.jsxs)("div",{className:"text",children:[t["step-three"],Object(o.jsx)("a",{href:"https://docs.deri.finance/guides/trading",children:t["step-three-a"]})]}),Object(o.jsx)("div",{className:"rules-title",children:t.notes}),Object(o.jsx)("div",{className:"text",children:t["notes-one"]}),Object(o.jsx)("div",{className:"text",children:t["notes-two"]}),Object(o.jsx)("div",{className:"text",children:t["notes-three"]}),Object(o.jsx)("div",{className:"text",children:t["notes-four"]})]})]})})))}}]);
//# sourceMappingURL=49.b9382afd.chunk.js.map