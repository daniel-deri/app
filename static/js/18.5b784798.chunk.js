(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[18],{1169:function(e,a,t){},1211:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),n=t(2),i=t(5),r=t(10),l=t(44),d=t(781),o=t(208),u=t(327),b=t(18),j=t(165),p=t.p+"static/media/pancake.e177218b.svg",x=t.p+"static/media/sushiswap-sushi-logo.f8ccc300.svg",h=t.p+"static/media/gateio.1570dd44.svg",f=t.p+"static/media/mxc.b59b5e73.svg",m=(t(1169),t(9));a.default=Object(l.b)("wallet")(Object(l.c)((function(e){var a=e.wallet,t=void 0===a?{}:a,c=e.lang,l=Object(r.useState)(),v=Object(i.a)(l,2),O=v[0],w=v[1],k=Object(r.useState)(),N=Object(i.a)(k,2),g=N[0],y=N[1],_=Object(u.a)(),S=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=13;break}return"DERI",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:O,symbol:"DERI",decimals:18}}});case 6:e.sent?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(n.a)(s.a.mark((function e(){var a,t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://infoapi.deri.finance/stats_for_token",e.next=3,fetch("https://infoapi.deri.finance/stats_for_token");case 3:return a=e.sent,e.next=6,a.json();case 6:(t=e.sent)&&((c={}).price=t.data.price,c.market_cap=t.data.market_cap,c.circulating_supply=parseInt(t.data.circulating_supply),c.total_supply=parseInt(t.data.total_supply),y(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=6;break}return e.next=3,t.switchNetwork(_[1]);case 3:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9"),e.next=7;break;case 6:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=6;break}return e.next=3,t.switchNetwork(_[56]);case 3:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5"),e.next=7;break;case 6:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e;t.isConnected()&&(56===+t.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+t.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+t.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+t.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),w(e))}),[t.detail]),Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){C()}),3e5),C(),function(){e&&clearInterval(e)}}),[]),Object(m.jsx)("div",{className:"token-box",children:Object(m.jsxs)("div",{className:"token-info",children:[Object(m.jsxs)("div",{className:"token-header",children:[Object(m.jsxs)("div",{className:"token-header-left",children:[Object(m.jsxs)("div",{className:"logo-title",children:[Object(m.jsx)("img",{alt:"",src:j.default}),Object(m.jsx)("span",{className:"title-text",children:c.title})]}),Object(m.jsxs)("div",{className:"token-header-des",children:[c["deri-is-the-protocol-token"],Object(m.jsxs)("a",{href:"https://docs.deri.finance/tokenomics",target:"_blank",className:"learn-more",children:[" ",c["learn-more"]," "]})]})]}),Object(m.jsx)("div",{className:"token-header-right",children:Object(m.jsx)(o.a,{onClick:function(){S()},type:b.h,width:"242",label:c["add-deri-to-metamask"]})})]}),Object(m.jsxs)("div",{className:"token-info-content",children:[Object(m.jsxs)("div",{className:"top-info-box",children:[Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsxs)("div",{className:"num",children:["$ ",g?Object(m.jsx)(d.a,{value:g.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(m.jsx)("div",{className:"text",children:c.price})]}),Object(m.jsxs)("div",{className:"info-box min-box",children:[Object(m.jsxs)("div",{className:"num",children:["$ ",g?Object(m.jsx)(d.a,{value:g.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(m.jsx)("div",{className:"text",children:c["market-cap"]})]})]}),Object(m.jsxs)("div",{className:"buttom-info-box",children:[Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsx)("div",{className:"num",children:g?Object(m.jsx)(d.a,{value:g.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(m.jsx)("div",{className:"text",children:c["circulating-supply"]})]}),Object(m.jsxs)("div",{className:"info-box min-box",children:[Object(m.jsx)("div",{className:"num",children:g?Object(m.jsx)(d.a,{value:g.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(m.jsx)("div",{className:"text",children:c["total-supply"]})]})]})]}),Object(m.jsx)("div",{className:"buy-deri-token",children:c["buy-deri-token"]}),Object(m.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(m.jsx)("a",{target:"_blank",onClick:I,children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:p})}),Object(m.jsx)("div",{className:"swap-name",children:c["pancake-swap"]})]})}),Object(m.jsx)("a",{target:"_blank",onClick:A,children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:x})}),Object(m.jsx)("div",{className:"swap-name",children:c["sushi-swap"]})]})}),Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:h})}),Object(m.jsx)("div",{className:"swap-name",children:c.gate})]})}),Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:f})}),Object(m.jsx)("div",{className:"swap-name",children:c.mexc})]})})]})]})})})))},781:function(e,a,t){"use strict";var c,s,n=t(19),i=t(104),r=t(52),l=t(5),d=t(48),o=t(10),u=(t(76),t(795)),b=t(47),j=t(30),p=t(13),x=t(9),h=Object(b.a)(u.a)(c||(c=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),f=b.a.div(s||(s=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));a.a=function(e){var a=Object(o.useState)(Object(x.jsx)("span",{className:"loading-line"})),t=Object(l.a)(a,2),c=t[0],s=t[1],d=Object(o.useState)(!0),u=Object(l.a)(d,2),b=u[0],m=u[1],v=function(){var a=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===a};return Object(o.useEffect)((function(){var a=e.allowZero,t=(e.wallet,e.defaultValue),c=void 0===t?"--":t,r=Object(i.a)(e,["allowZero","wallet","defaultValue"]);v()?(!a&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&0===+Object(p.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(j.c)(Math.abs(r.value))+1),r.value=Object(j.D)(r.value),r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),s(Object(x.jsx)(h,Object(n.a)(Object(n.a)({},r),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})))):b&&(s(Object(x.jsx)(f,Object(n.a)({className:"loading-line"},e))),e.closeShowLoadingEffectAfterLoaded&&m(!1));var l=window.setTimeout((function(){v()||s(c)}),3e4);return function(){clearTimeout(l)}}),[e.value,e.decimalScale,e.suffix]),c}}}]);
//# sourceMappingURL=18.5b784798.chunk.js.map