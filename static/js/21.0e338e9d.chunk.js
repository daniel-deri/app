(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[21],{646:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),c=n(1),s=n(14),i=n(7),u=n(25);function o(e){var t=e.btnText,n=e.className,r=e.disabled,o=e.click,l=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(r?"disabled":"enabled"),x=Object(s.a)(f,2),h=x[0],O=x[1],m=Object(i.useState)(!0),g=Object(s.a)(m,2),v=g[0],w=g[1],k=Object(i.useState)(!1),N=Object(s.a)(k,2),y=N[0],S=N[1],T=Object(i.useState)(t),M=Object(s.a)(T,2),I=M[0],A=M[1],E=Object(i.useRef)(null),_=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===h){e.next=2;break}return e.abrupt("return");case 2:return D(),e.next=5,o();case 5:e.sent&&l&&l(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){O("disabled"),S(!0),E.current&&(E.current.style.display="inline-block")},F=function(){E.current&&(E.current.style.display="none"),O("enabled"),S(!1)},R=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(j["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return R(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&A(t),function(){}}),[t]),Object(u.jsxs)("button",{className:n,onClick:function(){v?_():C()},children:[Object(u.jsx)("span",{className:"btn-loading-wrap",children:Object(u.jsx)("span",{ref:E,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),y?j.pending:v?I:j.approve]})}},650:function(e,t,n){"use strict";function r(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}function a(e){return r(e,2)}function c(t,n){"string"!==typeof t&&(n=t,t=e.exports.ISO8601_FORMAT),n||(n=e.exports.now());var c=a(n.getDate()),s=a(n.getMonth()+1),i=a(n.getFullYear()),u=a(i.substring(2,4)),o=t.indexOf("yyyy")>-1?i:u,l=a(n.getHours()),d=a(n.getMinutes()),p=a(n.getSeconds()),b=r(n.getMilliseconds(),3),j=function(e){var t=Math.abs(e),n=String(Math.floor(t/60)),r=String(t%60);return 1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),e<0?"+"+n+r:"-"+n+r}(n.getTimezoneOffset());return t.replace(/dd/g,c).replace(/MM/g,s).replace(/y{1,4}/g,o).replace(/hh/g,l).replace(/mm/g,d).replace(/ss/g,p).replace(/SSS/g,b).replace(/O/g,j)}function s(e,t,n,r){e["set"+(r?"":"UTC")+t](n)}e.exports=c,e.exports.asString=c,e.exports.parse=function(t,n,r){if(!t)throw new Error("pattern must be supplied");return function(t,n,r){var a=t.indexOf("O")<0,c=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,t){s(e,"FullYear",t,a)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Month",t-1,a)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Date",t,a)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Hours",t,a)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,t){s(e,"Minutes",t,a)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,t){s(e,"Seconds",t,a)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,t){s(e,"Milliseconds",t,a)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,t){"Z"===t&&(t=0);var n=Math.abs(t),r=(t>0?-1:1)*(n%100+60*Math.floor(n/100));e.setUTCMinutes(e.getUTCMinutes()+r)}}],i=c.reduce((function(e,t){return t.pattern.test(e.regexp)?(t.index=e.regexp.match(t.pattern).index,e.regexp=e.regexp.replace(t.pattern,"("+t.regexp+")")):t.index=-1,e}),{regexp:t,index:[]}),u=c.filter((function(e){return e.index>-1}));u.sort((function(e,t){return e.index-t.index}));var o=new RegExp(i.regexp).exec(n);if(o){var l=r||e.exports.now();return u.forEach((function(e,t){e.fn(l,o[t+1])})),l}throw new Error("String '"+n+"' could not be parsed as '"+t+"'")}(t,n,r)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"},673:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1),s=n(14),i=n(7),u=n(66),o=n(650),l=n.n(o),d=n.p+"static/media/success.4aa75af6.svg",p=n.p+"static/media/undone.f6087837.svg",b=n.p+"static/media/right.b0f40162.svg",j=n(23),f=n(646),x=n(25);t.a=Object(u.b)("wallet")(Object(u.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,r=e.lang,u="dev"!=j.DeriEnv.get()?{pool:"0x19c2655A0e1639B189FB0CF06e02DC0254419D92",bTokenId:"0"}:{pool:"0x54a71Cad29C314eA081b2B0b1Ac25a7cE3b7f7A5",bTokenId:"0"},o=Object(i.useState)(!0),h=Object(s.a)(o,2),O=h[0],m=h[1],g=Object(i.useState)(!1),v=Object(s.a)(g,2),w=v[0],k=v[1],N=Object(i.useState)(!1),y=Object(s.a)(N,2),S=y[0],T=y[1],M=Object(i.useState)(!1),I=Object(s.a)(M,2),A=I[0],E=I[1],_=Object(i.useState)(!1),D=Object(s.a)(_,2),F=D[0],R=D[1],C=Object(i.useState)(Object(x.jsx)(f.a,{className:"btn",btnText:r["connect-wallet"]})),B=Object(s.a)(C,2),H=B[0],U=B[1],P=Object(i.useState)({one:!1,two:!1,three:!1}),Z=Object(s.a)(P,2),J=Z[0],W=Z[1],Y=Object(i.useState)({one:!1,two:!1,three:!1}),z=Object(s.a)(Y,2),L=z[0],q=z[1],G=function(){return n&&n.detail&&n.detail.account},K=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G()||!u){e.next=5;break}return e.next=3,n.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,m(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){n.connect()},V=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.getAirdropPTokenWhitelistCount)(n.detail.chainId);case 2:+e.sent>=4999&&k(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(n.detail.account,"/is_claimed"),e.next=3,Object(j.fetchRestApi)(t);case 3:r=e.sent,T(r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(n.detail.account,"/signin_status"),e.next=3,Object(j.fetchRestApi)(t);case 3:r=e.sent,c=Date.parse(new Date),s=l.a.asString("yyyy-MM-dd",new Date(parseInt(c))),i=[],r.data.map((function(e){var t=!1;e.date==s&&R(e.signin),e.signin&&(t=e.signin,i.push(t))})),i.length&&W({one:i[0],two:i[1],three:i[2]});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.getTradeHistory)(n.detail.chainId,u.pool,n.detail.account,u.bTokenId);case 2:return t=e.sent,e.next=5,Object(j.getTradeHistory)(n.detail.chainId,u.pool,n.detail.account,"1");case 5:return r=e.sent,e.next=8,Object(j.getTradeHistory)(n.detail.chainId,u.pool,n.detail.account,"2");case 8:c=e.sent,s=t.concat(r,c),i={},J.three&&(1==s.length?i={one:!0,two:!1,three:!1}:2==s.length?i={one:!0,two:!0,three:!1}:s.length>=3&&(i={one:!0,two:!0,three:!0}),q(i));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(c.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(r["please-switch-to-bsc"]),e.abrupt("return");case 3:if(!(+n.detail.formatBalance<=.2)){e.next=6;break}return alert(r["less-bnb"]),e.abrupt("return");case 6:if(!A){e.next=9;break}return alert(r["use-a-new-address"]),e.abrupt("return");case 9:if(!F){e.next=12;break}return alert(r["already-stamped-today"]),e.abrupt("return");case 12:return t="/ptoken_airdrop/".concat(n.detail.account,"/signin"),e.next=15,Object(j.fetchRestApi)(t,{method:"POST"});case 15:if((c=e.sent).success){e.next=21;break}if(0==c.error.indexOf("insufficent\xa0user\xa0balance")){e.next=20;break}return alert(r["less-bnb"]),e.abrupt("return");case 20:alert(r["sign-in-failed"]);case 21:return $(),e.abrupt("return");case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(r["please-switch-to-bsc"]),e.abrupt("return");case 3:if(!A){e.next=6;break}return alert(r["use-a-new-address"]),e.abrupt("return");case 6:if(!(+n.detail.formatBalance<=.2)){e.next=9;break}return alert(r["less-bnb"]),e.abrupt("return");case 9:return e.next=11,Object(j.airdropPToken)(n.detail.chainId,n.detail.account);case 11:e.sent.success?(alert(["claim-success"]),T(!0)):alert["claim-failed"];case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.isUserPTokenExist)(n.detail.chainId,u.pool,n.detail.account);case 2:t=e.sent,E(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(r["please-switch-to-bsc"]),e.abrupt("return");case 3:return e.next=5,n.approve(u.pool,u.bTokenId);case 5:e.sent.success?(m(!0),K()):(m(!1),alert(r["approve-failed"]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){G()&&(K(),re())}),[n.detail,u,J]),Object(i.useEffect)((function(){G()&&($(),X(),V())}),[n.detail]),Object(i.useEffect)((function(){G()&&ee()}),[n.detail,J]),Object(i.useEffect)((function(){var e;e=(new Date).getTime()<=16277256e5?G()?J.three?O?S||w?Object(x.jsx)("a",{className:"btn",target:"_blank",href:"https://app.deri.finance/#/lite",children:r.trade}):Object(x.jsx)(f.a,{className:"btn",btnText:r.claim,click:ne,lang:r}):Object(x.jsx)(f.a,{className:"btn",btnText:r.approve,click:ae,lang:r}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",click:te,btnText:r["sign-in"],lang:r}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",btnText:r["connect-wallet"],click:Q,lang:r}):Object(x.jsxs)("button",{className:"btn btn-danger connect disbutton",disabled:!0,children:[r["activity-ends"]," "]}),U(e)}),[n.detail,O,J,A,S,w]),Object(x.jsxs)("div",{className:"signin",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("div",{children:r["title-three"]}),Object(x.jsx)("div",{className:"time",children:r["title-five"]})]}),Object(x.jsxs)("div",{className:"user-tasks",children:[Object(x.jsx)("div",{className:"header",children:r.header}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsxs)("div",{className:"content-text",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"signin-title",children:r["sign-in"]}),Object(x.jsxs)("div",{className:"signined",children:[J.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),J.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),J.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]}),Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"claim-ptoken-text",children:r["claim-ptoken"]}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"right-arr",children:Object(x.jsx)("img",{src:b})})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("div",{className:"signin-title",children:r.trade}),Object(x.jsxs)("div",{className:"signined",children:[L.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),L.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),L.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]})]}),Object(x.jsx)("div",{className:"button",children:H}),w?Object(x.jsx)("div",{className:"exceed",children:r["exceed-participants"]}):""]})]}),Object(x.jsxs)("div",{className:"h2",children:[r["title-one"],Object(x.jsx)("span",{className:"title-num",children:r["title-num"]}),Object(x.jsx)("span",{className:"in-deri",children:r["title-two"]}),Object(x.jsx)("div",{className:"text",children:r["title-frou"]})]}),Object(x.jsxs)("div",{className:"rules",children:[Object(x.jsx)("div",{className:"rules-title",children:r["who-are-eligibles"]}),Object(x.jsx)("div",{className:"text",children:r["rules-one"]}),Object(x.jsx)("div",{className:"text",children:r["rules-two"]}),Object(x.jsx)("div",{className:"text",children:r["rules-three"]}),Object(x.jsx)("div",{className:"rules-title",children:r["how-to-participate"]}),Object(x.jsx)("div",{className:"text",children:r["step-one"]}),Object(x.jsx)("div",{className:"text",children:r["step-two"]}),Object(x.jsx)("div",{className:"text",children:r["step-three"]}),Object(x.jsx)("div",{className:"text",children:r["step-four"]})]})]})})))},733:function(e,t,n){},767:function(e,t,n){"use strict";n.r(t);var r=n(673),a=(n(733),n(25));t.default=function(e){var t=e.lang;return Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{lang:t})})}}}]);
//# sourceMappingURL=21.0e338e9d.chunk.js.map