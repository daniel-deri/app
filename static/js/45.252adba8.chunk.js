(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[45],{1406:function(e,t,c){},1453:function(e,t,c){"use strict";c.r(t);var n=c(982),s=(c(1406),c(32));t.default=function(e){var t=e.lang;return Object(s.jsx)("div",{children:Object(s.jsx)(n.a,{lang:t})})}},696:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var n=c(0),s=c.n(n),a=c(1),r=c(7),i=c(13),l=c(32);function d(e){var t=e.btnText,c=e.className,n=e.disabled,d=e.click,u=e.afterClick,j=e.checkApprove,o=e.wallet,b=e.spec,x=e.lang,p=Object(i.useState)(n?"disabled":"enabled"),O=Object(r.a)(p,2),f=O[0],h=O[1],v=Object(i.useState)(!0),m=Object(r.a)(v,2),N=m[0],w=m[1],g=Object(i.useState)(!1),k=Object(r.a)(g,2),y=k[0],A=k[1],S=Object(i.useState)(t),I=Object(r.a)(S,2),T=I[0],E=I[1],B=Object(i.useRef)(null),C=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===f){e.next=2;break}return e.abrupt("return");case 2:return D(),e.next=5,d();case 5:e.sent&&u&&u(),J();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){h("disabled"),A(!0),B.current&&(B.current.style.display="inline-block")},J=function(){B.current&&(B.current.style.display="none"),h("enabled"),A(!1)},R=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(j&&o&&o.detail.account)){e.next=5;break}return e.next=3,o.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(),e.next=3,o.approve(b.pool,b.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(x["approve-failed"])),J();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return R(),function(){}}),[o,b,j]),Object(i.useEffect)((function(){return t&&E(t),function(){}}),[t]),Object(l.jsxs)("button",{className:c,onClick:function(){N?C():F()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:B,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),y?x.pending:N?T:x.approve]})}},982:function(e,t,c){"use strict";var n=c(0),s=c.n(n),a=c(1),r=c(7),i=c(13),l=c(76),d=c.p+"static/media/nuls.236d79b4.svg",u=c.p+"static/media/deri.aa74d3cb.svg",j=c.p+"static/media/success.4aa75af6.svg",o=c.p+"static/media/undone.f6087837.svg",b=c.p+"static/media/right.26915bd4.svg",x=c(696),p=c(17),O=c(32);t.a=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,c=void 0===t?{}:t,n=e.lang,l=Object(i.useState)(Object(O.jsx)(x.a,{className:"btn",btnText:n["connect-wallet"]})),f=Object(r.a)(l,2),h=f[0],v=f[1],m=function(){return c&&c.detail&&c.detail.account},N=Object(i.useState)(!1),w=Object(r.a)(N,2),g=w[0],k=w[1],y=Object(i.useState)(!1),A=Object(r.a)(y,2),S=A[0],I=A[1],T=Object(i.useState)(!1),E=Object(r.a)(T,2),B=E[0],C=E[1],D=Object(i.useState)(!1),J=Object(r.a)(D,2),R=J[0],F=J[1],q=Object(i.useState)(!1),z=Object(r.a)(q,2),G=z[0],H=z[1],K=Object(i.useState)(!1),L=Object(r.a)(K,2),M=L[0],P=L[1],Q="dev"===p.a.get()?{poolAddress:"0xb18e2815c005a99BE77c8719c79ec2451A59aDAD"}:{poolAddress:"0xB8b79fd4BCB7dc0Ef352F258b4f9eC53306439fd"},U=function(){c.connect()},V=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.tb)(c.detail.chainId);case 2:+e.sent>=500&&H(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.wb)(c.detail.chainId,Q.poolAddress,c.detail.account);case 2:e.sent.success&&k(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.ib)(c.detail.chainId,Q.poolAddress,c.detail.account);case 2:t=e.sent,P(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=3;break}return alert(n["less-nuls"]),e.abrupt("return");case 3:if(!M){e.next=6;break}return alert(n["use-a-new-address"]),e.abrupt("return");case 6:return e.next=8,Object(p.f)(c.detail.chainId,c.detail.account);case 8:e.sent.success?I(!0):alert(n.faild);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.ab)(c.detail.chainId,Q.poolAddress,c.detail.account);case 2:t=e.sent,F(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.bb)(c.detail.chainId,Q.poolAddress,c.detail.account);case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.eb)(c.detail.chainId,c.detail.account);case 2:t=e.sent,I(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.nb.update();case 2:return e.next=4,Object(p.N)(c.detail.chainId,Q.poolAddress,c.detail.account,"0");case 4:e.sent.length>0&&C(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){m()&&($(),_(),Z(),X(),ee(),V())}),[c.detail]),Object(i.useEffect)((function(){var e;e=m()?g?S||G?Object(O.jsx)("a",{href:"https://app.deri.finance/#/futures/pro",className:"btn",children:n.trade}):Object(O.jsx)(x.a,{className:"btn",btnText:n.claim,click:Y,lang:n}):Object(O.jsx)(x.a,{className:"btn",btnText:n.register,click:W,lang:n}):Object(O.jsx)(x.a,{className:"btn btn-danger connect",btnText:n["connect-wallet"],click:U,lang:n}),v(e)}),[c.detail,g,S,R,M,G]),Object(O.jsxs)("div",{className:"nuls-box",children:[Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("div",{children:n.title}),Object(O.jsx)("div",{className:"time",children:n["in-celebration-of-the"]})]}),Object(O.jsxs)("div",{className:"logo",children:[Object(O.jsx)("img",{className:"nuls-img",src:d}),Object(O.jsx)("img",{src:u})]}),Object(O.jsxs)("div",{className:"user-rasks",children:[Object(O.jsx)("div",{className:"header",children:n["user-tasks"]}),Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)("div",{className:"content-text",children:[Object(O.jsxs)("div",{className:"step",children:[Object(O.jsxs)("div",{className:"step-img",children:[Object(O.jsx)("div",{children:g?Object(O.jsx)("img",{src:j}):Object(O.jsx)("img",{src:o})}),Object(O.jsx)("div",{children:n.register})]}),Object(O.jsx)("div",{className:"step-img",children:Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:b})})}),Object(O.jsxs)("div",{className:"step-img",children:[Object(O.jsx)("div",{children:S?Object(O.jsx)("img",{src:j}):Object(O.jsx)("img",{src:o})}),Object(O.jsx)("div",{children:n.claim})]}),Object(O.jsx)("div",{className:"step-img",children:Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:b})})}),Object(O.jsxs)("div",{className:"step-img",children:[Object(O.jsx)("div",{children:B?Object(O.jsx)("img",{src:j}):Object(O.jsx)("img",{src:o})}),Object(O.jsx)("div",{children:n.trade})]})]}),Object(O.jsx)("div",{className:"button",children:h}),G?Object(O.jsx)("div",{className:"exceed",children:n["exceed-participants"]}):""]})})]}),Object(O.jsxs)("div",{className:"h2",children:[n["title-one"],Object(O.jsx)("span",{className:"title-num",children:n["title-num"]}),Object(O.jsx)("span",{className:"in-deri",children:n["title-two"]}),Object(O.jsx)("div",{className:"text",children:n["title-three"]})]}),Object(O.jsxs)("div",{className:"rules",children:[Object(O.jsx)("div",{className:"rules-title",children:n.rules}),Object(O.jsx)("div",{className:"text",children:n["rules-one"]}),Object(O.jsx)("div",{className:"text",children:n["rules-two"]}),Object(O.jsx)("div",{className:"text-n",children:n["rules-two-one"]}),Object(O.jsx)("div",{className:"text-n",children:n["rules-two-two"]}),Object(O.jsx)("div",{className:"text-n",children:n["rules-two-three"]}),Object(O.jsx)("div",{className:"text-n",children:n["rules-two-four"]}),Object(O.jsx)("div",{className:"text",children:n["rules-three"]}),Object(O.jsx)("div",{className:"text-n",children:n["rules-two-one"]}),Object(O.jsx)("div",{className:"text-n",children:n["rules-two-two"]}),Object(O.jsx)("div",{className:"text-n",children:n["rules-two-three"]}),Object(O.jsx)("div",{className:"text-n",children:n["rules-two-four"]}),Object(O.jsx)("div",{className:"rules-title",children:n["how-to-participate"]}),Object(O.jsx)("div",{className:"text",children:n["step-one"]}),Object(O.jsx)("div",{className:"text",children:n["step-two"]}),Object(O.jsxs)("div",{className:"text",children:[n["step-three"],Object(O.jsx)("a",{href:"https://docs.deri.finance/guides/trading",children:n["step-three-a"]})]}),Object(O.jsx)("div",{className:"rules-title",children:n.notes}),Object(O.jsx)("div",{className:"text",children:n["notes-one"]}),Object(O.jsx)("div",{className:"text",children:n["notes-two"]}),Object(O.jsx)("div",{className:"text",children:n["notes-three"]}),Object(O.jsx)("div",{className:"text",children:n["notes-four"]})]})]})})))}}]);
//# sourceMappingURL=45.252adba8.chunk.js.map