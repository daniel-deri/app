(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[11],{1e3:function(e,t,s){"use strict";s.p},1001:function(e,t,s){"use strict";t.a=s.p+"static/media/deri.a495df32.svg"},1002:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s(8),s(1e3);var a=s(1001),c=s(18);function r(e){var t=e.lang;return Object(c.jsx)("div",{className:"rewards-bnb-deri",children:Object(c.jsxs)("div",{className:"deri-total",children:[Object(c.jsx)("div",{className:"deri-title",children:t["transaction-sharing-pool"]}),Object(c.jsxs)("div",{className:"deri-num",children:[Object(c.jsx)("img",{src:a.a}),Object(c.jsx)("span",{children:"$ 1,000,000"})]})]})})}},1007:function(e,t,s){"use strict";var a=s(0),c=s.n(a),r=s(1),i=s(9),n=s(8),o=s(47),l=(s(620),s.p+"static/media/one.eb877df8.svg"),d=s.p+"static/media/two.2f5178e8.svg",u=s.p+"static/media/three.39e0d731.svg",h=s(999),j=(s(1e3),s(1001)),b=s(622),m=s(27),p=s(631),x=s(13),v=s(18);t.a=Object(o.b)("wallet","loading")(Object(o.c)((function(e){var t=e.wallet,s=e.lang,a=e.loading,o=Object(n.useState)(""),f=Object(i.a)(o,2),O=(f[0],f[1]),g=Object(n.useState)(""),N=Object(i.a)(g,2),y=N[0],S=N[1],C=Object(n.useState)(""),w=Object(i.a)(C,2),k=w[0],E=w[1],Q=Object(n.useState)(""),B=Object(i.a)(Q,2),A=B[0],T=B[1],P=Object(n.useState)(""),_=Object(i.a)(P,2),V=_[0],I=_[1],D=Object(n.useState)(""),R=Object(i.a)(D,2),M=(R[0],R[1],Object(n.useState)("")),F=Object(i.a)(M,2),L=(F[0],F[1],Object(n.useState)({})),q=Object(i.a)(L,2),X=q[0],U=q[1],G=Object(n.useState)([]),$=Object(i.a)(G,2),W=$[0],Y=$[1],Z=function(e){var t;switch(e){case 1:t="one";break;case 2:t="two";break;case 3:t="three";break;case 4:t="four";break;case 5:t="five";break;case 6:t="six";break;case 7:t="seven";break;case 8:t="eight";break;case 9:t="nine";break;case 10:t="ten"}return t},z=function(){var e=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.S)(t.detail.account);case 2:s=e.sent,E(s.score),T(s.feePaid),I(s.coef);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.R)(t.detail.account);case 2:(s=e.sent)&&U(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.T)(t.detail.account);case 2:s=e.sent,O(s.rewardBNB),S(s.rewardDERI);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.M)();case 2:t=e.sent,a.loaded(),t&&(t=t.map((function(e,s){var a={};return a.no=e.no,e.userAddr=Object(m.g)(e.userAddr),a.userAddr=e.userAddr,a.feesPaid=e.feePaid,a.avgCoeff=e.evgCoeff,a.score=e.score,a.rewardBNB=e.rewardBNB,a.progress="".concat(Z(e.no),"-progress progress-box"),a.progressSlider=e.score/t[0].score*100,a})),Y(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a.loading();var e;return e=window.setInterval((function(){K()}),3e4),K(),function(){e&&clearInterval(e)}}),[]),Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){t.isConnected()&&(H(),z(),J())}),3e4),t.isConnected()&&(H(),z(),J()),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(n.useEffect)((function(){W.length>=10?(document.getElementsByClassName("ten-progress")[0].style.width="".concat(W[9].progressSlider,"%"),document.getElementsByClassName("nine-progress")[0].style.width="".concat(W[8].progressSlider,"%"),document.getElementsByClassName("eight-progress")[0].style.width="".concat(W[7].progressSlider,"%"),document.getElementsByClassName("seven-progress")[0].style.width="".concat(W[6].progressSlider,"%"),document.getElementsByClassName("six-progress")[0].style.width="".concat(W[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(W[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(W[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(W[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%")):W.length>=9?(document.getElementsByClassName("nine-progress")[0].style.width="".concat(W[8].progressSlider,"%"),document.getElementsByClassName("eight-progress")[0].style.width="".concat(W[7].progressSlider,"%"),document.getElementsByClassName("seven-progress")[0].style.width="".concat(W[6].progressSlider,"%"),document.getElementsByClassName("six-progress")[0].style.width="".concat(W[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(W[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(W[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(W[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%")):W.length>=8?(document.getElementsByClassName("eight-progress")[0].style.width="".concat(W[7].progressSlider,"%"),document.getElementsByClassName("seven-progress")[0].style.width="".concat(W[6].progressSlider,"%"),document.getElementsByClassName("six-progress")[0].style.width="".concat(W[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(W[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(W[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(W[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%")):W.length>=7?(document.getElementsByClassName("seven-progress")[0].style.width="".concat(W[6].progressSlider,"%"),document.getElementsByClassName("six-progress")[0].style.width="".concat(W[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(W[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(W[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(W[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%")):W.length>=6?(document.getElementsByClassName("six-progress")[0].style.width="".concat(W[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(W[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(W[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(W[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%")):W.length>=5?(document.getElementsByClassName("five-progress")[0].style.width="".concat(W[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(W[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(W[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%")):W.length>=4?(document.getElementsByClassName("four-progress")[0].style.width="".concat(W[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(W[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%")):W.length>=3?(document.getElementsByClassName("three-progress")[0].style.width="".concat(W[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%")):W.length>=2&&(document.getElementsByClassName("two-progress")[0].style.width="".concat(W[1].progressSlider,"%"))}),[W]),Object(v.jsxs)("div",{className:"trading-top",children:[Object(v.jsx)("div",{className:"desktop-list",children:Object(v.jsxs)("div",{className:"trading-top-list",children:[Object(v.jsxs)("div",{className:"list",children:[Object(v.jsx)("div",{className:"list-title",children:s["top-ten-users"]}),Object(v.jsxs)("div",{className:"list-box",children:[Object(v.jsxs)("div",{className:"list-box-title",children:[Object(v.jsx)("span",{className:"no",children:s.no}),Object(v.jsx)("span",{className:"address",children:s["user-addr"]}),Object(v.jsx)("span",{className:"feespaid",children:s["fees-paid"]}),Object(v.jsx)("span",{className:"avgcoeff",children:s["avg-coeff"]}),Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{className:"score",tip:" estimated points based on the current weights",children:Object(v.jsx)("span",{className:"score-hover",children:s.score})})})]}),Object(v.jsx)("div",{className:"list-info",children:W.map((function(e,t){return Object(v.jsxs)("div",{className:"list-info-box",children:[Object(v.jsxs)("div",{className:"no",children:[1===e.no&&Object(v.jsx)("img",{src:l}),2===e.no&&Object(v.jsx)("img",{src:d}),3===e.no&&Object(v.jsx)("img",{src:u}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(v.jsx)("div",{className:"address",children:e.userAddr}),Object(v.jsxs)("div",{className:"feespaid",children:["$ ",Object(v.jsx)(b.a,{value:e.feesPaid,decimalScale:4,thousandSeparator:!0})]}),Object(v.jsx)("div",{className:"avgcoeff",children:Object(v.jsx)(b.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(v.jsx)("div",{className:"score",children:Object(v.jsx)(b.a,{value:e.score,decimalScale:2,thousandSeparator:!0})}),Object(v.jsx)("div",{className:"progress",children:Object(v.jsx)("div",{className:e.progress})})]},t)}))})]})]}),Object(v.jsxs)("div",{className:"your-rewards",children:[Object(v.jsxs)("div",{className:"your-estimated-rewards",children:[Object(v.jsx)("div",{className:"your-rewards-title",children:s["your-rstimated-rewards"]}),Object(v.jsx)("div",{className:"your-rewards-info",children:Object(v.jsxs)("div",{className:"your-deri",children:[Object(v.jsx)("img",{src:j.a}),Object(v.jsxs)("span",{className:"span",children:["$ ",y?Object(v.jsx)(b.a,{decimalScale:2,value:y,thousandSeparator:!0}):"--"," "]})]})})]}),Object(v.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(v.jsxs)("div",{className:"your-score",children:[Object(v.jsx)("div",{className:"your-score-title",children:Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{tip:"estimated points based on your current weights",children:s["your-scored"]})})}),Object(v.jsx)("div",{className:"your-score-num",children:k?Object(v.jsx)(b.a,{value:k,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(v.jsxs)("div",{className:"your-fee",children:[Object(v.jsx)("div",{className:"your-fee-title",children:Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC",children:s["your-fees-paid"]})})}),Object(v.jsxs)("div",{className:"your-fee-num",children:["$  ",A?Object(v.jsx)(b.a,{value:A,decimalScale:4,thousandSeparator:!0}):"--"]})]}),Object(v.jsxs)("div",{className:"your-coeff",children:[Object(v.jsx)("div",{className:"your-coeff-title",children:Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{tip:s["boosting-factor"],children:s["your-coeff"]})})}),Object(v.jsx)("div",{className:"your-coeff-num",children:V?Object(v.jsx)(b.a,{value:V,decimalScale:4,thousandSeparator:!0}):"--"})]})]}),Object(v.jsxs)("div",{className:"raise-score",children:[Object(v.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(v.jsxs)("div",{className:"button-link",children:[Object(v.jsx)(p.a,{block:!1,tip:s["staking-hover"],children:Object(v.jsx)("a",{tip:s["staking-hover"],href:"https://app.deri.finance/?locale=en#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:s.staking})}),Object(v.jsx)(p.a,{block:!1,tip:s["futures-hover"],children:Object(v.jsx)("a",{tip:s["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:s.futures})}),Object(v.jsx)(p.a,{block:!1,tip:s["options-hover"],children:Object(v.jsx)("a",{tip:s["options-hover"],href:"https://app.deri.finance/#/options/pro",children:s.options})})]}),Object(v.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share\xa0",Object(v.jsx)(p.a,{block:!1,tip:s["the-quater-points"],children:Object(v.jsx)("span",{className:"des-tip",tip:s["the-quarter-points"],children:"this quarter's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(v.jsx)(p.a,{block:!1,tip:s["boosting-factor"],children:Object(v.jsx)("span",{className:"des-tip",tip:s["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(v.jsx)("div",{className:"total-your-contrib",children:Object(v.jsxs)("div",{className:"your-contrib",children:[Object(v.jsxs)("div",{className:"stage",children:[Object(v.jsx)("div",{className:"stage-title"}),Object(v.jsx)("div",{className:"stage-title",children:"1st"}),Object(v.jsx)("div",{className:"stage-title",children:"2nd"}),Object(v.jsx)("div",{className:"stage-title",children:"3rd"}),Object(v.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(v.jsxs)("div",{className:"total-score-box",children:[Object(v.jsx)("div",{className:"total-score",children:"Total Score"}),Object(v.jsx)("div",{className:"total-score",children:X.Q1Contrib?Object(v.jsx)(b.a,{value:X.Q1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"total-score",children:X.Q2Contrib?Object(v.jsx)(b.a,{value:X.Q2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"total-score",children:X.Q3Contrib&&"0"!==X.Q3Contrib?Object(v.jsx)(b.a,{value:X.Q3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"total-score",children:X.Q4Contrib&&"0"!==X.Q3Contrib?Object(v.jsx)(b.a,{value:X.Q4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(v.jsxs)("div",{className:"your-score-box",children:[Object(v.jsx)("div",{className:"your-score",children:"Your Score"}),Object(v.jsx)("div",{className:"your-score",children:X.userQ1Contrib?Object(v.jsx)(b.a,{value:X.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"your-score",children:X.userQ2Contrib?Object(v.jsx)(b.a,{value:X.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"your-score",children:X.userQ3Contrib&&"0"!==X.Q3Contrib?Object(v.jsx)(b.a,{value:X.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"your-score",children:X.userQ4Contrib&&"0"!==X.Q4Contrib?Object(v.jsx)(b.a,{value:X.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(v.jsxs)("div",{className:"your-point-box",children:[Object(v.jsx)("div",{className:"your-point",children:"Your Points"}),Object(v.jsx)("div",{className:"your-point",children:X.userQ1Point?Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{className:"point-hover",tip:X.userQ1Point?" = (".concat(X.userQ1Contrib," / ").concat(X.Q1Contrib,") * 10,000"):"",children:Object(v.jsx)(b.a,{value:X.userQ1Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(v.jsx)("div",{className:"your-point",children:X.userQ2Point?Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{className:"point-hover",tip:X.userQ1Point?" = (".concat(X.userQ2Contrib," / ").concat(X.Q1Contrib,") * 20,000"):"",children:Object(v.jsx)(b.a,{value:X.userQ2Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(v.jsx)("div",{className:"your-point",children:X.userQ3Point&&"0"!==X.Q3Contrib?Object(v.jsx)(b.a,{value:X.userQ3Point,decimalScale:2,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"your-point",children:X.userQ4Point&&"0"!==X.Q4Contrib?Object(v.jsx)(b.a,{value:X.userQ4Point,decimalScale:2,thousandSeparator:!0}):"--"})]})]})})]})]})}),Object(v.jsx)("div",{className:"mobile-list",children:Object(v.jsx)("div",{className:"trading-top-list",children:Object(v.jsxs)("div",{className:"your-rewards",children:[Object(v.jsxs)("div",{className:"your-estimated-rewards",children:[Object(v.jsx)("div",{className:"your-rewards-title",children:s["your-rstimated-rewards"]}),Object(v.jsx)("div",{className:"your-rewards-info",children:Object(v.jsxs)("div",{className:"your-deri",children:[Object(v.jsx)("img",{src:j.a}),Object(v.jsxs)("span",{className:"span",children:[" $ ",y?Object(v.jsx)(b.a,{value:y,thousandSeparator:!0,decimalScale:2}):"--"," "]})]})})]}),Object(v.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(v.jsxs)("div",{className:"your-score",children:[Object(v.jsx)("div",{className:"your-score-title",children:Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{tip:"estimated points based on your current weights",children:s["your-scored"]})})}),Object(v.jsx)("div",{className:"your-score-num",children:k?Object(v.jsx)(b.a,{decimalScale:2,value:k,thousandSeparator:!0}):"--"})]}),Object(v.jsxs)("div",{className:"your-fee",children:[Object(v.jsx)("div",{className:"your-fee-title",children:Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC",children:s["your-fees-paid"]})})}),Object(v.jsxs)("div",{className:"your-fee-num",children:["$  ",A?Object(v.jsx)(b.a,{value:A,decimalScale:4,thousandSeparator:!0}):"--"]})]}),Object(v.jsxs)("div",{className:"your-coeff",children:[Object(v.jsx)("div",{className:"your-coeff-title",children:Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{tip:s["boosting-factor"],children:s["your-coeff"]})})}),Object(v.jsx)("div",{className:"your-coeff-num",children:V?Object(v.jsx)(b.a,{decimalScale:2,value:V,thousandSeparator:!0}):"--"})]})]}),Object(v.jsx)("div",{className:"total-your-contrib",children:Object(v.jsxs)("div",{className:"your-contrib",children:[Object(v.jsxs)("div",{className:"stage",children:[Object(v.jsx)("div",{className:"stage-title"}),Object(v.jsx)("div",{className:"stage-title",children:"1st"}),Object(v.jsx)("div",{className:"stage-title",children:"2nd"}),Object(v.jsx)("div",{className:"stage-title",children:"3rd"}),Object(v.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(v.jsxs)("div",{className:"total-score-box",children:[Object(v.jsx)("div",{className:"total-score",children:"Total Score"}),Object(v.jsx)("div",{className:"total-score",children:X.Q1Contrib?Object(v.jsx)(b.a,{value:X.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"total-score",children:X.Q2Contrib?Object(v.jsx)(b.a,{value:X.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"total-score",children:X.Q3Contrib&&"0"!==X.Q3Contrib?Object(v.jsx)(b.a,{value:X.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"total-score",children:X.Q4Contrib&&"0"!==X.Q3Contrib?Object(v.jsx)(b.a,{value:X.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(v.jsxs)("div",{className:"your-score-box",children:[Object(v.jsx)("div",{className:"your-score",children:"Your Score"}),Object(v.jsx)("div",{className:"your-score",children:X.userQ1Contrib?Object(v.jsx)(b.a,{value:X.userQ1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"your-score",children:X.userQ2Contrib?Object(v.jsx)(b.a,{value:X.userQ2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"your-score",children:X.userQ3Contrib&&"0"!==X.Q3Contrib?Object(v.jsx)(b.a,{value:X.userQ3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"your-score",children:X.userQ4Contrib&&"0"!==X.Q4Contrib?Object(v.jsx)(b.a,{value:X.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(v.jsxs)("div",{className:"your-point-box",children:[Object(v.jsx)("div",{className:"your-point",children:"Your Points"}),Object(v.jsx)("div",{className:"your-point",children:X.userQ1Point?Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{className:"point-hover",tip:X.userQ1Point?"= (".concat(X.userQ1Contrib," / ").concat(X.Q1Contrib,") * 10,000"):"",children:Object(v.jsx)(b.a,{value:X.userQ1Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(v.jsx)("div",{className:"your-point",children:X.userQ2Point?Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{className:"point-hover",tip:X.userQ1Point?"= (".concat(X.userQ2Contrib," / ").concat(X.Q1Contrib,") * 20,000"):"",children:Object(v.jsx)(b.a,{value:X.userQ2Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(v.jsx)("div",{className:"your-point",children:X.userQ3Point&&"0"!==X.Q3Contrib?Object(v.jsx)(b.a,{value:X.userQ3Point,decimalScale:0,thousandSeparator:!0}):"--"}),Object(v.jsx)("div",{className:"your-point",children:X.userQ4Point&&"0"!==X.Q4Contrib?Object(v.jsx)(b.a,{value:X.userQ4Point,decimalScale:0,thousandSeparator:!0}):"--"})]})]})}),Object(v.jsxs)("div",{className:"raise-score",children:[Object(v.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(v.jsxs)("div",{className:"button-link",children:[Object(v.jsx)(p.a,{block:!1,tip:s["staking-hover"],children:Object(v.jsx)("a",{tip:s["staking-hover"],href:"https://app.deri.finance/#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:s.staking})}),Object(v.jsx)(p.a,{block:!1,tip:s["futures-hover"],children:Object(v.jsx)("a",{tip:s["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:s.futures})}),Object(v.jsx)(p.a,{block:!1,tip:s["options-hover"],children:Object(v.jsx)("a",{tip:s["options-hover"],href:"https://app.deri.finance/#/options/pro",children:s.options})})]}),Object(v.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share\xa0",Object(v.jsx)(p.a,{block:!1,tip:s["the-quater-points"],children:Object(v.jsx)("span",{className:"des-tip",tip:s["the-quater-points"],children:"this quarter's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(v.jsx)(p.a,{block:!1,tip:s["boosting-factor"],children:Object(v.jsx)("span",{className:"des-tip",tip:s["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(v.jsx)("div",{className:"totalpoints",children:Object(v.jsxs)("div",{className:"dial",children:[Object(v.jsxs)("div",{className:"total-points",children:[Object(v.jsx)("span",{children:s.totalpoints}),Object(v.jsx)("span",{children:" 110,000 "})]}),Object(v.jsxs)("div",{className:"dial-box",children:[Object(v.jsxs)("div",{className:"dial-box-info",children:[Object(v.jsx)("div",{className:"dial-box-info-title",children:s["the-first"]}),Object(v.jsx)("div",{className:"dial-box-info-time",children:s["the-first-time"]}),Object(v.jsx)("div",{className:"dial-box-info-points",children:s["the-first-points"]})]}),Object(v.jsx)("div",{className:"add",children:Object(v.jsx)("img",{src:h.a})}),Object(v.jsxs)("div",{className:"dial-box-info",children:[Object(v.jsx)("div",{className:"dial-box-info-title",children:s["the-second"]}),Object(v.jsx)("div",{className:"dial-box-info-time",children:s["the-second-time"]}),Object(v.jsx)("div",{className:"dial-box-info-points",children:s["the-second-points"]})]}),Object(v.jsx)("div",{className:"add",children:Object(v.jsx)("img",{src:h.a})}),Object(v.jsxs)("div",{className:"dial-box-info",children:[Object(v.jsx)("div",{className:"dial-box-info-title",children:s["the-third"]}),Object(v.jsx)("div",{className:"dial-box-info-time",children:s["the-third-time"]}),Object(v.jsx)("div",{className:"dial-box-info-points",children:s["the-third-points"]})]}),Object(v.jsx)("div",{className:"add",children:Object(v.jsx)("img",{src:h.a})}),Object(v.jsxs)("div",{className:"dial-box-info",children:[Object(v.jsx)("div",{className:"dial-box-info-title fourth",children:s["the-fourth"]}),Object(v.jsx)("div",{className:"dial-box-info-time",children:s["the-fourth-time"]}),Object(v.jsx)("div",{className:"dial-box-info-points",children:s["the-fourth-points"]})]})]})]})}),Object(v.jsxs)("div",{className:"list",children:[Object(v.jsx)("div",{className:"list-title",children:s["top-ten-users"]}),Object(v.jsxs)("div",{className:"list-box",children:[Object(v.jsxs)("div",{className:"list-box-title",children:[Object(v.jsx)("span",{className:"no",children:s.no}),Object(v.jsx)("span",{className:"address",children:s["user-addr"]}),Object(v.jsx)("span",{className:"feespaid",children:s["fees-paid"]}),Object(v.jsx)(p.a,{block:!1,children:Object(v.jsx)("span",{className:"score score-hover",tip:" estimated points based on the current weights",children:s.score})})]}),Object(v.jsx)("div",{className:"list-info",children:W.map((function(e,t){return Object(v.jsxs)("div",{className:"list-info-box",children:[Object(v.jsxs)("div",{className:"no",children:[1===e.no&&Object(v.jsx)("img",{src:l}),2===e.no&&Object(v.jsx)("img",{src:d}),3===e.no&&Object(v.jsx)("img",{src:u}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(v.jsx)("div",{className:"address",children:e.userAddr}),Object(v.jsxs)("div",{className:"feespaid",children:["$ ",Object(v.jsx)(b.a,{value:e.feesPaid,decimalScale:4,thousandSeparator:!0})]}),Object(v.jsx)("div",{className:"score",children:Object(v.jsx)(b.a,{decimalScale:2,value:e.score,thousandSeparator:!0})})]},t)}))})]})]})]})})}),Object(v.jsx)("div",{className:"activity-rules",children:Object(v.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://deri-protocol.medium.com/trade-to-earn-with-deri-protocol-on-bsc-1cedc8f98e95",children:s["detailed-rules"]})})]})})))},1010:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a=s(8),c=(s(720),s(1304),s(42)),r=s(2),i=s(3),n=function(){function e(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flipdown",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(Object(r.a)(this,e),"number"!==typeof t)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(Object(c.a)(t)," instead."));"object"===Object(c.a)(s)&&(a=s,s="flipdown"),this.version="0.3.2",this.initialised=!1,this.now=this._getTime(),this.epoch=t,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(s),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(a),this._setOptions(),console.log("FlipDown ".concat(this.version," (Theme: ").concat(this.opts.theme,")"))}return Object(i.a)(e,[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(e){return this.hasEndedCallback=function(){e(),this.hasEndedCallback=null},this}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}},{key:"_parseOptions",value:function(e){var t=["Days","Hours","Minutes","Seconds"];return e.headings&&4===e.headings.length&&(t=e.headings),{theme:e.hasOwnProperty("theme")?e.theme:"dark",headings:t}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var e=this.daysremaining<=2?2:this.daysremaining,t=0;t<e+6;t++)this.rotors.push(this._createRotor(0));var s=[];for(t=0;t<e;t++)s.push(this.rotors[t]);this.element.appendChild(this._createRotorGroup(s,0));var a=e;for(t=0;t<3;t++){for(var c=[],r=0;r<2;r++)c.push(this.rotors[a]),a++;this.element.appendChild(this._createRotorGroup(c,t+1))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(e,t){var s=document.createElement("div");s.className="rotor-group";var a=document.createElement("div");return a.className="rotor-group-heading",a.setAttribute("data-before",this.opts.headings[t]),l(s,e),s.appendChild(a),s}},{key:"_createRotor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.createElement("div"),s=document.createElement("div"),a=document.createElement("figure"),c=document.createElement("figure"),r=document.createElement("div"),i=document.createElement("div");return t.className="rotor",s.className="rotor-leaf",a.className="rotor-leaf-rear",c.className="rotor-leaf-front",r.className="rotor-top",i.className="rotor-bottom",a.textContent=e,r.textContent=e,i.textContent=e,l(t,[s,r,i]),l(s,[a,c]),t}},{key:"_tick",value:function(){this.now=this._getTime();var e=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(e/86400),e-=86400*this.clockValues.d,this.clockValues.h=Math.floor(e/3600),e-=3600*this.clockValues.h,this.clockValues.m=Math.floor(e/60),e-=60*this.clockValues.m,this.clockValues.s=Math.floor(e),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function s(){var e=this;this.rotorTop.forEach((function(t,s){t.textContent!=e.clockValuesAsString[s]&&(t.textContent=e.clockValuesAsString[s])}))}function a(){var e=this;this.rotorLeafRear.forEach((function(t,s){if(t.textContent!=e.clockValuesAsString[s]){t.textContent=e.clockValuesAsString[s],t.parentElement.classList.add("flipped");var a=setInterval(function(){t.parentElement.classList.remove("flipped"),clearInterval(a)}.bind(e),500)}}))}this.clockStrings.d=o(this.clockValues.d,2),this.clockStrings.h=o(this.clockValues.h,2),this.clockStrings.m=o(this.clockValues.m,2),this.clockStrings.s=o(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),this.rotorBottom.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),t?(s.call(this),a.call(this)):(setTimeout(s.bind(this),500),setTimeout(a.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}]),e}();function o(e,t){return(e=e.toString()).length<t?o("0"+e,t):e}function l(e,t){t.forEach((function(t){e.appendChild(t)}))}var d=s(18);function u(e){var t=e.lastTimestamp,s=(e.lang,e.onEnd);return Object(a.useEffect)((function(){new n(t,{theme:"light"}).start().ifEnded((function(){s&&s()}))}),[t]),Object(d.jsxs)("div",{className:"count-down",children:[Object(d.jsx)("div",{className:"tip",children:"Time to Start"}),Object(d.jsx)("div",{id:"flipdown",class:"flipdown"})]})}},1304:function(e,t,s){},620:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(0),c=s.n(a),r=s(1),i=s(9),n=s(8),o=s(18);function l(e){var t=e.btnText,s=e.className,a=e.disabled,l=e.click,d=e.afterClick,u=e.checkApprove,h=e.wallet,j=e.spec,b=e.lang,m=Object(n.useState)(a?"disabled":"enabled"),p=Object(i.a)(m,2),x=p[0],v=p[1],f=Object(n.useState)(!0),O=Object(i.a)(f,2),g=O[0],N=O[1],y=Object(n.useState)(!1),S=Object(i.a)(y,2),C=S[0],w=S[1],k=Object(n.useState)(t),E=Object(i.a)(k,2),Q=E[0],B=E[1],A=Object(n.useRef)(null),T=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===x){e.next=2;break}return e.abrupt("return");case 2:return P(),e.next=5,l();case 5:e.sent&&d&&d(),_();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){v("disabled"),w(!0),A.current&&(A.current.style.display="inline-block")},_=function(){A.current&&(A.current.style.display="none"),v("enabled"),w(!1)},V=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&h&&h.detail.account)){e.next=5;break}return e.next=3,h.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(),e.next=3,h.approve(j.pool,j.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(b["approve-failed"])),_();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return V(),function(){}}),[h,j,u]),Object(n.useEffect)((function(){return t&&B(t),function(){}}),[t]),Object(o.jsxs)("button",{className:s,onClick:function(){g?T():I()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),C?b.pending:g?Q:b.approve]})}},622:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a=s(53),c=s(42),r=s(628),i=s(9),n=s(8),o=s(627),l=s(18),d=["allowZero"];function u(e){var t=Object(n.useState)(Object(l.jsx)("span",{className:"loading-line"})),s=Object(i.a)(t,2),u=s[0],h=s[1];return Object(n.useEffect)((function(){var t=e.allowZero,s=Object(r.a)(e,d);return("object"!==Object(c.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&h(Object(l.jsx)(o.a,Object(a.a)(Object(a.a)({},s),{},{displayType:"text"}))),function(){}}),[e.value]),u}},631:function(e,t,s){"use strict";var a=s(8),c=s(18);t.a=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var s=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var a="hover-box-".concat((new Date).getTime());s=document.body.querySelector("#".concat(a)),(s=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(s),s.innerText=t,s.id=a,s.style.display="block";var c=e.currentTarget.getBoundingClientRect();if(s.style.top="".concat(c.y+c.height+window.document.documentElement.scrollTop,"px"),s.offsetWidth+e.pageX>window.screen.width)if(e.pageX-s.offsetWidth>=0)s.style.left="".concat(e.pageX-s.offsetWidth,"px");else{var r=e.pageX-s.offsetWidth/2>0?e.pageX-s.offsetWidth/2:0;s.style.left="".concat(r,"px")}else s.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){s&&s.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(c.jsx)("div",{ref:t,children:e.children}):Object(c.jsx)("span",{ref:t,children:e.children})}},999:function(e,t,s){"use strict";t.a=s.p+"static/media/add.2af0f559.svg"}}]);
//# sourceMappingURL=11.5c980540.chunk.js.map