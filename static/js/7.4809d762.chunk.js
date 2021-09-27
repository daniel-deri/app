/*! For license information please see 7.4809d762.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[7],{612:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var a=typeof c;if("string"===a||"number"===a)t.push(c);else if(Array.isArray(c)){if(c.length){var r=s.apply(null,c);r&&t.push(r)}}else if("object"===a)if(c.toString===Object.prototype.toString)for(var o in c)n.call(c,o)&&c[o]&&t.push(o);else t.push(c.toString())}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(c=function(){return s}.apply(e,[]))||(t.exports=c)}()},622:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(65);function s(t,e){if(null==t)return{};var n,s,a=Object(c.a)(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},644:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(66),s=n(13);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return t?c[s.a.get()][e][t]||{}:c[s.a.get()][e]}},658:function(t,e,n){"use strict";e.a=n.p+"static/media/symbol-arrow.9c2b1792.svg"},659:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(25);function s(){return new URLSearchParams(Object(c.useLocation)().search)}},660:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(118);function s(t,e){return t?c.isMobile?Object.assign(t[e],t[e].mobile):t[e]:{}}},737:function(t,e,n){"use strict";var c=n(9),s=n(8),a=n(47),r=n(31),o=n(25),i=n(26),u=(n(828),n(18));e.a=Object(a.b)("wallet","version")(Object(r.c)((function(t){var e=t.wallet,n=t.version,a=Object(o.useRouteMatch)("/lite"),r=Object(o.useRouteMatch)("/pro"),l=Object(s.useState)(!1),j=Object(c.a)(l,2),b=j[0],O=j[1];return Object(s.useEffect)((function(){return e.supportAllVersion?Object(i.m)("version")?n.setCurrent(Object(i.k)("version")):n.setCurrent("v2"):e.supportV1&&!e.supportV2?n.setCurrent("v1"):e.supportV2&&!e.supportV1?n.setCurrent("v2"):n.setCurrent("v1"),function(){}}),[e.detail.chainId]),Object(s.useEffect)((function(){var t=a||r;return e.detail&&(t=e.supportAllVersion&&t),O(t),function(){}}),[window.location.href,e.detail.chainId]),b?Object(u.jsx)("div",{className:"version",children:Object(u.jsxs)("div",{onClick:function(){n.switch()},className:"version-container ".concat(n.current),children:[Object(u.jsx)("span",{className:"current-v1",children:"V1"}),Object(u.jsx)("span",{className:"current-v2",children:"V2"})]})}):null})))},738:function(t,e,n){"use strict";var c=n(8),s=n(26),a=(n(829),n(47)),r=n(25),o=n(658),i=n(644),u=n(18);e.a=Object(a.b)("wallet")(Object(a.c)((function({wallet:t,lang:e}){const[n,a]=Object(c.useState)(e["connect-wallet"]),[l,j]=Object(c.useState)([]),b=Object(r.useRouteMatch)("/index"),O=Object(r.useRouteMatch)({path:"/",exact:!0}),f=Object(r.useRouteMatch)({path:"/mining",exact:!0}),p=Object(r.useRouteMatch)("/team"),d=Object(r.useRouteMatch)("/retired"),h=Object(r.useRouteMatch)("/options/lite"),v=(Object(r.useRouteMatch)("/addpool"),Object(r.useRouteMatch)("/options/pro")),m=Object(r.useRouteMatch)("/logo"),x=Object(r.useRouteMatch)("/info"),g=Object(i.a)(),w=h||v,y=b||f||p||O||d||m||x,N=n=>{t.isConnected()?t.isSupportChain(w)?a(Object(u.jsxs)("span",{children:[n.formatBalance," ",n.symbol," ",Object(u.jsx)("span",{className:"address",children:Object(s.g)(n.account)})]})):a(Object(u.jsxs)("span",{className:"no-supported",children:[e["unsupported-chain-id"],n.chainId,"!"]})):a(e["connect-wallet"])};return Object(c.useEffect)((()=>(y||(async()=>{const e=await t.connect();e&&N(e)})(),()=>{})),[window.location.href]),Object(c.useEffect)((()=>(N(t.detail),()=>{})),[t.detail.account,t.detail.formatBalance,e]),Object(c.useEffect)((()=>{if(g){const t=Object.keys(g).map((t=>Object.assign(g[t],{id:t})));j(t)}return()=>{}}),[g]),!y&&Object(u.jsxs)("div",{className:"connect",children:[Object(u.jsxs)("div",{className:"network-text-logo",children:[Object(u.jsx)("i",{className:t.detail.symbol}),Object(u.jsx)("span",{className:"logo-text",children:t.detail.name||e["select-network"]}),Object(u.jsx)("span",{className:"arrow",children:Object(u.jsx)("img",{src:o.a,alt:"selector"})}),Object(u.jsx)("div",{className:"network-list",children:l.map(((e,n)=>Object(u.jsxs)("div",{className:"network-item "+(e.code===t.detail.code?"selected":""),onClick:()=>t.switchNetwork(e),children:[Object(u.jsx)("span",{className:`logo ${e.symbol}`}),Object(u.jsx)("span",{children:e.name})]},n)))})]}),Object(u.jsx)("div",{className:"bg-btn",children:Object(u.jsx)("button",{className:"nav-btn connect-btn",onClick:t.connect,children:n})})]})})))},739:function(t,e,n){"use strict";var c=n(53),s=n(622),a=n(2),r=n(3),o=n(6),i=n(7),u=n(8),l=n.n(u),j=n(47),b=n(118),O=n(18),f=["intl"];e.a=function(t){var e=function(e){Object(o.a)(u,e);var n=Object(i.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.onRouteChanged(this.props.location)}},{key:"onRouteChanged",value:function(t){}},{key:"render",value:function(){var e=this.props,n=e.intl,a=Object(s.a)(e,f),r=n.dict;if(b.isMobile)for(var o in r)r[o].mobile&&Object.assign(r[o],r[o].mobile);return Object(O.jsx)(t,Object(c.a)(Object(c.a)({},a),{},{dict:r}))}}]),u}(l.a.Component);return Object(j.b)("intl")(Object(j.c)(e))}},740:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(25),s=n(18);function a(){const t=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(t)?Object(s.jsx)(c.Redirect,{to:"/futures/pro"}):/^https?:\/\/governance/.test(t)?Object(s.jsx)(c.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(t)?Object(s.jsx)(c.Redirect,{to:"/bridge"}):/^https?:\/\/info/.test(t)?Object(s.jsx)(c.Redirect,{to:"/info"}):Object(s.jsx)(c.Redirect,{to:"/index"})}},824:function(t,e,n){"use strict";var c=n(9),s=n(8),a=n(658),r=(n(830),n(47)),o=(n(659),n(96)),i=n(612),u=n.n(i),l=n(26),j=n(18);e.a=Object(r.b)("intl")(Object(r.c)((function(t){var e=t.intl,n=Object(s.useState)(!1),r=Object(c.a)(n,2),i=r[0],b=r[1],O=function(t,n){e.setLocale(t),b(!1)},f=u()("lang-box",{show:i});return Object(s.useEffect)((function(){return Object(l.m)("locale")&&O(Object(l.k)("locale")),function(){}}),[e]),Object(j.jsxs)("div",{className:"lang-picker",onMouseOver:function(){b(!0)},onMouseOut:function(){b(!1)},children:[Object(j.jsx)("span",{className:"locale",children:e.localeLabel}),Object(j.jsx)("img",{src:a.a,alt:"selector"}),Object(j.jsx)("div",{className:f,children:Object.keys(o).map((function(t,n){return Object(j.jsx)("div",{className:t===e.locale?"lang-item selected":"lang-item",onClick:function(e){return O(t)},children:o[t]},n)}))})]})})))},828:function(t,e,n){},829:function(t,e,n){},830:function(t,e,n){}}]);
//# sourceMappingURL=7.4809d762.chunk.js.map