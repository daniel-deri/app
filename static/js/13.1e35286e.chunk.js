(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[13],{1165:function(e,t,n){},1166:function(e,t,n){},1198:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n(6),r=(n(1165),n(1166),n(616)),s=n.n(r),i=n(730),o=n(636),l=n(47),u=n(719),d=n(18);t.default=Object(l.b)("version","loading")(Object(l.c)((function(e){var t=e.lang,n=e.loading,r=Object(o.a)(!0),l=Object(c.a)(r,8),p=l[0],b=(l[1],l[2]),j=l[3],f=l[4],m=(l[5],l[6],l[7]),O=Object(a.useState)("all"),h=Object(c.a)(O,2),x=h[0],v=h[1],y=s()("filter-area",x),g=function(e){v(e===x?"all":e)};return Object(a.useEffect)((function(){return p?n.loaded():n.loading(),function(){}}),[p]),Object(d.jsxs)("div",{className:"mining-info",children:[Object(d.jsxs)("div",{className:y,children:[Object(d.jsx)("span",{className:"future-zone",onClick:function(){return g("future")},children:t.futures}),Object(d.jsx)("span",{className:"option-zone",onClick:function(){return g("option")},children:t.options}),Object(d.jsx)("span",{className:"separator-line"}),Object(d.jsx)("span",{className:"open-zone",onClick:function(){return g("open")},children:t["open-zone"]})]}),"all"===x&&Object(d.jsxs)("div",{className:"pools",children:[f.map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)})),j.concat(b).map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)}))]}),"future"===x&&Object(d.jsx)("div",{className:"pools",children:j.concat(b).map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)}))}),"option"===x&&Object(d.jsx)("div",{className:"pools",children:Object(d.jsx)("div",{className:"pools",children:f.map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)}))})}),"open"===x&&Object(d.jsxs)("div",{className:"pools open-pool",children:[m.map((function(e,n){return Object(d.jsx)(i.a,{group:e,lang:t},n)})),Object(d.jsx)(u.a,{lang:t})]})]})})))},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),r=n(1),s=n(12),i=n(6),o=n(18);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,u=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(c?"disabled":"enabled"),m=Object(s.a)(f,2),O=m[0],h=m[1],x=Object(i.useState)(!0),v=Object(s.a)(x,2),y=v[0],g=v[1],k=Object(i.useState)(!1),A=Object(s.a)(k,2),N=A[0],w=A[1],I=Object(i.useState)(t),S=Object(s.a)(I,2),T=S[0],F=S[1],C=Object(i.useRef)(null),B=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,l();case 5:e.sent&&u&&u(),J();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){h("disabled"),w(!0),C.current&&(C.current.style.display="inline-block")},J=function(){C.current&&(C.current.style.display="none"),h("enabled"),w(!1)},W=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(j["approve-failed"])),J();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return W(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&F(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){y?B():L()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?j.pending:y?T:j.approve]})}},617:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(6),a=n(619),r=n(18);function s(e){const[t,n]=Object(c.useState)("--");return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&n(Object(r.jsx)(a.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},620:function(e,t,n){"use strict";var c=n(6),a=n(18);t.a=function(e){const t=Object(c.useRef)(null);return Object(c.useEffect)((()=>{const e=t.current;if(e){e.querySelectorAll("[title]").forEach((t=>{const n=`hover-box-${(new Date).getTime()}`;let c=document.body.querySelector(`#${n}`);t.addEventListener("mouseover",(e=>{c||(c=document.createElement("div"),c.style.cssText=`z-index : 1;min-width : 100px;max-width : ${window.screen.width}px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;`,document.body.appendChild(c),c.innerText=e.currentTarget.getAttribute("title"),e.currentTarget.setAttribute("title","")),c.id=n,c.style.display="block";const t=e.currentTarget.getBoundingClientRect();if(c.style.top=`${t.y+t.height+window.document.documentElement.scrollTop}px`,c.offsetWidth+e.pageX>window.screen.width)if(e.pageX-c.offsetWidth>=0)c.style.left=e.pageX-c.offsetWidth+"px";else{const t=e.pageX-c.offsetWidth/2>0?e.pageX-c.offsetWidth/2:0;c.style.left=`${t}px`}else c.style.left=`${e.pageX}px`})),e.addEventListener("mouseout",(e=>{c&&(c.style.display="none")}))}))}return()=>{t.current=null}}),[]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},636:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(0),a=n.n(c),r=n(1),s=n(12),i=n(6),o=n(14),l=n(95),u=n(24),d=n(16),p=(n(629),o.a.get()),b=l[p].chainInfo;function j(e,t){var n=Object(i.useState)(!1),c=Object(s.a)(n,2),l=c[0],j=c[1],f=Object(i.useState)([]),m=Object(s.a)(f,2),O=m[0],h=m[1],x=Object(i.useState)([]),v=Object(s.a)(x,2),y=v[0],g=v[1],k=Object(i.useState)([]),A=Object(s.a)(k,2),N=A[0],w=A[1],I=Object(i.useState)([]),S=Object(s.a)(I,2),T=S[0],F=S[1],C=Object(i.useState)([]),B=Object(s.a)(C,2),E=B[0],J=B[1],W=Object(i.useState)([]),L=Object(s.a)(W,2),q=L[0],Y=L[1],K=Object(i.useState)([]),z=Object(s.a)(K,2),M=z[0],Q=z[1];return Object(i.useEffect)((function(){return function(){var n=Object(r.a)(a.a.mark((function n(){var c,s,i,l,f,m,O,x,v,y,k,A,N;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(){var e=Object(r.a)(a.a.mark((function e(n){var c,r,s,i,l,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.D)(n.chainId,n.pool,n.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return c=e.t0,e.next=8,Object(o.C)(n.chainId,n.pool,n.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(r=e.t1,s=n.pool||"",i={network:b[n.chainId]&&b[n.chainId].name,liquidity:c.liquidity,apy:(100*+r.apy).toFixed(2),formatAdd:Object(u.e)(s),address:s,type:"perpetual",buttonText:"STAKING",multiplier:r.multiplier},!t||!t.isConnected()){e.next=23;break}return e.next=17,Object(o.u)(n.chainId,n.pool,t.detail.account,n.bTokenId).catch((function(e){return console.log(e)}));case 17:return l=e.sent,e.next=20,Object(o.K)(t.detail.account);case 20:d=e.sent,l&&(i.pnl=l.pnl),d&&(i.claimed=d.total,i.unclaimed=d.amount);case 23:return e.abrupt("return",Object.assign(n,i));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e){var t=[];return e.reduce((function(e,t){var n=e.find((function(e){return Object(u.c)(e.pool.address,t.address)}));if(n&&n.list.length<5)n.list.push(t);else{var c={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(c)}return e}),t),t},i=Object(o.n)(p,"v2"),l=Object(o.n)(p,"v1"),f=Object(o.n)(p,"v2_lite"),m=Object(o.n)(p,"option"),O=Object(o.H)(p),x=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Y.update();case 2:return e.abrupt("return",Object(o.n)(p,"v2_lite_open"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.next=10,x();case 10:v=n.sent,y=[],k=(k=i.concat(l).concat(O).concat(f).concat(m).concat(v).reduce((function(e,t){var n=e.findIndex((function(e){return e.chainId===t.chainId&&e.pool===t.pool&&t.version===e.version}));return("v2"===t.version||"v2_lite"===t.version||"option"===t.version||"v2_lite_open"===t.version)&&n>-1?-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):-1===e.findIndex((function(e){return e.bTokenSymbol===t.bTokenSymbol}))&&e.push(t):e.push(t),e}),y)).map(c),A=Object(o.w)(p).map(function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,s,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.D)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.C)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(c=e.t1,r=t.pool||"",!Object(u.m)(t.pool)){e.next=18;break}return e.next=16,Object(o.y)(t.chainId,t.pool);case 16:l=e.sent,s=l&&(100*+l.apy2).toFixed(2);case 18:return Object(u.n)(t.pool)&&(i=d.a.get("mining","sushi-apy")),Object(u.l)(t.pool)&&(i=d.a.get("mining","cake-apy")),e.abrupt("return",Object.assign(t,{network:b[t.chainId].name,liquidity:n.liquidity,apy:(100*+c.apy).toFixed(2),formatAdd:Object(u.e)(r),lpApy:s,address:r,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=k.concat(A),Promise.all(N).then((function(t){t.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"6048",symbol:"--",airdrop:!0,chainId:56,buttonText:"CLAIM"});var n=t.filter((function(e){return("v1"===e.version||!e.version)&&!e.retired})),c=t.filter((function(e){return("v2"===e.version||"v2_lite"===e.version)&&!e.retired})),a=t.filter((function(e){return"option"===e.version&&!e.retired})),r=t.filter((function(e){return e.retired&&!e.premining})),i=t.filter((function(e){return e.retired&&e.premining})),o=t.filter((function(e){return e.isOpen}));e&&(n=s(n),c=s(c),a=s(a),o=s(o)),w(c),g(n),F(a),h(t),J(r),Y(i),Q(o),j(!0)}));case 17:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){return O.length=0}}),[]),[l,O,y,N,T,E,q,M]}},682:function(e,t){},719:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(720);var c=n(111),a=n(112),r=n(18);function s(e){var t=e.lang;return Object(r.jsxs)("div",{className:"pool-placehold",children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("div",{className:"title",children:t["add-pool"]})}),Object(r.jsxs)("div",{className:"pool-body",children:[Object(r.jsx)("div",{className:"info",children:Object(r.jsx)("div",{children:t["add-pool-text"]})}),Object(r.jsxs)("div",{className:"btn-c",children:[a.isMobile&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{onClick:function(){alert(t["please-operat"])},children:t.add})}),a.isBrowser&&Object(r.jsx)(c.b,{to:"/addpool",children:Object(r.jsx)("button",{children:t.add})})]})]})]})}},720:function(e,t,n){},730:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(1),s=n(12),i=n(6),o=n(23),l=n(95),u=n(14),d=n(617),p=n(47),b=n(615),j=n(24),f=n(616),m=n.n(f),O=n(620),h=(n(629),n.p,n(18)),x=l[u.a.get()].chainInfo;function v(e){var t=e.wallet,n=e.pool,c=e.card,l=e.index,p=e.list,f=e.lang,m=Object(i.useState)(""),x=Object(s.a)(m,2),v=x[0],y=x[1],g=Object(i.useState)(!1),k=Object(s.a)(g,2),A=k[0],N=k[1],w=Object(o.useHistory)(),I=function(){t.connect().then((function(){N(!0)}))},S=function(){var e=Object(r.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.L)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(f["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.c)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(f["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(u.V)(n.chainId,t.detail.account);case 11:e.sent.success||alert(f["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?y(Object(h.jsx)(b.a,{btnText:f.claim,click:S,lang:f})):y(Object(h.jsx)(b.a,{btnText:f["connect-wallet"],click:I,lang:f}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(n.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),y(Object(h.jsx)("button",{onClick:function(){return function(e){w.push(e)}(e)},children:f.staking}))}return function(){}}),[t.detail.account,A]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"top-info",children:[Object(h.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==n.version&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"logo ".concat(c.bTokenSymbol)})}),"v2_lite_open"===n.version&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"bg-logo",children:Object(h.jsx)("img",{onError:function(e){e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABHNCSVQICAgIfAhkiAAABmVJREFUaEPVmnloXFUUxjvZE/zHhdpJWxDBUEzS7EmtiNTWWmKbumBRaSGiQixaSW1IaFOpImqCNFYJFlSQCFULQdJIKqWLraDNOpNMEjdQBJupWmNBJXvi74T7wstkljcz902nDx5v5r17v3O+e84999zFsUzz5fF4bh0bGytPSEjIA9qp7hXqKdK8c3NzXofDcVl+83QnJSV15OXl/aFTFYcOsN7e3rWzs7PbwNrOvRpSLSg/gtJeUZ7/l1NSUuT3ssnJSSff5F4hT16t4rmL56+UawPnRElJyWC0ekVFrK+vb+PMzMw+CIiC7aJYYWFhTyRKuVyukunp6e1gVXBfgmxjcXHxuUiwpE5ExLBQES3bQP057modLWwmIB4AsSbezfCsBd8VLsGwifX09DQjrBTr1BYVFZ0NV2A45bu7uzdhvQbkfQO5F8Kpa5mYBIWJiYlBBO2C0JfhCIm2LATLwfgQ2bm45xUreJaIAXw/YC24X05ZWdlfVoB1l1EN64Hc41Y8JSQx/H0HrvA0LfWAbmUjwaORT9MNmiH3ebD6QYkpUhWQ2hmJEnbVgdwxsFvpd62BZAQkJu6H2ffFi6V8CRDEzvDutUBDgl9i4s/j4+NuWkTGp7i9IPcn4+gaf/3eL7FgFeKJZTADLCEm4xQu2B7rkB5pgxEHthLcNuOSe8wYi4ipjOIoLlgSqaBrUY944EpMTKwknes35C8ipkLp61bGiWtBIJBMvGwz3/ZitS1LiKmEtg5jyWB83V2QO8f4dgirnRflFyyGtU7yv0Z3QhurFurq6sqHmIT/rQvEVDbdwsv8WClihxyMM0hf24HVhuctxosDRMI0iB3ULRAXeQ/M9USuLJGh8Ef4/x0tfIT+3K5LJrLeAOsqPBoMYl0w3R3pJNGfYvTZPJLmDr5lBlIccuOQ/QhFntNBDs9bh8zDdKf1DruyDFrvUjBSPkTqpJV1kDOSCwed7imstQaXqNUBLBjK/aoMPCxzxnA7Zckq3lWaXPNviN2kQz7d6jA4LgdKvM2PXwA+ogNYEfuW5zqFNwC2rFgtulCgTdY3jJfyW0d/g89eMFcKsc8AbQX0uC5iVnCQ+yblzF6ixR1psCfgs02IXeDHAYh9bUUhHWV8A4sEETp8uibse8n4XxFiP9LHHiwoKPhJB3AoDOQ9Q5lG7htNZY/qioxutztramqqXYj9k56e7szOzv43lFLRfhf3wzovmoKGQGojJWBDQ0M3sBLtjRkxZan3TZFSxrBDusK8gWsmFhNXhJhMKdYqBWT5u0pHFPT1ogVXJIqcp48dJOu4EK2rBauPnDGTCzZgqTo75BGYFoJHTMI9FpPlcOPSEtr9NYw53GsfoO2whFVMGvAlyjodJI6V/MjG32usVo7nclisifSt19Hf37+cPasBBkjZnLPtiqErXsnIyMgypi2d7Co+zyDdbRezWBAjcNxF1vEWRrp7nhjuuJ95TAYv6q9nYioBGIVHo2GxHELxMUKwMc7Yxc9WXIgNI+AReHy/aDFHbeYN2CrdJnBIFQL96qLFHJHFhw086vmw0SbZtsJKooFh6o1ZyqIFU8idkk1tfPS0rVpoBidGbCFG7EFv2fmcv3xXggvoax9gtSLNsm2FU3noTvT2+CWmIuS7mPQkoV9WmOL+wgUr0HcDLlhtVtbvNhKFvWlpafm5ubm/xzMzMvmVTCov4oKrffUMtD92CwWHMe3yeCaGC44yM7kd77pqiZhyyfvokPtpjU3xSA6v+gpSLweaboXaXH+YKPkYlnsynshB6lP0+YRGbwukV8jjEIA8SqTcHS/jm1gKMk3BSC0J94HYq8H7eGpqas61CigSKDhE5iECPmRlth/SYgbZzs7OmwEd5H6W0PpFLF1TQjrympmB5PoLFP50sUzMqIz13qHf3YN71uKep+wkKBkFshqQddZ3nAolN2xiAqhWcmV3JJXIWV1aWuoOJSic75LQqmN9/6kGXMgorOJERMwAlxUhiNWgxG1yhIK7jZa9aFW4uZxMEsGSE6ridj/Lcb5olt2jImYieKccnYWgnBC9g+fHPH+Ts7+MNSP0S29ycvKIlCdTyKSsk5luJmUyKbOK13J09gdu2YE5IfOpSBrHXEcLMTOgCjLlKCj72XL2V3Y0nUJCyslZYR5yyFmesnDqJn3rYIl9NFoy5vr/AzORQD3bVOp7AAAAAElFTkSuQmCC"},src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(c.bTokenSymbol,".png")})})}),Object(h.jsx)("span",{className:"base-token",children:c.bTokenSymbol})]}),Object(h.jsxs)("div",{className:"pool-detail",children:[Object(h.jsxs)("div",{className:"liq",children:[Object(h.jsx)("span",{className:"title",children:c.airdrop?f.total:f["pool-liq"]}),Object(h.jsx)(d.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:c.lpApy?7:0})]}),Object(h.jsx)("div",{className:"multiplier",children:c.multiplier&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:f.multiplier}),Object(h.jsx)(O.a,{block:!1,children:Object(h.jsxs)("span",{className:"multiplier-value",title:f["multiplier-tip"],children:[c.multiplier,"x"]})})]})}),Object(h.jsx)("div",{className:"apy",children:!c.isOpen&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:f.apy}),Object(h.jsxs)(O.a,{block:!1,children:[Object(h.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&f["deri-apy"],children:c.apy?Object(h.jsx)(d.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&c.lpApy>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:" + "}),Object(h.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(h.jsx)(d.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]})})]})]}),Object(h.jsx)("div",{className:"bottom-btn",children:v})]}),l!==p.length-1&&Object(h.jsx)("div",{className:"top-line"})]})}t.a=Object(p.b)("wallet","version")(Object(p.c)((function(e){var t=e.wallet,n=e.group,c=void 0===n?{}:n,a=e.lang,r=c.pool,s=c.list,i=m()("pool",{"only-one":1===s.length,full:5===s.length});return Object(h.jsxs)("div",{className:i,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("div",{className:"network",children:r.network&&r.network.toUpperCase()}),Object(h.jsxs)("div",{className:"pool-desc",children:[Object(h.jsxs)("span",{className:"symbol",children:[Object(h.jsxs)("span",{className:"symbol-label",children:[a.symbol,":"]}),Object(h.jsx)("span",{className:"symbol-value",children:r.symbol})]}),Object(h.jsxs)("span",{className:"address",children:[Object(h.jsxs)("span",{className:"address-label",children:[a.address,":"]}),r.airdrop?"--":Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(x[r.chainId]&&x[r.chainId].viewUrl,"/address/").concat(r.address),children:r.formatAdd})]})]})]}),Object(h.jsx)("div",{className:"version",children:a[r.version]})]}),Object(h.jsx)("div",{className:"pool-info",children:s.map((function(e,n){return Object(h.jsx)(v,{card:e,index:n,pool:r,list:s,wallet:t,lang:a},n)}))})]})})))}}]);
//# sourceMappingURL=13.1e35286e.chunk.js.map