(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[22],{1221:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(1),i=n(13),r=n(6),o=n(48),l=n(691),d=n.n(l),u=n(25),p=n(618),f=n.n(p),b=n(617),m=n(11),h=n(658),j=n(692),v=n(693),O=n.p+"static/media/warn.db926076.svg",x=n(657),y=n(622),w=(n(870),n(18));function g(e){var t=e.goToStep,n=e.lang,a=e.wallet,o=e.props,l=e.OnChange,d=Object(r.useState)("0.0001"),u=Object(i.a)(d,2),p=u[0],b=u[1],h=Object(r.useState)("0.000004"),g=Object(i.a)(h,2),S=g[0],N=g[1],C=Object(r.useState)("0.1"),E=Object(i.a)(C,2),T=E[0],_=E[1],A=Object(r.useState)(!0),I=Object(i.a)(A,2),R=I[0],D=I[1],B=Object(r.useState)(!1),L=Object(i.a)(B,2),H=L[0],U=L[1],M=Object(r.useState)([]),P=Object(i.a)(M,2),K=P[0],z=P[1],X={BTCUSD:"0.0001",ETHUSD:"0.001",BNBUSD:"0.01",AXSUSDT:"1",MBOXUSDT:"1",IBSCDEFI:"0.01",IGAME:"0.01",ALICEUSDT:"0.1",NULSUSDT:"1"},W=Object(r.useState)("dev"===m.a.get()?{symbol:"BTCUSD",symbolId:0,address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",symbolId:0,address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),F=Object(i.a)(W,2),G=F[0],q=F[1],J=f()("dropdown-menu",{show:H}),Y=function(){return a&&a.detail&&a.detail.account},Q=function(){a.connect()},V=Object(r.useState)(Object(w.jsx)("button",{OnClick:Q,children:n["connect-wallet"]})),Z=Object(i.a)(V,2),$=Z[0],ee=Z[1],te=function(){l("multiplier",p),l("fundingRateCoefficient",S),l("transactionFeeRatio",T),l("oracleConfig",G),t(2)},ne=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.F)(a.detail.chainId);case 2:t=e.sent,q(t[0]),z(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Y()&&ne()}),[a.detail.chainId]),Object(r.useEffect)((function(){var e;e=Y()?Object(w.jsx)("button",{onClick:te,children:n.next}):Object(w.jsx)("button",{onClick:Q,children:n["connect-wallet"]}),ee(e)}),[a,a.detail,a.detail.account,G,p,S,T]),Object(w.jsxs)("div",{className:"step1",children:[Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)("span",{children:n["add-symbol"]}),Object(w.jsxs)("span",{children:[o.baseToken," @ ",n.bsc]})]}),Object(w.jsx)("div",{className:"context",children:Object(w.jsxs)("div",{className:"box",children:[Object(w.jsxs)("span",{className:"base-title",children:[" ",n.oracle]}),Object(w.jsxs)("div",{className:"select-oracle",children:[Object(w.jsx)("div",{className:"radio"}),Object(w.jsx)("span",{children:n["choose-from-exsting-ones"]})]}),Object(w.jsx)("div",{className:"select-symbol",children:Object(w.jsxs)("div",{className:"btn-group check-baseToken-btn",children:[Object(w.jsxs)("button",{type:"button",onClick:function(e){K.length>0&&(e.preventDefault(),U(!H))},className:"btn chec",children:[Object(w.jsx)(k,{spec:G}),Object(w.jsx)("span",{className:"check-base-down",children:Object(w.jsx)("img",{src:x.a,alt:""})})]}),Object(w.jsx)("div",{className:J,children:K.map((function(e,t){return Object(w.jsx)("div",{className:"dropdown-item",onClick:function(t){return function(e){var t=K.find((function(t){return t.address===e.address&&e.chainId===t.chainId}));t&&(b(X[t.symbol]),q(t),U(!1))}(e)},children:Object(w.jsx)(k,{spec:e})},t)}))})]})}),Object(w.jsxs)("div",{className:"warn",children:[Object(w.jsx)("img",{src:O}),Object(w.jsx)("span",{children:n["please-contact-the-team"]})]}),Object(w.jsxs)("div",{className:"symbol-name",children:[Object(w.jsx)("div",{className:"symbol-title",children:n["symbol-name"]}),Object(w.jsx)("div",{className:"symbol-value",children:G?G.symbol:""})]}),Object(w.jsxs)("div",{className:"advanced",onClick:function(){return D(!R)},children:[Object(w.jsx)("span",{className:"select-advanced",children:n.advanced}),R?Object(w.jsx)("img",{src:v.a}):Object(w.jsx)("img",{src:j.a})]}),!R&&Object(w.jsx)("div",{className:"advanced-border"}),R&&Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"margin-rewards",children:Object(w.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(w.jsx)("div",{className:"title",children:n.parameters}),Object(w.jsxs)("div",{className:"parameters",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"text",children:Object(w.jsx)(y.a,{block:!1,children:Object(w.jsx)("span",{className:"hover-title",tip:n["multiplier-hover"],children:n.multiplier})})}),Object(w.jsx)("div",{className:"input-value",children:Object(w.jsx)("input",{type:"number",value:p,onChange:function(e){return function(e){var t=e.target.value;b(t)}(e)}})})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"text",children:Object(w.jsx)(y.a,{block:!1,children:Object(w.jsx)("span",{className:"hover-title",tip:n["funding-rate-coefficient-hover"],children:n["funding-rate-coefficient"]})})}),Object(w.jsx)("div",{className:"input-value",children:Object(w.jsx)("input",{type:"number",value:S,onChange:function(e){return function(e){var t=e.target.value;N(t)}(e)}})})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"text",children:Object(w.jsx)(y.a,{block:!1,children:Object(w.jsx)("span",{className:"hover-title",tip:n["transaction-fee-ratio-hover"],children:n["transaction-fee-ratio"]})})}),Object(w.jsxs)("div",{className:"input-value",children:[Object(w.jsx)("input",{type:"number",value:T,onChange:function(e){return function(e){var t=e.target.value;_(t)}(e)}}),"  %"]})]})]})]})})}),Object(w.jsx)("div",{className:"next-button",children:$})]})})]})}function S(e){var t=e.goToStep,n=e.lang,a=e.wallet,i=e.props,r=e.parameters,o=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.d)(a.detail.chainId,i.address,a.detail.account,r);case 2:e.sent.success?alert(n.success):alert(n.fail);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"step2",children:[Object(w.jsx)("div",{className:"header",children:Object(w.jsx)("span",{children:n.confirm})}),Object(w.jsx)("div",{className:"context",children:Object(w.jsxs)("div",{className:"box",children:[Object(w.jsxs)("span",{className:"oracle-title",children:[" ",n.oracle]}),Object(w.jsx)("div",{className:"oracle-name",children:r[1]}),Object(w.jsxs)("span",{className:"symbol-title",children:[" ",n["symbol-name"]]}),Object(w.jsx)("div",{className:"symbol-name",children:r[1]}),Object(w.jsx)("div",{className:"margin-rewards",children:Object(w.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(w.jsx)("div",{className:"title",children:n.parameters}),Object(w.jsxs)("div",{className:"parameters",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"text",children:n.multiplier}),Object(w.jsx)("div",{className:"input-value",children:r[3]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"text",children:n["funding-rate-coefficient"]}),Object(w.jsx)("div",{className:"input-value",children:r[5]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"text",children:n["transaction-fee-ratio"]}),Object(w.jsxs)("div",{className:"input-value",children:[Object(m.g)(r[4]).times(Object(m.g)(100)).toString(),"  %"]})]})]})]})}),Object(w.jsx)("div",{className:"next-button",children:Object(w.jsxs)("div",{className:"next-button",children:[Object(w.jsx)("button",{onClick:function(){t(1)},children:n.cancel}),Object(w.jsx)(b.a,{click:o,btnText:n.ok,lang:n})]})})]})})]})}function k(e){var t=e.spec;return t?"".concat(t.symbol):""}t.default=Object(o.b)("wallet")(Object(o.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,a=e.lang,o=Object(r.useState)("0.0001"),l=Object(i.a)(o,2),p=l[0],f=l[1],b=Object(r.useState)("0.000004"),j=Object(i.a)(b,2),v=j[0],O=j[1],x=Object(r.useState)("0.1"),y=Object(i.a)(x,2),k=y[0],N=y[1],C=Object(r.useState)(0),E=Object(i.a)(C,2),T=E[0],_=E[1],A=Object(r.useState)("dev"===m.a.get()?{symbol:"BTCUSD",address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),I=Object(i.a)(A,2),R=I[0],D=I[1],B=Object(r.useState)([]),L=Object(i.a)(B,2),H=L[0],U=L[1],M=Object(u.useParams)(),P=M.version,K=M.chainId,z=M.symbol,X=M.baseToken,W=M.address,F=M.type,G=Object(h.a)(),q={version:P,chainId:K,symbol:z,baseToken:X,address:W,wallet:n,type:F,lang:a};G.has("baseTokenId")&&(q.baseTokenId=G.get("baseTokenId")),G.has("symbolId")&&(q.symbolId=G.get("symbolId"));var J=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.B)(n.detail.chainId,W);case 2:t=e.sent,a=t.length,_(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n&&n.detail&&n.detail.account&&J()}),[n,n.detail,W]),Object(r.useEffect)((function(){var e=[T,R.symbol,R.address,p,Object(m.g)(k).div(Object(m.g)(100)).toString(),v];U(e)}),[p,v,k,R,T]),Object(r.useEffect)((function(){}),[n,n.detail]),Object(w.jsx)("div",{className:"add-symbol",children:Object(w.jsx)("div",{className:"Step-box",children:Object(w.jsxs)(d.a,{initialStep:1,children:[Object(w.jsx)(g,{lang:a,wallet:n,props:q,OnChange:function(e,t){"multiplier"===e&&f(t),"fundingRateCoefficient"===e&&O(t),"transactionFeeRatio"===e&&N(t),"oracleConfig"===e&&D(t)}}),Object(w.jsx)(S,{lang:a,wallet:n,props:q,parameters:H})]})})})})))},617:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),s=n.n(a),c=n(1),i=n(13),r=n(6),o=n(18);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,d=e.afterClick,u=e.checkApprove,p=e.wallet,f=e.spec,b=e.lang,m=Object(r.useState)(a?"disabled":"enabled"),h=Object(i.a)(m,2),j=h[0],v=h[1],O=Object(r.useState)(!0),x=Object(i.a)(O,2),y=x[0],w=x[1],g=Object(r.useState)(!1),S=Object(i.a)(g,2),k=S[0],N=S[1],C=Object(r.useState)(t),E=Object(i.a)(C,2),T=E[0],_=E[1],A=Object(r.useRef)(null),I=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===j){e.next=2;break}return e.abrupt("return");case 2:return R(),e.next=5,l();case 5:e.sent&&d&&d(),D();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){v("disabled"),N(!0),A.current&&(A.current.style.display="inline-block")},D=function(){A.current&&(A.current.style.display="none"),v("enabled"),N(!1)},B=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(f.pool,f.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.next=3,p.approve(f.pool,f.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(b["approve-failed"])),D();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return B(),function(){}}),[p,f,u]),Object(r.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){y?I():L()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?b.pending:y?T:b.approve]})}},622:function(e,t,n){"use strict";var a=n(6),s=n(18);t.a=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var n=t.addEventListener("mouseover",(function(e){var t="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(t)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n);var a=e.currentTarget;n.innerText=a.getAttribute("tip")||a.getAttribute("title"),n.id=t,n.style.display="block";var s=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(s.y+s.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var c=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(c,"px")}else n.style.left="".concat(e.pageX,"px")}));e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(s.jsx)("div",{ref:t,children:e.children}):Object(s.jsx)("span",{ref:t,children:e.children})}},691:function(e,t,n){!function(e,t){"use strict";var n="default"in t?t.default:t;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,a=i(t);return e=n?(e=i(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),a=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?o(a):e}}function d(e,t){var n,a=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===a&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var u={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};d("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var p="rsw_2Y",f="rsw_2f",b="rsw_3G";d("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var m=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(b,t.PureComponent);var e,i,d,f=l(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),c(o(t=f.call(this,e)),"initialState",(function(){var e={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},n="object"===("undefined"==typeof window?"undefined":a(window))?t.getHash():"",s=t.getSteps();s.forEach((function(t,n){e.hashKeys[n]=t.props&&t.props.hashKey||"step".concat(n+1),e.hashKeys[e.hashKeys[n]]=n,e.namedSteps[n]=t.props&&t.props.stepName||"step".concat(n+1),e.namedSteps[e.namedSteps[n]]=n}));var c=t.props.initialStep-1;return c&&s[c]&&(e.activeStep=c),t.props.isHashEnabled&&n&&void 0!==e.hashKeys[n]&&(e.activeStep=e.hashKeys[n]),t.props.transitions&&(e.classes[e.activeStep]=t.props.transitions.intro||""),e})),c(o(t),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),c(o(t),"getTransitions",(function(){return t.props.transitions||{enterRight:"".concat(u.animated," ").concat(u.fadeInRight),enterLeft:"".concat(u.animated," ").concat(u.fadeInLeft),exitRight:"".concat(u.animated," ").concat(u.fadeOutRight),exitLeft:"".concat(u.animated," ").concat(u.fadeOutLeft)}})),c(o(t),"onHashChange",(function(){var e=t.state.hashKeys[t.getHash()];void 0!==e&&t.setActiveStep(e)})),c(o(t),"isInvalidStep",(function(e){return e<0||e>=t.totalSteps})),c(o(t),"setActiveStep",(function(e){var n,a,s=t.state.activeStep;s!==e&&(t.isInvalidStep(e)?console.error("".concat(e+1," is an invalid step")):(n=t.state.classes,a=t.getTransitions(),s<e?(n[s]=a.exitLeft,n[e]=a.enterRight):(n[s]=a.exitRight,n[e]=a.enterLeft),t.setState({activeStep:e,classes:n},(function(){t.onStepChange({previousStep:s+1,activeStep:e+1})}))))})),c(o(t),"onStepChange",(function(e){t.props.onStepChange(e),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)})),c(o(t),"getSteps",(function(){return n.Children.toArray(t.props.children)})),c(o(t),"firstStep",(function(){return t.goToStep(1)})),c(o(t),"lastStep",(function(){return t.goToStep(t.totalSteps)})),c(o(t),"nextStep",(function(){return t.setActiveStep(t.state.activeStep+1)})),c(o(t),"previousStep",(function(){return t.setActiveStep(t.state.activeStep-1)})),c(o(t),"goToStep",(function(e){t.props.isHashEnabled&&"string"==typeof e&&void 0!==t.state.hashKeys[e]?t.setActiveStep(t.state.hashKeys[e]):t.setActiveStep(e-1)})),c(o(t),"goToNamedStep",(function(e){"string"==typeof e&&void 0!==t.state.namedSteps[e]?t.setActiveStep(t.state.namedSteps[e]):console.error('Cannot find step with name "'.concat(e,'"'))})),c(o(t),"updateHash",(function(e){window.location.hash=t.state.hashKeys[e]})),c(o(t),"isReactComponent",(function(e){return"function"==typeof(e=e.type)||"object"===a(e)})),t.state=t.initialState(),t}return e=b,(i=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var e=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},a=this.state.classes,s=n.Children.map(this.getSteps(),(function(s,c){return s?(t.isActive=c===e.state.activeStep,t.transitions=a[c],!e.props.isLazyMount||e.props.isLazyMount&&t.isActive?n.createElement(h,t,e.isReactComponent(s)?n.cloneElement(s,t):s):null):null}));return n.createElement("div",{className:this.props.className},this.props.nav&&n.cloneElement(this.props.nav,t),n.createElement("div",{className:p},s))}}])&&s(e.prototype,i),d&&s(e,d),b}();m.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var h=function(e){var t=e.children,a=e.isActive;return e=e.transitions,n.createElement("div",{className:"".concat(f," ").concat(e," ").concat(a?b:"").trim()},t)};h.defaultProps={children:[],isActive:!1,transitions:""},e.Step=h,e.default=m,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(6))},692:function(e,t,n){"use strict";t.a=n.p+"static/media/down.611894d4.svg"},693:function(e,t,n){"use strict";t.a=n.p+"static/media/up.2c6adea1.svg"},870:function(e,t,n){}}]);
//# sourceMappingURL=22.52ecc7e0.chunk.js.map