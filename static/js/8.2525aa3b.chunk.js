(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1138:function(e,t,a){"use strict";a.r(t);var n=a(209),c=a(0),i=a.n(c),r=a(2),s=a(7),o=a(8),l=a(34),d=a(94),b=a(41),u=a(813),j=a(784),p=a(795),f=a(796),x=a(759),m=a(26),v=a(31),h=a(162),O=(a(936),a(13)),g=a(9);function k(e){var t=e.wallet,a=e.lang,n=e.type,c=e.isLp,l=e.bTokenId,d=e.poolConfig,b=e.version,u=e.baseToken,k=e.address,y=e.walletBalance,N=e.poolInfo,w=e.afterTransaction,S=Object(o.useState)(""),T=Object(s.a)(S,2),I=T[0],C=T[1],q=Object(o.useState)(!1),E=Object(s.a)(q,2),F=(E[0],E[1]),B=Object(h.c)(),L=Object(o.useState)({}),_=Object(s.a)(L,2),D=_[0],R=_[1],A="add"===n||"v2"===b?u:a.shares,Z=function(){var e=Object(r.a)(i.a.mark((function e(){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="add"===n?I:Object(O.bg)(I).times(Object(O.bg)(-1)).toString(),e.next=3,v.a.request("getEstimatedLiquidityInfo",[t.detail.chainId,k,t.detail.account,a,l]);case 3:c=e.sent,R(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(r.a)(i.a.mark((function e(){var n,r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(O.bg)(y),!Object(O.bg)(I).gt(n)){e.next=5;break}return B.error(a["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(I<=0||isNaN(I))){e.next=8;break}return B.error(a["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 8:if("lp"!==c){e.next=15;break}return s=[t.detail.chainId,k,t.detail.account,I],e.next=12,v.a.request("addLpLiquidity",s,{includeResponse:!0});case 12:r=e.sent,e.next=19;break;case 15:return o=[t.detail.chainId,k,t.detail.account,I,l],e.next=18,v.a.request("addLiquidity",o,{includeResponse:!0});case 18:r=e.sent;case 19:if(w(!0),C(""),r&&r.success){e.next=24;break}return B.error(a["failure-of-transaction"]),e.abrupt("return",!1);case 24:return e.abrupt("return",!0);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(r.a)(i.a.mark((function e(){var n,r,s,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(O.bg)(N.totalShares),!(r=Object(O.bg)(I)).gt(n)){e.next=5;break}return B.error("".concat(a["your-current-max-removable-shares-are"],"  ").concat(N.totalShares)),e.abrupt("return",!1);case 5:if(!(+I<=0||isNaN(I))){e.next=8;break}return B.error(a["invalid-liquidity"]),e.abrupt("return",!1);case 8:if("lp"!==c){e.next=15;break}return o=[t.detail.chainId,k,t.detail.account,I],e.next=12,v.a.request("removeLpLiquidity",o,{includeResponse:!0});case 12:s=e.sent,e.next=19;break;case 15:return d=[t.detail.chainId,k,t.detail.account,I,l,n.eq(r)],e.next=18,v.a.request("removeLiquidity",d,{includeResponse:!0});case 18:s=e.sent;case 19:return s&&s.success||B.error(a["failure-of-transaction"]),C(""),w(),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){I?(Z(),F(!0)):F(!1)}),[I]),Object(o.useEffect)((function(){C("")}),[n]),Object(g.jsxs)("div",{className:"operate",children:[Object(g.jsx)("div",{className:"add-input",children:Object(g.jsx)(j.a,{value:I,unit:A,onChange:function(e){C(e)},inputWidth:"237px",styles:{"min-width":"332px"}})}),"add"===n&&Object(g.jsxs)("div",{className:"wallet-balance",children:[a["wallet-balance"]," ",Object(g.jsx)(x.a,{value:y,displayType:"text",decimalScale:2})," ",u]}),"remove"===n&&Object(g.jsxs)("div",{className:"wallet-balance",children:[a["staked-balance"]," ",Object(g.jsx)(x.a,{value:N.totalShares,displayType:"text",decimalScale:2})," ",A]}),Object(g.jsx)("div",{className:"check-proportion",children:Object(g.jsx)(f.a,{defaultValue:I,onChange:function(e){e=parseInt(e);var t="add"===n?y:N.totalShares,a=Object(O.bg)(t).times(Object(O.bg)(e/100)).toString();C(a)},outline:!0,bgColor:" rgba(85, 119, 253, 0.1)",width:77,height:40})}),Object(g.jsx)("div",{className:"information",children:I&&Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"percentage",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["my-liquidity-percentage"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,value:N.percent,decimalScale:2,suffix:"%"})," ->  ",Object(g.jsx)(x.a,{allowZero:!0,value:100*D.percentage1,decimalScale:2,suffix:"%"})]})]}),Object(g.jsxs)("div",{className:"staked-balance",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["staked-balance"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,value:N.formatShares,decimalScale:2})," -> ",Object(g.jsx)(x.a,{allowZero:!0,value:D.shares1,decimalScale:2}),"v2"===b?" "+u:" "+a.shares]})]})]})}),Object(g.jsxs)("div",{className:"add-remove-btn",children:["add"===n&&Object(g.jsx)(p.a,{fontWeight:"bold",onClick:z,pool:d,wallet:t,bTokenId:l,fontSize:"18",type:m.h,width:"331",label:a["add-liquidity"],lang:a}),"remove"===n&&Object(g.jsx)(p.a,{fontWeight:"bold",onClick:P,pool:d,type:m.h,wallet:t,bTokenId:l,fontSize:"18",width:"331",label:a["remove-liquidity"],lang:a})]})]})}var y=a(778),N=a(28),w=a(766),S=a(81),T=a(328),I=(a(937),a.p+"static/media/back.b0297594.svg"),C=a(208),q=a(329),E=a(327),F=a(163),B=a(821),L=a(330),_=a.p+"static/media/add-icon.6f7516a6.svg",D=a.p+"static/media/remove-icon.1feb361f.svg",R=a.p+"static/media/inactive-add.bd5c1504.svg",A=a.p+"static/media/inactive-remove.026bafcb.svg",Z=S[O.DeriEnv.get()].chainInfo,z=S[O.DeriEnv.get()].chainInfo;t.default=Object(b.b)("wallet","poolManager")(Object(b.c)((function(e){var t,a=e.lang,c=e.wallet,b=void 0===c?{}:c,j=e.poolManager,p=Object(l.i)(),f=p.version,m=p.chainId,h=(p.symbol,p.address),S=p.type,P=Object(o.useState)(""),W=Object(s.a)(P,2),V=W[0],M=W[1],U=Object(o.useState)(""),Y=Object(s.a)(U,2),$=Y[0],J=Y[1],K=Object(o.useState)(!1),G=Object(s.a)(K,2),H=G[0],Q=G[1],X=Object(o.useState)(""),ee=Object(s.a)(X,2),te=ee[0],ae=ee[1],ne=Object(o.useState)([]),ce=Object(s.a)(ne,2),ie=ce[0],re=ce[1],se=Object(o.useState)("show"),oe=Object(s.a)(se,2),le=oe[0],de=oe[1],be=Object(o.useState)({}),ue=Object(s.a)(be,2),je=ue[0],pe=ue[1],fe=Object(T.a)(),xe=Object(o.useState)(""),me=Object(s.a)(xe,2),ve=me[0],he=me[1],Oe=Object(o.useState)(),ge=Object(s.a)(Oe,2),ke=ge[0],ye=ge[1],Ne=z[m]&&z[m].name;Object(o.useEffect)((function(){b.detail.chainId!==m&&b.switchNetwork(fe[m])}),[b.detail]);var we=function(e){e.target.src=L.default},Se=function(){var e=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.isConnected()){e.next=17;break}if(t=[b.detail.chainId,h,b.detail.account],a=null,!te.isLp){e.next=9;break}return e.next=6,v.a.request("getLpWalletBalance",t);case 6:a=e.sent,e.next=16;break;case 9:if(t.push($),"v2_lite_open"!==f){e.next=13;break}return e.next=13,O.openConfigListCache.update();case 13:return e.next=15,v.a.request("getBTokenBalance",t);case 15:a=e.sent;case 16:ye(a);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Te=function(){Se(),Ee(),Fe()},Ie=(t={},Object(n.a)(t,a.add,{content:Object(g.jsx)(k,{poolConfig:te,isLp:S,wallet:b,afterTransaction:Te,version:f,bTokenId:$,address:h,lang:a,type:"add",poolInfo:je,baseToken:V,walletBalance:ke}),style:{background:"linear-gradient(200.74deg, rgba(97, 122, 255, 0.1) -4.65%, rgba(223, 229, 255, 0) 50.94%, rgba(85, 91, 237, 0.05) 105.4%)"},borderColor:"#203B60",icon:_,inicon:R,direction:"tab-left"}),Object(n.a)(t,a.remove,{content:Object(g.jsx)(k,{isLp:S,poolConfig:te,wallet:b,afterTransaction:Te,lang:a,address:h,type:"remove",bTokenId:$,poolInfo:je,balance:je,baseToken:V,version:f}),style:{background:"linear-gradient(200.74deg, rgba(97, 122, 255, 0.1) -4.65%, rgba(223, 229, 255, 0) 50.94%, rgba(85, 91, 237, 0.05) 105.4%)"},borderColor:"#203B60",icon:D,inicon:A,direction:"tab-right"}),t),Ce=function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.load();case 2:if(t=j.pools,"lp"!==S){e.next=7;break}return e.next=6,j.loadDoubleMingingPool();case 6:t=j.lpPools;case 7:if("v2_lite_open"!==f){e.next=11;break}return e.next=10,j.loadOpen();case 10:t=j.openPools;case 11:t=(t=t.filter((function(e){return e.address===h})))[0],a=t.bTokens[0].bTokenSymbol,Object(N.n)(h)?a="CAKE-LP":Object(N.r)(h)&&(a="DERI-USDT SLP"),n=t.bTokens[0].bTokenId,c=(c=t.symbols.map((function(e){var t=[];return t.push(e.symbol),t}))).join(","),he(c),ae(t),re(t.bTokens),M(a),J(n);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qe=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!te){e.next=6;break}return e.next=3,te.getPoolInfo(b,te);case 3:return t=e.sent,ie.map((function(e){return"v2"===f?e.apy=100*+t.bTokensApy.filter((function(t){return t.bTokenId===e.bTokenId}))[0].apy:"v2_lite_open"!==f&&(e.apy=100*+t.bTokensApy[0].apy,Object(N.r)(h)&&(e.lpApy=t.lpApy)),e})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,c,r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!te){e.next=15;break}return e.next=4,te.getPoolInfo(b,te);case 4:if(a=e.sent,"v2"===f&&$?(r=a.bTokensApy.filter((function(e){return e.bTokenId===$})),n=r[0].apy,s=r[0].multiplier,c=(c=a.bTokensLiq.filter((function(e){return e.bTokenId===$})))[0].liquidity):"v2_lite_open"!==f&&(n=a.bTokensApy[0].apy,c=a.bTokensLiq[0].liquidity),t={total:c,apy:100*+n,multiplier:s},!b.isConnected()){e.next=14;break}return e.next=10,te.getLiquidityInfo(b,h,te.version,te.isLp,$);case 10:o=e.sent,(t=o).apy=100*+n,t.multiplier=s;case 14:pe(t);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.isConnected()||!te){e.next=7;break}return e.next=3,te.getIsStaked(b,te);case 3:t=e.sent,ie.map((function(e){return e.staked="v2"===f?t.bTokens.filter((function(t){return t.bTokenId===e.bTokenId}))[0].isStaked:t.isStaked,e})),"v2"===f?$&&(a=t.bTokens.filter((function(e){return e.bTokenId===$}))[0].isStaked):a=t.isStaked,Q(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(r.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=te.bTokens.filter((function(e){return e.bTokenId===t})),J(t),M(a[0].bTokenSymbol),Q();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){Ce()}),[]),Object(o.useEffect)((function(){qe()}),[te,ie]),Object(o.useEffect)((function(){Ee(),Se()}),[$,te,b.detail.account]),Object(o.useEffect)((function(){Fe()}),[te,b.detail.account,ie,$]),Object(g.jsxs)("div",{className:"pool-detail",children:[Object(g.jsx)("div",{className:"back-pool",children:Object(g.jsx)(d.b,{to:"/pool",children:Object(g.jsxs)("div",{className:"icon-back",children:[Object(g.jsx)("img",{alt:"",src:I}),Object(g.jsx)("span",{children:a.back})]})})}),Object(g.jsxs)("div",{className:"pool-deatail-info",children:[Object(g.jsxs)("div",{className:"pool-detail-basetoken-info",children:[Object(g.jsxs)("div",{className:"pool-info-text",children:[Object(g.jsxs)("div",{className:"pool-network-type",children:[Object(g.jsx)("div",{className:"network-logo",children:Object(g.jsx)("img",{alt:"",src:function(e){var t,a=+e;return 56===a||97===a?t=C.default:137===a?t=q.default:1===a&&(t=E.default),t}(m)})}),Object(g.jsxs)("div",{className:"pool-type-network-text",children:[Object(g.jsx)("div",{className:"pool-type-text",children:a[f]}),Object(g.jsx)("div",{className:"pool-network-text",children:Ne})]})]}),Object(g.jsxs)("div",{className:"pool-des",children:[a["pool-des"],Object(g.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://docs.deri.finance/mining-faq#is-the-liquidity-mining-on-deri-pools-risk-free",children:Object(g.jsxs)("span",{className:"learn-more",children:[" ",a["learn-more"]]})})]})]}),Object(g.jsxs)("div",{className:"select-basetoken-info",children:[Object(g.jsx)("div",{className:"select-coin-title",children:a["select-the-coin"]}),Object(g.jsxs)("div",{className:"coin-list",children:["lp"!==S&&"v2_lite_open"!==f&&Object(g.jsx)(g.Fragment,{children:ie.map((function(e,t){return Object(g.jsxs)("div",{className:V===e.bTokenSymbol?"coin-box checked-base":"coin-box",onClick:function(){Be(e.bTokenId)},children:[Object(g.jsxs)("div",{className:"base-apy-info",children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(e.bTokenSymbol)}),Object(g.jsxs)("div",{className:"apy-base-staked",children:[Object(g.jsx)("div",{className:"base-name",children:e.bTokenSymbol}),Object(g.jsxs)("div",{className:"base-apy",children:[a.apy," \xa0 ",Object(g.jsx)(x.a,{value:e.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})]})]})]}),e.staked&&Object(g.jsxs)("div",{className:"stake",children:[Object(g.jsx)("img",{src:B.a,alt:""}),a.staked]})]})}))}),"v2_lite_open"===f&&Object(g.jsx)(g.Fragment,{children:ie.map((function(e,t){return Object(g.jsxs)("div",{className:"coin-box checked-base",onClick:function(){Be(e.bTokenId)},children:[Object(g.jsxs)("div",{className:"base-apy-info",children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(e.bTokenSymbol),children:Object(g.jsx)("img",{alt:"",onError:we,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})}),Object(g.jsx)("div",{className:"apy-base-staked",children:Object(g.jsx)("div",{className:"base-name",children:e.bTokenSymbol})})]}),e.staked&&Object(g.jsxs)("div",{className:"stake",children:[Object(g.jsx)("img",{src:B.a,alt:""}),a.staked]})]})}))}),"lp"===S&&ie.length&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"coin-box checked-base",children:Object(g.jsxs)("div",{className:"base-apy-info",children:[Object(g.jsxs)("div",{className:"lp-btoken-logo",children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(ie[0].bTokenSymbol)}),Object(g.jsx)("span",{className:"conect-logo",children:"+"}),Object(g.jsx)("div",{className:"btoken-logo ".concat(ie[1].bTokenSymbol)})]}),Object(g.jsxs)("div",{className:"apy-base-staked",children:[Object(g.jsx)("div",{className:"base-name",children:V}),Object(g.jsxs)("div",{className:"base-apy",children:[Object(N.n)(h)&&Object(g.jsxs)(g.Fragment,{children:[a.apy," \xa0 ",Object(g.jsx)(x.a,{value:ie[1].apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})]}),Object(N.r)(h)&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w.a,{text:"".concat(a.apy," ").concat((+ie[1].apy).toFixed(2)," %"),tip:a["deri-apy"]}),"\xa0 + \xa0 ",Object(g.jsx)(w.a,{text:"".concat(a.apy,"  ").concat((+ie[1].lpApy).toFixed(2)," %"),tip:a["sushi-apy"]})]})]})]})]})})})]})]})]}),Object(g.jsxs)("div",{className:"pool-detail-add-remove-info",children:[Object(g.jsxs)("div",{className:"mining-deri-liquidity",children:[Object(g.jsxs)("div",{className:"btoken-liquidity",children:["lp"!==S&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(V),children:"v2_lite_open"===f&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{alt:"",onError:we,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(V,".png")})})}),Object(g.jsxs)("div",{className:"manage-stake",children:[Object(g.jsxs)("div",{className:"manage",children:[a.manage," ",V," ",a.liquidity]}),H&&Object(g.jsxs)("div",{className:"stake",children:[Object(g.jsx)("img",{src:B.a,alt:""}),a.staked]})]})]}),"lp"===S&&ie.length&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"lp-btoken-logo",children:[Object(g.jsx)("div",{className:"btoken-logo ".concat(ie[0].bTokenSymbol)}),Object(g.jsx)("span",{className:"conect-logo",children:"+"}),Object(g.jsx)("div",{className:"btoken-logo ".concat(ie[1].bTokenSymbol)})]}),Object(g.jsxs)("div",{className:"manage-stake",children:[Object(g.jsxs)("div",{className:"manage",children:[a.manage," ",V," ",a.liquidity]}),H&&Object(g.jsxs)("div",{className:"stake",children:[Object(g.jsx)("img",{src:B.a,alt:""}),a.staked]})]})]})]}),Object(g.jsx)("div",{className:"deri-current-epoch",children:"v2_lite_open"!==f&&Object(g.jsx)(u.a,{poolShow:!1,lang:a,wallet:b})})]}),Object(g.jsxs)("div",{className:"mining-add-remove-liquidity",children:[Object(g.jsxs)("div",{className:"pool-info",children:[Object(g.jsxs)("div",{className:"pool-info-title",children:[Object(g.jsx)("div",{className:"pool-info-title-text",children:a["pool-info"]}),Object(g.jsxs)("div",{className:"down-up",children:["show"===le&&Object(g.jsx)("span",{onClick:function(){return de("hide")},children:Object(g.jsx)("img",{className:"up-icon",alt:"",src:F.default})}),"hide"===le&&Object(g.jsx)("span",{onClick:function(){return de("show")},children:Object(g.jsx)("img",{alt:"",src:F.default})})]})]}),Object(g.jsxs)("div",{className:"'pool-info-text' ".concat(le),children:[Object(g.jsxs)("div",{className:"pool-info-text-one",children:["v2_lite_open"!==f&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a.apy}),Object(g.jsx)("div",{className:"info-box-num",children:Object(g.jsx)(x.a,{value:je.apy,displayType:"text",decimalScale:2,suffix:"%"})})]}),Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["pool-liquidity"]}),Object(g.jsx)("div",{className:"info-box-num",children:Object(g.jsx)(x.a,{value:je.total,displayType:"text",decimalScale:2,thousandSeparator:!0,suffix:" ".concat(V)})})]}),"v2"===f&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a.multiplier}),Object(g.jsx)("div",{className:"info-box-num",children:je.multiplier})]}),Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["my-liquidity-percentage"]}),Object(g.jsx)("div",{className:"info-box-num",children:Object(g.jsx)(x.a,{allowZero:!0,value:je.percent,decimalScale:2,suffix:"%"})})]}),"v2"!==f&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["liquidity-share-value"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,decimalScale:6,value:je.shareValue,thousandSeparator:!0})," ",V]})]})}),Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["staked-balance"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,value:je.formatShares,decimalScale:2}),"v2"===f?" "+V:" "+a.shares]})]}),"v2"!==f&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title"}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,decimalScale:2,value:je.values,thousandSeparator:!0})," ",V]})]}),"v2"===f&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["mining-pnl"]}),Object(g.jsxs)("div",{className:"info-box-num",children:[Object(g.jsx)(x.a,{allowZero:!0,prefix:" ",value:je.swappedPnl,decimalScale:2})," ",V]})]})]}),Object(g.jsxs)("div",{className:"pool-info-text-two",children:["lp"!==S&&Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a.symbols}),Object(g.jsx)("div",{className:"info-box-num symbols",children:ve})]}),Object(g.jsxs)("div",{className:"info-box",children:[Object(g.jsx)("div",{className:"info-box-title",children:a["contract-address"]}),Object(g.jsx)("div",{className:"info-box-num",children:Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(Z[m]&&Z[m].viewUrl,"/address/").concat(h),children:Object(N.e)(h)})})]})]})]})]}),Object(g.jsx)("div",{className:"add-remove-liquidity",children:Object(g.jsx)(y.a,{tabSet:Ie,width:379,size:18,inactiveBgColor:"#0c192d",icon:"",borderBottom:!0,divider:!0})})]})]})]})]})})))},759:function(e,t,a){"use strict";var n,c=a(39),i=a(104),r=a(46),s=a(7),o=a(48),l=a(8),d=(a(63),a(777)),b=a(47),u=a(9),j=Object(b.a)(d.a)(n||(n=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width}));t.a=function(e){var t=Object(l.useState)(Object(u.jsx)("span",{className:"loading-line"})),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(l.useState)(!0),b=Object(s.a)(d,2),p=b[0],f=b[1],x=(Object(l.useRef)(),function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t});return Object(l.useEffect)((function(){e.allowZero,e.wallet;var t=e.defaultValue,a=void 0===t?"--":t,n=Object(i.a)(e,["allowZero","wallet","defaultValue"]);x()?(n.value=String(n.value),o(Object(u.jsx)(j,Object(c.a)(Object(c.a)({},n),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}))),f(!1)):p&&o(Object(u.jsx)("span",{className:"loading-line",style:{width:e.width,height:e.height}}));var r=window.setTimeout((function(){x()||o(a)}),3e4);return function(){clearTimeout(r)}}),[e.value,e.decimalScale]),n}},766:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n,c=a(48),i=a(47),r=a(105),s=a(28),o=a(9),l=i.a.div(n||(n=Object(c.a)(["\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n  }\n"])));function d(e){var t=e.text,a=e.id,n=void 0===a?Object(s.a)(t):a,c=e.tip,i=e.multiline,d=e.className,b=e.width,u=void 0===b?"auto":b,j=e.children;return Object(o.jsxs)(l,{className:d,children:[Object(o.jsx)("div",{className:"text","data-for":n,"data-tip":c,"data-event":Object(s.q)()?"click":void 0,children:t||j}),c&&Object(o.jsx)(r.a,{id:n,width:u,padding:"12",place:"bottom",borderRadius:8,multiline:i})]})}},778:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n,c=a(7),i=a(48),r=a(47),s=a(8),o=a(9),l=r.a.div(n||(n=Object(i.a)(["\n    cursor: pointer;\n    width:","px;\n    height:","px;\n    display:flex;\n    .tab-left.inactive{\n      border-radius:0px 0px 4px 0px;\n    }\n    .tab-right.inactive{\n      border-radius:0px 0px 0px 4px;\n    }\n    .tab-left.active{\n      border-radius:0px 4px 0px 0px;\n      ",";\n      height:14px;\n    }\n    .tab-right.active{\n      border-radius:4px 0px 0px 0px;\n      ",";\n      height:14px;\n    }\n    .inactive,.active{\n      width:50%;\n      box-sizing: content-box;\n      padding: 15px 24px;\n      font-size:","px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .inactive{\n      background:",";\n      ","\n    }\n    .active {\n      color: ",";\n      background : ",";\n      ",";\n    }\n    .icon-tab{\n      margin-right:20px;\n      width:25px;\n      height:25px;\n    }\n  "])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.borderR}),(function(e){return e.borderL}),(function(e){return e.size}),(function(e){return e.inactiveBgColor}),(function(e){return e.borderB}),(function(e){return e.activeFontColor}),(function(e){return e.activeBgColor}),(function(e){return e.borderT}));function d(e){var t=e.tabSet,a=e.inactiveBgColor,n=e.activeBgColor,i=(e.icon,e.className),r=e.width,d=void 0===r?238:r,b=e.height,u=void 0===b?47:b,j=e.size,p=void 0===j?16:j,f=e.borderTop,x=void 0!==f&&f,m=e.borderBottom,v=void 0!==m&&m,h=e.divider,O=void 0!==h&&h,g=Object.keys(t),k=Object(s.useState)(g[0]),y=Object(c.a)(k,2),N=y[0],w=y[1],S=t[N].style,T=x?"border-top:1px solid ".concat(t[N].borderColor):"border-top:0",I=v?"border-bottom:1px solid ".concat(t[N].borderColor):"border-bottom:0",C=O?"border-left:1px solid ".concat(t[N].borderColor):"border-left:0",q=O?"border-right:1px solid ".concat(t[N].borderColor):"border-right:0",E=t[N].fontColor?t[N].fontColor:"#FFFFFF";return Object(o.jsxs)("div",{style:S,className:i,children:[Object(o.jsx)(l,{className:"tab-header",width:d,height:u,activeFontColor:E,activeBgColor:n,inactiveBgColor:a,size:p,borderT:T,borderB:I,borderL:C,borderR:q,children:g.map((function(e){return Object(o.jsxs)("div",{className:"".concat(t[e].direction,e===N?" active":" inactive"),onClick:function(){return function(e){w(e)}(e)},children:[t[e].icon?Object(o.jsx)("img",{alt:"",className:"icon-tab",src:e===N?t[e].icon:t[e].inicon}):"","  ",e]},e)}))}),t[N].content]})}},784:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n,c=a(39),i=a(48),r=a(8),s=a(47),o=a(13),l=a(9),d=s.a.div(n||(n=Object(i.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: 56px;\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.unitPadding}));function b(e){var t=e.value,a=e.unit,n=e.max,i=(e.min,e.step),s=e.onChange,b=e.styles,u=void 0===b?{}:b,j=e.focus,p=e.unitPadding,f=void 0===p?"24px":p,x=e.decimal,m=e.readOnly,v=e.inputWidth,h=void 0===v?"50%":v,O=e.className,g=e.disabled,k=void 0!==g&&g,y=Object(r.useRef)(null);return Object(r.useEffect)((function(){y.current.setCustomValidity(""),y.current&&j&&y.current.focus()}),[j]),Object(l.jsxs)(d,{unitPadding:f,inputWidth:h,className:O,style:Object(c.a)({},u),children:[Object(l.jsx)("input",{type:"number",disabled:k,value:t,step:i,ref:y,onChange:function(e){var t="\\d+\\.\\d{0,".concat(x,"}$"),a=new RegExp(t),c=e.target.value;if(n&&Object(o.bg)(c).gt(n))s&&s(n);else if(c<0||isNaN(c))s&&s("");else if(/\d+\./.test(c)&&!a.test(c)){var i=c.substring(0,c.indexOf(".")+1+x);s&&s(i)}else s&&s(c)},readOnly:m}),Object(l.jsx)("div",{className:"unit",children:a})]})}},789:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n,c=a(48),i=a(47),r=(a(8),a(9)),s=i.a.div(n||(n=Object(c.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function o(e){var t=e.startTimestamp,a=e.nowTimestamp,n=e.endTimestamp,c=parseInt((a-t)/(n-t)*100);return Object(r.jsx)("div",{className:"time-slider",children:Object(r.jsx)(s,{width:c})})}},795:function(e,t,a){"use strict";var n=a(39),c=a(0),i=a.n(c),r=a(2),s=a(7),o=a(104),l=a(8),d=a(207),b=a(41),u=a(9);t.a=Object(b.b)("wallet")(Object(b.c)((function(e){var t=e.lang,a=e.wallet,c=e.pool,b=void 0===c?{}:c,j=e.bTokenId,p=e.icon,f=e.label,x=e.onClick,m=(e.isReady,e.disabled),v=void 0===m||m,h=Object(o.a)(e,["lang","wallet","pool","bTokenId","icon","label","onClick","isReady","disabled"]),O=Object(l.useState)(!0),g=Object(s.a)(O,2),k=g[0],y=g[1],N=Object(l.useState)(f),w=Object(s.a)(N,2),S=w[0],T=w[1],I=Object(l.useState)(p),C=Object(s.a)(I,2),q=C[0],E=C[1],F=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&a&&a.detail)){e.next=13;break}if(a.isConnected()){e.next=6;break}return E(null),e.abrupt("return",a.connect());case 6:if(a.isApproved){e.next=11;break}return E(null),e.abrupt("return",a.approve());case 11:return E(p),e.abrupt("return",x());case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)(Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b&&a&&a.detail&&b.bTokens&&t&&(a.isConnected()?a.isApproved?(T(f),E(p)):(T(t.approve),E(null)):(T(t["connect-wallet"]),E(null)));case 1:case"end":return e.stop()}}),e)}))),[b,a.detail,a.isApproved,t]),Object(l.useEffect)((function(){y(v)}),[v]),Object(l.useEffect)((function(){a&&b&&b.address&&(a.setAddress(b.address),a.setBTokenId(j))}),[a,b,j]),Object(u.jsx)(d.a,Object(n.a)(Object(n.a)({},h),{},{disabled:!k,label:S,onClick:F,icon:q}))})))},796:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n,c=a(7),i=a(48),r=a(8),s=a(207),o=a(47),l=a(9),d=o.a.div(n||(n=Object(i.a)(["\n    display : flex;\n    width: 100%;\n    justify-content: space-between;\n  "])));function b(e){var t=e.groups,a=void 0===t?["25%","50%","75%","100%"]:t,n=e.selectedBorderColor,i=e.defaultBorderColor,o=e.onChange,b=e.defaultValue,u=e.outline,j=e.outlineColor,p=e.width,f=e.height,x=e.bgColor,m=e.className,v=Object(r.useState)(b),h=Object(c.a)(v,2),O=h[0],g=h[1];return Object(r.useEffect)((function(){g(b)}),[b]),Object(l.jsx)(d,{className:m,children:a.map((function(e,t){return Object(l.jsx)(s.a,{label:e,selectedBorderColor:n,isSelected:e===O,disabled:!1,outline:u,bgColor:x,className:"g-button",defaultBorderColor:i,outlineColor:j,width:p,height:f,onClick:function(){var t;(t=e)!==O?(g(t),o&&o(t)):t===O?(g(""),o&&o("")):g(t)}},t)}))})}},813:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(0),c=a.n(n),i=a(2),r=a(7),s=a(8),o=a(207),l=a(789),d=a(328),b=a(162),u=a(759),j=a(31),p=a(28),f=(a(814),a(9));function x(e){var t=e.lang,a=e.poolShow,n=void 0===a||a,x=e.wallet,m=void 0===x?{}:x,v=Object(s.useState)(""),h=Object(r.a)(v,2),O=h[0],g=h[1],k=Object(s.useState)(0),y=Object(r.a)(k,2),N=y[0],w=y[1],S=Object(b.c)(),T=Object(s.useState)(0),I=Object(r.a)(T,2),C=I[0],q=I[1],E=Object(s.useState)(0),F=Object(r.a)(E,2),B=F[0],L=F[1],_=Object(s.useState)({}),D=Object(r.a)(_,2),R=D[0],A=D[1],Z=Object(s.useState)(!1),z=Object(r.a)(Z,2),P=z[0],W=z[1],V=Object(s.useState)(""),M=Object(r.a)(V,2),U=M[0],Y=M[1],$=Object(d.a)(R.chainId);Object(s.useEffect)((function(){var e;return e=window.setInterval((function(){var e=28800,a=parseInt(Date.now()/1e3),n=parseInt(a/e)*e,c=n+e-a,i=parseInt(c/3600),r=parseInt(c%3600/60),s=parseInt(c%60);w(n),q(n+e),L(a),g("".concat(i," ").concat(t.h," ").concat(r," ").concat(t.m," ").concat(s," ").concat(t.s))}),1e3),function(){e&&clearInterval(e)}}),[]);var J=function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,i,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=10;break}return e.next=3,j.a.request("getUserInfoAll",[m.detail.account]);case 3:t=e.sent,a=(+t.total).toFixed(2),n=t.valid?(+t.amount).toFixed(2):0,i=t.lp,r=(+t.trade).toFixed(2),s=t.chainId,A({claimed:a,unclaimed:n,harvestDeriLp:i,harvestDeriTrade:r,chainId:s});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==$.name){e.next=3;break}return S.error("".concat(t["wrong-network"])),e.abrupt("return");case 3:if(Object(p.b)(m.detail.chainId,R.chainId)){e.next=6;break}return S.error("".concat(t["your-deri-is-on"]," ").concat($.name," ").concat(t["connect-to"]," ").concat($.name," ").concat(t["to-claim"])),e.abrupt("return");case 6:if(0!==+R.unclaimed){e.next=9;break}return S.error(t["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return S.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,j.a.request("mintDToken",[m.detail.chainId,m.detail.account],{includeResponse:!0});case 15:if(!e.sent.success){e.next=20;break}return e.abrupt("return",!0);case 20:return S.error(t["claim-failed"]),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=7;break}return e.next=3,K();case 3:e.sent.success&&W(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,m.connect();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}(),H=function(e){var a;switch(e){case 1:a=t.jan;break;case 2:a=t.feb;break;case 3:a=t.mar;break;case 4:a=t.apr;break;case 5:a=t.may;break;case 6:a=t.jun;break;case 7:a=t.jul;break;case 8:a=t.aug;break;case 9:a=t.sep;break;case 10:a=t.oct;break;case 11:a=t.nov;break;case 12:a=t.dec}return a},Q=function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=5;break}return e.next=3,j.a.request("getUserFirstClaimInfo",[m.detail.account]);case 3:(t=e.sent).first_timestamp&&(a=new Date(1e3*t.first_timestamp),n=a.getFullYear(),i=a.getMonth()+1,i=H(i),r=a.getDate(),Y("".concat(i," ").concat(r,", ").concat(n)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=window.setInterval(J,18e4);return J(),Q(),function(){return clearInterval(e)}}),[m.detail.account]),Object(f.jsx)("div",{className:"mining-claim",children:Object(f.jsxs)("div",{className:"mining-claim-info",children:[Object(f.jsxs)("div",{className:"deri-num-slider",children:[Object(f.jsxs)("div",{className:"deri-claim-time",children:[t["current-epoch-remaining-time"]," : ",O]}),R.harvestDeriLp>0&&Object(f.jsxs)("div",{className:"deri-claim-text",children:[t["your-harvest-in-current"],"  ",Object(f.jsx)(u.a,{value:R.harvestDeriLp,decimalScale:2,displayType:"text",di:!0,thousandSeparator:!0}),"  $DERI."]}),n&&Object(f.jsxs)("div",{className:"deri-claim-text",children:["You have ",Object(f.jsx)(u.a,{value:P?0:R.unclaimed,displayType:"text",thousandSeparator:!0})," unclaimed $DERI across all staked pools. You\u2019ve earned a total of ",Object(f.jsx)(u.a,{value:P?+R.claimed+ +R.unclaimed:R.claimed,displayType:"text",thousandSeparator:!0})," Deri token",U&&Object(f.jsxs)("span",{children:[" since ",U,". Woohoo!"]})]}),Object(f.jsx)("div",{className:"deri-claim-slider",children:Object(f.jsx)(l.a,{startTimestamp:N,nowTimestamp:B,endTimestamp:C})})]}),n&&Object(f.jsx)("div",{className:"cliam-button",children:Object(f.jsx)(o.a,{fontWeight:"bold",label:t["claim-all"],onClick:G})})]})})}},814:function(e,t,a){},821:function(e,t,a){"use strict";t.a=a.p+"static/media/staked.45c27f0b.svg"},936:function(e,t,a){},937:function(e,t,a){}}]);
//# sourceMappingURL=8.2525aa3b.chunk.js.map