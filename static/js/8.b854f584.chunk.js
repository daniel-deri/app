(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1182:function(e,t,c){"use strict";c.r(t);var a,n=c(0),s=c.n(n),i=c(21),r=c(2),l=c(7),o=c(8),d=c(42),u=c(831),j=c(48),h=c(163),b=c(47),f=c(102),p=c.n(f),v=c(9),O=b.a.div(a||(a=Object(j.a)(["\ncursor:pointer;\nfont-weight: 600;\n.dropdown-menu{\n  display:none\n}\n.dropdown-menu.show{\n  margin-top:8px;\n  background: #203B60;\n  display:block;\n  border-radius:4px;\n  z-index:8;\n  position:relative;\n  .dropdown-item{\n    padding:0 24px;\n  }\n}\n.btn{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  color:#FFFFFF;\n\n}\n.dropdown-item:hover{\n  color:#FFFFFF\n}\n"])));function m(e){var t=e.selectList,c=void 0===t?[]:t,a=e.onChange,n=Object(o.useState)(!1),s=Object(l.a)(n,2),i=s[0],r=s[1],d=Object(o.useState)(c[0].text),u=Object(l.a)(d,2),j=u[0],b=u[1],f=p()("dropdown-menu",{show:i});return Object(v.jsxs)(O,{children:[Object(v.jsxs)("div",{onClick:function(){r(!i)},className:"btn checked",children:[j,Object(v.jsx)("img",{src:h.default,alt:""})]}),Object(v.jsx)("div",{className:f,children:c.map((function(e,t){return Object(v.jsx)("div",{className:"dropdown-item",onClick:function(){!function(e){b(e.text),a(e.index),r(!1)}(e)},children:e.text},t)}))})]})}var x=c(814),k=c(815),g=c(208),y=c(329),N=c(327),w=c(35),C=c(761),S=c(207),F=c(839),I=c(330);c(970);function T(e){var t=e.lang,c=e.pool,a=e.wallet,n=Object(w.g)(),i=Object(o.useState)({}),d=Object(l.a)(i,2),u=d[0],j=d[1],h=Object(o.useState)(!1),b=Object(l.a)(h,2),f=b[0],p=b[1],O=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getPoolInfo(a,c);case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getIsStaked(a,c);case 2:t=e.sent,p(t.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){e.target.src=I.default};Object(o.useEffect)((function(){O(),a.isConnected()&&m()}),[c,a.detail.account]);var k="/pool/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.address);return Object(v.jsxs)("div",{className:"v2_lite_open"===c.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==c.version&&n.push(e)}(k)},children:[Object(v.jsxs)("div",{className:"card-header",children:[Object(v.jsxs)("div",{className:"pool-network-type",children:[Object(v.jsx)("div",{className:"network-logo",children:Object(v.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=g.default:"137"===e?t=y.default:"1"===e&&(t=N.default),t}(c.chainId)})}),Object(v.jsxs)("div",{className:"pool-type-network-text",children:[Object(v.jsx)("div",{className:"pool-type-text",children:t[c.version]}),Object(v.jsx)("div",{className:"pool-network-text",children:c.chain.toUpperCase()})]})]}),Object(v.jsxs)("div",{className:"base-token-logo",children:[c.isLp&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"lp-base-token-bg",children:[Object(v.jsx)("div",{className:"basa-token-bg ".concat(c.bTokens[0].bTokenSymbol)}),Object(v.jsx)("span",{className:"lp-con",children:"+"}),Object(v.jsx)("div",{className:"basa-token-bg ".concat(c.bTokens[1].bTokenSymbol)})]})}),!c.isLp&&Object(v.jsx)(v.Fragment,{children:c.bTokens.map((function(e,t){return Object(v.jsx)("div",{className:"base-token-box-bg",children:Object(v.jsx)("div",{className:"basa-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===c.version&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("img",{alt:"",onError:x,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))})]})]}),Object(v.jsxs)("div",{className:"card-content",children:[Object(v.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==c.version&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"max-apy-title",children:"v2"===c.version?t["max-apy"]:t.apy}),Object(v.jsx)("div",{className:"max-apy-num",children:Object(v.jsx)(C.a,{value:u.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(v.jsxs)("div",{className:"total-pool-liquidity",children:[Object(v.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(v.jsx)("div",{className:"total-liquidity-num",children:Object(v.jsx)(C.a,{value:u.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===c.type?7:0})})]}),Object(v.jsx)("div",{className:"your-deri-epoch",children:f&&Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:F.a,alt:""}),t.staked]})}),Object(v.jsx)("div",{className:"stake-button",children:Object(v.jsx)(S.a,{disabled:"v2_lite_open"===c.version,className:"button",outline:!0,label:"v2_lite_open"===c.version?t.operating:t.stake})})]})]})}c(971);var E=c.p+"static/media/filter-close.b72edec1.svg";function _(e){var t=e.lang,c=(e.isShowFilter,e.checkedStaked),a=e.setCheckedStaked,n=e.setIsShowFilter,s=e.curTabPool,i=e.checkedPolygon,r=e.checkedETH,l=e.checkedOption,o=e.checkedFutureMain,d=e.checkedFutureInno,u=e.checkedBSC,j=e.setCheckedOption,h=e.setCheckedFutureMain,b=e.setCheckedFutureInno,f=e.setCheckedPolygon,p=e.setCheckedBSC,O=e.setCheckedETH,m=e.clearFilter;return Object(v.jsxs)("div",{className:"filter-modal",children:[Object(v.jsx)("div",{className:"close-filter-modal",children:Object(v.jsx)("span",{className:"close-icon",onClick:function(){n()},children:Object(v.jsx)("img",{alt:"",src:E})})}),Object(v.jsxs)("div",{className:"staked-only",children:[Object(v.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{className:"l-toggle",checked:c,onClick:function(e){a(e)}})})]}),Object(v.jsxs)("div",{className:"select-pool-type-network",children:[Object(v.jsxs)("div",{className:"pool-type",children:[Object(v.jsx)("div",{className:"type-cols",children:t.type}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t.options}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:l,className:"l-checkbox",onChange:function(e){j(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-main"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:o,className:"l-checkbox",onChange:function(e){h(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-inno"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:d,className:"l-checkbox",onChange:function(e){b(e)}})})]})]}),Object(v.jsxs)("div",{className:"network",children:[Object(v.jsx)("div",{className:"type-cols",children:t.network}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:g.default})," BSC"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:u,className:"l-checkbox",onChange:function(e){p(e)}})})]}),"deri"!==s&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:y.default})," Polygon"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:i,className:"l-checkbox",onChange:function(e){f(e)}})})]}),"deri"===s&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:N.default})," Ethereum"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:r,className:"l-checkbox",onChange:function(e){O(e)}})})]})]})]}),Object(v.jsx)("div",{className:"select-footer",children:Object(v.jsx)("div",{className:"clear-all-filter",onClick:function(){m()},children:t["clear-all-filter"]})})]})}var P=c(31),M=c.p+"static/media/filter.057de510.svg";c(972);t.default=Object(d.b)("wallet","poolManager")(Object(d.c)((function(e){var t=e.lang,c=e.wallet,a=void 0===c?{}:c,n=e.poolManager,d=Object(o.useState)("amm"),j=Object(l.a)(d,2),b=j[0],f=j[1],p=Object(o.useState)(!1),O=Object(l.a)(p,2),w=O[0],C=O[1],S=Object(o.useState)(t["deri-pool-title"]),F=Object(l.a)(S,2),I=F[0],E=F[1],D=Object(o.useState)([]),B=Object(l.a)(D,2),X=B[0],L=B[1],q=Object(o.useState)(!1),R=Object(l.a)(q,2),U=R[0],Y=R[1],H=Object(o.useState)(!1),Z=Object(l.a)(H,2),z=Z[0],J=Z[1],V=Object(o.useState)(!1),W=Object(l.a)(V,2),$=W[0],A=W[1],G=Object(o.useState)(!1),K=Object(l.a)(G,2),Q=K[0],ee=K[1],te=Object(o.useState)(!1),ce=Object(l.a)(te,2),ae=ce[0],ne=ce[1],se=Object(o.useState)(!1),ie=Object(l.a)(se,2),re=ie[0],le=ie[1],oe=Object(o.useState)(!1),de=Object(l.a)(oe,2),ue=de[0],je=de[1],he=Object(o.useState)(!1),be=Object(l.a)(he,2),fe=be[0],pe=be[1],ve=Object(o.useState)([]),Oe=Object(l.a)(ve,2),me=Oe[0],xe=Oe[1],ke=Object(o.useState)([]),ge=Object(l.a)(ke,2),ye=ge[0],Ne=ge[1],we=[{text:t["deri-pool-title"],index:"official"},{text:t["open-pool-title"],index:"open"}],Ce=function(e){"official"===e?(L(n.ammPools),C(!1)):"open"===e&&(L([]),Ie(),C(!0))},Se=function(){var e=Object(r.a)(s.a.mark((function e(){var t,c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(i.a)(n.pools),Object(i.a)(n.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(r.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[t.chainId,t.address,a.detail.account],e.next=3,P.a.request("getUserStakeInfo",c);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c=(c=e.sent).filter((function(e){return e})),l=c.filter((function(e){return"lp"!==e.type})),o=c.filter((function(e){return"lp"===e.type})),xe(l),Ne(o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){Y(!1),A(!1),ee(!1),le(!1),ne(!1),je(!1)};Object(o.useEffect)((function(){a.isConnected()&&Se()}),[a.detail,n,b]),Object(o.useEffect)((function(){var e=[],t="amm"===b?n.pools:n.lpPools;if(U){var c=t.filter((function(e){return"option"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(c))}if($){var a=t.filter((function(e){return"v2"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(a))}if(Q){var s=t.filter((function(e){return"v2_lite"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(s))}if(ae){if(e=[],U){var r=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"option"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(r))}if($){var l=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"v2"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(l))}if(Q){var o=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"v2_lite"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(o))}if(!U&&!$&&!Q){var d=t.filter((function(e){return 56===+e.chainId||97===+e.chainId}));e=[].concat(Object(i.a)(e),Object(i.a)(d))}}if(re){if(e=[],U){var u=t.filter((function(e){return 137===+e.chainId&&"option"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(u))}if($){var j=t.filter((function(e){return 137===+e.chainId&&"v2"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(j))}if(Q){var h=t.filter((function(e){return 137===+e.chainId&&"v2_lite"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(h))}if(!U&&!$&&!Q){var f=t.filter((function(e){return 137===+e.chainId}));e=[].concat(Object(i.a)(e),Object(i.a)(f))}}if(ae&&re){e=[];var p=t.filter((function(e){return 137===+e.chainId||56===+e.chainId}));e=[].concat(Object(i.a)(e),Object(i.a)(p))}if(ue){var v=t.filter((function(e){return 1===+e.chainId}));e=[].concat(Object(i.a)(e),Object(i.a)(v))}U||$||Q||ae||re||ue||(e=t),L(e)}),[U,$,Q,ae,re,ue]);var Ie=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadOpen();case 2:L(n.openPools);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){E(w?t["open-pool-title"]:t["deri-pool-title"])}),[w]),Object(o.useEffect)((function(){n.load()}),[]),Object(o.useEffect)((function(){"amm"===b?w||L(fe?me:n.ammPools):"deri"===b&&L(fe?ye:n.lpPools)}),[b,fe]),Object(o.useEffect)((function(){L(n.ammPools)}),[n.pools]),Object(v.jsx)("div",{className:"pool-box",children:Object(v.jsxs)("div",{className:"pool-info",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsx)("div",{className:"left-header-info",children:Object(v.jsxs)("div",{className:"pool-title",children:[Object(v.jsx)("div",{className:"pool-title-text",children:I}),Object(v.jsxs)("div",{className:"pool-title-select-text",children:[!w&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-one"]}),Object(v.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-two"]})]}),w&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-one"]}),Object(v.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-two"]})]})]}),Object(v.jsx)("div",{className:"select-pool-ves",children:Object(v.jsx)(m,{selectList:we,onChange:Ce})}),Object(v.jsx)("div",{className:"simple-select-ves",children:Object(v.jsx)("img",{alt:"",src:h.default})})]})}),Object(v.jsxs)("div",{className:"pool-card-claim-bg",children:[!w&&Object(v.jsx)(u.a,{lang:t,wallet:a}),!w&&Object(v.jsx)("div",{className:"pool-tab",children:Object(v.jsxs)("div",{className:"pool-tab-info",children:[Object(v.jsxs)("div",{className:"tab-mining",children:[Object(v.jsx)("div",{className:"amm"===b?"pool-active":"pool-unactive",onClick:function(){f("amm")},children:t["amm-liquidity-mining"]}),Object(v.jsx)("div",{className:"deri"===b?"pool-active":"pool-unactive",onClick:function(){f("deri")},children:t["deri-liquidity-mining"]})]}),Object(v.jsxs)("div",{className:"simple-tab-mining",children:[Object(v.jsx)("div",{className:"amm"===b?"pool-active":"pool-unactive",onClick:function(){f("amm")},children:t.amm}),Object(v.jsx)("div",{className:"deri"===b?"pool-active":"pool-unactive",onClick:function(){f("deri")},children:t["type-deri"]})]}),Object(v.jsxs)("div",{className:"filter",children:[Object(v.jsx)("img",{alt:"",src:M,className:"filter-img",onClick:function(){J(!z)}}),z&&Object(v.jsx)(_,{curTabPool:b,lang:t,isShowFilter:z,checkedStaked:fe,setCheckedStaked:pe,setIsShowFilter:J,setCheckedOption:Y,setCheckedFutureMain:A,setCheckedFutureInno:ee,setCheckedPolygon:le,setCheckedBSC:ne,setCheckedETH:je,clearFilter:Fe,checkedPolygon:re,checkedETH:ue,checkedOption:U,checkedFutureMain:$,checkedFutureInno:Q,checkedBSC:ae})]})]})}),Object(v.jsx)("div",{className:"pool-card",children:X.map((function(e,c){return Object(v.jsx)(T,{wallet:a,lang:t,pool:e},c)}))}),Object(v.jsx)("div",{className:!0})]})]}),Object(v.jsx)("div",{className:"right",children:Object(v.jsxs)("div",{className:"right-info",children:[Object(v.jsxs)("div",{className:"select-pool-ves-staked",children:[Object(v.jsx)("div",{className:"select-pool-ves",children:Object(v.jsx)(m,{selectList:we,onChange:Ce})}),!w&&Object(v.jsxs)("div",{className:"staked-only",children:[Object(v.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{className:"l-toggle",checked:fe,onClick:function(e){pe(e)}})})]})]}),!w&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"select-pool-type-network",children:[Object(v.jsxs)("div",{className:"pool-type",children:[Object(v.jsx)("div",{className:"type-cols",children:t.type}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t.options}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:U,className:"l-checkbox",onChange:function(e){Y(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-main"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:$,className:"l-checkbox",onChange:function(e){A(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-inno"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:Q,className:"l-checkbox",onChange:function(e){ee(e)}})})]})]}),Object(v.jsxs)("div",{className:"network",children:[Object(v.jsx)("div",{className:"type-cols",children:t.network}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[" ",Object(v.jsx)("img",{alt:"",src:g.default})," BSC"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:ae,className:"l-checkbox",onChange:function(e){ne(e)}})})]}),"deri"!==b&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[" ",Object(v.jsx)("img",{alt:"",src:y.default})," Polygon"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:re,className:"l-checkbox",onChange:function(e){le(e)}})})]}),"deri"===b&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:N.default})," Ethereum"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:ue,className:"l-checkbox",onChange:function(e){je(e)}})})]})]})]}),Object(v.jsxs)("div",{className:"select-footer",children:[Object(v.jsx)("div",{className:"clear-all-filter",onClick:Fe,children:t["clear-all-filter"]}),Object(v.jsx)("div",{className:"deri-logo"})]})]})]})})]})})})))},761:function(e,t,c){"use strict";var a,n=c(40),s=c(103),i=c(46),r=c(7),l=c(48),o=c(8),d=(c(75),c(776)),u=c(47),j=c(28),h=c(13),b=c(9),f=Object(u.a)(d.a)(a||(a=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width}));t.a=function(e){var t=Object(o.useState)(Object(b.jsx)("span",{className:"loading-line"})),c=Object(r.a)(t,2),a=c[0],l=c[1],d=Object(o.useState)(!0),u=Object(r.a)(d,2),p=u[0],v=u[1],O=(Object(o.useRef)(),function(){var t=e.allowZero;return"object"!==Object(i.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t});return Object(o.useEffect)((function(){e.allowZero,e.wallet;var t=e.defaultValue,c=void 0===t?"--":t,a=Object(s.a)(e,["allowZero","wallet","defaultValue"]);O()?(a.value&&/\d+\.0*[1-9]+/.test(a.value)&&0===+Object(h.bg)(a.value).toFixed(+a.decimalScale||2)&&(a.decimalScale=Object(j.c)(a.value)+1),a.value=Object(j.D)(a.value),l(Object(b.jsx)(f,Object(n.a)(Object(n.a)({},a),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}))),v(!1)):p&&l(Object(b.jsx)("span",{className:"loading-line",style:{width:e.width,height:e.height}}));var i=window.setTimeout((function(){O()||l(c)}),3e4);return function(){clearTimeout(i)}}),[e.value,e.decimalScale,e.suffix]),a}},805:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var a,n=c(48),s=c(47),i=(c(8),c(9)),r=s.a.div(a||(a=Object(n.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function l(e){var t=e.startTimestamp,c=e.nowTimestamp,a=e.endTimestamp,n=parseInt((c-t)/(a-t)*100);return Object(i.jsx)("div",{className:"time-slider",children:Object(i.jsx)(r,{width:n})})}},814:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var a=c(833),n=c.n(a),s=(c(837),c(838),c(9));function i(e){var t=e.label,c=e.className,a=e.checked,i=e.onClick,r=function(e){i&&i(!a)};return Object(s.jsxs)("div",{className:"l-toggle",children:[Object(s.jsx)("span",{className:"label-text",children:t}),Object(s.jsx)(n.a,{onClick:r,checked:a,className:c,onChange:r,icons:!1})]})}},815:function(e,t,c){"use strict";var a,n,s,i,r=c(40),l=c(7),o=c(103),d=c(48),u=c(8),j=c(47),h=c(102),b=c.n(h),f=c(9),p=j.a.div(a||(a=Object(d.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),v=j.a.svg(n||(n=Object(d.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]))),O=j.a.input.attrs({type:"checkbox"})(s||(s=Object(d.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),m=j.a.div(i||(i=Object(d.a)(["\n  background: ",";\n  border: 2px solid #5577FD;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  cursor : pointer;\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  "," {\n    visibility: ",";\n    display: flex;\n  }\n"])),(function(e){return e.checked?"#5577FD":"none"}),O,v,(function(e){return e.checked?"visible":"hidden"}));t.a=function(e){var t=e.className,c=e.onChange,a=e.checked,n=Object(o.a)(e,["className","onChange","checked"]),s=Object(u.useState)(a),i=Object(l.a)(s,2),d=i[0],j=i[1];Object(u.useEffect)((function(){j(a)}),[a]);var h=b()("c-checkbox",{checked:d});return Object(f.jsxs)(p,{className:t,children:[Object(f.jsx)(O,Object(r.a)(Object(r.a)({checked:d},n),{},{onChange:c})),Object(f.jsx)(m,{checked:d,className:h,onClick:function(){var e=!d;j(e),c&&c(e)},children:Object(f.jsx)(v,{className:"icon",viewBox:"0 0 24 24",children:Object(f.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})}},831:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var a=c(0),n=c.n(a),s=c(2),i=c(7),r=c(8),l=c(207),o=c(805),d=c(328),u=c(162),j=c(761),h=c(31),b=c(28),f=(c(832),c(9));function p(e){var t=e.lang,c=e.poolShow,a=void 0===c||c,p=e.wallet,v=void 0===p?{}:p,O=Object(r.useState)(""),m=Object(i.a)(O,2),x=m[0],k=m[1],g=Object(r.useState)(0),y=Object(i.a)(g,2),N=y[0],w=y[1],C=Object(u.c)(),S=Object(r.useState)(0),F=Object(i.a)(S,2),I=F[0],T=F[1],E=Object(r.useState)(0),_=Object(i.a)(E,2),P=_[0],M=_[1],D=Object(r.useState)({}),B=Object(i.a)(D,2),X=B[0],L=B[1],q=Object(r.useState)(!1),R=Object(i.a)(q,2),U=R[0],Y=R[1],H=Object(r.useState)(""),Z=Object(i.a)(H,2),z=Z[0],J=Z[1],V=Object(d.a)(X.chainId);Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){var e=28800,c=parseInt(Date.now()/1e3),a=parseInt(c/e)*e,n=a+e-c,s=parseInt(n/3600),i=parseInt(n%3600/60),r=parseInt(n%60);w(a),T(a+e),M(c),k("".concat(s," ").concat(t.h," ").concat(i," ").concat(t.m," ").concat(r," ").concat(t.s))}),1e3),function(){e&&clearInterval(e)}}),[]);var W=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c,a,s,i,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=10;break}return e.next=3,h.a.request("getUserInfoAll",[v.detail.account]);case 3:t=e.sent,c=(+t.total).toFixed(2),a=t.valid?(+t.amount).toFixed(2):0,s=t.lp,i=(+t.trade).toFixed(2),r=t.chainId,L({claimed:c,unclaimed:a,harvestDeriLp:s,harvestDeriTrade:i,chainId:r});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==V.name){e.next=3;break}return C.error("".concat(t["wrong-network"])),e.abrupt("return");case 3:if(Object(b.e)(v.detail.chainId,X.chainId)){e.next=6;break}return C.error("".concat(t["your-deri-is-on"]," ").concat(V.name," ").concat(t["connect-to"]," ").concat(V.name," ").concat(t["to-claim"])),e.abrupt("return");case 6:if(0!==+X.unclaimed){e.next=9;break}return C.error(t["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return C.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,h.a.request("mintDToken",[v.detail.chainId,v.detail.account],{includeResponse:!0});case 15:if(!e.sent.success){e.next=20;break}return e.abrupt("return",!0);case 20:return C.error(t["claim-failed"]),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=7;break}return e.next=3,$();case 3:e.sent&&Y(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,v.connect();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}(),G=function(e){var c;switch(e){case 1:c=t.jan;break;case 2:c=t.feb;break;case 3:c=t.mar;break;case 4:c=t.apr;break;case 5:c=t.may;break;case 6:c=t.jun;break;case 7:c=t.jul;break;case 8:c=t.aug;break;case 9:c=t.sep;break;case 10:c=t.oct;break;case 11:c=t.nov;break;case 12:c=t.dec}return c},K=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c,a,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=5;break}return e.next=3,h.a.request("getUserFirstClaimInfo",[v.detail.account]);case 3:(t=e.sent).first_timestamp&&(c=new Date(1e3*t.first_timestamp),a=c.getFullYear(),s=c.getMonth()+1,s=G(s),i=c.getDate(),J("".concat(s," ").concat(i,", ").concat(a)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=window.setInterval(W,18e4);return W(),K(),function(){return clearInterval(e)}}),[v.detail.account]),Object(f.jsx)("div",{className:"mining-claim",children:Object(f.jsxs)("div",{className:"mining-claim-info",children:[Object(f.jsxs)("div",{className:"deri-num-slider",children:[Object(f.jsxs)("div",{className:"deri-claim-time",children:[t["current-epoch-remaining-time"]," : ",x]}),X.harvestDeriLp>0&&Object(f.jsxs)("div",{className:"deri-claim-text",children:[t["your-harvest-in-current"]," ",Object(f.jsx)("span",{className:"deri-num",children:Object(f.jsx)(j.a,{value:X.harvestDeriLp,decimalScale:2,displayType:"text",di:!0,thousandSeparator:!0})}),"   $DERI."]}),a&&Object(f.jsxs)("div",{className:"deri-claim-text",children:["You have ",Object(f.jsx)("span",{className:"deri-num",children:Object(f.jsx)(j.a,{value:U?0:X.unclaimed,displayType:"text",thousandSeparator:!0})}),"  unclaimed $DERI across all staked pools. You\u2019ve earned a total of ",Object(f.jsx)(j.a,{value:U?+X.claimed+ +X.unclaimed:X.claimed,displayType:"text",thousandSeparator:!0})," Deri token",z&&Object(f.jsxs)("span",{children:[" since ",z,". Woohoo!"]})]}),Object(f.jsx)("div",{className:"deri-claim-slider",children:Object(f.jsx)(o.a,{startTimestamp:N,nowTimestamp:P,endTimestamp:I})})]}),a&&Object(f.jsx)("div",{className:"cliam-button",children:Object(f.jsx)(l.a,{fontWeight:"bold",label:t["claim-all"],onClick:A})})]})})}},832:function(e,t,c){},833:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e},n=function(){function e(e,t){for(var c=0;c<t.length;c++){var a=t[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,c,a){return c&&e(t.prototype,c),a&&e(t,a),t}}(),s=c(8),i=j(s),r=j(c(102)),l=j(c(22)),o=j(c(834)),d=j(c(835)),u=c(836);function j(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c.handleClick=c.handleClick.bind(c),c.handleTouchStart=c.handleTouchStart.bind(c),c.handleTouchMove=c.handleTouchMove.bind(c),c.handleTouchEnd=c.handleTouchEnd.bind(c),c.handleFocus=c.handleFocus.bind(c),c.handleBlur=c.handleBlur.bind(c),c.previouslyChecked=!(!e.checked&&!e.defaultChecked),c.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},c}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var c=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:c})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,u.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var c=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>c?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<c&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var c=this.props.icons;return c?void 0===c[e]?t.defaultProps.icons[e]:c[e]:null}},{key:"render",value:function(){var e=this,t=this.props,c=t.className,n=(t.icons,function(e,t){var c={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(c[a]=e[a]);return c}(t,["className","icons"])),s=(0,r.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},c);return i.default.createElement("div",{className:s,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",a({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(s.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:i.default.createElement(o.default,null),unchecked:i.default.createElement(d.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},834:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=c(8),s=(a=n)&&a.__esModule?a:{default:a};t.default=function(){return s.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},s.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},835:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=c(8),s=(a=n)&&a.__esModule?a:{default:a};t.default=function(){return s.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},s.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},836:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var c=t[0];return{x:c.clientX,y:c.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},837:function(e,t,c){},838:function(e,t,c){},839:function(e,t,c){"use strict";t.a=c.p+"static/media/staked.45c27f0b.svg"},970:function(e,t,c){},971:function(e,t,c){},972:function(e,t,c){}}]);
//# sourceMappingURL=8.b854f584.chunk.js.map