(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[28],{1333:function(e,t,c){},1334:function(e,t,c){},1371:function(e,t,c){"use strict";c.r(t);var a=c(4),n=(c(1333),c(1334),c(903)),i=c(666),s=c(41),r=c(100),l=c(13);t.default=Object(s.b)("version","loading")(Object(s.c)((function({version:e,lang:t,loading:c}){const[s,o,d,b,p,j,u]=Object(i.a)(e,null,!0);return Object(a.useEffect)((()=>(s?c.loaded():c.loading(),()=>{})),[s]),Object(l.jsxs)("div",{className:"retired",children:[Object(l.jsxs)("div",{className:"retired-title",children:[Object(l.jsx)("div",{className:"retired-pools",children:t["retired-markets"]}),t["v1-markets"]," ",Object(l.jsx)(r.b,{to:"/futures/lite/v1",children:t["v1-here"]})," ",t["to-close-position"],Object(l.jsx)("div",{className:"retired-pools",children:t["retired-pools"]}),t["retired-text"],Object(l.jsx)("a",{href:"https://app.deri.finance/#/mining",children:t["new-pools"]})]}),Object(l.jsx)("div",{className:"retired-mining-info",children:Object(l.jsx)("div",{className:"pools",children:j.map(((e,c)=>Object(l.jsx)(n.a,{pool:e,lang:t},c)))})}),Object(l.jsxs)("div",{className:"retired-title",children:[Object(l.jsxs)("div",{className:"premining",children:[" ",t["premining-pools"]]}),Object(l.jsx)("span",{children:t["premining-finished"]})]}),Object(l.jsx)("div",{className:"retired-mining-info",children:Object(l.jsx)("div",{className:"pools",children:u.map(((e,c)=>Object(l.jsx)(n.a,{pool:e,lang:t},c)))})})]})})))},614:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var a=c(4),n=c(13);function i({btnText:e,className:t,disabled:c,click:i,afterClick:s,checkApprove:r,wallet:l,spec:o,lang:d}){const[b,p]=Object(a.useState)(c?"disabled":"enabled"),[j,u]=Object(a.useState)(!0),[O,A]=Object(a.useState)(!1),[m,f]=Object(a.useState)(e),h=Object(a.useRef)(null),x=()=>{p("disabled"),A(!0),h.current&&(h.current.style.display="inline-block")},v=()=>{h.current&&(h.current.style.display="none"),p("enabled"),A(!1)};return Object(a.useEffect)((()=>((async()=>{if(r&&l&&l.detail.account){const e=await l.isApproved(o.pool,o.bTokenId);u(e)}})(),()=>{})),[l,o,r]),Object(a.useEffect)((()=>(e&&f(e),()=>{})),[e]),Object(n.jsxs)("button",{className:t,onClick:()=>{j?(async()=>{if("enabled"!==b)return;x(),await i()&&s&&s(),v()})():(async()=>{x(),(await l.approve(o.pool,o.bTokenId)).success?u(!0):(u(!1),alert(d["approve-failed"])),v()})()},children:[Object(n.jsx)("span",{className:"btn-loading-wrap",children:Object(n.jsx)("span",{ref:h,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),O?d.pending:j?m:d.approve]})}},616:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var a=c(4),n=c(621),i=c(13);function s(e){const[t,c]=Object(a.useState)(Object(i.jsx)("span",{className:"loading-line"}));return Object(a.useEffect)((()=>{const{allowZero:t,...a}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&c(Object(i.jsx)(n.a,{...a,displayType:"text"})),()=>{}}),[e.value]),t}},666:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var a=c(0),n=c.n(a),i=c(1),s=c(14),r=c(4),l=c(8),o=c(58),d=c(23),b=c(10),p=(c(658),l.a.get()),j=o[p].chainInfo;function u(e,t,c){var a=Object(r.useState)(!1),o=Object(s.a)(a,2),u=o[0],O=o[1],A=Object(r.useState)([]),m=Object(s.a)(A,2),f=m[0],h=m[1],x=Object(r.useState)([]),v=Object(s.a)(x,2),y=v[0],g=v[1],w=Object(r.useState)([]),N=Object(s.a)(w,2),S=N[0],k=N[1],I=Object(r.useState)([]),T=Object(s.a)(I,2),V=T[0],C=T[1],E=Object(r.useState)([]),Y=Object(s.a)(E,2),Z=Y[0],U=Y[1],B=Object(r.useState)([]),L=Object(s.a)(B,2),z=L[0],K=L[1];return Object(r.useEffect)((function(){return function(){var a=Object(i.a)(n.a.mark((function a(){var s,r,o,u,A,m,f,x;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=Object(l.p)(p,"v2"),r=Object(l.p)(p,"v2_lite"),o=Object(l.p)(p,"option"),u=s.concat(r).concat(o),c&&(A=Object(l.p)(p,"v1"),m=Object(l.K)(p),u=A.concat(m)),u=(u=Object(d.c)(u)).map((function(e){return Object(d.r)(e,t,j)})),f=Object(l.z)(p).map(function(){var e=Object(i.a)(n.a.mark((function e(t){var c,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.pool||"",Object(d.p)(t.pool),Object(d.q)(t.pool)&&(a=b.a.get("mining","sushi-apy")),Object(d.o)(t.pool)&&(a=b.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:j[t.chainId].name,formatAdd:Object(d.g)(c),address:c,type:"lp",label:a,buttonText:"STAKING"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=u.concat(f),Promise.all(x).then((function(t){(new Date).getTime()<=16356744e5&&t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1740",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"});var c=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),a=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),n=t.filter((function(e){return"option"===e.version&&!e.retired})),i=t.filter((function(e){return e.retired&&!e.premining})),s=t.filter((function(e){return e.retired&&e.premining})),r=t.filter((function(e){return e.isOpen}));e&&(c=Object(d.l)(c),a=Object(d.l)(a),n=Object(d.l)(n),r=Object(d.l)(r)),k(a),g(c),C(n),h(t),U(i),K(s),O(!0)}));case 10:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){return f.length=0}}),[]),[u,f,y,S,V,Z,z]}},766:function(e,t){},903:function(e,t,c){"use strict";var a=c(4),n=c(21),i=c(58),s=c(8),r=c(616),l=c(41),o=c(614),d=c(23),b=c(13);const p=i[s.a.get()].chainInfo;t.a=Object(l.b)("wallet","version")(Object(l.c)((function({wallet:e,version:t,pool:c,lang:i}){const[l,j]=Object(a.useState)(""),u=`logo ${c.bTokenSymbol}`,[O,A]=Object(a.useState)({}),m=Object(n.useHistory)(),f=()=>{e.connect()},h=async()=>{let t=await Object(s.P)(e.detail.account);t.valid?Object(d.e)(e.detail.chainId,t.chainId)?(await Object(s.jb)(t.chainId,e.detail.account)).success||alert(i["claim-failed"]):alert(i["please-switch-to-BSC-to-claim-deri"]):alert(i["no-deri-to-claim"])};return Object(a.useEffect)((()=>{if(c&&c.airdrop)e.isConnected()?j(Object(b.jsx)(o.a,{btnText:i.claim,click:h,lang:i})):j(Object(b.jsx)(o.a,{btnText:i["connect-wallet"],click:f,lang:i}));else if(c.premining)j(Object(b.jsx)("a",{target:"_blank",href:c.url,children:i.staking}));else{let e=`/mining/${c.version||"v1"}/${c.chainId}/${c.type}/${c.symbol}/${c.bTokenSymbol}/${c.address}`;c.bTokenId&&(e=`${e}?baseTokenId=${c.bTokenId}`),c.symbolId&&(e=e.indexOf("?")>0?`${e}&symbolId=${c.symbolId}`:`${e}?symbolId=${c.symbolId}`),j(Object(b.jsx)("button",{onClick:()=>(e=>{m.push(e)})(e),children:i.staking}))}return c&&(async e=>{const t=await Object(s.F)(e.chainId,e.pool,e.bTokenId),c={liquidity:(await Object(s.G)(e.chainId,e.pool,e.bTokenId)).liquidity,apy:(100*+t.apy).toFixed(2),multiplier:t.multiplier};if(e.isLp){const t=(100*+(await Object(s.B)(e.chainId,e.pool)).apy2).toFixed(2);c.lpApy=t}A(c)})(c),()=>{}}),[c]),Object(b.jsxs)("div",{className:"pool",children:[Object(b.jsxs)("div",{className:"pool-header",children:[Object(b.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(b.jsxs)("div",{className:"pool-label",children:["v1"===c.version&&Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===c.version&&Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(b.jsx)("div",{className:"pool-info",children:Object(b.jsxs)("div",{className:"info-center",children:[Object(b.jsxs)("div",{className:"top-info",children:[Object(b.jsx)("div",{className:u}),Object(b.jsxs)("div",{className:"pool-detail",children:[Object(b.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"title",children:c.airdrop?i.total:i["pool-liq"]}),Object(b.jsx)(r.a,{value:O.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(x=c.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===x||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===x?7:0)})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:i.symbol}),c.symbol]}),Object(b.jsxs)("div",{className:"apy",children:[Object(b.jsx)("span",{children:i.apy}),Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{className:O.lpApy?"sushi-apy-underline":"",tip:O.lpApy&&i["deri-apy"],children:O.apy?Object(b.jsx)(r.a,{value:O.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),O.lpApy&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{children:" + "}),Object(b.jsxs)("span",{className:O.lpApy?"sushi-apy-underline":"",tip:O.lpApy&&c.label,children:[" ",Object(b.jsx)(r.a,{value:O.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(b.jsxs)("div",{className:"pool-address",children:[Object(b.jsx)("span",{children:i.address}),c.airdrop?"--":Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:p[c.chainId]&&`${p[c.chainId].viewUrl}/address/${c.address||c.pool}`,children:c.formatAdd})]})]})]}),Object(b.jsx)("div",{className:"bottom-btn",children:l})]})})]});var x})))}}]);
//# sourceMappingURL=28.fd7d74b4.chunk.js.map