/*! For license information please see 11.b6627163.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[11],{620:function(e,t,c){var n;!function(){"use strict";var c={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var s in n)c.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},624:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(132);function a(e,t){return e?n.isMobile?Object.assign(e[t],e[t].mobile):e[t]:{}}},627:function(e,t,c){"use strict";t.a=c.p+"static/media/symbol-arrow.66dccd14.svg"},628:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(31);function a(){return new URLSearchParams(Object(n.useLocation)().search)}},632:function(e,t,c){"use strict";var n=c(0),a=c.n(n),r=c(1),i=c(18),s=c(7),o=c(41),l=(c(633),c(95)),j=c(56);t.a=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,c=e.lang,n=Object(s.useState)(c["connect-wallet"]),l=Object(i.a)(n,2),b=l[0],d=l[1],u=function(e){t.isConnected()?e.supported?d(Object(j.jsxs)("span",{children:[e.formatBalance," ",e.symbol," ",Object(j.jsx)("span",{className:"address",children:Object(o.c)(e.account)})]})):d(Object(j.jsxs)("span",{className:"no-supported",children:[c["unsupported-chain-id"],e.chainId,"!"]})):d(c["connect-wallet"])};return Object(s.useEffect)((function(){return function(){var e=Object(r.a)(a.a.mark((function e(){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.connect();case 2:(c=e.sent)&&u(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(s.useEffect)((function(){return u(t.detail),function(){}}),[t.detail.account,t.detail.formatBalance,c]),Object(j.jsxs)("div",{className:"connect",children:[Object(j.jsxs)("div",{className:"network-text-logo",children:[Object(j.jsx)("i",{className:t.detail.symbol}),Object(j.jsx)("span",{className:"logo-text",children:t.detail.text})]}),Object(j.jsx)("div",{className:"bg-btn",children:Object(j.jsx)("button",{className:"nav-btn connect-btn",onClick:t.connect,children:b})})]})})))},633:function(e,t,c){},634:function(e,t,c){},635:function(e,t,c){"use strict";var n=c(27),a=c(175),r=c(5),i=c(6),s=c(11),o=c(10),l=c(7),j=c.n(l),b=c(95),d=c(132),u=c(56);t.a=function(e){var t=function(t){Object(s.a)(l,t);var c=Object(o.a)(l);function l(){return Object(r.a)(this,l),c.apply(this,arguments)}return Object(i.a)(l,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.onRouteChanged(this.props.location)}},{key:"onRouteChanged",value:function(e){}},{key:"render",value:function(){var t=this.props,c=t.intl,r=Object(a.a)(t,["intl"]),i=c.dict;if(d.isMobile)for(var s in i)i[s].mobile&&Object.assign(i[s],i[s].mobile);return Object(u.jsx)(e,Object(n.a)(Object(n.a)({},r),{},{dict:i}))}}]),l}(j.a.Component);return Object(b.b)("intl")(Object(b.c)(t))}},636:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(31),a=c(56);function r(){var e=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(e)?Object(a.jsx)(n.Redirect,{to:"/lite"}):/^https?:\/\/governance/.test(e)?Object(a.jsx)(n.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(e)?Object(a.jsx)(n.Redirect,{to:"/bridge"}):Object(a.jsx)(n.Redirect,{to:"/index"})}},656:function(e,t,c){"use strict";var n=c(7),a=c(95),r=c(38),i=c(56);t.a=Object(a.b)("wallet","version")(Object(r.c)((function(e){var t=e.wallet,c=e.version,a=function(){if(t.isConnected()&&!t.supportV2)return c.setCurrent("v1"),void alert("No V2 pool on this network yet");c.switch(),window.location.reload()};return Object(n.useEffect)((function(){return t.detail.chainId&&(t.supportV2?c.current||(t.supportV2?c.setCurrent("v2"):c.setCurrent("v1")):c.setCurrent("v1",!0)),function(){}}),[t.detail.chainId]),Object(i.jsx)("div",{className:"version",children:c.isV1?Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAACXBIWXMAAAsSAAALEgHS3X78AAADv0lEQVRYhcVYT0gUURj/zbguWaiblkUq2qGyKNwItEOgzgpCe1CCLhFkdOzgdpMueepsRHXosuHJS2yH6ZIzrdAhIkKNUpDIDQNNhfVP+W/Xic++Z8/X7KyKub/L7Lz53sz7ve/3/XmrOY6DTDBC4XYAjQCCAGozGv5/JAAMAIgDiNqWmXT7oisZIxSOAOgCUJxDAl54QOtTSW0iY4TCAQAxAA2STT/vSDyHixfqaJXGyFtttmUOiIENMkwkLsmJSLTbljm21yvPBCMUrmbF3GCbWSIqCMlkBiQid2zL7M7RgskLIlareMG0yTHbMqNs00axw2FAHgqS5NbJGKEwsb2XSyKsjKgiJRWD7Ikkk37Nz5/ZltmuNRmX6SVjzLLftszGvSaCP2Ro9xuKAw6MltRk8EJ6oeAA0qlV+D8N6b5XL/MrfkxoUAjJTjiuUxBJWasrw7fKAbwH8EIZr+PxuxnmPebnRVmI0Hcbyo466OhcThgtqfGSQ06yoMCZLyxyZi5eSk9GOpfHzgbT4FAQyulmGRIiOmtznbFtmZky1ncAw0yqXBpv5us7xb6IidR5kZBApQDXb61MHC5zpt0MiNTVa6tfyHOUACgZcGqOskkjkanmm1iWD/YpBAj1AOakZwKPANTwJniCtV98omYNlVVrU1625K1TZ9Z+8W0bX4UDanXO3wTXqupCpp6vdewllQjYi7eZ6JZwrGJtxufDSjbbc8G0kFVAXbdPipdsZITUalhGp3lclRjh/lZJ7CZ0zg6Q5OaFPiZCUruSQWI7wsy0VppKwZ9t7vg3fR///GfzdU7LkOTmBeGFZg+JbQucdGZHR/IwM6WVeM2dm9XK3r7JO8i3IsZFAkvoUgC1cuHywjDLTWQpN4ntBN3LS0Bvj798fk4rdZu/uKgV9vbkl84m12tNv9RmtfM1rkupDSJFZsFzsVG7JTHbMqnODI6O6HjS7a/+/DGvkkgRgZ8LWiDxVT/y9KH/5NCHvP1cV9YzGR9Rqvg1MdHOUPHp4MHzcie6V1A7dqonRQEHy0sauPKD45ua3wG2F50L1cigICM/2NSJ5oAU7Xab0qP186FMNJpqh99EsSd3zUE2EIS6ctU5e4GLbEwqKTcFSfVwJhMCt9dEKJ4rT+HvOUYcDeSD4wYRuB2beWJUmbRdyJ2tiIWI2BAjFI5KB6ydIMGxs6mX9Kkv4pTXyO6M8I5s97+Aam43kjy/gXc1wuS2UtPcQF37xiFNhee/MwIsv2w1SMaYfNym+bJMd0AomVXmAH4DDmCLGoun3ZsAAAAASUVORK5CYII=",onClick:a,alt:"Switch V2"}):Object(i.jsx)("img",{onClick:a,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAACXBIWXMAAAsSAAALEgHS3X78AAAD1ElEQVRYhc1YTUhUURT+3hu1DFKxsh8DJyIQirSIahFkM7VpFg5CmzbZpk0IQ6uoRbZrFUJU25E2tShy8drke+hWorQgDQkmSFArmelfbXxxhu/a7XXfjFk5ffB47965777znfOde88dy/d9mBCLJ+oAJHm1Aag1Dlw5DAK4L5fnOhnTV41kYvFEN4DUf0AgDL1in+c6Wf33n8gwGgMAWrQxfewbLqPxUaojqTk4J32e6yzatUgmFk9EabAa3Ef2xpCWA3S2KOaSiZBOZliLyGnPddLs76RHWgE0AXjFSKU91xkoE6k25k8tCUVFcgUyzBHFtkCEXpAXDheZV6LXGdTuSiAWT4hzn/BTvZ7rdFpHYsfF6AxZ9nmuk9Rzp2GTj2PH51/v3L3wraISc/NzqH7+zLYePqjcOj1pyUQjnuu0rjQZ/FioVBC22YGkSvHeI0R2teaROj+bOXgoP7W2xn9XXe1/qKn1p6V99tzsSyEq4zipCRcAPALQEfjtBvsbtb6jjLT0y9VVioznOt2UWcF2m6sE6OEMF4JTq1YDJ07OvxQSponq1/vZM12zEzJOc0IQQ2w3a/1CYD+AUQATWv8F3vcBuCY2GJxgQpp9bTaXPTA/wEihZW/+sxhcbJZ1G/yZHc15eaxlUgbRD+A9va5wgPf+wNgYgHY+jxqcEAa1CLXYWoIrwyVfsKM5P1NqlooKzDVs9F+zGZY3YnQNowGNWJCMDjVmosgYhUWH26bOvwwlNRWRZoPEdEiuKHkN/Y4pNmseaHIrkBofi9SXenlhAZHpKWsrm2EVgi61DkYpLCqneIF5MxoyLpSMioiSSSF3Xjy318y8teqKvfxmytowPhaRx1yJDXSIiV9MYvu1Fayf9ddSkOSYV7aW+O2yv7B86c1lLdy9Xbn500czoQ/vrXV3blU1zn4tNHtKfFTJxbSKKVzUxp5fIhFoZAYUGbVWq/1Cltrc08eRNdevVm0fH7PrhdSXL9ZaITH8KLLlZk9VdHyskHIjSyBzj1JDkag0as9qr7lSbFKWWk1spk3lzBGRDMuFtKrXZD9p2LSA6UkbjAaYb8kyljMD3PAHPddpU2TqmMBNwUqU7DsDNVofD0np8M/9UyJRKkoVxnvEXr1q1pkKLot8yuH1YojFE0kqRtm5WOEHD2dBQjm+KF4YLhcxVhetVIh+cDytq+OXYzMll9ZKi+VghFLNavN1a9JNa/vJcjDIg+NPe1tFcCJ6P8kopQJV9VIRZVmUZSHbzmNGiuSWc2QQlYhCQg+Fof/O6FiGARn9uC2O0b34p/MZAeA7lnaTTtpmho4AAAAASUVORK5CYII=",alt:"Switch V1"})})})))},657:function(e,t,c){"use strict";var n=c(7),a=c(627),r=(c(634),c(95)),i=c(628),s=c(176),o=c(620),l=c.n(o),j=c(56);t.a=Object(r.b)("intl")(Object(r.c)((function({intl:e}){const[t,c]=Object(n.useState)(!1),r=Object(i.a)(),o=(t,n)=>{e.setLocale(t),c(!1),n&&(window.location.href=window.location.origin+window.location.hash.replace(/locale=\w+/,`locale=${t}`))},b=l()("lang-box",{show:t});return Object(n.useEffect)((()=>(r.has("locale")&&o(r.get("locale")),()=>{})),[e]),Object(j.jsxs)("div",{className:"lang-picker",onMouseOver:()=>{c(!0)},onMouseOut:()=>{c(!1)},children:[Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsSAAALEgHS3X78AAABXUlEQVQ4jZVUwU3DQBCcoPyhg5gKMNoC4g5CB4QO3AGhA1MB0AFUAPw9UlwBTgWECoI2mkMX++yElSzLd3uzM7Prm+x2O6SC5AWAHMDWzNbJpIE4G9lzwHcA1X8APSZ1XS8BLBN7zvQKwA+AJFMzK1LrUwAZgPlI4fMj+32mQ57GIX+d7QzApZm1Y/nTxOFXfZZRg0oBvh0DTDIluQJwD6ABUEQNc2/zAEoyl+9tt1BSPsm1mtTIc/f1zsyeI0XfSnf2N/H5oZFyhhsBO+BDAIzsCLEgmZ0CWsnDPxDJ7YJ+6r0alC9ZzmghD0uxvlXKtTx+EqDP95dyMzPbHjCVhI8IsHDJZuYHH7XWRiwrNehFFi17TEm2ktwIcBtLUtFMk5CKjZntvY099Q46ox6gh1gFll7Y5YfHVcxI7tme9EdFTHv+ac/B9j77fTB2S3UjdNh9PlCicfMRnJPMfwFkO5OrbsugJwAAAABJRU5ErkJggg==",alt:"language selector"}),Object(j.jsx)("img",{src:a.a,alt:"selector"}),Object(j.jsx)("div",{className:b,children:Object.keys(s).map(((t,c)=>Object(j.jsx)("div",{className:t===e.locale?"lang-item selected":"lang-item",onClick:()=>o(t,!0),children:s[t]},c)))})]})})))},669:function(e,t,c){},670:function(e,t,c){},671:function(e,t,c){},672:function(e,t,c){},673:function(e,t,c){},674:function(e,t,c){},748:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return F}));var n=c(7),a=c.n(n),r=(c(669),c(670),c(173)),i=c.p+"static/media/logo.7232fabb.png",s=c(31),o=c(656),l=c(56);var j=function(e){var t=e.lang,c=e.locale,n=Object(s.useRouteMatch)("/lite"),a=Object(s.useRouteMatch)("/pro"),j=Object(s.useRouteMatch)("/mining"),b=n||a||j;return Object(l.jsxs)("div",{className:"nav-menu",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("a",{href:"https://deri.finance/#index?locale=".concat(c),rel:"noreferrer",target:"_blank",children:Object(l.jsx)("img",{src:i,alt:""})})}),Object(l.jsx)("div",{className:"mean",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{rel:"noreferrer",href:"https://".concat(window.location.host,"/#mining?locale=").concat(c),target:b?"":"_blank",className:"mining-item",children:t.mining})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{rel:"noreferrer",href:"https://".concat(window.location.host,"/#lite?locale=").concat(c),target:b?"":"_blank",className:"trade-item",children:t.trade})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",className:"governance-item",href:"https://governance.deri.finance/#governance?locale=".concat(c),children:t.governance})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",className:"bridge-item",href:"https://bridge.deri.finance/#bridge?locale=".concat(c),children:t.bridge})}),Object(l.jsxs)("li",{className:"ref",children:[Object(l.jsx)("a",{href:"https://docs.deri.finance/",children:t.docs}),Object(l.jsx)("i",{children:Object(l.jsx)("svg",{"data-v-16f7de50":"",fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24",className:"Zi Zi--ArrowDown ContentItem-arrowIcon",children:Object(l.jsx)("path",{"data-v-16f7de50":"",d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"})})}),Object(l.jsxs)("ul",{className:"ref-box",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/whitepaper",children:t.whitepaper})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/code-audits",children:t["code-audit"]})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"http://deri.finance/#/team?locale=".concat(c),className:"team-item",children:t.team})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/faq",children:t.faq})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://docs.deri.finance/",children:t.guide})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/deri-finance/",children:t.github})})]})]}),Object(l.jsxs)("li",{className:"ref",children:[Object(l.jsx)("span",{className:"more",children:t.more})," ",Object(l.jsx)("i",{children:Object(l.jsx)("svg",{"data-v-16f7de50":"",fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24",className:"Zi Zi--ArrowDown ContentItem-arrowIcon",children:Object(l.jsx)("path",{"data-v-16f7de50":"",d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"})})}),Object(l.jsxs)("ul",{className:"ref-box",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/broker",children:t.broker})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/brokerbind",children:t["broker-bind"]})})]})]})]})}),Object(l.jsx)(o.a,{})]})},b=c(632),d=c(657),u=c(624),h=c(95);var O,f=Object(h.b)("intl")(Object(h.c)((function(e){var t=e.intl,c=Object(u.a)(t.dict,"header"),n=Object(s.useRouteMatch)("/index"),a=Object(s.useRouteMatch)("/team"),i=!n&&!a;return Object(l.jsx)("div",{className:"nav",children:Object(l.jsxs)("div",{className:"nav-container",children:[Object(l.jsx)(j,{lang:c,locale:t.locale}),Object(l.jsxs)("div",{className:"nav-right",children:[i&&Object(l.jsx)(b.a,{lang:c}),Object(l.jsx)("div",{className:"use-deri",children:Object(l.jsx)(r.b,{to:"/lite",target:"_blank",children:c["use-deri"]})}),Object(l.jsx)(d.a,{})]})]})})}))),x=c(5),m=c(6),p=c(11),A=c(10),g=c(134),v=(c(671),c(635)),N=c(636),w=Object(g.a)((function(){return Promise.all([c.e(0),c.e(1),c.e(3),c.e(2),c.e(17)]).then(c.bind(null,726))})),k=Object(g.a)((function(){return Promise.all([c.e(0),c.e(1),c.e(3),c.e(2),c.e(13)]).then(c.bind(null,746))})),y=Object(g.a)((function(){return Promise.all([c.e(0),c.e(14)]).then(c.bind(null,727))})),C=Object(g.a)((function(){return Promise.all([c.e(0),c.e(1),c.e(4),c.e(22)]).then(c.bind(null,728))})),S=Object(g.a)((function(){return Promise.all([c.e(7),c.e(29)]).then(c.bind(null,729))})),R=Object(g.a)((function(){return c.e(16).then(c.bind(null,730))})),M=Object(g.a)((function(){return Promise.all([c.e(6),c.e(27)]).then(c.bind(null,731))})),D=Object(g.a)((function(){return Promise.all([c.e(0),c.e(5),c.e(28)]).then(c.bind(null,732))})),I=Object(g.a)((function(){return c.e(20).then(c.bind(null,733))})),U=Object(g.a)((function(){return c.e(25).then(c.bind(null,734))})),Z=Object(g.a)((function(){return c.e(23).then(c.bind(null,735))})),V=Object(s.withRouter)(O=Object(v.a)(O=function(e){Object(p.a)(c,e);var t=Object(A.a)(c);function c(){return Object(x.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){var e=this.props.dict;return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)(s.Switch,{children:[Object(l.jsx)(s.Route,{exact:!0,path:"/team",component:function(){return Object(l.jsx)(R,{lang:e.team})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/bridge",component:function(){return Object(l.jsx)(M,{lang:e.bridge})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/broker",component:function(){return Object(l.jsx)(D,{lang:e.broker})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/brokerbind",component:function(){return Object(l.jsx)(I,{lang:e.broker})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/index",component:function(){return Object(l.jsx)(S,{lang:e.home})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/governance",component:function(){return Object(l.jsx)(U,{lang:e.governance})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/diphistory",component:function(){return Object(l.jsx)(Z,{lang:e["dip-history"]})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/",render:function(){return Object(l.jsx)(N.a,{})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/mining",component:function(){return Object(l.jsx)(y,{lang:e.mining})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/mining/:version/:chainId/:type/:symbol/:baseToken/:address",component:function(){return Object(l.jsx)(C,{lang:e.mining})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/lite",component:function(){return Object(l.jsx)(w,{lang:e.lite})}}),Object(l.jsx)(s.Route,{exact:!0,path:"/pro",component:function(){return Object(l.jsx)(k,{lang:Object.assign(e.lite,e.pro)})}}),Object(l.jsx)(s.Route,{component:function(){return Object(l.jsx)(w,{lang:e.lite})}})]})})}}]),c}(a.a.Component))||O)||O;c(672),c(673);var X=Object(h.b)("intl")(Object(h.c)((function(e){var t=e.intl,c=Object(u.a)(t.dict,"footer"),n=Object(s.useRouteMatch)("/lite"),a=Object(s.useRouteMatch)("/pro"),r=Object(s.useRouteMatch)("/mining"),i=n||a||r;return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("div",{className:"footer-info",children:[Object(l.jsx)("div",{className:"hr"}),Object(l.jsxs)("div",{className:"footer-box",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("a",{rel:"noreferrer",href:"https://app.deri.finance/#lite?locale=".concat(t.locale),target:i?"":"_blank",className:"mt-27",children:c.app})}),Object(l.jsx)("span",{className:"mt-27",children:Object(l.jsx)("a",{href:"https://docs.deri.finance/",children:c.docs})}),Object(l.jsx)("span",{className:"mt-27",children:Object(l.jsx)("a",{href:"http://deri.finance/#/team",children:c.team})}),Object(l.jsx)("span",{className:"mt-27",children:Object(l.jsx)("a",{href:"https://docs.deri.finance/faq",children:c.faq})})]}),Object(l.jsxs)("div",{className:"mt-19",children:["\xa9 2021 ",c["deri-protocol"]]})]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsxs)("span",{children:[" ",c["visit-us-on"]]}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn-a",children:Object(l.jsxs)("div",{className:"circle",children:[Object(l.jsx)("div",{className:"wechat",children:Object(l.jsx)("div",{className:"down-box"})}),Object(l.jsx)("div",{className:"fa fa-wechat"})]})}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn-a",href:"mailto: service@deri.finance",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-envelope"})})}),Object(l.jsx)("a",{target:"_blank",className:"iocn-a",href:"https://deri-protocol.medium.com",rel:"noreferrer",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-medium"})})}),Object(l.jsx)("a",{target:"_blank",className:"iocn-a",href:"https://twitter.com/DeriProtocol",rel:"noreferrer",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-twitter"})})}),Object(l.jsx)("a",{target:"_blank",className:"iocn-a",href:"https://github.com/deri-finance",rel:"noreferrer",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-github"})})}),Object(l.jsx)("a",{rel:"noreferrer",target:"_blank",className:"iocn-a",href:"https://t.me/DeriProtocol",children:Object(l.jsx)("div",{className:"circle",children:Object(l.jsx)("div",{className:"fa fa-paper-plane"})})})]})]})]})})})));c(674);function F(e){var t=e.locale;console.log("welcome Deri desktop app");var c=Object(s.useLocation)().pathname.substring(1);return Object(l.jsxs)("div",{className:"desktop ".concat(c," ").concat(t),children:[Object(l.jsx)(f,{}),Object(l.jsx)(V,{}),Object(l.jsx)(X,{})]})}}}]);
//# sourceMappingURL=11.b6627163.chunk.js.map