(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[19],{718:function(e,t,n){},719:function(e,t,n){},720:function(e,t,n){},789:function(e,t,n){"use strict";n.r(t);var i=n(7),o=n(14),s=function(){return(s=Object.assign||function(e){for(var t,n=arguments,i=1,o=arguments.length;i<o;i++)for(var s in t=n[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function r(e,t){var n=s({},e);for(var i in t)"object"!=typeof e[i]||null===e[i]||Array.isArray(e[i])?void 0!==t[i]&&(n[i]=t[i]):n[i]=r(e[i],t[i]);return n}var a={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},c={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};var l=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=r(c,e),e.preset){var t=a[e.preset];t?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(t.disabled_features):this._options.disabled_features=t.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(t.enabled_features):this._options.enabled_features=t.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.headerReady=function(){var e=this;return this._innerWindowLoaded.then((function(){return e._innerWindow().headerReady()}))},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.getLanguage=function(){return this._options.locale},e.prototype.setSymbol=function(e,t,n){this._innerAPI().changeSymbol(e,t,n)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,n){this._innerAPI().saveChartToServer(e,t,n)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=r(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype.layoutName=function(){return this._innerAPI().layoutName()},e.prototype.changeTheme=function(e,t){this._innerWindow().changeTheme(e,t)},e.prototype.getTheme=function(){return this._innerWindow().getTheme()},e.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},e.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},e.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},e.prototype.drawOnAllCharts=function(e){this._innerAPI().drawOnAllCharts(e)},e.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},e.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},e.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},e.prototype.setIntervalLinkingEnabled=function(e){this._innerAPI().setIntervalLinkingEnabled(e)},e.prototype.setTimeFrame=function(e){this._innerAPI().setTimeFrame(e)},e.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},e.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},e.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},e.prototype.timeSync=function(){return this._innerAPI().timeSync()},e.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},e.prototype.clearUndoHistory=function(){return this._innerAPI().clearUndoHistory()},e.prototype.undo=function(){return this._innerAPI().undo()},e.prototype.redo=function(){return this._innerAPI().redo()},e.prototype.startFullscreen=function(){this._innerAPI().startFullscreen()},e.prototype.exitFullscreen=function(){this._innerAPI().exitFullscreen()},e.prototype.takeClientScreenshot=function(e){return this._innerAPI().takeClientScreenshot(e)},e.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},e.prototype._innerWindow=function(){return this._iFrame.contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),n=document.getElementById(this._options.container_id);if(null===n)throw new Error("There is no such element - #"+this._options.container_id);n.innerHTML=t,this._iFrame=n.querySelector("#"+this._id);var i=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(e){i.addEventListener("load",(function t(){i.removeEventListener("load",t,!1),e()}),!1)})),this._innerWindowLoaded.then((function(){e._innerWindow().widgetReady((function(){e._ready=!0;for(var t=0,n=e._readyHandlers;t<n.length;t++){var i=n[t];try{i.call(e)}catch(o){console.error(o)}}e._innerWindow().initializationFinished()}))}))},e.prototype._render=function(){var e=window;if(e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)e[this._id].chartContent={json:this._options.saved_data},this._options.saved_data_meta_info&&(e[this._id].chartContentExtendedData=this._options.saved_data_meta_info);else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var t=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.b555c6a4.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=function(){return"CL v18.043 (internal id b555c6a4 @ 2021-02-18T09:41:15.150Z)"};var d,u,h=n(137),p=n(53),b={},m=null,j=Object(h.io)("wss://oracle4.deri.finance",{transports:["websocket"],withCredentials:!0}),_=[],f=null;window.sub_index=0;function v(e){return Object(p.g)(e.name)}var g=function(e,t,n,i,o,s){var r,a=v(e);switch(a=a.toUpperCase(),d=o,i,u=s,!0){case"1"==t:r="min";break;case"5"==t:r="5min";break;case"15"==t:r="15min";break;case"30"==t:r="30min";break;case"60"==t:r="hour";break;case"1D"==t:r="day";break;case"1W"==t:r="week";break;default:r="min"}j.emit("un_get_kline",f),f={symbol:a,time_type:r,from:n,to:i},j.emit("get_kline",f)},y=function(e,t,n,i,o){var s,r=v(e);switch(!0){case"1"==t:s="min";break;case"5"==t:s="5min";break;case"15"==t:s="15min";break;case"30"==t:s="30min";break;case"60"==t:s="hour";break;case"1D"==t:s="day";break;case"1W"==t:s="week";break;default:s="min"}f={symbol:r,time_type:s,updated:!0},m=n},O=function(e){};j.on("connect",(function(e){f&&f.updated&&j.emit("get_kline_update",f),console.log("socket,connect")})),j.on("kline_update",(function(e){var t={},n=e.time;e.time_type===f.time_type&&e.symbol.toUpperCase()===f.symbol.toUpperCase()&&(t.time=n,t.low=Number(e.low),t.high=Number(e.high),t.open=Number(e.open),t.close=Number(e.close),t.volume=Number(e.volume),m&&m(t))})),j.on("kline_history",(function(e){var t=f.symbol;if(_=e.map((function(e){return t=e.symbol,{time:e.time,low:Number(e.low),high:Number(e.high),open:Number(e.open),close:Number(e.close),volume:Number(e.volume)}})),d){var n=_[_.length-1];b[f.symbol]={lastBar:n}}_.length;if(f.symbol.toUpperCase()===t.toUpperCase()){var i={noData:!(_.length>0)};u(_,i)}}));var w={supported_resolutions:["1","5","15","30","60","240","1D","5D","1W","1M"]},x={onReady:function(e){setTimeout((function(){return e(w)}),0)},bars:{},searchSymbols:function(e,t,n,i){},resolveSymbol:function(e,t,n){var i={name:e,pricescale:100,ticker:e,description:"",minmov:1,type:"crypto",has_intraday:!0,intraday_multipliers:["1","2","5","15","30","60","240","1D","7D","1W","1M"],has_weekly_and_monthly:!0,data_status:"streaming",has_no_volume:!0,pro_name:e,has_daily:!0,timezone:"UTC",session:"24x7"};setTimeout((function(){t(i)}),0)},getBars:function(e,t,n,i,o,s,r){n>0&&i>0&&g(e,t,n,i,r,o,s)},subscribeBars:function(e,t,n,i,o){y(e,t,n,i,o)},unsubscribeBars:function(e){O(e)},calculateHistoryDepth:function(e,t,n){},getMarks:function(e,t,n,i,o){},getTimeScaleMarks:function(e,t,n,i,o){},getServerTime:function(e){}},N=n(650),A=n.n(N),I=n(67),S=n(25),C="tv_chart_container";var M=Object(I.b)("intl","trading")(Object(I.c)((function(e){var t=e.symbol,n=e.lang,s=e.intl,r=e.version,a=Object(i.useState)(!0),c=Object(o.a)(a,2),d=c[0],u=c[1],h=Object(i.useState)("one"),p=Object(o.a)(h,2),b=p[0],m=p[1],j=Object(i.useState)(null),_=Object(o.a)(j,2),f=_[0],v=_[1],g=Object(i.useState)("1"),y=Object(o.a)(g,2),O=y[0],w=y[1],N=A()("btn",b),I=function(e,t){m(t),w(e),f.activeChart().setResolution(e,(function(){f.chart().refreshMarks()}))};return Object(i.useEffect)((function(){return t&&v(function(){var e={symbol:t,datafeed:x,interval:O,container_id:C,library_path:"/charting_library/",custom_css_url:"/style/tradingview-overide.css",locale:s.locale,disabled_features:["header_widget","timeframes_toolbar","go_to_date"],enabled_features:["show_logo_on_all_charts"],charts_storage_url:"https://saveload.tradingview.com",charts_storage_api_version:"1.14",client_id:"tradingview.com",user_id:"public_user_id",fullscreen:!1,autosize:!0,overrides:{"paneProperties.background":"#212327","paneProperties.vertGridProperties.color":"#212327","paneProperties.horzGridProperties.color":"#212327","mainSeriesProperties.candleStyle.upColor":"#53B987","mainSeriesProperties.candleStyle.downColor":"#EB4D5C","symbolWatermarkProperties.transparency":90,"mainSeriesProperties.candleStyle.wickUpColor":"#53B987","mainSeriesProperties.candleStyle.wickDownColor":"#EB4D5C","mainSeriesProperties.candleStyle.drawBorder":!0,"mainSeriesProperties.candleStyle.borderUpColor":"#53B987","mainSeriesProperties.candleStyle.borderDownColor":"#EB4D5C","scalesProperties.textColor":"#AAA"},toolbar_bg:"#212327",timezone:"Asia/Shanghai",session:"24x7"},n=new l(e);return document.querySelector("#tv_chart_container iframe").addEventListener("load",(function(e){setTimeout((function(){return u(!1)}),500)})),n}()),function(){null!==f&&f.remove()}}),[t,r.current]),Object(S.jsxs)("div",{id:"tradingview",children:[Object(S.jsxs)("div",{className:N,children:[Object(S.jsxs)("span",{className:"tab-btn one",onClick:function(){return I("1","one")},children:["1",n.min]}),Object(S.jsxs)("span",{className:"tab-btn five",onClick:function(){return I("5","five")},children:["5",n.min]}),Object(S.jsxs)("span",{className:"tab-btn fifteen",onClick:function(){return I("15","fifteen")},children:["15",n.min]}),Object(S.jsxs)("span",{className:"tab-btn thirty",onClick:function(){return I("30","thirty")},children:["30",n.min]}),Object(S.jsxs)("span",{className:"tab-btn sixty",onClick:function(){return I("60","sixty")},children:["1",n.hour]}),Object(S.jsxs)("span",{className:"tab-btn one-day",onClick:function(){return I("1D","one-day")},children:["1",n.day]}),Object(S.jsxs)("span",{className:"tab-btn one-week",onClick:function(){return I("1W","one-week")},children:["1",n.week]})]}),Object(S.jsx)("div",{className:"loading",style:{display:d?"block":"none"},children:Object(S.jsx)("div",{className:"spinner-border",role:"status",children:Object(S.jsx)("span",{className:"sr-only"})})}),Object(S.jsx)("div",{id:C})]})}))),k=n(651);var D=Object(I.b)("trading","version")(Object(I.c)((function(e){var t=e.version,n=e.trading,s=e.lang,r=Object(i.useState)("rise"),a=Object(o.a)(r,2),c=a[0],l=a[1],d=Object(i.useRef)();return Object(i.useEffect)((function(){return d.current&&(d.current>n.index?l("fall"):l("rise")),d.current=n.index,function(){}}),[n.index]),Object(S.jsxs)("div",{id:"trading-view",children:[Object(S.jsxs)("div",{className:"right-top",children:[Object(S.jsx)("div",{className:"symbol-basetoken-text",children:t.isV1||t.isV2Lite?"".concat(n.config?n.config.symbol:"BTCUSD"," / ").concat(n.config?n.config.bTokenSymbol:"","  (10X)"):"".concat(n.config?n.config.symbol:"BTCUSD"," (10X)")}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:s["index-price"]}),Object(S.jsx)("div",{className:c,children:Object(S.jsx)(k.a,{value:n.index,decimalScale:2})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsxs)("div",{className:"trade-dashboard-title",children:[Object(S.jsx)("span",{children:s["funding-rate-annual"]}),"  "]}),Object(S.jsx)("div",{className:"trade-dashboard-value",children:Object(S.jsx)("span",{className:"funding-per",title:n.fundingRateTip,children:Object(S.jsx)(k.a,{value:n.fundingRate.fundingRate0,decimalScale:4,suffix:"%"})})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:s["total-net-position"]}),Object(S.jsx)("div",{className:"trade-dashboard-value",children:Object(S.jsx)(k.a,{value:n.fundingRate.tradersNetVolume})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:s["pool-total-liquidity"]}),Object(S.jsxs)("div",{className:"trade-dashboard-value",children:[" ",Object(S.jsx)(k.a,{allowLeadingZeros:!0,value:n.fundingRate.liquidity,decimalScale:2})," ",n.config&&n.config.bTokenSymbol]})]})]}),Object(S.jsx)("div",{className:"tradingview",children:Object(S.jsx)(M,{symbol:n.config&&n.config.symbol,lang:s,version:t})})]})}))),P=n(48),R=n(0),U=n.n(R),T=n(1),L=n(23),z=n(188),W=n(659),Z=n(663),G=n(665),F=n(666),E=n(685),B=n(664),Y=n(686),Q=Object(z.a)(W.a),H=Object(z.a)(Z.a),J=Object(z.a)(B.a);var V=Object(I.b)("wallet","trading","version")(Object(I.c)((function(e){var t=e.wallet,n=e.trading,s=e.version,r=e.lang,a=Object(i.useState)("LONG"),c=Object(o.a)(a,2),l=c[0],d=c[1],u=Object(i.useState)(!1),h=Object(o.a)(u,2),b=h[0],m=h[1],j=Object(i.useState)(!1),_=Object(o.a)(j,2),f=_[0],v=_[1],g=Object(i.useState)(!1),y=Object(o.a)(g,2),O=y[0],w=y[1],x=Object(i.useState)(!1),N=Object(o.a)(x,2),A=N[0],I=N[1],C=Object(i.useState)(""),M=Object(o.a)(C,2),D=M[0],R=M[1],z=Object(i.useState)(""),W=Object(o.a)(z,2),Z=W[0],B=W[1],V=Object(i.useState)(""),X=Object(o.a)(V,2),q=X[0],K=X[1],$=function(){te()},ee=$,te=function(){ne(),n.refresh()},ne=function(){var e=Object(T.a)(U.a.mark((function e(){var i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!n.config){e.next=5;break}return e.next=3,Object(L.getWalletBalance)(t.detail.chainId,n.config.pool,t.detail.account,n.config.bTokenId).catch((function(e){return console.log(e)}));case 3:(i=e.sent)&&R(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(T.a)(U.a.mark((function e(){var i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,Object(L.closePosition)(t.detail.chainId,n.config.pool,t.detail.account,n.config.symbolId).finally((function(){return m(!1)}));case 3:(i=e.sent).success?te():"string"===typeof i.error?alert(i.error||r["close-position-failed"]):"object"===Object(P.a)(i.error)?alert(i.error.errorMessage||r["close-position-failed"]):alert(r["close-position-failed"]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n.position){var e=n.position,t=+e.volume>0?"LONG":e.volume&&!Object(p.c)(e.volume,0)&&e.volume?"SHORT":"--";d(t),B(Object(L.bg)(e.margin).plus(e.unrealizedPnl).toString()),K(Object(L.bg)(e.margin).plus(e.unrealizedPnl).minus(e.marginHeld).toString())}return function(){}}),[n.position.volume,n.position.margin,n.position.unrealizedPnl]),Object(i.useEffect)((function(){return ne(),function(){}}),[t.detail.account,n.config,n.amount.dynBalance]),Object(S.jsxs)("div",{className:"position-box",children:[Object(S.jsxs)("div",{className:"p-box theader",children:[Object(S.jsx)("div",{className:"position",children:r.position}),Object(S.jsx)("div",{className:"ave-entry-price",children:r["average-entry-price"]}),Object(S.jsx)("div",{children:r.direction}),Object(S.jsx)("div",{className:"dyn-eff-bal",children:s.isV1||s.isV2Lite?Object(S.jsxs)(S.Fragment,{children:[r["balance-in-contract"]," ",Object(S.jsx)("br",{})," (",r["dynamic-balance"],")"]}):r["dynamic-effective-balance"]}),Object(S.jsx)("div",{className:"margin",children:r.margin}),Object(S.jsx)("div",{className:"unrealized-pnl",children:r["unrealized-pnl"]}),Object(S.jsx)("div",{children:Object(S.jsx)("span",{className:"funding-fee",title:r["funding-fee-tip"],children:r["funding-fee"]})}),Object(S.jsx)("div",{children:r["liquidation-price"]})]}),Object(S.jsxs)("div",{className:"p-box tbody",children:[Object(S.jsxs)("div",{className:"position",children:[n.position.volume,Object(S.jsxs)("span",{className:"close-position",children:[!b&&Object(S.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0wMlQxNTozODoxMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlkYTVmMGQtZjBkZC0xYTRiLTlhNWUtZTBlNDMwZTI5OGI3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGU2NWEzMTAtM2M4YS1jMDQ3LWIyMDAtZjZhYTZkMDlkNWRlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDUwZmRhMGUtNTUyNC0wNjQxLTg1ZmYtYWUyNjAyODUxMzgzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTBmZGEwZS01NTI0LTA2NDEtODVmZi1hZTI2MDI4NTEzODMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMDJUMTU6Mzg6MTMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5ZGE1ZjBkLWYwZGQtMWE0Yi05YTVlLWUwZTQzMGUyOThiNyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wNlQyMDowNToxMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SuXJrAAACqElEQVRYhb3XTWjTYBgH8P+bJq+0TrbatZui4EG3irCNQXVM0CqeBA+CwvAk6EVEQfy4eRFPfiGK4EUGeqgX8aSC4vAiBYnSdkNHFUFh6qGvbWFKmzSJF1Mzl3RvPpr/8X2ekB8P7wMJkWUZudx3cWpqnVJk9MZYv3IOIedTXXzb1PB129rWQQCIIJsVj2Y3qQZABmLaZJHRNYMx7XmYoM29rfFUVE/PMWk4FdMfEVmWDWuTbgAlRq+HMTETZD2bZdJ9ocSke1aVQICRhHK2UKHXwgYpOjEaeuSVMJJQj8+GDLMDNTRiFNmqY5lkY1oAgDBhziB6JJNsTAOAYBbCgHUC7Ug1H7bfa23oJowXtAzVLdjHuviGF2SLChpWron5Lb2tDC/IERUUrFwT80N9rQk3oI4oE1Zi9K4XmFfQiigAGE0oJ4qM3nYD8wPiQgHAWEI5zQvzC+JG8cKCAAEAkWWZtxcAUGD01mhCOUUsZ7oBLPyKfNvYo633CwJcTMqM08SCAnlCOcGCAnlGmbCFRfGHXe1zXXzmFeQLVa6J+Q09rUG72nBc3f+uQi+FirLbMmsiBBhNKBe9wlyjHNZe/1CVXlrvmB+YK5QTqFQRD22Nq/v+v/xeYdyoTqDtA+pjwH4rvcC4UDwgM0HAVkS5AQUF64jyAgoC5ogq16TXXkF+Ybao+ao0M9SnTvoBLYFVpJu6RbYSbBlqvirNpOPqniBAbVi/eqbE6FVe2BJUN0D/YMoFXlgb1U2QW5gQFsgNLLLr8MnQQGYGY9qLIqOrU1FtJ/n7CSsQIBXVdhcrFALI0gd+t7oLMmM3McMADBBNSPepe99XpSdtEJMOdBtkB1N1ggKj58eTzcvtH4e5n9KDRZXkJgaUp2GArClU6BVVF75kUo07APAH3WicsIPb8YcAAAAASUVORK5CYII=",onClick:ie}),Object(S.jsx)("span",{className:"spinner spinner-border spinner-border-sm",style:{display:b?"block":"none",marginLeft:"8px"}})]})]}),Object(S.jsx)("div",{className:"ave-entry-price",children:Object(S.jsx)(k.a,{value:n.position.averageEntryPrice,decimalScale:2})}),Object(S.jsx)("div",{className:l,children:r[l.toLowerCase()]||l}),Object(S.jsxs)("div",{className:"dyn-eff-bal",children:[Object(S.jsx)(k.a,{allowZero:!0,value:Z,decimalScale:2}),s.isV1||s.isV2Lite?Object(S.jsxs)("span",{children:[Object(S.jsx)("span",{className:"open-add",id:"openAddMargin",onClick:function(){return v(!0)},children:Object(S.jsx)("img",{src:G.a,alt:"add margin"})}),Object(S.jsx)("span",{className:"open-remove",onClick:function(){return w(!0)},children:Object(S.jsx)("img",{src:F.a,alt:"add margin"})})]}):Object(S.jsxs)("span",{className:"balance-list-btn",onClick:function(){return I(!0)},children:[Object(S.jsx)("img",{src:E.a,alt:"Remove margin"})," ",r.detail]})]}),Object(S.jsx)("div",{className:"margin",children:Object(S.jsx)(k.a,{value:n.position.marginHeld,decimalScale:2})}),Object(S.jsx)("div",{children:Object(S.jsxs)("span",{className:"pnl-list unrealized-pnl",children:[Object(S.jsx)(k.a,{value:n.position.unrealizedPnl,decimalScale:8}),(s.isV2||s.isV2Lite)&&n.position.unrealizedPnl&&Object(S.jsx)("img",{src:Y.a,alt:"unrealizePnl"}),(s.isV2||s.isV2Lite)&&Object(S.jsx)("div",{className:"pnl-box",children:n.position.unrealizedPnlList&&n.position.unrealizedPnlList.map((function(e,t){return Object(S.jsxs)("div",{className:"unrealizePnl-item",children:[Object(S.jsx)("span",{children:e[0]}),Object(S.jsx)("span",{children:Object(S.jsx)(k.a,{value:e[1],decimalScale:8})})]},t)}))})]})}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:-n.position.fundingFee,decimalScale:8})}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:n.position.liquidationPrice,decimalScale:2})})]}),Object(S.jsx)("div",{className:"p-box tbody"}),Object(S.jsx)(Q,{wallet:t,modalIsOpen:f,onClose:function(){return v(!1)},spec:n.config,afterDeposit:ee,balance:D,className:"trading-dialog",lang:r}),Object(S.jsx)(H,{wallet:t,modalIsOpen:O,onClose:function(){return w(!1)},spec:n.config,afterWithdraw:$,availableBalance:q,position:n.position,className:"trading-dialog",lang:r}),Object(S.jsx)(J,{wallet:t,modalIsOpen:A,onClose:function(){return I(!1)},spec:n.config,afterDepositAndWithdraw:function(){te()},position:n.position,overlay:{background:"#1b1c22",top:80},className:"balance-list-dialog",lang:r})]})}))),X=n(653),q=n.n(X),K=(n(652),n(143)),$=n(660),ee=K[L.DeriEnv.get()].chainInfo;function te(e){var t=e.wallet,n=e.his,s=Object(i.useState)(!1),r=Object(o.a)(s,2),a=r[0],c=r[1],l=function(){c(!0)},d=function(){c(!1)},u=A()("view",{hover:a});return Object(S.jsxs)("span",{className:u,onMouseOut:d,children:[Object(S.jsx)("span",{className:"view-space",onMouseOver:l,children:Object(S.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"".concat(ee[t.detail.chainId].viewUrl,"tx/").concat(n.transactionHash),children:["View at ",ee[t.detail.chainId].viewUrl]})}),Object(S.jsx)("span",{className:"right-arrow",onMouseOver:l,children:Object(S.jsx)("img",{alt:"",src:$.a})}),Object(S.jsx)("span",{className:"view-arrow",onMouseOver:l,onMouseOut:d,children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(ee[t.detail.chainId].viewUrl,"tx/").concat(n.transactionHash),children:Object(S.jsx)("img",{rel:"noreferrer",alt:"",src:"data:image/svg+xml;base64,DQo8c3ZnIGZpbGw9Im5vbmUiIGhlaWdodD0iMTAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNOC42NzYuNjQyYS42NS42NSAwIDAwLS4wNzIuMDA2SDQuNzkzYS42NS42NSAwIDAwLS41Ny45NzUuNjUuNjUgMCAwMC41Ny4zMjJINy4xMkwuNDM4IDguNjE0YS42NDcuNjQ3IDAgMDAuMjg2IDEuMDk2LjY1LjY1IDAgMDAuNjMyLS4xNzlMOC4wNCAyLjg2MXYyLjMyNGEuNjQ4LjY0OCAwIDAwLjk3Ny41Ny42NDguNjQ4IDAgMDAuMzIyLS41N1YxLjM4YS42NDcuNjQ3IDAgMDAtLjY2Mi0uNzM3eiIgZmlsbD0iI0FBQUFBQSIvPg0KPC9zdmc+DQoNCg=="})})})]})}var ne=Object(I.b)("wallet","trading")(Object(I.c)((function(e){var t=e.wallet,n=e.trading,s=e.lang,r=Object(i.useState)([]),a=Object(o.a)(r,2),c=a[0],l=a[1];function d(){return(d=Object(T.a)(U.a.mark((function e(){var i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isConnected()&&n.config&&(i=n.history.map((function(e){return e.directionText=s["long-buy"],"SHORT"===e.direction?e.directionText=s["short-sell"]:"liquidation"===e.direction.toLowerCase()&&(e.directionText=s.liquidation),e})),l(i));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){return function(){d.apply(this,arguments)}(),function(){}}),[t.detail.account,n.config,n.history]),Object(S.jsxs)("div",{className:"history-box",children:[Object(S.jsxs)("div",{className:"p-box theader",children:[Object(S.jsx)("div",{className:"td",children:s.time}),Object(S.jsx)("div",{children:s.direction}),Object(S.jsx)("div",{children:s["base-token"]}),Object(S.jsx)("div",{children:s.price}),Object(S.jsx)("div",{children:s.volume}),Object(S.jsx)("div",{children:s.notional}),Object(S.jsx)("div",{children:s["transaction-fee"]})]}),c.map((function(e,n){return Object(S.jsxs)("div",{className:"p-box tbody",children:[Object(S.jsx)("div",{className:"td",children:q.a.asString("yyyy-MM-dd hh:mm:ss",new Date(parseInt(e.time)))}),Object(S.jsxs)("div",{className:e.direction,children:[e.directionText,Object(S.jsx)(te,{wallet:t,his:e})]}),Object(S.jsx)("div",{children:e.baseToken||"--"}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:e.price,decimalScale:2})}),Object(S.jsx)("div",{children:e.volume}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:e.notional,decimalScale:4})}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:e.transactionFee,decimalScale:4})})]},n)})),0==c.length?Object(S.jsx)("div",{className:"no-data",children:s["no-data"]}):""]})})));var ie=function(e){var t=e.lang,n=Object(i.useState)("position"),s=Object(o.a)(n,2),r=s[0],a=s[1],c=function(e){a(e)},l=A()("position-info",r);return Object(S.jsxs)("div",{className:l,children:[Object(S.jsxs)("div",{className:"position-header",children:[Object(S.jsxs)("div",{className:"position-title",children:[Object(S.jsx)("span",{className:"position-info-title",children:t["position-info"]}),Object(S.jsx)("span",{className:"history-info-title",children:t["trade-history"]})]}),Object(S.jsxs)("div",{className:"check-position-history ",children:[Object(S.jsx)("div",{className:"btn-position",onClick:function(){return c("position")},children:t["current-position"]}),Object(S.jsx)("div",{className:"btn-history",onClick:function(){return c("history")},children:t["trade-history"]})]})]}),Object(S.jsxs)("div",{className:"pos-his-info ",children:[Object(S.jsx)(V,{lang:t}),Object(S.jsx)(ne,{lang:t})]})]})},oe=n(674),se=n(687),re=(n(688),n(689),n(718),n(719),n(720),n(667));t.default=Object(I.b)("wallet")(Object(I.c)((function(e){var t=e.wallet,n=e.lang;return Object(i.useEffect)((function(){return document.querySelector(".desktop").style.minWidth="1903px",function(){document.querySelector(".desktop").style.minWidth=""}}),[t.detail.account]),Object(S.jsxs)("div",{className:"trade-container",children:[Object(S.jsx)(re.a,{lang:n}),Object(S.jsxs)("div",{className:"trade-body",children:[Object(S.jsx)(se.a,{lang:n}),Object(S.jsxs)("div",{className:"trade-pro",children:[Object(S.jsx)("div",{className:"left",children:Object(S.jsx)(oe.a,{isPro:!0,lang:n})}),Object(S.jsxs)("div",{className:"right",children:[Object(S.jsx)(D,{wallet:t,lang:n}),Object(S.jsx)(ie,{lang:n})]})]})]})]})})))}}]);
//# sourceMappingURL=19.76ffe89b.chunk.js.map