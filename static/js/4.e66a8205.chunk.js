/*! For license information please see 4.e66a8205.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[4],{618:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var s=typeof c;if("string"===s||"number"===s)t.push(c);else if(Array.isArray(c)){if(c.length){var a=r.apply(null,c);a&&t.push(a)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var i in c)n.call(c,i)&&c[i]&&t.push(i);else t.push(c.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(c=function(){return r}.apply(e,[]))||(t.exports=c)}()},642:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(65),r=n(11);function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return t?c[r.a.get()][e][t]||{}:c[r.a.get()][e]}},657:function(t,e,n){"use strict";e.a=n.p+"static/media/symbol-arrow.66dccd14.svg"},658:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(25);function r(){return new URLSearchParams(Object(c.useLocation)().search)}},659:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(111);function r(t,e){return t?c.isMobile?Object.assign(t[e],t[e].mobile):t[e]:{}}},734:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},s=Object.keys(t);for(c=0;c<s.length;c++)n=s[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(c=0;c<s.length;c++)n=s[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return c}))},736:function(t,e,n){"use strict";var c=n(13),r=n(6),s=n(48),a=n(33),i=n(25),o=n(26),u=(n(828),n(18));e.a=Object(s.b)("wallet","version")(Object(a.c)((function(t){var e=t.wallet,n=t.version,s=Object(i.useRouteMatch)("/lite"),a=Object(i.useRouteMatch)("/pro"),l=Object(r.useState)(!1),j=Object(c.a)(l,2),b=j[0],f=j[1];return Object(r.useEffect)((function(){return e.supportAllVersion?Object(o.l)("version")?n.setCurrent(Object(o.j)("version")):n.setCurrent("v2"):e.supportV1&&!e.supportV2?n.setCurrent("v1"):e.supportV2&&!e.supportV1?n.setCurrent("v2"):n.setCurrent("v1"),function(){}}),[e.detail.chainId]),Object(r.useEffect)((function(){var t=s||a;return e.detail&&(t=e.supportAllVersion&&t),f(t),function(){}}),[window.location.href,e.detail.chainId]),b?Object(u.jsx)("div",{className:"version",children:Object(u.jsxs)("div",{onClick:function(){n.switch()},className:"version-container ".concat(n.current),children:[Object(u.jsx)("span",{className:"current-v1",children:"V1"}),Object(u.jsx)("span",{className:"current-v2",children:"V2"})]})}):null})))},737:function(t,e,n){"use strict";var c=n(0),r=n.n(c),s=n(1),a=n(13),i=n(6),o=n(26),u=(n(829),n(48)),l=n(25),j=n(657),b=n(642),f=n(18);e.a=Object(u.b)("wallet")(Object(u.c)((function(t){var e=t.wallet,n=t.lang,c=Object(i.useState)(n["connect-wallet"]),u=Object(a.a)(c,2),O=u[0],p=u[1],d=Object(i.useState)([]),h=Object(a.a)(d,2),v=h[0],m=h[1],x=Object(l.useRouteMatch)("/index"),g=Object(l.useRouteMatch)({path:"/",exact:!0}),w=Object(l.useRouteMatch)({path:"/mining",exact:!0}),y=Object(l.useRouteMatch)("/team"),N=Object(l.useRouteMatch)("/retired"),k=Object(l.useRouteMatch)("/options/lite"),R=(Object(l.useRouteMatch)("/addpool"),Object(l.useRouteMatch)("/options/pro")),M=Object(l.useRouteMatch)("/logo"),C=Object(b.a)(),S=k||R,V=x||w||y||g||N||M,E=function(t){e.isConnected()?e.isSupportChain(S)?p(Object(f.jsxs)("span",{children:[t.formatBalance," ",t.symbol," ",Object(f.jsx)("span",{className:"address",children:Object(o.f)(t.account)})]})):p(Object(f.jsxs)("span",{className:"no-supported",children:[n["unsupported-chain-id"],t.chainId,"!"]})):p(n["connect-wallet"])};return Object(i.useEffect)((function(){return V||function(){var t=Object(s.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.connect();case 2:(n=t.sent)&&E(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){}}),[window.location.href]),Object(i.useEffect)((function(){return E(e.detail),function(){}}),[e.detail.account,e.detail.formatBalance,n]),Object(i.useEffect)((function(){if(C){var t=Object.keys(C).map((function(t){return Object.assign(C[t],{id:t})}));m(t)}return function(){}}),[C]),!V&&Object(f.jsxs)("div",{className:"connect",children:[Object(f.jsxs)("div",{className:"network-text-logo",children:[Object(f.jsx)("i",{className:e.detail.symbol}),Object(f.jsx)("span",{className:"logo-text",children:e.detail.name||n["select-network"]}),Object(f.jsx)("span",{className:"arrow",children:Object(f.jsx)("img",{src:j.a,alt:"selector"})}),Object(f.jsx)("div",{className:"network-list",children:v.map((function(t,n){return Object(f.jsxs)("div",{className:"network-item ".concat(t.code===e.detail.code?"selected":""),onClick:function(){return e.switchNetwork(t)},children:[Object(f.jsx)("span",{className:"logo ".concat(t.symbol)}),Object(f.jsx)("span",{children:t.name})]},n)}))})]}),Object(f.jsx)("div",{className:"bg-btn",children:Object(f.jsx)("button",{className:"nav-btn connect-btn",onClick:e.connect,children:O})})]})})))},738:function(t,e,n){"use strict";var c=n(55),r=n(734),s=n(4),a=n(5),i=n(8),o=n(7),u=n(6),l=n.n(u),j=n(48),b=n(111),f=n(18);e.a=function(t){var e=function(e){Object(i.a)(u,e);var n=Object(o.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.onRouteChanged(this.props.location)}},{key:"onRouteChanged",value:function(t){}},{key:"render",value:function(){var e=this.props,n=e.intl,s=Object(r.a)(e,["intl"]),a=n.dict;if(b.isMobile)for(var i in a)a[i].mobile&&Object.assign(a[i],a[i].mobile);return Object(f.jsx)(t,Object(c.a)(Object(c.a)({},s),{},{dict:a}))}}]),u}(l.a.Component);return Object(j.b)("intl")(Object(j.c)(e))}},739:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(25),r=n(18);function s(){const t=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(t)?Object(r.jsx)(c.Redirect,{to:"/futures/pro"}):/^https?:\/\/governance/.test(t)?Object(r.jsx)(c.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(t)?Object(r.jsx)(c.Redirect,{to:"/bridge"}):Object(r.jsx)(c.Redirect,{to:"/index"})}},825:function(t,e,n){"use strict";var c=n(13),r=n(6),s=n(657),a=(n(830),n(48)),i=(n(658),n(95)),o=n(618),u=n.n(o),l=n(26),j=n(18);e.a=Object(a.b)("intl")(Object(a.c)((function(t){var e=t.intl,n=Object(r.useState)(!1),a=Object(c.a)(n,2),o=a[0],b=a[1],f=function(t,n){e.setLocale(t),b(!1)},O=u()("lang-box",{show:o});return Object(r.useEffect)((function(){return Object(l.l)("locale")&&f(Object(l.j)("locale")),function(){}}),[e]),Object(j.jsxs)("div",{className:"lang-picker",onMouseOver:function(){b(!0)},onMouseOut:function(){b(!1)},children:[Object(j.jsx)("span",{className:"locale",children:e.localeLabel}),Object(j.jsx)("img",{src:s.a,alt:"selector"}),Object(j.jsx)("div",{className:O,children:Object.keys(i).map((function(t,n){return Object(j.jsx)("div",{className:t===e.locale?"lang-item selected":"lang-item",onClick:function(e){return f(t)},children:i[t]},n)}))})]})})))},828:function(t,e,n){},829:function(t,e,n){},830:function(t,e,n){}}]);
//# sourceMappingURL=4.e66a8205.chunk.js.map