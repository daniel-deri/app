(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[12],{1151:function(e,t,a){},1152:function(e,t,a){},1153:function(e,t,a){},1154:function(e,t,a){},1180:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var c=a(0),s=a.n(c),n=a(2),i=a(7),r=a(8),o=(a(1151),a.p+"static/media/logo-deri.d4c8b6a2.svg"),l=(a(805),a(31)),d=a(9);var j=a(42),u=a(794),b=a(28),h=a(761),x=a(777);function p(e){var t=e.lang,a=e.List;return Object(d.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(d.jsxs)("div",{className:"list-box",children:[Object(d.jsxs)("div",{className:"list-box-title",children:[Object(d.jsx)("span",{className:"no",children:t.no}),Object(d.jsx)("span",{className:"address",children:t["user-addr"]}),Object(d.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(d.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(d.jsx)(x.a,{text:t.score,className:"score score-hover",tip:"estimated points based on the current weights"})]}),Object(d.jsx)("div",{className:"list-info",children:a.map((function(e,t){return Object(d.jsxs)("div",{className:"list-info-box",children:[Object(d.jsxs)("div",{className:"no",children:[1===e.no&&Object(d.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(d.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(d.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(d.jsx)("div",{className:"address",children:e.userAddr}),Object(d.jsxs)("div",{className:"feespaid",children:["$ ",Object(d.jsx)(h.a,{value:e.feesPaid,decimalScale:0,thousandSeparator:!0})]}),Object(d.jsx)("div",{className:"avgcoeff",children:Object(d.jsx)(h.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(d.jsx)("div",{className:"score",children:Object(d.jsx)(h.a,{value:e.score,decimalScale:2,thousandSeparator:!0})})]},t)}))})]})})}function v(e){var t=e.lang,a=e.List;return Object(d.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(d.jsxs)("div",{className:"list-box",children:[Object(d.jsxs)("div",{className:"list-box-title",children:[Object(d.jsx)("span",{className:"no",children:t.no}),Object(d.jsx)("span",{className:"address",children:t["user-addr"]}),Object(d.jsx)("span",{className:"pnl",children:"PnL"})]}),Object(d.jsx)("div",{className:"list-info",children:a.map((function(e,t){return Object(d.jsxs)("div",{className:"list-info-box",children:[Object(d.jsxs)("div",{className:"no",children:[1===e.no&&Object(d.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(d.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(d.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(d.jsx)("div",{className:"address",children:e.userAddr}),Object(d.jsxs)("div",{className:"pnl",children:["$ ",Object(d.jsx)(h.a,{value:e.pnl,decimalScale:2,thousandSeparator:!0})]})]},t)}))})]})})}a.p,a(1152);Object(j.b)("wallet")(Object(j.c)((function(e){var t=e.wallet,a=e.lang,c=Object(r.useState)([]),j=Object(i.a)(c,2),m=j[0],O=j[1],f=Object(r.useState)([]),N=Object(i.a)(f,2),g=N[0],S=N[1],C=Object(r.useState)(""),w=Object(i.a)(C,2),y=w[0],Q=w[1],E=Object(r.useState)(""),T=Object(i.a)(E,2),k=T[0],A=T[1],D=Object(r.useState)(""),I=Object(i.a)(D,2),P=I[0],B=I[1],F=Object(r.useState)({}),R=Object(i.a)(F,2),U=R[0],M=R[1],L=Object(r.useState)(""),q=Object(i.a)(L,2),H=q[0],z=q[1],$=function(){var e=Object(n.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.request("getUserStakingReward",[t.detail.account,3]);case 2:(a=e.sent)&&Q(a.rewardDERI);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(n.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.request("getUserStakingInfo",[t.detail.account,3]);case 2:a=e.sent,A(a.score),B(a.feePaid),z(a.coef);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(n.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.request("getUserStakingContribution",[t.detail.account,3]);case 2:(a=e.sent)&&M(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(n.a)(s.a.mark((function e(){var t,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.request("getStakingTop10Users",[3]);case 2:(t=e.sent)&&(a=t.top10.map((function(e,t){var a={};return a.no=e.no,e.userAddr=Object(b.h)(e.userAddr),a.userAddr=e.userAddr,a.feesPaid=e.feePaid,a.avgCoeff=e.evgCoeff,a.score=e.score,a.specialRewardsA=e.specialRewardsA,a})),c=t.top10Pnl.map((function(e,t){var a={};return a.no=e.no,e.userAddr=Object(b.h)(e.userAddr),a.userAddr=e.userAddr,a.pnl=e.pnl,a.specialRewardsB=e.specialRewardsB,a})),S(c),O(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){J()}),3e4),J(),function(){e&&clearInterval(e)}}),[]),Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){t.isConnected()&&($(),Z(),G())}),3e4),t.isConnected()&&($(),Z(),G()),function(){e&&clearInterval(e)}}),[t.detail.account]);var V={"Top 10 Points":{content:Object(d.jsx)(p,{lang:a,List:m})},"Top 10 Pnl":{content:Object(d.jsx)(v,{lang:a,List:g})}};return Object(d.jsxs)("div",{className:"trading",children:[Object(d.jsx)("div",{className:"trading-left",children:Object(d.jsx)("div",{className:"top-ponts-pnl",children:Object(d.jsx)(u.a,{tabSet:V,activeBgColor:"#203B60"})})}),Object(d.jsxs)("div",{className:"trading-right",children:[Object(d.jsxs)("div",{className:"your-estimated-rewards",children:[Object(d.jsx)("div",{className:"your-estimated-rewards-title",children:Object(d.jsxs)("span",{children:[a["your-rstimated-rewards"]," "]})}),Object(d.jsx)("div",{className:"your-rewards-info",children:Object(d.jsxs)("div",{className:"your-deri",children:[Object(d.jsx)("span",{className:"deri-logo-bg",children:Object(d.jsx)("img",{alt:"",src:o})}),Object(d.jsxs)("span",{className:"span",children:[" ",y?Object(d.jsx)(h.a,{decimalScale:2,value:y,thousandSeparator:!0}):"--"," "]})]})})]}),Object(d.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(d.jsx)("div",{className:"your-score-fee-coeff-title",children:"Your Trading Data"}),Object(d.jsxs)("div",{className:"your-score-fee-coeff-info",children:[Object(d.jsxs)("div",{className:"your-score",children:[Object(d.jsx)("div",{className:"your-score-title",children:Object(d.jsx)(x.a,{text:a["your-scored"],tip:"estimated points based on the current weights"})}),Object(d.jsx)("div",{className:"your-score-num",children:k?Object(d.jsx)(h.a,{value:k,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(d.jsxs)("div",{className:"your-fee",children:[Object(d.jsx)("div",{className:"your-fee-title",children:Object(d.jsx)(x.a,{text:a["your-fees-paid"],tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC"})}),Object(d.jsxs)("div",{className:"your-fee-num",children:["$  ",P?Object(d.jsx)(h.a,{value:P,decimalScale:2,thousandSeparator:!0}):"--"]})]}),Object(d.jsxs)("div",{className:"your-coeff",children:[Object(d.jsx)("div",{className:"your-coeff-title",children:Object(d.jsx)(x.a,{multiline:!0,text:a["your-coeff"],tip:a["boosting-factor-two"]})}),Object(d.jsx)("div",{className:"your-coeff-num",children:H?Object(d.jsx)(h.a,{value:H,decimalScale:4,thousandSeparator:!0}):"--"})]})]})]}),Object(d.jsx)("div",{className:"raise-score",children:Object(d.jsxs)("div",{className:"raise-score-box",children:[Object(d.jsxs)("div",{className:"raise-score-title-link",children:[Object(d.jsx)("div",{className:"raise-score-title",children:a["raise-score"]}),Object(d.jsxs)("div",{className:"raise-score-link",children:[Object(d.jsx)("a",{className:"fist-a",tip:a["staking-hover"],href:"https://app.deri.finance/?locale=en#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT,SHIBUSDT,SANDUSDT/DERI/0x9e2f5E284BEEb2C955987eD1EbB2149494CC1e41?symbolId=0",children:a.staking}),Object(d.jsx)("a",{tip:a["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:a.futures}),Object(d.jsx)("a",{tip:a["options-hover"],href:"https://app.deri.finance/#/options/pro",children:a.options})]})]}),Object(d.jsxs)("div",{className:"raise-score-des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share \xa0",Object(d.jsx)(x.a,{text:"this quarter's points",multiline:!0,className:"raise-hover",tip:a["the-quarter-points"]}),"\xa0per their transaction fees multiplied by the\xa0",Object(d.jsx)(x.a,{text:"boosting factors",className:"raise-hover",multiline:!0,tip:a["boosting-factor"]}),"."]})]})}),Object(d.jsx)("div",{className:"total-your-contrib",children:Object(d.jsxs)("div",{className:"your-contrib",children:[Object(d.jsxs)("div",{className:"stage",children:[Object(d.jsx)("div",{className:"stage-title"}),Object(d.jsx)("div",{className:"stage-title",children:"1st"}),Object(d.jsx)("div",{className:"stage-title",children:"2nd"}),Object(d.jsx)("div",{className:"stage-title",children:"3rd"}),Object(d.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(d.jsxs)("div",{className:"total-score-box",children:[Object(d.jsx)("div",{className:"total-score",children:"Total Score"}),Object(d.jsx)("div",{className:"total-score",children:U.Q1Contrib&&"0"!==U.Q1Contrib?Object(d.jsx)(h.a,{value:U.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(d.jsx)("div",{className:"total-score",children:U.Q2Contrib&&"0"!==U.Q2Contrib?Object(d.jsx)(h.a,{value:U.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(d.jsx)("div",{className:"total-score",children:U.Q3Contrib&&"0"!==U.Q3Contrib?Object(d.jsx)(h.a,{value:U.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(d.jsx)("div",{className:"total-score",children:U.Q4Contrib&&"0"!==U.Q4Contrib?Object(d.jsx)(h.a,{value:U.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(d.jsxs)("div",{className:"your-score-box",children:[Object(d.jsx)("div",{className:"your-score",children:"Your Score"}),Object(d.jsx)("div",{className:"your-score",children:U.userQ1Contrib&&"0"!==U.Q1Contrib?Object(d.jsx)(h.a,{value:U.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(d.jsx)("div",{className:"your-score",children:U.userQ2Contrib&&"0"!==U.Q2Contrib?Object(d.jsx)(h.a,{value:U.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(d.jsx)("div",{className:"your-score",children:U.userQ3Contrib&&"0"!==U.Q3Contrib?Object(d.jsx)(h.a,{value:U.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(d.jsx)("div",{className:"your-score",children:U.userQ4Contrib&&"0"!==U.Q4Contrib?Object(d.jsx)(h.a,{value:U.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(d.jsxs)("div",{className:"your-point-box",children:[Object(d.jsx)("div",{className:"your-point",children:"Your Points"}),Object(d.jsx)("div",{className:"your-point",children:U.userQ1Point&&"0"!==U.Q1Contrib?Object(d.jsx)(x.a,{text:Object(d.jsx)(h.a,{value:U.userQ1Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:U.userQ1Point?" = (".concat(U.userQ1Contrib," / ").concat(U.Q1Contrib,") * 10,000"):""}):"--"}),Object(d.jsx)("div",{className:"your-point",children:U.userQ2Point&&"0"!==U.Q2Contrib?Object(d.jsx)(x.a,{text:Object(d.jsx)(h.a,{value:U.userQ2Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:U.userQ1Point?" = (".concat(U.userQ2Contrib," / ").concat(U.Q2Contrib,") * 20,000"):""}):"--"}),Object(d.jsx)("div",{className:"your-point",children:U.userQ3Point&&"0"!==U.Q3Contrib?Object(d.jsx)(x.a,{text:Object(d.jsx)(h.a,{value:U.userQ3Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:U.userQ1Point?" = (".concat(U.userQ3Contrib," / ").concat(U.Q3Contrib,") * 30,000"):""}):"--"}),Object(d.jsx)("div",{className:"your-point",children:U.userQ4Point&&"0"!==U.Q4Contrib?Object(d.jsx)(x.a,{text:Object(d.jsx)(h.a,{value:U.userQ4Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:U.userQ1Point?" = (".concat(U.userQ4Contrib," / ").concat(U.Q4Contrib,") * 50,000"):""}):"--"})]})]})})]})]})}))),a(1153);a(1154);function m(e){e.lang;var t=Object(r.useState)("active"),a=Object(i.a)(t,2),c=a[0],o=a[1],l=function(){var e=Object(n.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"trading-mining",children:[Object(d.jsxs)("div",{className:"check",children:[Object(d.jsx)("div",{className:"upcoming"===c?"upcoming now":"upcoming",onClick:function(){return l("upcoming")},children:"UPCOMING"}),Object(d.jsx)("div",{className:"active"===c?"active now":"active",onClick:function(){return l("active")},children:"ACTIVE"}),Object(d.jsx)("div",{className:"finished"===c?"finished now":"finished",onClick:function(){return l("finished")},children:"FINISHED"})]}),"active"===c&&Object(d.jsx)("div",{className:"now-prom",children:"No Data"}),"upcoming"===c&&Object(d.jsx)("div",{className:"upcoming-box",children:"No Data"}),"finished"===c&&Object(d.jsxs)("div",{className:"finished-box",children:[Object(d.jsx)("a",{href:"https://v2app.deri.finance/#/trading-to-earn-finshed-one",rel:"norelerror",children:Object(d.jsx)("div",{className:"finished-epoch",children:Object(d.jsxs)("div",{className:"finished-epoch-box",children:[Object(d.jsx)("div",{className:"finished-logo",children:"FINISHED"}),Object(d.jsxs)("div",{className:"epoch-box",children:[Object(d.jsx)("div",{className:"epoch-box-title",children:"Trade to Earn (Epoch 1)"}),Object(d.jsx)("div",{className:"epoch-box-time",children:"10:00 AM, October 13th 2021  to 09:59:59 AM, November 10th 2021  UTC"}),Object(d.jsx)("div",{className:"epoch-value",children:"$ 10,00,000"})]})]})})}),Object(d.jsx)("a",{href:"https://v2app.deri.finance/#/trading-to-earn-finshed-two",rel:"norelerror",children:Object(d.jsx)("div",{className:"finished-epoch",children:Object(d.jsxs)("div",{className:"finished-epoch-box",children:[Object(d.jsx)("div",{className:"finished-logo",children:"FINISHED"}),Object(d.jsxs)("div",{className:"epoch-box",children:[Object(d.jsx)("div",{className:"epoch-box-title",children:"Trade to Earn (Epoch 2)"}),Object(d.jsx)("div",{className:"epoch-box-time",children:"10:00 AM, November 10th 2021  to 09:59:59 AM, December 8th 2021  UTC"}),Object(d.jsx)("div",{className:"epoch-value",children:"$ 15,00,000"})]})]})})}),Object(d.jsx)("div",{className:"finished-epoch",children:Object(d.jsxs)("div",{className:"finished-epoch-box",children:[Object(d.jsx)("div",{className:"finished-logo",children:"FINISHED"}),Object(d.jsxs)("div",{className:"epoch-box",children:[Object(d.jsx)("div",{className:"epoch-box-title",children:"Trade to Earn (Epoch 3)"}),Object(d.jsx)("div",{className:"epoch-box-time",children:"10:00:00 AM, December 8th 2021 to 10:00:00 AM, January 5th 2022 UTC"}),Object(d.jsx)("div",{className:"epoch-value",children:"500,000 DERI"})]})]})})]})]})}},761:function(e,t,a){"use strict";var c,s=a(39),n=a(103),i=a(46),r=a(7),o=a(48),l=a(8),d=(a(75),a(776)),j=a(47),u=a(28),b=a(13),h=a(9),x=Object(j.a)(d.a)(c||(c=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width}));t.a=function(e){var t=Object(l.useState)(Object(h.jsx)("span",{className:"loading-line"})),a=Object(r.a)(t,2),c=a[0],o=a[1],d=Object(l.useState)(!0),j=Object(r.a)(d,2),p=j[0],v=j[1],m=(Object(l.useRef)(),function(){var t=e.allowZero;return"object"!==Object(i.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t});return Object(l.useEffect)((function(){e.allowZero,e.wallet;var t=e.defaultValue,a=void 0===t?"--":t,c=Object(n.a)(e,["allowZero","wallet","defaultValue"]);m()?(c.value&&/\d+\.0*[1-9]+/.test(c.value)&&0===+Object(b.bg)(c.value).toFixed(+c.decimalScale||2)&&(c.decimalScale=Object(u.c)(c.value)+1),c.value=Object(u.D)(c.value),o(Object(h.jsx)(x,Object(s.a)(Object(s.a)({},c),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}))),v(!1)):p&&o(Object(h.jsx)("span",{className:"loading-line",style:{width:e.width,height:e.height}}));var i=window.setTimeout((function(){m()||o(a)}),3e4);return function(){clearTimeout(i)}}),[e.value,e.decimalScale,e.suffix]),c}},777:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c,s=a(48),n=a(47),i=a(105),r=a(28),o=a(9),l=n.a.div(c||(c=Object(s.a)(["\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n  }\n"])));function d(e){var t=e.text,a=e.id,c=void 0===a?Object(r.a)(t):a,s=e.tip,n=e.multiline,d=e.className,j=e.width,u=void 0===j?"auto":j,b=e.children;return Object(o.jsxs)(l,{className:d,children:[Object(o.jsx)("div",{className:"text","data-for":c,"data-tip":s,"data-event":Object(r.t)()?"click":void 0,children:t||b}),s&&Object(o.jsx)(i.a,{id:c,width:u,padding:"12",place:"bottom",overridePosition:function(e,t,a,c,s,n,i,r){var o=a.getBoundingClientRect(),l=c.getBoundingClientRect(),d=o.x,j=o.y,u=o.height,b=e.left,h=e.top;return(d=b+l.width>document.documentElement.clientWidth?b-l.width+o.width:b)<0&&(d=0),(j=h+l.height>=document.documentElement.clientHeight?h-l.height+u/2:h)<0&&(j=0),{top:j,left:d}},borderRadius:8,multiline:n})]})}},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c,s=a(7),n=a(48),i=a(47),r=a(8),o=a(9),l=i.a.div(c||(c=Object(n.a)(["\n    cursor: pointer;\n    width:","px;\n    height:","px;\n    display:flex;\n    .tab-left.inactive{\n      border-radius:0px 0px 4px 0px;\n    }\n    .tab-right.inactive{\n      border-radius:0px 0px 0px 4px;\n    }\n    .tab-left.active{\n      border-radius:0px 4px 0px 0px;\n      ",";\n      height:14px;\n    }\n    .tab-right.active{\n      border-radius:4px 0px 0px 0px;\n      ",";\n      height:14px;\n    }\n    .inactive,.active{\n      width:50%;\n      box-sizing: content-box;\n      padding: 15px 24px;\n      font-size:","px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .inactive{\n      background:",";\n      ","\n    }\n    .active {\n      color: ",";\n      background : ",";\n      ",";\n    }\n    .icon-tab{\n      margin-right:20px;\n      width:25px;\n      height:25px;\n    }\n  "])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.borderR}),(function(e){return e.borderL}),(function(e){return e.size}),(function(e){return e.inactiveBgColor}),(function(e){return e.borderB}),(function(e){return e.activeFontColor}),(function(e){return e.activeBgColor}),(function(e){return e.borderT}));function d(e){var t=e.tabSet,a=e.inactiveBgColor,c=e.activeBgColor,n=e.fixed,i=(e.icon,e.className),d=e.width,j=void 0===d?238:d,u=e.height,b=void 0===u?47:u,h=e.size,x=void 0===h?16:h,p=e.borderTop,v=void 0!==p&&p,m=e.borderBottom,O=void 0!==m&&m,f=e.divider,N=void 0!==f&&f,g=Object.keys(t),S=Object(r.useState)(g[0]),C=Object(s.a)(S,2),w=C[0],y=C[1],Q=t[w].style,E=v?"border-top:1px solid ".concat(t[w].borderColor):"border-top:0",T=O?"border-bottom:1px solid ".concat(t[w].borderColor):"border-bottom:0",k=N?"border-left:1px solid ".concat(t[w].borderColor):"border-left:0",A=N?"border-right:1px solid ".concat(t[w].borderColor):"border-right:0",D=t[w].fontColor?t[w].fontColor:"#FFFFFF";return Object(r.useEffect)((function(){var e=g.find((function(e){return t[e].actived}));e&&y(e)}),[t]),Object(o.jsxs)("div",{style:Q,className:i,children:[Object(o.jsx)(l,{className:"tab-header",width:j,height:b,activeFontColor:D,activeBgColor:c,inactiveBgColor:a,size:x,borderT:E,borderB:T,borderL:k,borderR:A,children:g.map((function(e){return Object(o.jsxs)("div",{className:"".concat(t[e].direction,e===w?" active":" inactive"),onClick:function(){return function(e){!n&&y(e)}(e)},children:[t[e].icon?Object(o.jsx)("img",{alt:"",className:"icon-tab",src:e===w?t[e].icon:t[e].inicon}):"","  ",e]},e)}))}),t[w].content]})}},805:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c,s=a(48),n=a(47),i=(a(8),a(9)),r=n.a.div(c||(c=Object(s.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function o(e){var t=e.startTimestamp,a=e.nowTimestamp,c=e.endTimestamp,s=parseInt((a-t)/(c-t)*100);return Object(i.jsx)("div",{className:"time-slider",children:Object(i.jsx)(r,{width:s})})}}}]);
//# sourceMappingURL=12.0a92edde.chunk.js.map