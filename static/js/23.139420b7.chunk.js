(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[23],{1199:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(1),r=n(9),i=n(8),o=n(47),l=n(702),d=n.n(l),u=n(25),p=n(612),f=n.n(p),b=n(611),j=n(13),m=n(659),h=n(703),v=n(704),O=(n.p,n(658)),x=n(615),y=(n(914),n(18));function g(e){var t=e.goToStep,n=e.lang,a=e.wallet,o=e.props,l=e.loading,d=e.OnChange,u=Object(i.useState)("0.0001"),p=Object(r.a)(u,2),m=p[0],g=p[1],w=Object(i.useState)("0.000004"),k=Object(r.a)(w,2),N=k[0],C=k[1],E=Object(i.useState)("0.1"),T=Object(r.a)(E,2),_=T[0],I=T[1],A=Object(i.useState)(!0),R=Object(r.a)(A,2),D=R[0],L=R[1],B=Object(i.useState)(!1),H=Object(r.a)(B,2),U=H[0],M=H[1],P=Object(i.useState)(!0),K=Object(r.a)(P,2),z=K[0],X=K[1],W=Object(i.useState)(""),F=Object(r.a)(W,2),G=F[0],q=F[1],J=Object(i.useState)([]),Y=Object(r.a)(J,2),Q=Y[0],V=Y[1],Z={BTCUSD:"0.0001",ETHUSD:"0.001",BNBUSD:"0.01",AXSUSDT:"1",MBOXUSDT:"1",IBSCDEFI:"0.01",IGAME:"0.01",ALICEUSDT:"0.1",NULSUSDT:"1"},$=Object(i.useState)("dev"===j.a.get()?{symbol:"BTCUSD",symbolId:0,address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",symbolId:0,address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=f()("dropdown-menu",{show:U}),se=function(){return a&&a.detail&&a.detail.account},ce=function(){a.connect()},re=Object(i.useState)(Object(y.jsx)("button",{OnClick:ce,children:n["connect-wallet"]})),ie=Object(r.a)(re,2),oe=ie[0],le=ie[1],de=function(){te.symbol?(d("multiplier",m),d("fundingRateCoefficient",N),d("transactionFeeRatio",_),d("oracleConfig",te),t(2)):alert(n["please-enter-a-correct-address"])},ue=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.G)(a.detail.chainId,a.detail.account);case 2:t=e.sent,l.loaded(),t.sort((function(e,t){return+e.blockNumber-+t.blockNumber})),g(Z[t[0].symbol]),ne(t[0]),V(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){X(!z),ne(z?{}:Q[0])},fe=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G){e.next=3;break}return alert(n["please-enter-a-correct-address"]),e.abrupt("return");case 3:return e.next=5,Object(j.j)(a.detail.chainId,a.detail.account,G);case 5:if(!e.sent.success){e.next=14;break}return e.next=9,Object(j.G)(a.detail.chainId,a.detail.account);case 9:t=e.sent,ne(t[0]),V(t),e.next=15;break;case 14:alert(n.fail);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){se()&&(l.loading(),ue())}),[a.detail.chainId]),Object(i.useEffect)((function(){var e;e=se()?Object(y.jsx)("button",{onClick:de,children:n.next}):Object(y.jsx)("button",{onClick:ce,children:n["connect-wallet"]}),le(e)}),[a,a.detail,a.detail.account,te,m,N,_]),Object(y.jsxs)("div",{className:"step1",children:[Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)("span",{children:n["add-symbol"]}),Object(y.jsxs)("span",{children:[o.baseToken," @ ",n.bsc]})]}),Object(y.jsx)("div",{className:"context",children:Object(y.jsxs)("div",{className:"box",children:[Object(y.jsxs)("span",{className:"base-title",children:[" ",n.oracle]}),Object(y.jsxs)("div",{className:"select-oracle",children:[z?Object(y.jsx)("div",{className:"radio"}):Object(y.jsx)("div",{className:"radio-no",onClick:pe}),Object(y.jsx)("span",{children:n["choose-from-exsting-ones"]}),z?Object(y.jsx)("div",{className:"radio-no optional",onClick:pe}):Object(y.jsx)("div",{className:"radio optional"}),Object(y.jsx)("span",{children:n["generate-oracle-address"]})]}),z&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"select-symbol",children:Object(y.jsxs)("div",{className:"btn-group check-baseToken-btn",children:[Object(y.jsxs)("button",{type:"button",onClick:function(e){Q.length>0&&(e.preventDefault(),M(!U))},className:"btn chec",children:[Object(y.jsx)(S,{spec:te}),Object(y.jsx)("span",{className:"check-base-down",children:Object(y.jsx)("img",{src:O.a,alt:""})})]}),Object(y.jsx)("div",{className:ae,children:Q.map((function(e,t){return Object(y.jsx)("div",{className:"dropdown-item",onClick:function(t){return function(e){var t=Q.find((function(t){return t.address===e.address&&e.chainId===t.chainId}));t&&(g(Z[t.symbol]),ne(t),M(!1))}(e)},children:Object(y.jsx)(S,{spec:e})},t)}))})]})})}),!z&&Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"optional-oracle",children:[Object(y.jsxs)("div",{className:"input",children:[Object(y.jsx)("input",{type:"text",value:G,placeholder:n["chain-link-address"],onChange:function(e){return function(e){var t=e.target.value;q(t)}(e)}}),Object(y.jsx)(b.a,{className:"btn",click:fe,btnText:n.generate,lang:n})]}),Object(y.jsx)("div",{className:"optional-oracle-address",children:Object(y.jsx)("input",{type:"text",value:te.address})})]})}),Object(y.jsxs)("div",{className:"symbol-name",children:[Object(y.jsx)("div",{className:"symbol-title",children:n["symbol-name"]}),Object(y.jsx)("div",{className:"symbol-value",children:te?te.symbol:""})]}),Object(y.jsxs)("div",{className:"advanced",onClick:function(){return L(!D)},children:[Object(y.jsx)("span",{className:"select-advanced",children:n.advanced}),D?Object(y.jsx)("img",{src:v.a}):Object(y.jsx)("img",{src:h.a})]}),Object(y.jsx)("div",{className:"advanced-border"}),D&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"margin-rewards",children:Object(y.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(y.jsx)("div",{className:"title",children:n.parameters}),Object(y.jsxs)("div",{className:"parameters",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"text",children:Object(y.jsx)(x.a,{block:!1,children:Object(y.jsx)("span",{className:"hover-title",tip:n["multiplier-hover"],children:n.multiplier})})}),Object(y.jsx)("div",{className:"input-value",children:Object(y.jsx)("input",{type:"number",value:m,onChange:function(e){return function(e){var t=e.target.value;g(t)}(e)}})})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"text",children:Object(y.jsx)(x.a,{block:!1,children:Object(y.jsx)("span",{className:"hover-title",tip:n["funding-rate-coefficient-hover"],children:n["funding-rate-coefficient"]})})}),Object(y.jsx)("div",{className:"input-value",children:Object(y.jsx)("input",{type:"number",value:N,onChange:function(e){return function(e){var t=e.target.value;C(t)}(e)}})})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"text",children:Object(y.jsx)("span",{className:"hover-title-fee",children:n["transaction-fee-ratio"]})}),Object(y.jsxs)("div",{className:"input-value",children:[Object(y.jsx)("input",{type:"number",value:_,onChange:function(e){return function(e){var t=e.target.value;I(t)}(e)}}),"  %"]})]})]})]})})}),Object(y.jsx)("div",{className:"next-button",children:oe})]})})]})}function w(e){var t=e.goToStep,n=e.lang,a=e.wallet,r=e.props,i=e.parameters,o=Object(u.useHistory)(),l=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)(a.detail.chainId,r.address,a.detail.account,i);case 2:e.sent.success?(alert(n.success),o.push("/mining")):alert(n.fail);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"step2",children:[Object(y.jsx)("div",{className:"header",children:Object(y.jsx)("span",{children:n.confirm})}),Object(y.jsx)("div",{className:"context",children:Object(y.jsxs)("div",{className:"box",children:[Object(y.jsxs)("span",{className:"oracle-title",children:[" ",n.oracle]}),Object(y.jsx)("div",{className:"oracle-name",children:i[2]}),Object(y.jsxs)("span",{className:"symbol-title",children:[" ",n["symbol-name"]]}),Object(y.jsx)("div",{className:"symbol-name",children:i[1]}),Object(y.jsx)("div",{className:"margin-rewards",children:Object(y.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(y.jsx)("div",{className:"title",children:n.parameters}),Object(y.jsxs)("div",{className:"parameters",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"text",children:n.multiplier}),Object(y.jsx)("div",{className:"input-value",children:i[3]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"text",children:n["funding-rate-coefficient"]}),Object(y.jsx)("div",{className:"input-value",children:i[5]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"text",children:n["transaction-fee-ratio"]}),Object(y.jsxs)("div",{className:"input-value",children:[Object(j.g)(i[4]).times(Object(j.g)(100)).toString(),"  %"]})]})]})]})}),Object(y.jsx)("div",{className:"next-button",children:Object(y.jsxs)("div",{className:"next-button",children:[Object(y.jsx)("button",{onClick:function(){t(1)},children:n.cancel}),Object(y.jsx)(b.a,{click:l,btnText:n.ok,lang:n})]})})]})})]})}function S(e){var t=e.spec;return t?"".concat(t.symbol):""}t.default=Object(o.b)("wallet","loading")(Object(o.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,a=e.lang,o=e.loading,l=Object(i.useState)("0.0001"),p=Object(r.a)(l,2),f=p[0],b=p[1],h=Object(i.useState)("0.000004"),v=Object(r.a)(h,2),O=v[0],x=v[1],S=Object(i.useState)("0.1"),k=Object(r.a)(S,2),N=k[0],C=k[1],E=Object(i.useState)(0),T=Object(r.a)(E,2),_=T[0],I=T[1],A=Object(i.useState)("dev"===j.a.get()?{symbol:"BTCUSD",address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),R=Object(r.a)(A,2),D=R[0],L=R[1],B=Object(i.useState)([]),H=Object(r.a)(B,2),U=H[0],M=H[1],P=Object(u.useParams)(),K=P.version,z=P.chainId,X=P.symbol,W=P.baseToken,F=P.address,G=P.type,q=Object(m.a)(),J={version:K,chainId:z,symbol:X,baseToken:W,address:F,wallet:n,type:G,lang:a};q.has("baseTokenId")&&(J.baseTokenId=q.get("baseTokenId")),q.has("symbolId")&&(J.symbolId=q.get("symbolId"));var Y=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.C)(n.detail.chainId,F);case 2:t=(t=(t=e.sent).map((function(e){return+e}))).sort((function(e,t){return t-e})),a=0,t.length&&(a=+t[0]+1),I(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){n&&n.detail&&n.detail.account&&Y()}),[n,n.detail,F]),Object(i.useEffect)((function(){var e=[_,D.symbol,D.address,f,Object(j.g)(N).div(Object(j.g)(100)).toString(),O];M(e)}),[f,O,N,D,_]),Object(i.useEffect)((function(){}),[n,n.detail]),Object(y.jsx)("div",{className:"add-symbol",children:Object(y.jsx)("div",{className:"Step-box",children:Object(y.jsxs)(d.a,{initialStep:1,children:[Object(y.jsx)(g,{lang:a,wallet:n,props:J,loading:o,OnChange:function(e,t){"multiplier"===e&&b(t),"fundingRateCoefficient"===e&&x(t),"transactionFeeRatio"===e&&C(t),"oracleConfig"===e&&L(t)}}),Object(y.jsx)(w,{lang:a,wallet:n,props:J,parameters:U})]})})})})))},611:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),s=n.n(a),c=n(1),r=n(9),i=n(8),o=n(18);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,d=e.afterClick,u=e.checkApprove,p=e.wallet,f=e.spec,b=e.lang,j=Object(i.useState)(a?"disabled":"enabled"),m=Object(r.a)(j,2),h=m[0],v=m[1],O=Object(i.useState)(!0),x=Object(r.a)(O,2),y=x[0],g=x[1],w=Object(i.useState)(!1),S=Object(r.a)(w,2),k=S[0],N=S[1],C=Object(i.useState)(t),E=Object(r.a)(C,2),T=E[0],_=E[1],I=Object(i.useRef)(null),A=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===h){e.next=2;break}return e.abrupt("return");case 2:return R(),e.next=5,l();case 5:e.sent&&d&&d(),D();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){v("disabled"),N(!0),I.current&&(I.current.style.display="inline-block")},D=function(){I.current&&(I.current.style.display="none"),v("enabled"),N(!1)},L=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(f.pool,f.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.next=3,p.approve(f.pool,f.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(b["approve-failed"])),D();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return L(),function(){}}),[p,f,u]),Object(i.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){y?A():B()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:I,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?b.pending:y?T:b.approve]})}},615:function(e,t,n){"use strict";var a=n(8),s=n(18);t.a=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var n=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var a="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(a)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n),n.innerText=t,n.id=a,n.style.display="block";var s=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(s.y+s.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var c=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(c,"px")}else n.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(s.jsx)("div",{ref:t,children:e.children}):Object(s.jsx)("span",{ref:t,children:e.children})}},702:function(e,t,n){!function(e,t){"use strict";var n="default"in t?t.default:t;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,a=r(t);return e=n?(e=r(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),a=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?o(a):e}}function d(e,t){var n,a=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===a&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var u={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};d("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var p="rsw_2Y",f="rsw_2f",b="rsw_3G";d("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var j=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(b,t.PureComponent);var e,r,d,f=l(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),c(o(t=f.call(this,e)),"initialState",(function(){var e={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},n="object"===("undefined"==typeof window?"undefined":a(window))?t.getHash():"",s=t.getSteps();s.forEach((function(t,n){e.hashKeys[n]=t.props&&t.props.hashKey||"step".concat(n+1),e.hashKeys[e.hashKeys[n]]=n,e.namedSteps[n]=t.props&&t.props.stepName||"step".concat(n+1),e.namedSteps[e.namedSteps[n]]=n}));var c=t.props.initialStep-1;return c&&s[c]&&(e.activeStep=c),t.props.isHashEnabled&&n&&void 0!==e.hashKeys[n]&&(e.activeStep=e.hashKeys[n]),t.props.transitions&&(e.classes[e.activeStep]=t.props.transitions.intro||""),e})),c(o(t),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),c(o(t),"getTransitions",(function(){return t.props.transitions||{enterRight:"".concat(u.animated," ").concat(u.fadeInRight),enterLeft:"".concat(u.animated," ").concat(u.fadeInLeft),exitRight:"".concat(u.animated," ").concat(u.fadeOutRight),exitLeft:"".concat(u.animated," ").concat(u.fadeOutLeft)}})),c(o(t),"onHashChange",(function(){var e=t.state.hashKeys[t.getHash()];void 0!==e&&t.setActiveStep(e)})),c(o(t),"isInvalidStep",(function(e){return e<0||e>=t.totalSteps})),c(o(t),"setActiveStep",(function(e){var n,a,s=t.state.activeStep;s!==e&&(t.isInvalidStep(e)?console.error("".concat(e+1," is an invalid step")):(n=t.state.classes,a=t.getTransitions(),s<e?(n[s]=a.exitLeft,n[e]=a.enterRight):(n[s]=a.exitRight,n[e]=a.enterLeft),t.setState({activeStep:e,classes:n},(function(){t.onStepChange({previousStep:s+1,activeStep:e+1})}))))})),c(o(t),"onStepChange",(function(e){t.props.onStepChange(e),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)})),c(o(t),"getSteps",(function(){return n.Children.toArray(t.props.children)})),c(o(t),"firstStep",(function(){return t.goToStep(1)})),c(o(t),"lastStep",(function(){return t.goToStep(t.totalSteps)})),c(o(t),"nextStep",(function(){return t.setActiveStep(t.state.activeStep+1)})),c(o(t),"previousStep",(function(){return t.setActiveStep(t.state.activeStep-1)})),c(o(t),"goToStep",(function(e){t.props.isHashEnabled&&"string"==typeof e&&void 0!==t.state.hashKeys[e]?t.setActiveStep(t.state.hashKeys[e]):t.setActiveStep(e-1)})),c(o(t),"goToNamedStep",(function(e){"string"==typeof e&&void 0!==t.state.namedSteps[e]?t.setActiveStep(t.state.namedSteps[e]):console.error('Cannot find step with name "'.concat(e,'"'))})),c(o(t),"updateHash",(function(e){window.location.hash=t.state.hashKeys[e]})),c(o(t),"isReactComponent",(function(e){return"function"==typeof(e=e.type)||"object"===a(e)})),t.state=t.initialState(),t}return e=b,(r=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var e=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},a=this.state.classes,s=n.Children.map(this.getSteps(),(function(s,c){return s?(t.isActive=c===e.state.activeStep,t.transitions=a[c],!e.props.isLazyMount||e.props.isLazyMount&&t.isActive?n.createElement(m,t,e.isReactComponent(s)?n.cloneElement(s,t):s):null):null}));return n.createElement("div",{className:this.props.className},this.props.nav&&n.cloneElement(this.props.nav,t),n.createElement("div",{className:p},s))}}])&&s(e.prototype,r),d&&s(e,d),b}();j.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var m=function(e){var t=e.children,a=e.isActive;return e=e.transitions,n.createElement("div",{className:"".concat(f," ").concat(e," ").concat(a?b:"").trim()},t)};m.defaultProps={children:[],isActive:!1,transitions:""},e.Step=m,e.default=j,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(8))},703:function(e,t,n){"use strict";t.a=n.p+"static/media/down.6c22eb0d.svg"},704:function(e,t,n){"use strict";t.a=n.p+"static/media/up.42389455.svg"},914:function(e,t,n){}}]);
//# sourceMappingURL=23.139420b7.chunk.js.map