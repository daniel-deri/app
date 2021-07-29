/*! For license information please see 4.3510ba88.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[4],{630:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var r=typeof c;if("string"===r||"number"===r)t.push(c);else if(Array.isArray(c)){if(c.length){var s=a.apply(null,c);s&&t.push(s)}}else if("object"===r)if(c.toString===Object.prototype.toString)for(var i in c)n.call(c,i)&&c[i]&&t.push(i);else t.push(c.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(c=function(){return a}.apply(e,[]))||(t.exports=c)}()},637:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(140),a=n(23);function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return t?c[a.DeriEnv.get()][e][t]||{}:c[a.DeriEnv.get()][e]}},639:function(t,e,n){"use strict";e.a=n.p+"static/media/symbol-arrow.9c2b1792.svg"},640:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(142);function a(t,e){return t?c.isMobile?Object.assign(t[e],t[e].mobile):t[e]:{}}},643:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(32);function a(){return new URLSearchParams(Object(c.useLocation)().search)}},667:function(t,e,n){"use strict";var c=n(14),a=n(8),r=n(104),s=n(41),i=n(32),o=n(49),u=(n(686),n(62));e.a=Object(r.b)("wallet","version")(Object(s.c)((function(t){var e=t.wallet,n=t.version,r=Object(i.useRouteMatch)("/lite"),s=Object(i.useRouteMatch)("/pro"),l=Object(a.useState)(!1),j=Object(c.a)(l,2),b=j[0],f=j[1];return Object(a.useEffect)((function(){return e.supportAllVersion?Object(o.i)("version")?n.setCurrent(Object(o.h)("version")):n.setCurrent("v2"):e.supportV1&&!e.supportV2?n.setCurrent("v1"):e.supportV2&&!e.supportV1?n.setCurrent("v2"):n.setCurrent("v1"),function(){}}),[e.detail.chainId]),Object(a.useEffect)((function(){var t=r||s;return e.detail&&(t=e.supportAllVersion&&t),f(t),function(){}}),[window.location.href,e.detail.chainId]),b?Object(u.jsx)("div",{className:"version",children:Object(u.jsxs)("div",{onClick:function(){n.switch()},className:"version-container ".concat(n.current),children:[Object(u.jsx)("span",{className:"current-v1",children:"V1"}),Object(u.jsx)("span",{className:"current-v2",children:"V2"})]})}):null})))},668:function(t,e,n){"use strict";var c=n(0),a=n.n(c),r=n(1),s=n(14),i=n(8),o=n(49),u=(n(687),n(104)),l=n(32),j=n(639),b=n(637),f=n(62);e.a=Object(u.b)("wallet")(Object(u.c)((function(t){var e=t.wallet,n=t.lang,c=Object(i.useState)(n["connect-wallet"]),u=Object(s.a)(c,2),d=u[0],O=u[1],p=Object(i.useState)([]),h=Object(s.a)(p,2),v=h[0],m=h[1],x=Object(l.useRouteMatch)("/index"),g=Object(l.useRouteMatch)({path:"/",exact:!0}),w=Object(l.useRouteMatch)({path:"/mining",exact:!0}),N=Object(l.useRouteMatch)("/team"),k=Object(l.useRouteMatch)("/retired"),y=Object(l.useRouteMatch)("/logo"),R=Object(b.a)(),C=x||w||N||g||k||y,M=function(t){e.isConnected()?t.supported?O(Object(f.jsxs)("span",{children:[t.formatBalance," ",t.symbol," ",Object(f.jsx)("span",{className:"address",children:Object(o.d)(t.account)})]})):O(Object(f.jsxs)("span",{className:"no-supported",children:[n["unsupported-chain-id"],t.chainId,"!"]})):O(n["connect-wallet"])};return Object(i.useEffect)((function(){return C||function(){var t=Object(r.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.connect();case 2:(n=t.sent)&&M(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){}}),[window.location.href]),Object(i.useEffect)((function(){return M(e.detail),function(){}}),[e.detail.account,e.detail.formatBalance,n]),Object(i.useEffect)((function(){if(R){var t=Object.keys(R).map((function(t){return Object.assign(R[t],{id:t})}));m(t)}return function(){}}),[R]),!C&&Object(f.jsxs)("div",{className:"connect",children:[Object(f.jsxs)("div",{className:"network-text-logo",children:[Object(f.jsx)("i",{className:e.detail.symbol}),Object(f.jsx)("span",{className:"logo-text",children:e.detail.name||n["select-network"]}),Object(f.jsx)("span",{className:"arrow",children:Object(f.jsx)("img",{src:j.a,alt:"selector"})}),Object(f.jsx)("div",{className:"network-list",children:v.map((function(t,n){return Object(f.jsxs)("div",{className:"network-item ".concat(t.code===e.detail.code?"selected":""),onClick:function(){return e.switchNetwork(t)},children:[Object(f.jsx)("span",{className:"logo ".concat(t.symbol)}),Object(f.jsx)("span",{children:t.name})]},n)}))})]}),Object(f.jsx)("div",{className:"bg-btn",children:Object(f.jsx)("button",{className:"nav-btn connect-btn",onClick:e.connect,children:d})})]})})))},669:function(t,e,n){"use strict";var c=n(25),a=n(183),r=n(4),s=n(5),i=n(11),o=n(10),u=n(8),l=n.n(u),j=n(104),b=n(142),f=n(62);e.a=function(t){var e=function(e){Object(i.a)(u,e);var n=Object(o.a)(u);function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(s.a)(u,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.onRouteChanged(this.props.location)}},{key:"onRouteChanged",value:function(t){}},{key:"render",value:function(){var e=this.props,n=e.intl,r=Object(a.a)(e,["intl"]),s=n.dict;if(b.isMobile)for(var i in s)s[i].mobile&&Object.assign(s[i],s[i].mobile);return Object(f.jsx)(t,Object(c.a)(Object(c.a)({},r),{},{dict:s}))}}]),u}(l.a.Component);return Object(j.b)("intl")(Object(j.c)(e))}},670:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(32),a=n(62);function r(){var t=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(t)?Object(a.jsx)(c.Redirect,{to:"/lite"}):/^https?:\/\/governance/.test(t)?Object(a.jsx)(c.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(t)?Object(a.jsx)(c.Redirect,{to:"/bridge"}):Object(a.jsx)(c.Redirect,{to:"/index"})}},682:function(t,e,n){"use strict";var c=n(14),a=n(8),r=n(639),s=(n(688),n(104)),i=(n(643),n(138)),o=n(630),u=n.n(o),l=n(49),j=n(62);e.a=Object(s.b)("intl")(Object(s.c)((function(t){var e=t.intl,n=Object(a.useState)(!1),s=Object(c.a)(n,2),o=s[0],b=s[1],f=function(t,n){e.setLocale(t),b(!1),n&&(window.location.href=Object(l.a)("locale",t))},d=u()("lang-box",{show:o});return Object(a.useEffect)((function(){return Object(l.i)("locale")&&f(Object(l.h)("locale")),function(){}}),[e]),Object(j.jsxs)("div",{className:"lang-picker",onMouseOver:function(){b(!0)},onMouseOut:function(){b(!1)},children:[Object(j.jsx)("span",{className:"locale",children:e.localeLabel}),Object(j.jsx)("img",{src:r.a,alt:"selector"}),Object(j.jsx)("div",{className:d,children:Object.keys(i).map((function(t,n){return Object(j.jsx)("div",{className:t===e.locale?"lang-item selected":"lang-item",onClick:function(e){return f(t,!0)},children:i[t]},n)}))})]})})))},686:function(t,e,n){},687:function(t,e,n){},688:function(t,e,n){}}]);
//# sourceMappingURL=4.3510ba88.chunk.js.map