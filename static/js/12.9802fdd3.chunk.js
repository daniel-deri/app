(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[12],{1105:function(e,a,t){},1133:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),n=t(2),i=t(7),r=t(8),l=t(41),d=t(756),o=t(207),u=t(328),b=t(25),j=t(164),p=t.p+"static/media/pancake.2c13a9f3.svg",x=t.p+"static/media/sushiswap-sushi-logo.f8ccc300.svg",h=t.p+"static/media/gateio.1570dd44.svg",f=t.p+"static/media/mxc.b59b5e73.svg",m=(t(1105),t(9));a.default=Object(l.b)("wallet")(Object(l.c)((function(e){var a=e.wallet,t=void 0===a?{}:a,c=e.lang,l=Object(r.useState)(),v=Object(i.a)(l,2),O=v[0],w=v[1],N=Object(r.useState)(),k=Object(i.a)(N,2),g=k[0],y=k[1],_=Object(u.a)(),S=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=13;break}return"DERI",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:O,symbol:"DERI",decimals:18}}});case 6:e.sent?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(n.a)(s.a.mark((function e(){var a,t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://infoapi.deri.finance/stats_for_token",e.next=3,fetch("https://infoapi.deri.finance/stats_for_token");case 3:return a=e.sent,e.next=6,a.json();case 6:(t=e.sent)&&((c={}).price=t.data.price,c.market_cap=t.data.market_cap,c.circulating_supply=parseInt(t.data.circulating_supply),c.total_supply=parseInt(t.data.total_supply),y(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=6;break}return e.next=3,t.switchNetwork(_[1]);case 3:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9"),e.next=7;break;case 6:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(n.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=6;break}return e.next=3,t.switchNetwork(_[56]);case 3:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5"),e.next=7;break;case 6:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e;t.isConnected()&&(56===+t.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+t.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+t.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+t.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),w(e))}),[t.detail]),Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){C()}),3e5),C(),function(){e&&clearInterval(e)}}),[]),Object(m.jsx)("div",{className:"token-box",children:Object(m.jsxs)("div",{className:"token-info",children:[Object(m.jsxs)("div",{className:"token-header",children:[Object(m.jsxs)("div",{className:"token-header-left",children:[Object(m.jsxs)("div",{className:"logo-title",children:[Object(m.jsx)("img",{alt:"",src:j.default}),Object(m.jsx)("span",{className:"title-text",children:c.title})]}),Object(m.jsxs)("div",{className:"token-header-des",children:[c["deri-is-the-protocol-token"],Object(m.jsxs)("a",{href:"https://docs.deri.finance/tokenomics",target:"_blank",className:"learn-more",children:[" ",c["learn-more"]," "]})]})]}),Object(m.jsx)("div",{className:"token-header-right",children:Object(m.jsx)(o.a,{onClick:function(){S()},type:b.h,width:"242",label:c["add-deri-to-metamask"]})})]}),Object(m.jsxs)("div",{className:"token-info-content",children:[Object(m.jsxs)("div",{className:"top-info-box",children:[Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsxs)("div",{className:"num",children:["$ ",g?Object(m.jsx)(d.a,{value:g.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(m.jsx)("div",{className:"text",children:c.price})]}),Object(m.jsxs)("div",{className:"info-box min-box",children:[Object(m.jsxs)("div",{className:"num",children:["$ ",g?Object(m.jsx)(d.a,{value:g.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(m.jsx)("div",{className:"text",children:c["market-cap"]})]})]}),Object(m.jsxs)("div",{className:"buttom-info-box",children:[Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsx)("div",{className:"num",children:g?Object(m.jsx)(d.a,{value:g.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(m.jsx)("div",{className:"text",children:c["circulating-supply"]})]}),Object(m.jsxs)("div",{className:"info-box min-box",children:[Object(m.jsx)("div",{className:"num",children:g?Object(m.jsx)(d.a,{value:g.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(m.jsx)("div",{className:"text",children:c["total-supply"]})]})]})]}),Object(m.jsx)("div",{className:"buy-deri-token",children:c["buy-deri-token"]}),Object(m.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(m.jsx)("a",{target:"_blank",onClick:I,children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:p})}),Object(m.jsx)("div",{className:"swap-name",children:c["pancake-swap"]})]})}),Object(m.jsx)("a",{target:"_blank",onClick:A,children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:x})}),Object(m.jsx)("div",{className:"swap-name",children:c["sushi-swap"]})]})}),Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:h})}),Object(m.jsx)("div",{className:"swap-name",children:c.gate})]})}),Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:f})}),Object(m.jsx)("div",{className:"swap-name",children:c.mexc})]})})]})]})})})))},756:function(e,a,t){"use strict";var c,s=t(39),n=t(104),i=t(46),r=t(7),l=t(48),d=t(8),o=(t(63),t(774)),u=t(47),b=t(9),j=Object(u.a)(o.a)(c||(c=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width}));a.a=function(e){var a=Object(d.useState)(Object(b.jsx)("span",{className:"loading-line"})),t=Object(r.a)(a,2),c=t[0],l=t[1],o=(Object(d.useRef)(),function(){var a=e.allowZero;return"object"!==Object(i.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===a});return Object(d.useEffect)((function(){e.allowZero,e.wallet;var a=e.defaultValue,t=void 0===a?"--":a,c=Object(n.a)(e,["allowZero","wallet","defaultValue"]);o()?(c.value=String(c.value),l(Object(b.jsx)(j,Object(s.a)(Object(s.a)({},c),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})))):l(Object(b.jsx)("span",{className:"loading-line"}));var i=window.setTimeout((function(){o()||l(t)}),3e4);return function(){clearTimeout(i)}}),[e.value,e.decimalScale]),c}}}]);
//# sourceMappingURL=12.9802fdd3.chunk.js.map