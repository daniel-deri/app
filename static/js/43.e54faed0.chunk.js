(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[43],{1006:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),s=n(7),i=n(13),u=n(77),o=n(741),l=n.n(o),d=n.p+"static/media/success.4aa75af6.svg",p=n.p+"static/media/undone.f6087837.svg",b=n.p+"static/media/right.b0f40162.svg",j=n(16),f=n(696),x=n(32);t.a=Object(u.b)("wallet")(Object(u.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,a=e.lang,u="dev"!=j.a.get()?{pool:"0x19c2655A0e1639B189FB0CF06e02DC0254419D92",bTokenId:"0"}:{pool:"0x54a71Cad29C314eA081b2B0b1Ac25a7cE3b7f7A5",bTokenId:"0"},o=Object(i.useState)(!0),O=Object(s.a)(o,2),h=O[0],m=O[1],g=Object(i.useState)(!1),v=Object(s.a)(g,2),w=v[0],k=v[1],N=Object(i.useState)(!1),y=Object(s.a)(N,2),S=y[0],T=y[1],M=Object(i.useState)(!1),I=Object(s.a)(M,2),E=I[0],A=I[1],_=Object(i.useState)(!1),F=Object(s.a)(_,2),D=F[0],C=F[1],R=Object(i.useState)(Object(x.jsx)(f.a,{className:"btn",btnText:a["connect-wallet"]})),B=Object(s.a)(R,2),P=B[0],U=B[1],H=Object(i.useState)({one:!1,two:!1,three:!1}),Z=Object(s.a)(H,2),J=Z[0],Y=Z[1],q=Object(i.useState)({one:!1,two:!1,three:!1}),z=Object(s.a)(q,2),L=z[0],W=z[1],G=function(){return n&&n.detail&&n.detail.account},K=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G()||!u){e.next=5;break}return e.next=3,n.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,m(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){n.connect()},V=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.q)(n.detail.chainId);case 2:+e.sent>=4999&&k(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(n.detail.account,"/is_claimed"),e.next=3,Object(j.o)(t);case 3:a=e.sent,T(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(n.detail.account,"/signin_status"),e.next=3,Object(j.o)(t);case 3:a=e.sent,c=Date.parse(new Date),s=l.a.asString("yyyy-MM-dd",new Date(parseInt(c))),i=[],a.data.map((function(e){var t=!1;e.date==s&&C(e.signin),e.signin&&(t=e.signin,i.push(t))})),i.length&&Y({one:i[0],two:i[1],three:i[2]});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.P)(n.detail.chainId,u.pool,n.detail.account,u.bTokenId);case 2:return t=e.sent,e.next=5,Object(j.P)(n.detail.chainId,u.pool,n.detail.account,"1");case 5:return a=e.sent,e.next=8,Object(j.P)(n.detail.chainId,u.pool,n.detail.account,"2");case 8:c=e.sent,s=t.concat(a,c),i={},J.three&&(1==s.length?i={one:!0,two:!1,three:!1}:2==s.length?i={one:!0,two:!0,three:!1}:s.length>=3&&(i={one:!0,two:!0,three:!0}),W(i));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(c.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(a["please-switch-to-bsc"]),e.abrupt("return");case 3:if(!(+n.detail.formatBalance<=.2)){e.next=6;break}return alert(a["less-bnb"]),e.abrupt("return");case 6:if(!E){e.next=9;break}return alert(a["use-a-new-address"]),e.abrupt("return");case 9:if(!D){e.next=12;break}return alert(a["already-stamped-today"]),e.abrupt("return");case 12:return t="/ptoken_airdrop/".concat(n.detail.account,"/signin"),e.next=15,Object(j.o)(t,{method:"POST"});case 15:if((c=e.sent).success){e.next=21;break}if(0==c.error.indexOf("insufficent\xa0user\xa0balance")){e.next=20;break}return alert(a["less-bnb"]),e.abrupt("return");case 20:alert(a["sign-in-failed"]);case 21:return $(),e.abrupt("return");case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(a["please-switch-to-bsc"]),e.abrupt("return");case 3:if(!E){e.next=6;break}return alert(a["use-a-new-address"]),e.abrupt("return");case 6:if(!(+n.detail.formatBalance<=.2)){e.next=9;break}return alert(a["less-bnb"]),e.abrupt("return");case 9:return e.next=11,Object(j.e)(n.detail.chainId,n.detail.account);case 11:e.sent.success?(alert(["claim-success"]),T(!0)):alert["claim-failed"];case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.mb)(n.detail.chainId,u.pool,n.detail.account);case 2:t=e.sent,A(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==n.detail.chainId){e.next=3;break}return alert(a["please-switch-to-bsc"]),e.abrupt("return");case 3:return e.next=5,n.approve(u.pool,u.bTokenId);case 5:e.sent.success?(m(!0),K()):(m(!1),alert(a["approve-failed"]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){G()&&(K(),ae())}),[n.detail,u,J]),Object(i.useEffect)((function(){G()&&($(),X(),V())}),[n.detail]),Object(i.useEffect)((function(){G()&&ee()}),[n.detail,J]),Object(i.useEffect)((function(){var e;e=(new Date).getTime()<=16277256e5?G()?J.three?h?S||w?Object(x.jsx)("a",{className:"btn",target:"_blank",href:"https://app.deri.finance/#/lite",children:a.trade}):Object(x.jsx)(f.a,{className:"btn",btnText:a.claim,click:ne,lang:a}):Object(x.jsx)(f.a,{className:"btn",btnText:a.approve,click:re,lang:a}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",click:te,btnText:a["sign-in"],lang:a}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",btnText:a["connect-wallet"],click:Q,lang:a}):Object(x.jsxs)("button",{className:"btn btn-danger connect disbutton",disabled:!0,children:[a["activity-ends"]," "]}),U(e)}),[n.detail,h,J,E,S,w]),Object(x.jsxs)("div",{className:"signin",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("div",{children:a["title-three"]}),Object(x.jsx)("div",{className:"time",children:a["title-five"]})]}),Object(x.jsxs)("div",{className:"user-tasks",children:[Object(x.jsx)("div",{className:"header",children:a.header}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsxs)("div",{className:"content-text",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"signin-title",children:a["sign-in"]}),Object(x.jsxs)("div",{className:"signined",children:[J.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),J.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),J.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]}),Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"claim-ptoken-text",children:a["claim-ptoken"]}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"right-arr",children:Object(x.jsx)("img",{src:b})})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("div",{className:"signin-title",children:a.trade}),Object(x.jsxs)("div",{className:"signined",children:[L.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),L.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),L.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]})]}),Object(x.jsx)("div",{className:"button",children:P}),w?Object(x.jsx)("div",{className:"exceed",children:a["exceed-participants"]}):""]})]}),Object(x.jsxs)("div",{className:"h2",children:[a["title-one"],Object(x.jsx)("span",{className:"title-num",children:a["title-num"]}),Object(x.jsx)("span",{className:"in-deri",children:a["title-two"]}),Object(x.jsx)("div",{className:"text",children:a["title-frou"]})]}),Object(x.jsxs)("div",{className:"rules",children:[Object(x.jsx)("div",{className:"rules-title",children:a["who-are-eligibles"]}),Object(x.jsx)("div",{className:"text",children:a["rules-one"]}),Object(x.jsx)("div",{className:"text",children:a["rules-two"]}),Object(x.jsx)("div",{className:"text",children:a["rules-three"]}),Object(x.jsx)("div",{className:"rules-title",children:a["how-to-participate"]}),Object(x.jsx)("div",{className:"text",children:a["step-one"]}),Object(x.jsx)("div",{className:"text",children:a["step-two"]}),Object(x.jsx)("div",{className:"text",children:a["step-three"]}),Object(x.jsx)("div",{className:"text",children:a["step-four"]})]})]})})))},1447:function(e,t,n){},1488:function(e,t,n){"use strict";n.r(t);var a=n(1006),r=(n(1447),n(32));t.default=function(e){var t=e.lang;return Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{lang:t})})}},696:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),c=n(1),s=n(7),i=n(13),u=n(32);function o(e){var t=e.btnText,n=e.className,a=e.disabled,o=e.click,l=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(a?"disabled":"enabled"),x=Object(s.a)(f,2),O=x[0],h=x[1],m=Object(i.useState)(!0),g=Object(s.a)(m,2),v=g[0],w=g[1],k=Object(i.useState)(!1),N=Object(s.a)(k,2),y=N[0],S=N[1],T=Object(i.useState)(t),M=Object(s.a)(T,2),I=M[0],E=M[1],A=Object(i.useRef)(null),_=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return F(),e.next=5,o();case 5:e.sent&&l&&l(),D();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){h("disabled"),S(!0),A.current&&(A.current.style.display="inline-block")},D=function(){A.current&&(A.current.style.display="none"),h("enabled"),S(!1)},C=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(j["approve-failed"])),D();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&E(t),function(){}}),[t]),Object(u.jsxs)("button",{className:n,onClick:function(){v?_():R()},children:[Object(u.jsx)("span",{className:"btn-loading-wrap",children:Object(u.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),y?j.pending:v?I:j.approve]})}},741:function(e,t,n){"use strict";function a(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}function r(e){return a(e,2)}function c(t,n){"string"!==typeof t&&(n=t,t=e.exports.ISO8601_FORMAT),n||(n=e.exports.now());var c=r(n.getDate()),s=r(n.getMonth()+1),i=r(n.getFullYear()),u=r(i.substring(2,4)),o=t.indexOf("yyyy")>-1?i:u,l=r(n.getHours()),d=r(n.getMinutes()),p=r(n.getSeconds()),b=a(n.getMilliseconds(),3),j=function(e){var t=Math.abs(e),n=String(Math.floor(t/60)),a=String(t%60);return 1===n.length&&(n="0"+n),1===a.length&&(a="0"+a),e<0?"+"+n+a:"-"+n+a}(n.getTimezoneOffset());return t.replace(/dd/g,c).replace(/MM/g,s).replace(/y{1,4}/g,o).replace(/hh/g,l).replace(/mm/g,d).replace(/ss/g,p).replace(/SSS/g,b).replace(/O/g,j)}function s(e,t,n,a){e["set"+(a?"":"UTC")+t](n)}e.exports=c,e.exports.asString=c,e.exports.parse=function(t,n,a){if(!t)throw new Error("pattern must be supplied");return function(t,n,a){var r=t.indexOf("O")<0,c=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,t){s(e,"FullYear",t,r)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Month",t-1,r)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Date",t,r)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Hours",t,r)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,t){s(e,"Minutes",t,r)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,t){s(e,"Seconds",t,r)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,t){s(e,"Milliseconds",t,r)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,t){"Z"===t&&(t=0);var n=Math.abs(t),a=(t>0?-1:1)*(n%100+60*Math.floor(n/100));e.setUTCMinutes(e.getUTCMinutes()+a)}}],i=c.reduce((function(e,t){return t.pattern.test(e.regexp)?(t.index=e.regexp.match(t.pattern).index,e.regexp=e.regexp.replace(t.pattern,"("+t.regexp+")")):t.index=-1,e}),{regexp:t,index:[]}),u=c.filter((function(e){return e.index>-1}));u.sort((function(e,t){return e.index-t.index}));var o=new RegExp(i.regexp).exec(n);if(o){var l=a||e.exports.now();return u.forEach((function(e,t){e.fn(l,o[t+1])})),l}throw new Error("String '"+n+"' could not be parsed as '"+t+"'")}(t,n,a)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"}}]);
//# sourceMappingURL=43.e54faed0.chunk.js.map