(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[9],{570:function(e,c,t){"use strict";var n=t(0),s=t.n(n),i=t(2),a=t(17),r=t(4),j=t(85),l=(t(571),t(157)),d=t(48);c.a=Object(l.b)("wallet")(Object(l.c)((function(e){var c=e.wallet,t=Object(r.useState)("Connect Wallet"),n=Object(a.a)(t,2),l=n[0],o=n[1],b=function(e){c.isConnected()?e.supported?o(Object(d.jsxs)("span",{children:[e.formatBalance," ",e.symbol," ",Object(d.jsx)("span",{className:"address",children:Object(j.c)(e.account)})]})):o(Object(d.jsxs)("span",{className:"no-supported",children:["Unsupported Chain ID ",e.chainId,"!"]})):o("Connect Wallet")};return Object(r.useEffect)((function(){return function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.connect();case 2:(t=e.sent)&&b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(r.useEffect)((function(){return b(c.detail),function(){}}),[c.detail.account,c.detail.formatBalance]),Object(d.jsxs)("div",{className:"connect",children:[Object(d.jsxs)("div",{className:"network-text-logo",children:[Object(d.jsx)("i",{className:c.detail.symbol}),Object(d.jsx)("span",{className:"logo-text",children:c.detail.text})]}),Object(d.jsx)("div",{className:"bg-btn",children:Object(d.jsx)("button",{className:"nav-btn connect-btn",onClick:c.connect,children:l})})]})})))},571:function(e,c,t){},595:function(e,c,t){},596:function(e,c,t){},597:function(e,c,t){},598:function(e,c,t){},628:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return w}));var n=t(4),s=t.n(n),i=t(17),a="data:image/png;base64,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",r=t(25),j=t(158),l=(t(595),t(48));function d(e){var c=e.closeMenu,t=!!Object(r.i)("/mining"),s=!!Object(r.i)("/lite");return Object(n.useEffect)((function(){return document.querySelectorAll(".menu li a").forEach((function(e){return e.addEventListener("click",c)})),function(){}}),[]),Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("a",{className:"logo",href:"https://deri.finance/",children:Object(l.jsx)("img",{src:a,alt:""})}),Object(l.jsx)("span",{className:"close-menu",click:"close",onClick:c})]}),Object(l.jsx)("div",{className:"ul",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:t?"selected":"",children:Object(l.jsx)(j.b,{to:"/mining",children:"Mining"})}),Object(l.jsx)("li",{className:s?"selected":"",children:Object(l.jsx)(j.b,{to:"/lite",children:" Trade "})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{rel:"noreferrer",href:"https://governance.deri.finance/",children:"Governance"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{rel:"noreferrer",href:"https://bridge.deri.finance/",children:"Bridge"})}),Object(l.jsxs)("li",{className:"ref",children:["Docs ",Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAABXklEQVQoU2WRP0hVcRTHP9/fvT6ejzJpCIVaIkNzMZpaskGECB2ypxA+aFGxocmh0bm2COmlEIEI+ujPIBi4ODQ4BLqYoETgYHs9VPTe+40raGTf7Zzv+XC+nCMmJ0O5ZbhXIb3yuxTml4bbfnFG5er3C5IHwTsLu9eWNfBmuzPIXwQFw6f6vsaXnv4Fc8BKXgep33BIFt3Rw+ntu3K2LCkGH2K9dXPzRG3wUv3ey9Wmc40XXwg/BhVsJxB61Ff9WiqG83NC94EYOMjMK8V6TpY9k/UEKAIJ1qLrxUfK4z+ofmuNFc0idQOR0R6wDnQJl4DUeCXN0sqHsRs/j6FjcGrralTgnazb4AiU2Q4SKWjVpJXaSPuPfPYUyouh6a0Oo1lwFxCAzHgtQZWPI9c3Txb8A+XNgZmNm8ENC4LL+YntZKg22plHPdV/UO6UpzZvqRD3pkd8fj/etnb2b38ARWSBW029yFUAAAAASUVORK5CYII=",alt:""}),Object(l.jsxs)("ul",{className:"ref-box",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/deri-finance/whitepaper/blob/master/deri_whitepaper.pdf",children:"Whitepaper"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/code-audits",children:"Code Audit"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://deri.finance/#/team",children:"Team"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/",children:"Guide"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/deri-finance/",children:"Github"})})]})]})]})}),Object(l.jsxs)("div",{className:"m-footer",children:[Object(l.jsxs)("div",{className:"footer-link",children:[Object(l.jsx)("a",{rel:"noreferrer",className:"iocn_a",children:Object(l.jsxs)("div",{className:"circle",children:[Object(l.jsx)("div",{className:"wechat",children:Object(l.jsx)("div",{className:"down_box"})}),Object(l.jsx)("div",{className:"fa fa-wechat"})]})}),Object(l.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"mailto: service@deri.finance",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-envelope"})})}),Object(l.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://deri-protocol.medium.com",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-medium"})})}),Object(l.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://twitter.com/DeriProtocol",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-twitter"})})}),Object(l.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://github.com/deri-finance",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-github"})})}),Object(l.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"https://t.me/DeriProtocol",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-paper-plane"})})})]}),Object(l.jsx)("div",{className:"banquan",children:"\xa9 2021 Deri Protocol"})]})]})}t(596);function o(){var e=Object(n.useState)({}),c=Object(i.a)(e,2),t=c[0],s=c[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("img",{className:"menu-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAABFGc6jAAAARklEQVRIS2MMm3XzAgMjoz4DDcF/BobzjHSziIYeQTGacdQickNgGAYd3ZI33SwiN3JJ1TcMEwOpQUCu+mEYdHRL3vSyCAAv2BujNlrcrwAAAABJRU5ErkJggg==",onClick:function(){s({left:0})}}),Object(l.jsx)("div",{className:"menu-left",style:t,children:Object(l.jsx)(d,{closeMenu:function(){return s({left:"-110%"})}})}),Object(l.jsx)("a",{className:"logo",href:"https://deri.finance/",children:Object(l.jsx)("img",{src:a,alt:""})})]})})}var b,A=t(5),f=t(6),h=t(12),u=t(11),O=t(117),m=Object(O.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(16)]).then(t.bind(null,624))})),x=Object(O.a)((function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,625))})),p=Object(O.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(15)]).then(t.bind(null,626))})),N=Object(r.j)(b=function(e){Object(h.a)(t,e);var c=Object(u.a)(t);function t(){return Object(A.a)(this,t),c.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{exact:!0,path:"/",component:m}),Object(l.jsx)(r.b,{exact:!0,path:"/lite",component:m}),Object(l.jsx)(r.b,{exact:!0,path:"/mining",component:x}),Object(l.jsx)(r.b,{exact:!0,path:"/mining/:chainId/:type/:symbol/:baseToken/:address",component:p}),Object(l.jsx)(r.b,{component:m})]})})}}]),t}(s.a.Component))||b,g=(t(597),t(570));function v(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)(g.a,{})})}t(598);function w(){var e=function(){var e=Object(n.useState)({width:void 0,height:void 0}),c=Object(i.a)(e,2),t=c[0],s=c[1];return Object(n.useEffect)((function(){function e(){s({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}();return Object(n.useEffect)((function(){return document.querySelector("html").setAttribute("style","font-size : ".concat(e.width/375*100,"px")),function(){}}),[e]),Object(l.jsxs)("div",{className:"mobile",children:[Object(l.jsx)(o,{}),Object(l.jsx)(N,{}),Object(l.jsx)(v,{})]})}}}]);
//# sourceMappingURL=9.0ca11ad8.chunk.js.map