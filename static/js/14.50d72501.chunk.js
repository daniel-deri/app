(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[14],{1140:function(e,t,c){},1141:function(e,t,c){},1178:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(2),i=c(7),r=c(8),l=c(42),d=c(13),o=c(800),j=c(35),b=c(207),u=c(26),m=c(328),O=c(162),h=(c(1140),c(9));function g(){return Object(h.jsx)("div",{class:"sleepContentView",children:Object(h.jsx)("div",{class:"circle"})})}var x=c(208),f=c(327),v=c(333),p=c.p+"static/media/stage-one.9bfaa393.svg",N=c.p+"static/media/stage-two.1ce521f2.svg",w=c.p+"static/media/stage-three.507b43c5.svg",k=c(31),I=c.p+"static/media/succeed.1057d4b2.svg";c.p;function C(e){var t=e.lang,c=e.wallet,s=e.amount,l=e.balance,d=e.initialize,o=e.isClaim,x=e.setSending,f=e.sending,v=e.setAmount,C=e.setIsClaim,S=e.isWalletConnected,y=Object(m.a)(),T=Object(O.c)(),W=Object(j.g)(),F=Object(r.useState)(!1),E=Object(i.a)(F,2),D=E[0],R=E[1],q=Object(r.useState)(!1),z=Object(i.a)(q,2),J=z[0],V=z[1],P=Object(r.useState)({}),U=Object(i.a)(P,2),Z=U[0],A=U[1],L=Object(r.useState)({}),B=Object(i.a)(L,2),M=B[0],$=B[1],G=Object(r.useState)(!1),H=Object(i.a)(G,2),K=H[0],Q=H[1],X=Object(r.useState)(Object(h.jsx)(b.a,{type:u.h,className:"button-bridge",fontSize:"18",label:t.approve})),Y=Object(i.a)(X,2),ee=Y[0],te=Y[1],ce=function(){c.connect()},se=function(){var e=Object(a.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=6;break}return e.next=3,k.a.request("getUserWormholeSignature",[c.detail.account]);case 3:(t=e.sent).valid&&(c.switchNetwork(y[t.toChainId]),C(!0)),V(t.valid);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(a.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s&&0!==s){e.next=3;break}return T.error(t["amount-must-be-greater-than-zero"]),e.abrupt("return");case 3:if(!(+s>l)){e.next=6;break}return T.error(t["there-is-not-enough-amount"]),e.abrupt("return");case 6:if(S.isFromConnected){e.next=9;break}return T.error("".concat(t["send-finished-one"]," ").concat(_(d.from_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 9:return x(!0),A({stageOne:!1}),e.next=13,k.a.request("freeze",[c.detail.chainId,c.detail.account,d.to_chainId,s],{includeResponse:!0});case 13:e.sent.success?(te(Object(h.jsx)(b.a,{type:u.h,className:"button-bridge",label:t.processing})),A({stageOne:!0,stageTwo:!1}),window.setInterval((function(){se()}),3e3)):x(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(a.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.isToConnected){e.next=3;break}return T.error("".concat(t["send-finished-one"]," ").concat(_(d.to_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 3:return Q(!0),$({stageOne:!1}),e.next=7,k.a.request("mintDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 7:e.sent.success?($({stageOne:!0,stageTwo:!1}),te(Object(h.jsx)(b.a,{type:u.h,className:"button-bridge",label:t.processing})),window.setInterval((function(){se()}),3e3)):T.error(t["claim-faild"]);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){W.push("/bridge")},re=function(){var e=Object(a.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.request("unlockDeri",[c.detail.chainId,c.detail.account],{includeResponse:!0});case 2:e.sent.success?(R(!0),le()):(R(!1),T.error(t["approve-faild"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(a.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.isConnected()){e.next=5;break}return e.next=3,k.a.request("isDeriUnlocked",[c.detail.chainId,c.detail.account]);case 3:t=e.sent,R(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c.isConnected()&&(le(),se())}),[c.detail,d]),Object(r.useEffect)((function(){J?A({stageOne:!0,stageTwo:!0,stageThree:!0}):K&&($({stageOne:!0,stageTwo:!0,stageThree:!0}),x(!1),v(""))}),[J,d]),Object(r.useEffect)((function(){var e;e=c.isConnected()?J?Object(h.jsx)(b.a,{type:u.h,className:"button-bridge",label:t.claim,onClick:ae}):D?K?Object(h.jsxs)("button",{className:"complete",onClick:ie,children:[" ",Object(h.jsx)("img",{alt:"",src:I})," ",t.complete," "]}):Object(h.jsx)(b.a,{type:u.h,className:"button-bridge",label:t.send,onClick:ne}):Object(h.jsx)(b.a,{type:u.h,className:"button-bridge",label:t.approve,onClick:re}):Object(h.jsx)(b.a,{type:u.h,className:"button-bridge",label:t["connect-wallet"],onClick:ce}),te(e)}),[J,c.detail,D,s,d,S,K]),Object(h.jsxs)("div",{className:"operate",children:[Object(h.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",s,"  DERI ",t.from.toLowerCase()," ",d.from_network," ",t.to.toLowerCase()," ",d.to_network]}),Object(h.jsx)("div",{className:"btn",children:ee}),Object(h.jsxs)("div",{className:"hint",children:[!o&&Object(h.jsxs)("div",{className:"sending",children:[Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:p})]}),Object(h.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[f&&Object(h.jsx)(h.Fragment,{children:Z.stageOne?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:I})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(g,{})})}),!f&&Object(h.jsx)("div",{className:"staic"})]})]}),Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:N})]}),Object(h.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[f&&Object(h.jsx)(h.Fragment,{children:Z.stageOne&&Object(h.jsx)(h.Fragment,{children:Z.stageTwo?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:I})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(g,{})})})}),(!f||!Z.stageOne)&&Object(h.jsx)("div",{className:"staic"})]})]}),Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:w})]}),Object(h.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[f&&Object(h.jsx)(h.Fragment,{children:Z.stageOne&&Z.stageTwo&&Object(h.jsx)(h.Fragment,{children:Z.stageThree?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:I})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(g,{})})})}),(!f||!Z.stageTwo)&&Object(h.jsx)("div",{className:"staic"})]})]})]}),o&&Object(h.jsxs)("div",{className:"claiming",children:[Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:p})]}),Object(h.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[K&&Object(h.jsx)(h.Fragment,{children:M.stageOne?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:I})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(g,{})})}),!K&&Object(h.jsx)("div",{className:"staic"})]})]}),Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:N})]}),Object(h.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[K&&Object(h.jsx)(h.Fragment,{children:M.stageOne&&Object(h.jsx)(h.Fragment,{children:M.stageTwo?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:I})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(g,{})})})}),(!K||!M.stageOne)&&Object(h.jsx)("div",{className:"staic"})]})]}),Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsxs)("div",{className:"stage-img-text",children:[Object(h.jsxs)("div",{className:"stage-img",children:[" ",Object(h.jsx)("img",{alt:"",src:w})]}),Object(h.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(h.jsxs)("div",{className:"ok-pending",children:[K&&Object(h.jsx)(h.Fragment,{children:M.stageOne&&M.stageTwo&&Object(h.jsx)(h.Fragment,{children:M.stageThree?Object(h.jsx)("div",{className:"succeed",children:Object(h.jsx)("img",{alt:"",src:I})}):Object(h.jsx)("div",{className:"pending",children:Object(h.jsx)(g,{})})})}),(!K||!M.stageTwo)&&Object(h.jsx)("div",{className:"staic"})]})]})]})]})]})}function _(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=f.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=x.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=v.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=x.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=f.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=v.default}return c}var S=c(761),y=c.p+"static/media/arrow-left.f14b02ac.svg",T=c.p+"static/media/disabled-down.e8dbb78e.svg",W=c(164),F=c(163),E=c(102),D=c.n(E);c(1141);function R(e,t){var c={};switch(e=+e){case 1:c.netWork=t.ethereum,c.chainId=1,c.img=f.default;break;case 56:c.netWork=t.bsc,c.chainId=56,c.img=x.default;break;case 128:c.netWork=t.heco,c.chainId=128,c.img=v.default;break;case 97:c.netWork=t["bsc-testnet"],c.chainId=97,c.img=x.default;break;case 3:c.netWork=t.ropsten,c.chainId=3,c.img=f.default;break;case 256:c.netWork=t["heco-testnet"],c.chainId=256,c.img=v.default}return c}t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,c=e.lang,s=Object(r.useState)(0),l=Object(i.a)(s,2),j=l[0],b=l[1],u=Object(r.useState)(0),m=Object(i.a)(u,2),O=m[0],g=m[1],p="prod"!==d.DeriEnv.get(),N=p?[{text:c.ropsten,id:3,img:f.default},{text:c["bsc-testnet"],id:97,img:x.default},{text:c["heco-testnet"],id:256,img:v.default}]:[{text:c.ethereum,id:1,img:f.default},{text:c.bsc,id:56,img:x.default},{text:c.heco,id:128,img:v.default}],w=Object(r.useState)(N),I=Object(i.a)(w,2),_=I[0],E=I[1],q=Object(r.useState)(N),z=Object(i.a)(q,2),J=z[0],V=z[1],P=Object(r.useState)(!1),U=Object(i.a)(P,2),Z=U[0],A=U[1],L=Object(r.useState)(p?{from_chainId:97,from_network:c["bsc-testnet"],to_chainId:3,to_network:c.ropsten}:{from_chainId:1,from_network:c.ethereum,to_chainId:56,to_network:c.bsc}),B=Object(i.a)(L,2),M=B[0],$=B[1],G=Object(r.useState)(!1),H=Object(i.a)(G,2),K=H[0],Q=H[1],X=Object(r.useState)(!1),Y=Object(i.a)(X,2),ee=Y[0],te=Y[1],ce=Object(r.useState)(!1),se=Object(i.a)(ce,2),ne=se[0],ae=se[1],ie=Object(r.useState)(R(M.from_chainId,c).img),re=Object(i.a)(ie,2),le=re[0],de=re[1],oe=Object(r.useState)(R(M.to_chainId,c).img),je=Object(i.a)(oe,2),be=je[0],ue=je[1],me=D()("from-network-list",{show:ee}),Oe=D()("to-network-list",{show:ne}),he=Object(r.useState)({isFromConnected:!1,isToConnected:!1}),ge=Object(i.a)(he,2),xe=ge[0],fe=ge[1],ve=function(){Z||te(!ee)},pe=function(){Z||ae(!ne)},Ne=function(){var e=Object(a.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getUserWormholeSignature",[t.detail.account]);case 3:(s=e.sent).valid&&($({from_chainId:s.fromChainId,from_network:R(s.fromChainId,c).netWork,to_chainId:s.toChainId,to_network:R(s.toChainId,c).netWork}),de(R(s.fromChainId,c).img),ue(R(s.toChainId,c).img),b(Object(d.bg)(s.amount,-18).toString()),A(s.valid));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(a.a)(n.a.mark((function e(){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);case 3:c=e.sent,g(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){we()}),[t.detail,M]),Object(r.useEffect)((function(){Ne()}),[t.detail]);var ke=function(e){var t=JSON.parse(JSON.stringify(M));t.to_chainId===e.id?(t.from_chainId=M.to_chainId,t.from_network=M.to_network,t.to_chainId=M.from_chainId,t.to_network=M.from_network):(t.from_chainId=e.id,t.from_network=e.text),$(t),te(!ee)},Ie=function(e){var t=JSON.parse(JSON.stringify(M));t.from_chainId===e.id?(t.from_chainId=M.to_chainId,t.from_network=M.to_network,t.to_chainId=M.from_chainId,t.to_network=M.from_network):(t.to_chainId=e.id,t.to_network=e.text),$(t),ae(!ne)};return Object(r.useEffect)((function(){var e,s=N.filter((function(e){return e.id===+M.from_chainId}))[0],n=N.filter((function(e){return e.id!==+M.from_chainId}))[0],a=N.filter((function(e){return e.id!==+M.from_chainId}))[1];e=[N.filter((function(e){return e.id===+M.to_chainId}))[0],N.filter((function(e){return e.id!==+M.to_chainId}))[0],N.filter((function(e){return e.id!==+M.to_chainId}))[1]],E([s,n,a]),V(e),de(R(M.from_chainId,c).img),ue(R(M.to_chainId,c).img),function(){var e=!!t.isConnected()&&+t.detail.chainId===+M.from_chainId,c=!!t.isConnected()&&+t.detail.chainId===+M.to_chainId;fe({isFromConnected:e,isToConnected:c})}()}),[M,t.detail]),Object(h.jsx)("div",{className:"bridge-big-box",children:Object(h.jsxs)("div",{className:"bridge-box",children:[Object(h.jsxs)("div",{className:"bridge-title",children:[Object(h.jsx)("div",{className:"title",children:c.bridge}),Object(h.jsx)("div",{className:"birdge-des",children:c["bridge-des"]})]}),Object(h.jsxs)("div",{className:"bridge-info",children:[Object(h.jsxs)("div",{className:"select-network-box",children:[Object(h.jsx)("div",{className:"select-network-title",children:c["select-networks"]}),Object(h.jsxs)("div",{className:"select-network-from-to",children:[Object(h.jsxs)("div",{className:"from-network",children:[Object(h.jsx)("div",{className:"from-title",children:c.from}),Object(h.jsxs)("div",{className:"from-dropdown-list",children:[Object(h.jsxs)("div",{className:Z?"drop drop-disabled":"drop",onClick:function(){ve()},children:[Object(h.jsxs)("div",{className:"network-logo-connected",children:[Object(h.jsx)("img",{src:le,alt:""}),Object(h.jsx)("span",{children:M.from_network}),Object(h.jsx)("div",{className:K?"connected-hide":xe.isFromConnected?"connected":"is-connected",children:!K&&xe.isFromConnected?c.connected:c.unconnected})]}),Object(h.jsx)("img",{className:"down-icon",src:Z?T:F.default,alt:""})]}),Object(h.jsxs)("ul",{className:me,children:[Object(h.jsxs)("li",{className:"wallet-li",onClick:function(){return ke(_[0])},children:[Object(h.jsxs)("div",{className:"li-logo-network",children:[Object(h.jsx)("img",{alt:"",src:_[0].img})," ",Object(h.jsxs)("span",{children:[" ",_[0].text," "]})]}),Object(h.jsx)("div",{className:"up-icon-btn",onClick:function(){ve()},children:Object(h.jsx)("img",{alt:"",src:F.default,className:"up-icon"})})]}),Object(h.jsx)("li",{className:"wallet-li",onClick:function(){return ke(_[1])},children:Object(h.jsxs)("div",{className:"li-logo-network",children:[Object(h.jsx)("img",{alt:"",src:_[1].img})," ",Object(h.jsxs)("span",{children:[" ",_[1].text," "]})]})}),Object(h.jsx)("li",{className:"wallet-li",onClick:function(){return ke(_[2])},children:Object(h.jsxs)("div",{className:"li-logo-network",children:[Object(h.jsx)("img",{alt:"",src:_[2].img})," ",Object(h.jsxs)("span",{children:[" ",_[2].text," "]})]})})]})]})]}),Object(h.jsx)("div",{className:"arrow",children:Object(h.jsx)("img",{src:y,alt:""})}),Object(h.jsxs)("div",{className:"to-network",children:[Object(h.jsx)("div",{className:"to-title",children:c.to}),Object(h.jsxs)("div",{className:"to-dropdown-list",children:[Object(h.jsxs)("div",{className:Z?"drop drop-disabled":"drop",onClick:function(){pe()},children:[Object(h.jsxs)("div",{className:"network-logo-connected",children:[Object(h.jsx)("img",{src:be,alt:""}),Object(h.jsx)("span",{children:M.to_network}),Object(h.jsx)("div",{className:K?xe.isToConnected?"connected":"is-connected":"connected-hide",children:K&&xe.isToConnected?c.connected:c.unconnected})]}),Object(h.jsx)("img",{className:"down-icon",src:Z?T:F.default,alt:""})]}),Object(h.jsxs)("ul",{className:Oe,children:[Object(h.jsxs)("li",{className:"wallet-li",onClick:function(){return Ie(J[0])},children:[Object(h.jsxs)("div",{className:"li-logo-network",children:[Object(h.jsx)("img",{alt:"",src:J[0].img})," ",Object(h.jsxs)("span",{children:[" ",J[0].text," "]})]}),Object(h.jsx)("div",{className:"up-icon-btn",onClick:function(){pe()},children:Object(h.jsx)("img",{alt:"",src:F.default,className:"up-icon"})})]}),Object(h.jsx)("li",{className:"wallet-li",onClick:function(){return Ie(J[1])},children:Object(h.jsxs)("div",{className:"li-logo-network",children:[Object(h.jsx)("img",{alt:"",src:J[1].img})," ",Object(h.jsxs)("span",{children:[" ",J[1].text," "]})]})}),Object(h.jsx)("li",{className:"wallet-li",onClick:function(){return Ie(J[2])},children:Object(h.jsxs)("div",{className:"li-logo-network",children:[Object(h.jsx)("img",{alt:"",src:J[2].img})," ",Object(h.jsxs)("span",{children:[" ",J[2].text," "]})]})})]})]})]})]})]}),Object(h.jsxs)("div",{className:"set-amount",children:[Object(h.jsx)("div",{className:"set-amount-title",children:c["set-amount"]}),Object(h.jsxs)("div",{className:"set-amount-box",children:[Object(h.jsxs)("div",{className:"input-deri",children:[Object(h.jsx)(o.a,{value:j,onChange:function(e){b(e)},disabled:Z,className:"input-box"}),Object(h.jsxs)("span",{children:[Object(h.jsx)("img",{alt:"",src:W.default,className:"amount-img"})," DERI"]})]}),Object(h.jsxs)("div",{className:"total-deri",children:[c["total-amount"]," ",Object(h.jsx)(S.a,{value:O,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(h.jsx)("div",{className:"bridge-operate-hint",children:Object(h.jsx)(C,{lang:c,sending:Z,wallet:t,balance:O,isWalletConnected:xe,amount:j,isClaim:K,initialize:M,setIsClaim:Q,setSending:A,setAmount:b})}),Object(h.jsx)("div",{className:"bridge-to-polygon",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"birdge-to-polygon-title",children:[c["bridge-to-polygon"]," ",Object(h.jsx)("span",{className:"polygon-title",children:Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:"Polygon"})})]}),Object(h.jsx)("div",{className:"bridge-to-polygon-des",children:c["bridge-to-polygon-des"]})]})})]})]})})})))},761:function(e,t,c){"use strict";var s,n=c(39),a=c(103),i=c(46),r=c(7),l=c(48),d=c(8),o=(c(75),c(776)),j=c(47),b=c(28),u=c(13),m=c(9),O=Object(j.a)(o.a)(s||(s=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width}));t.a=function(e){var t=Object(d.useState)(Object(m.jsx)("span",{className:"loading-line"})),c=Object(r.a)(t,2),s=c[0],l=c[1],o=Object(d.useState)(!0),j=Object(r.a)(o,2),h=j[0],g=j[1],x=(Object(d.useRef)(),function(){var t=e.allowZero;return"object"!==Object(i.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t});return Object(d.useEffect)((function(){e.allowZero,e.wallet;var t=e.defaultValue,c=void 0===t?"--":t,s=Object(a.a)(e,["allowZero","wallet","defaultValue"]);x()?(s.value&&/\d+\.0*[1-9]+/.test(s.value)&&0===+Object(u.bg)(s.value).toFixed(+s.decimalScale||2)&&(s.decimalScale=Object(b.c)(s.value)+1),s.value=Object(b.D)(s.value),l(Object(m.jsx)(O,Object(n.a)(Object(n.a)({},s),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}))),g(!1)):h&&l(Object(m.jsx)("span",{className:"loading-line",style:{width:e.width,height:e.height}}));var i=window.setTimeout((function(){x()||l(c)}),3e4);return function(){clearTimeout(i)}}),[e.value,e.decimalScale,e.suffix]),s}},800:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var s,n=c(39),a=c(48),i=c(8),r=c(47),l=c(13),d=c(9),o=r.a.div(s||(s=Object(a.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: 56px;\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.unitPadding}));function j(e){var t=e.value,c=e.unit,s=e.max,a=e.step,r=e.onChange,j=e.styles,b=void 0===j?{}:j,u=e.focus,m=e.unitPadding,O=void 0===m?"24px":m,h=e.minTradeVolume,g=e.decimal,x=void 0===g?2:g,f=e.readOnly,v=e.inputWidth,p=void 0===v?"50%":v,N=e.className,w=e.disabled,k=void 0!==w&&w,I=Object(i.useRef)(null);return Object(i.useEffect)((function(){I.current.setCustomValidity(""),I.current&&u&&I.current.focus()}),[u]),Object(d.jsxs)(o,{unitPadding:O,inputWidth:p,className:N,style:Object(n.a)({},b),children:[Object(d.jsx)("input",{type:"number",disabled:k,value:t,step:a,ref:I,onChange:function(e){var t="\\d+\\.\\d{0,".concat(x,"}$"),c=new RegExp(t),n=e.target.value;if(s&&Object(l.bg)(n).gt(s))r&&r(s);else if(n<0||isNaN(n))r&&r("");else if(n){if(h>=1)if(n/h>=1)r&&r(Object(l.bg)(n).div(h).integerValue()*h);else r&&r(n*h);else if(/\d+\./.test(n)&&!c.test(n)){var a=n.substring(0,n.indexOf(".")+1+x);r&&r(a)}else r&&r(n)}else r&&r(n)},readOnly:f}),Object(d.jsx)("div",{className:"unit",children:c})]})}}}]);
//# sourceMappingURL=14.50d72501.chunk.js.map