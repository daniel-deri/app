(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[5],{646:function(e,t,A){"use strict";A.d(t,"a",(function(){return d}));var a=A(0),r=A.n(a),n=A(3),c=A(21),s=A(6),i=A(25);function d(e){var t=e.btnText,A=e.className,a=e.disabled,d=e.click,l=e.afterClick,o=e.checkApprove,u=e.wallet,g=e.spec,j=e.lang,w=Object(s.useState)(a?"disabled":"enabled"),b=Object(c.a)(w,2),p=b[0],f=b[1],O=Object(s.useState)(!0),x=Object(c.a)(O,2),m=x[0],h=x[1],D=Object(s.useState)(!1),B=Object(c.a)(D,2),I=B[0],v=B[1],C=Object(s.useState)(t),Q=Object(c.a)(C,2),k=Q[0],M=Q[1],y=Object(s.useRef)(null),E=function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===p){e.next=2;break}return e.abrupt("return");case 2:return N(),e.next=5,d();case 5:e.sent&&l&&l(),S();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){f("disabled"),v(!0),y.current&&(y.current.style.display="inline-block")},S=function(){y.current&&(y.current.style.display="none"),f("enabled"),v(!1)},J=function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o&&u&&u.detail.account)){e.next=5;break}return e.next=3,u.isApproved(g.pool,g.bTokenId);case 3:t=e.sent,h(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(),e.next=3,u.approve(g.pool,g.bTokenId);case 3:e.sent.success?h(!0):(h(!1),alert(j["approve-failed"])),S();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return J(),function(){}}),[u,g,o]),Object(s.useEffect)((function(){return t&&M(t),function(){}}),[t]),Object(i.jsxs)("button",{className:A,onClick:function(){m?E():Y()},children:[Object(i.jsx)("span",{className:"btn-loading-wrap",children:Object(i.jsx)("span",{ref:y,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),I?j.pending:m?k:j.approve]})}},648:function(e,t,A){"use strict";A.d(t,"a",(function(){return d}));var a=A(24),r=A(183),n=A(21),c=A(6),s=A(649),i=A(25);function d(e){var t=Object(c.useState)("--"),A=Object(n.a)(t,2),d=A[0],l=A[1];return Object(c.useEffect)((function(){var t=e.allowZero,A=Object(r.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&l(Object(i.jsx)(s.a,Object(a.a)(Object(a.a)({},A),{},{displayType:"text"}))),function(){}}),[e.value]),d}},650:function(e,t,A){"use strict";function a(e,t){for(var A=e.toString();A.length<t;)A="0"+A;return A}function r(e){return a(e,2)}function n(t,A){"string"!==typeof t&&(A=t,t=e.exports.ISO8601_FORMAT),A||(A=e.exports.now());var n=r(A.getDate()),c=r(A.getMonth()+1),s=r(A.getFullYear()),i=r(s.substring(2,4)),d=t.indexOf("yyyy")>-1?s:i,l=r(A.getHours()),o=r(A.getMinutes()),u=r(A.getSeconds()),g=a(A.getMilliseconds(),3),j=function(e){var t=Math.abs(e),A=String(Math.floor(t/60)),a=String(t%60);return 1===A.length&&(A="0"+A),1===a.length&&(a="0"+a),e<0?"+"+A+a:"-"+A+a}(A.getTimezoneOffset());return t.replace(/dd/g,n).replace(/MM/g,c).replace(/y{1,4}/g,d).replace(/hh/g,l).replace(/mm/g,o).replace(/ss/g,u).replace(/SSS/g,g).replace(/O/g,j)}function c(e,t,A,a){e["set"+(a?"":"UTC")+t](A)}e.exports=n,e.exports.asString=n,e.exports.parse=function(t,A,a){if(!t)throw new Error("pattern must be supplied");return function(t,A,a){var r=t.indexOf("O")<0,n=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,t){c(e,"FullYear",t,r)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,t){c(e,"Month",t-1,r)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,t){c(e,"Date",t,r)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,t){c(e,"Hours",t,r)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,t){c(e,"Minutes",t,r)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,t){c(e,"Seconds",t,r)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,t){c(e,"Milliseconds",t,r)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,t){"Z"===t&&(t=0);var A=Math.abs(t),a=(t>0?-1:1)*(A%100+60*Math.floor(A/100));e.setUTCMinutes(e.getUTCMinutes()+a)}}],s=n.reduce((function(e,t){return t.pattern.test(e.regexp)?(t.index=e.regexp.match(t.pattern).index,e.regexp=e.regexp.replace(t.pattern,"("+t.regexp+")")):t.index=-1,e}),{regexp:t,index:[]}),i=n.filter((function(e){return e.index>-1}));i.sort((function(e,t){return e.index-t.index}));var d=new RegExp(s.regexp).exec(A);if(d){var l=a||e.exports.now();return i.forEach((function(e,t){e.fn(l,d[t+1])})),l}throw new Error("String '"+A+"' could not be parsed as '"+t+"'")}(t,A,a)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"},657:function(e,t,A){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABBdSURBVHic7d0tj2xZFcfhBeFFkAwCLA6HJEGgwYHEkyBwgwJHwGEQjOILoPgKIAmCQDAEEiZoSHAkCEAMom/PdPet6qrzuvda63mS9mfudFf/797nNxMxn+9ExI8j4tODnwMAONG7EfFBRLwfEd8a/CwAwEkeB8Dj168i4ktDnwgAivn46Ae4w9ci4o8R8V5EvDP4WQCAg7w8AXj69c+I+F7kGC4AwAKvDYDHr99HxFdHPSAAZJf1b9JfjojfRMQvI+ILg58FANLJOgAiIj4WD5XAX0I2CADp3XMFcOlLNggAd8p8AvDSF+PhSkA2CAA3VBoAj2SDAJDQ2isA2SAAJLbnAJANAsAFXf5mLBsEgCe6DIAI2SAATO2IKwDZIAA80ekE4CXZIABtdR4Aj2SDALRjADz4ZDxcPfwtZIMANOAX3XOfj4ifRcTvQjYIQGEGwGWyQQBKMwCukw0CUJYBcNtnIuJHEfGnkA0CUIQBcD/ZIABlGADLyQYBSM8AWEc2CEBqfnFtIxsEICUDYB+yQQBSMQD2IxsEIA0DYH+yQQCmZwAcRzYIwLQMgOM9zQY/O/hZACAiDICzyAYBmIpfROf6XMgGAZiAATCGbBCAoQyAcWSDAAxjAIwnGwTgdAbAPGSDAJzGAJiPbBCAwxkAc5INAnAov1jmJhsE4BAGQA6yQQB2ZQDkIRsEYDcGQD6yQQA2MwDykg0CsJoBkJ9sEIDFDIAaZIMALOIXRS2yQQDuYgDUJBsE4FUGQF2yQQCuMgDqkw0C8BYDoA/ZIAAfMgD6kQ0CYAA0JRsEaM4Hf2+yQYCmDAAiZIMA7RgAPJINAjRiAPCSbBCgAQOAa2SDAIUZANwiGwQoyADgHrJBgGJ8kLOEbBCgCAOANWSDAMkZAKwlGwRIzABgK9kgQEIGAHuRDQIkYgCwN9kgQAIGAEeQDQJMzgczR5INAkzKAOAMskGAyRgAnEU2CDARA4CzyQYBJmAAMIpsEGAgA4DRZIMAAxgAzEA2CHAyH7TMRDYIcBIDgBnJBgEOZgAwK9kgwIEMAGYnGwQ4gAFAFrJBgB0ZAGQjGwTYgQFARrJBgI18cJKZbBBgJQOACmSDAAsZAFQhGwRYwACgGtkgwB0MAKqSDQK8wgCgOtkgwAUGAB3IBgFe8EFIJ7JBgDcMADqSDQLtGQB0JRsEWjMA6E42CLRkAMAD2SDQigEAz8kGgRYMAHibbBAozwcbXCcbBMoyAOA22SBQjgEA95ENAqUYALCMbBAowQCAdWSDQGoGAGwjGwRSMgBgO9kgkI4PKtiPbBBIwwCA/ckGgekZAHAM2SAwNQMAjiUbBKZkAMA5ZIPAVAwAOJdsEJiCAQDnkw0Cw/nggXFkg8AwBgCMJxsETmcAwBxkg8CpDACYi2wQOIUBAHOSDQKHMgBgbrJB4BAGAMxPNgjszgcJ5CEbBHZjAEA+skFgMwMAcpINApsYAJCbbBBYxQCAGmSDwCIGANQiGwTuYgBAPbJB4CYfDFCXbBC4ygCA+mSDwFsMAOhBNgg8YwBAL7JBICIMAOhKNgjNGQDQm2wQmjIAANkgNOQHHXgkG4RGDADgJdkgNGAAAJfIBqE4AwB4jWwQijIAgHvIBqEYAwBYQjYIRRgAwFKyQSjADy6wlmwQEjMAgK1kg5CQAQDsQTYIyRgAwJ5kg5CEAQAcQTYIkzMAgCPJBmFSBgBwNNkgTMgPInAW2SBMxAAAziYbhAkYAMAIskEYzAAARpINwiAGADAD2SCczAAAZiIbhJMYAMBsZINwAj9YwKxkg3AgAwCYnWwQDmAAABnIBmFnBgCQiWwQdmIAABnJBmEjAwDITDYIKxkAQHayQVjBDwpQhWwQFjAAgGpkg3AHAwCoSDYINxgAQGWyQbjCAAA6kA3CCwYA0IlsEN4wAIBuZIMQvvGBvmSDtGYAAN3JBmnJAACQDdKQAQDwEdkgbRgAAG+TDVKeAQBwnWyQsgwAgNfJBinJNzLAfWSDlGIAACwjG6QEAwBgOdkg6RkAAOvJBknLAADYTjZIOgYAwH5kg6RhAADsSzZICr4xAY4hG2RqBgDAsWSDTMkAADiebJDpGAAA55ENMg0DAOB8skGGMwAAxpENMowBADCWbJAhfKMBzEE2yKkMAIC5yAY5hQEAMB/ZIIczAADmJRvkMAYAwPxkg+zOAADIQzbIbgwAgFxkg+zCNw5ATrJBNjEAAHKTDbKKAQCQn2yQxQwAgDpkg9zNAACoRzbITQYAQF2yQa4yAABqkw1ykW8EgB5kgzxjAAD0IhskIgwAgI5kgxgAAI3JBhszAACQDTZkAADwSDbYiAEAwFOywSb8iwXgEtlgcQYAAK+RDRZlAABwi2ywIAMAgHvJBgsxAABYSjZYgAEAwFqywcQMAAC2kA0m5V8UAHuQDSZjAACwJ9lgEgYAAHuTDSZgAABwFNngxAwAAI4mG5yQAQDAWWSDEzEAADiTbHAS/uABGEE2OJgBAMBIssFBDAAARpMNDmAAADAL2eCJDAAAZiMbPIEBAMCsZIMHMgAAmJls8CD+IAHIQDa4MwMAgExkgzsxAADIRja4AwMAgKxkgxsYAABkJxtcwQAAoArZ4AIGAACVyAbv5A8GgIpkgzcYAABUJhu8wgAAoDrZ4AUGAABdyAafMAAA6EY2GAYAAH21zgYNAAA6a5sNtvkHBYBXtMsGDQAA+EibbNAAAIDnWmSDBgAAXFY6GzQAAOB1JbNBAwAA7lMqGzQAAOB+ZbLBtA8OAAOlzwYNAABYL202aAAAwDYps0EDAAD2kSobNAAAYF8pskEDAACOMXU2aAAAwPE+GP0AL31i9AMAQFG/jof/VsCfRz/IJU4AAGBf70fENyPi6zHpL/8IJwAAsJd/R8RPI+InEfGfwc9ykwEAANt8EBG/iIgfRMQ/Bj/L3QwAAFjvD/Hw/wb47egHWco7AACw3D8i4rsR8ZVI+Ms/wgkAACzxv4j4eUT8MCL+NfhZNjEAAOA+U2d9S7kCAIDXpcj6lnICAACXpcr6ljIAAOC5lFnfUgYAAHwkbda3lHcAAKBA1reUEwAAOiuT9S1lAADQVamsbylXAAB0UzLrW8oJAABdlM76ljIAAKiuRda3lAEAQGVtsr6lvAMAQEXtsr6lnAAAUEnbrG8pAwCAKlpnfUu5AgAgO1nfCk4AAMhK1reBAQBANrK+HRgAAGQi69uJdwAAyEDWtzMnAADMTNZ3EAMAgFnJ+g7kCgCA2cj6TuAEAIBZyPpOZAAAMJqsbwADAICRZH2DeAcAgBFkfYM5AQDgTLK+SRgAAJxF1jcRVwAAHE3WNyEnAAAcRdY3MQMAgL3J+hIwAADYk6wvCe8AALAHWV8yTgAA2ELWl5QBAMBasr7EXAEAsJSsrwAnAADcS9ZXiAEAwC2yvoIMAABeI+sryjsAAFwi6yvOCQAAT8n6mjAAAHgk62vEFQAAsr6GnAAA9CXra8wAAOhH1ocBANCMrI+I8A4AQBeyPp5xAgBQm6yPiwwAgLpkfVzlCgCgHlkfNzkBAKhD1sfdDACA/GR9LGYAAOQm62MV7wAA5CTrYxMnAAC5yPrYhQEAkIesj924AgCYn6yP3TkBAJiXrI/DGAAA85H1cTgDAGAusj5O4R0AgDnI+jiVEwCAsWR9DGEAAIwj62MYVwAA55P1MZwTAIDzyPqYhgEAcDxZH9MxAACOJetjSt4BADiGrI+pOQEA2JesjxQMAID9yPpIwxUAwHayPtJxAgCwnqyPtAwAgOVkfaRnAAAsI+ujBO8AANxH1kcpTgAAXifroyQDAOA6WR9luQIAeJusj/KcAAB8RNZHGwYAgKyPhgwAoDtZHy15BwDoStZHa04AgG5kfRAGANCLrA/ecAUAdCDrgxecAACVyfrgCgMAqEjWBzcYAEA1sj64g3cAgCpkfbCAEwAgO1kfrGAAAJnJ+mAlVwBARrI+2MgJAJCJrA92YgAAGcj6YGcGADA7WR8cwDsAwKxkfXAgJwDAbGR9cAIDAJiJrA9O4goAmIGsD07mBAAYSdYHgxgAwAiyPhjMAADOJuuDCXgHADiLrA8m4gQAOJqsDyZkAABHkvXBpFwBAEeQ9cHknAAAe5L1QRIGALAHWR8kYwAAW8n6ICHvAABryfogMScAwFKyPijAAACWkPVBEa4AgHvI+qAYJwDAa2R9UJQBAFwi64PiDADgJVkfNOAdAOCRrA8acQIAyPqgIQMAepP1QVOuAKAnWR805wQAepH1ARFhAEAXsj7gGQMA6pP1AW/xDgDUJesDrnICAPXI+oCbDACoRdYH3MUVANQg6wMWcQIAucn6gFUMAMhJ1gdsYgBAPrI+YDPvAEAesj5gN04AYH6yPmB3BgDMTdYHHMIVAMxJ1gccygkAzEXWB5zCAIA5yPqAUxkAMJ6sDziddwBgHFkfMIwTADifrA8YzgCAc8n6gCm4AoBzyPqAqTgBgGPJ+oApGQBwDFkfMDUDAPYn6wOm5x0A2I+sD0jDCQBsJ+sD0jEAYBtZH5CSKwBYR9YHpOYEAJaR9QElGABwH1kfUIoBALfJ+oByvAMA18n6gLKcAMDbZH1AeQYAPCfrA1pwBQAPZH1AK04A6E7WB7RkANCVrA9ozQCgI1kf0J53AOhE1gfwhhMAOpD1AbxgAFCdrA/gAlcAVCXrA3iFEwCqkfUB3MEAoApZH8ACBgAVyPoAFvIOAJnJ+gBWcgJARrI+gI0MALKR9QHswBUAWcj6AHbkBIDZyfoADmAAMCtZH8CBDABmJOsDOJh3AJiJrA/gJE4AmIGsD+BkBgCjyfoABnAFwCiyPoCBnABwNlkfwAQMAM4i6wOYiAHAGWR9AJPxDgBHkvUBTMoJAEeQ9QFMzgBgb7I+gARcAbAXWR9AIk4A2ErWB5CQAcBasj6AxAwA1pD1ASTnHQCWkPUBFOEEgHvI+gCKMQC4RdYHUJArAK6R9QEU5gSAl2R9AA0YADyS9QE0YgAQIesDaMc7AL3J+gCacgLQk6wPoDkDoB9ZHwCuABqR9QHwIScA9cn6AHiLAVCXrA+AqwyAmmR9ALzKOwC1yPoAuIsTgBpkfQAsYgDkJ+sDYDFXAHnJ+gBYzQlAPrI+ADYzAPKQ9QGwGwMgB1kfALvyDsDcZH0AHMIJwJxkfQAcygCYj6wPgMO5ApiHrA+A0zgBGE/WB8DpDIBxZH0ADGMAjCHrA2Ao7wCcS9YHwBScAJxD1gfAVAyA48n6AJiOK4DjyPoAmJYTgP3J+gCYngGwH1kfAGkYAPuQ9QGQincAtvl7yPoASMgJwDqyPgBSMwCWk/UBkJ4rgPvJ+gAowwnAbbI+AMoxAK6T9QFQlgFwmawPgNK8A/CcrA+AFpwAPJD1AdCKASDrA6ChzlcAsj4A2up4AiDrA6C9TgNA1gcAb3QZALI+AHii+jsAsj4AuKDqCYCsDwBeUXEAyPoA4IZKVwCyPgC4U4UTAFkfACyUeQDI+gBgpawDQNYHABtkewdA1gcARb0bD8f7T7/+GxHvRcQ7A58LAMrIcAUg6wOABh5PAP4aEd8Y/CwAwEm+HRHfj4hPDX4OACjr/+F/mKZgNNwOAAAAAElFTkSuQmCC"},666:function(e,t,A){"use strict";A.d(t,"a",(function(){return d}));var a=A(0),r=A.n(a),n=A(3),c=A(21),s=A(6),i=A(23);function d(e){var t=Object(s.useState)({}),A=Object(c.a)(t,2),a=A[0],d=A[1],l=null,o=function(){var t=Object(n.a)(r.a.mark((function t(){var A,a,n,c,s,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(i.getUserInfoAll)(e.detail.account);case 3:A=t.sent,a=(+A.total).toFixed(2),n=A.valid?(+A.amount).toFixed(2):0,c=(+A.lp).toFixed(2),s=(+A.trade).toFixed(2),l=A.chainId,d({claimed:a,unclaimed:n,harvestDeriLp:c,harvestDeriTrade:s,chainId:l});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){return l=window.setInterval(o,18e4),o(),function(){return clearInterval(l)}}),[e.detail.account]),[a,l]}},688:function(e,t,A){"use strict";var a=A(0),r=A.n(a),n=A(3),c=A(21),s=A(6),i=A(65),d=(A(657),A(650)),l=A.n(d),o=A(139),u=A(23),g=(A(647),A(666)),j=A(648),w=A(646),b=A(49),p=A(652),f=A(25);o[u.DeriEnv.get()].chainInfo;t.a=Object(i.b)("wallet","loading")(Object(i.c)((function(e){var t=e.wallet,A=void 0===t?{}:t,a=e.lang,i=e.loading,d=Object(g.a)(A),o=Object(c.a)(d,2),O=o[0],x=o[1],m=Object(p.a)(O.chainId),h=Object(s.useState)("--"),D=Object(c.a)(h,2),B=D[0],I=D[1],v=Object(s.useState)("--"),C=Object(c.a)(v,2),Q=C[0],k=C[1],M=Object(s.useState)("--"),y=Object(c.a)(M,2),E=y[0],N=y[1],S=Object(s.useState)("--"),J=Object(c.a)(S,2),Y=J[0],G=J[1],R=Object(s.useState)("--"),H=Object(c.a)(R,2),F=H[0],P=H[1],T=Object(s.useState)(1),Z=Object(c.a)(T,2),z=Z[0],K=Z[1],U=Object(s.useState)(1),L=Object(c.a)(U,2),W=L[0],_=L[1],X=Object(s.useState)([]),V=Object(c.a)(X,2),q=V[0],$=V[1],ee=Object(s.useState)(!1),te=Object(c.a)(ee,2),Ae=te[0],ae=te[1],re=Object(s.useState)([]),ne=Object(c.a)(re,2),ce=ne[0],se=ne[1],ie=Object(s.useState)(""),de=Object(c.a)(ie,2),le=de[0],oe=de[1],ue=Object(s.useState)(!1),ge=Object(c.a)(ue,2),je=(ge[0],ge[1],function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(A.detail.account,"/reward_list"),e.next=3,Object(u.fetchRestApi)(t);case 3:(a=e.sent).data&&(n=a.data.map((function(e){var t={};return t.address=e.trader_address,t.trader_volume=e.trader_volume,t.deri_reward=e.deri_reward,t.trader_invite_timestamp=1e3*e.trader_invite_timestamp,t.trader_address=e.trader_address.slice(0,6)+"..."+e.trader_address.slice(e.trader_address.length-4,e.trader_address.length),t})),$(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(s.useEffect)((function(){i.loading(),"--"!=B&&"--"!=Q&&"--"!=E&&"--"!=Y&&"--"!=F&&ce.length>0&&O.claimed&&i.loaded()}),[B,Q,E,Y,F,ce,O]);var we=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(A.detail.account,"/get_harvest_deri"),e.next=3,Object(u.fetchRestApi)(t);case 3:(a=e.sent).data&&G(a.data.deri_reward);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/broker/top3_reward_list",e.next=3,Object(u.fetchRestApi)("/broker/top3_reward_list");case 3:(t=e.sent).data&&(t.data.length?t.data.map((function(e){1===e.rank?I(e.deri_reward):2===e.rank?k(e.deri_reward):3===e.rank&&N(e.deri_reward)})):(I(0),k(0),N(0)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(A.detail.account,"/total_reward"),e.next=3,Object(u.fetchRestApi)(t);case 3:(a=e.sent).data&&(a.data.hasOwnProperty("deri_reward")?P(a.data.rank):P(">999"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==+O.unclaimed){e.next=3;break}return alert(a["no-deri-to-claim"]),e.abrupt("return");case 3:if(Object(b.c)(A.detail.chainId,O.chainId)){e.next=6;break}return alert("".concat(a["your-deri-is-on"]," ").concat(m.text,"  ").concat(a["connect-to"]," ").concat(m.text," ").concat(a["to-claim"],".")),e.abrupt("return");case 6:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=10;break}return alert(a["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 10:return e.next=12,Object(u.mintDToken)(A.detail.chainId,A.detail.account);case 12:if(!e.sent.success){e.next=18;break}return clearInterval(x),e.abrupt("return",!0);case 18:return alert(a["claim-failed"]),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A.isConnected()){e.next=5;break}return e.next=3,fe();case 3:e.sent&&ae(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(q.length){var e=q.length/10;e=Math.ceil(e);var t=q.slice(10*(W-1),10*W);K(e),se(t)}}),[A.detail,q,W]),Object(s.useEffect)((function(){A&&A.detail&&A.detail.account&&(je(),be(),pe())}),[A.detail]),Object(s.useEffect)((function(){var e;return e=window.setInterval(we(),18e4),function(){e&&clearInterval(e)}}),[A.detail.account]),Object(s.useEffect)((function(){var e;return e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),A=parseInt(t/e)*e+e-t,r=parseInt(A/3600),n=parseInt(A%3600/60),c=parseInt(A%60);oe("".concat(r," ").concat(a.h," ").concat(n," ").concat(a.m," ").concat(c," ").concat(a.s))}),1e3),function(){e&&clearInterval(e)}}),[A.detail.account]),Object(f.jsxs)("div",{className:"broker",children:[Object(f.jsxs)("div",{className:"title",children:[a["title-one"],Object(f.jsx)("br",{}),a["title-two"]]}),Object(f.jsxs)("div",{className:"rewards",children:[Object(f.jsxs)("div",{className:"reward-box",children:[Object(f.jsxs)("div",{className:"rewards-left",children:[Object(f.jsxs)("div",{className:"rewards-one",children:[Object(f.jsxs)("div",{className:"num",children:[Object(f.jsx)("span",{children:Object(f.jsx)(j.a,{value:B,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})," DERI"]}),Object(f.jsxs)("div",{className:"one",children:["# 1 ",a.rewards]})]}),Object(f.jsxs)("div",{className:"rewards-three",children:[Object(f.jsxs)("div",{className:"num",children:[Object(f.jsx)("span",{children:Object(f.jsx)(j.a,{value:E,displayType:"text",thousandSeparator:!0,decimalScale:"2"})}),"  DERI"]}),Object(f.jsxs)("div",{className:"one",children:["# 3 ",a.rewards]})]})]}),Object(f.jsxs)("div",{className:"rewards-right",children:[Object(f.jsxs)("div",{className:"rewards-two",children:[Object(f.jsxs)("div",{className:"num",children:[Object(f.jsx)("span",{children:Object(f.jsx)(j.a,{value:Q,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})," DERI"]}),Object(f.jsxs)("div",{className:"one",children:["# 2 ",a.rewards]})]}),Object(f.jsxs)("div",{className:"rewards-frou",children:[Object(f.jsx)("div",{className:"num",children:Object(f.jsx)("span",{children:F})}),Object(f.jsx)("div",{className:"one",children:a["your-rewards"]})]})]})]}),Object(f.jsx)("div",{className:"bg-box"})]}),Object(f.jsxs)("div",{className:"process",children:[Object(f.jsx)("div",{className:"invite",children:a["invute-friends"]}),Object(f.jsx)("div",{className:"proce"}),Object(f.jsx)("div",{className:"bind",children:a["bind-address"]}),Object(f.jsx)("div",{className:"proce"}),Object(f.jsx)("div",{className:"earn",children:a["earn-deri"]})]}),Object(f.jsxs)("div",{className:"rules",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{children:Object(f.jsxs)("a",{target:"_blank",href:"https://docs.deri.finance/guides/mining#mining-by-brokerage-mining-0-01deri-per-contract-or-distributed-per-volume-weight-if-breaching-the-hourly-upper-limit",children:[a["detailed-rules"]," >>"]})})]}),Object(f.jsxs)("div",{className:"my-harvest",children:[Object(f.jsx)("div",{className:"header",children:a["my-harvest"]}),Object(f.jsxs)("div",{className:"list",children:[Object(f.jsxs)("div",{className:"my-deri",children:[Object(f.jsx)("div",{className:"claim-deri",children:Object(f.jsxs)("div",{className:"claimed-deri",children:[Object(f.jsxs)("div",{className:"unclaimed-title",children:[Object(f.jsx)("span",{title:a["your-total-unclaimed-deri-title"],children:a["current-epoch-remaining-time"]}),Object(f.jsx)("span",{className:"deri-text",children:le})]}),Object(f.jsxs)("div",{className:"unclaimed-title",children:[Object(f.jsx)("span",{title:a["your-total-unclaimed-deri-title"],children:a["my-trading-volume-in-current-hour"]}),Object(f.jsxs)("span",{className:"deri-text",children:[Object(f.jsx)(j.a,{value:(+Y).toFixed(2),displayType:"text",thousandSeparator:!0,decimalScale:"2"}),"  DERI"]})]}),Object(f.jsxs)("div",{className:"claimed-title",children:[Object(f.jsx)("span",{className:"hover-title",title:a["your-total-claimed-deri-title"],children:a["claimed-deri"]}),Object(f.jsx)("span",{className:"deri-text",children:Ae?(+O.claimed+ +O.unclaimed).toFixed(2):O.claimed})]}),Object(f.jsxs)("div",{className:"unclaimed-title",children:[Object(f.jsx)("span",{className:"hover-title",title:a["your-total-unclaimed-deri-title"],children:a["unclaimed-deri"]}),Object(f.jsx)("span",{className:"deri-text",children:Ae?0:(+O.unclaimed).toFixed(2)})]})]})}),Object(f.jsx)("div",{className:"button",children:Object(f.jsx)(w.a,{className:"btn",btnText:a.claim,lang:a,click:Oe})})]}),Object(f.jsxs)("div",{className:"address-list",children:[Object(f.jsxs)("div",{className:"list-title",children:[Object(f.jsx)("div",{className:"time-invited",children:a["time-invited"]}),Object(f.jsx)("div",{className:"friends-add",children:a["friends-add"]}),Object(f.jsx)("div",{className:"contract-vol",children:a["contract-vol"]}),Object(f.jsx)("div",{className:"deri-minted",children:a["deri-minted"]})]}),ce.map((function(e,t){return Object(f.jsxs)("div",{className:"list-box",children:[Object(f.jsx)("div",{className:"time",children:l.a.asString("yyyy-MM-dd hh:mm",new Date(parseInt(e.trader_invite_timestamp)))}),Object(f.jsx)("div",{className:"address",children:e.trader_address}),Object(f.jsx)("div",{className:"volume",children:e.trader_volume}),Object(f.jsx)("div",{className:"deri",children:Object(f.jsx)(j.a,{value:e.deri_reward,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})]},t)}))]}),Object(f.jsxs)("div",{className:"page-of",children:[Object(f.jsx)("div",{onClick:function(){var e=W;1!=e&&(e-=1),_(e)},children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9.6",height:"8",viewBox:"0 0 9.6 8",children:Object(f.jsx)("path",{id:"\u8def\u5f84_3","data-name":"\u8def\u5f84 3",d:"M3186.224,481.353a.4.4,0,1,1,.552.58l-3.069,2.91h7.993a.4.4,0,1,1,0,.8h-7.98l3.056,2.91a.4.4,0,0,1-.552.58l-3.49-3.324a.8.8,0,0,1,.007-1.138Z",transform:"translate(-3182.5 -481.243)",fill:"#aaa"})})}),Object(f.jsxs)("div",{className:"page",children:[a.page," ",W," ",a.of," ",z]}),Object(f.jsx)("div",{onClick:function(){var e=W;e<z&&(e+=1),_(e)},children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9.6",height:"8",viewBox:"0 0 9.6 8",children:Object(f.jsx)("path",{id:"\u8def\u5f84_4","data-name":"\u8def\u5f84 4",d:"M3268.376,481.353a.4.4,0,0,0-.552.58l3.069,2.91H3262.9a.4.4,0,0,0,0,.8h7.98l-3.056,2.91a.4.4,0,0,0,.552.58l3.49-3.324a.8.8,0,0,0-.007-1.138Z",transform:"translate(-3262.5 -481.243)",fill:"#aaa"})})})]})]})]})]})})))}}]);
//# sourceMappingURL=5.55b506bf.chunk.js.map