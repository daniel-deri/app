(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[39],{1349:function(e,t,n){},1386:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(869),r=(n(1349),n(18));function c(e){var t=e.lang;return Object(r.jsx)(a.a,{lang:t})}},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),c=n(1),s=n(9),u=n(8),i=n(18);function o(e){var t=e.btnText,n=e.className,a=e.disabled,o=e.click,l=e.afterClick,d=e.checkApprove,b=e.wallet,p=e.spec,f=e.lang,j=Object(u.useState)(a?"disabled":"enabled"),O=Object(s.a)(j,2),v=O[0],x=O[1],h=Object(u.useState)(!0),k=Object(s.a)(h,2),m=k[0],w=k[1],g=Object(u.useState)(!1),y=Object(s.a)(g,2),N=y[0],S=y[1],C=Object(u.useState)(t),T=Object(s.a)(C,2),E=T[0],I=T[1],A=Object(u.useRef)(null),J=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return L(),e.next=5,o();case 5:e.sent&&l&&l(),R();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){x("disabled"),S(!0),A.current&&(A.current.style.display="inline-block")},R=function(){A.current&&(A.current.style.display="none"),x("enabled"),S(!1)},_=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(),e.next=3,b.approve(p.pool,p.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(f["approve-failed"])),R();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return _(),function(){}}),[b,p,d]),Object(u.useEffect)((function(){return t&&I(t),function(){}}),[t]),Object(i.jsxs)("button",{className:n,onClick:function(){m?J():q()},children:[Object(i.jsx)("span",{className:"btn-loading-wrap",children:Object(i.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?f.pending:m?E:f.approve]})}},869:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),s=n(9),u=n(8),i=n(47),o=n(639),l=n(13),d=n(18);t.a=Object(i.b)("wallet")(Object(i.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,a=e.lang,i=Object(u.useState)(),b=Object(s.a)(i,2),p=b[0],f=b[1],j=Object(u.useState)(!0),O=Object(s.a)(j,2),v=O[0],x=O[1],h=function(){var e=Object(c.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.detail&&n.detail.account)){e.next=20;break}if(void 0!==p){e.next=4;break}return alert(a["please-enter-address"]),e.abrupt("return");case 4:if(42===(t=p.toLocaleLowerCase()).length&&0===t.indexOf("0x")){e.next=8;break}return alert(a["please-enter-a-correct-address"]),e.abrupt("return");case 8:if(t!==n.detail.account){e.next=11;break}return alert(a["brokder-addr-cannot-be-the-same-as-trader"]),e.abrupt("return");case 11:if(!v){e.next=14;break}return alert(a["cannot-bind-twice"]),e.abrupt("return");case 14:return e.next=16,Object(l.qb)(n.detail.chainId,n.detail.account,p);case 16:c=e.sent,console.log(c),c.success||alert(a["bind-faild"]),c.success&&x(!0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(n.detail.account,"/get_broker"),e.next=3,Object(l.m)(t);case 3:(a=e.sent).data&&a.data.length?(x(!0),f(a.data[0].broker_address)):x(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){k()}),[n.detail]),Object(d.jsxs)("div",{className:"broker-bind",children:[Object(d.jsx)("div",{className:"header",children:a["brokers-address"]}),Object(d.jsxs)("div",{className:"bind-input",children:[Object(d.jsx)("div",{className:"address",children:Object(d.jsx)("input",{className:"address-input",type:"text",placeholder:a.address,value:p,onChange:function(e){return function(e){var t=e.target.value;f(t)}(e)}})}),Object(d.jsx)("div",{className:"bind-button",children:Object(d.jsx)(o.a,{className:"btn",btnText:a.bind,lang:a,click:h})})]})]})})))}}]);
//# sourceMappingURL=39.1d3c5ce6.chunk.js.map