(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[40],{1001:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(2),s=n(5),i=n(11),u=n(75),o=n(734),l=n.n(o),d=n.p+"static/media/success.d1b6419b.svg",p=n.p+"static/media/undone.a632686c.svg",b=n.p+"static/media/right.462ddd6f.svg",j=n(16),f=n(696),x=n(32);t.a=Object(u.b)("wallet")(Object(u.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,r=e.lang,u="dev"!=j.a.get()?{pool:"0x19c2655A0e1639B189FB0CF06e02DC0254419D92",bTokenId:"0"}:{pool:"0x54a71Cad29C314eA081b2B0b1Ac25a7cE3b7f7A5",bTokenId:"0"},o=Object(i.useState)(!0),O=Object(s.a)(o,2),h=O[0],m=O[1],g=Object(i.useState)(!1),v=Object(s.a)(g,2),w=v[0],N=v[1],k=Object(i.useState)(!1),y=Object(s.a)(k,2),S=y[0],T=y[1],M=Object(i.useState)(!1),I=Object(s.a)(M,2),E=I[0],A=I[1],_=Object(i.useState)(!1),F=Object(s.a)(_,2),D=F[0],C=F[1],R=Object(i.useState)(Object(x.jsx)(f.a,{className:"btn",btnText:r["connect-wallet"]})),B=Object(s.a)(R,2),U=B[0],H=B[1],Z=Object(i.useState)({one:!1,two:!1,three:!1}),J=Object(s.a)(Z,2),Y=J[0],z=J[1],L=Object(i.useState)({one:!1,two:!1,three:!1}),P=Object(s.a)(L,2),W=P[0],q=P[1],G=function(){return n&&n.detail&&n.detail.account},K=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G()||!u){e.next=5;break}return e.next=3,n.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,m(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){n.connect()},V=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.o)(n.detail.chainId);case 2:+e.sent>=4999&&N(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(n.detail.account,"/is_claimed"),e.next=3,Object(j.m)(t);case 3:r=e.sent,T(r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(n.detail.account,"/signin_status"),e.next=3,Object(j.m)(t);case 3:r=e.sent,c=Date.parse(new Date),s=l.a.asString("yyyy-MM-dd",new Date(parseInt(c))),i=[],r.data.map((function(e){var t=!1;e.date==s&&C(e.signin),e.signin&&(t=e.signin,i.push(t))})),i.length&&z({one:i[0],two:i[1],three:i[2]});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.N)(n.detail.chainId,u.pool,n.detail.account,u.bTokenId);case 2:return t=e.sent,e.next=5,Object(j.N)(n.detail.chainId,u.pool,n.detail.account,"1");case 5:return r=e.sent,e.next=8,Object(j.N)(n.detail.chainId,u.pool,n.detail.account,"2");case 8:c=e.sent,s=t.concat(r,c),i={},Y.three&&(1==s.length?i={one:!0,two:!1,three:!1}:2==s.length?i={one:!0,two:!0,three:!1}:s.length>=3&&(i={one:!0,two:!0,three:!0}),q(i));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(c.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(r["please-switch-to-bsc"]),e.abrupt("return");case 3:if(!(+n.detail.formatBalance<=.2)){e.next=6;break}return alert(r["less-bnb"]),e.abrupt("return");case 6:if(!E){e.next=9;break}return alert(r["use-a-new-address"]),e.abrupt("return");case 9:if(!D){e.next=12;break}return alert(r["already-stamped-today"]),e.abrupt("return");case 12:return t="/ptoken_airdrop/".concat(n.detail.account,"/signin"),e.next=15,Object(j.m)(t,{method:"POST"});case 15:if((c=e.sent).success){e.next=21;break}if(0==c.error.indexOf("insufficent\xa0user\xa0balance")){e.next=20;break}return alert(r["less-bnb"]),e.abrupt("return");case 20:alert(r["sign-in-failed"]);case 21:return $(),e.abrupt("return");case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(r["please-switch-to-bsc"]),e.abrupt("return");case 3:if(!E){e.next=6;break}return alert(r["use-a-new-address"]),e.abrupt("return");case 6:if(!(+n.detail.formatBalance<=.2)){e.next=9;break}return alert(r["less-bnb"]),e.abrupt("return");case 9:return e.next=11,Object(j.e)(n.detail.chainId,n.detail.account);case 11:e.sent.success?(alert(["claim-success"]),T(!0)):alert["claim-failed"];case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.ib)(n.detail.chainId,u.pool,n.detail.account);case 2:t=e.sent,A(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(r["please-switch-to-bsc"]),e.abrupt("return");case 3:return e.next=5,n.approve(u.pool,u.bTokenId);case 5:e.sent.success?(m(!0),K()):(m(!1),alert(r["approve-failed"]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){G()&&(K(),re())}),[n.detail,u,Y]),Object(i.useEffect)((function(){G()&&($(),X(),V())}),[n.detail]),Object(i.useEffect)((function(){G()&&ee()}),[n.detail,Y]),Object(i.useEffect)((function(){var e;e=(new Date).getTime()<=16277256e5?G()?Y.three?h?S||w?Object(x.jsx)("a",{className:"btn",target:"_blank",href:"https://app.deri.finance/#/lite",children:r.trade}):Object(x.jsx)(f.a,{className:"btn",btnText:r.claim,click:ne,lang:r}):Object(x.jsx)(f.a,{className:"btn",btnText:r.approve,click:ae,lang:r}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",click:te,btnText:r["sign-in"],lang:r}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",btnText:r["connect-wallet"],click:Q,lang:r}):Object(x.jsxs)("button",{className:"btn btn-danger connect disbutton",disabled:!0,children:[r["activity-ends"]," "]}),H(e)}),[n.detail,h,Y,E,S,w]),Object(x.jsxs)("div",{className:"signin",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("div",{children:r["title-three"]}),Object(x.jsx)("div",{className:"time",children:r["title-five"]})]}),Object(x.jsxs)("div",{className:"user-tasks",children:[Object(x.jsx)("div",{className:"header",children:r.header}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsxs)("div",{className:"content-text",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"signin-title",children:r["sign-in"]}),Object(x.jsxs)("div",{className:"signined",children:[Y.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),Y.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),Y.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]}),Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"claim-ptoken-text",children:r["claim-ptoken"]}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"right-arr",children:Object(x.jsx)("img",{src:b})})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("div",{className:"signin-title",children:r.trade}),Object(x.jsxs)("div",{className:"signined",children:[W.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),W.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),W.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]})]}),Object(x.jsx)("div",{className:"button",children:U}),w?Object(x.jsx)("div",{className:"exceed",children:r["exceed-participants"]}):""]})]}),Object(x.jsxs)("div",{className:"h2",children:[r["title-one"],Object(x.jsx)("span",{className:"title-num",children:r["title-num"]}),Object(x.jsx)("span",{className:"in-deri",children:r["title-two"]}),Object(x.jsx)("div",{className:"text",children:r["title-frou"]})]}),Object(x.jsxs)("div",{className:"rules",children:[Object(x.jsx)("div",{className:"rules-title",children:r["who-are-eligibles"]}),Object(x.jsx)("div",{className:"text",children:r["rules-one"]}),Object(x.jsx)("div",{className:"text",children:r["rules-two"]}),Object(x.jsx)("div",{className:"text",children:r["rules-three"]}),Object(x.jsx)("div",{className:"rules-title",children:r["how-to-participate"]}),Object(x.jsx)("div",{className:"text",children:r["step-one"]}),Object(x.jsx)("div",{className:"text",children:r["step-two"]}),Object(x.jsx)("div",{className:"text",children:r["step-three"]}),Object(x.jsx)("div",{className:"text",children:r["step-four"]})]})]})})))},1420:function(e,t,n){},1469:function(e,t,n){"use strict";n.r(t);var r=n(1001),a=(n(1420),n(32));t.default=function(e){var t=e.lang;return Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{lang:t})})}},696:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),c=n(2),s=n(5),i=n(11),u=n(32);function o(e){var t=e.btnText,n=e.className,r=e.disabled,o=e.click,l=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(r?"disabled":"enabled"),x=Object(s.a)(f,2),O=x[0],h=x[1],m=Object(i.useState)(!0),g=Object(s.a)(m,2),v=g[0],w=g[1],N=Object(i.useState)(!1),k=Object(s.a)(N,2),y=k[0],S=k[1],T=Object(i.useState)(t),M=Object(s.a)(T,2),I=M[0],E=M[1],A=Object(i.useRef)(null),_=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return F(),e.next=5,o();case 5:e.sent&&l&&l(),D();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){h("disabled"),S(!0),A.current&&(A.current.style.display="inline-block")},D=function(){A.current&&(A.current.style.display="none"),h("enabled"),S(!1)},C=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(j["approve-failed"])),D();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&E(t),function(){}}),[t]),Object(u.jsxs)("button",{className:n,onClick:function(){v?_():R()},children:[Object(u.jsx)("span",{className:"btn-loading-wrap",children:Object(u.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),y?j.pending:v?I:j.approve]})}},734:function(e,t,n){"use strict";function r(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}function a(e){return r(e,2)}function c(t,n){"string"!==typeof t&&(n=t,t=e.exports.ISO8601_FORMAT),n||(n=e.exports.now());var c=a(n.getDate()),s=a(n.getMonth()+1),i=a(n.getFullYear()),u=a(i.substring(2,4)),o=t.indexOf("yyyy")>-1?i:u,l=a(n.getHours()),d=a(n.getMinutes()),p=a(n.getSeconds()),b=r(n.getMilliseconds(),3),j=function(e){var t=Math.abs(e),n=String(Math.floor(t/60)),r=String(t%60);return 1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),e<0?"+"+n+r:"-"+n+r}(n.getTimezoneOffset());return t.replace(/dd/g,c).replace(/MM/g,s).replace(/y{1,4}/g,o).replace(/hh/g,l).replace(/mm/g,d).replace(/ss/g,p).replace(/SSS/g,b).replace(/O/g,j)}function s(e,t,n,r){e["set"+(r?"":"UTC")+t](n)}e.exports=c,e.exports.asString=c,e.exports.parse=function(t,n,r){if(!t)throw new Error("pattern must be supplied");return function(t,n,r){var a=t.indexOf("O")<0,c=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,t){s(e,"FullYear",t,a)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Month",t-1,a)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Date",t,a)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Hours",t,a)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,t){s(e,"Minutes",t,a)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,t){s(e,"Seconds",t,a)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,t){s(e,"Milliseconds",t,a)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,t){"Z"===t&&(t=0);var n=Math.abs(t),r=(t>0?-1:1)*(n%100+60*Math.floor(n/100));e.setUTCMinutes(e.getUTCMinutes()+r)}}],i=c.reduce((function(e,t){return t.pattern.test(e.regexp)?(t.index=e.regexp.match(t.pattern).index,e.regexp=e.regexp.replace(t.pattern,"("+t.regexp+")")):t.index=-1,e}),{regexp:t,index:[]}),u=c.filter((function(e){return e.index>-1}));u.sort((function(e,t){return e.index-t.index}));var o=new RegExp(i.regexp).exec(n);if(o){var l=r||e.exports.now();return u.forEach((function(e,t){e.fn(l,o[t+1])})),l}throw new Error("String '"+n+"' could not be parsed as '"+t+"'")}(t,n,r)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"}}]);
//# sourceMappingURL=40.4d5c67e6.chunk.js.map