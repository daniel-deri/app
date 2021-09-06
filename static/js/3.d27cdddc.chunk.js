/*! For license information please see 3.d27cdddc.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[3],{610:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var a=typeof c;if("string"===a||"number"===a)t.push(c);else if(Array.isArray(c)){if(c.length){var r=s.apply(null,c);r&&t.push(r)}}else if("object"===a)if(c.toString===Object.prototype.toString)for(var i in c)n.call(c,i)&&c[i]&&t.push(i);else t.push(c.toString())}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(c=function(){return s}.apply(e,[]))||(t.exports=c)}()},618:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(95),s=n(16);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return t?c[s.a.get()][e][t]||{}:c[s.a.get()][e]}},621:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(112);function s(t,e){return t?c.isMobile?Object.assign(t[e],t[e].mobile):t[e]:{}}},627:function(t,e,n){"use strict";e.a=n.p+"static/media/symbol-arrow.9c2b1792.svg"},628:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(22);function s(){return new URLSearchParams(Object(c.useLocation)().search)}},649:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,s=function(t,e){if(null==t)return{};var n,c,s={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}n.d(e,"a",(function(){return c}))},651:function(t,e,n){"use strict";var c=n(10),s=n(6),a=n(47),r=n(31),i=n(22),o=n(33),u=(n(674),n(18));e.a=Object(a.b)("wallet","version")(Object(r.c)((function(t){var e=t.wallet,n=t.version,a=Object(i.useRouteMatch)("/lite"),r=Object(i.useRouteMatch)("/pro"),l=Object(s.useState)(!1),j=Object(c.a)(l,2),b=j[0],f=j[1];return Object(s.useEffect)((function(){return e.supportAllVersion?Object(o.j)("version")?n.setCurrent(Object(o.i)("version")):n.setCurrent("v2"):e.supportV1&&!e.supportV2?n.setCurrent("v1"):e.supportV2&&!e.supportV1?n.setCurrent("v2"):n.setCurrent("v1"),function(){}}),[e.detail.chainId]),Object(s.useEffect)((function(){var t=a||r;return e.detail&&(t=e.supportAllVersion&&t),f(t),function(){}}),[window.location.href,e.detail.chainId]),b?Object(u.jsx)("div",{className:"version",children:Object(u.jsxs)("div",{onClick:function(){n.switch()},className:"version-container ".concat(n.current),children:[Object(u.jsx)("span",{className:"current-v1",children:"V1"}),Object(u.jsx)("span",{className:"current-v2",children:"V2"})]})}):null})))},652:function(t,e,n){"use strict";var c=n(6),s=n(33),a=(n(675),n(47)),r=n(22),i=n(627),o=n(618),u=n(18);e.a=Object(a.b)("wallet")(Object(a.c)((function({wallet:t,lang:e}){const[n,a]=Object(c.useState)(e["connect-wallet"]),[l,j]=Object(c.useState)([]),b=Object(r.useRouteMatch)("/index"),f=Object(r.useRouteMatch)({path:"/",exact:!0}),O=Object(r.useRouteMatch)({path:"/mining",exact:!0}),p=Object(r.useRouteMatch)("/team"),d=Object(r.useRouteMatch)("/retired"),h=Object(r.useRouteMatch)("/options/lite"),v=Object(r.useRouteMatch)("/options/pro"),m=Object(r.useRouteMatch)("/logo"),x=Object(o.a)(),g=h||v,w=b||O||p||f||d||m,y=n=>{t.isConnected()?t.isSupportChain(g)?a(Object(u.jsxs)("span",{children:[n.formatBalance," ",n.symbol," ",Object(u.jsx)("span",{className:"address",children:Object(s.e)(n.account)})]})):a(Object(u.jsxs)("span",{className:"no-supported",children:[e["unsupported-chain-id"],n.chainId,"!"]})):a(e["connect-wallet"])};return Object(c.useEffect)((()=>(w||(async()=>{const e=await t.connect();e&&y(e)})(),()=>{})),[window.location.href]),Object(c.useEffect)((()=>(y(t.detail),()=>{})),[t.detail.account,t.detail.formatBalance,e]),Object(c.useEffect)((()=>{if(x){const t=Object.keys(x).map((t=>Object.assign(x[t],{id:t})));j(t)}return()=>{}}),[x]),!w&&Object(u.jsxs)("div",{className:"connect",children:[Object(u.jsxs)("div",{className:"network-text-logo",children:[Object(u.jsx)("i",{className:t.detail.symbol}),Object(u.jsx)("span",{className:"logo-text",children:t.detail.name||e["select-network"]}),Object(u.jsx)("span",{className:"arrow",children:Object(u.jsx)("img",{src:i.a,alt:"selector"})}),Object(u.jsx)("div",{className:"network-list",children:l.map(((e,n)=>Object(u.jsxs)("div",{className:"network-item "+(e.code===t.detail.code?"selected":""),onClick:()=>t.switchNetwork(e),children:[Object(u.jsx)("span",{className:`logo ${e.symbol}`}),Object(u.jsx)("span",{children:e.name})]},n)))})]}),Object(u.jsx)("div",{className:"bg-btn",children:Object(u.jsx)("button",{className:"nav-btn connect-btn",onClick:t.connect,children:n})})]})})))},653:function(t,e,n){"use strict";var c=n(54),s=n(649),a=n(3),r=n(5),i=n(8),o=n(7),u=n(6),l=n.n(u),j=n(47),b=n(112),f=n(18);e.a=function(t){var e=function(e){Object(i.a)(u,e);var n=Object(o.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.onRouteChanged(this.props.location)}},{key:"onRouteChanged",value:function(t){}},{key:"render",value:function(){var e=this.props,n=e.intl,a=Object(s.a)(e,["intl"]),r=n.dict;if(b.isMobile)for(var i in r)r[i].mobile&&Object.assign(r[i],r[i].mobile);return Object(f.jsx)(t,Object(c.a)(Object(c.a)({},a),{},{dict:r}))}}]),u}(l.a.Component);return Object(j.b)("intl")(Object(j.c)(e))}},654:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(22),s=n(18);function a(){const t=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(t)?Object(s.jsx)(c.Redirect,{to:"/futures/pro"}):/^https?:\/\/governance/.test(t)?Object(s.jsx)(c.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(t)?Object(s.jsx)(c.Redirect,{to:"/bridge"}):Object(s.jsx)(c.Redirect,{to:"/index"})}},670:function(t,e,n){"use strict";var c=n(10),s=n(6),a=n(627),r=(n(676),n(47)),i=(n(628),n(94)),o=n(610),u=n.n(o),l=n(33),j=n(18);e.a=Object(r.b)("intl")(Object(r.c)((function(t){var e=t.intl,n=Object(s.useState)(!1),r=Object(c.a)(n,2),o=r[0],b=r[1],f=function(t,n){e.setLocale(t),b(!1),n&&(window.location.href=Object(l.a)("locale",t))},O=u()("lang-box",{show:o});return Object(s.useEffect)((function(){return Object(l.j)("locale")&&f(Object(l.i)("locale")),function(){}}),[e]),Object(j.jsxs)("div",{className:"lang-picker",onMouseOver:function(){b(!0)},onMouseOut:function(){b(!1)},children:[Object(j.jsx)("span",{className:"locale",children:e.localeLabel}),Object(j.jsx)("img",{src:a.a,alt:"selector"}),Object(j.jsx)("div",{className:O,children:Object.keys(i).map((function(t,n){return Object(j.jsx)("div",{className:t===e.locale?"lang-item selected":"lang-item",onClick:function(e){return f(t,!0)},children:i[t]},n)}))})]})})))},674:function(t,e,n){},675:function(t,e,n){},676:function(t,e,n){}}]);
//# sourceMappingURL=3.d27cdddc.chunk.js.map