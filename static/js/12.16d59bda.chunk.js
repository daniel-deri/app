/*! For license information please see 12.16d59bda.chunk.js.LICENSE.txt */
(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[12],{1197:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(0),a=n.n(r),i=n(2),o=n(5),c=n(10),l=n(38),s=n(796),u=n.n(s),d=n(896),f=n(897),h=(n(898),n(899)),p=n(30),m=n(783),v=(n(798),n(901)),x=n(791),b=n(9),y="".concat("https://infoapi2.deri.finance","/get_pools"),j="".concat("https://infoapi2.deri.finance","/get_trade_history"),g=function(e){var t=e.record,n=e.children,r=e.onClick;return Object(b.jsx)("span",{style:{width:"100%",display:"block",height:"44px",lineHeight:"44px"},onClick:function(){return r(t)},children:n})};function O(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(j),O=Object(o.a)(s,2),w=O[0],k=O[1],S=Object(l.g)(),C=[{title:"ZONE",dataIndex:"catalog",key:"catalog",width:"15%",render:function(e,t){return Object(b.jsx)(g,{record:t,onClick:N,children:e&&e.indexOf("-")>0?e.substring(e.indexOf("-")+1,e.length).toUpperCase():""})}},{title:"POOL",dataIndex:"catalog",key:"pool",width:"15%",render:function(e,t){return Object(b.jsx)(g,{record:t,onClick:N,children:e?e.toUpperCase():""})}},{title:"BASE TOKEN",dataIndex:"bToken",key:"bToken",width:"20%",height:"100%",className:"base-token",render:function(e,t){return Object(b.jsx)(g,{record:t,onClick:N,children:/(\w+\|)+/.test(e)?Object(b.jsx)(x.a,{text:"MULTIPLE TOKEN",tip:e.split("|").join(" | ")}):e})}},{title:"POOL ADDRESS",dataIndex:"address",key:"address",width:"15%",render:function(e,t){return Object(b.jsx)(g,{record:t,onClick:N,children:Object(p.h)(e)})}},{title:"LIQUIDITY",dataIndex:"liquidity",key:"liquidity",width:"20%",render:function(e,t){return Object(b.jsxs)(g,{record:t,onClick:N,children:[" ",Object(b.jsx)(m.a,{value:e,suffix:" ".concat(t.bToken.split("|")[0]),decimalScale:"2"})]})}},{title:"TRADE VOLUME",dataIndex:"notional",key:"notional",width:"20%",render:function(e,t){return Object(b.jsx)(g,{record:t,onClick:N,children:Object(b.jsx)(m.a,{value:e,suffix:" ".concat(t.bToken.split("|")[0]),decimalScale:"2"})})}}],E=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(y);case 2:200===(t=e.sent).status&&t.data.data&&r(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){S.push("/info/".concat(e.address,"/").concat(e.catalog,"/").concat(e.bToken,"/").concat(e.chain))};return Object(c.useEffect)((function(){E()}),[]),Object(b.jsxs)("div",{className:"info-main",children:[Object(b.jsx)("div",{className:"title",children:"Deri Overview"}),Object(b.jsxs)("div",{className:"charts",children:[Object(b.jsx)("div",{className:"graph tvl",children:Object(b.jsx)(f.a,{title:"TVL",url:"".concat("https://infoapi2.deri.finance","/get_liquidity_history")})}),Object(b.jsxs)("div",{className:"graph volume24",children:[Object(b.jsx)(v.a,{url:j,onChange:function(e){return k(e)}}),Object(b.jsx)(d.a,{title:"Volume 24H",url:w})]})]}),Object(b.jsx)("div",{className:"list-by-chain",children:Object.keys(n).map((function(e){return Object(b.jsx)(h.a,{columns:C,title:e,initialData:n[e]},e)}))})]})}},783:function(e,t,n){"use strict";var r,a,i=n(19),o=n(104),c=n(52),l=n(5),s=n(48),u=n(10),d=(n(76),n(797)),f=n(47),h=n(30),p=n(13),m=n(9),v=Object(f.a)(d.a)(r||(r=Object(s.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),x=f.a.div(a||(a=Object(s.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(u.useState)(Object(m.jsx)("span",{className:"loading-line"})),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(u.useState)(!0),d=Object(l.a)(s,2),f=d[0],b=d[1],y=function(){var t=e.allowZero;return"object"!==Object(c.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(u.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.defaultValue),r=void 0===n?"--":n,c=Object(o.a)(e,["allowZero","wallet","defaultValue"]);y()?(!t&&c.value&&/\d+\.0*[1-9]+/.test(c.value)&&0===+Object(p.bg)(c.value).toFixed(+c.decimalScale||2)&&(c.decimalScale=Object(h.c)(Math.abs(c.value))+1),c.value=Object(h.D)(c.value),c.value&&/\d+.9{6}/.test(c.value)&&(c.value=(+c.value).toFixed(5)),a(Object(m.jsx)(v,Object(i.a)(Object(i.a)({},c),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})))):f&&(a(Object(m.jsx)(x,Object(i.a)({className:"loading-line"},e))),e.closeShowLoadingEffectAfterLoaded&&b(!1));var l=window.setTimeout((function(){y()||a(r)}),3e4);return function(){clearTimeout(l)}}),[e.value,e.decimalScale,e.suffix]),r}},791:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r,a=n(48),i=n(47),o=n(816),c=n.n(o),l=n(106),s=n(30),u=n(9),d=i.a.div(r||(r=Object(a.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n"])),(function(e){return e.block}),(function(e){return e.block}));function f(e){var t=e.text,n=e.id,r=void 0===n?Object(s.a)(t):n,a=e.tip,i=e.multiline,o=e.html,f=e.className,h=e.element,p=void 0===h?"":h,m=e.block,v=void 0===m?"block":m,x=e.width,b=void 0===x?"auto":x,y=e.children,j=e.tiggerEvent;return Object(u.jsxs)(d,{className:f,block:v,children:[Object(u.jsx)("div",{className:"text","data-for":r,"data-tip":o?c.a.renderToString(p):a,"data-event":Object(s.t)()?"click":j,"data-html":o,children:t||y}),a&&Object(u.jsx)(l.a,{id:r,width:b,padding:"12",place:"bottom",overridePosition:function(e,t,n,r,a,i,o,c){var l=n.getBoundingClientRect(),s=r.getBoundingClientRect(),u=l.x,d=(l.y,l.height),f=e.left,h=e.top;return(u=f+s.width>document.documentElement.clientWidth?f-s.width+l.width:f)<0&&(u=0),(h+s.height>=document.documentElement.clientHeight?h-s.height+d/2:h)<0&&0,{top:h,left:u}},html:o,borderRadius:8,multiline:i})]})}},798:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,a=n(5),i=n(48),o=n(10),c=n(208),l=n(47),s=n(9),u=l.a.div(r||(r=Object(i.a)(["\n    display : flex;\n    width: 100%;\n    justify-content: space-between;\n  "])));function d(e){var t=e.groups,n=void 0===t?["25%","50%","75%","100%"]:t,r=e.selectedBorderColor,i=e.defaultBorderColor,l=e.onChange,d=e.defaultValue,f=e.outline,h=e.outlineColor,p=e.width,m=e.height,v=e.bgColor,x=e.className,b=Object(o.useState)(d),y=Object(a.a)(b,2),j=y[0],g=y[1];return Object(o.useEffect)((function(){g(d)}),[d]),Object(s.jsx)(u,{className:x,children:n.map((function(e,t){return Object(s.jsx)(c.a,{label:e,selectedBorderColor:r,isSelected:e===j,disabled:!1,outline:f,bgColor:v,className:"g-button",defaultBorderColor:i,outlineColor:h,width:p,height:m,onClick:function(){var t;(t=e)!==j?(g(t),l&&l(t)):t===j?(g(""),l&&l("")):g(t)}},t)}))})}},816:function(e,t,n){"use strict";e.exports=n(817)},817:function(e,t,n){"use strict";var r=n(105),a=n(10);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=60106,c=60107,l=60108,s=60114,u=60109,d=60110,f=60112,h=60113,p=60120,m=60115,v=60116,x=60121,b=60117,y=60119,j=60129,g=60131;if("function"===typeof Symbol&&Symbol.for){var O=Symbol.for;o=O("react.portal"),c=O("react.fragment"),l=O("react.strict_mode"),s=O("react.profiler"),u=O("react.provider"),d=O("react.context"),f=O("react.forward_ref"),h=O("react.suspense"),p=O("react.suspense_list"),m=O("react.memo"),v=O("react.lazy"),x=O("react.block"),b=O("react.fundamental"),y=O("react.scope"),j=O("react.debug_trace_mode"),g=O("react.legacy_hidden")}function w(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case c:return"Fragment";case o:return"Portal";case s:return"Profiler";case l:return"StrictMode";case h:return"Suspense";case p:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case d:return(e.displayName||"Context")+".Consumer";case u:return(e._context.displayName||"Context")+".Provider";case f:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case m:return w(e.type);case x:return w(e._render);case v:t=e._payload,e=e._init;try{return w(e(t))}catch(n){}}return null}var k=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,S={};function C(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var E=new Uint16Array(16),N=0;15>N;N++)E[N]=N+1;E[15]=0;var F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D=Object.prototype.hasOwnProperty,I={},_={};function L(e){return!!D.call(_,e)||!D.call(I,e)&&(F.test(e)?_[e]=!0:(I[e]=!0,!1))}function T(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){M[e]=new T(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];M[t]=new T(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){M[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){M[e]=new T(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){M[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){M[e]=new T(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){M[e]=new T(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){M[e]=new T(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){M[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)}));var P=/[\-:]([a-z])/g;function z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(P,z);M[t]=new T(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(P,z);M[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(P,z);M[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){M[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)})),M.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){M[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)}));var A=/["'&<>]/;function R(e){if("boolean"===typeof e||"number"===typeof e)return""+e;e=""+e;var t=A.exec(e);if(t){var n,r="",a=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}function V(e,t){var n,r=M.hasOwnProperty(e)?M[e]:null;return(n="style"!==e)&&(n=null!==r?0===r.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),n||function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,r,!1)?"":null!==r?(e=r.attributeName,3===(n=r.type)||4===n&&!0===t?e+'=""':(r.sanitizeURL&&(t=""+t),e+'="'+R(t)+'"')):L(e)?e+'="'+R(t)+'"':""}var W="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},U=null,q=null,B=null,H=!1,$=!1,K=null,Z=0;function G(){if(null===U)throw Error(i(321));return U}function Y(){if(0<Z)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function J(){return null===B?null===q?(H=!1,q=B=Y()):(H=!0,B=q):null===B.next?(H=!1,B=B.next=Y()):(H=!0,B=B.next),B}function Q(e,t,n,r){for(;$;)$=!1,Z+=1,B=null,n=e(t,r);return X(),n}function X(){U=null,$=!1,q=null,Z=0,B=K=null}function ee(e,t){return"function"===typeof t?t(e):t}function te(e,t,n){if(U=G(),B=J(),H){var r=B.queue;if(t=r.dispatch,null!==K&&void 0!==(n=K.get(r))){K.delete(r),r=B.memoizedState;do{r=e(r,n.action),n=n.next}while(null!==n);return B.memoizedState=r,[r,t]}return[B.memoizedState,t]}return e=e===ee?"function"===typeof t?t():t:void 0!==n?n(t):t,B.memoizedState=e,e=(e=B.queue={last:null,dispatch:null}).dispatch=re.bind(null,U,e),[B.memoizedState,e]}function ne(e,t){if(U=G(),t=void 0===t?null:t,null!==(B=J())){var n=B.memoizedState;if(null!==n&&null!==t){var r=n[1];e:if(null===r)r=!1;else{for(var a=0;a<r.length&&a<t.length;a++)if(!W(t[a],r[a])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),B.memoizedState=[e,t],e}function re(e,t,n){if(!(25>Z))throw Error(i(301));if(e===U)if($=!0,e={action:n,next:null},null===K&&(K=new Map),void 0===(n=K.get(t)))K.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}function ae(){}var ie=null,oe={readContext:function(e){var t=ie.threadID;return C(e,t),e[t]},useContext:function(e){G();var t=ie.threadID;return C(e,t),e[t]},useMemo:ne,useReducer:te,useRef:function(e){U=G();var t=(B=J()).memoizedState;return null===t?(e={current:e},B.memoizedState=e):t},useState:function(e){return te(ee,e)},useLayoutEffect:function(){},useCallback:function(e,t){return ne((function(){return e}),t)},useImperativeHandle:ae,useEffect:ae,useDebugValue:ae,useDeferredValue:function(e){return G(),e},useTransition:function(){return G(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(ie.identifierPrefix||"")+"R:"+(ie.uniqueID++).toString(36)},useMutableSource:function(e,t){return G(),t(e._source)}},ce="http://www.w3.org/1999/xhtml";function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var se={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ue=r({menuitem:!0},se),de={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];Object.keys(de).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),de[t]=de[e]}))}));var he=/([A-Z])/g,pe=/^ms-/,me=a.Children.toArray,ve=k.ReactCurrentDispatcher,xe={listing:!0,pre:!0,textarea:!0},be=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ye={},je={};var ge=Object.prototype.hasOwnProperty,Oe={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function we(e,t){if(void 0===e)throw Error(i(152,w(t)||"Component"))}function ke(e,t,n){function o(a,o){var c=o.prototype&&o.prototype.isReactComponent,l=function(e,t,n,r){if(r&&"object"===typeof(r=e.contextType)&&null!==r)return C(r,n),r[n];if(e=e.contextTypes){for(var a in n={},e)n[a]=t[a];t=n}else t=S;return t}(o,t,n,c),s=[],u=!1,d={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===s)return null},enqueueReplaceState:function(e,t){u=!0,s=[t]},enqueueSetState:function(e,t){if(null===s)return null;s.push(t)}};if(c){if(c=new o(a.props,l,d),"function"===typeof o.getDerivedStateFromProps){var f=o.getDerivedStateFromProps.call(null,a.props,c.state);null!=f&&(c.state=r({},c.state,f))}}else if(U={},c=o(a.props,l,d),null==(c=Q(o,a.props,c,l))||null==c.render)return void we(e=c,o);if(c.props=a.props,c.context=l,c.updater=d,void 0===(d=c.state)&&(c.state=d=null),"function"===typeof c.UNSAFE_componentWillMount||"function"===typeof c.componentWillMount)if("function"===typeof c.componentWillMount&&"function"!==typeof o.getDerivedStateFromProps&&c.componentWillMount(),"function"===typeof c.UNSAFE_componentWillMount&&"function"!==typeof o.getDerivedStateFromProps&&c.UNSAFE_componentWillMount(),s.length){d=s;var h=u;if(s=null,u=!1,h&&1===d.length)c.state=d[0];else{f=h?d[0]:c.state;var p=!0;for(h=h?1:0;h<d.length;h++){var m=d[h];null!=(m="function"===typeof m?m.call(c,f,a.props,l):m)&&(p?(p=!1,f=r({},f,m)):r(f,m))}c.state=f}}else s=null;if(we(e=c.render(),o),"function"===typeof c.getChildContext&&"object"===typeof(a=o.childContextTypes)){var v=c.getChildContext();for(var x in v)if(!(x in a))throw Error(i(108,w(o)||"Unknown",x))}v&&(t=r({},t,v))}for(;a.isValidElement(e);){var c=e,l=c.type;if("function"!==typeof l)break;o(c,l)}return{child:e,context:t}}var Se=function(){function e(e,t,n){a.isValidElement(e)?e.type!==c?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:me(e)):e=me(e),e={type:null,domNamespace:ce,children:e,childIndex:0,context:S,footer:""};var r=E[0];if(0===r){var o=E,l=2*(r=o.length);if(!(65536>=l))throw Error(i(304));var s=new Uint16Array(l);for(s.set(o),(E=s)[0]=r+1,o=r;o<l-1;o++)E[o]=o+1;E[l-1]=0}else E[0]=E[r];this.threadID=r,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=n&&n.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;E[e]=E[0],E[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID;C(n,r);var a=n[r];this.contextStack[t]=n,this.contextValueStack[t]=a,n[r]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=ie;ie=this;var n=ve.current;ve.current=oe;try{for(var r=[""],a=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var o=this.threadID;E[o]=E[0],E[0]=o;break}var c=this.stack[this.stack.length-1];if(a||c.childIndex>=c.children.length){var l=c.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===c.type)this.currentSelectValue=null;else if(null!=c.type&&null!=c.type.type&&c.type.type.$$typeof===u)this.popProvider(c.type);else if(c.type===h){this.suspenseDepth--;var s=r.pop();if(a){a=!1;var d=c.fallbackFrame;if(!d)throw Error(i(303));this.stack.push(d),r[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}r[this.suspenseDepth]+=s}r[this.suspenseDepth]+=l}else{var f=c.children[c.childIndex++],p="";try{p+=this.render(f,c.context,c.domNamespace)}catch(m){if(null!=m&&"function"===typeof m.then)throw Error(i(294));throw m}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=p}}return r[0]}finally{ve.current=n,ie=t,X()}},t.render=function(e,t,n){if("string"===typeof e||"number"===typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?R(n):this.previousWasTextNode?"\x3c!-- --\x3e"+R(n):(this.previousWasTextNode=!0,R(n));if(e=(t=ke(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((n=e.$$typeof)===o)throw Error(i(257));throw Error(i(258,n.toString()))}return e=me(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}var x=e.type;if("string"===typeof x)return this.renderDOM(e,t,n);switch(x){case g:case j:case l:case s:case p:case c:return e=me(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case h:throw Error(i(294));case y:throw Error(i(343))}if("object"===typeof x&&null!==x)switch(x.$$typeof){case f:U={};var O=x.render(e.props,e.ref);return O=Q(x.render,e.props,O,e.ref),O=me(O),this.stack.push({type:null,domNamespace:n,children:O,childIndex:0,context:t,footer:""}),"";case m:return e=[a.createElement(x.type,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case u:return n={type:e,domNamespace:n,children:x=me(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case d:x=e.type,O=e.props;var w=this.threadID;return C(x,w),x=me(O.children(x[w])),this.stack.push({type:e,domNamespace:n,children:x,childIndex:0,context:t,footer:""}),"";case b:throw Error(i(338));case v:return x=(O=(x=e.type)._init)(x._payload),e=[a.createElement(x,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}throw Error(i(130,null==x?x:typeof x,""))},t.renderDOM=function(e,t,n){var o=e.type.toLowerCase();if(n===ce&&le(o),!ye.hasOwnProperty(o)){if(!be.test(o))throw Error(i(65,o));ye[o]=!0}var c=e.props;if("input"===o)c=r({type:void 0},c,{defaultChecked:void 0,defaultValue:void 0,value:null!=c.value?c.value:c.defaultValue,checked:null!=c.checked?c.checked:c.defaultChecked});else if("textarea"===o){var l=c.value;if(null==l){l=c.defaultValue;var s=c.children;if(null!=s){if(null!=l)throw Error(i(92));if(Array.isArray(s)){if(!(1>=s.length))throw Error(i(93));s=s[0]}l=""+s}null==l&&(l="")}c=r({},c,{value:void 0,children:""+l})}else if("select"===o)this.currentSelectValue=null!=c.value?c.value:c.defaultValue,c=r({},c,{value:void 0});else if("option"===o){s=this.currentSelectValue;var u=function(e){if(void 0===e||null===e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(c.children);if(null!=s){var d=null!=c.value?c.value+"":u;if(l=!1,Array.isArray(s)){for(var f=0;f<s.length;f++)if(""+s[f]===d){l=!0;break}}else l=""+s===d;c=r({selected:void 0,children:void 0},c,{selected:l,children:u})}}if(l=c){if(ue[o]&&(null!=l.children||null!=l.dangerouslySetInnerHTML))throw Error(i(137,o));if(null!=l.dangerouslySetInnerHTML){if(null!=l.children)throw Error(i(60));if("object"!==typeof l.dangerouslySetInnerHTML||!("__html"in l.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=l.style&&"object"!==typeof l.style)throw Error(i(62))}l=c,s=this.makeStaticMarkup,u=1===this.stack.length,d="<"+e.type;e:if(-1===o.indexOf("-"))f="string"===typeof l.is;else switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":f=!1;break e;default:f=!0}for(g in l)if(ge.call(l,g)){var h=l[g];if(null!=h){if("style"===g){var p=void 0,m="",v="";for(p in h)if(h.hasOwnProperty(p)){var x=0===p.indexOf("--"),b=h[p];if(null!=b){if(x)var y=p;else if(y=p,je.hasOwnProperty(y))y=je[y];else{var j=y.replace(he,"-$1").toLowerCase().replace(pe,"-ms-");y=je[y]=j}m+=v+y+":",v=p,m+=x=null==b||"boolean"===typeof b||""===b?"":x||"number"!==typeof b||0===b||de.hasOwnProperty(v)&&de[v]?(""+b).trim():b+"px",v=";"}}h=m||null}p=null,f?Oe.hasOwnProperty(g)||(p=L(p=g)&&null!=h?p+'="'+R(h)+'"':""):p=V(g,h),p&&(d+=" "+p)}}s||u&&(d+=' data-reactroot=""');var g=d;l="",se.hasOwnProperty(o)?g+="/>":(g+=">",l="</"+e.type+">");e:{if(null!=(s=c.dangerouslySetInnerHTML)){if(null!=s.__html){s=s.__html;break e}}else if("string"===typeof(s=c.children)||"number"===typeof s){s=R(s);break e}s=null}return null!=s?(c=[],xe.hasOwnProperty(o)&&"\n"===s.charAt(0)&&(g+="\n"),g+=s):c=me(c.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?le(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:o,children:c,childIndex:0,context:t,footer:l}),this.previousWasTextNode=!1,g},e}();t.renderToNodeStream=function(){throw Error(i(207))},t.renderToStaticMarkup=function(e,t){e=new Se(e,!0,t);try{return e.read(1/0)}finally{e.destroy()}},t.renderToStaticNodeStream=function(){throw Error(i(208))},t.renderToString=function(e,t){e=new Se(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}},t.version="17.0.2"},836:function(e,t,n){"use strict";var r,a=n(48),i=n(30),o=n(828),c=n(47),l=n(9),s=c.a.div(r||(r=Object(a.a)(["\n&.custom-tooltip {\n  padding: 0 0 0 10px;\n  color: #E0ECFF;\n  z-index: 2;\n  .tip-title {\n    font-size: 16px;\n    color: #E0ECFF;\n  }\n  .value {\n    font-size: 32px;\n    font-weight : 700;\n    font-family : Barlow;\n  }\n  .date {\n    margin-top: 4px;\n    margin-left: 4px;\n    font-size: 14px;\n    height: 14px;\n  }\n}\n"])));t.a=function(e){var t=e.title,n=e.active,r=e.payload,a=(e.label,e.lastItem);return n&&r&&r.length?Object(l.jsxs)(s,{className:"custom-tooltip",children:[Object(l.jsx)("div",{className:"tip-title",children:t}),Object(l.jsx)("div",{className:"value",children:Object(i.b)(r[0].payload.value)}),Object(l.jsx)("div",{className:"date",children:"".concat(Object(o.a)(new Date(1e3*r[0].payload.time),"yyyy-mm-dd"),"(UTC)")})]}):t&&a.value?Object(l.jsxs)(s,{className:"custom-tooltip",children:[Object(l.jsx)("div",{className:"tip-title",children:t}),Object(l.jsx)("div",{className:"value",children:Object(i.b)(a.value)}),Object(l.jsx)("div",{className:"date",children:"".concat(Object(o.a)(new Date(1e3*a.timestamp),"yyyy-mm-dd"),"(UTC)")})]}):null}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(0),a=n.n(r),i=n(2),o=n(5),c=n(10),l=n(796),s=n.n(l),u=n(1198),d=n(1199),f=n(1200),h=n(966),p=n(967),m=n(1189),v=n(1190),x=n(828),b=n(836),y=n(30),j=(n(208),n(798),n(9));function g(e){var t=e.url,n=e.title,r=Object(c.useState)(null),l=Object(o.a)(r,2),g=l[0],O=l[1],w=Object(c.useState)({}),k=Object(o.a)(w,2),S=k[0],C=k[1],E=Object(c.useState)({}),N=Object(o.a)(E,2),F=N[0],D=N[1],I=Object(c.useState)({}),_=Object(o.a)(I,2),L=_[0],T=_[1],M=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get(t);case 2:n=e.sent,r=[],200===n.status&&Array.isArray(n.data.data)&&(r=n.data.data.sort((function(e,t){return e.timestamp>t.timestamp?1:e.timestamp<t.timestamp?-1:0}))).length>0&&(i=n.data.last_24h?n.data.last_24h:r[r.length-1].value,C({timestamp:r[r.length-1].timestamp,value:i})),O(r.map((function(e){return{time:e.timestamp,value:Number(e.value)}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=document.querySelector(".graph").getBoundingClientRect();D(e),M(t)}),[t]);var P=Object(y.t)()?3:2;return g?Object(j.jsx)(u.a,{height:300,children:Object(j.jsxs)(d.a,{height:300,width:F.width,data:g,children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorArea",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"5%",stopColor:"#3756CD",stopOpacity:.85}),Object(j.jsx)("stop",{offset:"95%",stopColor:"#3756CD",stopOpacity:0})]})}),Object(j.jsx)(f.a,{vertical:!1,strokeDasharray:"9",stroke:"#203B60"}),Object(j.jsx)(h.a,{dataKey:"time",axisLine:!1,tickLine:!1,tick:{fill:"#fff",fontSize:"14"},padding:{left:12,right:12},tickFormatter:function(e){return e&&"auto"!==e?Object(x.a)(new Date(1e3*e),"mm-dd"):""},interval:P}),Object(j.jsx)(p.a,{dataKey:"value",axisLine:!1,tickLine:!1,tickFormatter:y.d,tick:{fill:"#fff",fontSize:"14"},padding:{top:25}}),Object(j.jsx)(m.a,{position:{x:16,y:-106},cursor:{y:L.y-10,height:L.height+10,stroke:"#fff",fill:"#3756CD",strokeWidth:0,fillOpacity:.5},content:Object(j.jsx)(b.a,{title:n,lastItem:S})}),Object(j.jsx)(v.a,{type:"monotone",dataKey:"value",fill:"#3756CD",radius:[10,10,0,0],fillOpacity:.9,onMouseOver:function(e){T(e)}})]})}):null}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(0),a=n.n(r),i=n(2),o=n(5),c=n(10),l=n(796),s=n.n(l),u=n(1198),d=n(1201),f=n(1200),h=n(966),p=n(967),m=n(1189),v=n(1175),x=n(828),b=n(836),y=n(30),j=n(9);function g(e){var t=e.url,n=e.title,r=Object(c.useState)(null),l=Object(o.a)(r,2),g=l[0],O=l[1],w=Object(c.useState)({}),k=Object(o.a)(w,2),S=k[0],C=k[1],E=Object(c.useState)({}),N=Object(o.a)(E,2),F=N[0],D=N[1],I=function(){var e=Object(i.a)(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get(t);case 2:n=e.sent,r=[],200===n.status&&Array.isArray(n.data.data)&&(r=n.data.data.sort((function(e,t){return e.timestamp>t.timestamp?1:e.timestamp<t.timestamp?-1:0}))).length>0&&C(r[r.length-1]),O(r.map((function(e){return{time:e.timestamp,value:Number(e.value)}})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=document.querySelector(".graph").getBoundingClientRect();D(e),I()}),[]),g?Object(j.jsx)(u.a,{height:300,children:Object(j.jsxs)(d.a,{width:F.width,data:g,children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"colorArea",x1:"0",y1:"1",x2:"0",y2:"0",children:[Object(j.jsx)("stop",{offset:"10%",stopColor:"#2772F0",stopOpacity:.1}),Object(j.jsx)("stop",{offset:"90%",stopColor:"#2772f0",stopOpacity:.3})]})}),Object(j.jsx)(f.a,{vertical:!1,strokeDasharray:"9",stroke:"#203B60"}),Object(j.jsx)(h.a,{dataKey:"time",axisLine:!1,tickLine:!1,tick:{fill:"#fff",fontSize:"14"},padding:{left:12,right:14},allowDataOverflow:!1,tickFormatter:function(e){return e&&"auto"!==e?Object(x.a)(new Date(1e3*e),"mm-dd"):""}}),Object(j.jsx)(p.a,{dataKey:"value",tickLine:!1,axisLine:!1,tickFormatter:y.d,tick:{fill:"#fff",fontSize:"14"},padding:{top:65}}),Object(j.jsx)(m.a,{position:{x:16,y:-106},cursor:!1,content:Object(j.jsx)(b.a,{title:n,lastItem:S})}),Object(j.jsx)(v.a,{type:"monotone",dataKey:"value",stroke:"#3756CD",fillOpacity:.5,strokeWidth:3,fill:"url(#colorArea)"})]})}):null}},898:function(e,t,n){},899:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(0),a=n.n(r),i=n(2),o=n(5),c=n(10),l=n(970),s=n(973),u=(n(968),n(969)),d=n.n(u),f=n(796),h=n.n(f),p=(n(900),n(37)),m=n(9);function v(e){var t=e.title,n=e.columns,r=e.initialData,s=void 0===r?[]:r,u=e.url,d=e.pagination,f=Object(c.useState)(s),p=Object(o.a)(f,2),v=p[0],b=p[1],y=Object(c.useState)(1),j=Object(o.a)(y,2),g=j[0],O=j[1],w=Object(c.useState)(),k=Object(o.a)(w,2),S=k[0],C=k[1],E=Object(c.useState)(10),N=Object(o.a)(E,2),F=N[0],D=(N[1],function(){var e=Object(i.a)(a.a.mark((function e(t,n){var r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,d&&(r="".concat(r,"&page=").concat(n,"&page_amount=").concat(F)),e.next=4,h.a.get(r);case 4:200===(i=e.sent).status&&Array.isArray(i.data.data)&&(C(i.data.count/F),i.data.count%F>0&&C(Math.floor(i.data.count/F)+1),b(i.data.data),O(n));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),I=function(e){D(u,e)};return Object(c.useEffect)((function(){u&&D(u,1)}),[u]),Object(m.jsxs)("div",{className:"table",children:[Object(m.jsx)("div",{className:"t-title",children:t}),Object(m.jsx)(l.a,{data:v,columns:n,footer:function(){return d&&Object(m.jsx)(x,{page:g,count:S,onPage:I})}})]})}function x(e){var t=e.page,n=e.count,r=e.onPage;return Object(m.jsx)("div",{className:"pagination",children:Object(m.jsx)(s.a,{onChange:r,current:t,total:n,prevIcon:function(){return Object(m.jsx)(p.a,{token:"arrow-left"})},nextIcon:function(){return Object(m.jsx)(p.a,{token:"arrow-right"})},locale:d.a})})}},900:function(e,t,n){},901:function(e,t,n){"use strict";var r,a=n(48),i=n(798),o=n(47),c=n(30),l=n(9),s=o.a.div(r||(r=Object(a.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 70px;\n  margin-right: 32px;\n  .filter{\n    justify-content: flex-end;\n    .g-button {\n      margin-left: 8px ;\n    }\n  }\n"])));t.a=function(e){var t=e.url,n=e.onChange,r=Object(c.t)()?64:96;return Object(l.jsx)(s,{children:Object(l.jsx)(i.a,{groups:["WEEKLY","MONTHLY"],selectedBorderColor:"rgba(205, 122, 55)",defaultValue:"MONTHLY",defaultBorderColor:"rgba(85, 119, 253, 0.1)",bgColor:"rgba(85, 119, 253, 0.1)",className:"filter",width:r,height:"32",onChange:function(e){var r=new URL(t),a=r.searchParams;a.has("cycle")&&a.delete("cycle"),a.append("cycle",e),n(r.toString())},outline:!0,outlineColor:"rgba(205, 122, 55, 0.5)"})})}}}]);
//# sourceMappingURL=12.16d59bda.chunk.js.map