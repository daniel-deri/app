(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[22],{625:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),c=n(1),s=n(16),i=n(7),o=n(60);function u(e){var t=e.btnText,n=e.className,r=e.disabled,u=e.click,l=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(r?"disabled":"enabled"),x=Object(s.a)(f,2),O=x[0],h=x[1],m=Object(i.useState)(!0),g=Object(s.a)(m,2),v=g[0],w=g[1],k=Object(i.useState)(!1),N=Object(s.a)(k,2),y=N[0],S=N[1],T=Object(i.useState)(t),M=Object(s.a)(T,2),I=M[0],A=M[1],E=Object(i.useRef)(null),_=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return F(),e.next=5,u();case 5:e.sent&&l&&l(),R();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){h("disabled"),S(!0),E.current&&(E.current.style.display="inline-block")},R=function(){E.current&&(E.current.style.display="none"),h("enabled"),S(!1)},C=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(j["approve-failed"])),R();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&A(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){v?_():D()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:E,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),y?j.pending:v?I:j.approve]})}},629:function(e,t,n){"use strict";function r(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}function a(e){return r(e,2)}function c(t,n){"string"!==typeof t&&(n=t,t=e.exports.ISO8601_FORMAT),n||(n=e.exports.now());var c=a(n.getDate()),s=a(n.getMonth()+1),i=a(n.getFullYear()),o=a(i.substring(2,4)),u=t.indexOf("yyyy")>-1?i:o,l=a(n.getHours()),d=a(n.getMinutes()),p=a(n.getSeconds()),b=r(n.getMilliseconds(),3),j=function(e){var t=Math.abs(e),n=String(Math.floor(t/60)),r=String(t%60);return 1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),e<0?"+"+n+r:"-"+n+r}(n.getTimezoneOffset());return t.replace(/dd/g,c).replace(/MM/g,s).replace(/y{1,4}/g,u).replace(/hh/g,l).replace(/mm/g,d).replace(/ss/g,p).replace(/SSS/g,b).replace(/O/g,j)}function s(e,t,n,r){e["set"+(r?"":"UTC")+t](n)}e.exports=c,e.exports.asString=c,e.exports.parse=function(t,n,r){if(!t)throw new Error("pattern must be supplied");return function(t,n,r){var a=t.indexOf("O")<0,c=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,t){s(e,"FullYear",t,a)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Month",t-1,a)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Date",t,a)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Hours",t,a)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,t){s(e,"Minutes",t,a)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,t){s(e,"Seconds",t,a)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,t){s(e,"Milliseconds",t,a)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,t){"Z"===t&&(t=0);var n=Math.abs(t),r=(t>0?-1:1)*(n%100+60*Math.floor(n/100));e.setUTCMinutes(e.getUTCMinutes()+r)}}],i=c.reduce((function(e,t){return t.pattern.test(e.regexp)?(t.index=e.regexp.match(t.pattern).index,e.regexp=e.regexp.replace(t.pattern,"("+t.regexp+")")):t.index=-1,e}),{regexp:t,index:[]}),o=c.filter((function(e){return e.index>-1}));o.sort((function(e,t){return e.index-t.index}));var u=new RegExp(i.regexp).exec(n);if(u){var l=r||e.exports.now();return o.forEach((function(e,t){e.fn(l,u[t+1])})),l}throw new Error("String '"+n+"' could not be parsed as '"+t+"'")}(t,n,r)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"},657:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1),s=n(16),i=n(7),o=n(96),u=n(629),l=n.n(u),d=n.p+"static/media/success.4aa75af6.svg",p=n.p+"static/media/undone.f6087837.svg",b=n.p+"static/media/right.b0f40162.svg",j=n(24),f=n(625),x=n(60);t.a=Object(o.b)("wallet")(Object(o.c)((function(e){var t,n=e.wallet,r=void 0===n?{}:n,o=e.lang,u="dev"!=j.DeriEnv.get()?{pool:"0x19c2655A0e1639B189FB0CF06e02DC0254419D92",bTokenId:"0"}:{pool:"0x54a71Cad29C314eA081b2B0b1Ac25a7cE3b7f7A5",bTokenId:"0"},O=Object(i.useState)(!0),h=Object(s.a)(O,2),m=h[0],g=h[1],v=Object(i.useState)(!1),w=Object(s.a)(v,2),k=w[0],N=w[1],y=Object(i.useState)(!1),S=Object(s.a)(y,2),T=S[0],M=S[1],I=Object(i.useState)(!1),A=Object(s.a)(I,2),E=A[0],_=A[1],F=Object(i.useState)(!1),R=Object(s.a)(F,2),C=R[0],D=R[1],B=Object(i.useState)(Object(x.jsx)(f.a,{className:"btn",btnText:o["connect-wallet"]})),H=Object(s.a)(B,2),U=H[0],P=H[1],Z=Object(i.useState)({one:!1,two:!1,three:!1}),J=Object(s.a)(Z,2),W=J[0],Y=J[1],z=Object(i.useState)({one:!1,two:!1,three:!1}),L=Object(s.a)(z,2),q=L[0],G=L[1],K=function(){return r&&r.detail&&r.detail.account},Q=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K()||!u){e.next=5;break}return e.next=3,r.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){r.connect()},X=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.getAirdropPTokenWhitelistCount)(r.detail.chainId);case 2:+e.sent>=5e3&&N(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(r.detail.account,"/is_claimed"),e.next=3,Object(j.fetchRestApi)(t);case 3:n=e.sent,M(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(r.detail.account,"/signin_status"),e.next=3,Object(j.fetchRestApi)(t);case 3:n=e.sent,c=Date.parse(new Date),s=l.a.asString("yyyy-MM-dd",new Date(parseInt(c))),i=[],n.data.map((function(e){var t=!1;e.date==s&&D(e.signin),e.signin&&(t=e.signin,i.push(t))})),i.length&&Y({one:i[0],two:i[1],three:i[2]});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.getTradeHistory)(r.detail.chainId,u.pool,r.detail.account,u.bTokenId);case 2:return t=e.sent,e.next=5,Object(j.getTradeHistory)(r.detail.chainId,u.pool,r.detail.account,"1");case 5:n=e.sent,c=t.concat(n),s={},W.three&&(1==c.length?s={one:!0,two:!1,three:!1}:2==c.length?s={one:!0,two:!0,three:!1}:3==c.length&&(s={one:!0,two:!0,three:!0}),G(s));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(+r.detail.formatBalance<=.2)){e.next=3;break}return alert(o["less-bnb"]),e.abrupt("return");case 3:if(!E){e.next=6;break}return alert(o["use-a-new-address"]),e.abrupt("return");case 6:if(!C){e.next=9;break}return alert(o["already-stamped-today"]),e.abrupt("return");case 9:return t="/ptoken_airdrop/".concat(r.detail.account,"/signin"),e.next=12,Object(j.fetchRestApi)(t,{method:"POST"});case 12:if((n=e.sent).success){e.next=18;break}if(0==n.error.indexOf("insufficent\xa0user\xa0balance")){e.next=17;break}return alert(o["less-bnb"]),e.abrupt("return");case 17:alert(o["sign-in-failed"]);case 18:return ee(),e.abrupt("return");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=3;break}return alert(o["use-a-new-address"]),e.abrupt("return");case 3:if(!(+r.detail.formatBalance<=.2)){e.next=6;break}return alert(o["less-bnb"]),e.abrupt("return");case 6:return e.next=8,Object(j.airdropPToken)(r.detail.chainId,r.detail.account);case 8:e.sent.success?(alert(["claim-success"]),M(!0)):alert["claim-failed"];case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.isUserPTokenExist)(r.detail.chainId,u.pool,r.detail.account);case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.approve(u.pool,u.bTokenId);case 2:e.sent.success?(g(!0),Q()):(g(!1),alert(o["approve-failed"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){K()&&(Q(),ae())}),[r.detail,u,W]),Object(i.useEffect)((function(){K()&&(ee(),$(),X())}),[r.detail]),Object(i.useEffect)((function(){K()&&te()}),[r.detail,W]),Object(i.useEffect)((function(){t=K()?W.three?m?T||k?Object(x.jsx)("a",{className:"btn",target:"_blank",href:"https://app.deri.finance/#/lite",children:o.trade}):Object(x.jsx)(f.a,{className:"btn",btnText:o.claim,click:re,lang:o}):Object(x.jsx)(f.a,{className:"btn",btnText:o.approve,click:ce,lang:o}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",click:ne,btnText:o["sign-in"],lang:o}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",btnText:o["connect-wallet"],click:V,lang:o}),P(t)}),[r.detail,m,W,E,T,k]),Object(x.jsxs)("div",{className:"signin",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("div",{children:o["title-three"]}),Object(x.jsx)("div",{className:"time",children:o["title-five"]})]}),Object(x.jsxs)("div",{className:"user-tasks",children:[Object(x.jsx)("div",{className:"header",children:o.header}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsxs)("div",{className:"content-text",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"signin-title",children:o["sign-in"]}),Object(x.jsxs)("div",{className:"signined",children:[W.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),W.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),W.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]}),Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"claim-ptoken-text",children:o["claim-ptoken"]}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"right-arr",children:Object(x.jsx)("img",{src:b})})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("div",{className:"signin-title",children:o.trade}),Object(x.jsxs)("div",{className:"signined",children:[q.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),q.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),q.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]})]}),Object(x.jsx)("div",{className:"button",children:U})]})]}),Object(x.jsxs)("div",{className:"h2",children:[o["title-one"],Object(x.jsx)("span",{className:"title-num",children:o["title-num"]}),Object(x.jsx)("span",{className:"in-deri",children:o["title-two"]}),Object(x.jsx)("div",{className:"text",children:o["title-frou"]})]}),Object(x.jsxs)("div",{className:"rules",children:[Object(x.jsx)("div",{className:"rules-title",children:o["who-are-eligibles"]}),Object(x.jsx)("div",{className:"text",children:o["rules-one"]}),Object(x.jsx)("div",{className:"text",children:o["rules-two"]}),Object(x.jsx)("div",{className:"text",children:o["rules-three"]}),Object(x.jsx)("div",{className:"rules-title",children:o["how-to-participate"]}),Object(x.jsx)("div",{className:"text",children:o["step-one"]}),Object(x.jsx)("div",{className:"text",children:o["step-two"]}),Object(x.jsx)("div",{className:"text",children:o["step-three"]}),Object(x.jsx)("div",{className:"text",children:o["step-four"]})]})]})})))},720:function(e,t,n){},750:function(e,t,n){"use strict";n.r(t);var r=n(657),a=(n(720),n(60));t.default=function(e){var t=e.lang;return Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{lang:t})})}}}]);