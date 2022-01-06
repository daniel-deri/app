(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[10],{1181:function(e,t,a){"use strict";a.r(t);var n=a(209),c=a(0),i=a.n(c),s=a(2),r=a(7),o=a(8),l=a(35),d=a(104),b=a(42),u=a(831),j=a(800),p=a(840),f=a(774),x=a(761),m=a(26),v=a(31),h=a(162),O=(a(973),a(13)),g=a(9);function k(e){var t=e.wallet,a=e.lang,n=e.type,c=e.isLp,l=e.bTokenId,d=e.poolConfig,b=e.version,u=e.baseToken,k=e.address,N=e.walletBalance,y=e.poolInfo,w=e.afterTransaction,S=Object(o.useState)(""),T=Object(r.a)(S,2),C=T[0],I=T[1],q=Object(o.useState)(!1),E=Object(r.a)(q,2),F=(E[0],E[1]),B=Object(h.c)(),L=Object(o.useState)({}),_=Object(r.a)(L,2),D=_[0],R=_[1],A="add"===n||"v2"===b?u:a.shares,Z=function(){var e=Object(s.a)(i.a.mark((function e(){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="add"===n?C:Object(O.bg)(C).times(Object(O.bg)(-1)).toString(),e.next=3,v.a.request("getEstimatedLiquidityInfo",[t.detail.chainId,k,t.detail.account,a,l]);case 3:c=e.sent,R(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(i.a.mark((function e(){var n,s,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(O.bg)(N),!Object(O.bg)(C).gt(n)){e.next=5;break}return B.error(a["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(C<=0||isNaN(C))){e.next=8;break}return B.error(a["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 8:if("lp"!==c){e.next=15;break}return r=[t.detail.chainId,k,t.detail.account,C],e.next=12,v.a.request("addLpLiquidity",r,{includeResponse:!0});case 12:s=e.sent,e.next=19;break;case 15:return o=[t.detail.chainId,k,t.detail.account,C,l],e.next=18,v.a.request("addLiquidity",o,{includeResponse:!0});case 18:s=e.sent;case 19:if(w(!0),I(""),s&&s.success){e.next=24;break}return B.error(a["failure-of-transaction"]),e.abrupt("return",!1);case 24:return e.abrupt("return",!0);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(i.a.mark((function e(){var n,s,r,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(O.bg)(y.totalShares),!(s=Object(O.bg)(C)).gt(n)){e.next=5;break}return B.error("".concat(a["your-current-max-removable-shares-are"],"  ").concat(y.totalShares)),e.abrupt("return",!1);case 5:if(!(+C<=0||isNaN(C))){e.next=8;break}return B.error(a["invalid-liquidity"]),e.abrupt("return",!1);case 8:if("lp"!==c){e.next=15;break}return o=[t.detail.chainId,k,t.detail.account,C],e.next=12,v.a.request("removeLpLiquidity",o,{includeResponse:!0});case 12:r=e.sent,e.next=19;break;case 15:return d=[t.detail.chainId,k,t.detail.account,C,l,n.eq(s)],e.next=18,v.a.request("removeLiquidity",d,{includeResponse:!0});case 18:r=e.sent;case 19:return r&&r.success||B.error(a["failure-of-transaction"]),I(""),w(),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){C?(Z(),F(!0)):F(!1)}),[C]),Object(o.useEffect)((function(){I("")}),[n]),Object(g.jsxs)("div",{className:"operate",children:[Object(g.jsx)("div",{className:"add-input",children:Object(g.jsx)(j.a,{value:C,unit:A,onChange:function(e){I(e)},inputWidth:"237px",styles:{"min-width":"332px"}})}),"add"===n&&Object(g.jsxs)("div",{className:"wallet-balance",children:[a["wallet-balance"]," ",Object(g.jsx)(x.a,{value:N,displayType:"text",decimalScale:2})," ",u]}),"remove"===n&&Object(g.jsxs)("div",{className:"wallet-balance",children:[a["staked-balance"]," ",Object(g.jsx)(x.a,{value:y.totalShares,displayType:"text",decimalScale:2})," ",A]}),Object(g.jsx)("div",{className:"check-proportion",children:Object(g.jsx)(f.a,{defaultValue:C,onChange:function(e){e=parseInt(e);var t="add"===n?N:y.totalShares,a=Object(O.bg)(t).times(Object(O.bg)(e/100)).toString();I(a)},outline:!0,bgColor:" rgba(85, 119, 253, 0.1)",width:77,height:40})}),Object(g.jsx)("div",{className:"information",children:C&&Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"percentage",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["my-liquidity-percentage"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,value:y.percent,decimalScale:2,suffix:"%"})," ->  ",Object(g.jsx)(x.a,{allowZero:!0,value:100*D.percentage1,decimalScale:2,suffix:"%"})]})]}),Object(g.jsxs)("div",{className:"staked-balance",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["staked-balance"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,value:y.formatShares,decimalScale:2})," -> ",Object(g.jsx)(x.a,{allowZero:!0,value:D.shares1,decimalScale:2}),"v2"===b?" "+u:" "+a.shares]})]})]})}),Object(g.jsxs)("div",{className:"add-remove-btn",children:["add"===n&&Object(g.jsx)(p.a,{fontWeight:"bold",onClick:z,pool:d,wallet:t,bTokenId:l,fontSize:"18",type:m.h,width:"331",label:a["add-liquidity"],lang:a}),"remove"===n&&Object(g.jsx)(p.a,{fontWeight:"bold",onClick:P,pool:d,type:m.h,wallet:t,bTokenId:l,fontSize:"18",width:"331",label:a["remove-liquidity"],lang:a})]})]})}var N=a(794),y=a(28),w=a(777),S=a(81),T=a(328),C=(a(974),a.p+"static/media/back.300bea44.svg"),I=a(208),q=a(329),E=a(327),F=a(163),B=a(839),L=a(330),_=a.p+"static/media/add-icon.3371611b.svg",D=a.p+"static/media/remove-icon.534f5d52.svg",R=a.p+"static/media/inactive-add.4f0a243b.svg",A=a.p+"static/media/inactive-remove.a7b5da77.svg",Z=S[O.DeriEnv.get()].chainInfo,z=S[O.DeriEnv.get()].chainInfo;t.default=Object(b.b)("wallet","poolManager")(Object(b.c)((function(e){var t,a=e.lang,c=e.wallet,b=void 0===c?{}:c,j=e.poolManager,p=Object(l.i)(),f=p.version,m=p.chainId,h=(p.symbol,p.address),S=p.type,P=Object(o.useState)(""),W=Object(r.a)(P,2),V=W[0],M=W[1],U=Object(o.useState)(""),Y=Object(r.a)(U,2),$=Y[0],J=Y[1],H=Object(o.useState)(!1),K=Object(r.a)(H,2),G=K[0],Q=K[1],X=Object(o.useState)(""),ee=Object(r.a)(X,2),te=ee[0],ae=ee[1],ne=Object(o.useState)([]),ce=Object(r.a)(ne,2),ie=ce[0],se=ce[1],re=Object(o.useState)("show"),oe=Object(r.a)(re,2),le=oe[0],de=oe[1],be=Object(o.useState)({}),ue=Object(r.a)(be,2),je=ue[0],pe=ue[1],fe=Object(T.a)(),xe=Object(o.useState)(""),me=Object(r.a)(xe,2),ve=me[0],he=me[1],Oe=Object(o.useState)(),ge=Object(r.a)(Oe,2),ke=ge[0],Ne=ge[1],ye=z[m]&&z[m].name;Object(o.useEffect)((function(){b.detail.chainId!==m&&b.switchNetwork(fe[m])}),[b.detail]);var we=function(e){e.target.src=L.default},Se=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.isConnected()){e.next=17;break}if(t=[b.detail.chainId,h,b.detail.account],a=null,!te.isLp){e.next=9;break}return e.next=6,v.a.request("getLpWalletBalance",t);case 6:a=e.sent,e.next=16;break;case 9:if(t.push($),"v2_lite_open"!==f){e.next=13;break}return e.next=13,O.openConfigListCache.update();case 13:return e.next=15,v.a.request("getBTokenBalance",t);case 15:a=e.sent;case 16:Ne(a);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Te=function(){Se(),Ee(),Fe()},Ce=(t={},Object(n.a)(t,a.add,{content:Object(g.jsx)(k,{poolConfig:te,isLp:S,wallet:b,afterTransaction:Te,version:f,bTokenId:$,address:h,lang:a,type:"add",poolInfo:je,baseToken:V,walletBalance:ke}),style:{background:"linear-gradient(200.74deg, rgba(97, 122, 255, 0.1) -4.65%, rgba(223, 229, 255, 0) 50.94%, rgba(85, 91, 237, 0.05) 105.4%)"},borderColor:"#203B60",icon:_,inicon:R,direction:"tab-left"}),Object(n.a)(t,a.remove,{content:Object(g.jsx)(k,{isLp:S,poolConfig:te,wallet:b,afterTransaction:Te,lang:a,address:h,type:"remove",bTokenId:$,poolInfo:je,balance:je,baseToken:V,version:f}),style:{background:"linear-gradient(200.74deg, rgba(97, 122, 255, 0.1) -4.65%, rgba(223, 229, 255, 0) 50.94%, rgba(85, 91, 237, 0.05) 105.4%)"},borderColor:"#203B60",icon:D,inicon:A,direction:"tab-right"}),t),Ie=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.load();case 2:if(t=j.pools,"lp"!==S){e.next=7;break}return e.next=6,j.loadDoubleMingingPool();case 6:t=j.lpPools;case 7:if("v2_lite_open"!==f){e.next=11;break}return e.next=10,j.loadOpen();case 10:t=j.openPools;case 11:t=(t=t.filter((function(e){return e.address===h})))[0],a=t.bTokens[0].bTokenSymbol,Object(y.q)(h)?a="CAKE-LP":Object(y.v)(h)&&(a="DERI-USDT SLP"),n=t.bTokens[0].bTokenId,c=(c=t.symbols.map((function(e){var t=[];return t.push(e.symbol),t}))).join(","),he(c),ae(t),se(t.bTokens),M(a),J(n);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qe=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!te){e.next=6;break}return e.next=3,te.getPoolInfo(b,te);case 3:return t=e.sent,ie.map((function(e){return"v2"===f?e.apy=100*+t.bTokensApy.filter((function(t){return t.bTokenId===e.bTokenId}))[0].apy:"v2_lite_open"!==f&&(e.apy=100*+t.bTokensApy[0].apy,Object(y.v)(h)&&(e.lpApy=t.lpApy)),e})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n,c,s,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!te){e.next=15;break}return e.next=4,te.getPoolInfo(b,te);case 4:if(a=e.sent,"v2"===f&&$?(s=a.bTokensApy.filter((function(e){return e.bTokenId===$})),n=s[0].apy,r=s[0].multiplier,c=(c=a.bTokensLiq.filter((function(e){return e.bTokenId===$})))[0].liquidity):"v2_lite_open"!==f&&(n=a.bTokensApy[0].apy,c=a.bTokensLiq[0].liquidity),t={total:c,apy:100*+n,multiplier:r},!b.isConnected()){e.next=14;break}return e.next=10,te.getLiquidityInfo(b,h,te.version,te.isLp,$);case 10:o=e.sent,(t=o).apy=100*+n,t.multiplier=r;case 14:pe(t);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.isConnected()||!te){e.next=7;break}return e.next=3,te.getIsStaked(b,te);case 3:t=e.sent,ie.map((function(e){return e.staked="v2"===f?t.bTokens.filter((function(t){return t.bTokenId===e.bTokenId}))[0].isStaked:t.isStaked,e})),"v2"===f?$&&(a=t.bTokens.filter((function(e){return e.bTokenId===$}))[0].isStaked):a=t.isStaked,Q(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=te.bTokens.filter((function(e){return e.bTokenId===t})),J(t),M(a[0].bTokenSymbol),Q();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){Ie()}),[]),Object(o.useEffect)((function(){qe()}),[te,ie]),Object(o.useEffect)((function(){Ee(),Se()}),[$,te,b.detail.account]),Object(o.useEffect)((function(){Fe()}),[te,b.detail.account,ie,$]),Object(g.jsxs)("div",{className:"pool-detail",children:[Object(g.jsx)("div",{className:"back-pool",children:Object(g.jsx)(d.b,{to:"/pool",children:Object(g.jsxs)("div",{className:"icon-back",children:[Object(g.jsx)("img",{alt:"",src:C}),Object(g.jsx)("span",{children:a.back})]})})}),Object(g.jsxs)("div",{className:"pool-deatail-info",children:[Object(g.jsxs)("div",{className:"pool-detail-basetoken-info",children:[Object(g.jsxs)("div",{className:"pool-info-text",children:[Object(g.jsxs)("div",{className:"pool-network-type",children:[Object(g.jsx)("div",{className:"network-logo",children:Object(g.jsx)("img",{alt:"",src:function(e){var t,a=+e;return 56===a||97===a?t=I.default:137===a?t=q.default:1===a&&(t=E.default),t}(m)})}),Object(g.jsxs)("div",{className:"pool-type-network-text",children:[Object(g.jsx)("div",{className:"pool-type-text",children:a[f]}),Object(g.jsx)("div",{className:"pool-network-text",children:ye})]})]}),Object(g.jsxs)("div",{className:"pool-des",children:["lp"!==S&&a["amm-pool-des"],"clp"===f&&Object(g.jsxs)(g.Fragment,{children:[a["deri-pancake-pool-des"],Object(g.jsxs)("span",{className:"font-color",children:[" ",a["deri-pancake-token"]," "]}),a["deri-token-des"]]}),"slp"===f&&Object(g.jsxs)(g.Fragment,{children:[a["deri-sushi-pool-des"],Object(g.jsxs)("span",{className:"font-color",children:[" ",a["deri-sushi-token"]," "]}),a["deri-token-des"]]}),"lp"!==S?Object(g.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://docs.deri.finance/mining-faq#is-the-liquidity-mining-on-deri-pools-risk-free",children:Object(g.jsxs)("span",{className:"learn-more",children:[" ",a["learn-more"]]})}):Object(g.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://docs.deri.finance/mining-faq#is-the-liquidity-mining-on-sushiswap-sushiswap-onsen-and-pancakeswap-deri-risk-free",children:Object(g.jsxs)("span",{className:"learn-more",children:[" ",a["learn-more"]]})})]})]}),Object(g.jsxs)("div",{className:"select-basetoken-info",children:[Object(g.jsx)("div",{className:"select-coin-title",children:a["select-the-coin"]}),Object(g.jsxs)("div",{className:"coin-list",children:["lp"!==S&&"v2_lite_open"!==f&&Object(g.jsx)(g.Fragment,{children:ie.map((function(e,t){return Object(g.jsxs)("div",{className:V===e.bTokenSymbol?"coin-box checked-base":"coin-box",onClick:function(){Be(e.bTokenId)},children:[Object(g.jsxs)("div",{className:"base-apy-info",children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(e.bTokenSymbol)}),Object(g.jsxs)("div",{className:"apy-base-staked",children:[Object(g.jsx)("div",{className:"base-name",children:e.bTokenSymbol}),Object(g.jsxs)("div",{className:"base-apy",children:[a.apy," \xa0 ",Object(g.jsx)(x.a,{value:e.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})]})]})]}),e.staked&&Object(g.jsxs)("div",{className:"stake",children:[Object(g.jsx)("img",{src:B.a,alt:""}),a.staked]})]})}))}),"v2_lite_open"===f&&Object(g.jsx)(g.Fragment,{children:ie.map((function(e,t){return Object(g.jsxs)("div",{className:"coin-box checked-base",onClick:function(){Be(e.bTokenId)},children:[Object(g.jsxs)("div",{className:"base-apy-info",children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(e.bTokenSymbol),children:Object(g.jsx)("img",{alt:"",onError:we,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})}),Object(g.jsx)("div",{className:"apy-base-staked",children:Object(g.jsx)("div",{className:"base-name",children:e.bTokenSymbol})})]}),e.staked&&Object(g.jsxs)("div",{className:"stake",children:[Object(g.jsx)("img",{src:B.a,alt:""}),a.staked]})]})}))}),"lp"===S&&ie.length&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"coin-box checked-base",children:Object(g.jsxs)("div",{className:"base-apy-info",children:[Object(g.jsxs)("div",{className:"lp-btoken-logo",children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(ie[0].bTokenSymbol)}),Object(g.jsx)("span",{className:"conect-logo",children:"+"}),Object(g.jsx)("div",{className:"btoken-logo ".concat(ie[1].bTokenSymbol)})]}),Object(g.jsxs)("div",{className:"apy-base-staked",children:[Object(g.jsx)("div",{className:"base-name",children:V}),Object(g.jsxs)("div",{className:"base-apy",children:[Object(y.q)(h)&&Object(g.jsxs)(g.Fragment,{children:[a.apy," \xa0 ",Object(g.jsx)(x.a,{value:ie[1].apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})]}),Object(y.v)(h)&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w.a,{text:"".concat(a.apy," ").concat((+ie[1].apy).toFixed(2)," %"),tip:a["deri-apy"]}),"\xa0 + \xa0 ",Object(g.jsx)(w.a,{text:"".concat(a.apy,"  ").concat((+ie[1].lpApy).toFixed(2)," %"),tip:a["sushi-apy"]})]})]})]})]})})})]})]})]}),Object(g.jsxs)("div",{className:"pool-detail-add-remove-info",children:[Object(g.jsxs)("div",{className:"mining-deri-liquidity",children:[Object(g.jsxs)("div",{className:"btoken-liquidity",children:["lp"!==S&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(V),children:"v2_lite_open"===f&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{alt:"",onError:we,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(V,".png")})})}),Object(g.jsxs)("div",{className:"manage-stake",children:[Object(g.jsxs)("div",{className:"manage",children:[a.manage," ",V," ",a.liquidity]}),G&&Object(g.jsxs)("div",{className:"stake",children:[Object(g.jsx)("img",{src:B.a,alt:""}),a.staked]})]})]}),"lp"===S&&ie.length&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"lp-btoken-logo",children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(ie[0].bTokenSymbol)}),Object(g.jsx)("span",{className:"conect-logo",children:"+"}),Object(g.jsx)("div",{className:"btoken-logo ".concat(ie[1].bTokenSymbol)})]}),Object(g.jsxs)("div",{className:"manage-stake",children:[Object(g.jsxs)("div",{className:"manage",children:[a.manage," ",V," ",a.liquidity]}),G&&Object(g.jsxs)("div",{className:"stake",children:[Object(g.jsx)("img",{src:B.a,alt:""}),a.staked]})]})]})]}),Object(g.jsx)("div",{className:"deri-current-epoch",children:"v2_lite_open"!==f&&Object(g.jsx)(u.a,{poolShow:!1,lang:a,wallet:b})})]}),Object(g.jsxs)("div",{className:"mining-add-remove-liquidity",children:[Object(g.jsxs)("div",{className:"pool-info",children:[Object(g.jsxs)("div",{className:"pool-info-title",children:[Object(g.jsx)("div",{className:"pool-info-title-text",children:a["pool-info"]}),Object(g.jsxs)("div",{className:"down-up",children:["show"===le&&Object(g.jsx)("span",{onClick:function(){return de("hide")},children:Object(g.jsx)("img",{className:"up-icon",alt:"",src:F.default})}),"hide"===le&&Object(g.jsx)("span",{onClick:function(){return de("show")},children:Object(g.jsx)("img",{alt:"",src:F.default})})]})]}),Object(g.jsxs)("div",{className:"'pool-info-text' ".concat(le),children:[Object(g.jsxs)("div",{className:"pool-info-text-one",children:["v2_lite_open"!==f&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a.apy}),Object(g.jsx)("div",{className:"info-box-num",children:Object(g.jsx)(x.a,{value:je.apy,displayType:"text",decimalScale:2,suffix:"%"})})]}),Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["pool-liquidity"]}),Object(g.jsx)("div",{className:"info-box-num",children:Object(g.jsx)(x.a,{value:je.total,displayType:"text",decimalScale:2,thousandSeparator:!0,suffix:" ".concat(V)})})]}),"v2"===f&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a.multiplier}),Object(g.jsx)("div",{className:"info-box-num",children:je.multiplier})]}),Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["my-liquidity-percentage"]}),Object(g.jsx)("div",{className:"info-box-num",children:Object(g.jsx)(x.a,{allowZero:!0,value:je.percent,decimalScale:2,suffix:"%"})})]}),"v2"!==f&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["liquidity-share-value"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,decimalScale:6,value:je.shareValue,thousandSeparator:!0})," ",V]})]})}),Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["staked-balance"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,value:je.formatShares,decimalScale:2}),"v2"===f?" "+V:" "+a.shares]})]}),"v2"!==f&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title"}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,decimalScale:2,value:je.values,thousandSeparator:!0})," ",V]})]}),"v2"===f&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["mining-pnl"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,prefix:" ",value:je.swappedPnl,decimalScale:2})," ",V]})]})]}),Object(g.jsxs)("div",{className:"pool-info-text-two",children:["lp"!==S&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a.symbols}),Object(g.jsx)("div",{className:"info-box-num symbols",children:ve})]}),Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["contract-address"]}),Object(g.jsx)("div",{className:"info-box-num",children:Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(Z[m]&&Z[m].viewUrl,"/address/").concat(h),children:Object(y.h)(h)})})]})]})]})]}),Object(g.jsx)("div",{className:"add-remove-liquidity",children:Object(g.jsx)(N.a,{tabSet:Ce,width:379,size:18,inactiveBgColor:"#0c192d",icon:"",borderBottom:!0,divider:!0})})]})]})]})]})})))},761:function(e,t,a){"use strict";var n,c=a(39),i=a(103),s=a(46),r=a(7),o=a(48),l=a(8),d=(a(75),a(776)),b=a(47),u=a(28),j=a(13),p=a(9),f=Object(b.a)(d.a)(n||(n=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width}));t.a=function(e){var t=Object(l.useState)(Object(p.jsx)("span",{className:"loading-line"})),a=Object(r.a)(t,2),n=a[0],o=a[1],d=Object(l.useState)(!0),b=Object(r.a)(d,2),x=b[0],m=b[1],v=(Object(l.useRef)(),function(){var t=e.allowZero;return"object"!==Object(s.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t});return Object(l.useEffect)((function(){e.allowZero,e.wallet;var t=e.defaultValue,a=void 0===t?"--":t,n=Object(i.a)(e,["allowZero","wallet","defaultValue"]);v()?(n.value&&/\d+\.0*[1-9]+/.test(n.value)&&0===+Object(j.bg)(n.value).toFixed(+n.decimalScale||2)&&(n.decimalScale=Object(u.c)(n.value)+1),n.value=Object(u.D)(n.value),o(Object(p.jsx)(f,Object(c.a)(Object(c.a)({},n),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}))),m(!1)):x&&o(Object(p.jsx)("span",{className:"loading-line",style:{width:e.width,height:e.height}}));var s=window.setTimeout((function(){v()||o(a)}),3e4);return function(){clearTimeout(s)}}),[e.value,e.decimalScale,e.suffix]),n}},774:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n,c=a(7),i=a(48),s=a(8),r=a(207),o=a(47),l=a(9),d=o.a.div(n||(n=Object(i.a)(["\n    display : flex;\n    width: 100%;\n    justify-content: space-between;\n  "])));function b(e){var t=e.groups,a=void 0===t?["25%","50%","75%","100%"]:t,n=e.selectedBorderColor,i=e.defaultBorderColor,o=e.onChange,b=e.defaultValue,u=e.outline,j=e.outlineColor,p=e.width,f=e.height,x=e.bgColor,m=e.className,v=Object(s.useState)(b),h=Object(c.a)(v,2),O=h[0],g=h[1];return Object(s.useEffect)((function(){g(b)}),[b]),Object(l.jsx)(d,{className:m,children:a.map((function(e,t){return Object(l.jsx)(r.a,{label:e,selectedBorderColor:n,isSelected:e===O,disabled:!1,outline:u,bgColor:x,className:"g-button",defaultBorderColor:i,outlineColor:j,width:p,height:f,onClick:function(){var t;(t=e)!==O?(g(t),o&&o(t)):t===O?(g(""),o&&o("")):g(t)}},t)}))})}},777:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n,c=a(48),i=a(47),s=a(105),r=a(28),o=a(9),l=i.a.div(n||(n=Object(c.a)(["\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n  }\n"])));function d(e){var t=e.text,a=e.id,n=void 0===a?Object(r.a)(t):a,c=e.tip,i=e.multiline,d=e.className,b=e.width,u=void 0===b?"auto":b,j=e.children;return Object(o.jsxs)(l,{className:d,children:[Object(o.jsx)("div",{className:"text","data-for":n,"data-tip":c,"data-event":Object(r.t)()?"click":void 0,children:t||j}),c&&Object(o.jsx)(s.a,{id:n,width:u,padding:"12",place:"bottom",overridePosition:function(e,t,a,n,c,i,s,r){var o=a.getBoundingClientRect(),l=n.getBoundingClientRect(),d=o.x,b=o.y,u=o.height,j=e.left,p=e.top;return(d=j+l.width>document.documentElement.clientWidth?j-l.width+o.width:j)<0&&(d=0),(b=p+l.height>=document.documentElement.clientHeight?p-l.height+u/2:p)<0&&(b=0),{top:b,left:d}},borderRadius:8,multiline:i})]})}},794:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n,c=a(7),i=a(48),s=a(47),r=a(8),o=a(9),l=s.a.div(n||(n=Object(i.a)(["\n    cursor: pointer;\n    width:","px;\n    height:","px;\n    display:flex;\n    .tab-left.inactive{\n      border-radius:0px 0px 4px 0px;\n    }\n    .tab-right.inactive{\n      border-radius:0px 0px 0px 4px;\n    }\n    .tab-left.active{\n      border-radius:0px 4px 0px 0px;\n      ",";\n      height:14px;\n    }\n    .tab-right.active{\n      border-radius:4px 0px 0px 0px;\n      ",";\n      height:14px;\n    }\n    .inactive,.active{\n      width:50%;\n      box-sizing: content-box;\n      padding: 15px 24px;\n      font-size:","px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .inactive{\n      background:",";\n      ","\n    }\n    .active {\n      color: ",";\n      background : ",";\n      ",";\n    }\n    .icon-tab{\n      margin-right:20px;\n      width:25px;\n      height:25px;\n    }\n  "])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.borderR}),(function(e){return e.borderL}),(function(e){return e.size}),(function(e){return e.inactiveBgColor}),(function(e){return e.borderB}),(function(e){return e.activeFontColor}),(function(e){return e.activeBgColor}),(function(e){return e.borderT}));function d(e){var t=e.tabSet,a=e.inactiveBgColor,n=e.activeBgColor,i=(e.icon,e.className),s=e.width,d=void 0===s?238:s,b=e.height,u=void 0===b?47:b,j=e.size,p=void 0===j?16:j,f=e.borderTop,x=void 0!==f&&f,m=e.borderBottom,v=void 0!==m&&m,h=e.divider,O=void 0!==h&&h,g=Object.keys(t),k=Object(r.useState)(g[0]),N=Object(c.a)(k,2),y=N[0],w=N[1],S=t[y].style,T=x?"border-top:1px solid ".concat(t[y].borderColor):"border-top:0",C=v?"border-bottom:1px solid ".concat(t[y].borderColor):"border-bottom:0",I=O?"border-left:1px solid ".concat(t[y].borderColor):"border-left:0",q=O?"border-right:1px solid ".concat(t[y].borderColor):"border-right:0",E=t[y].fontColor?t[y].fontColor:"#FFFFFF";return Object(o.jsxs)("div",{style:S,className:i,children:[Object(o.jsx)(l,{className:"tab-header",width:d,height:u,activeFontColor:E,activeBgColor:n,inactiveBgColor:a,size:p,borderT:T,borderB:C,borderL:I,borderR:q,children:g.map((function(e){return Object(o.jsxs)("div",{className:"".concat(t[e].direction,e===y?" active":" inactive"),onClick:function(){return function(e){w(e)}(e)},children:[t[e].icon?Object(o.jsx)("img",{alt:"",className:"icon-tab",src:e===y?t[e].icon:t[e].inicon}):"","  ",e]},e)}))}),t[y].content]})}},800:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n,c=a(39),i=a(48),s=a(8),r=a(47),o=a(13),l=a(9),d=r.a.div(n||(n=Object(i.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: 56px;\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.unitPadding}));function b(e){var t=e.value,a=e.unit,n=e.max,i=e.step,r=e.onChange,b=e.styles,u=void 0===b?{}:b,j=e.focus,p=e.unitPadding,f=void 0===p?"24px":p,x=e.minTradeVolume,m=e.decimal,v=void 0===m?2:m,h=e.readOnly,O=e.inputWidth,g=void 0===O?"50%":O,k=e.className,N=e.disabled,y=void 0!==N&&N,w=Object(s.useRef)(null);return Object(s.useEffect)((function(){w.current.setCustomValidity(""),w.current&&j&&w.current.focus()}),[j]),Object(l.jsxs)(d,{unitPadding:f,inputWidth:g,className:k,style:Object(c.a)({},u),children:[Object(l.jsx)("input",{type:"number",disabled:y,value:t,step:i,ref:w,onChange:function(e){var t="\\d+\\.\\d{0,".concat(v,"}$"),a=new RegExp(t),c=e.target.value;if(n&&Object(o.bg)(c).gt(n))r&&r(n);else if(c<0||isNaN(c))r&&r("");else if(c){if(x>=1)if(c/x>=1)r&&r(Object(o.bg)(c).div(x).integerValue()*x);else r&&r(c*x);else if(/\d+\./.test(c)&&!a.test(c)){var i=c.substring(0,c.indexOf(".")+1+v);r&&r(i)}else r&&r(c)}else r&&r(c)},readOnly:h}),Object(l.jsx)("div",{className:"unit",children:a})]})}},805:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n,c=a(48),i=a(47),s=(a(8),a(9)),r=i.a.div(n||(n=Object(c.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function o(e){var t=e.startTimestamp,a=e.nowTimestamp,n=e.endTimestamp,c=parseInt((a-t)/(n-t)*100);return Object(s.jsx)("div",{className:"time-slider",children:Object(s.jsx)(r,{width:c})})}},831:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(0),c=a.n(n),i=a(2),s=a(7),r=a(8),o=a(207),l=a(805),d=a(328),b=a(162),u=a(761),j=a(31),p=a(28),f=(a(832),a(9));function x(e){var t=e.lang,a=e.poolShow,n=void 0===a||a,x=e.wallet,m=void 0===x?{}:x,v=Object(r.useState)(""),h=Object(s.a)(v,2),O=h[0],g=h[1],k=Object(r.useState)(0),N=Object(s.a)(k,2),y=N[0],w=N[1],S=Object(b.c)(),T=Object(r.useState)(0),C=Object(s.a)(T,2),I=C[0],q=C[1],E=Object(r.useState)(0),F=Object(s.a)(E,2),B=F[0],L=F[1],_=Object(r.useState)({}),D=Object(s.a)(_,2),R=D[0],A=D[1],Z=Object(r.useState)(!1),z=Object(s.a)(Z,2),P=z[0],W=z[1],V=Object(r.useState)(""),M=Object(s.a)(V,2),U=M[0],Y=M[1],$=Object(d.a)(R.chainId);Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){var e=28800,a=parseInt(Date.now()/1e3),n=parseInt(a/e)*e,c=n+e-a,i=parseInt(c/3600),s=parseInt(c%3600/60),r=parseInt(c%60);w(n),q(n+e),L(a),g("".concat(i," ").concat(t.h," ").concat(s," ").concat(t.m," ").concat(r," ").concat(t.s))}),1e3),function(){e&&clearInterval(e)}}),[]);var J=function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,i,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=10;break}return e.next=3,j.a.request("getUserInfoAll",[m.detail.account]);case 3:t=e.sent,a=(+t.total).toFixed(2),n=t.valid?(+t.amount).toFixed(2):0,i=t.lp,s=(+t.trade).toFixed(2),r=t.chainId,A({claimed:a,unclaimed:n,harvestDeriLp:i,harvestDeriTrade:s,chainId:r});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==$.name){e.next=3;break}return S.error("".concat(t["wrong-network"])),e.abrupt("return");case 3:if(Object(p.e)(m.detail.chainId,R.chainId)){e.next=6;break}return S.error("".concat(t["your-deri-is-on"]," ").concat($.name," ").concat(t["connect-to"]," ").concat($.name," ").concat(t["to-claim"])),e.abrupt("return");case 6:if(0!==+R.unclaimed){e.next=9;break}return S.error(t["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return S.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,j.a.request("mintDToken",[m.detail.chainId,m.detail.account],{includeResponse:!0});case 15:if(!e.sent.success){e.next=20;break}return e.abrupt("return",!0);case 20:return S.error(t["claim-failed"]),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=7;break}return e.next=3,H();case 3:e.sent&&W(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,m.connect();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}(),G=function(e){var a;switch(e){case 1:a=t.jan;break;case 2:a=t.feb;break;case 3:a=t.mar;break;case 4:a=t.apr;break;case 5:a=t.may;break;case 6:a=t.jun;break;case 7:a=t.jul;break;case 8:a=t.aug;break;case 9:a=t.sep;break;case 10:a=t.oct;break;case 11:a=t.nov;break;case 12:a=t.dec}return a},Q=function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=5;break}return e.next=3,j.a.request("getUserFirstClaimInfo",[m.detail.account]);case 3:(t=e.sent).first_timestamp&&(a=new Date(1e3*t.first_timestamp),n=a.getFullYear(),i=a.getMonth()+1,i=G(i),s=a.getDate(),Y("".concat(i," ").concat(s,", ").concat(n)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=window.setInterval(J,18e4);return J(),Q(),function(){return clearInterval(e)}}),[m.detail.account]),Object(f.jsx)("div",{className:"mining-claim",children:Object(f.jsxs)("div",{className:"mining-claim-info",children:[Object(f.jsxs)("div",{className:"deri-num-slider",children:[Object(f.jsxs)("div",{className:"deri-claim-time",children:[t["current-epoch-remaining-time"]," : ",O]}),R.harvestDeriLp>0&&Object(f.jsxs)("div",{className:"deri-claim-text",children:[t["your-harvest-in-current"]," ",Object(f.jsx)("span",{className:"deri-num",children:Object(f.jsx)(u.a,{value:R.harvestDeriLp,decimalScale:2,displayType:"text",di:!0,thousandSeparator:!0})}),"   $DERI."]}),n&&Object(f.jsxs)("div",{className:"deri-claim-text",children:["You have ",Object(f.jsx)("span",{className:"deri-num",children:Object(f.jsx)(u.a,{value:P?0:R.unclaimed,displayType:"text",thousandSeparator:!0})}),"  unclaimed $DERI across all staked pools. You\u2019ve earned a total of ",Object(f.jsx)(u.a,{value:P?+R.claimed+ +R.unclaimed:R.claimed,displayType:"text",thousandSeparator:!0})," Deri token",U&&Object(f.jsxs)("span",{children:[" since ",U,". Woohoo!"]})]}),Object(f.jsx)("div",{className:"deri-claim-slider",children:Object(f.jsx)(l.a,{startTimestamp:y,nowTimestamp:B,endTimestamp:I})})]}),n&&Object(f.jsx)("div",{className:"cliam-button",children:Object(f.jsx)(o.a,{fontWeight:"bold",label:t["claim-all"],onClick:K})})]})})}},832:function(e,t,a){},839:function(e,t,a){"use strict";t.a=a.p+"static/media/staked.46571832.svg"},840:function(e,t,a){"use strict";var n=a(39),c=a(0),i=a.n(c),s=a(2),r=a(7),o=a(103),l=a(8),d=a(207),b=a(42),u=a(9);t.a=Object(b.b)("wallet")(Object(b.c)((function(e){var t=e.lang,a=e.wallet,c=e.pool,b=void 0===c?{}:c,j=e.bTokenId,p=e.icon,f=e.label,x=e.onClick,m=(e.isReady,e.disabled),v=void 0===m||m,h=Object(o.a)(e,["lang","wallet","pool","bTokenId","icon","label","onClick","isReady","disabled"]),O=Object(l.useState)(!0),g=Object(r.a)(O,2),k=g[0],N=g[1],y=Object(l.useState)(f),w=Object(r.a)(y,2),S=w[0],T=w[1],C=Object(l.useState)(p),I=Object(r.a)(C,2),q=I[0],E=I[1],F=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&a&&a.detail)){e.next=13;break}if(a.isConnected()){e.next=6;break}return E(null),e.abrupt("return",a.connect());case 6:if(a.isApproved){e.next=11;break}return E(null),e.abrupt("return",a.approve());case 11:return E(p),e.abrupt("return",x());case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)(Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b&&a&&a.detail&&b.bTokens&&t&&(a.isConnected()?a.isApproved?(T(f),E(p)):(T(t.approve),E(null)):(T(t["connect-wallet"]),E(null)));case 1:case"end":return e.stop()}}),e)}))),[b,a.detail,a.isApproved,t]),Object(l.useEffect)((function(){N(v)}),[v]),Object(l.useEffect)((function(){a&&b&&b.address&&(a.setAddress(b.address),a.setBTokenId(j))}),[a,b,j]),Object(u.jsx)(d.a,Object(n.a)(Object(n.a)({},h),{},{disabled:!k,label:S,onClick:F,icon:q}))})))},973:function(e,t,a){},974:function(e,t,a){}}]);
//# sourceMappingURL=10.efc5e586.chunk.js.map