(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[8],{1157:function(e,t,s){},617:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var n=s(0),i=s.n(n),a=s(1),r=s(9),c=s(8),o=s(18);function l(e){var t=e.btnText,s=e.className,n=e.disabled,l=e.click,d=e.afterClick,u=e.checkApprove,h=e.wallet,p=e.spec,b=e.lang,f=Object(c.useState)(n?"disabled":"enabled"),j=Object(r.a)(f,2),m=j[0],v=j[1],x=Object(c.useState)(!0),O=Object(r.a)(x,2),g=O[0],k=O[1],N=Object(c.useState)(!1),w=Object(r.a)(N,2),y=w[0],E=w[1],S=Object(c.useState)(t),C=Object(r.a)(S,2),A=C[0],T=C[1],_=Object(c.useRef)(null),V=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return B(),e.next=5,l();case 5:e.sent&&d&&d(),D();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){v("disabled"),E(!0),_.current&&(_.current.style.display="inline-block")},D=function(){_.current&&(_.current.style.display="none"),v("enabled"),E(!1)},I=function(){var e=Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&h&&h.detail.account)){e.next=5;break}return e.next=3,h.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,k(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(),e.next=3,h.approve(p.pool,p.bTokenId);case 3:e.sent.success?k(!0):(k(!1),alert(b["approve-failed"])),D();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return I(),function(){}}),[h,p,u]),Object(c.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(o.jsxs)("button",{className:s,onClick:function(){g?V():R()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:_,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),y?b.pending:g?A:b.approve]})}},619:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var n=s(53),i=s(42),a=s(621),r=s(9),c=s(8),o=s(620),l=s(18),d=["allowZero"];function u(e){var t=Object(c.useState)(Object(l.jsx)("span",{className:"loading-line"})),s=Object(r.a)(t,2),u=s[0],h=s[1];return Object(c.useEffect)((function(){var t=e.allowZero,s=Object(a.a)(e,d);return("object"!==Object(i.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&h(Object(l.jsx)(o.a,Object(n.a)(Object(n.a)({},s),{},{displayType:"text"}))),function(){}}),[e.value]),u}},622:function(e,t,s){"use strict";var n=s(8),i=s(18);t.a=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var s=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var n="hover-box-".concat((new Date).getTime());s=document.body.querySelector("#".concat(n)),(s=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(s),s.innerText=t,s.id=n,s.style.display="block";var i=e.currentTarget.getBoundingClientRect();if(s.style.top="".concat(i.y+i.height+window.document.documentElement.scrollTop,"px"),s.offsetWidth+e.pageX>window.screen.width)if(e.pageX-s.offsetWidth>=0)s.style.left="".concat(e.pageX-s.offsetWidth,"px");else{var a=e.pageX-s.offsetWidth/2>0?e.pageX-s.offsetWidth/2:0;s.style.left="".concat(a,"px")}else s.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){s&&s.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(i.jsx)("div",{ref:t,children:e.children}):Object(i.jsx)("span",{ref:t,children:e.children})}},827:function(e,t,s){"use strict";t.a=s.p+"static/media/add.2af0f559.svg"},828:function(e,t,s){"use strict";s.p},829:function(e,t,s){"use strict";t.a=s.p+"static/media/deri.a495df32.svg"},830:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));s(8),s(828);var n=s(829),i=s(18);function a(e){var t=e.lang;return Object(i.jsx)("div",{className:"rewards-bnb-deri",children:Object(i.jsxs)("div",{className:"deri-total",children:[Object(i.jsx)("div",{className:"deri-title",children:t["transaction-sharing-pool"]}),Object(i.jsxs)("div",{className:"deri-num",children:[Object(i.jsx)("img",{src:n.a}),Object(i.jsx)("span",{children:"$ 1,000,000"})]})]})})}},835:function(e,t,s){"use strict";var n=s(0),i=s.n(n),a=s(1),r=s(9),c=s(8),o=s(47),l=(s(617),s.p,s.p,s.p,s(827)),d=(s(828),s(829)),u=(s(619),s(27)),h=s(622),p=s(13),b=s(18);t.a=Object(o.b)("wallet")(Object(o.c)((function(e){var t=e.wallet,s=e.lang,n=Object(c.useState)(""),o=Object(r.a)(n,2),f=(o[0],o[1]),j=Object(c.useState)(""),m=Object(r.a)(j,2),v=(m[0],m[1]),x=Object(c.useState)(""),O=Object(r.a)(x,2),g=(O[0],O[1]),k=Object(c.useState)(""),N=Object(r.a)(k,2),w=(N[0],N[1]),y=Object(c.useState)(""),E=Object(r.a)(y,2),S=(E[0],E[1]),C=Object(c.useState)(""),A=Object(r.a)(C,2),T=(A[0],A[1]),_=Object(c.useState)(""),V=Object(r.a)(_,2),B=(V[0],V[1]),D=Object(c.useState)([]),I=Object(r.a)(D,2),R=(I[0],I[1]),L=function(e){var t;switch(e){case 1:t="one";break;case 2:t="two";break;case 3:t="three";break;case 4:t="four";break;case 5:t="five";break;case 6:t="six";break;case 7:t="seven";break;case 8:t="eight";break;case 9:t="nine";break;case 10:t="ten"}return t},M=function(){var e=Object(a.a)(i.a.mark((function e(){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.S)(t.detail.account);case 2:s=e.sent,g(s.score),w(s.feePaid),S(s.coef);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(a.a)(i.a.mark((function e(){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.R)(t.detail.account);case 2:s=e.sent,T(s.userContrib),B(s.totalContrib);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(a.a)(i.a.mark((function e(){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.T)(t.detail.account);case 2:s=e.sent,f(s.rewardBNB),v(s.rewardDERI);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.M)();case 2:(t=e.sent)&&(t=t.map((function(e,s){var n={};return n.no=e.no,e.userAddr=Object(u.g)(e.userAddr),n.userAddr=e.userAddr,n.feesPaid=e.feePaid,n.avgCoeff=e.evgCoeff,n.score=e.score,n.rewardBNB=e.rewardBNB,n.progress="".concat(L(e.no),"-progress progress-box"),n.progressSlider=e.score/t[0].score*100,n})),R(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e;return e=window.setInterval((function(){X()}),6e4),X(),function(){e&&clearInterval(e)}}),[]),Object(c.useEffect)((function(){var e;return e=window.setInterval((function(){t.isConnected()&&(q(),M(),F())}),6e4),t.isConnected()&&(q(),M(),F()),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(b.jsxs)("div",{className:"trading-top",children:[Object(b.jsx)("div",{className:"desktop-list",children:Object(b.jsx)("div",{className:"trading-top-list",children:Object(b.jsxs)("div",{className:"your-rewards",children:[Object(b.jsxs)("div",{className:"deri-total",children:[Object(b.jsx)("div",{className:"deri-title",children:s["transaction-sharing-pool"]}),Object(b.jsxs)("div",{className:"deri-num",children:[Object(b.jsx)("img",{src:d.a}),Object(b.jsx)("span",{children:"$ 1,000,000"})]})]}),Object(b.jsxs)("div",{className:"raise-score",children:[Object(b.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(b.jsxs)("div",{className:"button-link",children:[Object(b.jsx)(h.a,{block:!1,tip:s["staking-hover"],children:Object(b.jsx)("a",{tip:s["staking-hover"],href:"https://app.deri.finance/?locale=en#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:s.staking})}),Object(b.jsx)(h.a,{block:!1,tip:s["futures-hover"],children:Object(b.jsx)("a",{tip:s["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:s.futures})}),Object(b.jsx)(h.a,{block:!1,tip:s["options-hover"],children:Object(b.jsx)("a",{tip:s["options-hover"],href:"https://app.deri.finance/#/options/pro",children:s.options})})]}),Object(b.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quater, all the participating traders share\xa0",Object(b.jsx)(h.a,{block:!1,tip:s["the-quater-points"],children:Object(b.jsx)("span",{className:"des-tip",tip:s["the-quater-points"],children:"this quater's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(b.jsx)(h.a,{block:!1,tip:s["boosting-factor"],children:Object(b.jsx)("span",{className:"des-tip",tip:s["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(b.jsx)("div",{className:"total-your-contrib",children:Object(b.jsxs)("div",{className:"total-contrib",children:[Object(b.jsx)("div",{className:"total-your-contrib-title"}),Object(b.jsx)("div",{className:"total-your-contrib-num"})]})})]})})}),Object(b.jsx)("div",{className:"mobile-list",children:Object(b.jsx)("div",{className:"trading-top-list",children:Object(b.jsxs)("div",{className:"your-rewards",children:[Object(b.jsxs)("div",{className:"raise-score",children:[Object(b.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(b.jsxs)("div",{className:"button-link",children:[Object(b.jsx)(h.a,{block:!1,tip:s["staking-hover"],children:Object(b.jsx)("a",{tip:s["staking-hover"],href:"https://app.deri.finance/#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:s.staking})}),Object(b.jsx)(h.a,{block:!1,tip:s["futures-hover"],children:Object(b.jsx)("a",{tip:s["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:s.futures})}),Object(b.jsx)(h.a,{block:!1,tip:s["options-hover"],children:Object(b.jsx)("a",{tip:s["options-hover"],href:"https://app.deri.finance/#/options/pro",children:s.options})})]}),Object(b.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quater, all the participating traders share\xa0",Object(b.jsx)(h.a,{block:!1,tip:s["the-quater-points"],children:Object(b.jsx)("span",{className:"des-tip",tip:s["the-quater-points"],children:"this quater's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(b.jsx)(h.a,{block:!1,tip:s["boosting-factor"],children:Object(b.jsx)("span",{className:"des-tip",tip:s["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(b.jsx)("div",{className:"totalpoints",children:Object(b.jsxs)("div",{className:"dial",children:[Object(b.jsxs)("div",{className:"total-points",children:[Object(b.jsx)("span",{children:s.totalpoints}),Object(b.jsx)("span",{children:" 110,000 "})]}),Object(b.jsxs)("div",{className:"dial-box",children:[Object(b.jsxs)("div",{className:"dial-box-info",children:[Object(b.jsx)("div",{className:"dial-box-info-title",children:s["the-first"]}),Object(b.jsx)("div",{className:"dial-box-info-time",children:s["the-first-time"]}),Object(b.jsx)("div",{className:"dial-box-info-points",children:s["the-first-points"]})]}),Object(b.jsx)("div",{className:"add",children:Object(b.jsx)("img",{src:l.a})}),Object(b.jsxs)("div",{className:"dial-box-info",children:[Object(b.jsx)("div",{className:"dial-box-info-title",children:s["the-second"]}),Object(b.jsx)("div",{className:"dial-box-info-time",children:s["the-second-time"]}),Object(b.jsx)("div",{className:"dial-box-info-points",children:s["the-second-points"]})]}),Object(b.jsx)("div",{className:"add",children:Object(b.jsx)("img",{src:l.a})}),Object(b.jsxs)("div",{className:"dial-box-info",children:[Object(b.jsx)("div",{className:"dial-box-info-title",children:s["the-third"]}),Object(b.jsx)("div",{className:"dial-box-info-time",children:s["the-third-time"]}),Object(b.jsx)("div",{className:"dial-box-info-points",children:s["the-third-points"]})]}),Object(b.jsx)("div",{className:"add",children:Object(b.jsx)("img",{src:l.a})}),Object(b.jsxs)("div",{className:"dial-box-info",children:[Object(b.jsx)("div",{className:"dial-box-info-title fourth",children:s["the-fourth"]}),Object(b.jsx)("div",{className:"dial-box-info-time",children:s["the-fourth-time"]}),Object(b.jsx)("div",{className:"dial-box-info-points",children:s["the-fourth-points"]})]})]})]})})]})})})]})})))},838:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var n=s(8),i=(s(664),s(1157),s(42)),a=s(2),r=s(3),c=function(){function e(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flipdown",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(Object(a.a)(this,e),"number"!==typeof t)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(Object(i.a)(t)," instead."));"object"===Object(i.a)(s)&&(n=s,s="flipdown"),this.version="0.3.2",this.initialised=!1,this.now=this._getTime(),this.epoch=t,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(s),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(n),this._setOptions(),console.log("FlipDown ".concat(this.version," (Theme: ").concat(this.opts.theme,")"))}return Object(r.a)(e,[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(e){return this.hasEndedCallback=function(){e(),this.hasEndedCallback=null},this}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}},{key:"_parseOptions",value:function(e){var t=["Days","Hours","Minutes","Seconds"];return e.headings&&4===e.headings.length&&(t=e.headings),{theme:e.hasOwnProperty("theme")?e.theme:"dark",headings:t}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var e=this.daysremaining<=2?2:this.daysremaining,t=0;t<e+6;t++)this.rotors.push(this._createRotor(0));var s=[];for(t=0;t<e;t++)s.push(this.rotors[t]);this.element.appendChild(this._createRotorGroup(s,0));var n=e;for(t=0;t<3;t++){for(var i=[],a=0;a<2;a++)i.push(this.rotors[n]),n++;this.element.appendChild(this._createRotorGroup(i,t+1))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(e,t){var s=document.createElement("div");s.className="rotor-group";var n=document.createElement("div");return n.className="rotor-group-heading",n.setAttribute("data-before",this.opts.headings[t]),l(s,e),s.appendChild(n),s}},{key:"_createRotor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.createElement("div"),s=document.createElement("div"),n=document.createElement("figure"),i=document.createElement("figure"),a=document.createElement("div"),r=document.createElement("div");return t.className="rotor",s.className="rotor-leaf",n.className="rotor-leaf-rear",i.className="rotor-leaf-front",a.className="rotor-top",r.className="rotor-bottom",n.textContent=e,a.textContent=e,r.textContent=e,l(t,[s,a,r]),l(s,[n,i]),t}},{key:"_tick",value:function(){this.now=this._getTime();var e=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(e/86400),e-=86400*this.clockValues.d,this.clockValues.h=Math.floor(e/3600),e-=3600*this.clockValues.h,this.clockValues.m=Math.floor(e/60),e-=60*this.clockValues.m,this.clockValues.s=Math.floor(e),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function s(){var e=this;this.rotorTop.forEach((function(t,s){t.textContent!=e.clockValuesAsString[s]&&(t.textContent=e.clockValuesAsString[s])}))}function n(){var e=this;this.rotorLeafRear.forEach((function(t,s){if(t.textContent!=e.clockValuesAsString[s]){t.textContent=e.clockValuesAsString[s],t.parentElement.classList.add("flipped");var n=setInterval(function(){t.parentElement.classList.remove("flipped"),clearInterval(n)}.bind(e),500)}}))}this.clockStrings.d=o(this.clockValues.d,2),this.clockStrings.h=o(this.clockValues.h,2),this.clockStrings.m=o(this.clockValues.m,2),this.clockStrings.s=o(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),this.rotorBottom.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),t?(s.call(this),n.call(this)):(setTimeout(s.bind(this),500),setTimeout(n.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}]),e}();function o(e,t){return(e=e.toString()).length<t?o("0"+e,t):e}function l(e,t){t.forEach((function(t){e.appendChild(t)}))}var d=s(18);function u(e){var t=e.lastTimestamp,s=(e.lang,e.onEnd);return Object(n.useEffect)((function(){new c(t,{theme:"light"}).start().ifEnded((function(){s&&s()}))}),[t]),Object(d.jsxs)("div",{className:"count-down",children:[Object(d.jsx)("div",{className:"tip",children:"Time to Start"}),Object(d.jsx)("div",{id:"flipdown",class:"flipdown"})]})}}}]);
//# sourceMappingURL=8.5a82196e.chunk.js.map