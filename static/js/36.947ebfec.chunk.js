(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[36],{1143:function(e,t,n){},1461:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(2),i=n(31),r=n(5),o=n(11),l=n(76),d=n(881),u=n.n(d),p=n(696),j=n(16),b=(n(1143),n(882)),f=n(883),h=n(702),m=n(32);function v(e){var t=e.goToStep,n=e.lang,a=e.wallet,s=e.OnChange,c=Object(o.useState)(!1),i=Object(r.a)(c,2),l=i[0],d=i[1],u=Object(o.useState)(""),p=Object(r.a)(u,2),j=p[0],v=p[1],O=Object(o.useState)(10),x=Object(r.a)(O,2),g=x[0],w=x[1],y=Object(o.useState)(5),S=Object(r.a)(y,2),N=S[0],k=S[1],C=Object(o.useState)(100),_=Object(r.a)(C,2),A=_[0],E=_[1],T=Object(o.useState)(50),R=Object(r.a)(T,2),L=R[0],M=R[1],H=Object(o.useState)(1e3),I=Object(r.a)(H,2),z=I[0],K=I[1],P=Object(o.useState)(0),q=Object(r.a)(P,2),W=q[0],X=q[1],B=function(){a.connect()},D=Object(o.useState)(Object(m.jsx)("button",{OnClick:B,children:n["connect-wallet"]})),G=Object(r.a)(D,2),J=G[0],U=G[1],Y=function(){42===j.length&&0===j.indexOf("0x")?""!==g&&""!==N&&""!==A&&""!==L&&""!==z&&""!==W?(s("baseTokenAddress",j),s("initialMargin",g),s("maintenanceMargin",N),s("poolMargin",A),s("cutRatio",L),s("maxReward",z),s("minReward",W),t(2)):alert(n["please-fill-in-the-data-completely"]):alert(n["please-enter-a-correct-address"])};return Object(o.useEffect)((function(){var e;e=a&&a.detail&&a.detail.account?Object(m.jsx)("button",{onClick:Y,children:n.next}):Object(m.jsx)("button",{onClick:B,children:n["connect-wallet"]}),U(e)}),[a,a.detail,a.detail.account,W,z,L,j,g,N,A]),Object(m.jsxs)("div",{className:"step1",children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("span",{children:n["add-pool"]}),Object(m.jsx)("span",{children:n.bsc})]}),Object(m.jsx)("div",{className:"context",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsxs)("span",{className:"base-title",children:[" ",n["base-token-addresses"]]}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:"base-token-address",value:j,onChange:function(e){return function(e){var t=e.target.value;v(t)}(e)}})}),Object(m.jsxs)("div",{className:"advanced",onClick:function(){return d(!l)},children:[Object(m.jsx)("span",{className:"select-advanced",children:n.advanced}),l?Object(m.jsx)("img",{src:f.a}):Object(m.jsx)("img",{src:b.a})]}),Object(m.jsx)("div",{className:"advanced-border"}),l&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"margin-rewards",children:[Object(m.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(m.jsx)("div",{className:"title",children:n["margin-ratio-parameters"]}),Object(m.jsxs)("div",{className:"parameters",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:Object(m.jsx)(h.a,{block:!1,children:Object(m.jsx)("span",{className:"hover-title",tip:n["initial-margin-hover"],children:n["initial-margin"]})})}),Object(m.jsxs)("div",{className:"input-value",children:[Object(m.jsx)("input",{type:"number",value:g,onChange:function(e){return function(e){var t=e.target.value;w(t)}(e)}})," %"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:Object(m.jsx)(h.a,{block:!1,children:Object(m.jsx)("span",{className:"hover-title",tip:n["maintenance-margin-hover"],children:n["maintenance-margin"]})})}),Object(m.jsxs)("div",{className:"input-value",children:[Object(m.jsx)("input",{type:"number",value:N,onChange:function(e){return function(e){var t=e.target.value;k(t)}(e)}})," %"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:Object(m.jsx)(h.a,{block:!1,children:Object(m.jsx)("span",{className:"hover-title",tip:n["pool-margin-hover"],children:n["pool-margin"]})})}),Object(m.jsxs)("div",{className:"input-value",children:[Object(m.jsx)("input",{type:"number",value:A,onChange:function(e){return function(e){var t=e.target.value;E(t)}(e)}})," %"]})]})]})]}),Object(m.jsxs)("div",{className:"rewards-for-liquidates",children:[Object(m.jsx)("div",{className:"title",children:n["rewards-for-liquidates"]}),Object(m.jsxs)("div",{className:"parameters",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:Object(m.jsx)(h.a,{block:!1,children:Object(m.jsx)("span",{className:"hover-title",tip:n["cut-ratio-hover"],children:n["cut-ratio"]})})}),Object(m.jsxs)("div",{className:"input-value",children:[Object(m.jsx)("input",{type:"number",value:L,onChange:function(e){return function(e){var t=e.target.value;M(t)}(e)}})," %"]})]}),Object(m.jsxs)("div",{className:"no-fix",children:[Object(m.jsx)("div",{className:"text",children:Object(m.jsx)(h.a,{block:!1,children:Object(m.jsx)("span",{className:"hover-title",tip:n["max-reward-hover"],children:n["max-reward"]})})}),Object(m.jsx)("div",{className:"input-value",children:Object(m.jsx)("input",{type:"number",value:z,onChange:function(e){return function(e){var t=e.target.value;K(t)}(e)}})})]}),Object(m.jsxs)("div",{className:"no-fix",children:[Object(m.jsx)("div",{className:"text",children:Object(m.jsx)(h.a,{block:!1,children:Object(m.jsx)("span",{className:"hover-title",tip:n["min-reward-hover"],children:n["min-reward"]})})}),Object(m.jsx)("div",{className:"input-value",children:Object(m.jsx)("input",{type:"number",value:W,onChange:function(e){return function(e){var t=e.target.value;X(t)}(e)}})})]})]})]}),Object(m.jsxs)("div",{className:"protocol-collect-ratio",children:[n["protocol-fee-collect-ratio"],"\xa0 \xa0  20%"]})]})}),Object(m.jsx)("div",{className:"next-button",children:J})]})})]})}function O(e){var t=e.goToStep,n=e.lang,a=(e.wallet,e.OnChange),s=Object(o.useState)(""),c=Object(r.a)(s,2),i=c[0],l=c[1];return Object(m.jsxs)("div",{className:"step2",children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("span",{children:n["add-pool"]}),Object(m.jsx)("span",{children:n.bsc})]}),Object(m.jsx)("div",{className:"context",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("div",{children:n["the-protocol-requires"]}),Object(m.jsxs)("div",{children:[n["please-provide-the-address"],":"]}),Object(m.jsx)("div",{className:"address-input",children:Object(m.jsx)("input",{value:i,onChange:function(e){return function(e){var t=e.target.value;l(t)}(e)}})}),Object(m.jsx)("div",{children:n["for-example"]}),Object(m.jsxs)("div",{className:"next-button",children:[Object(m.jsx)("button",{onClick:function(){t(1)},children:n.cancel}),Object(m.jsx)("button",{onClick:function(){42===i.length&&0===i.indexOf("0x")?(a("baseTokenAddressOther",i),t(3)):alert(n["please-enter-a-correct-address"])},children:n.send})]})]})})]})}function x(e){var t=e.goToStep,n=e.lang,a=e.wallet,l=e.params,d=Object(o.useState)([]),u=Object(r.a)(d,2),b=u[0],f=u[1],h=Object(o.useState)(""),v=Object(r.a)(h,2),O=v[0],x=v[1],g=Object(o.useState)(""),w=Object(r.a)(g,2),y=w[0],S=w[1];Object(o.useEffect)((function(){var e=Object(i.a)(l),t=e[0],n=e[1],a=e[2],s=e[3],c=e[4],r=e[5],o=e[6],d=e[7],u=[Object(j.g)(c).div(Object(j.g)(100)).toString(),Object(j.g)(t).div(Object(j.g)(100)).toString(),Object(j.g)(s).div(Object(j.g)(100)).toString(),d,o,Object(j.g)(r).div(Object(j.g)(100)).toString(),0];x(n),S(a),f(u)}),[l]);var N=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.k)(a.detail.chainId,a.detail.account,b,O,y);case 2:t=e.sent,console.log(t),t.success?alert(n.success):alert(n.fail);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"step3",children:[Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("span",{children:n.confirm})}),Object(m.jsx)("div",{className:"context",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsxs)("span",{className:"base-title",children:[" ",n["base-token-addresses"]]}),Object(m.jsx)("div",{className:"address-token",children:l[1]}),Object(m.jsxs)("div",{className:"margin-rewards",children:[Object(m.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(m.jsx)("div",{className:"title",children:n["margin-ratio-parameters"]}),Object(m.jsxs)("div",{className:"parameters",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:n["initial-margin"]}),Object(m.jsxs)("div",{className:"input-value",children:[l[0]," %"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:n["maintenance-margin"]}),Object(m.jsxs)("div",{className:"input-value",children:[l[3]," %"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:n["pool-margin"]}),Object(m.jsxs)("div",{className:"input-value",children:[l[4]," %"]})]})]})]}),Object(m.jsxs)("div",{className:"rewards-for-liquidates",children:[Object(m.jsx)("div",{className:"title",children:n["rewards-for-liquidates"]}),Object(m.jsxs)("div",{className:"parameters",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text",children:n["cut-ratio"]}),Object(m.jsxs)("div",{className:"input-value",children:[l[5]," %"]})]}),Object(m.jsxs)("div",{className:"no-fix",children:[Object(m.jsx)("div",{className:"text",children:n["max-reward"]}),Object(m.jsx)("div",{className:"input-value",children:l[6]})]}),Object(m.jsxs)("div",{className:"no-fix",children:[Object(m.jsx)("div",{className:"text",children:n["min-reward"]}),Object(m.jsx)("div",{className:"input-value",children:l[7]})]})]})]})]}),Object(m.jsx)("div",{className:"github-fork",children:Object(m.jsx)("a",{target:"_blank",href:"https://github.com/deri-finance/deri-open-zone",children:n["github-fock"]})}),Object(m.jsx)("div",{className:"next-button",children:Object(m.jsxs)("div",{className:"next-button",children:[Object(m.jsx)("button",{onClick:function(){t(1)},children:n.cancel}),Object(m.jsx)(p.a,{click:N,btnText:n.ok,lang:n})]})})]})})]})}t.default=Object(l.b)("wallet","trading")(Object(l.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,a=e.lang,s=Object(o.useState)(""),c=Object(r.a)(s,2),i=c[0],l=c[1],d=Object(o.useState)(""),p=Object(r.a)(d,2),j=p[0],b=p[1],f=Object(o.useState)(10),h=Object(r.a)(f,2),g=h[0],w=h[1],y=Object(o.useState)(5),S=Object(r.a)(y,2),N=S[0],k=S[1],C=Object(o.useState)(100),_=Object(r.a)(C,2),A=_[0],E=_[1],T=Object(o.useState)(50),R=Object(r.a)(T,2),L=R[0],M=R[1],H=Object(o.useState)(1e3),I=Object(r.a)(H,2),z=I[0],K=I[1],P=Object(o.useState)(0),q=Object(r.a)(P,2),W=q[0],X=q[1],B=Object(o.useState)([]),D=Object(r.a)(B,2),G=D[0],J=D[1],U=function(e,t){"baseTokenAddress"===e&&l(t),"initialMargin"===e&&w(t),"baseTokenAddressOther"===e&&b(t),"maintenanceMargin"===e&&k(t),"poolMargin"===e&&E(t),"cutRatio"===e&&M(t),"maxReward"===e&&K(t),"minReward"===e&&X(t)};return Object(o.useEffect)((function(){}),[n,n.detail]),Object(o.useEffect)((function(){J([g,i,j,N,A,L,z,W])}),[g,i,j,N,A,L,z,W]),Object(m.jsx)("div",{className:"add-pool",children:Object(m.jsx)("div",{className:"Step-box",children:Object(m.jsxs)(u.a,{initialStep:1,children:[Object(m.jsx)(v,{lang:a,wallet:n,OnChange:U}),Object(m.jsx)(O,{lang:a,wallet:n,OnChange:U}),Object(m.jsx)(x,{lang:a,wallet:n,params:G})]})})})})))},696:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),s=n.n(a),c=n(2),i=n(5),r=n(11),o=n(32);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,d=e.afterClick,u=e.checkApprove,p=e.wallet,j=e.spec,b=e.lang,f=Object(r.useState)(a?"disabled":"enabled"),h=Object(i.a)(f,2),m=h[0],v=h[1],O=Object(r.useState)(!0),x=Object(i.a)(O,2),g=x[0],w=x[1],y=Object(r.useState)(!1),S=Object(i.a)(y,2),N=S[0],k=S[1],C=Object(r.useState)(t),_=Object(i.a)(C,2),A=_[0],E=_[1],T=Object(r.useRef)(null),R=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return L(),e.next=5,l();case 5:e.sent&&d&&d(),M();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){v("disabled"),k(!0),T.current&&(T.current.style.display="inline-block")},M=function(){T.current&&(T.current.style.display="none"),v("enabled"),k(!1)},H=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(),e.next=3,p.approve(j.pool,j.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(b["approve-failed"])),M();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return H(),function(){}}),[p,j,u]),Object(r.useEffect)((function(){return t&&E(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){g?R():I()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:T,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?b.pending:g?A:b.approve]})}},702:function(e,t,n){"use strict";var a=n(11),s=n(32);t.a=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var n=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var a="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(a)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n),n.innerText=t,n.id=a,n.style.display="block";var s=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(s.y+s.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var c=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(c,"px")}else n.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(s.jsx)("div",{ref:t,children:e.children}):Object(s.jsx)("span",{ref:t,children:e.children})}},881:function(e,t,n){!function(e,t){"use strict";var n="default"in t?t.default:t;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,a=i(t);return e=n?(e=i(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),a=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?o(a):e}}function d(e,t){var n,a=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===a&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var u={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};d("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var p="rsw_2Y",j="rsw_2f",b="rsw_3G";d("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var f=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(b,t.PureComponent);var e,i,d,j=l(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),c(o(t=j.call(this,e)),"initialState",(function(){var e={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},n="object"===("undefined"==typeof window?"undefined":a(window))?t.getHash():"",s=t.getSteps();s.forEach((function(t,n){e.hashKeys[n]=t.props&&t.props.hashKey||"step".concat(n+1),e.hashKeys[e.hashKeys[n]]=n,e.namedSteps[n]=t.props&&t.props.stepName||"step".concat(n+1),e.namedSteps[e.namedSteps[n]]=n}));var c=t.props.initialStep-1;return c&&s[c]&&(e.activeStep=c),t.props.isHashEnabled&&n&&void 0!==e.hashKeys[n]&&(e.activeStep=e.hashKeys[n]),t.props.transitions&&(e.classes[e.activeStep]=t.props.transitions.intro||""),e})),c(o(t),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),c(o(t),"getTransitions",(function(){return t.props.transitions||{enterRight:"".concat(u.animated," ").concat(u.fadeInRight),enterLeft:"".concat(u.animated," ").concat(u.fadeInLeft),exitRight:"".concat(u.animated," ").concat(u.fadeOutRight),exitLeft:"".concat(u.animated," ").concat(u.fadeOutLeft)}})),c(o(t),"onHashChange",(function(){var e=t.state.hashKeys[t.getHash()];void 0!==e&&t.setActiveStep(e)})),c(o(t),"isInvalidStep",(function(e){return e<0||e>=t.totalSteps})),c(o(t),"setActiveStep",(function(e){var n,a,s=t.state.activeStep;s!==e&&(t.isInvalidStep(e)?console.error("".concat(e+1," is an invalid step")):(n=t.state.classes,a=t.getTransitions(),s<e?(n[s]=a.exitLeft,n[e]=a.enterRight):(n[s]=a.exitRight,n[e]=a.enterLeft),t.setState({activeStep:e,classes:n},(function(){t.onStepChange({previousStep:s+1,activeStep:e+1})}))))})),c(o(t),"onStepChange",(function(e){t.props.onStepChange(e),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)})),c(o(t),"getSteps",(function(){return n.Children.toArray(t.props.children)})),c(o(t),"firstStep",(function(){return t.goToStep(1)})),c(o(t),"lastStep",(function(){return t.goToStep(t.totalSteps)})),c(o(t),"nextStep",(function(){return t.setActiveStep(t.state.activeStep+1)})),c(o(t),"previousStep",(function(){return t.setActiveStep(t.state.activeStep-1)})),c(o(t),"goToStep",(function(e){t.props.isHashEnabled&&"string"==typeof e&&void 0!==t.state.hashKeys[e]?t.setActiveStep(t.state.hashKeys[e]):t.setActiveStep(e-1)})),c(o(t),"goToNamedStep",(function(e){"string"==typeof e&&void 0!==t.state.namedSteps[e]?t.setActiveStep(t.state.namedSteps[e]):console.error('Cannot find step with name "'.concat(e,'"'))})),c(o(t),"updateHash",(function(e){window.location.hash=t.state.hashKeys[e]})),c(o(t),"isReactComponent",(function(e){return"function"==typeof(e=e.type)||"object"===a(e)})),t.state=t.initialState(),t}return e=b,(i=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var e=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},a=this.state.classes,s=n.Children.map(this.getSteps(),(function(s,c){return s?(t.isActive=c===e.state.activeStep,t.transitions=a[c],!e.props.isLazyMount||e.props.isLazyMount&&t.isActive?n.createElement(h,t,e.isReactComponent(s)?n.cloneElement(s,t):s):null):null}));return n.createElement("div",{className:this.props.className},this.props.nav&&n.cloneElement(this.props.nav,t),n.createElement("div",{className:p},s))}}])&&s(e.prototype,i),d&&s(e,d),b}();f.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var h=function(e){var t=e.children,a=e.isActive;return e=e.transitions,n.createElement("div",{className:"".concat(j," ").concat(e," ").concat(a?b:"").trim()},t)};h.defaultProps={children:[],isActive:!1,transitions:""},e.Step=h,e.default=f,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(11))},882:function(e,t,n){"use strict";t.a=n.p+"static/media/down.611894d4.svg"},883:function(e,t,n){"use strict";t.a=n.p+"static/media/up.2c6adea1.svg"}}]);
//# sourceMappingURL=36.947ebfec.chunk.js.map