(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[8],{569:function(e,c,t){"use strict";var n=t(0),a=t.n(n),s=t(2),r=t(17),i=t(4),l=t(84),j=(t(570),t(156)),d=t(49);c.a=Object(j.b)("wallet")(Object(j.c)((function(e){var c=e.wallet,t=Object(i.useState)("Connect Wallet"),n=Object(r.a)(t,2),j=n[0],b=n[1],o=function(e){c.isConnected()?e.supported?b(Object(d.jsxs)("span",{children:[e.formatBalance," ",e.symbol," ",Object(d.jsx)("span",{className:"address",children:Object(l.c)(e.account)})]})):b(Object(d.jsxs)("span",{className:"no-supported",children:["Unsupported Chain ID ",e.chainId,"!"]})):b("Connect Wallet")};return Object(i.useEffect)((function(){return function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.connect();case 2:(t=e.sent)&&o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(i.useEffect)((function(){return o(c.detail),function(){}}),[c.detail.account,c.detail.formatBalance]),Object(d.jsxs)("div",{className:"connect",children:[Object(d.jsxs)("div",{className:"network-text-logo",children:[Object(d.jsx)("i",{className:c.detail.symbol}),Object(d.jsx)("span",{className:"logo-text",children:c.detail.text})]}),Object(d.jsx)("div",{className:"bg-btn",children:Object(d.jsx)("button",{className:"nav-btn connect-btn",onClick:c.connect,children:j})})]})})))},570:function(e,c,t){},590:function(e,c,t){},591:function(e,c,t){},592:function(e,c,t){},593:function(e,c,t){},628:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return k}));var n=t(4),a=t.n(n),s=(t(590),t(157)),r=t.p+"static/media/logo.7232fabb.png",i=t(24),l=t(49);function j(){var e=!!Object(i.i)("/mining"),c=!!Object(i.i)("/lite"),t=!!Object(i.i)("/pro");return Object(l.jsxs)("div",{className:"nav-menu",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("a",{href:"http://deri.finance",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("img",{src:r,alt:""})})}),Object(l.jsx)("div",{className:"mean",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/mining",className:e?"selected":"",children:"Mining"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/lite",className:c||t?"selected":"",children:"Trade"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://governance.deri.finance/",children:"Governance"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://bridge.deri.finance/",children:"Bridge"})}),Object(l.jsxs)("li",{className:"ref",children:[Object(l.jsx)("a",{href:"https://docs.deri.finance/",children:"Docs"}),Object(l.jsx)("i",{children:Object(l.jsx)("svg",{"data-v-16f7de50":"",fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24",className:"Zi Zi--ArrowDown ContentItem-arrowIcon",children:Object(l.jsx)("path",{"data-v-16f7de50":"",d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"})})}),Object(l.jsxs)("ul",{className:"ref_box",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/deri-finance/whitepaper/blob/master/deri_whitepaper.pdf",children:"Whitepaper"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Deri-v1.0.pdf",children:"Code Audit"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"http://deri.finance/#/team",children:"Team"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/",children:"Guide"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/deri-finance/",children:"Github"})})]})]})]})})]})}var d=t(569);function b(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(j,{}),Object(l.jsx)(d.a,{})]})}var o,h=t(5),O=t(6),x=t(13),f=t(12),m=t(116),p=(t(591),Object(m.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(13)]).then(t.bind(null,620))}))),u=Object(m.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(12)]).then(t.bind(null,626))})),v=Object(m.a)((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,621))})),N=Object(m.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(14)]).then(t.bind(null,622))})),g=Object(i.j)(o=function(e){Object(x.a)(t,e);var c=Object(f.a)(t);function t(){return Object(h.a)(this,t),c.apply(this,arguments)}return Object(O.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",children:Object(l.jsx)(i.a,{to:"/lite"})}),Object(l.jsx)(i.b,{exact:!0,path:"/mining",component:v}),Object(l.jsx)(i.b,{exact:!0,path:"/mining/:chainId/:type/:symbol/:baseToken/:address",component:N}),Object(l.jsx)(i.b,{exact:!0,path:"/lite",component:p}),Object(l.jsx)(i.b,{exact:!0,path:"/pro",component:u}),Object(l.jsx)(i.b,{component:p})]})})}}]),t}(a.a.Component))||o;t(592);function _(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("div",{className:"footer_info",children:[Object(l.jsx)("div",{className:"hr"}),Object(l.jsxs)("div",{className:"footer_box",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("router-link",{to:"/lite",children:"App"})}),Object(l.jsx)("span",{className:"mt_27",children:Object(l.jsx)("a",{href:"https://docs.deri.finance/",children:"Docs"})}),Object(l.jsx)("span",{className:"mt_27",children:Object(l.jsx)("a",{href:"http://deri.finance/#/team",children:"Team"})}),Object(l.jsx)("span",{className:"mt_27",children:Object(l.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})})]}),Object(l.jsx)("div",{className:"mt_19",children:"\xa9 2021 Deri Protocol"})]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("span",{children:" Visit us on "}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn_a",children:Object(l.jsxs)("div",{className:"circle",children:[Object(l.jsx)("div",{className:"wechat",children:Object(l.jsx)("div",{className:"down_box"})}),Object(l.jsx)("div",{className:"fa fa-wechat"})]})}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn_a",href:"mailto: service@deri.finance",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-envelope"})})}),Object(l.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://deri-protocol.medium.com",rel:"noreferrer",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-medium"})})}),Object(l.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://twitter.com/DeriProtocol",rel:"noreferrer",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-twitter"})})}),Object(l.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://github.com/deri-finance",rel:"noreferrer",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-github"})})}),Object(l.jsx)("a",{rel:"noreferrer",target:"_blank",className:"iocn_a",href:"https://t.me/DeriProtocol",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-paper-plane"})})})]})]})]})})}t(593);function k(){return console.log("welcome Deri desktop app"),Object(l.jsxs)("div",{className:"desktop",children:[Object(l.jsx)(b,{}),Object(l.jsx)(g,{}),Object(l.jsx)(_,{})]})}}}]);
//# sourceMappingURL=8.266d1b79.chunk.js.map