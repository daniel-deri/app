(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[24],{1094:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);t.default=function(e,t){}},1357:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(800),i=n(786),o=n(824),c=(n(825),n(826),n(1094),n(827),n(24)),a=n(681),u=n(18);function s({lang:e}){return Object(a.useLocation)().pathname.split("/")[3]&&c.a.setCurrent("v1"),Object(u.jsxs)("div",{className:"trade-container",children:[Object(u.jsx)(i.a,{lang:e}),Object(u.jsxs)("div",{className:"trade-body lite",children:[Object(u.jsx)(o.a,{lite:!0,lang:e}),Object(u.jsx)(r.a,{lang:e})]})]})}},681:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(25),o=r(n(8)),c=n(35);n(54),n(117);var a=r(n(39));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),l(e.prototype.constructor=e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}var p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=c.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(i.Router,{history:this.history,children:this.props.children})},t}(o.Component),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=c.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(i.Router,{history:this.history,children:this.props.children})},t}(o.Component),d=function(e,t){return"function"==typeof e?e(t):e},y=function(e,t){return"string"==typeof e?c.createLocation(e,null,null,t):e},m=function(e){return e},v=o.forwardRef;void 0===v&&(v=m);var b=v((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,c=f(e,["innerRef","navigate","onClick"]),a=c.target,s=u({},c,{onClick:function(t){try{i&&i(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=m!==v&&t||n,o.createElement("a",s)})),j=v((function(e,t){var n=e.component,r=void 0===n?b:n,s=e.replace,l=e.to,p=e.innerRef,h=f(e,["component","replace","to","innerRef"]);return o.createElement(i.__RouterContext.Consumer,null,(function(e){e||a(!1);var n=e.history,i=y(d(l,e.location),e.location),f=i?n.createHref(i):"",b=u({},h,{href:f,navigate:function(){var t=d(l,e.location),r=c.createPath(e.location)===c.createPath(y(t));(s||r?n.replace:n.push)(t)}});return m!==v?b.ref=t||p:b.innerRef=p,o.createElement(r,b)}))})),O=function(e){return e},g=o.forwardRef;void 0===g&&(g=O);var R=g((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,c=e.activeClassName,s=void 0===c?"active":c,l=e.activeStyle,p=e.className,h=e.exact,m=e.isActive,v=e.location,b=e.sensitive,R=e.strict,P=e.style,x=e.to,C=e.innerRef,k=f(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(i.__RouterContext.Consumer,null,(function(e){e||a(!1);var n=v||e.location,c=y(d(x,n),n),f=c.pathname,w=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),N=w?i.matchPath(n.pathname,{path:w,exact:h,sensitive:b,strict:R}):null,_=!!(m?m(N,n):N),H="function"==typeof p?p(_):p,E="function"==typeof P?P(_):P;_&&(H=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(H,s),E=u({},E,l));var L=u({"aria-current":_&&r||null,className:H,style:E,to:c},k);return O!==g?L.ref=t||C:L.innerRef=C,o.createElement(j,L)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return i.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return i.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return i.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return i.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return i.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return i.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return i.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return i.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return i.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return i.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return i.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return i.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return i.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return i.withRouter}}),t.BrowserRouter=p,t.HashRouter=h,t.Link=j,t.NavLink=R},824:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(8);var r=n(25),i=n(638),o=n.n(i),c=n(23),a=n(681),u=n(18);function s(e){var t=e.lite,n=void 0!==t&&t,i=e.lang,s=Object(a.useLocation)().pathname.split("/")[3],l=Object(r.useHistory)(),f=o()("check-lite-pro",{lite:n,pro:!n}),p=function(e){l.push(e)};return Object(u.jsxs)("div",{className:f,children:[c.a.isFuture&&!s&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"lite",onClick:function(){return p("/futures/lite")},children:i.lite}),Object(u.jsxs)("div",{className:"pro",onClick:function(){return p("/futures/pro")},children:[" ",i.pro]})]}),c.a.isFuture&&s&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"lite",onClick:function(){return p("/futures/lite/v1")},children:i.lite}),Object(u.jsxs)("div",{className:"pro",onClick:function(){return p("/futures/pro/v1")},children:[" ",i.pro]})]}),c.a.isOption&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"lite",onClick:function(){return p("/options/lite")},children:i.lite}),Object(u.jsxs)("div",{className:"pro",onClick:function(){return p("/options/pro")},children:[" ",i.pro]})]})]})}},825:function(e,t,n){},826:function(e,t,n){},827:function(e,t,n){}}]);
//# sourceMappingURL=24.c33d03cb.chunk.js.map