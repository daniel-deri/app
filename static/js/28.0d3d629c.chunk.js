(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[28],{1120:function(e,t,r){},1459:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));var n=r(865),i=r(839),o=r(876),c=(r(877),r(878),r(1120),r(879),r(41)),a=r(748),u=r(32);function s(e){var t=e.lang;return"v1"===Object(a.useLocation)().pathname.split("/")[3]?c.a.setCurrent("v1"):c.a.isV1&&c.a.setCurrent("v2"),Object(u.jsxs)("div",{className:"trade-container",children:[Object(u.jsx)(i.a,{lang:t}),Object(u.jsxs)("div",{className:"trade-body lite",children:[Object(u.jsx)(o.a,{lite:!0,lang:t}),Object(u.jsx)(n.a,{lang:t})]})]})}},154:function(e,t,r){"use strict";r.r(t);t.default=function(e,t){}},748:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var i=r(44),o=n(r(13)),c=r(73);r(87),r(154);var a=n(r(65));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function l(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],0<=t.indexOf(r)||(i[r]=e[r]);return i}var f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).history=c.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(i.Router,{history:this.history,children:this.props.children})},t}(o.Component),p=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).history=c.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(i.Router,{history:this.history,children:this.props.children})},t}(o.Component),h=function(e,t){return"function"==typeof e?e(t):e},d=function(e,t){return"string"==typeof e?c.createLocation(e,null,null,t):e},v=function(e){return e},m=o.forwardRef;void 0===m&&(m=v);var y=m((function(e,t){var r=e.innerRef,n=e.navigate,i=e.onClick,c=l(e,["innerRef","navigate","onClick"]),a=c.target,s=u({},c,{onClick:function(t){try{i&&i(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return s.ref=v!==m&&t||r,o.createElement("a",s)})),b=m((function(e,t){var r=e.component,n=void 0===r?y:r,c=e.replace,s=e.to,f=e.innerRef,p=l(e,["component","replace","to","innerRef"]);return o.createElement(i.__RouterContext.Consumer,null,(function(e){e||a(!1);var r=e.history,i=d(h(s,e.location),e.location),l=i?r.createHref(i):"",y=u({},p,{href:l,navigate:function(){var t=h(s,e.location);(c?r.replace:r.push)(t)}});return v!==m?y.ref=t||f:y.innerRef=f,o.createElement(n,y)}))})),j=function(e){return e},O=o.forwardRef;void 0===O&&(O=j);var g=O((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,c=e.activeClassName,s=void 0===c?"active":c,f=e.activeStyle,p=e.className,v=e.exact,m=e.isActive,y=e.location,g=e.sensitive,R=e.strict,P=e.style,x=e.to,C=e.innerRef,k=l(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(i.__RouterContext.Consumer,null,(function(e){e||a(!1);var r=y||e.location,c=d(h(x,r),r),l=c.pathname,w=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),N=w?i.matchPath(r.pathname,{path:w,exact:v,sensitive:g,strict:R}):null,_=!!(m?m(N,r):N),H=_?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(p,s):p,E=_?u({},P,{},f):P,L=u({"aria-current":_&&n||null,className:H,style:E,to:c},k);return j!==O?L.ref=t||C:L.innerRef=C,o.createElement(b,L)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return i.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return i.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return i.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return i.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return i.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return i.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return i.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return i.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return i.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return i.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return i.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return i.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return i.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return i.withRouter}}),t.BrowserRouter=f,t.HashRouter=p,t.Link=b,t.NavLink=g},876:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(13);var n=r(44),i=r(695),o=r.n(i),c=r(37),a=r(748),u=r(32);function s(e){var t=e.lite,r=void 0!==t&&t,i=e.lang,s=Object(a.useLocation)().pathname.split("/")[3],l=Object(n.useHistory)(),f=o()("check-lite-pro",{lite:r,pro:!r}),p=function(e){l.push(e)};return Object(u.jsxs)("div",{className:f,children:[c.a.isFuture&&!s&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"lite",onClick:function(){return p("/futures/lite")},children:i.lite}),Object(u.jsxs)("div",{className:"pro",onClick:function(){return p("/futures/pro")},children:[" ",i.pro]})]}),c.a.isFuture&&s&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"lite",onClick:function(){return p("/futures/lite/v1")},children:i.lite}),Object(u.jsxs)("div",{className:"pro",onClick:function(){return p("/futures/pro/v1")},children:[" ",i.pro]})]}),c.a.isOption&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"lite",onClick:function(){return p("/options/lite")},children:i.lite}),Object(u.jsxs)("div",{className:"pro",onClick:function(){return p("/options/pro")},children:[" ",i.pro]})]})]})}},877:function(e,t,r){},878:function(e,t,r){},879:function(e,t,r){}}]);
//# sourceMappingURL=28.0d3d629c.chunk.js.map