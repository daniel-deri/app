(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[37],{1111:function(e,t,n){},1429:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n(70),i=n(850),c=n.n(i),r=n(665),o=n(12),l=(n(1111),n(851)),d=n(852),p=n(672),u=n(28);function j({goToStep:e,lang:t,wallet:n,OnChange:s}){const[i,c]=Object(a.useState)(!1),[r,o]=Object(a.useState)(""),[j,b]=Object(a.useState)(10),[h,m]=Object(a.useState)(5),[f,v]=Object(a.useState)(100),[O,x]=Object(a.useState)(50),[g,w]=Object(a.useState)(1e3),[y,S]=Object(a.useState)(0),N=()=>{n.connect()},[k,C]=Object(a.useState)(Object(u.jsx)("button",{OnClick:N,children:t["connect-wallet"]})),_=()=>{42===r.length&&0===r.indexOf("0x")?""!==j&&""!==h&&""!==f&&""!==O&&""!==g&&""!==y?(s("baseTokenAddress",r),s("initialMargin",j),s("maintenanceMargin",h),s("poolMargin",f),s("cutRatio",O),s("maxReward",g),s("minReward",y),e(2)):alert(t["please-fill-in-the-data-completely"]):alert(t["please-enter-a-correct-address"])};return Object(a.useEffect)((()=>{let e;e=n&&n.detail&&n.detail.account?Object(u.jsx)("button",{onClick:_,children:t.next}):Object(u.jsx)("button",{onClick:N,children:t["connect-wallet"]}),C(e)}),[n,n.detail,n.detail.account,y,g,O,r,j,h,f]),Object(u.jsxs)("div",{className:"step1",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("span",{children:t["add-pool"]}),Object(u.jsx)("span",{children:t.bsc})]}),Object(u.jsx)("div",{className:"context",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsxs)("span",{className:"base-title",children:[" ",t["base-token-addresses"]]}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"base-token-address",value:r,onChange:e=>(e=>{let{value:t}=e.target;o(t)})(e)})}),Object(u.jsxs)("div",{className:"advanced",onClick:()=>c(!i),children:[Object(u.jsx)("span",{className:"select-advanced",children:t.advanced}),i?Object(u.jsx)("img",{src:d.a}):Object(u.jsx)("img",{src:l.a})]}),Object(u.jsx)("div",{className:"advanced-border"}),i&&Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"margin-rewards",children:[Object(u.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(u.jsx)("div",{className:"title",children:t["margin-ratio-parameters"]}),Object(u.jsxs)("div",{className:"parameters",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)(p.a,{block:!1,children:Object(u.jsx)("span",{className:"hover-title",tip:t["initial-margin-hover"],children:t["initial-margin"]})})}),Object(u.jsxs)("div",{className:"input-value",children:[Object(u.jsx)("input",{type:"number",value:j,onChange:e=>(e=>{let{value:t}=e.target;b(t)})(e)})," %"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)(p.a,{block:!1,children:Object(u.jsx)("span",{className:"hover-title",tip:t["maintenance-margin-hover"],children:t["maintenance-margin"]})})}),Object(u.jsxs)("div",{className:"input-value",children:[Object(u.jsx)("input",{type:"number",value:h,onChange:e=>(e=>{let{value:t}=e.target;m(t)})(e)})," %"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)(p.a,{block:!1,children:Object(u.jsx)("span",{className:"hover-title",tip:t["pool-margin-hover"],children:t["pool-margin"]})})}),Object(u.jsxs)("div",{className:"input-value",children:[Object(u.jsx)("input",{type:"number",value:f,onChange:e=>(e=>{let{value:t}=e.target;v(t)})(e)})," %"]})]})]})]}),Object(u.jsxs)("div",{className:"rewards-for-liquidates",children:[Object(u.jsx)("div",{className:"title",children:t["rewards-for-liquidates"]}),Object(u.jsxs)("div",{className:"parameters",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)(p.a,{block:!1,children:Object(u.jsx)("span",{className:"hover-title",tip:t["cut-ratio-hover"],children:t["cut-ratio"]})})}),Object(u.jsxs)("div",{className:"input-value",children:[Object(u.jsx)("input",{type:"number",value:O,onChange:e=>(e=>{let{value:t}=e.target;x(t)})(e)})," %"]})]}),Object(u.jsxs)("div",{className:"no-fix",children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)(p.a,{block:!1,children:Object(u.jsx)("span",{className:"hover-title",tip:t["max-reward-hover"],children:t["max-reward"]})})}),Object(u.jsx)("div",{className:"input-value",children:Object(u.jsx)("input",{type:"number",value:g,onChange:e=>(e=>{let{value:t}=e.target;w(t)})(e)})})]}),Object(u.jsxs)("div",{className:"no-fix",children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)(p.a,{block:!1,children:Object(u.jsx)("span",{className:"hover-title",tip:t["min-reward-hover"],children:t["min-reward"]})})}),Object(u.jsx)("div",{className:"input-value",children:Object(u.jsx)("input",{type:"number",value:y,onChange:e=>(e=>{let{value:t}=e.target;S(t)})(e)})})]})]})]}),Object(u.jsxs)("div",{className:"protocol-collect-ratio",children:[t["protocol-fee-collect-ratio"],"\xa0 \xa0  20%"]})]})}),Object(u.jsx)("div",{className:"next-button",children:k})]})})]})}function b({goToStep:e,lang:t,wallet:n,OnChange:s}){const[i,c]=Object(a.useState)("");return Object(u.jsxs)("div",{className:"step2",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("span",{children:t["add-pool"]}),Object(u.jsx)("span",{children:t.bsc})]}),Object(u.jsx)("div",{className:"context",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{children:t["the-protocol-requires"]}),Object(u.jsxs)("div",{children:[t["please-provide-the-address"],":"]}),Object(u.jsx)("div",{className:"address-input",children:Object(u.jsx)("input",{value:i,onChange:e=>(e=>{let{value:t}=e.target;c(t)})(e)})}),Object(u.jsx)("div",{children:t["for-example"]}),Object(u.jsxs)("div",{className:"next-button",children:[Object(u.jsx)("button",{onClick:()=>{e(1)},children:t.cancel}),Object(u.jsx)("button",{onClick:()=>{42===i.length&&0===i.indexOf("0x")?(s("baseTokenAddressOther",i),e(3)):alert(t["please-enter-a-correct-address"])},children:t.send})]})]})})]})}function h({goToStep:e,lang:t,wallet:n,params:s}){const[i,c]=Object(a.useState)([]),[l,d]=Object(a.useState)(""),[p,j]=Object(a.useState)("");Object(a.useEffect)((()=>{let[e,t,n,a,i,r,l,p]=[...s],u=[Object(o.g)(i).div(Object(o.g)(100)).toString(),Object(o.g)(e).div(Object(o.g)(100)).toString(),Object(o.g)(a).div(Object(o.g)(100)).toString(),p,l,Object(o.g)(r).div(Object(o.g)(100)).toString(),0];d(t),j(n),c(u)}),[s]);return Object(u.jsxs)("div",{className:"step3",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("span",{children:t.confirm})}),Object(u.jsx)("div",{className:"context",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsxs)("span",{className:"base-title",children:[" ",t["base-token-addresses"]]}),Object(u.jsx)("div",{className:"address-token",children:s[1]}),Object(u.jsxs)("div",{className:"margin-rewards",children:[Object(u.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(u.jsx)("div",{className:"title",children:t["margin-ratio-parameters"]}),Object(u.jsxs)("div",{className:"parameters",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["initial-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[s[0]," %"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["maintenance-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[s[3]," %"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["pool-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[s[4]," %"]})]})]})]}),Object(u.jsxs)("div",{className:"rewards-for-liquidates",children:[Object(u.jsx)("div",{className:"title",children:t["rewards-for-liquidates"]}),Object(u.jsxs)("div",{className:"parameters",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["cut-ratio"]}),Object(u.jsxs)("div",{className:"input-value",children:[s[5]," %"]})]}),Object(u.jsxs)("div",{className:"no-fix",children:[Object(u.jsx)("div",{className:"text",children:t["max-reward"]}),Object(u.jsx)("div",{className:"input-value",children:s[6]})]}),Object(u.jsxs)("div",{className:"no-fix",children:[Object(u.jsx)("div",{className:"text",children:t["min-reward"]}),Object(u.jsx)("div",{className:"input-value",children:s[7]})]})]})]})]}),Object(u.jsx)("div",{className:"github-fork",children:Object(u.jsx)("a",{target:"_blank",href:"https://github.com/deri-finance/deri-open-zone",children:t["github-fock"]})}),Object(u.jsx)("div",{className:"next-button",children:Object(u.jsxs)("div",{className:"next-button",children:[Object(u.jsx)("button",{onClick:()=>{e(1)},children:t.cancel}),Object(u.jsx)(r.a,{click:async()=>{let e=await Object(o.l)(n.detail.chainId,n.detail.account,i,l,p);console.log(e),e.success?alert(t.success):alert(t.fail)},btnText:t.ok,lang:t})]})})]})})]})}t.default=Object(s.b)("wallet","trading")(Object(s.c)((function({wallet:e={},lang:t}){const[n,s]=Object(a.useState)(""),[i,r]=Object(a.useState)(""),[o,l]=Object(a.useState)(10),[d,p]=Object(a.useState)(5),[m,f]=Object(a.useState)(100),[v,O]=Object(a.useState)(50),[x,g]=Object(a.useState)(1e3),[w,y]=Object(a.useState)(0),[S,N]=Object(a.useState)([]),k=(e,t)=>{"baseTokenAddress"===e&&s(t),"initialMargin"===e&&l(t),"baseTokenAddressOther"===e&&r(t),"maintenanceMargin"===e&&p(t),"poolMargin"===e&&f(t),"cutRatio"===e&&O(t),"maxReward"===e&&g(t),"minReward"===e&&y(t)};return Object(a.useEffect)((()=>{}),[e,e.detail]),Object(a.useEffect)((()=>{N([o,n,i,d,m,v,x,w])}),[o,n,i,d,m,v,x,w]),Object(u.jsx)("div",{className:"add-pool",children:Object(u.jsx)("div",{className:"Step-box",children:Object(u.jsxs)(c.a,{initialStep:1,children:[Object(u.jsx)(j,{lang:t,wallet:e,OnChange:k}),Object(u.jsx)(b,{lang:t,wallet:e,OnChange:k}),Object(u.jsx)(h,{lang:t,wallet:e,params:S})]})})})})))},665:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(9),s=n(28);function i({btnText:e,className:t,disabled:n,click:i,afterClick:c,checkApprove:r,wallet:o,spec:l,lang:d}){const[p,u]=Object(a.useState)(n?"disabled":"enabled"),[j,b]=Object(a.useState)(!0),[h,m]=Object(a.useState)(!1),[f,v]=Object(a.useState)(e),O=Object(a.useRef)(null),x=()=>{u("disabled"),m(!0),O.current&&(O.current.style.display="inline-block")},g=()=>{O.current&&(O.current.style.display="none"),u("enabled"),m(!1)};return Object(a.useEffect)((()=>((async()=>{if(r&&o&&o.detail.account){const e=await o.isApproved(l.pool,l.bTokenId);b(e)}})(),()=>{})),[o,l,r]),Object(a.useEffect)((()=>(e&&v(e),()=>{})),[e]),Object(s.jsxs)("button",{className:t,onClick:()=>{j?(async()=>{if("enabled"!==p)return;x(),await i()&&c&&c(),g()})():(async()=>{x(),(await o.approve(l.pool,l.bTokenId)).success?b(!0):(b(!1),alert(d["approve-failed"])),g()})()},children:[Object(s.jsx)("span",{className:"btn-loading-wrap",children:Object(s.jsx)("span",{ref:O,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),h?d.pending:j?f:d.approve]})}},672:function(e,t,n){"use strict";var a=n(9),s=n(28);t.a=function(e){const t=Object(a.useRef)(null);return Object(a.useEffect)((()=>{const e=t.current;if(e){e.querySelectorAll("[tip]").forEach((t=>{let n=null;t.addEventListener("mouseover",(e=>{const t=e.currentTarget.getAttribute("tip");if(t){const a=`hover-box-${(new Date).getTime()}`;n=document.body.querySelector(`#${a}`),n=document.createElement("div"),n.style.cssText=`z-index : 9;min-width : 100px;max-width : ${window.screen.width}px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;`,document.body.appendChild(n),n.innerText=t,n.id=a,n.style.display="block";const s=e.currentTarget.getBoundingClientRect();if(n.style.top=`${s.y+s.height+window.document.documentElement.scrollTop}px`,n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left=e.pageX-n.offsetWidth+"px";else{const t=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left=`${t}px`}else n.style.left=`${e.pageX}px`}})),e.addEventListener("mouseout",(e=>{n&&n.remove()}))}))}return()=>{t.current=null}}),[e.title]),e.block?Object(s.jsx)("div",{ref:t,children:e.children}):Object(s.jsx)("span",{ref:t,children:e.children})}},850:function(e,t,n){!function(e,t){"use strict";var n="default"in t?t.default:t;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,a=c(t);return e=n?(e=c(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),a=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?o(a):e}}function d(e,t){var n,a=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===a&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var p={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};d("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var u="rsw_2Y",j="rsw_2f",b="rsw_3G";d("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(b,t.PureComponent);var e,c,d,j=l(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),i(o(t=j.call(this,e)),"initialState",(function(){var e={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},n="object"===("undefined"==typeof window?"undefined":a(window))?t.getHash():"",s=t.getSteps();s.forEach((function(t,n){e.hashKeys[n]=t.props&&t.props.hashKey||"step".concat(n+1),e.hashKeys[e.hashKeys[n]]=n,e.namedSteps[n]=t.props&&t.props.stepName||"step".concat(n+1),e.namedSteps[e.namedSteps[n]]=n}));var i=t.props.initialStep-1;return i&&s[i]&&(e.activeStep=i),t.props.isHashEnabled&&n&&void 0!==e.hashKeys[n]&&(e.activeStep=e.hashKeys[n]),t.props.transitions&&(e.classes[e.activeStep]=t.props.transitions.intro||""),e})),i(o(t),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),i(o(t),"getTransitions",(function(){return t.props.transitions||{enterRight:"".concat(p.animated," ").concat(p.fadeInRight),enterLeft:"".concat(p.animated," ").concat(p.fadeInLeft),exitRight:"".concat(p.animated," ").concat(p.fadeOutRight),exitLeft:"".concat(p.animated," ").concat(p.fadeOutLeft)}})),i(o(t),"onHashChange",(function(){var e=t.state.hashKeys[t.getHash()];void 0!==e&&t.setActiveStep(e)})),i(o(t),"isInvalidStep",(function(e){return e<0||e>=t.totalSteps})),i(o(t),"setActiveStep",(function(e){var n,a,s=t.state.activeStep;s!==e&&(t.isInvalidStep(e)?console.error("".concat(e+1," is an invalid step")):(n=t.state.classes,a=t.getTransitions(),s<e?(n[s]=a.exitLeft,n[e]=a.enterRight):(n[s]=a.exitRight,n[e]=a.enterLeft),t.setState({activeStep:e,classes:n},(function(){t.onStepChange({previousStep:s+1,activeStep:e+1})}))))})),i(o(t),"onStepChange",(function(e){t.props.onStepChange(e),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)})),i(o(t),"getSteps",(function(){return n.Children.toArray(t.props.children)})),i(o(t),"firstStep",(function(){return t.goToStep(1)})),i(o(t),"lastStep",(function(){return t.goToStep(t.totalSteps)})),i(o(t),"nextStep",(function(){return t.setActiveStep(t.state.activeStep+1)})),i(o(t),"previousStep",(function(){return t.setActiveStep(t.state.activeStep-1)})),i(o(t),"goToStep",(function(e){t.props.isHashEnabled&&"string"==typeof e&&void 0!==t.state.hashKeys[e]?t.setActiveStep(t.state.hashKeys[e]):t.setActiveStep(e-1)})),i(o(t),"goToNamedStep",(function(e){"string"==typeof e&&void 0!==t.state.namedSteps[e]?t.setActiveStep(t.state.namedSteps[e]):console.error('Cannot find step with name "'.concat(e,'"'))})),i(o(t),"updateHash",(function(e){window.location.hash=t.state.hashKeys[e]})),i(o(t),"isReactComponent",(function(e){return"function"==typeof(e=e.type)||"object"===a(e)})),t.state=t.initialState(),t}return e=b,(c=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var e=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},a=this.state.classes,s=n.Children.map(this.getSteps(),(function(s,i){return s?(t.isActive=i===e.state.activeStep,t.transitions=a[i],!e.props.isLazyMount||e.props.isLazyMount&&t.isActive?n.createElement(m,t,e.isReactComponent(s)?n.cloneElement(s,t):s):null):null}));return n.createElement("div",{className:this.props.className},this.props.nav&&n.cloneElement(this.props.nav,t),n.createElement("div",{className:u},s))}}])&&s(e.prototype,c),d&&s(e,d),b}();h.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var m=function(e){var t=e.children,a=e.isActive;return e=e.transitions,n.createElement("div",{className:"".concat(j," ").concat(e," ").concat(a?b:"").trim()},t)};m.defaultProps={children:[],isActive:!1,transitions:""},e.Step=m,e.default=h,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(9))},851:function(e,t,n){"use strict";t.a=n.p+"static/media/down.611894d4.svg"},852:function(e,t,n){"use strict";t.a=n.p+"static/media/up.2c6adea1.svg"}}]);
//# sourceMappingURL=37.b280cd41.chunk.js.map