(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[17],{1010:function(e,t,s){},1223:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return G}));var a=s(0),c=s.n(a),i=s(2),r=s(5),l=s(10),d=s(800),n=s.n(d),j=(s(785),s(1010),s(332),s(335)),o=s(1011),b=s.n(o),v=s(1013),m=s.n(v),O=s(9);function u(e){var t=e.lang,s=Object(l.useState)({}),a=Object(r.a)(s,2),d=a[0],j=a[1],o=Object(l.useState)(!0),v=Object(r.a)(o,2),u=v[0],h=v[1],x=Object(l.useState)(!0),p=Object(r.a)(x,2),g=p[0],f=p[1],N=function(){var e=Object(i.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://infoapi2.deri.finance","/stats_for_homepage"),e.next=3,n.a.get(t);case 3:200===(s=e.sent).status&&j(s.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){N();var e=setInterval((function(){N(),f(!0),h(!0)}),3e5);return function(){return clearInterval(e)}}),[]),Object(O.jsxs)("div",{className:"current-stats-box",children:[Object(O.jsx)(m.a,{active:u,onChange:function(e){return e&&h(!1)},children:function(e){var s=e.isVisible;return Object(O.jsxs)("div",{className:"total-volume",children:[Object(O.jsx)("div",{className:"num",children:s&&d.volume?Object(O.jsx)(b.a,{start:0,end:d.volume,duration:4.75,separator:",",decimal:",",prefix:"$ "}):Object(O.jsx)("div",{className:"loading-line"})}),Object(O.jsx)("div",{className:"title-name",children:t["total-volume"]})]})}}),Object(O.jsx)(m.a,{active:g,onChange:function(e){return e&&f(!1)},children:function(e){var s=e.isVisible;return Object(O.jsxs)("div",{className:"total-transactions",children:[Object(O.jsx)("div",{className:"num",children:s&&d.transactions?Object(O.jsx)(b.a,{start:0,duration:3.75,separator:",",decimal:",",end:d.transactions}):Object(O.jsx)("div",{className:"loading-line"})}),Object(O.jsx)("div",{className:"title-name",children:t["total-transactions"]})]})}})]})}var h=s.p+"static/media/DERI-Illustration-cut.6f520b30.webm",x=s.p+"static/media/AKG.9059960c.svg",p=(s.p,s.p,s.p+"static/media/binance.871f03da.svg"),g=s.p+"static/media/BIXIN.7ddda82b.svg",f=s.p+"static/media/black-range.ca9ac556.svg",N=s.p+"static/media/CDF.f192bf46.svg",w=(s.p,s.p+"static/media/Kryptos.6faa6488.svg"),S=s.p+"static/media/FBG.0ea88b08.svg",y=s.p+"static/media/GSR.2973997f.svg",k=s.p+"static/media/LD.319e18db.svg",I=s.p+"static/media/LotusCapital.b4567af4.svg",E=s.p+"static/media/WOO.fe5a8af6.svg",q=s.p+"static/media/QCP.f0c39ef4.svg",L=s.p+"static/media/Arbitragers.b71398f8.png",C=s.p+"static/media/liquidity-providers.7f8dce1e.png",_=s.p+"static/media/Position-liquidators.f779704a.png",A=s.p+"static/media/step1.d87dc9ab.png",D=s.p+"static/media/step2.612c721f.png",F=s.p+"static/media/step3.3f11bcc4.png",V=s.p+"static/media/trade.95fcb301.png";function G(e){var t=e.lang,s=Object(l.useState)({}),a=Object(r.a)(s,2),d=(a[0],a[1]),o=Object(l.useState)(!0),b=Object(r.a)(o,2),v=(b[0],b[1]),m=Object(l.useState)(!0),G=Object(r.a)(m,2),T=(G[0],G[1]),Z=function(){var e=Object(i.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://infoapi2.deri.finance","/stats_for_homepage"),e.next=3,n.a.get(t);case 3:200===(s=e.sent).status&&d(s.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){Z();var e=setInterval((function(){Z(),T(!0),v(!0)}),3e5);return function(){return clearInterval(e)}}),[]),Object(O.jsxs)("div",{className:"home",children:[Object(O.jsxs)("div",{className:"home-box",children:[Object(O.jsxs)("div",{className:"first-screen",children:[Object(O.jsx)("div",{className:"video",children:Object(O.jsx)("video",{muted:!0,autoplay:"autoplay",loop:!0,children:Object(O.jsx)("source",{src:h,type:"video/webm"})})}),Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("div",{className:"title-text",children:t.title}),Object(O.jsxs)("div",{className:"deri-describe",children:["= ( ",t["perpetual-futures"]," + ",t["everlasting-options"]," ) ",t["deri-describe"]]}),Object(O.jsxs)("div",{className:"button-home",children:[Object(O.jsx)("a",{className:"start-trading",href:"https://app.deri.finance/",children:t["start-trading"]}),Object(O.jsx)("a",{className:"read-our",target:"_blank",href:" https://docs.deri.finance/whitepaper",children:t["read-our-whitepaper"]})]})]})]}),Object(O.jsxs)("div",{className:"second-screen",children:[Object(O.jsxs)("div",{className:"current-stats",children:[Object(O.jsx)("div",{className:"current-stats-title",children:t["current-stats"]}),Object(O.jsx)(u,{lang:t})]}),Object(O.jsxs)("div",{className:"who-uses-deri",children:[Object(O.jsx)("div",{className:"who-uses-deri-title",children:t["who-uses-deri"]}),Object(O.jsxs)("div",{className:"who-uses-deri-box",children:[Object(O.jsxs)("div",{className:"deri-role",children:[Object(O.jsx)("div",{className:"role-logo",children:Object(O.jsx)("img",{alt:"",src:C})}),Object(O.jsxs)("div",{className:"role-title-describe",children:[Object(O.jsx)("div",{className:"role-title",children:t["liquidity-providers"]}),Object(O.jsx)("div",{className:"role-describe",children:t["liquidity-providers-describe"]})]})]}),Object(O.jsxs)("div",{className:"deri-role",children:[Object(O.jsx)("div",{className:"role-logo",children:Object(O.jsx)("img",{alt:"",src:V})}),Object(O.jsxs)("div",{className:"role-title-describe",children:[Object(O.jsx)("div",{className:"role-title",children:t.traders}),Object(O.jsx)("div",{className:"role-describe",children:t["traders-describe"]})]})]}),Object(O.jsxs)("div",{className:"deri-role",children:[Object(O.jsx)("div",{className:"role-logo",children:Object(O.jsx)("img",{alt:"",src:_})}),Object(O.jsxs)("div",{className:"role-title-describe",children:[Object(O.jsx)("div",{className:"role-title",children:t["position-liquidators"]}),Object(O.jsx)("div",{className:"role-describe",children:t["position-liquidators-describe"]})]})]}),Object(O.jsxs)("div",{className:"deri-role",children:[Object(O.jsx)("div",{className:"role-logo",children:Object(O.jsx)("img",{alt:"",src:L})}),Object(O.jsxs)("div",{className:"role-title-describe",children:[Object(O.jsx)("div",{className:"role-title",children:t.arbitragers}),Object(O.jsx)("div",{className:"role-describe",children:t["arbitragers-describe"]})]})]})]})]}),Object(O.jsxs)("div",{className:"how-to-start-trading",children:[Object(O.jsx)("div",{className:"how-to-start-trading-title",children:t["how-to-start-trading"]}),Object(O.jsxs)("div",{className:"step-connect-wallet",children:[Object(O.jsx)("div",{className:"step-logo logo-one",children:Object(O.jsx)("img",{alt:"",src:A})}),Object(O.jsxs)("div",{className:"step-box",children:[Object(O.jsx)("div",{className:"step-title",children:t["step-connect-wallet"]}),Object(O.jsx)("div",{className:"step-describe",children:t["step-connect-wallet-describe"]})]})]}),Object(O.jsxs)("div",{className:"step-hr-one",children:[Object(O.jsx)("div",{className:"hr-one"}),Object(O.jsx)("div",{className:"hr-tow"}),Object(O.jsx)("div",{className:"hr-three"})]}),Object(O.jsxs)("div",{className:"step-deposit-margin",children:[Object(O.jsx)("div",{className:"step-logo logo-two",children:Object(O.jsx)("img",{alt:"",src:D})}),Object(O.jsxs)("div",{className:"step-box",children:[Object(O.jsx)("div",{className:"step-title",children:t["step-deposit-margin"]}),Object(O.jsx)("div",{className:"step-describe",children:t["step-deposit-margin-describe"]})]})]}),Object(O.jsxs)("div",{className:"step-hr-two",children:[Object(O.jsx)("div",{className:"hr-one"}),Object(O.jsx)("div",{className:"hr-tow"})]}),Object(O.jsxs)("div",{className:"step-trade-derivatives",children:[Object(O.jsx)("div",{className:"step-logo logo-three",children:Object(O.jsx)("img",{alt:"",src:F})}),Object(O.jsxs)("div",{className:"step-box",children:[Object(O.jsx)("div",{className:"step-title",children:t["step-trade-derivatives"]}),Object(O.jsx)("div",{className:"step-describe",children:t["step-trade-derivatives-describe"]})]})]})]}),Object(O.jsxs)("div",{className:"backed-by",children:[Object(O.jsx)("div",{className:"backed-by-title",children:t["backed-by"]}),Object(O.jsxs)("div",{className:"backed-by-box",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"",src:S}),Object(O.jsx)("img",{alt:"",src:g}),Object(O.jsx)("img",{alt:"",src:I}),Object(O.jsx)("img",{alt:"",src:f}),Object(O.jsx)("img",{alt:"",src:k}),Object(O.jsx)("img",{alt:"",src:w})]}),Object(O.jsxs)("div",{className:"padding-box",children:[Object(O.jsx)("img",{alt:"",src:x}),Object(O.jsx)("img",{alt:"",src:N}),Object(O.jsx)("img",{alt:"",src:y}),Object(O.jsx)("img",{alt:"",src:E}),Object(O.jsx)("img",{alt:"",src:q}),Object(O.jsx)("img",{alt:"",src:p})]})]})]}),Object(O.jsx)("div",{className:"our-partners",children:Object(O.jsx)("div",{className:"our-partners-box"})})]})]}),Object(O.jsx)(j.a,{})]})}},785:function(e,t,s){"use strict";var a,c,i=s(19),r=s(104),l=s(52),d=s(5),n=s(48),j=s(10),o=(s(76),s(806)),b=s(47),v=s(29),m=s(13),O=s(9),u=Object(b.a)(o.a)(a||(a=Object(n.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),h=b.a.div(c||(c=Object(n.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(j.useState)(Object(O.jsx)("span",{className:"loading-line"})),s=Object(d.a)(t,2),a=s[0],c=s[1],n=Object(j.useState)(!0),o=Object(d.a)(n,2),b=o[0],x=o[1],p=function(){var t=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(j.useEffect)((function(){var t=e.allowZero,s=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,l=void 0===a?"--":a,d=Object(r.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(p())!t&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&0===+Object(m.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(v.c)(Math.abs(d.value))+1),d.value=Object(v.E)(d.value),d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),c(Object(O.jsx)(u,Object(i.a)(Object(i.a)({},d),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var n=e.width,j=e.height;c(Object(O.jsx)(h,{className:"loading-line",width:n,height:j})),s&&x(!1)}var o=window.setTimeout((function(){p()||c(l)}),6e4);return function(){clearTimeout(o)}}),[e.value,e.decimalScale,e.suffix]),a}}}]);
//# sourceMappingURL=17.bb3b0ff9.chunk.js.map