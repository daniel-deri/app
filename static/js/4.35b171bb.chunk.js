/*! For license information please see 4.35b171bb.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[4],{631:function(e,t,c){var n;!function(){"use strict";var c={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=s.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var r in n)c.call(n,r)&&n[r]&&e.push(r);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},639:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(139),s=c(23);function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return e?n[s.DeriEnv.get()][t][e]||{}:n[s.DeriEnv.get()][t]}},640:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(141);function s(e,t){return e?n.isMobile?Object.assign(e[t],e[t].mobile):e[t]:{}}},642:function(e,t,c){"use strict";t.a=c.p+"static/media/symbol-arrow.66dccd14.svg"},644:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(32);function s(){return new URLSearchParams(Object(n.useLocation)().search)}},668:function(e,t,c){"use strict";var n=c(21),s=c(7),a=c(103),i=c(41),r=c(32),o=c(47),l=(c(686),c(61));t.a=Object(a.b)("wallet","version")(Object(i.c)((function(e){var t=e.wallet,c=e.version,a=Object(r.useRouteMatch)("/lite"),i=Object(r.useRouteMatch)("/pro"),u=Object(s.useState)(!1),j=Object(n.a)(u,2),b=j[0],d=j[1];return Object(s.useEffect)((function(){return t.supportAllVersion?Object(o.i)("version")?c.setCurrent(Object(o.h)("version")):c.setCurrent("v2"):t.supportV1&&!t.supportV2?c.setCurrent("v1"):t.supportV2&&!t.supportV1?c.setCurrent("v2"):c.setCurrent("v1"),function(){}}),[t.detail.chainId]),Object(s.useEffect)((function(){var e=a||i;return t.detail&&(e=t.supportAllVersion&&e),d(e),function(){}}),[window.location.href,t.detail.chainId]),b?Object(l.jsx)("div",{className:"version",children:Object(l.jsxs)("div",{onClick:function(){c.switch()},className:"version-container ".concat(c.current),children:[Object(l.jsx)("span",{className:"current-v1",children:"V1"}),Object(l.jsx)("span",{className:"current-v2",children:"V2"})]})}):null})))},669:function(e,t,c){"use strict";var n=c(7),s=c(47),a=(c(687),c(103)),i=c(32),r=c(642),o=c(639),l=c(61);t.a=Object(a.b)("wallet")(Object(a.c)((function({wallet:e,lang:t}){const[c,a]=Object(n.useState)(t["connect-wallet"]),[u,j]=Object(n.useState)([]),b=Object(i.useRouteMatch)("/index"),d=Object(i.useRouteMatch)({path:"/",exact:!0}),O=Object(i.useRouteMatch)({path:"/mining",exact:!0}),f=Object(i.useRouteMatch)("/team"),p=Object(i.useRouteMatch)("/retired"),h=Object(i.useRouteMatch)("/logo"),v=Object(o.a)(),m=b||O||f||d||p||h,x=c=>{e.isConnected()?c.supported?a(Object(l.jsxs)("span",{children:[c.formatBalance," ",c.symbol," ",Object(l.jsx)("span",{className:"address",children:Object(s.d)(c.account)})]})):a(Object(l.jsxs)("span",{className:"no-supported",children:[t["unsupported-chain-id"],c.chainId,"!"]})):a(t["connect-wallet"])};return Object(n.useEffect)((()=>(m||(async()=>{const t=await e.connect();t&&x(t)})(),()=>{})),[window.location.href]),Object(n.useEffect)((()=>(x(e.detail),()=>{})),[e.detail.account,e.detail.formatBalance,t]),Object(n.useEffect)((()=>{if(v){const e=Object.keys(v).map((e=>Object.assign(v[e],{id:e})));j(e)}return()=>{}}),[v]),!m&&Object(l.jsxs)("div",{className:"connect",children:[Object(l.jsxs)("div",{className:"network-text-logo",children:[Object(l.jsx)("i",{className:e.detail.symbol}),Object(l.jsx)("span",{className:"logo-text",children:e.detail.name||t["select-network"]}),Object(l.jsx)("span",{className:"arrow",children:Object(l.jsx)("img",{src:r.a,alt:"selector"})}),Object(l.jsx)("div",{className:"network-list",children:u.map(((t,c)=>Object(l.jsxs)("div",{className:"network-item "+(t.code===e.detail.code?"selected":""),onClick:()=>e.switchNetwork(t),children:[Object(l.jsx)("span",{className:`logo ${t.symbol}`}),Object(l.jsx)("span",{children:t.name})]},c)))})]}),Object(l.jsx)("div",{className:"bg-btn",children:Object(l.jsx)("button",{className:"nav-btn connect-btn",onClick:e.connect,children:c})})]})})))},670:function(e,t,c){"use strict";var n=c(28),s=c(182),a=c(6),i=c(9),r=c(13),o=c(12),l=c(7),u=c.n(l),j=c(103),b=c(141),d=c(61);t.a=function(e){var t=function(t){Object(r.a)(l,t);var c=Object(o.a)(l);function l(){return Object(a.a)(this,l),c.apply(this,arguments)}return Object(i.a)(l,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.onRouteChanged(this.props.location)}},{key:"onRouteChanged",value:function(e){}},{key:"render",value:function(){var t=this.props,c=t.intl,a=Object(s.a)(t,["intl"]),i=c.dict;if(b.isMobile)for(var r in i)i[r].mobile&&Object.assign(i[r],i[r].mobile);return Object(d.jsx)(e,Object(n.a)(Object(n.a)({},a),{},{dict:i}))}}]),l}(u.a.Component);return Object(j.b)("intl")(Object(j.c)(t))}},671:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(32),s=c(61);function a(){var e=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(e)?Object(s.jsx)(n.Redirect,{to:"/lite"}):/^https?:\/\/governance/.test(e)?Object(s.jsx)(n.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(e)?Object(s.jsx)(n.Redirect,{to:"/bridge"}):Object(s.jsx)(n.Redirect,{to:"/index"})}},682:function(e,t,c){"use strict";var n=c(21),s=c(7),a=c(642),i=(c(688),c(103)),r=(c(644),c(137)),o=c(631),l=c.n(o),u=c(47),j=c(61);t.a=Object(i.b)("intl")(Object(i.c)((function(e){var t=e.intl,c=Object(s.useState)(!1),i=Object(n.a)(c,2),o=i[0],b=i[1],d=function(e,c){t.setLocale(e),b(!1),c&&(window.location.href=Object(u.a)("locale",e))},O=l()("lang-box",{show:o});return Object(s.useEffect)((function(){return Object(u.i)("locale")&&d(Object(u.h)("locale")),function(){}}),[t]),Object(j.jsxs)("div",{className:"lang-picker",onMouseOver:function(){b(!0)},onMouseOut:function(){b(!1)},children:[Object(j.jsx)("span",{className:"locale",children:t.localeLabel}),Object(j.jsx)("img",{src:a.a,alt:"selector"}),Object(j.jsx)("div",{className:O,children:Object.keys(r).map((function(e,c){return Object(j.jsx)("div",{className:e===t.locale?"lang-item selected":"lang-item",onClick:function(t){return d(e,!0)},children:r[e]},c)}))})]})})))},686:function(e,t,c){},687:function(e,t,c){},688:function(e,t,c){}}]);
//# sourceMappingURL=4.35b171bb.chunk.js.map