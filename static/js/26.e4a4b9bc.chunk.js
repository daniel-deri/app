(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[26],{631:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),c=n(1),s=n(14),i=n(8),u=n(62);function o(e){var t=e.btnText,n=e.className,r=e.disabled,o=e.click,l=e.afterClick,d=e.checkApprove,b=e.wallet,p=e.spec,f=e.lang,j=Object(i.useState)(r?"disabled":"enabled"),O=Object(s.a)(j,2),v=O[0],x=O[1],h=Object(i.useState)(!0),k=Object(s.a)(h,2),m=k[0],w=k[1],g=Object(i.useState)(!1),y=Object(s.a)(g,2),N=y[0],S=y[1],C=Object(i.useState)(t),T=Object(s.a)(C,2),A=T[0],E=T[1],I=Object(i.useRef)(null),R=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return J(),e.next=5,o();case 5:e.sent&&l&&l(),L();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){x("disabled"),S(!0),I.current&&(I.current.style.display="inline-block")},L=function(){I.current&&(I.current.style.display="none"),x("enabled"),S(!1)},_=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(),e.next=3,b.approve(p.pool,p.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(f["approve-failed"])),L();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return _(),function(){}}),[b,p,d]),Object(i.useEffect)((function(){return t&&E(t),function(){}}),[t]),Object(u.jsxs)("button",{className:n,onClick:function(){m?R():B()},children:[Object(u.jsx)("span",{className:"btn-loading-wrap",children:Object(u.jsx)("span",{ref:I,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?f.pending:m?A:f.approve]})}},658:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1),s=n(14),i=n(8),u=n(104),o=n(631),l=n(23),d=n(62);t.a=Object(u.b)("wallet")(Object(u.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,r=e.lang,u=Object(i.useState)(),b=Object(s.a)(u,2),p=b[0],f=b[1],j=Object(i.useState)(!0),O=Object(s.a)(j,2),v=O[0],x=O[1],h=function(){var e=Object(c.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.detail&&n.detail.account)){e.next=20;break}if(void 0!==p){e.next=4;break}return alert(r["please-enter-address"]),e.abrupt("return");case 4:if(42==(t=p.toLocaleLowerCase()).length&&0==t.indexOf("0x")){e.next=8;break}return alert(r["please-enter-a-correct-address"]),e.abrupt("return");case 8:if(t!==n.detail.account){e.next=11;break}return alert(r["brokder-addr-cannot-be-the-same-as-trader"]),e.abrupt("return");case 11:if(!v){e.next=14;break}return alert(r["cannot-bind-twice"]),e.abrupt("return");case 14:return e.next=16,Object(l.setBroker)(n.detail.chainId,n.detail.account,p);case 16:c=e.sent,console.log(c),c.success||alert(r["bind-faild"]),c.success&&x(!0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(n.detail.account,"/get_broker"),e.next=3,Object(l.fetchRestApi)(t);case 3:(r=e.sent).data&&r.data.length?(x(!0),f(r.data[0].broker_address)):x(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){k()}),[n.detail]),Object(d.jsxs)("div",{className:"broker-bind",children:[Object(d.jsx)("div",{className:"header",children:r["brokers-address"]}),Object(d.jsxs)("div",{className:"bind-input",children:[Object(d.jsx)("div",{className:"address",children:Object(d.jsx)("input",{className:"address-input",type:"text",placeholder:r.address,value:p,onChange:function(e){return function(e){var t=e.target.value;f(t)}(e)}})}),Object(d.jsx)("div",{className:"bind-button",children:Object(d.jsx)(o.a,{className:"btn",btnText:r.bind,lang:r,click:h})})]})]})})))},751:function(e,t,n){},780:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(658),a=(n(751),n(62));function c(e){var t=e.lang;return Object(a.jsx)(r.a,{lang:t})}}}]);
//# sourceMappingURL=26.e4a4b9bc.chunk.js.map