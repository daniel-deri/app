(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[20],{1291:function(e,t,s){},1292:function(e,t,s){},1387:function(e,t,s){"use strict";s.r(t);var l=s(4),c=s(666),a=s(613),n=s.n(a),i=(s(1291),s(1292),s(41)),o=s(907),r=s(821),d=s(13);function j({optionPools:e,v1Pools:t,v2Pools:s,openPools:l,type:c,lang:a}){return Object(d.jsxs)("div",{children:[""===c&&Object(d.jsxs)("div",{className:"official-pool",children:[Object(d.jsx)("div",{className:"pools",children:e.map(((e,t)=>Object(d.jsx)(o.a,{group:e,lang:a},t)))}),Object(d.jsx)("div",{className:"pools",children:s.map(((e,t)=>Object(d.jsx)(o.a,{group:e,lang:a},t)))}),Object(d.jsx)("div",{className:"pools",children:t.map(((e,t)=>Object(d.jsx)(o.a,{group:e,lang:a},t)))})]}),"options"===c&&Object(d.jsx)("div",{className:"official-pool",children:Object(d.jsx)("div",{className:"pools",children:e.map(((e,t)=>Object(d.jsx)(o.a,{group:e,lang:a},t)))})}),"futures"===c&&Object(d.jsxs)("div",{className:"official-pool",children:[Object(d.jsx)("div",{className:"pools",children:s.map(((e,t)=>Object(d.jsx)(o.a,{group:e,lang:a},t)))}),Object(d.jsx)("div",{className:"pools",children:t.map(((e,t)=>Object(d.jsx)(o.a,{group:e,lang:a},t)))})]}),"opens"===c&&Object(d.jsxs)("div",{className:"pools open-pool",children:[l.map(((e,t)=>Object(d.jsx)(o.a,{group:e,lang:a},t))),l.length>0&&Object(d.jsx)(r.a,{lang:a})]})]})}var b=s(58),p=s(616),u=s(8),O=s(21),m=s(100),h=s(23),x=s(624);const f=b[u.a.get()].chainInfo;function v({group:e,lang:t,index:s,wallet:l}){const{pool:c,list:a}=e;return Object(d.jsxs)("div",{className:"pool-list",children:[Object(d.jsxs)("div",{className:"pool-list-header",children:[Object(d.jsxs)("div",{className:"list-header-left",children:[Object(d.jsx)("div",{className:"l-h-network",children:c.network&&c.network.toUpperCase()}),Object(d.jsxs)("div",{className:"l-h-y-ad",children:[Object(d.jsxs)("span",{className:"symbol",children:[Object(d.jsxs)("span",{className:"symbol-label",children:[t.symbol," : "]}),Object(d.jsx)("span",{className:"symbol-value",children:c.symbol})]}),Object(d.jsxs)("span",{className:"add",children:[Object(d.jsxs)("span",{className:"add-label",children:[t.address," : "]}),c.airdrop?"--":Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${f[c.chainId]&&f[c.chainId].viewUrl}/address/${c.address}`,children:c.formatAdd})]})]})]}),Object(d.jsx)("div",{className:"list-header-right",children:t[c.version]})]}),Object(d.jsx)("div",{className:"pool-list-body",children:a.map(((e,s)=>Object(d.jsx)(g,{index:s,item:e,lang:t,wallet:l,pool:c})))})]},s)}function g({index:e,item:t,lang:s,wallet:c,pool:a}){const[n,i]=Object(l.useState)(!1),[o,r]=Object(l.useState)(""),j=(Object(O.useHistory)(),()=>{c.connect().then((()=>{i(!0)}))}),b=async()=>{let e=await Object(u.P)(c.detail.account);e.valid?Object(h.e)(c.detail.chainId,e.chainId)?(await Object(u.jb)(e.chainId,c.detail.account)).success||alert(s["claim-failed"]):alert(s["please-switch-to-BSC-to-claim-deri"]):alert(s["no-deri-to-claim"])};return Object(l.useEffect)((()=>{if(t&&t.airdrop)c.isConnected()?r(Object(d.jsx)("a",{href:"#",onClick:b,children:s.claim})):r(Object(d.jsx)("a",{href:"#",onClick:j,children:s["connect-wallet"]}));else{let e=`/mining/${a.version||"v1"}/${a.chainId}/${t.type}/${t.symbol}/${t.bTokenSymbol}/${a.address}`;t.bTokenId&&(e=`${e}?baseTokenId=${t.bTokenId}`),t.symbolId&&(e=e.indexOf("?")>0?`${e}&symbolId=${t.symbolId}`:`${e}?symbolId=${t.symbolId}`),r(Object(d.jsx)(m.b,{to:e,children:s.staking}))}return()=>{}}),[c.detail.account,n]),Object(d.jsxs)("div",{className:"list-item",children:[Object(d.jsxs)("span",{className:"col btoken",children:[Object(d.jsx)("span",{className:`logo ${t.bTokenSymbol}`}),Object(d.jsx)("span",{className:"base-token",children:t.bTokenSymbol})]}),Object(d.jsxs)("span",{className:"col",children:[Object(d.jsx)("div",{className:"col-label",children:t.airdrop?s.total:s["pool-liq"]}),Object(d.jsx)("div",{className:"col-value",children:Object(d.jsx)(p.a,{value:t.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:t.lpApy?7:0})})]}),Object(d.jsxs)("span",{className:"col",children:[Object(d.jsx)("div",{className:"col-label",children:s.multiplier}),Object(d.jsx)(x.a,{children:Object(d.jsx)("div",{className:"col-value",tip:s["multiplier-tip"],children:Object(d.jsx)("span",{className:"underline",children:Object(d.jsx)(p.a,{value:t.multiplier,suffix:"x"})})})})]}),Object(d.jsxs)("span",{className:"col",children:[Object(d.jsx)("div",{className:"col-label",children:s.apy}),Object(d.jsx)("div",{className:"col-value",children:Object(d.jsxs)("span",{children:[Object(d.jsx)(x.a,{block:!1,children:Object(d.jsx)("span",{className:t.lpApy?"sushi-apy-underline":"",tip:t.lpApy&&s["deri-apy"],children:t.apy?Object(d.jsx)(p.a,{value:t.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"})}),t.lpApy&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:" + "}),Object(d.jsx)(x.a,{block:!1,children:Object(d.jsxs)("span",{className:t.lpApy?"sushi-apy-underline":"",tip:t.lpApy&&t.label,children:[" ",Object(d.jsx)(p.a,{value:t.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})})]})]})})]}),Object(d.jsxs)("span",{className:"col",children:[Object(d.jsx)("div",{className:"col-label",children:s["claimed-deri"]}),Object(d.jsx)("div",{className:"col-value",children:Object(d.jsx)(p.a,{value:t.claimed,decimalScale:2})})]}),Object(d.jsxs)("span",{className:"col",children:[Object(d.jsx)("div",{className:"col-label",children:s["unclaimed-deri"]}),Object(d.jsx)("div",{className:"col-value",children:Object(d.jsx)(p.a,{value:t.unclaimed,decimalScale:2})})]}),Object(d.jsxs)("span",{className:"col",children:[Object(d.jsx)("div",{className:"col-label",children:s["mining-pnl"]}),Object(d.jsx)("div",{className:"col-value",children:Object(d.jsx)(p.a,{value:t.pnl,decimalScale:2})})]}),Object(d.jsx)("span",{className:"col",children:Object(d.jsxs)("div",{className:"staking",children:[o," >"]})})]},e)}function y({optionPools:e,v1Pools:t,v2Pools:s,openPools:l,type:c,lang:a,wallet:n}){return Object(d.jsxs)("div",{children:[""===c&&Object(d.jsxs)(d.Fragment,{children:[e.map(((e,t)=>Object(d.jsx)(v,{group:e,lang:a,index:t,wallet:n},t))),s.map(((e,t)=>Object(d.jsx)(v,{group:e,lang:a,index:t,wallet:n},t))),t.map(((e,t)=>Object(d.jsx)(v,{group:e,lang:a,index:t,wallet:n},t)))]}),"futures"===c&&Object(d.jsxs)(d.Fragment,{children:[s.map(((e,t)=>Object(d.jsx)(v,{group:e,lang:a,index:t,wallet:n},t))),t.map(((e,t)=>Object(d.jsx)(v,{group:e,lang:a,index:t,wallet:n},t)))]}),"options"===c&&Object(d.jsx)(d.Fragment,{children:e.map(((e,t)=>Object(d.jsx)(v,{group:e,lang:a,index:t,wallet:n},t)))}),"opens"===c&&Object(d.jsx)(d.Fragment,{children:l.map(((e,t)=>Object(d.jsx)(v,{group:e,lang:a,index:t,wallet:n},t)))})]})}var N=s(823);const w=u.a.get(),{chainInfo:k}=b[w],A=N.openPoolList;t.default=Object(i.b)("version","loading","wallet")(Object(i.c)((function({lang:e,loading:t,wallet:s}){const[a,i,o,r,b,p,O]=Object(c.a)(!0,s),[m,x]=Object(l.useState)([]),[f,v]=Object(l.useState)(""),[g,N]=Object(l.useState)("card"),S=n()("filter-area",f),I=async e=>{if(v(e===f?"":e),"opens"===e&&0===m.length){t.loading();let e=Object(h.c)(await(async()=>(await u.mb.update(),Object(u.p)(w,"v2_lite_open")))());e=e.filter((e=>!A.includes(e.pool))),e=e.map((e=>Object(h.r)(e,s,k))),Promise.all(e).then((s=>{e=Object(h.l)(s);for(let t=0,l=e.length;t<l;t++){let t,s;for(let l=0,c=e.length;l<c;l++)"--"===e[l].pool.symbol&&(t=l,s=e[l]);e.splice(t,1),e.push(s)}x(e),t.loaded()}))}};return Object(l.useEffect)((()=>(a?t.loaded():t.loading(),console.log(s.isConnected()),()=>{})),[a,s]),Object(d.jsxs)("div",{className:"pool-list",children:[Object(d.jsx)("div",{className:"checkout-pools",children:Object(d.jsxs)("div",{className:S,children:[Object(d.jsx)("div",{className:"futures",onClick:()=>I("futures"),children:e.futures}),Object(d.jsx)("div",{className:"options",onClick:()=>I("options"),children:e.options}),Object(d.jsx)("div",{className:"separator-line"}),Object(d.jsx)("div",{className:"opens",onClick:()=>I("opens"),children:e["open-zone"]})]})}),"list"===g?Object(d.jsx)(y,{type:f,optionPools:b,v1Pools:o,v2Pools:r,openPools:m,lang:e,wallet:s}):Object(d.jsx)(j,{type:f,optionPools:b,v1Pools:o,v2Pools:r,openPools:m,lang:e})]})})))},614:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var l=s(4),c=s(13);function a({btnText:e,className:t,disabled:s,click:a,afterClick:n,checkApprove:i,wallet:o,spec:r,lang:d}){const[j,b]=Object(l.useState)(s?"disabled":"enabled"),[p,u]=Object(l.useState)(!0),[O,m]=Object(l.useState)(!1),[h,x]=Object(l.useState)(e),f=Object(l.useRef)(null),v=()=>{b("disabled"),m(!0),f.current&&(f.current.style.display="inline-block")},g=()=>{f.current&&(f.current.style.display="none"),b("enabled"),m(!1)};return Object(l.useEffect)((()=>((async()=>{if(i&&o&&o.detail.account){const e=await o.isApproved(r.pool,r.bTokenId);u(e)}})(),()=>{})),[o,r,i]),Object(l.useEffect)((()=>(e&&x(e),()=>{})),[e]),Object(c.jsxs)("button",{className:t,onClick:()=>{p?(async()=>{if("enabled"!==j)return;v(),await a()&&n&&n(),g()})():(async()=>{v(),(await o.approve(r.pool,r.bTokenId)).success?u(!0):(u(!1),alert(d["approve-failed"])),g()})()},children:[Object(c.jsx)("span",{className:"btn-loading-wrap",children:Object(c.jsx)("span",{ref:f,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),O?d.pending:p?h:d.approve]})}},616:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var l=s(4),c=s(621),a=s(13);function n(e){const[t,s]=Object(l.useState)(Object(a.jsx)("span",{className:"loading-line"}));return Object(l.useEffect)((()=>{const{allowZero:t,...l}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&s(Object(a.jsx)(c.a,{...l,displayType:"text"})),()=>{}}),[e.value]),t}},624:function(e,t,s){"use strict";var l=s(4),c=s(13);t.a=function(e){const t=Object(l.useRef)(null);return Object(l.useEffect)((()=>{const e=t.current;if(e){e.querySelectorAll("[tip]").forEach((t=>{let s=null;t.addEventListener("mouseover",(e=>{const t=e.currentTarget.getAttribute("tip");if(t){const l=`hover-box-${(new Date).getTime()}`;s=document.body.querySelector(`#${l}`),s=document.createElement("div"),s.style.cssText=`z-index : 9;min-width : 100px;max-width : ${window.screen.width}px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;`,document.body.appendChild(s),s.innerText=t,s.id=l,s.style.display="block";const c=e.currentTarget.getBoundingClientRect();if(s.style.top=`${c.y+c.height+window.document.documentElement.scrollTop}px`,s.offsetWidth+e.pageX>window.screen.width)if(e.pageX-s.offsetWidth>=0)s.style.left=e.pageX-s.offsetWidth+"px";else{const t=e.pageX-s.offsetWidth/2>0?e.pageX-s.offsetWidth/2:0;s.style.left=`${t}px`}else s.style.left=`${e.pageX}px`}})),e.addEventListener("mouseout",(e=>{s&&s.remove()}))}))}return()=>{t.current=null}}),[e.title]),e.block?Object(c.jsx)("div",{ref:t,children:e.children}):Object(c.jsx)("span",{ref:t,children:e.children})}},666:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var l=s(0),c=s.n(l),a=s(1),n=s(14),i=s(4),o=s(8),r=s(58),d=s(23),j=s(10),b=(s(658),o.a.get()),p=r[b].chainInfo;function u(e,t,s){var l=Object(i.useState)(!1),r=Object(n.a)(l,2),u=r[0],O=r[1],m=Object(i.useState)([]),h=Object(n.a)(m,2),x=h[0],f=h[1],v=Object(i.useState)([]),g=Object(n.a)(v,2),y=g[0],N=g[1],w=Object(i.useState)([]),k=Object(n.a)(w,2),A=k[0],S=k[1],I=Object(i.useState)([]),T=Object(n.a)(I,2),F=T[0],C=T[1],B=Object(i.useState)([]),P=Object(n.a)(B,2),E=P[0],L=P[1],J=Object(i.useState)([]),q=Object(n.a)(J,2),W=q[0],Y=q[1];return Object(i.useEffect)((function(){return function(){var l=Object(a.a)(c.a.mark((function l(){var n,i,r,u,m,h,x,v;return c.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:n=Object(o.p)(b,"v2"),i=Object(o.p)(b,"v2_lite"),r=Object(o.p)(b,"option"),u=n.concat(i).concat(r),s&&(m=Object(o.p)(b,"v1"),h=Object(o.K)(b),u=m.concat(h)),u=(u=Object(d.c)(u)).map((function(e){return Object(d.r)(e,t,p)})),x=Object(o.z)(b).map(function(){var e=Object(a.a)(c.a.mark((function e(t){var s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.pool||"",Object(d.p)(t.pool),Object(d.q)(t.pool)&&(l=j.a.get("mining","sushi-apy")),Object(d.o)(t.pool)&&(l=j.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:p[t.chainId].name,formatAdd:Object(d.g)(s),address:s,type:"lp",label:l,buttonText:"STAKING"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=u.concat(x),Promise.all(v).then((function(t){(new Date).getTime()<=16356744e5&&t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1740",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"});var s=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),l=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),c=t.filter((function(e){return"option"===e.version&&!e.retired})),a=t.filter((function(e){return e.retired&&!e.premining})),n=t.filter((function(e){return e.retired&&e.premining})),i=t.filter((function(e){return e.isOpen}));e&&(s=Object(d.l)(s),l=Object(d.l)(l),c=Object(d.l)(c),i=Object(d.l)(i)),S(l),N(s),C(c),f(t),L(a),Y(n),O(!0)}));case 10:case"end":return l.stop()}}),l)})));return function(){return l.apply(this,arguments)}}()(),function(){return x.length=0}}),[]),[u,x,y,A,F,E,W]}},766:function(e,t){},821:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(822);var l=s(100),c=s(142),a=s(13);function n({lang:e}){return Object(a.jsxs)("div",{className:"pool-placehold",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("div",{className:"title",children:e["add-pool"]})}),Object(a.jsxs)("div",{className:"pool-body",children:[Object(a.jsx)("div",{className:"info",children:Object(a.jsx)("div",{children:e["add-pool-text"]})}),Object(a.jsxs)("div",{className:"btn-c",children:[c.isMobile&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{onClick:()=>{alert(e["please-operate"])},children:e.add})}),c.isBrowser&&Object(a.jsx)(l.b,{to:"/addpool",children:Object(a.jsx)("button",{children:e.add})})]})]})]})}},822:function(e,t,s){},823:function(e){e.exports=JSON.parse('{"openPoolList":["0xbe63f663349059F436364aC1700603d9570bFBc3","0x6D1c634964CA200faaF384CD767020C2c64466aC"]}')},907:function(e,t,s){"use strict";var l=s(4),c=s(21),a=s(58),n=s(8),i=s(616),o=s(41),r=s(614),d=s(23),j=s(613),b=s.n(j),p=s(624),u=(s(658),s(13));const O=a[n.a.get()].chainInfo;function m({wallet:e,pool:t,card:s,index:a,list:o,lang:j}){const[b,O]=Object(l.useState)(""),[m,h]=Object(l.useState)(!1),[x,f]=Object(l.useState)({}),v=Object(c.useHistory)(),g=()=>{e.connect().then((()=>{h(!0)}))},y=async()=>{let t=await Object(n.P)(e.detail.account);t.valid?Object(d.e)(e.detail.chainId,t.chainId)?(await Object(n.jb)(t.chainId,e.detail.account)).success||alert(j["claim-failed"]):alert(j["please-switch-to-BSC-to-claim-deri"]):alert(j["no-deri-to-claim"])};return Object(l.useEffect)((()=>{if(t&&t.airdrop)e.isConnected()?O(Object(u.jsx)(r.a,{btnText:j.claim,click:y,lang:j})):O(Object(u.jsx)(r.a,{btnText:j["connect-wallet"],click:g,lang:j}));else{let e=`/mining/${t.version||"v1"}/${t.chainId}/${s.type}/${s.symbol}/${s.bTokenSymbol}/${t.address}`;s.bTokenId&&(e=`${e}?baseTokenId=${s.bTokenId}`),s.symbolId&&(e=e.indexOf("?")>0?`${e}&symbolId=${s.symbolId}`:`${e}?symbolId=${s.symbolId}`),O(Object(u.jsx)("button",{onClick:()=>(e=>{v.push(e)})(e),children:j.staking}))}t&&t.airdrop?f({liquidity:s.liquidity,airdrop:t.airdrop}):(async e=>{const s=await Object(n.F)(e.chainId,e.pool,e.bTokenId),l={liquidity:(await Object(n.G)(e.chainId,e.pool,e.bTokenId)).liquidity,apy:(100*+s.apy).toFixed(2),multiplier:s.multiplier};if(e.isLp){const s=(100*+(await Object(n.B)(e.chainId,e.pool)).apy2).toFixed(2);l.lpApy=s,l.isCakeLP=Object(d.o)(t.address),l.isSushiLP=Object(d.q)(t.address)}f(l)})(s)}),[e.detail.account,m,s]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("div",{className:"top-info",children:[Object(u.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==t.version&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:`logo ${s.bTokenSymbol}`})}),"v2_lite_open"===t.version&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:"bg-logo",children:Object(u.jsx)("img",{onError:e=>{e.target.src="data:image/png;base64,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"},src:`https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/${s.bTokenSymbol}.png`})})}),Object(d.o)(t.address)&&Object(u.jsx)(p.a,{children:Object(u.jsx)("span",{tip:j["cake-lp-hover"],className:"base-token lp-token",children:s.bTokenSymbol})}),Object(d.q)(t.address)&&Object(u.jsx)(p.a,{children:Object(u.jsx)("span",{tip:j["sushi-lp-hover"],className:"base-token lp-token",children:s.bTokenSymbol})}),!s.isLp&&Object(u.jsx)("span",{className:"base-token",children:s.bTokenSymbol})]}),Object(u.jsxs)("div",{className:"pool-detail",children:[Object(u.jsxs)("div",{className:"liq",children:[Object(u.jsx)("span",{className:"title",children:s.airdrop?j.total:j["pool-liq"]}),Object(u.jsx)(i.a,{value:x.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:x.lpApy?7:0})]}),Object(u.jsx)("div",{className:"multiplier",children:x.multiplier&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:j.multiplier}),Object(u.jsx)(p.a,{block:!1,children:Object(u.jsxs)("span",{className:"multiplier-value",tip:j["multiplier-tip"],children:[x.multiplier,"x"]})})]})}),Object(u.jsx)("div",{className:`apy ${x.lpApy&&"lp-apy"}`,children:!s.isOpen&&!s.airdrop&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:j.apy}),Object(u.jsx)(p.a,{block:!1,title:x.lpApy,children:Object(u.jsx)("span",{className:x.lpApy?"sushi-apy-underline":"",tip:x.lpApy?j["deri-apy"]:"",children:Object(u.jsx)(i.a,{value:x.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})}),x.lpApy&&x.lpApy>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:"+"}),Object(u.jsx)(p.a,{block:!1,children:Object(u.jsx)("span",{className:x.lpApy?"sushi-apy-underline":"",tip:s.label,children:Object(u.jsx)(i.a,{value:x.lpApy,displayType:"text",suffix:"%",decimalScale:2})})})]})]})})]})]}),Object(u.jsx)("div",{className:"bottom-btn",children:b})]}),a!==o.length-1&&Object(u.jsx)("div",{className:"top-line"})]})}t.a=Object(o.b)("wallet","version")(Object(o.c)((function({wallet:e,group:t={},lang:s}){const{pool:l,list:c}=t,a=b()("pool",{"only-one":1===c.length,full:5===c.length});return Object(u.jsxs)("div",{className:a,children:[Object(u.jsxs)("div",{className:"pool-header",children:[Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)("div",{className:"network",children:l.network&&l.network.toUpperCase()}),Object(u.jsxs)("div",{className:"pool-desc",children:[Object(u.jsxs)("span",{className:"symbol",children:[Object(u.jsxs)("span",{className:"symbol-label",children:[s.symbol,":"]}),Object(u.jsx)("span",{className:"symbol-value",children:l.symbol})]}),Object(u.jsxs)("span",{className:"address",children:[Object(u.jsxs)("span",{className:"address-label",children:[s.address,":"]}),l.airdrop?"--":Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${O[l.chainId]&&O[l.chainId].viewUrl}/address/${l.address}`,children:l.formatAdd})]})]})]}),Object(u.jsx)("div",{className:"version",children:s[l.version]})]}),Object(u.jsx)("div",{className:"pool-info",children:c.map(((t,a)=>Object(u.jsx)(m,{card:t,index:a,pool:l,list:c,wallet:e,lang:s},a)))})]})})))}}]);
//# sourceMappingURL=20.4fe62c9c.chunk.js.map