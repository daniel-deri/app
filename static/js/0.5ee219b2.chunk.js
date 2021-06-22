(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[0],{619:function(t,e,r){"use strict";var n=r(7),o=r.n(n);function a(){}function i(){}i.resetWarningCache=a;var s=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){t.exports=function(){function t(t,e,r,n,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}()}));function u(){}function p(t){return!!(t||"").match(/\d/)}function l(t){return null===t||void 0===t}function f(t){return t.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function c(t,e){void 0===e&&(e=!0);var r="-"===t[0],n=r&&e,o=(t=t.replace("-","")).split(".");return{beforeDecimal:o[0],afterDecimal:o[1]||"",hasNagation:r,addNegation:n}}function h(t,e,r){for(var n="",o=r?"0":"",a=0;a<=e-1;a++)n+=t[a]||o;return n}function g(t,e){return Array(e+1).join(t)}function m(t){var e="-"===(t+="")[0]?"-":"";e&&(t=t.substring(1));var r=t.split(/[eE]/g),n=r[0],o=r[1];if(!(o=Number(o)))return e+n;var a=1+o,i=(n=n.replace(".","")).length;return a<0?n="0."+g("0",Math.abs(a))+n:a>=i?n+=g("0",a-i):n=(n.substring(0,a)||"0")+"."+n.substring(a),e+n}function d(t,e){if(t.value=t.value,null!==t){if(t.createTextRange){var r=t.createTextRange();return r.move("character",e),r.select(),!0}return t.selectionStart||0===t.selectionStart?(t.focus(),t.setSelectionRange(e,e),!0):(t.focus(),!1)}}function v(t,e,r){return Math.min(Math.max(t,e),r)}function y(t){return Math.max(t.selectionStart,t.selectionEnd)}var S={thousandSeparator:s.oneOfType([s.string,s.oneOf([!0])]),decimalSeparator:s.string,allowedDecimalSeparators:s.arrayOf(s.string),thousandsGroupStyle:s.oneOf(["thousand","lakh","wan"]),decimalScale:s.number,fixedDecimalScale:s.bool,displayType:s.oneOf(["input","text"]),prefix:s.string,suffix:s.string,format:s.oneOfType([s.string,s.func]),removeFormatting:s.func,mask:s.oneOfType([s.string,s.arrayOf(s.string)]),value:s.oneOfType([s.number,s.string]),defaultValue:s.oneOfType([s.number,s.string]),isNumericString:s.bool,customInput:s.elementType,allowNegative:s.bool,allowEmptyFormatting:s.bool,allowLeadingZeros:s.bool,onValueChange:s.func,onKeyDown:s.func,onMouseUp:s.func,onChange:s.func,onFocus:s.func,onBlur:s.func,type:s.oneOf(["text","tel","password"]),isAllowed:s.func,renderText:s.func,getInputRef:s.oneOfType([s.func,s.shape({current:s.any})])},x={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:u,onChange:u,onKeyDown:u,onMouseUp:u,onFocus:u,onBlur:u,isAllowed:function(){return!0}},b=function(t){function e(e){t.call(this,e);var r=e.defaultValue;this.validateProps();var n=this.formatValueProp(r);this.state={value:n,numAsString:this.removeFormatting(n),mounted:!1},this.selectionBeforeInput={selectionStart:0,selectionEnd:0},this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.componentDidMount=function(){this.setState({mounted:!0})},e.prototype.componentDidUpdate=function(t){this.updateValueIfRequired(t)},e.prototype.componentWillUnmount=function(){clearTimeout(this.focusTimeout)},e.prototype.updateValueIfRequired=function(t){var e=this,r=e.props,n=e.state,o=e.focusedElm,a=n.value,i=n.numAsString;if(void 0===i&&(i=""),t!==r){this.validateProps();var s=this.formatNumString(i),u=l(r.value)?s:this.formatValueProp(),p=this.removeFormatting(u),f=parseFloat(p),c=parseFloat(i);(isNaN(f)&&isNaN(c)||f===c)&&s===a&&(null!==o||u===a)||this.updateValue({formattedValue:u,numAsString:p,input:o})}},e.prototype.getFloatString=function(t){void 0===t&&(t="");var e=this.props.decimalScale,r=this.getSeparators().decimalSeparator,n=this.getNumberRegex(!0),o="-"===t[0];o&&(t=t.replace("-","")),r&&0===e&&(t=t.split(r)[0]);var a=(t=(t.match(n)||[]).join("").replace(r,".")).indexOf(".");return-1!==a&&(t=t.substring(0,a)+"."+t.substring(a+1,t.length).replace(new RegExp(f(r),"g"),"")),o&&(t="-"+t),t},e.prototype.getNumberRegex=function(t,e){var r=this.props,n=r.format,o=r.decimalScale,a=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!a||0===o||e||n?"":"|"+f(a)),t?"g":void 0)},e.prototype.getSeparators=function(){var t=this.props.decimalSeparator,e=this.props,r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}},e.prototype.getMaskAtIndex=function(t){var e=this.props.mask;return void 0===e&&(e=" "),"string"===typeof e?e:e[t]||" "},e.prototype.getValueObject=function(t,e){var r=parseFloat(e);return{formattedValue:t,value:e,floatValue:isNaN(r)?void 0:r}},e.prototype.validateProps=function(){var t=this.props.mask,e=this.getSeparators(),r=e.decimalSeparator,n=e.thousandSeparator;if(r===n)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: "+n+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: '+r+" (default value for decimalSeparator is .)\n       ");if(t&&("string"===t?t:t.toString()).match(/\d/g))throw new Error("\n          Mask "+t+" should not contain numeric character;\n        ")},e.prototype.setPatchedCaretPosition=function(t,e,r){d(t,e),setTimeout((function(){t.value===r&&d(t,e)}),0)},e.prototype.correctCaretPosition=function(t,e,r){var n=this.props,o=n.prefix,a=n.suffix,i=n.format;if(""===t)return 0;if(e=v(e,0,t.length),!i){var s="-"===t[0];return v(e,o.length+(s?1:0),t.length-a.length)}if("function"===typeof i)return e;if("#"===i[e]&&p(t[e]))return e;if("#"===i[e-1]&&p(t[e-1]))return e;var u=i.indexOf("#");e=v(e,u,i.lastIndexOf("#")+1);for(var l=i.substring(e,i.length).indexOf("#"),f=e,c=e+(-1===l?0:l);f>u&&("#"!==i[f]||!p(t[f]));)f-=1;return!p(t[c])||"left"===r&&e!==u||e-f<c-e?p(t[f])?f+1:f:c},e.prototype.getCaretPosition=function(t,e,r){var n,o,a=this.props.format,i=this.state.value,s=this.getNumberRegex(!0),u=(t.match(s)||[]).join(""),p=(e.match(s)||[]).join("");for(n=0,o=0;o<r;o++){var l=t[o]||"",f=e[n]||"";if((l.match(s)||l===f)&&("0"!==l||!f.match(s)||"0"===f||u.length===p.length)){for(;l!==e[n]&&n<e.length;)n++;n++}}return"string"!==typeof a||i||(n=e.length),n=this.correctCaretPosition(e,n)},e.prototype.removePrefixAndSuffix=function(t){var e=this.props,r=e.format,n=e.prefix,o=e.suffix;if(!r&&t){var a="-"===t[0];a&&(t=t.substring(1,t.length));var i=(t=n&&0===t.indexOf(n)?t.substring(n.length,t.length):t).lastIndexOf(o);t=o&&-1!==i&&i===t.length-o.length?t.substring(0,i):t,a&&(t="-"+t)}return t},e.prototype.removePatternFormatting=function(t){for(var e=this.props.format.split("#").filter((function(t){return""!==t})),r=0,n="",o=0,a=e.length;o<=a;o++){var i=e[o]||"",s=o===a?t.length:t.indexOf(i,r);if(-1===s){n=t;break}n+=t.substring(r,s),r=s+i.length}return(n.match(/\d/g)||[]).join("")},e.prototype.removeFormatting=function(t){var e=this.props,r=e.format,n=e.removeFormatting;return t?(r?t="string"===typeof r?this.removePatternFormatting(t):"function"===typeof n?n(t):(t.match(/\d/g)||[]).join(""):(t=this.removePrefixAndSuffix(t),t=this.getFloatString(t)),t):t},e.prototype.formatWithPattern=function(t){for(var e=this.props.format,r=0,n=e.split(""),o=0,a=e.length;o<a;o++)"#"===e[o]&&(n[o]=t[r]||this.getMaskAtIndex(r),r+=1);return n.join("")},e.prototype.formatAsNumber=function(t){var e=this.props,r=e.decimalScale,n=e.fixedDecimalScale,o=e.prefix,a=e.suffix,i=e.allowNegative,s=e.thousandsGroupStyle,u=this.getSeparators(),p=u.thousandSeparator,l=u.decimalSeparator,f=-1!==t.indexOf(".")||r&&n,g=c(t,i),m=g.beforeDecimal,d=g.afterDecimal,v=g.addNegation;return void 0!==r&&(d=h(d,r,n)),p&&(m=function(t,e,r){var n=function(t){switch(t){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),o=t.search(/[1-9]/);return o=-1===o?t.length:o,t.substring(0,o)+t.substring(o,t.length).replace(n,"$1"+e)}(m,p,s)),o&&(m=o+m),a&&(d+=a),v&&(m="-"+m),t=m+(f&&l||"")+d},e.prototype.formatNumString=function(t){void 0===t&&(t="");var e=this.props,r=e.format,n=e.allowEmptyFormatting,o=t;return o=""!==t||n?"-"!==t||r?"string"===typeof r?this.formatWithPattern(o):"function"===typeof r?r(o):this.formatAsNumber(o):"-":""},e.prototype.formatValueProp=function(t){var e=this.props,r=e.format,n=e.decimalScale,o=e.fixedDecimalScale,a=e.allowEmptyFormatting,i=this.props,s=i.value,u=i.isNumericString,p=!(s=l(s)?t:s)&&0!==s;return p&&a&&(s=""),p&&!a?"":("number"===typeof s&&(s=m(s),u=!0),"Infinity"===s&&u&&(s=""),u&&!r&&"number"===typeof n&&(s=function(t,e,r){if(-1!==["","-"].indexOf(t))return t;var n=-1!==t.indexOf(".")&&e,o=c(t),a=o.beforeDecimal,i=o.afterDecimal,s=o.hasNagation,u=parseFloat("0."+(i||"0")),p=(i.length<=e?m(u):u.toFixed(e)).split(".");return(s?"-":"")+a.split("").reverse().reduce((function(t,e,r){return t.length>r?(Number(t[0])+Number(e)).toString()+t.substring(1,t.length):e+t}),p[0])+(n?".":"")+h(p[1]||"",Math.min(e,i.length),r)}(s,n,o)),u?this.formatNumString(s):this.formatInput(s))},e.prototype.formatNegation=function(t){void 0===t&&(t="");var e=this.props.allowNegative,r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),o=r.test(t),a=n.test(t);return t=t.replace(/-/g,""),o&&!a&&e&&(t="-"+t),t},e.prototype.formatInput=function(t){return void 0===t&&(t=""),this.props.format||(t=this.removePrefixAndSuffix(t),t=this.formatNegation(t)),t=this.removeFormatting(t),this.formatNumString(t)},e.prototype.isCharacterAFormat=function(t,e){var r=this.props,n=r.format,o=r.prefix,a=r.suffix,i=r.decimalScale,s=r.fixedDecimalScale,u=this.getSeparators().decimalSeparator;return"string"===typeof n&&"#"!==n[t]||!(n||!(t<o.length||t>=e.length-a.length||i&&s&&e[t]===u))},e.prototype.checkIfFormatGotDeleted=function(t,e,r){for(var n=t;n<e;n++)if(this.isCharacterAFormat(n,r))return!0;return!1},e.prototype.correctInputValue=function(t,e,r){var n=this.props,o=n.format,a=n.allowNegative,i=n.prefix,s=n.suffix,u=n.decimalScale,p=this.getSeparators(),l=p.allowedDecimalSeparators,f=p.decimalSeparator,h=this.state.numAsString||"",g=this.selectionBeforeInput,m=g.selectionStart,d=g.selectionEnd,v=function(t,e){for(var r=0,n=0,o=t.length,a=e.length;t[r]===e[r]&&r<o;)r++;for(;t[o-1-n]===e[a-1-n]&&a-n>r&&o-n>r;)n++;return{start:r,end:o-n}}(e,r),y=v.start,S=v.end;if(!o&&y===S&&-1!==l.indexOf(r[m])){var x=0===u?"":f;return r.substr(0,m)+x+r.substr(m+1,r.length)}var b=o?0:i.length,w=e.length-(o?0:s.length);if(r.length>e.length||!r.length||y===S||0===m&&d===e.length||0===y&&S===e.length||m===b&&d===w)return r;if(this.checkIfFormatGotDeleted(y,S,e)&&(r=e),!o){var P=this.removeFormatting(r),O=c(P,a),N=O.beforeDecimal,F=O.afterDecimal,D=O.addNegation,C=t<r.indexOf(f)+1;if(P.length<h.length&&C&&""===N&&!parseFloat(F))return D?"-":""}return r},e.prototype.updateValue=function(t){var e=t.formattedValue,r=t.input,n=t.setCaretPosition;void 0===n&&(n=!0);var o=t.numAsString,a=t.caretPos,i=this.props.onValueChange,s=this.state.value;if(r)if(n){if(!a){var u=t.inputValue||r.value,p=y(r);r.value=e,a=this.getCaretPosition(u,e,p)}this.setPatchedCaretPosition(r,a,e)}else r.value=e;void 0===o&&(o=this.removeFormatting(e)),e!==s&&(this.setState({value:e,numAsString:o}),i(this.getValueObject(e,o)))},e.prototype.onChange=function(t){var e=t.target,r=e.value,n=this.state,o=this.props,a=o.isAllowed,i=n.value||"",s=y(e);r=this.correctInputValue(s,i,r);var u=this.formatInput(r)||"",p=this.removeFormatting(u),l=a(this.getValueObject(u,p));l||(u=i),this.updateValue({formattedValue:u,numAsString:p,inputValue:r,input:e}),l&&o.onChange(t)},e.prototype.onBlur=function(t){var e=this.props,r=this.state,n=e.format,o=e.onBlur,a=e.allowLeadingZeros,i=r.numAsString,s=r.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),!n){isNaN(parseFloat(i))&&(i=""),a||(i=function(t){if(!t)return t;var e="-"===t[0];e&&(t=t.substring(1,t.length));var r=t.split("."),n=r[0].replace(/^0+/,"")||"0",o=r[1]||"";return(e?"-":"")+n+(o?"."+o:"")}(i));var u=this.formatNumString(i);if(u!==s)return this.updateValue({formattedValue:u,numAsString:i,input:t.target,setCaretPosition:!1}),void o(t)}o(t)},e.prototype.onKeyDown=function(t){var e,r=t.target,n=t.key,o=r.selectionStart,a=r.selectionEnd,i=r.value;void 0===i&&(i="");var s=this.props,u=s.decimalScale,p=s.fixedDecimalScale,l=s.prefix,f=s.suffix,c=s.format,h=s.onKeyDown,g=void 0!==u&&p,m=this.getNumberRegex(!1,g),d=new RegExp("-"),v="string"===typeof c;if(this.selectionBeforeInput={selectionStart:o,selectionEnd:a},"ArrowLeft"===n||"Backspace"===n?e=o-1:"ArrowRight"===n?e=o+1:"Delete"===n&&(e=o),void 0!==e&&o===a){var y=e,S=v?c.indexOf("#"):l.length,x=v?c.lastIndexOf("#")+1:i.length-f.length;if("ArrowLeft"===n||"ArrowRight"===n){var b="ArrowLeft"===n?"left":"right";y=this.correctCaretPosition(i,e,b)}else if("Delete"!==n||m.test(i[e])||d.test(i[e])){if("Backspace"===n&&!m.test(i[e]))if(o<=S+1&&"-"===i[0]&&"undefined"===typeof c){var w=i.substring(1);this.updateValue({formattedValue:w,caretPos:y,input:r})}else if(!d.test(i[e])){for(;!m.test(i[y-1])&&y>S;)y--;y=this.correctCaretPosition(i,y,"left")}}else for(;!m.test(i[y])&&y<x;)y++;(y!==e||e<S||e>x)&&(t.preventDefault(),this.setPatchedCaretPosition(r,y,i)),t.isUnitTestRun&&this.setPatchedCaretPosition(r,y,i),h(t)}else h(t)},e.prototype.onMouseUp=function(t){var e=t.target,r=e.selectionStart,n=e.selectionEnd,o=e.value;if(void 0===o&&(o=""),r===n){var a=this.correctCaretPosition(o,r);a!==r&&this.setPatchedCaretPosition(e,a,o)}this.props.onMouseUp(t)},e.prototype.onFocus=function(t){var e=this;t.persist(),this.focusedElm=t.target,this.focusTimeout=setTimeout((function(){var r=t.target,n=r.selectionStart,o=r.selectionEnd,a=r.value;void 0===a&&(a="");var i=e.correctCaretPosition(a,n);i===n||0===n&&o===a.length||e.setPatchedCaretPosition(r,i,a),e.props.onFocus(t)}),0)},e.prototype.render=function(){var t=this.props,e=t.type,r=t.displayType,n=t.customInput,a=t.renderText,i=t.getInputRef,s=t.format,u=this.state,p=u.value,l=u.mounted,f=function(t,e){var r={};return Object.keys(t).forEach((function(n){e[n]||(r[n]=t[n])})),r}(this.props,S),c=l&&function(t){return t||!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}(s)?"numeric":void 0,h=Object.assign({inputMode:c},f,{type:e,value:p,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===r)return a?a(p,f)||null:o.a.createElement("span",Object.assign({},f,{ref:i}),p);if(n){var g=n;return o.a.createElement(g,Object.assign({},h,{ref:i}))}return o.a.createElement("input",Object.assign({},h,{ref:i}))},e}(o.a.Component);b.propTypes=S,b.defaultProps=x,e.a=b}}]);
//# sourceMappingURL=0.5ee219b2.chunk.js.map