(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[8],{577:function(e,c,t){"use strict";var n=t(0),a=t.n(n),s=t(1),i=t(14),r=t(6),l=t(50),j=(t(578),t(162)),o=t(57);c.a=Object(j.b)("wallet")(Object(j.c)((function(e){var c=e.wallet,t=Object(r.useState)("Connect Wallet"),n=Object(i.a)(t,2),j=n[0],d=n[1],b=function(e){c.isConnected()?e.supported?d(Object(o.jsxs)("span",{children:[e.formatBalance," ",e.symbol," ",Object(o.jsx)("span",{className:"address",children:Object(l.c)(e.account)})]})):d(Object(o.jsxs)("span",{className:"no-supported",children:["Unsupported Chain ID ",e.chainId,"!"]})):d("Connect Wallet")};return Object(r.useEffect)((function(){return function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.connect();case 2:(t=e.sent)&&b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(r.useEffect)((function(){return b(c.detail),function(){}}),[c.detail.account,c.detail.formatBalance]),Object(o.jsxs)("div",{className:"connect",children:[Object(o.jsxs)("div",{className:"network-text-logo",children:[Object(o.jsx)("i",{className:c.detail.symbol}),Object(o.jsx)("span",{className:"logo-text",children:c.detail.text})]}),Object(o.jsx)("div",{className:"bg-btn",children:Object(o.jsx)("button",{className:"nav-btn connect-btn",onClick:c.connect,children:j})})]})})))},578:function(e,c,t){},590:function(e,c,t){"use strict";var n=t(6),a=t(162),s=t(37),i=t(57);c.a=Object(a.b)("wallet","version")(Object(s.c)((function(e){var c=e.wallet,t=e.version,a=function(){if(c.isConnected()&&!c.supportV2)return t.setCurrent("v1"),void alert("No V2 pool on this network yet");t.switch(),window.location.reload()};return Object(n.useEffect)((function(){return c.detail.chainId&&(c.supportV2?t.current||(c.supportV2?t.setCurrent("v2"):t.setCurrent("v1")):t.setCurrent("v1",!0)),function(){}}),[c.detail.chainId]),Object(i.jsx)("div",{className:"version",children:t.isV1?Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAACXBIWXMAAAsSAAALEgHS3X78AAADv0lEQVRYhcVYT0gUURj/zbguWaiblkUq2qGyKNwItEOgzgpCe1CCLhFkdOzgdpMueepsRHXosuHJS2yH6ZIzrdAhIkKNUpDIDQNNhfVP+W/Xic++Z8/X7KyKub/L7Lz53sz7ve/3/XmrOY6DTDBC4XYAjQCCAGozGv5/JAAMAIgDiNqWmXT7oisZIxSOAOgCUJxDAl54QOtTSW0iY4TCAQAxAA2STT/vSDyHixfqaJXGyFtttmUOiIENMkwkLsmJSLTbljm21yvPBCMUrmbF3GCbWSIqCMlkBiQid2zL7M7RgskLIlareMG0yTHbMqNs00axw2FAHgqS5NbJGKEwsb2XSyKsjKgiJRWD7Ikkk37Nz5/ZltmuNRmX6SVjzLLftszGvSaCP2Ro9xuKAw6MltRk8EJ6oeAA0qlV+D8N6b5XL/MrfkxoUAjJTjiuUxBJWasrw7fKAbwH8EIZr+PxuxnmPebnRVmI0Hcbyo466OhcThgtqfGSQ06yoMCZLyxyZi5eSk9GOpfHzgbT4FAQyulmGRIiOmtznbFtmZky1ncAw0yqXBpv5us7xb6IidR5kZBApQDXb61MHC5zpt0MiNTVa6tfyHOUACgZcGqOskkjkanmm1iWD/YpBAj1AOakZwKPANTwJniCtV98omYNlVVrU1625K1TZ9Z+8W0bX4UDanXO3wTXqupCpp6vdewllQjYi7eZ6JZwrGJtxufDSjbbc8G0kFVAXbdPipdsZITUalhGp3lclRjh/lZJ7CZ0zg6Q5OaFPiZCUruSQWI7wsy0VppKwZ9t7vg3fR///GfzdU7LkOTmBeGFZg+JbQucdGZHR/IwM6WVeM2dm9XK3r7JO8i3IsZFAkvoUgC1cuHywjDLTWQpN4ntBN3LS0Bvj798fk4rdZu/uKgV9vbkl84m12tNv9RmtfM1rkupDSJFZsFzsVG7JTHbMqnODI6O6HjS7a/+/DGvkkgRgZ8LWiDxVT/y9KH/5NCHvP1cV9YzGR9Rqvg1MdHOUPHp4MHzcie6V1A7dqonRQEHy0sauPKD45ua3wG2F50L1cigICM/2NSJ5oAU7Xab0qP186FMNJpqh99EsSd3zUE2EIS6ctU5e4GLbEwqKTcFSfVwJhMCt9dEKJ4rT+HvOUYcDeSD4wYRuB2beWJUmbRdyJ2tiIWI2BAjFI5KB6ydIMGxs6mX9Kkv4pTXyO6M8I5s97+Aam43kjy/gXc1wuS2UtPcQF37xiFNhee/MwIsv2w1SMaYfNym+bJMd0AomVXmAH4DDmCLGoun3ZsAAAAASUVORK5CYII=",onClick:a,alt:"Switch V2"}):Object(i.jsx)("img",{onClick:a,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAACXBIWXMAAAsSAAALEgHS3X78AAAD1ElEQVRYhc1YTUhUURT+3hu1DFKxsh8DJyIQirSIahFkM7VpFg5CmzbZpk0IQ6uoRbZrFUJU25E2tShy8drke+hWorQgDQkmSFArmelfbXxxhu/a7XXfjFk5ffB47965777znfOde88dy/d9mBCLJ+oAJHm1Aag1Dlw5DAK4L5fnOhnTV41kYvFEN4DUf0AgDL1in+c6Wf33n8gwGgMAWrQxfewbLqPxUaojqTk4J32e6yzatUgmFk9EabAa3Ef2xpCWA3S2KOaSiZBOZliLyGnPddLs76RHWgE0AXjFSKU91xkoE6k25k8tCUVFcgUyzBHFtkCEXpAXDheZV6LXGdTuSiAWT4hzn/BTvZ7rdFpHYsfF6AxZ9nmuk9Rzp2GTj2PH51/v3L3wraISc/NzqH7+zLYePqjcOj1pyUQjnuu0rjQZ/FioVBC22YGkSvHeI0R2teaROj+bOXgoP7W2xn9XXe1/qKn1p6V99tzsSyEq4zipCRcAPALQEfjtBvsbtb6jjLT0y9VVioznOt2UWcF2m6sE6OEMF4JTq1YDJ07OvxQSponq1/vZM12zEzJOc0IQQ2w3a/1CYD+AUQATWv8F3vcBuCY2GJxgQpp9bTaXPTA/wEihZW/+sxhcbJZ1G/yZHc15eaxlUgbRD+A9va5wgPf+wNgYgHY+jxqcEAa1CLXYWoIrwyVfsKM5P1NqlooKzDVs9F+zGZY3YnQNowGNWJCMDjVmosgYhUWH26bOvwwlNRWRZoPEdEiuKHkN/Y4pNmseaHIrkBofi9SXenlhAZHpKWsrm2EVgi61DkYpLCqneIF5MxoyLpSMioiSSSF3Xjy318y8teqKvfxmytowPhaRx1yJDXSIiV9MYvu1Fayf9ddSkOSYV7aW+O2yv7B86c1lLdy9Xbn500czoQ/vrXV3blU1zn4tNHtKfFTJxbSKKVzUxp5fIhFoZAYUGbVWq/1Cltrc08eRNdevVm0fH7PrhdSXL9ZaITH8KLLlZk9VdHyskHIjSyBzj1JDkag0as9qr7lSbFKWWk1spk3lzBGRDMuFtKrXZD9p2LSA6UkbjAaYb8kyljMD3PAHPddpU2TqmMBNwUqU7DsDNVofD0np8M/9UyJRKkoVxnvEXr1q1pkKLot8yuH1YojFE0kqRtm5WOEHD2dBQjm+KF4YLhcxVhetVIh+cDytq+OXYzMll9ZKi+VghFLNavN1a9JNa/vJcjDIg+NPe1tFcCJ6P8kopQJV9VIRZVmUZSHbzmNGiuSWc2QQlYhCQg+Fof/O6FiGARn9uC2O0b34p/MZAeA7lnaTTtpmho4AAAAASUVORK5CYII=",alt:"Switch V1"})})})))},602:function(e,c,t){},603:function(e,c,t){},604:function(e,c,t){},605:function(e,c,t){},640:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return w}));var n=t(6),a=t.n(n),s=(t(602),t(163)),i=t.p+"static/media/logo.7232fabb.png",r=t(30),l=t(590),j=t(57);function o(){var e=!!Object(r.j)("/mining"),c=!!Object(r.j)("/lite"),t=!!Object(r.j)("/pro");return Object(j.jsxs)("div",{className:"nav-menu",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("a",{href:"http://deri.finance",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:i,alt:""})})}),Object(j.jsx)("div",{className:"mean",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/mining",className:e?"selected":"",children:"Mining"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/lite",className:c||t?"selected":"",children:"Trade"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://governance.deri.finance/",children:"Governance"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://bridge.deri.finance/",children:"Bridge"})}),Object(j.jsxs)("li",{className:"ref",children:[Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Docs"}),Object(j.jsx)("i",{children:Object(j.jsx)("svg",{"data-v-16f7de50":"",fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24",className:"Zi Zi--ArrowDown ContentItem-arrowIcon",children:Object(j.jsx)("path",{"data-v-16f7de50":"",d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"})})}),Object(j.jsxs)("ul",{className:"ref_box",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/whitepaper",children:"Whitepaper"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/code-audits",children:"Code Audit"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://deri.finance/#/team",children:"Team"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Guide"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/deri-finance/",children:"Github"})})]})]})]})}),Object(j.jsx)(l.a,{})]})}var d=t(577);function b(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(o,{}),Object(j.jsx)(d.a,{})]})}var h,O=t(4),f=t(5),x=t(11),m=t(10),u=t(122),p=(t(603),Object(u.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(13)]).then(t.bind(null,632))}))),A=Object(u.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(12)]).then(t.bind(null,638))})),v=Object(u.a)((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,633))})),N=Object(u.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(14)]).then(t.bind(null,634))})),g=Object(r.k)(h=function(e){Object(x.a)(t,e);var c=Object(m.a)(t);function t(){return Object(O.a)(this,t),c.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",children:Object(j.jsx)(r.a,{to:"/lite"})}),Object(j.jsx)(r.b,{exact:!0,path:"/mining",component:v}),Object(j.jsx)(r.b,{exact:!0,path:"/mining/:version/:chainId/:type/:symbol/:baseToken/:address",component:N}),Object(j.jsx)(r.b,{exact:!0,path:"/lite",component:p}),Object(j.jsx)(r.b,{exact:!0,path:"/pro",component:A}),Object(j.jsx)(r.b,{component:p})]})})}}]),t}(a.a.Component))||h;t(604);function k(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("div",{className:"footer_info",children:[Object(j.jsx)("div",{className:"hr"}),Object(j.jsxs)("div",{className:"footer_box",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:Object(j.jsx)("router-link",{to:"/lite",children:"App"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Docs"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"http://deri.finance/#/team",children:"Team"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})})]}),Object(j.jsx)("div",{className:"mt_19",children:"\xa9 2021 Deri Protocol"})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("span",{children:" Visit us on "}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn_a",children:Object(j.jsxs)("div",{className:"circle",children:[Object(j.jsx)("div",{className:"wechat",children:Object(j.jsx)("div",{className:"down_box"})}),Object(j.jsx)("div",{className:"fa fa-wechat"})]})}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn_a",href:"mailto: service@deri.finance",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-envelope"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://deri-protocol.medium.com",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-medium"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://twitter.com/DeriProtocol",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-twitter"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://github.com/deri-finance",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-github"})})}),Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",className:"iocn_a",href:"https://t.me/DeriProtocol",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-paper-plane"})})})]})]})]})})}t(605);function w(){return console.log("welcome Deri desktop app"),Object(j.jsxs)("div",{className:"desktop",children:[Object(j.jsx)(b,{}),Object(j.jsx)(g,{}),Object(j.jsx)(k,{})]})}}}]);
//# sourceMappingURL=8.754b35ce.chunk.js.map